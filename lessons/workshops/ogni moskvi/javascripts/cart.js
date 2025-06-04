document.addEventListener('DOMContentLoaded', () => {
  renderCart()
})

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function renderCart() {
  const container = document.querySelector('#cart-items')
  const totalPrice = document.querySelector('#total-price')
  const cart = getCart()

  container.innerHTML = ''

  if (!Array.isArray(cart) || cart.length == 0) {
    container.innerHTML = '<p>Корзина пуста</p>'
    totalPrice.innerHTML = ''
  }

  let total = 0

  cart.forEach((item) => {
    const quantity = item.quantity || 0
    const itemPrice = (item.price || 0) * quantity
    total += itemPrice

    const itemCard = document.createElement('div')
    itemCard.classList.add('card')
    itemCard.classList.add('item')

    itemCard.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <div class="item-text">
      <h3>${item.name}</h3>
      <p>${item.price} ₽</p>
    </div>
    <h3>Количество: ${quantity}</h3>
    <button onclick="removeFromCart(${item.id})">🗑️</button>
    `

    container.appendChild(itemCard)
  })

  totalPrice.innerHTML = `Итого: ${total} ₽`
}

function removeFromCart(itemID) {
  let cart = getCart()
  cart = cart.filter((item) => item.id !== itemID)

  localStorage.setItem('cart', JSON.stringify(cart))
  renderCart()
}
