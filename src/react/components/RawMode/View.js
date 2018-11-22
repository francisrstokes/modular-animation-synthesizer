import React, {useRef, useEffect} from 'react';
import {useKeydownEvent} from '../../hooks/useKeydownEvent';
import {Row, SubTitle} from '../common';


export default ({exitRawMode, setCurrentRawValue, rawValue}) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  useKeydownEvent(e => {
    if (e.key === 'Escape') {
      exitRawMode();
    }
    if (document.activeElement !== ref.current) {
      setCurrentRawValue('')
      ref.current.focus();
    }
  });

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