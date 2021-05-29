// tslint:disable-next-line: typedef
async function communicater(){
   
let formData: FormData = new FormData(document.forms[0]);


let url: string = "https://gis-example.herokuapp.com";
let query: URLSearchParams = new URLSearchParams(<any>formData);
url = url + "?" + query.toString();
console.log(url);

communicate(url);
}
async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("sd");
    console.log("Response", response);
   
  }
  
  