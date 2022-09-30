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
      <PagerButton left={true} action={() => prev()} disable={currentPage === (1 || 0)} />
      <p className="text-lg secondary">
        Page:{' '}
        <span className="brand">
          {maxPage === 0 ? 0 : currentPage} of {maxPage}
        </span>
      </p>
      <PagerButton action={() => next()} disable={currentPage === maxPage || maxPage === 0} />
    </div>
  );
};

export default Pager;
