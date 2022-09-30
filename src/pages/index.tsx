import type {NextPage} from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import LandingSection from '~home/Components/LandingSection';
import WalkthroughSection from '~home/Components/WalkthroughSection';
import HomePage from '~home/HomePage';
import api from '~product/api';
import {Product} from '~product/types';

const ProductsSection = dynamic(() => import('~product/ProductsSection'), {ssr: false});

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
        <WalkthroughSection />
      </HomePage>

      <ProductsSection products={products} />
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
