import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

import heroImage from '~public/illustrations/hero-desktop.png';
import browseImage from '~public/illustrations/walkthrough-1-desktop.png';
import chooseImage from '~public/illustrations/walkthrough-2-desktop.png';
import enjoyImage from '~public/illustrations/walkthrough-3-desktop.png';

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

      <div className="container">
        <section className="landing flex">
          <div className="landing-content flex">
            <h1 role="heading" aria-level={1} className="landing-heading flex">
              <span className="text-lg allcaps secondary">Explore the</span> <br />
              <span className="landing-title title-lg">
                <span className="brand">TECH</span> <br />
                <span>ZONE</span>
              </span>
            </h1>
            <p role="heading" aria-level={2} className="text-lg secondary">
              Here you&#8217;ll be able to exchange all of your hard-earned Aeropoints and exchange
              them for cool tech.
            </p>
            <a
              href="#products"
              className="landing-cta cta"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <span className="text-lg accent">VIEW ALL PRODUCTS</span>
              <img className="cta-arrow icon-md" src="/icons/down-arrow.svg" alt="" />
            </a>
          </div>
          <div className="landing-illustration">
            {/*    image optimized    */}
            <Image
              src={heroImage}
              layout="fill"
              objectFit="scale-down"
              quality={100}
              alt="Futuristic guy playing with a VR"
            />
          </div>
        </section>
      </div>

      <section id="products" tabIndex={-1} className="walkthrough">
        <div className="walkthrough-cards container flex">
          <article className="intro-card">
            <div className="intro-card-top">
              <Image src={browseImage} layout="fill" objectFit="cover" quality={80} alt="" />
            </div>
            <div className="intro-card-bottom flex">
              <div className="intro-card-head flex">
                <div className="intro-card-icon-box flex">
                  <img className="icon-md" src="icons/walkthrough-1.svg" alt="" />
                </div>
                <h3 className="title-sm allcaps brand">1—browse</h3>
              </div>
              <p className="text-lg secondary">
                Browse our tech catalog with more than 20 top tech products
              </p>
            </div>
          </article>
          <article className="intro-card">
            <div className="intro-card-top">
              <Image src={chooseImage} layout="fill" objectFit="cover" quality={80} alt="" />
            </div>
            <div className="intro-card-bottom flex">
              <div className="intro-card-head flex">
                <div className="intro-card-icon-box flex">
                  <img className="icon-md" src="icons/walkthrough-2.svg" alt="" />
                </div>
                <h3 className="title-sm allcaps brand">2—choose</h3>
              </div>
              <p className="text-lg secondary">
                Exchange your hard earned AeroPoints for the item you want
              </p>
            </div>
          </article>
          <article className="intro-card">
            <div className="intro-card-top">
              <Image src={enjoyImage} layout="fill" objectFit="cover" quality={80} alt="" />
            </div>
            <div className="intro-card-bottom flex">
              <div className="intro-card-head flex">
                <div className="intro-card-icon-box flex">
                  <img className="icon-md" src="icons/walkthrough-3.svg" alt="" />
                </div>
                <h3 className="title-sm allcaps brand">3—enjoy!</h3>
              </div>
              <p className="text-lg secondary">
                All done, you can relax! We’ll take care of delivery of your tech item!
              </p>
            </div>
          </article>
        </div>
        <div className="walkthrough-mask" />
        <div className="walkthrough-bg" />
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
