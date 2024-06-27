
const mostrarVista = document.querySelector('.mostrar-vista');
        const ocultarVista = document.querySelector('.ocultar-vista');
        const passwordInput = document.querySelector('.password');

        mostrarVista.addEventListener('click', () => {
            mostrarVista.style.display = 'none';
            ocultarVista.style.display = 'block';
            passwordInput.type = 'text';
        });

        ocultarVista.addEventListener('click', () => {
            ocultarVista.style.display = 'none';
            mostrarVista.style.display = 'block';
            passwordInput.type = 'password';
        });