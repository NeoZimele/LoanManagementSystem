sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.ForgotPassword", {
			onIDTypePressFP: function(cEvent) {
			var idx = cEvent.getSource().getProperty("selectedIndex");
			if (idx === 0) {
				this.byId("lblIDFP").setText("ID Number");
				this.IDType = "ID";
			} else {
				this.byId("lblIDFP").setText("Passport Number");
				this.IDType = "Passport";
			}
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.view.view.ForgotPassword
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf loansLoanManagementSystem.view.view.ForgotPassword
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf loansLoanManagementSystem.view.view.ForgotPassword
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf loansLoanManagementSystem.view.view.ForgotPassword
		 */
		//	onExit: function() {
		//
		//	}

	});

});