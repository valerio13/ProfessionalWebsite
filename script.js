document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            alert('Gracias por tu mensaje. ¡Pronto nos pondremos en contacto!');
            form.reset();
        });
    }

    // Carga del bundle ESM del chat y configuración según index.html
    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js').then(async ({ createChat }) => {
        const authentication = 'none';
        let metadata;

        if (authentication === 'n8nUserAuth') {
            try {
                const response = await fetch('/rest/login', {
                    method: 'GET',
                    headers: { 'browser-id': localStorage.getItem('n8n-browserId') }
                });

                if (response.status !== 200) {
                    throw new Error('Not logged in');
                }

                const responseData = await response.json();
                metadata = {
                    user: {
                        id: responseData.data.id,
                        firstName: responseData.data.firstName,
                        lastName: responseData.data.lastName,
                        email: responseData.data.email,
                    },
                };
            } catch (error) {
                window.location.href = '/signin?redirect=' + window.location.href;
                return;
            }
        }

        createChat({
            mode: 'fullscreen',
            webhookUrl: 'https://ia-n8n-work1.duckdns.org/webhook/620545ad-cc0e-4808-aa3e-4377e520ea45/chat',
            showWelcomeScreen: false,
            loadPreviousSession: false,
            metadata: metadata,
            webhookConfig: {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Instance-Id': '8fc83ce05b13b1211b8fa53197f999d82b7279fdf950cea4250d26945f4c1b45',
                }
            },
            allowFileUploads: false,
            allowedFilesMimeTypes: '',
            i18n: {
            },
            initialMessages: ["Hi there! 👋","My name is Pepe. How can I assist you today?"],
            enableStreaming: false,
        });
    });
});
