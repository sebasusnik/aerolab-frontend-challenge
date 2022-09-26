import React from 'react';

import {Sort} from '~product/types';

interface Props {
  activeSort: Sort;
  changeSort: (sort: Sort) => void;
}

const SORT_OPTIONS: Sort[] = [Sort.MostRecent, Sort.LowestPrice, Sort.HighestPrice];

const SortSelector: React.FC<Props> = ({activeSort, changeSort}) => {
  return (
    <div className="sort-wrapper flex" role="">
      <p className="text-lg secondary noselect">Sort by:</p>
      <div className="sort-toolbar flex" role="menubar" aria-label="sortmenu">
        {SORT_OPTIONS.map(sort => (
          <button
            key={sort}
            role="menuitem"
            className={`sort-button ${sort === activeSort ? 'bg-brand' : ''}`}
            aria-checked={sort === activeSort}
            aria-labelledby={sort}
            onClick={() => changeSort(sort)}
          >
            <span id={sort} className={`text-lg ${sort === activeSort ? 'accent' : 'brand'}`}>
              {sort}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortSelector;
