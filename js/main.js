document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burgerMenu');
    const sidebar = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    // Открытие меню
    burger.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    // Закрытие меню
    closeBtn.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
});


const scrollButton = document.getElementById('scrollButton');
const scrollContent = document.querySelector('.menu');

let scrollAmount = 0; // Сумма скролла
const scrollStep = 50; // Шаг скролла

scrollButton.addEventListener('click', () => {
    scrollAmount += scrollStep; // Увеличиваем сумму скролла
    scrollContent.style.transform = `translateX(-${scrollAmount}px)`; // Применяем трансформацию
});
