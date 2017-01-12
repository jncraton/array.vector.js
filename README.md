# array.vector.js

[![](https://travis-ci.org/jncraton/array.vector.js.svg?branch=master)](https://travis-ci.org/jncraton/array.vector.js)

This library adds several generic vector methods to the Array prototype. These methods assume that the array is a list of numeric components. Most vector methods produce undefined behavior if the array contains non-numeric elements.

This library doesn't play nice with other libaries since it directly modifies Array.prototype. However, this allows for very clean vector syntax:

    > [1, 2].add([3,4])
    [4,6]
    
    > [1.6, 2.7].round()
    [2,3]
    
This library is meant to be incredibly lightweight. It currently comes in at 246 bytes minified and gzipped.

## Supported Array vector methods

- `x()` - Gets first component
- `x(value)` - Sets first component
- `y()` - Gets second component
- `y(value)` - Sets second component
- `z()` - Gets third
- `z(value)` - Sets third
- `add(vector)` - Returns a new vector that is the sum of this vector and `vector`
- `sub(vector)` - Returns a new vector that is the difference between this vector `vector`
- `mul(scalar)` - Returns a new vector with each component multiplied by `scalar`
- `div(scalar)` - Returns a new vector with each component divided by `scalar`
- `dot(vector)` - Returns the dot product of this vector and `vector`
- `cross(vector)` - Returns the cross product of this vector and `vector`
- `mag()` - Returns the magnitude of this vector
- `magSq()` - Returns the magnitude squared of this vector
- `dist(vector)` - Returns the distance between this vector and `vector`
- `distSq(vector)` - Returns the distance squared between this vector and `vector`
- `norm()` - Return the normal (length 1) vector
- `abs()` - Performs Math.abs() on each component
- `ceil()` - Performs Math.ceil() on each component
- `floor()` - Performs Math.floor() on each component
- `max(value)` - Performs Math.max() on each component
- `min(value)` - Performs Math.min() on each component
- `round()` - Performs Math.round() on each component
- `clamp(min, max)` - Clamps each component between the provided values

## Additional Math helper methods

- `clamp(value, min, max)` - Clamps a `value` between `min` and `max`