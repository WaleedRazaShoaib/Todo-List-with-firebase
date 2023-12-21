import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
   query,
  orderBy,
 updateDoc,
 getDocs,
 serverTimestamp,
 setDoc,
 deleteDoc,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfTap2e0jsu3ytL0Hdib_nbQFZY-FY9k",
  authDomain: "practice-45035.firebaseapp.com",
  projectId: "practice-45035",
  storageBucket: "practice-45035.appspot.com",
  messagingSenderId: "319741118562",
  appId: "1:319741118562:web:e4c4886c9002fe6394e93b",
  measurementId: "G-X8TVV4KLFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);


export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getFirestore,
  collection,
  addDoc,
  db,
  onSnapshot,
  doc,
  query,
  orderBy,
  updateDoc,
  serverTimestamp,
getDocs,
setDoc,
deleteDoc
}









