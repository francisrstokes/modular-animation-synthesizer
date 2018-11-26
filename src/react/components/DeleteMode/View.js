
import React from 'react';
import {useKeydownEvent} from '../../hooks/useKeydownEvent';
import {Row, SubTitle} from '../common';

export default ({exitDeleteMode}) => {
  useKeydownEvent(e => (e.key === 'Escape') ? exitDeleteMode() : null);

  return <Row>
    <SubTitle>Delete mode</SubTitle>
    <button onClick={exitDeleteMode}>Exit Delete Mode</button>
  </Row>;
};
