import React, {useEffect, useRef, useState} from 'react';

import CTA from './CTA';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {Amount, ButtonVariants} from '~layout/types';

interface Props {
  points: number;
  closeAeroPay: () => void;
  addPoints: (amount: number) => Promise<void>;
}

const AMOUNTS: Amount[] = [Amount.min, Amount.mid, Amount.max];

const AeroPay: React.FC<Props> = ({closeAeroPay, addPoints, points}) => {
  const [amount, setAmount] = useState<number>(Amount.mid);

  const scrollDirection: ScrollDirection = useScrollDirection();

  const aeroPayHeadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aeroPayHeadingRef.current?.focus) aeroPayHeadingRef.current?.focus();
  }, []);

  return (
    <div className="aeropay-wrapper">
      <div
        className={`aeropay ${scrollDirection === ScrollDirection.down ? 'top' : ''}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div ref={aeroPayHeadingRef} tabIndex={-1} className="aeropay-header flex">
          <h2 className="text-lg">Add Balance</h2>
          <span className="sr-only"> or press escape to close. </span>
          <img
            className="icon-sm"
            src="/icons/cross-active.svg"
            aria-hidden="true"
            alt=""
            onClick={() => closeAeroPay()}
          />
          <span className="sr-only">Select an amount, {`${amount} is selected now`}: </span>
        </div>
        <div className="aeropay-content flex">
          <div className="aerocard clr-100 bg-900 flex elevation" aria-label="credit card">
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
          <div role="aropay" className="aeropay-amount-cta flex">
            <div className="aeropay-amount flex stretch" tabIndex={-1}>
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  role={`Select ${a} to add`}
                  className={`number-selector ${a === amount ? 'active' : 'bg-100'}  flex`}
                  onClick={() => setAmount(a)}
                >
                  {a === amount && amount === 1000 && (
                    <span className="sr-only">{`${amount} is selected now`}: </span>
                  )}
                  {a === amount && amount === 5000 && (
                    <span className="sr-only">{`${amount} is selected now`}: </span>
                  )}
                  {a === amount && amount === 7500 && (
                    <span className="sr-only">{`${amount} is selected now`}: </span>
                  )}
                  <span className={`text-lg ${a === amount ? 'accent' : 'brand'}`}>{a}</span>
                </button>
              ))}
            </div>
            <button onClick={() => addPoints(amount)}>
              <span className="sr-only">{`Now you have ${points} points, press enter to`}</span>
              <CTA
                variant={ButtonVariants.Default}
                left={null}
                right="Add Points"
                ariaLabel={`Add ${amount} points.`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeroPay;
