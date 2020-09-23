
const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", (e) => {
    document.querySelector(".navigation--js").classList.toggle("navigation--open");
  });