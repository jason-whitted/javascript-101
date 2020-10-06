# Binary Operators: Logical And

> Takes two operands and returns one of the operands based on a logical conjunction.

## Syntax
```js
operand && operand
```

> This operator is read alloud as "and".
>
> `optional && valid`
>
> This would be read as "optional and valid".

## Boolean Examples
| Expression         | Result  |
|--------------------|---------|
| `false` && `false` | `false` |
| `true` && `false`  | `false` |
| `false` && `true`  | `false` | 
| `true` && `true`   | `true`  |

## Aside
The operator `&&` does not necessarily return a boolean.

It returns the first "falsy" value or the last "truthy" value.

| Expression            | Result  |
|-----------------------|---------|
| `null` && `undefined` | `null`  |
| `true` && `0`         | `0`     |
| "" && `true`          | ""      |
| `123` && "abc"        | "abc"   |
