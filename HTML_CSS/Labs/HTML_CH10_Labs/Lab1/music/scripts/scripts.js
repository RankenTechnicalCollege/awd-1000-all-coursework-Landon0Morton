/*
  Landon Morton
  Scripts.js
  10/15/25
*/

/* Hamburger Menu Function */
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}