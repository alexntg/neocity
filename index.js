const firecamp = document.getElementById('firecamp');
const caveman = document.getElementById('caveman');

function startZoom() {
    const button = document.getElementById('zoomButton');
    const rect = button.getBoundingClientRect();

    button.style.position = 'absolute';
    button.style.left = `${rect.left}px`;
    button.style.top = `${rect.top}px`;

    button.offsetHeight; // Asegura que se apliquen los estilos antes de la transición

    button.classList.add('move-and-zoom');
    setTimeout(() => {
        button.classList.add('zoom-in');
    }, 0);


    setTimeout(() => {
        window.location.href = 'animation.html';
    }, 3000);
}

function startAnimation() {
    if (firecamp) {
        firecamp.classList.add('zoom-in');

        setTimeout(() => {
            firecamp.classList.remove('zoom-in');
            firecamp.classList.add('zoom-out');
            caveman.style.right = '50px';
        }, 3000); // La duración del zoom-in (3s)
    }
}

function cavemanAttack() {
    caveman.classList.add('attack');
}

function init() {

    const zoomButton = document.getElementById('zoomButton');
    if (zoomButton) {
        zoomButton.addEventListener('click', startZoom);
    }


    if (caveman) {
        caveman.addEventListener('click', cavemanAttack);
    }


    startAnimation();
}

document.addEventListener('DOMContentLoaded', init);

