"use strict";
//Aufgabe 1:
var Rechtecke;
(function (Rechtecke) {
    document.getElementById("button1").addEventListener("click", einRechteckErzeugen);
    document.getElementById("button2").addEventListener("click", seiteZurücksetzen);
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
    function einRechteckErzeugen() {
        let div = document.createElement("div");
        div.style.top = Math.round(Math.random() * 1000) + "px";
        div.style.left = Math.round(Math.random() * 1000) + "px";
        div.style.width = Math.round(Math.random() * 1000) + "px";
        div.style.height = Math.round(Math.random() * 1000) + "px";
        div.style.backgroundColor = "rgb(" + Math.random() + 256 + " " + Math.random() * 256 + " " + Math.random() * 256 + ")";
        document.getElementById("rechteck1").appendChild(div);
    }
    function seiteZurücksetzen() {
        window.location.reload();
    }
})(Rechtecke || (Rechtecke = {}));
//# sourceMappingURL=script.js.map