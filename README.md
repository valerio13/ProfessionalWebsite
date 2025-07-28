# ProfessionalWebsite

Este repositorio contiene el código de mi página web profesional. Se trata de un sitio estático desarrollado con HTML, CSS y JavaScript.

## Contenido
- `index.html`: página principal escrita en español con secciones de Sobre mí, Portafolio y Contacto.
- `style.css`: estilos responsivos y un diseño sencillo pero profesional.
- `script.js`: maneja la interacción del formulario de contacto.

## Cómo usarlo
1. Clona el repositorio.
2. Abre `index.html` en tu navegador favorito.

Todo el contenido se ejecuta de forma local, por lo que no se requiere un servidor adicional.

### Chat integrado con n8n
Se ha añadido el componente [`@n8n/chat`](https://www.npmjs.com/package/@n8n/chat) para disponer de un chat en la página. En `index.html` encontrarás una llamada a `createChat` con la URL `backendUrl` de ejemplo. Sustitúyela por la dirección de tu instancia de n8n.
