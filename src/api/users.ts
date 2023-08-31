import { User } from '@/pages/users/types';

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.org/users');
  if (!res?.ok) throw new Error('Failed to fetch users');

  const users: User[] = await res.json();

  return users;
};

// export const getUserById = async (userId: string) => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.org/users/${userId}`);
//     if (!res?.ok) throw new Error('Failed to fetch user');

//     const users: User = await res.json();

//     return users;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

export const getUserById = async (userId: string) => {
  return fetch(`https://jsonplaceholder.org/users/${userId}`)
    .then((res) => {
      if (!res?.ok) throw new Error('Failed to fetch user');
      return res.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
