const dark = document.querySelector(".dark")
const night = document.querySelector(".night")
const light = document.querySelector(".light")
const sidebar = document.querySelector(".sidebar")
const listItemActive = document.querySelector(".list-item.active")

dark.addEventListener("click", () => {
    sidebar.className = "sidebar"
    listItemActive.className = "list-item active"
})

night.addEventListener("click", () => {
    sidebar.className = "sidebar night"
    listItemActive.className = "list-item active night"
})

light.addEventListener("click", () => {
    sidebar.className = "sidebar light"
    listItemActive.className = "list-item active"
})