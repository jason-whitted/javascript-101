# API: Number

-----
## Number.`parseInt`()
Parses a string argument and returns an integer of the specified radix or base.

### Syntax
```js
Number.parseInt(string, radix);
```

### Signature (Mental Model)
```js
(String, Number) → Number
```

### Examples
```js
Number.parseInt("100", 10); // Base-10 (decimal)
// 100

Number.parseInt("100", 2); // Base-2 (binary)
// 4

Number.parseInt("100", 16); // Base-16 (hexadecimal)
// 256

Number.parseInt("3.1415", 10); // Base-10 (decimal)
// 3
```

-----
## Number.`paresFloat`()
Parses an argument and returns a floating point number.

### Syntax
```js
Number.parseFloat(string);
```

### Signature (Mental Model)
```js
(String) → Number
```

### Examples
```js
Number.parseFloat("3.1415");
// 3.1415
```

-----
## Number.`isNaN`()
Determine whether the passed value is `NaN`.

### Syntax
```js
Number.isNaN(value);
```

### Signature (Mental Model)
```js
(Number) → Boolean
```

### Examples
```js
Number.isNaN(3.1415);
// false

Number.isNaN(NaN);
// true

Number.isNaN("xyz");
// false
```

-----
## Aside
The `parseInt`, `parseFloat`, and `isNaN` functions are all globally available.

It's good coding practice to use the fully qualified method though.
```js
// Prefer this:
var x = Number.parseInt("123");

// Not this:
var x = parseInt("123");
```