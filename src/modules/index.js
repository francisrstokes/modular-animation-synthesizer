import {Time} from './util/Time';
import {Multiply} from './math/Multiply';
import {Add} from './math/Add';
import {Polygon} from './geometry/Polygon';
import {Wave} from './math/Wave';
import {VectorScale} from './vector/VectorScale';
import {VectorTranslate} from './vector/VectorTranslate';
import {VectorRotate} from './vector/VectorRotate';
import {Vectorize} from './vector/Vectorize';
import {DrawPolygon} from './drawing/DrawPolygon';
import {MapRange} from './interpolation/MapRange';
import {Global} from './util/Global';
import {Power} from './math/Power';
import {Gate} from './util/Gate';
import {DrawBackground} from './drawing/DrawBackground';
import {Multi} from './interpolation/Multi';
import {Arrayify} from './util/Arrayify';

export const modules = [
  Time,
  Multiply,
  Add,
  Polygon,
  Wave,
  VectorScale,
  VectorTranslate,
  VectorRotate,
  Vectorize,
  MapRange,
  Global,
  DrawPolygon,
  DrawBackground,
  Power,
  Gate,
  Multi,
  Arrayify
];

export const findModule = (moduleName, modules) => {
  return modules.find(m => m.name === moduleName);
};
