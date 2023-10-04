function toggleMode() {
  const mode = document.documentElement
  mode.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector(".profile img")

  //substituir a imagem
  if (mode.classList.contains("light")) {
    img.setAttribute("src", "https://i.ibb.co/3WVmScQ/snapedit-1695508740920.jpg")
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/129352255?v=4"
    )
  }
}

//manipulação do HTML com JS
let userProfile = document.querySelector("#userProfile")
userProfile.innerHTML = ("<h1>Marcos  Abreu</h1><p>Desenvolvedor Front-End</p>")

let footer = document.querySelector("#footer")
footer.innerHTML = ("<span>Marcos Abreu 2023 | Todos os direitos reservados</span>")

























