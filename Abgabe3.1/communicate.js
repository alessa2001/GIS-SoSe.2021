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
    document.getElementById("antwort").innerHTML = inhalt;
}
document.getElementById("abschicken").addEventListener("click", communicater);
//# sourceMappingURL=communicate.js.map