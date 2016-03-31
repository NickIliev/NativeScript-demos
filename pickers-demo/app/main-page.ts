import observableModule = require("data/observable");
import pagesModule = require("ui/page");
import model = require("./view-model");
import labelModule = require("ui/label");
import listPickerModule = require("ui/list-picker");
import datePickerModule = require("ui/date-picker");
import timePickerModule = require("ui/time-picker");

var viewModel: model.WebViewModel;
var page: pagesModule.Page;
var label: labelModule.Label;
var listPicker: listPickerModule.ListPicker;
var datePicker: datePickerModule.DatePicker;
var timePicker: timePickerModule.TimePicker;

export function onPageLoaded(args: observableModule.EventData) {
    viewModel = new model.WebViewModel();
    page = <pagesModule.Page>args.object;
    page.bindingContext = viewModel;

    label = <labelModule.Label>page.getViewById("label");
    listPicker = <listPickerModule.ListPicker>page.getViewById("listPicker");
    datePicker = <datePickerModule.DatePicker>page.getViewById("datePicker");
    timePicker = <timePickerModule.TimePicker>page.getViewById("timePicker");

    viewModel.items = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    viewModel.selectedIndex = 5;

    viewModel.day = 9;
    viewModel.month = 2;
    viewModel.year = 1980;

    viewModel.hour = 17;
    viewModel.minute = 50;
}

export function onTap(args: observableModule.EventData) {
    console.log("onTap");

    viewModel.items = ["Male", "Female"];
    viewModel.selectedIndex = 1;

    viewModel.day = viewModel.day + 1;
    viewModel.month = viewModel.month + 1;
    viewModel.year = viewModel.year + 1;

    viewModel.hour = viewModel.hour + 1;
    viewModel.minute = viewModel.minute + 1;
}