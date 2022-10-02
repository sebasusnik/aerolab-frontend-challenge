import React, {useEffect, useMemo, useRef, useState} from 'react';

import Count from './components/Count';
import Filter from './components/Filter';
import Grid from './components/Grid';
import Pager from './components/Pager';
import SortSelector from './components/Sort';
import usePagination from './hooks/usePagination';
import {Filters, Product, Sort} from './types';

interface Props {
  products: Product[];
}

const ProductsSection: React.FC<Props> = ({products}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(16);
  const [totalCount, setTotalCount] = useState<number>(products.length);
  const {next, prev, currentPage, maxPage} = usePagination(totalCount, offset);
  const [filter, setFilter] = useState<Filters>(Filters.AllProducts);
  const [sort, setSort] = useState<Sort>(Sort.MostRecent);

  const resizeFunction = () => {
    if (window.innerWidth <= 768) {
      setOffset(8);
    } else if (window.innerWidth <= 1260) {
      setOffset(12);
    } else {
      setOffset(16);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resizeFunction);

    return () => {
      window.removeEventListener('resize', resizeFunction);
    };
  }, []);

  useEffect(() => {
    resizeFunction();
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (window.pageYOffset <= ref.current.offsetTop - 50) return;
      window.scrollTo({top: ref.current.offsetTop - 50});
    }
  }, [currentPage, maxPage]);

  const productsData = useMemo(() => {
    let computedProducts = [...products];

    computedProducts = computedProducts.filter(product =>
      filter !== Filters.AllProducts ? product.category === filter : product,
    );

    setTotalCount(computedProducts.length);

    switch (sort) {
      case Sort.HighestPrice: {
        computedProducts.sort((a, b) => b.cost - a.cost);
        break;
      }
      case Sort.LowestPrice: {
        computedProducts.sort((a, b) => a.cost - b.cost);
        break;
      }
      case Sort.MostRecent:
      default: {
        computedProducts.sort((a, b) => products.indexOf(a) - products.indexOf(b));
        break;
      }
    }

    if (totalCount < offset) {
      return computedProducts;
    }

    const begin = (currentPage - 1) * offset;
    const end = begin + offset;

    return computedProducts.slice(begin, end);
  }, [products, sort, totalCount, offset, currentPage, filter]);

  return (
    <section ref={ref} id="products" tabIndex={-1} className="products-section container">
      <h2 className="products-section-heading title-md allcaps noselect">
        <span className="brand">Tech</span> <span>Products</span>
      </h2>
      <div className="products-section-controls flex">
        <Filter currentCategory={filter} setFilter={setFilter} />
        <SortSelector activeSort={sort} changeSort={setSort} />
        <Pager next={next} prev={prev} currentPage={currentPage} maxPage={maxPage} />
      </div>
      <Grid products={productsData} />
      <div className="products-section-footer flex">
        <Count
          currentCount={productsData.length}
          totalCount={totalCount}
          currentPage={currentPage}
        />
        <Pager next={next} prev={prev} currentPage={currentPage} maxPage={maxPage} />
      </div>
    </section>
  );
};

export default ProductsSection;
