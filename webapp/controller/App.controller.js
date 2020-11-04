sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("companyRepo.appName.controller.App", {
      onInit: function() {
        var me = this;
        me.getView().setBusy(true);
        var oModel = new sap.ui.model.odata.v2.ODataModel({
          serviceUrl: "/northwind",
        });
        oModel.metadataLoaded().then(function(oEvent) {
          console.log(oEvent);
          me.getView().setModel(oModel, "NorthwindModel");
          me.getView().setBusy(false);
        });
      },
    });
  }
);
