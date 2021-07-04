import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace ServerRequest {

    let collectionUsers: Mongo.Collection;

    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port: number = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port) 
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert

    let databaseURL: string =  "https://mongodbnetbrowser.herokuapp.com/?u=User1&p=User1Gisistgeil&a=clustermuster.u2vhe.mongodb.net&n=memoryal&c=score";
    //mongodb+srv://User1:User1Gisistgeil@clustermuster.u2vhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    
    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer(); //Erstellt neuen Server
        server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
        server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
        server.listen(_port); //Server hört auf den definierten Port
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collectionUsers = mongoClient.db("Registration").collection("Users");
        console.log("Database connection", collectionUsers != undefined);
    }

    function handleListen(): void { 
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }

    interface Query {
        [type: string]: string | string[];
    }

    interface DBUser {
        fname: string;
        nname: string;
        email: string;
        password: string;
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let query: Query = url.query;
            let command: string = <string>query.command;
            if (command == "insert") {
                let fname: string = <string>query.fname; 
                let nname: string = <string>query.nname;   
                let email: string = <string>query.email;
                let password: string = <string>query.password;
                if (fname && nname && email && password) {
                    let dbUser: DBUser = { fname: fname, nname: nname, email: email, password: password };
                    await storeData(dbUser);
                    let jsonString: string = JSON.stringify(url.query);
                    _response.write(jsonString);
                    _response.write(" User saved successfully");
                } else {
                    console.log("Not hand over everything");
                }
            } else if (command == "get") {
                let dbUsers: DBUser[] = await getAllDBUsers();
                _response.write(JSON.stringify(dbUsers));
            } else {
                console.log("Wrong command");
            }

        }
        _response.end();
    }

    async function storeData(_dbUser: DBUser): Promise <void> {
        await collectionUsers.insertOne(_dbUser);
    }

    async function getAllDBUsers(): Promise<DBUser[]> {
        let dbUser: DBUser[];
        dbUser = await collectionUsers.find().toArray();
        return dbUser;
    }
        

}