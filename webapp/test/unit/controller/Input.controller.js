/*global QUnit*/

sap.ui.define([
	"demo/ExchangeRates/controller/Input.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Input Controller");

	QUnit.test("I should test the Input controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});