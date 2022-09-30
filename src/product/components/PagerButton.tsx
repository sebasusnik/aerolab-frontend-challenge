import React from 'react';

interface Props {
  disable?: boolean;
  left?: boolean;
  action: () => void;
}

const PagerButton: React.FC<Props> = ({disable, left, action}) => {
  return (
    <button className={`pager-button ${disable ? 'disable' : ''} flex`} onClick={action}>
      <img
        className={`chevron ${left ? 'left' : ''} icon-sm`}
        src="/icons/chevron-default.svg"
        alt=""
      />
    </button>
  );
};

export default PagerButton;
