import * as Http from "http";
// Beim Import werden die Http Eigenschaften geladen

export namespace P_3_1Server {
    
    console.log("Starting server"); //"Starting server" wird in der Konsole ausgegeben
    let port: number = Number(process.env.PORT); //es wird eine neue Variable "Port" angelegt
    if (!port) //stellt sozusagen eine Art Hafen dar
        port = 8100; //Der Port(Hafen) wird mit "8100" initialisiert

    let server: Http.Server = Http.createServer(); //hier wird ein neuer Server erstellt
    server.addListener("request", handleRequest); //der Server bekommt einen Listener dazu, welcher die Funktion handleRequest aufruft
    server.addListener("listening", handleListen); //ebenfalls wird ein zweiter Listener angehängt, der die Funktion handleListen aufruft
    server.listen(port); // Der Server hört sozusagen dem vorher definierten Port zu
// Hier wird der Server generiert/erzeugt. Unter anderem werden ihm ein Port und ein Listener zugewiesen, der auf den Eingang von Dateien wartet.

    function handleListen(): void {
        console.log("Listening"); //Es wird Listening in der Konsole ausgegeben
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Die Funktion wird beim Eingang von Daten abgerufen
        console.log("I hear voices"); //es wird "I hear voices" in der Konsole ausgegeben
        console.log(_request.url); //URL vom Request wird in der Konsole ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Eigenschaften des Headers werden mit setHeader festgelegt
        _response.setHeader("Access-Control-Allow-Origin", "*"); // es wird festegelgt wer darauf zugreifen darf
        _response.write(_request.url); //URL vom Request wird in die Response geschrieben
        _response.end(); //Die Response wird beendet
    }
}
