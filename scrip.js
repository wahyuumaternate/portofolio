// $(window).scroll(function () {
//   $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
// });

function bg() {
  let navbar = document.querySelector("nav");
  let scroll = window.scrollY;
  console.log(scroll);
  if (scroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", bg);
