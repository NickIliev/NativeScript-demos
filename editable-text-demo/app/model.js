"use strict";
var observable = require("data/observable");
var WebViewModel = (function (_super) {
    __extends(WebViewModel, _super);
    function WebViewModel() {
        _super.call(this);
    }
    Object.defineProperty(WebViewModel.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            console.log(value);
            this._text = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "text", value: value });
        },
        enumerable: true,
        configurable: true
    });
    return WebViewModel;
}(observable.Observable));
exports.WebViewModel = WebViewModel;
//# sourceMappingURL=model.js.map