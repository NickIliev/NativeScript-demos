"use strict";
var application = require("application");
var fps = require("fps-meter");
fps.addCallback(function (fps, minFps) {
    console.info("fps=" + fps + " minFps=" + minFps);
});
fps.start();
// Start the application
application.start({ moduleName: "main-page" });
//# sourceMappingURL=app.js.map