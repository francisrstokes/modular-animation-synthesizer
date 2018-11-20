import { generateId } from '../../../util/generate-id';
import { computeModuleDefDrawingValues } from '../../../rack/compute-moduledef-drawing-values';
import { vAdd } from 'vec-la-fp';
import {C} from '../../../constants';

export const createModule = (moduleName, ctx, globalOffset) => {
  const md = {
    name: generateId(),
    moduleName,
    inputs:{},
    dv: null
  };

  const dv = computeModuleDefDrawingValues(md, ctx);
  md.dv = {
    p: vAdd(C, globalOffset.map(c => c * -1)),
    ...dv
  };

  return md;
};