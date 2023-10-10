const toggleButton = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggleButton.addEventListener("click", () => {
  menu.classList.add('open')
  overlay.classList.add('show')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open')
  overlay.classList.remove('show')
})

// "To the Top" - button
function toTheTop()
{
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth"
    }
  )
}

// Hide "To the Top" - button
window.addEventListener("scroll", function()
{
  let element = document.getElementById("btn-top")

  if (window.scrollY > 100)
  {
    element.classList.remove("btn-top-hide")
  }

  else
  {
    element.classList.add("btn-top-hide")
  }
})
