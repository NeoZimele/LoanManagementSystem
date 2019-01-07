sap.ui.define([
	'jquery.sap.global',
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
	'sap/m/MessageToast'
], function(jQuery, Controller, History, JSONModel, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("loansLoanManagementSystem.controller.ApplicationPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf loansLoanManagementSystem.view.view.ApplicationPage
		 */
		onInit: function() {
			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
				HTML: "<ul><li>A copy of your ID/ Passport document.</li><li>Proof of income - three months' bank statements or payslips.</li><li>Proof of residence.</li><li>If you're self employed, you'll also need a letter from your accountant or financial manager confirming your income.</li></ul>"
			});
			this.getView().setModel(oModel);
			this.IconTab = this.byId("IconBar");
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("ApplicationPage").attachPatternMatched(this._onObjectMatched, this);
			this.IDType = "ID";
			this.oDocuments = [];
		},

		_onObjectMatched: function() {
			// this.IconTab.setSelectedKey("instructions");

		},

		onAppPage: function() {
			this.oRouter.navTo("HomePage");
		},

		onInstructionNext: function() {
			this.byId("detailsTab").setEnabled(true);
			this.IconTab.setSelectedKey("details");
		},

		onPersonalDetailsNext: function() {
			this.byId("Affordability").setEnabled(true);
			this.IconTab.setSelectedKey("affordability");
		},

		// onAffordNext: function() {
		// 	this.byId("Affordability").setEnabled(true);
		// 	this.IconTab.setSelectedKey("affordability");
		// },

		onAddInfoNext: function() {
			this.byId("employTab").setEnabled(true);
			this.IconTab.setSelectedKey("employ");
		},

		onInsuranceNext: function() {
			this.byId("addinfo").setEnabled(true);
			this.IconTab.setSelectedKey("add");
		},

		onEmployInfoNext: function() {
			this.byId("financeTab").setEnabled(true);
			this.IconTab.setSelectedKey("finance");
		},

		onFinanceInfoNext: function() {
			this.byId("Attachments").setEnabled(true);
			this.IconTab.setSelectedKey("attach");
		},

		onTabPDetails: function() {
			this.oRouter.navTo("ApplicationPage.Affordability Check");
		},

		AffordabilityResponse: function(msg, type) {

			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.information(
				msg, {
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
					onClose: function(sAction) {
						if (type === 'approved') {
							if (sAction === "YES") {
								this.byId("insuranceTab").setEnabled(true);
								this.IconTab.setSelectedKey("insurance");
								this.byId("addinfo").setEnabled(false);
							} else {
								this.byId("insuranceTab").setEnabled(true);
								this.IconTab.setSelectedKey("insurance");
								this.byId("addinfo").setEnabled(false);
							}
						} else {
							if (sAction === "YES") {
								this.oRouter.navTo("HomePage");
							}

						}
					}.bind(this)
				}
			);
		},

		CheckAffordabilityMessageBoxPress: function(oEvent) {
			var Nett = parseInt(this.byId("inpNett").getValue() + this.byId("inpOther").getValue());
			var expenses = parseInt(this.byId("inpTotalExp").getValue()) + parseInt(this.byId("inpTotalDebt").getValue());
			var total = Nett - expenses;
			var percentage = (total / 100) * 100;
			if (percentage > "30") {
				this.AffordabilityResponse(
					"Congratulations, you may qualify for the requested loan amount pending credit checks, Do you have credit insurance?",
					"approved");
			} else {
				this.AffordabilityResponse(
					"We regret to inform you that you dont qualify for the loan at the moment would you like to exit?", "rejected");
			}
		},

		onSubmitApplication: function(oEvent) {
			var oUserModel = sap.ui.getCore().getModel("oUserModel");
			var userData = oUserModel.getData();
			var oData = {};
			var Data = {};
			oData.ApplicationID = parseInt(("" + Math.random()).substring(2, 5));
			this.AppID = oData.ApplicationID;
			oData.Title = this.byId("cmbTitle").getSelectedItem().getText();
			oData.Name = this.byId("inpName").getValue();
			oData.Surname = this.byId("inpSurname").getValue();
			oData.Numbers = this.byId("inpNumber").getValue();
			oData.Email = this.byId("inpEmail").getValue();
			oData.IDType = this.IDType;
			oData.IDNumber = parseInt(this.byId("inpIDNum").getValue());
			oData.DOB = this.byId("inpDOB").getValue();
			oData.HNumber = parseInt(this.byId("inpHNumber").getValue());
			oData.WNumber = parseInt(this.byId("WNumber").getValue());
			oData.Gender = this.byId("cmbGender").getSelectedItem().getText();
			oData.Race = this.byId("cmbRace").getSelectedItem().getText();
			oData.MaritalStatus = this.byId("cmbMStatus").getSelectedItem().getText();
			oData.Dependants = parseInt(this.byId("inpDep").getValue());
			oData.AddressLine1 = this.byId("inpAddressLine1").getValue();
			oData.AddressLine2 = this.byId("inpAddressLine2").getValue();
			oData.City = this.byId("inpCity").getValue();
			oData.PostalCode = this.byId("inpPostalCode").getValue();
			oData.LivingArrangements = this.byId("cmbLArrange").getSelectedItem().getText();
			oData.HighestQualification = this.byId("highestQual").getValue();
			oData.EmploymentStatus = this.byId("cmbEmploymentStatus").getSelectedItem().getText();
			oData.Position = this.byId("inpOccu").getValue();
			oData.Industry = this.byId("inpIndustry").getValue();
			oData.CurrentEmployer = this.byId("cmbCurrentEmployer").getSelectedItem().getText();
			oData.WAddressLine1 = this.byId("inpWAddrLine1").getValue();
			oData.WAddressLine2 = this.byId("inpWAddrLine2").getValue();
			oData.WSuburb = this.byId("inpWSuburb").getValue();
			oData.Suburb = this.byId("inpSuburb").getValue();
			oData.WCity = this.byId("inpWCity").getValue();
			oData.WPostalCode = this.byId("inpWpostalCode").getValue();
			oData.FinanceStatus = this.byId("cmbFinanceStatus").getValue();
			oData.Source = this.byId("inpSource").getValue();
			oData.UserID = userData.UserID;
			oData.GrossIncome = this.byId("inpGross").getValue();
			oData.NettIncome = this.byId("inpNett").getValue();
			oData.OtherIncome = this.byId("inpOther").getValue();
			oData.LivingExpenses = this.byId("inpTotalExp").getValue();
			oData.DebtRepayments = this.byId("inpTotalDebt").getValue();
			oData.RequestedAmount = this.byId("inpReqAmount").getValue();
			oData.Term = this.byId("cmbTerm").getSelectedItem().getText();

			$.ajax({
				type: "POST",
				async: false,
				cache: false,
				url: 'PHP/Application.php',
				data: oData,
				//successfully logged on 
				success: function(data, response, xhr) {
					this.FinalSubmitMessageBoxPress();
				}.bind(this),
				error: function(e, status, xhr) {

				}
			});

			//save the ID copy attachement
			Data.ApplicationID = oData.ApplicationID;
			Data.FileName = window.IDfileName;
			Data.FileContent = window.IDContent;
			Data.FileType = window.IDfileType;
			Data.UserID = userData.UserID;
			Data.DocumentType = window.IDDocumentType;

			this.oDocuments.push(Data);

			//save the Payslip attachement
			Data.ApplicationID = oData.ApplicationID;
			Data.FileName = window.PayslipfileName;
			Data.FileContent = window.PayslipContent;
			Data.FileType = window.PayslipfileType;
			Data.UserID = userData.UserID;
			Data.DocumentType = window.PayslipDocumentType;

			this.oDocuments.push(Data);

			//save the proof of res attachement
			Data.ApplicationID = oData.ApplicationID;
			Data.FileName = window.AddressfileName;
			Data.FileContent = window.AddressContent;
			Data.FileType = window.AddressfileType;
			Data.UserID = userData.UserID;
			Data.DocumentType = window.AddressDocumentType;

			this.oDocuments.push(Data);

			this.onCreateocuments(this.oDocuments);

		},

		onCreateocuments: function(Document) {

			for (var i = 0; i < Document.length; i++) {
				$.ajax({
					type: "POST",
					async: false,
					cache: false,
					url: 'PHP/sendDocuments.php',
					data: Document[i],
					//successfully logged on 
					success: function(data, response, xhr) {
						this.FinalSubmitMessageBoxPress();
					}.bind(this),
					error: function(e, status, xhr) {

					}
				});
			}

		},

		onIDAttachmentChange: function(oEvent) {
			var oParameters = oEvent.getParameters();
			//create file reader and file reader event handler
			var oFileReader = new FileReader();

			oFileReader.onload = function() {
				var base64String = oFileReader.result;
				window.IDContent = base64String.split(',')[1];
			};

			window.IDfileName = oParameters.files[0].name
			window.IDfileType = oParameters.files[0].type;
			window.IDDocumentType = "ID Copy";

			oFileReader.readAsDataURL(oParameters.files[0]);
		},

		onPayslipAttachmentChange: function(oEvent) {
			var oParameters = oEvent.getParameters();
			//create file reader and file reader event handler
			var oFileReader = new FileReader();

			oFileReader.onload = function() {
				var base64String = oFileReader.result;
				window.PayslipContent = base64String.split(',')[1];
			};

			window.PayslipfileName = oParameters.files[0].name
			window.PayslipfileType = oParameters.files[0].type;
			window.PayslipDocumentType = "Payslip";

			oFileReader.readAsDataURL(oParameters.files[0]);
		},

		onAddressAttachmentChange: function(oEvent) {
			var oParameters = oEvent.getParameters();
			//create file reader and file reader event handler
			var oFileReader = new FileReader();

			oFileReader.onload = function() {
				var base64String = oFileReader.result;
				window.AddressContent = base64String.split(',')[1];
			};

			window.AddressfileName = oParameters.files[0].name
			window.AddressfileType = oParameters.files[0].type;
			window.AddressDocumentType = "Proof of Address";

			oFileReader.readAsDataURL(oParameters.files[0]);
		},

		FinalSubmitMessageBoxPress: function(oEvent) {
			var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.success(
				"Application is successfully recieved, ref #" + this.AppID + ". We will communicate with you shortly", {
					actions: [sap.m.MessageBox.Action.OK],
					styleClass: bCompact ? "sapUiSizeCompact" : "",
					onClose: function(sAction) {
						this.oRouter.navTo("HomePage");
					}.bind(this)

				}
			);
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
		handleUploadComplete: function(oEvent) {
			var sResponse = oEvent.getParameter("response");
			if (sResponse) {
				var sMsg = "";
				var m = /^\[(\d\d\d)\]:(.*)$/.exec(sResponse);
				if (m[1] == "200") {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Success)";
					oEvent.getSource().setValue("");
				} else {
					sMsg = "Return Code: " + m[1] + "\n" + m[2] + "(Upload Error)";
				}

				MessageToast.show(sMsg);
			}
		},

		handleUploadPress: function(oEvent) {
			var oFileUploader = this.byId("fileUploader");
			if (!oFileUploader.getValue()) {
				MessageToast.show("Choose a file first");
				return;
			}
			oFileUploader.upload();
		},

		onIDTypePress: function(cEvent) {
			var idx = cEvent.getSource().getProperty("selectedIndex");
			if (idx === 0) {
				this.byId("lblID").setText("ID Number");
				this.IDType = "ID";
			} else {
				this.byId("lblID").setText("Passport Number");
				this.IDType = "Passport";
			}
		},

		handleTypeMissmatch: function(oEvent) {
			var aFileTypes = oEvent.getSource().getFileType();
			jQuery.each(aFileTypes, function(key, value) {
				aFileTypes[key] = "*." + value;
			});
			var sSupportedFileTypes = aFileTypes.join(", ");
			MessageToast.show("The file type *." + oEvent.getParameter("fileType") +
				" is not supported. Choose one of the following types: " +
				sSupportedFileTypes);
		},

		handleValueChange: function(oEvent) {
			MessageToast.show("Press 'Upload File' to upload file '" +
				oEvent.getParameter("newValue") + "'");
		}

	});

	// return ControllerController;

});