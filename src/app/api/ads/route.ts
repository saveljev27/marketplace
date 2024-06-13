import { auth } from '@/auth';
import { connect } from '@/libs/helpers';
import { ProductAd, ProductAdModel } from '@/models/ProductAd';
import { FilterQuery } from 'mongoose';

export async function GET(req: Request, res: Response) {
  await connect();
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get('search');
  const categoryQuery = searchParams.get('category');
  const conditionQuery = searchParams.get('condition');
  const min = searchParams.get('min');
  const max = searchParams.get('max');

  const filter: FilterQuery<ProductAd> = {};

  if (searchQuery) {
    filter.title = { $regex: '.*' + searchQuery + '.*', $options: 'i' };
  }

  if (categoryQuery) {
    filter.category = categoryQuery;
  }

  if (conditionQuery) {
    filter.condition = conditionQuery;
  }

  if (min && !max) filter.price = { $gte: min };
  if (max && !min) filter.price = { $lte: max };
  if (min && max) filter.price = { $gte: min, $lte: max };

  const adsDocs = await ProductAdModel.find(filter, null, {
    sort: { createdAt: -1 },
  });
  return Response.json(adsDocs);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const deleteQueryId = searchParams.get('id');
  await connect();
  const adDoc = await ProductAdModel.findById(deleteQueryId);
  const session = await auth();
  if (!adDoc || adDoc.userEmail !== session?.user?.email) {
    return Response.json(false);
  }
  await ProductAdModel.findByIdAndDelete(deleteQueryId);
  return Response.json(true);
}
