'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <>
      <p>Not Signed in</p>
      <button
        onClick={() => signIn()}
        className='bg-orange-500 text-white px-3 py-1 rounded'
      >
        Sign In
      </button>
    </>
  );
}
