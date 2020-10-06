# Binary Operators: Equality

> Takes two operands and returns a `Boolean` based on whether the comparison is true.

## Syntax
```js
// Equality
operand === operand
operand !== operand
// Equivalency
operand == operand
operand != operand
```

## Best Practices
The operators `==` and `!=` attempt type conversion between operands before comparison.  This causes really weird comparisons to be true.

For example:
| Expression            | Result  |
|-----------------------|---------|
| `123` == "123"        | `true`  |
| `null` == `undefined` | `true`  |
| "" == `false`         | `true`  |
| `0` == `false`        | `true`  |
| `0` == `null`         | `false` |
| `0` == `undefined`    | `false` |

It is for this reason that `==` and `!=` should be avoided whenever possible.
