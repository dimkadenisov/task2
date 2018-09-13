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
    cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    popup.classList.toggle("hide");
    document.body.classList.add("modal-open");
    popup.scrollTo = 0;
  });
};

document.getElementById("close").addEventListener("click", () => {
  popup.classList.toggle('hide');
  document.body.classList.remove("modal-open");  
});

//-----------------
//side menu scripts
//-----------------

let burger = document.getElementsByClassName("burger")[0],
    wrap = document.getElementsByClassName("header__wrap")[0],
    menu = document.getElementsByClassName("header__menu")[0],
    isMenuOpened = false;

burger.addEventListener("click", () => {
  wrap.style.width = "250px";
  menu.style.width = "100vw";
  isMenuOpened = true;
  document.body.classList.add("modal-open");
});

menu.addEventListener("click", () => {
  if(isMenuOpened){
    wrap.style.width = "0";
    menu.style.width = "0";
    document.body.classList.remove("modal-open");
  }
});

//--------------
//filter scripts
//--------------


let filterText = document.getElementById("filter-text"),
    categories = document.getElementsByClassName("filter__category"),
    activeCategorie = document.querySelector(".favorite-devices__dropdown"),
    list = document.querySelector(".favorite-devices__filter");

for (let j = 0; j < categories.length; j++) {
  categories[j].addEventListener("click", () => filterText.innerHTML = categories[j].innerHTML)
  categories[j].addEventListener("click", () => {
    for (let k = 0; k < categories.length; k++) {
      categories[k].classList.remove("filter__category_active");
    }
    categories[j].classList.toggle("filter__category_active")
  })
}

activeCategorie.addEventListener("click", () => {
  document.querySelector(".favorite-devices__h2").classList.add("hide");
  document.querySelector(".between-wrapper_margin_on").style.margin = "0";
  list.classList.remove("hide");
  activeCategorie.classList.add("hide");

});

if (window.matchMedia('(max-width: 425px)').matches) {
  list.classList.add("hide");
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
      list.classList.add("hide");
      activeCategorie.classList.remove("hide");
      document.querySelector(".favorite-devices__h2").classList.remove("hide");
      document.querySelector(".between-wrapper_margin_on").style.margin = "0 20px";
    });
  };
};