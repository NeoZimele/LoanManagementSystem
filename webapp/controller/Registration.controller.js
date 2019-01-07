sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox'
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.Registration", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.view.view.Registration
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Registration").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function() {

		},

		onSubmitReg: function() {
			var oData = {};
			oData.UserID = parseInt(("" + Math.random()).substring(2, 5));
			oData.Name = this.byId("inpName").getValue();
			oData.Surname = this.byId("inpSurname").getValue();
			oData.EmailAddress = this.byId("email").getValue();
			oData.Username = this.byId("username").getValue();
			oData.Password = this.byId("inpPassword").getValue();
			oData.UserType = this.byId("inpUserType").getSelectedItem().getText();

			$.ajax({
				type: "POST",
				async: false,
				cache: false,
				url: 'PHP/Register.php',
				data: oData,
				//successfully logged on 
				success: function(data, response, xhr) {
					this.handleSuccessPress();
				}.bind(this),
				error: function(e, status, xhr) {

				}
			});
		},

		handleSuccessMessageBoxPress: function(oEvent) {
			this.oRouter.navTo("LoginScreen");
			// var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			// MessageBox.success(
			// 	"Your Profile has been successfully created you will be redirected to the login page", {
			// 		styleClass: bCompact ? "sapUiSizeCompact" : "",
			// 		onClose: function(sAction) {
			// 			this.oRouter.navTo("LoginScreen");
			// 		}.bind(this)
			// 	}
			// );
		},

		handleSuccessPress: function(oEvent) {
			this.oRouter.navTo("RegConfirmation");
			// var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			// MessageBox.success(
			// 	"Your Profile has been successfully created you will be redirected to the login page", {
			// 		styleClass: bCompact ? "sapUiSizeCompact" : "",
			// 		onClose: function(sAction) {
			// 			this.oRouter.navTo("LoginScreen");
			// 		}.bind(this)
			// 	}
			// );
		},

		onNavBack: function() {
			// var sPreviousHash = History.getInstance().getPreviousHash();
			this.oRouter.navTo("LoginPage");
			// if (sPreviousHash !== undefined) {
			// 	// The history contains a previous entry
			// 	history.go(-1);
			// } else {
			// 	// Otherwise we go backwards with a forward history
			// 	var bReplace = true;
			// 	this.getRouter().navTo("ApplicationPage", {}, bReplace);
			// }
		}

	});

});