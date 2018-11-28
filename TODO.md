# TODO

## To Pickup

- Rewrite all reducers with lenses
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
- Optimise selector and action imports for components - don't use more than needed
