function Marshalino() {
    var numberofhours = document.getElementById("numberofhours").value;
    var rateperhour = document.getElementById("rateperhour").value;
    var calculate = numberofhours * rateperhour
    document.getElementById("show").innerText = calculate;
}

function fun() {
    document.getElementById("show").innerText = '';
    document.getElementById("myForm").reset();
}