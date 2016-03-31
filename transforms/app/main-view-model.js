"use strict";
var observable = require("data/observable");
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this._translateX = 0;
        this._translateY = 0;
        this._scaleX = 100;
        this._scaleY = 100;
        this._originX = 50;
        this._originY = 50;
        this._rotate = 0;
        this.reset();
    }
    ;
    Object.defineProperty(ViewModel.prototype, "translateX", {
        get: function () {
            return this._translateX;
        },
        set: function (value) {
            this._translateX = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "translateX", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "translateY", {
        get: function () {
            return this._translateY;
        },
        set: function (value) {
            this._translateY = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "translateY", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "scaleX", {
        get: function () {
            return this._scaleX;
        },
        set: function (value) {
            this._scaleX = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "scaleX", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "scaleY", {
        get: function () {
            return this._scaleY;
        },
        set: function (value) {
            this._scaleY = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "scaleY", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "originX", {
        get: function () {
            return this._originX;
        },
        set: function (value) {
            this._originX = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "originX", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "originY", {
        get: function () {
            return this._originY;
        },
        set: function (value) {
            this._originY = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "originY", value: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewModel.prototype, "rotate", {
        get: function () {
            return this._rotate;
        },
        set: function (value) {
            this._rotate = value;
            this.notify({ object: this, eventName: observable.Observable.propertyChangeEvent, propertyName: "rotate", value: value });
        },
        enumerable: true,
        configurable: true
    });
    ViewModel.prototype.reset = function () {
        this.originX = 50;
        this.originY = 50;
        this.scaleX = 100;
        this.scaleY = 100;
        this.translateX = 0;
        this.translateY = 0;
        this.rotate = 0;
    };
    return ViewModel;
}(observable.Observable));
exports.ViewModel = ViewModel;
//# sourceMappingURL=main-view-model.js.map