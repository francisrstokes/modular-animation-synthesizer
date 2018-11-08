import React from 'react';
import {groupBy} from 'ramda';
import {clearRack} from '../rack/clear-rack';
import {exportRack} from '../rack/export';
import { findModule, modules } from '../modules';
import { AccordianTitle, AccordionList, AccordionItem } from './common/Accordian';
import { useActiveClasses } from './hooks/useActiveClasses';
import { generateId } from '../util/generate-id';
import { computeModuleDefDrawingValues } from '../rack/compute-moduledef-drawing-values';
import { vAdd } from 'vec-la-fp';
import { connectSelectorsAndActions } from './util';
import {selectors as globalOffsetSelectors} from './reducers/global-offset';
import {C} from '../shared/constants';

const groupedByTag = groupBy(({tag}) => tag, modules);

const createModule = (moduleName, ctx, globalOffset) => {
  const md = {
    name: generateId(),
    module: findModule(moduleName, modules),
    moduleName,
    inputs:{},
    drawingValues: null
  };

  const drawingValues = computeModuleDefDrawingValues(md, ctx);
  md.drawingValues = {
    position: vAdd(C, globalOffset.map(c => c * -1)),
    ...drawingValues
  };

  return md;
};

const connecter = connectSelectorsAndActions(
  globalOffsetSelectors,
  {}
);


const AddModules = connecter(({ addModule, ctx, globalOffset }) => {
  const [activeClasses, toggleGroup] = useActiveClasses(groupedByTag);

  return <React.Fragment>
    {Object.entries(groupedByTag).map(([groupName, modules]) => (
      <React.Fragment key={`${groupName}Group`}>
        <AccordianTitle
          className={activeClasses[groupName]}
          onClick={() => toggleGroup(groupName)}
        >{groupName}</AccordianTitle>
        {activeClasses[groupName]
          ? <AccordionList>
            {modules.map(md => (
              <AccordionItem
                key={md.name}
                onClick={() => {
                  addModule(createModule(md.name, ctx, globalOffset))
                }}
              >{md.name}</AccordionItem>
            ))}
          </AccordionList>
          : null
        }
      </React.Fragment>
    ))}
  </React.Fragment>
});

export const EditMode = ({
  enterDeleteMode,
  enterRawMode,
  addModule,
  ctx
}) => {
  return <React.Fragment>
    <AddModules ctx={ctx} addModule={addModule}/>
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