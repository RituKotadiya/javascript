const array=[2,4,5,7,8,1];
const array2=[5,7,4,3,9,2];

function num()
{
//    const no1 =parseInt(document.getElementById("name").value);

    let intersection = array.filter(value => array2.includes(value));

	console.log(intersection);  
    // document.getElementById("no").innerHTML="Number.." + intersection;

}