"use strict";
//import { ServerRequest } from "./server";
var ServerRequest;
(function (ServerRequest) {
    //let urlServer: string = "http://localhost:8100";
    let urlServer = "https://servertest123somussdasssein.herokuapp.com";
    let result = document.getElementById("solution");
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", sendData);
    let btBack = document.getElementById("giveback");
    btBack.addEventListener("click", getData);
    let form = document.getElementById("form");
    async function sendData() {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.append("command", "insert");
        let url = urlServer + "?" + query.toString();
        let response = await fetch(url);
        let textAnswer = await response.text();
        console.log(textAnswer);
        form.reset();
    }
    async function getData() {
        let query = new URLSearchParams();
        query.append("command", "get");
        let url = urlServer + "?" + query.toString();
        let response = await fetch(url);
        let jsonAnswer = await response.json();
        result.innerText = JSON.stringify(jsonAnswer);
    }
})(ServerRequest || (ServerRequest = {}));
//# sourceMappingURL=communicate.js.map