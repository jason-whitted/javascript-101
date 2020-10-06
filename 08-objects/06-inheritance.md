# Objects: Inheritance

In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object.

All of the data types we have learned about have some "base functionality" (properties, methods) that is available for free for those types.

## Null / Undefined
The primitive values `null` and `undefined` do not inherit properties or methods.

If you try to access a property on a `null` or `undefined` value an error will be thrown.

```js
var x;
var y = x.firstName;
```

This will result in an error `"Uncaught TypeError: Cannot read property 'firstName' of undefined"`.

