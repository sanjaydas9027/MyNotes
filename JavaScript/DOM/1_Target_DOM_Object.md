## DOM (Document Object Model)

The `Document Object Model (DOM)` is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. Using the DOM, we can get, set, add, and remove elements in HTML.

### How to Target DOM Objects

To target an element, we can use the following options:

### 1. **Id**

Selects a single element by its `id` attribute.

```javascript
const element = document.getElementById('myId');
```

### 2. **Class Name**

Selects all elements that have a specific class name. Returns an HTMLCollection.

```javascript
const elements = document.getElementsByClassName('myClass');
```

### 3. **Tag Name**

Selects all elements with a specific tag name. Returns an HTMLCollection.

```javascript
const elements = document.getElementsByTagName('div');
```

### 4. **All Elements**

Selects all elements in the document. Returns an HTMLCollection.

```javascript
const allElements = document.all;
```

### 5. **Document Element**

Selects the root element of the document (usually the `<html>` element).

```javascript
const docElement = document.documentElement;
```

### 6. **Head**

Selects the `<head>` element of the document.

```javascript
const headElement = document.head;
```

### 7. **Title**

Gets or sets the title of the document.

```javascript
const pageTitle = document.title;
```

### 8. **Body**

Selects the `<body>` element of the document.

```javascript
const bodyElement = document.body;
```

### 9. **Images**

Selects all `<img>` elements in the document. Returns an HTMLCollection.

```javascript
const images = document.images;
```

### 10. **Anchors**

Selects all `<a>` elements in the document with a `name` attribute. Returns an HTMLCollection.

```javascript
const anchors = document.anchors;
```

### 11. **Links**

Selects all `<a>` and `<area>` elements in the document with an `href` attribute. Returns an HTMLCollection.

```javascript
const links = document.links;
```

### 12. **Forms**

Selects all `<form>` elements in the document. Returns an HTMLCollection.

```javascript
const forms = document.forms;
```

### 13. **Doctype**

Selects the document's doctype.

```javascript
const doctype = document.doctype;
```

### 14. **URL**

Gets the URL of the document.

```javascript
const currentURL = document.URL;
```

### 15. **Base URI**

Gets the base URI of the document.

```javascript
const baseURI = document.baseURI;
```

### 16. **Domain**

Gets the domain of the document.

```javascript
const domain = document.domain;
```

### Additional Examples

#### 17. **Add an Element**

Creates a new element and appends it to the body.

```javascript
const newElement = document.createElement('div');
newElement.textContent = 'Hello, World!';
document.body.appendChild(newElement);
```

#### 18. **Remove an Element**

Removes an element with a specific `id`.

```javascript
const elementToRemove = document.getElementById('myId');
elementToRemove.remove();
```

#### 19. **Set an Element's Content**

Sets the text content of an element with a specific `id`.

```javascript
const element = document.getElementById('myId');
element.textContent = 'New Content';
```

### Practical Example

Here's an example demonstrating various ways to target DOM elements and perform operations on them:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Targeting Example</title>
</head>
<body>
    <div id="myId">Original Content</div>
    <div class="myClass">Class Content 1</div>
    <div class="myClass">Class Content 2</div>
    <div>Tag Content 1</div>
    <div>Tag Content 2</div>
    <img src="image.jpg" alt="Image">
    <a href="https://www.example.com" name="anchorName">Link</a>
    <form id="myForm">
        <input type="text" name="textInput">
    </form>

    <script>
        // Target by Id
        const elementById = document.getElementById('myId');
        console.log("Element by ID:", elementById);

        // Target by Class Name
        const elementsByClassName = document.getElementsByClassName('myClass');
        console.log("Elements by Class Name:", elementsByClassName);

        // Target by Tag Name
        const elementsByTagName = document.getElementsByTagName('div');
        console.log("Elements by Tag Name:", elementsByTagName);

        // Target all elements
        const allElements = document.all;
        console.log("All Elements:", allElements);

        // Document element
        const docElement = document.documentElement;
        console.log("Document Element:", docElement);

        // Head
        const headElement = document.head;
        console.log("Head Element:", headElement);

        // Title
        const pageTitle = document.title;
        console.log("Page Title:", pageTitle);

        // Body
        const bodyElement = document.body;
        console.log("Body Element:", bodyElement);

        // Images
        const images = document.images;
        console.log("Images:", images);

        // Anchors
        const anchors = document.anchors;
        console.log("Anchors:", anchors);

        // Links
        const links = document.links;
        console.log("Links:", links);

        // Forms
        const forms = document.forms;
        console.log("Forms:", forms);

        // Doctype
        const doctype = document.doctype;
        console.log("Doctype:", doctype);

        // URL
        const currentURL = document.URL;
        console.log("Current URL:", currentURL);

        // Base URI
        const baseURI = document.baseURI;
        console.log("Base URI:", baseURI);

        // Domain
        const domain = document.domain;
        console.log("Domain:", domain);

        // Add an element
        const newElement = document.createElement('div');
        newElement.textContent = 'Hello, World!';
        document.body.appendChild(newElement);

        // Remove an element
        const elementToRemove = document.getElementById('myId');
        elementToRemove.remove();

        // Set an element's content
        const element = document.getElementById('myId');
        element.textContent = 'New Content';
    </script>
</body>
</html>
```
