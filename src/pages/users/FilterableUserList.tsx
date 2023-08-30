'use client';

import styles from './styles.module.css';
import { useState } from 'react';
import { UserList } from './components/UserList';
import { SearchBar } from './components/SearchBar';
import { User } from './types';

export function FilterableUserList({ users }: { users: User[] }) {
  const [filterText, setFilterText] = useState('');
  const [ageRestriction, setIAgeRestriction] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      // className={styles.container}
    >
      <SearchBar
        filterText={filterText}
        ageRestriction={ageRestriction}
        onFilterTextChange={setFilterText}
        onAgeRestrictionChange={setIAgeRestriction}
      />
      <UserList
        users={users}
        filterText={filterText}
        ageRestriction={ageRestriction}
      />
    </div>
  );
}
