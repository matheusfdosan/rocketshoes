const menu = document.querySelector("header div.menu")
const closeMenu = document.querySelector(".close-menu img")

menu.addEventListener("click", () => {
  document.querySelector(".menu-overlay").classList.add("active")
})

closeMenu.addEventListener("click", () => {
  document.querySelector(".menu-overlay").classList.remove("active")
})
