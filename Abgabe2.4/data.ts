namespace DigitalesKlappbuch {

    export const pinguinTeile: GanzerPinguin = {

        koepfe: [
            { name: "Skipper", pfad: "./Bilder/Köpfe/skipper_kopf.png" },
            { name: "Mumble", pfad: "./Bilder/Köpfe/mumble_kopf.png" },
            { name: "Lovelace", pfad: "./Bilder/Köpfe/penguin_kopf.jpg" }
        ],

        mittelteile: [
            { name: "Skipper", pfad: "./Bilder/Mittelteile/skipper_mitte.png" },
            { name: "Mumble", pfad: "./Bilder/Mittelteile/mumble_mitte.png" },
            { name: "Lovelace", pfad: "./Bilder/Mittelteile/penguin_mitte.jpg" }
        ],

        fuesse: [
            { name: "Skipper", pfad: "./Bilder/Füße/skipper_füße.png" },
            { name: "Mumble", pfad: "./Bilder/Füße/mumble_füße.png" },
            { name: "Lovelace", pfad: "./Bilder/Füße/penguin_füße.jpg" }
        ]
    };
    

    export const pinguinTeileJSON: string =
    `
    {
        "koepfe": [
            {
                "name": "Skipper",
                "pfad": "./Bilder/Köpfe/skipper_kopf.png"
            },
            {
                "name": "Mumble",
                "pfad": "./Bilder/Köpfe/mumble_kopf.png"
            },
            {
                "name": "Lovelace",
                "pfad": "./Bilder/Köpfe/penguin_kopf.jpg"
            }
        ],
        "mittelteile": [
            {
                "name": "Skipper",
                "pfad": "./Bilder/Mittelteile/skipper_mitte.png"
            },
            {
                "name": "Mumble",
                "pfad": "./Bilder/Mittelteile/mumble_mitte.png"
            },
            {
                "name": "Lovelace",
                "pfad": "./Bilder/Mittelteile/penguin_mitte.jpg"
            }
        ],
        "fuesse": [
            {
                "name": "Skipper",
                "pfad": "./Bilder/Füße/skipper_füße.png"
            },
            {
                "name": "Mumble",
                "pfad": "./Bilder/Füße/mumble_füße.png"
            },
            {
                "name": "Lovelace",
                "pfad": "./Bilder/Füße/penguin_füße.jpg"
            }
        ]
    }
    `;
    export const pinguinTeileInJSON: string = JSON.stringify(pinguinTeile);
    console.log(pinguinTeileInJSON);
}