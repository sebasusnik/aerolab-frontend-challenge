import {useRef, useEffect} from 'react';

const useOutsideClick = (callback: () => void, useCapture?: boolean) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (event: {target: any}) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, useCapture);

    return () => {
      document.removeEventListener('click', handleClick, useCapture);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};

export default useOutsideClick;
