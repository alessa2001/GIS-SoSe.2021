
async function communicater(): Promise<void> {
  let formData: FormData = new FormData(document.forms[0]);
  let url: string = "https://servertest123somussdasssein.herokuapp.com/";
  let query: URLSearchParams = new URLSearchParams(<any>formData);
  url = url + "?" + query.toString();
  let response: Response = await fetch(url);
  console.log("Response", response);
  let inhalt: string = await response.text();
  console.log(inhalt);
  document.getElementById("antwort").innerHTML = inhalt;

}
document.getElementById("abschicken").addEventListener("click", communicater);