const array=[];

function large()
{
    let name=document.getElementById("number").value;

    array.push(name);

    let as=array.sort(function(a,b){return a-b});
    document.getElementById("result").innerHTML = "Ascending " + JSON.stringify(as);
   
   let small=array[0];
   let large=array[array.length-1];
   document.getElementById("result2").innerHTML = "smallest:- " + JSON.stringify(small);
   document.getElementById("result3").innerHTML = "Largest:- " + JSON.stringify(large);


}