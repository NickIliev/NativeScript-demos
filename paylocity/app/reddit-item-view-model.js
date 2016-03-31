"use strict";
var observable_1 = require("data/observable");
var image_source_1 = require("image-source");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var firstThumbnailImageSource = image_source_1.fromFile("~/res/first-image.png");
var defaultImageSource = image_source_1.fromFile("~/res/reddit-logo-transparent.png");
var ISLOADING = "isLoading";
var THUMBNAIL_IMAGE = "thumbnailImage";
var IMAGE_SOURCE = "imageSource";
var nextId = 1;
var RedditViewModel = (function (_super) {
    __extends(RedditViewModel, _super);
    function RedditViewModel(source) {
        _super.call(this);
        this._isLoading = false;
        this._source = source;
        this._id = nextId++;
        if (this._source) {
            var property;
            for (property in this._source) {
                this.set(property, this._source[property]);
            }
        }
    }
    Object.defineProperty(RedditViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        set: function (value) {
            if (this._isLoading !== value) {
                this._isLoading = value;
                this.notify({ object: this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: ISLOADING, value: value });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "thumbnailImage", {
        get: function () {
            var _this = this;
            if (!this._source) {
                return reddit_app_view_model_1.defaultThumbnailImageSource;
            }
            if (this._source.title === "reddit 101") {
                return firstThumbnailImageSource;
            }
            var url = this._source.thumbnail;
            if (!_isValidImageUrl(url)) {
                return reddit_app_view_model_1.defaultNoThumbnailImageSource;
            }
            var image = reddit_app_view_model_1.cache.get(url);
            if (image) {
                return image;
            }
            this.isLoading = true;
            reddit_app_view_model_1.cache.push({
                key: url,
                url: url,
                completed: function (image, key) {
                    if (url === key) {
                        _this.isLoading = false;
                        _this.notify({ object: _this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: THUMBNAIL_IMAGE, value: image });
                    }
                }
            });
            return reddit_app_view_model_1.defaultThumbnailImageSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RedditViewModel.prototype, "imageSource", {
        get: function () {
            var _this = this;
            if (this._source) {
                var url;
                try {
                    url = this._source.preview.images[0].source.url;
                }
                catch (e) {
                    url = this._source.url;
                }
                if (_isValidImageUrl(url)) {
                    this.isLoading = true;
                    image_source_1.fromUrl(url).then(function (result) {
                        _this.isLoading = false;
                        _this.notify({ object: _this, eventName: observable_1.Observable.propertyChangeEvent, propertyName: IMAGE_SOURCE, value: result });
                    });
                }
            }
            return defaultImageSource;
        },
        enumerable: true,
        configurable: true
    });
    return RedditViewModel;
}(observable_1.Observable));
exports.RedditViewModel = RedditViewModel;
function _isValidImageUrl(url) {
    return url && (url.indexOf(".png") !== -1 || url.indexOf(".jpg") !== -1);
}
//# sourceMappingURL=reddit-item-view-model.js.map