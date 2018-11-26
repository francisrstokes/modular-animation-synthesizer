import {useState} from 'react';

export const useActiveClasses = (keyedObject) => {
  const keys = Object.keys(keyedObject);
  const [activeClasses, setActiveClasses] = useState(keys.reduce((acc, cur) => ({ ...acc, [cur]: '' }), {}));

  return [
    activeClasses,
    groupName => setActiveClasses({...activeClasses, [groupName]: activeClasses[groupName] === 'active' ? '' : 'active'})
  ];
};