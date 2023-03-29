
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");




hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
  console.log("click");
});


let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach(link=>{
  link.addEventListener('mouseover',() => {
    cursor.classList.add("grow")
  })
  link.addEventListener('mouseleave',() => {
    cursor.classList.remove("grow")
  })

})


  // 1. Custom Cursor JS
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px"
})
var
    e = document.getElementById("cursor");

$(document).mousemove(function (e) {

    $(".theme-bg-color")
        .on("mouseenter", function () {
            $('.cursor').addClass("black")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("black")
        })
    $(".pointer-large")
        .on("mouseenter", function () {
            $('.cursor').addClass("large")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("large")
        })
    $(".pointer-small")
        .on("mouseenter", function () {
            $('.cursor').addClass("small")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("small")
        })
    $(".mfp-img")
        .on("mouseenter", function () {
            $('.cursor').addClass("right")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("right")
        })
    $(".pointer-open")
        .on("mouseenter", function () {
            $('.cursor').addClass("open")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("open")
        })
    $(".cursor-href")
        .on("mouseenter", function () {
            $('.cursor').addClass("href")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("href")
        })
    $(".cursor-input")
        .on("mouseenter", function () {
            $('.cursor').addClass("input")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("input")
        })
    $(".cursor-small, .clients-testimonial-active button.owl-dot, .dribbble-slider-active .owl-nav button")
        .on("mouseenter", function () {
            $('.cursor').addClass("small")
        })
        .on("mouseleave", function () {
            $('.cursor').removeClass("small")
        })
});

