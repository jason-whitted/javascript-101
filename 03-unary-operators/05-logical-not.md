# Unary Operators: Logical Not

> Converts operand to Boolean type and then negates it.

## Syntax
`!`operand

> This operator is read alloud as "not".
> 
> `!enabled`
> 
> This would be read as "not enabled".

## Conversion to Boolean
| Input                  | Result  |
|------------------------|---------|
| `0`                    | `false` |
| `NaN`                  | `false` |
| `""`                   | `false` |
| `undefined`            | `false` |
| `null`                 | `false` |
| ***ALL*** other values | `true`  |

## Truthy / Falsy

`0`, `NaN`, `""`, `undefined`, and `null` are "falsy".

All other values are "truthy".