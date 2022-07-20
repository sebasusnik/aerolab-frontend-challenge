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
      <SkipToContent />
      <Topbar handleClick={handleClick} isOpen={isOpen} closeAeroPay={closeAeropay} />
      <main
        onClick={() => {
          !!isOpen && setIsOpen(false);
        }}
      >
        <div className="waves-bg" />
        {children}
      </main>
    </>
  );
};

export default Layout;
