function tip()
{
    let am=parseInt(document.getElementById("amount").value);
    let ti=parseInt(document.getElementById("tip").value);

    let amountt = am * ti/100;
    let tip = am * 18/100;
    let total = am + amountt + tip;
    document.getElementById("result").innerText = "amountt: " + am;
    document.getElementById("result2").innerText = "tip: " + amountt;
    document.getElementById("result3").innerText = "gst: "+ tip;
    document.getElementById("result4").innerText = "Tota: "+ total;

}
