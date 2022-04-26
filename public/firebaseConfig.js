import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCz_RVbIdP_H5TeD94X72P6CFc4ZW8X_hw",
    authDomain: "web-project-83411.firebaseapp.com",
    databaseURL: "https://web-project-83411-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web-project-83411",
    storageBucket: "web-project-83411.appspot.com",
    messagingSenderId: "112755152651",
    appId: "1:112755152651:web:b82cf705717fe321daf40e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const token = localStorage.token;

if(token) {
  console.log("Check");
  fetch("http://localhost:3000", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token
    }
  })
}

const loginForm = document.getElementById("loginForm");

// The many of codes
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
  .then((cred) => {
    return cred.user.getIdToken();
  }).then((token) => {
    localStorage.setItem("token", token);
  }).catch((err) => {
    if(err)throw err
  })
})