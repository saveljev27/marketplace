'use server';

import { auth } from '@/auth';
import Gallery from '@/components/Gallery';
import DeleteAdBtn from '@/components/UI/DeleteAdBtn';
import { connect, formatMoney } from '@/libs/helpers';
import { ProductAdModel } from '@/models/ProductAd';
import Link from 'next/link';

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
  const adDoc = JSON.parse(JSON.stringify(findAd));

  if (!adDoc) {
    return 'Not Found';
  }

  return (
    <div className="flex absolute inset-0 top-16">
      <div className="w-2/4 p-8 grow shrink-0">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">{adDoc.title}</h1>
          {session && session?.user?.email === adDoc.userEmail && (
            <div className="flex gap-3 justify-center items-center">
              <Link
                href={`/edit/${adDoc._id}`}
                className="border border-blue-500 py-1 px-4 rounded-md"
              >
                Edit
              </Link>
              <DeleteAdBtn id={adDoc._id} />
            </div>
          )}
        </div>
        <label>Price</label>
        <p className="font-bold">{formatMoney(adDoc.price)}</p>
        <label>Description</label>
        <p className="text-sm">{adDoc.description}</p>
        <label>Category</label>
        <p className="text-sm first-letter:uppercase">{adDoc.category}</p>
        <label>Condition</label>
        <p className="text-sm first-letter:uppercase">{adDoc.condition}</p>
        <label>Contacts</label>
        <p>{adDoc.contact}</p>
      </div>
      <div className="w-3/5 flex flex-col relative p-2">
        <Gallery files={adDoc.files} />
      </div>
    </div>
  );
}
