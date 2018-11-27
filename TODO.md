# TODO

## To Pickup

- Rewrite all reducers with lenses
- Rewrite action creators to use createAction
- Clean up all the math util / collision code to consistently use either polygons or x,y,w,h
- Optimise topological sorting of graph using Khans Algorithm
  - https://en.wikipedia.org/wiki/Topological_sorting#Kahn's_algorithm

- Better, more descriptive names for inputs and outputs
- Modal support
- Better import and export
- Validation for json

## Backlog

- Incorperate type chechking at module connection time
- Use exception to display error help
  - Exceptions will mostly now come from mismatched types
- Lenses to read module properties
- Lenses in reducers (use over)
- Refactoring!
  - Better UI!
- Multi select menu
  - Copy
  - Paste
  - Delete
- Optimise selector and action imports for components - don't use more than needed

### Selection Mode:
  - Enter a mode where you can draw a selection Refactoring
  - Selected modules should be shown with a highlight
  - Dragging any modules while in selection mode drags all the selected modules
  - Ctrl + C in selection mode copies to the clipboard
  - Ctrl + V pastes a copy of all the modules that were selected and makes this the new selection