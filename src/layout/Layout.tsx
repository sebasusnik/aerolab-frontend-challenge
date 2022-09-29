import React from 'react';

import dynamic from 'next/dynamic';

import Footer from './components/Footer';
import Topbar from './components/Topbar';

const ScrollToTop = dynamic(() => import('./components/ScrollToTop'), {
  ssr: false,
});

const WavesBg = dynamic(() => import('./components/WavesBg'));

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <header>
        <Topbar />
        <div className="top-bar-spacer" />
      </header>
      <main>
        <WavesBg />
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
