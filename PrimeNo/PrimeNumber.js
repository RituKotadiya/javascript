function checkprimeNo() {
    let num=parseInt(document.getElementById("no").value);
    let isprime=true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log("Number is prime");
        document.getElementById("Result").innerHTML="number is prime";
      
    }else{
        console.log("Number is not prime");
        document.getElementById("Result").innerHTML="number is not prime";
    }
    
}