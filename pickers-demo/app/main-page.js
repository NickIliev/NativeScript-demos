"use strict";
var model = require("./view-model");
var viewModel;
var page;
var label;
var listPicker;
var datePicker;
var timePicker;
function onPageLoaded(args) {
    viewModel = new model.WebViewModel();
    page = args.object;
    page.bindingContext = viewModel;
    label = page.getViewById("label");
    listPicker = page.getViewById("listPicker");
    datePicker = page.getViewById("datePicker");
    timePicker = page.getViewById("timePicker");
    viewModel.items = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    viewModel.selectedIndex = 5;
    viewModel.day = 9;
    viewModel.month = 2;
    viewModel.year = 1980;
    viewModel.hour = 17;
    viewModel.minute = 50;
}
exports.onPageLoaded = onPageLoaded;
function onTap(args) {
    console.log("onTap");
    viewModel.items = ["Male", "Female"];
    viewModel.selectedIndex = 1;
    viewModel.day = viewModel.day + 1;
    viewModel.month = viewModel.month + 1;
    viewModel.year = viewModel.year + 1;
    viewModel.hour = viewModel.hour + 1;
    viewModel.minute = viewModel.minute + 1;
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map