document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const addForm = document.querySelector("form.form");
  const successMessage = document.getElementById("successMessage");
  const selectedInput = document.querySelector('input[type="radio"]:checked');

  options.forEach((option) => {
    option.addEventListener("click", function () {
      // Reset de achtergrondkleur en tekstkleur van alle opties behalve de geselecteerde optie
      options.forEach((opt) => {
        if (opt !== option) {
          opt.style.backgroundColor = "white";
          opt.querySelector("span").style.color = "#808080";
        }
      });
      // Set de achtergrondkleur en tekstkleur van de geklikte optie naar paars en wit
      option.style.backgroundColor = "#AD97C9";
      option.querySelector("span").style.color = "white";
    });
  });

  addForm.addEventListener("submit", submitAddFormHandler);
  function submitAddFormHandler(event) {
    if (selectedInput) {
      let form = this;
      let data = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(data),
      });
    } else {
      alert("Selecteer een type!"); // Waarschuw als er geen type is geselecteerd (kan nog verandert worden met n divje)
      return; // Stop de functie hier als er geen type is geselecteerd
    }

    // Als er een type is geselecteerd, stuur het formulier door
    successMessage.style.display = "block";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 5000);

    event.preventDefault();
  }
});
