function fibonacci() {
    let no = parseInt(document.getElementById("non").value);
    let a = 0, b = 1, c;
    let sequence = [a, b];

    if (no <= 0) {
        document.getElementById("number").innerHTML = "Please enter a positive number.";
        return;
    }

    if (no === 1) {
        document.getElementById("number").innerHTML = a;
        return;
    }
    if (no === 2) {
        document.getElementById("number").innerHTML = b;
        return;
    }


    for (let i = 3; i <= no; i++) {
        c = a + b;
        sequence.push(c);
        a = b;
        b = c;
    }


    document.getElementById("number").innerHTML = sequence.join(', ');;
}
