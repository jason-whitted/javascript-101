# Array Inheritance

Arrays inherit several properties and methods from the `Array` base type.

```js
var arr = [
  true,
  "123",
  42,
];
```

## Inherited Properties

| Property                | Result      | Type      | Notes                                                 |
|-------------------------|-------------|-----------|-------------------------------------------------------|
| arr.`length`            | `3`         | number    | Returs the length of the array                        |
| arr`[`0`]`              | `true`      | boolean   | Returns the value at the specified index (zero-based) |
| arr`[`1`]`              | "123"       | string    | If the `length` is `3` the valid values or `0` to `2`   |
| arr`[`arr.length - 1`]` | 42          | object    | The last value is accessed with `length - 1`          |
| arr`[`999`]`            | `undefined` | undefined | Returns `undefined` if the index is outside of bounds |

## Inherited Methods

| Method | Result | Type |
|----------|--------|------|
| arr.`includes`("123") | `true` | boolean | Returns whether the specified value is contained within the array |
| arr.`includes`(123)   | `false` | boolean | Object equality (`===`) |
| arr.`indexOf`("123")  | `1` | number | Returns the index of the specified value within the array |
| arr.`indexOf`(123)    | `-1` | number | Returns `-1` if the value cannot be found |
| arr.`concat`([3.1415, "xyz"]) | `[true, "123", 42, 3.1415, "xyz"]` | Returns a new array concatenating the source array and the specified array |
| arr.`push`({ age: 18 }) | `4` | Adds the specified value to the end of the array and returns the resulting array length |
| arr.`join`(" :: ") | "true :: 123 :: 42" | Returns a string with all of the elements concatenated using the specified separator |

## Documentation
There are many, many more!  Don't be afraid to check the docs.
