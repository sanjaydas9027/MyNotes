# JavaScript DOM Manipulation

The Document Object Model (DOM) is a representation of the HTML document structure that JavaScript can manipulate to create dynamic content. With DOM, JavaScript can access, modify, create, and delete elements and their attributes.

---

## DOM Selection Methods

### 1. `getElementById`

Selects an element by its `id`. Returns a single element or `null` if not found.

```javascript
let element = document.getElementById("myElement");
console.log(element);
```

### 2. `getElementsByClassName`

Selects elements by their `class`. Returns an HTMLCollection (array-like object).

```javascript
let elements = document.getElementsByClassName("myClass");
console.log(elements);
```

### 3. `getElementsByTagName`

Selects elements by their tag name. Returns an HTMLCollection.

```javascript
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
```

### 4. `querySelector`

Selects the first element that matches a specified CSS selector. Returns `null` if not found.

```javascript
let element = document.querySelector(".myClass");
console.log(element);
```

### 5. `querySelectorAll`

Selects all elements that match a specified CSS selector. Returns a NodeList (array-like object).

```javascript
let elements = document.querySelectorAll("div.myClass");
console.log(elements);
```

---

## Modifying DOM Elements

### 1. Changing Text Content

Use `textContent` or `innerText` to change the content of an element.

```javascript
let heading = document.getElementById("heading");
heading.textContent = "New Heading Text";
```

### 2. Changing HTML Content

Use `innerHTML` to insert HTML content into an element.

```javascript
let container = document.getElementById("container");
container.innerHTML = "<p>New paragraph content</p>";
```

### 3. Modifying Attributes

Use `setAttribute`, `getAttribute`, and `removeAttribute` to manipulate element attributes.

```javascript
let link = document.querySelector("a");
link.setAttribute("href", "https://example.com");
console.log(link.getAttribute("href"));
link.removeAttribute("target");
```

### 4. Modifying Styles

Access the `style` property to change inline CSS styles.

```javascript
let box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.color = "white";
```

---

## Creating and Appending Elements

### 1. `createElement`

Creates a new HTML element.

```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "Hello, World!";
```

### 2. `appendChild`

Appends a child element to a parent element.

```javascript
let container = document.getElementById("container");
container.appendChild(newDiv);
```

### 3. `insertBefore`

Inserts an element before a specific child of a parent element.

```javascript
let referenceNode = document.getElementById("referenceNode");
container.insertBefore(newDiv, referenceNode);
```

---

## Removing Elements

### `removeChild`

Removes a child element from its parent.

```javascript
let item = document.getElementById("itemToRemove");
item.parentNode.removeChild(item);
```

---

## Event Handling

### 1. Adding Event Listeners

Use `addEventListener` to attach an event handler to an element.

```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

### 2. Removing Event Listeners

Use `removeEventListener` to detach an event handler from an element.

```javascript
function clickHandler() {
  console.log("Button clicked!");
}

button.addEventListener("click", clickHandler);
button.removeEventListener("click", clickHandler);
```

---

## Common Events

- **`click`**: Fires when an element is clicked.
- **`mouseover`**: Fires when the mouse pointer is over an element.
- **`mouseout`**: Fires when the mouse pointer leaves an element.
- **`keydown`**: Fires when a key is pressed.
- **`submit`**: Fires when a form is submitted.

---

## Example: Toggle Class on Button Click

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .highlight { background-color: yellow; }
  </style>
</head>
<body>
  <button id="toggleButton">Toggle Highlight</button>
  <p id="text">Toggle my highlight!</p>

  <script>
    let button = document.getElementById("toggleButton");
    let text = document.getElementById("text");

    button.addEventListener("click", () => {
      text.classList.toggle("highlight");
    });
  </script>
</body>
</html>
```

This toggles the `highlight` class on the paragraph element every time the button is clicked.

---