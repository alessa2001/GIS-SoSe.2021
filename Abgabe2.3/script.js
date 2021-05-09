"use strict";
//Aufgabe 1:
var Rechtecke;
(function (Rechtecke) {
    let inhalt = document.getElementById("rechteck1");
    for (let i = 0; i < 5; i++) {
        let rechteck = document.createElement("div");
        rechteck.getAttribute("rechteck1");
        rechteck.style.backgroundColor = "rgb(" + Math.random() * 256 + " " + Math.random() * 256 + " " + Math.random() * 256 + ")";
        rechteck.style.top = Math.round(Math.random() * 1000) + "px";
        rechteck.style.left = Math.round(Math.random() * 1000) + "px";
        rechteck.style.width = Math.round(Math.random() * 1000) + "px";
        rechteck.style.height = Math.round(Math.random() * 1000) + "px";
        rechteck.style.position = "absolute";
        inhalt.appendChild(rechteck);
    }
    let element = document.getElementById("button1");
    let buttonEins = document.createElement("button");
    buttonEins.getAttribute("button1");
    buttonEins.style.backgroundColor = "green";
})(Rechtecke || (Rechtecke = {}));
//Aufgabe 2:
//# sourceMappingURL=script.js.map