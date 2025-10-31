/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Landon Morton
      Date:   10/31/25

      Filename: project02-03.js
 */

// Square Mouse Over/Out
document.getElementById('square').onmouseover = function() {
      document.getElementById('feedback').innerHTML = "You're hovering over the Square";
}

document.getElementById('square').onmouseout = function() {
      document.getElementById('feedback').innerHTML = "";
}

// Triangle Mouse Over/Out
document.getElementById('triangle').onmouseover = function() {
      document.getElementById('feedback').innerHTML = "You're hovering over the Triangle";
}

document.getElementById('triangle').onmouseout = function() {
      document.getElementById('feedback').innerHTML = "";
}

// Circle Mouse Over/Out
document.getElementById('circle').onmouseover = function() {
      document.getElementById('feedback').innerHTML = "You're hovering over the Circle";
}

document.getElementById('circle').onmouseout = function() {
      document.getElementById('feedback').innerHTML = "";
}
