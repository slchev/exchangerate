/*document.getElementById("inputSubmit").addEventListener("click", function(event) {
event.preventDefault();
let value = document.getElementById("textInput").value;
const url = "https://the-one-api.herokuapp.com/v1/book";
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(list){
    let result = "";
    for (let x = 0; x <list.size; x ++)
    {
      result += list[x].name;
    }
    document.getElementById("results").innerHTML = result;

  })});

  L894L8ZSPWSQTL9O
*/
document.getElementById("inputSubmit").addEventListener("click", function(event) {
event.preventDefault();
let value = document.getElementById("textInput").value;
const url = "https://api.exchangerate-api.com/v4/latest/" + value;
fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json){
  let result = "<h3>" + json.base + "<br/> Current Date: " + json.date + "</h3><br/>Exchange Rates: <br/>U.S. Dollar: "+ json.rates.USD+"<br/>Euro: "+ json.rates.EUR+ "<br/>Canadian Dollar: " + json.rates.CAD + "<br/> Swiss Frank: "+ json.rates.CHF + "<br/> Peruvian Sol: "+ json.rates.PEN+ "<br/> Mexican Peso: "+ json.rates.MXN+ "<br/> Japanese Yen: "+ json.rates.JPY+ "<br/> Hong Kong Dollar: "+ json.rates.HKD+ "<br/> Russian Ruble: "+ json.rates.RUB;


  document.getElementById("results").innerHTML = result;
})});
/*switch(value)
{
  case "books": ;
  case "movies": ;
  case "characters": ;
  case "quotes": ;
  case "chapters": ;
  default: console.log("Invalid input. Please try again.");
}*/
