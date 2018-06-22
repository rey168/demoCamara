var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'recuperarContra';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.recuperarContra = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "recuperarContra" });

	$.__views.recuperarContra && $.addTopLevelView($.__views.recuperarContra);
	$.__views.contenedorGeneral = Ti.UI.createView(
	{ layout: "vertical", left: "20dp", right: "20dp", top: "0dp", height: Ti.UI.SIZE, id: "contenedorGeneral" });

	$.__views.recuperarContra.add($.__views.contenedorGeneral);
	$.__views.emailLabel = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: "35dp", left: 0, color: "black", font: { fontSize: "13sp" }, top: "0dp", text: "Email:", id: "emailLabel" });

	$.__views.contenedorGeneral.add($.__views.emailLabel);
	$.__views.__alloyId7 = Ti.UI.createView(
	{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId7" });

	$.__views.contenedorGeneral.add($.__views.__alloyId7);
	$.__views.emailField = Ti.UI.createTextField(
	{ width: "100%", height: "35dp", backgroundColor: "#FFF", color: "black", font: { fontSize: "13sp" }, top: "0dp", passwordMask: true, id: "emailField" });

	$.__views.__alloyId7.add($.__views.emailField);
	$.__views.contenedorRecuperar = Ti.UI.createView(
	{ top: "250dp", layout: "vertical", width: "100%", height: Ti.UI.SIZE, id: "contenedorRecuperar" });

	$.__views.contenedorGeneral.add($.__views.contenedorRecuperar);
	$.__views.recuperarBoton = Ti.UI.createButton(
	{ backgroundColor: "blue", width: "100%", title: "Restablecer Contraseña", height: "30dp", color: "#FFF", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, style: { borderRadius: "2" }, left: "0", borderRadius: "2dp", id: "recuperarBoton" });

	$.__views.contenedorRecuperar.add($.__views.recuperarBoton);
	restablecer ? $.addListener($.__views.recuperarBoton, 'click', restablecer) : __defers['$.__views.recuperarBoton!click!restablecer'] = true;exports.destroy = function () {};




	_.extend($, $.__views);


	var args = $.args;
	var Cloud = require('ti.cloud');

	function restablecer() {
		Cloud.Users.requestResetPassword({
			email: $.emailField.value },
		function (e) {
			if (e.success) {
				alert('Success: Reset Request Sent');
			} else {
				alert('Error:\n' + (e.error && e.message || JSON.stringify(e)));
			}
		});
	}





	__defers['$.__views.recuperarBoton!click!restablecer'] && $.addListener($.__views.recuperarBoton, 'click', restablecer);



	_.extend($, exports);
}

module.exports = Controller;