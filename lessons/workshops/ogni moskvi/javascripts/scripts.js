// function solution(container) {
//   const columns = Array.from(container.children)

//   // Извлекаем значения уровня энергии из атрибута data-value
//   // const values = columns.map((column) =>
//   //   parseInt(column.getAttribute('data-value'), 10)
//   // )
//   const values = []
//   columns.forEach((column) => {
//     values.push(parseInt(column.getAttribute('data-value')))
//   })

//   values.sort((a, b) => a - b)

//   let maxGap = 0
//   for (let i = 1; i < values.length; i++) {
//     let gap = values[i] - values[i - 1]
//     if (gap > maxGap) {
//       maxGap = gap
//     }
//   }

//   return maxGap
// }
document.addEventListener('DOMContentLoaded', () => {
  showBurgerMenu()
  updateCartCount()
})

function showBurgerMenu() {
  const burger = document.querySelector('#burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function updateCartCount() {
  let cart = getCart()

  const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)

  if (count != 0) {
    document.querySelector('.cart-count').innerHTML = count
  }
}
