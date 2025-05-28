document.addEventListener('DOMContentLoaded', () => {
  //_____поиск элементов_____
  /* let headerTag = document.querySelector('h1')
  let headerClass = document.querySelector('.header')
  let headerID = document.querySelector('#header')
  let headers = document.querySelectorAll('h1')
  console.log(headerTag)
  console.log(headerClass)
  console.log(headerID)
  console.log(headers) */
  //взаимодействие с html
  // let textDemo = document.querySelector('#demo')
  // let buttonDemo = document.querySelector('.demoButton')
  // textDemo.innerHTML = 'Доброе утро!'
  // buttonDemo.addEventListener('click', () => {
  //   if (textDemo.innerHTML == 'Доброе утро!') {
  //     textDemo.innerHTML = 'Добрый день!'
  //   } else if (textDemo.innerHTML == 'Добрый день!') {
  //     textDemo.innerHTML = 'Добрый вечер!'
  //   } else {
  //     textDemo.innerHTML = 'Доброе утро!'
  //   }
  // })
  // let userText = document.querySelector('.userText')
  // let userName = prompt('Как тебя зовут?', 'Чебурашка')
  // if (userName == null) {
  //   userText.innerHTML = `Привет, незнакомец!`
  // } else if (userName == '') {
  //   userText.innerHTML = `Привет, человек-без-имени!`
  // } else {
  //   userText.innerHTML = `Привет, ${userName}!`
  // }

  let bigRedCircle = document.querySelector('.circle')

  bigRedCircle.addEventListener('click', () => {
    bigRedCircle.classList.toggle('big')
    bigRedCircle.classList.toggle('small')
  })

  let circles = document.querySelectorAll('.circle')

  console.log(circles)

  circles.forEach((circle) => {
    circle.addEventListener('click', () => {
      console.log(circle)
      circle.classList.toggle('red')
    })
  })
})
