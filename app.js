// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase,ref,set,push,onValue  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuaSaqp09UY_Pge2jxR6l_mdyAKlgRdE",
  authDomain: "insta-fef35.firebaseapp.com",
  projectId: "insta-fef35",
  storageBucket: "insta-fef35.appspot.com",
  messagingSenderId: "435375024532",
  appId: "1:435375024532:web:4c31d252579eafc289c781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

var user;
window.saveData=function(){



var email=document.getElementById("email").value;
var password=document.getElementById("pswd").value;
 user={
    email:email,
    password:password
}
const keyRef = ref(database,"users/")
user.id=push(keyRef).key;

  const taskReference = ref(database,`users/${user.id}`)

  set(taskReference,user);



}

  



