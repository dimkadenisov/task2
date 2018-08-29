let slider = document.getElementById("range");
let output = document.getElementById("temp");

slider.oninput = function() {
  if (this.value > 0) {
    output.innerHTML = `+${this.value}`;
  }
  else output.innerHTML = this.value;
}