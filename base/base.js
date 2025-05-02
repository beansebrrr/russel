const navlists = document.querySelectorAll("header .nav-list")
const sidebar = document.querySelector("aside")
const sidebarOpen = document.querySelector(".sidebar-open")
const sidebarClose = document.querySelector(".sidebar-close")

navlists.forEach(navlist => {
  const clone = navlist.cloneNode(true)
  clone.classList = ''
  clone.classList.add("nav-list")

  sidebar.appendChild(clone)
})

sidebarOpen.addEventListener("click", () => {
  sidebar.classList.remove("hidden")
})

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("hidden")
})
