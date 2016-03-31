var observable = require("data/observable");
function pageLoaded(args) {
    var page = args.object;
    var emptyContext = new observable.Observable();
    page.bindingContext = emptyContext;
}
exports.pageLoaded = pageLoaded;
