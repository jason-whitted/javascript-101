# API: Math
Math is a built-in object that has properties and methods for mathematical constants and functions.

-----
## Math.`floor`()
Returns the largest integer less than or equal to a given number.
### Syntax
```js
Math.floor(Number);
```

### Signature (Mental Model)
```js
(Number) → Number
```

### Examples
```js
Math.floor(3.1415);
// 3
```

-----
## Math.`ceil`()
Always rounds a number up to the next largest integer.
### Syntax
```js
Math.ceil(Number);
```

### Signature (Mental Model)
```js
(Number) → Number
```

### Examples
```js
Math.ceil(3.1415);
// 4
```

-----
## Math.`random`()
Returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).
### Syntax
```js
Math.random();
```

### Signature (Mental Model)
```js
() → Number
```

### Examples
```js
Math.random();
// A random number in the range of [0, 1)
// 0.0 is a possible value
// 0.99999999999 is a possible value
// 1 is not
```
