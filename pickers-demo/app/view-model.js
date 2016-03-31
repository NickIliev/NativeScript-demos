"use strict";
var observable = require("data/observable");
var WebViewModel = (function (_super) {
    __extends(WebViewModel, _super);
    function WebViewModel() {
        _super.call(this);
    }
    Object.defineProperty(WebViewModel.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            console.log("selectedIndex:" + value);
            this._selectedIndex = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "selectedIndex", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            console.log("items:" + value);
            this._items = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "items", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            console.log("day:" + value);
            this._day = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "day", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            console.log("month:" + value);
            this._month = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "month", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            console.log("year:" + value);
            this._year = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "year", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (value) {
            console.log("hour:" + value);
            this._hour = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "hour", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewModel.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (value) {
            console.log("minute:" + value);
            this._minute = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "minute", value: value });
        },
        enumerable: true,
        configurable: true
    });
    return WebViewModel;
}(observable.Observable));
exports.WebViewModel = WebViewModel;
//# sourceMappingURL=view-model.js.map