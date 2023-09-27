'use client';

import { getUsers } from '@/api/users';
import { FilterableUserList } from '@/pages/users/FilterableUserList';
import { User } from '@/pages/users/types';
import React, { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  if (!users) return null;

  return <FilterableUserList users={users} />;
}