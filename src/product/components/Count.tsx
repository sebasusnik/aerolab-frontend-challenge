import React from 'react';

interface Props {
  currentCount?: number;
  totalCount?: number;
}

const Count: React.FC<Props> = ({currentCount, totalCount}) => {
  return (
    <div className="count">
      <p className="text-lg secondary">
        <span className="brand">
          {currentCount} of {totalCount}
        </span>{' '}
        products
      </p>
    </div>
  );
};

export default Count;
