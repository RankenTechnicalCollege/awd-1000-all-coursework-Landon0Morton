"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Landon Morton
      Date: 12/1/25

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
      phrases[i].addEventListener('click', function() {
            let phrase = document.createElement('h1');
            phrase.textContent = this.textContent;
            let footNote = document.createElement('p');
            footNote.textContent = footnotes[i];
            footNote.style.cssText = "font-style: italic; font-size: 1.2em;";
            let closeButton = document.createElement('input');
            closeButton.setAttribute('type', 'button');
            closeButton.setAttribute('value', "Close Footnote");
            closeButton.style = "display: block; margin: 10px auto;";
            let popup = window.open("","footnote", "width=300, height=200, top=100, left=100");
            popup.document.body.style.cssText = "background-color: ivory; font-size: 16px; padding: 10px;";
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footNote);
            popup.document.body.appendChild(closeButton);
            closeButton.addEventListener('click', function () {
                  popup.close();
            });
      })
}