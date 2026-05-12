const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
});