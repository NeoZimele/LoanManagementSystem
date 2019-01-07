sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.SuccessfulRegPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.view.view.SuccessfulRegPage
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("SuccessfulRegPage").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function() {
			var that = this;
			setTimeout(function() {
				that.oRouter.navTo("LoginScreen");
			}, 60000);
		}

	});

});