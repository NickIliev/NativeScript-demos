var frames = require("ui/frame");
var platform = require("platform");
var vmModule = require("./main-view-model");
var twoPaneLayout = Math.min(platform.screen.mainScreen.widthDIPs, platform.screen.mainScreen.heightDIPs) > 600;
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;
function listViewItemTap(args) {
    if (!twoPaneLayout) {
        frames.topmost().navigate("details-page");
    }
    vmModule.mainViewModel.set("selectedItem", args.view.bindingContext);
}
exports.listViewItemTap = listViewItemTap;
