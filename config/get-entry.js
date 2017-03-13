var htmlWebpackPlugin = require("html-webpack-plugin")
var path = require('path')

var entrys = {}, templates = {}
var base = path.resolve(__dirname, "../src/pages")

var pageData = {
  "detail": {
    "entry": base + "/detail/index.js",
    "template": base + "/detail/index.html"
  },
  "grant": {
    "entry": base + "/grant/index.js",
    "template": base + "/grant/index.html"
  },
  "list": {
    "entry": base + "/list/index.js",
    "template": base + "/list/index.html"
  },
  "reply": {
    "entry": base + "/reply/index.js",
    "template": base + "/reply/index.html"
  },
}

for (var v in pageData) {
  entrys[v] = pageData[v].entry

  templates[v] = pageData[v].template
}

/**
 * 批量设置plugins
 * @param  {[type]} entrys [description]
 * @param  {[type]} lang   [description]
 * @return {[type]}        [description]
 */
function multiPlugins(entrys){

  return function(){
    var htmlPlugins = []

  	for( v in entrys ){
  		htmlPlugins.push( new htmlWebpackPlugin({
  			title: v,
  			filename: v + ".html",
  			template: entrys[v],
        chunks: [v, 'commons'],
        hash: true,
        // minify: true
  		}) )
  	}

  	return htmlPlugins
  }

}

module.exports = {
  entrys: entrys,
  setMultiLangTemplates: multiPlugins( templates )
}
