export const getRack = (w, h) => [
  {
    name: 't1',
    module: 'Time',
    inputs: {}
  },
  {
    name: 's1',
    module: 'Sine',
    inputs: {
      x: ['t1', 't60']
    }
  },
  {
    name: 'numSides',
    module: 'MapRange',
    inputs: {
      value: ['s1', 'nsinx'],
      fromA: 0,
      fromB: 1,
      toA: 4,
      toB: 10
    }
  },
  {
    name: 'p1',
    module: 'Polygon',
    inputs: {
      sides: ['numSides', 'mapped']
    }
  },
  {
    name: 'radScaler',
    module: 'MapRange',
    inputs: {
      value: ['s1', 'nsinx'],
      fromA: 0,
      fromB: 1,
      toA: 50,
      toB: 100
    }
  },
  {
    name: 'raddedPoly',
    module: 'VectorScale',
    inputs: {
      scale: ['radScaler', 'mapped'],
      v: ['p1', 'points']
    }
  },
  {
    name: 'raddedPoly2',
    module: 'VectorTranslate',
    inputs: {
      x: w/2,
      y: h/2,
      v: ['raddedPoly', 'output']
    }
  },
  {
    name: 'dp',
    module: 'DrawPolygon',
    inputs: {
      points: ['raddedPoly2', 'output']
    }
  }
];
