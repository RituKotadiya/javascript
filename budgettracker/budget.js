function budget()
{
    let nm=document.getElementById("name").value;
    let am=document.getElementById("amount").value;
    let type = "" ;
    if(am>0){
        type ="income"
    }else{
        type = "expence"
    }



    let tranjection = JSON.parse(sessionStorage.getItem("items"));

    if(tranjection == null){
        tranjection = [];
    }
   
      tranjection.push(
        {
            nm : nm,
            am : am,
            type : type,

        }
      )

    sessionStorage.setItem("items", JSON.stringify(tranjection));


    let sum = 0
    let income = 0;
    let expence = 0;

    tranjection.forEach(transaction => {
        let amount = parseFloat(transaction.am);
        sum += amount;

        if (transaction.type === "income") {
            income += amount;
        } else {
            expence += amount;
        }
    });
    

document.getElementById("balance").value = sum ;
document.getElementById("income").value = income ;
document.getElementById("expense").value = expence ;




let li = document.createElement("li");
let textNode = document.createTextNode(nm + " " + am);
li.appendChild(textNode);
 document.getElementById("his").appendChild(li);


}