import React, {useState} from 'react';

import Topbar from './components/Topbar';
import WavesBg from './components/WavesBg';

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
      </header>
      <main
        onClick={() => {
          !!isOpen && setIsOpen(false);
        }}
      >
        <WavesBg />
        {children}
      </main>
    </>
  );
};

export default Layout;
