import {
  require_vue
} from "./chunk-JJBVQGNJ.js";
import "./chunk-PITVOLMA.js";
import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js
var require_ckeditor = __commonJS({
  "node_modules/@ckeditor/ckeditor5-vue/dist/ckeditor.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(require_vue()) : "function" == typeof define && define.amd ? define(["vue"], e) : "object" == typeof exports ? exports.CKEditor = e(require_vue()) : t.CKEditor = e(t.Vue);
    }(self, (t) => (() => {
      "use strict";
      var e = { 976: (e2) => {
        e2.exports = t;
      } }, n = {};
      function o(t2) {
        var i2 = n[t2];
        if (void 0 !== i2)
          return i2.exports;
        var r = n[t2] = { exports: {} };
        return e[t2](r, r.exports, o), r.exports;
      }
      o.d = (t2, e2) => {
        for (var n2 in e2)
          o.o(e2, n2) && !o.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
      }, o.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var i = {};
      return (() => {
        o.d(i, { default: () => R });
        var t2 = o(976);
        const e2 = function(t3) {
          var e3 = typeof t3;
          return null != t3 && ("object" == e3 || "function" == e3);
        };
        const n2 = "object" == typeof global && global && global.Object === Object && global;
        var r = "object" == typeof self && self && self.Object === Object && self;
        const a = n2 || r || Function("return this")();
        const s = function() {
          return a.Date.now();
        };
        var u = /\s/;
        const l = function(t3) {
          for (var e3 = t3.length; e3-- && u.test(t3.charAt(e3)); )
            ;
          return e3;
        };
        var c = /^\s+/;
        const d = function(t3) {
          return t3 ? t3.slice(0, l(t3) + 1).replace(c, "") : t3;
        };
        const f = a.Symbol;
        var p = Object.prototype, m = p.hasOwnProperty, h = p.toString, v = f ? f.toStringTag : void 0;
        const b = function(t3) {
          var e3 = m.call(t3, v), n3 = t3[v];
          try {
            t3[v] = void 0;
            var o2 = true;
          } catch (t4) {
          }
          var i2 = h.call(t3);
          return o2 && (e3 ? t3[v] = n3 : delete t3[v]), i2;
        };
        var y = Object.prototype.toString;
        const g = function(t3) {
          return y.call(t3);
        };
        var j = f ? f.toStringTag : void 0;
        const w = function(t3) {
          return null == t3 ? void 0 === t3 ? "[object Undefined]" : "[object Null]" : j && j in Object(t3) ? b(t3) : g(t3);
        };
        const O = function(t3) {
          return null != t3 && "object" == typeof t3;
        };
        const E = function(t3) {
          return "symbol" == typeof t3 || O(t3) && "[object Symbol]" == w(t3);
        };
        var T = /^[-+]0x[0-9a-f]+$/i, x = /^0b[01]+$/i, V = /^0o[0-7]+$/i, S = parseInt;
        const C = function(t3) {
          if ("number" == typeof t3)
            return t3;
          if (E(t3))
            return NaN;
          if (e2(t3)) {
            var n3 = "function" == typeof t3.valueOf ? t3.valueOf() : t3;
            t3 = e2(n3) ? n3 + "" : n3;
          }
          if ("string" != typeof t3)
            return 0 === t3 ? t3 : +t3;
          t3 = d(t3);
          var o2 = x.test(t3);
          return o2 || V.test(t3) ? S(t3.slice(2), o2 ? 2 : 8) : T.test(t3) ? NaN : +t3;
        };
        var D = Math.max, N = Math.min;
        const $ = function(t3, n3, o2) {
          var i2, r2, a2, u2, l2, c2, d2 = 0, f2 = false, p2 = false, m2 = true;
          if ("function" != typeof t3)
            throw new TypeError("Expected a function");
          function h2(e3) {
            var n4 = i2, o3 = r2;
            return i2 = r2 = void 0, d2 = e3, u2 = t3.apply(o3, n4);
          }
          function v2(t4) {
            return d2 = t4, l2 = setTimeout(y2, n3), f2 ? h2(t4) : u2;
          }
          function b2(t4) {
            var e3 = t4 - c2;
            return void 0 === c2 || e3 >= n3 || e3 < 0 || p2 && t4 - d2 >= a2;
          }
          function y2() {
            var t4 = s();
            if (b2(t4))
              return g2(t4);
            l2 = setTimeout(y2, function(t5) {
              var e3 = n3 - (t5 - c2);
              return p2 ? N(e3, a2 - (t5 - d2)) : e3;
            }(t4));
          }
          function g2(t4) {
            return l2 = void 0, m2 && i2 ? h2(t4) : (i2 = r2 = void 0, u2);
          }
          function j2() {
            var t4 = s(), e3 = b2(t4);
            if (i2 = arguments, r2 = this, c2 = t4, e3) {
              if (void 0 === l2)
                return v2(c2);
              if (p2)
                return clearTimeout(l2), l2 = setTimeout(y2, n3), h2(c2);
            }
            return void 0 === l2 && (l2 = setTimeout(y2, n3)), u2;
          }
          return n3 = C(n3) || 0, e2(o2) && (f2 = !!o2.leading, a2 = (p2 = "maxWait" in o2) ? D(C(o2.maxWait) || 0, n3) : a2, m2 = "trailing" in o2 ? !!o2.trailing : m2), j2.cancel = function() {
            void 0 !== l2 && clearTimeout(l2), d2 = 0, i2 = c2 = r2 = l2 = void 0;
          }, j2.flush = function() {
            return void 0 === l2 ? u2 : g2(s());
          }, j2;
        }, I = (0, t2.defineComponent)({ name: "Ckeditor", model: { prop: "modelValue", event: "update:modelValue" }, props: { editor: { type: Function, required: true }, config: { type: Object, default: () => ({}) }, modelValue: { type: String, default: "" }, tagName: { type: String, default: "div" }, disabled: { type: Boolean, default: false }, disableTwoWayDataBinding: { type: Boolean, default: false } }, emits: ["ready", "destroy", "blur", "focus", "input", "update:modelValue"], data: () => ({ instance: null, lastEditorData: null }), watch: { modelValue(t3) {
          this.instance && t3 !== this.lastEditorData && this.instance.data.set(t3);
        }, disabled(t3) {
          t3 ? this.instance.enableReadOnlyMode("Integration Sample") : this.instance.disableReadOnlyMode("Integration Sample");
        } }, created() {
          const { CKEDITOR_VERSION: t3 } = window;
          if (t3) {
            const [e3] = t3.split(".").map(Number);
            e3 < 37 && console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.");
          } else
            console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.');
        }, mounted() {
          const e3 = Object.assign({}, this.config);
          this.modelValue && (e3.initialData = this.modelValue), this.editor.create(this.$el, e3).then((n3) => {
            this.instance = (0, t2.markRaw)(n3), this.setUpEditorEvents(), this.modelValue !== e3.initialData && n3.data.set(this.modelValue), this.disabled && n3.enableReadOnlyMode("Integration Sample"), this.$emit("ready", n3);
          }).catch((t3) => {
            console.error(t3);
          });
        }, beforeUnmount() {
          this.instance && (this.instance.destroy(), this.instance = null), this.$emit("destroy", this.instance);
        }, methods: { setUpEditorEvents() {
          const t3 = this.instance, e3 = $((e4) => {
            if (this.disableTwoWayDataBinding)
              return;
            const n3 = this.lastEditorData = t3.data.get();
            this.$emit("update:modelValue", n3, e4, t3), this.$emit("input", n3, e4, t3);
          }, 300, { leading: true });
          t3.model.document.on("change:data", e3), t3.editing.view.document.on("focus", (e4) => {
            this.$emit("focus", e4, t3);
          }), t3.editing.view.document.on("blur", (e4) => {
            this.$emit("blur", e4, t3);
          });
        } }, render() {
          return (0, t2.h)(this.tagName);
        } });
        if (!t2.version || !t2.version.startsWith("3."))
          throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");
        const R = { install(t3) {
          t3.component("Ckeditor", I);
        }, component: I };
      })(), i = i.default;
    })());
  }
});
export default require_ckeditor();
/*! Bundled license information:

@ckeditor/ckeditor5-vue/dist/ckeditor.js:
  (*!
   * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
   * For licensing, see LICENSE.md.
   *)
*/
//# sourceMappingURL=@ckeditor_ckeditor5-vue.js.map