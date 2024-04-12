import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";


const firebaseConfig = {
  apiKey: "AIzaSyAA-dkj5lBwGUwMwOD8ct4G69Vlgls19q0",
  authDomain: "hoangjs18.firebaseapp.com",
  projectId: "hoangjs18",
  storageBucket: "hoangjs18.appspot.com",
  messagingSenderId: "1099258779602",
  appId: "1:1099258779602:web:bf1ee1b35769df9e7b1a0b",
  measurementId: "G-KFCKJ1BKSS"
};

 
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);