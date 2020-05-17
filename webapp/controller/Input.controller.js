sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("demo.ExchangeRates.controller.Input", {
		onInit: function () {

			var sURL = "https://" + "openexchangerates.org/api" + "/currencies.json";
			var oModel = new JSONModel();
			oModel.loadData(sURL);

			oModel.attachRequestCompleted(function () {

				var oData = oModel.getData();
				var aData = [];
				for (var property in oData) {
					aData.push({
						code: property,
						description: oData[property]
					});
				}
				var oJSONModel = new JSONModel(aData);
				var oCurrencies = this.getView().byId("cmbCurrencies");
				oCurrencies.setModel(oJSONModel);
				oCurrencies.bindItems({
					path: "/",
					template: new sap.ui.core.ListItem({
						text: "{code}",
						additionalText: "{description}"
					}),
					length: oJSONModel.getData().length
				});
			}, this);
		}

	});
});