# Objects: Properties

A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure.

## Accessing
Properties of an object are accessed using dot notation or bracket notation.

Assigning a property will create the entry if it does not exist.
```js
var person = {};

person.first = "Jack";
person["last"] = "Black";

var fullName = person["first"] + " " + person.last;
```

## Initialization
Properties can be specified during initialization.

### Syntax
```js
{
  key1: value1,
  key2: value2,
}
```

They can be initialized using property name, quoted property name, or bracket notation syntax.
```js
{
  key1: value1,
  "key2": value2,
  ["key3"]: value3,
}
```

## Conventions
When specifying an object literal with zero or one property is is usually condensed to a single line.
```js
var empty = {};
var person = { firstName: "Steve" };
```

When specifying an object literal with two or more properties, place each property on its own line.
```js
var person = {
  firstName: "Steve",
  lastName: "Wozniak",
};
```

The comma after the last item is called a trailing comma.  It's not required, but it is a good habit to use.  It makes your properties easier to rearrange later.
```js
// Prefer this:
var person = {
  firstName: "Steve",
  lastName: "Wozniak",
  birthYear: 1950,
};

// Not this:
var person = {
  firstName: "Steve",
  lastName: "Wozniak",
  birthYear: 1950
};
```