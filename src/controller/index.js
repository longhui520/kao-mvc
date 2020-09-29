// const glob = require("glob")
// const path = require("path")

// const controllerPath = new Map()
// const controllerClass = new Map()

// class ControllerLoader {
//   constructor(){

//   }
//   loadFiles(target){
//     return glob.sync(target)
//   }
//   getClass(){
    
//   }
// }
// var c = new ControllerLoader();
// console.log(c.loadFiles(__dirname));
const debug = require("debug")("koa-mvc")
debug('loading item 11');
const assert = require("assert")
const b = assert(2>5,'出错 了')

const deprecate = require('depd')('koa-mvc');
deprecate("已经废弃了")