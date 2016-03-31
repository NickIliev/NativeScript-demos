import { Observable, EventData } from "data/observable";
import { VirtualArray, ItemsLoading } from "data/virtual-array";

import frameModule = require("ui/frame");
import listViewModule = require("ui/list-view");
import labelModule = require("ui/label");

import { AppViewModel } from "./reddit-app-view-model";

var appViewModel = new AppViewModel();
let topmost;
let page;

export function pageLoaded(args: EventData) {
    // Get the event sender
    page = <Page>args.object;
    page.bindingContext = appViewModel;
    
    topmost = frameModule.topmost();

    // Enable platform specific feature (in this case Android page caching)
    if (topmost.android) {
        topmost.android.cachePagesOnNavigate = true;
    }
}

export function listViewLoadMoreItems(args: EventData) {
    console.log('loadMoreItems fired!')
    // Increase model items length with model items loadSize property value
    appViewModel.redditItems.length += appViewModel.redditItems.loadSize;
}

export function listViewItemTap(args: ListViewItemEventData) {
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