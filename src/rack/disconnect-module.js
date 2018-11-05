export const disconnectModule = (rack, moduleId) => {
  rack.forEach(md => {
    Object.entries(md.inputs).forEach(([inputName, input]) => {
      if (input.type === 'connection' && input.module === moduleId) {
        delete md.inputs[inputName];
      }
    });
  });
};
