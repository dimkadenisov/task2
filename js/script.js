//-----------------------------
// arrows button scroll scripts
//-----------------------------

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

//--------------
//slider scripts
//--------------

let slider = document.getElementById("range"),
    output = document.getElementById("temp");

slider.oninput = function() {
  if (this.value > 0) {
    output.innerHTML = `+${this.value}`;
  }
  else output.innerHTML = this.value;
}

//-------------
//popup scripts
//-------------

let isOpened = false,
    popup = document.getElementsByClassName("popup")[0],
    card = document.getElementsByClassName("card");

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => popup.classList.toggle('hide'))
  document.body.classList.add("modal-open")  //new
  popup.scrollTo = 0
}

document.getElementById("close").addEventListener("click", () => {
  popup.classList.toggle('hide')
  document.body.classList.remove("modal-open")  //new
});

//-----------------
//side menu scripts
//-----------------

let burger = document.getElementsByClassName("burger")[0],
    wrap = document.getElementsByClassName("header__wrap")[0],
    menu = document.getElementsByClassName("header__menu")[0],
    isMenuOpened = false;

burger.addEventListener("click", () => {
  wrap.style.width = "250px"
  menu.style.width = "100vw"
  isMenuOpened = true
  document.body.classList.add("modal-open")
});

menu.addEventListener("click", () => {
  if(isMenuOpened){
    wrap.style.width = "0"
    menu.style.width = "0"
    document.body.classList.remove("modal-open")
  }
});