import React, {useEffect, useState} from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) return setIsVisible(true);
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
    <div className={`scrollup ${isVisible ? '' : 'hide'}`}>
      <button type="button" className="scrollup-button flex" onClick={scrollToTop}>
        <img src="/icons/chevron-white.svg" className="scrollup-icon" />
      </button>
    </div>
  );
};

export default ScrollToTop;
