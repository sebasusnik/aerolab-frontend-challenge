import React from 'react';

import {ButtonVariants} from '~layout/types';

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: ButtonVariants;
  left?: string;
  right?: string;
  ariaLabel?: string;
  action?: () => void;
}

const defaultProps: Props = {
  variant: ButtonVariants.Default,
};

const CTA: React.FC<Props> = ({variant, left, right, ariaLabel, action, type}) => {
  const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };

  if (variant === ButtonVariants.Disable)
    return (
      <button type={type} className="cta disable">
        {left && <span className="text-lg secondary noselect">{left}</span>}
        <img aria-hidden="true" className="icon-sm" src="/icons/aeropay-disable.svg" alt="" />
        {right && <span className="text-lg secondary noselect">{right}</span>}
      </button>
    );

  if (variant === ButtonVariants.Processing)
    return (
      <button type={type} className="cta processing">
        <div>
          <span className="text-lg accent noselect">{variant}</span>
        </div>
      </button>
    );

  if (variant === ButtonVariants.Skeleton)
    return (
      <button type={type} className="cta skeleton">
        <div>
          <span className="text-lg accent noselect" />
        </div>
      </button>
    );

  return (
    <button type={type} aria-label={ariaLabel} className="cta" onClick={action}>
      {left && <span className="text-lg accent noselect">{left}</span>}
      <img aria-hidden="true" className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
      {right && (
        <span className={`text-lg accent ${isNumeric(right) ? '' : 'noselect'}`}>{right}</span>
      )}
    </button>
  );
};

CTA.defaultProps = defaultProps;

export default CTA;
