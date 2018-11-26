import React, {useEffect} from 'react';
import {Row, Column, SubTitle} from '../common';

export default ({cancel, connectingFromInput}) => {
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') {
        cancel();
      }
    }
    document.body.addEventListener('keydown', handler)
    return () => document.body.removeEventListener('keydown', handler);
  }, [cancel]);

  return <Row>
    <Column>
      <SubTitle>
        Connecting from {connectingFromInput ? 'input' : 'output'} to {!connectingFromInput ? 'input' : 'output'}
      </SubTitle>
        {connectingFromInput
          ? 'Click an output to complete the connection'
          : 'Click an input to complete the connection'
        }
      <button onClick={cancel}>Cancel</button>
    </Column>
  </Row>
};