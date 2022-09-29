import React, {useEffect, useState} from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 550) return setIsVisible(true);
    if (window.pageYOffset > window.innerHeight) return setIsVisible(false);

    return setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scrollup ${isVisible ? '' : 'hide'}`}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <button
        type="button"
        className="scrollup-button flex"
        aria-label="Scroll to Top"
        onClick={scrollToTop}
      >
        <img aria-hidden="true" src="/icons/chevron-white.svg" className="scrollup-icon icon-md" />
      </button>
    </div>
  );
};

export default ScrollToTop;
