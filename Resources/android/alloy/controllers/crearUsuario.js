var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'crearUsuario';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.crearUsuario = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "crearUsuario" });

	$.__views.crearUsuario && $.addTopLevelView($.__views.crearUsuario);
	$.__views.contenedorGeneral = Ti.UI.createView(
	{ layout: "vertical", left: "20dp", right: "20dp", top: "0dp", height: Ti.UI.SIZE, id: "contenedorGeneral" });

	$.__views.crearUsuario.add($.__views.contenedorGeneral);
	$.__views.usuarioLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "25dp", text: "Email:", id: "usuarioLabel" });

	$.__views.contenedorGeneral.add($.__views.usuarioLabel);
	$.__views.__alloyId0 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId0" });

	$.__views.contenedorGeneral.add($.__views.__alloyId0);
	$.__views.usuarioField = Ti.UI.createTextField(
	{ width: "100%", height: "35dp", backgroundColor: "#FFF", color: "black", font: { fontSize: "12sp" }, id: "usuarioField" });

	$.__views.__alloyId0.add($.__views.usuarioField);
	$.__views.nombreLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "5dp", text: "Nombre:", id: "nombreLabel" });

	$.__views.contenedorGeneral.add($.__views.nombreLabel);
	$.__views.__alloyId1 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId1" });

	$.__views.contenedorGeneral.add($.__views.__alloyId1);
	$.__views.nombreField = Ti.UI.createTextField(
	{ width: Ti.UI.FILL, height: "130%", backgroundColor: "#FFF", color: "black", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, id: "nombreField" });

	$.__views.__alloyId1.add($.__views.nombreField);
	$.__views.apellidoLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "0dp", text: "Apellido:", id: "apellidoLabel" });

	$.__views.contenedorGeneral.add($.__views.apellidoLabel);
	$.__views.__alloyId2 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId2" });

	$.__views.contenedorGeneral.add($.__views.__alloyId2);
	$.__views.apellidoField = Ti.UI.createTextField(
	{ width: Ti.UI.FILL, height: "130%", backgroundColor: "#FFF", color: "black", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, id: "apellidoField" });

	$.__views.__alloyId2.add($.__views.apellidoField);
	$.__views.passwordLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "0dp", text: "Contraseña:", id: "passwordLabel" });

	$.__views.contenedorGeneral.add($.__views.passwordLabel);
	$.__views.__alloyId3 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId3" });

	$.__views.contenedorGeneral.add($.__views.__alloyId3);
	$.__views.passwordField = Ti.UI.createTextField(
	{ width: "100%", height: "35dp", backgroundColor: "#FFF", color: "black", font: { fontSize: "13sp" }, top: "0dp", passwordMask: true, id: "passwordField" });

	$.__views.__alloyId3.add($.__views.passwordField);
	$.__views.confirPasswordLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "0dp", text: "Confirmar Contraseña:", id: "confirPasswordLabel" });

	$.__views.contenedorGeneral.add($.__views.confirPasswordLabel);
	$.__views.__alloyId4 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId4" });

	$.__views.contenedorGeneral.add($.__views.__alloyId4);
	$.__views.confirPasswordField = Ti.UI.createTextField(
	{ width: "100%", height: "35dp", backgroundColor: "#FFF", color: "black", font: { fontSize: "13sp" }, top: "0dp", passwordMask: true, id: "confirPasswordField" });

	$.__views.__alloyId4.add($.__views.confirPasswordField);
	$.__views.contenedorCrear = Ti.UI.createView(
	{ top: "10dp", layout: "vertical", width: "100%", height: Ti.UI.SIZE, id: "contenedorCrear" });

	$.__views.contenedorGeneral.add($.__views.contenedorCrear);
	$.__views.crearUsuarioBoton = Ti.UI.createButton(
	{ backgroundColor: "blue", width: "100%", title: "Crear Usuario", height: "30dp", color: "#FFF", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, style: { borderRadius: "2" }, left: "0", borderRadius: "2dp", id: "crearUsuarioBoton" });

	$.__views.contenedorCrear.add($.__views.crearUsuarioBoton);
	crear ? $.addListener($.__views.crearUsuarioBoton, 'click', crear) : __defers['$.__views.crearUsuarioBoton!click!crear'] = true;exports.destroy = function () {};




	_.extend($, $.__views);


	var args = $.args;
	var Cloud = require('ti.cloud');

	function crear() {
		if ($.usuarioField.value == "" || $.nombreField.value == "" || $.apellidoField.value == "" || $.passwordField.value == "" || $.confirPasswordField.value == "") {
			alert('Todos los datos son obligatorios.');
		} else {
			Cloud.Users.create({
				email: $.usuarioField.value,
				first_name: $.nombreField.value,
				last_name: $.apellidoField.value,
				password: $.passwordField.value,
				password_confirmation: $.confirPasswordField.value },
			function (e) {
				if (e.success) {
					var user = e.users[0];
					alert('Success:\n' + 'id: ' + user.id + '\n' + 'sessionId: ' + Cloud.sessionId + '\n' + 'Nombre: ' + user.first_name + '\n' + 'Apellido: ' + user.last_name);
				} else {
					alert('Error:\n' + (e.error && e.message || JSON.stringify(e)));
				}
			});
		}
	}





	__defers['$.__views.crearUsuarioBoton!click!crear'] && $.addListener($.__views.crearUsuarioBoton, 'click', crear);



	_.extend($, exports);
}

module.exports = Controller;