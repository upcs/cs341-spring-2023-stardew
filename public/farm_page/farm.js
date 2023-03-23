const gridItems = document.querySelectorAll('.grid-item');
const podItems = document.querySelectorAll('.pod-item');

const displayValue = document.getElementById('display-value');

const popupPage = document.getElementById('popup-1');
const gridSection = document.getElementById('gridSection');

const datePlanted = document.getElementById('date-plant');
const datePlantedField = document.getElementById('date-planted');
const dateTransferedField = document.getElementById('date-transfered');
const dateHarvestedField = document.getElementById('date-harvested');
const plantHeightField = document.getElementById('plant-height');
const dateWateredField = document.getElementById('date-watered');

const waterTempField = document.getElementById('water-temperature');
const farmHumidity = document.getElementById('farm-humidity');


const backToGridButton = document.getElementById('backButton');

let clickedItem = null;
let clickedPodItem = null;
dateTransferedField.style.display = 'none';
dateHarvestedField.style.display = 'none';
datePlantedField.style.display = 'none';
plantHeightField.style.display = 'none';
dateWateredField.style.display = 'none';

let nameErrorSection = $("#name-error-message");

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        if (clickedItem) {
            clickedItem.classList.remove('clicked');
        }
        clickedItem = item;
        clickedItem.classList.add('clicked');
        displayValue.textContent = item.textContent;
        popupPage.style.display = 'flex';
        gridSection.style.display = 'none';
    });
});

podItems.forEach(item => {
    item.addEventListener('click', () => {
        if (clickedPodItem) { //color indicator for pod selection
            clickedPodItem.classList.remove('clicked');
        }
        clickedPodItem = item;
        clickedPodItem.classList.add('clicked');
        datePlanted.style.display = 'flex';
        datePlanted.textContent = item.textContent;
        dateTransferedField.style.display = 'flex';
        dateHarvestedField.style.display = 'flex';
        datePlantedField.style.display = 'flex';
        plantHeightField.style.display = 'flex';
        dateWateredField.style.display = 'flex';
    });
});
        

backButton.addEventListener('click', () => {
    popupPage.style.display = 'none';
    gridSection.style.display = 'flex';
    datePlanted.style.display = 'none';
    dateTransferedField.display = 'none';
    dateHarvestedField.display = 'none';
    datePlantedField.display = 'none';
    plantHeightField.display = 'none';
    dateWateredField.display = 'none';
    clickedPodItem.classList.remove('clicked');
});


const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

editButton.addEventListener('click', () => {
    if(popupPage.style.display === 'flex' && clickedPodItem.classList.contains('clicked')){
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
        displayValue.contentEditable = false;
        datePlanted.contentEditable = true;
        datePlanted.focus();

        backButton.classList.add('disabled');

        dateTransferedField.removeAttribute('readonly');
        dateHarvestedField.removeAttribute('readonly');
        datePlantedField.removeAttribute('readonly');
        plantHeightField.removeAttribute('readonly');
        dateWateredField.removeAttribute('readonly');
    }
});

saveButton.addEventListener('click', () => {
    nameErrorSection.empty();
    const checkValue = datePlanted.textContent;
    if(checkValue !== ""){
        editButton.style.display = 'block';
        saveButton.style.display = 'none';
        clickedPodItem.textContent = datePlanted.textContent;
        datePlanted.contentEditable = false;

        backButton.classList.remove('disabled');

        dateTransferedField.setAttribute('readonly', true);
        dateHarvestedField.setAttribute('readonly', true);
        datePlantedField.setAttribute('readonly', true);
        plantHeightField.setAttribute('readonly', true);
        dateWateredField.setAttribute('readonly', true);
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



