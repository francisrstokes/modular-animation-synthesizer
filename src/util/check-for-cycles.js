const checkDependants = (moduleDef, rack, seen) => {
  const dependants = rack.filter(md =>
    Object.values(md.inputs).some(input =>
      input.type === 'connection' && input.module === moduleDef.name
    )
  );

  const results = [];
  for (const dependantModule of dependants) {
    const seenBranch = [...seen, dependantModule.name];
    if (seen.includes(dependantModule.name)) {
      console.log(`detected cycle! ${seenBranch.join(' -> ')}`)
      return true;
    }
    results.push(checkDependants(dependantModule, rack, seenBranch));
  }

  return results.reduce((a, b) => a || b, false);
}

export const checkForCycles = rack => {
  for (const moduleDef of rack) {
    const seen = [];
    seen.push(moduleDef.name);
    if (checkDependants(moduleDef, rack, seen)) {
      // found a cycle
      return true;
    }
  }
  // No cycles
  return false;
}
