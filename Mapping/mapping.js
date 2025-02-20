const No=[];
function number()
{
    let num=parseInt(document.getElementById("no").value);
    No.push(num);
    let double=No.map((nextvalue) => nextvalue * 2);
    document.getElementById("result2").innerHTML=  JSON.stringify(double);
    document.getElementById("result").innerHTML=  JSON.stringify(No);
   


}