// Menu navbar toggler

let menuOpen = document.getElementById("menuOpen")
let menuClose = document.getElementById("menuClose")
let angleUp1 = document.getElementById("angleUp1")
let angleUp2 = document.getElementById("angleUp2")
let angleUp3 = document.getElementById("angleUp3")


function navToggle() {
    menuOpen.classList.toggle("active")
    menuClose.classList.toggle("active")
}


function dropDownToggler1() {
    angleUp1.classList.toggle("active")
    angleDown.classList.toggle("active")
}
function dropDownToggler2() {
    angleUp2.classList.toggle("active")
    angleDown.classList.toggle("active")
}
function dropDownToggler3() {
    angleUp3.classList.toggle("active")
    angleDown.classList.toggle("active")
}


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