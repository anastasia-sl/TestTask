function isMobile() {
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

document.querySelectorAll('.rate-card-flip').forEach(card => {
    if (isMobile()) {
        card.addEventListener('click', function (e) {
            e.stopPropagation();
            document.querySelectorAll('.rate-card-flip.flipped').forEach(el => {
                if (el !== card) el.classList.remove('flipped');
            });
            card.classList.toggle('flipped');
        });
    }
});

document.getElementById('termsToggle').addEventListener('click', function() {
    const termsBlock = document.getElementById('termsBlock');
    const icon = document.getElementById('termsPlusIcon');

    termsBlock.classList.toggle('expanded');

    if (termsBlock.classList.contains('expanded')) {
        icon.src = 'assets/images/MinusIcon.png';
    } else {
        icon.src = 'assets/images/PlusIcon.png';
    }
});

document.querySelectorAll('.mobile-bottom-nav__item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        // убираем класс active у всех
        document.querySelectorAll('.mobile-bottom-nav__item').forEach(function(el) {
            el.classList.remove('mobile-bottom-nav__item--active', 'active');
        });
        // ставим только на выбранный
        item.classList.add('mobile-bottom-nav__item--active', 'active');
        // если ссылка #, отменить переход
        if (item.getAttribute('href') === '#') e.preventDefault();
    });
});
