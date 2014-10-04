var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		response.writeHead(200, {"Content-Type": "text/plain"});
		console.log(pathname.slice(1))
		
		var content = route(handle, pathname.slice(1))
		response.write(content);
		response.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log("Server has started.");
}

exports.start = start;