import { FilterableUserList } from '@/pages/users/FilterableUserList';
import { USERS } from '@/pages/users/constants/users';
import React from 'react';

export default function UsersPage() {
  return <FilterableUserList users={USERS} />;
}
