import React, {useEffect} from 'react';
import {Row, SubTitle} from './common';

export const DeleteMode = ({exitDeleteMode}) => {

  useEffect(() => {
    const handler = e => (e.key === 'Escape') ? exitDeleteMode() : null;
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [exitDeleteMode]);

  return <React.Fragment>
    <Row>
      <SubTitle>Delete mode</SubTitle>
      <button onClick={exitDeleteMode}>Exit Delete Mode</button>
    </Row>
  </React.Fragment>
}