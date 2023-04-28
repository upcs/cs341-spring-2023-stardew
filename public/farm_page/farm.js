//List out all relevant things from html
const gridItems = document.querySelectorAll('.grid-item');
const podItems = document.querySelectorAll('.pod-item');

const displayValue = document.getElementById('display-value');

const popupPage = document.getElementById('popup-1');
const gridSection = document.getElementById('gridSection');

//Important things from pod's information section
const podNumber = document.getElementById('pod-number');
const plantNameField = document.getElementById('name-of-plant');
const datePlantedField = document.getElementById('date-planted');
const dateTransferedField = document.getElementById('date-transfered');
const dateHarvestedField = document.getElementById('date-harvested');
const plantHeightField = document.getElementById('plant-height');

//Back button is for pod popup
const backToGridButton = document.getElementById('backButton');

//Initially, no items are clicked and no data is displayed
let clickedItem = null;
let clickedPodItem = null;
plantNameField.style.display = 'none';
dateTransferedField.style.display = 'none';
dateHarvestedField.style.display = 'none';
datePlantedField.style.display = 'none';
plantHeightField.style.display = 'none';

let nameErrorSection = $("#name-error-message");

//Loop through all grid-items (sections)
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        /*Every time a new grid-item is clicked, remove the clicked class
         * that is made in farm.css, which removes the dark green color
         * from the clicked section.
         * Then, the item that is clicked has the clicked class added to itself
         * and then makes a pod popup as a result from the click.
        */
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

/*Every time a new grid-item is clicked, remove the clicked class
         * that is made in farm.css, which removes the dark green color
         * from the clicked section.
         * Then, the item that is clicked has the clicked class added to itself
         * and then makes a pod popup as a result from the click.
         * Afterwards, the information inputs are visible but not editable.
*/
podItems.forEach(item => {
    item.addEventListener('click', () => {
        if (clickedPodItem) { //color indicator for pod selection
            clickedPodItem.classList.remove('clicked');
        }
        clickedPodItem = item;
        clickedPodItem.classList.add('clicked');
        podNumber.style.display = 'flex';
        podNumber.textContent = item.textContent;
        plantNameField.style.display = 'flex';
        dateTransferedField.style.display = 'flex';
        dateHarvestedField.style.display = 'flex';
        datePlantedField.style.display = 'flex';
        plantHeightField.style.display = 'flex';
    });
});
        
/*
*The back button when clicked would make the pod popup disappear
* and make the grid section reappear. Also, it makes all of the
* pod's information invisible.
*/
backButton.addEventListener('click', () => {
    popupPage.style.display = 'none';
    gridSection.style.display = 'flex';
    podNumber.style.display = 'none';
    plantNameField.style.display = 'none';
    dateTransferedField.style.display = 'none';
    dateHarvestedField.style.display = 'none';
    datePlantedField.style.display = 'none';
    plantHeightField.style.display = 'none';
    clickedPodItem.classList.remove('clicked');
});

/*These are buttons related to editing and saving
 * changes related to a pod's information.
 */
const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

/*
* The edit button makes the section and pod number not editable,
* but it would make the pod's information editable.
*/
editButton.addEventListener('click', () => {
    if(popupPage.style.display === 'flex' && clickedPodItem.classList.contains('clicked')){
        editButton.style.display = 'none';
        saveButton.style.display = 'block';
        displayValue.contentEditable = false;
        podNumber.contentEditable = false;

        backButton.classList.add('disabled');

        plantNameField.removeAttribute('readonly');
        dateTransferedField.removeAttribute('readonly');
        dateHarvestedField.removeAttribute('readonly');
        datePlantedField.removeAttribute('readonly');
        plantHeightField.removeAttribute('readonly');
    }
});

/*
* the save button saves edited pod information and makes pod information
* not editable
*/
saveButton.addEventListener('click', () => {
    nameErrorSection.empty();
    const checkValue = podNumber.textContent;
    if(checkValue !== ""){
        editButton.style.display = 'block';
        saveButton.style.display = 'none';
        clickedPodItem.textContent = podNumber.textContent;
        displayValue.contentEditable = false;
        podNumber.contentEditable = false;

        backButton.classList.remove('disabled');

        plantNameField.setAttribute('readonly', true);
        dateTransferedField.setAttribute('readonly', true);
        dateHarvestedField.setAttribute('readonly', true);
        datePlantedField.setAttribute('readonly', true);
        plantHeightField.setAttribute('readonly', true);
    }
    else{
        alert("You can't have it empty.");
        nameErrorSection.append("<p>You can't have an empty value</p>");
    }
});

let farmButton = document.getElementById('farm-button');
let farmSelection = document.getElementById('farm-selection-div');

/*
* this makes functionality for the popup of farm selection
*/
farmButton.addEventListener('click', () => {
    if(farmSelection.style.display === "none"){
        farmSelection.style.display = 'block';
    }
    else{
        farmSelection.style.display = 'none';
    }
});

