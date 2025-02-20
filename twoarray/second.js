const array=[];
const array2=[];

function inner()
{
    let no=document.getElementById("value1").value;
    let no1=document.getElementById("value2").value;

    array.push(no);
    array2.push(no1);
    console.log("value1:-" + JSON.stringify(array))
    console.log("value2:-" + JSON.stringify(array2))

    let innerarray=array.filter(value => array2.includes(value) );
    console.log(innerarray);

    document.getElementById("print").innerHTML="Intersection of Two Arrays :-" + innerarray;
}