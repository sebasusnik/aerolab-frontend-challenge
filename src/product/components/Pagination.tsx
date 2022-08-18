import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Pagination: React.FC<Props> = ({children}) => {
  return <div>{children}</div>;
};

export default Pagination;
