import React from 'react';

interface Props {
  message: string;
}

export const ErrorComponent = ({ message }: Props) => {
  return <h1 className='text-2xl text-red-600'>{message}</h1>;
};
