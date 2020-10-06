# Functions: Return Statement

The return statement ends function execution and specifies a value to be returned to the function caller.

## Syntax
```js
return value;
```
```js
return;
```

If no return value is specified or the return statement is omitted, the function will return `undefined`.

## Interrupt
A return statement will interrupt statement execution.
```js
function functionName() {
  statement1;
  statement2;
  return value;
  statement3;
  statement4;
}
```
In this example `statement1` and `statement2` would be executed and `value` would be returned to the caller.

The subsequent statements (`statement3` nor `statement4`) would be ignored.
