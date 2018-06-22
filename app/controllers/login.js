var Cloud = require('ti.cloud');

function entrar() {
    if ($.usuarioField.value == "" || $.contraseñaField.value == "") {
        alert('Usuario y Contraseña son obligatorios.');
    } else {
        Cloud.Users.login({
            login: $.usuarioField.value,
            password: $.contraseñaField.value
        }, function(e) {
            if (e.success) {
                Ti.App.Properties.setBool("loginCorrecto", false);
                Alloy.createController('camara').getView().open();
                $.login.close();
            } else {
                alert('Error:\n' +
                    ((e.error && e.message) || JSON.stringify(e)));
            }
        });

    }

}

function crear() {
    Alloy.createController('crearUsuario').getView().open();
}

function recuperar() {
  Alloy.createController('recuperarContra').getView().open();
}
$.login.open();
