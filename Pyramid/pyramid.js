function printPyramid() {
    let height = document.getElementById("abc").value;
    let pyramid = '';

    for (let i = 1; i <= height; i++) {
        let str = '';
        
        for (let j = 1; j <= height - i; j++) {
            str += '&nbsp;'; // Use &nbsp; for spaces in HTML
        }

        // Add stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            str += '*';
        }

        pyramid += str + "<br>";
    }

    document.getElementById("ress").innerHTML = pyramid;
}
