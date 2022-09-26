import React, {useState} from 'react';

import useOutsideClick from '~layout/hooks/useOutsideClick';
import {Filters} from '~product/types';

interface Props {
  currentCategory: string;
  setFilter: (filter: Filters) => void;
}

const FILTERS = Object.values(Filters);

const Filter: React.FC<Props> = ({currentCategory, setFilter}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="filter-wrapper flex">
      <label className="text-lg secondary noselect" id="filterLabel">
        Filter by:
      </label>
      <div className="hybrid-select">
        <select
          className="filter-native-select text-lg secondary"
          id=""
          value={currentCategory}
          onChange={e => setFilter(e.target.value as Filters)}
        >
          {FILTERS.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="filter-custom-select" aria-hidden="true" onClick={handleToggleOpen}>
          {isOpen && (
            <div ref={ref} className="filter-list flex">
              {FILTERS.map(category => (
                <button
                  key={category}
                  className={`filter-options ${category === currentCategory ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  <span className="text-lg secondary noselect">{category}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <img
          className="native-select-arrow"
          src="/icons/select-arrow.svg"
          alt=""
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default Filter;
