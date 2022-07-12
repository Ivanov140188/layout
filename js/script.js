const doc = document.querySelector('.header');
document.addEventListener('click', function (e) {
    const click = e.target;
    if (click.closest('.header__burger')) {
        doc.classList.toggle('active');

    }
})