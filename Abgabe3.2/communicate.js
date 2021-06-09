"use strict";
//import { ServerRequest } from "./server";
var ServerRequest;
(function (ServerRequest) {
    async function datenAlsHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://servertest123somussdasssein.herokuapp.com";
        let query = new URLSearchParams(formData);
        //let url:  RequestInfo = "http://localhost:8100";
        url += "/html" + "?" + query.toString();
        let response = await fetch(url);
        let inhalt = await response.text();
        let inhaltArray = inhalt.split("?");
        inhaltArray = inhaltArray[1].split("&");
        let ausgabe = document.getElementById("antwort");
        for (let i = 0; i < inhaltArray.length - 1; i++) {
            ausgabe.innerHTML += inhaltArray[i] + "<br>";
        }
    }
    async function datenAlsJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "server.js";
        let query = new URLSearchParams(formData);
        //let url:  RequestInfo = "http://localhost:8100";
        url += "/json" + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        console.log(response);
        //let objektJSON: Formulardaten = await response.json();
    }
    let htmlButton = document.getElementById("htmlbutton");
    htmlButton.addEventListener("click", datenAlsHTML);
    let jsonButton = document.getElementById("jsonbutton");
    jsonButton.addEventListener("click", datenAlsJSON);
})(ServerRequest || (ServerRequest = {}));
//# sourceMappingURL=communicate.js.map