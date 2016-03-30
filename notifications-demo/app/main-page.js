"use strict";
var application = require("application");
var batteryLabel;
var registered = false;
var batteryObserver;
application.on(application.exitEvent, function () {
    if (application.android) {
        application.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
    }
    else {
        application.ios.removeNotificationObserver(batteryObserver, UIDeviceBatteryLevelDidChangeNotification);
    }
});
function onPageLoaded(args) {
    var page = args.object;
    batteryLabel = page.getViewById("batteryLabel");
    if (registered) {
        return;
    }
    if (application.android) {
        application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, function onReceiveCallback(context, intent) {
            var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            var percent = (level / scale) * 100.0;
            var message = "Battery: " + percent + "%";
            console.log(message);
            batteryLabel.text = message;
        });
    }
    else {
        var onReceiveCallback = function onReceiveCallback(notification) {
            var percent = UIDevice.currentDevice().batteryLevel * 100;
            var message = "Battery: " + percent + "%";
            console.log(message);
            batteryLabel.text = message;
        };
        UIDevice.currentDevice().batteryMonitoringEnabled = true;
        onReceiveCallback(null);
        batteryObserver = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, onReceiveCallback);
    }
    registered = true;
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=main-page.js.map