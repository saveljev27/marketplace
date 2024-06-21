'use server';

import { auth } from '@/auth';
import AdElement from '@/components/Ad/AdElement';
import { connect } from '@/libs/helpers';
import { ProductAd, ProductAdModel } from '@/models/ProductAd';

export default async function page() {
  const session = await auth();
  await connect();
  const findUserAds = await ProductAdModel.find(
    {
      userEmail: session?.user?.email,
    },
    null,
    {
      sort: { createdAt: -1 },
    }
  );
  const adDoc: ProductAd[] = JSON.parse(JSON.stringify(findUserAds));

  return (
    <div className="container mx-auto my-8">
      <h1 className="page__title">My Ads</h1>
      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {adDoc?.map((ad) => (
          <AdElement key={ad._id} ad={ad} />
        ))}
      </div>
    </div>
  );
}
