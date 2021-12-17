const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const brandName = document.querySelector(".brand-title")


toggleButton.addEventListener('click', ()=>{
  navbarLinks.classList.toggle('active')
})
