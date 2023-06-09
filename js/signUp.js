import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,initializeApp,getDatabase, ref, set,push,onValue,
    app,db,auth,userRef,signOut} from './firebase-config.js'

    const form1 = document.querySelector(".signUpForm");
    const form2 = document.querySelector("#signInForm");
    const intile = document.querySelectorAll(".in-tile");
    const mobile = document.getElementById("ph");
    const countryCode = document.getElementById("cc");
    const email = document.getElementById("email");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const middleName = document.getElementById("mname");
    const roll=document.querySelector("#cover-spin")
    const showpass= document.getElementsByClassName("fa-eye");
    const hidepass=document.getElementsByClassName("fa-eye-slash");
    const password = document.getElementById("pass");
    const confirmPassword = document.getElementById("cpass");
const modals=document.getElementById("modalbtn")
const modalsbtn=document.querySelector(".modalbtn")
const modalf=document.getElementById("modalbtn1")
const modalfbtn=document.querySelector(".modalbtn1")
const modalClose=document.querySelectorAll(".btn-close")

modalClose[0].addEventListener("click",function(e){
  e.preventDefault()
  window.location.reload()
  })
  modalClose[1].addEventListener("click",function(e){
    e.preventDefault()
    window.location.reload()
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
    showpass[1].addEventListener("click",function(){
        if(confirmPassword.value.length !=0){
        if(confirmPassword.type=="password"){
            confirmPassword.type="text";
            showpass[1].style.display="none";
            hidepass[1].style.display="inline"
        }
        else{
            confirmPassword.type="password"   
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
    hidepass[1].addEventListener("click",function(){
        if(confirmPassword.type=="text"){
            confirmPassword.type="password";
            showpass[1].style.display="inline";
            hidepass[1].style.display="none"
        }
        else
            confirmPassword.type="text"
    })
    
      
        //sign Up Page
      
      form1.addEventListener("submit", function(event) {
        event.preventDefault(); 
        roll.style.display="block"
      
        if (!validateEmail(email.value)) {
          alert("Invalid email address");
          roll.style.display="none"

          return;
        }
      
      
        if (!validatePassword(password.value)) {
          alert("password should contain:\nminimum length of 8\natleast 1 number\natleast 1 special character and \natleast 1 alphabet");
          roll.style.display="none"

          return;
        }
      
      
        if (password.value !== confirmPassword.value) {
          alert("Passwords do not match");
          roll.style.display="none"

          return;
        }
        if(countryCode.value.length == 2){
          countryCode.value="+"+countryCode.value
        }
        var newUserRef = push(userRef);
        createUserWithEmailAndPassword(auth,email.value, password.value)
        .then((userCredential) => {
          // User signed up successfully
          const user = userCredential.user;
          console.log(user);
          set(newUserRef,{
          fname: firstName.value,
          mname:middleName.value,
          lname:lastName.value,
          email:email.value,
          country:countryCode.value,
          phone:mobile.value,
          password:password.value
        }).then(()=>{
          // alert("success")
          roll.style.display="none"
          modals.click()
          modalsbtn.addEventListener("click",function(){
          signOut(auth)
          const link = document.createElement('a');
          link.href = 'index.html';
          link.click()
          })
        
          
          
         
        }).catch(()=>{
          // alert("failed")
          roll.style.display="none"
          modalf.click()
          modalfbtn.addEventListener("click",function(){
         window.location.reload()
            })
        })
       
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
          alert("email already exist")
          window.location.reload()
        });
        
      });
      
      
      
      function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
      
      
      
      function validatePassword(password) {
         
        return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);
      }