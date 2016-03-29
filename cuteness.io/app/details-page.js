"use strict";
// Event handler for Page "navigatedTo" event attached in details-page.xml
function pageNavigatedTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = page.navigationContext;
}
exports.pageNavigatedTo = pageNavigatedTo;
//# sourceMappingURL=details-page.js.map