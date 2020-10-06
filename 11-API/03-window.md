# API: Window

The Window interface represents a window containing a DOM document.

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

-----
## window.`alert`()
Displays an alert dialog with the optional specified content and an OK button.

### Syntax
```js
window.alert(message);
```

### Signature (Mental Model)
```js
String → undefined
```

### Example
```js
window.alert("Heyo!");
```

-----
## window.`confirm`()
Displays a modal dialog with an optional message and two buttons: OK and Cancel.

> *Modal window*
>
> In user interface design, a modal window ... creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it.
>
> **- Wikipedia**

### Syntax
```js
window.confirm(message)
```

### Signature (Mental Model)
```js
String → Boolean
```

### Example
```js
var abort = window.confirm("Stop processing?");
```

-----
## window.`prompt`()
Displays a dialog with an optional message prompting the user to input some text.

### Syntax
```js
window.prompt(message, default);
```

### Signature (Mental Model)
```js
(String, String) → String
```

### Example
```js
var favoriteColor = window.prompt("Favorite color?", "blue");
```

-----
## Aside
The value `window` is the global, default, root value.  Specifying it is optional.

```js
window.alert("abc");
window.confirm("def");
window.prompt("ghi");
alert("abc");
confirm("def");
prompt("ghi");
```
