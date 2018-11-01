
export const rack = JSON.parse('[{"name":"Time_hrxui4k7zxj","module":"Time","moduleName":"Time","inputs":{},"drawingValues":{"position":[82,153.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1943359375,180],"inputPositions":{},"outputPositions":{"t":{"text":[80,60],"socket":[65,55]},"t2":{"text":[80,75],"socket":[65,70]},"t10":{"text":[80,90],"socket":[65,85]},"t30":{"text":[80,105],"socket":[65,100]},"t60":{"text":[80,120],"socket":[65,115]},"t100":{"text":[80,135],"socket":[65,130]},"t200":{"text":[80,150],"socket":[65,145]},"t300":{"text":[80,165],"socket":[65,160]}}}},{"name":"Divide_f97juh10xzm","module":"Divide","moduleName":"Divide","inputs":{"a":{"type":"connection","module":"Time_hrxui4k7zxj","property":"t"},"b":{"type":"value","value":71}},"drawingValues":{"position":[251,154.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Wave_199fdvqlgabj","module":"Wave","moduleName":"Wave","inputs":{"x":{"type":"connection","module":"Divide_f97juh10xzm","property":"m"}},"drawingValues":{"position":[433,137.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[186.6845703125,120],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"sinx":{"text":[127.5,60],"socket":[112.5,55]},"nsinx":{"text":[127.5,75],"socket":[112.5,70]},"cosx":{"text":[127.5,90],"socket":[112.5,85]},"ncosx":{"text":[127.5,105],"socket":[112.5,100]}}}},{"name":"MapRange_izrzq9htxss","module":"MapRange","moduleName":"MapRange","inputs":{"fromA":{"type":"value","value":-1},"fromB":{"type":"value","value":1},"toA":{"type":"value","value":-100},"toB":{"type":"value","value":100},"value":{"type":"connection","module":"Wave_tu26r523vu","property":"ncosx"}},"drawingValues":{"position":[1213,153.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[140.0048828125,45],"dimensions":[221.708984375,135],"inputPositions":{"fromA":{"text":[40,60],"socket":[20,55]},"fromB":{"text":[40,75],"socket":[20,70]},"toA":{"text":[40,90],"socket":[20,85]},"toB":{"text":[40,105],"socket":[20,100]},"value":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"output":{"text":[160.0048828125,60],"socket":[145.0048828125,55]}}}},{"name":"Vectorize_75j1yg7mylh","module":"Vectorize","moduleName":"Vectorize","inputs":{"x":{"type":"connection","module":"MapRange_izrzq9htxss","property":"output"},"y":{"type":"connection","module":"MapRange_izrzq9htxss","property":"output"}},"drawingValues":{"position":[1438,145.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[189.2041015625,90],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]},"y":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[127.5,60],"socket":[112.5,55]}}}},{"name":"Polygon_mekdk9y5ke","module":"Polygon","moduleName":"Polygon","inputs":{"sides":{"type":"value","value":24}},"drawingValues":{"position":[1427,8.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[215.0439453125,75],"inputPositions":{"sides":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"points":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"VectorScale_g3vat8d7j6g","module":"VectorScale","moduleName":"VectorScale","inputs":{"v":{"type":"connection","module":"Polygon_mekdk9y5ke","property":"points"},"scale":{"type":"connection","module":"Vectorize_75j1yg7mylh","property":"output"}},"drawingValues":{"position":[1665,86.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[216.72119140625,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"scale":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"VectorTranslate_nzfqqqay2jj","module":"VectorTranslate","moduleName":"VectorTranslate","inputs":{"tv":{"type":"connection","module":"Global_9bvxs86htal","property":"C"},"v":{"type":"connection","module":"VectorRotate_tjzmpa9qybc","property":"output"}},"drawingValues":{"position":[2127,86.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.66748046875,45],"dimensions":[193.37158203125,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"tv":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[131.66748046875,60],"socket":[116.66748046875,55]}}}},{"name":"Global_9bvxs86htal","module":"Global","moduleName":"Global","inputs":{},"drawingValues":{"position":[1949,23.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[119.1748046875,120],"inputPositions":{},"outputPositions":{"w":{"text":[80,60],"socket":[65,55]},"h":{"text":[80,75],"socket":[65,70]},"wh":{"text":[80,90],"socket":[65,85]},"C":{"text":[80,105],"socket":[65,100]}}}},{"name":"Style_9v6nk2js0qm","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"DrawBackground_t56ytaewkb","property":"gateOut"},"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0},"strokeA":{"type":"value","value":1},"fillA":{"type":"value","value":0},"strokeR":{"type":"value","value":0},"strokeG":{"type":"value","value":0},"strokeB":{"type":"value","value":0},"strokeWeight":{"type":"value","value":5}},"drawingValues":{"position":[2598,86.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}},{"name":"DrawBackground_t56ytaewkb","module":"DrawBackground","moduleName":"DrawBackground","inputs":{"gateIn":{"type":"connection","module":"VectorTranslate_nzfqqqay2jj","property":"output"},"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"fillA":{"type":"value","value":0.1}},"drawingValues":{"position":[2339,91.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[141.7041015625,45],"dimensions":[235.07568359375,135],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"gateOut":{"text":[161.7041015625,60],"socket":[146.7041015625,55]}}}},{"name":"Wave_tu26r523vu","module":"Wave","moduleName":"Wave","inputs":{"x":{"type":"connection","module":"Add_qztxtenup9","property":"m"}},"drawingValues":{"position":[999,269.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[186.6845703125,120],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"sinx":{"text":[127.5,60],"socket":[112.5,55]},"nsinx":{"text":[127.5,75],"socket":[112.5,70]},"cosx":{"text":[127.5,90],"socket":[112.5,85]},"ncosx":{"text":[127.5,105],"socket":[112.5,100]}}}},{"name":"Multiply_8yzpqvk1hsx","module":"Multiply","moduleName":"Multiply","inputs":{"b":{"type":"value","value":6.28},"a":{"type":"connection","module":"Wave_199fdvqlgabj","property":"ncosx"}},"drawingValues":{"position":[636,162.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Add_qztxtenup9","module":"Add","moduleName":"Add","inputs":{"a":{"type":"connection","module":"Multiply_8yzpqvk1hsx","property":"m"},"b":{"type":"connection","module":"Time_hrxui4k7zxj","property":"t100"}},"drawingValues":{"position":[812,248.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"DrawEllipse_u6mfdvzt5w","module":"DrawEllipse","moduleName":"DrawEllipse","inputs":{"v":{"type":"connection","module":"Style_9v6nk2js0qm","property":"gateOut"},"a":{"type":"value","value":0},"r":{"type":"value","value":[120,120]}},"drawingValues":{"position":[2911,169.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[181.71142578125,105],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"r":{"text":[40,75],"socket":[20,70]},"a":{"text":[40,90],"socket":[20,85]}},"outputPositions":{"done":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"DrawPolygon_npzl2yzovie","module":"DrawPolygon","moduleName":"DrawPolygon","inputs":{"points":{"type":"connection","module":"Style_nx74ai3wd9","property":"gateOut"}},"drawingValues":{"position":[3693,85.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[140.02685546875,45],"dimensions":[213.39599609375,75],"inputPositions":{"points":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"done":{"text":[160.02685546875,60],"socket":[145.02685546875,55]}}}},{"name":"VectorRotate_tjzmpa9qybc","module":"VectorRotate","moduleName":"VectorRotate","inputs":{"v":{"type":"connection","module":"VectorScale_g3vat8d7j6g","property":"output"},"a":{"type":"connection","module":"Wave_tu26r523vu","property":"sinx"}},"drawingValues":{"position":[1870,237.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[115.84228515625,45],"dimensions":[197.54638671875,105],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"cp":{"text":[40,75],"socket":[20,70]},"a":{"text":[40,90],"socket":[20,85]}},"outputPositions":{"output":{"text":[135.84228515625,60],"socket":[120.84228515625,55]}}}},{"name":"Gate_9iva44eqmk5","module":"Gate","moduleName":"Gate","inputs":{"x":{"type":"connection","module":"Style_9v6nk2js0qm","property":"gateOut"},"trigger":{"type":"connection","module":"DrawEllipse_u6mfdvzt5w","property":"done"}},"drawingValues":{"position":[3152,88.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[142.51708984375,45],"dimensions":[224.22119140625,90],"inputPositions":{"trigger":{"text":[40,60],"socket":[20,55]},"x":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[162.51708984375,60],"socket":[147.51708984375,55]}}}},{"name":"Style_nx74ai3wd9","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"Gate_9iva44eqmk5","property":"output"},"fillR":{"type":"value","value":0.1},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0},"strokeR":{"type":"value","value":0},"strokeG":{"type":"value","value":0},"strokeB":{"type":"value","value":0},"strokeWeight":{"type":"value","value":1},"fillA":{"type":"value","value":0.05}},"drawingValues":{"position":[3391,86.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}}]');