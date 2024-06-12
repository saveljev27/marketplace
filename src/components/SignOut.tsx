'use client';
import { signOut } from 'next-auth/react';

export function SignOut() {
  return (
    <button
      className="p-1 text-black block text-center w-full"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}
