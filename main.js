let start = document.getElementById("start-journey-btn");
let hero = document.getElementById("hero-page");
let bage = document.getElementById("details-page");
let home = document.getElementById("home");
let social = document.getElementById("social");
let cardsad = document.getElementById("cardsad");
let adan = document.getElementById("adan");
let pro = document.getElementById("cardspro");
let protitle = document.getElementById("protitle");
let div2 = document.getElementById("div2");
let divse = document.getElementById("divse");
let diva = document.getElementById("diva");
let divp = document.getElementById("divp");
let divA = document.getElementById("divA");
let footer = document.getElementById("footer");
let abouthead = document.getElementById("abouthead");
let abouttitle = document.getElementById("abouttitle");
let aboutimg = document.getElementById("aboutimg");
start.onclick = function () {
  hero.style.display = "none";
  bage.style.display = "block";
};
home.onclick = function () {
  hero.style.display = "flex";
  bage.style.display = "none";
};
social.onclick = function () {
  scroll({
    left: 0,
    top: footer.offsetTop,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY >= adan.offsetTop - 550) {
    cardsad.style.animation = "cardsad 2s forwards";
    cardsad.style.visibility = "visible";
    adan.style.visibility = "visible";
    adan.style.animation =
      "shine 3s linear infinite, slideIn 1s ease-out forwards, adan 4s forwards";
  } else {
    cardsad.style.animation = "none";
    cardsad.style.visibility = "hidden";
    adan.style.animation = "none";
    adan.style.visibility = "hidden";
  }
  if (scrollY >= abouthead.offsetTop - 550) {
    abouthead.style.animation =
      "shine 3s linear infinite,slideIn 1s ease-out forwards,adan 3s forwards";
    abouthead.style.visibility = "visible";
    abouttitle.style.animation = "abouttitle 2s forwards";
    abouttitle.style.visibility = "visible";
    aboutimg.style.animation = "aboutimg 2s forwards";
    aboutimg.style.visibility = "visible";
  } else {
    abouthead.style.animation = "none";
    abouthead.style.visibility = "hidden";
    abouttitle.style.animation = "none";
    abouttitle.style.visibility = "hidden";
    aboutimg.style.animation = "none";
    aboutimg.style.visibility = "hidden";
  }
  if (scrollY >= protitle.offsetTop - 550) {
    pro.style.animation = "cardsad 1.5s forwards";
    pro.style.visibility = "visible";
    protitle.style.animation =
      "  shine 3s linear infinite ,slideIn 1s ease-out forwards, adan 4s forwards";
    protitle.style.visibility = "visible";
  } else {
    pro.style.visibility = "hidden";
    pro.style.animation = "none";
    protitle.style.animation = "none";
    protitle.style.visibility = "hidden";
  }
};
divse.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
diva.onclick = function () {
  scroll({
    top: abouthead.offsetTop - 130,
    left: 0,
    behavior: "smooth",
  });
};
divp.onclick = function () {
  scroll({
    top: protitle.offsetTop - 130,
    left: 0,
    behavior: "smooth",
  });
};
divA.onclick = function () {
  scroll({
    top: adan.offsetTop - 130,
    left: 0,
    behavior: "smooth",
  });
};
