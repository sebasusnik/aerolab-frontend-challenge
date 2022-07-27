import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import heroImage from '~public/illustrations/hero-desktop.png';

const Home: NextPage = () => {
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

      <section id="products" tabIndex={-1} className="container">
        <div className="landing flex">
          <div className="landing-content flex">
            <h1 className="landing-heading flex">
              <span className="text-lg allcaps secondary">Explore the</span> <br />
              <span className="landing-title title-lg">
                <span className="brand">TECH</span> <br />
                <span>ZONE</span>
              </span>
            </h1>
            <p className="text-lg secondary">
              Here you’ll be able to exchange all of your hard-earned Aeropoints and exchange them
              for cool tech.
            </p>
            <a href="#products" className="landing-cta cta">
              <span className="text-lg accent">VIEW ALL PRODUCTS</span>
              <img className="cta-arrow icon-lg" src="/icons/down-arrow.svg" alt="" />
            </a>
          </div>
          <div className="landing-illustration">
            {/*    image optimized    */}
            <Image src={heroImage} layout="fill" objectFit="scale-down" quality={100} />
          </div>
        </div>
      </section>

      <footer style={styles.footer} />
    </>
  );
};

const styles = {
  footer: {
    height: '100vh',
  },
} as const;

export default Home;
