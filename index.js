const chocolates = [
    { name: "Chocolate 1", price: 2 },
    { name: "Chocolate 2", price: 3 },
    { name: "Chocolate 3", price: 1 },

    // Add more chocolates here
];

const checkboxes = document.querySelectorAll('.chocolate-checkbox');
const quantities = document.querySelectorAll('.quantity-input');
const totalSpan = document.getElementById('total');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        updateTotalPrice();
    });

    quantities[index].addEventListener('input', () => {
        if (parseInt(quantities[index].value) > 8) {
            quantities[index].value = 8;
        }
        updateTotalPrice();
    });
});

function updateTotalPrice() {
    let totalPrice = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            totalPrice += parseInt(quantities[index].value) * chocolates[index].price;
        }
    });
    totalSpan.textContent = totalPrice.toFixed(2);
}