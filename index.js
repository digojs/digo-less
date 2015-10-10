var less = require("less");

module.exports = function Less(file, options, done) {

    // 设置默认值。
    options = Object.assign({
        async: true,
        fileAsync: true,
        syncImport: true,
        filename: file.srcPath,
        sourceMap: file.sourceMap,
        relativeUrls: true,
        compress: false
    }, options);

    // 更改扩展名。
    file.ext = ".css";

    // 设置报告器。
    var listeners = {
        debug: function (msg) { file.log(msg, require("digo").LogLevel.verbose); },
        info: function (msg) { file.log(msg, require("digo").LogLevel.info); },
        warn: function (msg) { file.warning(msg); },
        error: function (msg) { file.error(msg); }
    };
    less.logger.addListener(listeners);

    // 生成。
    less.render(file.content, options, function (e, result) {
        less.logger.removeListener(listeners);
        if (e) {
            file.error({
                plugin: Less.name,
                error: e,
                message: e.message,
                fileName: e.filename,
                line: e.line - 1,
                column: e.column
            });
            return done();
        }
        file.content = result.css;
        if (result.map) {
            file.applySourceMap(result.map);
        }
        file.dep(result.imports, {
            plugin: Less.name,
            type: "@import"
        });
        done();
    });

};
