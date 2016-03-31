"use strict";
var frameModule = require("ui/frame");
var reddit_app_view_model_1 = require("./reddit-app-view-model");
var appViewModel = new reddit_app_view_model_1.AppViewModel();
var topmost;
var page;
function pageLoaded(args) {
    // Get the event sender
    page = args.object;
    page.bindingContext = appViewModel;
    topmost = frameModule.topmost();
    // Enable platform specific feature (in this case Android page caching)
    if (topmost.android) {
        topmost.android.cachePagesOnNavigate = true;
    }
}
exports.pageLoaded = pageLoaded;
function listViewLoadMoreItems(args) {
    console.log('loadMoreItems fired!');
    // Increase model items length with model items loadSize property value
    appViewModel.redditItems.length += appViewModel.redditItems.loadSize;
}
exports.listViewLoadMoreItems = listViewLoadMoreItems;
function listViewItemTap(args) {
    // Navigate to the details page with context set to the data item for specified index
    topmost.navigate({
        moduleName: "./news-details-page",
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
//# sourceMappingURL=news.js.map