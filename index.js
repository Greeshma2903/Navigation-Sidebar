// select close-nav --> close on click
// select nav-toggle to open side bar

// on scroll after clicking, close nav bar (remove class)

const toggleNav = document.querySelector(".nav-toggle");
const closeNav = document.querySelector(".close-nav");
const navbar = document.getElementById("navbar");

toggleNav.addEventListener("click", function () {
  navbar.classList.toggle("show-nav");

  let prevScroll = window.scrollY;
  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;
    if (currentScroll > prevScroll) {
      navbar.classList.remove("show-nav");
    }
  });
});

closeNav.addEventListener("click", function () {
  navbar.classList.remove("show-nav");
});

window.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    navbar.classList.remove("show-nav");
  }
});
