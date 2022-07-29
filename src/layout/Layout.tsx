import React, {useState} from 'react';

import dynamic from 'next/dynamic';

const Topbar = dynamic(() => import('./components/Topbar'), {
  ssr: false,
});

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeAeropay = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <Topbar handleClick={handleClick} isOpen={isOpen} closeAeroPay={closeAeropay} />
        <div className="top-bar-spacer" />
        <div className="waves-bg" />
      </header>
      <main
        onClick={() => {
          !!isOpen && setIsOpen(false);
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
