import clsx from 'clsx';
import { NavItem } from './components/NavItem';

export interface NavItemType {
  name: string;
  route: string;
}

const NAV_ITEMS: NavItemType[] = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Users',
    route: '/users',
  },
  {
    name: 'Posts',
    route: '/posts',
  },
];

export const Navbar = () => {
  const items = NAV_ITEMS.map((item) => (
    <NavItem key={item.name} item={item} />
  ));

  return (
    <nav
      className={clsx([
        'flex justify-evenly items-center w-screen',
        'bg-teal-400',
        'fixed h-[80px]',
      ])}
    >
      {items}
    </nav>
  );
};
