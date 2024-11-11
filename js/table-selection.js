// Отримуємо всі столи та кнопку продовження
const tables = document.querySelectorAll(".table");
const continueButton = document.getElementById("continue-button");
let selectedTable = null;

// Додаємо подію кліку для кожного столу
tables.forEach(table => {
    table.onclick = function() {
        // Знімаємо виділення з попереднього столу
        if (selectedTable) {
            selectedTable.classList.remove("selected");
        }
        
        // Виділяємо обраний стіл
        selectedTable = this;
        selectedTable.classList.add("selected");
        
        // Відображаємо кнопку "Продовжити до меню"
        continueButton.style.display = "inline-block";
    }
});
