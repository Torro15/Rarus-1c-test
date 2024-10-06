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
    const scrollLeftButton = document.getElementById('btn-navigation');

    let scrollAmount = 100; // Количество пикселей для скролла

    // Скроллим меню влево
    scrollLeftButton.addEventListener('click', function() {
        menu.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth' // Плавный скролл
        });
    });

    // Скроллим меню вправо
    // scrollRightButton.addEventListener('click', function() {
    //     menu.scrollBy({
    //         left: scrollAmount,
    //         behavior: 'smooth' // Плавный скролл
    //     });
    // });
});

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    
    const scrollRightButton = document.getElementById('btn-navigation');

    let scrollAmount = 100; // Количество пикселей для скролла

    // Скроллим меню влево
    scrollLeftButton.addEventListener('click', function() {
        menu.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth' // Плавный скролл
        });
    });

    // Скроллим меню вправо
    scrollRightButton.addEventListener('click', function() {
        menu.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' // Плавный скролл
        });
    });

    // События для смахивания
    let startX;

    menu.addEventListener('touchstart', function(event) {
        startX = event.touches[0].clientX; // Запоминаем начальную позицию касания
    });

    menu.addEventListener('touchmove', function(event) {
        const moveX = event.touches[0].clientX; // Получаем текущую позицию касания
        const diffX = startX - moveX; // Вычисляем разницу

        // Если разница положительная, скроллим влево, иначе вправо
        if (Math.abs(diffX) > 20) { // Устанавливаем порог срабатывания
            if (diffX > 0) {
                menu.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth' // Плавный скролл
                });
            } else {
                menu.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth' // Плавный скролл
                });
            }
            startX = moveX; // Обновляем начальную позицию
        }
    });
});