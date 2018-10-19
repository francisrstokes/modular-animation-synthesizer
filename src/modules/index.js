import {Time} from './Time';
import {Multiply} from './Multiply';
import {Polygon} from './Polygon';
import {Sine} from './Sine';
import {VectorScale} from './VectorScale';
import {VectorTranslate} from './VectorTranslate';
import {DrawPolygon} from './DrawPolygon';
import {MapRange} from './MapRange';

export const getModules = mc => {
  return [
    Time,
    Multiply,
    Polygon,
    Sine,
    VectorScale,
    VectorTranslate,
    MapRange,
    DrawPolygon(mc)
  ]
};

export const findModule = (moduleName, modules) => {
  return modules.find(m => m.name === moduleName);
}