import React from 'react';

import Image from 'next/image';

import heroImage from '~public/illustrations/hero-desktop.png';

const LandingSection: React.FC = () => {
  return (
    <section className="container">
      <div className="landing flex">
        <div className="landing-content flex">
          <h1 role="heading" aria-level={1} className="landing-heading flex">
            <span className="text-lg allcaps secondary">Explore the</span>
            <span className="landing-title title-lg allcaps">
              <span className="brand">tech</span> <br />
              <span>zone</span>
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
            priority
            src={heroImage}
            layout="fill"
            objectFit="scale-down"
            quality={100}
            alt="Futuristic guy playing with a VR"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
