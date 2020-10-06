# Functions

## Example: updateFullName
```js
var first;
var last;
var fullName;

function updateFullName(lastFirst) {
  if (lastFirst) {
    fullName = last + ", " + first;
  } else {
    fullName = first + " " + last;
  }
}
```
The preceding function expects one parameter as input (`lastFirst`) and always returns undefined.

The `updateFullName` function can be envisioned as:
```js
(Boolean) → undefined
```

Unfortunately, it also is referencing three other variables that exist outside of the function body (`first`, `last`, `fullName`).

Additionally, the `fullName` variable is being modified, which is referred to as a side effect.

## Impure Functions
Impure functions are defined by one or more of the following:
- Reference variables that are not input parameters
- Perform a side effect
- Returns different output given the same inputs

Impure functions are acceptable, but they do muddy the water a bit.

Maybe it would be better to envision this function as:
```js
(Boolean) → undefined /* NOTE: Impure function */
```