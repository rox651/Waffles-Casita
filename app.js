const list = document.querySelectorAll(".waffle-menu-type");
const nav = document.querySelector(".header-nav");
const btnBars = document.getElementById("bars-btn");

//abrir menus de waffles
list.forEach(function (listElement) {
  const btn = listElement.querySelector(".list-btn");

  btn.addEventListener("click", function (e) {
    list.forEach(function (item) {
      if (item !== listElement) {
        item.classList.remove("show-links");
        btn.classList.replace("fa-minus-square", "fa-plus-square");
      }
    });

    listElement.classList.toggle("show-links");

  });
});

//abrir barra de navegación
btnBars.addEventListener("click", function () {
  nav.classList.toggle("show-nav");

  if (nav.classList.contains("show-nav")) {
    nav.setAttribute("arial-label", "Cerrar menú");
  } else {
    nav.setAttribute("arial-label", "Abrir menú");
  }
});

const menuLinks = document.querySelectorAll('.nav a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    nav.classList.remove("show-nav");
  });
});

//animaciones al scrolear
const cont1 = document.querySelector(".ctn1");
const cont2 = document.querySelector(".ctn2");
const cont3 = document.querySelector(".ctn3");
const cont4 = document.querySelector(".ctn4");
const cont5 = document.querySelector(".ctn5");
const cont6 = document.querySelector(".ctn6");

const cargarImagen = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
};

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.8,
});

observador.observe(cont1);
observador.observe(cont2);
observador.observe(cont3);
observador.observe(cont4);
observador.observe(cont5);
observador.observe(cont6);
