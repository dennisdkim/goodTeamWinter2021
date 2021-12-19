function personalSelected() {
    // alert("Personal has been selected");
}

function businessSelected() {
    // alert("Business has been selected");
}
var counter = 0;

function showDropdown() {
    if (counter % 2 == 0) {
        document.getElementById("profileDropDown").style.display = "block";
        document.getElementById("new").style.opacity = "1";
        counter++;
        
    } else {
        document.getElementById("profileDropDown").style.display = "none";
        counter++;
        document.getElementById("new").style.opacity = "0.75";
    }
}