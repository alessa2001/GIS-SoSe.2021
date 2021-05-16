namespace DigitalesKlappbuch {

    export interface PinguinTeil {
        name: string;
        pfad: string;
    }

    export interface GanzerPinguin {
        koepfe: PinguinTeil[];
        mittelteile: PinguinTeil[];
        fuesse: PinguinTeil[];
    }

    export interface TeilAuswaehlen {
        kopf: PinguinTeil;
        mittelteil: PinguinTeil;
        fuss: PinguinTeil;
    }

    function datenInJSONUmwandeln(): GanzerPinguin {
        const meineAuswahl: GanzerPinguin = JSON.parse(pinguinTeileJSON);
        return meineAuswahl;
    }
    datenInJSONUmwandeln();

    function teilbildErzeugen(_bildteil: PinguinTeil): HTMLDivElement {
        const div: HTMLDivElement = document.createElement("div");
        div.classList.add("Pinguinteil");

        const bild: HTMLImageElement = document.createElement("img");
        bild.src = _bildteil.pfad;
        div.appendChild(bild);

        const wort: HTMLSpanElement = document.createElement("span");
        wort.innerText = _bildteil.name;
        div.appendChild(wort);

        const taste: HTMLButtonElement = document.createElement("button");
        taste.innerText = "Bitte auswählen";
        taste.addEventListener("click", hndAuswählen);

        taste.addEventListener("click", hndAuswählen2);
        taste.dataset.index = Option.toString();


        div.appendChild(taste);
        return div;


        function hndAuswählen(_event: Event): void {
            console.log(_bildteil);
        }


    }
    function hndAuswählen2(_event: Event): void {
        const target: HTMLElement = <HTMLElement>_event.currentTarget;
        const option: number = Number(target.dataset.option);

        console.log(pinguinTeile.koepfe[option]);
    }
    function auswahlAnzeigen(_bildteil: PinguinTeil[]): void {
        const startseite: HTMLDivElement = <HTMLDivElement>document.getElementById("Auswahlmöglichkeiten");

        for (let i: number = 0; i < _bildteil.length; i++) {
            const div: HTMLDivElement = teilbildErzeugen(_bildteil[i]);
            startseite.appendChild(div);
        }
    }
    auswahlAnzeigen(pinguinTeile.koepfe);





}