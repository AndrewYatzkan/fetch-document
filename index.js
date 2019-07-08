const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
module.exports = async url => {
	var req = await fetch(url);
	var res = await req.text();
	var { document } = (new JSDOM(res)).window;
	return document;
}