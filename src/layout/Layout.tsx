import React, {useState} from 'react';

import SkipToContent from './components/SkipToContent';
import Topbar from './components/Topbar';

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
        <SkipToContent />
        <Topbar handleClick={handleClick} isOpen={isOpen} closeAeroPay={closeAeropay} />
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
