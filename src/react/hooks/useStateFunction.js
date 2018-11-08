import {useState} from 'react';
import {always} from 'ramda';

export const useStateFunction = fn => {
  const [stateFn, setFn] = useState(always(fn));
  return [stateFn, newFn => setFn(always(newFn))];
};
