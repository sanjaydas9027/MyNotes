## DOM Targeting Methods and Timeouts
### `querySelector`

The `querySelector` method returns the first element within the document that matches the specified CSS selector(s). If no matches are found, it returns `null`.

#### Syntax

```javascript
document.querySelector(CSS_Selector);
```

#### Example Usage

1. **Select an element by class and change its text:**

```javascript
document.querySelector('.btn').innerText = 'SudoZap YT';
```

2. **Select an element by tag and change its text:**

```javascript
document.querySelector('p').innerText = 'SudoZap YT';
```

### `querySelectorAll`

The `querySelectorAll` method returns a static NodeList containing all elements that match the specified CSS selector(s). Unlike `querySelector`, this method returns all matching elements, not just the first one.

#### Syntax

```javascript
document.querySelectorAll(CSS_Selector);
```

#### Example Usage

1. **Select all elements with a specific class and get the text of the first one:**

```javascript
document.querySelectorAll('.dots')[0].innerText;
```

2. **Select all elements with a specific class, then select a child element and get its text content:**

```javascript
document.querySelectorAll('.cards')[1].querySelector('h3').textContent;
```

### Notes on `contains()` and `hasAttributes()`

1. **`contains()`**: This method checks if a node is a descendant of another node.

```javascript
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

if (parent.contains(child)) {
    console.log("Parent contains the child.");
}
```

2. **`hasAttributes()`**: This method returns a Boolean value indicating whether the element has any attributes.

```javascript
let element = document.querySelector('.element');

if (element.hasAttributes()) {
    console.log("Element has attributes.");
}
```

### Using `setInterval` and `setTimeout` for Animations

1. **`setInterval`**: Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

#### Syntax

```javascript
setInterval(functionName, intervalInMilliseconds);
```

#### Example Usage

```javascript
function animate() {
    // Animation code here
}

setInterval(animate, 1000); // Calls the animate function every second
```

2. **`setTimeout`**: Calls a function or executes a code snippet after a specified delay.

#### Syntax

```javascript
setTimeout(functionName, intervalInMilliseconds);
```

#### Example Usage

```javascript
function showAlert() {
    alert("Hello, SudoZap!");
}

setTimeout(showAlert, 3000); // Calls the showAlert function after 3 seconds
```

### Practical Example

Here's a practical example demonstrating the use of `querySelector`, `querySelectorAll`, `setInterval`, and `setTimeout`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Targeting Example</title>
    <style>
        .dots { color: blue; }
        .cards h3 { color: red; }
    </style>
</head>
<body>
    <button class="btn">Click me</button>
    <p>Paragraph</p>
    <div class="dots">Dot 1</div>
    <div class="dots">Dot 2</div>
    <div class="cards">
        <h3>Card 1</h3>
    </div>
    <div class="cards">
        <h3>Card 2</h3>
    </div>

    <script>
        // Using querySelector
        document.querySelector('.btn').innerText = 'SudoZap YT';
        document.querySelector('p').innerText = 'SudoZap YT';

        // Using querySelectorAll
        document.querySelectorAll('.dots')[0].innerText = 'Updated Dot 1';
        document.querySelectorAll('.cards')[1].querySelector('h3').textContent = 'Updated Card 2';

        // Using setInterval
        function changeColor() {
            document.querySelector('p').style.color = 'green';
        }
        setInterval(changeColor, 2000); // Changes the paragraph color every 2 seconds

        // Using setTimeout
        function showMessage() {
            alert('Hello, SudoZap!');
        }
        setTimeout(showMessage, 5000); // Shows an alert after 5 seconds
    </script>
</body>
</html>
```

