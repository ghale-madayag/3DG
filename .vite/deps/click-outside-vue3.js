import {
  __commonJS
} from "./chunk-ROME4SDB.js";

// node_modules/click-outside-vue3/dist/v-click-outside.umd.js
var require_v_click_outside_umd = __commonJS({
  "node_modules/click-outside-vue3/dist/v-click-outside.umd.js"(exports, module) {
    !function(e, n) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e || self)["v-click-outside"] = n();
    }(exports, function() {
      var e = "__v-click-outside", n = "undefined" != typeof window, t = "undefined" != typeof navigator, r = n && ("ontouchstart" in window || t && navigator.msMaxTouchPoints > 0) ? ["touchstart"] : ["click"], i = function(e2) {
        var n2 = e2.event, t2 = e2.handler;
        (0, e2.middleware)(n2) && t2(n2);
      }, a = function(n2, t2) {
        var a2 = function(e2) {
          var n3 = "function" == typeof e2;
          if (!n3 && "object" != typeof e2)
            throw new Error("v-click-outside: Binding value must be a function or an object");
          return { handler: n3 ? e2 : e2.handler, middleware: e2.middleware || function(e3) {
            return e3;
          }, events: e2.events || r, isActive: !(false === e2.isActive), detectIframe: !(false === e2.detectIframe), capture: Boolean(e2.capture) };
        }(t2.value), o2 = a2.handler, d2 = a2.middleware, c = a2.detectIframe, u = a2.capture;
        if (a2.isActive) {
          if (n2[e] = a2.events.map(function(e2) {
            return { event: e2, srcTarget: document.documentElement, handler: function(e3) {
              return function(e4) {
                var n3 = e4.el, t3 = e4.event, r2 = e4.handler, a3 = e4.middleware, o3 = t3.path || t3.composedPath && t3.composedPath();
                (o3 ? o3.indexOf(n3) < 0 : !n3.contains(t3.target)) && i({ event: t3, handler: r2, middleware: a3 });
              }({ el: n2, event: e3, handler: o2, middleware: d2 });
            }, capture: u };
          }), c) {
            var l = { event: "blur", srcTarget: window, handler: function(e2) {
              return function(e3) {
                var n3 = e3.el, t3 = e3.event, r2 = e3.handler, a3 = e3.middleware;
                setTimeout(function() {
                  var e4 = document.activeElement;
                  e4 && "IFRAME" === e4.tagName && !n3.contains(e4) && i({ event: t3, handler: r2, middleware: a3 });
                }, 0);
              }({ el: n2, event: e2, handler: o2, middleware: d2 });
            }, capture: u };
            n2[e] = [].concat(n2[e], [l]);
          }
          n2[e].forEach(function(t3) {
            var r2 = t3.event, i2 = t3.srcTarget, a3 = t3.handler;
            return setTimeout(function() {
              n2[e] && i2.addEventListener(r2, a3, u);
            }, 0);
          });
        }
      }, o = function(n2) {
        (n2[e] || []).forEach(function(e2) {
          return e2.srcTarget.removeEventListener(e2.event, e2.handler, e2.capture);
        }), delete n2[e];
      }, d = n ? { beforeMount: a, updated: function(e2, n2) {
        var t2 = n2.value, r2 = n2.oldValue;
        JSON.stringify(t2) !== JSON.stringify(r2) && (o(e2), a(e2, { value: t2 }));
      }, unmounted: o } : {};
      return { install: function(e2) {
        e2.directive("click-outside", d);
      }, directive: d };
    });
  }
});
export default require_v_click_outside_umd();
//# sourceMappingURL=click-outside-vue3.js.map