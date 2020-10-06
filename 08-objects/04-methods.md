# Objects: Methods

A method is a function which is a property of an object.

```js
var dog = {
  name: "Fido",
  speak: function speak() {
    return "Bark!";
  }
}
```

In this example, the `dog` object has two properties:
| Property | Type     | Mental Model   |
|----------|----------|----------------|
| name     | String   | `String`       |
| speak    | Function | `() → String`  |

```js
var x = dog.name;
var y = dog.speak();
```

The result of the above code would be:
| Variable | Value   | Type   |
|----------|---------|--------|
| x        | "Fido"  | String |
| y        | "Bark!" | String |
