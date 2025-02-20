function temperature()
{
    
    let a = document.getElementById("tem").value;
   
    let temp =  (a * 9/5)  + 32;

//    let temp = (T(°C) * 9)/5 + 32
// let temp = T(°C) + 273.15
    document.getElementById("temp").value = temp  + "°F";
}

function temperatureconverter()
{
    let b = document.getElementById("temp").value;
   
    let tem =    b + 273.15;
    document.getElementById("tem").value = tem  + "°C";
}
