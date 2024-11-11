// Масив для збереження обраних страв
let selectedDishes = [];

// Функція для вибору страви
function selectDish(name, price) {
    // Додаємо обрану страву в масив
    selectedDishes.push({ name, price });
    
    // Оновлюємо відображення обраних страв
    updateSelectedDishes();
}

// Функція для оновлення списку обраних страв і підрахунку суми
function updateSelectedDishes() {
    const selectedDishesList = document.getElementById("selected-dishes");
    const totalPriceElement = document.getElementById("total-price");
    
    // Очищаємо список перед додаванням нових елементів
    selectedDishesList.innerHTML = '';
    
    // Підрахунок загальної суми
    let totalPrice = 0;
    selectedDishes.forEach(dish => {
        const li = document.createElement("li");
        li.textContent = `${dish.name} - ${dish.price} грн`;
        selectedDishesList.appendChild(li);
        totalPrice += dish.price;
    });
    
    // Виводимо загальну суму
    totalPriceElement.textContent = totalPrice;
}

// Функція для переходу на сторінку оплати
function goToPayment() {
    // Збереження даних у локальному сховищі (якщо це потрібно)
    localStorage.setItem('selectedDishes', JSON.stringify(selectedDishes));
    localStorage.setItem('totalPrice', document.getElementById("total-price").textContent);
    
    // Перехід на сторінку оплати
    window.location.href = 'payment.html';
}
