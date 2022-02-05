import axios from 'axios'

const signUpForm = document.getElementById(".signUp");
console.log(signUpForm);

signUpForm.on("submit", function (e) {
  e.preventDefault();
  const email = $("#email").value;
  const password = $("#password").value;

  console.log(email, password, "working");
});
