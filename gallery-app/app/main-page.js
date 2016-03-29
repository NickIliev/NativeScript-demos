"use strict";
var frame = require("ui/frame");
function itemTap(args) {
    frame.topmost().navigate({
        moduleName: "" + args.object.get("tag"),
    });
    console.log("navigate to " + args.object.get("tag"));
}
exports.itemTap = itemTap;
//# sourceMappingURL=main-page.js.map