//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: "Gallery",

  props: {
    items: {
      required: true
    },
    width: {
      required: true
    },
    maxColumnWidth: {
      default: 200,
      type: Number
    }
  },
  computed: {
    columns: function columns() {
      var columns = Math.floor(this.width / this.maxColumnWidth);
      return columns > 0 ? columns : 1;
    },
    list: function list() {
      var this$1 = this;

      return this.items.reduce(function (columns, item, index) {
        var key = index % this$1.columns;
        columns[key] = columns[key] || [];
        columns[key].push(item);
        return columns;
      }, {});
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "flex -mx-1" },
    _vm._l(Object.keys(_vm.list), function(type) {
      return _c(
        "div",
        { key: type, staticClass: "flex-1" },
        _vm._l(_vm.list[type], function(item, index) {
          return _c(
            "div",
            { key: index, staticClass: "p-1 w-full" },
            [_vm._t("default", null, { item: item })],
            2
          )
        })
      )
    })
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\aminato\\js\\vue-gallery\\src\\Gallery.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component("gallery", component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default component;
export { install };
