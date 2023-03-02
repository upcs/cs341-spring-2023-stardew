const gridItems = document.querySelectorAll('.grid-item');
const displayValue = document.getElementById('display-value');
let clickedItem = null;

let nameErrorSection = $("#name-error-message");

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (clickedItem) {
            clickedItem.classList.remove('clicked');
        }
        clickedItem = item;
        clickedItem.classList.add('clicked');
        displayValue.textContent = item.textContent;
    });
});


const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

editButton.addEventListener('click', () => {
    editButton.style.display = 'none';
    saveButton.style.display = 'block';
    displayValue.contentEditable = true;
    displayValue.focus(); // Set focus to the element to show the keyboard
});

saveButton.addEventListener('click', () => {
    nameErrorSection.empty();
    const checkValue = displayValue.textContent;
    if(checkValue !== ""){
        editButton.style.display = 'block';
        saveButton.style.display = 'none';
        clickedItem.textContent = displayValue.textContent;
        displayValue.contentEditable = false;
    }
    else{
        alert("You can't have it empty.");
        nameErrorSection.append("<p>You can't have an empty value</p>");
    }
});


let farmButton = document.getElementById('farm-button');
let farmSelection = document.getElementById('farm-selection-div');

farmButton.addEventListener('click', () => {
    if(farmSelection.style.display === "none"){
        farmSelection.style.display = 'block';
    }
    else{
        farmSelection.style.display = 'none';
    }
});



