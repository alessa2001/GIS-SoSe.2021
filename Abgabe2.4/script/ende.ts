namespace DigitalesKlappbuch {
    let auswahl: TeilAuswaehlen = {};
    let storedAuswahl: string = localStorage.getItem("auswahl");
    if (storedAuswahl) {
        auswahl = JSON.parse(storedAuswahl);
    }

    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("deinErgebniss");

    if (auswahl.oben) {
        wrapper.appendChild(erstelleBild(auswahl.oben.pfad));
    } else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.mitte) {
        wrapper.appendChild(erstelleBild(auswahl.mitte.pfad));
    } else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.unten) {
        wrapper.appendChild(erstelleBild(auswahl.unten.pfad));
    } else {
        wrapper.appendChild(erstelleBild("bilder/none.png"));
    }

    function erstelleBild(_src: string): HTMLImageElement {
        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _src;
        return bild;
    }

    document.getElementById("widerhole").addEventListener("click", neu);

    function neu(): void {
        localStorage.clear();
        window.location.assign("index.html");
    }
}