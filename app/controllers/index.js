/*function doClick(e) {
	alert($.label.text);
}*/
function entrar() {
    if ($.usuarioField.value == "" || $.contraseñaField.value == "") {
        alert('Usuario y Contraseña son obligatorios.');
        return;
    }else {
    	//Ti.App.Properties.setBool("loginCorrecto", true);
			Alloy.createController('camara').getView().open();
    }

}

$.index.open();
