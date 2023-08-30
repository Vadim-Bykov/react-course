import React from 'react';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='bg-zinc-300 -m-5 p-5 min-h-screen'>{children}</div>;
}
