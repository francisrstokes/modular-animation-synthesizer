export const toggleOpen = (currentMode, setEditorMode) => {
  const nextMode = currentMode === 'animate' ? 'edit' : 'animate';
  setEditorMode(nextMode);
  return nextMode;
};