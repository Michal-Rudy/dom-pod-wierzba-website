const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", (e) => {
  document
    .querySelector(".navigation--js")
    .classList.toggle("navigation--open");
});


window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled >= 100) document.querySelector(".main-header").classList.add("shrink-and-sticky");
  else document.querySelector(".main-header").classList.remove("shrink-and-sticky");
});



