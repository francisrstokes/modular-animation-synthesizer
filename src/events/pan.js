import { vSub, vAdd } from 'vec-la-fp';

export const start = ({gotoPanMode, setPanPosition}, clickPosition) => {
  gotoPanMode();
  setPanPosition(clickPosition);
};

export const move = ({isInPanMode, panPosition, globalOffset, setGlobalOffset, setPanPosition}, clickPosition) => {
  if (isInPanMode) {
    const diff = vSub(clickPosition, panPosition);
    setGlobalOffset(vAdd(globalOffset, diff));
    setPanPosition(clickPosition);
  }
};
