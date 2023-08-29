// 'use client';

import { FilterableUserList } from '@/components/users/FilterableUserList';
import { USERS } from '@/components/users/constants/users';
import { useEffect, useState } from 'react';

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export default function App() {
  // const [users, setUsers] = useState<User[]>();
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch('https://jsonplaceholder.org/users');
  //     if (res?.ok) {
  //       const data = await res.json();
  //       console.log(data);

  //       setUsers(data);
  //     }
  //   };

  //   getUsers();
  // }, []);

  // if (!users?.length) return <div>Loading...</div>;

  return <FilterableUserList users={USERS} />;
  // return (
  //   <div>
  //     <User />
  //     <div>
  //       <span>Name: John.</span>
  //       <span>Birth date: 2001-11-03</span>
  //       <span>Age: 35</span>
  //     </div>
  //   </div>
  // );
}

function User() {
  return (
    <div>
      <span>Name: John.</span>
      <span>Birth date: 2001-11-03</span>
      <span>Age: 35</span>
    </div>
  );
}
