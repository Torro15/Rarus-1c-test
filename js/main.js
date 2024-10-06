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

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const scrollRightButton = document.getElementById('btn-navigation');

    let scrollAmount = 100; // Количество пикселей для скролла

    // Скроллим меню влево
    scrollRightButton.addEventListener('click', function() {
        menu.scrollBy({
            right: -scrollAmount,
            behavior: 'smooth' // Плавный скролл
        });
    });
});
