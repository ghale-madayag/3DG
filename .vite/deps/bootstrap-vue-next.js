import "./chunk-ROZAZUS7.js";
import {
  Fragment,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  customRef,
  defineComponent,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onActivated,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toRef,
  toValue,
  unref,
  useAttrs,
  useSlots,
  vModelCheckbox,
  vModelRadio,
  vModelSelect,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-PITVOLMA.js";
import "./chunk-ROME4SDB.js";

// node_modules/bootstrap-vue-next/dist/bootstrap-vue-next.mjs
var Hn = Object.defineProperty;
var zn = (e, t, o) => t in e ? Hn(e, t, { enumerable: true, configurable: true, writable: true, value: o }) : e[t] = o;
var De = (e, t, o) => (zn(e, typeof t != "symbol" ? t + "" : t, o), o);
var dt = class _dt {
  constructor(t, o = {}) {
    De(this, "cancelable", true);
    De(this, "componentId", null);
    De(this, "_defaultPrevented", false);
    De(this, "eventType", "");
    De(this, "nativeEvent", null);
    De(this, "_preventDefault");
    De(this, "relatedTarget", null);
    De(this, "target", null);
    if (!t)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, _dt.Defaults, o, { eventType: t }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = true);
    };
  }
  // Readable by everyone,
  // But only overwritten by inherrited constructors
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(t) {
    this._defaultPrevented = t;
  }
  // I think this is right
  // We want to be able to have it callable to everyone,
  // But only overwritten by inherrited constructors
  get preventDefault() {
    return this._preventDefault;
  }
  // This may not be correct, because it doesn't get correct type inferences in children
  // Ex overwrite this.preventDefault = () => true is valid. Could be a TS issue
  set preventDefault(t) {
    this._preventDefault = t;
  }
  static get Defaults() {
    return {
      cancelable: true,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
};
var Rt = class extends dt {
  constructor(o, a = {}) {
    super(o, a);
    De(this, "trigger", null);
    Object.assign(this, dt.Defaults, a, { eventType: o });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null
    };
  }
};
var ll = class extends dt {
  constructor(o, a) {
    super(o, a);
    De(this, "from");
    De(this, "to");
    De(this, "direction");
    Object.assign(this, dt.Defaults, a, { eventType: o });
    const { from: l, direction: n, to: i } = a;
    this.from = l, this.to = i, this.direction = n;
  }
  static get Defaults() {
    return {
      ...super.Defaults
    };
  }
};
var nl = /_/g;
var sl = /([a-z])([A-Z])/g;
var Xn = /(\s|^)(\w)/g;
var Kn = /(\s|^)(\w)/;
var sa = /\s+/;
var Yn = /^#/;
var Zn = /^#[A-Za-z]+[\w\-:.]*$/;
var Jn = /-u-.+/;
var Qn = /[-/\\^$*+?.()|[\]{}]/g;
var es = /[\s\uFEFF\xA0]+/g;
var ca = (e, t = 2) => typeof e == "string" ? e : e == null ? "" : Array.isArray(e) || Object.prototype.toString.call(e) === "[object Object]" && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e);
var _a = (e) => e.replace(nl, " ").replace(sl, (t, o, a) => `${o} ${a}`).replace(Kn, (t, o, a) => o + a.toUpperCase());
var bo = (e) => e.replace(nl, " ").replace(sl, (t, o, a) => `${o} ${a}`).replace(Xn, (t, o, a) => o + a.toUpperCase());
var ts = (e) => {
  const t = e.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var as = (e) => e.replace(Qn, "\\$&");
var os = (e) => as(e).replace(es, "\\s");
var Va = (e) => `\\${e}`;
var ls = (e) => {
  const t = ca(e), { length: o } = t, a = t.charCodeAt(0);
  return t.split("").reduce((l, n, i) => {
    const s = t.charCodeAt(i);
    return s === 0 ? `${l}�` : (
      // ... is U+007F OR
      s === 127 || // ... is in the range [\1-\1F] (U+0001 to U+001F) OR ...
      s >= 1 && s <= 31 || // ... is the first character and is in the range [0-9] (U+0030 to U+0039) OR ...
      i === 0 && s >= 48 && s <= 57 || // ... is the second character and is in the range [0-9] (U+0030 to U+0039)
      // and the first character is a `-` (U+002D) ...
      i === 1 && s >= 48 && s <= 57 && a === 45 ? l + Va(`${s.toString(16)} `) : (
        // ... is the first character AND ...
        i === 0 && // ... is a `-` (U+002D) AND ...
        s === 45 && // ... there is no second character ...
        o === 1 ? l + Va(n) : (
          // ... is greater than or equal to U+0080 OR ...
          s >= 128 || // ... is `-` (U+002D) OR ...
          s === 45 || // ... is `_` (U+005F) OR ...
          s === 95 || // ... is in the range [0-9] (U+0030 to U+0039) OR ...
          s >= 48 && s <= 57 || // ... is in the range [A-Z] (U+0041 to U+005A) OR ...
          s >= 65 && s <= 90 || // ... is in the range [a-z] (U+0061 to U+007A) ...
          s >= 97 && s <= 122 ? l + n : l + Va(n)
        )
      )
    );
  }, "");
};
var il = typeof window < "u";
var rl = typeof document < "u";
var ns = typeof Element < "u";
var ss = typeof navigator < "u";
var is = il && rl && ss;
var _t = il ? window : {};
var Xa = rl ? document : {};
(() => {
  let e = false;
  if (!is)
    return e;
  try {
    const t = {
      // This function will be called when the browser
      // attempts to access the passive property
      get passive() {
        return e = true, e;
      }
    };
    "addEventListener" in _t && typeof _t.addEventListener == "function" && _t.addEventListener("test", t, t), "removeEventListener" in _t && typeof _t.removeEventListener == "function" && _t.removeEventListener("test", t, t);
  } catch {
    e = false;
  }
})();
var ul = typeof window < "u";
var rs = typeof document < "u";
var us = typeof navigator < "u";
var Ka = ul && rs && us;
var yo = ul ? window : {};
var ds = (() => {
  let e = false;
  if (Ka)
    try {
      const t = {
        // This function will be called when the browser
        // attempts to access the passive property
        get passive() {
          e = true;
        }
      };
      yo.addEventListener("test", t, t), yo.removeEventListener("test", t, t);
    } catch {
      e = false;
    }
  return e;
})();
var Aa = ns ? Element.prototype : void 0;
var ot = (e) => !!(e && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE);
var cs = (e) => ot(e) ? e.getBoundingClientRect() : null;
var fs = (e = []) => {
  const { activeElement: t } = document;
  return t && !e.some((o) => o === t) ? t : null;
};
var vs = (e) => ot(e) && e === fs();
var ps = (e, t = {}) => {
  try {
    e.focus(t);
  } catch (o) {
    console.error(o);
  }
  return vs(e);
};
var ms = (e, t) => t && ot(e) && e.getAttribute(t) || null;
var gs = (e) => {
  if (ms(e, "display") === "none")
    return false;
  const t = cs(e);
  return !!(t && t.height > 0 && t.width > 0);
};
var Ie = (e) => ((e == null ? void 0 : e()) ?? []).length === 0;
var dl = (e, t) => (ot(t) ? t : Xa).querySelector(e) || null;
var bs = (e, t) => Array.from([(ot(t) ? t : Xa).querySelectorAll(e)]);
var Ya = (e, t) => t && ot(e) ? e.getAttribute(t) : null;
var ys = (e) => Xa.getElementById(/^#/.test(e) ? e.slice(1) : e) || null;
var hs = (e, t, o) => {
  t && ot(e) && e.setAttribute(t, o);
};
var Bs = (e, t) => {
  t && ot(e) && e.removeAttribute(t);
};
var Ss = (e, t) => ca(e).toLowerCase() === ca(t).toLowerCase();
var Cs = (e, t) => ot(e) ? e.matches(t) : false;
var ws = (Aa == null ? void 0 : Aa.closest) || function(e) {
  let t = this;
  if (!t)
    return null;
  do {
    if (ot(t) && t.matches(e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === Node.ELEMENT_NODE);
  return null;
};
var ho = (e, t, o = false) => {
  if (!ot(t))
    return null;
  const a = ws.call(t, e);
  return o ? a : a === t ? null : a;
};
var La = (e) => {
  const t = window.getComputedStyle(e), o = t.transitionDelay.split(",")[0] || "", a = t.transitionDuration.split(",")[0] || "", l = Number(o.slice(0, -1)) * 1e3, n = Number(a.slice(0, -1)) * 1e3;
  return l + n;
};
var ks = ["TD", "TH", "TR"];
var $s = [
  "a",
  "a *",
  // Include content inside links
  "button",
  "button *",
  // Include content inside buttons
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(",");
var ea = (e) => {
  if (!e || !e.target)
    return false;
  const t = e.target;
  if ("disabled" in t && t.disabled || ks.indexOf(t.tagName) !== -1)
    return false;
  if (ho(".dropdown-menu", t))
    return true;
  const o = t.tagName === "LABEL" ? t : ho("label", t);
  if (o) {
    const a = Ya(o, "for"), l = a ? ys(a) : dl("input, select, textarea", o);
    if (l && !l.disabled)
      return true;
  }
  return Cs(t, $s);
};
var cl = ["top", "right", "bottom", "left"];
var Bo = ["start", "end"];
var So = cl.reduce((e, t) => e.concat(t, t + "-" + Bo[0], t + "-" + Bo[1]), []);
var et = Math.min;
var Fe = Math.max;
var fa = Math.round;
var ta = Math.floor;
var mt = (e) => ({
  x: e,
  y: e
});
var Ts = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var _s = {
  start: "end",
  end: "start"
};
function Fa(e, t, o) {
  return Fe(e, et(t, o));
}
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ye(e) {
  return e.split("-")[0];
}
function Je(e) {
  return e.split("-")[1];
}
function fl(e) {
  return e === "x" ? "y" : "x";
}
function Za(e) {
  return e === "y" ? "height" : "width";
}
function xt(e) {
  return ["top", "bottom"].includes(Ye(e)) ? "y" : "x";
}
function Ja(e) {
  return fl(xt(e));
}
function vl(e, t, o) {
  o === void 0 && (o = false);
  const a = Je(e), l = Ja(e), n = Za(l);
  let i = l === "x" ? a === (o ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (i = pa(i)), [i, pa(i)];
}
function Vs(e) {
  const t = pa(e);
  return [va(e), t, va(t)];
}
function va(e) {
  return e.replace(/start|end/g, (t) => _s[t]);
}
function As(e, t, o) {
  const a = ["left", "right"], l = ["right", "left"], n = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? l : a : t ? a : l;
    case "left":
    case "right":
      return t ? n : i;
    default:
      return [];
  }
}
function Os(e, t, o, a) {
  const l = Je(e);
  let n = As(Ye(e), o === "start", a);
  return l && (n = n.map((i) => i + "-" + l), t && (n = n.concat(n.map(va)))), n;
}
function pa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ts[t]);
}
function Es(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qa(e) {
  return typeof e != "number" ? Es(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function It(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Co(e, t, o) {
  let {
    reference: a,
    floating: l
  } = e;
  const n = xt(t), i = Ja(t), s = Za(i), u = Ye(t), d = n === "y", f = a.x + a.width / 2 - l.width / 2, g = a.y + a.height / 2 - l.height / 2, p = a[s] / 2 - l[s] / 2;
  let y;
  switch (u) {
    case "top":
      y = {
        x: f,
        y: a.y - l.height
      };
      break;
    case "bottom":
      y = {
        x: f,
        y: a.y + a.height
      };
      break;
    case "right":
      y = {
        x: a.x + a.width,
        y: g
      };
      break;
    case "left":
      y = {
        x: a.x - l.width,
        y: g
      };
      break;
    default:
      y = {
        x: a.x,
        y: a.y
      };
  }
  switch (Je(t)) {
    case "start":
      y[i] -= p * (o && d ? -1 : 1);
      break;
    case "end":
      y[i] += p * (o && d ? -1 : 1);
      break;
  }
  return y;
}
var Ps = async (e, t, o) => {
  const {
    placement: a = "bottom",
    strategy: l = "absolute",
    middleware: n = [],
    platform: i
  } = o, s = n.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: l
  }), {
    x: f,
    y: g
  } = Co(d, a, u), p = a, y = {}, b = 0;
  for (let V = 0; V < s.length; V++) {
    const {
      name: C,
      fn: c
    } = s[V], {
      x: h2,
      y: B,
      data: _,
      reset: k
    } = await c({
      x: f,
      y: g,
      initialPlacement: a,
      placement: p,
      strategy: l,
      middlewareData: y,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (f = h2 ?? f, g = B ?? g, y = {
      ...y,
      [C]: {
        ...y[C],
        ..._
      }
    }, k && b <= 50) {
      b++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (d = k.rects === true ? await i.getElementRects({
        reference: e,
        floating: t,
        strategy: l
      }) : k.rects), {
        x: f,
        y: g
      } = Co(d, p, u)), V = -1;
      continue;
    }
  }
  return {
    x: f,
    y: g,
    placement: p,
    strategy: l,
    middlewareData: y
  };
};
async function Lt(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: a,
    y: l,
    platform: n,
    rects: i,
    elements: s,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: g = "floating",
    altBoundary: p = false,
    padding: y = 0
  } = ft(t, e), b = Qa(y), C = s[p ? g === "floating" ? "reference" : "floating" : g], c = It(await n.getClippingRect({
    element: (o = await (n.isElement == null ? void 0 : n.isElement(C))) == null || o ? C : C.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: u
  })), h2 = g === "floating" ? {
    ...i.floating,
    x: a,
    y: l
  } : i.reference, B = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), _ = await (n.isElement == null ? void 0 : n.isElement(B)) ? await (n.getScale == null ? void 0 : n.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = It(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: h2,
    offsetParent: B,
    strategy: u
  }) : h2);
  return {
    top: (c.top - k.top + b.top) / _.y,
    bottom: (k.bottom - c.bottom + b.bottom) / _.y,
    left: (c.left - k.left + b.left) / _.x,
    right: (k.right - c.right + b.right) / _.x
  };
}
var Ns = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: a,
      placement: l,
      rects: n,
      platform: i,
      elements: s,
      middlewareData: u
    } = t, {
      element: d,
      padding: f = 0
    } = ft(e, t) || {};
    if (d == null)
      return {};
    const g = Qa(f), p = {
      x: o,
      y: a
    }, y = Ja(l), b = Za(y), V = await i.getDimensions(d), C = y === "y", c = C ? "top" : "left", h2 = C ? "bottom" : "right", B = C ? "clientHeight" : "clientWidth", _ = n.reference[b] + n.reference[y] - p[y] - n.floating[b], k = p[y] - n.reference[y], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let $ = S ? S[B] : 0;
    (!$ || !await (i.isElement == null ? void 0 : i.isElement(S))) && ($ = s.floating[B] || n.floating[b]);
    const I = _ / 2 - k / 2, T = $ / 2 - V[b] / 2 - 1, O = et(g[c], T), F = et(g[h2], T), K = O, z = $ - V[b] - F, P = $ / 2 - V[b] / 2 + I, D = Fa(K, P, z), ae = !u.arrow && Je(l) != null && P != D && n.reference[b] / 2 - (P < K ? O : F) - V[b] / 2 < 0, le = ae ? P < K ? P - K : P - z : 0;
    return {
      [y]: p[y] + le,
      data: {
        [y]: D,
        centerOffset: P - D - le,
        ...ae && {
          alignmentOffset: le
        }
      },
      reset: ae
    };
  }
});
function Is(e, t, o) {
  return (e ? [...o.filter((l) => Je(l) === e), ...o.filter((l) => Je(l) !== e)] : o.filter((l) => Ye(l) === l)).filter((l) => e ? Je(l) === e || (t ? va(l) !== l : false) : true);
}
var Ls = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var o, a, l;
      const {
        rects: n,
        middlewareData: i,
        placement: s,
        platform: u,
        elements: d
      } = t, {
        crossAxis: f = false,
        alignment: g,
        allowedPlacements: p = So,
        autoAlignment: y = true,
        ...b
      } = ft(e, t), V = g !== void 0 || p === So ? Is(g || null, y, p) : p, C = await Lt(t, b), c = ((o = i.autoPlacement) == null ? void 0 : o.index) || 0, h2 = V[c];
      if (h2 == null)
        return {};
      const B = vl(h2, n, await (u.isRTL == null ? void 0 : u.isRTL(d.floating)));
      if (s !== h2)
        return {
          reset: {
            placement: V[0]
          }
        };
      const _ = [C[Ye(h2)], C[B[0]], C[B[1]]], k = [...((a = i.autoPlacement) == null ? void 0 : a.overflows) || [], {
        placement: h2,
        overflows: _
      }], S = V[c + 1];
      if (S)
        return {
          data: {
            index: c + 1,
            overflows: k
          },
          reset: {
            placement: S
          }
        };
      const $ = k.map((O) => {
        const F = Je(O.placement);
        return [O.placement, F && f ? (
          // Check along the mainAxis and main crossAxis side.
          O.overflows.slice(0, 2).reduce((K, z) => K + z, 0)
        ) : (
          // Check only the mainAxis.
          O.overflows[0]
        ), O.overflows];
      }).sort((O, F) => O[1] - F[1]), T = ((l = $.filter((O) => O[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Je(O[0]) ? 2 : 3
      ).every((F) => F <= 0))[0]) == null ? void 0 : l[0]) || $[0][0];
      return T !== s ? {
        data: {
          index: c + 1,
          overflows: k
        },
        reset: {
          placement: T
        }
      } : {};
    }
  };
};
var pl = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, a;
      const {
        placement: l,
        middlewareData: n,
        rects: i,
        initialPlacement: s,
        platform: u,
        elements: d
      } = t, {
        mainAxis: f = true,
        crossAxis: g = true,
        fallbackPlacements: p,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: V = true,
        ...C
      } = ft(e, t);
      if ((o = n.arrow) != null && o.alignmentOffset)
        return {};
      const c = Ye(l), h2 = Ye(s) === s, B = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), _ = p || (h2 || !V ? [pa(s)] : Vs(s));
      !p && b !== "none" && _.push(...Os(s, V, b, B));
      const k = [s, ..._], S = await Lt(t, C), $ = [];
      let I = ((a = n.flip) == null ? void 0 : a.overflows) || [];
      if (f && $.push(S[c]), g) {
        const K = vl(l, i, B);
        $.push(S[K[0]], S[K[1]]);
      }
      if (I = [...I, {
        placement: l,
        overflows: $
      }], !$.every((K) => K <= 0)) {
        var T, O;
        const K = (((T = n.flip) == null ? void 0 : T.index) || 0) + 1, z = k[K];
        if (z)
          return {
            data: {
              index: K,
              overflows: I
            },
            reset: {
              placement: z
            }
          };
        let P = (O = I.filter((D) => D.overflows[0] <= 0).sort((D, ae) => D.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!P)
          switch (y) {
            case "bestFit": {
              var F;
              const D = (F = I.map((ae) => [ae.placement, ae.overflows.filter((le) => le > 0).reduce((le, ve) => le + ve, 0)]).sort((ae, le) => ae[1] - le[1])[0]) == null ? void 0 : F[0];
              D && (P = D);
              break;
            }
            case "initialPlacement":
              P = s;
              break;
          }
        if (l !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function wo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ko(e) {
  return cl.some((t) => e[t] >= 0);
}
var Fs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: a = "referenceHidden",
        ...l
      } = ft(e, t);
      switch (a) {
        case "referenceHidden": {
          const n = await Lt(t, {
            ...l,
            elementContext: "reference"
          }), i = wo(n, o.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ko(i)
            }
          };
        }
        case "escaped": {
          const n = await Lt(t, {
            ...l,
            altBoundary: true
          }), i = wo(n, o.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ko(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function ml(e) {
  const t = et(...e.map((n) => n.left)), o = et(...e.map((n) => n.top)), a = Fe(...e.map((n) => n.right)), l = Fe(...e.map((n) => n.bottom));
  return {
    x: t,
    y: o,
    width: a - t,
    height: l - o
  };
}
function Hs(e) {
  const t = e.slice().sort((l, n) => l.y - n.y), o = [];
  let a = null;
  for (let l = 0; l < t.length; l++) {
    const n = t[l];
    !a || n.y - a.y > a.height / 2 ? o.push([n]) : o[o.length - 1].push(n), a = n;
  }
  return o.map((l) => It(ml(l)));
}
var zs = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: o,
        elements: a,
        rects: l,
        platform: n,
        strategy: i
      } = t, {
        padding: s = 2,
        x: u,
        y: d
      } = ft(e, t), f = Array.from(await (n.getClientRects == null ? void 0 : n.getClientRects(a.reference)) || []), g = Hs(f), p = It(ml(f)), y = Qa(s);
      function b() {
        if (g.length === 2 && g[0].left > g[1].right && u != null && d != null)
          return g.find((C) => u > C.left - y.left && u < C.right + y.right && d > C.top - y.top && d < C.bottom + y.bottom) || p;
        if (g.length >= 2) {
          if (xt(o) === "y") {
            const O = g[0], F = g[g.length - 1], K = Ye(o) === "top", z = O.top, P = F.bottom, D = K ? O.left : F.left, ae = K ? O.right : F.right, le = ae - D, ve = P - z;
            return {
              top: z,
              bottom: P,
              left: D,
              right: ae,
              width: le,
              height: ve,
              x: D,
              y: z
            };
          }
          const C = Ye(o) === "left", c = Fe(...g.map((O) => O.right)), h2 = et(...g.map((O) => O.left)), B = g.filter((O) => C ? O.left === h2 : O.right === c), _ = B[0].top, k = B[B.length - 1].bottom, S = h2, $ = c, I = $ - S, T = k - _;
          return {
            top: _,
            bottom: k,
            left: S,
            right: $,
            width: I,
            height: T,
            x: S,
            y: _
          };
        }
        return p;
      }
      const V = await n.getElementRects({
        reference: {
          getBoundingClientRect: b
        },
        floating: a.floating,
        strategy: i
      });
      return l.reference.x !== V.reference.x || l.reference.y !== V.reference.y || l.reference.width !== V.reference.width || l.reference.height !== V.reference.height ? {
        reset: {
          rects: V
        }
      } : {};
    }
  };
};
async function Rs(e, t) {
  const {
    placement: o,
    platform: a,
    elements: l
  } = e, n = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), i = Ye(o), s = Je(o), u = xt(o) === "y", d = ["left", "top"].includes(i) ? -1 : 1, f = n && u ? -1 : 1, g = ft(t, e);
  let {
    mainAxis: p,
    crossAxis: y,
    alignmentAxis: b
  } = typeof g == "number" ? {
    mainAxis: g,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...g
  };
  return s && typeof b == "number" && (y = s === "end" ? b * -1 : b), u ? {
    x: y * f,
    y: p * d
  } : {
    x: p * d,
    y: y * f
  };
}
var gl = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: a
      } = t, l = await Rs(t, e);
      return {
        x: o + l.x,
        y: a + l.y,
        data: l
      };
    }
  };
};
var bl = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: a,
        placement: l
      } = t, {
        mainAxis: n = true,
        crossAxis: i = false,
        limiter: s = {
          fn: (C) => {
            let {
              x: c,
              y: h2
            } = C;
            return {
              x: c,
              y: h2
            };
          }
        },
        ...u
      } = ft(e, t), d = {
        x: o,
        y: a
      }, f = await Lt(t, u), g = xt(Ye(l)), p = fl(g);
      let y = d[p], b = d[g];
      if (n) {
        const C = p === "y" ? "top" : "left", c = p === "y" ? "bottom" : "right", h2 = y + f[C], B = y - f[c];
        y = Fa(h2, y, B);
      }
      if (i) {
        const C = g === "y" ? "top" : "left", c = g === "y" ? "bottom" : "right", h2 = b + f[C], B = b - f[c];
        b = Fa(h2, b, B);
      }
      const V = s.fn({
        ...t,
        [p]: y,
        [g]: b
      });
      return {
        ...V,
        data: {
          x: V.x - o,
          y: V.y - a
        }
      };
    }
  };
};
var yl = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: a,
        platform: l,
        elements: n
      } = t, {
        apply: i = () => {
        },
        ...s
      } = ft(e, t), u = await Lt(t, s), d = Ye(o), f = Je(o), g = xt(o) === "y", {
        width: p,
        height: y
      } = a.floating;
      let b, V;
      d === "top" || d === "bottom" ? (b = d, V = f === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (V = d, b = f === "end" ? "top" : "bottom");
      const C = y - u[b], c = p - u[V], h2 = !t.middlewareData.shift;
      let B = C, _ = c;
      if (g) {
        const S = p - u.left - u.right;
        _ = f || h2 ? et(c, S) : S;
      } else {
        const S = y - u.top - u.bottom;
        B = f || h2 ? et(C, S) : S;
      }
      if (h2 && !f) {
        const S = Fe(u.left, 0), $ = Fe(u.right, 0), I = Fe(u.top, 0), T = Fe(u.bottom, 0);
        g ? _ = p - 2 * (S !== 0 || $ !== 0 ? S + $ : Fe(u.left, u.right)) : B = y - 2 * (I !== 0 || T !== 0 ? I + T : Fe(u.top, u.bottom));
      }
      await i({
        ...t,
        availableWidth: _,
        availableHeight: B
      });
      const k = await l.getDimensions(n.floating);
      return p !== k.width || y !== k.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function gt(e) {
  return hl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function vt(e) {
  var t;
  return (t = (hl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hl(e) {
  return e instanceof Node || e instanceof We(e).Node;
}
function ct(e) {
  return e instanceof Element || e instanceof We(e).Element;
}
function nt(e) {
  return e instanceof HTMLElement || e instanceof We(e).HTMLElement;
}
function $o(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Yt(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: a,
    display: l
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + o) && !["inline", "contents"].includes(l);
}
function xs(e) {
  return ["table", "td", "th"].includes(gt(e));
}
function eo(e) {
  const t = to(), o = Ze(e);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : false) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : false) || !t && (o.filter ? o.filter !== "none" : false) || ["transform", "perspective", "filter"].some((a) => (o.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (o.contain || "").includes(a));
}
function Ms(e) {
  let t = Ft(e);
  for (; nt(t) && !Ba(t); ) {
    if (eo(t))
      return t;
    t = Ft(t);
  }
  return null;
}
function to() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ba(e) {
  return ["html", "body", "#document"].includes(gt(e));
}
function Ze(e) {
  return We(e).getComputedStyle(e);
}
function Sa(e) {
  return ct(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Ft(e) {
  if (gt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $o(e) && e.host || // Fallback.
    vt(e)
  );
  return $o(t) ? t.host : t;
}
function Bl(e) {
  const t = Ft(e);
  return Ba(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nt(t) && Yt(t) ? t : Bl(t);
}
function Wt(e, t, o) {
  var a;
  t === void 0 && (t = []), o === void 0 && (o = true);
  const l = Bl(e), n = l === ((a = e.ownerDocument) == null ? void 0 : a.body), i = We(l);
  return n ? t.concat(i, i.visualViewport || [], Yt(l) ? l : [], i.frameElement && o ? Wt(i.frameElement) : []) : t.concat(l, Wt(l, [], o));
}
function Sl(e) {
  const t = Ze(e);
  let o = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const l = nt(e), n = l ? e.offsetWidth : o, i = l ? e.offsetHeight : a, s = fa(o) !== n || fa(a) !== i;
  return s && (o = n, a = i), {
    width: o,
    height: a,
    $: s
  };
}
function ao(e) {
  return ct(e) ? e : e.contextElement;
}
function Pt(e) {
  const t = ao(e);
  if (!nt(t))
    return mt(1);
  const o = t.getBoundingClientRect(), {
    width: a,
    height: l,
    $: n
  } = Sl(t);
  let i = (n ? fa(o.width) : o.width) / a, s = (n ? fa(o.height) : o.height) / l;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
var Ds = mt(0);
function Cl(e) {
  const t = We(e);
  return !to() || !t.visualViewport ? Ds : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function js(e, t, o) {
  return t === void 0 && (t = false), !o || t && o !== We(e) ? false : t;
}
function St(e, t, o, a) {
  t === void 0 && (t = false), o === void 0 && (o = false);
  const l = e.getBoundingClientRect(), n = ao(e);
  let i = mt(1);
  t && (a ? ct(a) && (i = Pt(a)) : i = Pt(e));
  const s = js(n, o, a) ? Cl(n) : mt(0);
  let u = (l.left + s.x) / i.x, d = (l.top + s.y) / i.y, f = l.width / i.x, g = l.height / i.y;
  if (n) {
    const p = We(n), y = a && ct(a) ? We(a) : a;
    let b = p.frameElement;
    for (; b && a && y !== p; ) {
      const V = Pt(b), C = b.getBoundingClientRect(), c = Ze(b), h2 = C.left + (b.clientLeft + parseFloat(c.paddingLeft)) * V.x, B = C.top + (b.clientTop + parseFloat(c.paddingTop)) * V.y;
      u *= V.x, d *= V.y, f *= V.x, g *= V.y, u += h2, d += B, b = We(b).frameElement;
    }
  }
  return It({
    width: f,
    height: g,
    x: u,
    y: d
  });
}
function qs(e) {
  let {
    rect: t,
    offsetParent: o,
    strategy: a
  } = e;
  const l = nt(o), n = vt(o);
  if (o === n)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = mt(1);
  const u = mt(0);
  if ((l || !l && a !== "fixed") && ((gt(o) !== "body" || Yt(n)) && (i = Sa(o)), nt(o))) {
    const d = St(o);
    s = Pt(o), u.x = d.x + o.clientLeft, u.y = d.y + o.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - i.scrollLeft * s.x + u.x,
    y: t.y * s.y - i.scrollTop * s.y + u.y
  };
}
function Gs(e) {
  return Array.from(e.getClientRects());
}
function wl(e) {
  return St(vt(e)).left + Sa(e).scrollLeft;
}
function Ws(e) {
  const t = vt(e), o = Sa(e), a = e.ownerDocument.body, l = Fe(t.scrollWidth, t.clientWidth, a.scrollWidth, a.clientWidth), n = Fe(t.scrollHeight, t.clientHeight, a.scrollHeight, a.clientHeight);
  let i = -o.scrollLeft + wl(e);
  const s = -o.scrollTop;
  return Ze(a).direction === "rtl" && (i += Fe(t.clientWidth, a.clientWidth) - l), {
    width: l,
    height: n,
    x: i,
    y: s
  };
}
function Us(e, t) {
  const o = We(e), a = vt(e), l = o.visualViewport;
  let n = a.clientWidth, i = a.clientHeight, s = 0, u = 0;
  if (l) {
    n = l.width, i = l.height;
    const d = to();
    (!d || d && t === "fixed") && (s = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: n,
    height: i,
    x: s,
    y: u
  };
}
function Xs(e, t) {
  const o = St(e, true, t === "fixed"), a = o.top + e.clientTop, l = o.left + e.clientLeft, n = nt(e) ? Pt(e) : mt(1), i = e.clientWidth * n.x, s = e.clientHeight * n.y, u = l * n.x, d = a * n.y;
  return {
    width: i,
    height: s,
    x: u,
    y: d
  };
}
function To(e, t, o) {
  let a;
  if (t === "viewport")
    a = Us(e, o);
  else if (t === "document")
    a = Ws(vt(e));
  else if (ct(t))
    a = Xs(t, o);
  else {
    const l = Cl(e);
    a = {
      ...t,
      x: t.x - l.x,
      y: t.y - l.y
    };
  }
  return It(a);
}
function kl(e, t) {
  const o = Ft(e);
  return o === t || !ct(o) || Ba(o) ? false : Ze(o).position === "fixed" || kl(o, t);
}
function Ks(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let a = Wt(e, [], false).filter((s) => ct(s) && gt(s) !== "body"), l = null;
  const n = Ze(e).position === "fixed";
  let i = n ? Ft(e) : e;
  for (; ct(i) && !Ba(i); ) {
    const s = Ze(i), u = eo(i);
    !u && s.position === "fixed" && (l = null), (n ? !u && !l : !u && s.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || Yt(i) && !u && kl(e, i)) ? a = a.filter((f) => f !== i) : l = s, i = Ft(i);
  }
  return t.set(e, a), a;
}
function Ys(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: a,
    strategy: l
  } = e;
  const i = [...o === "clippingAncestors" ? Ks(t, this._c) : [].concat(o), a], s = i[0], u = i.reduce((d, f) => {
    const g = To(t, f, l);
    return d.top = Fe(g.top, d.top), d.right = et(g.right, d.right), d.bottom = et(g.bottom, d.bottom), d.left = Fe(g.left, d.left), d;
  }, To(t, s, l));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Zs(e) {
  return Sl(e);
}
function Js(e, t, o) {
  const a = nt(t), l = vt(t), n = o === "fixed", i = St(e, true, n, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = mt(0);
  if (a || !a && !n)
    if ((gt(t) !== "body" || Yt(l)) && (s = Sa(t)), a) {
      const d = St(t, true, n, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      l && (u.x = wl(l));
  return {
    x: i.left + s.scrollLeft - u.x,
    y: i.top + s.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function _o(e, t) {
  return !nt(e) || Ze(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $l(e, t) {
  const o = We(e);
  if (!nt(e))
    return o;
  let a = _o(e, t);
  for (; a && xs(a) && Ze(a).position === "static"; )
    a = _o(a, t);
  return a && (gt(a) === "html" || gt(a) === "body" && Ze(a).position === "static" && !eo(a)) ? o : a || Ms(e) || o;
}
var Qs = async function(e) {
  let {
    reference: t,
    floating: o,
    strategy: a
  } = e;
  const l = this.getOffsetParent || $l, n = this.getDimensions;
  return {
    reference: Js(t, await l(o), a),
    floating: {
      x: 0,
      y: 0,
      ...await n(o)
    }
  };
};
function ei(e) {
  return Ze(e).direction === "rtl";
}
var ti = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qs,
  getDocumentElement: vt,
  getClippingRect: Ys,
  getOffsetParent: $l,
  getElementRects: Qs,
  getClientRects: Gs,
  getDimensions: Zs,
  getScale: Pt,
  isElement: ct,
  isRTL: ei
};
function ai(e, t) {
  let o = null, a;
  const l = vt(e);
  function n() {
    clearTimeout(a), o && o.disconnect(), o = null;
  }
  function i(s, u) {
    s === void 0 && (s = false), u === void 0 && (u = 1), n();
    const {
      left: d,
      top: f,
      width: g,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !g || !p)
      return;
    const y = ta(f), b = ta(l.clientWidth - (d + g)), V = ta(l.clientHeight - (f + p)), C = ta(d), h2 = {
      rootMargin: -y + "px " + -b + "px " + -V + "px " + -C + "px",
      threshold: Fe(0, et(1, u)) || 1
    };
    let B = true;
    function _(k) {
      const S = k[0].intersectionRatio;
      if (S !== u) {
        if (!B)
          return i();
        S ? i(false, S) : a = setTimeout(() => {
          i(false, 1e-7);
        }, 100);
      }
      B = false;
    }
    try {
      o = new IntersectionObserver(_, {
        ...h2,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(_, h2);
    }
    o.observe(e);
  }
  return i(true), n;
}
function Tl(e, t, o, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: l = true,
    ancestorResize: n = true,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = false
  } = a, d = ao(e), f = l || n ? [...d ? Wt(d) : [], ...Wt(t)] : [];
  f.forEach((c) => {
    l && c.addEventListener("scroll", o, {
      passive: true
    }), n && c.addEventListener("resize", o);
  });
  const g = d && s ? ai(d, o) : null;
  let p = -1, y = null;
  i && (y = new ResizeObserver((c) => {
    let [h2] = c;
    h2 && h2.target === d && y && (y.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      y && y.observe(t);
    })), o();
  }), d && !u && y.observe(d), y.observe(t));
  let b, V = u ? St(e) : null;
  u && C();
  function C() {
    const c = St(e);
    V && (c.x !== V.x || c.y !== V.y || c.width !== V.width || c.height !== V.height) && o(), V = c, b = requestAnimationFrame(C);
  }
  return o(), () => {
    f.forEach((c) => {
      l && c.removeEventListener("scroll", o), n && c.removeEventListener("resize", o);
    }), g && g(), y && y.disconnect(), y = null, u && cancelAnimationFrame(b);
  };
}
var oi = (e, t, o) => {
  const a = /* @__PURE__ */ new Map(), l = {
    platform: ti,
    ...o
  }, n = {
    ...l.platform,
    _c: a
  };
  return Ps(e, t, {
    ...l,
    platform: n
  });
};
function Ha(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function li(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = Ha(unref(e.element));
      return o == null ? {} : Ns({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function _l(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vo(e, t) {
  const o = _l(e);
  return Math.round(t * o) / o;
}
function Vl(e, t, o) {
  o === void 0 && (o = {});
  const a = o.whileElementsMounted, l = computed(() => {
    var $;
    return ($ = unref(o.open)) != null ? $ : true;
  }), n = computed(() => unref(o.middleware)), i = computed(() => {
    var $;
    return ($ = unref(o.placement)) != null ? $ : "bottom";
  }), s = computed(() => {
    var $;
    return ($ = unref(o.strategy)) != null ? $ : "absolute";
  }), u = computed(() => {
    var $;
    return ($ = unref(o.transform)) != null ? $ : true;
  }), d = computed(() => Ha(e.value)), f = computed(() => Ha(t.value)), g = ref(0), p = ref(0), y = ref(s.value), b = ref(i.value), V = shallowRef({}), C = ref(false), c = computed(() => {
    const $ = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return $;
    const I = Vo(f.value, g.value), T = Vo(f.value, p.value);
    return u.value ? {
      ...$,
      transform: "translate(" + I + "px, " + T + "px)",
      ..._l(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: I + "px",
      top: T + "px"
    };
  });
  let h2;
  function B() {
    d.value == null || f.value == null || oi(d.value, f.value, {
      middleware: n.value,
      placement: i.value,
      strategy: s.value
    }).then(($) => {
      g.value = $.x, p.value = $.y, y.value = $.strategy, b.value = $.placement, V.value = $.middlewareData, C.value = true;
    });
  }
  function _() {
    typeof h2 == "function" && (h2(), h2 = void 0);
  }
  function k() {
    if (_(), a === void 0) {
      B();
      return;
    }
    if (d.value != null && f.value != null) {
      h2 = a(d.value, f.value, B);
      return;
    }
  }
  function S() {
    l.value || (C.value = false);
  }
  return watch([n, i, s], B, {
    flush: "sync"
  }), watch([d, f], k, {
    flush: "sync"
  }), watch(l, S, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(_), {
    x: shallowReadonly(g),
    y: shallowReadonly(p),
    strategy: shallowReadonly(y),
    placement: shallowReadonly(b),
    middlewareData: shallowReadonly(V),
    isPositioned: shallowReadonly(C),
    floatingStyles: c,
    update: B
  };
}
var ni = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]);
var si = /^aria-[\w-]*$/i;
var ii = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
var ri = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var ui = (e, t) => {
  const o = e.nodeName.toLowerCase();
  return t.includes(o) ? ni.has(o) ? !!(ii.test(e.nodeValue || "") || ri.test(e.nodeValue || "")) : true : t.filter((a) => a instanceof RegExp).some((a) => a.test(o));
};
var At = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", si],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
var Ot = (e, t, o) => {
  if (!e.length)
    return e;
  if (o && typeof o == "function")
    return o(e);
  const l = new window.DOMParser().parseFromString(e, "text/html"), n = l.body.querySelectorAll("*");
  for (const i of n) {
    const s = i.nodeName.toLowerCase();
    if (!Object.keys(t).includes(s)) {
      i.remove();
      continue;
    }
    const u = i.attributes, d = [...t["*"] || [], ...t[s] || []];
    for (const f of u)
      ui(f, d) || i.removeAttribute(f.nodeName);
  }
  return l.body.innerHTML;
};
function bt(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function Al(e) {
  let t = false, o;
  const a = effectScope(true);
  return (...l) => (t || (o = a.run(() => e(...l)), t = true), o);
}
function di(e) {
  let t = 0, o, a;
  const l = () => {
    t -= 1, a && t <= 0 && (a.stop(), o = void 0, a = void 0);
  };
  return (...n) => (t += 1, o || (a = effectScope(true), o = a.run(() => e(...n))), bt(l), o);
}
function Ke(e) {
  return typeof e == "function" ? e() : unref(e);
}
var ma = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ci = (e) => typeof e < "u";
var fi = Object.prototype.toString;
var vi = (e) => fi.call(e) === "[object Object]";
var yt = () => {
};
var za = pi();
function pi() {
  var e;
  return ma && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Ol(e, t) {
  function o(...a) {
    return new Promise((l, n) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(l).catch(n);
    });
  }
  return o;
}
var El = (e) => e();
function mi(e, t = {}) {
  let o, a, l = yt;
  const n = (s) => {
    clearTimeout(s), l(), l = yt;
  };
  return (s) => {
    const u = Ke(e), d = Ke(t.maxWait);
    return o && n(o), u <= 0 || d !== void 0 && d <= 0 ? (a && (n(a), a = null), Promise.resolve(s())) : new Promise((f, g) => {
      l = t.rejectOnCancel ? g : f, d && !a && (a = setTimeout(() => {
        o && n(o), a = null, f(s());
      }, d)), o = setTimeout(() => {
        a && n(a), a = null, f(s());
      }, u);
    });
  };
}
function gi(e = El) {
  const t = ref(true);
  function o() {
    t.value = false;
  }
  function a() {
    t.value = true;
  }
  const l = (...n) => {
    t.value && e(...n);
  };
  return { isActive: readonly(t), pause: o, resume: a, eventFilter: l };
}
function Pl(...e) {
  if (e.length !== 1)
    return toRef(...e);
  const t = e[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: yt }))) : ref(t);
}
function bi(e, t = 200, o = {}) {
  return Ol(
    mi(t, o),
    e
  );
}
function yi(e, t, o = {}) {
  const {
    eventFilter: a = El,
    ...l
  } = o;
  return watch(
    e,
    Ol(
      a,
      t
    ),
    l
  );
}
function hi(e, t, o = {}) {
  const {
    eventFilter: a,
    ...l
  } = o, { eventFilter: n, pause: i, resume: s, isActive: u } = gi(a);
  return { stop: yi(
    e,
    t,
    {
      ...l,
      eventFilter: n
    }
  ), pause: i, resume: s, isActive: u };
}
function Nl(e, t = true) {
  getCurrentInstance() ? onMounted(e) : t ? e() : nextTick(e);
}
function Il(e, t = 1e3, o = {}) {
  const {
    immediate: a = true,
    immediateCallback: l = false
  } = o;
  let n = null;
  const i = ref(false);
  function s() {
    n && (clearInterval(n), n = null);
  }
  function u() {
    i.value = false, s();
  }
  function d() {
    const f = Ke(t);
    f <= 0 || (i.value = true, l && e(), s(), n = setInterval(e, f));
  }
  if (a && ma && d(), isRef(t) || typeof t == "function") {
    const f = watch(t, () => {
      i.value && ma && d();
    });
    bt(f);
  }
  return bt(u), {
    isActive: i,
    pause: u,
    resume: d
  };
}
function he(e, t = {}) {
  const {
    method: o = "parseFloat",
    radix: a,
    nanToZero: l
  } = t;
  return computed(() => {
    let n = Ke(e);
    return typeof n == "string" && (n = Number[o](n, a)), l && Number.isNaN(n) && (n = 0), n;
  });
}
function ut(e) {
  var t;
  const o = Ke(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
var tt = ma ? window : void 0;
function Oe(...e) {
  let t, o, a, l;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, a, l] = e, t = tt) : [t, o, a, l] = e, !t)
    return yt;
  Array.isArray(o) || (o = [o]), Array.isArray(a) || (a = [a]);
  const n = [], i = () => {
    n.forEach((f) => f()), n.length = 0;
  }, s = (f, g, p, y) => (f.addEventListener(g, p, y), () => f.removeEventListener(g, p, y)), u = watch(
    () => [ut(t), Ke(l)],
    ([f, g]) => {
      if (i(), !f)
        return;
      const p = vi(g) ? { ...g } : g;
      n.push(
        ...o.flatMap((y) => a.map((b) => s(f, y, b, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), i();
  };
  return bt(d), d;
}
var Ao = false;
function Ll(e, t, o = {}) {
  const { window: a = tt, ignore: l = [], capture: n = true, detectIframe: i = false } = o;
  if (!a)
    return;
  za && !Ao && (Ao = true, Array.from(a.document.body.children).forEach((p) => p.addEventListener("click", yt)), a.document.documentElement.addEventListener("click", yt));
  let s = true;
  const u = (p) => l.some((y) => {
    if (typeof y == "string")
      return Array.from(a.document.querySelectorAll(y)).some((b) => b === p.target || p.composedPath().includes(b));
    {
      const b = ut(y);
      return b && (p.target === b || p.composedPath().includes(b));
    }
  }), f = [
    Oe(a, "click", (p) => {
      const y = ut(e);
      if (!(!y || y === p.target || p.composedPath().includes(y))) {
        if (p.detail === 0 && (s = !u(p)), !s) {
          s = true;
          return;
        }
        t(p);
      }
    }, { passive: true, capture: n }),
    Oe(a, "pointerdown", (p) => {
      const y = ut(e);
      s = !u(p) && !!(y && !p.composedPath().includes(y));
    }, { passive: true }),
    i && Oe(a, "blur", (p) => {
      setTimeout(() => {
        var y;
        const b = ut(e);
        ((y = a.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(b != null && b.contains(a.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function Bi(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => true;
}
function qe(...e) {
  let t, o, a = {};
  e.length === 3 ? (t = e[0], o = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = true, o = e[0], a = e[1]) : (t = e[0], o = e[1]) : (t = true, o = e[0]);
  const {
    target: l = tt,
    eventName: n = "keydown",
    passive: i = false,
    dedupe: s = false
  } = a, u = Bi(t);
  return Oe(l, n, (f) => {
    f.repeat && Ke(s) || u(f) && o(f);
  }, i);
}
function Si() {
  const e = ref(false);
  return getCurrentInstance() && onMounted(() => {
    e.value = true;
  }), e;
}
function Ci(e) {
  const t = Si();
  return computed(() => (t.value, !!e()));
}
function wi(e, t = {}) {
  const { window: o = tt } = t, a = Ci(() => o && "matchMedia" in o && typeof o.matchMedia == "function");
  let l;
  const n = ref(false), i = (d) => {
    n.value = d.matches;
  }, s = () => {
    l && ("removeEventListener" in l ? l.removeEventListener("change", i) : l.removeListener(i));
  }, u = watchEffect(() => {
    a.value && (s(), l = o.matchMedia(Ke(e)), "addEventListener" in l ? l.addEventListener("change", i) : l.addListener(i), n.value = l.matches);
  });
  return bt(() => {
    u(), s(), l = void 0;
  }), n;
}
function ki(e) {
  return JSON.parse(JSON.stringify(e));
}
var aa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var oa = "__vueuse_ssr_handlers__";
var $i = Ti();
function Ti() {
  return oa in aa || (aa[oa] = aa[oa] || {}), aa[oa];
}
function oo(e, t) {
  return $i[e] || t;
}
function _i(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Vi = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
};
var Oo = "vueuse-storage";
function Ai(e, t, o, a = {}) {
  var l;
  const {
    flush: n = "pre",
    deep: i = true,
    listenToStorageChanges: s = true,
    writeDefaults: u = true,
    mergeDefaults: d = false,
    shallow: f,
    window: g = tt,
    eventFilter: p,
    onError: y = (T) => {
      console.error(T);
    },
    initOnMounted: b
  } = a, V = (f ? shallowRef : ref)(typeof t == "function" ? t() : t);
  if (!o)
    try {
      o = oo("getDefaultStorage", () => {
        var T;
        return (T = tt) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      y(T);
    }
  if (!o)
    return V;
  const C = Ke(t), c = _i(C), h2 = (l = a.serializer) != null ? l : Vi[c], { pause: B, resume: _ } = hi(
    V,
    () => k(V.value),
    { flush: n, deep: i, eventFilter: p }
  );
  return g && s && Nl(() => {
    Oe(g, "storage", I), Oe(g, Oo, $), b && I();
  }), b || I(), V;
  function k(T) {
    try {
      if (T == null)
        o.removeItem(e);
      else {
        const O = h2.write(T), F = o.getItem(e);
        F !== O && (o.setItem(e, O), g && g.dispatchEvent(new CustomEvent(Oo, {
          detail: {
            key: e,
            oldValue: F,
            newValue: O,
            storageArea: o
          }
        })));
      }
    } catch (O) {
      y(O);
    }
  }
  function S(T) {
    const O = T ? T.newValue : o.getItem(e);
    if (O == null)
      return u && C !== null && o.setItem(e, h2.write(C)), C;
    if (!T && d) {
      const F = h2.read(O);
      return typeof d == "function" ? d(F, C) : c === "object" && !Array.isArray(F) ? { ...C, ...F } : F;
    } else
      return typeof O != "string" ? O : h2.read(O);
  }
  function $(T) {
    I(T.detail);
  }
  function I(T) {
    if (!(T && T.storageArea !== o)) {
      if (T && T.key == null) {
        V.value = C;
        return;
      }
      if (!(T && T.key !== e)) {
        B();
        try {
          (T == null ? void 0 : T.newValue) !== h2.write(V.value) && (V.value = S(T));
        } catch (O) {
          y(O);
        } finally {
          T ? nextTick(_) : _();
        }
      }
    }
  }
}
function Oi(e) {
  return wi("(prefers-color-scheme: dark)", e);
}
function Ei(e = {}) {
  const {
    selector: t = "html",
    attribute: o = "class",
    initialValue: a = "auto",
    window: l = tt,
    storage: n,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: s = true,
    storageRef: u,
    emitAuto: d,
    disableTransition: f = true
  } = e, g = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, p = Oi({ window: l }), y = computed(() => p.value ? "dark" : "light"), b = u || (i == null ? Pl(a) : Ai(i, a, n, { window: l, listenToStorageChanges: s })), V = computed(() => b.value === "auto" ? y.value : b.value), C = oo(
    "updateHTMLAttrs",
    (_, k, S) => {
      const $ = typeof _ == "string" ? l == null ? void 0 : l.document.querySelector(_) : ut(_);
      if (!$)
        return;
      let I;
      if (f) {
        I = l.document.createElement("style");
        const T = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
        I.appendChild(document.createTextNode(T)), l.document.head.appendChild(I);
      }
      if (k === "class") {
        const T = S.split(/\s/g);
        Object.values(g).flatMap((O) => (O || "").split(/\s/g)).filter(Boolean).forEach((O) => {
          T.includes(O) ? $.classList.add(O) : $.classList.remove(O);
        });
      } else
        $.setAttribute(k, S);
      f && (l.getComputedStyle(I).opacity, document.head.removeChild(I));
    }
  );
  function c(_) {
    var k;
    C(t, o, (k = g[_]) != null ? k : _);
  }
  function h2(_) {
    e.onChanged ? e.onChanged(_, c) : c(_);
  }
  watch(V, h2, { flush: "post", immediate: true }), Nl(() => h2(V.value));
  const B = computed({
    get() {
      return d ? b.value : V.value;
    },
    set(_) {
      b.value = _;
    }
  });
  try {
    return Object.assign(B, { store: b, system: y, state: V });
  } catch {
    return B;
  }
}
function lo(e, t = {}) {
  const {
    delayEnter: o = 0,
    delayLeave: a = 0,
    window: l = tt
  } = t, n = ref(false);
  let i;
  const s = (u) => {
    const d = u ? o : a;
    i && (clearTimeout(i), i = void 0), d ? i = setTimeout(() => n.value = u, d) : n.value = u;
  };
  return l && (Oe(e, "mouseenter", () => s(true), { passive: true }), Oe(e, "mouseleave", () => s(false), { passive: true })), n;
}
function xe(e, t = {}) {
  const { initialValue: o = false, focusVisible: a = false } = t, l = ref(false), n = computed(() => ut(e));
  Oe(n, "focus", (s) => {
    var u, d;
    (!a || (d = (u = s.target).matches) != null && d.call(u, ":focus-visible")) && (l.value = true);
  }), Oe(n, "blur", () => l.value = false);
  const i = computed({
    get: () => l.value,
    set(s) {
      var u, d;
      !s && l.value ? (u = n.value) == null || u.blur() : s && !l.value && ((d = n.value) == null || d.focus());
    }
  });
  return watch(
    n,
    () => {
      i.value = o;
    },
    { immediate: true, flush: "post" }
  ), { focused: i };
}
function Oa(e) {
  return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
var Pi = {
  page: (e) => [e.pageX, e.pageY],
  client: (e) => [e.clientX, e.clientY],
  screen: (e) => [e.screenX, e.screenY],
  movement: (e) => e instanceof Touch ? null : [e.movementX, e.movementY]
};
function Ni(e = {}) {
  const {
    type: t = "page",
    touch: o = true,
    resetOnTouchEnds: a = false,
    initialValue: l = { x: 0, y: 0 },
    window: n = tt,
    target: i = n,
    scroll: s = true,
    eventFilter: u
  } = e;
  let d = null;
  const f = ref(l.x), g = ref(l.y), p = ref(null), y = typeof t == "function" ? t : Pi[t], b = (k) => {
    const S = y(k);
    d = k, S && ([f.value, g.value] = S, p.value = "mouse");
  }, V = (k) => {
    if (k.touches.length > 0) {
      const S = y(k.touches[0]);
      S && ([f.value, g.value] = S, p.value = "touch");
    }
  }, C = () => {
    if (!d || !n)
      return;
    const k = y(d);
    d instanceof MouseEvent && k && (f.value = k[0] + n.scrollX, g.value = k[1] + n.scrollY);
  }, c = () => {
    f.value = l.x, g.value = l.y;
  }, h2 = u ? (k) => u(() => b(k), {}) : (k) => b(k), B = u ? (k) => u(() => V(k), {}) : (k) => V(k), _ = u ? () => u(() => C(), {}) : () => C();
  if (i) {
    const k = { passive: true };
    Oe(i, ["mousemove", "dragover"], h2, k), o && t !== "movement" && (Oe(i, ["touchstart", "touchmove"], B, k), a && Oe(i, "touchend", c, k)), s && t === "page" && Oe(n, "scroll", _, { passive: true });
  }
  return {
    x: f,
    y: g,
    sourceType: p
  };
}
function Eo(e, t = {}) {
  const {
    handleOutside: o = true,
    window: a = tt
  } = t, l = t.type || "page", { x: n, y: i, sourceType: s } = Ni(t), u = ref(e ?? (a == null ? void 0 : a.document.body)), d = ref(0), f = ref(0), g = ref(0), p = ref(0), y = ref(0), b = ref(0), V = ref(true);
  let C = () => {
  };
  return a && (C = watch(
    [u, n, i],
    () => {
      const c = ut(u);
      if (!c)
        return;
      const {
        left: h2,
        top: B,
        width: _,
        height: k
      } = c.getBoundingClientRect();
      g.value = h2 + (l === "page" ? a.pageXOffset : 0), p.value = B + (l === "page" ? a.pageYOffset : 0), y.value = k, b.value = _;
      const S = n.value - g.value, $ = i.value - p.value;
      V.value = _ === 0 || k === 0 || S < 0 || $ < 0 || S > _ || $ > k, (o || !V.value) && (d.value = S, f.value = $);
    },
    { immediate: true }
  ), Oe(document, "mouseleave", () => {
    V.value = true;
  })), {
    x: n,
    y: i,
    sourceType: s,
    elementX: d,
    elementY: f,
    elementPositionX: g,
    elementPositionY: p,
    elementHeight: y,
    elementWidth: b,
    isOutside: V,
    stop: C
  };
}
function Fl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return true;
  {
    const o = e.parentNode;
    return !o || o.tagName === "BODY" ? false : Fl(o);
  }
}
function Ii(e) {
  const t = e || window.event, o = t.target;
  return Fl(o) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
var la = /* @__PURE__ */ new WeakMap();
function Li(e, t = false) {
  const o = ref(t);
  let a = null, l;
  watch(Pl(e), (s) => {
    const u = Oa(Ke(s));
    if (u) {
      const d = u;
      la.get(d) || la.set(d, l), o.value && (d.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const s = Oa(Ke(e));
    !s || o.value || (za && (a = Oe(
      s,
      "touchmove",
      (u) => {
        Ii(u);
      },
      { passive: false }
    )), s.style.overflow = "hidden", o.value = true);
  }, i = () => {
    var s;
    const u = Oa(Ke(e));
    !u || !o.value || (za && (a == null || a()), u.style.overflow = (s = la.get(u)) != null ? s : "", la.delete(u), o.value = false);
  };
  return bt(i), computed({
    get() {
      return o.value;
    },
    set(s) {
      s ? n() : i();
    }
  });
}
function Fi(e, t = {}) {
  const {
    threshold: o = 50,
    onSwipe: a,
    onSwipeEnd: l,
    onSwipeStart: n,
    passive: i = true,
    window: s = tt
  } = t, u = reactive({ x: 0, y: 0 }), d = reactive({ x: 0, y: 0 }), f = computed(() => u.x - d.x), g = computed(() => u.y - d.y), { max: p, abs: y } = Math, b = computed(() => p(y(f.value), y(g.value)) >= o), V = ref(false), C = computed(() => b.value ? y(f.value) > y(g.value) ? f.value > 0 ? "left" : "right" : g.value > 0 ? "up" : "down" : "none"), c = (T) => [T.touches[0].clientX, T.touches[0].clientY], h2 = (T, O) => {
    u.x = T, u.y = O;
  }, B = (T, O) => {
    d.x = T, d.y = O;
  };
  let _;
  const k = Hi(s == null ? void 0 : s.document);
  i ? _ = k ? { passive: true } : { capture: false } : _ = k ? { passive: false, capture: true } : { capture: true };
  const S = (T) => {
    V.value && (l == null || l(T, C.value)), V.value = false;
  }, $ = [
    Oe(e, "touchstart", (T) => {
      if (T.touches.length !== 1)
        return;
      _.capture && !_.passive && T.preventDefault();
      const [O, F] = c(T);
      h2(O, F), B(O, F), n == null || n(T);
    }, _),
    Oe(e, "touchmove", (T) => {
      if (T.touches.length !== 1)
        return;
      const [O, F] = c(T);
      B(O, F), !V.value && b.value && (V.value = true), V.value && (a == null || a(T));
    }, _),
    Oe(e, ["touchend", "touchcancel"], S, _)
  ];
  return {
    isPassiveEventSupported: k,
    isSwiping: V,
    direction: C,
    coordsStart: u,
    coordsEnd: d,
    lengthX: f,
    lengthY: g,
    stop: () => $.forEach((T) => T())
  };
}
function Hi(e) {
  if (!e)
    return false;
  let t = false;
  const o = {
    get passive() {
      return t = true, false;
    }
  };
  return e.addEventListener("x", yt, o), e.removeEventListener("x", yt), t;
}
function ke(e, t, o, a = {}) {
  var l, n, i;
  const {
    clone: s = false,
    passive: u = false,
    eventName: d,
    deep: f = false,
    defaultValue: g,
    shouldEmit: p
  } = a, y = getCurrentInstance(), b = o || (y == null ? void 0 : y.emit) || ((l = y == null ? void 0 : y.$emit) == null ? void 0 : l.bind(y)) || ((i = (n = y == null ? void 0 : y.proxy) == null ? void 0 : n.$emit) == null ? void 0 : i.bind(y == null ? void 0 : y.proxy));
  let V = d;
  t || (t = "modelValue"), V = V || `update:${t.toString()}`;
  const C = (B) => s ? typeof s == "function" ? s(B) : ki(B) : B, c = () => ci(e[t]) ? C(e[t]) : g, h2 = (B) => {
    p ? p(B) && b(V, B) : b(V, B);
  };
  if (u) {
    const B = c(), _ = ref(B);
    let k = false;
    return watch(
      () => e[t],
      (S) => {
        k || (k = true, _.value = C(S), nextTick(() => k = false));
      }
    ), watch(
      _,
      (S) => {
        !k && (S !== e[t] || f) && h2(S);
      },
      { deep: f }
    ), _;
  } else
    return computed({
      get() {
        return c();
      },
      set(B) {
        h2(B);
      }
    });
}
var Zt = (e) => computed(() => {
  const t = toValue(e);
  return t ? `justify-content-${t}` : "";
});
var zi = (e) => typeof e == "boolean" || e === "" || e === "true" || e === "false";
var r = (e) => computed(() => {
  const t = toValue(e);
  return zi(t) ? typeof t == "boolean" ? t : t === "" || t === "true" : t;
});
var Ca = (e, t) => {
  const o = r(e), a = toRef(t);
  return computed(
    () => o.value === true ? "true" : typeof o.value == "string" ? o.value : a.value === false ? "true" : o.value === false ? "false" : void 0
  );
};
var Ct = (e, t) => {
  const o = toRef(t), a = toRef(e), l = toRef(() => Ji(a.value)), n = computed(
    () => l.value ? fo(
      a.value,
      o.value ?? [
        "active",
        "activeClass",
        "append",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover"
      ]
    ) : {}
  );
  return { computedLink: l, computedLinkProps: n };
};
var Hl = Al(() => {
  const e = reactive([]);
  return { items: e, reset: () => {
    e.splice(0, e.length);
  } };
});
var Ri = (e = {}) => {
  const t = e.persist ?? false, o = "data-bs-theme", a = "body";
  return Ei({
    attribute: o,
    selector: a,
    storageKey: t === true ? `bv-color-${e.attribute ?? o}-${e.selector ?? a}` : null,
    ...e
  });
};
var Qe = (e) => computed(() => {
  const t = toValue(e);
  return {
    [`text-bg-${t.variant}`]: t.variant !== null,
    [`text-${t.textVariant}`]: t.textVariant !== null && t.variant === null,
    [`bg-${t.bgVariant}`]: t.bgVariant !== null && t.variant === null
  };
});
var xi = (e) => computed(() => {
  const t = toValue(e);
  return {
    container: t === true,
    [`container-${t}`]: typeof t == "string"
  };
});
var zl = (e, t = ref(1e3), o = {}) => {
  const a = readonly(toRef(e)), l = readonly(toRef(t)), n = ref(false), i = ref(0), s = toRef(() => Math.ceil(a.value / l.value)), u = toRef(
    () => g.value || n.value ? Math.round(a.value - i.value * l.value) : 0
  ), { pause: d, resume: f, isActive: g } = Il(
    () => {
      i.value = i.value + 1;
    },
    t,
    o
  ), p = () => {
    n.value = false, i.value = 0, f();
  }, y = () => {
    n.value = false, i.value = s.value;
  };
  watchEffect(() => {
    i.value > s.value && (i.value = s.value), i.value === s.value && d();
  }), watch([l, a], () => {
    y(), p();
  });
  const b = () => {
    g.value !== false && (n.value = true, d());
  }, V = () => {
    i.value !== s.value && (n.value = false, f());
  };
  return {
    isActive: readonly(g),
    isPaused: readonly(n),
    restart: p,
    stop: y,
    pause: b,
    resume: V,
    value: u
  };
};
var wt = (e) => computed(() => {
  const t = toValue(e);
  return t === true ? "is-valid" : t === false ? "is-invalid" : null;
});
var Rl = (e) => computed(() => {
  const t = toValue(e);
  return {
    "form-check": t.plain === false && t.button === false,
    "form-check-inline": t.inline === true,
    "form-switch": t.switch === true,
    [`form-control-${t.size}`]: t.size !== void 0 && t.size !== "md" && t.button === false
  };
});
var xl = (e) => {
  const t = toRef(e), o = wt(() => t.value.state ?? null);
  return computed(() => [
    o.value,
    {
      "form-check-input": t.value.plain === false && t.value.button === false,
      "btn-check": t.value.button === true
    }
  ]);
};
var Ml = (e) => computed(() => {
  const t = toValue(e);
  return {
    "form-check-label": t.plain === false && t.button === false,
    btn: t.button === true,
    [`btn-${t.buttonVariant}`]: t.button === true && t.buttonVariant !== void 0 && t.buttonVariant !== null,
    [`btn-${t.size}`]: t.button && t.size && t.size !== "md"
  };
});
var Dl = (e) => {
  const t = toRef(e), o = Ca(
    () => t.value.ariaInvalid,
    () => t.value.state
  );
  return computed(() => ({
    "aria-invalid": o.value,
    "aria-required": t.value.required === true ? true : void 0
  }));
};
var jl = (e) => computed(() => {
  const t = toValue(e);
  return {
    "was-validated": t.validated === true,
    "btn-group": t.buttons === true && t.stacked === false,
    "btn-group-vertical": t.stacked === true && t.buttons === true,
    [`btn-group-${t.size}`]: t.size !== void 0
  };
});
var _e = (e, t) => computed(() => toValue(e) || qt(t));
var ql = (e, t) => {
  const o = ref(null), a = ke(e, "modelValue", t), l = _e(() => e.id, "input"), n = r(() => e.autofocus), i = r(() => e.disabled), s = r(() => e.lazy), u = r(() => e.lazyFormatter), d = r(() => e.number), f = r(() => e.state), g = r(() => e.trim), p = he(() => e.debounce ?? 0), y = he(() => e.debounceMaxWait ?? NaN), b = bi(
    (T) => {
      a.value = T;
    },
    () => s.value === true ? 0 : p.value,
    { maxWait: () => s.value === true ? NaN : y.value }
  ), V = (T, O = false) => {
    s.value === true && O === false || b(T);
  }, { focused: C } = xe(o, {
    initialValue: n.value
  }), c = (T, O, F = false) => e.formatter !== void 0 && (!u.value || F) ? e.formatter(T, O) : T, h2 = (T) => g.value ? T.trim() : d.value ? Number.parseFloat(T) : T;
  onMounted(() => {
    var T;
    o.value && (o.value.value = ((T = a.value) == null ? void 0 : T.toString()) ?? "");
  }), onActivated(() => {
    nextTick(() => {
      n.value && (C.value = true);
    });
  });
  const B = Ca(() => e.ariaInvalid, f);
  return {
    input: o,
    computedId: l,
    computedAriaInvalid: B,
    onInput: (T) => {
      const { value: O } = T.target, F = c(O, T);
      if (T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      const K = h2(F);
      V(K), t("input", F);
    },
    onChange: (T) => {
      const { value: O } = T.target, F = c(O, T);
      if (T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      const K = h2(F);
      a.value !== K && V(F, true), t("change", F);
    },
    onBlur: (T) => {
      if (t("blur", T), !s.value && !u.value)
        return;
      const { value: O } = T.target, F = c(O, T, true), K = h2(F);
      a.value !== K && V(F, true);
    },
    focus: () => {
      i.value || (C.value = true);
    },
    blur: () => {
      i.value || (C.value = false);
    }
  };
};
var Vt = (e, t) => {
  if (!e)
    return e;
  if (t in e)
    return e[t];
  const o = t.split(".");
  return Vt(e[o[0]], o.splice(1).join("."));
};
var Ea = (e, t = null, o, a) => {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    const l = Vt(e, a.valueField), n = Vt(e, a.textField), i = Vt(e, a.htmlField), s = Vt(e, a.disabledField), u = e[a.optionsField] || null;
    return u !== null ? {
      label: String(Vt(e, a.labelField) || n),
      options: no(u, o, a)
    } : {
      value: typeof l > "u" ? t || n : l,
      text: String(typeof n > "u" ? t : n),
      html: i,
      disabled: !!s
    };
  }
  return {
    value: t || e,
    text: String(e),
    disabled: false
  };
};
var no = (e, t, o) => Array.isArray(e) ? e.map((a) => Ea(a, null, t, o)) : Object.prototype.toString.call(e) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(e).map((a) => {
  const l = e[a];
  switch (typeof l) {
    case "object":
      return Ea(l.text, String(l.value), t, o);
    default:
      return Ea(l, String(a), t, o);
  }
})) : [];
var Pa = "modal-open";
var so = di(() => {
  const e = shallowRef([]), t = toRef(() => e.value.length), o = toRef(() => e.value[e.value.length - 1]), a = (f) => {
    e.value = [...e.value, f];
  }, l = (f) => {
    e.value = e.value.filter((g) => g.uid !== f.uid);
  }, n = shallowRef([]), i = (f) => {
    n.value = [...n.value, f];
  }, s = (f) => {
    n.value = n.value.filter((g) => g.uid !== f.uid);
  }, u = (f) => {
    l(f), s(f);
  }, d = oo("updateHTMLAttrs", (f, g, p) => {
    const y = typeof f == "string" ? window == null ? void 0 : window.document.querySelector(f) : ut(f);
    y && (g === "class" ? y.classList.toggle(Pa, p === Pa) : y.setAttribute(g, p));
  });
  return bt(() => {
    d("body", "class", "");
  }), watch(t, (f) => {
    d("body", "class", f > 0 ? Pa : "");
  }), {
    registry: n,
    stack: e,
    lastStack: o,
    countStack: t,
    pushStack: a,
    removeStack: l,
    pushRegistry: i,
    removeRegistry: s,
    dispose: u
  };
});
var Mi = (e) => {
  const { pushRegistry: t, pushStack: o, removeStack: a, stack: l, dispose: n, countStack: i } = so(), s = getCurrentInstance();
  if (!s || s.type.__name !== "BModal")
    throw new Error("useModalManager must only use in BModal component");
  return t(s), bt(() => {
    n(s);
  }), watch(
    e,
    (u, d) => {
      u ? o(s) : d && !u && a(s);
    },
    { immediate: true }
  ), {
    activePosition: computed(
      () => l.value.findIndex((u) => {
        var d, f;
        return ((d = u.exposed) == null ? void 0 : d.id) === ((f = s.exposed) == null ? void 0 : f.id);
      })
    ),
    activeModalCount: i
  };
};
var Di = (e = void 0) => {
  const { registry: t } = so(), o = getCurrentInstance(), a = computed(() => {
    const n = toValue(e);
    return n ? t.value.find((i) => {
      var s;
      return ((s = i.exposed) == null ? void 0 : s.id.value) === n;
    }) || null : o ? Gl(o) : null;
  }), l = toRef(() => {
    var n;
    return (n = a.value) == null ? void 0 : n.proxy;
  });
  return {
    show() {
      var n, i;
      (i = (n = a.value) == null ? void 0 : n.exposed) == null || i.show();
    },
    hide(n = "") {
      var i, s;
      (s = (i = a.value) == null ? void 0 : i.exposed) == null || s.hide(n);
    },
    modal: l
  };
};
var Gl = (e) => e.parent ? e.parent.type.__name === "BModal" ? e.parent : Gl(e.parent) : null;
var ji = () => {
  const { lastStack: e, stack: t } = so();
  return {
    hide: (l = "") => {
      var n;
      e.value && ((n = e.value.exposed) == null || n.hide(l));
    },
    hideAll: (l = "") => {
      var n;
      for (const i of t.value)
        (n = i.exposed) == null || n.hide(l);
    }
    // Todo: Supports listening events globally in the future
  };
};
var io = (e) => {
  const t = (u, d) => {
    const f = d === null ? "" : `${d}-`;
    return u === "circle" ? `${f}rounded-circle` : u === "pill" ? `${f}rounded-pill` : typeof u == "number" || u === "0" || u === "1" || u === "2" || u === "3" || u === "4" || u === "5" ? `${f}rounded-${u}` : u === "none" ? `${f}rounded-0` : u === "sm" ? `${f}rounded-1` : u === "lg" ? `${f}rounded-5` : `${f}rounded`;
  }, o = readonly(toRef(e)), a = r(() => o.value.rounded), l = r(() => o.value.roundedTop), n = r(() => o.value.roundedBottom), i = r(() => o.value.roundedStart), s = r(() => o.value.roundedEnd);
  return computed(() => ({
    [`${t(a.value, null)}`]: !!a.value,
    [`${t(l.value, "top")}`]: !!l.value,
    [`${t(n.value, "bottom")}`]: !!n.value,
    [`${t(i.value, "start")}`]: !!i.value,
    [`${t(s.value, "end")}`]: !!s.value
  }));
};
var Wl = (e, t) => {
  const o = readonly(toRef(e)), a = readonly(toRef(t)), l = toRef(() => !a.value);
  onMounted(() => {
    const n = Li(
      document.body,
      o.value && l.value
    );
    watch([o, l], ([i, s]) => {
      n.value = i && s;
    });
  });
};
var qi = "top-right";
var Ul = Al(() => {
  const e = ref([]);
  return { toasts: e, show: (...[a, l]) => {
    const n = { pos: qi };
    typeof a == "string" ? Object.assign(n, l, {
      body: a,
      value: (l == null ? void 0 : l.value) || 5e3
    }) : Object.assign(n, a, { value: a.value || 5e3 });
    const i = Symbol();
    return e.value.push({ ...n, self: i }), i;
  }, hide: (a) => {
    const l = e.value.findIndex((n) => n.self === a);
    l !== -1 && e.value.splice(l, 1);
  } };
});
var Gi = ["id"];
var Wi = ["innerHTML"];
var Ui = ["innerHTML"];
var ro = defineComponent({
  inheritAttrs: false,
  __name: "BPopover",
  props: {
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    click: { type: [String, Boolean], default: false },
    container: { default: void 0 },
    content: { default: void 0 },
    customClass: { default: "" },
    delay: { default: () => ({ show: 100, hide: 300 }) },
    floatingMiddleware: { default: void 0 },
    hide: { type: [String, Boolean], default: void 0 },
    html: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: false },
    manual: { type: [String, Boolean], default: false },
    modelValue: { type: [String, Boolean], default: false },
    noAutoClose: { type: [String, Boolean], default: false },
    noFade: { type: [String, Boolean], default: false },
    noFlip: { type: [String, Boolean], default: false },
    noHide: { type: [String, Boolean], default: false },
    noShift: { type: [String, Boolean], default: false },
    noSize: { type: [String, Boolean], default: false },
    noninteractive: { type: [String, Boolean], default: false },
    offset: { default: null },
    placement: { default: "top" },
    persistent: { type: [String, Boolean], default: false },
    realtime: { type: [String, Boolean], default: false },
    reference: { default: null },
    strategy: { default: "absolute" },
    target: { default: null },
    title: { default: void 0 },
    tooltip: { type: [String, Boolean], default: false },
    variant: { default: null }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = r(() => a.modelValue), i = ref(n.value), s = ref(n.value);
    watchEffect(() => {
      l("update:modelValue", i.value);
    }), watch(n, () => {
      n.value !== i.value && (n.value ? me() : de(new Event("update:modelValue")));
    });
    const u = _e(() => a.id, "popover"), d = r(() => a.click), f = r(() => a.manual), g = r(() => a.noShift), p = r(() => a.noSize), y = r(() => a.noFlip), b = r(() => a.noFade), V = r(() => a.noAutoClose), C = r(() => a.noHide), c = r(() => a.realtime), h2 = r(() => a.inline), B = r(() => a.persistent), _ = r(() => a.tooltip), k = r(() => a.noninteractive), S = r(() => a.html), $ = ref(false), I = ref(null), T = ref(null), O = ref(null), F = ref(null), K = ref(null), z = computed(
      () => a.title ? Ot(a.title, At) : ""
    ), P = computed(
      () => a.content ? Ot(a.content, At) : ""
    ), D = toRef(() => a.placement.startsWith("auto")), ae = he(() => a.offset ?? NaN), le = computed(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), ve = computed(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), Be = ref({}), Ve = computed(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const Y = a.offset !== null ? ae.value : _.value ? 6 : 8, re = [gl(Y)];
      return y.value === false && !D.value && re.push(
        pl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), D.value && re.push(
        Ls({
          alignment: a.placement.split("-")[1] || void 0,
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), g.value === false && re.push(
        bl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), C.value === false && re.push(
        Fs({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding
        })
      ), h2.value === true && re.push(zs()), re.push(li({ element: O, padding: 10 })), p.value === false && re.push(
        yl({
          boundary: le.value,
          rootBoundary: ve.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: Ae, availableHeight: He }) {
            Be.value = {
              maxHeight: He ? `${He}px` : void 0,
              maxWidth: Ae ? `${Ae}px` : void 0
            };
          }
        })
      ), re;
    }), oe = toRef(
      () => D.value ? void 0 : a.placement
    ), { floatingStyles: fe, middlewareData: $e, placement: we, update: M } = Vl(T, I, {
      placement: oe,
      middleware: Ve,
      strategy: toRef(() => a.strategy),
      whileElementsMounted: (...Y) => Tl(...Y, { animationFrame: c.value })
    }), L = ref({ position: "absolute" });
    watch($e, () => {
      var Y;
      if (C.value === false && ((Y = $e.value.hide) != null && Y.referenceHidden ? $.value = true : $.value = false), $e.value.arrow) {
        const { x: re, y: Ae } = $e.value.arrow;
        L.value = {
          position: "absolute",
          top: Ae ? `${Ae}px` : "",
          left: re ? `${re}px` : ""
        };
      }
    });
    const U = computed(() => {
      const Y = _.value ? "tooltip" : "popover";
      return [
        Y,
        `b-${Y}`,
        {
          [`b-${Y}-${a.variant}`]: a.variant !== null,
          show: i.value && !$.value,
          "pe-none": !i.value,
          fade: !b.value,
          "d-none": !i.value && b.value,
          [`${a.customClass}`]: a.customClass !== void 0,
          [`bs-${Y}-${Ki(we.value)}`]: we.value !== void 0
        }
      ];
    }), { isOutside: H } = Eo(I), { isOutside: G } = Eo(F), X = (Y) => {
      const re = Y ?? new Event("click");
      i.value ? de(re) : me();
    }, te = (Y, re = {}) => new Rt(Y, {
      cancelable: false,
      target: I.value || null,
      relatedTarget: null,
      trigger: null,
      ...re,
      componentId: u.value
    });
    let be;
    const me = () => {
      const Y = te("show", { cancelable: true });
      if (l("show", Y), Y.defaultPrevented) {
        l("show-prevented");
        return;
      }
      s.value = true, nextTick(() => {
        var re;
        M(), be = setTimeout(
          () => {
            M(), i.value = true, nextTick(() => {
              l("shown", te("shown"));
            });
          },
          typeof a.delay == "number" ? a.delay : ((re = a.delay) == null ? void 0 : re.show) || 0
        );
      });
    }, de = (Y) => {
      var He;
      const re = te("hide", { cancelable: true });
      if (l("hide", re), re.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      be && (clearTimeout(be), be = void 0);
      const Ae = typeof a.delay == "number" ? a.delay : ((He = a.delay) == null ? void 0 : He.hide) || 0;
      setTimeout(() => {
        var Re, kt;
        (Y == null ? void 0 : Y.type) === "click" || (Y == null ? void 0 : Y.type) === "forceHide" || (Y == null ? void 0 : Y.type) === "update:modelValue" && f.value || !k.value && H.value && G.value && !((Re = I.value) != null && Re.contains(document == null ? void 0 : document.activeElement)) && !((kt = F.value) != null && kt.contains(document == null ? void 0 : document.activeElement)) || k.value && G.value ? (i.value = false, nextTick(() => {
          setTimeout(
            () => {
              s.value = false;
            },
            I.value ? La(I.value) : 150
          ), l("hidden", te("hidden"));
        })) : setTimeout(
          () => {
            de(Y);
          },
          Ae < 50 ? 50 : Ae
        );
      }, Ae);
    };
    t({
      hide: de,
      show: me,
      toggle: X
    });
    const ie = (Y) => {
      const re = unref(Y);
      if (re) {
        if (typeof re == "string") {
          const Ae = document.getElementById(re);
          return Ae || void 0;
        }
        return re.$el ? re.$el : re;
      }
    }, ce = () => {
      var Y;
      if (a.target) {
        const re = ie(a.target);
        re ? F.value = re : console.warn("Target element not found", a.target);
      } else
        F.value = (Y = K.value) == null ? void 0 : Y.nextElementSibling;
      if (a.reference) {
        const re = ie(a.reference);
        re ? T.value = re : console.warn("Reference element not found", a.reference);
      } else
        T.value = F.value;
      if (!(!F.value || f.value) && Ka) {
        if (F.value.addEventListener("forceHide", de), d.value) {
          F.value.addEventListener("click", X);
          return;
        }
        F.value.addEventListener("pointerenter", me), F.value.addEventListener("pointerleave", de), F.value.addEventListener("focus", me), F.value.addEventListener("blur", de);
      }
    }, Ce = () => {
      F.value && (F.value.removeEventListener("forceHide", de), F.value.removeEventListener("click", X), F.value.removeEventListener("pointerenter", me), F.value.removeEventListener("pointerleave", de), F.value.removeEventListener("focus", me), F.value.removeEventListener("blur", de));
    };
    return Ll(
      I,
      () => {
        i.value && d.value && !V.value && !f.value && de(new Event("clickOutside"));
      },
      { ignore: [F] }
    ), watch([() => a.click, () => a.target, () => a.reference], () => {
      Ce(), ce();
    }), onMounted(ce), onBeforeUnmount(Ce), (Y, re) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("span", {
        ref_key: "placeholder",
        ref: K
      }, null, 512),
      renderSlot(Y.$slots, "target", {
        show: me,
        hide: de,
        toggle: X,
        showState: i.value
      }),
      (openBlock(), createBlock(Teleport, {
        to: Y.container,
        disabled: !Y.container
      }, [
        s.value || unref(B) ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          id: Y.id
        }, Y.$attrs, {
          ref_key: "element",
          ref: I,
          class: U.value,
          role: "tooltip",
          tabindex: "-1",
          style: unref(fe)
        }), [
          createBaseVNode("div", {
            ref_key: "arrow",
            ref: O,
            class: normalizeClass(`${unref(_) ? "tooltip" : "popover"}-arrow`),
            style: normalizeStyle(L.value),
            "data-popper-arrow": ""
          }, null, 6),
          createBaseVNode("div", {
            class: "overflow-auto",
            style: normalizeStyle(Be.value)
          }, [
            Y.title || Y.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              unref(S) ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["position-sticky top-0", unref(_) ? "tooltip-inner" : "popover-header"]),
                innerHTML: z.value
              }, null, 10, Wi)) : (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["position-sticky top-0", unref(_) ? "tooltip-inner" : "popover-header"])
              }, [
                renderSlot(Y.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(Y.title), 1)
                ])
              ], 2))
            ], 64)) : createCommentVNode("", true),
            unref(_) && !Y.$slots.title && !Y.title || !unref(_) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              unref(S) ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(unref(_) ? "tooltip-inner" : "popover-body"),
                innerHTML: P.value
              }, null, 10, Ui)) : (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(unref(_) ? "tooltip-inner" : "popover-body")
              }, [
                renderSlot(Y.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(Y.content), 1)
                ])
              ], 2))
            ], 64)) : createCommentVNode("", true)
          ], 4)
        ], 16, Gi)) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]))
    ], 64));
  }
});
var Xi = ({
  top: e,
  end: t,
  start: o,
  alignCenter: a,
  alignEnd: l
}) => {
  const n = e ? "top" : o ? "left" : t ? "right" : "bottom", i = l ? "end" : a ? null : "start";
  return `${n}${i ? `-${i}` : ""}`;
};
var Ki = (e) => {
  const [t] = e.split("-");
  switch (t) {
    case "left":
      return "start";
    case "right":
      return "end";
    default:
      return t;
  }
};
var Ut = (e) => typeof e != "object" || e.active !== false;
var ga = (e, t) => {
  if (!Ut(e))
    return {};
  const a = typeof e > "u" || typeof e == "object" && !e.title && !e.content, l = t.getAttribute("title") || t.getAttribute("data-original-title");
  return a ? l ? (t.removeAttribute("title"), t.setAttribute("data-original-title", l), {
    content: Ot(l, At)
  }) : {} : typeof e == "string" ? {
    content: Ot(e, At)
  } : {
    title: e != null && e.title ? Ot(e == null ? void 0 : e.title, At) : void 0,
    content: e != null && e.content ? Ot(e == null ? void 0 : e.content, At) : void 0
  };
};
var Nt = (e, t) => ({
  target: t,
  modelValue: e.modifiers.show,
  inline: e.modifiers.inline,
  click: e.modifiers.click,
  realtime: e.modifiers.realtime,
  persistent: e.modifiers.persistent,
  placement: e.modifiers.left ? "left" : e.modifiers.right ? "right" : e.modifiers.bottom ? "bottom" : e.modifiers.top ? "top" : void 0,
  html: true,
  ...typeof e.value == "object" ? e.value : {},
  title: null,
  content: null
});
var ba = (e, t) => {
  var a;
  const o = document.createElement("span");
  t.modifiers.body ? document.body.appendChild(o) : t.modifiers.child ? e.appendChild(o) : (a = e.parentNode) == null || a.insertBefore(o, e.nextSibling), e.$__app = createApp({ render: () => {
    var l;
    return h(ro, { ...(l = e.$__state) == null ? void 0 : l.value });
  } }), e.$__app.mount(o), e.$__element = o;
};
var Xl = (e) => {
  var o;
  const t = e.$__element;
  (o = e.$__app) == null || o.unmount(), delete e.$__app, delete e.$__state, setTimeout(() => {
    t == null || t.remove();
  }, 0), delete e.$__element;
};
var wa = (e, t, o) => t.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((a, l) => (a[e ? `${e}${l.charAt(0).toUpperCase() + l.slice(1)}` : l] = o, a), /* @__PURE__ */ Object.create(null));
var Kl = (e, t, o, a = o) => Object.keys(t).reduce((l, n) => (e[n] && l.push(
  [a, n.replace(o, ""), e[n]].filter((i) => i && typeof i != "boolean").join("-").toLowerCase()
), l), []);
var ia = (e) => typeof e == "string" ? bo(e) : e.label !== void 0 ? e.label : typeof e.key == "string" ? bo(e.key) : e.key;
var qt = (e = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${e}__`;
var Yi = (e, t) => ((e == null ? void 0 : e()) ?? []).reduce((o, a) => (typeof a.type == "symbol" ? o = o.concat(a.children) : o.push(a), o), []).filter((o) => {
  var a;
  return ((a = o.type) == null ? void 0 : a.__name) === t;
});
var Po = (e) => e !== null && typeof e == "object";
var Zi = (e) => /^[0-9]*\.?[0-9]+$/.test(String(e));
var Ji = (e) => !!(e.href || e.to);
var Yl = Symbol("carousel");
var Zl = Symbol("tabs");
var Jl = Symbol("progress");
var Ql = Symbol("listGroup");
var en = Symbol("avatarGroup");
var tn = Symbol("accordion");
var an = Symbol("checkboxGroup");
var on = Symbol("radioGroup");
var uo = Symbol("collapse");
var ln = Symbol("collapse");
var co = Symbol("navbar");
var jt = (e, t = {}, o = {}) => {
  const a = [e];
  let l;
  for (let n = 0; n < a.length && !l; n++) {
    const i = a[n];
    l = o[i];
  }
  return l && typeof l == "function" ? l(t) : l;
};
var Qi = (e, t = NaN) => {
  const o = Number.parseInt(e, 10);
  return Number.isNaN(o) ? t : o;
};
var er = (e, t = NaN) => {
  const o = Number.parseFloat(e.toString());
  return Number.isNaN(o) ? t : o;
};
var nn = (e, t) => Object.keys(e).filter((o) => !t.map((a) => a.toString()).includes(o)).reduce((o, a) => ({ ...o, [a]: e[a] }), {});
var fo = (e, t) => [...t].reduce(
  (o, a) => (o[a] = e[a], o),
  {}
);
var No = (e, t, o) => {
  const a = t.split(/[.[\]]/g);
  let l = e;
  for (const n of a) {
    if (l === null || l === void 0)
      return o;
    n.trim() !== "" && (l = l[n]);
  }
  return l === void 0 ? o : l;
};
var Io = (e, t) => {
  const { all: o, ...a } = e, l = {};
  o && t.forEach((i) => {
    l[i] = o;
  });
  const n = { ...l, ...a };
  return Object.entries(n).filter(([i, s]) => !!s && t.includes(i)).map(([i]) => i);
};
var Lo = (e, t) => t + (e ? ts(e) : "");
var tr = ["id"];
var ar = defineComponent({
  __name: "BAccordion",
  props: {
    flush: { type: [String, Boolean], default: false },
    free: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    modelValue: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = ke(o, "modelValue", t, { passive: true }), n = _e(() => o.id, "accordion"), i = r(() => o.flush), s = r(() => o.free), u = computed(() => ({
      "accordion-flush": i.value
    }));
    return provide(tn, {
      openItem: readonly(l),
      free: s,
      setOpenItem: (d) => {
        l.value = d;
      }
    }), (d, f) => (openBlock(), createElementBlock("div", {
      id: unref(n),
      class: normalizeClass(["accordion", u.value])
    }, [
      renderSlot(d.$slots, "default")
    ], 10, tr));
  }
});
var sn = defineComponent({
  inheritAttrs: false,
  __name: "BCollapse",
  props: {
    horizontal: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: false },
    modelValue: { type: [String, Boolean], default: false },
    skipAnimation: { type: [String, Boolean], default: false },
    tag: { default: "div" },
    toggle: { type: [String, Boolean], default: false },
    visible: { type: [String, Boolean], default: false }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = (O, F = {}) => new Rt(O, {
      cancelable: false,
      target: b.value || null,
      relatedTarget: null,
      trigger: null,
      ...F,
      componentId: y.value
    }), i = ke(a, "modelValue", l, { passive: true }), s = r(i), u = r(() => a.toggle), d = r(() => a.horizontal), f = r(() => a.isNav), g = r(() => a.visible), p = r(() => a.skipAnimation), y = _e(() => a.id, "collapse"), b = ref(null), V = ref(false), C = ref(s.value), c = computed(() => ({
      show: C.value,
      "navbar-collapse": f.value,
      collapsing: V.value,
      closing: C.value && !s.value,
      "collapse-horizontal": d.value
    })), h2 = () => {
      i.value = false;
    }, B = () => {
      i.value = true;
    }, _ = () => {
      i.value = !s.value;
    };
    let k, S, $ = p.value;
    const I = () => {
      const O = n("show", { cancelable: true });
      if (l("show", O), O.defaultPrevented) {
        l("show-prevented");
        return;
      }
      clearTimeout(S), clearTimeout(k), C.value = true, !$ && (V.value = true, nextTick(() => {
        b.value !== null && (d.value ? b.value.style.width = `${b.value.scrollWidth}px` : b.value.style.height = `${b.value.scrollHeight}px`, k = setTimeout(() => {
          V.value = false, l("shown"), b.value !== null && (b.value.style.height = "", b.value.style.width = "");
        }, La(b.value)));
      }));
    }, T = () => {
      const O = n("hide", { cancelable: true });
      if (l("hide", O), O.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      if (clearTimeout(k), clearTimeout(S), b.value !== null) {
        if ($) {
          C.value = false;
          return;
        }
        V.value ? (b.value.style.height = "", b.value.style.width = "") : d.value ? b.value.style.width = `${b.value.scrollWidth}px` : b.value.style.height = `${b.value.scrollHeight}px`, b.value.offsetHeight, V.value = true, nextTick(() => {
          b.value !== null && (b.value.style.height = "", b.value.style.width = "", S = setTimeout(() => {
            C.value = false, V.value = false, l("hidden");
          }, La(b.value)));
        });
      }
    };
    return watch(i, () => {
      s.value ? I() : T();
    }), onMounted(() => {
      b.value !== null && !s.value && u.value && nextTick(() => {
        i.value = true;
      });
    }), watch(p, (O) => {
      $ = O;
    }), g.value && ($ = true, i.value = true, nextTick(() => {
      $ = p.value;
    })), watch(g, (O) => {
      $ = true, O ? B() : h2(), nextTick(() => {
        $ = p.value;
      });
    }), Oe(b, "bv-toggle", () => {
      i.value = !s.value;
    }), t({
      close: h2,
      isNav: f,
      open: B,
      toggle: _,
      visible: readonly(C)
    }), provide(uo, {
      id: y,
      close: h2,
      open: B,
      toggle: _,
      visible: readonly(C),
      isNav: f
    }), (O, F) => (openBlock(), createElementBlock(Fragment, null, [
      renderSlot(O.$slots, "header", {
        id: unref(y),
        visible: unref(s),
        toggle: _,
        open: B,
        close: h2
      }),
      (openBlock(), createBlock(resolveDynamicComponent(O.tag), mergeProps({
        id: unref(y),
        ref_key: "element",
        ref: b,
        class: ["collapse", c.value],
        "is-nav": unref(f)
      }, O.$attrs), {
        default: withCtx(() => [
          renderSlot(O.$slots, "default", {
            visible: unref(s),
            toggle: _,
            open: B,
            close: h2
          })
        ]),
        _: 3
      }, 16, ["id", "class", "is-nav"])),
      renderSlot(O.$slots, "footer", {
        id: unref(y),
        visible: unref(s),
        toggle: _,
        open: B,
        close: h2
      })
    ], 64));
  }
});
var or = ["aria-expanded", "aria-controls", "onClick"];
var lr = defineComponent({
  inheritAttrs: false,
  __name: "BAccordionItem",
  props: {
    bodyAttrs: { default: void 0 },
    bodyClass: { default: void 0 },
    buttonAttrs: { default: void 0 },
    buttonClass: { default: void 0 },
    collapseClass: { default: void 0 },
    headerAttrs: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "h2" },
    horizontal: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: void 0 },
    modelValue: { type: Boolean, default: false },
    tag: { default: void 0 },
    title: { default: void 0 },
    toggle: { type: [String, Boolean], default: void 0 },
    visible: { type: [String, Boolean], default: false },
    wrapperAttrs: { default: void 0 }
  },
  emits: ["hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { emit: t }) {
    const { class: o, ...a } = useAttrs(), l = e, n = t, i = ke(l, "modelValue", n, { passive: true }), s = inject(tn, null), u = _e(() => l.id, "accordion_item");
    return onMounted(() => {
      i.value && !(s != null && s.free.value) && (s == null || s.setOpenItem(u.value)), !i.value && (s == null ? void 0 : s.openItem.value) === u.value && (i.value = true);
    }), watch(
      () => s == null ? void 0 : s.openItem.value,
      () => i.value = (s == null ? void 0 : s.openItem.value) === u.value && !(s != null && s.free.value)
    ), watch(i, () => {
      i.value && !(s != null && s.free.value) && (s == null || s.setOpenItem(u.value));
    }), (d, f) => (openBlock(), createElementBlock("div", mergeProps({ class: "accordion-item" }, d.wrapperAttrs, { class: unref(o) }), [
      createVNode(sn, mergeProps({
        id: unref(u),
        modelValue: unref(i),
        "onUpdate:modelValue": f[0] || (f[0] = (g) => isRef(i) ? i.value = g : null),
        class: ["accordion-collapse", d.collapseClass],
        "aria-labelledby": `${unref(u)}-heading`
      }, a, {
        tag: d.tag,
        toggle: d.toggle,
        horizontal: d.horizontal,
        visible: d.visible,
        "is-nav": d.isNav,
        onShow: f[1] || (f[1] = (g) => n("show", g)),
        onShown: f[2] || (f[2] = (g) => n("shown")),
        onHide: f[3] || (f[3] = (g) => n("hide", g)),
        onHidden: f[4] || (f[4] = (g) => n("hidden")),
        onHidePrevented: f[5] || (f[5] = (g) => n("hide-prevented")),
        onShowPrevented: f[6] || (f[6] = (g) => n("show-prevented"))
      }), {
        header: withCtx(({ visible: g, toggle: p }) => [
          (openBlock(), createBlock(resolveDynamicComponent(d.headerTag), mergeProps({
            id: `${unref(u)}-heading`,
            class: ["accordion-header", d.headerClass]
          }, d.headerAttrs), {
            default: withCtx(() => [
              createBaseVNode("button", mergeProps({ class: "accordion-button" }, d.buttonAttrs, {
                class: [{ collapsed: !g }, d.buttonClass],
                type: "button",
                "aria-expanded": g ? "true" : "false",
                "aria-controls": unref(u),
                onClick: p
              }), [
                renderSlot(d.$slots, "title", {}, () => [
                  createTextVNode(toDisplayString(d.title), 1)
                ])
              ], 16, or)
            ]),
            _: 2
          }, 1040, ["id", "class"]))
        ]),
        default: withCtx(() => [
          createBaseVNode("div", mergeProps({ class: "accordion-body" }, d.bodyAttrs, { class: d.bodyClass }), [
            renderSlot(d.$slots, "default")
          ], 16)
        ]),
        _: 3
      }, 16, ["id", "modelValue", "class", "aria-labelledby", "tag", "toggle", "horizontal", "visible", "is-nav"])
    ], 16));
  }
});
var Mt = defineComponent({
  __name: "BTransition",
  props: {
    appear: { type: [String, Boolean], default: false },
    mode: { default: void 0 },
    noFade: { type: [String, Boolean], default: false },
    transProps: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.appear), a = r(() => t.noFade), l = computed(() => {
      const s = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, u = {
        ...s,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return a.value ? s : u;
    }), n = computed(() => ({ mode: t.mode, css: true, ...l.value })), i = computed(
      () => t.transProps !== void 0 ? {
        // Order matters here since the props.transProps would get overwritten if it came first
        // But the goal of props.transProps is to overwrite base properties
        ...n.value,
        ...t.transProps
      } : o.value ? {
        ...n.value,
        appear: true,
        appearActiveClass: l.value.enterActiveClass,
        appearToClass: l.value.enterToClass
      } : n.value
    );
    return (s, u) => (openBlock(), createBlock(Transition, normalizeProps(guardReactiveProps(i.value)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nr = ["type", "disabled", "aria-label"];
var Dt = defineComponent({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { type: [String, Boolean], default: false },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled);
    return (n, i) => (openBlock(), createElementBlock("button", {
      type: n.type,
      class: "btn-close",
      disabled: unref(l),
      "aria-label": n.ariaLabel,
      onClick: i[0] || (i[0] = (s) => a("click", s))
    }, null, 8, nr));
  }
});
var sr = {
  key: 0,
  class: "visually-hidden"
};
var ka = defineComponent({
  __name: "BSpinner",
  props: {
    label: { default: void 0 },
    role: { default: "status" },
    small: { type: [String, Boolean], default: false },
    tag: { default: "span" },
    type: { default: "border" },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = useSlots(), a = r(() => t.small), l = computed(() => [
      `spinner-${t.type}`,
      {
        [`spinner-${t.type}-sm`]: a.value,
        [`text-${t.variant}`]: t.variant !== null
      }
    ]), n = toRef(() => !Ie(o.label));
    return (i, s) => (openBlock(), createBlock(resolveDynamicComponent(i.tag), {
      class: normalizeClass(l.value),
      role: i.label || n.value ? i.role : null,
      "aria-hidden": i.label || n.value ? null : true
    }, {
      default: withCtx(() => [
        i.label || n.value ? (openBlock(), createElementBlock("span", sr, [
          renderSlot(i.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(i.label), 1)
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
});
var Fo = "active";
var rt = defineComponent({
  __name: "BLink",
  props: {
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: "router-link-active" },
    append: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    exactActiveClass: { default: "router-link-exact-active" },
    event: { default: "click" },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: false },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: false },
    routerComponentName: { default: "router-link" },
    routerTag: { default: "a" },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: null },
    variant: { default: null }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = useAttrs(), n = r(() => o.active), i = r(() => o.icon);
    r(() => o.append);
    const s = r(() => o.disabled);
    r(() => o.replace);
    const u = inject(uo, null), d = inject(co, null), f = getCurrentInstance(), g = computed(() => {
      const c = o.routerComponentName.split("-").map((B) => B.charAt(0).toUpperCase() + B.slice(1)).join("");
      return !((f == null ? void 0 : f.appContext.app.component(c)) !== void 0) || s.value || !o.to ? "a" : o.routerComponentName;
    }), p = computed(() => {
      const c = "#";
      if (o.href)
        return o.href;
      if (typeof o.to == "string")
        return o.to || c;
      const { to: h2 } = o;
      if (h2 !== void 0 && "path" in h2) {
        const B = h2.path || "", _ = h2.query ? `?${Object.keys(h2.query).map((S) => {
          var $;
          return `${S}=${($ = h2.query) == null ? void 0 : $[S]}`;
        }).join("=")}` : "", k = !h2.hash || h2.hash.charAt(0) === "#" ? h2.hash || "" : `#${h2.hash}`;
        return `${B}${_}${k}` || c;
      }
      return c;
    }), y = computed(() => ({
      [`link-${o.variant}`]: o.variant !== null,
      [`link-opacity-${o.opacity}`]: o.opacity !== void 0,
      [`link-opacity-${o.opacityHover}-hover`]: o.opacityHover !== void 0,
      [`link-underline-${o.underlineVariant}`]: o.underlineVariant !== null,
      [`link-offset-${o.underlineOffset}`]: o.underlineOffset !== void 0,
      [`link-offset-${o.underlineOffsetHover}-hover`]: o.underlineOffsetHover !== void 0,
      [`link-underline-opacity-${o.underlineOpacity}`]: o.underlineOpacity !== void 0,
      [`link-underline-opacity-${o.underlineOpacityHover}-hover`]: o.underlineOpacityHover !== void 0,
      "icon-link": i.value === true
    })), b = computed(() => ({
      class: y.value,
      to: o.to,
      href: p.value,
      target: o.target,
      rel: o.target === "_blank" ? o.rel ?? "noopener" : void 0,
      tabindex: s.value ? "-1" : typeof l.tabindex > "u" ? null : l.tabindex,
      "aria-disabled": s.value ? true : null
    })), V = computed(() => ({
      [Fo]: n.value,
      disabled: s.value
    })), C = (c) => {
      var h2, B, _;
      if (s.value) {
        c.preventDefault(), c.stopImmediatePropagation();
        return;
      }
      (((h2 = u == null ? void 0 : u.isNav) == null ? void 0 : h2.value) === true && d === null || d !== null && ((B = d.autoClose) == null ? void 0 : B.value) === true) && ((_ = u == null ? void 0 : u.close) == null || _.call(u)), a("click", c);
    };
    return (c, h2) => g.value === "router-link" ? (openBlock(), createBlock(resolveDynamicComponent(g.value), mergeProps({ key: 0 }, b.value, { custom: "" }), {
      default: withCtx(({ href: B, navigate: _, isActive: k, isExactActive: S }) => [
        (openBlock(), createBlock(resolveDynamicComponent(c.routerTag), mergeProps({
          href: B,
          class: {
            [Fo]: unref(n),
            [c.activeClass]: k,
            [c.exactActiveClass]: S
          }
        }, c.$attrs, {
          onClick: ($) => {
            _($), C($);
          }
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 2
        }, 1040, ["href", "class", "onClick"]))
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(resolveDynamicComponent(g.value), mergeProps({
      key: 1,
      class: V.value
    }, b.value, { onClick: C }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var pt = defineComponent({
  __name: "BButton",
  props: {
    loading: { type: [String, Boolean], default: false },
    loadingFill: { type: [String, Boolean], default: false },
    loadingText: { default: "Loading..." },
    pill: { type: [String, Boolean], default: false },
    pressed: { type: [String, Boolean], default: void 0 },
    size: { default: "md" },
    squared: { type: [String, Boolean], default: false },
    tag: { default: "button" },
    type: { default: "button" },
    variant: { default: "secondary" },
    active: { type: [String, Boolean], default: false },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    event: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    routerTag: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = ke(o, "pressed", a), n = r(() => o.active), i = r(() => o.disabled), s = r(() => o.pill), u = r(() => o.pressed), d = r(() => o.squared), f = r(() => o.loading), g = r(() => o.loadingFill), { computedLink: p, computedLinkProps: y } = Ct(o, [
      "active-class",
      "exact-active-class",
      "event",
      "replace",
      "router-component-name",
      "router-tag"
    ]), b = toRef(() => typeof u.value == "boolean"), V = toRef(
      () => o.tag === "button" && o.href === void 0 && o.to === void 0
    ), C = toRef(() => o.to !== void 0), c = toRef(() => o.href !== void 0 ? false : !V.value), h2 = computed(() => C.value ? y.value : []), B = computed(() => [
      [`btn-${o.size}`],
      {
        [`btn-${o.variant}`]: o.variant !== null,
        active: n.value || u.value,
        "rounded-pill": s.value,
        "rounded-0": d.value,
        disabled: i.value
      }
    ]), _ = toRef(() => C.value ? rt : o.href ? "a" : o.tag), k = (S) => {
      if (i.value) {
        S.preventDefault(), S.stopPropagation();
        return;
      }
      a("click", S), b.value && (l.value = !u.value);
    };
    return (S, $) => (openBlock(), createBlock(resolveDynamicComponent(_.value), mergeProps({ class: "btn" }, h2.value, {
      class: B.value,
      "aria-disabled": c.value ? unref(i) : null,
      "aria-pressed": b.value ? unref(u) : null,
      autocomplete: b.value ? "off" : null,
      disabled: V.value ? unref(i) : null,
      href: S.href,
      rel: unref(p) ? S.rel : null,
      role: c.value || unref(p) ? "button" : null,
      target: unref(p) ? S.target : null,
      type: V.value ? S.type : null,
      to: V.value ? null : S.to,
      append: unref(p) ? S.append : null,
      onClick: k
    }), {
      default: withCtx(() => [
        unref(f) ? renderSlot(S.$slots, "loading", { key: 0 }, () => [
          unref(g) ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(S.loadingText), 1)
          ], 64)),
          renderSlot(S.$slots, "loading-spinner", {}, () => [
            createVNode(ka, {
              small: S.size !== "lg",
              label: unref(g) ? S.loadingText : void 0
            }, null, 8, ["small", "label"])
          ])
        ]) : renderSlot(S.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 16, ["class", "aria-disabled", "aria-pressed", "autocomplete", "disabled", "href", "rel", "role", "target", "type", "to", "append"]));
  }
});
var ir = defineComponent({
  __name: "BAlert",
  props: {
    closeClass: { default: void 0 },
    closeContent: { default: void 0 },
    closeLabel: { default: "Close" },
    closeVariant: { default: "secondary" },
    dismissible: { type: [String, Boolean], default: false },
    fade: { type: [String, Boolean], default: false },
    immediate: { type: [String, Boolean], default: true },
    interval: { default: 1e3 },
    modelValue: { type: [Boolean, Number], default: false },
    noHoverPause: { type: [String, Boolean], default: false },
    showOnPause: { type: [String, Boolean], default: true },
    variant: { default: "info" }
  },
  emits: ["close", "close-countdown", "closed", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = ref(null), s = ke(a, "modelValue", l), u = lo(i), d = r(() => a.dismissible), f = r(() => a.fade), g = r(() => a.immediate), p = r(() => a.showOnPause), y = r(() => a.noHoverPause), b = he(() => a.interval), V = toRef(() => !Ie(n.close)), C = toRef(() => typeof s.value == "boolean" ? 0 : s.value), c = computed(() => ({
      [`alert-${a.variant}`]: a.variant !== null,
      "alert-dismissible": d.value
    })), h2 = computed(() => [a.closeClass, { "btn-close-custom": V.value }]), {
      isActive: B,
      pause: _,
      restart: k,
      resume: S,
      stop: $,
      isPaused: I,
      value: T
    } = zl(C, b, {
      immediate: typeof s.value == "number" && g.value
    }), O = toRef(
      () => typeof s.value == "boolean" ? s.value : B.value || p.value && I.value
    ), F = computed(() => ({
      variant: V.value ? a.closeVariant : void 0,
      class: h2.value
    }));
    watchEffect(() => {
      l("close-countdown", T.value);
    });
    const K = () => {
      l("close"), typeof s.value == "boolean" ? s.value = false : (s.value = 0, $()), l("closed");
    }, z = () => {
      y.value || _();
    };
    return watch(u, (P) => {
      if (P) {
        z();
        return;
      }
      S();
    }), onBeforeUnmount($), t({
      pause: _,
      restart: k,
      resume: S,
      stop: $
    }), (P, D) => (openBlock(), createBlock(Mt, {
      "no-fade": !unref(f),
      "trans-props": { enterToClass: "show" }
    }, {
      default: withCtx(() => [
        O.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "element",
          ref: i,
          class: normalizeClass(["alert", c.value]),
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true"
        }, [
          renderSlot(P.$slots, "default", {}, void 0, true),
          unref(d) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            V.value || P.closeContent ? (openBlock(), createBlock(pt, mergeProps({ key: 0 }, F.value, { onClick: K }), {
              default: withCtx(() => [
                renderSlot(P.$slots, "close", {}, () => [
                  createTextVNode(toDisplayString(P.closeContent), 1)
                ], true)
              ]),
              _: 3
            }, 16)) : (openBlock(), createBlock(Dt, mergeProps({
              key: 1,
              "aria-label": P.closeLabel
            }, F.value, { onClick: K }), null, 16, ["aria-label"]))
          ], 64)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
});
var $a = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
};
var rr = $a(ir, [["__scopeId", "data-v-e683f25c"]]);
var ur = {
  key: 0,
  class: "b-avatar-custom"
};
var dr = {
  key: 1,
  class: "b-avatar-img"
};
var cr = ["src", "alt"];
var Ra = (e) => {
  const t = typeof e == "string" && Zi(e) ? er(e, 0) : e;
  return typeof t == "number" ? `${t}px` : t || null;
};
var fr = defineComponent({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    badge: { type: [Boolean, String], default: false },
    badgeBgVariant: { default: null },
    badgeOffset: { default: void 0 },
    badgeStart: { type: [String, Boolean], default: false },
    badgeTextVariant: { default: null },
    badgeTop: { type: [String, Boolean], default: false },
    badgeVariant: { default: "primary" },
    button: { type: [String, Boolean], default: false },
    buttonType: { default: "button" },
    icon: { type: [String, Boolean], default: void 0 },
    size: { default: void 0 },
    square: { type: [String, Boolean], default: false },
    src: { default: void 0 },
    text: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [String, Number, Boolean], default: false },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  emits: ["click", "img-error"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = useSlots(), { computedLink: n, computedLinkProps: i } = Ct(o), s = inject(en, null), u = ["sm", null, "lg"], d = 0.4, f = d * 0.7, g = r(() => o.badgeStart), p = r(() => o.badgeTop), y = r(() => o.button), b = r(() => o.disabled), V = r(() => o.square), C = r(() => o.rounded), c = r(() => o.roundedTop), h2 = r(() => o.roundedBottom), B = r(() => o.roundedStart), _ = r(() => o.roundedEnd), k = toRef(() => !Ie(l.default)), S = toRef(() => !Ie(l.badge)), $ = toRef(() => !!o.badge || o.badge === "" || S.value), I = toRef(() => (s == null ? void 0 : s.size.value) ?? V.value), T = toRef(() => (s == null ? void 0 : s.size.value) ?? Ra(o.size)), O = toRef(() => (s == null ? void 0 : s.variant.value) ?? o.variant), F = toRef(() => (s == null ? void 0 : s.rounded.value) ?? C.value), K = toRef(() => (s == null ? void 0 : s.roundedTop.value) ?? c.value), z = toRef(
      () => (s == null ? void 0 : s.roundedBottom.value) ?? h2.value
    ), P = toRef(
      () => (s == null ? void 0 : s.roundedStart.value) ?? B.value
    ), D = toRef(() => (s == null ? void 0 : s.roundedEnd.value) ?? _.value), ae = io(() => ({
      rounded: F.value,
      roundedTop: K.value,
      roundedBottom: z.value,
      roundedStart: P.value,
      roundedEnd: D.value
    })), le = Qe(() => ({
      variant: o.badgeVariant,
      bgVariant: o.badgeBgVariant,
      textVariant: o.badgeTextVariant
    })), ve = toRef(() => o.badge === true ? "" : o.badge), Be = toRef(() => (s == null ? void 0 : s.textVariant.value) ?? o.textVariant), Ve = toRef(() => (s == null ? void 0 : s.bgVariant.value) ?? o.bgVariant), oe = Qe(() => ({
      bgVariant: Ve.value,
      textVariant: Be.value,
      variant: O.value
    })), fe = computed(() => [
      oe.value,
      // Square overwrites all else
      I.value === true ? void 0 : ae.value,
      {
        [`b-avatar-${o.size}`]: !!o.size && u.indexOf(Ra(o.size)) !== -1,
        [`btn-${O.value}`]: y.value ? O.value !== null : false,
        badge: !y.value && O.value !== null && k.value,
        btn: y.value,
        // Square is the same as rounded-0 class
        "rounded-0": I.value === true
      }
    ]), $e = computed(() => {
      const X = o.badgeOffset || "0px";
      return {
        fontSize: (u.indexOf(T.value || null) === -1 ? `calc(${T.value} * ${f})` : "") || "",
        top: p.value ? X : "",
        bottom: p.value ? "" : X,
        left: g.value ? X : "",
        right: g.value ? "" : X
      };
    }), we = computed(() => {
      const X = u.indexOf(T.value || null) === -1 ? `calc(${T.value} * ${d})` : null;
      return X ? { fontSize: X } : {};
    }), M = computed(() => {
      var be;
      const X = ((be = s == null ? void 0 : s.overlapScale) == null ? void 0 : be.value) || 0, te = T.value && X ? `calc(${T.value} * -${X})` : null;
      return te ? { marginLeft: te, marginRight: te } : {};
    }), L = toRef(
      () => n.value ? rt : y.value ? "button" : "span"
    ), U = computed(() => ({
      ...M.value,
      width: T.value ?? void 0,
      height: T.value ?? void 0
    })), H = (X) => {
      !b.value && (n.value || y.value) && a("click", X);
    }, G = (X) => {
      a("img-error", X);
    };
    return (X, te) => (openBlock(), createBlock(resolveDynamicComponent(L.value), mergeProps({
      class: ["b-avatar", fe.value],
      style: U.value
    }, unref(i), {
      type: unref(y) && !unref(n) ? o.buttonType : void 0,
      disabled: unref(b) || null,
      onClick: H
    }), {
      default: withCtx(() => [
        k.value ? (openBlock(), createElementBlock("span", ur, [
          renderSlot(X.$slots, "default")
        ])) : X.src ? (openBlock(), createElementBlock("span", dr, [
          createBaseVNode("img", {
            src: X.src,
            alt: X.alt,
            onError: G
          }, null, 40, cr)
        ])) : X.text ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "b-avatar-text",
          style: normalizeStyle(we.value)
        }, toDisplayString(X.text), 5)) : createCommentVNode("", true),
        $.value ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: normalizeClass(["b-avatar-badge", unref(le)]),
          style: normalizeStyle($e.value)
        }, [
          renderSlot(X.$slots, "badge", {}, () => [
            createTextVNode(toDisplayString(ve.value), 1)
          ])
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class", "style", "type", "disabled"]));
  }
});
var vr = defineComponent({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    size: { default: void 0 },
    square: { type: [String, Boolean], default: false },
    tag: { default: "div" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null },
    rounded: { type: [String, Number, Boolean], default: false },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.square), a = r(() => t.rounded), l = r(() => t.roundedTop), n = r(() => t.roundedBottom), i = r(() => t.roundedStart), s = r(() => t.roundedEnd), u = he(() => t.overlap), d = computed(() => Ra(t.size)), f = toRef(() => Math.min(Math.max(u.value, 0), 1) / 2), g = computed(() => {
      const p = d.value ? `calc(${d.value} * ${f.value})` : null;
      return p ? { paddingLeft: p, paddingRight: p } : {};
    });
    return provide(en, {
      overlapScale: f,
      size: toRef(() => t.size),
      square: o,
      rounded: a,
      roundedTop: l,
      roundedBottom: n,
      roundedStart: i,
      roundedEnd: s,
      variant: toRef(() => t.variant),
      bgVariant: toRef(() => t.bgVariant),
      textVariant: toRef(() => t.textVariant)
    }), (p, y) => (openBlock(), createBlock(resolveDynamicComponent(p.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: "b-avatar-group-inner",
          style: normalizeStyle(g.value)
        }, [
          renderSlot(p.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
});
var pr = defineComponent({
  __name: "BBadge",
  props: {
    dotIndicator: { type: [String, Boolean], default: false },
    pill: { type: [String, Boolean], default: false },
    tag: { default: "span" },
    textIndicator: { type: [String, Boolean], default: false },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.pill), a = r(() => t.textIndicator), l = r(() => t.dotIndicator), n = r(() => t.active), i = r(() => t.disabled), s = Qe(t), { computedLink: u, computedLinkProps: d } = Ct(t, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), f = toRef(() => u.value ? rt : t.tag), g = computed(() => [
      s.value,
      {
        active: n.value,
        disabled: i.value,
        "rounded-pill": o.value,
        "position-absolute top-0 start-100 translate-middle": a.value || l.value,
        "p-2 border border-light rounded-circle": l.value,
        "text-decoration-none": u.value
      }
    ]);
    return (p, y) => (openBlock(), createBlock(resolveDynamicComponent(f.value), mergeProps({
      class: ["badge", g.value]
    }, unref(d)), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var rn = defineComponent({
  __name: "BBreadcrumbItem",
  props: {
    ariaCurrent: { default: "location" },
    text: { default: void 0 },
    active: { type: [String, Boolean], default: false },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.active), n = r(() => o.disabled), i = computed(() => ({
      active: l.value
    })), s = toRef(() => l.value ? "span" : rt), u = toRef(() => l.value ? o.ariaCurrent : void 0), d = computed(
      () => s.value !== "span" ? fo(o, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "variant",
        "opacity",
        "opacityHover",
        "underlineVariant",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "icon"
      ]) : {}
    ), f = (g) => {
      if (n.value || l.value) {
        g.preventDefault(), g.stopImmediatePropagation();
        return;
      }
      n.value || a("click", g);
    };
    return (g, p) => (openBlock(), createElementBlock("li", {
      class: normalizeClass(["breadcrumb-item", i.value])
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(s.value), mergeProps({ "aria-current": u.value }, d.value, { onClick: f }), {
        default: withCtx(() => [
          renderSlot(g.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(g.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["aria-current"]))
    ], 2));
  }
});
var mr = { "aria-label": "breadcrumb" };
var gr = { class: "breadcrumb" };
var br = defineComponent({
  __name: "BBreadcrumb",
  props: {
    items: { default: void 0 }
  },
  setup(e) {
    const t = e, o = Hl(), a = computed(() => {
      const l = t.items || (o == null ? void 0 : o.items) || [];
      let n = false;
      return l.map((s, u) => (typeof s == "string" && (s = { text: s }, u < l.length - 1 && (s.href = "#")), s.active && (n = true), !s.active && !n && (s.active = u + 1 === l.length), s));
    });
    return (l, n) => (openBlock(), createElementBlock("nav", mr, [
      createBaseVNode("ol", gr, [
        renderSlot(l.$slots, "prepend"),
        (openBlock(true), createElementBlock(Fragment, null, renderList(a.value, (i, s) => (openBlock(), createBlock(rn, mergeProps({ key: s }, i), {
          default: withCtx(() => [
            createTextVNode(toDisplayString(i.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        renderSlot(l.$slots, "default"),
        renderSlot(l.$slots, "append")
      ])
    ]));
  }
});
var yr = defineComponent({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: { default: "md" },
    tag: { default: "div" },
    vertical: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.vertical), a = computed(() => ({
      "btn-group": !o.value,
      [`btn-group-${t.size}`]: t.size !== "md",
      "btn-group-vertical": o.value
    }));
    return (l, n) => (openBlock(), createBlock(resolveDynamicComponent(l.tag), {
      class: normalizeClass(a.value),
      role: "group",
      "aria-label": l.ariaLabel
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
});
var hr = ["role", "aria-label"];
var Br = defineComponent({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { type: [String, Boolean], default: false },
    role: { default: "toolbar" }
  },
  setup(e) {
    const t = e, o = r(() => t.justify), a = computed(() => ({
      "justify-content-between": o.value
    }));
    return (l, n) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([a.value, "btn-toolbar"]),
      role: l.role,
      "aria-label": l.ariaLabel
    }, [
      renderSlot(l.$slots, "default")
    ], 10, hr));
  }
});
var Sr = ["src", "width", "height", "srcset", "sizes", "loading"];
var vo = defineComponent({
  __name: "BImg",
  props: {
    blank: { type: [String, Boolean], default: false },
    blankColor: { default: "transparent" },
    block: { type: [String, Boolean], default: false },
    center: { type: [String, Boolean], default: false },
    end: { type: [String, Boolean], default: false },
    fluid: { type: [String, Boolean], default: false },
    fluidGrow: { type: [String, Boolean], default: false },
    height: { default: void 0 },
    lazy: { type: [String, Boolean], default: false },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    start: { type: [String, Boolean], default: false },
    thumbnail: { type: [String, Boolean], default: false },
    width: { default: void 0 },
    rounded: { type: [String, Number, Boolean], default: false },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.lazy), a = r(() => t.blank), l = r(() => t.block), n = r(() => t.center), i = r(() => t.fluid), s = r(() => t.fluidGrow), u = r(() => t.start), d = r(() => t.end), f = r(() => t.thumbnail), g = he(() => t.height ?? NaN), p = he(() => t.width ?? NaN), y = r(() => t.rounded), b = r(() => t.roundedTop), V = r(() => t.roundedBottom), C = r(() => t.roundedStart), c = r(() => t.roundedEnd), h2 = io(() => ({
      rounded: y.value,
      roundedTop: b.value,
      roundedBottom: V.value,
      roundedStart: C.value,
      roundedEnd: c.value
    })), B = computed(
      () => typeof t.srcset == "string" ? t.srcset.split(",").filter((O) => O).join(",") : Array.isArray(t.srcset) ? t.srcset.filter((O) => O).join(",") : void 0
    ), _ = computed(
      () => typeof t.sizes == "string" ? t.sizes.split(",").filter((O) => O).join(",") : Array.isArray(t.sizes) ? t.sizes.filter((O) => O).join(",") : void 0
    ), k = computed(() => {
      const O = Number.isNaN(p.value) ? void 0 : p.value, F = Number.isNaN(g.value) ? void 0 : g.value;
      return a.value ? O !== void 0 && F === void 0 ? { height: O, width: O } : O === void 0 && F !== void 0 ? { height: F, width: F } : { height: 1, width: 1 } : {
        width: O,
        height: F
      };
    }), S = toRef(
      () => T(k.value.width, k.value.height, t.blankColor)
    ), $ = toRef(
      () => u.value ? "float-start" : d.value ? "float-end" : n.value ? "mx-auto" : void 0
    ), I = computed(() => [
      h2.value,
      {
        "img-thumbnail": f.value,
        "img-fluid": i.value || s.value,
        "w-100": s.value,
        [`${$.value}`]: $.value !== void 0,
        "d-block": l.value || n.value
      }
    ]), T = (O, F, K) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg width="${O}" height="${F}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${O} ${F}" preserveAspectRatio="none">
    <rect width="100%" height="100%" style="fill:${K};"></rect>
    </svg>`)}`;
    return (O, F) => (openBlock(), createElementBlock("img", {
      class: normalizeClass(I.value),
      src: unref(a) ? S.value : O.src,
      width: k.value.width || void 0,
      height: k.value.height || void 0,
      srcset: unref(a) ? void 0 : B.value,
      sizes: unref(a) ? void 0 : _.value,
      loading: unref(o) ? "lazy" : "eager"
    }, null, 10, Sr));
  }
});
var ya = defineComponent({
  __name: "BCardImg",
  props: {
    bottom: { type: [String, Boolean], default: false },
    top: { type: [String, Boolean], default: false },
    blank: { type: [String, Boolean], default: void 0 },
    blankColor: { default: void 0 },
    block: { type: [String, Boolean], default: void 0 },
    center: { type: [String, Boolean], default: void 0 },
    end: { type: [String, Boolean], default: void 0 },
    fluid: { type: [String, Boolean], default: void 0 },
    fluidGrow: { type: [String, Boolean], default: void 0 },
    height: { default: void 0 },
    lazy: { type: [String, Boolean], default: void 0 },
    sizes: { default: void 0 },
    src: { default: void 0 },
    srcset: { default: void 0 },
    start: { type: [String, Boolean], default: void 0 },
    thumbnail: { type: [String, Boolean], default: void 0 },
    width: { default: void 0 },
    rounded: { type: [String, Number, Boolean], default: void 0 },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.bottom), a = r(() => t.end), l = r(() => t.start), n = r(() => t.top), i = toRef(
      () => n.value ? "card-img-top" : a.value ? "card-img-right" : o.value ? "card-img-bottom" : l.value ? "card-img-left" : "card-img"
    ), s = computed(() => nn(t, ["bottom", "top", "end", "start"]));
    return (u, d) => (openBlock(), createBlock(vo, mergeProps(s.value, { class: i.value }), null, 16, ["class"]));
  }
});
var Cr = ["innerHTML"];
var un = defineComponent({
  __name: "BCardHeadFoot",
  props: {
    borderVariant: { default: null },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = Qe(t), a = computed(() => [
      o.value,
      {
        [`border-${t.borderVariant}`]: t.borderVariant !== null
      }
    ]);
    return (l, n) => (openBlock(), createBlock(resolveDynamicComponent(l.tag), {
      class: normalizeClass(a.value)
    }, {
      default: withCtx(() => [
        l.html ? (openBlock(), createElementBlock("div", {
          key: 0,
          innerHTML: l.html
        }, null, 8, Cr)) : renderSlot(l.$slots, "default", { key: 1 }, () => [
          createTextVNode(toDisplayString(l.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var dn = defineComponent({
  __name: "BCardHeader",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e;
    return (o, a) => (openBlock(), createBlock(un, mergeProps({ class: "card-header" }, t), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cn = defineComponent({
  __name: "BCardTitle",
  props: {
    tag: { default: "h4" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(resolveDynamicComponent(t.tag), { class: "card-title" }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
});
var fn = defineComponent({
  __name: "BCardSubtitle",
  props: {
    text: { default: void 0 },
    tag: { default: "h6" },
    textVariant: { default: "body-secondary" }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== null
    }));
    return (a, l) => (openBlock(), createBlock(resolveDynamicComponent(a.tag), {
      class: normalizeClass(["card-subtitle mb-2", o.value])
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(a.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var vn = defineComponent({
  __name: "BCardBody",
  props: {
    overlay: { type: [String, Boolean], default: false },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h4" },
    subtitleTextVariant: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = useSlots(), a = r(() => t.overlay), l = Qe(t), n = toRef(() => !Ie(o.title)), i = toRef(() => !Ie(o.subtitle)), s = computed(() => [
      l.value,
      {
        "card-img-overlay": a.value
      }
    ]);
    return (u, d) => (openBlock(), createBlock(resolveDynamicComponent(u.tag), {
      class: normalizeClass(["card-body", s.value])
    }, {
      default: withCtx(() => [
        u.title || n.value ? (openBlock(), createBlock(cn, {
          key: 0,
          tag: u.titleTag
        }, {
          default: withCtx(() => [
            renderSlot(u.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(u.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : createCommentVNode("", true),
        u.subtitle || i.value ? (openBlock(), createBlock(fn, {
          key: 1,
          tag: u.subtitleTag,
          "text-variant": u.subtitleTextVariant
        }, {
          default: withCtx(() => [
            renderSlot(u.$slots, "subtitle", {}, () => [
              createTextVNode(toDisplayString(u.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : createCommentVNode("", true),
        renderSlot(u.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(u.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var pn = defineComponent({
  __name: "BCardFooter",
  props: {
    borderVariant: { default: void 0 },
    html: { default: void 0 },
    tag: { default: "div" },
    text: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e;
    return (o, a) => (openBlock(), createBlock(un, mergeProps({ class: "card-footer" }, t), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(o.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
});
var mn = defineComponent({
  __name: "BCard",
  props: {
    align: { default: void 0 },
    bodyBgVariant: { default: void 0 },
    bodyClass: { default: void 0 },
    bodyTag: { default: "div" },
    bodyText: { default: "" },
    bodyTextVariant: { default: void 0 },
    borderVariant: { default: null },
    footer: { default: void 0 },
    footerBgVariant: { default: void 0 },
    footerBorderVariant: { default: void 0 },
    footerClass: { default: void 0 },
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: { default: void 0 },
    footerVariant: { default: null },
    header: { default: void 0 },
    headerBgVariant: { default: void 0 },
    headerBorderVariant: { default: void 0 },
    headerClass: { default: void 0 },
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: { default: void 0 },
    headerVariant: { default: null },
    imgAlt: { default: void 0 },
    imgBottom: { type: [String, Boolean], default: false },
    imgEnd: { type: [String, Boolean], default: false },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgStart: { type: [String, Boolean], default: false },
    imgTop: { type: [String, Boolean], default: false },
    imgWidth: { default: void 0 },
    noBody: { type: [String, Boolean], default: false },
    overlay: { type: [String, Boolean], default: false },
    subtitle: { default: void 0 },
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "body-secondary" },
    tag: { default: "div" },
    title: { default: void 0 },
    titleTag: { default: "h4" },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = useSlots(), a = r(() => t.imgBottom), l = r(() => t.imgEnd), n = r(() => t.imgStart), i = r(() => t.noBody), s = toRef(() => !Ie(o.header)), u = toRef(() => !Ie(o.footer)), d = Qe(t), f = computed(() => [
      d.value,
      {
        [`text-${t.align}`]: t.align !== void 0,
        [`border-${t.borderVariant}`]: t.borderVariant !== null,
        "flex-row": n.value,
        "flex-row-reverse": l.value
      }
    ]), g = computed(() => ({
      src: t.imgSrc,
      alt: t.imgAlt,
      height: t.imgHeight,
      width: t.imgWidth,
      bottom: t.imgBottom,
      end: t.imgEnd,
      start: t.imgStart,
      top: t.imgTop
    }));
    return (p, y) => (openBlock(), createBlock(resolveDynamicComponent(p.tag), {
      class: normalizeClass(["card", f.value])
    }, {
      default: withCtx(() => [
        unref(a) ? createCommentVNode("", true) : renderSlot(p.$slots, "img", { key: 0 }, () => [
          p.imgSrc ? (openBlock(), createBlock(ya, normalizeProps(mergeProps({ key: 0 }, g.value)), null, 16)) : createCommentVNode("", true)
        ]),
        p.header || s.value || p.headerHtml ? (openBlock(), createBlock(dn, {
          key: 1,
          "bg-variant": p.headerBgVariant,
          variant: p.headerVariant,
          "border-variant": p.headerBorderVariant,
          html: p.headerHtml,
          tag: p.headerTag,
          "text-variant": p.headerTextVariant,
          class: normalizeClass(p.headerClass)
        }, {
          default: withCtx(() => [
            renderSlot(p.$slots, "header", {}, () => [
              createTextVNode(toDisplayString(p.header), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "variant", "border-variant", "html", "tag", "text-variant", "class"])) : createCommentVNode("", true),
        unref(i) ? renderSlot(p.$slots, "default", { key: 3 }, () => [
          createTextVNode(toDisplayString(p.bodyText), 1)
        ]) : (openBlock(), createBlock(vn, {
          key: 2,
          overlay: p.overlay,
          "bg-variant": p.bodyBgVariant,
          tag: p.bodyTag,
          "text-variant": p.bodyTextVariant,
          subtitle: p.subtitle,
          "subtitle-tag": p.subtitleTag,
          "subtitle-text-variant": p.subtitleTextVariant,
          title: p.title,
          "title-tag": p.titleTag,
          class: normalizeClass(p.bodyClass)
        }, {
          default: withCtx(() => [
            renderSlot(p.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(p.bodyText), 1)
            ])
          ]),
          _: 3
        }, 8, ["overlay", "bg-variant", "tag", "text-variant", "subtitle", "subtitle-tag", "subtitle-text-variant", "title", "title-tag", "class"])),
        p.footer || u.value || p.footerHtml ? (openBlock(), createBlock(pn, {
          key: 4,
          "bg-variant": p.footerBgVariant,
          "border-variant": p.footerBorderVariant,
          variant: p.footerVariant,
          html: p.footerHtml,
          tag: p.footerTag,
          "text-variant": p.footerTextVariant,
          class: normalizeClass(p.footerClass)
        }, {
          default: withCtx(() => [
            renderSlot(p.$slots, "footer", {}, () => [
              createTextVNode(toDisplayString(p.footer), 1)
            ])
          ]),
          _: 3
        }, 8, ["bg-variant", "border-variant", "variant", "html", "tag", "text-variant", "class"])) : createCommentVNode("", true),
        unref(a) ? renderSlot(p.$slots, "img", { key: 5 }, () => [
          p.imgSrc ? (openBlock(), createBlock(ya, normalizeProps(mergeProps({ key: 0 }, g.value)), null, 16)) : createCommentVNode("", true)
        ]) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var wr = defineComponent({
  __name: "BCardGroup",
  props: {
    columns: { type: [String, Boolean], default: false },
    deck: { type: [String, Boolean], default: false },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = r(() => t.columns), a = r(() => t.deck), l = toRef(
      () => a.value ? "card-deck" : o.value ? "card-columns" : "card-group"
    );
    return (n, i) => (openBlock(), createBlock(resolveDynamicComponent(n.tag), {
      class: normalizeClass(l.value)
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var kr = defineComponent({
  __name: "BCardText",
  props: {
    tag: { default: "p" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(resolveDynamicComponent(t.tag), { class: "card-text" }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
});
var $r = ["id"];
var Tr = {
  key: 0,
  class: "carousel-indicators"
};
var _r = ["aria-current", "aria-label", "onClick"];
var Vr = createBaseVNode("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1);
var Ar = { class: "visually-hidden" };
var Or = createBaseVNode("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1);
var Er = { class: "visually-hidden" };
var Pr = defineComponent({
  __name: "BCarousel",
  props: {
    background: { default: void 0 },
    controls: { type: [String, Boolean], default: false },
    controlsNextText: { default: "Next" },
    controlsPrevText: { default: "Previous" },
    fade: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    imgHeight: { default: void 0 },
    imgWidth: { default: void 0 },
    indicators: { type: [String, Boolean], default: false },
    indicatorsButtonLabel: { default: "Slide" },
    interval: { default: 5e3 },
    keyboard: { type: [String, Boolean], default: true },
    modelValue: { default: 0 },
    noHoverPause: { type: [String, Boolean], default: false },
    noTouch: { type: [String, Boolean], default: false },
    noWrap: { type: [String, Boolean], default: false },
    ride: { type: [String, Boolean], default: false },
    rideReverse: { type: [String, Boolean], default: false },
    touchThreshold: { default: 50 }
  },
  emits: ["slide", "slid", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = _e(() => a.id, "carousel"), s = ke(a, "modelValue", l, { passive: true }), u = r(() => a.keyboard), d = r(() => a.rideReverse), f = r(() => a.noHoverPause), g = r(() => a.fade), p = r(() => a.controls), y = r(() => a.indicators), b = r(() => a.noTouch), V = r(() => a.noWrap), C = he(() => a.touchThreshold), c = he(() => a.interval), h2 = r(() => a.ride), B = ref(false), _ = ref(false), k = ref(true), S = ref(null), $ = ref(null), I = ref(s.value), T = lo($), O = toRef(
      () => `carousel-item carousel-item-${k.value ? "prev" : "next"} carousel-item-${k.value ? "end" : "start"}`
    ), F = toRef(
      () => `carousel-item active carousel-item-${k.value ? "start" : "end"}`
    ), { pause: K, resume: z } = Il(
      () => {
        d.value ? Be() : Ve();
      },
      c,
      { immediate: h2.value === "carousel" }
    ), P = toRef(
      () => h2.value === true && _.value === true || h2.value === "carousel"
    ), D = computed(() => Yi(n.default, "BCarouselSlide")), ae = computed(() => ({ "carousel-fade": g.value })), le = (H) => {
      var G;
      return new ll(H, {
        componentId: i.value,
        cancelable: false,
        target: $.value,
        direction: k.value ? "right" : "left",
        from: I.value,
        to: s.value,
        relatedTarget: ((G = S.value) == null ? void 0 : G.children[s.value]) ?? null
      });
    }, ve = (H) => {
      if (B.value !== true) {
        if (h2.value === true && (_.value = true), P.value === true && z(), k.value = !(H < s.value), H >= D.value.length) {
          if (V.value)
            return;
          s.value = 0;
          return;
        }
        if (H < 0) {
          if (V.value)
            return;
          s.value = D.value.length - 1;
          return;
        }
        I.value = s.value, s.value = H;
      }
    }, Be = () => {
      ve(s.value - 1);
    }, Ve = () => {
      ve(s.value + 1);
    }, oe = (H) => {
      u.value !== false && H();
    }, fe = () => {
      f.value || K();
    }, $e = () => {
      P.value && z();
    }, { lengthX: we } = Fi($, {
      passive: true,
      onSwipeStart() {
        b.value !== true && K();
      },
      onSwipeEnd() {
        if (b.value === true)
          return;
        const H = () => {
          P.value !== false && z();
        };
        if (we.value >= C.value) {
          Ve(), H();
          return;
        }
        we.value <= -C.value && (Be(), H());
      }
    }), M = () => {
      l("slide", le("slide")), B.value = true;
    }, L = () => {
      l("slid", le("slid")), B.value = false;
    }, U = (H) => {
      s.value !== 0 && H.classList.add("carousel-item");
    };
    return qe(
      "ArrowLeft",
      () => {
        oe(Be);
      },
      { target: $ }
    ), qe(
      "ArrowRight",
      () => {
        oe(Ve);
      },
      { target: $ }
    ), watch(h2, () => {
      _.value = false;
    }), watch(T, (H) => {
      if (H) {
        fe();
        return;
      }
      $e();
    }), t({
      next: Ve,
      pause: K,
      prev: Be,
      resume: z
    }), provide(Yl, {
      background: toRef(() => a.background),
      width: toRef(() => a.imgWidth),
      height: toRef(() => a.imgHeight)
    }), (H, G) => (openBlock(), createElementBlock("div", {
      id: unref(i),
      ref_key: "element",
      ref: $,
      class: normalizeClass(["carousel slide pointer-event", ae.value])
    }, [
      unref(y) ? (openBlock(), createElementBlock("div", Tr, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(D.value.length, (X, te) => (openBlock(), createElementBlock("button", {
          key: te,
          type: "button",
          "data-bs-target": "",
          class: normalizeClass(te === unref(s) ? "active" : ""),
          "aria-current": te === unref(s) ? true : void 0,
          "aria-label": `${H.indicatorsButtonLabel} ${te}`,
          onClick: (be) => ve(te)
        }, null, 10, _r))), 128))
      ])) : createCommentVNode("", true),
      createBaseVNode("div", {
        ref_key: "relatedTarget",
        ref: S,
        class: "carousel-inner"
      }, [
        createVNode(TransitionGroup, {
          "enter-from-class": O.value,
          "enter-active-class": O.value,
          "enter-to-class": O.value,
          "leave-from-class": F.value,
          "leave-active-class": F.value,
          "leave-to-class": F.value,
          onBeforeLeave: M,
          onAfterLeave: L,
          onAfterEnter: U
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(D.value, (X, te) => withDirectives((openBlock(), createBlock(resolveDynamicComponent(X), {
              key: te,
              class: normalizeClass({ active: te === unref(s) && B.value === false })
            }, null, 8, ["class"])), [
              [vShow, te === unref(s)]
            ])), 128))
          ]),
          _: 1
        }, 8, ["enter-from-class", "enter-active-class", "enter-to-class", "leave-from-class", "leave-active-class", "leave-to-class"])
      ], 512),
      unref(p) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createBaseVNode("button", {
          class: "carousel-control-prev",
          type: "button",
          onClick: Be
        }, [
          Vr,
          createBaseVNode("span", Ar, toDisplayString(H.controlsPrevText), 1)
        ]),
        createBaseVNode("button", {
          class: "carousel-control-next",
          type: "button",
          onClick: Ve
        }, [
          Or,
          createBaseVNode("span", Er, toDisplayString(H.controlsNextText), 1)
        ])
      ], 64)) : createCommentVNode("", true)
    ], 10, $r));
  }
});
var Nr = ["innerHTML"];
var Ir = { key: 1 };
var Lr = ["innerHTML"];
var Fr = { key: 1 };
var Hr = defineComponent({
  __name: "BCarouselSlide",
  props: {
    background: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: { default: void 0 },
    id: { default: void 0 },
    imgAlt: { default: void 0 },
    imgBlank: { type: [String, Boolean], default: false },
    imgBlankColor: { default: "transparent" },
    imgHeight: { default: void 0 },
    imgSrc: { default: void 0 },
    imgSrcset: { default: void 0 },
    imgWidth: { default: void 0 },
    interval: { default: void 0 },
    text: { default: void 0 },
    textHtml: { default: void 0 },
    textTag: { default: "p" }
  },
  setup(e) {
    const t = e, o = useSlots(), a = inject(Yl, null), l = toRef(() => t.text || t.textHtml || !Ie(o.text)), n = toRef(() => t.caption || t.captionHtml || !Ie(o.caption)), i = toRef(() => l.value || n.value || !Ie(o.default)), s = computed(() => ({
      background: `${t.background || (a == null ? void 0 : a.background.value) || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), u = computed(() => ({
      "d-none": t.contentVisibleUp !== void 0,
      [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
    }));
    return (d, f) => (openBlock(), createElementBlock("div", {
      class: "carousel-item",
      style: normalizeStyle(s.value)
    }, [
      renderSlot(d.$slots, "img", {}, () => {
        var g, p;
        return [
          createVNode(vo, {
            class: "d-block w-100",
            alt: d.imgAlt,
            srcset: d.imgSrcset,
            src: d.imgSrc,
            width: d.imgWidth || ((g = unref(a)) == null ? void 0 : g.width.value),
            height: d.imgHeight || ((p = unref(a)) == null ? void 0 : p.height.value),
            blank: d.imgBlank,
            "blank-color": d.imgBlankColor
          }, null, 8, ["alt", "srcset", "src", "width", "height", "blank", "blank-color"])
        ];
      }),
      i.value ? (openBlock(), createBlock(resolveDynamicComponent(d.contentTag), {
        key: 0,
        class: normalizeClass(["carousel-caption", u.value])
      }, {
        default: withCtx(() => [
          n.value ? (openBlock(), createBlock(resolveDynamicComponent(d.captionTag), { key: 0 }, {
            default: withCtx(() => [
              renderSlot(d.$slots, "caption", {}, () => [
                d.captionHtml ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: d.captionHtml
                }, null, 8, Nr)) : (openBlock(), createElementBlock("span", Ir, toDisplayString(d.caption), 1))
              ])
            ]),
            _: 3
          })) : createCommentVNode("", true),
          l.value ? (openBlock(), createBlock(resolveDynamicComponent(d.textTag), { key: 1 }, {
            default: withCtx(() => [
              renderSlot(d.$slots, "text", {}, () => [
                d.textHtml ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: d.textHtml
                }, null, 8, Lr)) : (openBlock(), createElementBlock("span", Fr, toDisplayString(d.text), 1))
              ])
            ]),
            _: 3
          })) : createCommentVNode("", true),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : createCommentVNode("", true)
    ], 4));
  }
});
var Ho = wa("", [], { type: [Boolean, String, Number], default: false });
var zo = wa("offset", [""], { type: [String, Number], default: null });
var Ro = wa("order", [""], { type: [String, Number], default: null });
var zr = defineComponent({
  name: "BCol",
  slots: Object,
  props: {
    col: { type: [Boolean, String], default: false },
    // Generic flexbox .col (xs)
    cols: { type: [String, Number], default: null },
    // .col-[1-12]|auto (xs)
    ...Ho,
    offset: { type: [String, Number], default: null },
    ...zo,
    order: { type: [String, Number], default: null },
    ...Ro,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(e) {
    const t = [
      { content: Ho, propPrefix: "cols", classPrefix: "col" },
      { content: zo, propPrefix: "offset" },
      { content: Ro, propPrefix: "order" }
    ], o = r(() => e.col), a = computed(
      () => t.flatMap((n) => Kl(e, n.content, n.propPrefix, n.classPrefix))
    );
    return {
      computedClasses: computed(() => [
        a.value,
        {
          col: o.value || !a.value.some((n) => /^col-/.test(n)) && !e.cols,
          [`col-${e.cols}`]: !!e.cols,
          [`offset-${e.offset}`]: !!e.offset,
          [`order-${e.order}`]: !!e.order,
          [`align-self-${e.alignSelf}`]: !!e.alignSelf
        }
      ])
    };
  }
});
function Rr(e, t, o, a, l, n) {
  return openBlock(), createBlock(resolveDynamicComponent(e.tag), {
    class: normalizeClass(e.computedClasses)
  }, {
    default: withCtx(() => [
      renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var Gt = $a(zr, [["render", Rr]]);
var xr = defineComponent({
  __name: "BContainer",
  props: {
    fluid: { type: [String, Boolean], default: false },
    gutterX: { default: void 0 },
    gutterY: { default: void 0 },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = he(() => t.gutterX ?? NaN, { method: "parseInt" }), a = he(() => t.gutterY ?? NaN, { method: "parseInt" }), l = r(() => t.fluid), n = computed(() => ({
      container: l.value === false,
      "container-fluid": l.value === true,
      [`container-${l.value}`]: typeof l.value == "string",
      [`gx-${o.value}`]: !Number.isNaN(o.value),
      [`gy-${a.value}`]: !Number.isNaN(a.value)
    }));
    return (i, s) => (openBlock(), createBlock(resolveDynamicComponent(i.tag), {
      class: normalizeClass(n.value)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var Mr = { class: "visually-hidden" };
var Dr = ["aria-labelledby", "role"];
var gn = defineComponent({
  __name: "BDropdown",
  props: {
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: true },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: [String, Boolean], default: false },
    container: { default: void 0 },
    disabled: { type: [String, Boolean], default: false },
    dropend: { type: [String, Boolean], default: false },
    dropstart: { type: [String, Boolean], default: false },
    dropup: { type: [String, Boolean], default: false },
    end: { type: [String, Boolean], default: false },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: false },
    lazy: { type: [String, Boolean], default: false },
    menuClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: false },
    noCaret: { type: [String, Boolean], default: false },
    noFlip: { type: [String, Boolean], default: false },
    noShift: { type: [String, Boolean], default: false },
    noSize: { type: [String, Boolean], default: false },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: [String, Boolean], default: false },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: [String, Boolean], default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" }
  },
  emits: ["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = _e(() => a.id, "dropdown"), i = ke(a, "modelValue", l, { passive: true }), s = r(i), u = r(() => a.dropup), d = r(() => a.dropend), f = r(() => a.isNav), g = r(() => a.dropstart), p = r(() => a.center), y = r(() => a.end), b = r(() => a.split), V = r(() => a.noCaret), C = r(() => a.noFlip), c = r(() => a.noShift), h2 = r(() => a.noSize), B = r(() => a.lazy), _ = r(() => a.splitDisabled), k = toRef(
      () => typeof a.offset == "string" || typeof a.offset == "number" ? a.offset : NaN
    ), S = he(k), $ = ref(null), I = ref(null), T = ref(null), O = ref(null), F = computed(
      () => a.boundary === "document" || a.boundary === "viewport" ? void 0 : a.boundary
    ), K = computed(
      () => a.boundary === "document" || a.boundary === "viewport" ? a.boundary : void 0
    ), z = toRef(() => b.value ? I.value : T.value);
    qe(
      "Escape",
      () => {
        i.value = !s;
      },
      { target: z }
    ), qe(
      "Escape",
      () => {
        i.value = !s;
      },
      { target: $ }
    );
    const P = (H, G) => {
      var te, be, me, de;
      if (H.preventDefault(), !s.value) {
        L(), nextTick(() => P(H, G));
        return;
      }
      const X = (te = $.value) == null ? void 0 : te.querySelectorAll(".dropdown-item:not(.disabled):not(:disabled)");
      if (X)
        if ((be = $.value) != null && be.contains(document.activeElement)) {
          const ie = $.value.querySelector(".dropdown-item:focus"), ce = Array.prototype.indexOf.call(X, ie) + G;
          ce >= 0 && ce < (X == null ? void 0 : X.length) && ((me = X[ce]) == null || me.focus());
        } else
          (de = X[G === -1 ? X.length - 1 : 0]) == null || de.focus();
    };
    qe("ArrowUp", (H) => P(H, -1), { target: z }), qe("ArrowDown", (H) => P(H, 1), { target: z }), qe("ArrowUp", (H) => P(H, -1), { target: $ }), qe("ArrowDown", (H) => P(H, 1), { target: $ });
    const D = computed(
      () => Xi({
        top: u.value,
        start: g.value,
        end: d.value,
        alignCenter: p.value,
        alignEnd: y.value
      })
    ), ae = ref({}), le = computed(() => {
      if (a.floatingMiddleware !== void 0)
        return a.floatingMiddleware;
      const H = typeof a.offset == "string" || typeof a.offset == "number" ? S.value : a.offset, G = [gl(H)];
      return C.value === false && G.push(
        pl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding
        })
      ), c.value === false && G.push(
        bl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding
        })
      ), h2.value === false && G.push(
        yl({
          boundary: F.value,
          rootBoundary: K.value,
          padding: a.boundaryPadding,
          apply({ availableWidth: X, availableHeight: te }) {
            ae.value = {
              maxHeight: te ? `${te}px` : void 0,
              maxWidth: X ? `${X}px` : void 0
            };
          }
        })
      ), G;
    }), { update: ve, floatingStyles: Be } = Vl(z, $, {
      placement: D,
      middleware: le,
      strategy: toRef(() => a.strategy),
      whileElementsMounted: Tl
    }), Ve = computed(() => ({
      dropup: u.value,
      dropend: d.value,
      dropstart: g.value,
      "position-static": a.boundary !== "clippingAncestors" && !f.value
    })), oe = computed(() => [
      b.value ? a.splitClass : a.toggleClass,
      {
        "nav-link": f.value,
        "dropdown-toggle": !b.value,
        "dropdown-toggle-no-caret": V.value && !b.value,
        show: b.value ? void 0 : s.value
      }
    ]), fe = () => {
      U();
    }, $e = (H) => {
      b.value ? l("click", H) : fe();
    };
    Ll(
      $,
      () => {
        s.value && (a.autoClose === true || a.autoClose === "outside") && U();
      },
      { ignore: [I, T] }
    );
    const we = () => {
      s.value && (a.autoClose === true || a.autoClose === "inside") && U();
    }, M = () => {
      i.value && U();
    }, L = () => {
      i.value || U();
    }, U = () => {
      var X;
      l("toggle");
      const H = s.value, G = new Rt(H ? "hide" : "show");
      if (l(H ? "hide" : "show", G), G.defaultPrevented) {
        l(H ? "hide-prevented" : "show-prevented");
        return;
      }
      i.value = !H, l(H ? "hidden" : "shown"), (X = O.value) == null || X.dispatchEvent(new Event("forceHide"));
    };
    return watch(s, () => {
      ve();
    }), t({
      close: M,
      open: L,
      toggle: U
    }), provide(ln, {
      id: n,
      open: L,
      close: M,
      toggle: U,
      visible: s,
      isNav: f
    }), (H, G) => (openBlock(), createElementBlock("div", {
      ref_key: "wrapper",
      ref: O,
      class: normalizeClass([Ve.value, "btn-group"])
    }, [
      createVNode(pt, {
        id: unref(n),
        ref_key: "splitButton",
        ref: T,
        variant: H.splitVariant || H.variant,
        size: H.size,
        class: normalizeClass(oe.value),
        disabled: unref(_) || H.disabled,
        type: H.splitButtonType,
        "aria-label": H.ariaLabel,
        "aria-expanded": unref(b) ? void 0 : unref(s),
        "aria-haspopup": unref(b) ? void 0 : "menu",
        href: unref(b) ? H.splitHref : void 0,
        to: unref(b) && H.splitTo ? H.splitTo : void 0,
        onClick: $e
      }, {
        default: withCtx(() => [
          renderSlot(H.$slots, "button-content", {}, () => [
            createTextVNode(toDisplayString(H.text), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "variant", "size", "class", "disabled", "type", "aria-label", "aria-expanded", "aria-haspopup", "href", "to"]),
      unref(b) ? (openBlock(), createBlock(pt, {
        key: 0,
        ref_key: "button",
        ref: I,
        variant: H.variant,
        size: H.size,
        disabled: H.disabled,
        class: normalizeClass([[H.toggleClass, unref(s) ? "show" : void 0], "dropdown-toggle-split dropdown-toggle"]),
        "aria-expanded": unref(s),
        "aria-haspopup": "menu",
        onClick: fe
      }, {
        default: withCtx(() => [
          createBaseVNode("span", Mr, [
            renderSlot(H.$slots, "toggle-text", {}, () => [
              createTextVNode(toDisplayString(H.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled", "class", "aria-expanded"])) : createCommentVNode("", true),
      (openBlock(), createBlock(Teleport, {
        to: H.container,
        disabled: !H.container
      }, [
        !unref(B) || unref(s) ? withDirectives((openBlock(), createElementBlock("ul", {
          key: 0,
          ref_key: "floating",
          ref: $,
          style: normalizeStyle([unref(Be), ae.value]),
          class: normalizeClass(["dropdown-menu show overflow-auto", H.menuClass]),
          "aria-labelledby": unref(n),
          role: H.role,
          onClick: we
        }, [
          renderSlot(H.$slots, "default", {
            hide: M,
            show: L
          })
        ], 14, Dr)), [
          [vShow, unref(B) || unref(s)]
        ]) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]))
    ], 2));
  }
});
var jr = { role: "presentation" };
var qr = defineComponent({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("li", jr, [
      (openBlock(), createBlock(resolveDynamicComponent(t.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
});
var Gr = { role: "presentation" };
var Wr = { class: "px-4 py-3" };
var Ur = defineComponent({
  __name: "BDropdownForm",
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("li", Gr, [
      createBaseVNode("form", Wr, [
        renderSlot(t.$slots, "default")
      ])
    ]));
  }
});
var Xr = { role: "presentation" };
var Kr = ["id", "aria-describedby"];
var Yr = defineComponent({
  inheritAttrs: false,
  __name: "BDropdownGroup",
  props: {
    ariaDescribedby: { default: void 0 },
    header: { default: void 0 },
    headerClass: { default: void 0 },
    headerTag: { default: "header" },
    headerVariant: { default: null },
    id: { default: void 0 }
  },
  setup(e) {
    const t = e, o = toRef(() => t.id ? `${t.id}_group_dd_header` : void 0), a = toRef(() => t.headerTag === "header" ? void 0 : "heading"), l = computed(() => [
      t.headerClass,
      {
        [`text-${t.headerVariant}`]: t.headerVariant !== null
      }
    ]);
    return (n, i) => (openBlock(), createElementBlock("li", Xr, [
      (openBlock(), createBlock(resolveDynamicComponent(n.headerTag), {
        id: o.value,
        class: normalizeClass(["dropdown-header", l.value]),
        role: a.value
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "header", {}, () => [
            createTextVNode(toDisplayString(n.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      createBaseVNode("ul", mergeProps({
        id: n.id,
        role: "group",
        class: "list-unstyled"
      }, n.$attrs, {
        "aria-describedby": n.ariaDescribedby || o.value
      }), [
        renderSlot(n.$slots, "default")
      ], 16, Kr)
    ]));
  }
});
var Zr = { class: "dropdown-header" };
var Jr = defineComponent({
  __name: "BDropdownHeader",
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("li", null, [
      createBaseVNode("h6", Zr, [
        renderSlot(t.$slots, "default")
      ])
    ]));
  }
});
var Qr = defineComponent({
  inheritAttrs: false,
  __name: "BDropdownItem",
  props: {
    linkClass: { default: void 0 },
    wrapperAttrs: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, { class: l, ...n } = useAttrs(), i = r(() => o.active), s = r(() => o.disabled), { computedLink: u, computedLinkProps: d } = Ct(o), f = computed(() => [
      o.linkClass,
      {
        active: i.value,
        disabled: s.value,
        [`text-${o.variant}`]: o.variant !== null
      }
    ]), g = toRef(() => u.value ? rt : o.href ? "a" : "button"), p = inject(uo, null), y = inject(ln, null), b = inject(co, null), V = (C) => {
      var c, h2, B;
      a("click", C), b !== null && ((c = b == null ? void 0 : b.autoClose) == null ? void 0 : c.value) === true && ((h2 = p == null ? void 0 : p.close) == null || h2.call(p)), (B = y == null ? void 0 : y.close) == null || B.call(y);
    };
    return (C, c) => (openBlock(), createElementBlock("li", mergeProps({
      role: "presentation",
      class: unref(l)
    }, C.wrapperAttrs), [
      (openBlock(), createBlock(resolveDynamicComponent(g.value), mergeProps({
        class: ["dropdown-item", f.value],
        disabled: unref(s),
        "aria-disabled": unref(s) ? true : null,
        "aria-current": unref(i) ? true : null,
        href: g.value === "a" ? C.href : null,
        rel: C.rel,
        role: "menuitem",
        type: g.value === "button" ? "button" : null,
        target: C.target
      }, { ...unref(d), ...n }, { onClick: V }), {
        default: withCtx(() => [
          renderSlot(C.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "disabled", "aria-disabled", "aria-current", "href", "rel", "type", "target"]))
    ], 16));
  }
});
var eu = { role: "presentation" };
var tu = ["disabled"];
var au = defineComponent({
  inheritAttrs: false,
  __name: "BDropdownItemButton",
  props: {
    active: { type: [String, Boolean], default: false },
    activeClass: { default: "active" },
    buttonClass: { default: void 0 },
    disabled: { type: [String, Boolean], default: false },
    variant: { default: null }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.active), n = r(() => o.disabled), i = computed(() => [
      o.buttonClass,
      {
        [o.activeClass]: l.value,
        disabled: n.value,
        [`text-${o.variant}`]: o.variant !== null
      }
    ]), s = (u) => {
      a("click", u);
    };
    return (u, d) => (openBlock(), createElementBlock("li", eu, [
      createBaseVNode("button", {
        role: "menu",
        type: "button",
        class: normalizeClass(["dropdown-item", i.value]),
        disabled: unref(n),
        onClick: s
      }, [
        renderSlot(u.$slots, "default")
      ], 10, tu)
    ]));
  }
});
var ou = { role: "presentation" };
var lu = { class: "px-4 py-1 mb-0 text-body-secondary" };
var nu = defineComponent({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("li", ou, [
      createBaseVNode("p", lu, [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(t.text), 1)
        ])
      ])
    ]));
  }
});
var su = ["id", "novalidate", "onSubmit"];
var bn = defineComponent({
  __name: "BForm",
  props: {
    floating: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    novalidate: { type: [String, Boolean], default: false },
    validated: { type: [String, Boolean], default: false }
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ref(null), i = r(() => a.floating), s = r(() => a.novalidate), u = r(() => a.validated), d = computed(() => ({
      "form-floating": i.value,
      "was-validated": u.value
    })), f = (g) => {
      l("submit", g);
    };
    return t({
      element: n
    }), (g, p) => (openBlock(), createElementBlock("form", {
      id: g.id,
      ref_key: "element",
      ref: n,
      novalidate: unref(s),
      class: normalizeClass(d.value),
      onSubmit: withModifiers(f, ["prevent"])
    }, [
      renderSlot(g.$slots, "default")
    ], 42, su));
  }
});
var iu = { class: "form-floating" };
var ru = ["for"];
var uu = defineComponent({
  __name: "BFormFloatingLabel",
  props: {
    label: { default: void 0 },
    labelFor: { default: void 0 },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("div", iu, [
      renderSlot(t.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(t.text), 1)
      ]),
      createBaseVNode("label", { for: t.labelFor }, [
        renderSlot(t.$slots, "label", {}, () => [
          createTextVNode(toDisplayString(t.label), 1)
        ])
      ], 8, ru)
    ]));
  }
});
var xa = defineComponent({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.forceShow), a = r(() => t.state), l = r(() => t.tooltip), n = toRef(() => o.value === true || a.value === false), i = computed(() => ({
      "d-block": n.value,
      "invalid-feedback": !l.value,
      "invalid-tooltip": l.value
    }));
    return (s, u) => (openBlock(), createBlock(resolveDynamicComponent(s.tag), {
      id: s.id,
      role: s.role,
      "aria-live": s.ariaLive,
      "aria-atomic": s.ariaLive ? true : void 0,
      class: normalizeClass(i.value)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(s.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
});
var ra = defineComponent({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(resolveDynamicComponent(t.tag), { class: "row d-flex flex-wrap" }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ma = defineComponent({
  __name: "BFormText",
  props: {
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: false },
    tag: { default: "small" },
    text: { default: void 0 },
    textVariant: { default: "body-secondary" }
  },
  setup(e) {
    const t = e, o = r(() => t.inline), a = computed(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== null,
      "form-text": !o.value
    }));
    return (l, n) => (openBlock(), createBlock(resolveDynamicComponent(l.tag), {
      id: l.id,
      class: normalizeClass(a.value)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(l.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
});
var Da = defineComponent({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: { default: void 0 },
    forceShow: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    role: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    tag: { default: "div" },
    text: { default: void 0 },
    tooltip: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.forceShow), a = r(() => t.state), l = r(() => t.tooltip), n = toRef(() => o.value === true || a.value === true), i = computed(() => ({
      "d-block": n.value,
      "valid-feedback": !l.value,
      "valid-tooltip": l.value
    }));
    return (s, u) => (openBlock(), createBlock(resolveDynamicComponent(s.tag), {
      id: s.id,
      role: s.role,
      "aria-live": s.ariaLive,
      "aria-atomic": s.ariaLive ? true : void 0,
      class: normalizeClass(i.value)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(s.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
});
var yn = defineComponent({
  name: "ComponentOrEmpty",
  slots: Object,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    to: {
      type: [String, Object],
      default: null
    },
    skip: {
      type: Boolean,
      default: false
    }
  },
  setup(e, { slots: t, attrs: o }) {
    return () => {
      var a, l, n;
      return e.skip ? (a = t.default) == null ? void 0 : a.call(t) : e.tag === "Teleport" ? h(Teleport, { to: e.to }, [(l = t.default) == null ? void 0 : l.call(t)]) : h(e.tag, { ...o }, [(n = t.default) == null ? void 0 : n.call(t)]);
    };
  }
});
var du = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "true-value", "false-value", "indeterminate"];
var cu = ["for"];
var hn = defineComponent({
  inheritAttrs: false,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: { default: void 0 },
    ariaLabelledBy: { default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    button: { type: [String, Boolean], default: false },
    buttonGroup: { type: [String, Boolean], default: false },
    buttonVariant: { default: null },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    id: { default: void 0 },
    indeterminate: { type: [String, Boolean], default: void 0 },
    inline: { type: [String, Boolean], default: false },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number, null], default: void 0 },
    name: { default: void 0 },
    plain: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: void 0 },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    switch: { type: [String, Boolean], default: false },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number, null], default: false },
    value: { type: [Array, Set, Boolean, String, Object, Number, null], default: true }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = ke(a, "modelValue", l, { passive: true }), s = _e(() => a.id, "form-check"), u = r(() => a.indeterminate), d = r(() => a.autofocus), f = r(() => a.plain), g = r(() => a.button), p = r(() => a.buttonGroup), y = r(() => a.switch), b = r(() => a.disabled), V = r(() => a.inline), C = r(() => a.required), c = r(() => a.state), h2 = inject(an, null), B = ref(null), { focused: _ } = xe(B, {
      initialValue: d.value
    }), k = toRef(() => !Ie(n.default)), S = computed({
      get: () => (h2 == null ? void 0 : h2.modelValue.value) ?? i.value,
      set: (z) => {
        if (z !== void 0) {
          if (h2 !== null && Array.isArray(z)) {
            h2.modelValue.value = z;
            return;
          }
          i.value = z;
        }
      }
    }), $ = toRef(
      () => !!(a.name ?? (h2 == null ? void 0 : h2.name.value)) && (C.value || (h2 == null ? void 0 : h2.required.value))
    ), I = toRef(() => p.value || ((h2 == null ? void 0 : h2.buttons.value) ?? false)), T = computed(() => ({
      plain: f.value || ((h2 == null ? void 0 : h2.plain.value) ?? false),
      button: g.value || ((h2 == null ? void 0 : h2.buttons.value) ?? false),
      inline: V.value || ((h2 == null ? void 0 : h2.inline.value) ?? false),
      switch: y.value || ((h2 == null ? void 0 : h2.switch.value) ?? false),
      state: c.value || (h2 == null ? void 0 : h2.state.value),
      size: a.size ?? (h2 == null ? void 0 : h2.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: a.buttonVariant ?? (h2 == null ? void 0 : h2.buttonVariant.value) ?? "secondary"
      // This is where the true default is made
    })), O = Rl(T), F = xl(T), K = Ml(T);
    return t({
      blur: () => {
        _.value = false;
      },
      element: B,
      focus: () => {
        _.value = true;
      }
    }), (z, P) => (openBlock(), createBlock(yn, {
      skip: I.value,
      class: normalizeClass(unref(O))
    }, {
      default: withCtx(() => {
        var D, ae, le;
        return [
          withDirectives(createBaseVNode("input", mergeProps({ id: unref(s) }, z.$attrs, {
            ref_key: "input",
            ref: B,
            "onUpdate:modelValue": P[0] || (P[0] = (ve) => S.value = ve),
            class: unref(F),
            type: "checkbox",
            disabled: unref(b) || ((D = unref(h2)) == null ? void 0 : D.disabled.value),
            required: $.value || void 0,
            name: z.name || ((ae = unref(h2)) == null ? void 0 : ae.name.value),
            form: z.form || ((le = unref(h2)) == null ? void 0 : le.form.value),
            "aria-label": z.ariaLabel,
            "aria-labelledby": z.ariaLabelledBy,
            "aria-required": $.value || void 0,
            value: z.value,
            "true-value": z.value,
            "false-value": z.uncheckedValue,
            indeterminate: unref(u),
            onChange: P[1] || (P[1] = (ve) => unref(i) !== void 0 && l("change", unref(i))),
            onInput: P[2] || (P[2] = (ve) => unref(i) !== void 0 && l("input", unref(i)))
          }), null, 16, du), [
            [vModelCheckbox, S.value]
          ]),
          k.value || unref(f) === false ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: unref(s),
            class: normalizeClass(unref(K))
          }, [
            renderSlot(z.$slots, "default")
          ], 10, cu)) : createCommentVNode("", true)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
});
var fu = ["id"];
var vu = ["innerHTML"];
var pu = ["textContent"];
var mu = defineComponent({
  __name: "BFormCheckboxGroup",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    buttonVariant: { default: "secondary" },
    buttons: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: { default: () => [] },
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: "md" },
    stacked: { type: [String, Boolean], default: false },
    state: { type: [String, Boolean, null], default: null },
    switches: { type: [String, Boolean], default: false },
    textField: { default: "text" },
    validated: { type: [String, Boolean], default: false },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "checkbox"), s = _e(() => a.name, "checkbox"), u = r(() => a.autofocus), d = r(() => a.buttons), f = r(() => a.disabled), g = r(() => a.plain), p = r(() => a.required), y = r(() => a.stacked), b = r(() => a.state), V = r(() => a.switches), C = r(() => a.validated), c = ref(null), { focused: h2 } = xe(c, {
      initialValue: u.value
    });
    provide(an, {
      modelValue: n,
      switch: V,
      buttonVariant: toRef(() => a.buttonVariant),
      form: toRef(() => a.form),
      name: s,
      state: b,
      plain: g,
      size: toRef(() => a.size),
      inline: toRef(() => !y.value),
      required: p,
      buttons: d,
      disabled: f
    }), watch(n, ($) => {
      l("input", $), nextTick(() => {
        l("change", $);
      });
    });
    const B = computed(
      () => a.options.map(
        ($, I) => typeof $ == "string" || typeof $ == "number" ? {
          props: {
            value: $,
            disabled: f.value
          },
          text: $.toString(),
          html: void 0,
          self: Symbol(`checkboxGroupOptionItem${I}`)
        } : {
          props: {
            value: $[a.valueField],
            disabled: $[a.disabledField],
            ...$.props ? $.props : {}
          },
          text: $[a.textField],
          html: $[a.htmlField],
          self: Symbol(`checkboxGroupOptionItem${I}`)
        }
      )
    ), _ = computed(() => ({
      required: p.value,
      ariaInvalid: a.ariaInvalid,
      state: b.value,
      validated: C.value,
      buttons: d.value,
      stacked: y.value,
      size: a.size
    })), k = Dl(_), S = jl(_);
    return t({
      blur: () => {
        h2.value = false;
      },
      focus: () => {
        h2.value = true;
      }
    }), ($, I) => (openBlock(), createElementBlock("div", mergeProps(unref(k), {
      id: unref(i),
      ref_key: "element",
      ref: c,
      role: "group",
      class: [unref(S), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      renderSlot($.$slots, "first"),
      (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (T) => (openBlock(), createBlock(hn, mergeProps({
        key: T.self
      }, T.props), {
        default: withCtx(() => [
          T.html ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: T.html
          }, null, 8, vu)) : (openBlock(), createElementBlock("span", {
            key: 1,
            textContent: toDisplayString(T.text)
          }, null, 8, pu))
        ]),
        _: 2
      }, 1040))), 128)),
      renderSlot($.$slots, "default")
    ], 16, fu));
  }
});
var gu = ["for"];
var bu = ["id", "form", "name", "multiple", "disabled", "capture", "accept", "required", "aria-required", "directory", "webkitdirectory"];
var yu = defineComponent({
  inheritAttrs: false,
  __name: "BFormFile",
  props: {
    accept: { default: "" },
    autofocus: { type: [String, Boolean], default: false },
    capture: { type: [String, Boolean], default: false },
    directory: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    id: { default: void 0 },
    label: { default: "" },
    labelClass: { default: void 0 },
    modelValue: { default: null },
    multiple: { type: [String, Boolean], default: false },
    name: { default: void 0 },
    noDrop: { type: [String, Boolean], default: false },
    noTraverse: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = useSlots(), l = e, n = o, i = ke(l, "modelValue", n), s = _e(() => l.id), u = r(() => l.autofocus), d = r(() => l.directory), f = r(() => l.disabled), g = r(() => l.multiple), p = r(() => l.noDrop);
    r(() => l.noTraverse);
    const y = r(() => l.required), b = r(() => l.state), V = r(() => l.capture), C = wt(b), c = ref(null), { focused: h2 } = xe(c, { initialValue: u.value }), B = toRef(() => !Ie(a.label)), _ = toRef(
      () => typeof l.accept == "string" ? l.accept : l.accept.join(",")
    ), k = computed(() => [
      C.value,
      {
        [`form-control-${l.size}`]: l.size !== void 0
      }
    ]), S = (T) => {
      var F, K;
      const O = ((F = c.value) == null ? void 0 : F.files) === null || ((K = c.value) == null ? void 0 : K.files) === void 0 ? null : [...c.value.files];
      i.value = O === null ? null : g.value === true ? O : O[0], n("change", T);
    }, $ = (T) => {
      p.value === true && T.preventDefault();
    }, I = () => {
      i.value = null;
    };
    return watch(i, (T) => {
      T === null && c.value !== null && (c.value.value = "");
    }), t({
      blur: () => {
        h2.value = false;
      },
      element: c,
      focus: () => {
        h2.value = true;
      },
      reset: I
    }), (T, O) => (openBlock(), createElementBlock(Fragment, null, [
      B.value || T.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: unref(s),
        class: normalizeClass(["form-label", T.labelClass])
      }, [
        renderSlot(T.$slots, "label", {}, () => [
          createTextVNode(toDisplayString(T.label), 1)
        ])
      ], 10, gu)) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({ id: unref(s) }, T.$attrs, {
        ref_key: "input",
        ref: c,
        type: "file",
        class: ["form-control", k.value],
        form: T.form,
        name: T.name,
        multiple: unref(g),
        disabled: unref(f),
        capture: unref(V),
        accept: _.value || void 0,
        required: unref(y) || void 0,
        "aria-required": unref(y) || void 0,
        directory: unref(d),
        webkitdirectory: unref(d),
        onChange: S,
        onDrop: $
      }), null, 16, bu)
    ], 64));
  }
});
var Bn = ["input", "select", "textarea"];
var hu = Bn.map((e) => `${e}:not([disabled])`).join();
var Bu = [...Bn, "a", "button", "label"];
var Su = "label";
var Cu = "invalid-feedback";
var wu = "valid-feedback";
var ku = "description";
var $u = "default";
var Tu = defineComponent({
  components: { BCol: Gt, BFormInvalidFeedback: xa, BFormRow: ra, BFormText: Ma, BFormValidFeedback: Da },
  props: {
    ariaInvalid: { type: [Boolean, String], default: void 0 },
    contentCols: { type: [Boolean, String, Number], default: void 0 },
    contentColsLg: { type: [Boolean, String, Number], default: void 0 },
    contentColsMd: { type: [Boolean, String, Number], default: void 0 },
    contentColsSm: { type: [Boolean, String, Number], default: void 0 },
    contentColsXl: { type: [Boolean, String, Number], default: void 0 },
    description: { type: [String], default: void 0 },
    disabled: { type: [Boolean, String], default: false },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, default: void 0 },
    invalidFeedback: { type: String, default: void 0 },
    label: { type: String, default: void 0 },
    labelAlign: { type: [Boolean, String, Number], default: void 0 },
    labelAlignLg: { type: [Boolean, String, Number], default: void 0 },
    labelAlignMd: { type: [Boolean, String, Number], default: void 0 },
    labelAlignSm: { type: [Boolean, String, Number], default: void 0 },
    labelAlignXl: { type: [Boolean, String, Number], default: void 0 },
    labelClass: { type: [Array, Object, String], default: void 0 },
    labelCols: { type: [Boolean, String, Number], default: void 0 },
    labelColsLg: { type: [Boolean, String, Number], default: void 0 },
    labelColsMd: { type: [Boolean, String, Number], default: void 0 },
    labelColsSm: { type: [Boolean, String, Number], default: void 0 },
    labelColsXl: { type: [Boolean, String, Number], default: void 0 },
    labelFor: { type: String, default: void 0 },
    labelSize: { type: String, default: void 0 },
    labelSrOnly: { type: [Boolean, String], default: false },
    state: { type: [Boolean, String], default: null },
    tooltip: { type: [Boolean, String], default: false },
    validFeedback: { type: String, default: void 0 },
    validated: { type: [Boolean, String], default: false },
    floating: { type: [Boolean, String], default: false }
  },
  setup(e) {
    const t = r(() => e.disabled), o = r(() => e.labelSrOnly), a = r(() => e.state), l = r(() => e.tooltip), n = r(() => e.validated), i = r(() => e.floating), s = null, u = ["xs", "sm", "md", "lg", "xl"], d = (_, k) => u.reduce((S, $) => {
      const I = Lo($ === "xs" ? "" : $, `${k}Align`), T = _[I] || null;
      return T && ($ === "xs" ? S.push(`text-${T}`) : S.push(`text-${$}-${T}`)), S;
    }, []), f = (_, k) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      u.reduce((S, $) => {
        const I = Lo($ === "xs" ? "" : $, `${k}Cols`);
        let T = _[I];
        return T = T === "" ? true : T || false, typeof T != "boolean" && T !== "auto" && (T = Qi(T, 0), T = T > 0 ? T : false), T && ($ === "xs" ? S[typeof T == "boolean" ? "col" : "cols"] = T : S[$ || (typeof T == "boolean" ? "col" : "cols")] = T), S;
      }, {})
    ), g = ref(null), p = (_, k = null) => {
      if (Ka && e.labelFor && g.value !== null) {
        const S = dl(`#${ls(e.labelFor)}`, g.value);
        if (S) {
          const $ = "aria-describedby", I = (_ || "").split(sa), T = (k || "").split(sa), O = (Ya(S, $) || "").split(sa).filter((F) => !T.includes(F)).concat(I).filter((F, K, z) => z.indexOf(F) === K).filter((F) => F).join(" ").trim();
          O ? hs(S, $, O) : Bs(S, $);
        }
      }
    }, y = computed(() => f(e, "content")), b = computed(() => d(e, "label")), V = computed(() => f(e, "label")), C = computed(
      () => (
        // Determine if the form group will be rendered horizontal
        // based on the existence of 'content-col' or 'label-col' props
        Object.keys(y.value).length > 0 || Object.keys(V.value).length > 0
      )
    ), c = wt(a), h2 = Ca(() => e.ariaInvalid, a);
    return watch(
      () => s,
      (_, k) => {
        _ !== k && p(_, k);
      }
    ), onMounted(() => {
      nextTick(() => {
        p(s);
      });
    }), {
      disabledBoolean: t,
      labelSrOnlyBoolean: o,
      stateBoolean: a,
      tooltipBoolean: l,
      validatedBoolean: n,
      floatingBoolean: i,
      ariaDescribedby: s,
      computedAriaInvalid: h2,
      contentColProps: y,
      isHorizontal: C,
      labelAlignClasses: b,
      labelColProps: V,
      onLegendClick: (_) => {
        if (e.labelFor || g.value === null)
          return;
        const { target: k } = _, S = k ? k.tagName : "";
        if (Bu.indexOf(S) !== -1)
          return;
        const $ = bs(hu, g.value).filter(gs);
        $.length === 1 && ps($[0]);
      },
      stateClass: c
    };
  },
  render() {
    const e = this.$props, t = this.$slots, o = _e(), a = !e.labelFor;
    let l = null;
    const n = jt(Su, {}, t) || e.label, i = n ? qt("_BV_label_") : null;
    if (n || this.isHorizontal) {
      const _ = a ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        n && (l = h(
          _,
          {
            class: "visually-hidden",
            id: i,
            for: e.labelFor || null
          },
          n
        )), this.isHorizontal ? l = h(Gt, this.labelColProps, { default: () => l }) : l = h("div", {}, [l]);
      else {
        const k = {
          onClick: a ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? _ : null,
          id: i,
          for: e.labelFor || null,
          tabIndex: a ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": a,
              "col-form-label": this.isHorizontal || a,
              "pt-0": !this.isHorizontal && a,
              "d-block": !this.isHorizontal && !a,
              [`col-form-label-${e.labelSize}`]: !!e.labelSize
            },
            this.labelAlignClasses,
            e.labelClass
          ]
        };
        this.isHorizontal ? l = h(Gt, k, { default: () => n }) : l = h(_, k, n);
      }
    }
    let s = null;
    const u = jt(Cu, {}, t) || this.invalidFeedback, d = u ? qt("_BV_feedback_invalid_") : void 0;
    u && (s = h(
      xa,
      {
        ariaLive: e.feedbackAriaLive,
        id: d,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => u }
    ));
    let f = null;
    const g = jt(wu, {}, t) || this.validFeedback, p = g ? qt("_BV_feedback_valid_") : void 0;
    g && (f = h(
      Da,
      {
        ariaLive: e.feedbackAriaLive,
        id: p,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => g }
      // validFeedbackContent
    ));
    let y = null;
    const b = jt(ku, {}, t) || this.description, V = b ? qt("_BV_description_") : void 0;
    b && (y = h(
      Ma,
      {
        id: V
      },
      { default: () => b }
    ));
    const C = this.ariaDescribedby = [
      V,
      this.stateBoolean === false ? d : null,
      this.stateBoolean === true ? p : null
    ].filter((_) => _).join(" ") || null, c = [
      jt($u, { ariaDescribedby: C, descriptionId: V, id: o, labelId: i }, t) || "",
      s,
      f,
      y
    ];
    !this.isHorizontal && this.floatingBoolean && c.push(l);
    let h2 = h(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      c
    );
    this.isHorizontal && (h2 = h(Gt, { ref: "content", ...this.contentColProps }, { default: () => c }));
    const B = {
      class: [
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: _e(() => e.id).value,
      disabled: a ? this.disabledBoolean : null,
      role: a ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      // Only apply `aria-labelledby` if we are a horizontal fieldset
      // as the legend is no longer a direct child of fieldset
      "aria-labelledby": a && this.isHorizontal ? i : null
    };
    return this.isHorizontal && !a ? h(ra, B, { default: () => [l, h2] }) : h(
      a ? "fieldset" : "div",
      B,
      this.isHorizontal && a ? [h(ra, null, { default: () => [l, h2] })] : this.isHorizontal || !this.floatingBoolean ? [l, h2] : [h2]
    );
  }
});
var _u = ["id", "value", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
var Vu = defineComponent({
  __name: "BFormInput",
  props: {
    max: { default: void 0 },
    min: { default: void 0 },
    step: { default: void 0 },
    type: { default: "text" },
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: false },
    lazyFormatter: { type: [String, Boolean], default: false },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    number: { type: [String, Boolean], default: false },
    placeholder: { default: void 0 },
    plaintext: { type: [String, Boolean], default: false },
    readonly: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    trim: { type: [String, Boolean], default: false }
  },
  emits: ["blur", "change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { input: n, computedId: i, computedAriaInvalid: s, onInput: u, onChange: d, onBlur: f, focus: g, blur: p } = ql(a, l), y = r(() => a.disabled), b = r(() => a.required), V = r(() => a.readonly), C = r(() => a.plaintext), c = r(() => a.state), h2 = wt(c), B = ref(false), _ = computed(() => {
      const k = a.type === "range", S = a.type === "color";
      return [
        h2.value,
        {
          "form-control-highlighted": B.value,
          "form-range": k,
          "form-control": S || !a.plaintext && !k,
          "form-control-color": S,
          "form-control-plaintext": a.plaintext && !k && !S,
          [`form-control-${a.size}`]: !!a.size
        }
      ];
    });
    return t({
      blur: p,
      element: n,
      focus: g
    }), (k, S) => (openBlock(), createElementBlock("input", {
      id: unref(i),
      ref_key: "input",
      ref: n,
      value: k.modelValue,
      class: normalizeClass(_.value),
      name: k.name || void 0,
      form: k.form || void 0,
      type: k.type,
      disabled: unref(y),
      placeholder: k.placeholder,
      required: unref(b) || void 0,
      autocomplete: k.autocomplete || void 0,
      readonly: unref(V) || unref(C),
      min: k.min,
      max: k.max,
      step: k.step,
      list: k.type !== "password" ? k.list : void 0,
      "aria-required": unref(b) || void 0,
      "aria-invalid": unref(s),
      onInput: S[0] || (S[0] = ($) => unref(u)($)),
      onChange: S[1] || (S[1] = ($) => unref(d)($)),
      onBlur: S[2] || (S[2] = ($) => unref(f)($))
    }, null, 42, _u));
  }
});
var Au = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"];
var Ou = ["for"];
var Sn = defineComponent({
  inheritAttrs: false,
  __name: "BFormRadio",
  props: {
    ariaLabel: { default: void 0 },
    ariaLabelledby: { default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    button: { type: [String, Boolean], default: false },
    buttonGroup: { type: [String, Boolean], default: false },
    buttonVariant: { default: null },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: false },
    modelValue: { type: [String, Boolean, Array, Object, Number, null], default: void 0 },
    name: { default: void 0 },
    plain: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    value: { type: [String, Boolean, Array, Object, Number, null], default: true }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = ke(a, "modelValue", l, { passive: true }), s = _e(() => a.id, "form-check"), u = r(() => a.autofocus), d = r(() => a.plain), f = r(() => a.button), g = r(() => a.buttonGroup), p = r(() => a.disabled), y = r(() => a.inline), b = r(() => a.required), V = r(() => a.state), C = inject(on, null), c = ref(null), { focused: h2 } = xe(c, {
      initialValue: u.value
    }), B = toRef(() => !Ie(n.default)), _ = computed({
      get: () => (C == null ? void 0 : C.modelValue.value) ?? i.value,
      set: (F) => {
        if (F !== void 0) {
          if (C !== null) {
            C.modelValue.value = F;
            return;
          }
          i.value = F;
        }
      }
    }), k = toRef(
      () => !!(a.name ?? (C == null ? void 0 : C.name.value)) && (b.value || (C == null ? void 0 : C.required.value))
    ), S = toRef(() => g.value || ((C == null ? void 0 : C.buttons.value) ?? false)), $ = computed(() => ({
      plain: d.value || ((C == null ? void 0 : C.plain.value) ?? false),
      button: f.value || ((C == null ? void 0 : C.buttons.value) ?? false),
      inline: y.value || ((C == null ? void 0 : C.inline.value) ?? false),
      state: V.value || (C == null ? void 0 : C.state.value),
      size: a.size ?? (C == null ? void 0 : C.size.value) ?? "md",
      // This is where the true default is made
      buttonVariant: a.buttonVariant ?? (C == null ? void 0 : C.buttonVariant.value) ?? "secondary"
      // This is where the true default is made
    })), I = Rl($), T = xl($), O = Ml($);
    return t({
      blur: () => {
        h2.value = false;
      },
      element: c,
      focus: () => {
        h2.value = true;
      }
    }), (F, K) => (openBlock(), createBlock(yn, {
      skip: S.value,
      class: normalizeClass(unref(I))
    }, {
      default: withCtx(() => {
        var z, P, D;
        return [
          withDirectives(createBaseVNode("input", mergeProps({ id: unref(s) }, F.$attrs, {
            ref_key: "input",
            ref: c,
            "onUpdate:modelValue": K[0] || (K[0] = (ae) => _.value = ae),
            class: unref(T),
            type: "radio",
            disabled: unref(p) || ((z = unref(C)) == null ? void 0 : z.disabled.value),
            required: k.value || void 0,
            name: F.name || ((P = unref(C)) == null ? void 0 : P.name.value),
            form: F.form || ((D = unref(C)) == null ? void 0 : D.form.value),
            "aria-label": F.ariaLabel,
            "aria-labelledby": F.ariaLabelledby,
            value: F.value,
            "aria-required": k.value || void 0,
            onChange: K[1] || (K[1] = (ae) => unref(i) !== void 0 && l("change", unref(i))),
            onInput: K[2] || (K[2] = (ae) => unref(i) !== void 0 && l("input", unref(i)))
          }), null, 16, Au), [
            [vModelRadio, _.value]
          ]),
          B.value || unref(d) === false ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: unref(s),
            class: normalizeClass(unref(O))
          }, [
            renderSlot(F.$slots, "default")
          ], 10, Ou)) : createCommentVNode("", true)
        ];
      }),
      _: 3
    }, 8, ["skip", "class"]));
  }
});
var Eu = ["id"];
var Pu = ["innerHTML"];
var Nu = ["textContent"];
var Iu = defineComponent({
  __name: "BFormRadioGroup",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    buttonVariant: { default: "secondary" },
    buttons: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    modelValue: { type: [String, Boolean, Array, Object, Number, null], default: null },
    name: { default: void 0 },
    options: { default: () => [] },
    plain: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: "md" },
    stacked: { type: [String, Boolean], default: false },
    state: { type: [String, Boolean, null], default: null },
    textField: { default: "text" },
    validated: { type: [String, Boolean], default: false },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "radio"), s = _e(() => a.name, "checkbox"), u = r(() => a.autofocus), d = r(() => a.buttons), f = r(() => a.disabled), g = r(() => a.plain), p = r(() => a.required), y = r(() => a.stacked), b = r(() => a.state), V = r(() => a.validated), C = ref(null), { focused: c } = xe(C, {
      initialValue: u.value
    });
    provide(on, {
      modelValue: n,
      buttonVariant: toRef(() => a.buttonVariant),
      form: toRef(() => a.form),
      name: s,
      buttons: d,
      state: b,
      plain: g,
      size: toRef(() => a.size),
      inline: toRef(() => !y.value),
      required: p,
      disabled: f
    }), watch(n, (S) => {
      l("input", S), nextTick(() => {
        l("change", S);
      });
    });
    const h2 = computed(
      () => a.options.map(
        (S, $) => typeof S == "string" || typeof S == "number" ? {
          props: {
            value: S,
            disabled: f.value
          },
          text: S.toString(),
          html: void 0,
          self: Symbol(`radioGroupOptionItem${$}`)
        } : {
          props: {
            value: S[a.valueField],
            disabled: S[a.disabledField],
            ...S.props ? S.props : {}
          },
          text: S[a.textField],
          html: S[a.htmlField],
          self: Symbol(`radioGroupOptionItem${$}`)
        }
      )
    ), B = computed(() => ({
      required: p.value,
      ariaInvalid: a.ariaInvalid,
      state: b.value,
      validated: V.value,
      buttons: d.value,
      stacked: y.value,
      size: a.size
    })), _ = Dl(B), k = jl(B);
    return t({
      blur: () => {
        c.value = false;
      },
      focus: () => {
        c.value = true;
      }
    }), (S, $) => (openBlock(), createElementBlock("div", mergeProps(unref(_), {
      id: unref(i),
      ref_key: "element",
      ref: C,
      role: "radiogroup",
      class: [unref(k), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      renderSlot(S.$slots, "first"),
      (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (I) => (openBlock(), createBlock(Sn, mergeProps({
        key: I.self
      }, I.props), {
        default: withCtx(() => [
          I.html ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: I.html
          }, null, 8, Pu)) : (openBlock(), createElementBlock("span", {
            key: 1,
            textContent: toDisplayString(I.text)
          }, null, 8, Nu))
        ]),
        _: 2
      }, 1040))), 128)),
      renderSlot(S.$slots, "default")
    ], 16, Eu));
  }
});
var Lu = ["value", "disabled"];
var po = defineComponent({
  __name: "BFormSelectOption",
  props: {
    disabled: { type: [String, Boolean], default: false },
    value: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.disabled);
    return (a, l) => (openBlock(), createElementBlock("option", {
      value: a.value,
      disabled: unref(o)
    }, [
      renderSlot(a.$slots, "default")
    ], 8, Lu));
  }
});
var Fu = ["label"];
var Cn = defineComponent({
  __name: "BFormSelectOptionGroup",
  props: {
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    label: { default: void 0 },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(e) {
    const t = e, o = computed(
      () => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        no(t.options, "BFormSelectOptionGroup", t)
      )
    );
    return (a, l) => (openBlock(), createElementBlock("optgroup", { label: a.label }, [
      renderSlot(a.$slots, "first"),
      (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (n, i) => (openBlock(), createBlock(po, mergeProps({
        key: i,
        value: n.value,
        disabled: n.disabled
      }, a.$attrs, {
        innerHTML: n.html || n.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      renderSlot(a.$slots, "default")
    ], 8, Fu));
  }
});
var Hu = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"];
var zu = defineComponent({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    disabledField: { default: "disabled" },
    form: { default: void 0 },
    htmlField: { default: "html" },
    id: { default: void 0 },
    labelField: { default: "label" },
    modelValue: { default: "" },
    multiple: { type: [String, Boolean], default: false },
    name: { default: void 0 },
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    selectSize: { default: 0 },
    size: { default: "md" },
    state: { type: [String, Boolean, null], default: null },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  emits: ["change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(() => a.id, "input"), s = r(() => a.autofocus), u = r(() => a.disabled), d = r(() => a.multiple), f = r(() => a.plain), g = r(() => a.required), p = r(() => a.state), y = he(() => a.selectSize), b = wt(p), V = ref(null), { focused: C } = xe(V, {
      initialValue: s.value
    }), c = computed(() => [
      b.value,
      {
        "form-control": f.value,
        [`form-control-${a.size}`]: a.size !== "md" && f.value,
        "form-select": !f.value,
        [`form-select-${a.size}`]: a.size !== "md" && !f.value
      }
    ]), h2 = toRef(
      () => y.value || f.value ? y.value : void 0
    ), B = Ca(() => a.ariaInvalid, p), _ = computed(() => no(a.options, "BFormSelect", a)), k = computed({
      get: () => n.value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set: (S) => {
        l("input", S), n.value = S, nextTick(() => {
          l("change", S);
        });
      }
    });
    return t({
      blur: () => {
        C.value = false;
      },
      element: V,
      focus: () => {
        C.value = true;
      }
    }), (S, $) => withDirectives((openBlock(), createElementBlock("select", {
      id: unref(i),
      ref_key: "input",
      ref: V,
      "onUpdate:modelValue": $[0] || ($[0] = (I) => k.value = I),
      class: normalizeClass(c.value),
      name: S.name,
      form: S.form || void 0,
      multiple: unref(d) || void 0,
      size: h2.value,
      disabled: unref(u),
      required: unref(g) || void 0,
      "aria-required": unref(g) || void 0,
      "aria-invalid": unref(B)
    }, [
      renderSlot(S.$slots, "first"),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, (I, T) => (openBlock(), createElementBlock(Fragment, { key: T }, [
        Array.isArray(I.options) ? (openBlock(), createBlock(Cn, {
          key: 0,
          label: I.label,
          options: I.options
        }, null, 8, ["label", "options"])) : (openBlock(), createBlock(po, {
          key: 1,
          value: I.value,
          disabled: I.disabled,
          innerHTML: I.html || I.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      renderSlot(S.$slots, "default")
    ], 10, Hu)), [
      [vModelSelect, k.value]
    ]);
  }
});
var xo = [
  "ar",
  "az",
  "ckb",
  "fa",
  "he",
  "ks",
  "lrc",
  "mzn",
  "ps",
  "sd",
  "te",
  "ug",
  "ur",
  "yi"
].map((e) => e.toLowerCase());
var Ru = (e) => {
  const t = ca(e).toLowerCase().replace(Jn, "").split("-"), o = t.slice(0, 2).join("-"), [a] = t;
  return xo.includes(o) || xo.includes(a);
};
var xu = (e) => ds ? Po(e) ? e : { capture: !!e || false } : !!(Po(e) ? e.capture : e);
var Mu = (e, t, o, a) => {
  e && e.addEventListener && e.addEventListener(t, o, xu(a));
};
var Du = (e, t, o, a) => {
  e && e.removeEventListener && e.removeEventListener(t, o, a);
};
var Mo = (e, t) => {
  (e ? Mu : Du)(...t);
};
var na = (e, { preventDefault: t = true, propagation: o = true, immediatePropagation: a = false } = {}) => {
  t && e.preventDefault(), o && e.stopPropagation(), a && e.stopImmediatePropagation();
};
var Na = "ArrowDown";
var Do = "End";
var jo = "Home";
var qo = "PageDown";
var Go = "PageUp";
var Ia = "ArrowUp";
var ju = ["lang", "tabindex", "title"];
var qu = ["name", "form", "value"];
var Gu = ["id", "dir", "tabindex", "aria-label", "aria-invalid", "aria-required", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext"];
var je = {
  min: 1,
  max: 100,
  step: 1,
  repeatDelay: 500,
  repeatInterval: 100,
  repeatThreshold: 10,
  repeatMultiplier: 4
};
var Wu = defineComponent({
  __name: "BFormSpinbutton",
  props: {
    ariaControls: { default: void 0 },
    ariaLabel: { default: void 0 },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    formatterFn: { type: Function, default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: false },
    labelDecrement: { default: "Decrement" },
    labelIncrement: { default: "Increment" },
    locale: { default: "locale" },
    max: { default: je.max },
    min: { default: je.min },
    modelValue: { default: null },
    name: { default: void 0 },
    placeholder: { default: void 0 },
    readonly: { type: [String, Boolean], default: false },
    repeatDelay: { default: je.repeatDelay },
    repeatInterval: { default: je.repeatInterval },
    repeatStepMultiplier: { default: je.repeatMultiplier },
    repeatThreshold: { default: je.repeatThreshold },
    required: { type: [String, Boolean], default: false },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    step: { default: je.step },
    vertical: { type: [String, Boolean], default: false },
    wrap: { type: [String, Boolean], default: false }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = [Ia, Na, jo, Do, Go, qo], a = e, l = t, n = ke(a, "modelValue", l, { passive: true }), i = ref(null), { focused: s } = xe(i), u = _e(() => a.id, "spinbutton"), d = r(() => a.disabled), f = r(() => a.inline), g = r(() => a.readonly), p = r(() => a.vertical), y = r(() => a.required), b = r(() => a.wrap), V = r(() => a.state), C = computed(() => ({
      disabled: d.value,
      readonly: g.value,
      focus: s.value,
      "d-inline-flex": f.value || p.value,
      "d-flex": !f.value && !p.value,
      "align-items-stretch": !p.value,
      "flex-column": p.value,
      [`form-control-${a.size}`]: a.size !== void 0
    })), c = computed(() => ({
      "d-flex": p.value,
      "align-self-center": !p.value,
      "align-items-center": p.value,
      "border-top": p.value,
      "border-bottom": p.value,
      "border-start": !p.value,
      "border-end": !p.value
    }));
    let h2, B, _ = false;
    const k = he(() => a.step), S = toRef(
      () => Number.isNaN(k.value) ? je.step : k.value
    ), $ = he(() => a.min), I = toRef(
      () => Number.isNaN($.value) ? je.min : $.value
    ), T = he(() => a.max), O = toRef(() => {
      const ie = S.value, ce = I.value;
      return Math.floor((T.value - ce) / ie) * ie + ce;
    }), F = he(() => a.repeatDelay, {
      nanToZero: true,
      method: "parseInt"
    }), K = toRef(
      () => F.value > 0 ? F.value : je.repeatDelay
    ), z = he(() => a.repeatInterval, {
      nanToZero: true,
      method: "parseInt"
    }), P = toRef(
      () => z.value > 0 ? z.value : je.repeatInterval
    ), D = he(() => a.repeatThreshold, {
      nanToZero: true,
      method: "parseInt"
    }), ae = toRef(
      () => Math.max(
        Number.isNaN(D.value) ? je.repeatThreshold : D.value,
        1
      )
    ), le = he(() => a.repeatStepMultiplier, {
      nanToZero: true,
      method: "parseInt"
    }), ve = toRef(
      () => Math.max(
        Number.isNaN(le.value) ? je.repeatMultiplier : le.value,
        1
      )
    ), Be = toRef(() => {
      const ie = S.value;
      return Math.floor(ie) === ie ? 0 : (ie.toString().split(".")[1] || "").length;
    }), Ve = toRef(() => Math.pow(10, Be.value || 0)), oe = toRef(
      () => n.value === null ? "" : n.value.toFixed(Be.value)
    ), fe = computed(() => {
      const ie = [a.locale];
      return new Intl.NumberFormat(ie).resolvedOptions().locale;
    }), $e = computed(
      () => (
        // TODO
        Ru(fe.value)
      )
    ), we = () => new Intl.NumberFormat(fe.value, {
      style: "decimal",
      useGrouping: false,
      minimumIntegerDigits: 1,
      minimumFractionDigits: Be.value,
      maximumFractionDigits: Be.value,
      notation: "standard"
    }).format, M = toRef(() => a.formatterFn ?? we()), L = (ie) => {
      let { value: ce } = n;
      if (!d.value && ce !== null) {
        const Ce = S.value * ie, Y = I.value, re = O.value, Ae = Ve.value, { wrap: He } = a;
        ce = Math.round((ce - Y) / Ce) * Ce + Y + Ce, ce = Math.round(ce * Ae) / Ae, n.value = ce > re ? He ? Y : re : ce < Y ? He ? re : Y : ce;
      }
    }, U = (ie = 1) => {
      if (n.value === null) {
        n.value = I.value;
        return;
      }
      L(1 * ie);
    }, H = (ie = 1) => {
      if (n.value === null) {
        n.value = b.value ? O.value : I.value;
        return;
      }
      L(-1 * ie);
    };
    qe(
      o,
      (ie) => {
        const { code: ce, altKey: Ce, ctrlKey: Y, metaKey: re } = ie;
        if (!(d.value || g.value || Ce || Y || re) && (na(ie, { propagation: false }), !_)) {
          if (me(), [Ia, Na].includes(ce)) {
            if (_ = true, ce === Ia) {
              G(ie, U);
              return;
            }
            ce === Na && G(ie, H);
            return;
          }
          if (ce === Go) {
            U(ve.value);
            return;
          }
          if (ce === qo) {
            H(ve.value);
            return;
          }
          if (ce === jo) {
            n.value = I.value;
            return;
          }
          ce === Do && (n.value = O.value);
        }
      },
      { target: i, eventName: "keydown" }
    ), qe(
      o,
      (ie) => {
        const { altKey: ce, ctrlKey: Ce, metaKey: Y } = ie;
        d.value || g.value || ce || Ce || Y || (na(ie, { propagation: false }), me(), _ = false, l("change", n.value));
      },
      { target: i, eventName: "keyup" }
    );
    const G = (ie, ce) => {
      const { type: Ce } = ie || {};
      if (!d.value && !g.value) {
        if (X(ie) && Ce === "mousedown" && ie.button)
          return;
        me(), ce(1);
        const Y = ae.value, re = ve.value, Ae = K.value, He = P.value;
        h2 = setTimeout(() => {
          let Re = 0;
          B = setInterval(() => {
            ce(Re < Y ? 1 : re), Re++;
          }, He);
        }, Ae);
      }
    }, X = (ie) => ie.type === "mouseup" || ie.type === "mousedown", te = (ie) => {
      X(ie) && ie.type === "mouseup" && ie.button || (na(ie, { propagation: false }), me(), be(false), l("change", n.value));
    }, be = (ie) => {
      try {
        Mo(ie, [document.body, "mouseup", te, false]), Mo(ie, [document.body, "touchend", te, false]);
      } catch {
      }
    }, me = () => {
      clearTimeout(h2), clearInterval(B), h2 = void 0, B = void 0;
    }, de = computed(() => {
      const ie = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-plus",
          viewBox: "0 0 16 16"
        },
        path: {
          d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        }
      }, ce = {
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          fill: "currentColor",
          class: "bi bi-dash",
          viewBox: "0 0 16 16"
        },
        path: { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }
      }, Ce = {
        class: [{ "py-0": !p.value }, "btn", "btn-sm", "border-0", "rounded-0"],
        tabindex: "-1",
        type: "button",
        disabled: d.value || g.value,
        "aria-disabled": d.value || g.value ? true : void 0,
        "aria-controls": u.value
      }, Y = {
        "aria-hidden": true,
        scale: s.value ? 1.5 : 1.25
      }, re = (Re, kt) => {
        !d.value && !g.value && (na(Re, { propagation: false }), be(true), s.value = true, G(Re, kt));
      }, Ae = {
        button: {
          ...Ce,
          "aria-label": a.labelIncrement || void 0,
          "aria-keyshortcuts": "ArrowUp"
        },
        svg: {
          ...Y,
          ...ie.svg
        },
        path: {
          ...ie.path
        },
        slot: {
          name: "increment"
        },
        handler: (Re) => re(Re, U)
      }, He = {
        button: {
          ...Ce,
          "aria-label": a.labelDecrement || void 0,
          "aria-keyshortcuts": "ArrowDown"
        },
        svg: {
          ...Y,
          ...ce.svg
        },
        path: {
          ...ce.path
        },
        slot: {
          name: "decrement"
        },
        handler: (Re) => re(Re, H)
      };
      return {
        top: {
          ...p.value ? Ae : He
        },
        bottom: {
          ...p.value ? He : Ae
        }
      };
    });
    return (ie, ce) => (openBlock(), createElementBlock("div", {
      ref_key: "element",
      ref: i,
      class: normalizeClass(["b-form-spinbutton form-control", C.value]),
      role: "group",
      lang: fe.value,
      tabindex: unref(d) ? void 0 : "-1",
      title: ie.ariaLabel,
      onClick: ce[4] || (ce[4] = (Ce) => s.value = true)
    }, [
      renderSlot(ie.$slots, de.value.top.slot.name, { hasFocus: unref(s) }, () => [
        createBaseVNode("button", mergeProps(de.value.top.button, {
          onMousedown: ce[0] || (ce[0] = //@ts-ignore
          (...Ce) => de.value.top.handler && de.value.top.handler(...Ce)),
          onTouchstart: ce[1] || (ce[1] = //@ts-ignore
          (...Ce) => de.value.top.handler && de.value.top.handler(...Ce))
        }), [
          (openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(de.value.top.svg)), [
            createBaseVNode("path", normalizeProps(guardReactiveProps(de.value.top.path)), null, 16)
          ], 16))
        ], 16)
      ]),
      ie.name && !unref(d) ? (openBlock(), createElementBlock("input", {
        key: "hidden",
        type: "hidden",
        name: ie.name,
        form: ie.form,
        value: oe.value
      }, null, 8, qu)) : createCommentVNode("", true),
      createBaseVNode("output", {
        id: unref(u),
        key: "output",
        class: normalizeClass(["flex-grow-1", c.value]),
        dir: $e.value ? "rtl" : "ltr",
        tabindex: unref(d) ? void 0 : "0",
        role: "spinbutton",
        "aria-live": "off",
        "aria-label": ie.ariaLabel || void 0,
        "aria-invalid": unref(V) === false || !unref(n) !== null && unref(y) ? true : void 0,
        "aria-required": unref(y) ? true : void 0,
        "aria-valuemin": I.value,
        "aria-valuemax": O.value,
        "aria-valuenow": unref(n) !== null ? unref(n) : void 0,
        "aria-valuetext": unref(n) !== null ? M.value(unref(n)) : void 0
      }, [
        createBaseVNode("bdi", null, toDisplayString((unref(n) !== null ? M.value(unref(n)) : ie.placeholder) || ""), 1)
      ], 10, Gu),
      renderSlot(ie.$slots, de.value.bottom.slot.name, { hasFocus: unref(s) }, () => [
        createBaseVNode("button", mergeProps(de.value.bottom.button, {
          onMousedown: ce[2] || (ce[2] = //@ts-ignore
          (...Ce) => de.value.bottom.handler && de.value.bottom.handler(...Ce)),
          onTouchstart: ce[3] || (ce[3] = //@ts-ignore
          (...Ce) => de.value.bottom.handler && de.value.bottom.handler(...Ce))
        }), [
          (openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(de.value.bottom.svg)), [
            createBaseVNode("path", normalizeProps(guardReactiveProps(de.value.bottom.path)), null, 16)
          ], 16))
        ], 16)
      ])
    ], 10, ju));
  }
});
var Uu = ["id"];
var wn = defineComponent({
  __name: "BFormTag",
  props: {
    disabled: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    noRemove: { type: [String, Boolean], default: false },
    pill: { type: [String, Boolean], default: false },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    title: { default: void 0 },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = useSlots(), n = _e(() => o.id), i = r(() => o.disabled), s = r(() => o.noRemove), u = r(() => o.pill), d = computed(
      () => {
        var p;
        return ((((p = l.default) == null ? void 0 : p.call(l, {})[0].children) ?? "").toString() || o.title) ?? "";
      }
    ), f = toRef(() => `${n.value}taglabel__`), g = computed(() => ({
      [`text-bg-${o.variant}`]: o.variant !== null,
      "rounded-pill": u.value,
      disabled: i.value
    }));
    return (p, y) => (openBlock(), createBlock(resolveDynamicComponent(p.tag), {
      id: unref(n),
      title: d.value,
      class: normalizeClass(["badge b-form-tag d-inline-flex align-items-center mw-100", g.value]),
      "aria-labelledby": f.value
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          id: f.value,
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          renderSlot(p.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(d.value), 1)
          ])
        ], 8, Uu),
        !unref(i) && !unref(s) ? (openBlock(), createBlock(Dt, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": p.removeLabel,
          class: "b-form-tag-remove",
          "aria-describedby": f.value,
          "aria-controls": p.id,
          onClick: y[0] || (y[0] = (b) => a("remove", d.value))
        }, null, 8, ["aria-label", "aria-describedby", "aria-controls"])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
});
var Xu = ["id"];
var Ku = ["id", "for", "aria-live"];
var Yu = ["id", "aria-live"];
var Zu = ["id"];
var Ju = ["aria-controls"];
var Qu = {
  role: "group",
  class: "d-flex"
};
var ed = ["id", "disabled", "value", "type", "placeholder", "form", "required", "aria-required"];
var td = ["disabled"];
var ad = {
  "aria-live": "polite",
  "aria-atomic": "true"
};
var od = {
  key: 0,
  class: "d-block invalid-feedback"
};
var ld = {
  key: 1,
  class: "form-text text-body-secondary"
};
var nd = {
  key: 2,
  class: "form-text text-body-secondary"
};
var sd = ["name", "value"];
var id = defineComponent({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { type: [String, Boolean], default: false },
    autofocus: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    duplicateTagText: { default: "Duplicate tag(s)" },
    form: { default: void 0 },
    inputAttrs: { default: void 0 },
    inputClass: { default: void 0 },
    inputId: { default: void 0 },
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    limit: { default: void 0 },
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: { default: void 0 },
    noAddOnEnter: { type: [String, Boolean], default: false },
    noOuterFocus: { type: [String, Boolean], default: false },
    noTagRemove: { type: [String, Boolean], default: false },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    separator: { default: void 0 },
    size: { default: "md" },
    state: { type: [String, Boolean, null], default: null },
    tagClass: { default: void 0 },
    tagPills: { type: [String, Boolean], default: false },
    tagRemoveLabel: { default: void 0 },
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => true },
    tagVariant: { default: "secondary" }
  },
  emits: ["blur", "focus", "focusin", "focusout", "input", "tag-state", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "modelValue", l), i = _e(), s = r(() => a.addOnChange), u = r(() => a.autofocus), d = r(() => a.disabled), f = r(() => a.noAddOnEnter), g = r(() => a.noOuterFocus), p = r(() => a.noTagRemove), y = r(() => a.removeOnDelete), b = r(() => a.required), V = r(() => a.state), C = r(() => a.tagPills), c = he(() => a.limit ?? NaN), h2 = wt(V), B = ref(null), { focused: _ } = xe(B, {
      initialValue: u.value
    }), k = toRef(() => a.inputId || `${i.value}input__`), S = ref(n.value), $ = ref(""), I = ref(n.value.length > 0), T = ref(""), O = ref([]), F = ref([]), K = ref([]), z = computed(() => [
      h2.value,
      {
        [`form-control-${a.size}`]: a.size !== "md",
        disabled: d.value,
        focus: _.value
      }
    ]), P = computed(() => S.value.includes($.value)), D = computed(
      () => $.value === "" ? false : !a.tagValidator($.value)
    ), ae = toRef(() => S.value.length === c.value), le = toRef(() => !D.value && !P.value), ve = computed(() => ({
      addButtonText: a.addButtonText,
      addButtonVariant: a.addButtonVariant,
      addTag: U,
      disableAddButton: le.value,
      disabled: d.value,
      duplicateTagText: a.duplicateTagText,
      duplicateTags: K.value,
      form: a.form,
      inputAttrs: {
        ...a.inputAttrs,
        disabled: d.value,
        form: a.form,
        id: k,
        value: $
      },
      inputHandlers: {
        input: fe,
        keydown: we,
        change: $e
      },
      inputId: k,
      inputType: a.inputType,
      invalidTagText: a.invalidTagText,
      invalidTags: F.value,
      isDuplicate: P.value,
      isInvalid: D.value,
      isLimitReached: ae.value,
      limitTagsText: a.limitTagsText,
      limit: c.value,
      noTagRemove: p.value,
      placeholder: a.placeholder,
      removeTag: H,
      required: b.value,
      separator: a.separator,
      size: a.size,
      state: V.value,
      tagClass: a.tagClass,
      tagPills: C.value,
      tagRemoveLabel: a.tagRemoveLabel,
      tagVariant: a.tagVariant,
      tags: S.value
    }));
    watch(n, (G) => {
      S.value = G;
    });
    const Be = (G) => {
      if (d.value) {
        G.target.blur();
        return;
      }
      l("focusin", G);
    }, Ve = (G) => {
      d.value || g.value || (_.value = true, l("focus", G));
    }, oe = (G) => {
      _.value = false, l("blur", G);
    }, fe = (G) => {
      var te, be;
      const X = typeof G == "string" ? G : G.target.value;
      if (I.value = false, (te = a.separator) != null && te.includes(X.charAt(0)) && X.length > 0) {
        B.value && (B.value.value = "");
        return;
      }
      if ($.value = X, (be = a.separator) != null && be.includes(X.charAt(X.length - 1))) {
        U(X.slice(0, X.length - 1));
        return;
      }
      O.value = a.tagValidator(X) && !P.value ? [X] : [], F.value = a.tagValidator(X) ? [] : [X], K.value = P.value ? [X] : [], l("tag-state", O.value, F.value, K.value);
    }, $e = (G) => {
      s.value && (fe(G), P.value || U($.value));
    }, we = (G) => {
      if (G.key === "Enter" && !f.value) {
        U($.value);
        return;
      }
      (G.key === "Backspace" || G.key === "Delete") && y.value && $.value === "" && I.value && S.value.length > 0 ? H(S.value[S.value.length - 1]) : I.value = true;
    };
    qe(we, { target: B });
    const M = computed(() => {
      if (a.separator)
        return typeof a.separator == "string" ? a.separator : a.separator.join("");
    }), L = computed(() => {
      if (M.value)
        return new RegExp(`[${os(M.value)}]+`);
    }), U = (G) => {
      G = (G ?? $.value).trim();
      const X = L.value ? G.split(L.value).map((me) => me.trim()) : [G], te = [];
      for (const me of X)
        if (!(me === "" || P.value || !a.tagValidator(me))) {
          if (c.value && ae.value)
            break;
          te.push(me);
        }
      const be = [...n.value, ...te];
      $.value = "", I.value = true, n.value = be, l("input", be), _.value = true;
    }, H = (G) => {
      const X = S.value.indexOf((G == null ? void 0 : G.toString()) ?? "");
      T.value = S.value.splice(X, 1).toString(), n.value = S.value;
    };
    return t({
      blur: () => {
        _.value = false;
      },
      element: B,
      focus: () => {
        _.value = true;
      }
    }), (G, X) => (openBlock(), createElementBlock("div", {
      id: unref(i),
      class: normalizeClass(["b-form-tags form-control h-auto", z.value]),
      role: "group",
      tabindex: "-1",
      onFocusin: Be,
      onFocusout: X[1] || (X[1] = (te) => l("focusout", te))
    }, [
      createBaseVNode("output", {
        id: `${unref(i)}selected_tags__`,
        class: "visually-hidden",
        for: k.value,
        "aria-live": unref(_) ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, toDisplayString(S.value.join(", ")), 9, Ku),
      createBaseVNode("div", {
        id: `${unref(i)}removed_tags__`,
        role: "status",
        "aria-live": unref(_) ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + toDisplayString(G.tagRemovedLabel) + ") " + toDisplayString(T.value), 9, Yu),
      renderSlot(G.$slots, "default", normalizeProps(guardReactiveProps(ve.value)), () => [
        createBaseVNode("ul", {
          id: `${unref(i)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (te, be) => renderSlot(G.$slots, "tag", {
            key: be,
            tag: te,
            tagClass: G.tagClass,
            tagVariant: G.tagVariant,
            tagPills: unref(C),
            removeTag: H
          }, () => [
            (openBlock(), createBlock(wn, {
              key: te,
              class: normalizeClass(G.tagClass),
              tag: "li",
              variant: G.tagVariant,
              pill: G.tagPills,
              onRemove: H
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(te), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"]))
          ])), 128)),
          createBaseVNode("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${unref(i)}tag_list__`
          }, [
            createBaseVNode("div", Qu, [
              createBaseVNode("input", mergeProps({
                id: k.value,
                ref_key: "input",
                ref: B,
                disabled: unref(d),
                value: $.value,
                type: G.inputType,
                placeholder: G.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, G.inputAttrs, {
                form: G.form,
                required: unref(b) || void 0,
                "aria-required": unref(b) || void 0,
                onInput: fe,
                onChange: $e,
                onFocus: Ve,
                onBlur: oe
              }), null, 16, ed),
              le.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: normalizeClass(["btn b-form-tags-button py-0", [
                  G.inputClass,
                  {
                    [`btn-${G.addButtonVariant}`]: G.addButtonVariant !== null,
                    "disabled invisible": $.value.length === 0
                  }
                ]]),
                style: { "font-size": "90%" },
                disabled: unref(d) || $.value.length === 0 || ae.value,
                onClick: X[0] || (X[0] = (te) => U($.value))
              }, [
                renderSlot(G.$slots, "add-button-text", {}, () => [
                  createTextVNode(toDisplayString(G.addButtonText), 1)
                ])
              ], 10, td)) : createCommentVNode("", true)
            ])
          ], 8, Ju)
        ], 8, Zu),
        createBaseVNode("div", ad, [
          D.value ? (openBlock(), createElementBlock("div", od, toDisplayString(G.invalidTagText) + ": " + toDisplayString($.value), 1)) : createCommentVNode("", true),
          P.value ? (openBlock(), createElementBlock("small", ld, toDisplayString(G.duplicateTagText) + ": " + toDisplayString($.value), 1)) : createCommentVNode("", true),
          S.value.length === G.limit ? (openBlock(), createElementBlock("small", nd, "Tag limit reached")) : createCommentVNode("", true)
        ])
      ]),
      G.name ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(S.value, (te, be) => (openBlock(), createElementBlock("input", {
        key: be,
        type: "hidden",
        name: G.name,
        value: te
      }, null, 8, sd))), 128)) : createCommentVNode("", true)
    ], 42, Xu));
  }
});
var rd = ["id", "name", "form", "value", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
var ud = defineComponent({
  __name: "BFormTextarea",
  props: {
    noResize: { type: [String, Boolean], default: false },
    rows: { default: 2 },
    wrap: { default: "soft" },
    ariaInvalid: { type: [String, Boolean], default: void 0 },
    autocomplete: { default: void 0 },
    autofocus: { type: [String, Boolean], default: false },
    disabled: { type: [String, Boolean], default: false },
    form: { default: void 0 },
    debounce: { default: 0 },
    debounceMaxWait: { default: NaN },
    formatter: { type: Function, default: void 0 },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: false },
    lazyFormatter: { type: [String, Boolean], default: false },
    list: { default: void 0 },
    modelValue: { default: "" },
    name: { default: void 0 },
    number: { type: [String, Boolean], default: false },
    placeholder: { default: void 0 },
    plaintext: { type: [String, Boolean], default: false },
    readonly: { type: [String, Boolean], default: false },
    required: { type: [String, Boolean], default: false },
    size: { default: void 0 },
    state: { type: [String, Boolean, null], default: null },
    trim: { type: [String, Boolean], default: false }
  },
  emits: ["blur", "change", "input", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { input: n, computedId: i, computedAriaInvalid: s, onInput: u, onChange: d, onBlur: f, focus: g, blur: p } = ql(a, l), y = r(() => a.disabled), b = r(() => a.required), V = r(() => a.readonly), C = r(() => a.plaintext), c = r(() => a.noResize), h2 = r(() => a.state), B = wt(h2), _ = computed(() => [
      B.value,
      {
        "form-control": !a.plaintext,
        "form-control-plaintext": a.plaintext,
        [`form-control-${a.size}`]: !!a.size
      }
    ]), k = computed(() => ({
      resize: c.value ? "none" : void 0
    }));
    return t({
      blur: p,
      element: n,
      focus: g
    }), (S, $) => (openBlock(), createElementBlock("textarea", {
      id: unref(i),
      ref_key: "input",
      ref: n,
      class: normalizeClass(_.value),
      name: S.name || void 0,
      form: S.form || void 0,
      value: S.modelValue,
      disabled: unref(y),
      placeholder: S.placeholder,
      required: unref(b) || void 0,
      autocomplete: S.autocomplete || void 0,
      readonly: unref(V) || unref(C),
      "aria-required": S.required || void 0,
      "aria-invalid": unref(s),
      rows: S.rows,
      style: normalizeStyle(k.value),
      wrap: S.wrap || void 0,
      onInput: $[0] || ($[0] = (I) => unref(u)(I)),
      onChange: $[1] || ($[1] = (I) => unref(d)(I)),
      onBlur: $[2] || ($[2] = (I) => unref(f)(I))
    }, null, 46, rd));
  }
});
var dd = {
  key: 0,
  class: "input-group-text"
};
var cd = ["innerHTML"];
var fd = { key: 1 };
var vd = {
  key: 0,
  class: "input-group-text"
};
var pd = ["innerHTML"];
var md = { key: 1 };
var gd = defineComponent({
  __name: "BInputGroup",
  props: {
    append: { default: void 0 },
    appendHtml: { default: void 0 },
    id: { default: void 0 },
    prepend: { default: void 0 },
    prependHtml: { default: void 0 },
    size: { default: "md" },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`input-group-${t.size}`]: t.size !== "md"
    })), a = toRef(() => !!t.append || !!t.appendHtml), l = toRef(() => !!t.prepend || !!t.prependHtml);
    return (n, i) => (openBlock(), createBlock(resolveDynamicComponent(n.tag), {
      id: n.id,
      class: normalizeClass(["input-group", o.value]),
      role: "group"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "prepend", {}, () => [
          l.value ? (openBlock(), createElementBlock("span", dd, [
            n.prependHtml ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: n.prependHtml
            }, null, 8, cd)) : (openBlock(), createElementBlock("span", fd, toDisplayString(n.prepend), 1))
          ])) : createCommentVNode("", true)
        ]),
        renderSlot(n.$slots, "default"),
        renderSlot(n.$slots, "append", {}, () => [
          a.value ? (openBlock(), createElementBlock("span", vd, [
            n.appendHtml ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: n.appendHtml
            }, null, 8, pd)) : (openBlock(), createElementBlock("span", md, toDisplayString(n.append), 1))
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
});
var kn = defineComponent({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(resolveDynamicComponent(t.tag), { class: "input-group-text" }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(t.text), 1)
        ])
      ]),
      _: 3
    }));
  }
});
var mo = defineComponent({
  __name: "BInputGroupAddon",
  props: {
    isText: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.isText);
    return (a, l) => unref(o) ? (openBlock(), createBlock(kn, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    })) : renderSlot(a.$slots, "default", { key: 1 });
  }
});
var bd = defineComponent({
  __name: "BInputGroupAppend",
  props: {
    isText: { type: [String, Boolean], default: false }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(mo, normalizeProps(guardReactiveProps(t.$props)), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yd = defineComponent({
  __name: "BInputGroupPrepend",
  props: {
    isText: { type: [String, Boolean], default: false }
  },
  setup(e) {
    return (t, o) => (openBlock(), createBlock(mo, normalizeProps(guardReactiveProps(t.$props)), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hd = defineComponent({
  __name: "BListGroup",
  props: {
    flush: { type: [String, Boolean], default: false },
    horizontal: { type: [String, Boolean], default: false },
    numbered: { type: [String, Boolean], default: false },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, o = r(() => t.flush), a = r(() => t.numbered), l = r(() => t.horizontal), n = computed(() => {
      const s = o.value ? false : l.value;
      return {
        "list-group-flush": o.value,
        "list-group-horizontal": s === true,
        [`list-group-horizontal-${s}`]: typeof s == "string",
        "list-group-numbered": a.value
      };
    }), i = toRef(() => a.value === true ? "ol" : t.tag);
    return provide(Ql, {
      numbered: a
    }), (s, u) => (openBlock(), createBlock(resolveDynamicComponent(i.value), {
      class: normalizeClass(["list-group", n.value])
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var Bd = defineComponent({
  __name: "BListGroupItem",
  props: {
    action: { type: [String, Boolean], default: false },
    button: { type: [String, Boolean], default: false },
    tag: { default: "div" },
    active: { type: [String, Boolean], default: false },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = useAttrs(), a = inject(Ql, null), l = r(() => t.action), n = r(() => t.active), i = r(() => t.button), s = r(() => t.disabled), { computedLink: u } = Ct(t), d = toRef(() => !i.value && u.value), f = toRef(
      () => a != null && a.numbered.value ? "li" : i.value ? "button" : d.value ? rt : t.tag
    ), g = computed(
      () => l.value || d.value || i.value || ["a", "router-link", "button", "b-link"].includes(t.tag)
    ), p = computed(() => ({
      [`list-group-item-${t.variant}`]: t.variant !== null && t.variant !== void 0,
      "list-group-item-action": g.value,
      active: n.value,
      disabled: s.value
    })), y = computed(() => {
      const b = {};
      return i.value && ((!o || !o.type) && (b.type = "button"), s.value && (b.disabled = true)), b;
    });
    return (b, V) => (openBlock(), createBlock(resolveDynamicComponent(f.value), mergeProps({
      class: ["list-group-item", p.value],
      "aria-current": unref(n) ? true : void 0,
      "aria-disabled": unref(s) ? true : void 0,
      target: d.value ? b.target : void 0,
      href: unref(i) ? void 0 : b.href,
      to: unref(i) ? void 0 : b.to
    }, y.value), {
      default: withCtx(() => [
        renderSlot(b.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
});
var Ta = defineComponent({
  __name: "BOverlay",
  props: {
    bgColor: { default: void 0 },
    blur: { default: "2px" },
    fixed: { type: [String, Boolean], default: false },
    noCenter: { type: [String, Boolean], default: false },
    noFade: { type: [String, Boolean], default: false },
    noSpinner: { type: [String, Boolean], default: false },
    noWrap: { type: [String, Boolean], default: false },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    show: { type: [String, Boolean], default: false },
    spinnerSmall: { type: [String, Boolean], default: false },
    spinnerType: { default: "border" },
    spinnerVariant: { default: void 0 },
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 },
    rounded: { type: [String, Number, Boolean], default: false },
    roundedTop: { type: [String, Number, Boolean], default: void 0 },
    roundedBottom: { type: [String, Number, Boolean], default: void 0 },
    roundedStart: { type: [String, Number, Boolean], default: void 0 },
    roundedEnd: { type: [String, Number, Boolean], default: void 0 }
  },
  emits: ["click", "hidden", "shown"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = { top: 0, left: 0, bottom: 0, right: 0 }, n = r(() => o.fixed), i = r(() => o.noSpinner), s = r(() => o.noCenter), u = r(() => o.noWrap), d = r(() => o.show), f = r(() => o.spinnerSmall), g = r(() => o.rounded), p = r(() => o.roundedTop), y = r(() => o.roundedBottom), b = r(() => o.roundedStart), V = r(() => o.roundedEnd), C = io(() => ({
      rounded: g.value,
      roundedTop: p.value,
      roundedBottom: y.value,
      roundedStart: b.value,
      roundedEnd: V.value
    })), c = toRef(
      () => o.variant !== null && !o.bgColor ? `bg-${o.variant}` : ""
    ), h2 = toRef(() => d.value ? true : null), B = computed(() => ({
      type: o.spinnerType,
      variant: o.spinnerVariant,
      small: f.value
    })), _ = computed(() => ({
      ...l,
      zIndex: o.zIndex || 10
    })), k = computed(() => ({
      "position-absolute": !u.value || !n.value,
      "position-fixed": u.value && n.value
    })), S = computed(() => [c.value, C.value]), $ = computed(() => ({
      ...l,
      opacity: o.opacity,
      backgroundColor: o.bgColor || void 0,
      backdropFilter: o.blur ? `blur(${o.blur})` : void 0
    })), I = computed(
      () => s.value ? l : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (T, O) => (openBlock(), createBlock(resolveDynamicComponent(T.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": h2.value
    }, {
      default: withCtx(() => [
        renderSlot(T.$slots, "default"),
        createVNode(Mt, {
          "no-fade": T.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: O[1] || (O[1] = (F) => a("shown")),
          onOnAfterLeave: O[2] || (O[2] = (F) => a("hidden"))
        }, {
          default: withCtx(() => [
            unref(d) ? (openBlock(), createBlock(resolveDynamicComponent(T.overlayTag), {
              key: 0,
              class: normalizeClass(["b-overlay", k.value]),
              style: normalizeStyle(_.value),
              onClick: O[0] || (O[0] = (F) => a("click", F))
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(["position-absolute", S.value]),
                  style: normalizeStyle($.value)
                }, null, 6),
                createBaseVNode("div", {
                  class: "position-absolute",
                  style: normalizeStyle(I.value)
                }, [
                  renderSlot(T.$slots, "overlay", normalizeProps(guardReactiveProps(B.value)), () => [
                    unref(i) ? createCommentVNode("", true) : (openBlock(), createBlock(ka, normalizeProps(mergeProps({ key: 0 }, B.value)), null, 16))
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
});
var Sd = ["id", "aria-labelledby", "aria-describedby"];
var Cd = ["id"];
var Wo = 1056;
var wd = defineComponent({
  inheritAttrs: false,
  __name: "BModal",
  props: {
    autoFocus: { type: [String, Boolean], default: true },
    autoFocusButton: { default: void 0 },
    backdropVariant: { default: void 0 },
    bodyBgVariant: { default: null },
    bodyClass: { default: void 0 },
    bodyScrolling: { type: [String, Boolean], default: false },
    bodyTextVariant: { default: null },
    bodyVariant: { default: null },
    busy: { type: [String, Boolean], default: false },
    buttonSize: { default: "md" },
    cancelDisabled: { type: [String, Boolean], default: false },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { type: [String, Boolean], default: false },
    contentClass: { default: void 0 },
    dialogClass: { default: void 0 },
    footerBgVariant: { default: null },
    footerBorderVariant: { default: null },
    footerClass: { default: void 0 },
    footerTextVariant: { default: null },
    footerVariant: { default: null },
    fullscreen: { type: [String, Boolean], default: false },
    headerBgVariant: { default: null },
    headerBorderVariant: { default: null },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    headerTextVariant: { default: null },
    headerVariant: { default: null },
    hideBackdrop: { type: [String, Boolean], default: false },
    hideFooter: { type: [String, Boolean], default: false },
    hideHeader: { type: [String, Boolean], default: false },
    hideHeaderClose: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: false },
    modalClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: false },
    noCloseOnBackdrop: { type: [String, Boolean], default: false },
    noCloseOnEsc: { type: [String, Boolean], default: false },
    noFade: { type: [String, Boolean], default: false },
    okDisabled: { type: [String, Boolean], default: false },
    okOnly: { type: [String, Boolean], default: false },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { type: [String, Boolean], default: false },
    size: { default: "md" },
    teleportDisabled: { type: [String, Boolean], default: false },
    teleportTo: { default: "body" },
    title: { default: void 0 },
    titleClass: { default: void 0 },
    titleSrOnly: { type: [String, Boolean], default: false },
    titleTag: { default: "h5" }
  },
  emits: ["cancel", "close", "hidden", "hide", "hide-prevented", "ok", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = _e(() => a.id, "modal"), s = ke(a, "modelValue", l, { passive: true }), u = r(() => a.busy), d = r(() => a.lazy), f = r(() => a.cancelDisabled), g = r(() => a.centered), p = r(() => a.hideBackdrop), y = r(() => a.hideFooter), b = r(() => a.hideHeader), V = r(() => a.hideHeaderClose), C = r(s), c = r(() => a.noCloseOnBackdrop), h2 = r(() => a.noCloseOnEsc), B = r(() => a.noFade), _ = r(() => a.autoFocus), k = r(() => a.okDisabled), S = r(() => a.okOnly), $ = r(() => a.scrollable), I = r(() => a.titleSrOnly), T = r(() => a.teleportDisabled), O = r(() => a.bodyScrolling), F = r(() => a.fullscreen), K = ref(null), z = ref(null), P = ref(null), D = ref(null), ae = ref(C.value), le = ref(false);
    qe(
      "Escape",
      () => {
        Y("esc");
      },
      { target: K }
    ), Wl(C, O);
    const { focused: ve } = xe(K, {
      initialValue: C.value && a.autoFocusButton === void 0
    }), { focused: Be } = xe(z, {
      initialValue: C.value && a.autoFocusButton === "ok"
    }), { focused: Ve } = xe(P, {
      initialValue: C.value && a.autoFocusButton === "cancel"
    }), { focused: oe } = xe(D, {
      initialValue: C.value && a.autoFocusButton === "close"
    }), fe = computed(() => [
      a.modalClass,
      {
        fade: !B.value,
        show: ae.value
      }
    ]), $e = toRef(
      () => d.value === false || d.value === true && le.value === true || d.value === true && C.value === true
    ), we = toRef(
      () => a.backdropVariant !== void 0 ? a.backdropVariant : p.value ? "transparent" : "dark"
    ), M = toRef(() => !Ie(n["header-close"])), L = computed(() => [
      a.dialogClass,
      {
        "modal-fullscreen": F.value === true,
        [`modal-fullscreen-${F.value}-down`]: typeof F.value == "string",
        [`modal-${a.size}`]: a.size !== "md",
        "modal-dialog-centered": g.value,
        "modal-dialog-scrollable": $.value
      }
    ]), U = Qe(() => ({
      bgVariant: a.bodyBgVariant,
      textVariant: a.bodyTextVariant,
      variant: a.bodyVariant
    })), H = computed(() => [a.bodyClass, U.value]), G = Qe(() => ({
      bgVariant: a.headerBgVariant,
      textVariant: a.headerTextVariant,
      variant: a.headerVariant
    })), X = computed(() => [
      a.headerClass,
      G.value,
      {
        [`border-${a.headerBorderVariant}`]: a.headerBorderVariant !== null
      }
    ]), te = computed(() => ({
      variant: M.value ? a.headerCloseVariant : void 0,
      class: a.headerCloseClass
    })), be = Qe(() => ({
      bgVariant: a.footerBgVariant,
      textVariant: a.footerTextVariant,
      variant: a.footerVariant
    })), me = computed(() => [
      a.footerClass,
      be.value,
      {
        [`border-${a.footerBorderVariant}`]: a.footerBorderVariant !== null
      }
    ]), de = computed(() => [
      a.titleClass,
      {
        "visually-hidden": I.value
      }
    ]), ie = toRef(() => f.value || u.value), ce = toRef(() => k.value || u.value), Ce = (pe, Pe = {}) => new Rt(pe, {
      cancelable: false,
      target: K.value || null,
      relatedTarget: null,
      trigger: null,
      ...Pe,
      componentId: i.value
    });
    watch(C, (pe, Pe) => {
      pe !== Pe && (pe === true ? re() : Y());
    });
    const Y = (pe = "") => {
      if (pe === "backdrop" && c.value || pe === "esc" && h2.value) {
        l("hide-prevented");
        return;
      }
      const Pe = Ce("hide", { cancelable: pe !== "", trigger: pe });
      if (pe === "ok" && l(pe, Pe), pe === "cancel" && l(pe, Pe), pe === "close" && l(pe, Pe), l("hide", Pe), Pe.defaultPrevented) {
        l("hide-prevented"), s.value || (s.value = true);
        return;
      }
      s.value && (s.value = false);
    }, re = () => {
      const pe = Ce("show", { cancelable: true });
      if (l("show", pe), pe.defaultPrevented) {
        s.value && (s.value = false), l("show-prevented");
        return;
      }
      s.value || (s.value = true);
    }, Ae = () => {
      _.value !== false && (a.autoFocusButton === "ok" ? Be.value = true : a.autoFocusButton === "close" ? oe.value = true : a.autoFocusButton === "cancel" ? Ve.value = true : ve.value = true);
    }, He = () => re(), Re = () => {
      ae.value = true, Ae(), l("shown", Ce("shown")), d.value === true && (le.value = true);
    }, kt = () => {
      ae.value = false;
    }, Nn = () => {
      l("hidden", Ce("hidden")), d.value === true && (le.value = false);
    }, { activePosition: In, activeModalCount: Ln } = Mi(ae), Fn = computed(() => ({
      // Make sure that newly opened modals have a higher z-index than currently active ones.
      // All active modals have a z-index of ('defaultZIndex' - 'stackSize' - 'positionInStack').
      //
      // This means inactive modals will already be higher than active ones when opened.
      "z-index": ae.value ? Wo - (Ln.value - In.value) : Wo
    }));
    Oe(K, "bv-toggle", () => {
      C.value ? Y() : re();
    });
    const $t = reactive({
      cancel: () => {
        Y("cancel");
      },
      close: () => {
        Y("close");
      },
      hide: Y,
      ok: () => {
        Y("ok");
      },
      visible: C
    });
    return t({
      hide: Y,
      id: i,
      show: re
    }), (pe, Pe) => (openBlock(), createBlock(Teleport, {
      to: pe.teleportTo,
      disabled: unref(T)
    }, [
      createVNode(Mt, {
        "no-fade": true,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: He,
        onAfterEnter: Re,
        onLeave: kt,
        onAfterLeave: Nn
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", mergeProps({
            id: unref(i),
            ref_key: "element",
            ref: K,
            class: ["modal", fe.value],
            role: "dialog",
            "aria-labelledby": unref(b) ? void 0 : `${unref(i)}-label`,
            "aria-describedby": `${unref(i)}-body`,
            tabindex: "-1"
          }, pe.$attrs, { style: Fn.value }), [
            createBaseVNode("div", {
              class: normalizeClass(["modal-dialog", L.value])
            }, [
              $e.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["modal-content", pe.contentClass])
              }, [
                unref(b) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["modal-header", X.value])
                }, [
                  renderSlot(pe.$slots, "header", normalizeProps(guardReactiveProps($t)), () => [
                    (openBlock(), createBlock(resolveDynamicComponent(pe.titleTag), {
                      id: `${unref(i)}-label`,
                      class: normalizeClass(["modal-title", de.value])
                    }, {
                      default: withCtx(() => [
                        renderSlot(pe.$slots, "title", normalizeProps(guardReactiveProps($t)), () => [
                          createTextVNode(toDisplayString(pe.title), 1)
                        ], true)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    unref(V) ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      M.value ? (openBlock(), createBlock(pt, mergeProps({ key: 0 }, te.value, {
                        onClick: Pe[0] || (Pe[0] = (Jt) => Y("close"))
                      }), {
                        default: withCtx(() => [
                          renderSlot(pe.$slots, "header-close", {}, void 0, true)
                        ]),
                        _: 3
                      }, 16)) : (openBlock(), createBlock(Dt, mergeProps({
                        key: 1,
                        "aria-label": pe.headerCloseLabel
                      }, te.value, {
                        onClick: Pe[1] || (Pe[1] = (Jt) => Y("close"))
                      }), null, 16, ["aria-label"]))
                    ], 64))
                  ], true)
                ], 2)),
                createBaseVNode("div", {
                  id: `${unref(i)}-body`,
                  class: normalizeClass(["modal-body", H.value])
                }, [
                  renderSlot(pe.$slots, "default", normalizeProps(guardReactiveProps($t)), void 0, true)
                ], 10, Cd),
                unref(y) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(["modal-footer", me.value])
                }, [
                  renderSlot(pe.$slots, "footer", normalizeProps(guardReactiveProps($t)), () => [
                    renderSlot(pe.$slots, "cancel", normalizeProps(guardReactiveProps($t)), () => [
                      unref(S) ? createCommentVNode("", true) : (openBlock(), createBlock(pt, {
                        key: 0,
                        ref_key: "cancelButton",
                        ref: P,
                        disabled: ie.value,
                        size: pe.buttonSize,
                        variant: pe.cancelVariant,
                        onClick: Pe[2] || (Pe[2] = (Jt) => Y("cancel"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(pe.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], true),
                    renderSlot(pe.$slots, "ok", normalizeProps(guardReactiveProps($t)), () => [
                      createVNode(pt, {
                        ref_key: "okButton",
                        ref: z,
                        disabled: ce.value,
                        size: pe.buttonSize,
                        variant: pe.okVariant,
                        onClick: Pe[3] || (Pe[3] = (Jt) => Y("ok"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(pe.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], true)
                  ], true)
                ], 2))
              ], 2)) : createCommentVNode("", true)
            ], 2),
            renderSlot(pe.$slots, "backdrop", {}, () => [
              createVNode(Ta, {
                variant: we.value,
                show: unref(C),
                "no-spinner": "",
                fixed: "",
                "no-wrap": "",
                blur: null,
                onClick: Pe[4] || (Pe[4] = (Jt) => Y("backdrop"))
              }, null, 8, ["variant", "show"])
            ], true)
          ], 16, Sd), [
            [vShow, unref(C)]
          ])
        ]),
        _: 3
      })
    ], 8, ["to", "disabled"]));
  }
});
var kd = $a(wd, [["__scopeId", "data-v-2a759028"]]);
var $d = defineComponent({
  __name: "BNav",
  props: {
    align: { default: void 0 },
    cardHeader: { type: [String, Boolean], default: false },
    fill: { type: [String, Boolean], default: false },
    justified: { type: [String, Boolean], default: false },
    pills: { type: [String, Boolean], default: false },
    small: { type: [String, Boolean], default: false },
    tabs: { type: [String, Boolean], default: false },
    tag: { default: "ul" },
    underline: { type: [String, Boolean], default: false },
    vertical: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.cardHeader), a = r(() => t.fill), l = r(() => t.justified), n = r(() => t.pills), i = r(() => t.small), s = r(() => t.tabs), u = r(() => t.vertical), d = Zt(() => t.align), f = r(() => t.underline), g = computed(() => ({
      "nav-tabs": s.value,
      "nav-pills": n.value && !s.value,
      "card-header-tabs": !u.value && o.value && s.value,
      "card-header-pills": !u.value && o.value && n.value && !s.value,
      "flex-column": u.value,
      "nav-fill": !u.value && a.value,
      "nav-justified": !u.value && l.value,
      [d.value]: !u.value && t.align !== void 0,
      small: i.value,
      "nav-underline": f.value
    }));
    return (p, y) => (openBlock(), createBlock(resolveDynamicComponent(p.tag), {
      class: normalizeClass(["nav", g.value])
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var Td = { class: "d-flex flex-row align-items-center flex-wrap" };
var _d = defineComponent({
  inheritAttrs: false,
  __name: "BNavForm",
  props: {
    role: { default: void 0 },
    floating: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    novalidate: { type: [String, Boolean], default: void 0 },
    validated: { type: [String, Boolean], default: void 0 }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const o = t, a = (l) => {
      o("submit", l);
    };
    return (l, n) => (openBlock(), createElementBlock("li", Td, [
      createVNode(bn, mergeProps(l.$attrs, {
        id: l.id,
        floating: l.floating,
        role: l.role,
        novalidate: l.novalidate,
        validated: l.validated,
        class: "d-flex",
        onSubmit: withModifiers(a, ["prevent"])
      }), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "floating", "role", "novalidate", "validated", "onSubmit"])
    ]));
  }
});
var Vd = { class: "nav-item" };
var Ad = defineComponent({
  __name: "BNavItem",
  props: {
    linkAttrs: { default: void 0 },
    linkClass: { default: void 0 },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled), n = computed(
      () => fo(o, [
        "active",
        "activeClass",
        "append",
        "disabled",
        "href",
        "icon",
        "opacity",
        "opacityHover",
        "rel",
        "replace",
        "routerComponentName",
        "target",
        "to",
        "underlineOffset",
        "underlineOffsetHover",
        "underlineOpacity",
        "underlineOpacityHover",
        "underlineVariant",
        "variant"
      ])
    );
    return n.value.activeClass, (i, s) => (openBlock(), createElementBlock("li", Vd, [
      createVNode(rt, mergeProps({
        class: ["nav-link", i.linkClass],
        tabindex: unref(l) ? -1 : void 0,
        "aria-disabled": unref(l) ? true : void 0
      }, { ...n.value, ...i.linkAttrs }, {
        onClick: s[0] || (s[0] = (u) => a("click", u))
      }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["class", "tabindex", "aria-disabled"])
    ]));
  }
});
var Od = { class: "nav-item dropdown" };
var Ed = defineComponent({
  __name: "BNavItemDropdown",
  props: {
    ariaLabel: { default: void 0 },
    autoClose: { type: [Boolean, String], default: true },
    boundary: { default: "clippingAncestors" },
    boundaryPadding: { default: void 0 },
    center: { type: [String, Boolean], default: false },
    container: { default: void 0 },
    disabled: { type: [String, Boolean], default: false },
    dropend: { type: [String, Boolean], default: false },
    dropstart: { type: [String, Boolean], default: false },
    dropup: { type: [String, Boolean], default: false },
    end: { type: [String, Boolean], default: false },
    floatingMiddleware: { default: void 0 },
    id: { default: void 0 },
    isNav: { type: [String, Boolean], default: true },
    lazy: { type: [String, Boolean], default: false },
    menuClass: { default: void 0 },
    modelValue: { type: [String, Boolean], default: false },
    noCaret: { type: [String, Boolean], default: false },
    noFlip: { type: [String, Boolean], default: false },
    noShift: { type: [String, Boolean], default: false },
    noSize: { type: [String, Boolean], default: false },
    offset: { default: 0 },
    role: { default: "menu" },
    size: { default: "md" },
    split: { type: [String, Boolean], default: false },
    splitButtonType: { default: "button" },
    splitClass: { default: void 0 },
    splitDisabled: { type: [String, Boolean], default: void 0 },
    splitHref: { default: void 0 },
    splitTo: { default: void 0 },
    splitVariant: { default: void 0 },
    strategy: { default: "absolute" },
    text: { default: void 0 },
    toggleClass: { default: void 0 },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "link" }
  },
  emits: ["click", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "toggle", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ref(null), i = () => {
      var d;
      (d = n.value) == null || d.close();
    }, s = () => {
      var d;
      (d = n.value) == null || d.open();
    };
    return t({
      close: i,
      open: s,
      toggle: () => {
        var d;
        (d = n.value) == null || d.toggle();
      }
    }), (d, f) => (openBlock(), createElementBlock("li", Od, [
      createVNode(gn, mergeProps({
        ref_key: "dropdown",
        ref: n
      }, a, {
        "is-nav": "",
        onShow: f[0] || (f[0] = (g) => l("show", g)),
        onShown: f[1] || (f[1] = (g) => l("shown")),
        onHide: f[2] || (f[2] = (g) => l("hide", g)),
        onHidden: f[3] || (f[3] = (g) => l("hidden")),
        onHidePrevented: f[4] || (f[4] = (g) => l("hide-prevented")),
        onShowPrevented: f[5] || (f[5] = (g) => l("show-prevented")),
        onClick: f[6] || (f[6] = (g) => l("click", g)),
        onToggle: f[7] || (f[7] = (g) => l("toggle")),
        "onUpdate:modelValue": f[8] || (f[8] = (g) => l("update:modelValue", g))
      }), {
        "button-content": withCtx(() => [
          renderSlot(d.$slots, "button-content")
        ]),
        "toggle-text": withCtx(() => [
          renderSlot(d.$slots, "toggle-text")
        ]),
        default: withCtx(() => [
          renderSlot(d.$slots, "default", {
            hide: i,
            show: s
          })
        ]),
        _: 3
      }, 16)
    ]));
  }
});
var Pd = { class: "navbar-text" };
var Nd = defineComponent({
  __name: "BNavText",
  props: {
    text: { default: void 0 }
  },
  setup(e) {
    return (t, o) => (openBlock(), createElementBlock("li", Pd, [
      renderSlot(t.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(t.text), 1)
      ])
    ]));
  }
});
var Id = defineComponent({
  __name: "BNavbar",
  props: {
    autoClose: { type: [String, Boolean], default: true },
    container: { type: [String, Boolean], default: "fluid" },
    fixed: { default: void 0 },
    print: { type: [String, Boolean], default: false },
    sticky: { default: void 0 },
    tag: { default: "nav" },
    toggleable: { type: [String, Boolean], default: false },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.container), a = r(() => t.autoClose), l = r(() => t.print), n = r(() => t.toggleable), i = toRef(() => t.tag === "nav" ? void 0 : "navigation"), s = xi(o), u = computed(() => ({
      "d-print": l.value,
      [`sticky-${t.sticky}`]: t.sticky !== void 0,
      [`bg-${t.variant}`]: t.variant !== null,
      [`fixed-${t.fixed}`]: t.fixed !== void 0,
      "navbar-expand": n.value === false,
      [`navbar-expand-${n.value}`]: typeof n.value == "string"
    }));
    return provide(co, {
      tag: toRef(() => t.tag),
      autoClose: a
    }), (d, f) => (openBlock(), createBlock(resolveDynamicComponent(d.tag), {
      class: normalizeClass(["navbar", u.value]),
      role: i.value
    }, {
      default: withCtx(() => [
        d.container !== false ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(s))
        }, [
          renderSlot(d.$slots, "default")
        ], 2)) : renderSlot(d.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
});
var Ld = defineComponent({
  __name: "BNavbarBrand",
  props: {
    tag: { default: "div" },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, { computedLink: o, computedLinkProps: a } = Ct(t, [
      "active",
      "activeClass",
      "append",
      "disabled",
      "href",
      "rel",
      "replace",
      "routerComponentName",
      "target",
      "to",
      "variant",
      "opacity",
      "opacityHover",
      "underlineVariant",
      "underlineOffset",
      "underlineOffsetHover",
      "underlineOpacity",
      "underlineOpacityHover",
      "icon"
    ]), l = toRef(() => o.value ? rt : t.tag);
    return (n, i) => (openBlock(), createBlock(resolveDynamicComponent(l.value), mergeProps({ class: "navbar-brand" }, unref(a)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fd = defineComponent({
  __name: "BNavbarNav",
  props: {
    align: { default: void 0 },
    fill: { type: [String, Boolean], default: false },
    justified: { type: [String, Boolean], default: false },
    small: { type: [String, Boolean], default: false },
    tag: { default: "ul" }
  },
  setup(e) {
    const t = e, o = r(() => t.fill), a = r(() => t.justified), l = r(() => t.small), n = Zt(() => t.align), i = computed(() => ({
      "nav-fill": o.value,
      "nav-justified": a.value,
      [n.value]: t.align !== void 0,
      small: l.value
    }));
    return (s, u) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass(["navbar-nav", i.value])
    }, [
      renderSlot(s.$slots, "default")
    ], 2));
  }
});
var Uo = (e, t) => e.setAttribute("data-bs-theme", t);
var Hd = {
  mounted(e, t) {
    Uo(e, t.value);
  },
  updated(e, t) {
    Uo(e, t.value);
  }
};
var zd = (e, t) => {
  const { modifiers: o, arg: a, value: l } = e, n = Object.keys(o || {}), i = typeof l == "string" ? l.split(sa) : l;
  if (Ss(t.tagName, "a")) {
    const s = Ya(t, "href") || "";
    Zn.test(s) && n.push(s.replace(Yn, ""));
  }
  return Array.prototype.concat.apply([], [a, i]).forEach((s) => typeof s == "string" && n.push(s)), n.filter((s, u, d) => s && d.indexOf(s) === u);
};
var Rd = (e, t) => {
  e.forEach((o) => {
    const a = document.getElementById(o);
    a !== null && a.dispatchEvent(new Event("bv-toggle"));
  }), setTimeout(() => $n(e, t), 50);
};
var $n = (e, t) => {
  let o = false;
  e.forEach((a) => {
    const l = document.getElementById(a);
    l != null && l.classList.contains("show") && (o = true), l != null && l.classList.contains("closing") && (o = false);
  }), t.setAttribute("aria-expanded", o ? "true" : "false"), t.classList.remove(o ? "collapsed" : "not-collapsed"), t.classList.add(o ? "not-collapsed" : "collapsed");
};
var Xo = (e, t) => {
  if (t.value === void 0 && Object.keys(t.modifiers || {}).length === 0)
    return;
  const o = zd(t, e);
  e.__toggle && e.removeEventListener("click", e.__toggle), e.__toggle = () => Rd(o, e), e.addEventListener("click", e.__toggle), e.setAttribute("aria-controls", o.join(" ")), $n(o, e);
};
var ja = {
  mounted: Xo,
  updated: Xo,
  unmounted(e) {
    e.removeEventListener("click", e.__toggle), e.removeAttribute("aria-controls"), e.removeAttribute("aria-expanded");
  }
};
var xd = {
  mounted(e, t) {
    if (!Ut(t.value))
      return;
    const a = ga(t.value, e);
    !a.content && !a.title || (e.$__state = ref({
      ...Nt(t, e),
      ...a
    }), ba(e, t));
  },
  updated(e, t) {
    if (!Ut(t.value))
      return;
    const a = ga(t.value, e);
    if (!(!a.content && !a.title)) {
      if (!e.$__state) {
        e.$__state = ref({
          ...Nt(t, e),
          ...a
        }), ba(e, t);
        return;
      }
      e.$__state.value = {
        ...Nt(t, e),
        ...a
      };
    }
  },
  beforeUnmount(e) {
    Xl(e);
  }
};
var Md = {
  mounted(e, t) {
    const o = Ut(t.value);
    if (!o)
      return;
    const a = ga(t.value, e);
    !a.content && !a.title || (e.$__state = ref({
      noninteractive: true,
      ...Nt(t, e),
      title: a.title ?? a.content ?? "",
      tooltip: o
    }), ba(e, t));
  },
  updated(e, t) {
    const o = Ut(t.value);
    if (!o)
      return;
    const a = ga(t.value, e);
    if (!(!a.content && !a.title)) {
      if (!e.$__state) {
        e.$__state = ref({
          noninteractive: true,
          ...Nt(t, e),
          title: a.title ?? a.content ?? "",
          tooltip: o
        }), ba(e, t);
        return;
      }
      e.$__state.value = {
        noninteractive: true,
        ...Nt(t, e),
        title: a.title ?? a.content ?? "",
        tooltip: o
      };
    }
  },
  beforeUnmount(e) {
    Xl(e);
  }
};
var Ko = Object.freeze(Object.defineProperty({
  __proto__: null,
  vBColorMode: Hd,
  vBModal: ja,
  vBPopover: xd,
  vBToggle: ja,
  vBTooltip: Md
}, Symbol.toStringTag, { value: "Module" }));
var Dd = ["disabled", "aria-label"];
var jd = createBaseVNode("span", { class: "navbar-toggler-icon" }, null, -1);
var qd = defineComponent({
  __name: "BNavbarToggle",
  props: {
    disabled: { type: [String, Boolean], default: false },
    label: { default: "Toggle navigation" },
    target: { default: void 0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.disabled), n = computed(() => ({
      disabled: l.value
    })), i = (s) => {
      l.value || a("click", s);
    };
    return (s, u) => withDirectives((openBlock(), createElementBlock("button", {
      class: normalizeClass(["navbar-toggler", n.value]),
      type: "button",
      disabled: unref(l),
      "aria-label": s.label,
      onClick: i
    }, [
      renderSlot(s.$slots, "default", {}, () => [
        jd
      ])
    ], 10, Dd)), [
      [unref(ja), unref(l) ? void 0 : s.target]
    ]);
  }
});
var Gd = ["id", "aria-labelledby"];
var Wd = ["id"];
var Ud = defineComponent({
  inheritAttrs: false,
  __name: "BOffcanvas",
  props: {
    backdrop: { type: [String, Boolean], default: true },
    backdropVariant: { default: "dark" },
    bodyClass: { default: void 0 },
    bodyScrolling: { type: [String, Boolean], default: false },
    footerClass: { default: void 0 },
    headerClass: { default: void 0 },
    headerCloseClass: { default: void 0 },
    headerCloseLabel: { default: "Close" },
    headerCloseVariant: { default: "secondary" },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: false },
    modelValue: { type: [String, Boolean], default: false },
    noCloseOnBackdrop: { type: [String, Boolean], default: false },
    noCloseOnEsc: { type: [String, Boolean], default: false },
    noFocus: { type: [String, Boolean], default: false },
    noHeader: { type: [String, Boolean], default: false },
    noHeaderClose: { type: [String, Boolean], default: false },
    placement: { default: "start" },
    teleportDisabled: { type: [String, Boolean], default: false },
    teleportTo: { default: "body" },
    title: { default: void 0 }
  },
  emits: ["close", "esc", "hidden", "hide", "hide-prevented", "show", "show-prevented", "shown", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = useSlots(), i = ke(a, "modelValue", l, { passive: true }), s = r(i), u = r(() => a.bodyScrolling), d = r(() => a.backdrop), f = r(() => a.noHeaderClose), g = r(() => a.noHeader), p = r(() => a.noFocus), y = r(() => a.noCloseOnBackdrop), b = r(() => a.noCloseOnEsc), V = r(() => a.lazy), C = r(() => a.teleportDisabled), c = _e(() => a.id, "offcanvas");
    Wl(s, u);
    const h2 = ref(null);
    qe(
      "Escape",
      () => {
        P("esc");
      },
      { target: h2 }
    );
    const { focused: B } = xe(h2, {
      initialValue: s.value && p.value === false
    }), _ = ref(s.value), k = ref(false), S = toRef(() => d.value === true && s.value === true), $ = toRef(
      () => V.value === false || V.value === true && k.value === true || V.value === true && s.value === true
    ), I = toRef(() => !Ie(n["header-close"])), T = computed(() => [
      { "text-reset": !I.value },
      a.headerCloseClass
    ]), O = computed(() => ({
      variant: I.value ? a.headerCloseVariant : void 0,
      class: T.value
    })), F = toRef(() => !Ie(n.footer)), K = computed(() => [
      // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
      "offcanvas",
      // Remove when above check is fixed
      `offcanvas-${a.placement}`,
      {
        show: s.value && _.value === true
      }
    ]), z = (oe, fe = {}) => new Rt(oe, {
      cancelable: false,
      target: h2.value || null,
      relatedTarget: null,
      trigger: null,
      ...fe,
      componentId: c.value
    }), P = (oe = "") => {
      if (oe === "backdrop" && y.value || oe === "esc" && b.value) {
        l("hide-prevented");
        return;
      }
      const fe = z("hide", { cancelable: oe !== "", trigger: oe });
      if (oe === "close" && l(oe, fe), oe === "esc" && l(oe, fe), l("hide", fe), fe.defaultPrevented) {
        l("hide-prevented");
        return;
      }
      i.value = false;
    }, D = () => {
      const oe = z("show", { cancelable: true });
      if (l("show", oe), oe.defaultPrevented) {
        i.value = false, l("show-prevented");
        return;
      }
      i.value = true;
    }, ae = () => {
      nextTick(() => {
        p.value === false && (B.value = true);
      });
    }, le = () => D(), ve = () => {
      _.value = true, ae(), l("shown", z("shown")), V.value === true && (k.value = true);
    }, Be = () => {
      _.value = false;
    }, Ve = () => {
      l("hidden", z("hidden")), V.value === true && (k.value = false);
    };
    return Oe(h2, "bv-toggle", () => {
      s.value ? P() : D();
    }), t({
      hide: P,
      show: D
    }), (oe, fe) => (openBlock(), createBlock(Teleport, {
      to: oe.teleportTo,
      disabled: unref(C)
    }, [
      createVNode(Mt, {
        "no-fade": true,
        "trans-props": {
          enterToClass: "showing",
          enterFromClass: "",
          leaveToClass: "hiding show",
          leaveFromClass: "show"
        },
        onBeforeEnter: le,
        onAfterEnter: ve,
        onLeave: Be,
        onAfterLeave: Ve
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", mergeProps({
            id: unref(c),
            ref_key: "element",
            ref: h2,
            "aria-modal": "true",
            role: "dialog",
            class: K.value,
            tabindex: "-1",
            "aria-labelledby": `${unref(c)}-offcanvas-label`,
            "data-bs-backdrop": "false"
          }, oe.$attrs), [
            $.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              unref(g) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["offcanvas-header", oe.headerClass])
              }, [
                renderSlot(oe.$slots, "header", {
                  visible: unref(s),
                  placement: oe.placement,
                  hide: P
                }, () => [
                  createBaseVNode("h5", {
                    id: `${unref(c)}-offcanvas-label`,
                    class: "offcanvas-title"
                  }, [
                    renderSlot(oe.$slots, "title", {
                      visible: unref(s),
                      placement: oe.placement,
                      hide: P
                    }, () => [
                      createTextVNode(toDisplayString(oe.title), 1)
                    ])
                  ], 8, Wd),
                  unref(f) ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    I.value ? (openBlock(), createBlock(pt, mergeProps({ key: 0 }, O.value, {
                      onClick: fe[0] || (fe[0] = ($e) => P("close"))
                    }), {
                      default: withCtx(() => [
                        renderSlot(oe.$slots, "header-close")
                      ]),
                      _: 3
                    }, 16)) : (openBlock(), createBlock(Dt, mergeProps({
                      key: 1,
                      "aria-label": oe.headerCloseLabel
                    }, O.value, {
                      onClick: fe[1] || (fe[1] = ($e) => P("close"))
                    }), null, 16, ["aria-label"]))
                  ], 64))
                ])
              ], 2)),
              createBaseVNode("div", {
                class: normalizeClass(["offcanvas-body", oe.bodyClass])
              }, [
                renderSlot(oe.$slots, "default", {
                  visible: unref(s),
                  placement: oe.placement,
                  hide: P
                })
              ], 2),
              F.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(oe.footerClass)
              }, [
                renderSlot(oe.$slots, "footer", {
                  visible: unref(s),
                  placement: oe.placement,
                  hide: P
                })
              ], 2)) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ], 16, Gd), [
            [vShow, unref(i)]
          ])
        ]),
        _: 3
      }),
      renderSlot(oe.$slots, "backdrop", {}, () => [
        createVNode(Ta, {
          variant: oe.backdropVariant,
          show: S.value,
          fixed: "",
          "no-wrap": "",
          "no-spinner": "",
          onClick: fe[2] || (fe[2] = ($e) => P("backdrop"))
        }, null, 8, ["variant", "show"])
      ])
    ], 8, ["to", "disabled"]));
  }
});
var Xd = ["aria-disabled", "aria-label"];
var Kd = ["aria-hidden"];
var Yo = 20;
var Zo = 0;
var Yd = defineComponent({
  __name: "BPagination",
  props: {
    align: { default: "start" },
    ariaControls: { default: void 0 },
    ariaLabel: { default: "Pagination" },
    disabled: { type: [String, Boolean], default: false },
    ellipsisClass: { default: void 0 },
    ellipsisText: { default: "…" },
    firstClass: { default: void 0 },
    firstNumber: { type: [String, Boolean], default: false },
    firstText: { default: "«" },
    hideEllipsis: { type: [String, Boolean], default: false },
    hideGotoEndButtons: { type: [String, Boolean], default: false },
    labelFirstPage: { default: "Go to first page" },
    labelLastPage: { default: "Go to last page" },
    labelNextPage: { default: "Go to next page" },
    labelPage: { default: "Go to page" },
    labelPrevPage: { default: "Go to previous page" },
    lastClass: { default: void 0 },
    lastNumber: { type: [String, Boolean], default: false },
    lastText: { default: "»" },
    limit: { default: 5 },
    modelValue: { default: 1 },
    nextClass: { default: void 0 },
    nextText: { default: "›" },
    pageClass: { default: void 0 },
    perPage: { default: Yo },
    pills: { type: [String, Boolean], default: false },
    prevClass: { default: void 0 },
    prevText: { default: "‹" },
    size: { default: void 0 },
    totalRows: { default: Zo }
  },
  emits: ["update:modelValue", "page-click"],
  setup(e, { emit: t }) {
    const a = e, l = t, n = ke(a, "modelValue", l), i = r(() => a.disabled), s = r(() => a.firstNumber), u = r(() => a.hideEllipsis), d = r(() => a.hideGotoEndButtons), f = r(() => a.lastNumber), g = r(() => a.pills), p = he(() => a.perPage, { nanToZero: true, method: "parseInt" }), y = he(() => a.totalRows, { nanToZero: true, method: "parseInt" }), b = he(n, { nanToZero: true, method: "parseInt" }), V = toRef(() => Math.max(p.value || Yo, 1)), C = toRef(() => Math.max(y.value || Zo, 0)), c = toRef(() => Math.ceil(C.value / V.value)), h2 = toRef(() => a.align === "fill"), B = toRef(() => a.align === "fill" ? "start" : a.align), _ = Zt(B), k = (L) => L === b.value, S = (L) => i.value ? null : k(L) ? "0" : "-1", $ = (L) => i.value || k(L) || b.value < 1 || // Check if the number is out of bounds
    L < 1 || L > c.value, I = computed(() => $(1)), T = computed(() => $(b.value - 1)), O = computed(() => $(c.value)), F = computed(() => $(b.value + 1)), K = (L, U) => ({
      li: {
        class: [
          "page-item",
          {
            disabled: L,
            "flex-fill": h2.value,
            "d-flex": h2.value && !L
          },
          U
        ]
      },
      button: {
        is: L ? "span" : "button",
        class: ["page-link", { "flex-grow-1": !L && h2.value }],
        "aria-label": a.labelFirstPage,
        "aria-controls": a.ariaControls || void 0,
        "aria-disabled": L ? true : void 0,
        role: "menuitem",
        type: L ? void 0 : "button",
        tabindex: L ? void 0 : "-1"
      }
    }), z = computed(() => K(I.value, a.firstClass)), P = computed(() => K(T.value, a.prevClass)), D = computed(() => K(F.value, a.nextClass)), ae = computed(() => K(O.value, a.lastClass)), le = computed(() => ({
      li: {
        class: [
          "page-item",
          "disabled",
          "bv-d-xs-down-none",
          h2.value ? "flex-fill" : "",
          a.ellipsisClass
        ],
        role: "separator"
      },
      span: {
        class: ["page-link"]
      }
    })), ve = computed(() => [
      _.value,
      {
        [`pagination-${a.size}`]: a.size !== void 0,
        "b-pagination-pills": g.value
      }
    ]), Be = computed(() => {
      let L;
      return c.value - b.value + 2 < a.limit && a.limit > 3 ? L = c.value - oe.value + 1 : L = b.value - Math.floor(oe.value / 2), L < 1 ? L = 1 : L > c.value - oe.value && (L = c.value - oe.value + 1), a.limit <= 3 && f.value && c.value === L + oe.value - 1 && (L = Math.max(L - 1, 1)), L;
    }), Ve = computed(() => {
      const L = c.value - b.value;
      let U = false;
      return L + 2 < a.limit && a.limit > 3 ? a.limit > 3 && (U = true) : a.limit > 3 && (U = !!(!u.value || s.value)), Be.value <= 1 && (U = false), U && s.value && Be.value < 4 && (U = false), U;
    }), oe = computed(() => {
      let L = a.limit;
      return c.value <= a.limit ? L = c.value : b.value < a.limit - 1 && a.limit > 3 ? ((!u.value || f.value) && (L = a.limit - (s.value ? 0 : 1)), L = Math.min(L, a.limit)) : c.value - b.value + 2 < a.limit && a.limit > 3 ? (!u.value || s.value) && (L = a.limit - (f.value ? 0 : 1)) : a.limit > 3 && (L = a.limit - (u.value ? 0 : 2)), L;
    }), fe = computed(() => {
      const L = c.value - oe.value;
      let U = false;
      b.value < a.limit - 1 && a.limit > 3 ? (!u.value || f.value) && (U = true) : a.limit > 3 && (U = !!(!u.value || f.value)), Be.value > L && (U = false);
      const H = Be.value + oe.value - 1;
      return U && f.value && H > c.value - 3 && (U = false), U;
    }), $e = computed(() => ({
      pageSize: V.value,
      totalRows: y.value,
      numberOfPages: c.value
    })), we = (L, U) => {
      if (U === b.value)
        return;
      const H = new dt("page-click", {
        cancelable: true,
        target: L.target
      });
      l("page-click", H, U), !H.defaultPrevented && (n.value = U);
    };
    watch(b, (L) => {
      const H = ((G, X) => {
        const te = G || 1;
        return te > X ? X : te < 1 ? 1 : te;
      })(L, c.value);
      H !== n.value && (n.value = H);
    }), watch($e, (L, U) => {
      (U.pageSize !== L.pageSize && U.totalRows === L.totalRows || U.numberOfPages !== L.numberOfPages && b.value > U.numberOfPages) && (n.value = 1);
    });
    const M = computed(
      () => Array.from({ length: oe.value }, (L, U) => ({
        number: Be.value + U
      }))
    );
    return (L, U) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass(["pagination", ve.value]),
      role: "menubar",
      "aria-disabled": unref(i),
      "aria-label": L.ariaLabel || void 0
    }, [
      !unref(d) && !unref(s) ? (openBlock(), createElementBlock("li", normalizeProps(mergeProps({ key: 0 }, z.value.li)), [
        (openBlock(), createBlock(resolveDynamicComponent(z.value.button.is), mergeProps(z.value.button, {
          onClick: U[0] || (U[0] = (H) => we(H, 1))
        }), {
          default: withCtx(() => [
            renderSlot(L.$slots, "first-text", {}, () => [
              createTextVNode(toDisplayString(L.firstText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16)) : createCommentVNode("", true),
      createBaseVNode("li", normalizeProps(guardReactiveProps(P.value.li)), [
        (openBlock(), createBlock(resolveDynamicComponent(P.value.button.is), mergeProps(P.value.button, {
          onClick: U[1] || (U[1] = (H) => we(H, unref(b) - 1))
        }), {
          default: withCtx(() => [
            renderSlot(L.$slots, "prev-text", {}, () => [
              createTextVNode(toDisplayString(L.prevText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16),
      Ve.value ? (openBlock(), createElementBlock("li", normalizeProps(mergeProps({ key: 1 }, le.value.li)), [
        createBaseVNode("span", normalizeProps(guardReactiveProps(le.value.span)), [
          renderSlot(L.$slots, "ellipsis-text", {}, () => [
            createTextVNode(toDisplayString(L.ellipsisText || "..."), 1)
          ])
        ], 16)
      ], 16)) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(M.value, (H) => (openBlock(), createElementBlock("li", {
        key: `page-${H.number}`,
        class: normalizeClass([
          "page-item",
          {
            disabled: unref(i),
            active: k(H.number),
            "flex-fill": h2.value,
            "d-flex": h2.value && !unref(i)
          },
          L.pageClass
        ]),
        role: "presentation",
        "aria-hidden": unref(i) || void 0
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(i) ? "span" : "button"), {
          key: `page-${H.number}`,
          class: normalizeClass(["page-link", { "flex-grow-1": !unref(i) && h2.value }]),
          "aria-controls": L.ariaControls || void 0,
          "aria-disabled": unref(i) ? true : void 0,
          "aria-label": L.labelPage ? `${L.labelPage} ${H.number}` : void 0,
          "aria-posinset": H.number,
          "aria-checked": k(H.number),
          "aria-setsize": c.value,
          role: "menuitemradio",
          type: unref(i) ? void 0 : "button",
          tabindex: S(H.number),
          onClick: (G) => we(G, H.number)
        }, {
          default: withCtx(() => [
            renderSlot(L.$slots, "page", {
              active: k(H.number),
              disabled: unref(i),
              page: H.number,
              index: H.number - 1,
              content: H.number
            }, () => [
              createTextVNode(toDisplayString(H.number), 1)
            ])
          ]),
          _: 2
        }, 1032, ["class", "aria-controls", "aria-disabled", "aria-label", "aria-posinset", "aria-checked", "aria-setsize", "type", "tabindex", "onClick"]))
      ], 10, Kd))), 128)),
      fe.value ? (openBlock(), createElementBlock("li", normalizeProps(mergeProps({ key: 2 }, le.value.li)), [
        createBaseVNode("span", normalizeProps(guardReactiveProps(le.value.span)), [
          renderSlot(L.$slots, "ellipsis-text", {}, () => [
            createTextVNode(toDisplayString(L.ellipsisText || "..."), 1)
          ])
        ], 16)
      ], 16)) : createCommentVNode("", true),
      createBaseVNode("li", normalizeProps(guardReactiveProps(D.value.li)), [
        (openBlock(), createBlock(resolveDynamicComponent(D.value.button.is), mergeProps(D.value.button, {
          onClick: U[2] || (U[2] = (H) => we(H, unref(b) + 1))
        }), {
          default: withCtx(() => [
            renderSlot(L.$slots, "next-text", {}, () => [
              createTextVNode(toDisplayString(L.nextText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16),
      !unref(f) && !unref(d) ? (openBlock(), createElementBlock("li", normalizeProps(mergeProps({ key: 3 }, ae.value.li)), [
        (openBlock(), createBlock(resolveDynamicComponent(ae.value.button.is), mergeProps(ae.value.button, {
          onClick: U[3] || (U[3] = (H) => we(H, c.value))
        }), {
          default: withCtx(() => [
            renderSlot(L.$slots, "last-text", {}, () => [
              createTextVNode(toDisplayString(L.lastText), 1)
            ])
          ]),
          _: 3
        }, 16))
      ], 16)) : createCommentVNode("", true)
    ], 10, Xd));
  }
});
var Ue = defineComponent({
  inheritAttrs: false,
  __name: "BPlaceholder",
  props: {
    animation: { default: void 0 },
    cols: { default: 12 },
    size: { default: "md" },
    tag: { default: "span" },
    variant: { default: null },
    width: { default: void 0 },
    wrapperTag: { default: "span" }
  },
  setup(e) {
    const t = e, o = toRef(
      () => t.width === void 0 ? void 0 : typeof t.width == "number" ? t.width.toString() : t.width.replace("%", "")
    ), a = toRef(
      () => t.cols === void 0 ? void 0 : typeof t.cols == "number" ? t.cols.toString() : t.cols
    ), l = computed(() => ({
      [`col-${a.value}`]: a.value !== void 0 && o.value === void 0,
      [`bg-${t.variant}`]: t.variant !== null,
      [`placeholder-${t.size}`]: t.size !== "md"
    })), n = computed(() => ({
      [`placeholder-${t.animation}`]: t.animation !== void 0
    })), i = computed(() => ({
      width: o.value === void 0 ? void 0 : `${o.value}%`
    }));
    return (s, u) => (openBlock(), createBlock(resolveDynamicComponent(s.wrapperTag), {
      class: normalizeClass(n.value)
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(s.tag), mergeProps(s.$attrs, {
          class: ["placeholder", l.value],
          style: i.value
        }), null, 16, ["class", "style"]))
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
var Tn = defineComponent({
  __name: "BPlaceholderButton",
  props: {
    animation: { default: void 0 },
    cols: { default: void 0 },
    tag: { default: "div" },
    variant: { default: "primary" },
    width: { default: void 0 }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`btn-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (openBlock(), createBlock(Ue, {
      class: normalizeClass(["btn disabled", o.value]),
      animation: a.animation,
      width: a.width,
      cols: a.cols,
      tag: a.tag,
      style: { cursor: "wait", "pointer-events": "auto" }
    }, null, 8, ["class", "animation", "width", "cols", "tag"]));
  }
});
var Zd = defineComponent({
  __name: "BPlaceholderCard",
  props: {
    animation: { default: void 0 },
    footerAnimation: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    footerWidth: { default: 100 },
    headerAnimation: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    headerWidth: { default: 100 },
    imgBlankColor: { default: "#868e96" },
    imgBottom: { type: [String, Boolean], default: false },
    imgHeight: { default: 100 },
    imgSrc: { default: void 0 },
    noButton: { type: [String, Boolean], default: false },
    noFooter: { type: [String, Boolean], default: false },
    noHeader: { type: [String, Boolean], default: false },
    noImg: { type: [String, Boolean], default: false },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.noButton), a = r(() => t.noHeader), l = r(() => t.noFooter), n = r(() => t.noImg), i = computed(() => ({
      animation: t.animation,
      size: t.size,
      variant: t.variant
    })), s = toRef(() => o.value ? Ue : Tn);
    return (u, d) => (openBlock(), createBlock(mn, { "img-bottom": u.imgBottom }, createSlots({
      default: withCtx(() => [
        renderSlot(u.$slots, "default", {}, () => [
          createVNode(Ue, mergeProps({ cols: "7" }, i.value), null, 16),
          createVNode(Ue, mergeProps({ cols: "4" }, i.value), null, 16),
          createVNode(Ue, mergeProps({ cols: "4" }, i.value), null, 16),
          createVNode(Ue, mergeProps({ cols: "6" }, i.value), null, 16),
          createVNode(Ue, mergeProps({ cols: "8" }, i.value), null, 16)
        ])
      ]),
      _: 2
    }, [
      unref(n) ? void 0 : {
        name: "img",
        fn: withCtx(() => [
          renderSlot(u.$slots, "img", {}, () => [
            createVNode(ya, {
              blank: !u.imgSrc,
              "blank-color": u.imgBlankColor,
              height: u.imgSrc ? void 0 : u.imgHeight,
              src: u.imgSrc,
              top: !u.imgBottom,
              bottom: u.imgBottom,
              style: { cursor: "wait" }
            }, null, 8, ["blank", "blank-color", "height", "src", "top", "bottom"])
          ])
        ]),
        key: "0"
      },
      unref(a) ? void 0 : {
        name: "header",
        fn: withCtx(() => [
          renderSlot(u.$slots, "header", {}, () => [
            createVNode(Ue, {
              width: u.headerWidth,
              variant: u.headerVariant,
              animation: u.headerAnimation,
              size: u.headerSize
            }, null, 8, ["width", "variant", "animation", "size"])
          ])
        ]),
        key: "1"
      },
      unref(l) ? void 0 : {
        name: "footer",
        fn: withCtx(() => [
          renderSlot(u.$slots, "footer", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(s.value), {
              width: u.footerWidth,
              animation: u.footerAnimation,
              size: unref(o) ? u.footerSize : void 0,
              variant: u.footerVariant
            }, null, 8, ["width", "animation", "size", "variant"]))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
});
var go = defineComponent({
  __name: "BTableSimple",
  props: {
    bordered: { type: [String, Boolean], default: false },
    borderless: { type: [String, Boolean], default: false },
    borderVariant: { default: null },
    captionTop: { type: [String, Boolean], default: false },
    dark: { type: [String, Boolean], default: false },
    fixed: { type: [String, Boolean], default: false },
    hover: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: false },
    outlined: { type: [String, Boolean], default: false },
    responsive: { type: [String, Boolean], default: false },
    small: { type: [String, Boolean], default: false },
    stacked: { type: [String, Boolean], default: false },
    stickyHeader: { type: [String, Boolean], default: false },
    striped: { type: [String, Boolean], default: false },
    stripedColumns: { type: [String, Boolean], default: false },
    tableClass: { default: void 0 },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.captionTop), a = r(() => t.borderless), l = r(() => t.bordered), n = r(() => t.dark), i = r(() => t.hover), s = r(() => t.small), u = r(() => t.striped), d = r(() => t.stickyHeader), f = r(() => t.stripedColumns), g = r(() => t.responsive), p = r(() => t.stacked), y = computed(() => [
      t.tableClass,
      "table",
      "b-table",
      {
        "table-bordered": l.value,
        "table-borderless": a.value,
        [`border-${t.borderVariant}`]: t.borderVariant !== null,
        "caption-top": o.value,
        "table-dark": n.value,
        "table-hover": i.value,
        "b-table-stacked": p.value === true,
        [`b-table-stacked-${p.value}`]: typeof p.value == "string",
        "table-striped": u.value,
        "table-sm": s.value,
        [`table-${t.variant}`]: t.variant !== null,
        "table-striped-columns": f.value
      }
    ]), b = computed(() => ({
      "table-responsive": g.value === true,
      [`table-responsive-${g.value}`]: typeof g.value == "string",
      "b-table-sticky-header": d.value
    }));
    return (V, C) => V.responsive ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(b.value)
    }, [
      createBaseVNode("table", {
        class: normalizeClass(y.value)
      }, [
        renderSlot(V.$slots, "default")
      ], 2)
    ], 2)) : (openBlock(), createElementBlock("table", {
      key: 0,
      class: normalizeClass(y.value)
    }, [
      renderSlot(V.$slots, "default")
    ], 2));
  }
});
var Jd = defineComponent({
  __name: "BPlaceholderTable",
  props: {
    animation: { default: void 0 },
    cellWidth: { default: 100 },
    columns: { default: 5 },
    footerAnimation: { default: void 0 },
    footerCellWidth: { default: 100 },
    footerColumns: { default: void 0 },
    footerSize: { default: "md" },
    footerVariant: { default: void 0 },
    headerAnimation: { default: void 0 },
    headerCellWidth: { default: 100 },
    headerColumns: { default: void 0 },
    headerSize: { default: "md" },
    headerVariant: { default: void 0 },
    hideHeader: { type: [String, Boolean], default: false },
    rows: { default: 3 },
    showFooter: { type: [String, Boolean], default: false },
    size: { default: "md" },
    variant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = he(() => t.columns), a = he(() => t.rows), l = toRef(() => t.headerColumns ?? NaN), n = toRef(() => t.footerColumns ?? NaN), i = he(l), s = he(n), u = toRef(() => o.value || 5), d = toRef(() => a.value || 3), f = toRef(
      () => t.headerColumns === void 0 ? u.value : i.value
    ), g = toRef(
      () => t.footerColumns === void 0 ? u.value : s.value
    ), p = r(() => t.hideHeader), y = r(() => t.showFooter);
    return (b, V) => (openBlock(), createBlock(go, null, {
      default: withCtx(() => [
        unref(p) ? createCommentVNode("", true) : renderSlot(b.$slots, "thead", { key: 0 }, () => [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (C, c) => (openBlock(), createElementBlock("th", { key: c }, [
                createVNode(Ue, {
                  size: b.headerSize,
                  variant: b.headerVariant,
                  animation: b.headerAnimation,
                  width: b.headerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]),
        renderSlot(b.$slots, "default", {}, () => [
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (C, c) => (openBlock(), createElementBlock("tr", { key: c }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(u.value, (h2, B) => (openBlock(), createElementBlock("td", { key: B }, [
                createVNode(Ue, {
                  size: b.size,
                  variant: b.variant,
                  animation: b.animation,
                  width: b.cellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ]))), 128))
          ])
        ]),
        unref(y) ? renderSlot(b.$slots, "tfoot", { key: 1 }, () => [
          createBaseVNode("tfoot", null, [
            createBaseVNode("tr", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (C, c) => (openBlock(), createElementBlock("th", { key: c }, [
                createVNode(Ue, {
                  size: b.footerSize,
                  variant: b.footerVariant,
                  animation: b.footerAnimation,
                  width: b.footerCellWidth
                }, null, 8, ["size", "variant", "animation", "width"])
              ]))), 128))
            ])
          ])
        ]) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var Qd = defineComponent({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { type: [String, Boolean], default: false }
  },
  setup(e) {
    const t = e, o = r(() => t.loading);
    return (a, l) => unref(o) ? renderSlot(a.$slots, "loading", { key: 0 }) : renderSlot(a.$slots, "default", { key: 1 });
  }
});
var ec = ["aria-valuenow", "aria-valuemax"];
var _n = defineComponent({
  __name: "BProgressBar",
  props: {
    animated: { type: [String, Boolean], default: false },
    label: { default: void 0 },
    labelHtml: { default: void 0 },
    max: { default: void 0 },
    precision: { default: 0 },
    showProgress: { type: [String, Boolean], default: false },
    showValue: { type: [String, Boolean], default: false },
    striped: { type: [String, Boolean], default: false },
    value: { default: 0 },
    variant: { default: null },
    bgVariant: { default: null },
    textVariant: { default: null }
  },
  setup(e) {
    const t = e, o = inject(Jl, null), a = r(() => t.animated), l = r(() => t.showProgress), n = r(() => t.showValue), i = r(() => t.striped), s = Qe(t), u = computed(() => [
      s.value,
      {
        "progress-bar-animated": a.value || (o == null ? void 0 : o.animated.value),
        "progress-bar-striped": i.value || (o == null ? void 0 : o.striped.value) || a.value || (o == null ? void 0 : o.animated.value)
      }
    ]), d = he(() => t.precision), f = he(() => t.value), g = he(() => t.max ?? NaN), p = he(() => (o == null ? void 0 : o.max.value) ?? NaN), y = computed(
      () => t.labelHtml !== void 0 ? t.labelHtml : n.value || o != null && o.showValue.value ? f.value.toFixed(d.value) : l.value || o != null && o.showProgress.value ? (f.value * 100 / (g.value || 100)).toFixed(d.value) : t.label !== void 0 ? t.label : ""
    ), b = computed(
      () => p.value ? `${f.value * 100 / p.value}%` : g.value ? `${f.value * 100 / g.value}%` : typeof t.value == "string" ? t.value : `${t.value}%`
    );
    return (V, C) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["progress-bar", u.value]),
      role: "progressbar",
      "aria-valuenow": V.value,
      "aria-valuemin": "0",
      "aria-valuemax": V.max,
      style: normalizeStyle({ width: b.value })
    }, [
      renderSlot(V.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(y.value), 1)
      ])
    ], 14, ec));
  }
});
var Vn = defineComponent({
  __name: "BProgress",
  props: {
    height: { default: void 0 },
    animated: { type: [String, Boolean], default: void 0 },
    max: { default: 100 },
    precision: { default: void 0 },
    showProgress: { type: [String, Boolean], default: void 0 },
    showValue: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    value: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: void 0 },
    textVariant: { default: void 0 }
  },
  setup(e) {
    const t = e, o = r(() => t.animated), a = r(() => t.showProgress), l = r(() => t.showValue), n = r(() => t.striped);
    return provide(Jl, {
      animated: o,
      max: toRef(() => t.max),
      showProgress: a,
      showValue: l,
      striped: n
    }), (i, s) => (openBlock(), createElementBlock("div", {
      class: "progress",
      style: normalizeStyle({ height: i.height })
    }, [
      renderSlot(i.$slots, "default", {}, () => [
        createVNode(_n, {
          animated: i.animated,
          max: i.max,
          precision: i.precision,
          "show-progress": i.showProgress,
          "show-value": i.showValue,
          striped: i.striped,
          value: i.value,
          variant: i.variant,
          "text-variant": i.textVariant,
          "bg-variant": i.bgVariant
        }, null, 8, ["animated", "max", "precision", "show-progress", "show-value", "striped", "value", "variant", "text-variant", "bg-variant"])
      ])
    ], 4));
  }
});
var Jo = wa("cols", [""], { type: [String, Number], default: null });
var tc = defineComponent({
  name: "BRow",
  slots: Object,
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: false },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...Jo
  },
  setup(e) {
    const t = r(() => e.noGutters), o = Zt(() => e.alignH), a = computed(() => Kl(e, Jo, "cols", "row-cols"));
    return {
      computedClasses: computed(() => [
        a.value,
        {
          [`gx-${e.gutterX}`]: e.gutterX !== null,
          [`gy-${e.gutterY}`]: e.gutterY !== null,
          "g-0": t.value,
          [`align-items-${e.alignV}`]: e.alignV !== null,
          [o.value]: e.alignH !== null,
          [`align-content-${e.alignContent}`]: e.alignContent !== null
        }
      ])
    };
  }
});
function ac(e, t, o, a, l, n) {
  return openBlock(), createBlock(resolveDynamicComponent(e.tag), {
    class: normalizeClass(["row", e.computedClasses])
  }, {
    default: withCtx(() => [
      renderSlot(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var oc = $a(tc, [["render", ac]]);
var An = defineComponent({
  __name: "BTbody",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`thead-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (openBlock(), createElementBlock("tbody", {
      class: normalizeClass(o.value)
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var lc = ["scope", "colspan", "rowspan", "data-label"];
var nc = { key: 0 };
var Et = defineComponent({
  __name: "BTd",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: [String, Boolean], default: false },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.stickyColumn), a = computed(() => ({
      [`table-${t.variant}`]: t.variant !== null,
      "b-table-sticky-column": o.value,
      "table-b-table-default": o.value && t.variant === null
    })), l = toRef(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (n, i) => (openBlock(), createElementBlock("td", {
      scope: l.value,
      class: normalizeClass(a.value),
      colspan: n.colspan,
      rowspan: n.rowspan,
      "data-label": n.stackedHeading
    }, [
      n.stackedHeading ? (openBlock(), createElementBlock("div", nc, [
        renderSlot(n.$slots, "default")
      ])) : renderSlot(n.$slots, "default", { key: 1 })
    ], 10, lc));
  }
});
var qa = defineComponent({
  __name: "BTfoot",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (openBlock(), createElementBlock("tfoot", {
      class: normalizeClass(o.value)
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var sc = ["scope", "colspan", "rowspan", "data-label"];
var ic = { key: 0 };
var Ga = defineComponent({
  __name: "BTh",
  props: {
    colspan: { default: void 0 },
    rowspan: { default: void 0 },
    stackedHeading: { default: void 0 },
    stickyColumn: { type: [String, Boolean], default: false },
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = r(() => t.stickyColumn), a = computed(() => ({
      [`table-${t.variant}`]: t.variant !== null,
      "b-table-sticky-column": o.value,
      "table-b-table-default": o.value && t.variant === null
    })), l = toRef(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (n, i) => (openBlock(), createElementBlock("th", {
      scope: l.value,
      class: normalizeClass(a.value),
      colspan: n.colspan,
      rowspan: n.rowspan,
      "data-label": n.stackedHeading
    }, [
      n.stackedHeading !== void 0 ? (openBlock(), createElementBlock("div", ic, [
        renderSlot(n.$slots, "default")
      ])) : renderSlot(n.$slots, "default", { key: 1 })
    ], 10, sc));
  }
});
var On = defineComponent({
  __name: "BThead",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (openBlock(), createElementBlock("thead", {
      class: normalizeClass(o.value)
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var lt = defineComponent({
  __name: "BTr",
  props: {
    variant: { default: null }
  },
  setup(e) {
    const t = e, o = computed(() => ({
      [`table-${t.variant}`]: t.variant !== null
    }));
    return (a, l) => (openBlock(), createElementBlock("tr", {
      class: normalizeClass(o.value)
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var rc = {
  key: 0,
  class: "b-table-stacked-label"
};
var uc = { class: "d-inline-flex flex-nowrap align-items-center gap-1" };
var dc = { key: 2 };
var En = defineComponent({
  __name: "BTableLite",
  props: {
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: "There are no records matching your request" },
    emptyText: { default: "There are no records to show" },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: [String, Boolean], default: false },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: [String, Boolean], default: false },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: [String, Boolean], default: false },
    tbodyClass: { default: void 0 },
    tbodyTrAttr: { default: void 0 },
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: [String, Boolean], default: void 0 },
    borderless: { type: [String, Boolean], default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: [String, Boolean], default: void 0 },
    dark: { type: [String, Boolean], default: void 0 },
    fixed: { type: [String, Boolean], default: void 0 },
    hover: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: void 0 },
    outlined: { type: [String, Boolean], default: void 0 },
    responsive: { type: [String, Boolean], default: void 0 },
    small: { type: [String, Boolean], default: void 0 },
    stacked: { type: [String, Boolean], default: void 0 },
    stickyHeader: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    stripedColumns: { type: [String, Boolean], default: void 0 },
    tableClass: { default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-unhovered"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = r(() => o.footClone), n = r(() => o.labelStacked), i = r(() => o.showEmpty), s = r(() => o.stacked), u = computed(() => [
      o.tableClass,
      {
        [`align-${o.align}`]: o.align !== void 0
      }
    ]), d = computed(() => !o.fields.length && o.items.length ? Object.keys(o.items[0]).map((c) => {
      const h2 = _a(c);
      return {
        key: c,
        label: h2,
        tdAttr: s.value === true ? { "data-label": h2 } : void 0
      };
    }) : o.fields.map((c) => {
      if (typeof c == "string") {
        const h2 = _a(c);
        return {
          key: c,
          label: h2,
          tdAttr: s.value === true ? { "data-label": h2 } : void 0
        };
      }
      return {
        ...c,
        tdAttr: s.value === true ? { "data-label": _a(c.key), ...c.tdAttr } : c.tdAttr
      };
    })), f = toRef(() => d.value.length), g = (c, h2, B) => {
      const _ = No(c, h2);
      return B && typeof B == "function" ? B(_, h2, c) : _;
    }, p = (c, h2, B = false) => {
      const _ = typeof c == "string" ? c : c.key;
      a("head-clicked", _, c, h2, B);
    }, y = (c) => {
      c._showDetails = !c._showDetails;
    }, b = (c) => [
      c.class,
      c.thClass,
      {
        "b-table-sticky-column": c.stickyColumn
      },
      o.fieldColumnClass ? typeof o.fieldColumnClass == "function" ? o.fieldColumnClass(c) : o.fieldColumnClass : null
    ], V = (c, h2) => {
      var B;
      return [
        c.class,
        c.tdClass,
        (B = h2._cellVariants) != null && B[c.key] ? `table-${h2._cellVariants[c.key]}` : null,
        {
          "b-table-sticky-column": c.stickyColumn
        }
      ];
    }, C = (c, h2) => o.tbodyTrClass ? typeof o.tbodyTrClass == "function" ? o.tbodyTrClass(c, h2) : o.tbodyTrClass : null;
    return (c, h2) => (openBlock(), createBlock(go, {
      id: c.id,
      bordered: c.bordered,
      borderless: c.borderless,
      "border-variant": c.borderVariant,
      "caption-top": c.captionTop,
      dark: c.dark,
      fixed: c.fixed,
      hover: c.hover,
      "no-border-collapse": c.noBorderCollapse,
      outlined: c.outlined,
      responsive: c.responsive,
      small: c.small,
      stacked: unref(s),
      "sticky-header": c.stickyHeader,
      striped: c.striped,
      "table-class": u.value,
      variant: c.variant,
      "striped-columns": c.stripedColumns
    }, {
      default: withCtx(() => [
        createVNode(On, {
          variant: c.headVariant,
          class: normalizeClass(c.theadClass)
        }, {
          default: withCtx(() => [
            c.$slots["thead-top"] ? renderSlot(c.$slots, "thead-top", { key: 0 }) : createCommentVNode("", true),
            createVNode(lt, {
              variant: c.headRowVariant,
              class: normalizeClass(c.theadTrClass)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (B) => (openBlock(), createBlock(Ga, mergeProps({
                  key: B.key,
                  scope: "col",
                  class: b(B),
                  title: B.headerTitle,
                  variant: B.variant,
                  abbr: B.headerAbbr,
                  style: B.thStyle
                }, B.thAttr, {
                  onClick: (_) => p(B, _)
                }), {
                  default: withCtx(() => [
                    renderSlot(c.$slots, c.$slots[`head(${B.key})`] ? `head(${B.key})` : "head()", {
                      label: B.label,
                      column: B.key,
                      field: B,
                      isFoot: false
                    }, () => [
                      createTextVNode(toDisplayString(unref(ia)(B)), 1)
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "variant", "abbr", "style", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"]),
            c.$slots["thead-sub"] ? (openBlock(), createBlock(lt, { key: 1 }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (B) => (openBlock(), createBlock(Et, {
                  key: B.key,
                  scope: "col",
                  variant: B.variant,
                  class: normalizeClass([B.class, B.thClass])
                }, {
                  default: withCtx(() => [
                    renderSlot(c.$slots, "thead-sub", mergeProps({ items: d.value }, B), () => [
                      createTextVNode(toDisplayString(B.label), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["variant", "class"]))), 128))
              ]),
              _: 3
            })) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["variant", "class"]),
        createVNode(An, {
          class: normalizeClass(c.tbodyClass)
        }, {
          default: withCtx(() => [
            renderSlot(c.$slots, "custom-body", {
              fields: d.value,
              items: c.items,
              columns: d.value.length
            }, () => [
              !unref(s) && c.$slots["top-row"] ? (openBlock(), createBlock(lt, { key: 0 }, {
                default: withCtx(() => [
                  renderSlot(c.$slots, "top-row")
                ]),
                _: 3
              })) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(c.items, (B, _) => (openBlock(), createElementBlock(Fragment, { key: _ }, [
                createVNode(lt, {
                  class: normalizeClass(C(B, "row")),
                  variant: B._rowVariant,
                  onClick: (k) => !unref(ea)(k) && a("row-clicked", B, _, k),
                  onDblclick: (k) => !unref(ea)(k) && a("row-dbl-clicked", B, _, k),
                  onMouseenter: (k) => !unref(ea)(k) && a("row-hovered", B, _, k),
                  onMouseleave: (k) => !unref(ea)(k) && a("row-unhovered", B, _, k)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (k) => {
                      var S;
                      return openBlock(), createBlock(Et, mergeProps({
                        key: k.key,
                        variant: (S = B._cellVariants) != null && S[k.key] ? null : k.variant,
                        class: V(k, B)
                      }, k.tdAttr), {
                        default: withCtx(() => [
                          unref(s) && unref(n) ? (openBlock(), createElementBlock("label", rc, toDisplayString(unref(ia)(k)), 1)) : createCommentVNode("", true),
                          renderSlot(c.$slots, c.$slots[`cell(${k.key})`] ? `cell(${k.key})` : "cell()", {
                            value: unref(No)(B, k.key),
                            index: _,
                            item: B,
                            field: k,
                            items: c.items,
                            toggleDetails: () => {
                              y(B);
                            },
                            detailsShowing: B._showDetails ?? false
                          }, () => [
                            createTextVNode(toDisplayString(g(B, k.key, k.formatter)), 1)
                          ])
                        ]),
                        _: 2
                      }, 1040, ["variant", "class"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["class", "variant", "onClick", "onDblclick", "onMouseenter", "onMouseleave"]),
                B._showDetails === true && c.$slots["row-details"] ? (openBlock(), createBlock(lt, {
                  key: 0,
                  class: normalizeClass(C(B, "row-details")),
                  variant: B._rowVariant
                }, {
                  default: withCtx(() => [
                    createVNode(Et, { colspan: f.value }, {
                      default: withCtx(() => [
                        renderSlot(c.$slots, "row-details", {
                          item: B,
                          toggleDetails: () => {
                            y(B);
                          },
                          fields: c.fields,
                          index: _
                        })
                      ]),
                      _: 2
                    }, 1032, ["colspan"])
                  ]),
                  _: 2
                }, 1032, ["class", "variant"])) : createCommentVNode("", true)
              ], 64))), 128)),
              unref(i) && c.items.length === 0 ? (openBlock(), createBlock(lt, {
                key: 1,
                class: "b-table-empty-slot"
              }, {
                default: withCtx(() => [
                  createVNode(Et, { colspan: f.value }, {
                    default: withCtx(() => [
                      renderSlot(c.$slots, "empty", { items: c.items }, () => [
                        createTextVNode(toDisplayString(c.emptyText), 1)
                      ])
                    ]),
                    _: 3
                  }, 8, ["colspan"])
                ]),
                _: 3
              })) : createCommentVNode("", true),
              !unref(s) && c.$slots["bottom-row"] ? (openBlock(), createBlock(lt, { key: 2 }, {
                default: withCtx(() => [
                  renderSlot(c.$slots, "bottom-row")
                ]),
                _: 3
              })) : createCommentVNode("", true)
            ])
          ]),
          _: 3
        }, 8, ["class"]),
        unref(l) ? (openBlock(), createBlock(qa, {
          key: 0,
          variant: c.footVariant,
          class: normalizeClass(c.tfootClass)
        }, {
          default: withCtx(() => [
            createVNode(lt, {
              variant: c.footRowVariant,
              class: normalizeClass(c.tfootTrClass)
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(d.value, (B) => (openBlock(), createBlock(Ga, mergeProps({
                  key: B.key,
                  scope: "col",
                  class: b(B),
                  title: B.headerTitle,
                  abbr: B.headerAbbr,
                  style: B.thStyle,
                  variant: B.variant
                }, B.thAttr, {
                  onClick: (_) => p(B, _, true)
                }), {
                  default: withCtx(() => [
                    createBaseVNode("div", uc, [
                      createBaseVNode("div", null, [
                        renderSlot(c.$slots, c.$slots[`foot(${B.key})`] ? `foot(${B.key})` : "foot()", {
                          label: B.label,
                          column: B.key,
                          field: B,
                          isFoot: true
                        }, () => [
                          createTextVNode(toDisplayString(unref(ia)(B)), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1040, ["class", "title", "abbr", "style", "variant", "onClick"]))), 128))
              ]),
              _: 3
            }, 8, ["variant", "class"])
          ]),
          _: 3
        }, 8, ["variant", "class"])) : c.$slots["custom-foot"] ? (openBlock(), createBlock(qa, { key: 1 }, {
          default: withCtx(() => [
            renderSlot(c.$slots, "custom-foot", {
              fields: d.value,
              items: c.items,
              columns: d.value.length
            })
          ]),
          _: 3
        })) : createCommentVNode("", true),
        c.$slots["table-caption"] || c.caption ? (openBlock(), createElementBlock("caption", dc, [
          renderSlot(c.$slots, "table-caption", {}, () => [
            createTextVNode(toDisplayString(c.caption), 1)
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["id", "bordered", "borderless", "border-variant", "caption-top", "dark", "fixed", "hover", "no-border-collapse", "outlined", "responsive", "small", "stacked", "sticky-header", "striped", "table-class", "variant", "striped-columns"]));
  }
});
var cc = createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
}, null, -1);
var fc = [
  cc
];
var vc = createBaseVNode("path", {
  "fill-rule": "evenodd",
  d: "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
}, null, -1);
var pc = [
  vc
];
var mc = { class: "d-flex align-items-center gap-2 mt-5" };
var gc = defineComponent({
  __name: "BTable",
  props: {
    provider: { type: Function, default: void 0 },
    sortCompare: { type: Function, default: void 0 },
    noProvider: { default: void 0 },
    noProviderPaging: { type: [String, Boolean], default: false },
    noProviderSorting: { type: [String, Boolean], default: false },
    noProviderFiltering: { type: [String, Boolean], default: false },
    sortBy: { default: void 0 },
    sortDesc: { type: [String, Boolean], default: false },
    selectable: { type: [String, Boolean], default: false },
    stickySelect: { type: [String, Boolean], default: false },
    selectHead: { type: [Boolean, String], default: true },
    selectMode: { default: "multi" },
    selectionVariant: { default: "primary" },
    busy: { type: [String, Boolean], default: false },
    busyLoadingText: { default: "Loading..." },
    perPage: { default: 1 / 0 },
    currentPage: { default: 1 },
    filter: { default: void 0 },
    filterable: { default: void 0 },
    selectedItems: { default: () => [] },
    noSortableIcon: { type: [String, Boolean], default: false },
    align: { default: void 0 },
    caption: { default: void 0 },
    captionHtml: { default: void 0 },
    detailsTdClass: { default: void 0 },
    emptyFilteredText: { default: void 0 },
    emptyText: { default: void 0 },
    fieldColumnClass: { type: [Function, String, Object, Array], default: void 0 },
    fields: { default: () => [] },
    footClone: { type: [String, Boolean], default: void 0 },
    footRowVariant: { default: void 0 },
    footVariant: { default: void 0 },
    headRowVariant: { default: void 0 },
    headVariant: { default: void 0 },
    items: { default: () => [] },
    labelStacked: { type: [String, Boolean], default: void 0 },
    modelValue: { default: void 0 },
    primaryKey: { default: void 0 },
    showEmpty: { type: [String, Boolean], default: void 0 },
    tbodyClass: { default: void 0 },
    tbodyTrAttr: { default: void 0 },
    tbodyTrClass: { type: [Function, String, Object, Array], default: void 0 },
    tfootClass: { default: void 0 },
    tfootTrClass: { default: void 0 },
    theadClass: { default: void 0 },
    theadTrClass: { default: void 0 },
    bordered: { type: [String, Boolean], default: void 0 },
    borderless: { type: [String, Boolean], default: void 0 },
    borderVariant: { default: void 0 },
    captionTop: { type: [String, Boolean], default: void 0 },
    dark: { type: [String, Boolean], default: void 0 },
    fixed: { type: [String, Boolean], default: void 0 },
    hover: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    noBorderCollapse: { type: [String, Boolean], default: void 0 },
    outlined: { type: [String, Boolean], default: void 0 },
    responsive: { type: [String, Boolean], default: void 0 },
    small: { type: [String, Boolean], default: void 0 },
    stacked: { type: [String, Boolean], default: void 0 },
    stickyHeader: { type: [String, Boolean], default: void 0 },
    striped: { type: [String, Boolean], default: void 0 },
    stripedColumns: { type: [String, Boolean], default: void 0 },
    variant: { default: void 0 }
  },
  emits: ["filtered", "head-clicked", "row-clicked", "row-dbl-clicked", "row-hovered", "row-selected", "row-unhovered", "row-unselected", "selection", "sorted", "update:busy", "update:selectedItems", "update:sortDesc", "update:sortBy"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ke(a, "sortBy", l, { passive: true }), i = ke(a, "busy", l, { passive: true }), s = ke(a, "sortDesc", l, { passive: true }), u = ke(a, "selectedItems", l, { passive: true }), d = computed({
      get: () => /* @__PURE__ */ new Set([...u.value]),
      set: (M) => {
        u.value = [...M];
      }
    }), f = {
      add: (M) => {
        const L = new Set(d.value);
        L.add(M), d.value = L, l("row-selected", M);
      },
      clear: () => {
        d.value.forEach((M) => {
          l("row-unselected", M);
        }), d.value = /* @__PURE__ */ new Set();
      },
      delete: (M) => {
        const L = new Set(d.value);
        L.delete(M), d.value = L, l("row-unselected", M);
      },
      /* TODO
      This has method and the delete method suffer from an error when using a non-reactive source as the items prop
      ```ts
      const items = [{first_name: 'Geneva', last_name: 'Wilson', age: 89},{first_name: 'Jami', last_name: 'Carney', age: 38}]
      ```
      For some reason, the reference of the object gets lost. However, when you use an actual ref(), it works just fine
      Getting the reference properly will fix all outstanding issues
      */
      has: (M) => d.value.has(M)
    }, g = ref([]), p = r(s), y = r(i), b = r(() => a.noProviderPaging), V = r(() => a.noProviderSorting), C = r(() => a.noProviderFiltering), c = r(() => a.selectable), h2 = r(() => a.noSortableIcon), B = he(() => a.perPage, { method: "parseInt" }), _ = he(() => a.currentPage, { method: "parseInt" }), k = toRef(() => !!a.filter), S = toRef(() => a.provider !== void 0), $ = toRef(() => d.value.size > 0), I = computed(
      () => n.value !== void 0 || a.fields.some((M) => typeof M == "string" ? false : M.sortable)
    ), T = computed(
      () => a.fields.map(
        (M) => typeof M == "string" ? M : {
          ...M,
          thAttr: {
            "aria-sort": I.value === false ? void 0 : n.value !== M.key ? "none" : p.value === true ? "descending" : "ascending",
            ...M.thAttr
          }
        }
      )
    ), O = computed(() => ({
      "b-table-busy": y.value,
      "b-table-selectable": c.value,
      "user-select-none": c.value && $.value
    })), F = computed(() => [
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(null, "table-busy") : a.tbodyTrClass : null
    ]), K = (M) => [
      {
        "b-table-sortable-column": I.value && M.sortable
      }
    ], z = (M, L) => [
      {
        [`selected table-${a.selectionVariant}`]: c.value && M && f.has(M)
      },
      a.tbodyTrClass ? typeof a.tbodyTrClass == "function" ? a.tbodyTrClass(M, L) : a.tbodyTrClass : null
    ], P = (M) => n.value !== M.key ? { opacity: 0.5 } : {}, D = computed(() => {
      const M = (H) => {
        const G = n.value;
        if (G === void 0)
          return H;
        const X = T.value.find((te) => typeof te == "string" ? false : te.key === G);
        return typeof X != "string" && (X == null ? void 0 : X.sortable) === false ? H : [...H].sort((te, be) => {
          if (a.sortCompare !== void 0)
            return a.sortCompare(te, be, G, p.value);
          const me = (de) => typeof de == "object" && de !== null ? JSON.stringify(de) : (de == null ? void 0 : de.toString()) ?? "";
          return me(te[G]) > me(be[G]) ? p.value ? -1 : 1 : me(be[G]) > me(te[G]) ? p.value ? 1 : -1 : 0;
        });
      }, L = (H) => H.filter(
        (G) => Object.entries(G).some(([X, te]) => {
          var me, de;
          return !te || X[0] === "_" || !((me = a.filterable) != null && me.includes(X)) ? false : (typeof te == "object" ? JSON.stringify(Object.values(te)) : te.toString()).toLowerCase().includes(((de = a.filter) == null ? void 0 : de.toLowerCase()) ?? "");
        })
      );
      let U = S.value ? g.value : a.items;
      return (k.value === true && !S.value || k.value === true && S.value && C.value) && (U = L(U)), (I.value === true && !S.value || I.value === true && S.value && V.value) && (U = M(U)), U;
    }), ae = computed(() => Number.isNaN(B.value) || S.value && !b.value ? D.value : D.value.slice(
      (_.value - 1) * (B.value || 1 / 0),
      _.value * (B.value || 1 / 0)
    )), le = (M, L, U = false, H = false, G = false) => {
      if (c.value) {
        if (a.selectMode === "single" || a.selectMode === "multi") {
          if (U || H)
            return;
          f.has(M) ? f.delete(M) : (a.selectMode === "single" && f.clear(), f.add(M));
        } else if (H || G)
          f.has(M) ? f.delete(M) : f.add(M);
        else if (U) {
          const X = [...d.value].pop(), te = a.items.findIndex((de) => de === X), be = Math.min(te, L), me = Math.max(te, L);
          a.items.slice(be, me + 1).forEach((de) => {
            f.has(de) || f.add(de);
          });
        } else
          f.clear(), f.add(M);
        fe();
      }
    }, ve = (M, L, U) => {
      le(M, L, U.shiftKey, U.ctrlKey, U.metaKey), l("row-clicked", M, L, U);
    }, Be = (M) => {
      if (!I.value)
        return;
      const L = typeof M == "string" ? M : M.key, U = typeof M == "string" ? false : M.sortable;
      I.value === true && U === true && (n.value !== L ? (n.value = L, s.value = false) : p.value === false ? s.value = true : (n.value = void 0, s.value = false), l("sorted", L, n.value === void 0 ? false : !p.value));
    }, Ve = (M, L, U, H = false) => {
      l("head-clicked", M, L, U, H), Be(L);
    }, oe = async () => {
      if (!S.value || a.provider === void 0 || y.value)
        return;
      i.value = true;
      const M = a.provider({
        currentPage: _.value,
        filter: a.filter,
        sortBy: n.value,
        sortDesc: a.sortDesc,
        perPage: B.value
      });
      try {
        const L = M instanceof Promise ? await M : M;
        if (L === void 0)
          return;
        g.value = L;
      } finally {
        i.value = false;
      }
    }, fe = () => {
      c.value && l("selection", [...d.value]);
    }, $e = async () => {
      if (S.value) {
        await oe();
        return;
      }
      l("filtered", D.value);
    }, we = async (M, L, U) => {
      if (L === U)
        return;
      const H = (be) => {
        var me;
        return ((me = a.noProvider) == null ? void 0 : me.includes(be)) === true;
      }, G = (M === "currentPage" || M === "perPage") && (H("paging") || b.value === true), X = M === "filter" && (H("filtering") || C.value === true), te = (M === "sortBy" || M === "sortDesc") && (H("sorting") || V.value === true);
      G || X || te || (await oe(), M === "currentPage" || M === "perPage" || $e());
    };
    return watch(
      () => a.filter,
      (M, L) => {
        we("filter", M, L), !(M === L || S.value) && (M || l("filtered", D.value));
      }
    ), watch(_, (M, L) => {
      we("currentPage", M, L);
    }), watch(B, (M, L) => {
      we("perPage", M, L);
    }), watch(n, (M, L) => {
      we("sortBy", M, L);
    }), watch(p, (M, L) => {
      we("sortDesc", M, L);
    }), watch(
      () => a.provider,
      (M) => {
        if (M === void 0) {
          g.value = [];
          return;
        }
        oe();
      }
    ), onMounted(oe), t({
      // The row selection methods are really for compat. Users should probably use the v-model though
      clearSelected: () => {
        c.value && (f.clear(), fe());
      },
      refresh: oe,
      selectAllRows: () => {
        if (!c.value)
          return;
        const M = d.value.size > 0 ? [...d.value] : [];
        d.value = /* @__PURE__ */ new Set([...D.value]), d.value.forEach((L) => {
          M.includes(L) || l("row-selected", L);
        }), fe();
      },
      selectRow: (M) => {
        if (!c.value)
          return;
        const L = D.value[M];
        !L || f.has(L) || (f.add(L), fe());
      },
      unselectRow: (M) => {
        if (!c.value)
          return;
        const L = D.value[M];
        !L || !f.has(L) || (f.delete(L), fe());
      }
    }), (M, L) => (openBlock(), createBlock(En, mergeProps(a, {
      "aria-busy": unref(y),
      items: ae.value,
      fields: T.value,
      "table-class": O.value,
      "tbody-tr-class": z,
      "field-column-class": K,
      onHeadClicked: Ve,
      onRowClicked: ve
    }), createSlots({
      "head()": withCtx((U) => [
        createTextVNode(toDisplayString(unref(ia)(U.field)) + " ", 1),
        I.value && U.field.sortable && unref(h2) === false ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          unref(p) ? renderSlot(M.$slots, "sortDesc", normalizeProps(mergeProps({ key: 1 }, { ...U })), () => [
            (openBlock(), createElementBlock("svg", {
              style: normalizeStyle(P(U.field)),
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              class: "bi bi-arrow-down-short",
              viewBox: "0 0 16 16",
              "aria-hidden": ""
            }, pc, 4))
          ]) : renderSlot(M.$slots, "sortAsc", normalizeProps(mergeProps({ key: 0 }, { ...U })), () => [
            (openBlock(), createElementBlock("svg", {
              style: normalizeStyle(P(U.field)),
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              class: "bi bi-arrow-up-short",
              viewBox: "0 0 16 16",
              "aria-hidden": ""
            }, fc, 4))
          ])
        ], 64)) : createCommentVNode("", true)
      ]),
      "custom-body": withCtx((U) => [
        unref(y) ? (openBlock(), createBlock(lt, {
          key: 0,
          class: normalizeClass(["b-table-busy-slot", F.value])
        }, {
          default: withCtx(() => [
            createVNode(Et, {
              colspan: U.fields.length
            }, {
              default: withCtx(() => [
                renderSlot(M.$slots, "table-busy", {}, () => [
                  createVNode(Ta, { show: "" }, {
                    overlay: withCtx(() => [
                      createBaseVNode("div", mc, [
                        createVNode(ka),
                        createBaseVNode("strong", null, toDisplayString(M.busyLoadingText), 1)
                      ])
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 2
            }, 1032, ["colspan"])
          ]),
          _: 2
        }, 1032, ["class"])) : createCommentVNode("", true)
      ]),
      _: 2
    }, [
      renderList(M.$slots, (U, H) => ({
        name: H,
        fn: withCtx((G) => [
          renderSlot(M.$slots, H, normalizeProps(guardReactiveProps(G)))
        ])
      }))
    ]), 1040, ["aria-busy", "items", "fields", "table-class"]));
  }
});
var bc = defineComponent({
  inheritAttrs: false,
  __name: "BTab",
  props: {
    active: { type: [String, Boolean], default: false },
    buttonId: { default: void 0 },
    disabled: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    lazy: { type: [String, Boolean], default: void 0 },
    lazyOnce: { type: [String, Boolean], default: void 0 },
    noBody: { type: [String, Boolean], default: false },
    tag: { default: "div" },
    title: { default: void 0 },
    titleItemClass: { default: void 0 },
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: { default: void 0 }
  },
  emits: ["update:active"],
  setup(e, { emit: t }) {
    const o = e, a = useSlots(), l = t, n = inject(Zl, null), i = _e(() => o.id, "tabpane"), s = _e(() => o.buttonId, "tab"), u = r(() => o.active), d = r(() => o.disabled), f = r(() => o.lazyOnce ?? o.lazy), g = r(() => o.noBody), p = ref(false), y = ref(null), { onClick: b, ...V } = useAttrs(), C = computed(
      () => ({
        id: i.value,
        buttonId: s.value,
        disabled: d.value,
        title: o.title,
        titleComponent: a.title,
        titleItemClass: o.titleItemClass,
        titleLinkAttributes: o.titleLinkAttributes,
        titleLinkClass: o.titleLinkClass,
        onClick: b,
        el: y.value
      })
    );
    onMounted(() => {
      n && (n.registerTab(C), u.value && n.activateTab(i.value));
    }), onUnmounted(() => {
      n && n.unregisterTab(i.value);
    });
    const c = toRef(() => (n == null ? void 0 : n.activeId.value) === i.value), h2 = ref(c.value), B = toRef(() => !!(n != null && n.lazy.value || f.value)), _ = toRef(() => o.lazyOnce !== void 0), k = toRef(() => c.value && !d.value), S = toRef(
      () => k.value || !B.value || B.value && _.value && p.value
    );
    watch(c, (I) => {
      if (I) {
        l("update:active", true), setTimeout(() => {
          h2.value = true;
        }, 0);
        return;
      }
      h2.value = false, l("update:active", false);
    }), watch(u, (I) => {
      if (n) {
        if (!I) {
          c.value && n.activateTab(void 0);
          return;
        }
        n.activateTab(i.value);
      }
    });
    const $ = computed(() => [
      {
        active: c.value,
        show: h2.value,
        "card-body": (n == null ? void 0 : n.card.value) && g.value === false,
        fade: !(n != null && n.noFade.value)
      },
      h2.value && (n != null && n.activeTabClass) ? n.activeTabClass : null
    ]);
    return watch(S, (I) => {
      I && !p.value && (p.value = true);
    }), (I, T) => (openBlock(), createBlock(resolveDynamicComponent(I.tag), mergeProps({
      id: unref(i),
      ref_key: "el",
      ref: y,
      class: ["tab-pane", $.value],
      role: "tabpanel",
      "aria-labelledby": unref(s)
    }, V), {
      default: withCtx(() => [
        S.value ? renderSlot(I.$slots, "default", { key: 0 }) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "class", "aria-labelledby"]));
  }
});
var yc = ["aria-orientation"];
var hc = ["id", "aria-controls", "aria-selected", "onClick"];
var Bc = defineComponent({
  __name: "BTabs",
  props: {
    activeId: { default: void 0 },
    activeNavItemClass: { default: void 0 },
    activeTabClass: { default: void 0 },
    align: { default: void 0 },
    card: { type: [String, Boolean], default: false },
    contentClass: { default: void 0 },
    end: { type: [String, Boolean], default: false },
    fill: { type: [String, Boolean], default: false },
    id: { default: void 0 },
    justified: { type: [String, Boolean], default: false },
    lazy: { type: [String, Boolean], default: false },
    modelValue: { default: -1 },
    navClass: { default: void 0 },
    navWrapperClass: { default: void 0 },
    noFade: { type: [String, Boolean], default: false },
    noNavStyle: { type: [String, Boolean], default: false },
    pills: { type: [String, Boolean], default: false },
    small: { type: [String, Boolean], default: false },
    tag: { default: "div" },
    vertical: { type: [String, Boolean], default: false }
  },
  emits: ["activate-tab", "click", "update:activeId", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = ke(o, "modelValue", a, { passive: true }), n = ke(o, "activeId", a, { passive: true }), i = r(() => o.card), s = r(() => o.end), u = r(() => o.fill), d = r(() => o.justified), f = r(() => o.lazy), g = r(() => o.noFade), p = r(() => o.noNavStyle), y = r(() => o.pills), b = r(() => o.small), V = r(() => o.vertical), C = ref([]), c = computed(
      () => C.value.map((z) => {
        const P = unref(z), D = P.id === n.value;
        return {
          ...P,
          active: D,
          navItemClasses: [
            {
              active: D,
              disabled: P.disabled
            },
            D && o.activeNavItemClass ? o.activeNavItemClass : null,
            P.titleLinkClass
          ]
        };
      })
    ), h2 = toRef(() => !(c != null && c.value && c.value.length > 0)), B = computed(() => ({
      "d-flex": V.value,
      "align-items-start": V.value
    })), _ = Zt(() => o.align), k = computed(() => ({
      "nav-pills": y.value,
      "flex-column me-3": V.value,
      [_.value]: o.align !== void 0,
      "nav-fill": u.value,
      "card-header-tabs": i.value,
      "nav-justified": d.value,
      "nav-tabs": !p.value && !y.value,
      small: b.value
    })), S = (z) => {
      var P;
      if (z !== void 0) {
        const D = (P = c.value[z]) == null ? void 0 : P.id;
        if (z > -1 && z < c.value.length && !c.value[z].disabled && (l.value < 0 || n.value !== D || l.value !== z)) {
          const ae = new dt("activate-tab", { cancelable: true });
          a("activate-tab", z, l.value, ae), ae.defaultPrevented || (n.value !== D && (n.value = D), l.value !== z && (l.value = z));
        }
      }
    }, $ = (z, P) => {
      var D, ae, le;
      S(P), P >= 0 && !c.value[P].disabled && ((D = c.value[P]) != null && D.onClick) && typeof c.value[P].onClick == "function" && ((le = (ae = c.value[P]).onClick) == null || le.call(ae, z));
    }, I = (z) => {
      var P, D;
      c.value.length <= 0 || (l.value = T(l.value + z, z), (D = document.getElementById((P = c.value[l.value]) == null ? void 0 : P.buttonId)) == null || D.focus());
    }, T = (z, P) => {
      if (c.value.length <= 0)
        return -1;
      let D = z;
      const ae = c.value.map((ve) => !ve.disabled).lastIndexOf(true), le = c.value.map((ve) => !ve.disabled).indexOf(true);
      for (; D >= le && D <= ae && c.value[D].disabled; )
        D += P;
      return D < le && (D = le), D >= ae && (D = ae), D;
    };
    watch(l, (z, P) => {
      if (z === P || c.value.length <= 0)
        return;
      const D = T(z, z > P ? 1 : -1);
      nextTick(() => {
        S(D);
      });
    }), watch(n, (z, P) => {
      const D = c.value.findIndex((ae) => ae.id === z);
      if (z !== P && !(c.value.length <= 0)) {
        if (D === -1) {
          S(T(0, 1));
          return;
        }
        S(D);
      }
    });
    const O = (z) => {
      C.value.find((P) => P.value.id === z.value.id) ? C.value[C.value.findIndex((P) => P.value.id === z.value.id)] = z : C.value.push(z), C.value = C.value.sort((P, D) => {
        if (!Node || !P.value.el || !D.value.el)
          return 0;
        const ae = P.value.el.compareDocumentPosition(D.value.el);
        return ae & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : ae & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
      });
    }, F = (z) => {
      C.value.find((P) => P.value.id === z) && C.value.splice(
        C.value.findIndex((P) => P.value.id === z),
        1
      );
    };
    watch(
      C,
      () => {
        K();
      },
      { deep: true }
    );
    const K = () => {
      var z;
      if (c.value.length === 0) {
        l.value = -1, n.value = void 0;
        return;
      }
      if (l.value >= 0 && !n.value && (n.value = (z = c.value[l.value]) == null ? void 0 : z.id), c.value.find((P) => P.id === n.value)) {
        S(c.value.findIndex((P) => P.id === n.value));
        return;
      }
      S(c.value.map((P) => !P.disabled).indexOf(true));
    };
    return provide(Zl, {
      lazy: f,
      card: i,
      noFade: g,
      activeTabClass: toRef(() => o.activeTabClass),
      registerTab: O,
      unregisterTab: F,
      activeId: n,
      activateTab: (z) => {
        const P = c.value.findIndex((D) => D.id === z);
        if (z === void 0 || P === -1) {
          S(T(0, 1));
          return;
        }
        S(P);
      }
    }), (z, P) => (openBlock(), createBlock(resolveDynamicComponent(z.tag), {
      id: z.id,
      class: normalizeClass(["tabs", B.value])
    }, {
      default: withCtx(() => [
        unref(s) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["tab-content", z.contentClass])
        }, [
          renderSlot(z.$slots, "default"),
          h2.value ? (openBlock(), createElementBlock("div", {
            key: "bv-empty-tab",
            class: normalizeClass(["tab-pane active", { "card-body": unref(i) }])
          }, [
            renderSlot(z.$slots, "empty")
          ], 2)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([z.navWrapperClass, { "card-header": unref(i), "ms-auto": z.vertical && unref(s) }])
        }, [
          createBaseVNode("ul", {
            class: normalizeClass(["nav", [k.value, z.navClass]]),
            role: "tablist",
            "aria-orientation": z.vertical ? "vertical" : "horizontal"
          }, [
            renderSlot(z.$slots, "tabs-start"),
            (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (D, ae) => (openBlock(), createElementBlock("li", {
              key: D.id,
              class: normalizeClass(["nav-item", D.titleItemClass]),
              role: "presentation"
            }, [
              createBaseVNode("button", mergeProps({
                id: D.buttonId,
                class: ["nav-link", D.navItemClasses],
                role: "tab",
                "aria-controls": D.id,
                "aria-selected": D.active
              }, D.titleLinkAttributes, {
                onKeydown: [
                  P[0] || (P[0] = withKeys(withModifiers((le) => I(-1), ["stop", "prevent"]), ["left"])),
                  P[1] || (P[1] = withKeys(withModifiers((le) => I(1), ["stop", "prevent"]), ["right"])),
                  P[2] || (P[2] = withKeys(withModifiers((le) => I(-999), ["stop", "prevent"]), ["page-up"])),
                  P[3] || (P[3] = withKeys(withModifiers((le) => I(999), ["stop", "prevent"]), ["page-down"]))
                ],
                onClick: withModifiers((le) => $(le, ae), ["stop", "prevent"])
              }), [
                D.titleComponent ? (openBlock(), createBlock(resolveDynamicComponent(D.titleComponent), { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(D.title), 1)
                ], 64))
              ], 16, hc)
            ], 2))), 128)),
            renderSlot(z.$slots, "tabs-end")
          ], 10, yc)
        ], 2),
        unref(s) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["tab-content", z.contentClass])
        }, [
          renderSlot(z.$slots, "default"),
          h2.value ? (openBlock(), createElementBlock("div", {
            key: "bv-empty-tab",
            class: normalizeClass(["tab-pane active", { "card-body": unref(i) }])
          }, [
            renderSlot(z.$slots, "empty")
          ], 2)) : createCommentVNode("", true)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
});
var Sc = ["id", "role", "aria-live", "aria-atomic"];
var Cc = { class: "me-auto" };
var Pn = defineComponent({
  __name: "BToast",
  props: {
    animation: { type: [String, Boolean], default: true },
    autoHide: { type: [String, Boolean], default: true },
    body: { default: void 0 },
    bodyClass: { default: void 0 },
    delay: { default: 5e3 },
    headerClass: { default: void 0 },
    headerTag: { default: "div" },
    id: { default: void 0 },
    interval: { default: 1e3 },
    isStatus: { type: [String, Boolean], default: false },
    modelValue: { type: [Boolean, Number], default: false },
    noCloseButton: { type: [String, Boolean], default: false },
    noFade: { type: [String, Boolean], default: false },
    noHoverPause: { type: [String, Boolean], default: false },
    progressProps: { default: void 0 },
    showOnPause: { type: [String, Boolean], default: true },
    solid: { type: [String, Boolean], default: false },
    title: { default: void 0 },
    toastClass: { default: void 0 },
    variant: { default: void 0 },
    bgVariant: { default: null },
    textVariant: { default: null },
    active: { type: [String, Boolean], default: void 0 },
    activeClass: { default: void 0 },
    append: { type: [String, Boolean], default: void 0 },
    disabled: { type: [String, Boolean], default: void 0 },
    exactActiveClass: { default: void 0 },
    href: { default: void 0 },
    icon: { type: [String, Boolean], default: void 0 },
    opacity: { default: void 0 },
    opacityHover: { default: void 0 },
    rel: { default: void 0 },
    replace: { type: [String, Boolean], default: void 0 },
    routerComponentName: { default: void 0 },
    target: { default: void 0 },
    to: { default: void 0 },
    underlineOffset: { default: void 0 },
    underlineOffsetHover: { default: void 0 },
    underlineOpacity: { default: void 0 },
    underlineOpacityHover: { default: void 0 },
    underlineVariant: { default: void 0 }
  },
  emits: ["close", "close-countdown", "closed", "destroyed", "update:modelValue"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, n = ref(null), i = lo(n), s = ke(a, "modelValue", l), { computedLink: u, computedLinkProps: d } = Ct(a);
    r(() => a.animation);
    const f = r(() => a.isStatus);
    r(() => a.autoHide);
    const g = r(() => a.noCloseButton), p = r(() => a.noFade), y = r(() => a.noHoverPause), b = r(() => a.showOnPause), V = he(() => a.interval);
    r(() => a.solid);
    const C = Qe(a), c = toRef(() => typeof s.value == "boolean" ? 0 : s.value), {
      isActive: h2,
      pause: B,
      restart: _,
      resume: k,
      stop: S,
      isPaused: $,
      value: I
    } = zl(c, V, {
      immediate: typeof s.value == "number"
    });
    watchEffect(() => {
      l("close-countdown", I.value);
    });
    const T = toRef(() => u.value ? rt : "div"), O = toRef(
      () => typeof s.value == "boolean" ? s.value : h2.value || b.value && $.value
    );
    watch(h2, (P) => {
      P === false && $.value === false && l("destroyed");
    });
    const F = computed(() => [
      C.value,
      {
        show: O.value
      }
    ]), K = () => {
      l("close"), typeof s.value == "boolean" ? s.value = false : (s.value = 0, S()), l("closed");
    }, z = () => {
      y.value || B();
    };
    return watch(i, (P) => {
      if (P) {
        z();
        return;
      }
      k();
    }), onBeforeUnmount(S), t({
      pause: B,
      restart: _,
      resume: k,
      stop: S
    }), (P, D) => (openBlock(), createBlock(Mt, { "no-fade": unref(p) }, {
      default: withCtx(() => [
        O.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: P.id,
          ref_key: "element",
          ref: n,
          class: normalizeClass(["toast", [P.toastClass, F.value]]),
          tabindex: "0",
          role: O.value ? unref(f) ? "status" : "alert" : void 0,
          "aria-live": O.value ? unref(f) ? "polite" : "assertive" : void 0,
          "aria-atomic": O.value ? true : void 0
        }, [
          P.$slots.title || P.title ? (openBlock(), createBlock(resolveDynamicComponent(P.headerTag), {
            key: 0,
            class: "toast-header"
          }, {
            default: withCtx(() => [
              renderSlot(P.$slots, "title", { hide: K }, () => [
                createBaseVNode("strong", Cc, toDisplayString(P.title), 1)
              ]),
              unref(g) ? createCommentVNode("", true) : (openBlock(), createBlock(Dt, {
                key: 0,
                onClick: K
              }))
            ]),
            _: 3
          })) : createCommentVNode("", true),
          P.$slots.default || P.body ? (openBlock(), createBlock(resolveDynamicComponent(T.value), mergeProps({
            key: 1,
            class: ["toast-body", P.bodyClass],
            style: { display: "block" }
          }, unref(d), {
            onClick: D[0] || (D[0] = (ae) => unref(u) ? K : () => {
            })
          }), {
            default: withCtx(() => [
              renderSlot(P.$slots, "default", { hide: K }, () => [
                createTextVNode(toDisplayString(P.body), 1)
              ])
            ]),
            _: 3
          }, 16, ["class"])) : createCommentVNode("", true),
          typeof unref(s) == "number" && P.progressProps !== void 0 ? (openBlock(), createBlock(Vn, {
            key: 2,
            animated: P.progressProps.animated,
            precision: P.progressProps.precision,
            "show-progress": P.progressProps.showProgress,
            "show-value": P.progressProps.showValue,
            striped: P.progressProps.striped,
            variant: P.progressProps.variant,
            max: unref(s),
            value: unref(I),
            height: "4px"
          }, null, 8, ["animated", "precision", "show-progress", "show-value", "striped", "variant", "max", "value"])) : createCommentVNode("", true)
        ], 10, Sc)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
});
var wc = { id: "__BVID__toaster-container" };
var kc = defineComponent({
  __name: "BToaster",
  props: {
    teleportDisabled: { type: [String, Boolean], default: false },
    teleportTo: { default: "body" }
  },
  setup(e, { expose: t }) {
    const o = e, a = r(() => o.teleportDisabled), l = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, { hide: n, toasts: i, show: s } = Ul(), u = (d) => nn(d, ["value", "self", "pos"]);
    return t({
      hide: n,
      show: s
    }), (d, f) => (openBlock(), createBlock(Teleport, {
      to: d.teleportTo,
      disabled: unref(a)
    }, [
      createBaseVNode("div", wc, [
        (openBlock(), createElementBlock(Fragment, null, renderList(l, (g, p) => createBaseVNode("div", {
          key: p,
          class: normalizeClass([g, "toast-container position-fixed p-3"])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(i).filter((y) => y.pos === p), (y) => (openBlock(), createBlock(Pn, mergeProps({
            key: y.self,
            modelValue: y.value,
            "onUpdate:modelValue": (b) => y.value = b
          }, u(y), {
            onDestroyed: (b) => unref(n)(y.self)
          }), null, 16, ["modelValue", "onUpdate:modelValue", "onDestroyed"]))), 128))
        ], 2)), 64))
      ])
    ], 8, ["to", "disabled"]));
  }
});
var $c = defineComponent({
  __name: "BTooltip",
  props: {
    boundary: {},
    boundaryPadding: {},
    click: { type: [String, Boolean], default: void 0 },
    container: { default: void 0 },
    content: { default: void 0 },
    customClass: { default: void 0 },
    delay: { default: void 0 },
    floatingMiddleware: { default: void 0 },
    hide: { type: [String, Boolean], default: void 0 },
    html: { type: [String, Boolean], default: void 0 },
    id: { default: void 0 },
    inline: { type: [String, Boolean], default: void 0 },
    manual: { type: [String, Boolean], default: void 0 },
    modelValue: { type: [String, Boolean], default: void 0 },
    noAutoClose: { type: [String, Boolean], default: void 0 },
    noFade: { type: [String, Boolean], default: void 0 },
    noFlip: { type: [String, Boolean], default: void 0 },
    noHide: { type: [String, Boolean], default: void 0 },
    noShift: { type: [String, Boolean], default: void 0 },
    noSize: { type: [String, Boolean] },
    noninteractive: { type: [String, Boolean], default: true },
    offset: { default: void 0 },
    placement: { default: void 0 },
    persistent: { type: [String, Boolean] },
    realtime: { type: [String, Boolean], default: void 0 },
    reference: { default: void 0 },
    strategy: { default: void 0 },
    target: { default: void 0 },
    title: { default: void 0 },
    variant: { default: void 0 }
  },
  setup(e, { expose: t }) {
    var a, l, n;
    const o = ref(null);
    return t({
      hide: (a = o.value) == null ? void 0 : a.hide,
      show: (l = o.value) == null ? void 0 : l.show,
      toggle: (n = o.value) == null ? void 0 : n.toggle
    }), (i, s) => (openBlock(), createBlock(ro, mergeProps({
      ref_key: "popover",
      ref: o,
      tooltip: ""
    }, i.$props), createSlots({ _: 2 }, [
      renderList(i.$slots, (u, d) => ({
        name: d,
        fn: withCtx((f) => [
          renderSlot(i.$slots, d, normalizeProps(guardReactiveProps(f)))
        ])
      }))
    ]), 1040));
  }
});
var Qo = Object.freeze(Object.defineProperty({
  __proto__: null,
  BAccordion: ar,
  BAccordionItem: lr,
  BAlert: rr,
  BAvatar: fr,
  BAvatarGroup: vr,
  BBadge: pr,
  BBreadcrumb: br,
  BBreadcrumbItem: rn,
  BButton: pt,
  BButtonGroup: yr,
  BButtonToolbar: Br,
  BCard: mn,
  BCardBody: vn,
  BCardFooter: pn,
  BCardGroup: wr,
  BCardHeader: dn,
  BCardImg: ya,
  BCardSubtitle: fn,
  BCardText: kr,
  BCardTitle: cn,
  BCarousel: Pr,
  BCarouselSlide: Hr,
  BCloseButton: Dt,
  BCol: Gt,
  BCollapse: sn,
  BContainer: xr,
  BDropdown: gn,
  BDropdownDivider: qr,
  BDropdownForm: Ur,
  BDropdownGroup: Yr,
  BDropdownHeader: Jr,
  BDropdownItem: Qr,
  BDropdownItemButton: au,
  BDropdownText: nu,
  BForm: bn,
  BFormCheckbox: hn,
  BFormCheckboxGroup: mu,
  BFormFile: yu,
  BFormFloatingLabel: uu,
  BFormGroup: Tu,
  BFormInput: Vu,
  BFormInvalidFeedback: xa,
  BFormRadio: Sn,
  BFormRadioGroup: Iu,
  BFormRow: ra,
  BFormSelect: zu,
  BFormSelectOption: po,
  BFormSelectOptionGroup: Cn,
  BFormSpinbutton: Wu,
  BFormTag: wn,
  BFormTags: id,
  BFormText: Ma,
  BFormTextarea: ud,
  BFormValidFeedback: Da,
  BImg: vo,
  BInputGroup: gd,
  BInputGroupAddon: mo,
  BInputGroupAppend: bd,
  BInputGroupPrepend: yd,
  BInputGroupText: kn,
  BLink: rt,
  BListGroup: hd,
  BListGroupItem: Bd,
  BModal: kd,
  BNav: $d,
  BNavForm: _d,
  BNavItem: Ad,
  BNavItemDropdown: Ed,
  BNavText: Nd,
  BNavbar: Id,
  BNavbarBrand: Ld,
  BNavbarNav: Fd,
  BNavbarToggle: qd,
  BOffcanvas: Ud,
  BOverlay: Ta,
  BPagination: Yd,
  BPlaceholder: Ue,
  BPlaceholderButton: Tn,
  BPlaceholderCard: Zd,
  BPlaceholderTable: Jd,
  BPlaceholderWrapper: Qd,
  BPopover: ro,
  BProgress: Vn,
  BProgressBar: _n,
  BRow: oc,
  BSpinner: ka,
  BTab: bc,
  BTable: gc,
  BTableLite: En,
  BTableSimple: go,
  BTabs: Bc,
  BTbody: An,
  BTd: Et,
  BTfoot: qa,
  BTh: Ga,
  BThead: On,
  BToast: Pn,
  BToaster: kc,
  BTooltip: $c,
  BTr: lt,
  BTransition: Mt
}, Symbol.toStringTag, { value: "Module" }));
var Vc = Object.freeze(Object.defineProperty({
  __proto__: null,
  useBreadcrumb: Hl,
  useColorMode: Ri,
  useModal: Di,
  useModalController: ji,
  useToast: Ul
}, Symbol.toStringTag, { value: "Module" }));
var Ac = Object.freeze(Object.defineProperty({
  __proto__: null,
  BvCarouselEvent: ll,
  BvEvent: dt,
  BvTriggerableEvent: Rt
}, Symbol.toStringTag, { value: "Module" }));
var Oc = Object.freeze(Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var Ec = {
  install(e, t = { components: true, directives: true }) {
    const o = typeof t.components == "boolean" || typeof t.components > "u" ? { all: true } : t.components, a = Object.keys(Qo);
    Io(o, a).forEach((i) => {
      const s = Qo[i];
      e.component(i, s);
    });
    const l = typeof (t == null ? void 0 : t.directives) == "boolean" || typeof t.directives > "u" ? { all: true } : t == null ? void 0 : t.directives, n = Object.keys(Ko);
    Io(l, n).forEach((i) => {
      const s = i.toLowerCase().startsWith("v") ? i.slice(1) : i, u = Ko[i];
      e.directive(s, u);
    });
  }
};
export {
  ar as BAccordion,
  lr as BAccordionItem,
  rr as BAlert,
  fr as BAvatar,
  vr as BAvatarGroup,
  pr as BBadge,
  br as BBreadcrumb,
  rn as BBreadcrumbItem,
  pt as BButton,
  yr as BButtonGroup,
  Br as BButtonToolbar,
  mn as BCard,
  vn as BCardBody,
  pn as BCardFooter,
  wr as BCardGroup,
  dn as BCardHeader,
  ya as BCardImg,
  fn as BCardSubtitle,
  kr as BCardText,
  cn as BCardTitle,
  Pr as BCarousel,
  Hr as BCarouselSlide,
  Dt as BCloseButton,
  Gt as BCol,
  sn as BCollapse,
  xr as BContainer,
  gn as BDropdown,
  qr as BDropdownDivider,
  Ur as BDropdownForm,
  Yr as BDropdownGroup,
  Jr as BDropdownHeader,
  Qr as BDropdownItem,
  au as BDropdownItemButton,
  nu as BDropdownText,
  bn as BForm,
  hn as BFormCheckbox,
  mu as BFormCheckboxGroup,
  yu as BFormFile,
  uu as BFormFloatingLabel,
  Tu as BFormGroup,
  Vu as BFormInput,
  xa as BFormInvalidFeedback,
  Sn as BFormRadio,
  Iu as BFormRadioGroup,
  ra as BFormRow,
  zu as BFormSelect,
  po as BFormSelectOption,
  Cn as BFormSelectOptionGroup,
  Wu as BFormSpinbutton,
  wn as BFormTag,
  id as BFormTags,
  Ma as BFormText,
  ud as BFormTextarea,
  Da as BFormValidFeedback,
  vo as BImg,
  gd as BInputGroup,
  mo as BInputGroupAddon,
  bd as BInputGroupAppend,
  yd as BInputGroupPrepend,
  kn as BInputGroupText,
  rt as BLink,
  hd as BListGroup,
  Bd as BListGroupItem,
  kd as BModal,
  $d as BNav,
  _d as BNavForm,
  Ad as BNavItem,
  Ed as BNavItemDropdown,
  Nd as BNavText,
  Id as BNavbar,
  Ld as BNavbarBrand,
  Fd as BNavbarNav,
  qd as BNavbarToggle,
  Ud as BOffcanvas,
  Ta as BOverlay,
  Yd as BPagination,
  Ue as BPlaceholder,
  Tn as BPlaceholderButton,
  Zd as BPlaceholderCard,
  Jd as BPlaceholderTable,
  Qd as BPlaceholderWrapper,
  ro as BPopover,
  Vn as BProgress,
  _n as BProgressBar,
  oc as BRow,
  ka as BSpinner,
  bc as BTab,
  gc as BTable,
  En as BTableLite,
  go as BTableSimple,
  Bc as BTabs,
  An as BTbody,
  Et as BTd,
  qa as BTfoot,
  Ga as BTh,
  On as BThead,
  Pn as BToast,
  kc as BToaster,
  $c as BTooltip,
  lt as BTr,
  Mt as BTransition,
  Ec as BootstrapVueNext,
  ll as BvCarouselEvent,
  dt as BvEvent,
  Rt as BvTriggerableEvent,
  Qo as Components,
  Vc as Composables,
  Ko as Directives,
  Oc as Types,
  Ac as Utils,
  Ec as default,
  Hl as useBreadcrumb,
  Ri as useColorMode,
  Di as useModal,
  ji as useModalController,
  Ul as useToast,
  Hd as vBColorMode,
  ja as vBModal,
  xd as vBPopover,
  ja as vBToggle,
  Md as vBTooltip
};
//# sourceMappingURL=bootstrap-vue-next.js.map