document.querySelectorAll('.cta a').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.classList.add('glitch-hover');
    });
    btn.addEventListener('mouseleaver', () => {
        btn.classList.remove('glitch-hover');
    });
});