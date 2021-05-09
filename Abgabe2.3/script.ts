//Aufgabe 1:
namespace Rechtecke {

    let inhalt: HTMLElement = document.getElementById("rechteck1");
    for (let i: number = 0; i < 5; i++) {
        let rechteck: HTMLDivElement = document.createElement("div");
        rechteck.getAttribute("rechteck1");

        rechteck.style.backgroundColor = "rgb(" + Math.random() * 256 + " " + Math.random() * 256 + " " + Math.random() * 256 + ")";
        rechteck.style.top = Math.round(Math.random() * 1000) + "px";
        rechteck.style.left = Math.round(Math.random() * 1000) + "px";
        rechteck.style.width = Math.round(Math.random() * 1000) + "px";
        rechteck.style.height = Math.round(Math.random() * 1000) + "px";
        rechteck.style.position = "absolute";
        inhalt.appendChild(rechteck);
    }
    let element: HTMLElement = document.getElementById("button1");
    let buttonEins: HTMLButtonElement = document.createElement("button");
    buttonEins.getAttribute("button1");

    buttonEins.style.backgroundColor = "green";



}

//Aufgabe 2:





