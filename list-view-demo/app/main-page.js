"use strict";
var frame = require("ui/frame");
var observableArray = require("data/observable-array");
var loaded = 0;
var unloaded = 0;
var listView;
var textField;
function onNavigatedTo(args) {
    print();
}
exports.onNavigatedTo = onNavigatedTo;
function onTextFieldLoaded(args) {
    textField = args.object;
}
exports.onTextFieldLoaded = onTextFieldLoaded;
function onListViewLoaded(args) {
    listView = args.object;
    console.log("ListView LOADED.");
    print();
    onBind();
}
exports.onListViewLoaded = onListViewLoaded;
function onListViewUnloaded(args) {
    console.log("ListView UNLOADED.");
    print();
}
exports.onListViewUnloaded = onListViewUnloaded;
function onBind() {
    var length = textField.text;
    console.log("Bind to " + length + " items");
    var items = new observableArray.ObservableArray();
    var i = 0;
    for (; i < length; i++) {
        items.push("Item " + i);
    }
    listView.items = items;
    print();
}
exports.onBind = onBind;
function onAdd() {
    var length = textField.text;
    console.log("Add " + length + " items");
    var i = 0;
    for (; i < length; i++) {
        var newItem = "Item " + listView.items.length;
        listView.items.push(newItem);
    }
    print();
}
exports.onAdd = onAdd;
function onRemove(s) {
    var length = textField.text;
    console.log("Remove " + length + " items");
    var i = 0;
    for (; i < length; i++) {
        listView.items.splice(listView.items.length - 1);
    }
    print();
}
exports.onRemove = onRemove;
function onRefresh() {
    console.log("Refresh");
    listView.refresh();
    print();
}
exports.onRefresh = onRefresh;
function onNavigate() {
    console.log("Navigate");
    frame.topmost().navigate({ moduleName: "./another-page" });
    print();
}
exports.onNavigate = onNavigate;
function onViewLoaded(args) {
    loaded++;
    console.log(args.object.id + args.object._domId + " LOADED");
}
exports.onViewLoaded = onViewLoaded;
function onViewUnloaded(args) {
    unloaded++;
    console.log(args.object.id + args.object._domId + " UNLOADED");
}
exports.onViewUnloaded = onViewUnloaded;
function print() {
    console.log("L/U: " + loaded + "/" + unloaded);
}
exports.print = print;
//# sourceMappingURL=main-page.js.map