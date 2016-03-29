"use strict";
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        selectedIndex: 2
    };
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=list-picker.js.map