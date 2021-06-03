"use strict";
async function communicater() {
    let formData = new FormData(document.forms[0]);
    let url = "https://servertest123somussdasssein.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let response = await fetch(url);
    console.log("Response", response);
    let inhalt = await response.text();
    console.log(inhalt);
    /*event.preventDefault();
let formData: FormData = new FormData(document.forms[0]);


let url: string = "https://servertest123somussdasssein.herokuapp.com/";
let query: URLSearchParams = new URLSearchParams(<any>formData);
url = url + "?" + query.toString();

communicate(url);


}

async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    
    console.log("Response", response);
   
  }*/
}
document.getElementById("abschicken").addEventListener("click", communicater);
//# sourceMappingURL=communicate.js.map