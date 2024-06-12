import { connect } from '@/libs/helpers';
import { ProductAd, ProductAdModel } from '@/models/ProductAd';
import { FilterQuery } from 'mongoose';

export async function GET(req: Request, res: Response) {
  await connect();
  const { searchParams } = new URL(req.url);
  const searchQuery = searchParams.get('search');

  const filter: FilterQuery<ProductAd> = {};

  if (searchQuery) {
    filter.title = { $regex: '.*' + searchQuery + '.*', $options: 'i' };
  }
  const adsDocs = await ProductAdModel.find(filter, null, {
    sort: { createdAt: -1 },
  });
  return Response.json(adsDocs);
}
