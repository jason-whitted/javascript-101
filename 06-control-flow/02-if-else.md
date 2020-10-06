# Control Flow: If...Else

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

## Syntax
```js
if (condition) statement1;
else statement2;
```

```js
if (condition) {
  statement1;
  statement2;
} else {
  statement3;
  statement4;
}
```

## Conventions
Sometimes you need to specify multiple conditional branches.  In these cases, you should forgo the block syntax (wavy braces).
```js
// Prefer this:
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (condition3) {
  statement3;
} else {
  statement4;
}

// Not this:
if (condition1) {
  statement1;
} else {
  if (condition2) {
    statement2;
  } else {
    if (condition3) {
      statement3;
    } else {
      statement4;
    }
  }
}
```
