document.getElementById("buttons").style.display = "none";
const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    document.getElementById("buttons").style.display = "flex";
    document.getElementById("btn").style.display = "none";
    document.getElementById("pin-input").style.display = "flex";
})
let i = 0;

document.addEventListener("keydown", function(event) {
  i = parseInt(event.key);
  if (i >= 0 && i<= 9) {
    let figure = document.querySelector("#button" + i);
    figure.style.color = "green";
    figure.style.border = "2px solid green";
    setTimeout(function() {
        figure.style.color = "";
        figure.style.border = "";
    }, 3000);
  }
});
var correctPin = "1234";
var attempts = 0;
var enteredPin = "";

document.addEventListener("keydown", function(event) {
  if (event.key >= "0" && event.key <= "9") {
    enteredPin += event.key;

    if (enteredPin.length === 4) {
      if (enteredPin === correctPin) {
        alert("Code correct");
        enteredPin = "";
      } else {
        attempts++;

        if (attempts >= 3) {
          alert("La police arrive !");
          enteredPin = "";
          attempts = 0;
        } else {
          alert("Essai échoué");
          enteredPin = "";
        }
      }
    }
  }
});



