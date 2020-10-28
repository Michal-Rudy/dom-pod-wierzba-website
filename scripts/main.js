/* const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", (e) => {
  document
    .querySelector(".navigation--js")
    .classList.toggle("navigation--open");
}); */


window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  if (scrolled >= 100) document.querySelector(".site-header").classList.add("shrink-and-sticky");
  else document.querySelector(".site-header").classList.remove("shrink-and-sticky");
});


/* const hoverWholeArticle = document.querySelector(".offer-article");
hoverWholeArticle.addEventListener("hover", (e) => {
  document.querySelector(.article-text)
});
 */