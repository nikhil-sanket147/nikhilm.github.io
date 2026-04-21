// Dark mode toggle

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {

localStorage.setItem("theme", "dark");

} else {

localStorage.setItem("theme", "light");

}

});


// Load saved theme

window.addEventListener("load", () => {

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

document.body.classList.add("dark");

}

});


// Mobile menu

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


// Smooth scrolling

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior: "smooth"

});

});

});


// Contact form validation

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {

e.preventDefault();

message.textContent = "Message sent successfully!";
message.style.color = "green";

form.reset();

});