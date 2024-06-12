'use server';

import Gallery from '@/components/Gallery';
import UploadThumbnail from '@/components/UploadThumbnail';
import UploadView from '@/components/UploadView';
import { connect } from '@/libs/helpers';
import { ProductAdModel } from '@/models/ProductAd';

type Props = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string };
};

export default async function page(args: Props) {
  await connect();
  const adDoc = await ProductAdModel.findById(args.params.id);
  if (!adDoc) {
    return 'Not Found';
  }

  return (
    <div className="flex absolute inset-0 top-16">
      <div className="w-2/4 p-8 grow shrink-0">
        <h1 id="title" className="text-lg font-bold">
          {adDoc.title}
        </h1>
        <label>Price</label>
        <p>${adDoc.price}</p>
        <label>Description</label>
        <p className="text-sm">{adDoc.description}</p>
        <label>Category</label>
        <p className="text-sm first-letter:uppercase">{adDoc.category}</p>
        <label>Condition</label>
        <p className="text-sm first-letter:uppercase">{adDoc.condition}</p>
        <label>Contacts</label>
        <p>{adDoc.contact}</p>
      </div>
      <div className="w-3/5 flex flex-col relative">
        <Gallery files={adDoc.files} />
      </div>
    </div>
  );
}
