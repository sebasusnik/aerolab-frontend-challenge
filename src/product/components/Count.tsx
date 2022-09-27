import React from 'react';

interface Props {}

const Count: React.FC<Props> = () => {
  return (
    <div className="count">
      <p className="text-lg secondary">
        <span className="brand">8 of 32</span> products
      </p>
    </div>
  );
};

export default Count;
