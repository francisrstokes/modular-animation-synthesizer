import {findModule, modules} from './modules';
import {runWithContext} from './util/run-with-context';

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

export const generateAnimationFn = (rack, mc) => {
  const copy = JSON.parse(JSON.stringify(rack)).map(moduleDef => {
    moduleDef.isEvaluated = false;
    return moduleDef;
  });

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


