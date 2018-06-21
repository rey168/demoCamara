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
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	exports.destroy = function () {};




	_.extend($, $.__views);


	if (!Ti.App.Properties.hasProperty('loginCorrecto')) {
		Ti.App.Properties.setBool("loginCorrecto", true);
	}

	if (Ti.App.Properties.getBool("loginCorrecto")) {
		Alloy.createController('login').getView().open();
	} else {
		Alloy.createController('camara').getView().open();
	}









	_.extend($, exports);
}

module.exports = Controller;