# Modular Animation Synthesizer

This project applies the philosphy of modular synthesizers to creating animations. Each module can take some signals as inputs and transform them, producing output signals.

For example, the TrueTime module can output a value that increases with time, which can be consumed by a polygon module taking a number of sides as input. The time signal is transformed into a polygon signal. This can be consumed by a DrawPolygon module, which can draw it to the screen.

## Running the project

```bash
yarn install
yarn build
```

This will install dependencies and start a server (typically on port 1234)

## Notes

This project is still under heavy development and is not yet stable. Debugging can be quite difficult without knowledge of how the code works.