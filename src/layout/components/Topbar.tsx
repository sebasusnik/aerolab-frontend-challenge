import React, {useState} from 'react';

import dynamic from 'next/dynamic';

import AeroCoin from './AeroCoin';
import Logo from './Logo';
import SkipToContent from './SkipToContent';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {usePoints} from '~user/hooks';
const Aeropay = dynamic(() => import('./AeroPay'));

const Navbar: React.FC = () => {
  const [animation, setAnimation] = useState<'open' | 'close'>('close');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openAeroPay = () => {
    setAnimation('open');
    setIsOpen(true); // this function toggles the isOpen state
  };

  const closeAeroPay = async () => {
    setAnimation('close');
    await new Promise(resolve => setTimeout(resolve, 200));
    setIsOpen(false); // this function set isOpen to false
  };
  // When scroll direction is down, topbar hides
  const scrollDirection: ScrollDirection = useScrollDirection();

  const [points, addPoints] = usePoints();

  return (
    <div className={`topbar ${scrollDirection === ScrollDirection.down ? 'hide' : ''} bg-blured`}>
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
