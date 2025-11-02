document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('.page');
    const themeToggle = document.getElementById('theme-toggle');

    // Загрузка темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        page.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Светлая';
    } else {
        page.classList.remove('dark-theme');
        themeToggle.textContent = '🌙 Тёмная';
    }

    // Переключение темы
    themeToggle.addEventListener('click', () => {
        if (page.classList.contains('dark-theme')) {
            page.classList.remove('dark-theme');
            themeToggle.textContent = '🌙 Тёмная';
            localStorage.setItem('theme', 'light');
        } else {
            page.classList.add('dark-theme');
            themeToggle.textContent = '☀️ Светлая';
            localStorage.setItem('theme', 'dark');
        }
    });

    const goodsPage = document.querySelector('.goods__list');
    if (goodsPage) {
        goodsPage.querySelectorAll('.card__button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Не клик по карточке
                const card = button.closest('.card');
                card.classList.toggle('card--selected');
                button.textContent = card.classList.contains('card--selected') ? 'В корзине ✓' : 'В корзину';
                // Здесь можно добавить логику корзины (localStorage и т.д.)
                alert(card.classList.contains('card--selected') ? 'Товар добавлен в корзину!' : 'Товар удалён из корзины.');
            });
        });
    }
});