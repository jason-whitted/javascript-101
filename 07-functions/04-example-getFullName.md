# Functions

## Example: Full Name
```js
function getFullName(first, last, lastFirst) {
  if (lastFirst) {
    return last + ", " + first;
  } else {
    return first + " " + last;
  }
}
```
The preceding function expects 3 parameters as input.  We could infer the inputs are:
| Parameter   | Type    |
|-------------|---------|
| `first`     | String  |
| `last`      | String  |
| `lastFirst` | Boolean |

It always returns a String.

The `getFullName` function can be envisioned as:
```js
(String, String, Boolean) → String
```

## Pure Functions
This function only refers to values that are passed in as parameters and performs no other side-effects.  Given the same input parameters, it will always return the same output.

This is referred to as a Pure Function.  

**Pure functions are the best functions!**

![](https://i.pinimg.com/originals/b9/ad/e5/b9ade571bf6f9c4e950befd8ccf0f91f.jpg)