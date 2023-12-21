import {
    auth,
    createUserWithEmailAndPassword,
} from "./firebase.js"

// =======================ALL IDS GET =========================
let emailSignup = document.getElementById("emailSignup");
let signupPassword = document.getElementById("signupPassword");
let signupdata = document.getElementById("signupdata");
// =============== WORK FOR SIGN-UP FUNCTION ==================== 

function signupdata1() {
    if (emailSignup.value === "") {
        Swal.fire({
            icon: "error",
            text: "Plzz write the true Email",
        });
    }
    else {
        console.log(emailSignup.value)
    }
    if (signupPassword.value === "") {
        Swal.fire({
            icon: "error",
            text: "Plzz write the password",
        });
    }
    else {
        console.log(signupPassword.value)
    }
    Swal.fire({
        icon: "success",
        title: `Sign up has been saved`,
    });
    // function of User create FireBase
    createUserWithEmailAndPassword(auth, emailSignup.value, signupPassword.value)
        .then((userCredential) => {
            // // Signed up 
            const user = userCredential.user;
            console.log("user --->", user)

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("errormessage", errorMessage)
        });
    emailSignup.value = "";
    signupPassword.value = "";

}

signupdata && signupdata.addEventListener("click", signupdata1);


