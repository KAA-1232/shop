const products = [
  { id: 1, name: "Товар 1", price: 100, category: "category1" },
  { id: 2, name: "Товар 2", price: 200, category: "category1" },
  { id: 3, name: "Товар 3", price: 300, category: "category2" },
  { id: 4, name: "Товар 4", price: 150, category: "category2" },
];

let cart = [];

const productList = document.getElementById("productList");
const cartModal = document.getElementById("cartModal");
const closeModalBtn = document.getElementById("closeModal");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartItemsDiv = document.getElementById("cartItems");

function displayProducts(filteredProducts = products) {
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">В корзину</button>
        `;
    productList.appendChild(productDiv);
  });
}

function addToCart(productId) {
  cart.push(productId);
  cartCount.innerText = cart.length;
}

function displayCart() {
  cartItemsDiv.innerHTML = "";
  const cartProducts = products.filter((product) => cart.includes(product.id));
  cartProducts.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `${product.name} - ${product.price} руб.`;
    cartItemsDiv.appendChild(cartItem);
  });
}

function filterProducts() {
  const category = document.getElementById("category").value;
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  displayProducts(filteredProducts);
}

cartBtn.onclick = function () {
  displayCart();
  cartModal.style.display = "block";
};

closeModalBtn.onclick;
JavaScript = function () {
  cartModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
};

// Изначальное отображение всех продуктов
displayProducts();
