"use strict";
var frames = require("ui/frame");
var imageSourceDef = require("image-source");
var fs = require("file-system");
function pageLoaded(args) {
    if (frames.topmost().android) {
        frames.topmost().android.cachePagesOnNavigate = true;
    }
}
exports.pageLoaded = pageLoaded;
function imageLoaded(args) {
    var image = args.object;
    console.log(__dirname);
    var logoPath = fs.path.join(__dirname, "tagLine.png");
    image.imageSource = imageSourceDef.fromFile(logoPath);
}
exports.imageLoaded = imageLoaded;
function loginButtonTap(args) {
    frames.topmost().navigate("news");
}
exports.loginButtonTap = loginButtonTap;
//# sourceMappingURL=main-page.js.map