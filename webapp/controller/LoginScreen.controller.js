sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox'
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.LoginScreen", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		},

		onReg: function(oEvent) {
			this.oRouter.navTo("Registration");
		},

		onLogin: function() {
			var username = this.getView().byId("inputuser").getValue();
			var password = this.getView().byId("inputpassword").getValue();
			var valid = false;
			var oUserModel = new sap.ui.model.json.JSONModel();
			$.ajax({
				type: "GET",
				url: 'PHP/user.php',
				async: false,
				crossDomain: true,
				// dataType: 'jsonp',
				// jsonpCallback: "response",
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
					'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
					'Access-Control-Allow-Credentials': 'true'
				},
				success: function(data, s, d) {
					for (var i = 0; i < data.result.length; i++) {
						//check if the user exists
						if (username === data.result[i].UserName && password === data.result[i].Password) {
							valid = true;
							//save the data in a Model 
							oUserModel.setData(data.result[i]);
							//sets the Model to be global
							sap.ui.getCore().setModel(oUserModel, "oUserModel");
						}
					}
					if (valid) {
						this.oRouter.navTo("HomePage");
					} else {
						this.handleErrorMessageBoxPress();
					}
				}.bind(this),
				error: function(err) {
					console.log(err);
				}
			});
		},
		handleErrorMessageBoxPress: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.error(
				"Please provide the correct login credentials", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
		},

	});
});