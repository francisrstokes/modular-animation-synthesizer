import React, {useRef, useEffect} from 'react';
import {Row, SubTitle} from './common';
import {selectors as rawValueSelectors} from '../reducers/raw-value';
import * as rawValueActions from '../actions/raw-value';
import { connectSelectorsAndActions } from '../util';

const connecter = connectSelectorsAndActions(
  rawValueSelectors,
  rawValueActions
);

export const RawMode = connecter(({exitRawMode, setCurrentRawValue, rawValue}) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  useEffect(() => {
    const handler = e => (e.key === 'Escape') ? exitRawMode() : null;
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [exitRawMode]);

  return <React.Fragment>
    <Row>
      <SubTitle>Raw mode</SubTitle>
      <button onClick={exitRawMode}>Exit Raw Mode</button>
      <input
        ref={ref}
        value={rawValue}
        onChange={e => setCurrentRawValue(e.target.value)}
      />
    </Row>
  </React.Fragment>
})