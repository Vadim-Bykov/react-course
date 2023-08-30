import { User } from '@/pages/users/components/User';
import { USERS } from '@/pages/users/constants/users';
import React from 'react';

interface Props {
  params: { userId: string };
}

export default function UserPage({ params: { userId } }: Props) {
  const user = USERS.find((user) => user.id === +userId);
  return (
    <>
      <div>User id: {userId}</div>
      {user && <User user={user} detailsLink={false} />}
    </>
  );
}
