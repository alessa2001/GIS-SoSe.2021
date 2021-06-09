//import { ServerRequest } from "./server";

namespace ServerRequest {

    async function datenAlsHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://servertest123somussdasssein.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url:  RequestInfo = "http://localhost:8100";
        url += "/html" + "?" + query.toString();
       
        let response: Response = await fetch(url);
        let inhalt: string = await response.text();
        let inhaltArray:string[] = inhalt.split("?");
         inhaltArray = inhaltArray[1].split("&");
        
        
        let ausgabe: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("antwort");
       for(let i :number = 0; i<inhaltArray.length-1;i++){

        ausgabe.innerHTML += inhaltArray[i]+"<br>";
       }
        


    }


    async function datenAlsJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://servertest123somussdasssein.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //let url:  RequestInfo = "http://localhost:8100";
        url += "/json" + "?" + query.toString();
        console.log(url);
        let response: Response = await fetch(url);
        console.log(response);
        //let objektJSON: Formulardaten = await response.json();
        

    }

    let htmlButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    htmlButton.addEventListener("click", datenAlsHTML);

    let jsonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    jsonButton.addEventListener("click", datenAlsJSON);


    interface Formulardaten {
        vorname: string;
        nachname: string;
        nachricht: string;




    }

}

