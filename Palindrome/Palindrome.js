function palindrome()
{
    let name=document.getElementById("name").value;
    let rename=name.split("").reverse().join("");
    console.log(rename)
    if(name==rename)
    {
        document.getElementById("nam").innerHTML="It is a Palindrome";
    }else{
        document.getElementById("nam").innerHTML="It is a  not Palindrome"; 
    }
}