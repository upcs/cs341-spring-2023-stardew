function showDropdownLevel(value) {
    document.getElementById("data").setAttribute("value", value); 
}

function showDropdownSection(value) {
    document.getElementById("datatwo").setAttribute("value", value); 
}

function checkLevelandSection() {
    if (document.getElementById("data").value.length + document.getElementById("datatwo").value.length > 1) {
        console.log("true");
        //do posting here
    }
}

