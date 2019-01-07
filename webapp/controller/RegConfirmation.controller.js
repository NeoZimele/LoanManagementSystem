sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.RegConfirmation", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("RegConfirmation").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function() {
			var that = this;
			setTimeout(function() {
				that.oRouter.navTo("LoginScreen");
			}, 5000);
		},

		onConfirm: function() {
			this.oRouter.navTo("LoginScreen");
		}

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.view.view.RegConfirmation
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf loansLoanManagementSystem.view.view.RegConfirmation
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf loansLoanManagementSystem.view.view.RegConfirmation
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf loansLoanManagementSystem.view.view.RegConfirmation
		 */
		//	onExit: function() {
		//
		//	}

	});

});