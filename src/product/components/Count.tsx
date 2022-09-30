import React from 'react';

interface Props {
  currentCount: number;
  totalCount: number;
  currentPage: number;
}

const Count: React.FC<Props> = ({currentCount, totalCount, currentPage}) => {
  return (
    <div className="count">
      <p className="text-lg secondary">
        <span className="brand">
          {currentCount * currentPage} of {totalCount}
        </span>{' '}
        products
      </p>
    </div>
  );
};

export default Count;
