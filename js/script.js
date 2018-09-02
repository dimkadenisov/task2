const scroll = (elem, toRight) => () => {
  toRight ? elem.scrollLeft+=(elem.clientWidth+9) : elem.scrollLeft-=(elem.clientWidth+9);
};

document.getElementById("right1").addEventListener("click", scroll(document.getElementById("scrollContainer1"), true));
document.getElementById("left1").addEventListener("click", scroll(document.getElementById("scrollContainer1"), false));
document.getElementById("right2").addEventListener("click", scroll(document.getElementById("scrollContainer2"), true));
document.getElementById("left2").addEventListener("click", scroll(document.getElementById("scrollContainer2"), false));


const addArrows = (containerId, arrowsId) => {
  (document.getElementById(containerId).clientWidth != document.getElementById(containerId).scrollWidth) ?
  document.getElementById(arrowsId).classList.remove("arrows_hidden")
  : document.getElementById(arrowsId).classList.add("arrows_hidden");
};

addArrows("scrollContainer1", "arrows1");
addArrows("scrollContainer2", "arrows2");

//slider scripts

let slider = document.getElementById("range");
let output = document.getElementById("temp");

slider.oninput = function() {
  if (this.value > 0) {
    output.innerHTML = `+${this.value}`;
  }
  else output.innerHTML = this.value;
}

let isOpened = false
let popup = document.getElementsByClassName("popup")[0];

const togglePopUp = () => {
  if (isOpened) {
    popup.classList.add('hide');
    isOpened = false;
  }
  else {
    popup.classList.remove('hide');
    isOpened = true;
  }
}

let card = document.getElementsByClassName("card");

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("click", togglePopUp);
}

document.getElementById("close").addEventListener("click", togglePopUp);