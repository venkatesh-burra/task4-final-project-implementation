const products = [
  { name: "Product A", price: 200, rating: 4.5 },
  { name: "Product B", price: 100, rating: 4.0 },
  { name: "Product C", price: 150, rating: 4.8 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.textContent = `${product.name} - ₹${product.price} - ⭐ ${product.rating}`;
    container.appendChild(div);
  });
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  const sorted = [...products].sort((a, b) => a[sortBy] - b[sortBy]);
  displayProducts(sorted);
}

displayProducts(products);
