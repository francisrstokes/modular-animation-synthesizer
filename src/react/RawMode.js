import React from 'react';
import {Row, SubTitle} from './common';

export const RawMode = ({exitRawMode}) => {
  return <React.Fragment>
    <Row>
      <SubTitle>Raw mode</SubTitle>
      <button onClick={exitRawMode}>Exit Raw Mode</button>
    </Row>
  </React.Fragment>
}