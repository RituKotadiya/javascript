function convertcurrency() {

    let a = document.getElementById("inr").value;
   
    let usd =  a / 86.88 
    document.getElementById("usd").value = usd ;
}

function convertcurrencyusd() {

    let b = document.getElementById("usd").value;
   
    let inr =    b * 86.88
    document.getElementById("inr").value = inr ;
}

