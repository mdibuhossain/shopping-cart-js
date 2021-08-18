function chekOutPrice() {
    const subTotal = document.getElementById('sub-total');
    const taxAmount = document.getElementById('tax-amount');
    let taxAmountNumber = parseFloat(taxAmount.innerText);
    let totalPrice = document.getElementById('total-price');
    const prices = document.getElementsByClassName('product-price');

    let subPrice = 0;
    for (let price of prices) {
        console.log(price.innerText)
        subPrice += parseFloat(price.innerText);
    }
    subTotal.innerText = subPrice;
    totalPrice.innerText = subPrice + parseFloat(subPrice / taxAmountNumber);
}
chekOutPrice();

function updatePrice(isIncrease, product, price) {
    const productCount = document.getElementById(product + '-qnt');
    let productCountValue = parseInt(productCount.value);
    const productPrice = document.getElementById(product + '-price');
    let productPriceValue = parseFloat(productPrice.innerText);
    if (isIncrease) {
        productCountValue++;
    }
    else if (productCountValue > 0) {
        productCountValue--;
    }
    productCount.value = productCountValue;
    productPriceValue = price * productCountValue
    productPrice.innerText = productPriceValue;
    chekOutPrice();
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updatePrice(true, 'phone', 1219);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updatePrice(false, 'phone', 1219);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updatePrice(true, 'case', 59);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updatePrice(false, 'case', 59);
})