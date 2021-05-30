
async function communicater(){
    event.preventDefault();
let formData: FormData = new FormData(document.forms[0]);


let url: string = "https://servertest123somussdasssein.herokuapp.com/";
let query: URLSearchParams = new URLSearchParams(<any>formData);
url = url + "?" + query.toString();

communicate(url);


}

async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    
    console.log("Response", response);
   
  }
  
  