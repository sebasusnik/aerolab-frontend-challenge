import React from 'react';

import dynamic from 'next/dynamic';

import AeroCoin from './AeroCoin';
import Logo from './Logo';
import SkipToContent from './SkipToContent';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {usePoints} from '~user/hooks';
const Aeropay = dynamic(() => import('./AeroPay'), {
  ssr: false,
});

interface Props {
  closeAeroPay: () => void;
  handleClick: () => void;
  isOpen: boolean;
}

const Navbar: React.FC<Props> = ({closeAeroPay, handleClick, isOpen}) => {
  // When scroll direction is down, topbar hides
  const scrollDirection: ScrollDirection = useScrollDirection();

  const [points, addPoints] = usePoints();

  return (
    <div
      className={`topbar ${scrollDirection === ScrollDirection.down ? 'occult' : ''} bg-blured`}
      onClick={() => {
        !!isOpen && handleClick();
      }}
    >
      <div className="container">
        <SkipToContent />
        <div className="topbar-content flex">
          <Logo />
          <AeroCoin
            isOpen={isOpen}
            closeAeroPay={closeAeroPay}
            handleClick={handleClick}
            points={points}
          >
            <Aeropay closeAeroPay={closeAeroPay} addPoints={addPoints} points={points} />
          </AeroCoin>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
