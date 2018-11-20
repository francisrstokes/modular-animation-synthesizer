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
import {selectors as resetTimeSelectors} from '../reducers/reset-time';
import * as editorModeActions from '../actions/editor-mode';
import * as rackActions from '../actions/rack';
import * as resetTimeActions from '../actions/reset-time';

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
  {
    ...globalOffsetSelectors,
    ...rackSelectors,
    ...resetTimeSelectors
  },
  {
    ...rackActions,
    ...editorModeActions,
    ...resetTimeActions
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

export const EditMode = connecter(props => {
  const {
    gotoDeleteMode,
    gotoRawMode,
    globalOffset,
    clearModules,
    addModule,
    ctx,
    rack,
    resetTime,
    toggleResetTime,
    updateDrawingValues
  } = props;

  useEffect(() => {
    const handler = e => {
      switch (e.key) {
        case 'r': return gotoRawMode();
        case 'd': return gotoDeleteMode();
        default: return;
      }
    }
    document.body.addEventListener('keydown', handler);
    return () => document.body.removeEventListener('keydown', handler);
  }, [gotoDeleteMode]);

  return <React.Fragment>
    <AddModules ctx={ctx} addModule={addModule} globalOffset={globalOffset} />
    <br/>
    <button onClick={gotoDeleteMode}>Delete Modules</button>
    <button onClick={gotoRawMode}>Set raw values</button>
    <br/>
    <button onClick={() => {
      const copy = JSON.parse(JSON.stringify(rack));
      copy.forEach(md => {
        const pos = md.dv.p;
        delete md.dv;
        delete md.module;
        md.dv = { p: pos };
      });
      copyToClipboard(JSON.stringify(copy));
    }}>Export</button>
    <hr/>
    <br/>
    <button onClick={() => {
      if (confirm('Are you sure you want to remove all modules?')) {
        clearModules();
      }
    }}>Clear all modules</button>
    <label>
      Reset time on animate
      <input type='checkbox' checked={resetTime} onChange={() => toggleResetTime(resetTime)}/>
    </label>
  </React.Fragment>
});