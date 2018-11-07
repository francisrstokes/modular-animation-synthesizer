import React from 'react';
import {groupBy} from 'ramda';
import {Row} from './common';
import {clearRack} from '../rack/clear-rack';
import {exportRack} from '../rack/export';
import { computeModuleDefDrawingValues } from '../rack/compute-moduledef-drawing-values';
import { vAdd } from 'vec-la-fp';
import { findModule, modules } from '../modules';
import { C } from '../shared/constants';
import {state} from '../shared/state'
import { rack } from '../rack/rack';
import { AccordianTitle, AccordionList, AccordionItem } from './common/Accordian';
import { useActiveClasses } from './hooks/useActiveClasses';
import { generateId } from '../util/generate-id';

const groupedByTag = groupBy(({tag}) => tag, modules);

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

const AddModules = ({ctx}) => {
  const [activeClasses, toggleGroup] = useActiveClasses(groupedByTag);

  return <React.Fragment>
    {Object.entries(groupedByTag).map(([groupName, modules]) => (
      <React.Fragment>
        <AccordianTitle
          className={activeClasses[groupName]}
          key={`${groupName}Group`}
          onClick={() => toggleGroup(groupName)}
        >{groupName}</AccordianTitle>
        {activeClasses[groupName]
          ? <AccordionList>
            {modules.map(md => (
              <AccordionItem
                key={md.name}
                onClick={() => addModule(md.name, ctx)}
              >{md.name}</AccordionItem>
            ))}
          </AccordionList>
          : null
        }
      </React.Fragment>
    ))}
  </React.Fragment>
};



export const EditMode = ({
  enterDeleteMode,
  enterRawMode,
  ctx
}) => {
  return <React.Fragment>
    <AddModules ctx={ctx}/>
    <br/>
    <button onClick={enterDeleteMode}>Delete Modules</button>
    <button onClick={enterRawMode}>Set raw values</button>
    <br/>
    <button onClick={exportRack}>Export</button>
    <hr/>
    <br/>
    <button onClick={clearRack}>CLEAR RACK</button>
  </React.Fragment>
}