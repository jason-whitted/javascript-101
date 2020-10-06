# Iterations: While

With a bit of work, we can update the `while` loop to run a fixed number of times.

Let's say we have a variable `result`.  Now we want to double that value 10 times.

We could write the following code.

```js
var result = 1;

var index = 0;
while (index < 10) {
  result = result * 2;

  index = index + 1;
}
```

## Pattern
The actual manipulation of the `result` value is superfulous to the loop.

```js
var index = 0;
while (index < 10) {
  // Do something!
  index = index + 1;
}
```

These are the pieces needed to control a while loop.  We can think about these pieces even a bit more abstractly.

```js
initialize;
while (condition) {
  // Do something!
  increment;
}
```
