document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Gracias por tu mensaje. ¡Pronto nos pondremos en contacto!');
            form.reset();
        });
    }
});
