"use strict";
var image_source_1 = require("image-source");
var virtual_array_1 = require("data/virtual-array");
var observable_1 = require("data/observable");
var image_cache_1 = require("ui/image-cache");
var reddit_item_view_model_1 = require("./reddit-item-view-model");
var aboutText = "Cuteness is a proof of concept app demonstrating the Telerik's NativeScript for writing native mobile applications using JavaScript.";
exports.defaultThumbnailImageSource = image_source_1.fromFile("~/res/reddit-logo.png");
exports.defaultNoThumbnailImageSource = image_source_1.fromFile("~/res/no-image.png");
var redditUrl = "http://www.reddit.com/r/aww.json?limit=";
var after;
var ISSCROLLING = "isLoading";
// initialize the image cache for the main list
exports.cache = new image_cache_1.Cache();
exports.cache.placeholder = exports.defaultThumbnailImageSource;
exports.cache.maxRequests = 5;
var AppViewModel = (function (_super) {
    __extends(AppViewModel, _super);
    function AppViewModel() {
        _super.apply(this, arguments);
        this._isScrolling = false;
    }
    Object.defineProperty(AppViewModel.prototype, "redditItems", {
        get: function () {
            var _this = this;
            if (!this._redditItems) {
                this._redditItems = new virtual_array_1.VirtualArray(1000);
                this._redditItems.loadSize = 50;
                this._redditItems.on(virtual_array_1.VirtualArray.itemsLoadingEvent, function (args) {
                    fetch(redditUrl + args.count + (after ? "&after=" + after : "")).then(function (response) { return response.json(); }).then(function (result) {
                        var itemsToLoad = result.data.children.map(function (i) {
                            return new reddit_item_view_model_1.RedditViewModel(i.data);
                        });
                        _this._redditItems.load(args.index, itemsToLoad);
                        var lastItem = itemsToLoad[itemsToLoad.length - 1];
                        if (lastItem) {
                            after = itemsToLoad[itemsToLoad.length - 1].source.name;
                        }
                    }).catch(function (e) {
                        setTimeout(function () { throw e; });
                    });
                });
            }
            return this._redditItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "isScrolling", {
        get: function () {
            return this._isScrolling;
        },
        set: function (value) {
            if (this._isScrolling !== value) {
                this._isScrolling = value;
                if (value) {
                    exports.cache.disableDownload();
                }
                else {
                    exports.cache.enableDownload();
                }
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: ISSCROLLING, value: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "aboutText", {
        get: function () {
            return aboutText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "defaultThumbnailImageSource", {
        get: function () {
            return exports.defaultThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppViewModel.prototype, "defaultNoThumbnailImageSource", {
        get: function () {
            return exports.defaultNoThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    return AppViewModel;
}(observable_1.Observable));
exports.AppViewModel = AppViewModel;
//# sourceMappingURL=reddit-app-view-model.js.map