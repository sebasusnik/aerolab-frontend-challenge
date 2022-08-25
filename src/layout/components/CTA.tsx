import React from 'react';

import {ButtonVariants} from '~layout/types';

interface Props {
  variant?: ButtonVariants;
  left?: string;
  right?: string | number;
  ariaLabel?: string;
  action?: () => void;
}

const defaultProps: Props = {
  variant: ButtonVariants.Default,
};

const CTA: React.FC<Props> = ({variant, left, right, ariaLabel, action}) => {
  if (variant === ButtonVariants.Disable)
    return (
      <button aria-hidden="true" className="cta disable">
        {left && <span className="text-lg secondary">{left}</span>}
        <img className="icon-sm" src="/icons/aeropay-disable.svg" alt="" />
        {right && <span className="text-lg secondary">{right}</span>}
      </button>
    );

  if (variant === ButtonVariants.Processing)
    return (
      <button aria-hidden="true" className="cta processing">
        <div>
          <span className="text-lg accent">{variant}</span>
        </div>
      </button>
    );

  if (variant === ButtonVariants.Skeleton)
    return (
      <button aria-hidden="true" className="cta skeleton">
        <div>
          <span className="text-lg accent" />
        </div>
      </button>
    );

  return (
    <button aria-label={ariaLabel} className="cta" onClick={action}>
      {left && <span className="text-lg accent">{left}</span>}
      <img className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
      {right && <span className="text-lg accent">{right}</span>}
    </button>
  );
};

CTA.defaultProps = defaultProps;

export default CTA;
