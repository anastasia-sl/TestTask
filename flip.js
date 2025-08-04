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
