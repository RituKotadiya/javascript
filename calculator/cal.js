function display(val)
{
 document.getElementById("d1").value += val;
}

function clearScreen()
{
    document.getElementById("d1").value = "";
}
function solve()
{
   let x = document.getElementById("d1").value ;

   let y = eval(x)

   document.getElementById("d1").value = y ;


}
