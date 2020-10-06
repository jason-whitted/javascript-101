# Iteration: Break statement

The `break` statement terminates the current loop.

## Syntax
```js
break;
```

## Example
```js
var array = [4, 8, 15, 16, 23, 42];

while (array.length) {
  var current = array.pop();
  if (current === 15) {
    break;
  }
}
```
