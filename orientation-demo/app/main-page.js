"use strict";
var application = require("application");
var observable = require("data/observable");
var dialogs = require("ui/dialogs");
var viewModel = new observable.Observable();
function orientationChanged(data) {
    console.log("Orientation changed: " + data.newValue);
    viewModel.set("orientation", data.newValue);
}
function onResumeApp(data) {
    // for (var key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         var element = data[key];
    //         console.log(element);
    //     }
    // }
    dialogs.alert("On resume").then(function () {
        console.log("Dialog closed!");
    });
}
function onSuspendApp(data) {
    console.log('on onSuspendApp');
    console.log('object: ' + data.object);
    console.log('event name: ' + data.eventName);
    console.log('android : ' + data.android);
    console.log('android context: ' + data.object.context);
}
function onPageLoaded(args) {
    var page = args.object;
    application.on(application.orientationChangedEvent, orientationChanged, page);
    page.bindingContext = viewModel;
    viewModel.set("orientation", "not changed");
    application.on(application.suspendEvent, onSuspendApp, page);
    application.on(application.resumeEvent, onResumeApp, page);
    var isSuspendListened = application.hasListeners(application.suspendEvent);
    console.log(isSuspendListened);
    var isLowMemoryEventListened = application.hasListeners(application.lowMemoryEvent);
    console.log(isLowMemoryEventListened);
}
exports.onPageLoaded = onPageLoaded;
function onPageUnloaded(args) {
    var page = args.object;
    application.off(application.orientationChangedEvent, orientationChanged, page);
    application.off(application.suspendEvent, onSuspendApp, page);
    application.off(application.resumeEvent, onResumeApp, page);
}
exports.onPageUnloaded = onPageUnloaded;
//# sourceMappingURL=main-page.js.map