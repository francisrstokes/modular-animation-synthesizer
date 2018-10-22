import {findModule} from './modules';

const checkInputs = (moduleDef, rack, seen) => {
  for (const input of Object.values(moduleDef.inputs)) {
    // Input is a connection
    if (input.type === 'connection') {
      if (seen.includes(input.module)) {
        // Cycle detected
        console.log('detected cycle!')
        return true;
      }
      seen.push(input.module);

      const nextInstance = rack.find(({name}) => name === input.module);
      if (!nextInstance) throw new Error(`Couldn't find module definition ${input.module}`);
      return checkInputs(nextInstance, rack, [...seen]);
    }
  }
  return false;
}

export const checkForCycles = (rack, modules) => {
  for (const moduleDef of rack) {
    const seen = [moduleDef.name];
    if (checkInputs(moduleDef, rack, seen)) {
      // found a cycle
      return true;
    }
  }
  // No cycles
  return false;
}