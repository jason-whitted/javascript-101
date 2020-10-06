# Objects: Literals

An object is used to store various keyed collections and more complex entities.

## Syntax
```js
{}
```

## Usage
```js
var thing = {};
```

## Type
```js
typeof thing; // "object"
```

## Caution
The curly braces are overloaded.  They have different meaning depending on where in code they are used.
```js
if (myCondition) {
  /* statement block */
}

function myFunction() {
  /* statement block */
}

var myObject = {
  /* object literal */
};

myFunction({ 
  /* object literal */
});
```
