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
const scrollContent = document.querySelector('.menu-list');

let scrollAmount = 0; // Сумма скролла
const scrollStep = 100; // Шаг скролла
let isDragging = false; // Флаг для отслеживания состояния перетаскивания
let startX = 0; // Начальная позиция при захвате мышью

scrollButton.addEventListener('click', () => {
    scrollAmount += scrollStep; // Увеличиваем сумму скролла
    scrollContent.style.transform = `translateX(-${scrollAmount}px)`; // Применяем трансформацию
});

scrollContent.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX; // Сохраняем начальную позицию мыши
});

scrollContent.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const currentX = event.clientX;
        const distance = startX - currentX;

        // Если движение больше 50px, возвращаем в исходное положение
        if (distance > 50) {
            scrollAmount = 0; // Сбрасываем сумму скролла
            scrollContent.style.transform = `translateX(0)`; // Возвращаем контент в исходное положение
        }
    }
});

scrollContent.addEventListener('mouseup', () => {
    isDragging = false; // Завершаем процесс перетаскивания
});

scrollContent.addEventListener('mouseleave', () => {
    isDragging = false; // Завершаем перетаскивание, если курсор выходит за границы контейнера
});