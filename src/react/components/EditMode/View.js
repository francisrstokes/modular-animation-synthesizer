import React, {useEffect} from 'react';
import {groupBy} from 'ramda';
import { modules } from '../../../modules';
import { AccordianTitle, AccordionList, AccordionItem } from '../common/Accordian';
import { useActiveClasses } from '../../hooks/useActiveClasses';
import {createModule} from './create-module';
import { copyToClipboard } from '../../../util/copy-to-clipboard';

const groupedByTag = groupBy(({tag}) => tag, modules);

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

export default props => {
  const {
    gotoDeleteMode,
    gotoRawMode,
    globalOffset,
    clearModules,
    addModule,
    ctx,
    rack,
    resetTime,
    toggleResetTime
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
};