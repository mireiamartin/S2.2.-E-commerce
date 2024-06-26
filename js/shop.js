// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const productToAdd = products.find(product => product.id === id);
    const productInCart = cart.find(product => product.id === id);
    
        if (productToAdd) {
           if (productInCart) {
               productInCart.quantity++;
           } else {
               cart.push({ ...productToAdd, quantity: 1 });
           }
        }
        console.log(cart)
    }

// Exercise 2
function cleanCart() {
    cart = [];
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;

    for (let i = 0; i < cart.length; i++){
        if (cart[i].subtotalWithDiscount){
            total += cart[i].subtotalWithDiscount;
        } else{
            total += cart[i].price * cart[i].quantity;
        }
    }
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(product => {
        if (product.offer && product.quantity >= product.offer.number){
            const discount = product.offer.percent / 100;
            const discountPrice = product.price * discount;
            product.subtotalWithDiscount = (product.price - discountPrice) * product.quantity;
        } else {
            product.subtotalWithDiscount = product.price * product.quantity;
        }
    })
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById("cart_list");
    const totalPriceCart = document.getElementById("total_price");
    const countProduct = document.getElementById("count_product");
    applyPromotionsCart();

    cartList.innerHTML = "";

    cart.forEach(prod => {
        cartList.innerHTML += `<tr>
            <th scope="row">${prod.name}</th>
            <td>${prod.price}</td>
            <td>${prod.quantity}</td>
            <td>${prod.subtotalWithDiscount > 0 ? prod.subtotalWithDiscount.toFixed(2) : (prod.price * prod.quantity).toFixed(2)}</td>
        </tr>`;
    });

    let total = calculateTotal();
    totalPriceCart.textContent = total.toFixed(2);
    countProduct.textContent = cart.length
}



// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    const productInCart = cart.find(product => product.id === id);

    if (productInCart) {
        if (productInCart.quantity > 1) {
            productInCart.quantity--;
        } else {
            cart = cart.filter(product => product.id !== id);
        }
    }
    applyPromotionsCart();
    printCart();
}

function open_modal() {
    printCart();
}