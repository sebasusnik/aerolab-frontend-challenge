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
            role="menuitemradio"
            className={`sort-button ${sort === activeSort ? 'bg-brand' : ''}`}
            aria-checked={sort === activeSort}
            aria-labelledby={`${sort.toLowerCase().split(' ').join('')}`}
            onClick={e => {
              e.stopPropagation();
              changeSort(sort);
            }}
          >
            <span
              id={`${sort.toLowerCase().split(' ').join('')}`}
              className={`text-lg ${sort === activeSort ? 'accent' : 'brand'}`}
            >
              {sort}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortSelector;

/* import React, {useState} from 'react';

import {Sort} from '~product/types';

interface Props {
  activeSort: Sort;
  changeSort: (sort: Sort) => void;
}

const SORT_OPTIONS: Sort[] = [Sort.MostRecent, Sort.LowestPrice, Sort.HighestPrice];

const SortSelector: React.FC<Props> = ({activeSort, changeSort}) => {
  const [focused, setFocused] = useState<Sort>(Sort.MostRecent);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    changeSort(focused);
  }

  return (
    <form className="sort-wrapper flex" onSubmit={event => handleSubmit(event)}>
      <p className="text-lg secondary noselect">Sort by:</p>
      <div className="radio-toolbar flex" role="radiogroup">
        {SORT_OPTIONS.map(sort => (
          <React.Fragment key={sort}>
            <input
              type="radio"
              aria-hidden={true}
              id={`radio${sort.toLowerCase().split(' ').join('')}`}
              name="radio-filter"
              value={sort}
              defaultChecked={activeSort === sort}
              aria-checked={activeSort === sort}
              onChange={e => setFocused(e.target.value as Sort)}
            />
            <label
              className={`${sort === activeSort ? 'bg-brand' : 'bg-100'}`}
              htmlFor={`radio${sort.toLowerCase().split(' ').join('')}`}
              onClick={() => changeSort(sort)}
            >
              <span className={`text-lg ${sort === activeSort ? 'accent' : 'brand'}`}>{sort}</span>
            </label>
          </React.Fragment>
        ))}
        <button type="submit" tabIndex={-1} />
      </div>
    </form>
  );
};

export default SortSelector;
 */
