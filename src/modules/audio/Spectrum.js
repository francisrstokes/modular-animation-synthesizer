const fftSize = 256;
const divSize = Math.floor((fftSize/2) / 3);
let spectrumData = Array.from({length: fftSize}, () => 0);
let buffer = new Float32Array(fftSize / 2);
let analyser = null;

navigator
  .mediaDevices
  .getUserMedia({ audio: true, video: false })
  .then(stream => {
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    analyser = context.createAnalyser();

    source.connect(analyser);
    analyser.fftSize = fftSize;
  });

const max = a => a.reduce((a, b) => Math.max(a, b), 0);

export const Spectrum = {
  name: 'Spectrum',
  tag: 'Audio',
	inputs: {},
	outputs: {
    output: '[Number]',
    highestLow: 'Number',
    highestMid: 'Number',
    highestHigh: 'Number',
  },
	fn: () => {
    // Update the spectrum data
    analyser.getFloatFrequencyData(buffer);
    spectrumData = Array.from(buffer).map(x => 1 - (x + 128) / fftSize);

    const highestLow = max(spectrumData.slice(divSize * 2, divSize * 3));
    const highestMid = max(spectrumData.slice(divSize, divSize * 2));
    const highestHigh = max(spectrumData.slice(0, divSize));

    return {
      output: spectrumData,
      highestLow,
      highestMid,
      highestHigh,
    }
  }
};
