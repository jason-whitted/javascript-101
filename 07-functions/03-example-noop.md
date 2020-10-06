# Functions

## Example: No Operation
```js
function noop() {
}
```
The preceding function expects no input, executes no statements, and implicitly returns `undefined`.

The `noop` function can be envisioned as:
```js
() → undefined
```

## First-Class Functions
In JavaScript, functions are first-class citizens.
```js
typeof noop; 
// "function"
```

Since functions are types, this also means you can store a reference to a function in a variable.
```js
var thingamajig = noop;
```

![](https://i.pinimg.com/originals/58/6e/69/586e6921bd1b3a49c284533a5997b6c6.gif)

Great question!  We'll get there -- in due time.

## Conventions
You can also declare anonymous (unnamed functions) and assign them to a variable.
```js
var thingamajig = function() {
}
```
This function is declared without a name and then a reference to that function is stored in the variable `thingamajig`.

In practice, you'll receive better error messages related to these functions if you always explicitly name your functions.  Avoid using anonymous functions.
```js
// Prefer this:
var thingamajig = function watchamacallit() {
}

// Not this:
var thingamajig = function(){
}
```
