function IsEven() {
    alert("Test")
    var number = document.getElementById("number").value;
    if (number % 2 == 0) {
        alert(number + " is even number")
    }
    else {
        alert(number + " is odd number")
    }
}
