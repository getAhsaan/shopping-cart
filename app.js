
document.getElementById('add-product').addEventListener('click', () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity);
    saveProductToLS(product, quantity)
});

const displayProduct = (product, quantity) => {
    if (product.length > 0 && quantity.length > 0) {
        const ul = document.getElementById('product-container');
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`;
        ul.appendChild(li);
        document.getElementById('error-message').innerText = '';
    } else {
        document.getElementById('error-message').innerText = "Empty product or quantity"
    }
}

const getProductFromLS = () => {
    let cart = {};
    const lsCart = localStorage.getItem('cart');
    if (lsCart) {
        cart = JSON.parse(lsCart);
    }
    return cart;
}

const saveProductToLS = (product, quantity) => {
    const cart = getProductFromLS();
    cart[product] = quantity;
    const strCart = JSON.stringify(cart);

    localStorage.setItem('cart', strCart)
}

const displayProductFromLS = () => {
    const storedCart = getProductFromLS();
    for (const product in storedCart) {
        const quantity = storedCart[product]
        displayProduct(product, quantity);
    }
}
displayProductFromLS()

/////////////////////////////////////////////////////////
let click = 0;
document.getElementById('click-btn').addEventListener('click', () => {
    const count = document.getElementById('count');
    count.innerText = ++click;
    saveCountToLS(count.innerText);
})

const getCountFromLS = () => {
    // let count = {};
    const lsCount = localStorage.getItem('count');
    if (lsCount) {
        click = JSON.parse(lsCount);
        // count = JSON.parse(lsCount);
    }
    return click;
    // return count;
}

const saveCountToLS = count => {
    const strCount = JSON.stringify(count);
    localStorage.setItem('count', strCount);
}

const displayCountFromLS = () => {
    const count = getCountFromLS();
    document.getElementById('count').innerText = count;
}
displayCountFromLS();