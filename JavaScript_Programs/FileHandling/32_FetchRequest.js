// Fetch a request and show its response
async function fetchRequest(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchRequest('https://jsonplaceholder.typicode.com/posts/1');