import React from 'react';

import {ButtonVariants} from '~layout/types';

interface Props {
  variant: ButtonVariants;
  left: string | null;
  right: string | number | null;
  ariaLabel: string;
}

const CTA: React.FC<Props> = ({variant, left, right, ariaLabel}) => {
  if (variant === ButtonVariants.Disable)
    return (
      <button aria-hidden="true">
        <div className="cta disable">
          {left && <span className="text-lg">{left}</span>}
          <img className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
          {right && <span className="text-lg">{right}</span>}
        </div>
      </button>
    );

  if (variant === ButtonVariants.Processing)
    return (
      <button aria-hidden="true">
        <div className="cta processing">
          <span className="text-lg">{variant}</span>
        </div>
      </button>
    );

  return (
    <div aria-label={ariaLabel} className="cta">
      {left && <span className="text-lg accent">{left}</span>}
      <img className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
      {right && <span className="text-lg accent">{right}</span>}
    </div>
  );
};

export default CTA;
