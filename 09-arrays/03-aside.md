# Arrays

Strings are "array-like" objects.

They both:
- Have `.length` properties
- Support index access properties (string[n] and array[n])
- Have many methods in common (`includes`, `indexOf`, etc.)

But Strings are not Arrays.  

Strings are immutable.

Array are mutable.  You can modify them by adding / removing values.

```js
var arr = ["a", "b", "c", "d"];
arr[1] = "BBB";
arr; // ["a", "BBB", "c", "d"]
arr.push("EEE");
arr; // ["a", "BBB", "c", "d", "EEE"]
```

```js
var str = "abcd";
str[1] = "BBB";
str; // "abcd"
str.push("EEE"); // Uncaught TypeError: str.push is not a function
```
