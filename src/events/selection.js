export const start = (props, clickPosition) => {
  if (props.isInSelectionMode && !props.isSelecting) {
    props.startSelection(clickPosition);
    return true;
  }
};

export const move = (props, clickPosition) => {
  if (props.isInSelectionMode && props.isSelecting) {
    props.updateSelection(clickPosition);
    return true;
  }
}

export const end = (props, clickPosition) => {
  if (props.isInSelectionMode && props.isSelecting) {
    props.stopSelection();
    return true;
  }
};
