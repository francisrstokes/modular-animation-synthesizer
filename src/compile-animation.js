import {findModule, modules} from './modules';
import {runWithContext} from './util/run-with-context';
import Either from 'data.either';

const inputsToString = inputs => {
  return Object.entries(inputs)
    .reduce((acc, [k, v]) => {
      return [
        ...acc,
        `${k}: ${
          v.type === 'connection'
            ? `${v.module}.${v.property}`
            : Array.isArray(v.value)
              ? `[${v.value}]`
              : v.value
          }`
      ]
    }, [])
    .join(', ');
}

const getUnevaluatedModules = rack => rack.filter(md => !md.isEvaluated);
const getEvaluatableModule = (rack, knownVariables) => {
  return rack.find(({inputs}) => {
    return Object.values(inputs).reduce((acc, cur) => {
      // If it's ever false it's always false
      if (!acc) return acc;

      if (cur.type === 'connection') {
        return acc && knownVariables.includes(cur.module);
      }

      // Regular values can always be evaluated
      return acc && true;
    }, true);
  })
}

const pruneOrphanModules = rack => {
  for (let i = rack.length - 1; i > 0; i--) {
    const md = rack[i];
    if (Object.keys(md.inputs).length === 0) {
      const hasDependants = rack.some(cMd => Object.values(cMd.inputs).some(input =>
        input.type === 'connection' && input.module === md.name
      ));
      if (!hasDependants) {
        rack.splice(i, 1);
      }
    }
  }
};

const findUnmetRequiredInputs = (rack) => {
  for (const instance of rack) {
    const md = findModule(instance.moduleName);
    const requiredInputs = Object.entries(md.inputs)
      .filter(([_, input]) => input.required)
      .map(([key]) => key);
    for (const reqKey of requiredInputs) {
      if (!(reqKey in instance.inputs)) {
        // Unmet required input
        console.log(`Unmet required input: ${instance.moduleName} (${instance.name}): ${reqKey}`);
        return {
          module: instance,
          input: reqKey
        };
      }
    }
  }
}

export const generateAnimationFn = (rack, mc) => {
  const copy = JSON.parse(JSON.stringify(rack)).map(moduleDef => {
    moduleDef.isEvaluated = false;
    return moduleDef;
  });

  pruneOrphanModules(copy);

  const entryPoints = copy
    .map(md => [findModule(md.moduleName), md])
    .filter(([module]) => Object.keys(module.inputs).length === 0)
    .map(([_, md]) => md);

  const knownVariables = [];
  let fnStr = '';

  fnStr += entryPoints.map(md => {
    const {name, moduleName} = md;
    knownVariables.push(name);
    md.isEvaluated = true;
    return `const ${name} = findModule('${moduleName}').fn();`
  }).join('\n');

  let unevaluated = getUnevaluatedModules(copy);
  while (unevaluated.length > 0) {
    const md = getEvaluatableModule(unevaluated, knownVariables);
    knownVariables.push(md.name);
    md.isEvaluated = true;
    fnStr += `\nconst ${md.name} = findModule('${md.moduleName}').fn({${inputsToString(md.inputs)}}, mc)`;
    unevaluated = getUnevaluatedModules(copy)
  }

  return runWithContext({findModule, mc}, `return () => {\n${fnStr}\n}`);
}

export const compile = (rack, mc) => {
  const unmet = findUnmetRequiredInputs(rack);
  if (unmet) {
    return Either.Left([
      `Unmet required input: ${unmet.module.moduleName} (${unmet.module.name}): ${unmet.input}`,
      unmet.module
    ]);
  }
  const animationFn = generateAnimationFn(rack, mc);
  return Either.Right(animationFn);
};
