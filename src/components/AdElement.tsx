'use client';

import Link from 'next/link';
import UploadThumbnail from './UploadThumbnail';
import { ProductAd } from '@/models/ProductAd';
import { formatMoney } from '@/libs/helpers';

export default function AdElement({ ad }: { ad: ProductAd }) {
  return (
    <div className=" min-h-24 flex flex-col ">
      {ad.files?.length > 0 && (
        <div className="rounded-md overflow-hidden relative flex justify-center items-center">
          <UploadThumbnail onClick={() => {}} file={ad.files[0]} />
          <Link href={`/ad/${ad._id}`} className="absolute inset-0"></Link>
        </div>
      )}
      <div className="p-2">
        <p className="mt-2 font-bold">{formatMoney(ad.price)}</p>
        <h2 className="mt-1 text-sm">{ad.title}</h2>
      </div>
    </div>
  );
}
