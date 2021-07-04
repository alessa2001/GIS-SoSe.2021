"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRequest = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var ServerRequest;
(function (ServerRequest) {
    let collectionUsers;
    console.log("Starting server"); //Konsolenausgabe: "Startin server" 
    let port = Number(process.env.PORT); // Nimmt sich den aktuellen Port
    if (!port)
        port = 8100; // wenn es kein Port gibt, dann wird der Port mit dem wert 8100 initialisiert
    let databaseURL = "https://mongodbnetbrowser.herokuapp.com/?u=User1&p=User1Gisistgeil&a=clustermuster.u2vhe.mongodb.net&n=memoryal&c=score";
    //mongodb+srv://User1:User1Gisistgeil@clustermuster.u2vhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer(); //Erstellt neuen Server
        server.addListener("request", handleRequest); //Dem Server wird ein Listener angehängt, der so die Funktion handleRequest aufruft
        server.addListener("listening", handleListen); //Dem Server wird ein Listener angehängt, der so die Funktion handleListen aufruft
        server.listen(_port); //Server hört auf den definierten Port
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        collectionUsers = mongoClient.db("Registration").collection("Users");
        console.log("Database connection", collectionUsers != undefined);
    }
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe: "Listening" 
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let query = url.query;
            let command = query.command;
            if (command == "insert") {
                let fname = query.fname;
                let nname = query.nname;
                let email = query.email;
                let password = query.password;
                if (fname && nname && email && password) {
                    let dbUser = { fname: fname, nname: nname, email: email, password: password };
                    await storeData(dbUser);
                    let jsonString = JSON.stringify(url.query);
                    _response.write(jsonString);
                    _response.write(" User saved successfully");
                }
                else {
                    console.log("Not hand over everything");
                }
            }
            else if (command == "get") {
                let dbUsers = await getAllDBUsers();
                _response.write(JSON.stringify(dbUsers));
            }
            else {
                console.log("Wrong command");
            }
        }
        _response.end();
    }
    async function storeData(_dbUser) {
        await collectionUsers.insertOne(_dbUser);
    }
    async function getAllDBUsers() {
        let dbUser;
        dbUser = await collectionUsers.find().toArray();
        return dbUser;
    }
})(ServerRequest = exports.ServerRequest || (exports.ServerRequest = {}));
//# sourceMappingURL=server.js.map