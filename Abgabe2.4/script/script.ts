namespace DigitalesKlappbuch {

    let bildteil: GanzerPinguin;

    function loadJSON(): void {
        bildteil = JSON.parse(pinguinTeileJSON);
    }
    loadJSON();

    let auswahl: TeilAuswaehlen = {};

    let storedAuswahl: string = localStorage.getItem("auswahl");
    if (storedAuswahl) {
        auswahl = JSON.parse(storedAuswahl);
    }
    
    let currentParts: PinguinTeil[] = [];
    let currentPart: string = "";

    //Klappbuch
    console.log(document.title);
    console.log(bildteil.koepfe);
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

    function teilbildErzeugen(_bildteil: PinguinTeil): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("pinguinteil");

        let bild: HTMLImageElement = document.createElement("img");
        bild.src = _bildteil.pfad;
        div.appendChild(bild);

        let wort: HTMLSpanElement = document.createElement("span");
        wort.innerText = _bildteil.name;
        div.appendChild(wort);

        let taste: HTMLButtonElement = document.createElement("button");
        taste.innerText = "Bitte auswählen";
        taste.addEventListener("click", hndAuswaehlen);
        div.appendChild(taste);
        return div;

        function hndAuswaehlen(_event: Event): void {
            
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

    function auswahlMoeglichkeiten(_bildteil: PinguinTeil[]): void {
        let startseite: HTMLDivElement = <HTMLDivElement>document.getElementById("auswahlmoeglichkeiten");

        for (let i: number = 0; i < _bildteil.length; i++) {
            let div: HTMLDivElement = teilbildErzeugen(_bildteil[i]);
            startseite.appendChild(div);
        }
    }

    let auswahlAnzeigen: HTMLElement = <HTMLElement>document.getElementById("konkreteAuswahl");
    
    if (auswahl.oben) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.oben.pfad));
    } else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.mitte) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.mitte.pfad));
    } else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    }
    if (auswahl.unten) {
        auswahlAnzeigen.appendChild(erstelleBild(auswahl.unten.pfad));
    } else {
        auswahlAnzeigen.appendChild(erstelleBild("bilder/none.png"));
    } 

    function erstelleBild(_src: string): HTMLImageElement {
        let img: HTMLImageElement = document.createElement("img");
        img.src = _src;
        return img;
    }






}