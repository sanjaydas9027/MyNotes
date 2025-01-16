## JavaScript Location Object: Properties and

The `location` object in JavaScript is part of the Window interface and provides information about the current URL of the document. It also allows for navigation to different URLs. Below is a detailed note on its properties and methods.

### Properties

1. **`location.hash`**:

   - Represents the fragment identifier, including the `#` symbol.
   - Example: `#section2`
   - Usage: Useful for single-page applications (SPA) to navigate within the page.

2. **`location.host`**:

   - Combines the hostname and port number.
   - Example: `www.example.com:8080`
   - Usage: Retrieve the domain name and port.

3. **`location.hostname`**:

   - Represents the domain name.
   - Example: `www.example.com`
   - Usage: Retrieve the domain without the port number.

4. **`location.href`**:

   - The entire URL.
   - Example: `https://www.example.com:8080/path?name=value#section2`
   - Usage: Get or set the full URL.

5. **`location.origin`**:

   - The protocol, hostname, and port number.
   - Example: `https://www.example.com:8080`
   - Usage: Retrieve the base URL.

6. **`location.pathname`**:

   - The path and filename of the URL.
   - Example: `/path/page.html`
   - Usage: Retrieve or set the path of the URL.

7. **`location.port`**:

   - The port number.
   - Example: `8080`
   - Usage: Retrieve or set the port number.

8. **`location.protocol`**:

   - The protocol scheme of the URL.
   - Example: `https:`
   - Usage: Retrieve or set the protocol.

9. **`location.search`**:
   - The query string part of the URL, including the `?`.
   - Example: `?name=value`
   - Usage: Retrieve or set the query string parameters.

### Example Usage of Properties

```javascript
console.log(location.hash); // Output: ""
console.log(location.host); // Output: "www.sudozap.com"
console.log(location.hostname); // Output: "www.sudozap.com"
console.log(location.href); // Output: "https://www.sudozap.com/"
console.log(location.origin); // Output: "https://www.sudozap.com"
console.log(location.pathname); // Output: "/"
console.log(location.port); // Output: ""
console.log(location.protocol); // Output: "https:"
console.log(location.search); // Output: ""
```

### Methods

1. **`location.assign(url)`**:

   - Loads a new document.
   - Example: `location.assign('services')`
   - Usage: Navigate to the specified URL. It keeps the history of the current document.

2. **`location.reload()`**:

   - Reloads the current document.
   - Example: `location.reload()`
   - Usage: Refresh the page. Can optionally force a reload from the server if `true` is passed as an argument.

3. **`location.replace(url)`**:
   - Replaces the current document with the new one.
   - Example: `location.replace('contact')`
   - Usage: Navigate to the specified URL. It doesn't keep the history of the current document.

### Example Usage of Methods

```javascript
// Navigating to a different page
location.assign("https://www.example.com/services");

// Reloading the current page
location.reload();

// Replacing the current page with a new one
location.replace("https://www.example.com/contact");
```

### Practical Example

Here is a practical example to demonstrate the use of some properties and methods of the `location` object:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Location Object Example</title>
  </head>
  <body>
    <button onclick="showLocationDetails()">Show Location Details</button>
    <button onclick="navigateToServices()">Go to Services</button>
    <button onclick="refreshPage()">Refresh Page</button>
    <button onclick="replaceWithContact()">Go to Contact</button>

    <script>
      function showLocationDetails() {
        console.log("Hash:", location.hash);
        console.log("Host:", location.host);
        console.log("Hostname:", location.hostname);
        console.log("Href:", location.href);
        console.log("Origin:", location.origin);
        console.log("Pathname:", location.pathname);
        console.log("Port:", location.port);
        console.log("Protocol:", location.protocol);
        console.log("Search:", location.search);
      }

      function navigateToServices() {
        location.assign("/services");
      }

      function refreshPage() {
        location.reload();
      }

      function replaceWithContact() {
        location.replace("/contact");
      }
    </script>
  </body>
</html>
```
