import React, {useMemo, useState} from 'react';

import Count from './components/Count';
import Filter from './components/Filter';
import Grid from './components/Grid';
import Pager from './components/Pager';
import SortSelector from './components/Sort';
import {Filters, Product, Sort} from './types';

interface Props {
  products: Product[];
}

const ProductsSection: React.FC<Props> = ({products}) => {
  const [filter, setFilter] = useState<Filters>(Filters.AllProducts);
  const [sort, setSort] = useState<Sort>(Sort.MostRecent);

  const productsData = useMemo(() => {
    let computedProducts = [...products];

    computedProducts = computedProducts.filter(product =>
      filter !== Filters.AllProducts ? product.category === filter : product,
    );

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

    return computedProducts;
  }, [filter, sort, products]);

  return (
    <section id="products" tabIndex={-1} className="products-section container">
      <h2 className="products-section-heading title-md allcaps noselect">
        <span className="brand">Tech</span> <span>Products</span>
      </h2>
      <div className="products-section-controls flex">
        <Filter currentCategory={filter} setFilter={setFilter} />
        <SortSelector activeSort={sort} changeSort={setSort} />
        <Pager />
      </div>
      <Grid products={productsData} />
      <div className="products-section-footer flex">
        <Count />
        <Pager />
      </div>
    </section>
  );
};

export default ProductsSection;
