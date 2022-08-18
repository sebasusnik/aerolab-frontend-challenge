import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import api from '~product/api';
import {Product} from '~product/types';
import IntroSection from '~templates/Home/Components/IntroSection';
import LandingSection from '~templates/Home/Components/LandingSection';
import HomePage from '~templates/Home/HomePage';

const ProductList = dynamic(() => import('~product/ProductsList'));

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({products}) => {
  return (
    <>
      <Head>
        <title>Aerolab - DEVELOPER CHALLENGE</title>
        <meta name="title" content="Aerolab - DEVELOPER CHALLENGE" />
        <meta
          name="description"
          content="This is my resolution of the aerolab frontend developer challenge. If you like my work please contact me as /sebasusnik en linkedin or github."
        />
        <link rel="icon" href="/icons/aerolab-logo-2.svg" />
      </Head>

      <HomePage>
        <LandingSection />
        <IntroSection />
      </HomePage>

      <ProductList products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const products = await api.list();

  return {
    props: {
      products,
    },
    revalidate: 75600, // 21hs
  };
};

export default Home;
