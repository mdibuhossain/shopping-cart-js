function updatePrice(isIncrease, product, price) {
    const productCount = document.getElementById(product + '-qnt');
    let productCountValue = parseInt(productCount.value);
    const productPrice = document.getElementById(product + '-price');
    const productPriceValue = parseFloat(productPrice.innerText);
    if (isIncrease) {
        productCountValue++;
        productCount.value = productCountValue;
        productPrice.innerText = price * productCountValue
    }
    else if (productCountValue > 0) {
        productCountValue--;
        productCount.value = productCountValue;
        productPrice.innerText = price * productCountValue
    }
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