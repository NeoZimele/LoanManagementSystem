sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, MessageToast, History) {
	"use strict";

	// return Controller.extend("loansLoanManagementSystem.controller.AdminReportPage", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf loansLoanManagementSystem.view.view.AdminReportPage
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf loansLoanManagementSystem.view.view.AdminReportPage
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf loansLoanManagementSystem.view.view.AdminReportPage
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf loansLoanManagementSystem.view.view.AdminReportPage
	 */
	//	onExit: function() {
	//
	//	}

	// }
	// );
	var PageController = Controller.extend("loansLoanManagementSystem.controller.AdminReportPage", {

		press: function(oEvent) {
			MessageToast.show("The column micro chart is pressed.");
		},
		onNavBack: function() {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				history.go(-1);
			} else {
				// Otherwise we go backwards with a forward history
				var bReplace = true;
				this.getRouter().navTo("master", {}, bReplace);
			}
		}

	});

	return PageController;

});