const array = [];

function sum() {

    let no = document.getElementById("num").value;
    array.push(no);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }

    console.log(sum)


    document.getElementById("result").innerHTML="sum :" + sum;
    let  average = sum/array.length;
    console.log(average);
    document.getElementById("result2").innerHTML="Average :" + average;


}