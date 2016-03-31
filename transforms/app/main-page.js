"use strict";
var main_view_model_1 = require("./main-view-model");
var viewModel = new main_view_model_1.ViewModel();
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function onReset(args) {
    var model = args.object.bindingContext;
    model.reset();
}
exports.onReset = onReset;
//# sourceMappingURL=main-page.js.map