// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
Alloy.Globals.cargarLoader = function() {
    var win2 = Ti.UI.createWindow({
        backgroundColor: 'yellow',
        fullscreen: true
    });

    var activityIndicator = Ti.UI.createActivityIndicator({
        color: 'green',
        font: {
            fontFamily: 'Helvetica Neue',
            fontSize: 26,
            fontWeight: 'bold'
        },
        message: 'Loading...',
        style: Ti.UI.ActivityIndicatorStyle.DARK,
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });

    /*var winLoading = Ti.UI.createWindow({
        opacity: .3,
        backgroundColor: '#fff'
    });

    var labelLoding = Ti.UI.createLabel({
        text: 'Cargando...',
        top: '200dp',
        width: '200dp',
        left: '70dp',
        height: '50dp',
        font: {
            fontSize: '24dp',
            fontWeight: 'bold'
        },
        textAlign: 'center',
        color: '#837770'
    });*/

    win2.add(activityIndicator);

    return activityIndicator;

};



(function() {
    var ACS = require('ti.cloud'),
        env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
        username = Ti.App.Properties.getString('acs-username-' + env),
        password = Ti.App.Properties.getString('acs-password-' + env);

    // if not configured, just return
    if (!env || !username || !password) {
        return;
    }
    /**
     * Appcelerator Cloud (ACS) Admin User Login Logic
     *
     * fires login.success with the user as argument on success
     * fires login.failed with the result as argument on error
     */
    ACS.Users.login({
        login: username,
        password: password,
    }, function(result) {
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
