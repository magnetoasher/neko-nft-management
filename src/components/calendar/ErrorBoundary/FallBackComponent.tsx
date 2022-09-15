import React from 'react';

type FallBackComponentProps = {
  message: string;
};

export const FallBackComponent: React.FC<FallBackComponentProps> = ({
  message,
}) => {
  return <h2 style={{ color: 'red' }}>{message}</h2>;
};
