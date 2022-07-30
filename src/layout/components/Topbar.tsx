import React from 'react';

import dynamic from 'next/dynamic';

import AeroCoin from './AeroCoin';
import Logo from './Logo';
import SkipToContent from './SkipToContent';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {usePoints, useUser, useUserStatus} from '~user/hooks';
import {UserStatus} from '~user/types';
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
  const user = useUser();
  const status = useUserStatus();

  if (user.id === '' || status === UserStatus.pending)
    return (
      <div className="topbar">
        <div className="container">
          <SkipToContent />
          <div className="topbar-content flex">
            <Logo />
            <AeroCoin
              isOpen={false}
              closeAeroPay={closeAeroPay}
              handleClick={handleClick}
              points={points}
              loading={true}
            >
              <Aeropay closeAeroPay={closeAeroPay} addPoints={addPoints} points={points} />
            </AeroCoin>
          </div>
        </div>
      </div>
    );

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
            loading={false}
          >
            <Aeropay closeAeroPay={closeAeroPay} addPoints={addPoints} points={points} />
          </AeroCoin>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
