# Empty Statement

An empty statement is used to provide no statement, although the JavaScript syntax would expect one.

## Syntax
```js
;
```

## Aside
```js
var x = 3;;
```
The preceding code is actually two statements.

Obviously, the second semicolon is unnecessary.  While this may seem harmless at first, in the wrong place they could cause unexpected effects in your code.

Now consider the following code:
```js
var x = 3;
x;
```
The preceding code is two statements.  The second statement performs no action, which means it is also an unnecessary / empty statement.

## Conventions
Empty statements should be avoided.
