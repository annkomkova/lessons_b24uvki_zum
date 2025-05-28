document.addEventListener('DOMContentLoaded', () => {
  flipCardOnClick()
  shakeImgOnClick()
  moveProgressBar()
  showPopup()
  drawSVG()
  draggable()
  randomText()
})

function flipCardOnClick() {
  let card = document.querySelector('.flip-card-inner')

  card.addEventListener('click', () => {
    card.classList.toggle('flip-card-animation')
  })
}

function shakeImgOnClick() {
  let img = document.querySelector('.shacking-image')
  let text = document.querySelector('.shacking-text')
  let counter = 0

  img.addEventListener('click', () => {
    counter++

    text.innerHTML = `Кликни ещё ${
      10 - counter
    } раз по картинке, чтобы запустить анимацию!`

    if (counter == 10) {
      img.classList.add('shacking-image-animation')
      text.remove()
    }
  })
}

function moveProgressBar() {
  let button = document.querySelector('.progressButton')
  let i = 0

  button.addEventListener('click', () => {
    if (i == 0) {
      i = 1
      let elem = document.getElementById('myBar')
      let width = 1
      let id = setInterval(frame, 20)
      let div = document.querySelector('.progressDiv')

      function frame() {
        if (width >= 100) {
          clearInterval(id)
          i = 0
        } else {
          width++
          elem.style.width = width + '%'
        }
      }

      setTimeout(function () {
        console.log(width)
        if (width == 100) {
          div.style = 'visibility: visible;'
        }
      }, 2000)
    }
  })
}

function showPopup() {
  let popupText = document.querySelector('.popuptext')
  let popupClass = document.querySelector('.popup')

  popupClass.addEventListener('click', () => {
    popupText.classList.toggle('show')
  })
}

function drawSVG() {
  // Get the id of the <path> element and the length of <path>
  let triangle = document.getElementById('triangle')
  let length = triangle.getTotalLength()

  // The start position of the drawing
  triangle.style.strokeDasharray = length

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
  triangle.style.strokeDashoffset = length

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener('scroll', myFunction)

  function myFunction() {
    let scrollpercent =
      (document.body.scrollTop + document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)

    let draw = length * scrollpercent

    // Reverse the drawing (when scrolling upwards)
    triangle.style.strokeDashoffset = length - draw
  }
}

function draggable() {
  // Make the DIV element draggable:
  dragElement(document.getElementById('mydiv'))

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0
    if (document.getElementById(elmnt.id + 'header')) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault()
      // get the mouse cursor position at startup:
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag
    }

    function elementDrag(e) {
      e = e || window.event
      e.preventDefault()
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px'
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px'
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}

function randomText() {
  let text = document.querySelector('.random h1')
  let button = document.querySelector('.random button')

  let words = [
    'сердитый',
    'весёлый',
    'смешной',
    'смурной',
    'озорной',
    'сонный',
    'злобный',
    'обалдевший',
    'уставший',
    'бодрый',
    'спокойный',
    'тревожный'
  ]

  button.addEventListener('click', () => {
    let i = Math.floor(words.length * Math.random())
    text.innerHTML = `Сегодня ты ${words[i]}`
  })
}
