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
          <h1 className="text-lg font-bold">
            <span>{ad.make}</span>
            <span className="ml-1">{ad.model}</span>
          </h1>
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
        <label>Year</label>
        <p className="font-bold">{ad.year}</p>
        <div className="grid grid-cols-3 grid-rows-2">
          <div>
            <label>Mileage</label>
            <p className="font-bold">{ad.mileage}</p>
          </div>
          <div>
            <label>Vehicle Type</label>
            <p className="font-bold first-letter:uppercase">{ad.category}</p>
          </div>
          <div>
            <label>Body Style</label>
            <p className="font-bold first-letter:uppercase">{ad.bodystyle}</p>
          </div>
          <div>
            <label>Condition</label>
            <p className="font-bold first-letter:uppercase">{ad.condition}</p>
          </div>
          <div>
            <label>Fuel Type</label>
            <p className="font-bold first-letter:uppercase">{ad.fueltype}</p>
          </div>
          <div>
            <label>Transmission</label>
            <p className="font-bold first-letter:uppercase">
              {ad.transmission}
            </p>
          </div>
        </div>
        <label>Description</label>
        <p className="text-sm">
          {!ad.description ? 'No description' : ad.description}
        </p>
        <label>Contacts</label>
        <p>{ad.contact}</p>
      </div>
      <div className="w-2/5 flex flex-col relative p-2">
        <Gallery files={ad.files} />
      </div>
    </div>
  );
}
