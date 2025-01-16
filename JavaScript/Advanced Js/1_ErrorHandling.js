const url = "https://postman-echo.com/get?foo1=bar1&foo2=bar2";
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
