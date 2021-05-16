"use strict";
var DigitalesKlappbuch;
(function (DigitalesKlappbuch) {
    function datenInJSONUmwandeln() {
        const meineAuswahl = JSON.parse(DigitalesKlappbuch.pinguinTeileJSON);
        return meineAuswahl;
    }
    datenInJSONUmwandeln();
    function teilbildErzeugen(_bildteil) {
        const div = document.createElement("div");
        div.classList.add("Pinguinteil");
        const bild = document.createElement("img");
        bild.src = _bildteil.pfad;
        div.appendChild(bild);
        const wort = document.createElement("span");
        wort.innerText = _bildteil.name;
        div.appendChild(wort);
        const taste = document.createElement("button");
        taste.innerText = "Bitte auswählen";
        taste.addEventListener("click", hndAuswählen);
        taste.addEventListener("click", hndAuswählen2);
        taste.dataset.index = Option.toString();
        div.appendChild(taste);
        return div;
        function hndAuswählen(_event) {
            console.log(_bildteil);
        }
    }
    function hndAuswählen2(_event) {
        const target = _event.currentTarget;
        const option = Number(target.dataset.option);
        console.log(DigitalesKlappbuch.pinguinTeile.koepfe[option]);
    }
    function auswahlAnzeigen(_bildteil) {
        const startseite = document.getElementById("Auswahlmöglichkeiten");
        for (let i = 0; i < _bildteil.length; i++) {
            const div = teilbildErzeugen(_bildteil[i]);
            startseite.appendChild(div);
        }
    }
    auswahlAnzeigen(DigitalesKlappbuch.pinguinTeile.koepfe);
})(DigitalesKlappbuch || (DigitalesKlappbuch = {}));
//# sourceMappingURL=script.js.map