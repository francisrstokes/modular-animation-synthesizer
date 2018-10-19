import {findModule} from './modules';

const checkInputs = (moduleDef, rack, seen) => {
  for (const input of Object.values(moduleDef.inputs)) {
    // Input is a connection
    if (Array.isArray(input)) {
      if (seen.includes(input[0])) {
        // Cycle detected
        console.log('detected cycle!')
        return false;
      }
      seen.push(input[0]);

      const nextInstance = rack.find(({name}) => name === input[0]);
      if (!nextInstance) throw new Error(`Couldn't find module definition ${input[0]}`);
      checkInputs(nextInstance, rack, seen);
    }
  }
  return true;
}

export const checkForCycles = (rack, modules) => {
  for (const moduleDef of rack) {
    const module = findModule(moduleDef.module, modules);
    if (!module) throw new Error(`No module found with name ${moduleDef.module}`);

    const seen = [moduleDef.name];
    if (!checkInputs(moduleDef, rack, seen)) {
      // found a cycle
      return false
    }
  }
  // No cycles
  return true;
}