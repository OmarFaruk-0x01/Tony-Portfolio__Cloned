window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
    document.querySelector('html').style.overflowY = 'auto'
  document.querySelector('body').style.overflowY = 'auto'
});

let menuNodes = document.querySelectorAll(".nav .nav-menus__menu");

menuNodes.forEach((node) => {
  node.addEventListener("click", () => {
    let check = document.querySelector(".nav .nav-menus__menu.active");
    if (check) {
      check.classList.remove("active");
    }
    node.classList.add("active");

    document.querySelector("header").classList.toggle("open");
  });
});

document.querySelector(".home-down__btn").addEventListener("click", () => {
  const { hash, origin } = window.location;
  window.location = origin + "/" + "#about";
});

document.querySelector("#mobi-navBtn").addEventListener("click", () => {
  document.querySelector("header").classList.toggle("open");
});
