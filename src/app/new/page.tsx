'use server';
import { auth } from '@/auth';
import { SignIn } from '@/components/SignIn';
import { faFaceSmile, faHouse, faTv } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default async function NewAddPage() {
  const session = await auth();

  if (!session) {
    return (
      <div className="mt-16 flex flex-col gap-10 justify-center items-center">
        <FontAwesomeIcon icon={faFaceSmile} className="h-20 text-blue-500" />
        <h1>
          You need to
          <span className="ml-1 mr-1">
            <SignIn styles="text-blue-500" />
          </span>
          to create your new ad.
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-16 flex gap-10 justify-center">
      <Link
        href="/new/product"
        className="border border-blue-500  flex flex-col  gap-6 py-3 px-4  items-center text-center max-w-60 rounded-md "
      >
        <FontAwesomeIcon icon={faTv} className="h-10 text-blue-500" />
        <span className="font-bold">Item for sale</span>
        <span className="text-sm">
          Create a single listing for one or more items to sell.
        </span>
      </Link>
      <Link
        href="/new/vehicle"
        className="border border-blue-500 flex flex-col  gap-6 py-3 px-4  items-center text-center max-w-60 rounded-md"
      >
        <FontAwesomeIcon icon={faCar} className="h-10 text-blue-500" />
        <span className="font-bold">Vehicle for sale</span>
        <span className="text-sm">
          Sell a car, truck or other type of vehicle
        </span>
      </Link>
    </div>
  );
}
