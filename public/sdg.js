// variables sdg
const appear = document.querySelector(".quantityChoice");
appear.style.display = 'block';

// functies sdg
function checked(){
    document.getElementById('selected').innerHTML = getCheckboxCount();
  }
  
function getCheckboxCount() {
    return document.querySelectorAll('input[type=checkbox]:checked').length;
}
  
document.querySelectorAll("input").forEach(input=>{
    input.onclick = function(){
         checked()
    };
});