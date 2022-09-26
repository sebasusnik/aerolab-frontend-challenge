import {useRef, useEffect} from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (event: {target: any}) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};

export default useOutsideClick;
