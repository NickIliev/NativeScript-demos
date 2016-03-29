"use strict";
var connectivity = require("connectivity");
var color = require("color");
var infoLabel;
function onPageLoaded(args) {
    var page = args.object;
    infoLabel = page.getViewById("infoLabel");
}
exports.onPageLoaded = onPageLoaded;
function onGetConnectionType(args) {
    var connectionType = connectivity.getConnectionType();
    updateInfoLabel(connectionType);
}
exports.onGetConnectionType = onGetConnectionType;
function onStartMonitoring(args) {
    onGetConnectionType(null);
    connectivity.startMonitoring(onConnectionTypeChanged);
}
exports.onStartMonitoring = onStartMonitoring;
function onStopMonitoring(args) {
    connectivity.stopMonitoring();
}
exports.onStopMonitoring = onStopMonitoring;
function updateInfoLabel(connectionType) {
    switch (connectionType) {
        case connectivity.connectionType.none:
            infoLabel.text = "None";
            infoLabel.backgroundColor = new color.Color("Red");
            break;
        case connectivity.connectionType.wifi:
            infoLabel.text = "WiFi";
            infoLabel.backgroundColor = new color.Color("Green");
            break;
        case connectivity.connectionType.mobile:
            infoLabel.text = "Mobile";
            infoLabel.backgroundColor = new color.Color("Yellow");
            break;
    }
}
function onConnectionTypeChanged(newConnectionType) {
    switch (newConnectionType) {
        case connectivity.connectionType.none:
            console.log("Connection type changed to none.");
            break;
        case connectivity.connectionType.wifi:
            console.log("Connection type changed to WiFi.");
            break;
        case connectivity.connectionType.mobile:
            console.log("Connection type changed to mobile.");
            break;
    }
    updateInfoLabel(newConnectionType);
}
//# sourceMappingURL=main-page.js.map