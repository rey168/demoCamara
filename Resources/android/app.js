




var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;


















(function () {
	var ACS = require('ti.cloud'),
	env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
	username = Ti.App.Properties.getString('acs-username-' + env),
	password = Ti.App.Properties.getString('acs-password-' + env);


	if (!env || !username || !password) {return;}






	ACS.Users.login({
		login: username,
		password: password },
	function (result) {
		if (env === 'development') {
			Ti.API.info('ACS Login Results for environment `' + env + '`:');
			Ti.API.info(result);
		}
		if (result && result.success && result.users && result.users.length) {
			Ti.App.fireEvent('login.success', result.users[0], env);
		} else {
			Ti.App.fireEvent('login.failed', result, env);
		}
	});

})();


Alloy.createController('index');