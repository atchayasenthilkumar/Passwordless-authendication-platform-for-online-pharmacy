let cart = [];
let totalPrice = 0;

function addToCart(medName, price) {
    // Add item to cart
    cart.push({ medName, price });
    totalPrice += price;

    // Update cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    // Get the cart-list and total price elements
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart display
    cartList.innerHTML = '';

    // Add items to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.medName} - $${item.price};
        cartList.appendChild(li);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice;
}