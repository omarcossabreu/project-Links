function toggleMode() {
  const mode = document.documentElement

  //  if (mode.classList.contains("light")) {
  //    mode.classList.remove('light')
  //    }else {
  //    mode.classList.add('light')
  //  }
  mode.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector(".profile img")

  //substituir a imagem
  if (mode.classList.contains("light")) {
    img.setAttribute("src", "https://i.ibb.co/5Tz8vMZ/avatar-eu.jpg")
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/129352255?v=4"
    )
  }
}