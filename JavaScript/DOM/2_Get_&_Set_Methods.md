## DOM Get and Set Methods

### DOM Get Methods

The `DOM Get Methods` are used to retrieve information about the elements in a web page.

1. **`innerText`**:
   - Retrieves the text content of an element, excluding hidden elements.
   - Example:
     ```javascript
     let headerText = document.getElementsByClassName('header-text')[0].innerText;
     ```

2. **`innerHTML`**:
   - Retrieves the HTML content inside an element, including HTML tags.
   - Example:
     ```javascript
     let headerHtml = document.getElementsByClassName('header-text')[0].innerHTML;
     ```

3. **`getAttribute`**:
   - Retrieves the value of a specified attribute on an element.
   - Example:
     ```javascript
     let hrefValue = document.getElementsByClassName('btn')[0].getAttribute('href');
     ```

4. **`getAttributeNode`**:
   - Retrieves the specified attribute node, not just its value.
   - Example:
     ```javascript
     let targetAttribute = document.getElementsByClassName('btn')[0].getAttributeNode('target');
     ```

5. **`attributes`**:
   - Retrieves a live collection of all attribute nodes registered to the specified node.
   - Example:
     ```javascript
     let buttonAttributes = document.getElementsByClassName('btn')[0].attributes;
     ```

### DOM Set Methods

The `DOM Set Methods` are used to modify or set the properties of elements in a web page.

1. **`innerText`**:
   - Sets the text content of an element.
   - Example:
     ```javascript
     document.getElementsByClassName('btn')[0].innerText = 'hello1';
     ```

2. **`innerHTML`**:
   - Sets the HTML content inside an element, including HTML tags.
   - Example:
     ```javascript
     document.getElementsByClassName('btn')[0].innerHTML = 'hello';
     ```

3. **`setAttribute`**:
   - Adds a new attribute or changes the value of an existing attribute on an element.
   - Example:
     ```javascript
     document.getElementsByClassName('btn')[0].setAttribute('id', 'ttt');
     ```

4. **`attributes`**:
   - Sets the value of an attribute at a specified index in the attributes collection.
   - Example:
     ```javascript
     document.getElementsByClassName('btn')[0].attributes[1].value = 'rwd1';
     ```

5. **`removeAttribute`**:
   - Removes a specified attribute from an element.
   - Example:
     ```javascript
     document.getElementsByClassName('btn')[0].removeAttribute('id');
     ```

### Example Usage

Here is an example demonstrating the use of both get and set methods:

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Get and Set Methods Example</title>
</head>
<body>
    <div class="header-text">Welcome to SudoZap</div>
    <button class="btn" href="https://www.sudozap.com" target="_blank">Visit SudoZap</button>

    <script>
        // Get Methods
        let headerText = document.getElementsByClassName('header-text')[0].innerText;
        console.log("Header Text:", headerText);

        let headerHtml = document.getElementsByClassName('header-text')[0].innerHTML;
        console.log("Header HTML:", headerHtml);

        let hrefValue = document.getElementsByClassName('btn')[0].getAttribute('href');
        console.log("Button Href:", hrefValue);

        let targetAttribute = document.getElementsByClassName('btn')[0].getAttributeNode('target');
        console.log("Button Target Attribute:", targetAttribute);

        let buttonAttributes = document.getElementsByClassName('btn')[0].attributes;
        console.log("Button Attributes:", buttonAttributes);

        // Set Methods
        document.getElementsByClassName('btn')[0].innerText = 'hello1';
        document.getElementsByClassName('btn')[0].innerHTML = 'hello';
        document.getElementsByClassName('btn')[0].setAttribute('id', 'ttt');
        document.getElementsByClassName('btn')[0].attributes[1].value = 'rwd1';
        document.getElementsByClassName('btn')[0].removeAttribute('id');
    </script>
</body>
</html>
```