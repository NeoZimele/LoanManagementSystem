sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.HistoryPage", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("HistoryPage").attachPatternMatched(this._onObjectMatched, this);
		},

		_onObjectMatched: function(oEvent) {
			var oModel = new sap.ui.model.json.JSONModel();
			var oTable = this.byId("tblHistory");
			$.ajax({
				type: "GET",
				url: 'http://41.204.199.61/LoanManagementSystem/webapp/PHP/getApplications.php',
				async: false,
				success: function(data, s, d) {
					oModel.setData(data.result);
					oTable.setModel(oModel);
					sap.ui.getCore().setModel(oModel,"oModel");
				}.bind(this),
				error: function(err) {
					//	console.log(err);
				}
			});
		},

		onHomePage: function(oEvent) {
			this.oRouter.navTo("HistoryPage");
		},
		onHistoryPage: function() {
			this.oRouter.navTo("HomePage");
		},

		onObjectHistory: function(oEvent) {
			var oItem = oEvent.getSource();
			this.oRouter.navTo("HistoryDetails", {
				historyPath: oItem.getBindingContext().getPath().substr(1)
			});
		},
		onNavBack: function() {
				var sPreviousHash = History.getInstance().getPreviousHash();

				if (sPreviousHash !== undefined) {
					// The history contains a previous entry
					history.go(-1);
				} else {
					// Otherwise we go backwards with a forward history
					var bReplace = true;
					this.getRouter().navTo("HomePage", {}, bReplace);
				}
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf loansLoanManagementSystem.view.view.HistoryPage
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf loansLoanManagementSystem.view.view.HistoryPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf loansLoanManagementSystem.view.view.HistoryPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf loansLoanManagementSystem.view.view.HistoryPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});