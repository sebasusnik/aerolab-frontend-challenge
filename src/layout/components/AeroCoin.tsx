import React, {useEffect, useRef} from 'react';

import Loader from './Loader';
import {usePressObserver} from '~layout/hooks/useKeyPress';
import useMediaQuery from '~layout/hooks/useMediaQuery';
import {useUser, useUserStatus} from '~user/hooks';
import {UserStatus} from '~user/types';

interface Props {
  animation: string;
  isOpen: boolean;
  points: number;
  closeAeroPay: () => void;
  openAeroPay: () => void;
  children: React.ReactNode;
}

const AeroCoin: React.FC<Props> = ({
  isOpen,
  points,
  closeAeroPay,
  openAeroPay,
  animation,
  children,
}) => {
  const aeroCoinRef = useRef<HTMLButtonElement | null>(null);
  const pressed = usePressObserver({watchKey: 'Escape'});

  const isDesktop = useMediaQuery('(min-width: 1260px)');

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
        role="Open aeropay button"
        type="button"
        className="aerocoin flex wait"
      >
        <div className="aerocoin-content flex">
          <img className="icon-md" aria-hidden="true" src="/icons/aeropay-1.svg" />
          <div className="aerocoin-loader flex">
            <Loader />
          </div>
        </div>
        <img aria-hidden="true" src="/icons/chevron-active.svg" className="aerocoin-chevron" />
      </button>
    );
  }

  return (
    <div className="aerocoin-wrapper">
      <button
        ref={aeroCoinRef}
        type="button"
        className={`aerocoin flex ${isOpen ? 'active' : ''}`}
        onClick={openAeroPay}
      >
        <div className="aerocoin-content flex">
          <img className="icon-md noselect" aria-hidden="true" src="/icons/aeropay-1.svg" />
          <span className="sr-only">You have</span>
          <span className="text-lg brand">
            {isDesktop ? points.toLocaleString('es-AR') : points}
          </span>
          <span className="sr-only">points</span>
        </div>
        <img
          aria-hidden="true"
          src="/icons/chevron-active.svg"
          className={`aerocoin-chevron noselect ${animation}`}
        />
      </button>
      {isOpen && children}
    </div>
  );
};

export default AeroCoin;
