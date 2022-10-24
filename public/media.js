const headline = document.querySelector(".media-headline");
console.log(headline);

document.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    headline.classList.add("change");
  } else {
    headline.classList.remove("change");
  }
});
