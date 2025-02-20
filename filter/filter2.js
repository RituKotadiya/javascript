const number=[];
let even=[];
let odd=[];

function No()
{
    let num=parseInt(document.getElementById("num").value);
    number.push(num);

    even=number.filter(n => n % 2===0);
    odd=number.filter(n => n % 2 !==0);

    if(num %2==0)
    {
        document.getElementById("result").innerHTML="Even Number";
    }
    else
    {
        document.getElementById("result").innerHTML="Odd Number";
    }


}



