import React from 'react';
import {Row, SubTitle} from './common';

export const DeleteMode = ({exitDeleteMode}) => {
  return <React.Fragment>
    <Row>
      <SubTitle>Delete mode</SubTitle>
      <button onClick={exitDeleteMode}>Exit Delete Mode</button>
    </Row>
  </React.Fragment>
}