document.addEventListener('DOMContentLoaded', () => {
  renderProducts()
  // updateCartCount()
})

const products = [
  {
    id: 1,
    name: 'Футболка',
    price: 3500,
    image:
      'https://static.insales-cdn.com/images/products/1/5982/769103710/DSCF0096.jpg'
  },
  {
    id: 2,
    name: 'Кружка',
    price: 2000,
    image: 'https://sublimagia.ru/image/cache/catalog/mugs/2397-600x600.jpg'
  },
  {
    id: 3,
    name: 'Пин',
    price: 1500,
    image:
      'https://rockbunker.ru/upload/iblock/55f/9xbv232jog0ezdl846iq77swlw4rxhui.jpg'
  }
]

function renderProducts() {
  const productList = document.querySelector('#product-list')
  productList.innerHTML = ''

  products.forEach((product) => {
    const quantity = getProductCount(product.id)

    const productCard = document.createElement('div')
    productCard.classList.add('card')
    productCard.classList.add('product')

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-text">
          <h3>${product.name}</h3>
          <p>${product.price} ₽</p>
          <div class="buttons">
            <button onclick='removeFromCart(${product.id})'>-</button>
            <p>${quantity}</p>
            <button onclick='addToCart(${product.id})'>+</button>
          </div>
        </div>
    `

    productList.appendChild(productCard)
  })
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}

function getProductCount(productId) {
  const cart = getCart()
  const item = cart.find((p) => p.id === productId)
  return item ? item.quantity : 0
}

function removeFromCart(productID) {
  let cart = getCart()
  const index = cart.findIndex((p) => p.id === productID)

  if (index != -1) {
    if (cart[index].quantity > 0) {
      cart[index].quantity -= 1
    }
  } else {
    cart.splice(index, 0)
  }

  setCart(cart)
}

function addToCart(productID) {
  let cart = getCart()

  const index = cart.findIndex((p) => p.id === productID)

  if (index != -1) {
    cart[index].quantity += 1
  } else {
    const item = products.find((p) => p.id === productID)

    if (item) {
      cart.push({ ...item, quantity: 1 })
    }
  }

  setCart(cart)
}

function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
  updateCartCount()
  renderProducts()
}

function updateCartCount() {
  let cart = getCart()

  const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0)

  if (count != 0) {
    document.querySelector('.cart-count').innerHTML = count
  }
}
