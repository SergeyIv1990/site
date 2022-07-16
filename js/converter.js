const valuts ={};
getCurrencies()
async function getCurrencies(){
const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
const data = await response.json();
const result = await data;
valuts.usd  = result[26].rate;
valuts.evr  = result[32].rate;
valuts.csk  = result[4].rate;
}
function func(){
   let UAHtoUSD = valuts.usd;
   let UAHtoEUR = valuts.evr;
   let UAHtoCSK = valuts.csk;
   let USDtoEUR = valuts.evr/valuts.usd;
   let USDtoCSK = valuts.usd/valuts.csk;
   let EURtoCSK = valuts.evr/valuts.csk;
   let number = document.getElementById("inp").value;
   let buy = document.getElementById('buy');
    let sale = document.getElementById('sale');
    let res;
    if (buy.value == "UAH" && sale.value == "USD"){res = number / UAHtoUSD}
    if (buy.value == "USD" && sale.value == "UAH"){res = number * UAHtoUSD}
    if (buy.value == "UAH" && sale.value == "EUR"){res = number / UAHtoEUR}
    if (buy.value == "EUR" && sale.value == "UAH"){res = number * UAHtoEUR}
    if (buy.value == "UAH" && sale.value == "CSK"){res = number / UAHtoCSK} 
    if (buy.value == "CSK" && sale.value == "UAH"){res = number * UAHtoCSK} 
    
    if ((buy.value == "UAH" && sale.value == "UAH") || 
    (sale.value == "USD" && buy.value == "USD")|| 
    (sale.value == "EUR" && buy.value == "EUR")|| 
    (sale.value == "CSK" && buy.value == "CSK")){res = number * 1}

    if (buy.value == "USD" && sale.value == "EUR"){res = number / USDtoEUR} 
    if (buy.value == "EUR" && sale.value == "USD"){res = number * USDtoEUR} 
    if (buy.value == "USD" && sale.value == "CSK"){res = number * USDtoCSK}
    if (buy.value == "CSK" && sale.value == "USD"){res = number / USDtoCSK}
    
    if (buy.value == "CSK" && sale.value == "EUR"){res = number / EURtoCSK}
    if (buy.value == "EUR" && sale.value == "CSK"){res = number * EURtoCSK}

   let val = document.getElementById('val');
   
   val.value = ( Math.floor(res * 100) / 100 );
    console.log(res)
    console.log(number, buy.value, sale.value)    
}

