import {Frame, topmost} from "ui/frame";

export function loaded(args) {
    console.log("+++Page 1 - LOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function unloaded(args) {
    console.log("+++Page 1 - UNLOADED");
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function navigatingTo(args) {
    console.log(`+++Page 1 - navigatingTo(isBack: ${args.isBackNavigation})`);
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function navigatedTo(args) {
    console.log(`+++Page 1 - navigatedTo(isBack: ${args.isBackNavigation})`);
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function navigatingFrom(args) {
    console.log(`+++Page 1 - navigatingFrom(isBack: ${args.isBackNavigation})`);
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function navigatedFrom(args) {
    console.log(`+++Page 1 - navigatedFrom(isBack: ${args.isBackNavigation})`);
    // console.log(`backStack.length=${topmost().backStack.length}`);
}

export function onTap(args) {
    let frame: Frame = args.object.page.frame;
    frame.navigate({
        moduleName: "secondary-page"
    });
    console.log(Array(30).join("-"));
}