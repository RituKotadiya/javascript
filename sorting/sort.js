const array=[];
function num()
{
    let number=parseInt(document.getElementById("no").value);
    array.push(number);
    

    let ascending = [...array].sort(function (a, b) { return a - b });
    document.getElementById("result").innerHTML="ascending" + JSON.stringify(ascending);

    let descending=[...array].sort(function (a, b) { return b - a});
    document.getElementById("result2").innerHTML="descending" + JSON.stringify(descending);
}