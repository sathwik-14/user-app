import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,setPersistence, browserSessionPersistence,
    onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getDatabase, ref, set,push,onValue,
orderByChild,equalTo,query} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzPCwo1mfPbT9pLQ0sikMih5bpV7f0ql4",
  authDomain: "signupform-b0a88.firebaseapp.com",
  projectId: "signupform-b0a88",
  storageBucket: "signupform-b0a88.appspot.com",
  messagingSenderId: "41786170286",
  appId: "1:41786170286:web:283cb36a7f0efcab05863f",
  databaseURL: "https://signupform-b0a88-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

export const app = initializeApp(firebaseConfig);
export var db=getDatabase(app)
export const auth=getAuth(app);
export const userRef=ref(db,"users")

// setPersistence(auth,browserSessionPersistence)


export {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    initializeApp,getDatabase, ref, set, push,onValue,setPersistence, browserSessionPersistence,
onAuthStateChanged,orderByChild,equalTo,query,signOut,sendPasswordResetEmail}



