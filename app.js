// setup date
let date = document.getElementById("date").innerHTML = new Date().getFullYear();

let navBtn = document.getElementById("nav-btn");
let navClose = document.getElementById("nav-close");
let navBar = document.getElementById("navbar");

// showNav
navBtn.addEventListener("click",()=>{
    navBar.classList.toggle("showNav");
});

// closeNav
navClose.addEventListener("click",()=>{    
    navBar.classList.toggle("showNav");
});