// export const rack = JSON.parse(`[{"name":"Revz1ud","module":"Spectrum","moduleName":"Spectrum","inputs":{},"drawingValues":{"position":[169,238.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[179.21875,120],"inputPositions":{},"outputPositions":{"output":{"text":[80,60],"socket":[65,55]},"highestLow":{"text":[80,75],"socket":[65,70]},"highestMid":{"text":[80,90],"socket":[65,85]},"highestHigh":{"text":[80,105],"socket":[65,100]}}}},{"name":"Kj9m9c3","module":"Multi","moduleName":"Multi","inputs":{"n":{"type":"connection","module":"X63zayt","property":"output"}},"drawingValues":{"position":[615,355.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[190.04638671875,75],"inputPositions":{"n":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"output":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"X63zayt","module":"LengthOf","moduleName":"LengthOf","inputs":{"x":{"type":"connection","module":"Revz1ud","property":"output"}},"drawingValues":{"position":[417,361.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[189.2041015625,75],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"output":{"text":[127.5,60],"socket":[112.5,55]}}}},{"name":"Mqs1vhx","module":"Global","moduleName":"Global","inputs":{},"drawingValues":{"position":[489,461.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1796875,210],"inputPositions":{},"outputPositions":{"w":{"text":[80,60],"socket":[65,55]},"h":{"text":[80,75],"socket":[65,70]},"wh":{"text":[80,90],"socket":[65,85]},"CV":{"text":[80,105],"socket":[65,100]},"BV":{"text":[80,120],"socket":[65,115]},"ZV":{"text":[80,135],"socket":[65,130]},"PI":{"text":[80,150],"socket":[65,145]},"TAU":{"text":[80,165],"socket":[65,160]},"one":{"text":[80,180],"socket":[65,175]},"zero":{"text":[80,195],"socket":[65,190]}}}},{"name":"Fs5wk41","module":"Vectorize","moduleName":"Vectorize","inputs":{"y":{"type":"connection","module":"P4y3d8q","property":"m"},"x":{"type":"connection","module":"Sajonjr","property":"m"}},"drawingValues":{"position":[1009,340.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[107.5,45],"dimensions":[189.2041015625,90],"inputPositions":{"x":{"text":[40,60],"socket":[20,55]},"y":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[127.5,60],"socket":[112.5,55]}}}},{"name":"P4y3d8q","module":"Multiply","moduleName":"Multiply","inputs":{"a":{"type":"connection","module":"Mqs1vhx","property":"h"},"b":{"type":"connection","module":"Revz1ud","property":"output"}},"drawingValues":{"position":[814,240.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Sajonjr","module":"Multiply","moduleName":"Multiply","inputs":{"a":{"type":"connection","module":"Kj9m9c3","property":"output"},"b":{"type":"connection","module":"Mqs1vhx","property":"w"}},"drawingValues":{"position":[833,383.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Ynsfpoh","module":"DrawBackground","moduleName":"DrawBackground","inputs":{"gateIn":{"type":"connection","module":"Fs5wk41","property":"output"},"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0}},"drawingValues":{"position":[1242,395.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[141.7041015625,45],"dimensions":[235.07568359375,135],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"gateOut":{"text":[161.7041015625,60],"socket":[146.7041015625,55]}}}},{"name":"Pwne9pg","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"Ynsfpoh","property":"gateOut"},"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"strokeA":{"type":"value","value":0}},"drawingValues":{"position":[1494,393.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}},{"name":"Z2efor5","module":"DrawEllipse","moduleName":"DrawEllipse","inputs":{"v":{"type":"connection","module":"Pwne9pg","property":"gateOut"},"r":{"type":"value","value":[10,10]}},"drawingValues":{"position":[1832,278.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[150.8447265625,45],"dimensions":[224.2138671875,120],"inputPositions":{"multiply":{"text":[40,60],"socket":[20,55]},"v":{"text":[40,75],"socket":[20,70]},"r":{"text":[40,90],"socket":[20,85]},"a":{"text":[40,105],"socket":[20,100]}},"outputPositions":{"done":{"text":[170.8447265625,60],"socket":[155.8447265625,55]}}}}]`);

// export const rack = JSON.parse(`[{"name":"R19fmnk","module":{"name":"Style","tag":"Drawing","inputs":{"gateIn":"any","fillR":"Number","fillG":"Number","fillB":"Number","fillA":"Number","strokeR":"Number","strokeG":"Number","strokeB":"Number","strokeA":"Number","strokeWeight":"Number"},"outputs":{"gateOut":"any"}},"moduleName":"Style","inputs":{"strokeA":{"type":"value","value":0},"fillR":{"type":"connection","module":"U80x5ym","property":"output"},"fillG":{"type":"connection","module":"Ultfqfz","property":"output"},"fillB":{"type":"connection","module":"Rup48xh","property":"output"},"fillA":{"type":"connection","module":"Boidkv8","property":"output"},"gateIn":{"type":"connection","module":"Okjn4qn","property":"output"}},"drawingValues":{"position":[1324,555.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[191.2607421875,45],"dimensions":[288.63232421875,200],"inputPositions":{"gateIn":{"text":[44,63.5],"socket":[22,60]},"fillR":{"text":[44,77.5],"socket":[22,74]},"fillG":{"text":[44,91.5],"socket":[22,88]},"fillB":{"text":[44,105.5],"socket":[22,102]},"fillA":{"text":[44,119.5],"socket":[22,116]},"strokeR":{"text":[44,133.5],"socket":[22,130]},"strokeG":{"text":[44,147.5],"socket":[22,144]},"strokeB":{"text":[44,161.5],"socket":[22,158]},"strokeA":{"text":[44,175.5],"socket":[22,172]},"strokeWeight":{"text":[44,189.5],"socket":[22,186]}},"outputPositions":{"gateOut":{"text":[219.2607421875,63.5],"socket":[198.2607421875,60]}}}},{"name":"Eifohxy","module":{"name":"DrawEllipse","tag":"Drawing","inputs":{"multiply":"any","v":"Vector","r":"Number","a":"Number"},"outputs":{"done":"Number"}},"moduleName":"DrawEllipse","inputs":{"r":{"type":"connection","module":"Pw79sav","property":"output"},"v":{"type":"connection","module":"Ztgrnoz","property":"gateOut"}},"drawingValues":{"position":[2053,781.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[154.8447265625,45],"dimensions":[232.2138671875,116],"inputPositions":{"multiply":{"text":[44,63.5],"socket":[22,60]},"v":{"text":[44,77.5],"socket":[22,74]},"r":{"text":[44,91.5],"socket":[22,88]},"a":{"text":[44,105.5],"socket":[22,102]}},"outputPositions":{"done":{"text":[182.8447265625,63.5],"socket":[161.8447265625,60]}}}},{"name":"Ztgrnoz","module":{"name":"DrawBackground","tag":"Drawing","inputs":{"gateIn":"any","fillR":"Number","fillG":"Number","fillB":"Number","fillA":"Number"},"outputs":{"gateOut":"any"}},"moduleName":"DrawBackground","inputs":{"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0},"fillA":{"type":"value","value":0.06},"gateIn":{"type":"connection","module":"R19fmnk","property":"gateOut"}},"drawingValues":{"position":[1760,680.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[145.7041015625,45],"dimensions":[243.07568359375,130],"inputPositions":{"gateIn":{"text":[44,63.5],"socket":[22,60]},"fillR":{"text":[44,77.5],"socket":[22,74]},"fillG":{"text":[44,91.5],"socket":[22,88]},"fillB":{"text":[44,105.5],"socket":[22,102]},"fillA":{"text":[44,119.5],"socket":[22,116]}},"outputPositions":{"gateOut":{"text":[173.7041015625,63.5],"socket":[152.7041015625,60]}}}},{"name":"T2oex07","module":{"name":"Global","tag":"Misc","inputs":{},"outputs":{"w":"Number","h":"Number","wh":"Vector","CV":"Vector","BV":"Vector","ZV":"Vector","PI":"Number","TAU":"Number","one":"Number","zero":"Number"}},"moduleName":"Global","inputs":{},"drawingValues":{"position":[417,494.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[133.1796875,200],"inputPositions":{},"outputPositions":{"w":{"text":[88,63.5],"socket":[67,60]},"h":{"text":[88,77.5],"socket":[67,74]},"wh":{"text":[88,91.5],"socket":[67,88]},"CV":{"text":[88,105.5],"socket":[67,102]},"BV":{"text":[88,119.5],"socket":[67,116]},"ZV":{"text":[88,133.5],"socket":[67,130]},"PI":{"text":[88,147.5],"socket":[67,144]},"TAU":{"text":[88,161.5],"socket":[67,158]},"one":{"text":[88,175.5],"socket":[67,172]},"zero":{"text":[88,189.5],"socket":[67,186]}}}},{"name":"Vxm9gwa","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[411,388.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Okjn4qn","module":{"name":"Vectorize","tag":"Vector","inputs":{"x":"Number","y":"Number"},"outputs":{"output":"Vector"}},"moduleName":"Vectorize","inputs":{"x":{"type":"connection","module":"Be9wedh","property":"output"},"y":{"type":"connection","module":"Bulhva4","property":"output"}},"drawingValues":{"position":[1011,451.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.5,45],"dimensions":[197.2041015625,88],"inputPositions":{"x":{"text":[44,63.5],"socket":[22,60]},"y":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"output":{"text":[139.5,63.5],"socket":[118.5,60]}}}},{"name":"Be9wedh","module":{"name":"MapRange","tag":"Interpolation","inputs":{"fromA":"Number","fromB":"Number","toA":"Number","toB":"Number","value":"Number"},"outputs":{"output":"Number"}},"moduleName":"MapRange","inputs":{"value":{"type":"connection","module":"Vxm9gwa","property":"output"},"fromA":{"type":"value","value":0},"fromB":{"type":"value","value":1},"toA":{"type":"value","value":0},"toB":{"type":"connection","module":"T2oex07","property":"w"}},"drawingValues":{"position":[628,430.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[144.0048828125,45],"dimensions":[229.708984375,130],"inputPositions":{"fromA":{"text":[44,63.5],"socket":[22,60]},"fromB":{"text":[44,77.5],"socket":[22,74]},"toA":{"text":[44,91.5],"socket":[22,88]},"toB":{"text":[44,105.5],"socket":[22,102]},"value":{"text":[44,119.5],"socket":[22,116]}},"outputPositions":{"output":{"text":[172.0048828125,63.5],"socket":[151.0048828125,60]}}}},{"name":"Bulhva4","module":{"name":"MapRange","tag":"Interpolation","inputs":{"fromA":"Number","fromB":"Number","toA":"Number","toB":"Number","value":"Number"},"outputs":{"output":"Number"}},"moduleName":"MapRange","inputs":{"toA":{"type":"value","value":0},"fromA":{"type":"value","value":0},"fromB":{"type":"value","value":1},"value":{"type":"connection","module":"Ildna4p","property":"output"},"toB":{"type":"connection","module":"T2oex07","property":"h"}},"drawingValues":{"position":[626,578.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[144.0048828125,45],"dimensions":[229.708984375,130],"inputPositions":{"fromA":{"text":[44,63.5],"socket":[22,60]},"fromB":{"text":[44,77.5],"socket":[22,74]},"toA":{"text":[44,91.5],"socket":[22,88]},"toB":{"text":[44,105.5],"socket":[22,102]},"value":{"text":[44,119.5],"socket":[22,116]}},"outputPositions":{"output":{"text":[172.0048828125,63.5],"socket":[151.0048828125,60]}}}},{"name":"Ildna4p","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[412,727.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Ultfqfz","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[1037,668.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Rup48xh","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[1037,755.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"U80x5ym","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[1038,574.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Boidkv8","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[1039,844.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Xeeif3r","module":{"name":"Random","tag":"Random and Noise","inputs":{},"outputs":{"output":"Number"}},"moduleName":"Random","inputs":{},"drawingValues":{"position":[1036,934.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[145.7041015625,74],"inputPositions":{},"outputPositions":{"output":{"text":[88,63.5],"socket":[67,60]}}}},{"name":"Pw79sav","module":{"name":"Vectorize","tag":"Vector","inputs":{"x":"Number","y":"Number"},"outputs":{"output":"Vector"}},"moduleName":"Vectorize","inputs":{"x":{"type":"connection","module":"Lztzyw8","property":"m"},"y":{"type":"connection","module":"Lztzyw8","property":"m"}},"drawingValues":{"position":[1575,933.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.5,45],"dimensions":[197.2041015625,88],"inputPositions":{"x":{"text":[44,63.5],"socket":[22,60]},"y":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"output":{"text":[139.5,63.5],"socket":[118.5,60]}}}},{"name":"Lztzyw8","module":{"name":"Multiply","tag":"Math","inputs":{"a":"Number","b":"Number"},"outputs":{"m":"Number"}},"moduleName":"Multiply","inputs":{"b":{"type":"value","value":200},"a":{"type":"connection","module":"Xzprc0w","property":"m"}},"drawingValues":{"position":[1389,934.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[112.34228515625,45],"dimensions":[168.83740234375,88],"inputPositions":{"a":{"text":[44,63.5],"socket":[22,60]},"b":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"m":{"text":[140.34228515625,63.5],"socket":[119.34228515625,60]}}}},{"name":"Xzprc0w","module":{"name":"Power","tag":"Math","inputs":{"a":"Number","b":"Number"},"outputs":{"m":"Number"}},"moduleName":"Power","inputs":{"a":{"type":"connection","module":"Xeeif3r","property":"output"},"b":{"type":"value","value":2}},"drawingValues":{"position":[1200,934.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[112.34228515625,45],"dimensions":[168.83740234375,88],"inputPositions":{"a":{"text":[44,63.5],"socket":[22,60]},"b":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"m":{"text":[140.34228515625,63.5],"socket":[119.34228515625,60]}}}}]`)

export const rack = JSON.parse(`[{"name":"U94lq7e","module":{"name":"Style","tag":"Drawing","inputs":{"gateIn":"any","fillR":"Number","fillG":"Number","fillB":"Number","fillA":"Number","strokeR":"Number","strokeG":"Number","strokeB":"Number","strokeA":"Number","strokeWeight":"Number"},"outputs":{"gateOut":"any"}},"moduleName":"Style","inputs":{"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"gateIn":{"type":"connection","module":"F646xdy","property":"output"}},"drawingValues":{"position":[601,484.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[191.2607421875,45],"dimensions":[288.63232421875,200],"inputPositions":{"gateIn":{"text":[44,63.5],"socket":[22,60]},"fillR":{"text":[44,77.5],"socket":[22,74]},"fillG":{"text":[44,91.5],"socket":[22,88]},"fillB":{"text":[44,105.5],"socket":[22,102]},"fillA":{"text":[44,119.5],"socket":[22,116]},"strokeR":{"text":[44,133.5],"socket":[22,130]},"strokeG":{"text":[44,147.5],"socket":[22,144]},"strokeB":{"text":[44,161.5],"socket":[22,158]},"strokeA":{"text":[44,175.5],"socket":[22,172]},"strokeWeight":{"text":[44,189.5],"socket":[22,186]}},"outputPositions":{"gateOut":{"text":[219.2607421875,63.5],"socket":[198.2607421875,60]}}}},{"name":"Xfj4aqa","module":{"name":"DrawEllipse","tag":"Drawing","inputs":{"multiply":"any","v":"Vector","r":"Number","a":"Number"},"outputs":{"done":"Number"}},"moduleName":"DrawEllipse","inputs":{"v":{"type":"connection","module":"Ef1hgqv","property":"gateOut"},"r":{"type":"value","value":[20,20]}},"drawingValues":{"position":[1271,439.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[154.8447265625,45],"dimensions":[232.2138671875,116],"inputPositions":{"multiply":{"text":[44,63.5],"socket":[22,60]},"v":{"text":[44,77.5],"socket":[22,74]},"r":{"text":[44,91.5],"socket":[22,88]},"a":{"text":[44,105.5],"socket":[22,102]}},"outputPositions":{"done":{"text":[182.8447265625,63.5],"socket":[161.8447265625,60]}}}},{"name":"Ef1hgqv","module":{"name":"DrawBackground","tag":"Drawing","inputs":{"gateIn":"any","fillR":"Number","fillG":"Number","fillB":"Number","fillA":"Number"},"outputs":{"gateOut":"any"}},"moduleName":"DrawBackground","inputs":{"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0},"gateIn":{"type":"connection","module":"U94lq7e","property":"gateOut"}},"drawingValues":{"position":[933,477.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[145.7041015625,45],"dimensions":[243.07568359375,130],"inputPositions":{"gateIn":{"text":[44,63.5],"socket":[22,60]},"fillR":{"text":[44,77.5],"socket":[22,74]},"fillG":{"text":[44,91.5],"socket":[22,88]},"fillB":{"text":[44,105.5],"socket":[22,102]},"fillA":{"text":[44,119.5],"socket":[22,116]}},"outputPositions":{"gateOut":{"text":[173.7041015625,63.5],"socket":[152.7041015625,60]}}}},{"name":"Iue58qd","module":{"name":"Global","tag":"Misc","inputs":{},"outputs":{"w":"Number","h":"Number","wh":"Vector","CV":"Vector","BV":"Vector","ZV":"Vector","PI":"Number","TAU":"Number","one":"Number","zero":"Number"}},"moduleName":"Global","inputs":{},"drawingValues":{"position":[-72,358.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[133.1796875,200],"inputPositions":{},"outputPositions":{"w":{"text":[88,63.5],"socket":[67,60]},"h":{"text":[88,77.5],"socket":[67,74]},"wh":{"text":[88,91.5],"socket":[67,88]},"CV":{"text":[88,105.5],"socket":[67,102]},"BV":{"text":[88,119.5],"socket":[67,116]},"ZV":{"text":[88,133.5],"socket":[67,130]},"PI":{"text":[88,147.5],"socket":[67,144]},"TAU":{"text":[88,161.5],"socket":[67,158]},"one":{"text":[88,175.5],"socket":[67,172]},"zero":{"text":[88,189.5],"socket":[67,186]}}}},{"name":"Uzngp2x","module":{"name":"Perlin","tag":"Random and Noise","inputs":{"seed":"Number","v":"Vector"},"outputs":{"output":"Number"}},"moduleName":"Perlin","inputs":{"v":{"type":"connection","module":"Mjzxlpo","property":"output"}},"drawingValues":{"position":[-115,614.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[136.52685546875,45],"dimensions":[222.23095703125,88],"inputPositions":{"seed":{"text":[44,63.5],"socket":[22,60]},"v":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"output":{"text":[164.52685546875,63.5],"socket":[143.52685546875,60]}}}},{"name":"Mjzxlpo","module":{"name":"Vectorize","tag":"Vector","inputs":{"x":"Number","y":"Number"},"outputs":{"output":"Vector"}},"moduleName":"Vectorize","inputs":{"x":{"type":"connection","module":"Vmpkscs","property":"t60"},"y":{"type":"connection","module":"Vmpkscs","property":"t200"}},"drawingValues":{"position":[-322,614.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.5,45],"dimensions":[197.2041015625,88],"inputPositions":{"x":{"text":[44,63.5],"socket":[22,60]},"y":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"output":{"text":[139.5,63.5],"socket":[118.5,60]}}}},{"name":"Vmpkscs","module":{"name":"Time","tag":"Time","inputs":{},"outputs":{"t":"Number","t2":"Number","t10":"Number","t30":"Number","t60":"Number","t100":"Number","t200":"Number","t300":"Number"}},"moduleName":"Time","inputs":{},"drawingValues":{"position":[-467,565.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[133.1943359375,172],"inputPositions":{},"outputPositions":{"t":{"text":[88,63.5],"socket":[67,60]},"t2":{"text":[88,77.5],"socket":[67,74]},"t10":{"text":[88,91.5],"socket":[67,88]},"t30":{"text":[88,105.5],"socket":[67,102]},"t60":{"text":[88,119.5],"socket":[67,116]},"t100":{"text":[88,133.5],"socket":[67,130]},"t200":{"text":[88,147.5],"socket":[67,144]},"t300":{"text":[88,161.5],"socket":[67,158]}}}},{"name":"F646xdy","module":{"name":"Vectorize","tag":"Vector","inputs":{"x":"Number","y":"Number"},"outputs":{"output":"Vector"}},"moduleName":"Vectorize","inputs":{"y":{"type":"connection","module":"Ppmu6i4","property":"m"},"x":{"type":"connection","module":"Vj3azza","property":"m"}},"drawingValues":{"position":[367,545.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.5,45],"dimensions":[197.2041015625,88],"inputPositions":{"x":{"text":[44,63.5],"socket":[22,60]},"y":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"output":{"text":[139.5,63.5],"socket":[118.5,60]}}}},{"name":"Ppmu6i4","module":{"name":"Multiply","tag":"Math","inputs":{"a":"Number","b":"Number"},"outputs":{"m":"Number"}},"moduleName":"Multiply","inputs":{"b":{"type":"connection","module":"Uzngp2x","property":"output"},"a":{"type":"connection","module":"Iue58qd","property":"h"}},"drawingValues":{"position":[138,593.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[112.34228515625,45],"dimensions":[168.83740234375,88],"inputPositions":{"a":{"text":[44,63.5],"socket":[22,60]},"b":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"m":{"text":[140.34228515625,63.5],"socket":[119.34228515625,60]}}}},{"name":"Vj3azza","module":{"name":"Multiply","tag":"Math","inputs":{"a":"Number","b":"Number"},"outputs":{"m":"Number"}},"moduleName":"Multiply","inputs":{"a":{"type":"connection","module":"Iue58qd","property":"w"},"b":{"type":"value","value":0.5}},"drawingValues":{"position":[140,479.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[112.34228515625,45],"dimensions":[168.83740234375,88],"inputPositions":{"a":{"text":[44,63.5],"socket":[22,60]},"b":{"text":[44,77.5],"socket":[22,74]}},"outputPositions":{"m":{"text":[140.34228515625,63.5],"socket":[119.34228515625,60]}}}}]`)

// export const rack = JSON.parse(`[{
// 	"name": "Kt27cf6",
// 	"module": "Wave",
// 	"moduleName": "Wave",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Fk1bjdf",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [917, 683.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [186.6845703125, 120],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"sinx": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			},
// 			"nsinx": {
// 				"text": [127.5, 75],
// 				"socket": [112.5, 70]
// 			},
// 			"cosx": {
// 				"text": [127.5, 90],
// 				"socket": [112.5, 85]
// 			},
// 			"ncosx": {
// 				"text": [127.5, 105],
// 				"socket": [112.5, 100]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Hjixlpf",
// 	"module": "Wave",
// 	"moduleName": "Wave",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Fk1bjdf",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [915, 348.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [186.6845703125, 120],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"sinx": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			},
// 			"nsinx": {
// 				"text": [127.5, 75],
// 				"socket": [112.5, 70]
// 			},
// 			"cosx": {
// 				"text": [127.5, 90],
// 				"socket": [112.5, 85]
// 			},
// 			"ncosx": {
// 				"text": [127.5, 105],
// 				"socket": [112.5, 100]
// 			}
// 		}
// 	}
// }, {
// 	"name": "V32z76f",
// 	"module": "Multi",
// 	"moduleName": "Multi",
// 	"inputs": {
// 		"n": {
// 			"type": "value",
// 			"value": 100
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [498, 606.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [190.04638671875, 75],
// 		"inputPositions": {
// 			"n": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Pmnvzzo",
// 	"module": "Global",
// 	"moduleName": "Global",
// 	"inputs": {},
// 	"drawingValues": {
// 		"position": [193, 89.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [60, 45],
// 		"dimensions": [129.1796875, 210],
// 		"inputPositions": {},
// 		"outputPositions": {
// 			"w": {
// 				"text": [80, 60],
// 				"socket": [65, 55]
// 			},
// 			"h": {
// 				"text": [80, 75],
// 				"socket": [65, 70]
// 			},
// 			"wh": {
// 				"text": [80, 90],
// 				"socket": [65, 85]
// 			},
// 			"CV": {
// 				"text": [80, 105],
// 				"socket": [65, 100]
// 			},
// 			"BV": {
// 				"text": [80, 120],
// 				"socket": [65, 115]
// 			},
// 			"ZV": {
// 				"text": [80, 135],
// 				"socket": [65, 130]
// 			},
// 			"PI": {
// 				"text": [80, 150],
// 				"socket": [65, 145]
// 			},
// 			"TAU": {
// 				"text": [80, 165],
// 				"socket": [65, 160]
// 			},
// 			"one": {
// 				"text": [80, 180],
// 				"socket": [65, 175]
// 			},
// 			"zero": {
// 				"text": [80, 195],
// 				"socket": [65, 190]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Fk1bjdf",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"b": {
// 			"type": "connection",
// 			"module": "V32z76f",
// 			"property": "output"
// 		},
// 		"a": {
// 			"type": "connection",
// 			"module": "Uu9ycsk",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [734, 501.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "U5s143c",
// 	"module": "Vectorize",
// 	"moduleName": "Vectorize",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Futwafc",
// 			"property": "m"
// 		},
// 		"y": {
// 			"type": "connection",
// 			"module": "Gkwe6yq",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1370, 545.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [189.2041015625, 90],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"y": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Ve4zv7f",
// 	"module": "MapRange",
// 	"moduleName": "MapRange",
// 	"inputs": {
// 		"value": {
// 			"type": "connection",
// 			"module": "V32z76f",
// 			"property": "output"
// 		},
// 		"fromA": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"fromB": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"toA": {
// 			"type": "value",
// 			"value": 50
// 		},
// 		"toB": {
// 			"type": "value",
// 			"value": 250
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [911, 512.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [140.0048828125, 45],
// 		"dimensions": [221.708984375, 135],
// 		"inputPositions": {
// 			"fromA": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"fromB": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"toA": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"toB": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			},
// 			"value": {
// 				"text": [40, 120],
// 				"socket": [20, 115]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [160.0048828125, 60],
// 				"socket": [145.0048828125, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Gkwe6yq",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "Ve4zv7f",
// 			"property": "output"
// 		},
// 		"b": {
// 			"type": "connection",
// 			"module": "Kt27cf6",
// 			"property": "sinx"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1162, 625.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Futwafc",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"b": {
// 			"type": "connection",
// 			"module": "Ve4zv7f",
// 			"property": "output"
// 		},
// 		"a": {
// 			"type": "connection",
// 			"module": "Hjixlpf",
// 			"property": "cosx"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1163, 505.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Bynpdnp",
// 	"module": "VectorTranslate",
// 	"moduleName": "VectorTranslate",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "Pmnvzzo",
// 			"property": "CV"
// 		},
// 		"tv": {
// 			"type": "connection",
// 			"module": "Ipo2kme",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [2067, 551.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [111.66748046875, 45],
// 		"dimensions": [193.37158203125, 90],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"tv": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [131.66748046875, 60],
// 				"socket": [116.66748046875, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Dlbaamm",
// 	"module": "Style",
// 	"moduleName": "Style",
// 	"inputs": {
// 		"gateIn": {
// 			"type": "connection",
// 			"module": "Ysb4zlt",
// 			"property": "gateOut"
// 		},
// 		"fillR": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"fillG": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"fillB": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"fillA": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"strokeA": {
// 			"type": "value",
// 			"value": 0.2
// 		},
// 		"strokeR": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"strokeG": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"strokeB": {
// 			"type": "value",
// 			"value": 1
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [2536, 611.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [187.2607421875, 45],
// 		"dimensions": [280.63232421875, 210],
// 		"inputPositions": {
// 			"gateIn": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"fillR": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"fillG": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"fillB": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			},
// 			"fillA": {
// 				"text": [40, 120],
// 				"socket": [20, 115]
// 			},
// 			"strokeR": {
// 				"text": [40, 135],
// 				"socket": [20, 130]
// 			},
// 			"strokeG": {
// 				"text": [40, 150],
// 				"socket": [20, 145]
// 			},
// 			"strokeB": {
// 				"text": [40, 165],
// 				"socket": [20, 160]
// 			},
// 			"strokeA": {
// 				"text": [40, 180],
// 				"socket": [20, 175]
// 			},
// 			"strokeWeight": {
// 				"text": [40, 195],
// 				"socket": [20, 190]
// 			}
// 		},
// 		"outputPositions": {
// 			"gateOut": {
// 				"text": [207.2607421875, 60],
// 				"socket": [192.2607421875, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Ysb4zlt",
// 	"module": "DrawBackground",
// 	"moduleName": "DrawBackground",
// 	"inputs": {
// 		"gateIn": {
// 			"type": "connection",
// 			"module": "Bynpdnp",
// 			"property": "output"
// 		},
// 		"fillR": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"fillG": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"fillB": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"fillA": {
// 			"type": "value",
// 			"value": 0.1
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [2280, 611.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [141.7041015625, 45],
// 		"dimensions": [235.07568359375, 135],
// 		"inputPositions": {
// 			"gateIn": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"fillR": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"fillG": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"fillB": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			},
// 			"fillA": {
// 				"text": [40, 120],
// 				"socket": [20, 115]
// 			}
// 		},
// 		"outputPositions": {
// 			"gateOut": {
// 				"text": [161.7041015625, 60],
// 				"socket": [146.7041015625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Xq4fgx9",
// 	"module": "DrawEllipse",
// 	"moduleName": "DrawEllipse",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "Dlbaamm",
// 			"property": "gateOut"
// 		},
// 		"r": {
// 			"type": "value",
// 			"value": [50, 50]
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [2836, 513.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [150.8447265625, 45],
// 		"dimensions": [224.2138671875, 120],
// 		"inputPositions": {
// 			"multiply": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"v": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"r": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"a": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			}
// 		},
// 		"outputPositions": {
// 			"done": {
// 				"text": [170.8447265625, 60],
// 				"socket": [155.8447265625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Csj6ulf",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "Pmnvzzo",
// 			"property": "TAU"
// 		},
// 		"b": {
// 			"type": "connection",
// 			"module": "Oogpgwe",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [385, 292.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Uu9ycsk",
// 	"module": "Add",
// 	"moduleName": "Add",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "Csj6ulf",
// 			"property": "m"
// 		},
// 		"b": {
// 			"type": "connection",
// 			"module": "Yl3ifpb",
// 			"property": "t200"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [538, 398.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Yl3ifpb",
// 	"module": "Time",
// 	"moduleName": "Time",
// 	"inputs": {},
// 	"drawingValues": {
// 		"position": [-275, 384.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [60, 45],
// 		"dimensions": [129.1943359375, 180],
// 		"inputPositions": {},
// 		"outputPositions": {
// 			"t": {
// 				"text": [80, 60],
// 				"socket": [65, 55]
// 			},
// 			"t2": {
// 				"text": [80, 75],
// 				"socket": [65, 70]
// 			},
// 			"t10": {
// 				"text": [80, 90],
// 				"socket": [65, 85]
// 			},
// 			"t30": {
// 				"text": [80, 105],
// 				"socket": [65, 100]
// 			},
// 			"t60": {
// 				"text": [80, 120],
// 				"socket": [65, 115]
// 			},
// 			"t100": {
// 				"text": [80, 135],
// 				"socket": [65, 130]
// 			},
// 			"t200": {
// 				"text": [80, 150],
// 				"socket": [65, 145]
// 			},
// 			"t300": {
// 				"text": [80, 165],
// 				"socket": [65, 160]
// 			}
// 		}
// 	}
// }, {
// 	"name": "I1nxzoi",
// 	"module": "VectorRotate",
// 	"moduleName": "VectorRotate",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "U5s143c",
// 			"property": "output"
// 		},
// 		"a": {
// 			"type": "connection",
// 			"module": "Pz6i4db",
// 			"property": "t60"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1580, 548.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [115.84228515625, 45],
// 		"dimensions": [197.54638671875, 105],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"cp": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"a": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [135.84228515625, 60],
// 				"socket": [120.84228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Pz6i4db",
// 	"module": "Time",
// 	"moduleName": "Time",
// 	"inputs": {},
// 	"drawingValues": {
// 		"position": [838, 829.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [60, 45],
// 		"dimensions": [129.1943359375, 180],
// 		"inputPositions": {},
// 		"outputPositions": {
// 			"t": {
// 				"text": [80, 60],
// 				"socket": [65, 55]
// 			},
// 			"t2": {
// 				"text": [80, 75],
// 				"socket": [65, 70]
// 			},
// 			"t10": {
// 				"text": [80, 90],
// 				"socket": [65, 85]
// 			},
// 			"t30": {
// 				"text": [80, 105],
// 				"socket": [65, 100]
// 			},
// 			"t60": {
// 				"text": [80, 120],
// 				"socket": [65, 115]
// 			},
// 			"t100": {
// 				"text": [80, 135],
// 				"socket": [65, 130]
// 			},
// 			"t200": {
// 				"text": [80, 150],
// 				"socket": [65, 145]
// 			},
// 			"t300": {
// 				"text": [80, 165],
// 				"socket": [65, 160]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Q5q0xgb",
// 	"module": "Wave",
// 	"moduleName": "Wave",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Yl3ifpb",
// 			"property": "t300"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [-109, 329.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [186.6845703125, 120],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"sinx": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			},
// 			"nsinx": {
// 				"text": [127.5, 75],
// 				"socket": [112.5, 70]
// 			},
// 			"cosx": {
// 				"text": [127.5, 90],
// 				"socket": [112.5, 85]
// 			},
// 			"ncosx": {
// 				"text": [127.5, 105],
// 				"socket": [112.5, 100]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Oogpgwe",
// 	"module": "MapRange",
// 	"moduleName": "MapRange",
// 	"inputs": {
// 		"fromA": {
// 			"type": "value",
// 			"value": 0
// 		},
// 		"fromB": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"toA": {
// 			"type": "value",
// 			"value": 1
// 		},
// 		"toB": {
// 			"type": "value",
// 			"value": 6
// 		},
// 		"value": {
// 			"type": "connection",
// 			"module": "Q5q0xgb",
// 			"property": "ncosx"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [100, 305.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [140.0048828125, 45],
// 		"dimensions": [221.708984375, 135],
// 		"inputPositions": {
// 			"fromA": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"fromB": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"toA": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"toB": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			},
// 			"value": {
// 				"text": [40, 120],
// 				"socket": [20, 115]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [160.0048828125, 60],
// 				"socket": [145.0048828125, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Ipo2kme",
// 	"module": "VectorScale",
// 	"moduleName": "VectorScale",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "I1nxzoi",
// 			"property": "output"
// 		},
// 		"scale": {
// 			"type": "connection",
// 			"module": "Flotir1",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1823, 552.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [135.01708984375, 45],
// 		"dimensions": [216.72119140625, 90],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"scale": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [155.01708984375, 60],
// 				"socket": [140.01708984375, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Aj0xo1e",
// 	"module": "Wave",
// 	"moduleName": "Wave",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Pz6i4db",
// 			"property": "t100"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1005, 902.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [186.6845703125, 120],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"sinx": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			},
// 			"nsinx": {
// 				"text": [127.5, 75],
// 				"socket": [112.5, 70]
// 			},
// 			"cosx": {
// 				"text": [127.5, 90],
// 				"socket": [112.5, 85]
// 			},
// 			"ncosx": {
// 				"text": [127.5, 105],
// 				"socket": [112.5, 100]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Flotir1",
// 	"module": "Vectorize",
// 	"moduleName": "Vectorize",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Aj0xo1e",
// 			"property": "sinx"
// 		},
// 		"y": {
// 			"type": "connection",
// 			"module": "Rrcvzbu",
// 			"property": "cosx"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1691, 676.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [189.2041015625, 90],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"y": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Rrcvzbu",
// 	"module": "Wave",
// 	"moduleName": "Wave",
// 	"inputs": {
// 		"x": {
// 			"type": "connection",
// 			"module": "Oc6ok3i",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1575, 795.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [186.6845703125, 120],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			}
// 		},
// 		"outputPositions": {
// 			"sinx": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			},
// 			"nsinx": {
// 				"text": [127.5, 75],
// 				"socket": [112.5, 70]
// 			},
// 			"cosx": {
// 				"text": [127.5, 90],
// 				"socket": [112.5, 85]
// 			},
// 			"ncosx": {
// 				"text": [127.5, 105],
// 				"socket": [112.5, 100]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Mam44xw",
// 	"module": "VectorTranslate",
// 	"moduleName": "VectorTranslate",
// 	"inputs": {
// 		"tv": {
// 			"type": "connection",
// 			"module": "Pmnvzzo",
// 			"property": "CV"
// 		},
// 		"v": {
// 			"type": "connection",
// 			"module": "M6r5814",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [2096, 346.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [111.66748046875, 45],
// 		"dimensions": [193.37158203125, 90],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"tv": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [131.66748046875, 60],
// 				"socket": [116.66748046875, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Q77mbh3",
// 	"module": "DrawEllipse",
// 	"moduleName": "DrawEllipse",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "G24930e",
// 			"property": "output"
// 		},
// 		"r": {
// 			"type": "value",
// 			"value": [50, 50]
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [3370, 518.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [150.8447265625, 45],
// 		"dimensions": [224.2138671875, 120],
// 		"inputPositions": {
// 			"multiply": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"v": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"r": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			},
// 			"a": {
// 				"text": [40, 105],
// 				"socket": [20, 100]
// 			}
// 		},
// 		"outputPositions": {
// 			"done": {
// 				"text": [170.8447265625, 60],
// 				"socket": [155.8447265625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "G24930e",
// 	"module": "Gate",
// 	"moduleName": "Gate",
// 	"inputs": {
// 		"trigger": {
// 			"type": "connection",
// 			"module": "Xq4fgx9",
// 			"property": "done"
// 		},
// 		"x": {
// 			"type": "connection",
// 			"module": "Mam44xw",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [3095, 392.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [142.51708984375, 45],
// 		"dimensions": [224.22119140625, 90],
// 		"inputPositions": {
// 			"trigger": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"x": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [162.51708984375, 60],
// 				"socket": [147.51708984375, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Zf3q52s",
// 	"module": "Vectorize",
// 	"moduleName": "Vectorize",
// 	"inputs": {
// 		"y": {
// 			"type": "connection",
// 			"module": "Futwafc",
// 			"property": "m"
// 		},
// 		"x": {
// 			"type": "connection",
// 			"module": "Gkwe6yq",
// 			"property": "m"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1376, 435.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [107.5, 45],
// 		"dimensions": [189.2041015625, 90],
// 		"inputPositions": {
// 			"x": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"y": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [127.5, 60],
// 				"socket": [112.5, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "E2dhyu1",
// 	"module": "VectorRotate",
// 	"moduleName": "VectorRotate",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "G837cnd",
// 			"property": "m"
// 		},
// 		"v": {
// 			"type": "connection",
// 			"module": "Zf3q52s",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1593, 425.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [115.84228515625, 45],
// 		"dimensions": [197.54638671875, 105],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"cp": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			},
// 			"a": {
// 				"text": [40, 90],
// 				"socket": [20, 85]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [135.84228515625, 60],
// 				"socket": [120.84228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "G837cnd",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"b": {
// 			"type": "connection",
// 			"module": "Pz6i4db",
// 			"property": "t60"
// 		},
// 		"a": {
// 			"type": "value",
// 			"value": -1
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1347, 674.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "M6r5814",
// 	"module": "VectorScale",
// 	"moduleName": "VectorScale",
// 	"inputs": {
// 		"v": {
// 			"type": "connection",
// 			"module": "E2dhyu1",
// 			"property": "output"
// 		},
// 		"scale": {
// 			"type": "connection",
// 			"module": "Flotir1",
// 			"property": "output"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1808, 428.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [135.01708984375, 45],
// 		"dimensions": [216.72119140625, 90],
// 		"inputPositions": {
// 			"v": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"scale": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"output": {
// 				"text": [155.01708984375, 60],
// 				"socket": [140.01708984375, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Cmdymga",
// 	"module": "Multiply",
// 	"moduleName": "Multiply",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "Aj0xo1e",
// 			"property": "cosx"
// 		},
// 		"b": {
// 			"type": "value",
// 			"value": 3.142
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1205, 980.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }, {
// 	"name": "Oc6ok3i",
// 	"module": "Add",
// 	"moduleName": "Add",
// 	"inputs": {
// 		"a": {
// 			"type": "connection",
// 			"module": "Cmdymga",
// 			"property": "m"
// 		},
// 		"b": {
// 			"type": "connection",
// 			"module": "Pz6i4db",
// 			"property": "t200"
// 		}
// 	},
// 	"drawingValues": {
// 		"position": [1385, 889.5],
// 		"textPosition": [15, 15],
// 		"inPosition": [15, 45],
// 		"outPosition": [108.34228515625, 45],
// 		"dimensions": [160.83740234375, 90],
// 		"inputPositions": {
// 			"a": {
// 				"text": [40, 60],
// 				"socket": [20, 55]
// 			},
// 			"b": {
// 				"text": [40, 75],
// 				"socket": [20, 70]
// 			}
// 		},
// 		"outputPositions": {
// 			"m": {
// 				"text": [128.34228515625, 60],
// 				"socket": [113.34228515625, 55]
// 			}
// 		}
// 	}
// }]`);





















// export const rack = JSON.parse(`[{"name":"Ni33wi7","module":"Polygon","moduleName":"Polygon","inputs":{"sides":{"type":"connection","module":"S5ued5v","property":"m"}},"drawingValues":{"position":[938,205.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[215.0439453125,75],"inputPositions":{"sides":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"points":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"Dliqk0i","module":"Time","moduleName":"Time","inputs":{},"drawingValues":{"position":[-2,158.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1943359375,180],"inputPositions":{},"outputPositions":{"t":{"text":[80,60],"socket":[65,55]},"t2":{"text":[80,75],"socket":[65,70]},"t10":{"text":[80,90],"socket":[65,85]},"t30":{"text":[80,105],"socket":[65,100]},"t60":{"text":[80,120],"socket":[65,115]},"t100":{"text":[80,135],"socket":[65,130]},"t200":{"text":[80,150],"socket":[65,145]},"t300":{"text":[80,165],"socket":[65,160]}}}},{"name":"S5ued5v","module":"Add","moduleName":"Add","inputs":{"b":{"type":"value","value":3},"a":{"type":"connection","module":"Rsg9ysb","property":"m"}},"drawingValues":{"position":[668,201.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}},{"name":"Zo86wc5","module":"Round","moduleName":"Round","inputs":{"a":{"type":"connection","module":"Dliqk0i","property":"t30"}},"drawingValues":{"position":[180,180.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[186.70654296875,105],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"round":{"text":[128.34228515625,60],"socket":[113.34228515625,55]},"floor":{"text":[128.34228515625,75],"socket":[113.34228515625,70]},"ceil":{"text":[128.34228515625,90],"socket":[113.34228515625,85]}}}},{"name":"Gbsgseh","module":"VectorScale","moduleName":"VectorScale","inputs":{"v":{"type":"connection","module":"Ni33wi7","property":"points"},"scale":{"type":"value","value":[100,100]}},"drawingValues":{"position":[1187,208.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[135.01708984375,45],"dimensions":[216.72119140625,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"scale":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[155.01708984375,60],"socket":[140.01708984375,55]}}}},{"name":"Ire090y","module":"VectorTranslate","moduleName":"VectorTranslate","inputs":{"v":{"type":"connection","module":"Gbsgseh","property":"output"},"tv":{"type":"connection","module":"Mpim0yd","property":"CV"}},"drawingValues":{"position":[1452,194.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[111.66748046875,45],"dimensions":[193.37158203125,90],"inputPositions":{"v":{"text":[40,60],"socket":[20,55]},"tv":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"output":{"text":[131.66748046875,60],"socket":[116.66748046875,55]}}}},{"name":"Mpim0yd","module":"Global","moduleName":"Global","inputs":{},"drawingValues":{"position":[1244,-11.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[60,45],"dimensions":[129.1796875,210],"inputPositions":{},"outputPositions":{"w":{"text":[80,60],"socket":[65,55]},"h":{"text":[80,75],"socket":[65,70]},"wh":{"text":[80,90],"socket":[65,85]},"CV":{"text":[80,105],"socket":[65,100]},"BV":{"text":[80,120],"socket":[65,115]},"ZV":{"text":[80,135],"socket":[65,130]},"PI":{"text":[80,150],"socket":[65,145]},"TAU":{"text":[80,165],"socket":[65,160]},"one":{"text":[80,180],"socket":[65,175]},"zero":{"text":[80,195],"socket":[65,190]}}}},{"name":"Ctyxqdl","module":"DrawBackground","moduleName":"DrawBackground","inputs":{"gateIn":{"type":"connection","module":"Ire090y","property":"output"},"fillR":{"type":"value","value":0},"fillG":{"type":"value","value":0},"fillB":{"type":"value","value":0}},"drawingValues":{"position":[1672,289.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[141.7041015625,45],"dimensions":[235.07568359375,135],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]}},"outputPositions":{"gateOut":{"text":[161.7041015625,60],"socket":[146.7041015625,55]}}}},{"name":"Qoxppmm","module":"Style","moduleName":"Style","inputs":{"gateIn":{"type":"connection","module":"Ctyxqdl","property":"gateOut"},"fillR":{"type":"value","value":1},"fillG":{"type":"value","value":1},"fillB":{"type":"value","value":1},"strokeA":{"type":"value","value":0}},"drawingValues":{"position":[1918,289.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[187.2607421875,45],"dimensions":[280.63232421875,210],"inputPositions":{"gateIn":{"text":[40,60],"socket":[20,55]},"fillR":{"text":[40,75],"socket":[20,70]},"fillG":{"text":[40,90],"socket":[20,85]},"fillB":{"text":[40,105],"socket":[20,100]},"fillA":{"text":[40,120],"socket":[20,115]},"strokeR":{"text":[40,135],"socket":[20,130]},"strokeG":{"text":[40,150],"socket":[20,145]},"strokeB":{"text":[40,165],"socket":[20,160]},"strokeA":{"text":[40,180],"socket":[20,175]},"strokeWeight":{"text":[40,195],"socket":[20,190]}},"outputPositions":{"gateOut":{"text":[207.2607421875,60],"socket":[192.2607421875,55]}}}},{"name":"Gfjtqql","module":"DrawPolygon","moduleName":"DrawPolygon","inputs":{"points":{"type":"connection","module":"Qoxppmm","property":"gateOut"}},"drawingValues":{"position":[2242,216.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[140.02685546875,45],"dimensions":[213.39599609375,75],"inputPositions":{"points":{"text":[40,60],"socket":[20,55]}},"outputPositions":{"done":{"text":[160.02685546875,60],"socket":[145.02685546875,55]}}}},{"name":"Rsg9ysb","module":"Mod","moduleName":"Mod","inputs":{"a":{"type":"connection","module":"Zo86wc5","property":"floor"},"b":{"type":"value","value":4}},"drawingValues":{"position":[433,197.5],"textPosition":[15,15],"inPosition":[15,45],"outPosition":[108.34228515625,45],"dimensions":[160.83740234375,90],"inputPositions":{"a":{"text":[40,60],"socket":[20,55]},"b":{"text":[40,75],"socket":[20,70]}},"outputPositions":{"m":{"text":[128.34228515625,60],"socket":[113.34228515625,55]}}}}]`)