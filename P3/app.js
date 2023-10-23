// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Lo que se hace para este navBar es para desplegar la lista de opciones de
// navegacion, mediante manipulacion de las clases desde js

const navToogle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToogle.addEventListener("click", function () {
  //console.log(links.classList);
  //   console.log(links.classList.contains("links")); true
  //   console.log(links.classList.contains("algos")); false

  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  links.classList.toggle("show-links");
});
