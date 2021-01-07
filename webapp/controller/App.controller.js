sap.ui.define(
  ['sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/core/mvc/Controller'],
  function (MessageToast, JSONModel, Controller) {
    "use strict";

    return Controller.extend("companyRepo.appName.controller.App", {
      //Old way of metadata initialization. Currently: define backend service in two sections of manifest.json file
      // onInit: function() {
      // var me = this;
      // me.getView().setBusy(true);
      // var oModel = new sap.ui.model.odata.v2.ODataModel({
      //   serviceUrl: "/Northwind/Northwind.svc",
      //   //          serviceUrl: "/sap/opu/odata/backendServerPath",
      // });
      // oModel.metadataLoaded().then(function(oEvent) {
      //   console.log(oEvent);
      //   //sap default model has no name!
      //   me.getView().setModel(oModel);
      //   //me.getView().setModel(oModel, "northwind");
      //   me.getView().setBusy(false);
      // });
      // },
      onInit() {
        var content = {
          accounts: [
            {
              posNo: "001",
              currency: "EUR"
            },
            {
              posNo: "002",
              currency: "USD"
            },
            {
              posNo: "003",
              currency: "PLN"
            }
          ]
        };
        var mainJSON = new JSONModel(content);
        this.getView().setModel(mainJSON, "mainJSON");
      },
      
      onListItemPressed(oEvent) {
        MessageToast.show("Pressed");
        console.log("dupa");
      }
    });
  }
);