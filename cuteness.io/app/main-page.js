"use strict";
var frame_1 = require("ui/frame");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var appViewModel = new reddit_app_view_model_1.AppViewModel();
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = appViewModel;
    // Enable platform specific feature (in this case Android page caching)
    if (frame_1.topmost().android) {
        frame_1.topmost().android.cachePagesOnNavigate = true;
    }
}
exports.pageLoaded = pageLoaded;
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    frame_1.topmost().navigate({
        moduleName: "./details-page",
        context: appViewModel.redditItems.getItem(args.index)
    });
    // var model = appViewModel.redditItems.getItem(args.index);
    // for (var x in model){
    //     if (model.hasOwnProperty(x)) {
    //         console.log('Property name: ' + x);    
    //         console.log('Property value ' + model[x]);
    //         console.log('---------------------------')          
    //     }
    // }
}
exports.listViewItemTap = listViewItemTap;
function listViewLoadMoreItems(args) {
    // Increase model items length with model items loadSize property value
    appViewModel.redditItems.length += appViewModel.redditItems.loadSize;
}
exports.listViewLoadMoreItems = listViewLoadMoreItems;
//# sourceMappingURL=main-page.js.map