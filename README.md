# digo-less
[digo](https://github.com/digojs/digo) 插件：使用 [lesscss](http://lesscss.org/usage/index.html) 编译 LESS。

## 安装
```bash
npm install digo-less -g
```

## 用法
### 编译 LESS 并重命名为 CSS
```js
digo.src("*.less").pipe("digo-less");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js
digo.src("*.less").pipe("digo-less", {
    env: "development",             // 当前生成环境。"development":开发环境；"production"：生产环境。
    logLevel: 2,                    // 日志等级。0：不打印日志；1：仅打印错误；2：打印错误和信息。
    async: false,                   // 是否异步加载文件。[1]
    sourceMap: true,                // 是否生成源映射。[1]
    filename: "",                   // 源文件名。[1]
    paths: [],                      // 解析 @import 的全局搜索路径。 
    syncImport: true ,              // 是否同步载入导入文件。[1]
    relativeUrls: true,             // 是否将地址作为相对地址处理。[1]
    compress: false,                // 是否压缩代码。[1]
    fileAsync: false,               // 是否异步加载文件。[1]
    poll: 1000,                     // 监听模式下的轮询等待毫秒数。
    functions: {},                  // 在 Less 内可以直接用法的自定义函数。
    dumpLineNumbers: null,          // 是否输出行号。"comments"：生成包含行号信息的注释。
    globalVars: { },                // 在 Less 内可以直接用法的全局变量。如 { var1: '"string value"'}。
    rootpath: null,                 // 内部地址用法的跟路径。如 "http://a.com/"。
    useFileCache: true,             // 是否允许缓存已解析的文件。
    modifyVars: { },                // 强制覆盖 Less 内部定义的全局变量。如 { var1: '"string value"'}。
    errorReporting: "console",      // 报告错误的方式。"console"：在控制台打印。
});
```

> [1]: 插件内部已重设了此选项的默认值。

另参考: [http://lesscss.org/usage/index.html](http://lesscss.org/usage/index.html)。
