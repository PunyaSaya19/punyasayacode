const img_lists = document.querySelectorAll("img.img-list");
const img_main = document.querySelector("#img-main");

img_lists.forEach((e, i) => {
  e.addEventListener("click", (el) => {
    console.log(e.getAttribute("src"))
    img_main.setAttribute("src", e.getAttribute("src"))
  })
})