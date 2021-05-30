"use strict";
async function communicater() {
    event.preventDefault();
    let formData = new FormData(document.forms[0]);
    let url = "https://servertest123somussdasssein.herokuapp.com/";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    communicate(url);
}
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
}
//# sourceMappingURL=communicate.js.map