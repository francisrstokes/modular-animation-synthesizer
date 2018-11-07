import {useState} from 'react';

export const useActiveClasses = (groupedByTag) => {
  const [activeClasses, setActiveClasses] = useState(Object.keys(groupedByTag).reduce((acc, cur) => ({ ...acc, [cur]: '' }), {}));

  return [
    activeClasses,
    groupName => setActiveClasses({...activeClasses, [groupName]: activeClasses[groupName] === 'active' ? '' : 'active'})
  ];
};