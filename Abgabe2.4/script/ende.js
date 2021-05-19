"use strict";
var DigitalesKlappbuch;
(function (DigitalesKlappbuch) {
    let auswahl = {};
    let storedAuswahl = localStorage.getItem("auswahl");
    if (storedAuswahl) {
        auswahl = JSON.parse(storedAuswahl);
    }
    let wrapper = document.getElementById("deinErgebniss");
    if (auswahl.oben) {
        wrapper.appendChild(erstelleBild(auswahl.oben.pfad));
    }
    else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.mitte) {
        wrapper.appendChild(erstelleBild(auswahl.mitte.pfad));
    }
    else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.unten) {
        wrapper.appendChild(erstelleBild(auswahl.unten.pfad));
    }
    else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }
    function erstelleBild(_src) {
        let bild = document.createElement("img");
        bild.src = _src;
        return bild;
    }
    document.getElementById("widerhole").addEventListener("click", neu);
    function neu() {
        localStorage.clear();
        window.location.assign("index.html");
    }
})(DigitalesKlappbuch || (DigitalesKlappbuch = {}));
//# sourceMappingURL=ende.js.map