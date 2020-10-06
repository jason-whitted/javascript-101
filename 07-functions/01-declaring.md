# Functions: Declaring

A function is a set of statements that performs a task or calculates a value.

> aka. method, procedure, routine, subroutine

A function receives input and returns output.

## Syntax
```js
function functionName(parameter1, parameter2, ...parameters) {
  statement1;
  statement2;
  // ...
  return value;
}
```

Parameters are variables that are local to the function body.

## Mental Model
You should envision data (variables / values) as their data type.

When you see `3.1415` you envision a Number. When you see a `firstName` variable you envision a String.

A similiar mental model can be applied to functions.  You should always envision a function as inputs vs output:
```
InputTypes → OutputType
```

## Conventions
Functions are actions / commands.  They ***DO*** things.
- Start with a verb
- Use `camelCase`
```js
// Prefer this:
function getFullName() {
}

// Not this:
function fullName() {

}
```

## Multi-Paradigm
> "Programming paradigms are a way to classify programming languages based on their features."
>
> **- Wikipedia**


Most programming languages are one of the following paradigms:
- Object-Oriented Programming (OOP)
- Functional Programming (FP)

JavaScript is both!

JavaScript is a multi-paradigm programming language with first-class function support.
