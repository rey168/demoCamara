if(!Ti.App.Properties.hasProperty('loginCorrecto')){
		Ti.App.Properties.setBool("loginCorrecto", true);
	}

  if (Ti.App.Properties.getBool("loginCorrecto")) {
    Alloy.createController('login').getView().open();
  }else {
    Alloy.createController('camara').getView().open();
  }


//$.index.open();
