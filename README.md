# array.vector.js

[![](https://travis-ci.org/jncraton/array.vector.js.svg?branch=master)](https://travis-ci.org/jncraton/array.vector.js)

Adds several generic vector methods to the Array prototype. Most vector methods produce undefined behavior if the array contains non-numeric elements.

## Supported methods

- `w()` - Gets fourth to last component
- `w(value)` - Sets fourth to last component
- `x()` - Gets third to last component
- `x(value)` - Sets third to last component
- `y()` - Gets second to last component
- `y(value)` - Sets second to last component
- `z()` - Gets last component
- `z(value)` - Sets last compnent
- `add(vector)` - Returns a new vector that is the sum of this vector and `vector`
- `sub(vector)` - Returns a new vector that is the difference between this vector `vector`
- `mul(scalar)` - Returns a new vector with each component multiplied by `scalar`
- `div(scalar)` - Returns a new vector with each component divided by `scalar`
- `mag()` - Returns the magnitude of this vector
- `magSq()` - Returns the magnitude squared of this vector
- `dist(vector)` - Returns the distance between this vector and `vector`
- `distSq(vector)` - Returns the distance squared between this vector and `vector`
- `abs()` - Performs Math.abs() on each component
- `ceil()` - Performs Math.ceil() on each component
- `floor()` - Performs Math.floor() on each component
- `max(value)` - Performs Math.max() on each component
- `min(value)` - Performs Math.min() on each component
- `round()` - Performs Math.round() on each component
