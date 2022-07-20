import React from 'react';

import {ButtonVariants} from '~layout/types';

interface Props {
  variant: ButtonVariants;
  left: string | null;
  right: string | number | null;
}

const CTA: React.FC<Props> = ({variant, left, right}) => {
  if (variant === ButtonVariants.Disable)
    return (
      <button>
        <div className="cta disable">
          {left && <span className="text-lg">{left}</span>}
          <img className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
          {right && <span className="text-lg">{right}</span>}
        </div>
      </button>
    );

  if (variant === ButtonVariants.Processing)
    return (
      <button>
        <div className="cta processing">
          <span className="text-lg">{variant}</span>
        </div>
      </button>
    );

  return (
    <div className="cta">
      {left && <span className="text-lg accent">{left}</span>}
      <img className="icon-sm" src="/icons/aeropay-3.svg" alt="" />
      {right && <span className="text-lg accent">{right}</span>}
    </div>
  );
};

export default CTA;
