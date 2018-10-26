import {findModule, modules} from './modules';
import {runWithContext} from './run-with-context';
import {rack} from './rack';

const inputsToString = inputs => {
  return Object.entries(inputs)
    .reduce((acc, [k, v]) => {
      return [
        ...acc,
        `${k}: ${v.type === 'connection' ? `${v.module}.${v.property}` : v.value}`
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

export const generateAnimationFn = mc => {
  const copy = JSON.parse(JSON.stringify(rack)).map(moduleDef => {
    moduleDef.isEvaluated = false;
    return moduleDef;
  });

  const entryPoints = copy.filter(({module}) => Object.keys(module.inputs).length === 0);

  const knownVariables = [];
  let fnStr = '';

  fnStr += entryPoints.map(md => {
    const {name, moduleName} = md;
    knownVariables.push(name);
    md.isEvaluated = true;
    return `const ${name} = findModule('${moduleName}', modules).fn();`
  }).join('\n');

  let unevaluated = getUnevaluatedModules(copy);
  while (unevaluated.length > 0) {
    const md = getEvaluatableModule(unevaluated, knownVariables);
    knownVariables.push(md.name);
    md.isEvaluated = true;
    fnStr += `\nconst ${md.name} = findModule('${md.moduleName}', modules).fn({${inputsToString(md.inputs)}}, mc)`;
    unevaluated = getUnevaluatedModules(copy)
  }

  return runWithContext({findModule, modules, mc}, `return () => {\n${fnStr}\n}`);
}


