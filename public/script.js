// Deze code is voor het zij-menu die over de gehele website komt
const menu = document.querySelector('.crossnav')
const button = document.querySelector('.menu-button')
const filterdiv = document.querySelector('main div:first-child')

			button.addEventListener('click', function(){
  			menu.classList.toggle('show');
			filterdiv.classList.toggle('filter');
			button.classList.toggle('open');
});
// einde menu script

// NIEUWE FUNCTIE VOOR FORM LATEN INLADEN 
const addForm = document.querySelector('form.form');
const successMessage = document.getElementById('successMessage');
const stakeholder = [];

addForm.addEventListener('submit', submitAddFormHandler);

function submitAddFormHandler(event) {
    console.log('form submitted!');
    const messageText = document.getElementById("name").value;
    const selectedInput = document.querySelector('input[type="radio"]:checked');

  

    if (selectedInput) {
        const selectedType = selectedInput.getAttribute("name");
        
        console.log("Geselecteerde naam: " + selectedType);
        stakeholder.push("Naam: " + messageText, "Type: " + selectedType);
        
        let form = this;
        let data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: new URLSearchParams(data),
          }
        )

    } else {
        alert("Selecteer een type!"); // Waarschuw als er geen type is geselecteerd (kan nog verandert worden met n divje)
        return; // Stop de functie hier als er geen type is geselecteerd
    }

    // Als er een type is geselecteerd, stuur het formulier door
    successMessage.hidden = false;
    setTimeout(function () {
        successMessage.hidden = true;
    }, 5000);

    event.preventDefault();
}


