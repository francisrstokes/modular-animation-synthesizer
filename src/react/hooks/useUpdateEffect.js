import {useEffect, useRef} from 'react';

export const useUpdateEffect = (fn, conditions = []) => {
  const ref = useRef(false);
  useEffect(() => {
    if (ref.current) {
      fn();
    } else {
      ref.current = true;
    }
  }, conditions);
}