let frames = 0;
let tt = 0;
const startTime = Date.now();
let lastTick = 0;
let deltaTime = lastTick - tt;

export const getFrames = () => frames;
export const setFrames = x => frames = x;
export const incFrames = () => frames++;

export const getCurrentTime = () => tt;
export const getDeltaTime = () => deltaTime;

export const updateTime = () => {
  lastTick = tt;
  tt = (Date.now() - startTime) * 0.001
  deltaTime = tt - lastTick;
  incFrames();
};
