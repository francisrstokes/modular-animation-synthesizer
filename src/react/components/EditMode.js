import React, {useEffect} from 'react';
import {C} from '../../constants';
import {groupBy} from 'ramda';
import { modules } from '../../modules';
import { AccordianTitle, AccordionList, AccordionItem } from './common/Accordian';
import { useActiveClasses } from '../hooks/useActiveClasses';
import { generateId } from '../../util/generate-id';
import { computeModuleDefDrawingValues } from '../../rack/compute-moduledef-drawing-values';
import { vAdd } from 'vec-la-fp';
import { copyToClipboard } from '../../util/copy-to-clipboard';

import { connectSelectorsAndActions } from '../util';
import {selectors as rackSelectors} from '../reducers/rack';
import {selectors as globalOffsetSelectors} from '../reducers/global-offset';
import * as editorModeActions from '../reducers/editor-mode';
import * as rackActions from '../actions/rack';

const groupedByTag = groupBy(({tag}) => tag, modules);

const createModule = (moduleName, ctx, globalOffset) => {
  const md = {
    name: generateId(),
    moduleName,
    inputs:{},
    dv: null
  };

  const dv = computeModuleDefDrawingValues(md, ctx);
  md.dv = {
    p: vAdd(C, globalOffset.map(c => c * -1)),
    ...dv
  };

  return md;
};

const connecter = connectSelectorsAndActions(
  {...globalOffsetSelectors, ...rackSelectors},
  {
    ...rackActions,
    ...editorModeActions
  }
);


const AddModules = ({ addModule, ctx, globalOffset }) => {
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
};

export const EditMode = connecter(({
  enterDeleteMode,
  enterRawMode,
  globalOffset,
  clearModules,
  addModule,
  ctx,
  rack
}) => {

  useEffect(() => {
    const handler = e => {
      switch (e.key) {
        case 'r': return enterRawMode();
        case 'd': return enterDeleteMode();
        default: return;
      }
    }
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [enterDeleteMode]);

  return <React.Fragment>
    <AddModules ctx={ctx} addModule={addModule} globalOffset={globalOffset} />
    <br/>
    <button onClick={enterDeleteMode}>Delete Modules</button>
    <button onClick={enterRawMode}>Set raw values</button>
    <br/>
    <button onClick={() => copyToClipboard(JSON.stringify(rack))}>Export</button>
    <hr/>
    <br/>
    <button onClick={() => {
      if (confirm('Are you sure you want to remove all modules?')) {
        clearModules();
      }
    }}>Clear all modules</button>
  </React.Fragment>
});