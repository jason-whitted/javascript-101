# Objects: Object Inheritance

All data types (except `null` and `undefined`) are instances of the `Object` base type.  This includes booleans, strings, numbers, functions, and even object literals themselves.

All of these data types inherit a `toString` method.

The `toString` method takes no inputs and returns a String.  A functions inputs/outputs are referred to as the function signature.  The function signature is your mental model.
```js
() → String
```

| Type     | Example                                                       | Result               |
|----------|---------------------------------------------------------------|----------------------|
| Boolean  | var value = `true`;<br/>var result = value.toString();        | "true"               |
| Number   | var value = `3.1415`;<br/>var result = value.toString();      | "3.1415"             |
| String   | var value = `"Hello"`;<br/>var result = value.toString();     | "Hello"              |
| Function | `function value() {}`<br/>var result = value.toString();      | "function noop() {}" |
| Object   | var value = `{ age: 42 }`;<br/>var result = value.toString(); | "[object Object]"    |
