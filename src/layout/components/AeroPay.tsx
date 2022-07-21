import React, {useEffect, useRef, useState} from 'react';

import CTA from './CTA';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {Amount, ButtonVariants} from '~layout/types';

interface Props {
  closeAeroPay: () => void;
  addPoints: (amount: number) => Promise<void>;
}

const AMOUNTS: Amount[] = [Amount.min, Amount.mid, Amount.max];

const AeroPay: React.FC<Props> = ({closeAeroPay, addPoints}) => {
  const [amount, setAmount] = useState<number>(Amount.mid);

  const scrollDirection: ScrollDirection = useScrollDirection();

  const aeroPayRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (aeroPayRef.current?.focus) aeroPayRef.current?.focus();
  }, []);

  return (
    <div className="aeropay-wrapper">
      <button
        ref={aeroPayRef}
        tabIndex={-1}
        className={`aeropay ${scrollDirection === ScrollDirection.down ? 'top' : ''}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div className="aeropay-header flex">
          <h2 className="text-lg">Add Balance</h2>
          <img
            className="icon-sm"
            src="/icons/cross-active.svg"
            alt=""
            onClick={() => closeAeroPay()}
          />
        </div>
        <div className="aeropay-content flex">
          <div className="aerocard clr-100 bg-900 flex elevation">
            <div className="flex center">
              <span className="text-lg">Aerocard</span>
              <img className="icon-sm" src="/icons/aeropay-2.svg" alt="aerocard logo" />
            </div>
            <div className="flex text-md center">
              <span>John Kite</span>
              <span>07/23</span>
            </div>
          </div>
          <img src="/card-waves.svg" className="card-waves" alt="" />
          <div className="aeropay-amount-cta flex">
            <div className="aeropay-amount flex stretch">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  className={`number-selector ${a === amount ? 'active' : 'bg-100'}  flex`}
                  onClick={() => setAmount(a)}
                >
                  <span className={`text-lg ${a === amount ? 'accent' : 'brand'}`}>{a}</span>
                </button>
              ))}
            </div>
            <button onClick={() => addPoints(amount)}>
              <CTA variant={ButtonVariants.Default} left={null} right="Add Points" />
            </button>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AeroPay;
