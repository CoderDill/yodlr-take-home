import axios from "axios";


$("#signUp").on("submit", async function (e) {
  e.preventDefault();
  const email = $("#email").val();
  const password = $("#password").val();

  console.log(email, password);

  const res = await axios({
    method: "post",
    url: "/users",
    data: {
      email: email,
      password: password,
    },
  });
  console.log(res);
});
