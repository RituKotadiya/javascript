const array=[];
const array2=[];
function sort()
{
    let number=document.getElementById("no").value;
    let no1=document.getElementById("num").value;


    array.push(number);
    array2.push(no1);
  
    console.log("no : "+JSON.stringify(array))
    console.log("num : "+JSON.stringify(array2))

    let no=[...new Set(array),...new Set(array2)];
    console.log(no);
    // let sorted = no.sort(function(a,b){return a-b})
    // console.log(sorted);
    document.getElementById("result").innerHTML="merge array :-" + no;

    let sorted = no.sort(function(a,b){return a - b})
    document.getElementById("result2").innerHTML="sort array :-" + sorted;
}

  

   