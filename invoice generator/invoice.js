
function calculateTotal() {
    let productPrice = parseFloat(document.getElementById("price").value) || 0;
    let cgst = parseFloat(document.getElementById("cgst").value) || 0;
    let sgst = parseFloat(document.getElementById("sgst").value) || 0;

  
    let totalPrice = productPrice + (productPrice * cgst / 100) + (productPrice * sgst / 100);

   
    document.getElementById("total").value = totalPrice.toFixed(2);
}


document.getElementById("price").addEventListener("input", calculateTotal);
document.getElementById("cgst").addEventListener("input", calculateTotal);
document.getElementById("sgst").addEventListener("input", calculateTotal);


document.getElementById("generate").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

  
    let date = document.getElementById("date").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("no").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let productDetail = document.getElementById("detail").value;
    let productQuality = document.getElementById("quality").value;
    let productPrice = document.getElementById("price").value;
    let cgst = document.getElementById("cgst").value;
    let sgst = document.getElementById("sgst").value;
    let totalPrice = document.getElementById("total").value;

  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Invoice Generate", 90, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

  
    doc.text(`Date: ${date}`, 10, 30);
    doc.text(`Name: ${name}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);
    doc.text(`Number: ${number}`, 10, 60);
    doc.text(`Address: ${address}`, 10, 70);
    doc.text(`City: ${city}`, 10, 80);

   
    doc.text(`Product Details: ${productDetail}`, 10, 110);
    doc.text(`Product Quantity: ${productQuality}`, 10, 120);
    doc.text(`Price: ₹${productPrice}`, 10, 130);
    doc.text(`CGST: ₹${cgst}%`, 10, 140);
    doc.text(`SGST: ₹${sgst}%`, 10, 150);
    doc.text(`Total Price: ₹${totalPrice}`, 10, 160);

  
    doc.save("invoice.pdf");
});
