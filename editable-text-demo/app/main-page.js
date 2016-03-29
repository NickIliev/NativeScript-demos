"use strict";
var model = require("./model");
var colorModule = require("color");
var enums = require("ui/enums");
var stackLayout;
var textField;
var textView;
var button;
var label;
function onPageLoaded(args) {
    var page = args.object;
    stackLayout = page.getViewById("stack");
    button = page.getViewById("button");
    label = page.getViewById("label");
    if (stackLayout.android) {
        stackLayout.android.setClickable(true);
        stackLayout.android.setFocusableInTouchMode(true);
    }
    textField = page.getViewById("textField");
    textField.style.backgroundColor = new colorModule.Color("gray");
    textView = page.getViewById("textView");
    textView.style.backgroundColor = new colorModule.Color("BlanchedAlmond");
    var viewModel = new model.WebViewModel();
    page.bindingContext = viewModel;
}
exports.onPageLoaded = onPageLoaded;
function onTap(args) {
    if (textField.updateTextTrigger === enums.UpdateTextTrigger.focusLost) {
        textField.updateTextTrigger = enums.UpdateTextTrigger.textChanged;
        textView.updateTextTrigger = enums.UpdateTextTrigger.textChanged;
        button.text = "Tap to get input from textView";
        label.backgroundColor = new colorModule.Color('gray');
        label.text = textField.get('text');
    }
    else {
        textField.updateTextTrigger = enums.UpdateTextTrigger.focusLost;
        textView.updateTextTrigger = enums.UpdateTextTrigger.focusLost;
        button.text = "Tap to get input from textField";
        label.backgroundColor = new colorModule.Color('BlanchedAlmond');
        label.text = textView.get('text');
    }
}
exports.onTap = onTap;
//# sourceMappingURL=main-page.js.map