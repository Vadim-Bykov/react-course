import React from 'react';
import { NavItemType } from '../Navbar';
import Link from 'next/link';

interface Props {
  item: NavItemType;
}

export const NavItem: React.FC<Props> = ({ item: { name, route } }) => {
  return (
    <Link href={route} className='border py-2 px-6 rounded-lg bg-blue-200 '>
      {name}
    </Link>
  );
};
