"use strict";
var pagesModule = require("ui/page");
var buttonModule = require("ui/button");
var tabViewModule = require("ui/tab-view");
var navPageModule = require("../perf-tests/nav-page");
var frameModule = require("ui/frame");
var stackLayoutModule = require("ui/layouts/stack-layout");
var textViewModule = require("ui/text-view");
var colorModule = require("color");
function createPage() {
    var generateItems = function () {
        var items = [];
        var i = 0;
        var length = 20;
        for (i; i < length; i++) {
            var stackLayout = new stackLayoutModule.StackLayout();
            // First button
            var goToNextTabButton = new buttonModule.Button();
            stackLayout.addChild(goToNextTabButton);
            var nextIndex = i + 1;
            if (nextIndex < length) {
                goToNextTabButton.text = Math.random() + " Go to Tab " + nextIndex;
            }
            else {
                goToNextTabButton.text = "Rebind TabView";
            }
            var clickHandlerFactory = function (nextIndex, length) {
                return function () {
                    if (nextIndex < length) {
                        tabView.selectedIndex = nextIndex;
                    }
                    else {
                        tabView.items = generateItems();
                    }
                };
            };
            var clickHandler = clickHandlerFactory(nextIndex, length);
            goToNextTabButton.on(buttonModule.Button.tapEvent, clickHandler);
            // Second button
            var navigateToAnotherPageButton = new buttonModule.Button();
            navigateToAnotherPageButton.text = "Navigate to another page";
            stackLayout.addChild(navigateToAnotherPageButton);
            navigateToAnotherPageButton.on(buttonModule.Button.tapEvent, function () {
                var pageFactory = function () {
                    return new navPageModule.NavPage({
                        index: 0,
                        backStackVisible: true,
                        clearHistory: false,
                        animated: true,
                        transition: 0,
                        curve: 0,
                        duration: 0,
                    });
                };
                frameModule.topmost().navigate(pageFactory);
            });
            // TextView
            var textView1 = new textViewModule.TextView();
            textView1.editable = true;
            textView1.style.fontSize = 16;
            textView1.style.backgroundColor = new colorModule.Color("BlanchedAlmond");
            textView1.height = 150;
            var newLine = "\r\n";
            if (textView1.ios) {
                newLine = "\n";
            }
            textView1.text =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Morbi tempor gravida aliquet.";
            stackLayout.addChild(textView1);
            var textView2 = new textViewModule.TextView();
            textView2.editable = false;
            textView2.style.fontSize = 16;
            textView2.style.backgroundColor = new colorModule.Color("PaleGreen");
            textView2.height = 150;
            textView2.text =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus purus quis metus mattis euismod. Mauris ac purus commodo, sollicitudin tellus blandit, gravida turpis." + newLine +
                    "Proin dictum in sem at auctor." + newLine +
                    "Morbi porta ante sed nisi sagittis, vitae mollis augue lacinia." + newLine +
                    "Morbi tempor gravida aliquet.";
            stackLayout.addChild(textView2);
            var tabEntry = {
                title: "Tab " + i,
                view: stackLayout
            };
            items.push(tabEntry);
        }
        return items;
    };
    var tabView = new tabViewModule.TabView();
    tabView.items = generateItems();
    tabView.on("selectedIndexChanged", function (changedArgs) {
        console.log("tabView.selectedIndexChanged new: " + changedArgs.newIndex + " old: " + changedArgs.oldIndex);
    });
    tabView.on("propertyChange", function (changedArgs) {
        var args = changedArgs;
        console.log("tabView.propertyChange property: " + args.propertyName + " value:" + args.value);
    });
    var page = new pagesModule.Page();
    page.content = tabView;
    page.on("loaded", function () {
        if (frameModule.topmost().android) {
            frameModule.topmost().android.cachePagesOnNavigate = false;
        }
    });
    return page;
}
exports.createPage = createPage;
//export var Page = page; 
//# sourceMappingURL=main-page.js.map