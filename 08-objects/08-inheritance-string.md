# Objects: String Inheritance

Strings inherit several properties and methods from the `String` base type.

```js
var str = "abcdefghijklmnopqrstuvwxyz";
```

## Inherited Properties

| Property            | Result      | Type      | Notes                                                     |
|---------------------|-------------|-----------|-----------------------------------------------------------|
| str.`length`          | `26`        | number    | Returs the length of the string                           |
| str`[`0`]`              | "a"         | string    | Returns the character at the specified index (zero-based) |
| str`[`1`]`              | "b"         | string    | If the length is `26` the valid values or `0` to `25`     |
| str`[`str.length - 1`]` | "z"         | string    | The last character is accessed with `length - 1`          |
| str`[`999`]`            | `undefined` | undefined | Returns `undefined` if the index is outside of bounds     |

## Inherited Methods

| Method | Result | Type |
|----------|--------|------|
| str.`includes`("lmnop") | `true` | boolean | Returns whether the specified value is contained within the string |
| str.`includes`("LMNOP") | `false` | boolean | Case-sensitive! |
| str.`indexOf`("def") | `3` | number | Returns the index of the specified value within the string |
| str.`indexOf`("DEF") | `-1` | number | Returns `-1` if the value cannot be found |
| str.`substr`(11, 5) | "lmnop" | string | Returns the substring starting at the specified index and spanning the specified length |
| str.`substr`(23) | "xyz" | string | Returns a substring starting at the specified index until the end of the string |
| str.`toUpperCase`() | "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | string | Returns the string converted to upper case |
| str.`toLowerCase`() | "abcdefghijklmnopqrstuvwxyz" | string | Returns the string converted to lower case |

## Documentation
There are many, many more!  Don't be afraid to check the docs.
