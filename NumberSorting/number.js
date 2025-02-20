const array = [];
function numbersort() {
   
    let no = parseInt(document.getElementById("Number").value);
   
    array.push(no);
   
    let ascending = array.sort(function (a, b) { return a - b });
    document.getElementById("Result").innerHTML = "Ascending " + JSON.stringify(ascending);
   
    let descending = array.sort(function (a, b) { return b - a });
    document.getElementById("result2").innerHTML = "descending " + JSON.stringify(descending);
}




