document.addEventListener('DOMContentLoaded', () => {
  animatePopup()
  makeBeautyBox()
  animateCursor()
})

function animateCursor() {
  let cursor = document.querySelector('#cursor')
  let box = document.querySelector('#box')

  document.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY

    cursor.style.cssText = `top: ${y}px; left: ${x}px;`
  })

  document.addEventListener('click', () => {
    cursor.classList.add('active')

    setTimeout(() => {
      cursor.classList.remove('active')
    }, 400)
  })

  box.addEventListener('mouseover', () => {
    cursor.classList.add('hover')
  })
  box.addEventListener('mouseout', () => {
    cursor.classList.remove('hover')
  })
}

function makeBeautyBox() {
  let top = document.querySelector('#top')
  let left = document.querySelector('#left')
  let body = document.querySelector('#body')
  let box = document.querySelector('#box')

  document.addEventListener('mousemove', (event) => {
    let cursor_left = event.pageX
    let cursor_top = event.pageY

    left.innerHTML = `X: ${cursor_left}`
    top.innerHTML = `Y: ${cursor_top}`

    let body_size_x = document.documentElement.clientWidth
    let body_size_y = document.documentElement.clientHeight

    let half_body_size_x = parseInt(body_size_x / 2)
    let half_body_size_y = parseInt(body_size_y / 2)

    body.innerHTML = `ширина ${half_body_size_x}, высота ${half_body_size_y}`

    let eq1 = cursor_left < half_body_size_x
    let eq2 = cursor_left > half_body_size_x
    let eq3 = cursor_top < half_body_size_y
    let eq4 = cursor_top > half_body_size_y

    let img0 = document.querySelector('#img0')
    let img1 = document.querySelector('#img1')
    let img2 = document.querySelector('#img2')
    let img3 = document.querySelector('#img3')

    if (eq1 && eq3) {
      img0.style.cssText = 'opacity: 1'
    } else {
      img0.style.cssText = 'opacity: 0'
    }

    if (eq2 && eq3) {
      img1.style.cssText = 'opacity: 1'
    } else {
      img1.style.cssText = 'opacity: 0'
    }

    if (eq2 && eq4) {
      img2.style.cssText = 'opacity: 1'
    } else {
      img2.style.cssText = 'opacity: 0'
    }

    if (eq1 && eq4) {
      img3.style.cssText = 'opacity: 1'
    } else {
      img3.style.cssText = 'opacity: 0'
    }
  })
}

function animatePopup() {
  let popup = document.querySelector('.popup')
  let button = document.querySelector('.buttonPopup')

  button.addEventListener('click', () => {
    let like = document.createElement('div')
    like.classList.add('popupEl')
    like.innerHTML = '♥'

    popup.appendChild(like)

    setTimeout(() => {
      like.remove()
    }, 1000)
  })
}
