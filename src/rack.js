export const getRack = (w, h) => [
  {
    name: 't1',
    module: 'Time',
    inputs: {}
  },
  {
    name: 's1',
    module: 'Wave',
    inputs: {
      x: {
        type: 'connection',
        module: 't1',
        property: 't60'
      }
    }
  },
  {
    name: 's2',
    module: 'Wave',
    inputs: {
      x: {
        type: 'connection',
        module: 't1',
        property: 't30'
      }
    }
  },
  {
    name: 'numSides',
    module: 'MapRange',
    inputs: {
      value: {
        type: 'connection',
        module: 's1',
        property: 'nsinx'
      },
      fromA: {
        type: 'value',
        value: 0
      },
      fromB: {
        type: 'value',
        value: 1
      },
      toA: {
        type: 'value',
        value: 4
      },
      toB: {
        type: 'value',
        value: 10
      }
    }
  },
  {
    name: 'p1',
    module: 'Polygon',
    inputs: {
      sides: {
        type: 'connection',
        module: 'numSides',
        property: 'output'
      }
    }
  },
  {
    name: 'radScaler',
    module: 'MapRange',
    inputs: {
      value: {
        type: 'connection',
        module: 's2',
        property: 'ncosx'
      },
      fromA: {
        type: 'value',
        value: 0
      },
      fromB: {
        type: 'value',
        value: 1
      },
      toA: {
        type: 'value',
        value: 50
      },
      toB: {
        type: 'value',
        value: 100
      }
    }
  },
  {
    name: 'raddedPoly',
    module: 'VectorScale',
    inputs: {
      scale: {
        type: 'connection',
        module: 'radScaler',
        property: 'output'
      },
      v: {
        type: 'connection',
        module: 'p1',
        property: 'points'
      }
    }
  },
  {
    name: 'raddedPoly2',
    module: 'VectorTranslate',
    inputs: {
      x: {
        type: 'value',
        value: w/2
      },
      y: {
        type: 'value',
        value: h/2
      },
      v: {
        type: 'connection',
        module: 'raddedPoly',
        property: 'output'
      }
    }
  },
  {
    name: 'dp',
    module: 'DrawPolygon',
    inputs: {
      points: {
        type: 'connection',
        module: 'raddedPoly2',
        property: 'output'
      }
    }
  }
];
