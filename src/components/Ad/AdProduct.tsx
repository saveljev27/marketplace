'use server';
import Gallery from '@/components/Gallery';
import DeleteAdBtn from '@/components/UI/DeleteAdBtn';
import { formatMoney } from '@/libs/helpers';
import { ProductAd } from '@/models/ProductAd';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Session } from 'next-auth';
import Link from 'next/link';

type AdProduct = {
  ad: ProductAd;
  session: Session | null;
};

export default async function AdProduct({ ad, session }: AdProduct) {
  return (
    <div className="flex-1 flex p-8 justify-center">
      <div className="w-2/4 border rounded-md p-8 grow shrink-1">
        <div className="flex gap-3 justify-between">
          <h1 className="text-lg font-bold">{ad.title}</h1>
          {session && session?.user?.email === ad.userEmail && (
            <div className="flex gap-3 justify-center items-center">
              <Link href={`/edit/${ad._id}`} className="edit_btn">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-blue-500 "
                />
              </Link>
              <DeleteAdBtn id={ad._id} />
            </div>
          )}
        </div>
        <label>Price</label>
        <p className="font-bold text-blue-500 text-lg">
          {formatMoney(ad.price)}
        </p>
        <label>Description</label>
        <p className="text-sm">
          {!ad.description ? 'No description' : ad.description}
        </p>
        <label>Category</label>
        <p className="text-sm first-letter:uppercase">{ad.category}</p>
        <label>Condition</label>
        <p className="text-sm first-letter:uppercase">{ad.condition}</p>
        <label>Contacts</label>
        <p>{ad.contact}</p>
      </div>
      <div className="w-2/5 flex flex-col relative p-2">
        <Gallery files={ad.files} />
      </div>
    </div>
  );
}
