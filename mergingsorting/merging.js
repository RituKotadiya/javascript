const array=[5,6,7,8,9,];
const array2=[3,2,1,4];

function merging()
{
    // let  name=[...array,...array2];
    // let no=[... new set(name)];
    // console.log(no);

    let no=[...new Set(array),...new Set(array2)];
    console.log(no);
    let sorted = no.sort(function(a,b){return a-b})
    console.log(sorted)
}


