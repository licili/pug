let pug = require('pug');

let compileFunction = pug.compileFile('./template/1.pug');
console.log(compileFunction({
  name:'lici'
}));