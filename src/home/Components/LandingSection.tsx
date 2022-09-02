import React from 'react';

import Image from 'next/image';

import heroImage from '~public/illustrations/hero-desktop.png';

const LandingSection: React.FC = () => {
  return (
    <section className="container">
      <div className="landing flex">
        <div className="landing-content flex">
          <h1 role="heading" aria-level={1} className="landing-heading flex noselect">
            <span className="text-lg allcaps secondary">Explore the</span>
            <span className="landing-title title-lg allcaps">
              <span className="brand">tech</span> <br />
              <span>zone</span>
            </span>
          </h1>
          <p role="heading" aria-level={2} className="text-lg secondary noselect">
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
            <span className="text-lg accent noselect">VIEW ALL PRODUCTS</span>
            <svg
              className="cta-arrow icon-md"
              width="15px"
              height="18px"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 11.6L8.5 17.85H6.75L0.5 11.6L2.25 9.825L6.375 13.925V0H8.875V13.925L13 9.8L14.75 11.6Z"
                fill="white"
              />
            </svg>
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
            className="noselect"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
