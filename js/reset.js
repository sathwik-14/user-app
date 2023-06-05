import {auth,sendPasswordResetEmail} from './firebase-config.js'
         
const resetForm=document.getElementById("resetForm")
const email = document.querySelector('#email');
const modals=document.getElementById("modalbtn")
const modalbtn=document.querySelectorAll(".modalbtn")
const modalf=document.getElementById("modalbtn1")
const modalClose=document.querySelectorAll(".btn-close")
const roll=document.querySelector("#cover-spin")

modalClose[0].addEventListener("click",function(e){
    e.preventDefault()
    window.location.reload()
    })
    modalClose[1].addEventListener("click",function(e){
      e.preventDefault()
      window.location.reload()
      })


function validateEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


resetForm.addEventListener("submit", function(event) {
event.preventDefault(); 
roll.style.display="block"
if (!validateEmail(email.value)) {
 alert("Invalid email address");
 return;
}
sendPasswordResetEmail(auth, email.value)
.then(() => {
    roll.style.display="none"

//  alert('Password reset email sent');
modals.click()
modalbtn[0].addEventListener("click",function(){
const link = document.createElement('a');
link.href = 'index.html';
link.click()
})
})
.catch((error) => {
    roll.style.display="none"
//  alert("something went wrong");
modalf.click()
modalbtn[1].addEventListener("click",function(){
    window.location.reload()
    })
});

})
