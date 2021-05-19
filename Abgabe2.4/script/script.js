"use strict";
var DigitalesKlappbuch;
(function (DigitalesKlappbuch) {
    let bildteil;
    function loadJSON() {
        bildteil = JSON.parse(DigitalesKlappbuch.pinguinTeileJSON);
    }
    loadJSON();
    let auswahl = {};
    let storedAuswahl = localStorage.getItem("auswahl");
    if (storedAuswahl) {
        auswahl = JSON.parse(storedAuswahl);
    }
    let currentParts = [];
    let currentPart = "";
    switch (document.title) {
        case "Pinguin - Oben":
            currentPart = "oben";
            currentParts = bildteil.koepfe;
            break;
        case "Pinguin - Mitte":
            currentPart = "mitte";
            currentParts = bildteil.mittelteile;
            break;
        case "Pinguin - Unten":
            currentPart = "unten";
            currentParts = bildteil.fuesse;
            break;
        default:
            break;
    }
    auswahlMoeglichkeiten(currentParts);
    function teilbildErzeugen(_bildteil) {
        let div = document.createElement("div");
        div.classList.add("pinguinteil");
        let bild = document.createElement("img");
        bild.src = _bildteil.pfad;
        div.appendChild(bild);
        let wort = document.createElement("span");
        wort.innerText = _bildteil.name;
        div.appendChild(wort);
        let taste = document.createElement("button");
        taste.innerText = "Bitte auswählen";
        taste.addEventListener("click", hndAuswaehlen);
        div.appendChild(taste);
        return div;
        function hndAuswaehlen(_event) {
            switch (currentPart) {
                case "oben":
                    auswahl.oben = _bildteil;
                    break;
                case "mitte":
                    auswahl.mitte = _bildteil;
                    break;
                case "unten":
                    auswahl.unten = _bildteil;
                    break;
            }
            localStorage.setItem("auswahl", JSON.stringify(auswahl));
            //seiten html
            switch (currentPart) {
                case "mitte":
                    window.location.assign("mitte.html");
                    break;
                case "unten":
                    window.location.assign("unten.html");
                    break;
                case "resultat":
                    window.location.assign("ende.html");
                    break;
            }
        }
    }
    function auswahlMoeglichkeiten(_bildteil) {
        let startseite = document.getElementById("auswahlmoeglichkeiten");
        for (let i = 0; i < _bildteil.length; i++) {
            let div = teilbildErzeugen(_bildteil[i]);
            startseite.appendChild(div);
        }
    }
    let auswahlAnzeigen = document.getElementById("konkreteAuswahl");
    if (auswahl.oben) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.oben.pfad));
    }
    else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.mitte) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.mitte.pfad));
    }
    else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.unten) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.unten.pfad));
    }
    else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    }
    function erstelleBild(_src) {
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
})(DigitalesKlappbuch || (DigitalesKlappbuch = {}));
//# sourceMappingURL=script.js.map