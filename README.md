# fetch-document

fetch-document is a very simple package for fetching the DOM of a web page.

# Usage
```javascript
const fetchDOM = require("fetch-document");
(async () => {
	var document = await fetchDOM("https://www.example.com");
})();
```