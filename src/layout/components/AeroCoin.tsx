import React, {useEffect, useRef} from 'react';

import Loader from './Loader';
import {usePressObserver} from '~layout/hooks/useKeyPress';
import useMediaQuery from '~layout/hooks/useMediaQuery';
import {useUser, useUserStatus} from '~user/hooks';
import {UserStatus} from '~user/types';

interface Props {
  isOpen: boolean;
  points: number;
  closeAeroPay: () => void;
  handleClick: () => void;
  children: React.ReactNode;
}

const AeroCoin: React.FC<Props> = ({isOpen, points, closeAeroPay, handleClick, children}) => {
  const aeroCoinRef = useRef<HTMLButtonElement | null>(null);
  const pressed = usePressObserver({watchKey: 'Escape'});

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const user = useUser();
  const status = useUserStatus();

  // This Effect closes Aeropay when press Escape
  useEffect(() => {
    if (!pressed) return;
    if (isOpen) closeAeroPay();
    if (aeroCoinRef.current?.focus) aeroCoinRef.current?.focus();
  }, [closeAeroPay, isOpen, pressed]);

  if (user.id === '' || status === UserStatus.pending) {
    return (
      <button
        ref={aeroCoinRef}
        type="button"
        className={`aerocoin flex ${isOpen ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className="aerocoin-content flex">
          <img className="icon-lg" aria-hidden="true" src="/icons/aeropay-1.svg" />
          <div className="aerocoin-loader flex">
            <Loader />
          </div>
        </div>
        <img
          aria-hidden="true"
          src="/icons/chevron-active.svg"
          className={`aerocoin-chevron icon-sm ${isOpen ? 'active' : ''}`}
        />
      </button>
    );
  }

  return (
    <div className="aerocoin-wrapper">
      <button
        ref={aeroCoinRef}
        type="button"
        className={`aerocoin flex ${isOpen ? 'active' : ''}`}
        onClick={handleClick}
      >
        <div className="aerocoin-content flex">
          <img className="icon-lg" aria-hidden="true" src="/icons/aeropay-1.svg" />
          <span className="sr-only">You have</span>
          <span className="text-lg brand">
            {isDesktop ? points.toLocaleString('es-AR') : points}
          </span>
          <span className="sr-only">points</span>
        </div>
        <img
          aria-hidden="true"
          src="/icons/chevron-active.svg"
          className={`aerocoin-chevron icon-sm ${isOpen ? 'active' : ''}`}
        />
      </button>
      {isOpen && children}
    </div>
  );
};

export default AeroCoin;
