import {
  auth,
  signInWithEmailAndPassword
} from "./firebase.js"
// =========== Work For Log In data =========================
let emailLogin = document.getElementById("emailLogin");
let loginPassword = document.getElementById("loginPassword");
let logindata = document.getElementById("logindata");

// ========= Work for log in function ==========================

function logindata1() {
  if (emailLogin.value.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Plzz write the name",
    });
  }
  else {
    console.log(emailLogin.value)
  }
  if (loginPassword.value === "") {
    Swal.fire({
      icon: "error",
      text: "Plzz write the password",
    });
  }
  else {
    console.log(loginPassword.value)
  }

  signInWithEmailAndPassword(auth, emailLogin.value, loginPassword.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("user --->", user)
      Swal.fire({
        icon: "success",
        title: "You have been log In Sucessfully"
      });

      window.location.href = "todo.html"

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errormessage", errorMessage)
      Swal.fire({
        icon: "error",
        title: "Please write true email & password",
      });
    });

  emailLogin.value = "";
  loginPassword.value = "";

}
logindata.addEventListener("click", logindata1);  