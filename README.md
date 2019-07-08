# fetch-dom

fetch-dom is a very simple package for fetching the DOM of a web page.

# Usage
```javascript
const fetchDOM = require("fetch-dom");
(async () => {
	var document = await fetchDOM("https://www.example.com");
})();
```