function Additional(){
    let no1=parseInt(document.getElementById("no1").value);
    let no2=parseInt(document.getElementById("no2").value);
    let Sum=no1+no2;
    document.getElementById("Result").value="Result="+Sum;
}

function Multiplication()
{
    let no1=parseInt(document.getElementById("no1").value);
    let no2=parseInt(document.getElementById("no2").value);
    let Sum=no1*no2;
    document.getElementById("Result").value="Result="+Sum;
}
function Division(){
    let no1=parseInt(document.getElementById("no1").value);
    let no2=parseInt(document.getElementById("no2").value);
    let Sum=no1/no2;
    document.getElementById("Result").value="Result="+Sum;
}
function Substraction()
{
    let no1=parseInt(document.getElementById("no1").value);
    let no2=parseInt(document.getElementById("no2").value);
    let Sum=no1-no2;
    document.getElementById("Result").value="Result="+Sum;
}