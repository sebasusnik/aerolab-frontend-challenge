import {useRef, useEffect} from 'react';

const useOutsideClick = (callback: () => void, useCapture?: boolean) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, useCapture);

    return () => {
      document.removeEventListener('click', handleClick, useCapture);
    };
  }, [callback, ref, useCapture]);

  return ref;
};

export default useOutsideClick;
