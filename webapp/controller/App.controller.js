sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  function(Controller) {
    "use strict";

    return Controller.extend("companyRepo.appName.controller.App", {
      onInit: function() {
        var me = this;
        me.getView().setBusy(true);
        var oModel = new sap.ui.model.odata.v2.ODataModel({
          serviceUrl: "/Northwind/Northwind.svc",
          //          serviceUrl: "/sap/opu/odata/backendServerPath",
        });
        oModel.metadataLoaded().then(function(oEvent) {
          console.log(oEvent);
          //sap default model has no name!
          me.getView().setModel(oModel);
          //me.getView().setModel(oModel, "northwind");
          me.getView().setBusy(false);
        });
      },
    });
  }
);
