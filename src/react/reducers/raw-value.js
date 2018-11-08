export default (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_RAW_VALUE': return action.payload;
    default: return state;
  }
};

export const selectors = {
  rawValue: state => state.rawValue
};
