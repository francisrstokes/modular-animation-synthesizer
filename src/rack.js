export const getRack = (w, h) => [
  {
    name: 't1',
    module: 'Time',
    inputs: {},

    drawingValues: {
      position: [88, 91],
      textPosition: [0,0],
      inPosition: [0,0],
      outPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {
        text: [0,0],
        socket: [0,0]
      },
      outputPositions: {
        text: [0,0],
        socket: [0,0]
      }
    }
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
    },

    drawingValues: {
      position: [248, 65],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [241, 300],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [508, 75],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [829, 83],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [535, 323],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [840, 327],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [1064, 188],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
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
    },
    drawingValues: {
      position: [1279, 188],
      textPosition: [0,0],
      dimensions: [0,0],
      inputPositions: {},
      outputPositions: {}
    }
  }
];
