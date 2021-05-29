"use strict";
// tslint:disable-next-line: typedef
async function communicater() {
    let formData = new FormData(document.forms[0]);
    let url = "https://gis-example.herokuapp.com";
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    communicate(url);
}
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("sd");
    console.log("Response", response);
}
//# sourceMappingURL=communicate.js.map