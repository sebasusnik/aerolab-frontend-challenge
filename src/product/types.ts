export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
}

export enum Sort {
  MostRecent = 'Most recent',
  LowestPrice = 'Lowest Price',
  HighestPrice = 'Highest Price',
}

export enum Filters {
  AllProducts = 'All Products',
  Audio = 'Audio',
  Cameras = 'Cameras',
  Gaming = 'Gaming',
  Laptops = 'Laptops',
  Screens = 'Monitors & TV',
  PCParts = 'PC Accesories',
  Phones = 'Phones',
  SmartHome = 'Smart Home',
  TabletsEReader = 'Tablets & E-Readers',
}
