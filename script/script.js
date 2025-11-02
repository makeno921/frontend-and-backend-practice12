document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    // Загрузка
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        html.setAttribute('data-bs-theme', 'dark');
        themeToggle.innerHTML = '☀️ Светлая';
    } else {
        html.setAttribute('data-bs-theme', 'light');
        themeToggle.innerHTML = '🌙 Тёмная';
    }

    // Переключение
    themeToggle.addEventListener('click', () => {
        if (html.getAttribute('data-bs-theme') === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
            themeToggle.innerHTML = '🌙 Тёмная';
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            themeToggle.innerHTML = '☀️ Светлая';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Selected
    document.querySelectorAll('.card__button').forEach(btn => {
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const card = btn.closest('.card');
            card.classList.toggle('card--selected');
            btn.innerHTML = card.classList.contains('card--selected')
                ? 'В корзине ✓'
                : 'В корзину';
            alert(card.classList.contains('card--selected')
                ? 'Добавлено!'
                : 'Удалено.');
        });
    });
});