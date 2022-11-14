// Menu navbar toggler

let menuOpen = document.getElementById("menuOpen")
let menuClose = document.getElementById("menuClose")
let angleUp = document.getElementById("angleUp")
let angleDown = document.getElementById("angleDown")



function navToggle() {
    menuOpen.classList.toggle("active")
    menuClose.classList.toggle("active")
}


// function dropDownToggler() {
//     angleUp.classList.toggle("active")
//     angleDown.classList.toggle("active")
// }


// Change css styles on scroll

let myNavbar = document.getElementById("navBar");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNavbar.classList.add("nav-colored")
        myNavbar.classList.remove("nav-transparent")

    }  else {

        myNavbar.classList.add("nav-transparent")
        myNavbar.classList.remove("nav-colored")
    }
}