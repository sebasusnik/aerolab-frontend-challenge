import React from 'react';

interface Props {
  disable?: boolean;
  left?: boolean;
}

const PagerButton: React.FC<Props> = ({disable, left}) => {
  if (disable)
    return (
      <button className="pager-button disable flex">
        <img
          className={`chevron ${left ? 'left' : ''} icon-sm`}
          src="/icons/chevron-disable.svg"
          alt=""
        />
      </button>
    );

  return (
    <button className="pager-button flex bg-brand-light">
      <img
        className={`chevron ${left ? 'left' : ''} icon-sm`}
        src="/icons/chevron-default.svg"
        alt=""
      />
    </button>
  );
};

export default PagerButton;
