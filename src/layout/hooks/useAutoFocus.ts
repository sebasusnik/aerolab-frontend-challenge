import {useRef, useEffect} from 'react';

const useAutoFocus = () => {
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (domRef.current) {
      domRef.current.focus();
    }
  }, [domRef]);

  return domRef;
};

export default useAutoFocus;
