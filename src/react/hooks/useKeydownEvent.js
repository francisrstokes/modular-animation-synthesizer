import {useEffect} from 'react';

export const useKeydownEvent = (handler, conditionals = []) => {
  useEffect(() => {
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, conditionals);
};