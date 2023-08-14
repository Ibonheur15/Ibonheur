
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
  }

  //chat wit me
  function openForm() {
      document.getElementById("myform").style.display = "block";
  }
  function closeForm() {
      document.getElementById("myform").style.display = "none";
  }