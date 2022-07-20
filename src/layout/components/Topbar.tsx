import React from 'react';

import AeroCoin from './AeroCoin';
import AeroPay from './AeroPay';
import Logo from './Logo';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {usePoints} from '~user/hooks';

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
    <div className="topbar-wrapper">
      <div
        className={`topbar ${scrollDirection === ScrollDirection.down ? 'occult' : ''} bg-blured`}
        onClick={() => {
          !!isOpen && handleClick();
        }}
      >
        <div className="container">
          <div className="topbar-content flex">
            <Logo />
            <AeroCoin
              isOpen={isOpen}
              closeAeroPay={closeAeroPay}
              handleClick={handleClick}
              points={points}
            >
              <AeroPay closeAeroPay={closeAeroPay} addPoints={addPoints} />
            </AeroCoin>
          </div>
        </div>
      </div>
      <div className="top-bar-spacer" />
    </div>
  );
};

export default Navbar;
