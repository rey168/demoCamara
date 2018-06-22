




var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;
















Alloy.Globals.cargarLoader = function () {
    var win2 = Ti.UI.createWindow({
        backgroundColor: 'yellow',
        fullscreen: true });


    var activityIndicator = Ti.UI.createActivityIndicator({
        color: 'green',
        font: {
            fontFamily: 'Helvetica Neue',
            fontSize: 26,
            fontWeight: 'bold' },

        message: 'Loading...',
        style: Ti.UI.ActivityIndicatorStyle.DARK,
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE });





















    win2.add(activityIndicator);

    return activityIndicator;

};



(function () {
    var ACS = require('ti.cloud'),
    env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
    username = Ti.App.Properties.getString('acs-username-' + env),
    password = Ti.App.Properties.getString('acs-password-' + env);


    if (!env || !username || !password) {
        return;
    }






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