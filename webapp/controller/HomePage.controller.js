sap.ui.define([
	'sap/m/MessageToast',
	'sap/m/MessageBox',
	"sap/ui/core/mvc/Controller"
], function(MessageToast, MessageBox, Controller) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.HomePage", {

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("HomePage").attachPatternMatched(this._onObjectMatched, this);

			this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent) {
				this._bKeyboard = oEvent.type === "keyup";
			}, this);
		},

		_onObjectMatched: function() {
			var oUserModel = sap.ui.getCore().getModel("oUserModel");
			var userData = oUserModel.getData();
			this.byId("openMenu").setText(userData.Name + " " + userData.Surname);
		},

		handleConfirmationMessageBoxPress: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.warning(
				"Do you want to logout?", {
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					styleClass: bCompact ? "sapUiSizeCompact" : ""
						// ,
						// onClose: function(sAction) {
						// 	MessageToast.show("Action selected: " + sAction);
						// }
						,
					onClose: function(sAction, type) {

							if (sAction === "YES") {
								this.oRouter.navTo("LoginScreen");

							} else {
								this.oRouter.navTo("HomePage");

							}

						}.bind(this)
						// this.oRouter.navTo("LoginScreen");

				}
			);
		},

		handleMenuItemPress: function(oEvent) {
			var itemId = oEvent.mParameters.item.sId;
			if (itemId === "logout") {
				this.handleConfirmationMessageBoxPress();
			} else {
				this.oRouter.navTo("UpdateProfile");
			}
		},

		handlePressOpenMenu: function(oEvent) {
			var oButton = oEvent.getSource();
			if (!this._menu) {
				this._menu = sap.ui.xmlfragment(
					"loansLoanManagementSystem.view.Fragments.Popover",
					this
				);
				this.getView().addDependent(this._menu);
			}

			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		},

		onApplicationPage: function() {
			this.oRouter.navTo("ApplicationPage");
		},
		onLogout: function() {

			this.oRouter.navTo("LoginScreen");
		},

		onUpdate: function() {

			this.oRouter.navTo("UpdatePageDetails");
		},
		onHistoryTile: function() {
			this.oRouter.navTo("HistoryPage");
		},
		onHistoryPage: function() {
			this.oRouter.navTo("HomePage");
		}

	});

});