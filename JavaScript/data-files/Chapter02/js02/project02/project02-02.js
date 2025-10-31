/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Landon Morton
      Date: 10/31/25
      
      Filename: project02-02.js
 */
 
// Verify form completion function
function verifyForm() {
      let name = document.getElementById('name').value; 
      let email = document.getElementById('email').value;
      let phone = document.getElementById('phone').value;

      name && email && phone  ? window.alert("Thank you!") : window.alert("Please fill out all fields.");
      
}

document.getElementById('submit').onclick = verifyForm; 