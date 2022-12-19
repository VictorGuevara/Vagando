const container = document.querySelector('.container');
const pwShowHide = document.querySelectorAll('.showHidePw');
const pwFields = document.querySelectorAll('.password');
const signup = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');

/* Bototoes de acceso */
const btnLogin = document.getElementById('btn_login');
const btnInvitado = document.getElementById('btn_invitado');

// Funcion para cambiar la vista de la contaseña.
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        console.log('ok')
        pwFields.forEach(pwField => {
            if (pwField.type === 'password') {
                pwField.type = 'text';

                pwShowHide.forEach(icon => {
                    icon.classList.replace('uil-eye-slash', 'uil-eye');
                });
            } else {
                pwField.type = 'password';

                pwShowHide.forEach(icon => {
                    icon.classList.replace('uil-eye', 'uil-eye-slash');
                });
            }
        });
    });
});

// Eventos para aparecer y desaparecer los formularios.
signup.addEventListener('click', () => {
    container.classList.add('active');
});

login.addEventListener('click', () => {
    container.classList.remove('active');
});

/* ---------------------------------------------------------------- */
/*                                                                  */
/*                        Eventos Listeners                         */
/*                                                                  */
/* ---------------------------------------------------------------- */

btn_invitado.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '../vistas/p_invitado.html';
});