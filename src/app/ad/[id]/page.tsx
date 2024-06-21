'use server';

import { auth } from '@/auth';
import AdCar from '@/components/Ad/AdCar';
import AdProduct from '@/components/Ad/AdProduct';
import { connect } from '@/libs/helpers';
import { ProductAd, ProductAdModel } from '@/models/ProductAd';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string };
};

export default async function SingleAdPage(args: Props) {
  const session = await auth();
  await connect();
  const findAd = await ProductAdModel.findById(args.params.id);
  const adDoc: ProductAd = JSON.parse(JSON.stringify(findAd));

  if (!adDoc) {
    return 'Not Found';
  }

  console.log(adDoc.adType);

  let switchComponent;

  switch (adDoc.adType) {
    case 'product':
      switchComponent = <AdProduct ad={adDoc} session={session} />;
      break;
    case 'car':
      switchComponent = <AdCar ad={adDoc} session={session} />;
      break;
    default:
      switchComponent = 'null';
  }

  return <>{switchComponent}</>;
}
