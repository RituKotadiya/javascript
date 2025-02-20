const array=[];
function remove()
{

    let name = document.getElementById("abc").value;
    array.push(name)
    let rm = [...new Set(array)]
    document.getElementById("r").innerHTML = "orignal array" + JSON.stringify(array);
    document.getElementById("r1").innerHTML = "Remove array" + JSON.stringify(rm);
}