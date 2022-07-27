function validate() {
  const username = document.getElementById("user-name").value;
  const password = document.getElementById("password").value;
  if (username == "abcd" && password == "1234") {
    alert("Login successfully");
    return true;
  } else {
    alert("Wrong Username or Password");
    document.getElementById("user-name").value = "";
    document.getElementById("password").value = "";
    return false;
  }
}
