# Iteration: For Statement

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

## Syntax
```js
for (initialize; condition; increment) statement;
```
```js
for (initialize; condition; increment) {
  statement1;
  statement2;
  ...
}
```

## Example
```js
var result = 1;

var index = 0;
while (index < 10) {
  result = result * 2;

  index = index + 1;
}
```

```js
var result = 1;
for (var index = 0; index < 10; index = index + 1) {
  result = result * 2;
}
```

## Example
```js
var array = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < array.length; i = i + 1) {
  sum = sum + array[i];
}
```

## Example
```js
function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i = i + 1) {
    total = total + array[i];
  }
  return total;
}

var list = [1, 2, 3, 4, 5];
var total = sum(list);
```