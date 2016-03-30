"use strict";
function loaded(args) {
    console.log("+++Page 2 - LOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.loaded = loaded;
function unloaded(args) {
    console.log("+++Page 2 - UNLOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.unloaded = unloaded;
function navigatingTo(args) {
    console.log("+++Page 2 - navigatingTo(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatingTo = navigatingTo;
function navigatedTo(args) {
    console.log("+++Page 2 - navigatedTo(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatedTo = navigatedTo;
function navigatingFrom(args) {
    console.log("+++Page 2 - navigatingFrom(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatingFrom = navigatingFrom;
function navigatedFrom(args) {
    console.log("+++Page 2 - navigatedFrom(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatedFrom = navigatedFrom;
function onTap(args) {
    var frame = args.object.page.frame;
    frame.goBack();
    console.log(Array(35).join("-"));
}
exports.onTap = onTap;
//# sourceMappingURL=secondary-page.js.map