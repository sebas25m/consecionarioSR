let confirmar_cuenta = document.getElementById('datos_mal');

function crear_cuenta() {
    let correo_electronico = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password_confirm = document.getElementById('confirm_contraseña').value;
    let contraseña_valida = check_password(password);
    if (isValidEmail(correo_electronico) && password == password_confirm) {
        window.localStorage.setItem("email", correo_electronico);
        window.localStorage.setItem("password", password);
        window.location.assign('./Log-in.html');
    }

    else {
        if (correo_electronico.length == 0 || password.length == 0 || password_confirm.length == 0) {
            confirmar_cuenta.innerHTML = "Debes llenar los campos para poder crear tu cuenta.";
        } else {
            if (!isValidEmail(correo_electronico)) {
                confirmar_cuenta.innerHTML = "Debes escribir una dirección de correo electrónico válida.";
            }

            else if (!contraseña_valida) {
                confirmar_cuenta.innerHTML = "La contraseña debe ser más compleja.";
            }

            else if (password != password_confirm || password_confirm == null) {
                confirmar_cuenta.innerHTML = "Las contraseñas no coinciden.";
            }
        }
    }
}

function check_password(password) {
    const passwordRegex = /\w\d\W/g;
    if (password.match(passwordRegex) !== null) {
        return true;
    } else {
        return false;
    }
}
function isValidEmail(email) {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.match(email);
}
