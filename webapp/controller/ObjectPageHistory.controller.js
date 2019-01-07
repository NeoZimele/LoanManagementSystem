sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	"sap/ui/core/routing/History"
], function(jQuery, Controller, JSONModel, History) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.ObjectPageHistory", {

		onInit: function() {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("ObjectPageHistory").attachPatternMatched(this._onObjectMatched, this);
			this._oViewModel = new sap.ui.model.json.JSONModel({
				Name:"",
				Surname: "",
				Number:"",
				Email:"",
				IDType: "",
				IDNumber: "",
				DOB: ""
			});
			this.setModel(this._oViewModel, "viewModel");
		},

		_onObjectMatched: function(oEvent) {
			var oModel = sap.ui.getCore().getModel("oModel");
			var historyPath = "/" + oEvent.getParameter("arguments").historyPath;
			var oProperties = oModel.getProperty(historyPath);
			this._oViewModel.setProperty("/Name", oProperties.Name);
			this._oViewModel.setProperty("/Surname", oProperties.Surname);
			this._oViewModel.setProperty("/Number", oProperties.Number);
			this._oViewModel.setProperty("/Email", oProperties.Email);
			this._oViewModel.setProperty("/IDType", oProperties.IDType);
			this._oViewModel.setProperty("/IDNumber", oProperties.IDNumber);
			this._oViewModel.setProperty("/DOB", oProperties.DOB);
			// this.getView().bindElement({
			// 	historyPath: "/" + oEvent.getParameter("arguments").invoicePath,
			// 	model : "oModel"
			// });

		},

		/**
		 * Event handler  for navigating back.
		 * It checks if there is a history entry. If yes, history.go(-1) will happen.
		 * If not, it will replace the current entry of the browser history with the master route.
		 * @public
		 */
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
		},

	});

});