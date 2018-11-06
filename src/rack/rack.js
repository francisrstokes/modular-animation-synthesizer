// export const rack = JSON.parse(`[{"name":"Revz1ud","module":"Spectrum","moduleName":"Spectrum","inputs":{},"drawingValues":{"position":[169,238.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[179.21875,120],"inputPositions":{},"outputPositions":{"output":{"text":[80,60],"socket":[65,55]},"highestLow":{"text":[80,75],"socket":[65,70]},"highestMid":{"text":[80,90],"socket":[65,85]},"highestHigh":{"text":[80,105],"socket":[65,100]}}}},{"name":"Kj9m9c3","module":"Multi","moduleName":"Multi","inputs":{"n":{"type":"connection","module":"X63zayt","property":"output"}},"drawingValues":{"position":[615,355.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[190.04638671875,75],"inputPositions":{"n":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"output":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"X63zayt","module":"LengthOf","moduleName":"LengthOf","inputs":{"x":{"type":"connection","module":"Revz1ud","property":"output"}},"drawingValues":{"position":[417,361.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[189.2041015625,75],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"output":{"text":[127.5,60],"socket":[112.5,55]}}}},{"name":"Mqs1vhx","module":"Global","moduleName":"Global","inputs":{},"drawingValues":{"position":[489,461.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1796875,210],"inputPositions":{},"outputPositions":{"w":{"text":[80,60],"socket":[65,55]},"h":{"text":[80,75],"socket":[65,70]},"wh":{"text":[80,90],"socket":[65,85]},"CV":{"text":[80,105],"socket":[65,100]},"BV":{"text":[80,120],"socket":[65,115]},"ZV":{"text":[80,135],"socket":[65,130]},"PI":{"text":[80,150],"socket":[65,145]},"TAU":{"text":[80,165],"socket":[65,160]},"one":{"text":[80,180],"socket":[65,175]},"zero":{"text":[80,195],"socket":[65,190]}}}},{"name":"Fs5wk41","module":"Vectorize","moduleName":"Vectorize","inputs":{"y":{"type":"connection","module":"P4y3d8q","property":"m"},"x":{"type":"connection","module":"Sajonjr","property":"m"}},"drawingValues":{"position":[1009,340.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[189.2041015625,90],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]},"y":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[127.5,60],"socket":[112.5,55]}}}},{"name":"P4y3d8q","module":"Multiply","moduleName":"Multiply","inputs":{"a":{"type":"connection","module":"Mqs1vhx","property":"h"},"b":{"type":"connection","module":"Revz1ud","property":"output"}},"drawingValues":{"position":[814,240.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Sajonjr","module":"Multiply","moduleName":"Multiply","inputs":{"a":{"type":"connection","module":"Kj9m9c3","property":"output"},"b":{"type":"connection","module":"Mqs1vhx","property":"w"}},"drawingValues":{"position":[833,383.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Ynsfpoh","module":"DrawBackground","moduleName":"DrawBackground","inputs":{"gateIn":{"type":"connection","module":"Fs5wk41","property":"output"},"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0}},"drawingValues":{"position":[1242,395.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[141.7041015625,45],"dimensions":[235.07568359375,135],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"gateOut":{"text":[161.7041015625,60],"socket":[146.7041015625,55]}}}},{"name":"Pwne9pg","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"Ynsfpoh","property":"gateOut"},"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"strokeA":{"type":"value","value":0}},"drawingValues":{"position":[1494,393.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}},{"name":"Z2efor5","module":"DrawEllipse","moduleName":"DrawEllipse","inputs":{"v":{"type":"connection","module":"Pwne9pg","property":"gateOut"},"r":{"type":"value","value":[10,10]}},"drawingValues":{"position":[1832,278.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[150.8447265625,45],"dimensions":[224.2138671875,120],"inputPositions":{"multiply":{"text":[40,60],"socket":[20,55]},"v":{"text":[40,75],"socket":[20,70]},"r":{"text":[40,90],"socket":[20,85]},"a":{"text":[40,105],"socket":[20,100]}},"outputPositions":{"done":{"text":[170.8447265625,60],"socket":[155.8447265625,55]}}}}]`);


export const rack = JSON.parse(`[{
	"name": "Kt27cf6",
	"module": "Wave",
	"moduleName": "Wave",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Fk1bjdf",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [917, 683.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [186.6845703125, 120],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"sinx": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			},
			"nsinx": {
				"text": [127.5, 75],
				"socket": [112.5, 70]
			},
			"cosx": {
				"text": [127.5, 90],
				"socket": [112.5, 85]
			},
			"ncosx": {
				"text": [127.5, 105],
				"socket": [112.5, 100]
			}
		}
	}
}, {
	"name": "Hjixlpf",
	"module": "Wave",
	"moduleName": "Wave",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Fk1bjdf",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [915, 348.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [186.6845703125, 120],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"sinx": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			},
			"nsinx": {
				"text": [127.5, 75],
				"socket": [112.5, 70]
			},
			"cosx": {
				"text": [127.5, 90],
				"socket": [112.5, 85]
			},
			"ncosx": {
				"text": [127.5, 105],
				"socket": [112.5, 100]
			}
		}
	}
}, {
	"name": "V32z76f",
	"module": "Multi",
	"moduleName": "Multi",
	"inputs": {
		"n": {
			"type": "value",
			"value": 100
		}
	},
	"drawingValues": {
		"position": [498, 606.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [190.04638671875, 75],
		"inputPositions": {
			"n": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"output": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Pmnvzzo",
	"module": "Global",
	"moduleName": "Global",
	"inputs": {},
	"drawingValues": {
		"position": [193, 89.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [60, 45],
		"dimensions": [129.1796875, 210],
		"inputPositions": {},
		"outputPositions": {
			"w": {
				"text": [80, 60],
				"socket": [65, 55]
			},
			"h": {
				"text": [80, 75],
				"socket": [65, 70]
			},
			"wh": {
				"text": [80, 90],
				"socket": [65, 85]
			},
			"CV": {
				"text": [80, 105],
				"socket": [65, 100]
			},
			"BV": {
				"text": [80, 120],
				"socket": [65, 115]
			},
			"ZV": {
				"text": [80, 135],
				"socket": [65, 130]
			},
			"PI": {
				"text": [80, 150],
				"socket": [65, 145]
			},
			"TAU": {
				"text": [80, 165],
				"socket": [65, 160]
			},
			"one": {
				"text": [80, 180],
				"socket": [65, 175]
			},
			"zero": {
				"text": [80, 195],
				"socket": [65, 190]
			}
		}
	}
}, {
	"name": "Fk1bjdf",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"b": {
			"type": "connection",
			"module": "V32z76f",
			"property": "output"
		},
		"a": {
			"type": "connection",
			"module": "Uu9ycsk",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [734, 501.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "U5s143c",
	"module": "Vectorize",
	"moduleName": "Vectorize",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Futwafc",
			"property": "m"
		},
		"y": {
			"type": "connection",
			"module": "Gkwe6yq",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [1370, 545.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [189.2041015625, 90],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"y": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			}
		}
	}
}, {
	"name": "Ve4zv7f",
	"module": "MapRange",
	"moduleName": "MapRange",
	"inputs": {
		"value": {
			"type": "connection",
			"module": "V32z76f",
			"property": "output"
		},
		"fromA": {
			"type": "value",
			"value": 0
		},
		"fromB": {
			"type": "value",
			"value": 1
		},
		"toA": {
			"type": "value",
			"value": 50
		},
		"toB": {
			"type": "value",
			"value": 250
		}
	},
	"drawingValues": {
		"position": [911, 512.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [140.0048828125, 45],
		"dimensions": [221.708984375, 135],
		"inputPositions": {
			"fromA": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"fromB": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"toA": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"toB": {
				"text": [40, 105],
				"socket": [20, 100]
			},
			"value": {
				"text": [40, 120],
				"socket": [20, 115]
			}
		},
		"outputPositions": {
			"output": {
				"text": [160.0048828125, 60],
				"socket": [145.0048828125, 55]
			}
		}
	}
}, {
	"name": "Gkwe6yq",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "Ve4zv7f",
			"property": "output"
		},
		"b": {
			"type": "connection",
			"module": "Kt27cf6",
			"property": "sinx"
		}
	},
	"drawingValues": {
		"position": [1162, 625.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Futwafc",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"b": {
			"type": "connection",
			"module": "Ve4zv7f",
			"property": "output"
		},
		"a": {
			"type": "connection",
			"module": "Hjixlpf",
			"property": "cosx"
		}
	},
	"drawingValues": {
		"position": [1163, 505.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Bynpdnp",
	"module": "VectorTranslate",
	"moduleName": "VectorTranslate",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "Pmnvzzo",
			"property": "CV"
		},
		"tv": {
			"type": "connection",
			"module": "Ipo2kme",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [2067, 551.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [111.66748046875, 45],
		"dimensions": [193.37158203125, 90],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"tv": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [131.66748046875, 60],
				"socket": [116.66748046875, 55]
			}
		}
	}
}, {
	"name": "Dlbaamm",
	"module": "Style",
	"moduleName": "Style",
	"inputs": {
		"gateIn": {
			"type": "connection",
			"module": "Ysb4zlt",
			"property": "gateOut"
		},
		"fillR": {
			"type": "value",
			"value": 1
		},
		"fillG": {
			"type": "value",
			"value": 1
		},
		"fillB": {
			"type": "value",
			"value": 1
		},
		"fillA": {
			"type": "value",
			"value": 0
		},
		"strokeA": {
			"type": "value",
			"value": 0.2
		},
		"strokeR": {
			"type": "value",
			"value": 1
		},
		"strokeG": {
			"type": "value",
			"value": 1
		},
		"strokeB": {
			"type": "value",
			"value": 1
		}
	},
	"drawingValues": {
		"position": [2536, 611.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [187.2607421875, 45],
		"dimensions": [280.63232421875, 210],
		"inputPositions": {
			"gateIn": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"fillR": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"fillG": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"fillB": {
				"text": [40, 105],
				"socket": [20, 100]
			},
			"fillA": {
				"text": [40, 120],
				"socket": [20, 115]
			},
			"strokeR": {
				"text": [40, 135],
				"socket": [20, 130]
			},
			"strokeG": {
				"text": [40, 150],
				"socket": [20, 145]
			},
			"strokeB": {
				"text": [40, 165],
				"socket": [20, 160]
			},
			"strokeA": {
				"text": [40, 180],
				"socket": [20, 175]
			},
			"strokeWeight": {
				"text": [40, 195],
				"socket": [20, 190]
			}
		},
		"outputPositions": {
			"gateOut": {
				"text": [207.2607421875, 60],
				"socket": [192.2607421875, 55]
			}
		}
	}
}, {
	"name": "Ysb4zlt",
	"module": "DrawBackground",
	"moduleName": "DrawBackground",
	"inputs": {
		"gateIn": {
			"type": "connection",
			"module": "Bynpdnp",
			"property": "output"
		},
		"fillR": {
			"type": "value",
			"value": 0
		},
		"fillG": {
			"type": "value",
			"value": 0
		},
		"fillB": {
			"type": "value",
			"value": 0
		},
		"fillA": {
			"type": "value",
			"value": 0.1
		}
	},
	"drawingValues": {
		"position": [2280, 611.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [141.7041015625, 45],
		"dimensions": [235.07568359375, 135],
		"inputPositions": {
			"gateIn": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"fillR": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"fillG": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"fillB": {
				"text": [40, 105],
				"socket": [20, 100]
			},
			"fillA": {
				"text": [40, 120],
				"socket": [20, 115]
			}
		},
		"outputPositions": {
			"gateOut": {
				"text": [161.7041015625, 60],
				"socket": [146.7041015625, 55]
			}
		}
	}
}, {
	"name": "Xq4fgx9",
	"module": "DrawEllipse",
	"moduleName": "DrawEllipse",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "Dlbaamm",
			"property": "gateOut"
		},
		"r": {
			"type": "value",
			"value": [50, 50]
		}
	},
	"drawingValues": {
		"position": [2836, 513.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [150.8447265625, 45],
		"dimensions": [224.2138671875, 120],
		"inputPositions": {
			"multiply": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"v": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"r": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"a": {
				"text": [40, 105],
				"socket": [20, 100]
			}
		},
		"outputPositions": {
			"done": {
				"text": [170.8447265625, 60],
				"socket": [155.8447265625, 55]
			}
		}
	}
}, {
	"name": "Csj6ulf",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "Pmnvzzo",
			"property": "TAU"
		},
		"b": {
			"type": "connection",
			"module": "Oogpgwe",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [385, 292.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Uu9ycsk",
	"module": "Add",
	"moduleName": "Add",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "Csj6ulf",
			"property": "m"
		},
		"b": {
			"type": "connection",
			"module": "Yl3ifpb",
			"property": "t200"
		}
	},
	"drawingValues": {
		"position": [538, 398.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Yl3ifpb",
	"module": "Time",
	"moduleName": "Time",
	"inputs": {},
	"drawingValues": {
		"position": [-275, 384.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [60, 45],
		"dimensions": [129.1943359375, 180],
		"inputPositions": {},
		"outputPositions": {
			"t": {
				"text": [80, 60],
				"socket": [65, 55]
			},
			"t2": {
				"text": [80, 75],
				"socket": [65, 70]
			},
			"t10": {
				"text": [80, 90],
				"socket": [65, 85]
			},
			"t30": {
				"text": [80, 105],
				"socket": [65, 100]
			},
			"t60": {
				"text": [80, 120],
				"socket": [65, 115]
			},
			"t100": {
				"text": [80, 135],
				"socket": [65, 130]
			},
			"t200": {
				"text": [80, 150],
				"socket": [65, 145]
			},
			"t300": {
				"text": [80, 165],
				"socket": [65, 160]
			}
		}
	}
}, {
	"name": "I1nxzoi",
	"module": "VectorRotate",
	"moduleName": "VectorRotate",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "U5s143c",
			"property": "output"
		},
		"a": {
			"type": "connection",
			"module": "Pz6i4db",
			"property": "t60"
		}
	},
	"drawingValues": {
		"position": [1580, 548.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [115.84228515625, 45],
		"dimensions": [197.54638671875, 105],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"cp": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"a": {
				"text": [40, 90],
				"socket": [20, 85]
			}
		},
		"outputPositions": {
			"output": {
				"text": [135.84228515625, 60],
				"socket": [120.84228515625, 55]
			}
		}
	}
}, {
	"name": "Pz6i4db",
	"module": "Time",
	"moduleName": "Time",
	"inputs": {},
	"drawingValues": {
		"position": [838, 829.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [60, 45],
		"dimensions": [129.1943359375, 180],
		"inputPositions": {},
		"outputPositions": {
			"t": {
				"text": [80, 60],
				"socket": [65, 55]
			},
			"t2": {
				"text": [80, 75],
				"socket": [65, 70]
			},
			"t10": {
				"text": [80, 90],
				"socket": [65, 85]
			},
			"t30": {
				"text": [80, 105],
				"socket": [65, 100]
			},
			"t60": {
				"text": [80, 120],
				"socket": [65, 115]
			},
			"t100": {
				"text": [80, 135],
				"socket": [65, 130]
			},
			"t200": {
				"text": [80, 150],
				"socket": [65, 145]
			},
			"t300": {
				"text": [80, 165],
				"socket": [65, 160]
			}
		}
	}
}, {
	"name": "Q5q0xgb",
	"module": "Wave",
	"moduleName": "Wave",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Yl3ifpb",
			"property": "t300"
		}
	},
	"drawingValues": {
		"position": [-109, 329.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [186.6845703125, 120],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"sinx": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			},
			"nsinx": {
				"text": [127.5, 75],
				"socket": [112.5, 70]
			},
			"cosx": {
				"text": [127.5, 90],
				"socket": [112.5, 85]
			},
			"ncosx": {
				"text": [127.5, 105],
				"socket": [112.5, 100]
			}
		}
	}
}, {
	"name": "Oogpgwe",
	"module": "MapRange",
	"moduleName": "MapRange",
	"inputs": {
		"fromA": {
			"type": "value",
			"value": 0
		},
		"fromB": {
			"type": "value",
			"value": 1
		},
		"toA": {
			"type": "value",
			"value": 1
		},
		"toB": {
			"type": "value",
			"value": 6
		},
		"value": {
			"type": "connection",
			"module": "Q5q0xgb",
			"property": "ncosx"
		}
	},
	"drawingValues": {
		"position": [100, 305.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [140.0048828125, 45],
		"dimensions": [221.708984375, 135],
		"inputPositions": {
			"fromA": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"fromB": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"toA": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"toB": {
				"text": [40, 105],
				"socket": [20, 100]
			},
			"value": {
				"text": [40, 120],
				"socket": [20, 115]
			}
		},
		"outputPositions": {
			"output": {
				"text": [160.0048828125, 60],
				"socket": [145.0048828125, 55]
			}
		}
	}
}, {
	"name": "Ipo2kme",
	"module": "VectorScale",
	"moduleName": "VectorScale",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "I1nxzoi",
			"property": "output"
		},
		"scale": {
			"type": "connection",
			"module": "Flotir1",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [1823, 552.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [135.01708984375, 45],
		"dimensions": [216.72119140625, 90],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"scale": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [155.01708984375, 60],
				"socket": [140.01708984375, 55]
			}
		}
	}
}, {
	"name": "Aj0xo1e",
	"module": "Wave",
	"moduleName": "Wave",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Pz6i4db",
			"property": "t100"
		}
	},
	"drawingValues": {
		"position": [1005, 902.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [186.6845703125, 120],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"sinx": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			},
			"nsinx": {
				"text": [127.5, 75],
				"socket": [112.5, 70]
			},
			"cosx": {
				"text": [127.5, 90],
				"socket": [112.5, 85]
			},
			"ncosx": {
				"text": [127.5, 105],
				"socket": [112.5, 100]
			}
		}
	}
}, {
	"name": "Flotir1",
	"module": "Vectorize",
	"moduleName": "Vectorize",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Aj0xo1e",
			"property": "sinx"
		},
		"y": {
			"type": "connection",
			"module": "Rrcvzbu",
			"property": "cosx"
		}
	},
	"drawingValues": {
		"position": [1691, 676.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [189.2041015625, 90],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"y": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			}
		}
	}
}, {
	"name": "Rrcvzbu",
	"module": "Wave",
	"moduleName": "Wave",
	"inputs": {
		"x": {
			"type": "connection",
			"module": "Oc6ok3i",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [1575, 795.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [186.6845703125, 120],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			}
		},
		"outputPositions": {
			"sinx": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			},
			"nsinx": {
				"text": [127.5, 75],
				"socket": [112.5, 70]
			},
			"cosx": {
				"text": [127.5, 90],
				"socket": [112.5, 85]
			},
			"ncosx": {
				"text": [127.5, 105],
				"socket": [112.5, 100]
			}
		}
	}
}, {
	"name": "Mam44xw",
	"module": "VectorTranslate",
	"moduleName": "VectorTranslate",
	"inputs": {
		"tv": {
			"type": "connection",
			"module": "Pmnvzzo",
			"property": "CV"
		},
		"v": {
			"type": "connection",
			"module": "M6r5814",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [2096, 346.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [111.66748046875, 45],
		"dimensions": [193.37158203125, 90],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"tv": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [131.66748046875, 60],
				"socket": [116.66748046875, 55]
			}
		}
	}
}, {
	"name": "Q77mbh3",
	"module": "DrawEllipse",
	"moduleName": "DrawEllipse",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "G24930e",
			"property": "output"
		},
		"r": {
			"type": "value",
			"value": [50, 50]
		}
	},
	"drawingValues": {
		"position": [3370, 518.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [150.8447265625, 45],
		"dimensions": [224.2138671875, 120],
		"inputPositions": {
			"multiply": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"v": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"r": {
				"text": [40, 90],
				"socket": [20, 85]
			},
			"a": {
				"text": [40, 105],
				"socket": [20, 100]
			}
		},
		"outputPositions": {
			"done": {
				"text": [170.8447265625, 60],
				"socket": [155.8447265625, 55]
			}
		}
	}
}, {
	"name": "G24930e",
	"module": "Gate",
	"moduleName": "Gate",
	"inputs": {
		"trigger": {
			"type": "connection",
			"module": "Xq4fgx9",
			"property": "done"
		},
		"x": {
			"type": "connection",
			"module": "Mam44xw",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [3095, 392.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [142.51708984375, 45],
		"dimensions": [224.22119140625, 90],
		"inputPositions": {
			"trigger": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"x": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [162.51708984375, 60],
				"socket": [147.51708984375, 55]
			}
		}
	}
}, {
	"name": "Zf3q52s",
	"module": "Vectorize",
	"moduleName": "Vectorize",
	"inputs": {
		"y": {
			"type": "connection",
			"module": "Futwafc",
			"property": "m"
		},
		"x": {
			"type": "connection",
			"module": "Gkwe6yq",
			"property": "m"
		}
	},
	"drawingValues": {
		"position": [1376, 435.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [107.5, 45],
		"dimensions": [189.2041015625, 90],
		"inputPositions": {
			"x": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"y": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [127.5, 60],
				"socket": [112.5, 55]
			}
		}
	}
}, {
	"name": "E2dhyu1",
	"module": "VectorRotate",
	"moduleName": "VectorRotate",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "G837cnd",
			"property": "m"
		},
		"v": {
			"type": "connection",
			"module": "Zf3q52s",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [1593, 425.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [115.84228515625, 45],
		"dimensions": [197.54638671875, 105],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"cp": {
				"text": [40, 75],
				"socket": [20, 70]
			},
			"a": {
				"text": [40, 90],
				"socket": [20, 85]
			}
		},
		"outputPositions": {
			"output": {
				"text": [135.84228515625, 60],
				"socket": [120.84228515625, 55]
			}
		}
	}
}, {
	"name": "G837cnd",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"b": {
			"type": "connection",
			"module": "Pz6i4db",
			"property": "t60"
		},
		"a": {
			"type": "value",
			"value": -1
		}
	},
	"drawingValues": {
		"position": [1347, 674.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "M6r5814",
	"module": "VectorScale",
	"moduleName": "VectorScale",
	"inputs": {
		"v": {
			"type": "connection",
			"module": "E2dhyu1",
			"property": "output"
		},
		"scale": {
			"type": "connection",
			"module": "Flotir1",
			"property": "output"
		}
	},
	"drawingValues": {
		"position": [1808, 428.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [135.01708984375, 45],
		"dimensions": [216.72119140625, 90],
		"inputPositions": {
			"v": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"scale": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"output": {
				"text": [155.01708984375, 60],
				"socket": [140.01708984375, 55]
			}
		}
	}
}, {
	"name": "Cmdymga",
	"module": "Multiply",
	"moduleName": "Multiply",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "Aj0xo1e",
			"property": "cosx"
		},
		"b": {
			"type": "value",
			"value": 3.142
		}
	},
	"drawingValues": {
		"position": [1205, 980.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}, {
	"name": "Oc6ok3i",
	"module": "Add",
	"moduleName": "Add",
	"inputs": {
		"a": {
			"type": "connection",
			"module": "Cmdymga",
			"property": "m"
		},
		"b": {
			"type": "connection",
			"module": "Pz6i4db",
			"property": "t200"
		}
	},
	"drawingValues": {
		"position": [1385, 889.5],
		"textPosition": [15, 15],
		"inPosition": [15, 45],
		"outPosition": [108.34228515625, 45],
		"dimensions": [160.83740234375, 90],
		"inputPositions": {
			"a": {
				"text": [40, 60],
				"socket": [20, 55]
			},
			"b": {
				"text": [40, 75],
				"socket": [20, 70]
			}
		},
		"outputPositions": {
			"m": {
				"text": [128.34228515625, 60],
				"socket": [113.34228515625, 55]
			}
		}
	}
}]`);





















// export const rack = JSON.parse(`[{"name":"Ni33wi7","module":"Polygon","moduleName":"Polygon","inputs":{"sides":{"type":"connection","module":"S5ued5v","property":"m"}},"drawingValues":{"position":[938,205.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[215.0439453125,75],"inputPositions":{"sides":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"points":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"Dliqk0i","module":"Time","moduleName":"Time","inputs":{},"drawingValues":{"position":[-2,158.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1943359375,180],"inputPositions":{},"outputPositions":{"t":{"text":[80,60],"socket":[65,55]},"t2":{"text":[80,75],"socket":[65,70]},"t10":{"text":[80,90],"socket":[65,85]},"t30":{"text":[80,105],"socket":[65,100]},"t60":{"text":[80,120],"socket":[65,115]},"t100":{"text":[80,135],"socket":[65,130]},"t200":{"text":[80,150],"socket":[65,145]},"t300":{"text":[80,165],"socket":[65,160]}}}},{"name":"S5ued5v","module":"Add","moduleName":"Add","inputs":{"b":{"type":"value","value":3},"a":{"type":"connection","module":"Rsg9ysb","property":"m"}},"drawingValues":{"position":[668,201.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Zo86wc5","module":"Round","moduleName":"Round","inputs":{"a":{"type":"connection","module":"Dliqk0i","property":"t30"}},"drawingValues":{"position":[180,180.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[186.70654296875,105],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"round":{"text":[128.34228515625,60],"socket":[113.34228515625,55]},"floor":{"text":[128.34228515625,75],"socket":[113.34228515625,70]},"ceil":{"text":[128.34228515625,90],"socket":[113.34228515625,85]}}}},{"name":"Gbsgseh","module":"VectorScale","moduleName":"VectorScale","inputs":{"v":{"type":"connection","module":"Ni33wi7","property":"points"},"scale":{"type":"value","value":[100,100]}},"drawingValues":{"position":[1187,208.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[216.72119140625,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"scale":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"Ire090y","module":"VectorTranslate","moduleName":"VectorTranslate","inputs":{"v":{"type":"connection","module":"Gbsgseh","property":"output"},"tv":{"type":"connection","module":"Mpim0yd","property":"CV"}},"drawingValues":{"position":[1452,194.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.66748046875,45],"dimensions":[193.37158203125,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"tv":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[131.66748046875,60],"socket":[116.66748046875,55]}}}},{"name":"Mpim0yd","module":"Global","moduleName":"Global","inputs":{},"drawingValues":{"position":[1244,-11.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1796875,210],"inputPositions":{},"outputPositions":{"w":{"text":[80,60],"socket":[65,55]},"h":{"text":[80,75],"socket":[65,70]},"wh":{"text":[80,90],"socket":[65,85]},"CV":{"text":[80,105],"socket":[65,100]},"BV":{"text":[80,120],"socket":[65,115]},"ZV":{"text":[80,135],"socket":[65,130]},"PI":{"text":[80,150],"socket":[65,145]},"TAU":{"text":[80,165],"socket":[65,160]},"one":{"text":[80,180],"socket":[65,175]},"zero":{"text":[80,195],"socket":[65,190]}}}},{"name":"Ctyxqdl","module":"DrawBackground","moduleName":"DrawBackground","inputs":{"gateIn":{"type":"connection","module":"Ire090y","property":"output"},"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0}},"drawingValues":{"position":[1672,289.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[141.7041015625,45],"dimensions":[235.07568359375,135],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"gateOut":{"text":[161.7041015625,60],"socket":[146.7041015625,55]}}}},{"name":"Qoxppmm","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"Ctyxqdl","property":"gateOut"},"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"strokeA":{"type":"value","value":0}},"drawingValues":{"position":[1918,289.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}},{"name":"Gfjtqql","module":"DrawPolygon","moduleName":"DrawPolygon","inputs":{"points":{"type":"connection","module":"Qoxppmm","property":"gateOut"}},"drawingValues":{"position":[2242,216.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[140.02685546875,45],"dimensions":[213.39599609375,75],"inputPositions":{"points":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"done":{"text":[160.02685546875,60],"socket":[145.02685546875,55]}}}},{"name":"Rsg9ysb","module":"Mod","moduleName":"Mod","inputs":{"a":{"type":"connection","module":"Zo86wc5","property":"floor"},"b":{"type":"value","value":4}},"drawingValues":{"position":[433,197.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}}]`)