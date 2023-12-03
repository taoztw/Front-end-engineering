# rollup

rollup 是一款小巧的javascript 模块打包工具，更适合于库应用的构建工具;可以将小块代码编译成
大块复杂的代码，基于 ES6 modules,它可以让你的 bundle 最小化，有效减少文件请求大小,vue 在
开发的时候用的是 webpack,但是最后将文件打包在一起的时候用的是 rollup.js.

## 打包格式
- amd – 异步模块定义，⽤于像 RequireJS 这样的模块加载器
- cjs – CommonJS，适⽤于 Node 和 Browserify/Webpack
- es – 将软件包保存为 ES 模块⽂件
- iife – ⼀个⾃动执⾏的功能，适合作为 <script> 标签。（如果要为应⽤程序创建⼀个捆绑包，您可能想要使⽤它，因为它会使⽂件⼤⼩变⼩。）
- umd – 通⽤模块定义，以 amd，cjs 和 iife 为⼀体


## 操作
npm init

在`package.json`中添加   "type": "module"

```bash
mkdir src
cd src
touch index.js
touch utils.js
```

```js
// index.js
import { whoAmI } from "./utils.js";

console.log(whoAmI)
```

```js
// utils.js
export const whoAmI = "I am utils"
```

```bash
npm i rollup 
./node_modules/.bin/rollup -i src/utils.js -o dist/bundle
.es.js -f es

# 需要-n指定 output name
./node_modules/.bin/rollup -i src/utils.js -o dist/bundle.umd.js -f umd -n utils
```

```javascript
// bundle.es.js
const whoAmI = "I am utils";

export { whoAmI };


//bundle.umd.js

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
})(this, (function (exports) { 'use strict';

	const whoAmI = "I am utils";

	exports.whoAmI = whoAmI;

}));


``` 