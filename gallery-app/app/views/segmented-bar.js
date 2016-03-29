var segmentedBarModule = require("ui/segmented-bar");
var pageModule = require("ui/page");
var colorModule = require("color");
var page;
var segmentedBar;

function onLoaded(args) {
    page = args.object;
    segmentedBar = page.getViewById("segmentedBar");
    
    var items = [];
    var item1 = new segmentedBarModule.SegmentedBarItem();
    item1.title = "Saturday";
    items.push(item1);
    var item2 = new segmentedBarModule.SegmentedBarItem();
    item2.title = "Sunday";
    items.push(item2);
    var item3 = new segmentedBarModule.SegmentedBarItem();
    item3.title = "Monday";
    items.push(item3);
    var item4 = new segmentedBarModule.SegmentedBarItem();
    item4.title = "Tuesday";
    items.push(item4);
    segmentedBar.items = items;
    segmentedBar.selectedBackgroundColor = new colorModule.Color("#CCCC33");
    segmentedBar.selectedIndex = 1;
}

exports.onLoaded = onLoaded;