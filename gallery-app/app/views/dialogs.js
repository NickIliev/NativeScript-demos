"use strict";
var dialogs = require("ui/dialogs");
function alertTapped(args) {
    dialogs.alert("Hi there!");
}
exports.alertTapped = alertTapped;
function alertWithOptionsTapped(args) {
    dialogs.alert({
        title: "Alert Title",
        message: "Hi there!",
        okButtonText: "Close"
    });
}
exports.alertWithOptionsTapped = alertWithOptionsTapped;
function alertWithNullTapped(args) {
    dialogs.alert(null);
}
exports.alertWithNullTapped = alertWithNullTapped;
function alertWithUndefinedTapped(args) {
    dialogs.alert(undefined);
}
exports.alertWithUndefinedTapped = alertWithUndefinedTapped;
function alertWithNumberTapped(args) {
    dialogs.alert(1);
}
exports.alertWithNumberTapped = alertWithNumberTapped;
function alertWithBooleanTapped(args) {
    dialogs.alert(false);
}
exports.alertWithBooleanTapped = alertWithBooleanTapped;
function alertWithFunctionTapped(args) {
    dialogs.alert(function () {
        //
    });
}
exports.alertWithFunctionTapped = alertWithFunctionTapped;
function alertWithObjectTapped(args) {
    dialogs.alert({});
}
exports.alertWithObjectTapped = alertWithObjectTapped;
function confirmTapped(args) {
    dialogs.confirm("Are you sure?").then(function (r) { return console.log("Confirm result: " + r); });
}
exports.confirmTapped = confirmTapped;
function confirmWithOptionsTapped(args) {
    dialogs.confirm({
        title: "Confirm Title",
        message: "Are you sure?",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore"
    }).then(function (r) { return console.log("Confirm result: " + r); });
}
exports.confirmWithOptionsTapped = confirmWithOptionsTapped;
function promptTapped(args) {
    dialogs.prompt("Enter name:", "John Doe");
}
exports.promptTapped = promptTapped;
function promptWithOptionsTapped(args) {
    dialogs.prompt({
        title: "Prompt Title",
        message: "Enter name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        defaultText: "John Doe",
        inputType: dialogs.inputType.text
    }).then(function (r) { return console.log("Prompt result: " + r.result + ", text: " + r.text); });
}
exports.promptWithOptionsTapped = promptWithOptionsTapped;
function promptWithOptionsPasswordTapped(args) {
    dialogs.prompt({
        title: "Prompt Title",
        message: "Enter name:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        defaultText: "John Doe",
        inputType: dialogs.inputType.password
    }).then(function (r) { return console.log("Prompt result: " + r.result + ", text: " + r.text); });
}
exports.promptWithOptionsPasswordTapped = promptWithOptionsPasswordTapped;
function loginTapped(args) {
    dialogs.login("Enter user/pass:", "username", "password").then(function (r) { return console.log("Login result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password); });
}
exports.loginTapped = loginTapped;
function loginWithOptionsTapped(args) {
    dialogs.login({
        title: "Login Title",
        message: "Enter user/pass:",
        okButtonText: "OK",
        cancelButtonText: "Cancel",
        neutralButtonText: "Ignore",
        userName: "username",
        password: "password"
    }).then(function (r) { return console.log("Login result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password); });
}
exports.loginWithOptionsTapped = loginWithOptionsTapped;
function actionTapped(args) {
    dialogs.action("Action", "Close", ["One", "Two", "Three"]).then(function (r) { return console.log("Action result: " + r); });
}
exports.actionTapped = actionTapped;
function actionWithOptionsTapped(args) {
    dialogs.action({
        title: "Action Title",
        message: "Action Message",
        cancelButtonText: "Close",
        actions: ["One", "Two", "Three"]
    }).then(function (r) { return console.log("Action result: " + r); });
}
exports.actionWithOptionsTapped = actionWithOptionsTapped;
//# sourceMappingURL=dialogs.js.map