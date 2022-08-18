import React from 'react';

interface Props {
  children: React.ReactNode;
}

const HomePage: React.FC<Props> = ({children}) => {
  return <>{children}</>;
};

export default HomePage;
