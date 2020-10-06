# Iteration: While Loop

A `while` statment executes its statements as long as a specified conditions is truthy.

## Syntax
```js
while (condition) statement;
```
```js
while (condition) {
  statement1;
  statement2;
}
```

## Example
```js
var value = 1;
while (value < 10) {
  value = value * 2;
}
```

## Infinite Loops
Computers are stupid.  Really stupid.

If you tell a computer to "Get lost" -- it will.

```js
while (true) {
}
```

You ***WILL*** write infinite loops.  
You ***WILL*** crash your browser.

¯\\\_(ツ)_/¯ 

"C'est la vie"

```js
var value = 1;
while (value < 10); {
  value = value * 2;
}
```
