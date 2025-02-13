/* (Dark mode toggle - imp) */

const cbTheme = document.getElementsByClassName("icon")[0];
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const h3 = document.querySelectorAll("h3");
const link = document.querySelectorAll("a");
const p = document.querySelectorAll("p");
const fourth_article = document.querySelector(".fourth-article");
const sixth_sec = document.querySelector(".sixth-sec");
const seventh_content1 = document.querySelectorAll(".seven-content1");
const seventh_content2 = document.querySelectorAll(".seven-content2");
const nineA = document.querySelectorAll(".nineA");

cbTheme.addEventListener("click", () => {
    body.classList.toggle("black-theme");
    nav.classList.toggle("black-nav");
    h3.forEach(element => {
        element.classList.toggle("black-link");
    });
    link.forEach(element => {
        element.classList.toggle("black-link");
    });
    p.forEach(element => {
        element.classList.toggle("black-p");
    });
    fourth_article.classList.toggle("black-theme");
    sixth_sec.classList.toggle("black-sixth-sec");
    seventh_content1.forEach(element => {
        element.classList.toggle("black-theme")
    });
    seventh_content2.forEach(element => {
        element.classList.toggle("black-theme")
    });
    nineA.forEach(element => {
        element.classList.toggle("black-nineA")
    });
});