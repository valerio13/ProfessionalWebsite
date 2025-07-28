document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Gracias por tu mensaje. ¡Pronto nos pondremos en contacto!');
            form.reset();
        });
    }

    import('https://cdn.jsdelivr.net/npm/@n8n/chat/+esm').then(({ createChat }) => {
        createChat({
            element: '#n8n-chat',
            backendUrl: 'https://n8n-work1.duckdns.org/webhook/620545ad-cc0e-4808-aa3e-4377e520ea45/chat'
        });
    });
});
