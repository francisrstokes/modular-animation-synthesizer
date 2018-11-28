import React, {useState} from 'react';
import {useKeydownEvent} from '../../hooks/useKeydownEvent';
import {groupBy, fromPairs, prop} from 'ramda';
import { modules } from '../../../modules';
import { AccordianTitle, AccordionList, AccordionItem } from '../common/Accordian';
import {TabMenu, TabsContainer, Tab, TabContent} from '../common/TabMenu';
import { useActiveClasses } from '../../hooks/useActiveClasses';
import {createModule} from './create-module';
import { copyToClipboard } from '../../../util/copy-to-clipboard';
import {componentSwitch} from '../../util';
import { vScale, vAdd, vSub } from 'vec-la-fp';

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
    gotoSelectionMode,
    globalOffset,
    clearModules,
    addModule,
    ctx,
    rack,
    resetTime,
    toggleResetTime,
    copySelection,
    removeModule,
    setSelection,
    selectedModules
  } = props;

  useKeydownEvent(e => {
    switch (e.key) {
      case 'Backspace': {
        return selectedModules.map(removeModule);
      }
      case 'r': return gotoRawMode();
      case 'd': return gotoDeleteMode();
      case 's': return gotoSelectionMode();
      case 'c': {
        if (e.metaKey) {
          copySelection();
        }
        break;
      }
      case 'v': {
        if (e.metaKey) {
          const originalNewTuples = selectedModules.map(mId => {
            const original = rack.find(({name}) => name === mId);
            const newPosition = vSub(globalOffset, original.dv.p);
            const newModule = createModule(original.moduleName, ctx, newPosition);
            return [original, newModule];
          });

          const moduleIdMapping = fromPairs(originalNewTuples.map(([md, newMd]) => [md.name, newMd.name]));

          // Remap the internal connections
          originalNewTuples.forEach(([md, newMd]) => {
            Object.entries(md.inputs).forEach(([inputKey, con]) => {
              if (con.type === 'connection' && con.module in moduleIdMapping) {
                newMd.inputs[inputKey] = {...con};
                newMd.inputs[inputKey].module = moduleIdMapping[con.module];
              } else if (con.type === 'value') {
                newMd.inputs[inputKey] = {...con};
              }
            });
          });

          // Add new modules and set them as the selection
          const newModules = originalNewTuples.map(([_, x]) => x);
          newModules.forEach(addModule);

          const newIds = newModules.map(prop('name'));
          setSelection(newIds);
        }
        break;
      }
      default: return;
    }
  }, [selectedModules]);

  const [activeTab, setActiveTab] = useState('modules');

  return <TabMenu>
    <TabsContainer>
      <Tab
        className={activeTab === 'modules' ? 'active' : ''}
        onClick={() => setActiveTab('modules')}
      >Modules</Tab>
      <Tab
        className={activeTab === 'modes' ? 'active' : ''}
        onClick={() => setActiveTab('modes')}
      >Modes</Tab>
      <Tab
        className={activeTab === 'settings' ? 'active' : ''}
        onClick={() => setActiveTab('settings')}
      >Settings</Tab>
    </TabsContainer>
    <TabContent>
    {componentSwitch([
      [activeTab === 'modules', () => <AddModules ctx={ctx} addModule={addModule} globalOffset={globalOffset} />],
      [activeTab === 'modes', () => <React.Fragment>
          <button onClick={gotoDeleteMode}>Delete Modules</button>
          <button onClick={gotoRawMode}>Set raw values</button>
        </React.Fragment>],
      [activeTab === 'settings', () => <React.Fragment>
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
        </React.Fragment>]
    ])}
    </TabContent>
  </TabMenu>
};