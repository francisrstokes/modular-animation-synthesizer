import React from 'react';
import {Row} from './common';
import {clearRack} from '../rack/clear-rack';
import {exportRack} from '../rack/export';
import { computeModuleDefDrawingValues } from '../rack/compute-moduledef-drawing-values';
import { vAdd } from 'vec-la-fp';
import { findModule, modules } from '../modules';

const generateId = () => String.fromCharCode(65 + ((Math.random() * 26)|0)) + Math.random().toString(36).slice(2).slice(0, 6);

const addModule = (moduleName, ctx) => {
  const md = {
    name: generateId(),
    module: findModule(moduleName, modules),
    moduleName,
    inputs:{},
    drawingValues: {}
  };

  const drawingValues = computeModuleDefDrawingValues(md, ctx);
  md.drawingValues = {
    position: vAdd(C, state.translate.map(c => c * -1)),
    ...drawingValues
  };

  rack.push(md);
};

export const EditMode = ({
  selectedModule,
  setSelectedModule,
  enterDeleteMode,
  enterRawMode,
  ctx
}) => {
  return <React.Fragment>
    <Row>
      <select
        value={selectedModule}
        onChange={({target: {value}}) => setSelectedModule(value)}
      >
        {modules.map(({name}) =>
          <option
            key={name}
            value={name}
          >{name}</option>)
        }
      </select>
      <button onClick={() => addModule(selectedModule, ctx)}>Add module</button>
    </Row>

    <Row><button onClick={enterDeleteMode}>Delete Modules</button></Row>
    <Row><button onClick={enterRawMode}>Set raw values</button></Row>
    <br/>
    <Row><button onClick={exportRack}>Export</button></Row>
    <hr/>
    <br/>
    <Row><button onClick={clearRack}>CLEAR RACK</button></Row>
  </React.Fragment>
}