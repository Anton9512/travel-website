/*-------SHOW MENU--------*/

const navMenu = document.getElementById("nav-menu");

navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

/*--------------------------------------------------*/

/*HIDDEN MENU*/

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/*---------------------------------------------------------*/

/* Remove nav-menu on link click */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*--------------------------------------------------------*/

/* CHANGE BACKGROUND HEADER */

function scrollHeader() {
  const header = document.getElementById("header");

  //When the scroll is greater than 100 viewport height, add the scroll header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*------------------------------------------------------- */
