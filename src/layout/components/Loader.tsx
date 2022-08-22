import React from 'react';

const Loader: React.FC = () => {
  return (
    <svg className="spinner" viewBox="0 0 50 50">
      <defs>
        <linearGradient
          id="g1"
          gradientUnits="userSpaceOnUse"
          x1="-8.21%"
          y1="37.13%"
          x2="108.21%"
          y2="62.87%"
        >
          <stop stopColor="#1970eb" />
          <stop offset="1.066" stopColor="#ff7ffe" />
        </linearGradient>
      </defs>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="6"
        stroke="url(#g1)"
      />
    </svg>
  );
};

export default Loader;
