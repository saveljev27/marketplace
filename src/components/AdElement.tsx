import Link from 'next/link';
import UploadThumbnail from './UploadThumbnail';
import { ProductAd } from '@/models/ProductAd';

export default function AdElement({ ad }: { ad: ProductAd }) {
  return (
    <div className="min-h-24 flex flex-col justify-start">
      {ad.files?.length > 0 && (
        <div className="rounded-md overflow-hidden relative">
          <UploadThumbnail onClick={() => {}} file={ad.files[0]} />
          <Link href={`/ad/${ad._id}`} className="absolute inset-0"></Link>
        </div>
      )}
      <div>
        <p className="mt-1 font-bold">${ad.price}</p>
        <h2 className="mt-1">{ad.title}</h2>
      </div>
    </div>
  );
}
