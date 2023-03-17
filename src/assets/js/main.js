//= components/swiper-bundle.min.js
//= components/scrollreveal.min.js

/*--------------------------SHOW MENU---------------------------------*/

const navMenu = document.getElementById("nav-menu");

navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}

/*-------------------------HIDDEN MENU---------------------------------*/

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove nav-menu on link click */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* CHANGE BACKGROUND HEADER */

function scrollHeader() {
  const header = document.getElementById("header");

  //When the scroll is greater than 100 viewport height, add the scroll header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* SWIPER */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
});

/*---------------------------VIDEO-----------------------------*/

const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    //Play video
    videoFile.play();

    //Change icon
    videoIcon.classList.add("ri-pause-line");
    videoIcon.classList.remove("ri-play-line");
  } else {
    videoFile.pause();

    videoIcon.classList.add("ri-play-line");
    videoIcon.classList.remove("ri-pause-line");
  }
}

videoButton.addEventListener("click", playPause);

function finalVideo() {
  //video ends, icon change
  videoIcon.classList.remove("ri-pause-line");
  videoIcon.classList.add("ri-play-line");
}

videoFile.addEventListener("ended", finalVideo);

/*---------------------------SHOW SCROLL TOP-----------------------------*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*--------------SHOW SECTIONS ACTIVE LINK------------------*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//*---------------DARK LIGHT THEME-------------------*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* ----------------SCROLL REVEAL ANIMATION------------------ */

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  reset: true,
});

sr.reveal(
  `.home__data, .home__social-link, .home__info ,
 .discover__container, .experience__data, .experience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights `,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(`.about__data, .video__description, .subscribe__description`, {
  origin: "left",
});

sr.reveal(`.about__img, .video__content, .subscribe__form`, {
  origin: "right",
  interval: 100,
});
