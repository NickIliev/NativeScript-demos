"use strict";
var labelDef = require("ui/label");
function listViewLoaded(args) {
    var listView = args.object;
    listView.items = new Array(1000);
}
exports.listViewLoaded = listViewLoaded;
function listViewItemLoading(args) {
    var label = args.view;
    if (!label) {
        label = new labelDef.Label();
        args.view = label;
    }
    label.text = "News " + args.index;
}
exports.listViewItemLoading = listViewItemLoading;
//# sourceMappingURL=news.js.map