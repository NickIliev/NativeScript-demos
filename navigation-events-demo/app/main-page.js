"use strict";
function loaded(args) {
    console.log("+++Page 1 - LOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.loaded = loaded;
function unloaded(args) {
    console.log("+++Page 1 - UNLOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.unloaded = unloaded;
function navigatingTo(args) {
    console.log("+++Page 1 - navigatingTo(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatingTo = navigatingTo;
function navigatedTo(args) {
    console.log("+++Page 1 - navigatedTo(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatedTo = navigatedTo;
function navigatingFrom(args) {
    console.log("+++Page 1 - navigatingFrom(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatingFrom = navigatingFrom;
function navigatedFrom(args) {
    console.log("+++Page 1 - navigatedFrom(isBack: " + args.isBackNavigation + ")");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}
exports.navigatedFrom = navigatedFrom;
function onTap(args) {
    var frame = args.object.page.frame;
    frame.navigate({
        moduleName: "secondary-page"
    });
    console.log(Array(30).join("-"));
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map