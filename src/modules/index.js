import {Time} from './util/Time';
import {Multiply} from './math/Multiply';
import {Divide} from './math/Divide';
import {Add} from './math/Add';
import {Polygon} from './geometry/Polygon';
import {Rect} from './geometry/Rect';
import {Wave} from './math/Wave';
import {VectorScale} from './vector/VectorScale';
import {VectorTranslate} from './vector/VectorTranslate';
import {VectorRotate} from './vector/VectorRotate';
import {Vectorize} from './vector/Vectorize';
import {DrawPolygon} from './drawing/DrawPolygon';
import {DrawEllipse} from './drawing/DrawEllipse';
import {MapRange} from './interpolation/MapRange';
import {Global} from './util/Global';
import {Power} from './math/Power';
import {Gate} from './util/Gate';
import {DrawBackground} from './drawing/DrawBackground';
import {Multi} from './interpolation/Multi';
import {Arrayify} from './util/Arrayify';
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
  Spectrum,
  Multiply,
  Divide,
  Add,
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
  Vectorize,
  Random,
  Unvectorize,
  MapRange,
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
