# Iteration: Continue statement

The `continue` statement terminates execution of the statements in the current iteration of the loop, and continues execution of the loop with the next iteration.

## Syntax
```js
continue;
```

## Example
```js
var source = [4, 8, 15, 16, 23, 42];
var dest = [];

while (source.length) {
  var current = source.pop();
  if (current >= 10 && current < 20) {
    continue;
  }
  dest.push(current);
}
```
