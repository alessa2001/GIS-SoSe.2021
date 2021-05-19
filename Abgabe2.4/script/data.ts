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
        oben?: PinguinTeil;
        mitte?: PinguinTeil;
        unten?: PinguinTeil;
    }
    

    export let pinguinTeileJSON: string =
    `
    {
        "koepfe": [
            {
                "name": "Skipper",
                "pfad": "bilder/oben/skipper_oben.png"
            },
            {
                "name": "Mumble",
                "pfad": "bilder/oben/mumble_oben.png"
            },
            {
                "name": "Lovelace",
                "pfad": "bilder/oben/penguin_oben.jpg"
            }
        ],
        "mittelteile": [
            {
                "name": "Skipper",
                "pfad": "bilder/mitte/skipper_mitte.png"
            },
            {
                "name": "Mumble",
                "pfad": "bilder/mitte/mumble_mitte.png"
            },
            {
                "name": "Lovelace",
                "pfad": "bilder/mitte/penguin_mitte.jpg"
            }
        ],
        "fuesse": [
            {
                "name": "Skipper",
                "pfad": "bilder/unten/skipper_unten.png"
            },
            {
                "name": "Mumble",
                "pfad": "bilder/unten/mumble_unten.png"
            },
            {
                "name": "Lovelace",
                "pfad": "bilder/unten/penguin_unten.jpg"
            }
        ]
    }
    `;
    
}