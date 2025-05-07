function setupSidebar(headerSelector) {
  // Select the appropriate html elements
  const headerElement = document.querySelector(headerSelector)
  const navLists = headerElement.querySelectorAll(".nav-list")
  const sidebar = headerElement.querySelector("aside")
  const sidebarOpen = headerElement.querySelector(".sidebar-open")
  const sidebarClose = headerElement.querySelector(".sidebar-close")

  // Select all the navLists and append it to the sidebar
  navLists.forEach(navList => {
    const clone = navList.cloneNode(true)
    clone.classList = ''
    clone.classList.add("nav-list")
  
    sidebar.appendChild(clone)
  })
  

  // Give functionality to the open/close buttons
  sidebarOpen.addEventListener("click", () =>
    sidebar.classList.remove("hidden"))
  
  sidebarClose.addEventListener("click", () => 
    sidebar.classList.add("hidden"))
}

setupSidebar("header")