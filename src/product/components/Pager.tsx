import React from 'react';

import PagerButton from './PagerButton';

interface Props {
  currentPage: number;
  maxPage: number;
  next: () => void;
  prev: () => void;
}

const Pager: React.FC<Props> = ({currentPage, maxPage, next, prev}) => {
  return (
    <div
      className="pager flex"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <PagerButton left={true} action={() => prev()} disable={currentPage === 1} />
      <p className="text-lg secondary">
        Page:{' '}
        <span className="brand">
          {currentPage} of {maxPage}
        </span>
      </p>
      <PagerButton action={() => next()} disable={currentPage === maxPage} />
    </div>
  );
};

export default Pager;
