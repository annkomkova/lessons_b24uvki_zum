document.addEventListener('DOMContentLoaded', () => {
  returnBack()
  getRandomObject()
})

function returnBack() {
  const back = document.querySelector('.back')

  back.addEventListener('click', () => {
    window.history.back()
  })
}

function getRandomObject() {
  const section = document.querySelector('.object')

  const objects = [
    {
      source: 'images/avto_fonar.jpeg',
      text: 'Автомобильный фонарь'
    },
    {
      source: 'images/careta_fonar.jpg',
      text: 'Каретный фонарь конца XIX века'
    },
    {
      source: 'images/fonarshik.jpg',
      text: 'Английский фонарщик'
    },
    {
      source: 'images/kerosin_lampy.jpg',
      text: 'Керосиновые лампы конца XIX - начала ХХ века'
    },
    {
      source: 'images/mysh_fonar.jpg',
      text: 'Фонарь «Летучая мышь»'
    },
    {
      source: 'images/swecha_fonar.jpg',
      text: 'Свечной фонарь XIX века'
    },
    {
      source: 'images/velosiped_fonar.jpeg',
      text: 'Велосипедный фонарь'
    }
  ]

  let index = Math.floor(objects.length * Math.random())

  const img = document.createElement('img')
  img.src = objects[index].source

  const txt = document.createElement('p')
  txt.innerText = objects[index].text

  section.appendChild(img)
  section.appendChild(txt)
}
