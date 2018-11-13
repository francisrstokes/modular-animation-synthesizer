import {Time} from './time/Time';
import {TrueTime} from './time/TrueTime';
import {Multiply} from './math/Multiply';
import {Divide} from './math/Divide';
import {Add} from './math/Add';
import {Subtract} from './math/Subtract';
import {Polygon} from './geometry/Polygon';
import {Rect} from './geometry/Rect';
import {Wave} from './math/Wave';
import {VectorScale} from './vector/VectorScale';
import {VectorTranslate} from './vector/VectorTranslate';
import {VectorRotate} from './vector/VectorRotate';
import {MatrixRotate} from './vector/MatrixRotate';
import {MatrixTranslate} from './vector/MatrixTranslate';
import {MatrixScale} from './vector/MatrixScale';
import {VectorTransform} from './vector/VectorTransform';
import {Vectorize} from './vector/Vectorize';
import {DrawPolygon} from './drawing/DrawPolygon';
import {DrawEllipse} from './drawing/DrawEllipse';
import {MapRange} from './interpolation/MapRange';
import {Mix} from './interpolation/Mix';
import {Step} from './interpolation/Step';
import {SinMap} from './interpolation/SinMap';
import {CosMap} from './interpolation/CosMap';
import {Global} from './util/Global';
import {Power} from './math/Power';
import {Gate} from './util/Gate';
import {DrawBackground} from './drawing/DrawBackground';
import {Multi} from './interpolation/Multi';
import {Arrayify} from './util/Arrayify';
import {Constant} from './util/Constant';
import {Flatten} from './util/Flatten';
import {Style} from './drawing/Style';
import {LengthOf} from './util/LengthOf';
import {Spectrum} from './audio/Spectrum';
import { Cartesian } from './math/Cartesian';
import { Unvectorize } from './vector/Unvectorize';
import { Sqrt } from './math/Sqrt';
import { Mod } from './math/Mod';
import { Round } from './math/Round';
import { Random } from './random-and-noise/Random';
import { Perlin } from './random-and-noise/Perlin';

export const modules = [
  Time,
  TrueTime,
  Spectrum,
  Multiply,
  Divide,
  Flatten,
  Constant,
  Step,
  Add,
  Subtract,
  Sqrt,
  Mod,
  Round,
  Perlin,
  Polygon,
  Rect,
  Wave,
  VectorScale,
  VectorTranslate,
  VectorRotate,
  MatrixRotate,
  MatrixTranslate,
  MatrixScale,
  VectorTransform,
  Vectorize,
  Random,
  Unvectorize,
  MapRange,
  Mix,
  SinMap,
  CosMap,
  Global,
  Style,
  DrawPolygon,
  DrawEllipse,
  DrawBackground,
  Power,
  Gate,
  Multi,
  Arrayify,
  LengthOf,
  Cartesian
];

export const findModule = moduleName => modules.find(m => m.name === moduleName);
