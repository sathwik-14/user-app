import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,initializeApp,getDatabase, ref, set,push,onValue,
    app,db,auth,setPersistence, browserSessionPersistence,onAuthStateChanged} from '/js/firebase-config.js'
    
    
    const form2 = document.querySelector("#signInForm");
    const intile = document.querySelectorAll(".in-tile");
    const email = document.getElementById("email");
    const showpass= document.getElementsByClassName("fa-eye");
    const hidepass=document.getElementsByClassName("fa-eye-slash")
    const password = document.getElementById("pass");
    const roll=document.querySelector("#cover-spin")
    const perror = document.querySelector("#invalid");
    const success= document.querySelector("#success");
    const failed = document.querySelector("#failed");
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is authenticated"+user.email+user.password);
        const link = document.createElement('a');
    link.href = 'home.html';
    link.dispatchEvent(new MouseEvent('click'));
    
      } else {
        console.log("User is not authenticated");
      }
    });
      
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      
      
      
      function validatePassword(password) {
         
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);
      }
    //sign In page
    
    form2.addEventListener("submit", function(event) {
        event.preventDefault(); 
        roll.style.display="block"
      
        if (!validateEmail(email.value)) {
          alert("Invalid email address");
          return;
        }
      
      
        if (!validatePassword(password.value)) {
          perror.classList.remove("d-none")
          return;
        }else{
          perror.classList.add("d-none")
      
        }
      
        signInWithEmailAndPassword(auth,email.value, password.value)
        .then((userCredential) => {
          // User signed up successfully
          const user = userCredential.user;
          console.log(user+"signed in");
          failed.classList.add("d-none")
          success.classList.remove("d-none")
          success.classList.add("animate__animated")
          success.classList.add("animate__fadeInDown")
          roll.style.display="none"
        
          setTimeout(function(){
            const link = document.createElement('a');
    link.href = 'home.html';
    link.dispatchEvent(new MouseEvent('click'));
    
          },1500)
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
          success.classList.add("d-none")
          failed.classList.remove("d-none")
          failed.classList.add("animate__animated")
          failed.classList.add("animate__fadeInDown")
          roll.style.display="none"
    
        });
      
      })



showpass[0].addEventListener("click",function(){
    if(password.value.length !=0){
    if(password.type=="password"){
        password.type="text";
        showpass[0].style.display="none";
        hidepass[0].style.display="inline"
    }
    else{
        password.type="password"   
    }
}
})

hidepass[0].addEventListener("click",function(){
    if(password.type=="text"){
        password.type="password";
        showpass[0].style.display="inline";
        hidepass[0].style.display="none"
    }
    else
        password.type="text"
})