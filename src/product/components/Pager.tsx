import React from 'react';

import PagerButton from './PagerButton';

interface Props {}

const Pager: React.FC<Props> = () => {
  return (
    <div
      className="pager flex"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <PagerButton disable={true} left={true} />
      <p className="text-lg secondary">
        Page: <span className="brand">1 of 2</span>
      </p>
      <PagerButton />
    </div>
  );
};

export default Pager;
