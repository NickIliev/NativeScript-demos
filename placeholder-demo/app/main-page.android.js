"use strict";
function creatingView(args) {
    var nativeView = new android.widget.TextView(args.context);
    nativeView.setText("Native");
    args.view = nativeView;
}
exports.creatingView = creatingView;
//# sourceMappingURL=main-page.android.js.map