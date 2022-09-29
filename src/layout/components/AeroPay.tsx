import React, {useEffect, useRef, useState} from 'react';

import CTA from './CTA';
import useOutsideClick from '~layout/hooks/useOutsideClick';
import {ScrollDirection, useScrollDirection} from '~layout/hooks/useScrollDirection';
import {Amount} from '~layout/types';
import {useUser} from '~user/hooks';

interface Props {
  points: number;
  closeAeroPay: () => void;
  addPoints: (amount: number) => Promise<void>;
  animation: string;
}

const AMOUNTS: Amount[] = [Amount.min, Amount.mid, Amount.max];

const AeroPay: React.FC<Props> = ({closeAeroPay, addPoints, points, animation}) => {
  const [amount, setAmount] = useState<number>(Amount.mid);

  const user = useUser();

  const scrollDirection: ScrollDirection = useScrollDirection();

  const ref = useOutsideClick(() => closeAeroPay());

  const aeroPayHeadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    aeroPayHeadingRef.current?.focus();
  }, []);

  return (
    <div className="aeropay-wrapper">
      <div
        ref={ref}
        className={`aeropay ${scrollDirection === ScrollDirection.down ? 'top' : ''} ${animation}`}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <div ref={aeroPayHeadingRef} tabIndex={-1} className="aeropay-header flex">
          <h2 className="text-lg">Add Balance</h2>
          <span className="sr-only"> or press escape to close. </span>
          <div onClick={closeAeroPay}>
            <img
              className="icon-sm noselect"
              src="/icons/cross-active.svg"
              aria-hidden="true"
              alt="close icon"
            />
          </div>
          <span className="sr-only">Select an amount, {`${amount} is selected now`}: </span>
        </div>
        <div className="aeropay-content flex">
          <div className="aerocard clr-100 bg-900 flex elevation" aria-label="credit card">
            <div className="flex center">
              <span className="text-lg">Aerocard</span>
              <img className="icon-sm noselect" src="/icons/aeropay-2.svg" alt="aerocard logo" />
            </div>
            <div className="flex text-md center">
              <span>{user.name}</span>
              <span>
                {new Date(user.createDate).toLocaleDateString('es-AR', {
                  month: '2-digit',
                  year: '2-digit',
                })}
              </span>
            </div>
            <img src="/card-waves.svg" className="card-waves noselect" alt="" />
          </div>
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
            <span className="sr-only">{`Now you have ${points} points, press enter to`}</span>
            <CTA
              type="button"
              right="Add Points"
              ariaLabel={`Add ${amount} points.`}
              action={() => addPoints(amount)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeroPay;
