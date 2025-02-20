const even=[];
const odd=[];
function num()
{
    let num=document.getElementById("num").value;

    if(num %2==0)
    {
        even.push(num);
        document.getElementById("result").innerHTML="Even Number";
    }
    else
    {
        odd.push(num);
        document.getElementById("result").innerHTML="Odd Number";
    }

    
   
}