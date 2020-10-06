# Binary Operators: Logical Or

> Takes two operands and returns one of the operands based on a logical disjunction.

## Syntax
```js
operand || operand
```

> This operator is read alloud as "or".
>
> `required || !empty`
>
> This would be read as "required or not empty".

## Boolean Conversion
| Expression           | Result  |
|----------------------|---------|
| `false` \|\| `false` | `false` |
| `true` \|\| `false`  | `true`  |
| `false` \|\| `true`  | `true`  | 
| `true` \|\| `true`   | `true`  |

## Aside
The operator `||` does not necessarily return a boolean.

It returns the first "truthy" value or the last "falsy" value.

| Expression              | Result  |
|-------------------------|---------|
| `undefined` \|\| `null` | `null`  |
| `123` \|\| `0`          | `123`   |
| `NaN` \|\| "abc"        | "abc"   |
| "abc" \|\| "def"        | "abc"   |

This is commonly used to default variable values.

```js
var name = input || "Default";
```

If `input` was "truthy" then `name` would reference the value of `input`.

If `input` was "falsy" then `name` would be "Default".