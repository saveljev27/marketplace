'use client';
import { signIn } from 'next-auth/react';

export function SignIn({ styles }: { styles?: string }) {
  return (
    <button
      className={styles ? styles : 'outline_btn'}
      onClick={() => signIn('google')}
    >
      Sign In
    </button>
  );
}
