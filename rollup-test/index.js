// 测试commonjs
//   "type": "commonjs", 需要改package.json
const utils = require('./dist/bundle.umd')

console.log('utils', utils.whoAmI)