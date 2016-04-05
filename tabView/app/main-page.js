"use strict";
var observable_1 = require("data/observable");
var main_view_model_1 = require("./main-view-model");
var viewModel = new main_view_model_1.HelloWorldModel();
;
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    var person = new observable_1.Observable({
        name: 'John Smith',
        age: 18
    });
    viewModel.set('name', person.name);
    viewModel.set('age', person.age);
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=main-page.js.map