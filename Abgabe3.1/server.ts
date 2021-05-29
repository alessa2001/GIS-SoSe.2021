import * as Http from "http";
// Import werden die Http Eigenschaften geladen

export namespace P_3_1Server {
    
    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
// Hier wird der Server generiert/erzeugt. unteranderem werden ihm ein Portzugewiesen und ein Eventlistener der auf einen eingang von dateien wartet.
    function handleListen(): void {
        console.log("Listening");
    }

//die folgende funktion wird bei einem eingang von daten getriggert und antwortet dementsprächen in der Console mit I hear a Voice
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
}
