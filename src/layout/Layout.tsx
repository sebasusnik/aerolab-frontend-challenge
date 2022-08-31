import React, {useState} from 'react';

import dynamic from 'next/dynamic';

import Footer from './components/Footer';

const Topbar = dynamic(() => import('./components/Topbar'));

const WavesBg = dynamic(() => import('./components/WavesBg'));

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  const [animation, setAnimation] = useState<'open' | 'close'>('open');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openAeroPay = () => {
    setAnimation('open');
    setIsOpen(true); // this function toggles the isOpen state
  };

  const closeAeroPay = async () => {
    setAnimation('close');
    await new Promise(resolve => setTimeout(resolve, 150));
    setIsOpen(false); // this function set isOpen to false
  };

  return (
    <>
      <header>
        <Topbar
          openAeroPay={openAeroPay}
          isOpen={isOpen}
          closeAeroPay={closeAeroPay}
          animation={animation}
        />
        <div className="top-bar-spacer" />
      </header>
      <main
        onClick={() => {
          !!isOpen && closeAeroPay();
        }}
      >
        <WavesBg />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
