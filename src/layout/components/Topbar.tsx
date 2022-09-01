import React from 'react';

import dynamic from 'next/dynamic';

import AeroCoin from './AeroCoin';
import Logo from './Logo';
import SkipToContent from './SkipToContent';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {usePoints} from '~user/hooks';
const Aeropay = dynamic(() => import('./AeroPay'));

interface Props {
  closeAeroPay: () => void;
  openAeroPay: () => void;
  isOpen: boolean;
  animation: string;
}

const Navbar: React.FC<Props> = ({closeAeroPay, openAeroPay, isOpen, animation}) => {
  // When scroll direction is down, topbar hides
  const scrollDirection: ScrollDirection = useScrollDirection();

  const [points, addPoints] = usePoints();

  return (
    <div
      className={`topbar ${scrollDirection === ScrollDirection.down ? 'hide' : ''} bg-blured`}
      onClick={() => {
        !!isOpen && closeAeroPay();
      }}
    >
      <div className="container">
        <SkipToContent />
        <div className="topbar-content flex">
          <Logo />
          <AeroCoin
            animation={animation}
            isOpen={isOpen}
            closeAeroPay={closeAeroPay}
            openAeroPay={openAeroPay}
            points={points}
          >
            <Aeropay
              animation={animation}
              closeAeroPay={closeAeroPay}
              addPoints={addPoints}
              points={points}
            />
          </AeroCoin>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
