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
		this.__controllerPath = 'login';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};







		$.__views.login = Ti.UI.createWindow(
		{ backgroundColor: "white", id: "login" });

		$.__views.login && $.addTopLevelView($.__views.login);
		$.__views.contenedorGeneral = Ti.UI.createView(
		{ layout: "vertical", left: "20dp", right: "20dp", top: "0dp", height: Ti.UI.SIZE, id: "contenedorGeneral" });

		$.__views.login.add($.__views.contenedorGeneral);
		$.__views.usuarioLabel = Ti.UI.createLabel(
		{ width: Ti.UI.SIZE, height: "35dp", color: "black", left: 0, font: { fontSize: "13sp" }, top: "25dp", id: "usuarioLabel", text: "Usuario:" });

		$.__views.contenedorGeneral.add($.__views.usuarioLabel);
		$.__views.__alloyId5 = Ti.UI.createView(
		{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId5" });

		$.__views.contenedorGeneral.add($.__views.__alloyId5);
		$.__views.usuarioField = Ti.UI.createTextField(
		{ width: Ti.UI.FILL, height: "130%", backgroundColor: "#FFF", color: "black", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, id: "usuarioField", value: "" });

		$.__views.__alloyId5.add($.__views.usuarioField);
		$.__views.contraseñaLabel = Ti.UI.createLabel(
		{ width: Ti.UI.SIZE, height: "35dp", color: "black", left: 0, font: { fontSize: "13sp" }, top: "5dp", id: "contraseñaLabel", text: "Contraseña:" });

		$.__views.contenedorGeneral.add($.__views.contraseñaLabel);
		$.__views.__alloyId6 = Ti.UI.createView(
		{ top: "-5dp", left: "0dp", height: "30dp", width: Ti.UI.FILL, backgroundColor: "black", borderRadius: "2dp", id: "__alloyId6" });

		$.__views.contenedorGeneral.add($.__views.__alloyId6);
		$.__views.contraseñaField = Ti.UI.createTextField(
		{ width: Ti.UI.FILL, height: "130%", backgroundColor: "#FFF", color: "black", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, passwordMask: true, id: "contraseñaField", value: "" });

		$.__views.__alloyId6.add($.__views.contraseñaField);
		$.__views.contenedorEntrar = Ti.UI.createView(
		{ top: "40dp", layout: "vertical", width: "100%", height: Ti.UI.SIZE, id: "contenedorEntrar" });

		$.__views.contenedorGeneral.add($.__views.contenedorEntrar);
		$.__views.botonEntrar = Ti.UI.createButton(
		{ backgroundColor: "blue", width: "100%", height: "30dp", color: "#FFF", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, style: { borderRadius: "2" }, left: "0", borderRadius: "2dp", id: "botonEntrar", title: "Entrar" });

		$.__views.contenedorEntrar.add($.__views.botonEntrar);
		entrar ? $.addListener($.__views.botonEntrar, 'click', entrar) : __defers['$.__views.botonEntrar!click!entrar'] = true;$.__views.contenedorCrear = Ti.UI.createView(
		{ top: "10dp", layout: "vertical", width: "100%", height: Ti.UI.SIZE, id: "contenedorCrear" });

		$.__views.contenedorGeneral.add($.__views.contenedorCrear);
		$.__views.botonEntrar = Ti.UI.createButton(
		{ backgroundColor: "blue", width: "100%", height: "30dp", color: "#FFF", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, style: { borderRadius: "2" }, left: "0", borderRadius: "2dp", id: "botonEntrar", title: "Crear Usuario" });

		$.__views.contenedorCrear.add($.__views.botonEntrar);
		crear ? $.addListener($.__views.botonEntrar, 'click', crear) : __defers['$.__views.botonEntrar!click!crear'] = true;$.__views.contenedorRecuperar = Ti.UI.createView(
		{ top: "250dp", layout: "vertical", width: "100%", height: Ti.UI.SIZE, id: "contenedorRecuperar" });

		$.__views.contenedorGeneral.add($.__views.contenedorRecuperar);
		$.__views.botonRecuperar = Ti.UI.createButton(
		{ backgroundColor: "blue", width: "100%", height: "30dp", color: "#FFF", font: { fontSize: "16.5sp", fontFamily: "Roboto-Regular" }, style: { borderRadius: "2" }, left: "0", borderRadius: "2dp", id: "botonRecuperar", title: "Recuperar Contraseña" });

		$.__views.contenedorRecuperar.add($.__views.botonRecuperar);
		recuperar ? $.addListener($.__views.botonRecuperar, 'click', recuperar) : __defers['$.__views.botonRecuperar!click!recuperar'] = true;exports.destroy = function () {};




		_.extend($, $.__views);


		var Cloud = require('ti.cloud');

		function entrar() {
				if ($.usuarioField.value == "" || $.contraseñaField.value == "") {
						alert('Usuario y Contraseña son obligatorios.');
				} else {
						Cloud.Users.login({
								login: $.usuarioField.value,
								password: $.contraseñaField.value },
						function (e) {
								if (e.success) {
										Ti.App.Properties.setBool("loginCorrecto", false);
										Alloy.createController('camara').getView().open();
										$.login.close();
								} else {
										alert('Error:\n' + (e.error && e.message || JSON.stringify(e)));
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





		__defers['$.__views.botonEntrar!click!entrar'] && $.addListener($.__views.botonEntrar, 'click', entrar);__defers['$.__views.botonEntrar!click!crear'] && $.addListener($.__views.botonEntrar, 'click', crear);__defers['$.__views.botonRecuperar!click!recuperar'] && $.addListener($.__views.botonRecuperar, 'click', recuperar);



		_.extend($, exports);
}

module.exports = Controller;