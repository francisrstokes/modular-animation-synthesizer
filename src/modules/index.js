import {Time} from './Time';
import {Multiply} from './Multiply';
import {Add} from './Add';
import {Polygon} from './Polygon';
import {Wave} from './Wave';
import {VectorScale} from './VectorScale';
import {VectorTranslate} from './VectorTranslate';
import {VectorRotate} from './VectorRotate';
import {Vectorize} from './Vectorize';
import {DrawPolygon} from './DrawPolygon';
import {MapRange} from './MapRange';
import {Global} from './Global';
import {Power} from './Power';
import {Gate} from './Gate';
import {DrawBackground} from './DrawBackground';
import {Multi} from './Multi';

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
  Multi
];

export const findModule = (moduleName, modules) => {
  return modules.find(m => m.name === moduleName);
};
