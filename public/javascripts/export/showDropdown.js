function showDropdownLevel(value) {
    document.getElementById("data").setAttribute("value", value); 
}

function showDropdownSection(value) {
    document.getElementById("datatwo").setAttribute("value", value);

    for (let i = 1; i < 9; i++) {

        const btn = document.getElementById(i);
        btn.style.display = "inline-block";
    }

    
}

function showPlantSection(value) {
    document.getElementById("datathree").setAttribute("value", value);

    for (let i = 1; i < 9; i++) {

        const btn = document.getElementById(i);
        btn.style.display = "inline-block";
    }

    
}

function checkLevelandSection() {
    if (document.getElementById("data").value.length + document.getElementById("datatwo").value.length > 1) {
        console.log("true");
        //do posting here
    }
}

