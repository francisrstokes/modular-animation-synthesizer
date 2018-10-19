import {findModule} from './modules';

const checkInputs = (moduleDef, rack, seen, evaluatedModules) => {
  console.log(moduleDef)
  for (const input of Object.values(moduleDef.inputs)) {
    // if (moduleDef.name)
    // Input is a connection
    if (input.type === 'connection') {
      if (seen.includes(input.module)) {
        // Cycle detected
        console.log('detected cycle!')
        return false;
      }
      seen.push(input.module);

      const nextInstance = rack.find(({name}) => name === input.module);
      if (!nextInstance) throw new Error(`Couldn't find module definition ${input.module}`);
      checkInputs(nextInstance, rack, []);
    }
  }
  return true;
}

export const checkForCycles = (rack, modules) => {
  const evaluatedModules = [];
  for (const moduleDef of rack) {
    const module = findModule(moduleDef.module, modules);
    if (!module) throw new Error(`No module found with name ${moduleDef.module}`);

    const seen = [moduleDef.name];
    if (!checkInputs(moduleDef, rack, seen, evaluatedModules)) {
      // found a cycle
      return false
    }
  }
  // No cycles
  return true;
}