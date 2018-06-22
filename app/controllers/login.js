var Cloud = require('ti.cloud');
var loader = Alloy.Globals.cargarLoader;

function entrar() {
  loader.open();
    if ($.usuarioField.value == "" || $.contraseñaField.value == "") {
        alert('Usuario y Contraseña son obligatorios.');
    } else {
        Cloud.Users.login({
            login: $.usuarioField.value,
            password: $.contraseñaField.value
        }, function(e) {
            if (e.success) {
              loader.close();
                Ti.App.Properties.setBool("loginCorrecto", false);
                Alloy.createController('camara').getView().open();
                $.login.close();
            } else {
              loader.close();
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
