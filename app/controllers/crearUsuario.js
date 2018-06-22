var args = $.args;
var Cloud = require('ti.cloud');
var loader = Alloy.Globals.cargarLoader();

function crear() {
  activityIndicator.show();
    if ($.usuarioField.value == "" || $.nombreField.value == "" || $.apellidoField.value == "" || $.passwordField.value == "" || $.confirPasswordField.value == "") {
        activityIndicator.hide();
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
              activityIndicator.hide();
                var user = e.users[0];
                alert('Success:\n' +
                    'id: ' + user.id + '\n' +
                    'sessionId: ' + Cloud.sessionId + '\n' +
                    'Nombre: ' + user.first_name + '\n' +
                    'Apellido: ' + user.last_name);
            } else {
              activityIndicator.hide();
                alert('Error:\n' +
                    ((e.error && e.message) || JSON.stringify(e)));
            }
        });
    }


}
