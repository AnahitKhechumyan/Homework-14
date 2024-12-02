import { bloggers } from "./data.js";
  
const button = document.querySelector('.login-container form .btn');
  if (button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      let input_username = document.querySelector(".username").value;
      let input_password = document.querySelector(".password").value;
      let isValidUser = false;

      for (let blogger of bloggers){
          if (input_username === `${blogger.firstName} ${blogger.lastName}` && parseInt(input_password) === blogger.id) {
              isValidUser  = true;
              window.location.assign("http://127.0.0.1:5500/home.html");
              break; 
          }
      }
      if (!isValidUser) {
          alert("Invalid username or password");
      }
  });
 };

    