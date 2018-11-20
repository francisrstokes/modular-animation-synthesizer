import React, {useRef, useEffect} from 'react';
import {Row, SubTitle} from '../common';


export default ({exitRawMode, setCurrentRawValue, rawValue}) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') {
        exitRawMode();
      }
      if (document.activeElement !== ref.current) {
        setCurrentRawValue('')
        ref.current.focus();
      }
    }
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
}