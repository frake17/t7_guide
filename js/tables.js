// JavaScript source code
function table() {
    var checkbox = document.getElementById("table");
    var tableA = document.getElementById("tableA");
    var TableB = document.getElementById("tableB")

    if (checkbox.checked == true) {
        tableA.style.display = "none";
        tableB.style.display = "block";
    } else {
        tableA.style.display = "block";
        tableB.style.display = "none";
    }
}