
import React, {useEffect} from 'react';
import {useUpdateEffect} from '../../hooks/useUpdateEffect';
import {useKeydownEvent} from '../../hooks/useKeydownEvent';
import {Row, Column, SubTitle} from '../common';
import { pointInRect } from '../../../util/math-util';

const useSelectionEnd = props => {
  useUpdateEffect(() => {
    if (!props.isSelecting) {
      const [x, y] = props.globalSubtract(props.selectionAreaStart);
      const [ex, ey] = props.globalSubtract(props.selectionAreaEnd);
      const selectionWh = [ex - x, ey - y];
      const modules = props.rack
        .filter(md => pointInRect([x, y], selectionWh, md.dv.p))
        .map(md => md.name);
      props.setSelection(modules);
      props.exitSelectionMode();
    }
  }, [props.isSelecting]);
}

export default (props) => {
  useKeydownEvent(e => {
    if (e.key === 'Escape') {
      if (props.selectedModules.length > 0) {
        props.clearSelection();
      } else {
        props.exitSelectionMode();
      }
    }
  });

  useSelectionEnd(props);

  return <Column>
    <Row>
      <SubTitle>Selection mode</SubTitle>
    </Row>

    <Row>
      Number of selected modules: {props.selectedModules.length}
    </Row>

    <Row><button onClick={props.exitSelectionMode}>Exit Selection Mode</button></Row>
  </Column>
};
