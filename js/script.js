// Отримуємо елементи модального вікна
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

// Додаємо подію кліку для кожного фото в галереї
document.querySelectorAll(".gallery-img").forEach(img => {
    img.onclick = function() {
        modal.style.display = "flex"; // Відображаємо модальне вікно
        modalImg.src = this.src; // Змінюємо зображення у вікні на вибране
    }
});

// Закриваємо модальне вікно при кліку на кнопку "×"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закриваємо модальне вікно при кліку за його межами
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
