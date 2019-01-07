sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.HistoryDetails", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.controller.view.HistoryDetails
		 */
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("HistoryDetails").attachPatternMatched(this._onObjectMatched, this);
			this._oViewModel = new sap.ui.model.json.JSONModel({
				Name: "",
				Surname: "",
				Number: "",
				Email: "",
				IDType: "",
				IDNumber: "",
				DOB: "",
				Title:"",
				HNumbers:"",
				Gender:"",
				Race:"",
				mStatus:"",
				dep:"",
				Nationality:"",
				AddrLine1:"",
				AddrLine2:"",
				Suburb:"",
				City:"",
				PostalCode: "",
				LArr:""
				
				
			});
			this.getView().setModel(this._oViewModel, "viewModel");
		},

		_onObjectMatched: function(oEvent) {
			var oModel = sap.ui.getCore().getModel("oModel");
			var historyPath = "/" + oEvent.getParameter("arguments").historyPath;
			var oProperties = oModel.getProperty(historyPath);
			var ODetailsModel = new sap.ui.model.json.JSONModel(oProperties);
			
			var detailsModel = new sap.ui.model.json.JSONModel(oProperties);
			this.getView().setModel(detailsModel);
			this._oViewModel.setProperty("/Name", oProperties.Name);
			this._oViewModel.setProperty("/Surname", oProperties.Surname);
			this._oViewModel.setProperty("/Number", oProperties.Number);
			this._oViewModel.setProperty("/Email", oProperties.Email);
			this._oViewModel.setProperty("/IDType", oProperties.IDType);
			this._oViewModel.setProperty("/IDNumber", oProperties.IDNumber);
			this._oViewModel.setProperty("/DOB", oProperties.DOB);
			this._oViewModel.setProperty("/Title", oProperties.Title);
			this._oViewModel.setProperty("/HNumbers", oProperties.HNumber);
			this._oViewModel.setProperty("/Gender", oProperties.Gender);
			this._oViewModel.setProperty("/Race", oProperties.Race);
			this._oViewModel.setProperty("/mStatus", oProperties.MaritalStatus);
			this._oViewModel.setProperty("/dep", oProperties.Dependants);
			this._oViewModel.setProperty("/Nationality", oProperties.Nationality);
			this._oViewModel.setProperty("/AddressLine1", oProperties.AddressLine1);
			this._oViewModel.setProperty("/AddressLine2", oProperties.AddressLine2);
			this._oViewModel.setProperty("/Suburb", oProperties.Suburb);
			this._oViewModel.setProperty("/City", oProperties.City);
			this._oViewModel.setProperty("/PostalCode", oProperties.PostalCode);
			this._oViewModel.setProperty("/LArr", oProperties.LivingArrangements);
		
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