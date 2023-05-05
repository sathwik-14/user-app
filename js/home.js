
import {auth,onAuthStateChanged,userRef,orderByChild,equalTo,query,onValue,signOut} from '/js/firebase-config.js';
const showpass= document.getElementsByClassName("fa-eye");
const hidepass=document.getElementsByClassName("fa-eye-slash")
const userEmail=document.getElementById("user")
const name=document.querySelectorAll(".name")
const phone=document.querySelector(".ph")
const emailId=document.querySelector(".email")
const country=document.querySelector(".cc")
const password=document.querySelector(".pass")
const success=document.getElementById("success")
const logout=document.getElementById("logout")



showpass[0].addEventListener("click",function(){
  password.type="text"
  showpass[0].classList.add("d-none")
  hidepass[0].classList.remove("d-none")
})
hidepass[0].addEventListener("click",function(){
  password.type="password"
  showpass[0].classList.remove("d-none")
  hidepass[0].classList.add("d-none")
})


onAuthStateChanged(auth, (user) => {
if (user) {

    setTimeout(function(){
        success.classList.remove("d-none")
        setTimeout(function(){
        success.classList.add("d-none")
        },2000)
        },100)
const email=user.email
const queryRef = query(userRef, orderByChild("email"), equalTo(email));


onValue(queryRef, (snapshot) => {
const nestedObject=snapshot.val()
const key=Object.keys(snapshot.val())[0].toString()
const userData=nestedObject[key]
name[0].innerText=userData.fname
name[1].innerText=userData.fname+" "+userData.mname+" "+userData.lname
name[2].innerText=userData.fname+" "+userData.mname+" "+userData.lname

phone.innerText=userData.phone
emailId.innerText=userData.email
password.value=userData.password
fetch('cc.json')
.then(response => response.json())
.then(data => {

const countryDetails = data.find(c => c.dial_code === userData.country);
console.log(countryDetails.code); 
country.innerText=countryDetails.code

})
.catch(error => console.error(error));
});
} else {
console.log("User is not authenticated");
alert("Please sign In to continue")
const link = document.createElement('a');
link.href = '/index.html';
link.dispatchEvent(new MouseEvent('click'));
}
});
logout.addEventListener("click",function(){
signOut(auth)
.then(()=>
{
window.close()
}
).catch(()=>{
alert("cannot logout")
})
})
