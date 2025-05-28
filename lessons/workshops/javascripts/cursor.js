document.addEventListener('DOMContentLoaded', () => {
  mouseMoveEyes()
  mouseMoveCoords()
})

function mouseMoveCoords() {
  let coords = document.querySelector('.coords')
  let status = document.querySelector('.status')
  let container = document.querySelector('.container')

  document.addEventListener('mousemove', () => {
    coords.innerHTML = `Координата курсора X: ${event.pageX}, координата курсора Y: ${event.pageY}`

    let x = container.offsetLeft + container.offsetWidth / 2

    console.log(x, event.pageX)
    if (x > event.pageX) {
      status.innerHTML = 'лево'
    } else {
      status.innerHTML = 'право'
    }
  })
}

function mouseMoveEyes() {
  let moveArea = document.querySelector('.moveArea')

  moveArea.addEventListener('mousemove', () => {
    let eyes = document.querySelectorAll('.eye')

    eyes.forEach((eye) => {
      let x = eye.offsetLeft + eye.offsetWidth / 2
      let y = eye.offsetTop + eye.offsetHeight / 2
      let rad = Math.atan2(event.pageX - x, event.pageY - y)
      let rot = (100 / Math.PI) * rad * -1

      eye.style = `transform: rotate(${rot}deg)`
    })
  })
}
