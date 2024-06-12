'use client';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignIn } from './SignIn';
import { SignOut } from './SignOut';
import { Session } from 'next-auth';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = ({ session }: { session: Session | null }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <header className="flex justify-between px-6 border h-16 items-center">
      <Link href="/">
        <span className="text-2x1 font-bold text-blue-500">MarketPlace</span>
      </Link>
      <nav className="flex gap-6 items-center">
        <Link href="/new">
          <span className="mr-2 bg-blue-500 text-white rounded-md py-1 px-4 inline-flex items-center gap-2">
            <FontAwesomeIcon icon={faPlus} className="h-4" />
            Create New Add
          </span>
        </Link>

        {!session?.user && <SignIn />}
        {session?.user && (
          <>
            <div className="flex gap-3 items-center">
              <button onClick={() => setDropDown((prev) => !prev)}>
                <Image
                  src={session.user.image as string}
                  alt={'avatar'}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </button>
              {dropDown && (
                <>
                  <div
                    onClick={() => setDropDown(false)}
                    className="bg-black/10 fixed inset-0 z-40"
                  ></div>
                  <div className="absolute z-50 right-2 top-10 bg-white rounden-md w-32 py-1 px-4 border rounded-md">
                    <Link href="/profile">
                      <button className="p-1 text-black block text-center w-full">
                        Profile
                      </button>
                    </Link>
                    <Link href="/my-ads">
                      <button className="p-1 text-black block text-center w-full">
                        My adds
                      </button>
                    </Link>
                    <SignOut />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
