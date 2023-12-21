import { auth, onAuthStateChanged,signOut } from "./firebase.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user----> ", user)
        if(location.pathname !== "/todo.html"){
            window.location.href = "./todo.html"
         }
    } else {
        console.log("not logIn")
       if(location.pathname !== "/index.html"){
         window.location.href = "/index.html";
        }
    }
});

let LogOutbtn = document.getElementById("LogOutbtn");
const LogOut = () => {
    signOut(auth).then(
        () => {
        window.location = "/login.html"
    }).catch((error) => {
        console.log("user gaya")
    });
}
LogOutbtn && LogOutbtn.addEventListener("click", LogOut)