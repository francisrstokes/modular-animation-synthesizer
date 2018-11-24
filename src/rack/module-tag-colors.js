export const getTagColor = tag => {
  switch (tag) {
    case 'Drawing': return [38, 59, 255, 1];
    case 'Math': return [137, 123, 0, 1];
    case 'Geometry': return [92, 0, 168, 1];
    case 'Vector': return [0, 104, 19, 1];
    case 'Misc': return [124, 0, 47, 1];
    case 'Time': return [79, 79, 79, 1];
    case 'Interpolation': return [119, 0, 132, 1];
    case 'Random and Noise': return [108, 132, 83, 1];
    case 'Audio': return [137, 137, 137, 1];
    case 'Feedback': return [0xe5, 0xe5, 0x00, 1];
    default: return [0,0,0,1];
  }
};