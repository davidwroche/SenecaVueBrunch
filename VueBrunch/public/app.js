(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    return aliases[name] ? expandAlias(aliases[name]) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("App.vue", function(exports, require, module) {
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _red = require('./components/red.vue');

var _red2 = _interopRequireDefault(_red);

var _blue = require('./components/blue.vue');

var _blue2 = _interopRequireDefault(_blue);

var _green = require('./components/green.vue');

var _green2 = _interopRequireDefault(_green);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        redsection: _red2.default,
        bluesection: _blue2.default,
        greensection: _green2.default
    }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"header"},[_c('redsection'),_vm._v(" "),_c('bluesection'),_vm._v(" "),_c('greensection')],1)])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e015f16", __vue__options__)
  } else {
    hotAPI.reload("data-v-2e015f16", __vue__options__)
  }
})()}
});

;require.register("components/babyblue.vue", function(exports, require, module) {
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: ['res'],

  data: function data() {
    return {
      total: 0
    };
  },

  watch: {
    res: function res(newVal) {
      this.total += Number(newVal);
    }
  }

};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"second"}},[_c('h2',[_vm._v("BabyBlue")]),_vm._v(" "),_c('h5',[_vm._v("Prop Value")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.res))]),_vm._v(" "),_c('h5',[_vm._v("Total")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.total))])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-be37b906"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be37b906", __vue__options__)
  } else {
    hotAPI.reload("data-v-be37b906", __vue__options__)
  }
})()}
});

;require.register("components/blue.vue", function(exports, require, module) {
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _babyblue = require('./babyblue.vue');

var _babyblue2 = _interopRequireDefault(_babyblue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    babybluesection: _babyblue2.default
  },

  data: function data() {
    return {
      res: ''
    };
  },
  mounted: function mounted() {
    var blue = this;
    var seneca = this.$root.$options.seneca;
    seneca.add('cm:blue', function (msg, reply) {
      blue.res = msg.res.x;
      reply();
    });
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"second"}},[_c('h2',[_vm._v("Blue")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.res))]),_vm._v(" "),_c('babybluesection',{attrs:{"res":_vm.res}})],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-142af727", __vue__options__)
  } else {
    hotAPI.reload("data-v-142af727", __vue__options__)
  }
})()}
});

;require.register("components/green.vue", function(exports, require, module) {
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      show: ''
    };
  },
  mounted: function mounted() {
    var green = this;
    var seneca = this.$root.$options.seneca;
    seneca.add('ann:show', function (msg, reply) {
      green.show = msg.show;

      reply();
    });
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"third"}},[_c('h2',[_vm._v("Green")]),_vm._v(" "),_c('p',[_c('i',[_vm._v(_vm._s(_vm.show))])])])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ad29d86", __vue__options__)
  } else {
    hotAPI.reload("data-v-7ad29d86", __vue__options__)
  }
})()}
});

;require.register("components/red.vue", function(exports, require, module) {
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            msg: 'a:1,x:3'
        };
    },

    methods: {

        act: function act() {
            var seneca = this.$root.$options.seneca;
            seneca.act(this.msg, function (err, out) {
                this.act({
                    cm: 'blue',
                    res: out
                });
            });
        },

        show: function show() {
            var seneca = this.$root.$options.seneca;
            seneca.act({
                ann: 'show',
                show: this.msg
            });
        }
    }

};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"first"}},[_c('h1',[_vm._v("Red")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.msg),expression:"msg"}],domProps:{"value":(_vm.msg)},on:{"input":function($event){if($event.target.composing){ return; }_vm.msg=$event.target.value}}}),_vm._v(" "),_c('button',{on:{"click":_vm.act}},[_vm._v("Act")]),_vm._v(" "),_c('button',{on:{"click":_vm.show}},[_vm._v("Show")])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-10846ed4"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10846ed4", __vue__options__)
  } else {
    hotAPI.reload("data-v-10846ed4", __vue__options__)
  }
})()}
});

;require.register("index.js", function(exports, require, module) {
'use strict';

require('vueify/lib/insert-css');

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _routes = require('./router/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var seneca;
seneca = Seneca().test('print').client({ type: 'browser', pin: 'a:*' }).client({ type: 'browser', pin: 'b:*' });

var router = new _vueRouter2.default({
    routes: _routes.routes,
    mode: 'history'
});

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(seneca);

/* eslint-disable no-new */
var app = new _vue2.default({
    router: router,
    seneca: seneca,
    render: function render(h) {
        return h(_App2.default);
    }
});

app.$mount('#app');

//console.log(app)
//console.log(seneca)

});

;require.register("router/routes.js", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _red = require('.././components/red.vue');

var _red2 = _interopRequireDefault(_red);

var _blue = require('.././components/blue.vue');

var _blue2 = _interopRequireDefault(_blue);

var _green = require('.././components/green.vue');

var _green2 = _interopRequireDefault(_green);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = [{ path: '/red', component: _red2.default }, { path: '/blue', component: _blue2.default }, { path: '/green', component: _green2.default }];

});

require.alias("process/browser.js", "process");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map