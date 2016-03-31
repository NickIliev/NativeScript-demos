var observable = require("data/observable");
var appSettings = require("application-settings");
var dialogs = require("ui/dialogs");
var NAME = "settings-name";
var HEIGHT = "settings-height";
var WEIGHT = "settings-weight";
var VIBRATE = "settings-vibrate";
var SOUND = "settings-sound";
var SOUND_VOLUME = "settings-sound-value";
var SettingsViewModel = (function (_super) {
    __extends(SettingsViewModel, _super);
    function SettingsViewModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(SettingsViewModel.prototype, "name", {
        get: function () {
            return appSettings.getString(NAME, "John Doe");
        },
        set: function (value) {
            appSettings.setString(NAME, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsViewModel.prototype, "height", {
        get: function () {
            return appSettings.getString(HEIGHT, "180");
        },
        set: function (value) {
            appSettings.setString(HEIGHT, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsViewModel.prototype, "weight", {
        get: function () {
            return appSettings.getString(WEIGHT, "80");
        },
        set: function (value) {
            appSettings.setString(WEIGHT, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsViewModel.prototype, "vibrateEnabled", {
        get: function () {
            return appSettings.getBoolean(VIBRATE, true);
        },
        set: function (value) {
            appSettings.setBoolean(VIBRATE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsViewModel.prototype, "soundEnabled", {
        get: function () {
            return appSettings.getBoolean(SOUND, true);
        },
        set: function (value) {
            appSettings.setBoolean(SOUND, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsViewModel.prototype, "soundVolume", {
        get: function () {
            return appSettings.getNumber(SOUND_VOLUME, 100);
        },
        set: function (value) {
            appSettings.setNumber(SOUND_VOLUME, value);
        },
        enumerable: true,
        configurable: true
    });
    SettingsViewModel.prototype.promptName = function (args) {
        var _this = this;
        dialogs.prompt("Enter your name:", this.name).then(function (promptResult) {
            if (promptResult.result) {
                _this.set("name", promptResult.text);
            }
        });
    };
    return SettingsViewModel;
}(observable.Observable));
exports.SettingsViewModel = SettingsViewModel;
exports.settingsViewModel = new SettingsViewModel();
