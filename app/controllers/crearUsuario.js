var args = $.args;
var Cloud = require('ti.cloud');
var loader = Alloy.Globals.cargarLoader;

function crear() {
  loader.open();
    if ($.usuarioField.value == "" || $.nombreField.value == "" || $.apellidoField.value == "" || $.passwordField.value == "" || $.confirPasswordField.value == "") {
        $.login.close();
        alert('Todos los datos son obligatorios.');
    } else {
        Cloud.Users.create({
            email: $.usuarioField.value,
            first_name: $.nombreField.value,
            last_name: $.apellidoField.value,
            password: $.passwordField.value,
            password_confirmation: $.confirPasswordField.value
        }, function(e) {
            if (e.success) {
              $.login.close();
                var user = e.users[0];
                alert('Success:\n' +
                    'id: ' + user.id + '\n' +
                    'sessionId: ' + Cloud.sessionId + '\n' +
                    'Nombre: ' + user.first_name + '\n' +
                    'Apellido: ' + user.last_name);
            } else {
              $.login.close();
                alert('Error:\n' +
                    ((e.error && e.message) || JSON.stringify(e)));
            }
        });
    }


}
