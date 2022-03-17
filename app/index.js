const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  menu.classList.toggle("is-active");
  nav.classList.toggle("hide-main");
});
