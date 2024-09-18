document.addEventListener('DOMContentLoaded', () => {
    const firecamp = document.getElementById('firecamp');
    firecamp.classList.add('zoom-in');

    setTimeout(() => {
        firecamp.classList.remove('zoom-in');
        firecamp.classList.add('zoom-out');
    }, 3000); // Duración del zoom-in
});
