var args = $.args;
var Cloud = require('ti.cloud');

function restablecer() {
    Cloud.Users.requestResetPassword({
        email: $.emailField.value
    }, function(e) {
        if (e.success) {
            alert('Success: Reset Request Sent');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
}
