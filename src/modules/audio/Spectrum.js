const fftSize = 256;
const divSize = Math.floor((fftSize/2) / 3);
let spectrumData = Array.from({length: fftSize}, () => 0);
let bufferLength = 0;
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
    bufferLength = analyser.frequencyBinCount;
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
    const dataArray = new Uint8Array(bufferLength)
    analyser.getByteTimeDomainData(dataArray);
    spectrumData = Array.from(dataArray).map(x => x / fftSize);

    const highestLow = max(spectrumData.slice(0, divSize));
    const highestMid = max(spectrumData.slice(divSize, divSize * 2));
    const highestHigh = max(spectrumData.slice(divSize * 2, divSize * 3));

    return {
      output: spectrumData,
      highestLow,
      highestMid,
      highestHigh,
    }
  }
};
