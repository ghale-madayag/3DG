(function(e){var A={};function C(I){if(A[I])return A[I].exports;var g=A[I]={i:I,l:!1,exports:{}};return e[I].call(g.exports,g,g.exports,C),g.l=!0,g.exports}return C.m=e,C.c=A,C.d=function(I,g,t){C.o(I,g)||Object.defineProperty(I,g,{configurable:!1,enumerable:!0,get:t})},C.n=function(I){var g=I&&I.__esModule?function(){return I.default}:function(){return I};return C.d(g,"a",g),g},C.o=function(I,g){return Object.prototype.hasOwnProperty.call(I,g)},C.p="/dist/",C(C.s=4)})([function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* dependencyLibs/inputmask.dependencyLib.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("../global/window"), require("../global/document")) : window.dependencyLib = factory(window, document);
}(function(window, document) {
    function indexOf(list, elem) {
        for (var i = 0, len = list.length; i < len; i++) if (list[i] === elem) return i;
        return -1;
    }
    function type(obj) {
        return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[class2type.toString.call(obj)] || "object" : typeof obj;
    }
    function isWindow(obj) {
        return null != obj && obj === obj.window;
    }
    function isArraylike(obj) {
        var length = "length" in obj && obj.length, ltype = type(obj);
        return "function" !== ltype && !isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === ltype || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj));
    }
    function isValidElement(elem) {
        return elem instanceof Element;
    }
    function DependencyLib(elem) {
        return elem instanceof DependencyLib ? elem : this instanceof DependencyLib ? void (void 0 !== elem && null !== elem && elem !== window && (this[0] = elem.nodeName ? elem : void 0 !== elem[0] && elem[0].nodeName ? elem[0] : document.querySelector(elem), 
        void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new DependencyLib(elem);
    }
    for (var class2type = {}, classTypes = "Boolean Number String Function Array Date RegExp Object Error".split(" "), nameNdx = 0; nameNdx < classTypes.length; nameNdx++) class2type["[object " + classTypes[nameNdx] + "]"] = classTypes[nameNdx].toLowerCase();
    return DependencyLib.prototype = {
        on: function(events, handler) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                !function(ev, namespace) {
                    elem.addEventListener ? elem.addEventListener(ev, handler, !1) : elem.attachEvent && elem.attachEvent("on" + ev, handler), 
                    eventRegistry[ev] = eventRegistry[ev] || {}, eventRegistry[ev][namespace] = eventRegistry[ev][namespace] || [], 
                    eventRegistry[ev][namespace].push(handler);
                }(ev, namespace);
            }
            return this;
        },
        off: function(events, handler) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = events.split(" "), endx = 0; endx < _events.length; endx++) for (var nsEvent = _events[endx].split("."), offEvents = function(ev, namespace) {
                var hndx, hndL, evts = [];
                if (ev.length > 0) if (void 0 === handler) for (hndx = 0, hndL = eventRegistry[ev][namespace].length; hndx < hndL; hndx++) evts.push({
                    ev: ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler: eventRegistry[ev][namespace][hndx]
                }); else evts.push({
                    ev: ev,
                    namespace: namespace && namespace.length > 0 ? namespace : "global",
                    handler: handler
                }); else if (namespace.length > 0) for (var evNdx in eventRegistry) for (var nmsp in eventRegistry[evNdx]) if (nmsp === namespace) if (void 0 === handler) for (hndx = 0, 
                hndL = eventRegistry[evNdx][nmsp].length; hndx < hndL; hndx++) evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: eventRegistry[evNdx][nmsp][hndx]
                }); else evts.push({
                    ev: evNdx,
                    namespace: nmsp,
                    handler: handler
                });
                return evts;
            }(nsEvent[0], nsEvent[1]), i = 0, offEventsL = offEvents.length; i < offEventsL; i++) !function(ev, namespace, handler) {
                if (ev in eventRegistry == 1) if (elem.removeEventListener ? elem.removeEventListener(ev, handler, !1) : elem.detachEvent && elem.detachEvent("on" + ev, handler), 
                "global" === namespace) for (var nmsp in eventRegistry[ev]) eventRegistry[ev][nmsp].splice(eventRegistry[ev][nmsp].indexOf(handler), 1); else eventRegistry[ev][namespace].splice(eventRegistry[ev][namespace].indexOf(handler), 1);
            }(offEvents[i].ev, offEvents[i].namespace, offEvents[i].handler);
            return this;
        },
        trigger: function(events) {
            if (isValidElement(this[0])) for (var eventRegistry = this[0].eventRegistry, elem = this[0], _events = "string" == typeof events ? events.split(" ") : [ events.type ], endx = 0; endx < _events.length; endx++) {
                var nsEvent = _events[endx].split("."), ev = nsEvent[0], namespace = nsEvent[1] || "global";
                if (void 0 !== document && "global" === namespace) {
                    var evnt, i, params = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: Array.prototype.slice.call(arguments, 1)
                    };
                    if (document.createEvent) {
                        try {
                            evnt = new CustomEvent(ev, params);
                        } catch (e) {
                            evnt = document.createEvent("CustomEvent"), evnt.initCustomEvent(ev, params.bubbles, params.cancelable, params.detail);
                        }
                        events.type && DependencyLib.extend(evnt, events), elem.dispatchEvent(evnt);
                    } else evnt = document.createEventObject(), evnt.eventType = ev, events.type && DependencyLib.extend(evnt, events), 
                    elem.fireEvent("on" + evnt.eventType, evnt);
                } else if (void 0 !== eventRegistry[ev]) if (arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]), 
                "global" === namespace) for (var nmsp in eventRegistry[ev]) for (i = 0; i < eventRegistry[ev][nmsp].length; i++) eventRegistry[ev][nmsp][i].apply(elem, arguments); else for (i = 0; i < eventRegistry[ev][namespace].length; i++) eventRegistry[ev][namespace][i].apply(elem, arguments);
            }
            return this;
        }
    }, DependencyLib.isFunction = function(obj) {
        return "function" === type(obj);
    }, DependencyLib.noop = function() {}, DependencyLib.isArray = Array.isArray, DependencyLib.inArray = function(elem, arr, i) {
        return null == arr ? -1 : indexOf(arr, elem);
    }, DependencyLib.valHooks = void 0, DependencyLib.isPlainObject = function(obj) {
        return "object" === type(obj) && !obj.nodeType && !isWindow(obj) && !(obj.constructor && !class2type.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf"));
    }, DependencyLib.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
        i++), "object" == typeof target || DependencyLib.isFunction(target) || (target = {}), 
        i === length && (target = this, i--); i < length; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
        copy = options[name], target !== copy && (deep && copy && (DependencyLib.isPlainObject(copy) || (copyIsArray = DependencyLib.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, 
        clone = src && DependencyLib.isArray(src) ? src : []) : clone = src && DependencyLib.isPlainObject(src) ? src : {}, 
        target[name] = DependencyLib.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
        return target;
    }, DependencyLib.each = function(obj, callback) {
        var i = 0;
        if (isArraylike(obj)) for (var length = obj.length; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++) ; else for (i in obj) if (!1 === callback.call(obj[i], i, obj[i])) break;
        return obj;
    }, DependencyLib.map = function(elems, callback) {
        var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
        if (isArray) for (;i < length; i++) null != (value = callback(elems[i], i)) && ret.push(value); else for (i in elems) null != (value = callback(elems[i], i)) && ret.push(value);
        return [].concat(ret);
    }, DependencyLib.data = function(owner, key, value) {
        if (void 0 === value) return owner.__data ? owner.__data[key] : null;
        owner.__data = owner.__data || {}, owner.__data[key] = value;
    }, "function" == typeof window.CustomEvent ? DependencyLib.Event = window.CustomEvent : (DependencyLib.Event = function(event, params) {
        params = params || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var evt = document.createEvent("CustomEvent");
        return evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail), 
        evt;
    }, DependencyLib.Event.prototype = window.Event.prototype), DependencyLib;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzPzczMWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzR0FBc0c7QUFDdEc7QUFDQSw0QkFBNEIsdUdBQXVHLDZCQUE2QjtBQUNoSztBQUNBO0FBQ0EsK0lBQStJLHVCQUF1QjtBQUN0SztBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLCtJQUErSSx1QkFBdUI7QUFDdEs7QUFDQSxxSEFBcUgsYUFBYTtBQUNsSTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQix5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhLCtEQUErRCxnQkFBZ0I7QUFDNUY7QUFDQSx3SkFBd0o7QUFDeEosYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkxBQTZMLHVCQUF1QjtBQUNwTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsdUZBQXVGLG9DQUFvQyx3REFBd0QsaUJBQWlCLHlDQUF5QztBQUM3TztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLG9DQUFvQztBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxxRkFBcUY7QUFDckYsc0ZBQXNGO0FBQ3RGLDJGQUEyRjtBQUMzRiw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkRBQTJELHVEQUF1RCxPQUFPO0FBQ3pIO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLFdBQVcsaUVBQWlFO0FBQ3ZHO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBkZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYi5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi4vZ2xvYmFsL3dpbmRvd1wiLCBcIi4uL2dsb2JhbC9kb2N1bWVudFwiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi4vZ2xvYmFsL3dpbmRvd1wiKSwgcmVxdWlyZShcIi4uL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuZGVwZW5kZW5jeUxpYiA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XG59KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbiAgICBmdW5jdGlvbiBpbmRleE9mKGxpc3QsIGVsZW0pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIGlmIChsaXN0W2ldID09PSBlbGVtKSByZXR1cm4gaTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0eXBlKG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBvYmogPyBvYmogKyBcIlwiIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygb2JqID8gY2xhc3MydHlwZVtjbGFzczJ0eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIiA6IHR5cGVvZiBvYmo7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgICAgICByZXR1cm4gbnVsbCAhPSBvYmogJiYgb2JqID09PSBvYmoud2luZG93O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FycmF5bGlrZShvYmopIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsIGx0eXBlID0gdHlwZShvYmopO1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiICE9PSBsdHlwZSAmJiAhaXNXaW5kb3cob2JqKSAmJiAoISgxICE9PSBvYmoubm9kZVR5cGUgfHwgIWxlbmd0aCkgfHwgKFwiYXJyYXlcIiA9PT0gbHR5cGUgfHwgMCA9PT0gbGVuZ3RoIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIGxlbmd0aCAmJiBsZW5ndGggPiAwICYmIGxlbmd0aCAtIDEgaW4gb2JqKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TGliKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gZWxlbSA6IHRoaXMgaW5zdGFuY2VvZiBEZXBlbmRlbmN5TGliID8gdm9pZCAodm9pZCAwICE9PSBlbGVtICYmIG51bGwgIT09IGVsZW0gJiYgZWxlbSAhPT0gd2luZG93ICYmICh0aGlzWzBdID0gZWxlbS5ub2RlTmFtZSA/IGVsZW0gOiB2b2lkIDAgIT09IGVsZW1bMF0gJiYgZWxlbVswXS5ub2RlTmFtZSA/IGVsZW1bMF0gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pLCBcbiAgICAgICAgdm9pZCAwICE9PSB0aGlzWzBdICYmIG51bGwgIT09IHRoaXNbMF0gJiYgKHRoaXNbMF0uZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSB8fCB7fSkpKSA6IG5ldyBEZXBlbmRlbmN5TGliKGVsZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBjbGFzczJ0eXBlID0ge30sIGNsYXNzVHlwZXMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIG5hbWVOZHggPSAwOyBuYW1lTmR4IDwgY2xhc3NUeXBlcy5sZW5ndGg7IG5hbWVOZHgrKykgY2xhc3MydHlwZVtcIltvYmplY3QgXCIgKyBjbGFzc1R5cGVzW25hbWVOZHhdICsgXCJdXCJdID0gY2xhc3NUeXBlc1tuYW1lTmR4XS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBEZXBlbmRlbmN5TGliLnByb3RvdHlwZSA9IHtcbiAgICAgICAgb246IGZ1bmN0aW9uKGV2ZW50cywgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHRoaXNbMF0pKSBmb3IgKHZhciBldmVudFJlZ2lzdHJ5ID0gdGhpc1swXS5ldmVudFJlZ2lzdHJ5LCBlbGVtID0gdGhpc1swXSwgX2V2ZW50cyA9IGV2ZW50cy5zcGxpdChcIiBcIiksIGVuZHggPSAwOyBlbmR4IDwgX2V2ZW50cy5sZW5ndGg7IGVuZHgrKykge1xuICAgICAgICAgICAgICAgIHZhciBuc0V2ZW50ID0gX2V2ZW50c1tlbmR4XS5zcGxpdChcIi5cIiksIGV2ID0gbnNFdmVudFswXSwgbmFtZXNwYWNlID0gbnNFdmVudFsxXSB8fCBcImdsb2JhbFwiO1xuICAgICAgICAgICAgICAgICFmdW5jdGlvbihldiwgbmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lciA/IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihldiwgaGFuZGxlciwgITEpIDogZWxlbS5hdHRhY2hFdmVudCAmJiBlbGVtLmF0dGFjaEV2ZW50KFwib25cIiArIGV2LCBoYW5kbGVyKSwgXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50UmVnaXN0cnlbZXZdID0gZXZlbnRSZWdpc3RyeVtldl0gfHwge30sIGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV0gPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdIHx8IFtdLCBcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRSZWdpc3RyeVtldl1bbmFtZXNwYWNlXS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH0oZXYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmOiBmdW5jdGlvbihldmVudHMsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBldmVudHMuc3BsaXQoXCIgXCIpLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIGZvciAodmFyIG5zRXZlbnQgPSBfZXZlbnRzW2VuZHhdLnNwbGl0KFwiLlwiKSwgb2ZmRXZlbnRzID0gZnVuY3Rpb24oZXYsIG5hbWVzcGFjZSkge1xuICAgICAgICAgICAgICAgIHZhciBobmR4LCBobmRMLCBldnRzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGV2Lmxlbmd0aCA+IDApIGlmICh2b2lkIDAgPT09IGhhbmRsZXIpIGZvciAoaG5keCA9IDAsIGhuZEwgPSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSAmJiBuYW1lc3BhY2UubGVuZ3RoID4gMCA/IG5hbWVzcGFjZSA6IFwiZ2xvYmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZdW25hbWVzcGFjZV1baG5keF1cbiAgICAgICAgICAgICAgICB9KTsgZWxzZSBldnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBldjogZXYsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlICYmIG5hbWVzcGFjZS5sZW5ndGggPiAwID8gbmFtZXNwYWNlIDogXCJnbG9iYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgICAgICAgICAgIH0pOyBlbHNlIGlmIChuYW1lc3BhY2UubGVuZ3RoID4gMCkgZm9yICh2YXIgZXZOZHggaW4gZXZlbnRSZWdpc3RyeSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2TmR4XSkgaWYgKG5tc3AgPT09IG5hbWVzcGFjZSkgaWYgKHZvaWQgMCA9PT0gaGFuZGxlcikgZm9yIChobmR4ID0gMCwgXG4gICAgICAgICAgICAgICAgaG5kTCA9IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdLmxlbmd0aDsgaG5keCA8IGhuZEw7IGhuZHgrKykgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGV2ZW50UmVnaXN0cnlbZXZOZHhdW25tc3BdW2huZHhdXG4gICAgICAgICAgICAgICAgfSk7IGVsc2UgZXZ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXY6IGV2TmR4LFxuICAgICAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IG5tc3AsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZ0cztcbiAgICAgICAgICAgIH0obnNFdmVudFswXSwgbnNFdmVudFsxXSksIGkgPSAwLCBvZmZFdmVudHNMID0gb2ZmRXZlbnRzLmxlbmd0aDsgaSA8IG9mZkV2ZW50c0w7IGkrKykgIWZ1bmN0aW9uKGV2LCBuYW1lc3BhY2UsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXYgaW4gZXZlbnRSZWdpc3RyeSA9PSAxKSBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyID8gZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2LCBoYW5kbGVyLCAhMSkgOiBlbGVtLmRldGFjaEV2ZW50ICYmIGVsZW0uZGV0YWNoRXZlbnQoXCJvblwiICsgZXYsIGhhbmRsZXIpLCBcbiAgICAgICAgICAgICAgICBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIGZvciAodmFyIG5tc3AgaW4gZXZlbnRSZWdpc3RyeVtldl0pIGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtubXNwXS5pbmRleE9mKGhhbmRsZXIpLCAxKTsgZWxzZSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLnNwbGljZShldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgICAgfShvZmZFdmVudHNbaV0uZXYsIG9mZkV2ZW50c1tpXS5uYW1lc3BhY2UsIG9mZkV2ZW50c1tpXS5oYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudCh0aGlzWzBdKSkgZm9yICh2YXIgZXZlbnRSZWdpc3RyeSA9IHRoaXNbMF0uZXZlbnRSZWdpc3RyeSwgZWxlbSA9IHRoaXNbMF0sIF9ldmVudHMgPSBcInN0cmluZ1wiID09IHR5cGVvZiBldmVudHMgPyBldmVudHMuc3BsaXQoXCIgXCIpIDogWyBldmVudHMudHlwZSBdLCBlbmR4ID0gMDsgZW5keCA8IF9ldmVudHMubGVuZ3RoOyBlbmR4KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbnNFdmVudCA9IF9ldmVudHNbZW5keF0uc3BsaXQoXCIuXCIpLCBldiA9IG5zRXZlbnRbMF0sIG5hbWVzcGFjZSA9IG5zRXZlbnRbMV0gfHwgXCJnbG9iYWxcIjtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkb2N1bWVudCAmJiBcImdsb2JhbFwiID09PSBuYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2bnQsIGksIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogITAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2bnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXYsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIiksIGV2bnQuaW5pdEN1c3RvbUV2ZW50KGV2LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnR5cGUgJiYgRGVwZW5kZW5jeUxpYi5leHRlbmQoZXZudCwgZXZlbnRzKSwgZWxlbS5kaXNwYXRjaEV2ZW50KGV2bnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZXZudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCksIGV2bnQuZXZlbnRUeXBlID0gZXYsIGV2ZW50cy50eXBlICYmIERlcGVuZGVuY3lMaWIuZXh0ZW5kKGV2bnQsIGV2ZW50cyksIFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmZpcmVFdmVudChcIm9uXCIgKyBldm50LmV2ZW50VHlwZSwgZXZudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2b2lkIDAgIT09IGV2ZW50UmVnaXN0cnlbZXZdKSBpZiAoYXJndW1lbnRzWzBdID0gYXJndW1lbnRzWzBdLnR5cGUgPyBhcmd1bWVudHNbMF0gOiBEZXBlbmRlbmN5TGliLkV2ZW50KGFyZ3VtZW50c1swXSksIFxuICAgICAgICAgICAgICAgIFwiZ2xvYmFsXCIgPT09IG5hbWVzcGFjZSkgZm9yICh2YXIgbm1zcCBpbiBldmVudFJlZ2lzdHJ5W2V2XSkgZm9yIChpID0gMDsgaSA8IGV2ZW50UmVnaXN0cnlbZXZdW25tc3BdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtubXNwXVtpXS5hcHBseShlbGVtLCBhcmd1bWVudHMpOyBlbHNlIGZvciAoaSA9IDA7IGkgPCBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdLmxlbmd0aDsgaSsrKSBldmVudFJlZ2lzdHJ5W2V2XVtuYW1lc3BhY2VdW2ldLmFwcGx5KGVsZW0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIERlcGVuZGVuY3lMaWIuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlKG9iaik7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5ub29wID0gZnVuY3Rpb24oKSB7fSwgRGVwZW5kZW5jeUxpYi5pc0FycmF5ID0gQXJyYXkuaXNBcnJheSwgRGVwZW5kZW5jeUxpYi5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyLCBpKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGFyciA/IC0xIDogaW5kZXhPZihhcnIsIGVsZW0pO1xuICAgIH0sIERlcGVuZGVuY3lMaWIudmFsSG9va3MgPSB2b2lkIDAsIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICByZXR1cm4gXCJvYmplY3RcIiA9PT0gdHlwZShvYmopICYmICFvYmoubm9kZVR5cGUgJiYgIWlzV2luZG93KG9iaikgJiYgIShvYmouY29uc3RydWN0b3IgJiYgIWNsYXNzMnR5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIikpO1xuICAgIH0sIERlcGVuZGVuY3lMaWIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSwgdGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LCBpID0gMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCwgZGVlcCA9ICExO1xuICAgICAgICBmb3IgKFwiYm9vbGVhblwiID09IHR5cGVvZiB0YXJnZXQgJiYgKGRlZXAgPSB0YXJnZXQsIHRhcmdldCA9IGFyZ3VtZW50c1tpXSB8fCB7fSwgXG4gICAgICAgIGkrKyksIFwib2JqZWN0XCIgPT0gdHlwZW9mIHRhcmdldCB8fCBEZXBlbmRlbmN5TGliLmlzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0ID0ge30pLCBcbiAgICAgICAgaSA9PT0gbGVuZ3RoICYmICh0YXJnZXQgPSB0aGlzLCBpLS0pOyBpIDwgbGVuZ3RoOyBpKyspIGlmIChudWxsICE9IChvcHRpb25zID0gYXJndW1lbnRzW2ldKSkgZm9yIChuYW1lIGluIG9wdGlvbnMpIHNyYyA9IHRhcmdldFtuYW1lXSwgXG4gICAgICAgIGNvcHkgPSBvcHRpb25zW25hbWVdLCB0YXJnZXQgIT09IGNvcHkgJiYgKGRlZXAgJiYgY29weSAmJiAoRGVwZW5kZW5jeUxpYi5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IERlcGVuZGVuY3lMaWIuaXNBcnJheShjb3B5KSkpID8gKGNvcHlJc0FycmF5ID8gKGNvcHlJc0FycmF5ID0gITEsIFxuICAgICAgICBjbG9uZSA9IHNyYyAmJiBEZXBlbmRlbmN5TGliLmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdKSA6IGNsb25lID0gc3JjICYmIERlcGVuZGVuY3lMaWIuaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge30sIFxuICAgICAgICB0YXJnZXRbbmFtZV0gPSBEZXBlbmRlbmN5TGliLmV4dGVuZChkZWVwLCBjbG9uZSwgY29weSkpIDogdm9pZCAwICE9PSBjb3B5ICYmICh0YXJnZXRbbmFtZV0gPSBjb3B5KSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5lYWNoID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGlmIChpc0FycmF5bGlrZShvYmopKSBmb3IgKHZhciBsZW5ndGggPSBvYmoubGVuZ3RoOyBpIDwgbGVuZ3RoICYmICExICE9PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKTsgaSsrKSA7IGVsc2UgZm9yIChpIGluIG9iaikgaWYgKCExID09PSBjYWxsYmFjay5jYWxsKG9ialtpXSwgaSwgb2JqW2ldKSkgYnJlYWs7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSwgRGVwZW5kZW5jeUxpYi5tYXAgPSBmdW5jdGlvbihlbGVtcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHZhbHVlLCBpID0gMCwgbGVuZ3RoID0gZWxlbXMubGVuZ3RoLCBpc0FycmF5ID0gaXNBcnJheWxpa2UoZWxlbXMpLCByZXQgPSBbXTtcbiAgICAgICAgaWYgKGlzQXJyYXkpIGZvciAoO2kgPCBsZW5ndGg7IGkrKykgbnVsbCAhPSAodmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSkpICYmIHJldC5wdXNoKHZhbHVlKTsgZWxzZSBmb3IgKGkgaW4gZWxlbXMpIG51bGwgIT0gKHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGkpKSAmJiByZXQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQocmV0KTtcbiAgICB9LCBEZXBlbmRlbmN5TGliLmRhdGEgPSBmdW5jdGlvbihvd25lciwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodm9pZCAwID09PSB2YWx1ZSkgcmV0dXJuIG93bmVyLl9fZGF0YSA/IG93bmVyLl9fZGF0YVtrZXldIDogbnVsbDtcbiAgICAgICAgb3duZXIuX19kYXRhID0gb3duZXIuX19kYXRhIHx8IHt9LCBvd25lci5fX2RhdGFba2V5XSA9IHZhbHVlO1xuICAgIH0sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID8gRGVwZW5kZW5jeUxpYi5FdmVudCA9IHdpbmRvdy5DdXN0b21FdmVudCA6IChEZXBlbmRlbmN5TGliLkV2ZW50ID0gZnVuY3Rpb24oZXZlbnQsIHBhcmFtcykge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xuICAgICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiAhMSxcbiAgICAgICAgICAgIGRldGFpbDogdm9pZCAwXG4gICAgICAgIH07XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICByZXR1cm4gZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKSwgXG4gICAgICAgIGV2dDtcbiAgICB9LCBEZXBlbmRlbmN5TGliLkV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGUpLCBEZXBlbmRlbmN5TGliO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///0
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(2), __webpack_require__(3) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = factory(window.dependencyLib || jQuery, window, document);
}(function($, window, document, undefined) {
    function Inputmask(alias, options, internal) {
        if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);
        this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, 
        !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}, 
        options.alias = alias), this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, 
        this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));
    }
    function resolveAlias(aliasStr, options, opts) {
        var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
        return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), 
        $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 
        !1);
    }
    function generateMaskSet(opts, nocache) {
        function generateMask(mask, metadata, opts) {
            var regexMask = !1;
            if (null !== mask && "" !== mask || (regexMask = null !== opts.regex, regexMask ? (mask = opts.regex, 
            mask = mask.replace(/^(\\^)(.*)(\\$)$/, "$2")) : (regexMask = !0, mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 
            opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
                var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
                mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
            }
            var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;
            return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {
                mask: mask,
                maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),
                validPositions: {},
                _buffer: undefined,
                buffer: undefined,
                tests: {},
                metadata: metadata,
                maskLength: undefined
            }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 
            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 
            masksetDefinition;
        }
        if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
            if (opts.mask.length > 1) {
                opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
                var altMask = opts.groupmarker.start;
                return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
                    altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), 
                    msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;
                }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
            }
            opts.mask = opts.mask.pop();
        }
        return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);
    }
    function maskScope(actionObj, maskset, opts) {
        function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
            minimalPos = minimalPos || 0;
            var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();
            do {
                !0 === baseOnInput && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), 
                pos++;
            } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
            return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, 
            maskTemplate;
        }
        function getMaskSet() {
            return maskset;
        }
        function resetMaskSet(soft) {
            var maskset = getMaskSet();
            maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);
        }
        function getLastValidPosition(closestTo, strict, validPositions) {
            var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;
            closestTo === undefined && (closestTo = -1);
            for (var posNdx in valids) {
                var psNdx = parseInt(posNdx);
                valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 
                psNdx >= closestTo && (after = psNdx));
            }
            return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;
        }
        function stripValidPositions(start, end, nocheck, strict) {
            var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;
            for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {
                var posMatch = getMaskSet().validPositions[pos];
                if (posMatch !== undefined && null === posMatch.match.fn) {
                    var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];
                    return prevMatch !== undefined && nextMatch !== undefined;
                }
                return !1;
            }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);
            for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {
                for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;
                if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {
                    var t = getTestTemplate(i);
                    !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), 
                    getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], 
                    i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], 
                    i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
                }
            }
            resetMaskSet(!0);
        }
        function determineTestTemplate(tests, guessNextBest) {
            for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], 
            !(testPos.match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;
            return testPos;
        }
        function getTestTemplate(pos, ndxIntlzr, tstPs) {
            return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
        }
        function getTest(pos) {
            return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
        }
        function positionCanMatchDefinition(pos, def) {
            for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {
                valid = !0;
                break;
            }
            return valid;
        }
        function getTests(pos, ndxIntlzr, tstPs) {
            function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
                function handleMatch(match, loopNdx, quantifierRecurse) {
                    function isFirstMatch(latestMatch, tokenGroup) {
                        var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
                        return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
                            if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
                        }), firstMatch;
                    }
                    function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
                        var bestMatch, indexPos;
                        if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);
                        return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {
                            var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
                            (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 
                            indexPos = ndxPos);
                        }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
                    }
                    if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                    if (testPos === pos && match.matches === undefined) return matches.push({
                        match: match,
                        locator: loopNdx.reverse(),
                        cd: cacheDependency
                    }), !0;
                    if (match.matches !== undefined) {
                        if (match.isGroup && quantifierRecurse !== match) {
                            if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
                        } else if (match.isOptional) {
                            var optionalToken = match;
                            if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                                insertStop = !0, testPos = pos;
                            }
                        } else if (match.isAlternator) {
                            var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
                            if (-1 === altIndex || "string" == typeof altIndex) {
                                var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];
                                if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                                    if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 
                                    !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                                        var ntndx = $.inArray(match, maskToken.matches) + 1;
                                        maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), 
                                        $.each(matches, function(ndx, lmnt) {
                                            lmnt.alternation = loopNdx.length - 1;
                                        }));
                                    }
                                    maltMatches = matches.slice(), testPos = currentPos, matches = [];
                                    for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                                        var altMatch = maltMatches[ndx1], dropMatch = !1;
                                        altMatch.alternation = altMatch.alternation || loopNdxCnt;
                                        for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                                            var altMatch2 = malternateMatches[ndx2];
                                            if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {
                                                if (function(source, target) {
                                                    return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;
                                                }(altMatch, altMatch2)) {
                                                    dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], 
                                                    altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], 
                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));
                                                    break;
                                                }
                                                if (altMatch.match.def === altMatch2.match.def) {
                                                    dropMatch = !1;
                                                    break;
                                                }
                                                if (function(source, target) {
                                                    return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
                                                }(altMatch, altMatch2) || function(source, target) {
                                                    return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\\[\\]]/g, ""), getMaskSet(), pos, !1, opts, !1);
                                                }(altMatch, altMatch2)) {
                                                    altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), 
                                                    -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), 
                                                    dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], 
                                                    malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));
                                                    break;
                                                }
                                            }
                                        }
                                        dropMatch || malternateMatches.push(altMatch);
                                    }
                                }
                                "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {
                                    if (isFinite(ndx)) {
                                        var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");
                                        lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;
                                        for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", 
                                        lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), 
                                        lmnt.alternation = alternation);
                                        if (lmnt.locator[alternation] !== undefined) return lmnt;
                                    }
                                })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, 
                                match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();
                            } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);
                            if (match) return !0;
                        } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                            var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                            if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {
                                if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, 
                                isFirstMatch(latestMatch, tokenGroup)) {
                                    if (qndx > qt.quantifier.min - 1) {
                                        insertStop = !0, testPos = pos;
                                        break;
                                    }
                                    return !0;
                                }
                                return !0;
                            }
                        } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
                    } else testPos++;
                }
                for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {
                    var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);
                    if (match && testPos === pos) return match;
                    if (testPos > pos) break;
                }
            }
            function filterTests(tests) {
                if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
                    if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];
                    if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];
                    if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];
                }
                return tests;
            }
            var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
            if (pos > -1) {
                if (ndxIntlzr === undefined) {
                    for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;
                    test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {
                        var locator = [];
                        return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? (locator = determineTestTemplate(tests.slice()).locator.slice(), 
                        0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {
                            if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);
                        })), locator;
                    }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);
                }
                if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
                for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
                    if (resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos) break;
                }
            }
            return (0 === matches.length || insertStop) && matches.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: "",
                    placeholder: ""
                },
                locator: [],
                cd: cacheDependency
            }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), 
            filterTests(getMaskSet().tests[pos]));
        }
        function getBufferTemplate() {
            return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 
            getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 
            getMaskSet()._buffer;
        }
        function getBuffer(noCache) {
            return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), 
            getMaskSet().buffer;
        }
        function refreshFromBuffer(start, end, buffer) {
            var i, p;
            if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
            for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {
                var valResult = isValid(p, buffer[i], !0, !0);
                !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);
            }
        }
        function casing(elem, test, pos) {
            switch (opts.casing || test.casing) {
              case "upper":
                elem = elem.toUpperCase();
                break;

              case "lower":
                elem = elem.toLowerCase();
                break;

              case "title":
                var posBefore = getMaskSet().validPositions[pos - 1];
                elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
                break;

              default:
                if ($.isFunction(opts.casing)) {
                    var args = Array.prototype.slice.call(arguments);
                    args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);
                }
            }
            return elem;
        }
        function checkAlternationMatch(altArr1, altArr2, na) {
            for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);
            for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {
                isMatch = !0;
                break;
            }
            return isMatch;
        }
        function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {
            function isSelection(posObj) {
                var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;
                return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
            }
            function _isValid(position, c, strict) {
                var rslt = !1;
                return $.each(getTests(position), function(ndx, tst) {
                    for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
                    if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
                        c: getPlaceholder(position, test, !0) || test.def,
                        pos: position
                    })) {
                        var elem = rslt.c !== undefined ? rslt.c : c;
                        elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;
                        var validatedPos = position, possibleModifiedBuffer = getBuffer();
                        if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), 
                        $.each(rslt.remove.sort(function(a, b) {
                            return b - a;
                        }), function(ndx, lmnt) {
                            stripValidPositions(lmnt, lmnt + 1, !0);
                        })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), 
                        $.each(rslt.insert.sort(function(a, b) {
                            return a - b;
                        }), function(ndx, lmnt) {
                            isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                        })), rslt.refreshFromBuffer) {
                            var refresh = rslt.refreshFromBuffer;
                            if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), 
                            rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), 
                            !1;
                            if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), 
                            !1;
                        } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, 
                        refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), 
                        !1;
                        return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), 
                        setValidPosition(validatedPos, $.extend({}, tst, {
                            input: casing(elem, test, validatedPos)
                        }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
                    }
                }), rslt;
            }
            function setValidPosition(pos, validTest, fromSetValid, isSelection) {
                if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {
                    var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);
                    for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
                    getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                    var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;
                    for (i = j = pos; i <= lvp; i++) {
                        var t = positionsClone[i];
                        if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {
                            if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), 
                            getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), 
                            j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                                var result = isValid(posMatch, t.input, !0, !0);
                                valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, 
                                needsValidation = !0;
                            } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;
                            if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), 
                            valid) break;
                        }
                        if (!valid) break;
                    }
                    if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), 
                    resetMaskSet(!0), !1;
                } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
                return resetMaskSet(!0), !0;
            }
            function fillMissingNonMask(maskPos) {
                for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;
                var testTemplate, testsFromPos;
                for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(), 
                "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));
            }
            strict = !0 === strict;
            var maskPos = pos;
            pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
            var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
            if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), 
            !0 === result) {
                if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), 
                maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), 
                (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {
                    var currentPosValid = getMaskSet().validPositions[maskPos];
                    if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
                        if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {
                            !function(originalPos, newPos) {
                                var vp = getMaskSet().validPositions[newPos];
                                if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {
                                    var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;
                                    "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {
                                        for (var i = 0; i < tll; i++) {
                                            if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
                                                var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];
                                                targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);
                                                break;
                                            }
                                            equality < i && (equality = i, bestMatch = tst);
                                        }
                                    }), bestMatch = $.extend({}, bestMatch, {
                                        input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def
                                    }), bestMatch.generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, 
                                    _isValid(newPos, vp.input, !0);
                                }
                            }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;
                            break;
                        }
                    } else result = {
                        caret: seekNext(maskPos)
                    };
                }
                !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {
                    var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();
                    for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {
                        if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, 
                        prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
                        prevAltPos = altPos;
                    }
                    if (alternation !== undefined) {
                        decisionPos = parseInt(lastAlt);
                        var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
                        decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
                        var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
                        $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {
                            altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
                            for (var mndx = 0; mndx < altNdxs.length; mndx++) {
                                var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;
                                if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {
                                    getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                                    var possibilities = getMaskSet().validPositions[decisionPos].locator;
                                    for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), 
                                    null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, 
                                    !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), 
                                    staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), 
                                    getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, 
                                    i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) validPos = getMaskSet().validPositions[i], 
                                    validPos && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, 
                                    delete getMaskSet().validPositions[i];
                                    for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), 
                                    resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {
                                        var input = validInputs.shift();
                                        if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;
                                    }
                                    if (isValidRslt) {
                                        getMaskSet().validPositions[decisionPos].locator = possibilities;
                                        var targetLvp = getLastValidPosition(pos) + 1;
                                        for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                                        pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                                    }
                                    if (isValidRslt) return !1;
                                    resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
                                }
                            }
                        });
                    }
                    return isValidRslt;
                }(maskPos, c, strict)), !0 === result && (result = {
                    pos: maskPos
                });
            }
            if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {
                var postResult = opts.postValidation(getBuffer(!0), result, opts);
                if (postResult.refreshFromBuffer && postResult.buffer) {
                    var refresh = postResult.refreshFromBuffer;
                    refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);
                }
                result = !0 === postResult ? result : postResult;
            }
            return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), 
            getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
        }
        function isMask(pos, strict) {
            var test = getTestTemplate(pos).match;
            if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;
            if (!0 !== strict && pos > -1) {
                var tests = getTests(pos);
                return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
            }
            return !1;
        }
        function seekNext(pos, newBlock) {
            var maskL = getMaskSet().maskLength;
            if (pos >= maskL) return maskL;
            var position = pos;
            for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;
            return position;
        }
        function seekPrevious(pos, newBlock) {
            var tests, position = pos;
            if (position <= 0) return 0;
            for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && (tests = getTests(position), 
            tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;
            return position;
        }
        function getBufferElement(position) {
            return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
        }
        function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
            if (event && $.isFunction(opts.onBeforeWrite)) {
                var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);
                if (result) {
                    if (result.refreshFromBuffer) {
                        var refresh = result.refreshFromBuffer;
                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 
                        buffer = getBuffer(!0);
                    }
                    caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);
                }
            }
            input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function() {
                caret(input, caretPos);
            }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, 
            $(input).trigger("input")));
        }
        function getPlaceholder(pos, test, returnPL) {
            if (test = test || getTest(pos).match, test.placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
            if (null === test.fn) {
                if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
                    var prevTest, tests = getTests(pos), staticAlternations = [];
                    if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), 
                    null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
                }
                return test.def;
            }
            return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {
            function isTemplateMatch(ndx, charCodes) {
                return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);
            }
            var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;
            if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {
                var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
                matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), 
                initialNdx = seekNext(initialNdx));
            }
            if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, 
            $.each(inputValue, function(ndx, charCode) {
                if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {
                    var keypress = new $.Event("_checkval");
                    keypress.which = charCode.charCodeAt(0), charCodes += charCode;
                    var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
                    if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {
                        var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
                        result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), 
                        initialNdx = pos + 1, charCodes = "";
                    } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
                    if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {
                        var origResult = result;
                        if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), 
                        (result = $.extend(origResult, result)) && result.refreshFromBuffer) {
                            var refresh = result.refreshFromBuffer;
                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), 
                            resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);
                        }
                    }
                }
            }), writeOut) {
                var caretPos = undefined;
                document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), 
                writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);
            }
        }
        function unmaskedvalue(input) {
            if (input) {
                if (input.inputmask === undefined) return input.value;
                input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);
            }
            var umValue = [], vps = getMaskSet().validPositions;
            for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
            var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
            if ($.isFunction(opts.onUnMask)) {
                var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
                unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);
            }
            return unmaskedValue;
        }
        function caret(input, begin, end, notranslate) {
            function translatePosition(pos) {
                if (!0 !== notranslate && isRTL && "number" == typeof pos && (!opts.greedy || "" !== opts.placeholder)) {
                    pos = getBuffer().join("").length - pos;
                }
                return pos;
            }
            var range;
            if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, 
            end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0), 
            range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 
            end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length), 
            end = begin + range.text.length), {
                begin: translatePosition(begin),
                end: translatePosition(end)
            };
            if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {
                begin = translatePosition(begin), end = translatePosition(end), end = "number" == typeof end ? end : begin;
                var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
                if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, 
                input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {
                    if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {
                        var textNode = document.createTextNode("");
                        input.appendChild(textNode);
                    }
                    range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 
                    range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 
                    range.collapse(!0);
                    var sel = window.getSelection();
                    sel.removeAllRanges(), sel.addRange(range);
                } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0), 
                range.moveEnd("character", end), range.moveStart("character", begin), range.select());
                renderColorMask(input, {
                    begin: begin,
                    end: end
                });
            }
        }
        function determineLastRequiredPosition(returnDefinition) {
            var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;
            for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
            ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
            var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
            for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
            return returnDefinition ? {
                l: bl,
                def: positions[bl] ? positions[bl].match : undefined
            } : bl;
        }
        function clearOptionalTail(buffer) {
            for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;
            for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;
            return buffer.splice(rl), buffer;
        }
        function isComplete(buffer) {
            if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
            if ("*" === opts.repeat) return undefined;
            var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);
            if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
                complete = !0;
                for (var i = 0; i <= aml; i++) {
                    var test = getTestTemplate(i).match;
                    if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
                        complete = !1;
                        break;
                    }
                }
            }
            return complete;
        }
        function handleRemove(input, k, pos, strict, fromIsValid) {
            if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), 
            isRTL)) {
                var pend = pos.end;
                pos.end = pos.begin, pos.begin = pend;
            }
            k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), 
            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, 
            getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), 
            stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {
                if (opts.keepStatic) {
                    for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
                        var altPos = getMaskSet().validPositions[lastAlt];
                        if (altPos) {
                            if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), 
                            delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
                            prevAltPos = altPos;
                        }
                    }
                    if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {
                        var keypress = new $.Event("keypress");
                        keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
                    } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
                }
            }();
            var lvp = getLastValidPosition(pos.begin, !0);
            if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, 
            !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;
        }
        function initializeColorMask(input) {
            function findCaretPos(clientx) {
                var caretPos, e = document.createElement("span");
                for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);
                e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, 
                e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", 
                e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
                var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;
                for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
                    if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
                        var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;
                        e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
                        break;
                    }
                    previousWidth = e.offsetWidth;
                }
                return document.body.removeChild(e), caretPos;
            }
            var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");
            template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, 
            colorMask = document.createElement("div"), colorMask.className = "im-colormask", 
            input.parentNode.insertBefore(colorMask, input), input.parentNode.removeChild(input), 
            colorMask.appendChild(template), colorMask.appendChild(input), input.style.left = template.offsetLeft + "px", 
            $(input).on("click", function(e) {
                return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);
            }), $(input).on("keydown", function(e) {
                e.shiftKey || !1 === opts.insertMode || setTimeout(function() {
                    renderColorMask(input);
                }, 0);
            });
        }
        function renderColorMask(input, caretPos, clear) {
            function handleStatic() {
                isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, 
                maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static'>");
            }
            function handleCaret(force) {
                !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");
            }
            var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;
            if (colorMask !== undefined) {
                var buffer = getBuffer();
                if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {
                    begin: caretPos,
                    end: caretPos
                }), !0 !== clear) {
                    var lvp = getLastValidPosition();
                    do {
                        handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 
                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 
                        test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), 
                        maskTemplate += getPlaceholder(pos, test))), pos++;
                    } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);
                    -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();
                }
                var template = colorMask.getElementsByTagName("div")[0];
                template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);
            }
        }
        maskset = maskset || this.maskset, opts = opts || this.opts;
        var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {
            on: function(input, eventName, eventHandler) {
                var ev = function(e) {
                    if (this.inputmask === undefined && "FORM" !== this.nodeName) {
                        var imOpts = $.data(this, "_inputmask_opts");
                        imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
                    } else {
                        if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {
                            switch (e.type) {
                              case "input":
                                if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();
                                break;

                              case "keydown":
                                skipKeyPressEvent = !1, skipInputEvent = !1;
                                break;

                              case "keypress":
                                if (!0 === skipKeyPressEvent) return e.preventDefault();
                                skipKeyPressEvent = !0;
                                break;

                              case "click":
                                if (iemobile || iphone) {
                                    var that = this, args = arguments;
                                    return setTimeout(function() {
                                        eventHandler.apply(that, args);
                                    }, 0), !1;
                                }
                            }
                            var returnVal = eventHandler.apply(this, arguments);
                            return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;
                        }
                        e.preventDefault();
                    }
                };
                input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 
                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
            },
            off: function(input, event) {
                if (input.inputmask && input.inputmask.events) {
                    var events;
                    event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events, 
                    $.each(events, function(eventName, evArr) {
                        for (;evArr.length > 0; ) {
                            var ev = evArr.pop();
                            -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                        }
                        delete input.inputmask.events[eventName];
                    });
                }
            }
        }, EventHandlers = {
            keydownEvent: function(e) {
                var input = this, $input = $(input), k = e.keyCode, pos = caret(input);
                if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {
                    var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;
                    return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), 
                    el = null, isSupported;
                }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), 
                input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
                    e.preventDefault();
                    var caretPos = seekNext(getLastValidPosition());
                    opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, 
                    caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
                } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 
                caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 
                $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), 
                pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 
                pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), 
                pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {
                    var caretPos = caret(input);
                    caret(input, caretPos.begin);
                }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {
                    var caretPos = caret(input);
                    caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
                }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
                opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);
            },
            keypressEvent: function(e, checkval, writeOut, strict, ndx) {
                var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;
                if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 
                setTimeout(function() {
                    $input.trigger("change");
                }, 0)), !0;
                if (k) {
                    46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));
                    var forwardPosition, pos = checkval ? {
                        begin: ndx,
                        end: ndx
                    } : caret(input), c = String.fromCharCode(k);
                    getMaskSet().writeOutBuffer = !0;
                    var valResult = isValid(pos, c, strict);
                    if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), 
                    getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {
                        opts.onKeyValidation.call(input, k, valResult, opts);
                    }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {
                        var buffer = getBuffer();
                        writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), 
                        !0 !== checkval && setTimeout(function() {
                            !0 === isComplete(buffer) && $input.trigger("complete");
                        }, 0);
                    }
                    if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 
                    valResult;
                }
            },
            pasteEvent: function(e) {
                var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);
                isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
                var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
                if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 
                valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 
                isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), 
                window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {
                    if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
                    inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
                }
                var pasteValue = inputValue;
                if ($.isFunction(opts.onBeforePaste)) {
                    if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();
                    pasteValue || (pasteValue = inputValue);
                }
                return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), 
                writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 
                !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();
            },
            inputFallBackEvent: function(e) {
                var input = this, inputValue = input.inputmask._valueGet();
                if (getBuffer().join("") !== inputValue) {
                    var caretPos = caret(input);
                    if (!1 === function(input, inputValue, caretPos) {
                        if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && (inputValue = inputValue.split(""), 
                        inputValue[caretPos.begin - 1] = opts.radixPoint.charAt(0), inputValue = inputValue.join("")), 
                        inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {
                            var keypress = new $.Event("keypress");
                            return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), 
                            !1;
                        }
                    }(input, inputValue, caretPos)) return !1;
                    if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), 
                    !1 === function(input, inputValue, caretPos) {
                        if (iemobile) {
                            var inputChar = inputValue.replace(getBuffer().join(""), "");
                            if (1 === inputChar.length) {
                                var keypress = new $.Event("keypress");
                                return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), 
                                !1;
                            }
                        }
                    }(input, inputValue, caretPos)) return !1;
                    caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));
                    var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = "", isEntry = !1;
                    if (frontPart !== frontBufferPart) {
                        selection.begin = 0;
                        for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;
                        isEntry && (entries += frontPart.slice(selection.begin, selection.end));
                    }
                    backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), 
                    writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(""), function(ndx, entry) {
                        var keypress = new $.Event("keypress");
                        keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);
                    }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), 
                    e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), 
                    e.preventDefault();
                }
            },
            setValueEvent: function(e) {
                this.inputmask.refreshValue = !1;
                var input = this, value = input.inputmask._valueGet(!0);
                $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 
                value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), 
                undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
            },
            focusEvent: function(e) {
                var input = this, nptValue = input.inputmask._valueGet();
                opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), 
                !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), 
                EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");
            },
            mouseleaveEvent: function(e) {
                var input = this;
                if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
                    var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();
                    nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), 
                    writeBuffer(input, buffer));
                }
            },
            clickEvent: function(e, tabbed) {
                function doRadixFocus(clickPos) {
                    if ("" !== opts.radixPoint) {
                        var vps = getMaskSet().validPositions;
                        if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {
                            if (clickPos < seekNext(-1)) return !0;
                            var radixPos = $.inArray(opts.radixPoint, getBuffer());
                            if (-1 !== radixPos) {
                                for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
                                return !0;
                            }
                        }
                    }
                    return !1;
                }
                var input = this;
                setTimeout(function() {
                    if (document.activeElement === input) {
                        var selectedCaret = caret(input);
                        if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 
                        selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
                          case "none":
                            break;

                          case "radixFocus":
                            if (doRadixFocus(selectedCaret.begin)) {
                                var radixPos = getBuffer().join("").indexOf(opts.radixPoint);
                                caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                                break;
                            }

                          default:
                            var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);
                            if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {
                                var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);
                                if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {
                                    var newPos = seekNext(lastPosition);
                                    (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);
                                }
                                caret(input, lastPosition);
                            }
                        }
                    }
                }, 0);
            },
            dblclickEvent: function(e) {
                var input = this;
                setTimeout(function() {
                    caret(input, 0, seekNext(getLastValidPosition()));
                }, 0);
            },
            cutEvent: function(e) {
                var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
                clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 
                document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), 
                writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), 
                input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");
            },
            blurEvent: function(e) {
                var $input = $(this), input = this;
                if (input.inputmask) {
                    var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();
                    "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 
                    !1 === isComplete(buffer) && (setTimeout(function() {
                        $input.trigger("incomplete");
                    }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 
                    writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), 
                    $input.trigger("change"));
                }
            },
            mouseenterEvent: function(e) {
                var input = this;
                mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
            },
            submitEvent: function(e) {
                undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 
                opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 
                setTimeout(function() {
                    writeBuffer(el, getBuffer());
                }, 0));
            },
            resetEvent: function(e) {
                el.inputmask.refreshValue = !0, setTimeout(function() {
                    $el.trigger("setvalue");
                }, 0);
            }
        };
        Inputmask.prototype.positionColorMask = function(input, template) {
            input.style.left = template.offsetLeft + "px";
        };
        var valueBuffer;
        if (actionObj !== undefined) switch (actionObj.action) {
          case "isComplete":
            return el = actionObj.el, isComplete(getBuffer());

          case "unmaskedvalue":
            return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, 
            valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), 
            checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), 
            unmaskedvalue(el);

          case "mask":
            !function(elem) {
                EventRuler.off(elem);
                var isSupported = function(input, opts) {
                    var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;
                    if (!isSupported) if ("INPUT" === input.tagName) {
                        var el = document.createElement("input");
                        el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
                    } else isSupported = "partial";
                    return !1 !== isSupported ? function(npt) {
                        function getter() {
                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
                        }
                        function setter(value) {
                            valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
                        }
                        var valueGet, valueSet;
                        if (!npt.inputmask.__valueGet) {
                            if (!0 !== opts.noValuePatching) {
                                if (Object.getOwnPropertyDescriptor) {
                                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(object) {
                                        return object.__proto__;
                                    } : function(object) {
                                        return object.constructor.prototype;
                                    });
                                    var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
                                    valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 
                                    valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    })) : "INPUT" !== npt.tagName && (valueGet = function() {
                                        return this.textContent;
                                    }, valueSet = function(value) {
                                        this.textContent = value;
                                    }, Object.defineProperty(npt, "value", {
                                        get: getter,
                                        set: setter,
                                        configurable: !0
                                    }));
                                } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 
                                valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 
                                npt.__defineSetter__("value", setter));
                                npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
                            }
                            npt.inputmask._valueGet = function(overruleRTL) {
                                return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
                            }, npt.inputmask._valueSet = function(value, overruleRTL) {
                                valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);
                            }, valueGet === undefined && (valueGet = function() {
                                return this.value;
                            }, valueSet = function(value) {
                                this.value = value;
                            }, function(type) {
                                if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {
                                    var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
                                        return elem.value;
                                    }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
                                        return elem.value = value, elem;
                                    };
                                    $.valHooks[type] = {
                                        get: function(elem) {
                                            if (elem.inputmask) {
                                                if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                                                var result = valhookGet(elem);
                                                return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";
                                            }
                                            return valhookGet(elem);
                                        },
                                        set: function(elem, value) {
                                            var result, $elem = $(elem);
                                            return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), 
                                            result;
                                        },
                                        inputmaskpatch: !0
                                    };
                                }
                            }(npt.type), function(npt) {
                                EventRuler.on(npt, "mouseenter", function(event) {
                                    var $input = $(this);
                                    this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");
                                });
                            }(npt));
                        }
                    }(input) : input.inputmask = undefined, isSupported;
                }(elem, opts);
                if (!1 !== isSupported && (el = elem, $el = $(el), maxLength = el !== undefined ? el.maxLength : undefined, 
                -1 === maxLength && (maxLength = undefined), !0 === opts.colorMask && initializeColorMask(el), 
                android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)), 
                "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), 
                el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), 
                EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), 
                EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), 
                EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), 
                EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 
                EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), 
                EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 
                EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 
                android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 
                EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), 
                EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), 
                EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 
                EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 
                undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {
                    var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);
                    "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));
                    var buffer = getBuffer().slice();
                    undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), 
                    opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 
                    writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
                }
            }(el);
            break;

          case "format":
            return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), 
            checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {
                value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                metadata: maskScope.call(this, {
                    action: "getmetadata"
                }, maskset, opts)
            } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

          case "isValid":
            actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
            for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;
            return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

          case "getemptymask":
            return getBufferTemplate().join("");

          case "remove":
            if (el && el.inputmask) {
                $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), 
                EventRuler.off(el);
                Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
                    get: el.inputmask.__valueGet,
                    set: el.inputmask.__valueSet,
                    configurable: !0
                }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 
                el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;
            }
            return el;

          case "getmetadata":
            if ($.isArray(maskset.metadata)) {
                var maskTarget = getMaskTemplate(!0, 0, !1).join("");
                return $.each(maskset.metadata, function(ndx, mtdt) {
                    if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;
                }), maskTarget;
            }
            return maskset.metadata;
        }
    }
    var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;
    return Inputmask.prototype = {
        dataAttribute: "data-inputmask",
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\\\",
            mask: null,
            regex: null,
            oncomplete: $.noop,
            onincomplete: $.noop,
            oncleared: $.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: $.noop,
            onBeforeMask: null,
            onBeforePaste: function(pastedValue, opts) {
                return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: $.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: undefined,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: [ "text", "tel", "password" ],
            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
            isComplete: null,
            canClearPosition: $.noop,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: undefined,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            androidHack: !1,
            importDataAttributes: !0
        },
        definitions: {
            "9": {
                validator: "[0-9\\uff11-\\uff19]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            a: {
                validator: "[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",
                cardinality: 1,
                definitionSymbol: "*"
            },
            "*": {
                validator: "[0-9\\uff11-\\uff19A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",
                cardinality: 1
            }
        },
        aliases: {},
        masksCache: {},
        mask: function(elems) {
            function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
                function importOption(option, optionData) {
                    null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 
                    userOptions[option] = optionData);
                }
                if (!0 === opts.importDataAttributes) {
                    var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
                    if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'), 
                    dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
                        optionData = undefined;
                        for (p in dataoptions) if ("alias" === p.toLowerCase()) {
                            optionData = dataoptions[p];
                            break;
                        }
                    }
                    importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
                    for (option in opts) {
                        if (dataoptions) {
                            optionData = undefined;
                            for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {
                                optionData = dataoptions[p];
                                break;
                            }
                        }
                        importOption(option, optionData);
                    }
                }
                return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), 
                ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), 
                opts.isRTL = !0), opts;
            }
            var that = this;
            return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 
            elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {
                var scopedOpts = $.extend(!0, {}, that.opts);
                importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
                var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
                maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, 
                el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), 
                el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 
                el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 
                el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {
                    action: "mask"
                }));
            }), elems && elems[0] ? elems[0].inputmask || this : this;
        },
        option: function(options, noremask) {
            return "string" == typeof options ? this.opts[options] : "object" == typeof options ? ($.extend(this.userOptions, options), 
            this.el && !0 !== noremask && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function(value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "unmaskedvalue",
                value: value
            });
        },
        remove: function() {
            return maskScope.call(this, {
                action: "remove"
            });
        },
        getemptymask: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "getemptymask"
            });
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask;
        },
        isComplete: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "isComplete"
            });
        },
        getmetadata: function() {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "getmetadata"
            });
        },
        isValid: function(value) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "isValid",
                value: value
            });
        },
        format: function(value, metadata) {
            return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 
            maskScope.call(this, {
                action: "format",
                value: value,
                metadata: metadata
            });
        },
        analyseMask: function(mask, regexMask, opts) {
            function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
                this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 
                this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 
                this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function insertTestDefinition(mtoken, element, position) {
                position = position !== undefined ? position : mtoken.matches.length;
                var prevMatch = mtoken.matches[position - 1];
                if (regexMask) 0 === element.indexOf("[") || escaped && /\\\\d|\\\\s|\\\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {
                    fn: new RegExp(element, opts.casing ? "i" : ""),
                    cardinality: 1,
                    optionality: mtoken.isOptional,
                    newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
                    casing: null,
                    def: element,
                    placeholder: undefined,
                    nativeDef: element
                }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function(ndx, lmnt) {
                    prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,
                        casing: null,
                        def: opts.staticDefinitionSymbol || lmnt,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,
                        nativeDef: lmnt
                    });
                })), escaped = !1; else {
                    var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
                    if (maskdef && !escaped) {
                        for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
                            var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;
                            mtoken.matches.splice(position++, 0, {
                                fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function() {
                                    this.test = validator;
                                }() : new RegExp("."),
                                cardinality: cardinality || 1,
                                optionality: mtoken.isOptional,
                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                                casing: maskdef.casing,
                                def: maskdef.definitionSymbol || element,
                                placeholder: maskdef.placeholder,
                                nativeDef: element
                            }), prevMatch = mtoken.matches[position - 1];
                        }
                        mtoken.matches.splice(position++, 0, {
                            fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {
                                this.test = maskdef.validator;
                            }() : new RegExp("."),
                            cardinality: maskdef.cardinality,
                            optionality: mtoken.isOptional,
                            newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
                            casing: maskdef.casing,
                            def: maskdef.definitionSymbol || element,
                            placeholder: maskdef.placeholder,
                            nativeDef: element
                        });
                    } else mtoken.matches.splice(position++, 0, {
                        fn: null,
                        cardinality: 0,
                        optionality: mtoken.isOptional,
                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,
                        casing: null,
                        def: opts.staticDefinitionSymbol || element,
                        placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
                        nativeDef: element
                    }), escaped = !1;
                }
            }
            function verifyGroupMarker(maskToken) {
                maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {
                    var nextToken = maskToken.matches[ndx + 1];
                    (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 
                    regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), 
                    verifyGroupMarker(token);
                });
            }
            function defaultCase() {
                if (openenings.length > 0) {
                    if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 
                    currentOpeningToken.isAlternator) {
                        alternator = openenings.pop();
                        for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                        openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], 
                        currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                    }
                } else insertTestDefinition(currentToken, m);
            }
            function reverseTokens(maskToken) {
                maskToken.matches = maskToken.matches.reverse();
                for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {
                    var intMatch = parseInt(match);
                    if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
                        var qt = maskToken.matches[match];
                        maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
                    }
                    maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {
                        return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), 
                        st;
                    }(maskToken.matches[match]);
                }
                return maskToken;
            }
            var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\\{[0-9\\+\\*]+(?:,[0-9\\+\\*]*)?\\})|[^.?*+^\${[]()|\\\\]+|./g, regexTokenizer = /\\[\\^?]?(?:[^\\\\\\]]+|\\\\[\\S\\s]?)*]?|\\\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\\S\\s]?)|\\((?:\\?[:=!]?)?|(?:[?*+]|\\{[0-9]+(?:,[0-9]*)?\\})\\??|[^.?*+^\${[()|\\\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];
            for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {
                if (m = match[0], regexMask) switch (m.charAt(0)) {
                  case "?":
                    m = "{0,1}";
                    break;

                  case "+":
                  case "*":
                    m = "{" + m + "}";
                }
                if (escaped) defaultCase(); else switch (m.charAt(0)) {
                  case opts.escapeChar:
                    escaped = !0, regexMask && defaultCase();
                    break;

                  case opts.optionalmarker.end:
                  case opts.groupmarker.end:
                    if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {
                        if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken), 
                        currentOpeningToken.isAlternator) {
                            alternator = openenings.pop();
                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 
                            alternator.matches[mndx].alternatorGroup = !1;
                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1], 
                            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
                        }
                    } else currentToken.matches.push(openingToken); else defaultCase();
                    break;

                  case opts.optionalmarker.start:
                    openenings.push(new MaskToken(!1, !0));
                    break;

                  case opts.groupmarker.start:
                    openenings.push(new MaskToken(!0));
                    break;

                  case opts.quantifiermarker.start:
                    var quantifier = new MaskToken(!1, !1, !0);
                    m = m.replace(/[{}]/g, "");
                    var mq = m.split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                    if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
                        min: mq0,
                        max: mq1
                    }, openenings.length > 0) {
                        var matches = openenings[openenings.length - 1].matches;
                        match = matches.pop(), match.isGroup || (groupToken = new MaskToken(!0), groupToken.matches.push(match), 
                        match = groupToken), matches.push(match), matches.push(quantifier);
                    } else match = currentToken.matches.pop(), match.isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), 
                    groupToken = new MaskToken(!0), groupToken.matches.push(match), match = groupToken), 
                    currentToken.matches.push(match), currentToken.matches.push(quantifier);
                    break;

                  case opts.alternatormarker:
                    if (openenings.length > 0) {
                        currentOpeningToken = openenings[openenings.length - 1];
                        var subToken = currentOpeningToken.matches[currentOpeningToken.matches.length - 1];
                        lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();
                    } else lastMatch = currentToken.matches.pop();
                    if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 
                    lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 
                    openenings.push(alternator), lastMatch.openGroup) {
                        lastMatch.openGroup = !1;
                        var alternatorGroup = new MaskToken(!0);
                        alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);
                    }
                    break;

                  default:
                    defaultCase();
                }
            }
            for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);
            return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 
            (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;
        }
    }, Inputmask.extendDefaults = function(options) {
        $.extend(!0, Inputmask.prototype.defaults, options);
    }, Inputmask.extendDefinitions = function(definition) {
        $.extend(!0, Inputmask.prototype.definitions, definition);
    }, Inputmask.extendAliases = function(alias) {
        $.extend(!0, Inputmask.prototype.aliases, alias);
    }, Inputmask.format = function(value, options, metadata) {
        return Inputmask(options).format(value, metadata);
    }, Inputmask.unmask = function(value, options) {
        return Inputmask(options).unmaskedvalue(value);
    }, Inputmask.isValid = function(value, options) {
        return Inputmask(options).isValid(value);
    }, Inputmask.remove = function(elems) {
        $.each(elems, function(ndx, el) {
            el.inputmask && el.inputmask.remove();
        });
    }, Inputmask.escapeRegex = function(str) {
        var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\\\", "$", "^" ];
        return str.replace(new RegExp("(\\\\" + specials.join("|\\\\") + ")", "gim"), "\\\\$1");
    }, Inputmask.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    }, Inputmask;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qcz9mMWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZDQUE2QztBQUM3QywrRkFBK0Y7QUFDL0YsMkRBQTJEO0FBQzNELHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwrQ0FBK0MscUZBQXFGO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFLHFEQUFxRCxlQUFlO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvREFBb0QsNkJBQTZCO0FBQ2pGLHNCQUFzQixvREFBb0Q7QUFDMUUsdUhBQXVIO0FBQ3ZIO0FBQ0EsdUxBQXVMO0FBQ3ZMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5UUFBeVE7QUFDelEsNmhCQUE2aEI7QUFDN2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1QQUFtUCx1QkFBdUI7QUFDMVE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxxQkFBcUIsdUNBQXVDO0FBQy9KLGlEQUFpRCwwQkFBMEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxzREFBc0QsMkJBQTJCO0FBQ2pGO0FBQ0E7QUFDQSwwREFBMEQsaUNBQWlDO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5QixxTUFBcU0sb0ZBQW9GO0FBQ2xUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSx1RkFBdUYsaUNBQWlDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELHdIQUF3SDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdHQUF3RyxxQkFBcUIsb0JBQW9CO0FBQ2pKLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHdEQUF3RCwyQkFBMkI7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFLHFCQUFxQixTQUFTO0FBQzNHLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLGtCQUFrQjtBQUN4SywrQkFBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLGFBQWE7QUFDakg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGlDQUFpQyxVQUFVO0FBQzNDLHNFQUFzRTtBQUN0RTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0EsbUVBQW1FLDRLQUE0SztBQUMvTyw2TUFBNk07QUFDN007QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQSxpQkFBaUIsd0RBQXdEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxpREFBaUQ7QUFDN0Y7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4TEFBOEwsZUFBZTtBQUM3TTtBQUNBO0FBQ0EsMEhBQTBILGFBQWE7QUFDdkk7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSUFBbUk7QUFDbkksMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTtBQUNBLDhGQUE4RjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNkNBQTZDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx3QkFBd0I7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGdDQUFnQztBQUNqRztBQUNBO0FBQ0E7QUFDQSxpR0FBaUc7QUFDakc7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBeUgseUpBQXlKO0FBQ2xSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEdBQThHLGtCQUFrQjtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFQQUFxUDtBQUNyUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esb0hBQW9IO0FBQ3BILCtCQUErQixxQkFBcUI7QUFDcEQsaUZBQWlGO0FBQ2pGO0FBQ0EsOEJBQThCLCtmQUErZjtBQUM3aEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxrSkFBa0osb1hBQW9YO0FBQ3RnQixrQkFBa0IsZ0pBQWdKO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUhBQXVILGtGQUFrRixjQUFjO0FBQ3ZOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLHdCQUF3QjtBQUMzSDtBQUNBO0FBQ0EscUJBQXFCLG1EQUFtRDtBQUN4RTtBQUNBLGFBQWE7QUFDYjtBQUNBLGdFQUFnRTtBQUNoRSx1Q0FBdUMsa0ZBQWtGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzS0FBc0ssMEJBQTBCO0FBQ2hNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxpQkFBaUI7QUFDakIsd0tBQXdLO0FBQ3hLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SkFBNko7QUFDN0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpSkFBaUosOERBQThEO0FBQy9NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlMQUFpTDtBQUNqTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsMEdBQTBHLDRCQUE0QjtBQUN0STs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxvQkFBb0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLHlJQUF5STtBQUN6STtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSx3SUFBd0kseUJBQXlCO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdIQUF3SCw0QkFBNEIsV0FBVyxzRkFBc0YsSUFBSSx3Q0FBd0MsRUFBRSxjQUFjLEVBQUUsK0NBQStDLG9CQUFvQixjQUFjO0FBQ3BZLDJHQUEyRyxzRUFBc0U7QUFDakw7QUFDQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtDQUFrQztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBOEM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCw2RUFBNkUsS0FBSztBQUNsRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmpzXG4qIGh0dHBzOi8vZ2l0aHViLmNvbS9Sb2JpbkhlcmJvdHMvSW5wdXRtYXNrXG4qIENvcHlyaWdodCAoYykgMjAxMCAtIDIwMTcgUm9iaW4gSGVyYm90c1xuKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuKiBWZXJzaW9uOiAzLjMuOFxuKi9cblxuIWZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIsIFwiLi9nbG9iYWwvd2luZG93XCIsIFwiLi9nbG9iYWwvZG9jdW1lbnRcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC93aW5kb3dcIiksIHJlcXVpcmUoXCIuL2dsb2JhbC9kb2N1bWVudFwiKSkgOiB3aW5kb3cuSW5wdXRtYXNrID0gZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xufShmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBJbnB1dG1hc2soYWxpYXMsIG9wdGlvbnMsIGludGVybmFsKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbnB1dG1hc2spKSByZXR1cm4gbmV3IElucHV0bWFzayhhbGlhcywgb3B0aW9ucywgaW50ZXJuYWwpO1xuICAgICAgICB0aGlzLmVsID0gdW5kZWZpbmVkLCB0aGlzLmV2ZW50cyA9IHt9LCB0aGlzLm1hc2tzZXQgPSB1bmRlZmluZWQsIHRoaXMucmVmcmVzaFZhbHVlID0gITEsIFxuICAgICAgICAhMCAhPT0gaW50ZXJuYWwgJiYgKCQuaXNQbGFpbk9iamVjdChhbGlhcykgPyBvcHRpb25zID0gYWxpYXMgOiAob3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIFxuICAgICAgICBvcHRpb25zLmFsaWFzID0gYWxpYXMpLCB0aGlzLm9wdHMgPSAkLmV4dGVuZCghMCwge30sIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpLCB0aGlzLm5vTWFza3NDYWNoZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWZpbml0aW9ucyAhPT0gdW5kZWZpbmVkLCBcbiAgICAgICAgdGhpcy51c2VyT3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIHRoaXMuaXNSVEwgPSB0aGlzLm9wdHMubnVtZXJpY0lucHV0LCByZXNvbHZlQWxpYXModGhpcy5vcHRzLmFsaWFzLCBvcHRpb25zLCB0aGlzLm9wdHMpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzb2x2ZUFsaWFzKGFsaWFzU3RyLCBvcHRpb25zLCBvcHRzKSB7XG4gICAgICAgIHZhciBhbGlhc0RlZmluaXRpb24gPSBJbnB1dG1hc2sucHJvdG90eXBlLmFsaWFzZXNbYWxpYXNTdHJdO1xuICAgICAgICByZXR1cm4gYWxpYXNEZWZpbml0aW9uID8gKGFsaWFzRGVmaW5pdGlvbi5hbGlhcyAmJiByZXNvbHZlQWxpYXMoYWxpYXNEZWZpbml0aW9uLmFsaWFzLCB1bmRlZmluZWQsIG9wdHMpLCBcbiAgICAgICAgJC5leHRlbmQoITAsIG9wdHMsIGFsaWFzRGVmaW5pdGlvbiksICQuZXh0ZW5kKCEwLCBvcHRzLCBvcHRpb25zKSwgITApIDogKG51bGwgPT09IG9wdHMubWFzayAmJiAob3B0cy5tYXNrID0gYWxpYXNTdHIpLCBcbiAgICAgICAgITEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2tTZXQob3B0cywgbm9jYWNoZSkge1xuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZU1hc2sobWFzaywgbWV0YWRhdGEsIG9wdHMpIHtcbiAgICAgICAgICAgIHZhciByZWdleE1hc2sgPSAhMTtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtYXNrICYmIFwiXCIgIT09IG1hc2sgfHwgKHJlZ2V4TWFzayA9IG51bGwgIT09IG9wdHMucmVnZXgsIHJlZ2V4TWFzayA/IChtYXNrID0gb3B0cy5yZWdleCwgXG4gICAgICAgICAgICBtYXNrID0gbWFzay5yZXBsYWNlKC9eKFxcXikoLiopKFxcJCkkLywgXCIkMlwiKSkgOiAocmVnZXhNYXNrID0gITAsIG1hc2sgPSBcIi4qXCIpKSwgMSA9PT0gbWFzay5sZW5ndGggJiYgITEgPT09IG9wdHMuZ3JlZWR5ICYmIDAgIT09IG9wdHMucmVwZWF0ICYmIChvcHRzLnBsYWNlaG9sZGVyID0gXCJcIiksIFxuICAgICAgICAgICAgb3B0cy5yZXBlYXQgPiAwIHx8IFwiKlwiID09PSBvcHRzLnJlcGVhdCB8fCBcIitcIiA9PT0gb3B0cy5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVwZWF0U3RhcnQgPSBcIipcIiA9PT0gb3B0cy5yZXBlYXQgPyAwIDogXCIrXCIgPT09IG9wdHMucmVwZWF0ID8gMSA6IG9wdHMucmVwZWF0O1xuICAgICAgICAgICAgICAgIG1hc2sgPSBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0ICsgbWFzayArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0ICsgcmVwZWF0U3RhcnQgKyBcIixcIiArIG9wdHMucmVwZWF0ICsgb3B0cy5xdWFudGlmaWVybWFya2VyLmVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXNrc2V0RGVmaW5pdGlvbiwgbWFza2RlZktleSA9IHJlZ2V4TWFzayA/IFwicmVnZXhfXCIgKyBvcHRzLnJlZ2V4IDogb3B0cy5udW1lcmljSW5wdXQgPyBtYXNrLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpIDogbWFzaztcbiAgICAgICAgICAgIHJldHVybiBJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPT09IHVuZGVmaW5lZCB8fCAhMCA9PT0gbm9jYWNoZSA/IChtYXNrc2V0RGVmaW5pdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICAgICAgICAgIG1hc2tUb2tlbjogSW5wdXRtYXNrLnByb3RvdHlwZS5hbmFseXNlTWFzayhtYXNrLCByZWdleE1hc2ssIG9wdHMpLFxuICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBfYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdGVzdHM6IHt9LFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICBtYXNrTGVuZ3RoOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0sICEwICE9PSBub2NhY2hlICYmIChJbnB1dG1hc2sucHJvdG90eXBlLm1hc2tzQ2FjaGVbbWFza2RlZktleV0gPSBtYXNrc2V0RGVmaW5pdGlvbiwgXG4gICAgICAgICAgICBtYXNrc2V0RGVmaW5pdGlvbiA9ICQuZXh0ZW5kKCEwLCB7fSwgSW5wdXRtYXNrLnByb3RvdHlwZS5tYXNrc0NhY2hlW21hc2tkZWZLZXldKSkpIDogbWFza3NldERlZmluaXRpb24gPSAkLmV4dGVuZCghMCwge30sIElucHV0bWFzay5wcm90b3R5cGUubWFza3NDYWNoZVttYXNrZGVmS2V5XSksIFxuICAgICAgICAgICAgbWFza3NldERlZmluaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLm1hc2spICYmIChvcHRzLm1hc2sgPSBvcHRzLm1hc2sob3B0cykpLCAkLmlzQXJyYXkob3B0cy5tYXNrKSkge1xuICAgICAgICAgICAgaWYgKG9wdHMubWFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5rZWVwU3RhdGljID0gbnVsbCA9PT0gb3B0cy5rZWVwU3RhdGljIHx8IG9wdHMua2VlcFN0YXRpYztcbiAgICAgICAgICAgICAgICB2YXIgYWx0TWFzayA9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuZWFjaChvcHRzLm51bWVyaWNJbnB1dCA/IG9wdHMubWFzay5yZXZlcnNlKCkgOiBvcHRzLm1hc2ssIGZ1bmN0aW9uKG5keCwgbXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsdE1hc2subGVuZ3RoID4gMSAmJiAoYWx0TWFzayArPSBvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpLCBcbiAgICAgICAgICAgICAgICAgICAgbXNrLm1hc2sgPT09IHVuZGVmaW5lZCB8fCAkLmlzRnVuY3Rpb24obXNrLm1hc2spID8gYWx0TWFzayArPSBtc2sgOiBhbHRNYXNrICs9IG1zay5tYXNrO1xuICAgICAgICAgICAgICAgIH0pLCBhbHRNYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuZW5kLCBnZW5lcmF0ZU1hc2soYWx0TWFzaywgb3B0cy5tYXNrLCBvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdHMubWFzayA9IG9wdHMubWFzay5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0cy5tYXNrICYmIG9wdHMubWFzay5tYXNrICE9PSB1bmRlZmluZWQgJiYgISQuaXNGdW5jdGlvbihvcHRzLm1hc2subWFzaykgPyBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLm1hc2ssIG9wdHMubWFzaywgb3B0cykgOiBnZW5lcmF0ZU1hc2sob3B0cy5tYXNrLCBvcHRzLm1hc2ssIG9wdHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXNrU2NvcGUoYWN0aW9uT2JqLCBtYXNrc2V0LCBvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldE1hc2tUZW1wbGF0ZShiYXNlT25JbnB1dCwgbWluaW1hbFBvcywgaW5jbHVkZU1vZGUpIHtcbiAgICAgICAgICAgIG1pbmltYWxQb3MgPSBtaW5pbWFsUG9zIHx8IDA7XG4gICAgICAgICAgICB2YXIgbmR4SW50bHpyLCB0ZXN0LCB0ZXN0UG9zLCBtYXNrVGVtcGxhdGUgPSBbXSwgcG9zID0gMCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAhMCA9PT0gYmFzZU9uSW5wdXQgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPyAodGVzdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdLCBcbiAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIG1hc2tUZW1wbGF0ZS5wdXNoKCEwID09PSBpbmNsdWRlTW9kZSA/IHRlc3RQb3MuaW5wdXQgOiAhMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSA6ICh0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICAgICAgdGVzdCA9IHRlc3RQb3MubWF0Y2gsIG5keEludGx6ciA9IHRlc3RQb3MubG9jYXRvci5zbGljZSgpLCAoITEgPT09IG9wdHMuaml0TWFza2luZyB8fCBwb3MgPCBsdnAgfHwgXCJudW1iZXJcIiA9PSB0eXBlb2Ygb3B0cy5qaXRNYXNraW5nICYmIGlzRmluaXRlKG9wdHMuaml0TWFza2luZykgJiYgb3B0cy5qaXRNYXNraW5nID4gcG9zKSAmJiBtYXNrVGVtcGxhdGUucHVzaCghMSA9PT0gaW5jbHVkZU1vZGUgPyB0ZXN0Lm5hdGl2ZURlZiA6IGdldFBsYWNlaG9sZGVyKHBvcywgdGVzdCkpKSwgXG4gICAgICAgICAgICAgICAgcG9zKys7XG4gICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbWluaW1hbFBvcyA+IHBvcyk7XG4gICAgICAgICAgICByZXR1cm4gXCJcIiA9PT0gbWFza1RlbXBsYXRlW21hc2tUZW1wbGF0ZS5sZW5ndGggLSAxXSAmJiBtYXNrVGVtcGxhdGUucG9wKCksIGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoID0gcG9zICsgMSwgXG4gICAgICAgICAgICBtYXNrVGVtcGxhdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWFza1NldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrc2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlc2V0TWFza1NldChzb2Z0KSB7XG4gICAgICAgICAgICB2YXIgbWFza3NldCA9IGdldE1hc2tTZXQoKTtcbiAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyID0gdW5kZWZpbmVkLCAhMCAhPT0gc29mdCAmJiAobWFza3NldC52YWxpZFBvc2l0aW9ucyA9IHt9LCBtYXNrc2V0LnAgPSAwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VmFsaWRQb3NpdGlvbihjbG9zZXN0VG8sIHN0cmljdCwgdmFsaWRQb3NpdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSAtMSwgYWZ0ZXIgPSAtMSwgdmFsaWRzID0gdmFsaWRQb3NpdGlvbnMgfHwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zO1xuICAgICAgICAgICAgY2xvc2VzdFRvID09PSB1bmRlZmluZWQgJiYgKGNsb3Nlc3RUbyA9IC0xKTtcbiAgICAgICAgICAgIGZvciAodmFyIHBvc05keCBpbiB2YWxpZHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHNOZHggPSBwYXJzZUludChwb3NOZHgpO1xuICAgICAgICAgICAgICAgIHZhbGlkc1twc05keF0gJiYgKHN0cmljdCB8fCAhMCAhPT0gdmFsaWRzW3BzTmR4XS5nZW5lcmF0ZWRJbnB1dCkgJiYgKHBzTmR4IDw9IGNsb3Nlc3RUbyAmJiAoYmVmb3JlID0gcHNOZHgpLCBcbiAgICAgICAgICAgICAgICBwc05keCA+PSBjbG9zZXN0VG8gJiYgKGFmdGVyID0gcHNOZHgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMSAhPT0gYmVmb3JlICYmIGNsb3Nlc3RUbyAtIGJlZm9yZSA+IDEgfHwgYWZ0ZXIgPCBjbG9zZXN0VG8gPyBiZWZvcmUgOiBhZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJpcFZhbGlkUG9zaXRpb25zKHN0YXJ0LCBlbmQsIG5vY2hlY2ssIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIGksIHN0YXJ0UG9zID0gc3RhcnQsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBuZWVkc1ZhbGlkYXRpb24gPSAhMTtcbiAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzdGFydCwgaSA9IGVuZCAtIDE7IGkgPj0gc3RhcnRQb3M7IGktLSkgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldICE9PSB1bmRlZmluZWQgJiYgKCEwICE9PSBub2NoZWNrICYmICghZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmIGZ1bmN0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIHZhciBwb3NNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdO1xuICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG51bGwgPT09IHBvc01hdGNoLm1hdGNoLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0sIG5leHRNYXRjaCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZNYXRjaCAhPT0gdW5kZWZpbmVkICYmIG5leHRNYXRjaCAhPT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KGkpIHx8ICExID09PSBvcHRzLmNhbkNsZWFyUG9zaXRpb24oZ2V0TWFza1NldCgpLCBpLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBzdHJpY3QsIG9wdHMpKSB8fCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldKTtcbiAgICAgICAgICAgIGZvciAocmVzZXRNYXNrU2V0KCEwKSwgaSA9IHN0YXJ0UG9zICsgMTsgaSA8PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpOyApIHtcbiAgICAgICAgICAgICAgICBmb3IgKDtnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc3RhcnRQb3NdICE9PSB1bmRlZmluZWQ7ICkgc3RhcnRQb3MrKztcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHN0YXJ0UG9zICYmIChpID0gc3RhcnRQb3MgKyAxKSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldID09PSB1bmRlZmluZWQgJiYgaXNNYXNrKGkpKSBpKys7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGdldFRlc3RUZW1wbGF0ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IG5lZWRzVmFsaWRhdGlvbiAmJiBwb3NpdGlvbnNDbG9uZVtzdGFydFBvc10gJiYgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdLm1hdGNoLmRlZiA9PT0gdC5tYXRjaC5kZWYgPyAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3N0YXJ0UG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbc3RhcnRQb3NdKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tzdGFydFBvc10uaW5wdXQgPSB0LmlucHV0LCBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrKSA6IHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHN0YXJ0UG9zLCB0Lm1hdGNoLmRlZikgPyAhMSAhPT0gaXNWYWxpZChzdGFydFBvcywgdC5pbnB1dCB8fCBnZXRQbGFjZWhvbGRlcihpKSwgITApICYmIChkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgaSsrLCBuZWVkc1ZhbGlkYXRpb24gPSAhMCkgOiBpc01hc2soaSkgfHwgKGkrKywgc3RhcnRQb3MtLSksIHN0YXJ0UG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHMsIGd1ZXNzTmV4dEJlc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHRlc3RQb3MsIHRlc3RQb3NpdGlvbnMgPSB0ZXN0cywgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgbHZUZXN0ID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2x2cF0gfHwgZ2V0VGVzdHMoMClbMF0sIGx2VGVzdEFsdEFyciA9IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkID8gbHZUZXN0LmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSA6IFtdLCBuZHggPSAwOyBuZHggPCB0ZXN0UG9zaXRpb25zLmxlbmd0aCAmJiAodGVzdFBvcyA9IHRlc3RQb3NpdGlvbnNbbmR4XSwgXG4gICAgICAgICAgICAhKHRlc3RQb3MubWF0Y2ggJiYgKG9wdHMuZ3JlZWR5ICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciB8fCAoITEgPT09IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxpdHkgfHwgITEgPT09IHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIpICYmICEwICE9PSB0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllcikgJiYgKGx2VGVzdC5hbHRlcm5hdGlvbiA9PT0gdW5kZWZpbmVkIHx8IGx2VGVzdC5hbHRlcm5hdGlvbiAhPT0gdGVzdFBvcy5hbHRlcm5hdGlvbiB8fCB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkICYmIGNoZWNrQWx0ZXJuYXRpb25NYXRjaCh0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKSwgbHZUZXN0QWx0QXJyKSkpIHx8ICEwID09PSBndWVzc05leHRCZXN0ICYmIChudWxsICE9PSB0ZXN0UG9zLm1hdGNoLmZuIHx8IC9bMC05YS1iQS1aXS8udGVzdCh0ZXN0UG9zLm1hdGNoLmRlZikpKTsgbmR4KyspIDtcbiAgICAgICAgICAgIHJldHVybiB0ZXN0UG9zO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFRlc3RUZW1wbGF0ZShwb3MsIG5keEludGx6ciwgdHN0UHMpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSB8fCBkZXRlcm1pbmVUZXN0VGVtcGxhdGUoZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIgPyBuZHhJbnRsenIuc2xpY2UoKSA6IG5keEludGx6ciwgdHN0UHMpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRUZXN0KHBvcykge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gOiBnZXRUZXN0cyhwb3MpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FuTWF0Y2hEZWZpbml0aW9uKHBvcywgZGVmKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB2YWxpZCA9ICExLCB0ZXN0cyA9IGdldFRlc3RzKHBvcyksIHRuZHggPSAwOyB0bmR4IDwgdGVzdHMubGVuZ3RoOyB0bmR4KyspIGlmICh0ZXN0c1t0bmR4XS5tYXRjaCAmJiB0ZXN0c1t0bmR4XS5tYXRjaC5kZWYgPT09IGRlZikge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gITA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGVzdHMocG9zLCBuZHhJbnRsenIsIHRzdFBzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW4sIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZU1hdGNoKG1hdGNoLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0TWF0Y2gobGF0ZXN0TWF0Y2gsIHRva2VuR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaXJzdE1hdGNoID0gMCA9PT0gJC5pbkFycmF5KGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpcnN0TWF0Y2ggfHwgJC5lYWNoKHRva2VuR3JvdXAubWF0Y2hlcywgZnVuY3Rpb24obmR4LCBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gbWF0Y2guaXNRdWFudGlmaWVyICYmIChmaXJzdE1hdGNoID0gaXNGaXJzdE1hdGNoKGxhdGVzdE1hdGNoLCB0b2tlbkdyb3VwLm1hdGNoZXNbbmR4IC0gMV0pKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZpcnN0TWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZU5keEluaXRpYWxpemVyKHBvcywgYWx0ZXJuYXRlTmR4LCB0YXJnZXRBbHRlcm5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3RNYXRjaCwgaW5kZXhQb3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdICYmIHRhcmdldEFsdGVybmF0aW9uICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdKSBmb3IgKHZhciB2cEFsdGVybmF0aW9uID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdLmxvY2F0b3IsIHRwQWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudGVzdHNbcG9zXVswXS5sb2NhdG9yLCBpID0gMDsgaSA8IHRhcmdldEFsdGVybmF0aW9uOyBpKyspIGlmICh2cEFsdGVybmF0aW9uW2ldICE9PSB0cEFsdGVybmF0aW9uW2ldKSByZXR1cm4gdnBBbHRlcm5hdGlvbi5zbGljZSh0YXJnZXRBbHRlcm5hdGlvbiArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSkgJiYgJC5lYWNoKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdIHx8IFsgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gXSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gdGFyZ2V0QWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IHRhcmdldEFsdGVybmF0aW9uIDogbG1udC5hbHRlcm5hdGlvbiwgbmR4UG9zID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLmluZGV4T2YoYWx0ZXJuYXRlTmR4KSA6IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleFBvcyA9PT0gdW5kZWZpbmVkIHx8IG5keFBvcyA8IGluZGV4UG9zKSAmJiAtMSAhPT0gbmR4UG9zICYmIChiZXN0TWF0Y2ggPSBsbW50LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFBvcyA9IG5keFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgYmVzdE1hdGNoID8gYmVzdE1hdGNoLmxvY2F0b3Iuc2xpY2UoKHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyB0YXJnZXRBbHRlcm5hdGlvbiA6IGJlc3RNYXRjaC5hbHRlcm5hdGlvbikgKyAxKSA6IHRhcmdldEFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQgPyByZXNvbHZlTmR4SW5pdGlhbGl6ZXIocG9zLCBhbHRlcm5hdGVOZHgpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID4gMWU0KSB0aHJvdyBcIklucHV0bWFzazogVGhlcmUgaXMgcHJvYmFibHkgYW4gZXJyb3IgaW4geW91ciBtYXNrIGRlZmluaXRpb24gb3IgaW4gdGhlIGNvZGUuIENyZWF0ZSBhbiBpc3N1ZSBvbiBnaXRodWIgd2l0aCBhbiBleGFtcGxlIG9mIHRoZSBtYXNrIHlvdSBhcmUgdXNpbmcuIFwiICsgZ2V0TWFza1NldCgpLm1hc2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXN0UG9zID09PSBwb3MgJiYgbWF0Y2gubWF0Y2hlcyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0b3I6IGxvb3BOZHgucmV2ZXJzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Q6IGNhY2hlRGVwZW5kZW5jeVxuICAgICAgICAgICAgICAgICAgICB9KSwgITA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5tYXRjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pc0dyb3VwICYmIHF1YW50aWZpZXJSZWN1cnNlICE9PSBtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IGhhbmRsZU1hdGNoKG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpICsgMV0sIGxvb3BOZHgpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoLmlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9uYWxUb2tlbiA9IG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9IHJlc29sdmVUZXN0RnJvbVRva2VuKG1hdGNoLCBuZHhJbml0aWFsaXplciwgbG9vcE5keCwgcXVhbnRpZmllclJlY3Vyc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgIWlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgb3B0aW9uYWxUb2tlbikpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2guaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbHRNYXRjaGVzLCBhbHRlcm5hdGVUb2tlbiA9IG1hdGNoLCBtYWx0ZXJuYXRlTWF0Y2hlcyA9IFtdLCBjdXJyZW50TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoKSwgbG9vcE5keENudCA9IGxvb3BOZHgubGVuZ3RoLCBhbHRJbmRleCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKC0xID09PSBhbHRJbmRleCB8fCBcInN0cmluZ1wiID09IHR5cGVvZiBhbHRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW1uZHgsIGN1cnJlbnRQb3MgPSB0ZXN0UG9zLCBuZHhJbml0aWFsaXplckNsb25lID0gbmR4SW5pdGlhbGl6ZXIuc2xpY2UoKSwgYWx0SW5kZXhBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4KSBhbHRJbmRleEFyciA9IGFsdEluZGV4LnNwbGl0KFwiLFwiKTsgZWxzZSBmb3IgKGFtbmR4ID0gMDsgYW1uZHggPCBhbHRlcm5hdGVUb2tlbi5tYXRjaGVzLmxlbmd0aDsgYW1uZHgrKykgYWx0SW5kZXhBcnIucHVzaChhbW5keCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG5keCA9IDA7IG5keCA8IGFsdEluZGV4QXJyLmxlbmd0aDsgbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbW5keCA9IHBhcnNlSW50KGFsdEluZGV4QXJyW25keF0pLCBtYXRjaGVzID0gW10sIG5keEluaXRpYWxpemVyID0gcmVzb2x2ZU5keEluaXRpYWxpemVyKHRlc3RQb3MsIGFtbmR4LCBsb29wTmR4Q250KSB8fCBuZHhJbml0aWFsaXplckNsb25lLnNsaWNlKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgITAgIT09IChtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYW1uZHhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FtbmR4XSwgWyBhbW5keCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpIHx8IG1hdGNoKSAmJiBtYXRjaCAhPT0gdW5kZWZpbmVkICYmIGFsdEluZGV4QXJyW2FsdEluZGV4QXJyLmxlbmd0aCAtIDFdIDwgYWx0ZXJuYXRlVG9rZW4ubWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnRuZHggPSAkLmluQXJyYXkobWF0Y2gsIG1hc2tUb2tlbi5tYXRjaGVzKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza1Rva2VuLm1hdGNoZXMubGVuZ3RoID4gbnRuZHggJiYgKG1hdGNoID0gaGFuZGxlTWF0Y2gobWFza1Rva2VuLm1hdGNoZXNbbnRuZHhdLCBbIG50bmR4IF0uY29uY2F0KGxvb3BOZHguc2xpY2UoMSwgbG9vcE5keC5sZW5ndGgpKSwgcXVhbnRpZmllclJlY3Vyc2UpKSAmJiAoYWx0SW5kZXhBcnIucHVzaChudG5keC50b1N0cmluZygpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG1hdGNoZXMsIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmFsdGVybmF0aW9uID0gbG9vcE5keC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgpLCB0ZXN0UG9zID0gY3VycmVudFBvcywgbWF0Y2hlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MSA9IDA7IG5keDEgPCBtYWx0TWF0Y2hlcy5sZW5ndGg7IG5keDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbHRNYXRjaCA9IG1hbHRNYXRjaGVzW25keDFdLCBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9IGFsdE1hdGNoLmFsdGVybmF0aW9uIHx8IGxvb3BOZHhDbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbmR4MiA9IDA7IG5keDIgPCBtYWx0ZXJuYXRlTWF0Y2hlcy5sZW5ndGg7IG5keDIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0TWF0Y2gyID0gbWFsdGVybmF0ZU1hdGNoZXNbbmR4Ml07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBhbHRJbmRleCB8fCAtMSAhPT0gJC5pbkFycmF5KGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIGFsdEluZGV4QXJyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKHNvdXJjZSwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZS5tYXRjaC5uYXRpdmVEZWYgPT09IHRhcmdldC5tYXRjaC5uYXRpdmVEZWYgfHwgc291cmNlLm1hdGNoLmRlZiA9PT0gdGFyZ2V0Lm1hdGNoLm5hdGl2ZURlZiB8fCBzb3VyY2UubWF0Y2gubmF0aXZlRGVmID09PSB0YXJnZXQubWF0Y2guZGVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5hbHRlcm5hdGlvbiA9PT0gYWx0TWF0Y2gyLmFsdGVybmF0aW9uICYmIC0xID09PSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSkgJiYgKGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0gPSBhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0TWF0Y2gyLmFsdGVybmF0aW9uID0gYWx0TWF0Y2guYWx0ZXJuYXRpb24pLCBhbHRNYXRjaC5tYXRjaC5uYXRpdmVEZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYgJiYgKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dID0gYWx0TWF0Y2gyLmxvY2F0b3JbYWx0TWF0Y2gyLmFsdGVybmF0aW9uXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFsdGVybmF0ZU1hdGNoZXMuc3BsaWNlKG1hbHRlcm5hdGVNYXRjaGVzLmluZGV4T2YoYWx0TWF0Y2gyKSwgMSwgYWx0TWF0Y2gpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRNYXRjaC5tYXRjaC5kZWYgPT09IGFsdE1hdGNoMi5tYXRjaC5kZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wTWF0Y2ggPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYsIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSB8fCBmdW5jdGlvbihzb3VyY2UsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSBzb3VyY2UubWF0Y2guZm4gJiYgbnVsbCAhPT0gdGFyZ2V0Lm1hdGNoLmZuICYmIHRhcmdldC5tYXRjaC5mbi50ZXN0KHNvdXJjZS5tYXRjaC5kZWYucmVwbGFjZSgvW1xcW1xcXV0vZywgXCJcIiksIGdldE1hc2tTZXQoKSwgcG9zLCAhMSwgb3B0cywgITEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfShhbHRNYXRjaCwgYWx0TWF0Y2gyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdE1hdGNoLmFsdGVybmF0aW9uID09PSBhbHRNYXRjaDIuYWx0ZXJuYXRpb24gJiYgLTEgPT09IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuaW5kZXhPZihhbHRNYXRjaDIubG9jYXRvclthbHRNYXRjaDIuYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hIHx8IGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSBhbHRNYXRjaC5uYS5pbmRleE9mKGFsdE1hdGNoLmxvY2F0b3JbYWx0TWF0Y2guYWx0ZXJuYXRpb25dLnRvU3RyaW5nKCkuc3BsaXQoXCJcIilbMF0pICYmIChhbHRNYXRjaC5uYSA9IGFsdE1hdGNoLm5hICsgXCIsXCIgKyBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BNYXRjaCA9ICEwLCBhbHRNYXRjaC5sb2NhdG9yW2FsdE1hdGNoLmFsdGVybmF0aW9uXSA9IGFsdE1hdGNoMi5sb2NhdG9yW2FsdE1hdGNoMi5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIlwiKVswXSArIFwiLFwiICsgYWx0TWF0Y2gubG9jYXRvclthbHRNYXRjaC5hbHRlcm5hdGlvbl0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbHRlcm5hdGVNYXRjaGVzLnNwbGljZShtYWx0ZXJuYXRlTWF0Y2hlcy5pbmRleE9mKGFsdE1hdGNoMiksIDAsIGFsdE1hdGNoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcE1hdGNoIHx8IG1hbHRlcm5hdGVNYXRjaGVzLnB1c2goYWx0TWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGFsdEluZGV4ICYmIChtYWx0ZXJuYXRlTWF0Y2hlcyA9ICQubWFwKG1hbHRlcm5hdGVNYXRjaGVzLCBmdW5jdGlvbihsbW50LCBuZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdGVybmF0aW9uID0gbG1udC5hbHRlcm5hdGlvbiwgYWx0TG9jQXJyID0gbG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXS50b1N0cmluZygpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gdW5kZWZpbmVkLCBsbW50LmFsdGVybmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGFsbmR4ID0gMDsgYWxuZHggPCBhbHRMb2NBcnIubGVuZ3RoOyBhbG5keCsrKSAtMSAhPT0gJC5pbkFycmF5KGFsdExvY0FyclthbG5keF0sIGFsdEluZGV4QXJyKSAmJiAobG1udC5sb2NhdG9yW2FsdGVybmF0aW9uXSAhPT0gdW5kZWZpbmVkID8gKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gXCIsXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gKz0gYWx0TG9jQXJyW2FsbmR4XSkgOiBsbW50LmxvY2F0b3JbYWx0ZXJuYXRpb25dID0gcGFyc2VJbnQoYWx0TG9jQXJyW2FsbmR4XSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxtbnQuYWx0ZXJuYXRpb24gPSBhbHRlcm5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxtbnQubG9jYXRvclthbHRlcm5hdGlvbl0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIGxtbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbWF0Y2hlcyA9IGN1cnJlbnRNYXRjaGVzLmNvbmNhdChtYWx0ZXJuYXRlTWF0Y2hlcyksIHRlc3RQb3MgPSBwb3MsIGluc2VydFN0b3AgPSBtYXRjaGVzLmxlbmd0aCA+IDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IG1hbHRlcm5hdGVNYXRjaGVzLmxlbmd0aCA+IDAsIG5keEluaXRpYWxpemVyID0gbmR4SW5pdGlhbGl6ZXJDbG9uZS5zbGljZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGhhbmRsZU1hdGNoKGFsdGVybmF0ZVRva2VuLm1hdGNoZXNbYWx0SW5kZXhdIHx8IG1hc2tUb2tlbi5tYXRjaGVzW2FsdEluZGV4XSwgWyBhbHRJbmRleCBdLmNvbmNhdChsb29wTmR4KSwgcXVhbnRpZmllclJlY3Vyc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaC5pc1F1YW50aWZpZXIgJiYgcXVhbnRpZmllclJlY3Vyc2UgIT09IG1hc2tUb2tlbi5tYXRjaGVzWyQuaW5BcnJheShtYXRjaCwgbWFza1Rva2VuLm1hdGNoZXMpIC0gMV0pIGZvciAodmFyIHF0ID0gbWF0Y2gsIHFuZHggPSBuZHhJbml0aWFsaXplci5sZW5ndGggPiAwID8gbmR4SW5pdGlhbGl6ZXIuc2hpZnQoKSA6IDA7IHFuZHggPCAoaXNOYU4ocXQucXVhbnRpZmllci5tYXgpID8gcW5keCArIDEgOiBxdC5xdWFudGlmaWVyLm1heCkgJiYgdGVzdFBvcyA8PSBwb3M7IHFuZHgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbkdyb3VwID0gbWFza1Rva2VuLm1hdGNoZXNbJC5pbkFycmF5KHF0LCBtYXNrVG9rZW4ubWF0Y2hlcykgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPSBoYW5kbGVNYXRjaCh0b2tlbkdyb3VwLCBbIHFuZHggXS5jb25jYXQobG9vcE5keCksIHRva2VuR3JvdXApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXRlc3RNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5tYXRjaCwgbGF0ZXN0TWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyID0gcW5keCA+IHF0LnF1YW50aWZpZXIubWluIC0gMSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRmlyc3RNYXRjaChsYXRlc3RNYXRjaCwgdG9rZW5Hcm91cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxbmR4ID4gcXQucXVhbnRpZmllci5taW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3RvcCA9ICEwLCB0ZXN0UG9zID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gcmVzb2x2ZVRlc3RGcm9tVG9rZW4obWF0Y2gsIG5keEluaXRpYWxpemVyLCBsb29wTmR4LCBxdWFudGlmaWVyUmVjdXJzZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHRlc3RQb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdG5keCA9IG5keEluaXRpYWxpemVyLmxlbmd0aCA+IDAgPyBuZHhJbml0aWFsaXplci5zaGlmdCgpIDogMDsgdG5keCA8IG1hc2tUb2tlbi5tYXRjaGVzLmxlbmd0aDsgdG5keCsrKSBpZiAoITAgIT09IG1hc2tUb2tlbi5tYXRjaGVzW3RuZHhdLmlzUXVhbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBoYW5kbGVNYXRjaChtYXNrVG9rZW4ubWF0Y2hlc1t0bmR4XSwgWyB0bmR4IF0uY29uY2F0KGxvb3BOZHgpLCBxdWFudGlmaWVyUmVjdXJzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAmJiB0ZXN0UG9zID09PSBwb3MpIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbHRlclRlc3RzKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMua2VlcFN0YXRpYyAmJiBwb3MgPiAwICYmIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApICYmICEwICE9PSB0ZXN0c1swXS5tYXRjaC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdHNbMF0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIG51bGwgPT09IHRlc3RzWzBdLm1hdGNoLmZuICYmICEvWzAtOWEtYkEtWl0vLnRlc3QodGVzdHNbMF0ubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdID09PSB1bmRlZmluZWQpIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXS5hbHRlcm5hdGlvbiA9PT0gdGVzdHNbMF0uYWx0ZXJuYXRpb24pIHJldHVybiBbIGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cykgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MgLSAxXSkgcmV0dXJuIFsgZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGF0ZXN0TWF0Y2gsIG1hc2tUb2tlbnMgPSBnZXRNYXNrU2V0KCkubWFza1Rva2VuLCB0ZXN0UG9zID0gbmR4SW50bHpyID8gdHN0UHMgOiAwLCBuZHhJbml0aWFsaXplciA9IG5keEludGx6ciA/IG5keEludGx6ci5zbGljZSgpIDogWyAwIF0sIG1hdGNoZXMgPSBbXSwgaW5zZXJ0U3RvcCA9ICExLCBjYWNoZURlcGVuZGVuY3kgPSBuZHhJbnRsenIgPyBuZHhJbnRsenIuam9pbihcIlwiKSA6IFwiXCI7XG4gICAgICAgICAgICBpZiAocG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobmR4SW50bHpyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdCwgcHJldmlvdXNQb3MgPSBwb3MgLSAxOyAodGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twcmV2aW91c1Bvc10gfHwgZ2V0TWFza1NldCgpLnRlc3RzW3ByZXZpb3VzUG9zXSkgPT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xOyApIHByZXZpb3VzUG9zLS07XG4gICAgICAgICAgICAgICAgICAgIHRlc3QgIT09IHVuZGVmaW5lZCAmJiBwcmV2aW91c1BvcyA+IC0xICYmIChuZHhJbml0aWFsaXplciA9IGZ1bmN0aW9uKHRlc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYXRvciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuaXNBcnJheSh0ZXN0cykgfHwgKHRlc3RzID0gWyB0ZXN0cyBdKSwgdGVzdHMubGVuZ3RoID4gMCAmJiAodGVzdHNbMF0uYWx0ZXJuYXRpb24gPT09IHVuZGVmaW5lZCA/IChsb2NhdG9yID0gZGV0ZXJtaW5lVGVzdFRlbXBsYXRlKHRlc3RzLnNsaWNlKCkpLmxvY2F0b3Iuc2xpY2UoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAwID09PSBsb2NhdG9yLmxlbmd0aCAmJiAobG9jYXRvciA9IHRlc3RzWzBdLmxvY2F0b3Iuc2xpY2UoKSkpIDogJC5lYWNoKHRlc3RzLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSB0c3QuZGVmKSBpZiAoMCA9PT0gbG9jYXRvci5sZW5ndGgpIGxvY2F0b3IgPSB0c3QubG9jYXRvci5zbGljZSgpOyBlbHNlIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRvci5sZW5ndGg7IGkrKykgdHN0LmxvY2F0b3JbaV0gJiYgLTEgPT09IGxvY2F0b3JbaV0udG9TdHJpbmcoKS5pbmRleE9mKHRzdC5sb2NhdG9yW2ldKSAmJiAobG9jYXRvcltpXSArPSBcIixcIiArIHRzdC5sb2NhdG9yW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgfSh0ZXN0KSwgY2FjaGVEZXBlbmRlbmN5ID0gbmR4SW5pdGlhbGl6ZXIuam9pbihcIlwiKSwgdGVzdFBvcyA9IHByZXZpb3VzUG9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdldE1hc2tTZXQoKS50ZXN0c1twb3NdICYmIGdldE1hc2tTZXQoKS50ZXN0c1twb3NdWzBdLmNkID09PSBjYWNoZURlcGVuZGVuY3kpIHJldHVybiBmaWx0ZXJUZXN0cyhnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbXRuZHggPSBuZHhJbml0aWFsaXplci5zaGlmdCgpOyBtdG5keCA8IG1hc2tUb2tlbnMubGVuZ3RoOyBtdG5keCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlVGVzdEZyb21Ub2tlbihtYXNrVG9rZW5zW210bmR4XSwgbmR4SW5pdGlhbGl6ZXIsIFsgbXRuZHggXSkgJiYgdGVzdFBvcyA9PT0gcG9zIHx8IHRlc3RQb3MgPiBwb3MpIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoMCA9PT0gbWF0Y2hlcy5sZW5ndGggfHwgaW5zZXJ0U3RvcCkgJiYgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtYXRjaDoge1xuICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkZWY6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsb2NhdG9yOiBbXSxcbiAgICAgICAgICAgICAgICBjZDogY2FjaGVEZXBlbmRlbmN5XG4gICAgICAgICAgICB9KSwgbmR4SW50bHpyICE9PSB1bmRlZmluZWQgJiYgZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10gPyBmaWx0ZXJUZXN0cygkLmV4dGVuZCghMCwgW10sIG1hdGNoZXMpKSA6IChnZXRNYXNrU2V0KCkudGVzdHNbcG9zXSA9ICQuZXh0ZW5kKCEwLCBbXSwgbWF0Y2hlcyksIFxuICAgICAgICAgICAgZmlsdGVyVGVzdHMoZ2V0TWFza1NldCgpLnRlc3RzW3Bvc10pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRCdWZmZXJUZW1wbGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkuX2J1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuX2J1ZmZlciA9IGdldE1hc2tUZW1wbGF0ZSghMSwgMSksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLmJ1ZmZlciA9PT0gdW5kZWZpbmVkICYmIChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1NldCgpLl9idWZmZXIuc2xpY2UoKSkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5fYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlcihub0NhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWFza1NldCgpLmJ1ZmZlciAhPT0gdW5kZWZpbmVkICYmICEwICE9PSBub0NhY2hlIHx8IChnZXRNYXNrU2V0KCkuYnVmZmVyID0gZ2V0TWFza1RlbXBsYXRlKCEwLCBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCAhMCkpLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS5idWZmZXI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVmcmVzaEZyb21CdWZmZXIoc3RhcnQsIGVuZCwgYnVmZmVyKSB7XG4gICAgICAgICAgICB2YXIgaSwgcDtcbiAgICAgICAgICAgIGlmICghMCA9PT0gc3RhcnQpIHJlc2V0TWFza1NldCgpLCBzdGFydCA9IDAsIGVuZCA9IGJ1ZmZlci5sZW5ndGg7IGVsc2UgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgZGVsZXRlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tpXTtcbiAgICAgICAgICAgIGZvciAocCA9IHN0YXJ0LCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykgaWYgKHJlc2V0TWFza1NldCghMCksIGJ1ZmZlcltpXSAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbFJlc3VsdCA9IGlzVmFsaWQocCwgYnVmZmVyW2ldLCAhMCwgITApO1xuICAgICAgICAgICAgICAgICExICE9PSB2YWxSZXN1bHQgJiYgKHJlc2V0TWFza1NldCghMCksIHAgPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IHZhbFJlc3VsdC5wb3MgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXNpbmcoZWxlbSwgdGVzdCwgcG9zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMuY2FzaW5nIHx8IHRlc3QuY2FzaW5nKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1cHBlclwiOlxuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImxvd2VyXCI6XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgICAgICB2YXIgcG9zQmVmb3JlID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BvcyAtIDFdO1xuICAgICAgICAgICAgICAgIGVsZW0gPSAwID09PSBwb3MgfHwgcG9zQmVmb3JlICYmIHBvc0JlZm9yZS5pbnB1dCA9PT0gU3RyaW5nLmZyb21DaGFyQ29kZShJbnB1dG1hc2sua2V5Q29kZS5TUEFDRSkgPyBlbGVtLnRvVXBwZXJDYXNlKCkgOiBlbGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuY2FzaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBlbGVtID0gb3B0cy5jYXNpbmcuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBbHRlcm5hdGlvbk1hdGNoKGFsdEFycjEsIGFsdEFycjIsIG5hKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuYU5keCwgYWx0QXJyQyA9IG9wdHMuZ3JlZWR5ID8gYWx0QXJyMiA6IGFsdEFycjIuc2xpY2UoMCwgMSksIGlzTWF0Y2ggPSAhMSwgbmFBcnIgPSBuYSAhPT0gdW5kZWZpbmVkID8gbmEuc3BsaXQoXCIsXCIpIDogW10sIGkgPSAwOyBpIDwgbmFBcnIubGVuZ3RoOyBpKyspIC0xICE9PSAobmFOZHggPSBhbHRBcnIxLmluZGV4T2YobmFBcnJbaV0pKSAmJiBhbHRBcnIxLnNwbGljZShuYU5keCwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhbG5keCA9IDA7IGFsbmR4IDwgYWx0QXJyMS5sZW5ndGg7IGFsbmR4KyspIGlmICgtMSAhPT0gJC5pbkFycmF5KGFsdEFycjFbYWxuZHhdLCBhbHRBcnJDKSkge1xuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSAhMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzVmFsaWQocG9zLCBjLCBzdHJpY3QsIGZyb21TZXRWYWxpZCwgZnJvbUFsdGVybmF0ZSwgdmFsaWRhdGVPbmx5KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1NlbGVjdGlvbihwb3NPYmopIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gaXNSVEwgPyBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID4gMSB8fCBwb3NPYmouYmVnaW4gLSBwb3NPYmouZW5kID09IDEgOiBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID4gMSB8fCBwb3NPYmouZW5kIC0gcG9zT2JqLmJlZ2luID09IDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbiAmJiAwID09PSBwb3NPYmouYmVnaW4gJiYgcG9zT2JqLmVuZCA9PT0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPyBcImZ1bGxcIiA6IHNlbGVjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pc1ZhbGlkKHBvc2l0aW9uLCBjLCBzdHJpY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9ICExO1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmVhY2goZ2V0VGVzdHMocG9zaXRpb24pLCBmdW5jdGlvbihuZHgsIHRzdCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0ID0gdHN0Lm1hdGNoLCBsb29wZW5kID0gYyA/IDEgOiAwLCBjaHJzID0gXCJcIiwgaSA9IHRlc3QuY2FyZGluYWxpdHk7IGkgPiBsb29wZW5kOyBpLS0pIGNocnMgKz0gZ2V0QnVmZmVyRWxlbWVudChwb3NpdGlvbiAtIChpIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiAoY2hycyArPSBjKSwgZ2V0QnVmZmVyKCEwKSwgITEgIT09IChyc2x0ID0gbnVsbCAhPSB0ZXN0LmZuID8gdGVzdC5mbi50ZXN0KGNocnMsIGdldE1hc2tTZXQoKSwgcG9zaXRpb24sIHN0cmljdCwgb3B0cywgaXNTZWxlY3Rpb24ocG9zKSkgOiAoYyA9PT0gdGVzdC5kZWYgfHwgYyA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSAmJiBcIlwiICE9PSB0ZXN0LmRlZiAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjOiBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW0gPSByc2x0LmMgIT09IHVuZGVmaW5lZCA/IHJzbHQuYyA6IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gZWxlbSA9PT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyICYmIG51bGwgPT09IHRlc3QuZm4gPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbiwgdGVzdCwgITApIHx8IHRlc3QuZGVmIDogZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRQb3MgPSBwb3NpdGlvbiwgcG9zc2libGVNb2RpZmllZEJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJzbHQucmVtb3ZlICE9PSB1bmRlZmluZWQgJiYgKCQuaXNBcnJheShyc2x0LnJlbW92ZSkgfHwgKHJzbHQucmVtb3ZlID0gWyByc2x0LnJlbW92ZSBdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gocnNsdC5yZW1vdmUuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwVmFsaWRQb3NpdGlvbnMobG1udCwgbG1udCArIDEsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5pbnNlcnQgIT09IHVuZGVmaW5lZCAmJiAoJC5pc0FycmF5KHJzbHQuaW5zZXJ0KSB8fCAocnNsdC5pbnNlcnQgPSBbIHJzbHQuaW5zZXJ0IF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChyc2x0Lmluc2VydC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgZnVuY3Rpb24obmR4LCBsbW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZChsbW50LnBvcywgbG1udC5jLCAhMCwgZnJvbVNldFZhbGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcnNsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3NpYmxlTW9kaWZpZWRCdWZmZXIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByc2x0LnBvcyA9PT0gdW5kZWZpbmVkICYmIHJzbHQuYyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gcnNsdC5wb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbGlkYXRlZFBvcyA9IHJzbHQucG9zICE9PSB1bmRlZmluZWQgPyByc2x0LnBvcyA6IHBvc2l0aW9uKSAhPT0gcG9zaXRpb24pIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwLCBmcm9tU2V0VmFsaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEwICE9PSByc2x0ICYmIHJzbHQucG9zICE9PSB1bmRlZmluZWQgJiYgcnNsdC5wb3MgIT09IHBvc2l0aW9uICYmICh2YWxpZGF0ZWRQb3MgPSByc2x0LnBvcywgXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcihwb3NpdGlvbiwgdmFsaWRhdGVkUG9zLCBnZXRCdWZmZXIoKS5zbGljZSgpKSwgdmFsaWRhdGVkUG9zICE9PSBwb3NpdGlvbikpIHJldHVybiByc2x0ID0gJC5leHRlbmQocnNsdCwgaXNWYWxpZCh2YWxpZGF0ZWRQb3MsIGVsZW0sICEwKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCEwID09PSByc2x0IHx8IHJzbHQucG9zICE9PSB1bmRlZmluZWQgfHwgcnNsdC5jICE9PSB1bmRlZmluZWQpICYmIChuZHggPiAwICYmIHJlc2V0TWFza1NldCghMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRQb3NpdGlvbih2YWxpZGF0ZWRQb3MsICQuZXh0ZW5kKHt9LCB0c3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogY2FzaW5nKGVsZW0sIHRlc3QsIHZhbGlkYXRlZFBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBmcm9tU2V0VmFsaWQsIGlzU2VsZWN0aW9uKHBvcykpIHx8IChyc2x0ID0gITEpLCAhMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgcnNsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFZhbGlkUG9zaXRpb24ocG9zLCB2YWxpZFRlc3QsIGZyb21TZXRWYWxpZCwgaXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3Rpb24gfHwgb3B0cy5pbnNlcnRNb2RlICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgZnJvbVNldFZhbGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gcG9zOyBpIDw9IGx2cDsgaSsrKSBkZWxldGUgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdmFsaWRUZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGosIHZhbGlkID0gITAsIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucywgbmVlZHNWYWxpZGF0aW9uID0gITEsIGluaXRpYWxMZW5ndGggPSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gaiA9IHBvczsgaSA8PSBsdnA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBwb3NpdGlvbnNDbG9uZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICE9PSB1bmRlZmluZWQpIGZvciAodmFyIHBvc01hdGNoID0gajsgcG9zTWF0Y2ggPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobnVsbCA9PT0gdC5tYXRjaC5mbiAmJiB2cHNbaV0gJiYgKCEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyIHx8ICEwID09PSB2cHNbaV0ubWF0Y2gub3B0aW9uYWxpdHkpIHx8IG51bGwgIT0gdC5tYXRjaC5mbik7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NNYXRjaCsrLCAhMSA9PT0gbmVlZHNWYWxpZGF0aW9uICYmIHBvc2l0aW9uc0Nsb25lW3Bvc01hdGNoXSAmJiBwb3NpdGlvbnNDbG9uZVtwb3NNYXRjaF0ubWF0Y2guZGVmID09PSB0Lm1hdGNoLmRlZikgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXSA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmVbcG9zTWF0Y2hdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc01hdGNoXS5pbnB1dCA9IHQuaW5wdXQsIGZpbGxNaXNzaW5nTm9uTWFzayhwb3NNYXRjaCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBwb3NNYXRjaCwgdmFsaWQgPSAhMDsgZWxzZSBpZiAocG9zaXRpb25DYW5NYXRjaERlZmluaXRpb24ocG9zTWF0Y2gsIHQubWF0Y2guZGVmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXNWYWxpZChwb3NNYXRjaCwgdC5pbnB1dCwgITAsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSAhMSAhPT0gcmVzdWx0LCBqID0gcmVzdWx0LmNhcmV0IHx8IHJlc3VsdC5pbnNlcnQgPyBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIDogcG9zTWF0Y2gsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkc1ZhbGlkYXRpb24gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCEodmFsaWQgPSAhMCA9PT0gdC5nZW5lcmF0ZWRJbnB1dCkgJiYgcG9zTWF0Y2ggPj0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggLSAxKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0TWFza1NldCgpLm1hc2tMZW5ndGggPCBpbml0aWFsTGVuZ3RoICYmIChnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA9IGluaXRpYWxMZW5ndGgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zID0gJC5leHRlbmQoITAsIHt9LCBwb3NpdGlvbnNDbG9uZSksIFxuICAgICAgICAgICAgICAgICAgICByZXNldE1hc2tTZXQoITApLCAhMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHZhbGlkVGVzdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0TWFza1NldCghMCksICEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZmlsbE1pc3NpbmdOb25NYXNrKG1hc2tQb3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwbmR4ID0gbWFza1BvcyAtIDE7IHBuZHggPiAtMSAmJiAhZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BuZHhdOyBwbmR4LS0pIDtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdFRlbXBsYXRlLCB0ZXN0c0Zyb21Qb3M7XG4gICAgICAgICAgICAgICAgZm9yIChwbmR4Kys7IHBuZHggPCBtYXNrUG9zOyBwbmR4KyspIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twbmR4XSA9PT0gdW5kZWZpbmVkICYmICghMSA9PT0gb3B0cy5qaXRNYXNraW5nIHx8IG9wdHMuaml0TWFza2luZyA+IHBuZHgpICYmICh0ZXN0c0Zyb21Qb3MgPSBnZXRUZXN0cyhwbmR4LCBnZXRUZXN0VGVtcGxhdGUocG5keCAtIDEpLmxvY2F0b3IsIHBuZHggLSAxKS5zbGljZSgpLCBcbiAgICAgICAgICAgICAgICBcIlwiID09PSB0ZXN0c0Zyb21Qb3NbdGVzdHNGcm9tUG9zLmxlbmd0aCAtIDFdLm1hdGNoLmRlZiAmJiB0ZXN0c0Zyb21Qb3MucG9wKCksICh0ZXN0VGVtcGxhdGUgPSBkZXRlcm1pbmVUZXN0VGVtcGxhdGUodGVzdHNGcm9tUG9zKSkgJiYgKHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgPT09IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgfHwgIWlzTWFzayhwbmR4LCAhMCkgfHwgJC5pbkFycmF5KG9wdHMucmFkaXhQb2ludCwgZ2V0QnVmZmVyKCkpIDwgcG5keCAmJiB0ZXN0VGVtcGxhdGUubWF0Y2guZm4gJiYgdGVzdFRlbXBsYXRlLm1hdGNoLmZuLnRlc3QoZ2V0UGxhY2Vob2xkZXIocG5keCksIGdldE1hc2tTZXQoKSwgcG5keCwgITEsIG9wdHMpKSAmJiAhMSAhPT0gKHJlc3VsdCA9IF9pc1ZhbGlkKHBuZHgsIGdldFBsYWNlaG9sZGVyKHBuZHgsIHRlc3RUZW1wbGF0ZS5tYXRjaCwgITApIHx8IChudWxsID09IHRlc3RUZW1wbGF0ZS5tYXRjaC5mbiA/IHRlc3RUZW1wbGF0ZS5tYXRjaC5kZWYgOiBcIlwiICE9PSBnZXRQbGFjZWhvbGRlcihwbmR4KSA/IGdldFBsYWNlaG9sZGVyKHBuZHgpIDogZ2V0QnVmZmVyKClbcG5keF0pLCAhMCkpICYmIChnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcmVzdWx0LnBvcyB8fCBwbmR4XS5nZW5lcmF0ZWRJbnB1dCA9ICEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpY3QgPSAhMCA9PT0gc3RyaWN0O1xuICAgICAgICAgICAgdmFyIG1hc2tQb3MgPSBwb3M7XG4gICAgICAgICAgICBwb3MuYmVnaW4gIT09IHVuZGVmaW5lZCAmJiAobWFza1BvcyA9IGlzUlRMICYmICFpc1NlbGVjdGlvbihwb3MpID8gcG9zLmVuZCA6IHBvcy5iZWdpbik7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gITAsIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRzLnByZVZhbGlkYXRpb24pICYmICFzdHJpY3QgJiYgITAgIT09IGZyb21TZXRWYWxpZCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5ICYmIChyZXN1bHQgPSBvcHRzLnByZVZhbGlkYXRpb24oZ2V0QnVmZmVyKCksIG1hc2tQb3MsIGMsIGlzU2VsZWN0aW9uKHBvcyksIG9wdHMpKSwgXG4gICAgICAgICAgICAhMCA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGxNaXNzaW5nTm9uTWFzayhtYXNrUG9zKSwgaXNTZWxlY3Rpb24ocG9zKSAmJiAoaGFuZGxlUmVtb3ZlKHVuZGVmaW5lZCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MsICEwLCAhMCksIFxuICAgICAgICAgICAgICAgIG1hc2tQb3MgPSBnZXRNYXNrU2V0KCkucCksIG1hc2tQb3MgPCBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCAmJiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbWFza1BvcyA8IG1heExlbmd0aCkgJiYgKHJlc3VsdCA9IF9pc1ZhbGlkKG1hc2tQb3MsIGMsIHN0cmljdCksIFxuICAgICAgICAgICAgICAgICghc3RyaWN0IHx8ICEwID09PSBmcm9tU2V0VmFsaWQpICYmICExID09PSByZXN1bHQgJiYgITAgIT09IHZhbGlkYXRlT25seSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQb3NWYWxpZCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1ttYXNrUG9zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50UG9zVmFsaWQgfHwgbnVsbCAhPT0gY3VycmVudFBvc1ZhbGlkLm1hdGNoLmZuIHx8IGN1cnJlbnRQb3NWYWxpZC5tYXRjaC5kZWYgIT09IGMgJiYgYyAhPT0gb3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKG9wdHMuaW5zZXJ0TW9kZSB8fCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbc2Vla05leHQobWFza1BvcyldID09PSB1bmRlZmluZWQpICYmICFpc01hc2sobWFza1BvcywgITApKSBmb3IgKHZhciBuUG9zID0gbWFza1BvcyArIDEsIHNuUG9zID0gc2Vla05leHQobWFza1Bvcyk7IG5Qb3MgPD0gc25Qb3M7IG5Qb3MrKykgaWYgKCExICE9PSAocmVzdWx0ID0gX2lzVmFsaWQoblBvcywgYywgc3RyaWN0KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZnVuY3Rpb24ob3JpZ2luYWxQb3MsIG5ld1Bvcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdnAgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbmV3UG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZwKSBmb3IgKHZhciB0YXJnZXRMb2NhdG9yID0gdnAubG9jYXRvciwgdGxsID0gdGFyZ2V0TG9jYXRvci5sZW5ndGgsIHBzID0gb3JpZ2luYWxQb3M7IHBzIDwgbmV3UG9zOyBwcysrKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3BzXSA9PT0gdW5kZWZpbmVkICYmICFpc01hc2socHMsICEwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RzID0gZ2V0VGVzdHMocHMpLnNsaWNlKCksIGJlc3RNYXRjaCA9IGRldGVybWluZVRlc3RUZW1wbGF0ZSh0ZXN0cywgITApLCBlcXVhbGl0eSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmICYmIHRlc3RzLnBvcCgpLCAkLmVhY2godGVzdHMsIGZ1bmN0aW9uKG5keCwgdHN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0bGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHN0LmxvY2F0b3JbaV0gPT09IHVuZGVmaW5lZCB8fCAhY2hlY2tBbHRlcm5hdGlvbk1hdGNoKHRzdC5sb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0YXJnZXRMb2NhdG9yW2ldLnRvU3RyaW5nKCkuc3BsaXQoXCIsXCIpLCB0c3QubmEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QUkgPSB0YXJnZXRMb2NhdG9yW2ldLCBiZXN0TWF0Y2hBSSA9IGJlc3RNYXRjaC5sb2NhdG9yW2ldLCB0c3RBSSA9IHRzdC5sb2NhdG9yW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QUkgLSBiZXN0TWF0Y2hBSSA+IE1hdGguYWJzKHRhcmdldEFJIC0gdHN0QUkpICYmIChiZXN0TWF0Y2ggPSB0c3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXF1YWxpdHkgPCBpICYmIChlcXVhbGl0eSA9IGksIGJlc3RNYXRjaCA9IHRzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIGJlc3RNYXRjaCA9ICQuZXh0ZW5kKHt9LCBiZXN0TWF0Y2gsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZ2V0UGxhY2Vob2xkZXIocHMsIGJlc3RNYXRjaC5tYXRjaCwgITApIHx8IGJlc3RNYXRjaC5tYXRjaC5kZWZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBiZXN0TWF0Y2guZ2VuZXJhdGVkSW5wdXQgPSAhMCwgc2V0VmFsaWRQb3NpdGlvbihwcywgYmVzdE1hdGNoLCAhMCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tuZXdQb3NdID0gdW5kZWZpbmVkLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkKG5ld1BvcywgdnAuaW5wdXQsICEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0obWFza1BvcywgcmVzdWx0LnBvcyAhPT0gdW5kZWZpbmVkID8gcmVzdWx0LnBvcyA6IG5Qb3MpLCBtYXNrUG9zID0gblBvcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBzZWVrTmV4dChtYXNrUG9zKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAhMSA9PT0gcmVzdWx0ICYmIG9wdHMua2VlcFN0YXRpYyAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tQWx0ZXJuYXRlICYmIChyZXN1bHQgPSBmdW5jdGlvbihwb3MsIGMsIHN0cmljdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEFsdCwgYWx0ZXJuYXRpb24sIGFsdFBvcywgcHJldkFsdFBvcywgaSwgdmFsaWRQb3MsIGFsdE5keHMsIGRlY2lzaW9uUG9zLCB2YWxpZFBzQ2xvbmUgPSAkLmV4dGVuZCghMCwge30sIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyksIGlzVmFsaWRSc2x0ID0gITEsIGxBbHRQb3MgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHByZXZBbHRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbEFsdFBvc107IGxBbHRQb3MgPj0gMDsgbEFsdFBvcy0tKSBpZiAoKGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsQWx0UG9zXSkgJiYgYWx0UG9zLmFsdGVybmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID0gbEFsdFBvcywgYWx0ZXJuYXRpb24gPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0uYWx0ZXJuYXRpb24sIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0pIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJldkFsdFBvcyA9IGFsdFBvcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25Qb3MgPSBwYXJzZUludChsYXN0QWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWNpc2lvblRha2VyID0gcHJldkFsdFBvcy5sb2NhdG9yW3ByZXZBbHRQb3MuYWx0ZXJuYXRpb24gfHwgYWx0ZXJuYXRpb25dICE9PSB1bmRlZmluZWQgPyBwcmV2QWx0UG9zLmxvY2F0b3JbcHJldkFsdFBvcy5hbHRlcm5hdGlvbiB8fCBhbHRlcm5hdGlvbl0gOiBhbHROZHhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaXNpb25UYWtlci5sZW5ndGggPiAwICYmIChkZWNpc2lvblRha2VyID0gZGVjaXNpb25UYWtlci5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvc3NpYmlsaXR5UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSwgcHJldlBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvcyAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGdldFRlc3RzKGRlY2lzaW9uUG9zLCBwcmV2UG9zID8gcHJldlBvcy5sb2NhdG9yIDogdW5kZWZpbmVkLCBkZWNpc2lvblBvcyAtIDEpLCBmdW5jdGlvbihuZHgsIHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHROZHhzID0gdGVzdC5sb2NhdG9yW2FsdGVybmF0aW9uXSA/IHRlc3QubG9jYXRvclthbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIikgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtbmR4ID0gMDsgbW5keCA8IGFsdE5keHMubGVuZ3RoOyBtbmR4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkSW5wdXRzID0gW10sIHN0YXRpY0lucHV0c0JlZm9yZVBvcyA9IDAsIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSA9IDAsIHZlcmlmeVZhbGlkSW5wdXQgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlY2lzaW9uVGFrZXIgPCBhbHROZHhzW21uZHhdICYmICh0ZXN0Lm5hID09PSB1bmRlZmluZWQgfHwgLTEgPT09ICQuaW5BcnJheShhbHROZHhzW21uZHhdLCB0ZXN0Lm5hLnNwbGl0KFwiLFwiKSkgfHwgLTEgPT09ICQuaW5BcnJheShkZWNpc2lvblRha2VyLnRvU3RyaW5nKCksIGFsdE5keHMpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXSA9ICQuZXh0ZW5kKCEwLCB7fSwgdGVzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zc2liaWxpdGllcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5sb2NhdG9yW2FsdGVybmF0aW9uXSA9IHBhcnNlSW50KGFsdE5keHNbbW5keF0pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT0gdGVzdC5tYXRjaC5mbiA/IChwb3NzaWJpbGl0eVBvcy5pbnB1dCAhPT0gdGVzdC5tYXRjaC5kZWYgJiYgKHZlcmlmeVZhbGlkSW5wdXQgPSAhMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gcG9zc2liaWxpdHlQb3MuZ2VuZXJhdGVkSW5wdXQgJiYgdmFsaWRJbnB1dHMucHVzaChwb3NzaWJpbGl0eVBvcy5pbnB1dCkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbZGVjaXNpb25Qb3NdLmdlbmVyYXRlZElucHV0ID0gIS9bMC05YS1iQS1aXS8udGVzdCh0ZXN0Lm1hdGNoLmRlZiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2RlY2lzaW9uUG9zXS5pbnB1dCA9IHRlc3QubWF0Y2guZGVmKSA6IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10uaW5wdXQgPSBwb3NzaWJpbGl0eVBvcy5pbnB1dCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZGVjaXNpb25Qb3MgKyAxOyBpIDwgZ2V0TGFzdFZhbGlkUG9zaXRpb24odW5kZWZpbmVkLCAhMCkgKyAxOyBpKyspIHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2ldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkUG9zICYmICEwICE9PSB2YWxpZFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QodmFsaWRQb3MuaW5wdXQpID8gdmFsaWRJbnB1dHMucHVzaCh2YWxpZFBvcy5pbnB1dCkgOiBpIDwgcG9zICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvcysrLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZlcmlmeVZhbGlkSW5wdXQgJiYgdmFsaWRJbnB1dHNbMF0gPT09IHRlc3QubWF0Y2guZGVmICYmIHZhbGlkSW5wdXRzLnNoaWZ0KCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRNYXNrU2V0KCEwKSwgaXNWYWxpZFJzbHQgPSAhMDsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdmFsaWRJbnB1dHMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT09IG9wdHMuc2tpcE9wdGlvbmFsUGFydENoYXJhY3RlciAmJiAhKGlzVmFsaWRSc2x0ID0gaXNWYWxpZChnZXRMYXN0VmFsaWRQb3NpdGlvbih1bmRlZmluZWQsICEwKSArIDEsIGlucHV0LCAhMSwgZnJvbVNldFZhbGlkLCAhMCkpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkUnNsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tkZWNpc2lvblBvc10ubG9jYXRvciA9IHBvc3NpYmlsaXRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldEx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHBvcykgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IGRlY2lzaW9uUG9zICsgMTsgaSA8IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgKyAxOyBpKyspICgodmFsaWRQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0pID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PSB2YWxpZFBvcy5tYXRjaC5mbikgJiYgaSA8IHBvcyArIChzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MpICYmIHN0YXRpY0lucHV0c0JlZm9yZVBvc0FsdGVybmF0ZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyArPSBzdGF0aWNJbnB1dHNCZWZvcmVQb3NBbHRlcm5hdGUgLSBzdGF0aWNJbnB1dHNCZWZvcmVQb3MsIGlzVmFsaWRSc2x0ID0gaXNWYWxpZChwb3MgPiB0YXJnZXRMdnAgPyB0YXJnZXRMdnAgOiBwb3MsIGMsIHN0cmljdCwgZnJvbVNldFZhbGlkLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFJzbHQpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCgpLCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMgPSAkLmV4dGVuZCghMCwge30sIHZhbGlkUHNDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZFJzbHQ7XG4gICAgICAgICAgICAgICAgfShtYXNrUG9zLCBjLCBzdHJpY3QpKSwgITAgPT09IHJlc3VsdCAmJiAocmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBwb3M6IG1hc2tQb3NcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5wb3N0VmFsaWRhdGlvbikgJiYgITEgIT09IHJlc3VsdCAmJiAhc3RyaWN0ICYmICEwICE9PSBmcm9tU2V0VmFsaWQgJiYgITAgIT09IHZhbGlkYXRlT25seSkge1xuICAgICAgICAgICAgICAgIHZhciBwb3N0UmVzdWx0ID0gb3B0cy5wb3N0VmFsaWRhdGlvbihnZXRCdWZmZXIoITApLCByZXN1bHQsIG9wdHMpO1xuICAgICAgICAgICAgICAgIGlmIChwb3N0UmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyICYmIHBvc3RSZXN1bHQuYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcG9zdFJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHBvc3RSZXN1bHQuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gITAgPT09IHBvc3RSZXN1bHQgPyByZXN1bHQgOiBwb3N0UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQucG9zID09PSB1bmRlZmluZWQgJiYgKHJlc3VsdC5wb3MgPSBtYXNrUG9zKSwgITEgIT09IHJlc3VsdCAmJiAhMCAhPT0gdmFsaWRhdGVPbmx5IHx8IChyZXNldE1hc2tTZXQoITApLCBcbiAgICAgICAgICAgIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpKSwgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzTWFzayhwb3MsIHN0cmljdCkge1xuICAgICAgICAgICAgdmFyIHRlc3QgPSBnZXRUZXN0VGVtcGxhdGUocG9zKS5tYXRjaDtcbiAgICAgICAgICAgIGlmIChcIlwiID09PSB0ZXN0LmRlZiAmJiAodGVzdCA9IGdldFRlc3QocG9zKS5tYXRjaCksIG51bGwgIT0gdGVzdC5mbikgcmV0dXJuIHRlc3QuZm47XG4gICAgICAgICAgICBpZiAoITAgIT09IHN0cmljdCAmJiBwb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0cyA9IGdldFRlc3RzKHBvcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNlZWtOZXh0KHBvcywgbmV3QmxvY2spIHtcbiAgICAgICAgICAgIHZhciBtYXNrTCA9IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHBvcyA+PSBtYXNrTCkgcmV0dXJuIG1hc2tMO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgZm9yIChnZXRUZXN0cyhtYXNrTCArIDEpLmxlbmd0aCA+IDEgJiYgKGdldE1hc2tUZW1wbGF0ZSghMCwgbWFza0wgKyAxLCAhMCksIG1hc2tMID0gZ2V0TWFza1NldCgpLm1hc2tMZW5ndGgpOyArK3Bvc2l0aW9uIDwgbWFza0wgJiYgKCEwID09PSBuZXdCbG9jayAmJiAoITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICFpc01hc2socG9zaXRpb24pKSB8fCAhMCAhPT0gbmV3QmxvY2sgJiYgIWlzTWFzayhwb3NpdGlvbikpOyApIDtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzZWVrUHJldmlvdXMocG9zLCBuZXdCbG9jaykge1xuICAgICAgICAgICAgdmFyIHRlc3RzLCBwb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8PSAwKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGZvciAoOy0tcG9zaXRpb24gPiAwICYmICghMCA9PT0gbmV3QmxvY2sgJiYgITAgIT09IGdldFRlc3QocG9zaXRpb24pLm1hdGNoLm5ld0Jsb2NrTWFya2VyIHx8ICEwICE9PSBuZXdCbG9jayAmJiAhaXNNYXNrKHBvc2l0aW9uKSAmJiAodGVzdHMgPSBnZXRUZXN0cyhwb3NpdGlvbiksIFxuICAgICAgICAgICAgdGVzdHMubGVuZ3RoIDwgMiB8fCAyID09PSB0ZXN0cy5sZW5ndGggJiYgXCJcIiA9PT0gdGVzdHNbMV0ubWF0Y2guZGVmKSk7ICkgO1xuICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1ZmZlckVsZW1lbnQocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dID09PSB1bmRlZmluZWQgPyBnZXRQbGFjZWhvbGRlcihwb3NpdGlvbikgOiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zaXRpb25dLmlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIsIGNhcmV0UG9zLCBldmVudCwgdHJpZ2dlcklucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBvcHRzLm9uQmVmb3JlV3JpdGUuY2FsbChpbnB1dG1hc2ssIGV2ZW50LCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWZyZXNoID0gcmVzdWx0LnJlZnJlc2hGcm9tQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEZyb21CdWZmZXIoITAgPT09IHJlZnJlc2ggPyByZWZyZXNoIDogcmVmcmVzaC5zdGFydCwgcmVmcmVzaC5lbmQsIHJlc3VsdC5idWZmZXIgfHwgYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBnZXRCdWZmZXIoITApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zICE9PSB1bmRlZmluZWQgJiYgKGNhcmV0UG9zID0gcmVzdWx0LmNhcmV0ICE9PSB1bmRlZmluZWQgPyByZXN1bHQuY2FyZXQgOiBjYXJldFBvcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQgIT09IHVuZGVmaW5lZCAmJiAoaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChidWZmZXIuam9pbihcIlwiKSksIGNhcmV0UG9zID09PSB1bmRlZmluZWQgfHwgZXZlbnQgIT09IHVuZGVmaW5lZCAmJiBcImJsdXJcIiA9PT0gZXZlbnQudHlwZSA/IHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIDAgPT09IGJ1ZmZlci5sZW5ndGgpIDogYW5kcm9pZCAmJiBldmVudCAmJiBcImlucHV0XCIgPT09IGV2ZW50LnR5cGUgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBjYXJldFBvcyk7XG4gICAgICAgICAgICB9LCAwKSA6IGNhcmV0KGlucHV0LCBjYXJldFBvcyksICEwID09PSB0cmlnZ2VySW5wdXRFdmVudCAmJiAoc2tpcElucHV0RXZlbnQgPSAhMCwgXG4gICAgICAgICAgICAkKGlucHV0KS50cmlnZ2VyKFwiaW5wdXRcIikpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QsIHJldHVyblBMKSB7XG4gICAgICAgICAgICBpZiAodGVzdCA9IHRlc3QgfHwgZ2V0VGVzdChwb3MpLm1hdGNoLCB0ZXN0LnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgfHwgITAgPT09IHJldHVyblBMKSByZXR1cm4gJC5pc0Z1bmN0aW9uKHRlc3QucGxhY2Vob2xkZXIpID8gdGVzdC5wbGFjZWhvbGRlcihvcHRzKSA6IHRlc3QucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdGVzdC5mbikge1xuICAgICAgICAgICAgICAgIGlmIChwb3MgPiAtMSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmV2VGVzdCwgdGVzdHMgPSBnZXRUZXN0cyhwb3MpLCBzdGF0aWNBbHRlcm5hdGlvbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3RzLmxlbmd0aCA+IDEgKyAoXCJcIiA9PT0gdGVzdHNbdGVzdHMubGVuZ3RoIC0gMV0ubWF0Y2guZGVmID8gMSA6IDApKSBmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSBpZiAoITAgIT09IHRlc3RzW2ldLm1hdGNoLm9wdGlvbmFsaXR5ICYmICEwICE9PSB0ZXN0c1tpXS5tYXRjaC5vcHRpb25hbFF1YW50aWZpZXIgJiYgKG51bGwgPT09IHRlc3RzW2ldLm1hdGNoLmZuIHx8IHByZXZUZXN0ID09PSB1bmRlZmluZWQgfHwgITEgIT09IHRlc3RzW2ldLm1hdGNoLmZuLnRlc3QocHJldlRlc3QubWF0Y2guZGVmLCBnZXRNYXNrU2V0KCksIHBvcywgITAsIG9wdHMpKSAmJiAoc3RhdGljQWx0ZXJuYXRpb25zLnB1c2godGVzdHNbaV0pLCBcbiAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gdGVzdHNbaV0ubWF0Y2guZm4gJiYgKHByZXZUZXN0ID0gdGVzdHNbaV0pLCBzdGF0aWNBbHRlcm5hdGlvbnMubGVuZ3RoID4gMSAmJiAvWzAtOWEtYkEtWl0vLnRlc3Qoc3RhdGljQWx0ZXJuYXRpb25zWzBdLm1hdGNoLmRlZikpKSByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdC5kZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0cy5wbGFjZWhvbGRlci5jaGFyQXQocG9zICUgb3B0cy5wbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrVmFsKGlucHV0LCB3cml0ZU91dCwgc3RyaWN0LCBucHR2bCwgaW5pdGlhdGluZ0V2ZW50KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1RlbXBsYXRlTWF0Y2gobmR4LCBjaGFyQ29kZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuc2xpY2UobmR4LCBzZWVrTmV4dChuZHgpKS5qb2luKFwiXCIpLmluZGV4T2YoY2hhckNvZGVzKSAmJiAhaXNNYXNrKG5keCkgJiYgZ2V0VGVzdChuZHgpLm1hdGNoLm5hdGl2ZURlZiA9PT0gY2hhckNvZGVzLmNoYXJBdChjaGFyQ29kZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IG5wdHZsLnNsaWNlKCksIGNoYXJDb2RlcyA9IFwiXCIsIGluaXRpYWxOZHggPSAtMSwgcmVzdWx0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHJlc2V0TWFza1NldCgpLCBzdHJpY3QgfHwgITAgPT09IG9wdHMuYXV0b1VubWFzaykgaW5pdGlhbE5keCA9IHNlZWtOZXh0KGluaXRpYWxOZHgpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGljSW5wdXQgPSBnZXRCdWZmZXJUZW1wbGF0ZSgpLnNsaWNlKDAsIHNlZWtOZXh0KC0xKSkuam9pbihcIlwiKSwgbWF0Y2hlcyA9IGlucHV0VmFsdWUuam9pbihcIlwiKS5tYXRjaChuZXcgUmVnRXhwKFwiXlwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KHN0YXRpY0lucHV0KSwgXCJnXCIpKTtcbiAgICAgICAgICAgICAgICBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCAmJiAoaW5wdXRWYWx1ZS5zcGxpY2UoMCwgbWF0Y2hlcy5sZW5ndGggKiBzdGF0aWNJbnB1dC5sZW5ndGgpLCBcbiAgICAgICAgICAgICAgICBpbml0aWFsTmR4ID0gc2Vla05leHQoaW5pdGlhbE5keCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKC0xID09PSBpbml0aWFsTmR4ID8gKGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQoaW5pdGlhbE5keCksIGluaXRpYWxOZHggPSAwKSA6IGdldE1hc2tTZXQoKS5wID0gaW5pdGlhbE5keCwgXG4gICAgICAgICAgICAkLmVhY2goaW5wdXRWYWx1ZSwgZnVuY3Rpb24obmR4LCBjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSAhPT0gdW5kZWZpbmVkKSBpZiAoZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW25keF0gPT09IHVuZGVmaW5lZCAmJiBpbnB1dFZhbHVlW25keF0gPT09IGdldFBsYWNlaG9sZGVyKG5keCkgJiYgaXNNYXNrKG5keCwgITApICYmICExID09PSBpc1ZhbGlkKG5keCwgaW5wdXRWYWx1ZVtuZHhdLCAhMCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICEwKSkgZ2V0TWFza1NldCgpLnArKzsgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwiX2NoZWNrdmFsXCIpO1xuICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGNoYXJDb2RlLmNoYXJDb2RlQXQoMCksIGNoYXJDb2RlcyArPSBjaGFyQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgITApLCBsdlRlc3QgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbHZwXSwgbmV4dFRlc3QgPSBnZXRUZXN0VGVtcGxhdGUobHZwICsgMSwgbHZUZXN0ID8gbHZUZXN0LmxvY2F0b3Iuc2xpY2UoKSA6IHVuZGVmaW5lZCwgbHZwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RlbXBsYXRlTWF0Y2goaW5pdGlhbE5keCwgY2hhckNvZGVzKSB8fCBzdHJpY3QgfHwgb3B0cy5hdXRvVW5tYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zID0gc3RyaWN0ID8gbmR4IDogbnVsbCA9PSBuZXh0VGVzdC5tYXRjaC5mbiAmJiBuZXh0VGVzdC5tYXRjaC5vcHRpb25hbGl0eSAmJiBsdnAgKyAxIDwgZ2V0TWFza1NldCgpLnAgPyBsdnAgKyAxIDogZ2V0TWFza1NldCgpLnA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgc3RyaWN0LCBwb3MpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxOZHggPSBwb3MgKyAxLCBjaGFyQ29kZXMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmVzdWx0ID0gRXZlbnRIYW5kbGVycy5rZXlwcmVzc0V2ZW50LmNhbGwoaW5wdXQsIGtleXByZXNzLCAhMCwgITEsICEwLCBsdnAgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExICE9PSByZXN1bHQgJiYgIXN0cmljdCAmJiAkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZVdyaXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID0gb3B0cy5vbkJlZm9yZVdyaXRlLmNhbGwoaW5wdXRtYXNrLCBrZXlwcmVzcywgZ2V0QnVmZmVyKCksIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24sIG9wdHMpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgPSAkLmV4dGVuZChvcmlnUmVzdWx0LCByZXN1bHQpKSAmJiByZXN1bHQucmVmcmVzaEZyb21CdWZmZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVmcmVzaCA9IHJlc3VsdC5yZWZyZXNoRnJvbUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcighMCA9PT0gcmVmcmVzaCA/IHJlZnJlc2ggOiByZWZyZXNoLnN0YXJ0LCByZWZyZXNoLmVuZCwgcmVzdWx0LmJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TWFza1NldCghMCksIHJlc3VsdC5jYXJldCAmJiAoZ2V0TWFza1NldCgpLnAgPSByZXN1bHQuY2FyZXQsIHJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSByZXN1bHQuY2FyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksIHdyaXRlT3V0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGlucHV0ICYmIHJlc3VsdCAmJiAoY2FyZXRQb3MgPSBvcHRzLm51bWVyaWNJbnB1dCA/IHNlZWtQcmV2aW91cyhyZXN1bHQuZm9yd2FyZFBvc2l0aW9uKSA6IHJlc3VsdC5mb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGNhcmV0UG9zLCBpbml0aWF0aW5nRXZlbnQgfHwgbmV3ICQuRXZlbnQoXCJjaGVja3ZhbFwiKSwgaW5pdGlhdGluZ0V2ZW50ICYmIFwiaW5wdXRcIiA9PT0gaW5pdGlhdGluZ0V2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHVubWFza2VkdmFsdWUoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dG1hc2sgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzayAmJiBpbnB1dC5pbnB1dG1hc2sucmVmcmVzaFZhbHVlICYmIEV2ZW50SGFuZGxlcnMuc2V0VmFsdWVFdmVudC5jYWxsKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1bVZhbHVlID0gW10sIHZwcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIHBuZHggaW4gdnBzKSB2cHNbcG5keF0ubWF0Y2ggJiYgbnVsbCAhPSB2cHNbcG5keF0ubWF0Y2guZm4gJiYgdW1WYWx1ZS5wdXNoKHZwc1twbmR4XS5pbnB1dCk7XG4gICAgICAgICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IDAgPT09IHVtVmFsdWUubGVuZ3RoID8gXCJcIiA6IChpc1JUTCA/IHVtVmFsdWUucmV2ZXJzZSgpIDogdW1WYWx1ZSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmICgkLmlzRnVuY3Rpb24ob3B0cy5vblVuTWFzaykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnVmZmVyVmFsdWUgPSAoaXNSVEwgPyBnZXRCdWZmZXIoKS5zbGljZSgpLnJldmVyc2UoKSA6IGdldEJ1ZmZlcigpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgIHVubWFza2VkVmFsdWUgPSBvcHRzLm9uVW5NYXNrLmNhbGwoaW5wdXRtYXNrLCBidWZmZXJWYWx1ZSwgdW5tYXNrZWRWYWx1ZSwgb3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5tYXNrZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYXJldChpbnB1dCwgYmVnaW4sIGVuZCwgbm90cmFuc2xhdGUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZVBvc2l0aW9uKHBvcykge1xuICAgICAgICAgICAgICAgIGlmICghMCAhPT0gbm90cmFuc2xhdGUgJiYgaXNSVEwgJiYgXCJudW1iZXJcIiA9PSB0eXBlb2YgcG9zICYmICghb3B0cy5ncmVlZHkgfHwgXCJcIiAhPT0gb3B0cy5wbGFjZWhvbGRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKS5sZW5ndGggLSBwb3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmFuZ2U7XG4gICAgICAgICAgICBpZiAoYmVnaW4gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlucHV0LnNldFNlbGVjdGlvblJhbmdlID8gKGJlZ2luID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQsIFxuICAgICAgICAgICAgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kKSA6IHdpbmRvdy5nZXRTZWxlY3Rpb24gPyAocmFuZ2UgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VBdCgwKSwgXG4gICAgICAgICAgICByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5wYXJlbnROb2RlICE9PSBpbnB1dCAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lciAhPT0gaW5wdXQgfHwgKGJlZ2luID0gcmFuZ2Uuc3RhcnRPZmZzZXQsIFxuICAgICAgICAgICAgZW5kID0gcmFuZ2UuZW5kT2Zmc2V0KSkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLCBcbiAgICAgICAgICAgIGJlZ2luID0gMCAtIHJhbmdlLmR1cGxpY2F0ZSgpLm1vdmVTdGFydChcImNoYXJhY3RlclwiLCAtaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgZW5kID0gYmVnaW4gKyByYW5nZS50ZXh0Lmxlbmd0aCksIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLFxuICAgICAgICAgICAgICAgIGVuZDogdHJhbnNsYXRlUG9zaXRpb24oZW5kKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChiZWdpbi5iZWdpbiAhPT0gdW5kZWZpbmVkICYmIChlbmQgPSBiZWdpbi5lbmQsIGJlZ2luID0gYmVnaW4uYmVnaW4pLCBcIm51bWJlclwiID09IHR5cGVvZiBiZWdpbikge1xuICAgICAgICAgICAgICAgIGJlZ2luID0gdHJhbnNsYXRlUG9zaXRpb24oYmVnaW4pLCBlbmQgPSB0cmFuc2xhdGVQb3NpdGlvbihlbmQpLCBlbmQgPSBcIm51bWJlclwiID09IHR5cGVvZiBlbmQgPyBlbmQgOiBiZWdpbjtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsQ2FsYyA9IHBhcnNlSW50KCgoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUgPyAoaW5wdXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLmdldENvbXB1dGVkU3R5bGUoaW5wdXQsIG51bGwpIDogaW5wdXQuY3VycmVudFN0eWxlKS5mb250U2l6ZSkgKiBlbmQ7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LnNjcm9sbExlZnQgPSBzY3JvbGxDYWxjID4gaW5wdXQuc2Nyb2xsV2lkdGggPyBzY3JvbGxDYWxjIDogMCwgbW9iaWxlIHx8ICExICE9PSBvcHRzLmluc2VydE1vZGUgfHwgYmVnaW4gIT09IGVuZCB8fCBlbmQrKywgXG4gICAgICAgICAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UpIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gYmVnaW4sIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDsgZWxzZSBpZiAod2luZG93LmdldFNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLCBpbnB1dC5maXJzdENoaWxkID09PSB1bmRlZmluZWQgfHwgbnVsbCA9PT0gaW5wdXQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoaW5wdXQuZmlyc3RDaGlsZCwgYmVnaW4gPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gYmVnaW4gOiBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoKSwgXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlLnNldEVuZChpbnB1dC5maXJzdENoaWxkLCBlbmQgPCBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkubGVuZ3RoID8gZW5kIDogaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpLmxlbmd0aCksIFxuICAgICAgICAgICAgICAgICAgICByYW5nZS5jb2xsYXBzZSghMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbC5yZW1vdmVBbGxSYW5nZXMoKSwgc2VsLmFkZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY3JlYXRlVGV4dFJhbmdlICYmIChyYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpLCByYW5nZS5jb2xsYXBzZSghMCksIFxuICAgICAgICAgICAgICAgIHJhbmdlLm1vdmVFbmQoXCJjaGFyYWN0ZXJcIiwgZW5kKSwgcmFuZ2UubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIGJlZ2luKSwgcmFuZ2Uuc2VsZWN0KCkpO1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbG9yTWFzayhpbnB1dCwge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogYmVnaW4sXG4gICAgICAgICAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24ocmV0dXJuRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgdmFyIHBvcywgdGVzdFBvcywgYnVmZmVyID0gZ2V0QnVmZmVyKCksIGJsID0gYnVmZmVyLmxlbmd0aCwgbHZwID0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSwgcG9zaXRpb25zID0ge30sIGx2VGVzdCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdnBdLCBuZHhJbnRsenIgPSBsdlRlc3QgIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yLnNsaWNlKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGx2cCArIDE7IHBvcyA8IGJ1ZmZlci5sZW5ndGg7IHBvcysrKSB0ZXN0UG9zID0gZ2V0VGVzdFRlbXBsYXRlKHBvcywgbmR4SW50bHpyLCBwb3MgLSAxKSwgXG4gICAgICAgICAgICBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgcG9zaXRpb25zW3Bvc10gPSAkLmV4dGVuZCghMCwge30sIHRlc3RQb3MpO1xuICAgICAgICAgICAgdmFyIGx2VGVzdEFsdCA9IGx2VGVzdCAmJiBsdlRlc3QuYWx0ZXJuYXRpb24gIT09IHVuZGVmaW5lZCA/IGx2VGVzdC5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBmb3IgKHBvcyA9IGJsIC0gMTsgcG9zID4gbHZwICYmICh0ZXN0UG9zID0gcG9zaXRpb25zW3Bvc10sICh0ZXN0UG9zLm1hdGNoLm9wdGlvbmFsaXR5IHx8IHRlc3RQb3MubWF0Y2gub3B0aW9uYWxRdWFudGlmaWVyICYmIHRlc3RQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgbHZUZXN0QWx0ICYmIChsdlRlc3RBbHQgIT09IHBvc2l0aW9uc1twb3NdLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBudWxsICE9IHRlc3RQb3MubWF0Y2guZm4gfHwgbnVsbCA9PT0gdGVzdFBvcy5tYXRjaC5mbiAmJiB0ZXN0UG9zLmxvY2F0b3JbbHZUZXN0LmFsdGVybmF0aW9uXSAmJiBjaGVja0FsdGVybmF0aW9uTWF0Y2godGVzdFBvcy5sb2NhdG9yW2x2VGVzdC5hbHRlcm5hdGlvbl0udG9TdHJpbmcoKS5zcGxpdChcIixcIiksIGx2VGVzdEFsdC50b1N0cmluZygpLnNwbGl0KFwiLFwiKSkgJiYgXCJcIiAhPT0gZ2V0VGVzdHMocG9zKVswXS5kZWYpKSAmJiBidWZmZXJbcG9zXSA9PT0gZ2V0UGxhY2Vob2xkZXIocG9zLCB0ZXN0UG9zLm1hdGNoKSk7IHBvcy0tKSBibC0tO1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRlZmluaXRpb24gPyB7XG4gICAgICAgICAgICAgICAgbDogYmwsXG4gICAgICAgICAgICAgICAgZGVmOiBwb3NpdGlvbnNbYmxdID8gcG9zaXRpb25zW2JsXS5tYXRjaCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSA6IGJsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRQb3MsIHJsID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oKSwgYmwgPSBidWZmZXIubGVuZ3RoLCBsdiA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tnZXRMYXN0VmFsaWRQb3NpdGlvbigpXTsgcmwgPCBibCAmJiAhaXNNYXNrKHJsLCAhMCkgJiYgKHZhbGlkUG9zID0gbHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCwgbHYubG9jYXRvci5zbGljZShcIlwiKSwgbHYpIDogZ2V0VGVzdChybCkpICYmICEwICE9PSB2YWxpZFBvcy5tYXRjaC5vcHRpb25hbGl0eSAmJiAoITAgIT09IHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdmFsaWRQb3MubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgcmwgKyAxID09PSBibCAmJiBcIlwiID09PSAobHYgIT09IHVuZGVmaW5lZCA/IGdldFRlc3RUZW1wbGF0ZShybCArIDEsIGx2LmxvY2F0b3Iuc2xpY2UoXCJcIiksIGx2KSA6IGdldFRlc3QocmwgKyAxKSkubWF0Y2guZGVmKTsgKSBybCsrO1xuICAgICAgICAgICAgZm9yICg7KHZhbGlkUG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3JsIC0gMV0pICYmIHZhbGlkUG9zICYmIHZhbGlkUG9zLm1hdGNoLm9wdGlvbmFsaXR5ICYmIHZhbGlkUG9zLmlucHV0ID09PSBvcHRzLnNraXBPcHRpb25hbFBhcnRDaGFyYWN0ZXI7ICkgcmwtLTtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsKSwgYnVmZmVyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGUoYnVmZmVyKSB7XG4gICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMuaXNDb21wbGV0ZSkpIHJldHVybiBvcHRzLmlzQ29tcGxldGUoYnVmZmVyLCBvcHRzKTtcbiAgICAgICAgICAgIGlmIChcIipcIiA9PT0gb3B0cy5yZXBlYXQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgY29tcGxldGUgPSAhMSwgbHJwID0gZGV0ZXJtaW5lTGFzdFJlcXVpcmVkUG9zaXRpb24oITApLCBhbWwgPSBzZWVrUHJldmlvdXMobHJwLmwpO1xuICAgICAgICAgICAgaWYgKGxycC5kZWYgPT09IHVuZGVmaW5lZCB8fCBscnAuZGVmLm5ld0Jsb2NrTWFya2VyIHx8IGxycC5kZWYub3B0aW9uYWxpdHkgfHwgbHJwLmRlZi5vcHRpb25hbFF1YW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICEwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGFtbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gZ2V0VGVzdFRlbXBsYXRlKGkpLm1hdGNoO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gdGVzdC5mbiAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbaV0gPT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbGl0eSAmJiAhMCAhPT0gdGVzdC5vcHRpb25hbFF1YW50aWZpZXIgfHwgbnVsbCA9PT0gdGVzdC5mbiAmJiBidWZmZXJbaV0gIT09IGdldFBsYWNlaG9sZGVyKGksIHRlc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MsIHN0cmljdCwgZnJvbUlzVmFsaWQpIHtcbiAgICAgICAgICAgIGlmICgob3B0cy5udW1lcmljSW5wdXQgfHwgaXNSVEwpICYmIChrID09PSBJbnB1dG1hc2sua2V5Q29kZS5CQUNLU1BBQ0UgPyBrID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFICYmIChrID0gSW5wdXRtYXNrLmtleUNvZGUuQkFDS1NQQUNFKSwgXG4gICAgICAgICAgICBpc1JUTCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVuZCA9IHBvcy5lbmQ7XG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHBvcy5iZWdpbiwgcG9zLmJlZ2luID0gcGVuZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSAmJiAocG9zLmVuZCAtIHBvcy5iZWdpbiA8IDEgfHwgITEgPT09IG9wdHMuaW5zZXJ0TW9kZSkgPyAocG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5iZWdpbiksIFxuICAgICAgICAgICAgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5iZWdpbl0gIT09IHVuZGVmaW5lZCAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXS5pbnB1dCA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiBwb3MuYmVnaW4tLSkgOiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgJiYgcG9zLmJlZ2luID09PSBwb3MuZW5kICYmIChwb3MuZW5kID0gaXNNYXNrKHBvcy5lbmQsICEwKSAmJiBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmVuZF0gJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW3Bvcy5lbmRdLmlucHV0ICE9PSBvcHRzLnJhZGl4UG9pbnQgPyBwb3MuZW5kICsgMSA6IHNlZWtOZXh0KHBvcy5lbmQpICsgMSwgXG4gICAgICAgICAgICBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zLmJlZ2luXSAhPT0gdW5kZWZpbmVkICYmIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3MuYmVnaW5dLmlucHV0ID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHBvcy5lbmQrKyksIFxuICAgICAgICAgICAgc3RyaXBWYWxpZFBvc2l0aW9ucyhwb3MuYmVnaW4sIHBvcy5lbmQsICExLCBzdHJpY3QpLCAhMCAhPT0gc3RyaWN0ICYmIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmtlZXBTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdmFsaWRJbnB1dHMgPSBbXSwgbGFzdEFsdCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKC0xLCAhMCksIHBvc2l0aW9uc0Nsb25lID0gJC5leHRlbmQoITAsIHt9LCBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnMpLCBwcmV2QWx0UG9zID0gZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2xhc3RBbHRdOyBsYXN0QWx0ID49IDA7IGxhc3RBbHQtLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFsdFBvcyA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsYXN0QWx0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbHRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IGFsdFBvcy5nZW5lcmF0ZWRJbnB1dCAmJiAvWzAtOWEtYkEtWl0vLnRlc3QoYWx0UG9zLmlucHV0KSAmJiB2YWxpZElucHV0cy5wdXNoKGFsdFBvcy5pbnB1dCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbbGFzdEFsdF0sIGFsdFBvcy5hbHRlcm5hdGlvbiAhPT0gdW5kZWZpbmVkICYmIGFsdFBvcy5sb2NhdG9yW2FsdFBvcy5hbHRlcm5hdGlvbl0gIT09IHByZXZBbHRQb3MubG9jYXRvclthbHRQb3MuYWx0ZXJuYXRpb25dKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2QWx0UG9zID0gYWx0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0QWx0ID4gLTEpIGZvciAoZ2V0TWFza1NldCgpLnAgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigtMSwgITApKTsgdmFsaWRJbnB1dHMubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cHJlc3MgPSBuZXcgJC5FdmVudChcImtleXByZXNzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3Mud2hpY2ggPSB2YWxpZElucHV0cy5wb3AoKS5jaGFyQ29kZUF0KDApLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MsICEwLCAhMSwgITEsIGdldE1hc2tTZXQoKS5wKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9ucyA9ICQuZXh0ZW5kKCEwLCB7fSwgcG9zaXRpb25zQ2xvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgIHZhciBsdnAgPSBnZXRMYXN0VmFsaWRQb3NpdGlvbihwb3MuYmVnaW4sICEwKTtcbiAgICAgICAgICAgIGlmIChsdnAgPCBwb3MuYmVnaW4pIGdldE1hc2tTZXQoKS5wID0gc2Vla05leHQobHZwKTsgZWxzZSBpZiAoITAgIT09IHN0cmljdCAmJiAoZ2V0TWFza1NldCgpLnAgPSBwb3MuYmVnaW4sIFxuICAgICAgICAgICAgITAgIT09IGZyb21Jc1ZhbGlkKSkgZm9yICg7Z2V0TWFza1NldCgpLnAgPCBsdnAgJiYgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2dldE1hc2tTZXQoKS5wXSA9PT0gdW5kZWZpbmVkOyApIGdldE1hc2tTZXQoKS5wKys7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbG9yTWFzayhpbnB1dCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZmluZENhcmV0UG9zKGNsaWVudHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MsIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdHlsZSBpbiBjb21wdXRlZFN0eWxlKSBpc05hTihzdHlsZSkgJiYgLTEgIT09IHN0eWxlLmluZGV4T2YoXCJmb250XCIpICYmIChlLnN0eWxlW3N0eWxlXSA9IGNvbXB1dGVkU3R5bGVbc3R5bGVdKTtcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBjb21wdXRlZFN0eWxlLnRleHRUcmFuc2Zvcm0sIGUuc3R5bGUubGV0dGVyU3BhY2luZyA9IGNvbXB1dGVkU3R5bGUubGV0dGVyU3BhY2luZywgXG4gICAgICAgICAgICAgICAgZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIiwgZS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIiwgZS5zdHlsZS53aWR0aCA9IFwiYXV0b1wiLCBcbiAgICAgICAgICAgICAgICBlLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiLCBlLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiLCBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO1xuICAgICAgICAgICAgICAgIHZhciBpdGwsIGlucHV0VGV4dCA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgcHJldmlvdXNXaWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChjYXJldFBvcyA9IDAsIGl0bCA9IGlucHV0VGV4dC5sZW5ndGg7IGNhcmV0UG9zIDw9IGl0bDsgY2FyZXRQb3MrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5pbm5lckhUTUwgKz0gaW5wdXRUZXh0LmNoYXJBdChjYXJldFBvcykgfHwgXCJfXCIsIGUub2Zmc2V0V2lkdGggPj0gY2xpZW50eCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldDEgPSBjbGllbnR4IC0gcHJldmlvdXNXaWR0aCwgb2Zmc2V0MiA9IGUub2Zmc2V0V2lkdGggLSBjbGllbnR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5pbm5lckhUTUwgPSBpbnB1dFRleHQuY2hhckF0KGNhcmV0UG9zKSwgb2Zmc2V0MSAtPSBlLm9mZnNldFdpZHRoIC8gMywgY2FyZXRQb3MgPSBvZmZzZXQxIDwgb2Zmc2V0MiA/IGNhcmV0UG9zIC0gMSA6IGNhcmV0UG9zO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNXaWR0aCA9IGUub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLCBjYXJldFBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gKGlucHV0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5nZXRDb21wdXRlZFN0eWxlKGlucHV0LCBudWxsKSwgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGVtcGxhdGUuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoLCB0ZW1wbGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBjb21wdXRlZFN0eWxlLnRleHRBbGlnbiwgXG4gICAgICAgICAgICBjb2xvck1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBjb2xvck1hc2suY2xhc3NOYW1lID0gXCJpbS1jb2xvcm1hc2tcIiwgXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb2xvck1hc2ssIGlucHV0KSwgaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnB1dCksIFxuICAgICAgICAgICAgY29sb3JNYXNrLmFwcGVuZENoaWxkKHRlbXBsYXRlKSwgY29sb3JNYXNrLmFwcGVuZENoaWxkKGlucHV0KSwgaW5wdXQuc3R5bGUubGVmdCA9IHRlbXBsYXRlLm9mZnNldExlZnQgKyBcInB4XCIsIFxuICAgICAgICAgICAgJChpbnB1dCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhcmV0KGlucHV0LCBmaW5kQ2FyZXRQb3MoZS5jbGllbnRYKSksIEV2ZW50SGFuZGxlcnMuY2xpY2tFdmVudC5jYWxsKGlucHV0LCBbIGUgXSk7XG4gICAgICAgICAgICB9KSwgJChpbnB1dCkub24oXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgfHwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyQ29sb3JNYXNrKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckNvbG9yTWFzayhpbnB1dCwgY2FyZXRQb3MsIGNsZWFyKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdGF0aWMoKSB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWMgfHwgbnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgPyBpc1N0YXRpYyAmJiAobnVsbCAhPT0gdGVzdC5mbiAmJiB0ZXN0UG9zLmlucHV0ICE9PSB1bmRlZmluZWQgfHwgXCJcIiA9PT0gdGVzdC5kZWYpICYmIChpc1N0YXRpYyA9ICExLCBcbiAgICAgICAgICAgICAgICBtYXNrVGVtcGxhdGUgKz0gXCI8L3NwYW4+XCIpIDogKGlzU3RhdGljID0gITAsIG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1zdGF0aWMnPlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNhcmV0KGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgITAgIT09IGZvcmNlICYmIHBvcyAhPT0gY2FyZXRQb3MuYmVnaW4gfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gaW5wdXQgfHwgKG1hc2tUZW1wbGF0ZSArPSBcIjxzcGFuIGNsYXNzPSdpbS1jYXJldCcgc3R5bGU9J2JvcmRlci1yaWdodC13aWR0aDogMXB4O2JvcmRlci1yaWdodC1zdHlsZTogc29saWQ7Jz48L3NwYW4+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRlc3QsIHRlc3RQb3MsIG5keEludGx6ciwgbWFza1RlbXBsYXRlID0gXCJcIiwgaXNTdGF0aWMgPSAhMSwgcG9zID0gMDtcbiAgICAgICAgICAgIGlmIChjb2xvck1hc2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZXRQb3MgPT09IHVuZGVmaW5lZCA/IGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpIDogY2FyZXRQb3MuYmVnaW4gPT09IHVuZGVmaW5lZCAmJiAoY2FyZXRQb3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBjYXJldFBvc1xuICAgICAgICAgICAgICAgIH0pLCAhMCAhPT0gY2xlYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldExhc3RWYWxpZFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNhcmV0KCksIGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1twb3NdID8gKHRlc3RQb3MgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnNbcG9zXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdFBvcy5tYXRjaCwgbmR4SW50bHpyID0gdGVzdFBvcy5sb2NhdG9yLnNsaWNlKCksIGhhbmRsZVN0YXRpYygpLCBtYXNrVGVtcGxhdGUgKz0gYnVmZmVyW3Bvc10pIDogKHRlc3RQb3MgPSBnZXRUZXN0VGVtcGxhdGUocG9zLCBuZHhJbnRsenIsIHBvcyAtIDEpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgPSB0ZXN0UG9zLm1hdGNoLCBuZHhJbnRsenIgPSB0ZXN0UG9zLmxvY2F0b3Iuc2xpY2UoKSwgKCExID09PSBvcHRzLmppdE1hc2tpbmcgfHwgcG9zIDwgbHZwIHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIG9wdHMuaml0TWFza2luZyAmJiBpc0Zpbml0ZShvcHRzLmppdE1hc2tpbmcpICYmIG9wdHMuaml0TWFza2luZyA+IHBvcykgJiYgKGhhbmRsZVN0YXRpYygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUZW1wbGF0ZSArPSBnZXRQbGFjZWhvbGRlcihwb3MsIHRlc3QpKSksIHBvcysrO1xuICAgICAgICAgICAgICAgICAgICB9IHdoaWxlICgobWF4TGVuZ3RoID09PSB1bmRlZmluZWQgfHwgcG9zIDwgbWF4TGVuZ3RoKSAmJiAobnVsbCAhPT0gdGVzdC5mbiB8fCBcIlwiICE9PSB0ZXN0LmRlZikgfHwgbHZwID4gcG9zIHx8IGlzU3RhdGljKTtcbiAgICAgICAgICAgICAgICAgICAgLTEgPT09IG1hc2tUZW1wbGF0ZS5pbmRleE9mKFwiaW0tY2FyZXRcIikgJiYgaGFuZGxlQ2FyZXQoITApLCBpc1N0YXRpYyAmJiBoYW5kbGVTdGF0aWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gY29sb3JNYXNrLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpWzBdO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IG1hc2tUZW1wbGF0ZSwgaW5wdXQuaW5wdXRtYXNrLnBvc2l0aW9uQ29sb3JNYXNrKGlucHV0LCB0ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFza3NldCA9IG1hc2tzZXQgfHwgdGhpcy5tYXNrc2V0LCBvcHRzID0gb3B0cyB8fCB0aGlzLm9wdHM7XG4gICAgICAgIHZhciB1bmRvVmFsdWUsICRlbCwgbWF4TGVuZ3RoLCBjb2xvck1hc2ssIGlucHV0bWFzayA9IHRoaXMsIGVsID0gdGhpcy5lbCwgaXNSVEwgPSB0aGlzLmlzUlRMLCBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExLCBpZ25vcmFibGUgPSAhMSwgbW91c2VFbnRlciA9ICExLCBFdmVudFJ1bGVyID0ge1xuICAgICAgICAgICAgb246IGZ1bmN0aW9uKGlucHV0LCBldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHZhciBldiA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRtYXNrID09PSB1bmRlZmluZWQgJiYgXCJGT1JNXCIgIT09IHRoaXMubm9kZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbU9wdHMgPSAkLmRhdGEodGhpcywgXCJfaW5wdXRtYXNrX29wdHNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbU9wdHMgPyBuZXcgSW5wdXRtYXNrKGltT3B0cykubWFzayh0aGlzKSA6IEV2ZW50UnVsZXIub2ZmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwic2V0dmFsdWVcIiA9PT0gZS50eXBlIHx8IFwiRk9STVwiID09PSB0aGlzLm5vZGVOYW1lIHx8ICEodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5ICYmICEoXCJrZXlkb3duXCIgPT09IGUudHlwZSAmJiBlLmN0cmxLZXkgJiYgNjcgPT09IGUua2V5Q29kZSB8fCAhMSA9PT0gb3B0cy50YWJUaHJvdWdoICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuVEFCKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlucHV0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcElucHV0RXZlbnQpIHJldHVybiBza2lwSW5wdXRFdmVudCA9ICExLCBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwia2V5ZG93blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwS2V5UHJlc3NFdmVudCA9ICExLCBza2lwSW5wdXRFdmVudCA9ICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImtleXByZXNzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gc2tpcEtleVByZXNzRXZlbnQpIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBLZXlQcmVzc0V2ZW50ID0gITA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2xpY2tcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGllbW9iaWxlIHx8IGlwaG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCksICExO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWwgPSBldmVudEhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITEgPT09IHJldHVyblZhbCAmJiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBlLnN0b3BQcm9wYWdhdGlvbigpKSwgcmV0dXJuVmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV0gfHwgW10sIGlucHV0LmlucHV0bWFzay5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGV2KSwgXG4gICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9uKGV2ZW50TmFtZSwgZXYpIDogJChpbnB1dCkub24oZXZlbnROYW1lLCBldik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2ZmOiBmdW5jdGlvbihpbnB1dCwgZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrICYmIGlucHV0LmlucHV0bWFzay5ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPyAoZXZlbnRzID0gW10sIGV2ZW50c1tldmVudF0gPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50XSkgOiBldmVudHMgPSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzLCBcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGV2ZW50cywgZnVuY3Rpb24oZXZlbnROYW1lLCBldkFycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ZXZBcnIubGVuZ3RoID4gMDsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV2ID0gZXZBcnIucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLTEgIT09ICQuaW5BcnJheShldmVudE5hbWUsIFsgXCJzdWJtaXRcIiwgXCJyZXNldFwiIF0pID8gbnVsbCAhPT0gaW5wdXQuZm9ybSAmJiAkKGlucHV0LmZvcm0pLm9mZihldmVudE5hbWUsIGV2KSA6ICQoaW5wdXQpLm9mZihldmVudE5hbWUsIGV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dC5pbnB1dG1hc2suZXZlbnRzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAgIGtleWRvd25FdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS5rZXlDb2RlLCBwb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRSB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5ERUxFVEUgfHwgaXBob25lICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLkJBQ0tTUEFDRV9TQUZBUkkgfHwgZS5jdHJsS2V5ICYmIGsgPT09IElucHV0bWFzay5rZXlDb2RlLlggJiYgIWZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIGV2TmFtZSA9IFwib25cIiArIGV2ZW50TmFtZSwgaXNTdXBwb3J0ZWQgPSBldk5hbWUgaW4gZWw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N1cHBvcnRlZCB8fCAoZWwuc2V0QXR0cmlidXRlKGV2TmFtZSwgXCJyZXR1cm47XCIpLCBpc1N1cHBvcnRlZCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZWxbZXZOYW1lXSksIFxuICAgICAgICAgICAgICAgICAgICBlbCA9IG51bGwsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oXCJjdXRcIikpIGUucHJldmVudERlZmF1bHQoKSwgaGFuZGxlUmVtb3ZlKGlucHV0LCBrLCBwb3MpLCB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCEwKSwgZ2V0TWFza1NldCgpLnAsIGUsIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSksIFxuICAgICAgICAgICAgICAgIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSA9PT0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpID8gJGlucHV0LnRyaWdnZXIoXCJjbGVhcmVkXCIpIDogITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7IGVsc2UgaWYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLkVORCB8fCBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5QQUdFX0RPV04pIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5pbnNlcnRNb2RlIHx8IGNhcmV0UG9zICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCB8fCBlLnNoaWZ0S2V5IHx8IGNhcmV0UG9zLS0sIFxuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IGNhcmV0UG9zLCBjYXJldFBvcywgITApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5IT01FICYmICFlLnNoaWZ0S2V5IHx8IGsgPT09IElucHV0bWFzay5rZXlDb2RlLlBBR0VfVVAgPyAoZS5wcmV2ZW50RGVmYXVsdCgpLCBcbiAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgMCwgZS5zaGlmdEtleSA/IHBvcy5iZWdpbiA6IDAsICEwKSkgOiAob3B0cy51bmRvT25Fc2NhcGUgJiYgayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRVNDQVBFIHx8IDkwID09PSBrICYmIGUuY3RybEtleSkgJiYgITAgIT09IGUuYWx0S2V5ID8gKGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIHVuZG9WYWx1ZS5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2xpY2tcIikpIDogayAhPT0gSW5wdXRtYXNrLmtleUNvZGUuSU5TRVJUIHx8IGUuc2hpZnRLZXkgfHwgZS5jdHJsS2V5ID8gITAgPT09IG9wdHMudGFiVGhyb3VnaCAmJiBrID09PSBJbnB1dG1hc2sua2V5Q29kZS5UQUIgPyAoITAgPT09IGUuc2hpZnRLZXkgPyAobnVsbCA9PT0gZ2V0VGVzdChwb3MuYmVnaW4pLm1hdGNoLmZuICYmIChwb3MuYmVnaW4gPSBzZWVrTmV4dChwb3MuYmVnaW4pKSwgXG4gICAgICAgICAgICAgICAgcG9zLmVuZCA9IHNlZWtQcmV2aW91cyhwb3MuYmVnaW4sICEwKSwgcG9zLmJlZ2luID0gc2Vla1ByZXZpb3VzKHBvcy5lbmQsICEwKSkgOiAocG9zLmJlZ2luID0gc2Vla05leHQocG9zLmJlZ2luLCAhMCksIFxuICAgICAgICAgICAgICAgIHBvcy5lbmQgPSBzZWVrTmV4dChwb3MuYmVnaW4sICEwKSwgcG9zLmVuZCA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIHBvcy5lbmQtLSksIFxuICAgICAgICAgICAgICAgIHBvcy5iZWdpbiA8IGdldE1hc2tTZXQoKS5tYXNrTGVuZ3RoICYmIChlLnByZXZlbnREZWZhdWx0KCksIGNhcmV0KGlucHV0LCBwb3MuYmVnaW4sIHBvcy5lbmQpKSkgOiBlLnNoaWZ0S2V5IHx8ICExID09PSBvcHRzLmluc2VydE1vZGUgJiYgKGsgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUID8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcmV0UG9zID0gY2FyZXQoaW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBjYXJldChpbnB1dCwgY2FyZXRQb3MuYmVnaW4pO1xuICAgICAgICAgICAgICAgIH0sIDApIDogayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuTEVGVCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FyZXRQb3MgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBpc1JUTCA/IGNhcmV0UG9zLmJlZ2luICsgMSA6IGNhcmV0UG9zLmJlZ2luIC0gMSk7XG4gICAgICAgICAgICAgICAgfSwgMCkpIDogKG9wdHMuaW5zZXJ0TW9kZSA9ICFvcHRzLmluc2VydE1vZGUsIGNhcmV0KGlucHV0LCBvcHRzLmluc2VydE1vZGUgfHwgcG9zLmJlZ2luICE9PSBnZXRNYXNrU2V0KCkubWFza0xlbmd0aCA/IHBvcy5iZWdpbiA6IHBvcy5iZWdpbiAtIDEpKTtcbiAgICAgICAgICAgICAgICBvcHRzLm9uS2V5RG93bi5jYWxsKHRoaXMsIGUsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkuYmVnaW4sIG9wdHMpLCBpZ25vcmFibGUgPSAtMSAhPT0gJC5pbkFycmF5KGssIG9wdHMuaWdub3JhYmxlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5cHJlc3NFdmVudDogZnVuY3Rpb24oZSwgY2hlY2t2YWwsIHdyaXRlT3V0LCBzdHJpY3QsIG5keCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXMsICRpbnB1dCA9ICQoaW5wdXQpLCBrID0gZS53aGljaCB8fCBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZTtcbiAgICAgICAgICAgICAgICBpZiAoISghMCA9PT0gY2hlY2t2YWwgfHwgZS5jdHJsS2V5ICYmIGUuYWx0S2V5KSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSB8fCBpZ25vcmFibGUpKSByZXR1cm4gayA9PT0gSW5wdXRtYXNrLmtleUNvZGUuRU5URVIgJiYgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcImNoYW5nZVwiKTtcbiAgICAgICAgICAgICAgICB9LCAwKSksICEwO1xuICAgICAgICAgICAgICAgIGlmIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIDQ2ID09PSBrICYmICExID09PSBlLnNoaWZ0S2V5ICYmIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAoayA9IG9wdHMucmFkaXhQb2ludC5jaGFyQ29kZUF0KDApKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvcndhcmRQb3NpdGlvbiwgcG9zID0gY2hlY2t2YWwgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbmR4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBuZHhcbiAgICAgICAgICAgICAgICAgICAgfSA6IGNhcmV0KGlucHV0KSwgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoayk7XG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsUmVzdWx0ID0gaXNWYWxpZChwb3MsIGMsIHN0cmljdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghMSAhPT0gdmFsUmVzdWx0ICYmIChyZXNldE1hc2tTZXQoITApLCBmb3J3YXJkUG9zaXRpb24gPSB2YWxSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IHZhbFJlc3VsdC5jYXJldCA6IGNoZWNrdmFsID8gdmFsUmVzdWx0LnBvcyArIDEgOiBzZWVrTmV4dCh2YWxSZXN1bHQucG9zKSwgXG4gICAgICAgICAgICAgICAgICAgIGdldE1hc2tTZXQoKS5wID0gZm9yd2FyZFBvc2l0aW9uKSwgITEgIT09IHdyaXRlT3V0ICYmIChzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5vbktleVZhbGlkYXRpb24uY2FsbChpbnB1dCwgaywgdmFsUmVzdWx0LCBvcHRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIGdldE1hc2tTZXQoKS53cml0ZU91dEJ1ZmZlciAmJiAhMSAhPT0gdmFsUmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGdldEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGJ1ZmZlciwgb3B0cy5udW1lcmljSW5wdXQgJiYgdmFsUmVzdWx0LmNhcmV0ID09PSB1bmRlZmluZWQgPyBzZWVrUHJldmlvdXMoZm9yd2FyZFBvc2l0aW9uKSA6IGZvcndhcmRQb3NpdGlvbiwgZSwgITAgIT09IGNoZWNrdmFsKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAhMCAhPT0gY2hlY2t2YWwgJiYgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMCA9PT0gaXNDb21wbGV0ZShidWZmZXIpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCgpLCBjaGVja3ZhbCkgcmV0dXJuICExICE9PSB2YWxSZXN1bHQgJiYgKHZhbFJlc3VsdC5mb3J3YXJkUG9zaXRpb24gPSBmb3J3YXJkUG9zaXRpb24pLCBcbiAgICAgICAgICAgICAgICAgICAgdmFsUmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXN0ZUV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBWYWx1ZSwgaW5wdXQgPSB0aGlzLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCAkaW5wdXQgPSAkKGlucHV0KSwgaW5wdXRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICBpc1JUTCAmJiAodGVtcFZhbHVlID0gY2FyZXRQb3MuZW5kLCBjYXJldFBvcy5lbmQgPSBjYXJldFBvcy5iZWdpbiwgY2FyZXRQb3MuYmVnaW4gPSB0ZW1wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUJlZm9yZUNhcmV0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoMCwgY2FyZXRQb3MuYmVnaW4pLCB2YWx1ZUFmdGVyQ2FyZXQgPSBpbnB1dFZhbHVlLnN1YnN0cihjYXJldFBvcy5lbmQsIGlucHV0VmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVCZWZvcmVDYXJldCA9PT0gKGlzUlRMID8gZ2V0QnVmZmVyVGVtcGxhdGUoKS5yZXZlcnNlKCkgOiBnZXRCdWZmZXJUZW1wbGF0ZSgpKS5zbGljZSgwLCBjYXJldFBvcy5iZWdpbikuam9pbihcIlwiKSAmJiAodmFsdWVCZWZvcmVDYXJldCA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZUFmdGVyQ2FyZXQgPT09IChpc1JUTCA/IGdldEJ1ZmZlclRlbXBsYXRlKCkucmV2ZXJzZSgpIDogZ2V0QnVmZmVyVGVtcGxhdGUoKSkuc2xpY2UoY2FyZXRQb3MuZW5kKS5qb2luKFwiXCIpICYmICh2YWx1ZUFmdGVyQ2FyZXQgPSBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNSVEwgJiYgKHRlbXBWYWx1ZSA9IHZhbHVlQmVmb3JlQ2FyZXQsIHZhbHVlQmVmb3JlQ2FyZXQgPSB2YWx1ZUFmdGVyQ2FyZXQsIHZhbHVlQWZ0ZXJDYXJldCA9IHRlbXBWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIGlucHV0VmFsdWUgPSB2YWx1ZUJlZm9yZUNhcmV0ICsgd2luZG93LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2LmNsaXBib2FyZERhdGEgfHwgIWV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gdmFsdWVCZWZvcmVDYXJldCArIGV2LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIikgKyB2YWx1ZUFmdGVyQ2FyZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoJC5pc0Z1bmN0aW9uKG9wdHMub25CZWZvcmVQYXN0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSAocGFzdGVWYWx1ZSA9IG9wdHMub25CZWZvcmVQYXN0ZS5jYWxsKGlucHV0bWFzaywgaW5wdXRWYWx1ZSwgb3B0cykpKSByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXN0ZVZhbHVlIHx8IChwYXN0ZVZhbHVlID0gaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGVja1ZhbChpbnB1dCwgITEsICExLCBpc1JUTCA/IHBhc3RlVmFsdWUuc3BsaXQoXCJcIikucmV2ZXJzZSgpIDogcGFzdGVWYWx1ZS50b1N0cmluZygpLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgd3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSwgZSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgITAgPT09IGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpICYmICRpbnB1dC50cmlnZ2VyKFwiY29tcGxldGVcIiksIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dEZhbGxCYWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCBpbnB1dFZhbHVlID0gaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpO1xuICAgICAgICAgICAgICAgIGlmIChnZXRCdWZmZXIoKS5qb2luKFwiXCIpICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGNhcmV0KGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIi5cIiA9PT0gaW5wdXRWYWx1ZS5jaGFyQXQoY2FyZXRQb3MuYmVnaW4gLSAxKSAmJiBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgKGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWVbY2FyZXRQb3MuYmVnaW4gLSAxXSA9IG9wdHMucmFkaXhQb2ludC5jaGFyQXQoMCksIGlucHV0VmFsdWUgPSBpbnB1dFZhbHVlLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUuY2hhckF0KGNhcmV0UG9zLmJlZ2luIC0gMSkgPT09IG9wdHMucmFkaXhQb2ludCAmJiBpbnB1dFZhbHVlLmxlbmd0aCA+IGdldEJ1ZmZlcigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gb3B0cy5yYWRpeFBvaW50LmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgY2FyZXRQb3MuYmVnaW4gLSAxKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSA9IGlucHV0VmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKFwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSkgKyBcIikqXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICExID09PSBmdW5jdGlvbihpbnB1dCwgaW5wdXRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZW1vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dENoYXIgPSBpbnB1dFZhbHVlLnJlcGxhY2UoZ2V0QnVmZmVyKCkuam9pbihcIlwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDEgPT09IGlucHV0Q2hhci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleXByZXNzID0gbmV3ICQuRXZlbnQoXCJrZXlwcmVzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleXByZXNzLndoaWNoID0gaW5wdXRDaGFyLmNoYXJDb2RlQXQoMCksIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudC5jYWxsKGlucHV0LCBrZXlwcmVzcywgITAsICEwLCAhMSwgZ2V0TWFza1NldCgpLnZhbGlkUG9zaXRpb25zW2NhcmV0UG9zLmJlZ2luIC0gMV0gPyBjYXJldFBvcy5iZWdpbiA6IGNhcmV0UG9zLmJlZ2luIC0gMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0oaW5wdXQsIGlucHV0VmFsdWUsIGNhcmV0UG9zKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBjYXJldFBvcy5iZWdpbiA+IGlucHV0VmFsdWUubGVuZ3RoICYmIChjYXJldChpbnB1dCwgaW5wdXRWYWx1ZS5sZW5ndGgpLCBjYXJldFBvcyA9IGNhcmV0KGlucHV0KSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCBmcm9udFBhcnQgPSBpbnB1dFZhbHVlLnN1YnN0cigwLCBjYXJldFBvcy5iZWdpbiksIGJhY2tQYXJ0ID0gaW5wdXRWYWx1ZS5zdWJzdHIoY2FyZXRQb3MuYmVnaW4pLCBmcm9udEJ1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKDAsIGNhcmV0UG9zLmJlZ2luKSwgYmFja0J1ZmZlclBhcnQgPSBidWZmZXIuc3Vic3RyKGNhcmV0UG9zLmJlZ2luKSwgc2VsZWN0aW9uID0gY2FyZXRQb3MsIGVudHJpZXMgPSBcIlwiLCBpc0VudHJ5ID0gITE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9udFBhcnQgIT09IGZyb250QnVmZmVyUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLmJlZ2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGZwbCA9IChpc0VudHJ5ID0gZnJvbnRQYXJ0Lmxlbmd0aCA+PSBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoKSA/IGZyb250UGFydC5sZW5ndGggOiBmcm9udEJ1ZmZlclBhcnQubGVuZ3RoLCBpID0gMDsgZnJvbnRQYXJ0LmNoYXJBdChpKSA9PT0gZnJvbnRCdWZmZXJQYXJ0LmNoYXJBdChpKSAmJiBpIDwgZnBsOyBpKyspIHNlbGVjdGlvbi5iZWdpbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNFbnRyeSAmJiAoZW50cmllcyArPSBmcm9udFBhcnQuc2xpY2Uoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFja1BhcnQgIT09IGJhY2tCdWZmZXJQYXJ0ICYmIChiYWNrUGFydC5sZW5ndGggPiBiYWNrQnVmZmVyUGFydC5sZW5ndGggPyBpc0VudHJ5ICYmIChzZWxlY3Rpb24uZW5kID0gc2VsZWN0aW9uLmJlZ2luKSA6IGJhY2tQYXJ0Lmxlbmd0aCA8IGJhY2tCdWZmZXJQYXJ0Lmxlbmd0aCA/IHNlbGVjdGlvbi5lbmQgKz0gYmFja0J1ZmZlclBhcnQubGVuZ3RoIC0gYmFja1BhcnQubGVuZ3RoIDogYmFja1BhcnQuY2hhckF0KDApICE9PSBiYWNrQnVmZmVyUGFydC5jaGFyQXQoMCkgJiYgc2VsZWN0aW9uLmVuZCsrKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2VsZWN0aW9uKSwgZW50cmllcy5sZW5ndGggPiAwID8gJC5lYWNoKGVudHJpZXMuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXlwcmVzcyA9IG5ldyAkLkV2ZW50KFwia2V5cHJlc3NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcy53aGljaCA9IGVudHJ5LmNoYXJDb2RlQXQoMCksIGlnbm9yYWJsZSA9ICExLCBFdmVudEhhbmRsZXJzLmtleXByZXNzRXZlbnQuY2FsbChpbnB1dCwga2V5cHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9KSA6IChzZWxlY3Rpb24uYmVnaW4gPT09IHNlbGVjdGlvbi5lbmQgLSAxICYmIGNhcmV0KGlucHV0LCBzZWVrUHJldmlvdXMoc2VsZWN0aW9uLmJlZ2luICsgMSksIHNlbGVjdGlvbi5lbmQpLCBcbiAgICAgICAgICAgICAgICAgICAgZS5rZXlDb2RlID0gSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBFdmVudEhhbmRsZXJzLmtleWRvd25FdmVudC5jYWxsKGlucHV0LCBlKSksIFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFZhbHVlRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0bWFzay5yZWZyZXNoVmFsdWUgPSAhMTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCB2YWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoITApO1xuICAgICAgICAgICAgICAgICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgJiYgKHZhbHVlID0gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlLCBvcHRzKSB8fCB2YWx1ZSksIFxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoXCJcIiksIGNoZWNrVmFsKGlucHV0LCAhMCwgITEsIGlzUlRMID8gdmFsdWUucmV2ZXJzZSgpIDogdmFsdWUpLCBcbiAgICAgICAgICAgICAgICB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLCAob3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBvcHRzLmNsZWFySW5jb21wbGV0ZSkgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgaW5wdXQuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb2N1c0V2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcywgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgb3B0cy5zaG93TWFza09uRm9jdXMgJiYgKCFvcHRzLnNob3dNYXNrT25Ib3ZlciB8fCBvcHRzLnNob3dNYXNrT25Ib3ZlciAmJiBcIlwiID09PSBucHRWYWx1ZSkgJiYgKGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSA/IHdyaXRlQnVmZmVyKGlucHV0LCBnZXRCdWZmZXIoKSwgc2Vla05leHQoZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSkpIDogITEgPT09IG1vdXNlRW50ZXIgJiYgY2FyZXQoaW5wdXQsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKSksIFxuICAgICAgICAgICAgICAgICEwID09PSBvcHRzLnBvc2l0aW9uQ2FyZXRPblRhYiAmJiAhMSA9PT0gbW91c2VFbnRlciAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAod3JpdGVCdWZmZXIoaW5wdXQsIGdldEJ1ZmZlcigpLCBjYXJldChpbnB1dCkpLCBcbiAgICAgICAgICAgICAgICBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQuYXBwbHkoaW5wdXQsIFsgZSwgITAgXSkpLCB1bmRvVmFsdWUgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmVFdmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlRW50ZXIgPSAhMSwgb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKSwgbnB0VmFsdWUgPSBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIG5wdFZhbHVlICE9PSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiKSAmJiBcIlwiICE9PSBucHRWYWx1ZSAmJiAoLTEgPT09IGdldExhc3RWYWxpZFBvc2l0aW9uKCkgJiYgbnB0VmFsdWUgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQnVmZmVyKGlucHV0LCBidWZmZXIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2tFdmVudDogZnVuY3Rpb24oZSwgdGFiYmVkKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZG9SYWRpeEZvY3VzKGNsaWNrUG9zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2cHMgPSBnZXRNYXNrU2V0KCkudmFsaWRQb3NpdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodnBzW2NsaWNrUG9zXSA9PT0gdW5kZWZpbmVkIHx8IHZwc1tjbGlja1Bvc10uaW5wdXQgPT09IGdldFBsYWNlaG9sZGVyKGNsaWNrUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGlja1BvcyA8IHNlZWtOZXh0KC0xKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFBvcyA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIGdldEJ1ZmZlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZwIGluIHZwcykgaWYgKHJhZGl4UG9zIDwgdnAgJiYgdnBzW3ZwXS5pbnB1dCAhPT0gZ2V0UGxhY2Vob2xkZXIodnApKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkQ2FyZXQgPSBjYXJldChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiYmVkICYmIChpc1JUTCA/IHNlbGVjdGVkQ2FyZXQuZW5kID0gc2VsZWN0ZWRDYXJldC5iZWdpbiA6IHNlbGVjdGVkQ2FyZXQuYmVnaW4gPSBzZWxlY3RlZENhcmV0LmVuZCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXJldC5iZWdpbiA9PT0gc2VsZWN0ZWRDYXJldC5lbmQpIHN3aXRjaCAob3B0cy5wb3NpdGlvbkNhcmV0T25DbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyYWRpeEZvY3VzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvUmFkaXhGb2N1cyhzZWxlY3RlZENhcmV0LmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZXQoaW5wdXQsIG9wdHMubnVtZXJpY0lucHV0ID8gc2Vla05leHQocmFkaXhQb3MpIDogcmFkaXhQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2xpY2tQb3NpdGlvbiA9IHNlbGVjdGVkQ2FyZXQuYmVnaW4sIGx2Y2xpY2tQb3NpdGlvbiA9IGdldExhc3RWYWxpZFBvc2l0aW9uKGNsaWNrUG9zaXRpb24sICEwKSwgbGFzdFBvc2l0aW9uID0gc2Vla05leHQobHZjbGlja1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tQb3NpdGlvbiA8IGxhc3RQb3NpdGlvbikgY2FyZXQoaW5wdXQsIGlzTWFzayhjbGlja1Bvc2l0aW9uLCAhMCkgfHwgaXNNYXNrKGNsaWNrUG9zaXRpb24gLSAxLCAhMCkgPyBjbGlja1Bvc2l0aW9uIDogc2Vla05leHQoY2xpY2tQb3NpdGlvbikpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx2cCA9IGdldE1hc2tTZXQoKS52YWxpZFBvc2l0aW9uc1tsdmNsaWNrUG9zaXRpb25dLCB0dCA9IGdldFRlc3RUZW1wbGF0ZShsYXN0UG9zaXRpb24sIGx2cCA/IGx2cC5tYXRjaC5sb2NhdG9yIDogdW5kZWZpbmVkLCBsdnApLCBwbGFjZWhvbGRlciA9IGdldFBsYWNlaG9sZGVyKGxhc3RQb3NpdGlvbiwgdHQubWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJcIiAhPT0gcGxhY2Vob2xkZXIgJiYgZ2V0QnVmZmVyKClbbGFzdFBvc2l0aW9uXSAhPT0gcGxhY2Vob2xkZXIgJiYgITAgIT09IHR0Lm1hdGNoLm9wdGlvbmFsUXVhbnRpZmllciAmJiAhMCAhPT0gdHQubWF0Y2gubmV3QmxvY2tNYXJrZXIgfHwgIWlzTWFzayhsYXN0UG9zaXRpb24sICEwKSAmJiB0dC5tYXRjaC5kZWYgPT09IHBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UG9zID0gc2Vla05leHQobGFzdFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGlja1Bvc2l0aW9uID49IG5ld1BvcyB8fCBjbGlja1Bvc2l0aW9uID09PSBsYXN0UG9zaXRpb24pICYmIChsYXN0UG9zaXRpb24gPSBuZXdQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCBsYXN0UG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRibGNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0KGlucHV0LCAwLCBzZWVrTmV4dChnZXRMYXN0VmFsaWRQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3V0RXZlbnQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLCAkaW5wdXQgPSAkKGlucHV0KSwgcG9zID0gY2FyZXQoaW5wdXQpLCBldiA9IGUub3JpZ2luYWxFdmVudCB8fCBlLCBjbGlwYm9hcmREYXRhID0gd2luZG93LmNsaXBib2FyZERhdGEgfHwgZXYuY2xpcGJvYXJkRGF0YSwgY2xpcERhdGEgPSBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKHBvcy5lbmQsIHBvcy5iZWdpbikgOiBnZXRCdWZmZXIoKS5zbGljZShwb3MuYmVnaW4sIHBvcy5lbmQpO1xuICAgICAgICAgICAgICAgIGNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHRcIiwgaXNSVEwgPyBjbGlwRGF0YS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IGNsaXBEYXRhLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCAmJiBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiksIGhhbmRsZVJlbW92ZShpbnB1dCwgSW5wdXRtYXNrLmtleUNvZGUuREVMRVRFLCBwb3MpLCBcbiAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCksIGdldE1hc2tTZXQoKS5wLCBlLCB1bmRvVmFsdWUgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikpLCBcbiAgICAgICAgICAgICAgICBpbnB1dC5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgPT09IGdldEJ1ZmZlclRlbXBsYXRlKCkuam9pbihcIlwiKSAmJiAkaW5wdXQudHJpZ2dlcihcImNsZWFyZWRcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmx1ckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyksIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBucHRWYWx1ZSA9IGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSwgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgXCJcIiAhPT0gbnB0VmFsdWUgJiYgKG9wdHMuY2xlYXJNYXNrT25Mb3N0Rm9jdXMgJiYgKC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIG5wdFZhbHVlID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgPyBidWZmZXIgPSBbXSA6IGNsZWFyT3B0aW9uYWxUYWlsKGJ1ZmZlcikpLCBcbiAgICAgICAgICAgICAgICAgICAgITEgPT09IGlzQ29tcGxldGUoYnVmZmVyKSAmJiAoc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCksIG9wdHMuY2xlYXJJbmNvbXBsZXRlICYmIChyZXNldE1hc2tTZXQoKSwgYnVmZmVyID0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyA/IFtdIDogZ2V0QnVmZmVyVGVtcGxhdGUoKS5zbGljZSgpKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihpbnB1dCwgYnVmZmVyLCB1bmRlZmluZWQsIGUpKSwgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICh1bmRvVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC50cmlnZ2VyKFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlckV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBtb3VzZUVudGVyID0gITAsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0ICYmIG9wdHMuc2hvd01hc2tPbkhvdmVyICYmIGlucHV0LmlucHV0bWFzay5fdmFsdWVHZXQoKSAhPT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKSAmJiB3cml0ZUJ1ZmZlcihpbnB1dCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1pdEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlICE9PSBnZXRCdWZmZXIoKS5qb2luKFwiXCIpICYmICRlbC50cmlnZ2VyKFwiY2hhbmdlXCIpLCBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIC0xID09PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpICYmIGVsLmlucHV0bWFzay5fdmFsdWVHZXQgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCgpID09PSBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIikgJiYgZWwuaW5wdXRtYXNrLl92YWx1ZVNldChcIlwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZW1vdmVNYXNrT25TdWJtaXQgJiYgKGVsLmlucHV0bWFzay5fdmFsdWVTZXQoZWwuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSwgITApLCBcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgZ2V0QnVmZmVyKCkpO1xuICAgICAgICAgICAgICAgIH0sIDApKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXNldEV2ZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlZnJlc2hWYWx1ZSA9ICEwLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkZWwudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBJbnB1dG1hc2sucHJvdG90eXBlLnBvc2l0aW9uQ29sb3JNYXNrID0gZnVuY3Rpb24oaW5wdXQsIHRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5sZWZ0ID0gdGVtcGxhdGUub2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZhbHVlQnVmZmVyO1xuICAgICAgICBpZiAoYWN0aW9uT2JqICE9PSB1bmRlZmluZWQpIHN3aXRjaCAoYWN0aW9uT2JqLmFjdGlvbikge1xuICAgICAgICAgIGNhc2UgXCJpc0NvbXBsZXRlXCI6XG4gICAgICAgICAgICByZXR1cm4gZWwgPSBhY3Rpb25PYmouZWwsIGlzQ29tcGxldGUoZ2V0QnVmZmVyKCkpO1xuXG4gICAgICAgICAgY2FzZSBcInVubWFza2VkdmFsdWVcIjpcbiAgICAgICAgICAgIHJldHVybiBlbCAhPT0gdW5kZWZpbmVkICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZSwgXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlciA9ICgkLmlzRnVuY3Rpb24ob3B0cy5vbkJlZm9yZU1hc2spID8gb3B0cy5vbkJlZm9yZU1hc2suY2FsbChpbnB1dG1hc2ssIHZhbHVlQnVmZmVyLCBvcHRzKSB8fCB2YWx1ZUJ1ZmZlciA6IHZhbHVlQnVmZmVyKS5zcGxpdChcIlwiKSwgXG4gICAgICAgICAgICBjaGVja1ZhbCh1bmRlZmluZWQsICExLCAhMSwgaXNSVEwgPyB2YWx1ZUJ1ZmZlci5yZXZlcnNlKCkgOiB2YWx1ZUJ1ZmZlciksICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlV3JpdGUpICYmIG9wdHMub25CZWZvcmVXcml0ZS5jYWxsKGlucHV0bWFzaywgdW5kZWZpbmVkLCBnZXRCdWZmZXIoKSwgMCwgb3B0cykpLCBcbiAgICAgICAgICAgIHVubWFza2VkdmFsdWUoZWwpO1xuXG4gICAgICAgICAgY2FzZSBcIm1hc2tcIjpcbiAgICAgICAgICAgICFmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vZmYoZWxlbSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3VwcG9ydGVkID0gZnVuY3Rpb24oaW5wdXQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUeXBlID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSwgaXNTdXBwb3J0ZWQgPSBcIklOUFVUXCIgPT09IGlucHV0LnRhZ05hbWUgJiYgLTEgIT09ICQuaW5BcnJheShlbGVtZW50VHlwZSwgb3B0cy5zdXBwb3J0c0lucHV0VHlwZSkgfHwgaW5wdXQuaXNDb250ZW50RWRpdGFibGUgfHwgXCJURVhUQVJFQVwiID09PSBpbnB1dC50YWdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU3VwcG9ydGVkKSBpZiAoXCJJTlBVVFwiID09PSBpbnB1dC50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnRUeXBlKSwgaXNTdXBwb3J0ZWQgPSBcInRleHRcIiA9PT0gZWwudHlwZSwgZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaXNTdXBwb3J0ZWQgPSBcInBhcnRpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExICE9PSBpc1N1cHBvcnRlZCA/IGZ1bmN0aW9uKG5wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0bWFzayA/IHRoaXMuaW5wdXRtYXNrLm9wdHMuYXV0b1VubWFzayA/IHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSA6IC0xICE9PSBnZXRMYXN0VmFsaWRQb3NpdGlvbigpIHx8ICEwICE9PSBvcHRzLm51bGxhYmxlID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcyAmJiBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzID8gKGlzUlRMID8gY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkucmV2ZXJzZSgpIDogY2xlYXJPcHRpb25hbFRhaWwoZ2V0QnVmZmVyKCkuc2xpY2UoKSkpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMpIDogXCJcIiA6IHZhbHVlR2V0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR0ZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldC5jYWxsKHRoaXMsIHZhbHVlKSwgdGhpcy5pbnB1dG1hc2sgJiYgJCh0aGlzKS50cmlnZ2VyKFwic2V0dmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVHZXQsIHZhbHVlU2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMubm9WYWx1ZVBhdGNoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiAoT2JqZWN0LmdldFByb3RvdHlwZU9mID0gXCJvYmplY3RcIiA9PSB0eXBlb2YgXCJ0ZXN0XCIuX19wcm90b19fID8gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5fX3Byb3RvX187XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3BlcnR5ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YobnB0KSwgXCJ2YWx1ZVwiKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcGVydHkgJiYgdmFsdWVQcm9wZXJ0eS5nZXQgJiYgdmFsdWVQcm9wZXJ0eS5zZXQgPyAodmFsdWVHZXQgPSB2YWx1ZVByb3BlcnR5LmdldCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVNldCA9IHZhbHVlUHJvcGVydHkuc2V0LCBPYmplY3QuZGVmaW5lUHJvcGVydHkobnB0LCBcInZhbHVlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGdldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IHNldHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkgOiBcIklOUFVUXCIgIT09IG5wdC50YWdOYW1lICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdmFsdWVTZXQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucHQsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldDogc2V0dGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGRvY3VtZW50Ll9fbG9va3VwR2V0dGVyX18gJiYgbnB0Ll9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiAodmFsdWVHZXQgPSBucHQuX19sb29rdXBHZXR0ZXJfXyhcInZhbHVlXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTZXQgPSBucHQuX19sb29rdXBTZXR0ZXJfXyhcInZhbHVlXCIpLCBucHQuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGdldHRlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIHNldHRlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucHQuaW5wdXRtYXNrLl9fdmFsdWVHZXQgPSB2YWx1ZUdldCwgbnB0LmlucHV0bWFzay5fX3ZhbHVlU2V0ID0gdmFsdWVTZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wdC5pbnB1dG1hc2suX3ZhbHVlR2V0ID0gZnVuY3Rpb24ob3ZlcnJ1bGVSVEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzUlRMICYmICEwICE9PSBvdmVycnVsZVJUTCA/IHZhbHVlR2V0LmNhbGwodGhpcy5lbCkuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiB2YWx1ZUdldC5jYWxsKHRoaXMuZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIG5wdC5pbnB1dG1hc2suX3ZhbHVlU2V0ID0gZnVuY3Rpb24odmFsdWUsIG92ZXJydWxlUlRMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU2V0LmNhbGwodGhpcy5lbCwgbnVsbCA9PT0gdmFsdWUgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiAhMCAhPT0gb3ZlcnJ1bGVSVEwgJiYgaXNSVEwgPyB2YWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSA6IHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZUdldCA9PT0gdW5kZWZpbmVkICYmICh2YWx1ZUdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB2YWx1ZVNldCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbih0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLnZhbEhvb2tzICYmICgkLnZhbEhvb2tzW3R5cGVdID09PSB1bmRlZmluZWQgfHwgITAgIT09ICQudmFsSG9va3NbdHlwZV0uaW5wdXRtYXNrcGF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaG9va0dldCA9ICQudmFsSG9va3NbdHlwZV0gJiYgJC52YWxIb29rc1t0eXBlXS5nZXQgPyAkLnZhbEhvb2tzW3R5cGVdLmdldCA6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHZhbGhvb2tTZXQgPSAkLnZhbEhvb2tzW3R5cGVdICYmICQudmFsSG9va3NbdHlwZV0uc2V0ID8gJC52YWxIb29rc1t0eXBlXS5zZXQgOiBmdW5jdGlvbihlbGVtLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlID0gdmFsdWUsIGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC52YWxIb29rc1t0eXBlXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0uaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pbnB1dG1hc2sub3B0cy5hdXRvVW5tYXNrKSByZXR1cm4gZWxlbS5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgIT09IGdldExhc3RWYWxpZFBvc2l0aW9uKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBlbGVtLmlucHV0bWFzay5tYXNrc2V0LnZhbGlkUG9zaXRpb25zKSB8fCAhMCAhPT0gb3B0cy5udWxsYWJsZSA/IHJlc3VsdCA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGhvb2tHZXQoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQsICRlbGVtID0gJChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCA9IHZhbGhvb2tTZXQoZWxlbSwgdmFsdWUpLCBlbGVtLmlucHV0bWFzayAmJiAkZWxlbS50cmlnZ2VyKFwic2V0dmFsdWVcIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dG1hc2twYXRjaDogITBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KG5wdC50eXBlKSwgZnVuY3Rpb24obnB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24obnB0LCBcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5wdXQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dG1hc2suX3ZhbHVlR2V0KCkgIT09IGdldEJ1ZmZlcigpLmpvaW4oXCJcIikgJiYgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfShucHQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfShpbnB1dCkgOiBpbnB1dC5pbnB1dG1hc2sgPSB1bmRlZmluZWQsIGlzU3VwcG9ydGVkO1xuICAgICAgICAgICAgICAgIH0oZWxlbSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgaWYgKCExICE9PSBpc1N1cHBvcnRlZCAmJiAoZWwgPSBlbGVtLCAkZWwgPSAkKGVsKSwgbWF4TGVuZ3RoID0gZWwgIT09IHVuZGVmaW5lZCA/IGVsLm1heExlbmd0aCA6IHVuZGVmaW5lZCwgXG4gICAgICAgICAgICAgICAgLTEgPT09IG1heExlbmd0aCAmJiAobWF4TGVuZ3RoID0gdW5kZWZpbmVkKSwgITAgPT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBhbmRyb2lkICYmIChlbC5oYXNPd25Qcm9wZXJ0eShcImlucHV0bW9kZVwiKSAmJiAoZWwuaW5wdXRtb2RlID0gb3B0cy5pbnB1dG1vZGUsIGVsLnNldEF0dHJpYnV0ZShcImlucHV0bW9kZVwiLCBvcHRzLmlucHV0bW9kZSkpLCBcbiAgICAgICAgICAgICAgICBcInJ0Zm1cIiA9PT0gb3B0cy5hbmRyb2lkSGFjayAmJiAoITAgIT09IG9wdHMuY29sb3JNYXNrICYmIGluaXRpYWxpemVDb2xvck1hc2soZWwpLCBcbiAgICAgICAgICAgICAgICBlbC50eXBlID0gXCJwYXNzd29yZFwiKSksICEwID09PSBpc1N1cHBvcnRlZCAmJiAoRXZlbnRSdWxlci5vbihlbCwgXCJzdWJtaXRcIiwgRXZlbnRIYW5kbGVycy5zdWJtaXRFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwicmVzZXRcIiwgRXZlbnRIYW5kbGVycy5yZXNldEV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJtb3VzZWVudGVyXCIsIEV2ZW50SGFuZGxlcnMubW91c2VlbnRlckV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJibHVyXCIsIEV2ZW50SGFuZGxlcnMuYmx1ckV2ZW50KSwgRXZlbnRSdWxlci5vbihlbCwgXCJmb2N1c1wiLCBFdmVudEhhbmRsZXJzLmZvY3VzRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcIm1vdXNlbGVhdmVcIiwgRXZlbnRIYW5kbGVycy5tb3VzZWxlYXZlRXZlbnQpLCAhMCAhPT0gb3B0cy5jb2xvck1hc2sgJiYgRXZlbnRSdWxlci5vbihlbCwgXCJjbGlja1wiLCBFdmVudEhhbmRsZXJzLmNsaWNrRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImRibGNsaWNrXCIsIEV2ZW50SGFuZGxlcnMuZGJsY2xpY2tFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwicGFzdGVcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJkcmFnZHJvcFwiLCBFdmVudEhhbmRsZXJzLnBhc3RlRXZlbnQpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImRyb3BcIiwgRXZlbnRIYW5kbGVycy5wYXN0ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjdXRcIiwgRXZlbnRIYW5kbGVycy5jdXRFdmVudCksIEV2ZW50UnVsZXIub24oZWwsIFwiY29tcGxldGVcIiwgb3B0cy5vbmNvbXBsZXRlKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJpbmNvbXBsZXRlXCIsIG9wdHMub25pbmNvbXBsZXRlKSwgRXZlbnRSdWxlci5vbihlbCwgXCJjbGVhcmVkXCIsIG9wdHMub25jbGVhcmVkKSwgXG4gICAgICAgICAgICAgICAgYW5kcm9pZCB8fCAhMCA9PT0gb3B0cy5pbnB1dEV2ZW50T25seSA/IGVsLnJlbW92ZUF0dHJpYnV0ZShcIm1heExlbmd0aFwiKSA6IChFdmVudFJ1bGVyLm9uKGVsLCBcImtleWRvd25cIiwgRXZlbnRIYW5kbGVycy5rZXlkb3duRXZlbnQpLCBcbiAgICAgICAgICAgICAgICBFdmVudFJ1bGVyLm9uKGVsLCBcImtleXByZXNzXCIsIEV2ZW50SGFuZGxlcnMua2V5cHJlc3NFdmVudCkpLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uc3RhcnRcIiwgJC5ub29wKSwgXG4gICAgICAgICAgICAgICAgRXZlbnRSdWxlci5vbihlbCwgXCJjb21wb3NpdGlvbnVwZGF0ZVwiLCAkLm5vb3ApLCBFdmVudFJ1bGVyLm9uKGVsLCBcImNvbXBvc2l0aW9uZW5kXCIsICQubm9vcCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwia2V5dXBcIiwgJC5ub29wKSwgRXZlbnRSdWxlci5vbihlbCwgXCJpbnB1dFwiLCBFdmVudEhhbmRsZXJzLmlucHV0RmFsbEJhY2tFdmVudCksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub24oZWwsIFwiYmVmb3JlaW5wdXRcIiwgJC5ub29wKSksIEV2ZW50UnVsZXIub24oZWwsIFwic2V0dmFsdWVcIiwgRXZlbnRIYW5kbGVycy5zZXRWYWx1ZUV2ZW50KSwgXG4gICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gZ2V0QnVmZmVyVGVtcGxhdGUoKS5qb2luKFwiXCIpLCBcIlwiICE9PSBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSB8fCAhMSA9PT0gb3B0cy5jbGVhck1hc2tPbkxvc3RGb2N1cyB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9ICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCksIG9wdHMpIHx8IGVsLmlucHV0bWFzay5fdmFsdWVHZXQoITApIDogZWwuaW5wdXRtYXNrLl92YWx1ZUdldCghMCk7XG4gICAgICAgICAgICAgICAgICAgIFwiXCIgIT09IGluaXRpYWxWYWx1ZSAmJiBjaGVja1ZhbChlbCwgITAsICExLCBpc1JUTCA/IGluaXRpYWxWYWx1ZS5zcGxpdChcIlwiKS5yZXZlcnNlKCkgOiBpbml0aWFsVmFsdWUuc3BsaXQoXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZ2V0QnVmZmVyKCkuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdW5kb1ZhbHVlID0gYnVmZmVyLmpvaW4oXCJcIiksICExID09PSBpc0NvbXBsZXRlKGJ1ZmZlcikgJiYgb3B0cy5jbGVhckluY29tcGxldGUgJiYgcmVzZXRNYXNrU2V0KCksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmNsZWFyTWFza09uTG9zdEZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGVsICYmICgtMSA9PT0gZ2V0TGFzdFZhbGlkUG9zaXRpb24oKSA/IGJ1ZmZlciA9IFtdIDogY2xlYXJPcHRpb25hbFRhaWwoYnVmZmVyKSksIFxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcihlbCwgYnVmZmVyKSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwgJiYgY2FyZXQoZWwsIHNlZWtOZXh0KGdldExhc3RWYWxpZFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImZvcm1hdFwiOlxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlQnVmZmVyID0gKCQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKGlucHV0bWFzaywgYWN0aW9uT2JqLnZhbHVlLCBvcHRzKSB8fCBhY3Rpb25PYmoudmFsdWUgOiBhY3Rpb25PYmoudmFsdWUpLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgIGNoZWNrVmFsKHVuZGVmaW5lZCwgITAsICExLCBpc1JUTCA/IHZhbHVlQnVmZmVyLnJldmVyc2UoKSA6IHZhbHVlQnVmZmVyKSwgYWN0aW9uT2JqLm1ldGFkYXRhID8ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpLFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICAgICAgfSwgbWFza3NldCwgb3B0cylcbiAgICAgICAgICAgIH0gOiBpc1JUTCA/IGdldEJ1ZmZlcigpLnNsaWNlKCkucmV2ZXJzZSgpLmpvaW4oXCJcIikgOiBnZXRCdWZmZXIoKS5qb2luKFwiXCIpO1xuXG4gICAgICAgICAgY2FzZSBcImlzVmFsaWRcIjpcbiAgICAgICAgICAgIGFjdGlvbk9iai52YWx1ZSA/ICh2YWx1ZUJ1ZmZlciA9IGFjdGlvbk9iai52YWx1ZS5zcGxpdChcIlwiKSwgY2hlY2tWYWwodW5kZWZpbmVkLCAhMCwgITAsIGlzUlRMID8gdmFsdWVCdWZmZXIucmV2ZXJzZSgpIDogdmFsdWVCdWZmZXIpKSA6IGFjdGlvbk9iai52YWx1ZSA9IGdldEJ1ZmZlcigpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBidWZmZXIgPSBnZXRCdWZmZXIoKSwgcmwgPSBkZXRlcm1pbmVMYXN0UmVxdWlyZWRQb3NpdGlvbigpLCBsbWliID0gYnVmZmVyLmxlbmd0aCAtIDE7IGxtaWIgPiBybCAmJiAhaXNNYXNrKGxtaWIpOyBsbWliLS0pIDtcbiAgICAgICAgICAgIHJldHVybiBidWZmZXIuc3BsaWNlKHJsLCBsbWliICsgMSAtIHJsKSwgaXNDb21wbGV0ZShidWZmZXIpICYmIGFjdGlvbk9iai52YWx1ZSA9PT0gZ2V0QnVmZmVyKCkuam9pbihcIlwiKTtcblxuICAgICAgICAgIGNhc2UgXCJnZXRlbXB0eW1hc2tcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCdWZmZXJUZW1wbGF0ZSgpLmpvaW4oXCJcIik7XG5cbiAgICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwuaW5wdXRtYXNrKSB7XG4gICAgICAgICAgICAgICAgJGVsID0gJChlbCksIGVsLmlucHV0bWFzay5fdmFsdWVTZXQob3B0cy5hdXRvVW5tYXNrID8gdW5tYXNrZWR2YWx1ZShlbCkgOiBlbC5pbnB1dG1hc2suX3ZhbHVlR2V0KCEwKSksIFxuICAgICAgICAgICAgICAgIEV2ZW50UnVsZXIub2ZmKGVsKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsKSwgXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWwsIFwidmFsdWVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0LFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgICAgICAgICAgfSkgOiBkb2N1bWVudC5fX2xvb2t1cEdldHRlcl9fICYmIGVsLl9fbG9va3VwR2V0dGVyX18oXCJ2YWx1ZVwiKSAmJiBlbC5pbnB1dG1hc2suX192YWx1ZUdldCAmJiAoZWwuX19kZWZpbmVHZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlR2V0KSwgXG4gICAgICAgICAgICAgICAgZWwuX19kZWZpbmVTZXR0ZXJfXyhcInZhbHVlXCIsIGVsLmlucHV0bWFzay5fX3ZhbHVlU2V0KSksIGVsLmlucHV0bWFzayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbDtcblxuICAgICAgICAgIGNhc2UgXCJnZXRtZXRhZGF0YVwiOlxuICAgICAgICAgICAgaWYgKCQuaXNBcnJheShtYXNrc2V0Lm1ldGFkYXRhKSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXNrVGFyZ2V0ID0gZ2V0TWFza1RlbXBsYXRlKCEwLCAwLCAhMSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJC5lYWNoKG1hc2tzZXQubWV0YWRhdGEsIGZ1bmN0aW9uKG5keCwgbXRkdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobXRkdC5tYXNrID09PSBtYXNrVGFyZ2V0KSByZXR1cm4gbWFza1RhcmdldCA9IG10ZHQsICExO1xuICAgICAgICAgICAgICAgIH0pLCBtYXNrVGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc2tzZXQubWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudCwgbW9iaWxlID0gL21vYmlsZS9pLnRlc3QodWEpLCBpZW1vYmlsZSA9IC9pZW1vYmlsZS9pLnRlc3QodWEpLCBpcGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSkgJiYgIWllbW9iaWxlLCBhbmRyb2lkID0gL2FuZHJvaWQvaS50ZXN0KHVhKSAmJiAhaWVtb2JpbGU7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUgPSB7XG4gICAgICAgIGRhdGFBdHRyaWJ1dGU6IFwiZGF0YS1pbnB1dG1hc2tcIixcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIixcbiAgICAgICAgICAgIG9wdGlvbmFsbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiW1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJdXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBxdWFudGlmaWVybWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwie1wiLFxuICAgICAgICAgICAgICAgIGVuZDogXCJ9XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cG1hcmtlcjoge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIihcIixcbiAgICAgICAgICAgICAgICBlbmQ6IFwiKVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0ZXJuYXRvcm1hcmtlcjogXCJ8XCIsXG4gICAgICAgICAgICBlc2NhcGVDaGFyOiBcIlxcXFxcIixcbiAgICAgICAgICAgIG1hc2s6IG51bGwsXG4gICAgICAgICAgICByZWdleDogbnVsbCxcbiAgICAgICAgICAgIG9uY29tcGxldGU6ICQubm9vcCxcbiAgICAgICAgICAgIG9uaW5jb21wbGV0ZTogJC5ub29wLFxuICAgICAgICAgICAgb25jbGVhcmVkOiAkLm5vb3AsXG4gICAgICAgICAgICByZXBlYXQ6IDAsXG4gICAgICAgICAgICBncmVlZHk6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICByZW1vdmVNYXNrT25TdWJtaXQ6ICExLFxuICAgICAgICAgICAgY2xlYXJNYXNrT25Mb3N0Rm9jdXM6ICEwLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICExLFxuICAgICAgICAgICAgYWxpYXM6IG51bGwsXG4gICAgICAgICAgICBvbktleURvd246ICQubm9vcCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogbnVsbCxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaXNGdW5jdGlvbihvcHRzLm9uQmVmb3JlTWFzaykgPyBvcHRzLm9uQmVmb3JlTWFzay5jYWxsKHRoaXMsIHBhc3RlZFZhbHVlLCBvcHRzKSA6IHBhc3RlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlV3JpdGU6IG51bGwsXG4gICAgICAgICAgICBvblVuTWFzazogbnVsbCxcbiAgICAgICAgICAgIHNob3dNYXNrT25Gb2N1czogITAsXG4gICAgICAgICAgICBzaG93TWFza09uSG92ZXI6ICEwLFxuICAgICAgICAgICAgb25LZXlWYWxpZGF0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBza2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyOiBcIiBcIixcbiAgICAgICAgICAgIG51bWVyaWNJbnB1dDogITEsXG4gICAgICAgICAgICByaWdodEFsaWduOiAhMSxcbiAgICAgICAgICAgIHVuZG9PbkVzY2FwZTogITAsXG4gICAgICAgICAgICByYWRpeFBvaW50OiBcIlwiLFxuICAgICAgICAgICAgcmFkaXhQb2ludERlZmluaXRpb25TeW1ib2w6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIlwiLFxuICAgICAgICAgICAga2VlcFN0YXRpYzogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FyZXRPblRhYjogITAsXG4gICAgICAgICAgICB0YWJUaHJvdWdoOiAhMSxcbiAgICAgICAgICAgIHN1cHBvcnRzSW5wdXRUeXBlOiBbIFwidGV4dFwiLCBcInRlbFwiLCBcInBhc3N3b3JkXCIgXSxcbiAgICAgICAgICAgIGlnbm9yYWJsZXM6IFsgOCwgOSwgMTMsIDE5LCAyNywgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0NSwgNDYsIDkzLCAxMTIsIDExMywgMTE0LCAxMTUsIDExNiwgMTE3LCAxMTgsIDExOSwgMTIwLCAxMjEsIDEyMiwgMTIzLCAwLCAyMjkgXSxcbiAgICAgICAgICAgIGlzQ29tcGxldGU6IG51bGwsXG4gICAgICAgICAgICBjYW5DbGVhclBvc2l0aW9uOiAkLm5vb3AsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBudWxsLFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IG51bGwsXG4gICAgICAgICAgICBzdGF0aWNEZWZpbml0aW9uU3ltYm9sOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBqaXRNYXNraW5nOiAhMSxcbiAgICAgICAgICAgIG51bGxhYmxlOiAhMCxcbiAgICAgICAgICAgIGlucHV0RXZlbnRPbmx5OiAhMSxcbiAgICAgICAgICAgIG5vVmFsdWVQYXRjaGluZzogITEsXG4gICAgICAgICAgICBwb3NpdGlvbkNhcmV0T25DbGljazogXCJsdnBcIixcbiAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ2ZXJiYXRpbVwiLFxuICAgICAgICAgICAgY29sb3JNYXNrOiAhMSxcbiAgICAgICAgICAgIGFuZHJvaWRIYWNrOiAhMSxcbiAgICAgICAgICAgIGltcG9ydERhdGFBdHRyaWJ1dGVzOiAhMFxuICAgICAgICB9LFxuICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOVxcdWZmMTEtXFx1ZmYxOV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtWmEtelxcdTA0MTAtXFx1MDQ0ZlxcdTA0MDFcXHUwNDUxXFx4YzAtXFx4ZmZcXHhiNV1cIixcbiAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uU3ltYm9sOiBcIipcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiKlwiOiB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlcXHVmZjExLVxcdWZmMTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXNlczoge30sXG4gICAgICAgIG1hc2tzQ2FjaGU6IHt9LFxuICAgICAgICBtYXNrOiBmdW5jdGlvbihlbGVtcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0QXR0cmlidXRlT3B0aW9ucyhucHQsIG9wdHMsIHVzZXJPcHRpb25zLCBkYXRhQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW1wb3J0T3B0aW9uKG9wdGlvbiwgb3B0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBudWxsICE9PSAob3B0aW9uRGF0YSA9IG9wdGlvbkRhdGEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbkRhdGEgOiBucHQuZ2V0QXR0cmlidXRlKGRhdGFBdHRyaWJ1dGUgKyBcIi1cIiArIG9wdGlvbikpICYmIChcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25EYXRhICYmICgwID09PSBvcHRpb24uaW5kZXhPZihcIm9uXCIpID8gb3B0aW9uRGF0YSA9IHdpbmRvd1tvcHRpb25EYXRhXSA6IFwiZmFsc2VcIiA9PT0gb3B0aW9uRGF0YSA/IG9wdGlvbkRhdGEgPSAhMSA6IFwidHJ1ZVwiID09PSBvcHRpb25EYXRhICYmIChvcHRpb25EYXRhID0gITApKSwgXG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcHRpb25zW29wdGlvbl0gPSBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEwID09PSBvcHRzLmltcG9ydERhdGFBdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24sIGRhdGFvcHRpb25zLCBvcHRpb25EYXRhLCBwLCBhdHRyT3B0aW9ucyA9IG5wdC5nZXRBdHRyaWJ1dGUoZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyT3B0aW9ucyAmJiBcIlwiICE9PSBhdHRyT3B0aW9ucyAmJiAoYXR0ck9wdGlvbnMgPSBhdHRyT3B0aW9ucy5yZXBsYWNlKG5ldyBSZWdFeHAoXCInXCIsIFwiZ1wiKSwgJ1wiJyksIFxuICAgICAgICAgICAgICAgICAgICBkYXRhb3B0aW9ucyA9IEpTT04ucGFyc2UoXCJ7XCIgKyBhdHRyT3B0aW9ucyArIFwifVwiKSksIGRhdGFvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwIGluIGRhdGFvcHRpb25zKSBpZiAoXCJhbGlhc1wiID09PSBwLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gZGF0YW9wdGlvbnNbcF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0T3B0aW9uKFwiYWxpYXNcIiwgb3B0aW9uRGF0YSksIHVzZXJPcHRpb25zLmFsaWFzICYmIHJlc29sdmVBbGlhcyh1c2VyT3B0aW9ucy5hbGlhcywgdXNlck9wdGlvbnMsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG9wdGlvbiBpbiBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25EYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAocCBpbiBkYXRhb3B0aW9ucykgaWYgKHAudG9Mb3dlckNhc2UoKSA9PT0gb3B0aW9uLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRGF0YSA9IGRhdGFvcHRpb25zW3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRPcHRpb24ob3B0aW9uLCBvcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gJC5leHRlbmQoITAsIG9wdHMsIHVzZXJPcHRpb25zKSwgKFwicnRsXCIgPT09IG5wdC5kaXIgfHwgb3B0cy5yaWdodEFsaWduKSAmJiAobnB0LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIiksIFxuICAgICAgICAgICAgICAgIChcInJ0bFwiID09PSBucHQuZGlyIHx8IG9wdHMubnVtZXJpY0lucHV0KSAmJiAobnB0LmRpciA9IFwibHRyXCIsIG5wdC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXJcIiksIFxuICAgICAgICAgICAgICAgIG9wdHMuaXNSVEwgPSAhMCksIG9wdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZWxlbXMgJiYgKGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbXMpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpKSwgXG4gICAgICAgICAgICBlbGVtcyA9IGVsZW1zLm5vZGVOYW1lID8gWyBlbGVtcyBdIDogZWxlbXMsICQuZWFjaChlbGVtcywgZnVuY3Rpb24obmR4LCBlbCkge1xuICAgICAgICAgICAgICAgIHZhciBzY29wZWRPcHRzID0gJC5leHRlbmQoITAsIHt9LCB0aGF0Lm9wdHMpO1xuICAgICAgICAgICAgICAgIGltcG9ydEF0dHJpYnV0ZU9wdGlvbnMoZWwsIHNjb3BlZE9wdHMsICQuZXh0ZW5kKCEwLCB7fSwgdGhhdC51c2VyT3B0aW9ucyksIHRoYXQuZGF0YUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tzZXQgPSBnZW5lcmF0ZU1hc2tTZXQoc2NvcGVkT3B0cywgdGhhdC5ub01hc2tzQ2FjaGUpO1xuICAgICAgICAgICAgICAgIG1hc2tzZXQgIT09IHVuZGVmaW5lZCAmJiAoZWwuaW5wdXRtYXNrICE9PSB1bmRlZmluZWQgJiYgKGVsLmlucHV0bWFzay5vcHRzLmF1dG9Vbm1hc2sgPSAhMCwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLnJlbW92ZSgpKSwgZWwuaW5wdXRtYXNrID0gbmV3IElucHV0bWFzayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgITApLCBcbiAgICAgICAgICAgICAgICBlbC5pbnB1dG1hc2sub3B0cyA9IHNjb3BlZE9wdHMsIGVsLmlucHV0bWFzay5ub01hc2tzQ2FjaGUgPSB0aGF0Lm5vTWFza3NDYWNoZSwgZWwuaW5wdXRtYXNrLnVzZXJPcHRpb25zID0gJC5leHRlbmQoITAsIHt9LCB0aGF0LnVzZXJPcHRpb25zKSwgXG4gICAgICAgICAgICAgICAgZWwuaW5wdXRtYXNrLmlzUlRMID0gc2NvcGVkT3B0cy5pc1JUTCB8fCBzY29wZWRPcHRzLm51bWVyaWNJbnB1dCwgZWwuaW5wdXRtYXNrLmVsID0gZWwsIFxuICAgICAgICAgICAgICAgIGVsLmlucHV0bWFzay5tYXNrc2V0ID0gbWFza3NldCwgJC5kYXRhKGVsLCBcIl9pbnB1dG1hc2tfb3B0c1wiLCBzY29wZWRPcHRzKSwgbWFza1Njb3BlLmNhbGwoZWwuaW5wdXRtYXNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJtYXNrXCJcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSwgZWxlbXMgJiYgZWxlbXNbMF0gPyBlbGVtc1swXS5pbnB1dG1hc2sgfHwgdGhpcyA6IHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjogZnVuY3Rpb24ob3B0aW9ucywgbm9yZW1hc2spIHtcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBvcHRpb25zID8gdGhpcy5vcHRzW29wdGlvbnNdIDogXCJvYmplY3RcIiA9PSB0eXBlb2Ygb3B0aW9ucyA/ICgkLmV4dGVuZCh0aGlzLnVzZXJPcHRpb25zLCBvcHRpb25zKSwgXG4gICAgICAgICAgICB0aGlzLmVsICYmICEwICE9PSBub3JlbWFzayAmJiB0aGlzLm1hc2sodGhpcy5lbCksIHRoaXMpIDogdm9pZCAwO1xuICAgICAgICB9LFxuICAgICAgICB1bm1hc2tlZHZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1bm1hc2tlZHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInJlbW92ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0ZW1wdHltYXNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiZ2V0ZW1wdHltYXNrXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYXNNYXNrZWRWYWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMub3B0cy5hdXRvVW5tYXNrO1xuICAgICAgICB9LFxuICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNDb21wbGV0ZVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0bWV0YWRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFza3NldCA9IHRoaXMubWFza3NldCB8fCBnZW5lcmF0ZU1hc2tTZXQodGhpcy5vcHRzLCB0aGlzLm5vTWFza3NDYWNoZSksIFxuICAgICAgICAgICAgbWFza1Njb3BlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJnZXRtZXRhZGF0YVwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNWYWxpZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc2tzZXQgPSB0aGlzLm1hc2tzZXQgfHwgZ2VuZXJhdGVNYXNrU2V0KHRoaXMub3B0cywgdGhpcy5ub01hc2tzQ2FjaGUpLCBcbiAgICAgICAgICAgIG1hc2tTY29wZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiaXNWYWxpZFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrc2V0ID0gdGhpcy5tYXNrc2V0IHx8IGdlbmVyYXRlTWFza1NldCh0aGlzLm9wdHMsIHRoaXMubm9NYXNrc0NhY2hlKSwgXG4gICAgICAgICAgICBtYXNrU2NvcGUuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhbmFseXNlTWFzazogZnVuY3Rpb24obWFzaywgcmVnZXhNYXNrLCBvcHRzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBNYXNrVG9rZW4oaXNHcm91cCwgaXNPcHRpb25hbCwgaXNRdWFudGlmaWVyLCBpc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXSwgdGhpcy5vcGVuR3JvdXAgPSBpc0dyb3VwIHx8ICExLCB0aGlzLmFsdGVybmF0b3JHcm91cCA9ICExLCB0aGlzLmlzR3JvdXAgPSBpc0dyb3VwIHx8ICExLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3B0aW9uYWwgPSBpc09wdGlvbmFsIHx8ICExLCB0aGlzLmlzUXVhbnRpZmllciA9IGlzUXVhbnRpZmllciB8fCAhMSwgdGhpcy5pc0FsdGVybmF0b3IgPSBpc0FsdGVybmF0b3IgfHwgITEsIFxuICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGVzdERlZmluaXRpb24obXRva2VuLCBlbGVtZW50LCBwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gIT09IHVuZGVmaW5lZCA/IHBvc2l0aW9uIDogbXRva2VuLm1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChyZWdleE1hc2spIDAgPT09IGVsZW1lbnQuaW5kZXhPZihcIltcIikgfHwgZXNjYXBlZCAmJiAvXFxcXGR8XFxcXHN8XFxcXHddL2kudGVzdChlbGVtZW50KSB8fCBcIi5cIiA9PT0gZWxlbWVudCA/IG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIGZuOiBuZXcgUmVnRXhwKGVsZW1lbnQsIG9wdHMuY2FzaW5nID8gXCJpXCIgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZGVmOiBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICB9KSA6IChlc2NhcGVkICYmIChlbGVtZW50ID0gZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDFdKSwgJC5lYWNoKGVsZW1lbnQuc3BsaXQoXCJcIiksIGZ1bmN0aW9uKG5keCwgbG1udCkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2TWF0Y2ggPSBtdG9rZW4ubWF0Y2hlc1twb3NpdGlvbiAtIDFdLCBtdG9rZW4ubWF0Y2hlcy5zcGxpY2UocG9zaXRpb24rKywgMCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm46IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0Jsb2NrTWFya2VyOiBwcmV2TWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBwcmV2TWF0Y2guZGVmICE9PSBsbW50ICYmIG51bGwgIT09IHByZXZNYXRjaC5mbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sIHx8IGxtbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogb3B0cy5zdGF0aWNEZWZpbml0aW9uU3ltYm9sICE9PSB1bmRlZmluZWQgPyBsbW50IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBsbW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pKSwgZXNjYXBlZCA9ICExOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hc2tkZWYgPSAob3B0cy5kZWZpbml0aW9ucyA/IG9wdHMuZGVmaW5pdGlvbnNbZWxlbWVudF0gOiB1bmRlZmluZWQpIHx8IElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXNrZGVmICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcmV2YWxpZGF0b3JzID0gbWFza2RlZi5wcmV2YWxpZGF0b3IsIHByZXZhbGlkYXRvcnNMID0gcHJldmFsaWRhdG9ycyA/IHByZXZhbGlkYXRvcnMubGVuZ3RoIDogMCwgaSA9IDE7IGkgPCBtYXNrZGVmLmNhcmRpbmFsaXR5OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmFsaWRhdG9yID0gcHJldmFsaWRhdG9yc0wgPj0gaSA/IHByZXZhbGlkYXRvcnNbaSAtIDFdIDogW10sIHZhbGlkYXRvciA9IHByZXZhbGlkYXRvci52YWxpZGF0b3IsIGNhcmRpbmFsaXR5ID0gcHJldmFsaWRhdG9yLmNhcmRpbmFsaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiB2YWxpZGF0b3IgPyBcInN0cmluZ1wiID09IHR5cGVvZiB2YWxpZGF0b3IgPyBuZXcgUmVnRXhwKHZhbGlkYXRvciwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpIDogbmV3IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0ID0gdmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkgOiBuZXcgUmVnRXhwKFwiLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IGNhcmRpbmFsaXR5IHx8IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IChtYXNrZGVmLmRlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2luZzogbWFza2RlZi5jYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBtYXNrZGVmLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgcHJldk1hdGNoID0gbXRva2VuLm1hdGNoZXNbcG9zaXRpb24gLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IG1hc2tkZWYudmFsaWRhdG9yID8gXCJzdHJpbmdcIiA9PSB0eXBlb2YgbWFza2RlZi52YWxpZGF0b3IgPyBuZXcgUmVnRXhwKG1hc2tkZWYudmFsaWRhdG9yLCBvcHRzLmNhc2luZyA/IFwiaVwiIDogXCJcIikgOiBuZXcgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdCA9IG1hc2tkZWYudmFsaWRhdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSA6IG5ldyBSZWdFeHAoXCIuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiBtYXNrZGVmLmNhcmRpbmFsaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsaXR5OiBtdG9rZW4uaXNPcHRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdCbG9ja01hcmtlcjogcHJldk1hdGNoID09PSB1bmRlZmluZWQgfHwgcHJldk1hdGNoLmRlZiAhPT0gKG1hc2tkZWYuZGVmaW5pdGlvblN5bWJvbCB8fCBlbGVtZW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IG1hc2tkZWYuY2FzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZjogbWFza2RlZi5kZWZpbml0aW9uU3ltYm9sIHx8IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IG1hc2tkZWYucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlRGVmOiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIG10b2tlbi5tYXRjaGVzLnNwbGljZShwb3NpdGlvbisrLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWxpdHk6IG10b2tlbi5pc09wdGlvbmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QmxvY2tNYXJrZXI6IHByZXZNYXRjaCA9PT0gdW5kZWZpbmVkIHx8IHByZXZNYXRjaC5kZWYgIT09IGVsZW1lbnQgJiYgbnVsbCAhPT0gcHJldk1hdGNoLmZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgfHwgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnN0YXRpY0RlZmluaXRpb25TeW1ib2wgIT09IHVuZGVmaW5lZCA/IGVsZW1lbnQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWY6IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgfSksIGVzY2FwZWQgPSAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB2ZXJpZnlHcm91cE1hcmtlcihtYXNrVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBtYXNrVG9rZW4gJiYgbWFza1Rva2VuLm1hdGNoZXMgJiYgJC5lYWNoKG1hc2tUb2tlbi5tYXRjaGVzLCBmdW5jdGlvbihuZHgsIHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0VG9rZW4gPSBtYXNrVG9rZW4ubWF0Y2hlc1tuZHggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgKG5leHRUb2tlbiA9PT0gdW5kZWZpbmVkIHx8IG5leHRUb2tlbi5tYXRjaGVzID09PSB1bmRlZmluZWQgfHwgITEgPT09IG5leHRUb2tlbi5pc1F1YW50aWZpZXIpICYmIHRva2VuICYmIHRva2VuLmlzR3JvdXAgJiYgKHRva2VuLmlzR3JvdXAgPSAhMSwgXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4TWFzayB8fCAoaW5zZXJ0VGVzdERlZmluaXRpb24odG9rZW4sIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQsIDApLCAhMCAhPT0gdG9rZW4ub3Blbkdyb3VwICYmIGluc2VydFRlc3REZWZpbml0aW9uKHRva2VuLCBvcHRzLmdyb3VwbWFya2VyLmVuZCkpKSwgXG4gICAgICAgICAgICAgICAgICAgIHZlcmlmeUdyb3VwTWFya2VyKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDYXNlKCkge1xuICAgICAgICAgICAgICAgIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzW29wZW5lbmluZ3MubGVuZ3RoIC0gMV0sIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRPcGVuaW5nVG9rZW4sIG0pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5pc0FsdGVybmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IgPSBvcGVuZW5pbmdzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKSkgOiBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKGFsdGVybmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGluc2VydFRlc3REZWZpbml0aW9uKGN1cnJlbnRUb2tlbiwgbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbikge1xuICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzID0gbWFza1Rva2VuLm1hdGNoZXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG1hdGNoIGluIG1hc2tUb2tlbi5tYXRjaGVzKSBpZiAobWFza1Rva2VuLm1hdGNoZXMuaGFzT3duUHJvcGVydHkobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnRNYXRjaCA9IHBhcnNlSW50KG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXS5pc1F1YW50aWZpZXIgJiYgbWFza1Rva2VuLm1hdGNoZXNbaW50TWF0Y2ggKyAxXSAmJiBtYXNrVG9rZW4ubWF0Y2hlc1tpbnRNYXRjaCArIDFdLmlzR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBxdCA9IG1hc2tUb2tlbi5tYXRjaGVzW21hdGNoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShtYXRjaCwgMSksIG1hc2tUb2tlbi5tYXRjaGVzLnNwbGljZShpbnRNYXRjaCArIDEsIDAsIHF0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0ubWF0Y2hlcyAhPT0gdW5kZWZpbmVkID8gbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gcmV2ZXJzZVRva2VucyhtYXNrVG9rZW4ubWF0Y2hlc1ttYXRjaF0pIDogbWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdID0gZnVuY3Rpb24oc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPyBzdCA9IG9wdHMub3B0aW9uYWxtYXJrZXIuc3RhcnQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5zdGFydCA/IHN0ID0gb3B0cy5ncm91cG1hcmtlci5lbmQgOiBzdCA9PT0gb3B0cy5ncm91cG1hcmtlci5lbmQgJiYgKHN0ID0gb3B0cy5ncm91cG1hcmtlci5zdGFydCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0obWFza1Rva2VuLm1hdGNoZXNbbWF0Y2hdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tUb2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXRjaCwgbSwgb3BlbmluZ1Rva2VuLCBjdXJyZW50T3BlbmluZ1Rva2VuLCBhbHRlcm5hdG9yLCBsYXN0TWF0Y2gsIGdyb3VwVG9rZW4sIHRva2VuaXplciA9IC8oPzpbPyorXXxcXHtbMC05XFwrXFwqXSsoPzosWzAtOVxcK1xcKl0qKT9cXH0pfFteLj8qK14ke1tdKCl8XFxcXF0rfC4vZywgcmVnZXhUb2tlbml6ZXIgPSAvXFxbXFxeP10/KD86W15cXFxcXFxdXSt8XFxcXFtcXFNcXHNdPykqXT98XFxcXCg/OjAoPzpbMC0zXVswLTddezAsMn18WzQtN11bMC03XT8pP3xbMS05XVswLTldKnx4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezR9fGNbQS1aYS16XXxbXFxTXFxzXT8pfFxcKCg/OlxcP1s6PSFdPyk/fCg/Ols/KitdfFxce1swLTldKyg/OixbMC05XSopP1xcfSlcXD8/fFteLj8qK14ke1soKXxcXFxcXSt8Li9nLCBlc2NhcGVkID0gITEsIGN1cnJlbnRUb2tlbiA9IG5ldyBNYXNrVG9rZW4oKSwgb3BlbmVuaW5ncyA9IFtdLCBtYXNrVG9rZW5zID0gW107XG4gICAgICAgICAgICBmb3IgKHJlZ2V4TWFzayAmJiAob3B0cy5vcHRpb25hbG1hcmtlci5zdGFydCA9IHVuZGVmaW5lZCwgb3B0cy5vcHRpb25hbG1hcmtlci5lbmQgPSB1bmRlZmluZWQpOyBtYXRjaCA9IHJlZ2V4TWFzayA/IHJlZ2V4VG9rZW5pemVyLmV4ZWMobWFzaykgOiB0b2tlbml6ZXIuZXhlYyhtYXNrKTsgKSB7XG4gICAgICAgICAgICAgICAgaWYgKG0gPSBtYXRjaFswXSwgcmVnZXhNYXNrKSBzd2l0Y2ggKG0uY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiP1wiOlxuICAgICAgICAgICAgICAgICAgICBtID0gXCJ7MCwxfVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICAgICAgICAgIG0gPSBcIntcIiArIG0gKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZWQpIGRlZmF1bHRDYXNlKCk7IGVsc2Ugc3dpdGNoIChtLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmVzY2FwZUNoYXI6XG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgPSAhMCwgcmVnZXhNYXNrICYmIGRlZmF1bHRDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kOlxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLmdyb3VwbWFya2VyLmVuZDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3MucG9wKCksIG9wZW5pbmdUb2tlbi5vcGVuR3JvdXAgPSAhMSwgb3BlbmluZ1Rva2VuICE9PSB1bmRlZmluZWQpIGlmIChvcGVuZW5pbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BlbmluZ1Rva2VuID0gb3BlbmVuaW5nc1tvcGVuZW5pbmdzLmxlbmd0aCAtIDFdLCBjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMucHVzaChvcGVuaW5nVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGVuaW5nVG9rZW4uaXNBbHRlcm5hdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbW5keCA9IDA7IG1uZHggPCBhbHRlcm5hdG9yLm1hdGNoZXMubGVuZ3RoOyBtbmR4KyspIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5pc0dyb3VwID0gITEsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVybmF0b3IubWF0Y2hlc1ttbmR4XS5hbHRlcm5hdG9yR3JvdXAgPSAhMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLmxlbmd0aCA+IDAgPyAoY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbi5tYXRjaGVzLnB1c2goYWx0ZXJuYXRvcikpIDogY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChhbHRlcm5hdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gob3BlbmluZ1Rva2VuKTsgZWxzZSBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICBvcGVuZW5pbmdzLnB1c2gobmV3IE1hc2tUb2tlbighMSwgITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5ncm91cG1hcmtlci5zdGFydDpcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKG5ldyBNYXNrVG9rZW4oITApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2Ugb3B0cy5xdWFudGlmaWVybWFya2VyLnN0YXJ0OlxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVhbnRpZmllciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMCk7XG4gICAgICAgICAgICAgICAgICAgIG0gPSBtLnJlcGxhY2UoL1t7fV0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtcSA9IG0uc3BsaXQoXCIsXCIpLCBtcTAgPSBpc05hTihtcVswXSkgPyBtcVswXSA6IHBhcnNlSW50KG1xWzBdKSwgbXExID0gMSA9PT0gbXEubGVuZ3RoID8gbXEwIDogaXNOYU4obXFbMV0pID8gbXFbMV0gOiBwYXJzZUludChtcVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIipcIiAhPT0gbXExICYmIFwiK1wiICE9PSBtcTEgfHwgKG1xMCA9IFwiKlwiID09PSBtcTEgPyAwIDogMSksIHF1YW50aWZpZXIucXVhbnRpZmllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogbXEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBtcTFcbiAgICAgICAgICAgICAgICAgICAgfSwgb3BlbmVuaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXS5tYXRjaGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChncm91cFRva2VuID0gbmV3IE1hc2tUb2tlbighMCksIGdyb3VwVG9rZW4ubWF0Y2hlcy5wdXNoKG1hdGNoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IGdyb3VwVG9rZW4pLCBtYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBtYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpLCBtYXRjaC5pc0dyb3VwIHx8IChyZWdleE1hc2sgJiYgbnVsbCA9PT0gbWF0Y2guZm4gJiYgXCIuXCIgPT09IG1hdGNoLmRlZiAmJiAobWF0Y2guZm4gPSBuZXcgUmVnRXhwKG1hdGNoLmRlZiwgb3B0cy5jYXNpbmcgPyBcImlcIiA6IFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVG9rZW4gPSBuZXcgTWFza1Rva2VuKCEwKSwgZ3JvdXBUb2tlbi5tYXRjaGVzLnB1c2gobWF0Y2gpLCBtYXRjaCA9IGdyb3VwVG9rZW4pLCBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRva2VuLm1hdGNoZXMucHVzaChtYXRjaCksIGN1cnJlbnRUb2tlbi5tYXRjaGVzLnB1c2gocXVhbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIG9wdHMuYWx0ZXJuYXRvcm1hcmtlcjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5lbmluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9wZW5pbmdUb2tlbiA9IG9wZW5lbmluZ3Nbb3BlbmVuaW5ncy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJUb2tlbiA9IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlc1tjdXJyZW50T3BlbmluZ1Rva2VuLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2ggPSBjdXJyZW50T3BlbmluZ1Rva2VuLm9wZW5Hcm91cCAmJiAoc3ViVG9rZW4ubWF0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8ICExID09PSBzdWJUb2tlbi5pc0dyb3VwICYmICExID09PSBzdWJUb2tlbi5pc0FsdGVybmF0b3IpID8gb3BlbmVuaW5ncy5wb3AoKSA6IGN1cnJlbnRPcGVuaW5nVG9rZW4ubWF0Y2hlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGxhc3RNYXRjaCA9IGN1cnJlbnRUb2tlbi5tYXRjaGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE1hdGNoLmlzQWx0ZXJuYXRvcikgb3BlbmVuaW5ncy5wdXNoKGxhc3RNYXRjaCk7IGVsc2UgaWYgKGxhc3RNYXRjaC5hbHRlcm5hdG9yR3JvdXAgPyAoYWx0ZXJuYXRvciA9IG9wZW5lbmluZ3MucG9wKCksIFxuICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2guYWx0ZXJuYXRvckdyb3VwID0gITEpIDogYWx0ZXJuYXRvciA9IG5ldyBNYXNrVG9rZW4oITEsICExLCAhMSwgITApLCBhbHRlcm5hdG9yLm1hdGNoZXMucHVzaChsYXN0TWF0Y2gpLCBcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVuaW5ncy5wdXNoKGFsdGVybmF0b3IpLCBsYXN0TWF0Y2gub3Blbkdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TWF0Y2gub3Blbkdyb3VwID0gITE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWx0ZXJuYXRvckdyb3VwID0gbmV3IE1hc2tUb2tlbighMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlcm5hdG9yR3JvdXAuYWx0ZXJuYXRvckdyb3VwID0gITAsIG9wZW5lbmluZ3MucHVzaChhbHRlcm5hdG9yR3JvdXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoO29wZW5lbmluZ3MubGVuZ3RoID4gMDsgKSBvcGVuaW5nVG9rZW4gPSBvcGVuZW5pbmdzLnBvcCgpLCBjdXJyZW50VG9rZW4ubWF0Y2hlcy5wdXNoKG9wZW5pbmdUb2tlbik7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFRva2VuLm1hdGNoZXMubGVuZ3RoID4gMCAmJiAodmVyaWZ5R3JvdXBNYXJrZXIoY3VycmVudFRva2VuKSwgbWFza1Rva2Vucy5wdXNoKGN1cnJlbnRUb2tlbikpLCBcbiAgICAgICAgICAgIChvcHRzLm51bWVyaWNJbnB1dCB8fCBvcHRzLmlzUlRMKSAmJiByZXZlcnNlVG9rZW5zKG1hc2tUb2tlbnNbMF0pLCBtYXNrVG9rZW5zO1xuICAgICAgICB9XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZERlZmluaXRpb25zID0gZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9ucywgZGVmaW5pdGlvbik7XG4gICAgfSwgSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMgPSBmdW5jdGlvbihhbGlhcykge1xuICAgICAgICAkLmV4dGVuZCghMCwgSW5wdXRtYXNrLnByb3RvdHlwZS5hbGlhc2VzLCBhbGlhcyk7XG4gICAgfSwgSW5wdXRtYXNrLmZvcm1hdCA9IGZ1bmN0aW9uKHZhbHVlLCBvcHRpb25zLCBtZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLmZvcm1hdCh2YWx1ZSwgbWV0YWRhdGEpO1xuICAgIH0sIElucHV0bWFzay51bm1hc2sgPSBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gSW5wdXRtYXNrKG9wdGlvbnMpLnVubWFza2VkdmFsdWUodmFsdWUpO1xuICAgIH0sIElucHV0bWFzay5pc1ZhbGlkID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIElucHV0bWFzayhvcHRpb25zKS5pc1ZhbGlkKHZhbHVlKTtcbiAgICB9LCBJbnB1dG1hc2sucmVtb3ZlID0gZnVuY3Rpb24oZWxlbXMpIHtcbiAgICAgICAgJC5lYWNoKGVsZW1zLCBmdW5jdGlvbihuZHgsIGVsKSB7XG4gICAgICAgICAgICBlbC5pbnB1dG1hc2sgJiYgZWwuaW5wdXRtYXNrLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LCBJbnB1dG1hc2suZXNjYXBlUmVnZXggPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgdmFyIHNwZWNpYWxzID0gWyBcIi9cIiwgXCIuXCIsIFwiKlwiLCBcIitcIiwgXCI/XCIsIFwifFwiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiLCBcIlxcXFxcIiwgXCIkXCIsIFwiXlwiIF07XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFwiKFxcXFxcIiArIHNwZWNpYWxzLmpvaW4oXCJ8XFxcXFwiKSArIFwiKVwiLCBcImdpbVwiKSwgXCJcXFxcJDFcIik7XG4gICAgfSwgSW5wdXRtYXNrLmtleUNvZGUgPSB7XG4gICAgICAgIEFMVDogMTgsXG4gICAgICAgIEJBQ0tTUEFDRTogOCxcbiAgICAgICAgQkFDS1NQQUNFX1NBRkFSSTogMTI3LFxuICAgICAgICBDQVBTX0xPQ0s6IDIwLFxuICAgICAgICBDT01NQTogMTg4LFxuICAgICAgICBDT01NQU5EOiA5MSxcbiAgICAgICAgQ09NTUFORF9MRUZUOiA5MSxcbiAgICAgICAgQ09NTUFORF9SSUdIVDogOTMsXG4gICAgICAgIENPTlRST0w6IDE3LFxuICAgICAgICBERUxFVEU6IDQ2LFxuICAgICAgICBET1dOOiA0MCxcbiAgICAgICAgRU5EOiAzNSxcbiAgICAgICAgRU5URVI6IDEzLFxuICAgICAgICBFU0NBUEU6IDI3LFxuICAgICAgICBIT01FOiAzNixcbiAgICAgICAgSU5TRVJUOiA0NSxcbiAgICAgICAgTEVGVDogMzcsXG4gICAgICAgIE1FTlU6IDkzLFxuICAgICAgICBOVU1QQURfQUREOiAxMDcsXG4gICAgICAgIE5VTVBBRF9ERUNJTUFMOiAxMTAsXG4gICAgICAgIE5VTVBBRF9ESVZJREU6IDExMSxcbiAgICAgICAgTlVNUEFEX0VOVEVSOiAxMDgsXG4gICAgICAgIE5VTVBBRF9NVUxUSVBMWTogMTA2LFxuICAgICAgICBOVU1QQURfU1VCVFJBQ1Q6IDEwOSxcbiAgICAgICAgUEFHRV9ET1dOOiAzNCxcbiAgICAgICAgUEFHRV9VUDogMzMsXG4gICAgICAgIFBFUklPRDogMTkwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIFNISUZUOiAxNixcbiAgICAgICAgU1BBQ0U6IDMyLFxuICAgICAgICBUQUI6IDksXG4gICAgICAgIFVQOiAzOCxcbiAgICAgICAgV0lORE9XUzogOTEsXG4gICAgICAgIFg6IDg4XG4gICAgfSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///1
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* global/window.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

 true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return window;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports && (module.exports = window);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC93aW5kb3cuanM/YTUyZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogZ2xvYmFsL3dpbmRvdy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cblwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9nbG9iYWwvd2luZG93LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///2
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_RESULT__;/*!
* global/document.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

 true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return document;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports && (module.exports = document);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qcz80ZGY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBnbG9iYWwvZG9jdW1lbnQuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG5cImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbn0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiAobW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2dsb2JhbC9kb2N1bWVudC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///3
`)},function(module,__webpack_exports__,__webpack_require__){eval(`Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_inputmask__);
/*
 * vue-inputmask
 *
 * (C) 2016 Simon Clériot
 * MIT LICENCE
 *
 */


var inputmaskPlugin = {
    install: function (Vue, options) {
        Vue.directive('mask', {
            bind: function (el, binding) {
                __WEBPACK_IMPORTED_MODULE_0_inputmask___default()(binding.value).mask(el);
            }
        });
    }
};

exports.default = inputmaskPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdnVlLWlucHV0bWFzay5qcz9hMmE5Il0sIm5hbWVzIjpbImlucHV0bWFza1BsdWdpbiIsImluc3RhbGwiLCJWdWUiLCJvcHRpb25zIiwiZGlyZWN0aXZlIiwiYmluZCIsImVsIiwiYmluZGluZyIsIklucHV0bWFzayIsInZhbHVlIiwibWFzayIsImV4cG9ydHMiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7O0FBRUEsSUFBSUEsa0JBQWtCO0FBQ2xCQyxhQUFTLFVBQVNDLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtBQUM1QkQsWUFBSUUsU0FBSixDQUFjLE1BQWQsRUFBc0I7QUFDbEJDLGtCQUFNLFVBQVNDLEVBQVQsRUFBYUMsT0FBYixFQUFzQjtBQUN4QkMsZ0JBQUEsaURBQUFBLENBQVVELFFBQVFFLEtBQWxCLEVBQXlCQyxJQUF6QixDQUE4QkosRUFBOUI7QUFDSDtBQUhpQixTQUF0QjtBQUtIO0FBUGlCLENBQXRCOztBQVVBSyxRQUFRQyxPQUFSLEdBQWtCWixlQUFsQiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIHZ1ZS1pbnB1dG1hc2tcbiAqXG4gKiAoQykgMjAxNiBTaW1vbiBDbMOpcmlvdFxuICogTUlUIExJQ0VOQ0VcbiAqXG4gKi9cbmltcG9ydCBJbnB1dG1hc2sgZnJvbSAnaW5wdXRtYXNrJ1xuXG52YXIgaW5wdXRtYXNrUGx1Z2luID0ge1xuICAgIGluc3RhbGw6IGZ1bmN0aW9uKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWUuZGlyZWN0aXZlKCdtYXNrJywge1xuICAgICAgICAgICAgYmluZDogZnVuY3Rpb24oZWwsIGJpbmRpbmcpIHtcbiAgICAgICAgICAgICAgICBJbnB1dG1hc2soYmluZGluZy52YWx1ZSkubWFzayhlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlucHV0bWFza1BsdWdpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92dWUtaW5wdXRtYXNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///4
`)},function(module,exports,__webpack_require__){eval(`__webpack_require__(6);\r
__webpack_require__(7);\r
__webpack_require__(8);\r
__webpack_require__(9);\r
\r
// require("./dist/inputmask/phone-codes/phone-be");\r
// require("./dist/inputmask/phone-codes/phone-nl");\r
// require("./dist/inputmask/phone-codes/phone-ru");\r
// require("./dist/inputmask/phone-codes/phone-uk");\r
// require("./dist/inputmask/phone-codes/phone");\r
\r
module.exports = __webpack_require__(1);\r

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2luZGV4LmpzP2VlNjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmRhdGUuZXh0ZW5zaW9uc1wiKTtcclxucmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnNcIik7XHJcbnJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zXCIpO1xyXG5cclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtYmVcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lLW5sXCIpO1xyXG4vLyByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9waG9uZS1jb2Rlcy9waG9uZS1ydVwiKTtcclxuLy8gcmVxdWlyZShcIi4vZGlzdC9pbnB1dG1hc2svcGhvbmUtY29kZXMvcGhvbmUtdWtcIik7XHJcbi8vIHJlcXVpcmUoXCIuL2Rpc3QvaW5wdXRtYXNrL3Bob25lLWNvZGVzL3Bob25lXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suanNcIik7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///5
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.date.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    function isLeapYear(year) {
        return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
    }
    return Inputmask.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
                },
                val2: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function(chrs, minyear, maxyear) {
                if (isNaN(chrs)) return !1;
                var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
                return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
            },
            determinebaseyear: function(minyear, maxyear, hint) {
                var currentyear = new Date().getFullYear();
                if (minyear > currentyear) return minyear;
                if (maxyear < currentyear) {
                    for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;
                    var maxxYear = maxYearPrefix + maxYearPostfix;
                    return minyear > maxxYear ? minyear : maxxYear;
                }
                if (minyear <= currentyear && currentyear <= maxyear) {
                    for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;
                    var currentYearAndHint = currentYearPrefix + hint;
                    return currentYearAndHint < minyear ? minyear : currentYearAndHint;
                }
                return currentyear;
            },
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), 
                    $input.trigger("setvalue");
                }
            },
            getFrontValue: function(mask, buffer, opts) {
                for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
                    var definition = opts.definitions[mask.charAt(i)];
                    definition ? (start += length, length = definition.cardinality) : length++;
                }
                return buffer.join("").substr(start, length);
            },
            postValidation: function(buffer, currentResult, opts) {
                var dayMonthValue, year, bufferStr = buffer.join("");
                return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), 
                dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
            },
            definitions: {
                "1": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        if ("3" == chrs.charAt(0)) {
                            if (new RegExp("[2-9]").test(chrs.charAt(1))) return chrs = "30", maskset.buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            };
                        }
                        var isValid = opts.regex.val1.test(chrs);
                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                        {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var pchrs = chrs;
                            isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
                            var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
                            if (!strict && !isValid) {
                                if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, 
                                maskset.buffer[++pos] = "0", {
                                    pos: pos,
                                    c: "0"
                                };
                                if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", 
                                pos++, {
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    } ]
                },
                "2": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                        if (-1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator), 
                        "1" == chrs.charAt(0)) {
                            if (new RegExp("[3-9]").test(chrs.charAt(1))) return chrs = "10", maskset.buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            };
                        }
                        var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
                        return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 
                        {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            pos: pos,
                            c: chrs.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);
                            var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
                            return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                y: {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                    },
                    cardinality: 4,
                    prevalidator: [ {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), 
                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 
                                maskset.buffer[pos++] = yearPrefix.charAt(1), {
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 1
                    }, {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                            if (!strict && !isValid) {
                                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), 
                                {
                                    pos: pos
                                };
                                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), 
                                isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), 
                                maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), 
                                {
                                    refreshFromBuffer: {
                                        start: pos - 3,
                                        end: pos
                                    },
                                    pos: pos
                                };
                            }
                            return isValid;
                        },
                        cardinality: 2
                    }, {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
                        },
                        cardinality: 3
                    } ]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                    $input.trigger("setvalue");
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), 
                    $input.trigger("setvalue");
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", 
                        maskset.buffer[pos] = "0", {
                            refreshFromBuffer: {
                                start: pos - 1,
                                end: pos
                            },
                            c: "0"
                        };
                        var isValid = opts.regex.hrs.test(chrs);
                        if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", 
                        maskset.buffer[pos] = chrs.charAt(0), pos++, {
                            refreshFromBuffer: {
                                start: pos - 2,
                                end: pos
                            },
                            pos: pos,
                            c: opts.timeseparator
                        };
                        if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
                            var tmp = parseInt(chrs, 10);
                            return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", 
                            maskset.buffer[pos + 6] = "m"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(), 
                            maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), 
                            maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: pos - 1,
                                    end: pos + 6
                                },
                                c: maskset.buffer[pos]
                            };
                        }
                        return isValid;
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.hrspre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(chrs, maskset, pos, strict, opts) {
                            var isValid = opts.regex.mspre.test(chrs);
                            return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 
                            pos++, {
                                pos: pos
                            });
                        },
                        cardinality: 1
                    } ]
                },
                t: {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.regex.ampm.test(chrs + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
                    var today = new Date();
                    $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 
                    $input.trigger("setvalue");
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
                },
                val2: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        },
        "yyyy-mm-dd hh:mm:ss": {
            mask: "y-1-2 h:s:s",
            placeholder: "yyyy-mm-dd hh:mm:ss",
            alias: "datetime",
            separator: "-",
            leapday: "-02-29",
            regex: {
                val2pre: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
                },
                val2: function(separator) {
                    var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
                    return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            onKeyDown: function(e, buffer, caretPos, opts) {}
        }
    }), Inputmask;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanM/ZTgyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkgsZ0NBQWdDO0FBQzdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLG9DQUFvQztBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHNEQUFzRCwyQ0FBMkM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5kYXRlLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiBpc05hTih5ZWFyKSB8fCAyOSA9PT0gbmV3IERhdGUoeWVhciwgMiwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBcImRkL21tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAtM11cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXxbMTJdWzAtOV18M1swMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXxbMTJdWzAtOV18M1swMV0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMDFdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18WzEyXVswLTldKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXwxWzAxMl0pKXwoMzBcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEzLTldfDFbMDEyXSkpfCgzMVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMTM1NzhdfDFbMDJdKSlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMjkvMDIvXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiL1wiLFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTkwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAyMDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNJblllYXJSYW5nZTogZnVuY3Rpb24oY2hycywgbWlueWVhciwgbWF4eWVhcikge1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihjaHJzKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBlbnRlcmVkeWVhciA9IHBhcnNlSW50KGNocnMuY29uY2F0KG1pbnllYXIudG9TdHJpbmcoKS5zbGljZShjaHJzLmxlbmd0aCkpKSwgZW50ZXJlZHllYXIyID0gcGFyc2VJbnQoY2hycy5jb25jYXQobWF4eWVhci50b1N0cmluZygpLnNsaWNlKGNocnMubGVuZ3RoKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNOYU4oZW50ZXJlZHllYXIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyICYmIGVudGVyZWR5ZWFyIDw9IG1heHllYXIpIHx8ICFpc05hTihlbnRlcmVkeWVhcjIpICYmIChtaW55ZWFyIDw9IGVudGVyZWR5ZWFyMiAmJiBlbnRlcmVkeWVhcjIgPD0gbWF4eWVhcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV0ZXJtaW5lYmFzZXllYXI6IGZ1bmN0aW9uKG1pbnllYXIsIG1heHllYXIsIGhpbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICAgICAgaWYgKG1pbnllYXIgPiBjdXJyZW50eWVhcikgcmV0dXJuIG1pbnllYXI7XG4gICAgICAgICAgICAgICAgaWYgKG1heHllYXIgPCBjdXJyZW50eWVhcikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtYXhZZWFyUHJlZml4ID0gbWF4eWVhci50b1N0cmluZygpLnNsaWNlKDAsIDIpLCBtYXhZZWFyUG9zdGZpeCA9IG1heHllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgbWF4eWVhciA8IG1heFllYXJQcmVmaXggKyBoaW50OyApIG1heFllYXJQcmVmaXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heHhZZWFyID0gbWF4WWVhclByZWZpeCArIG1heFllYXJQb3N0Zml4O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlueWVhciA+IG1heHhZZWFyID8gbWlueWVhciA6IG1heHhZZWFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWlueWVhciA8PSBjdXJyZW50eWVhciAmJiBjdXJyZW50eWVhciA8PSBtYXh5ZWFyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGN1cnJlbnRZZWFyUHJlZml4ID0gY3VycmVudHllYXIudG9TdHJpbmcoKS5zbGljZSgwLCAyKTsgbWF4eWVhciA8IGN1cnJlbnRZZWFyUHJlZml4ICsgaGludDsgKSBjdXJyZW50WWVhclByZWZpeC0tO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFllYXJBbmRIaW50ID0gY3VycmVudFllYXJQcmVmaXggKyBoaW50O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFllYXJBbmRIaW50IDwgbWlueWVhciA/IG1pbnllYXIgOiBjdXJyZW50WWVhckFuZEhpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50eWVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArICh0b2RheS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRGcm9udFZhbHVlOiBmdW5jdGlvbihtYXNrLCBidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzdGFydCA9IDAsIGxlbmd0aCA9IDAsIGkgPSAwOyBpIDwgbWFzay5sZW5ndGggJiYgXCIyXCIgIT09IG1hc2suY2hhckF0KGkpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmluaXRpb24gPSBvcHRzLmRlZmluaXRpb25zW21hc2suY2hhckF0KGkpXTtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA/IChzdGFydCArPSBsZW5ndGgsIGxlbmd0aCA9IGRlZmluaXRpb24uY2FyZGluYWxpdHkpIDogbGVuZ3RoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXIuam9pbihcIlwiKS5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zdFZhbGlkYXRpb246IGZ1bmN0aW9uKGJ1ZmZlciwgY3VycmVudFJlc3VsdCwgb3B0cykge1xuICAgICAgICAgICAgICAgIHZhciBkYXlNb250aFZhbHVlLCB5ZWFyLCBidWZmZXJTdHIgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gb3B0cy5tYXNrLmluZGV4T2YoXCJ5XCIpID8gKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyKDAsIDQpLCBkYXlNb250aFZhbHVlID0gYnVmZmVyU3RyLnN1YnN0cmluZyg0LCAxMCkpIDogKHllYXIgPSBidWZmZXJTdHIuc3Vic3RyaW5nKDYsIDEwKSwgXG4gICAgICAgICAgICAgICAgZGF5TW9udGhWYWx1ZSA9IGJ1ZmZlclN0ci5zdWJzdHIoMCwgNikpLCBjdXJyZW50UmVzdWx0ICYmIChkYXlNb250aFZhbHVlICE9PSBvcHRzLmxlYXBkYXkgfHwgaXNMZWFwWWVhcih5ZWFyKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIjFcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCIzXCIgPT0gY2hycy5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIlsyLTldXCIpLnRlc3QoY2hycy5jaGFyQXQoMSkpKSByZXR1cm4gY2hycyA9IFwiMzBcIiwgbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXgudmFsMS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0cmljdCB8fCBpc1ZhbGlkIHx8IGNocnMuY2hhckF0KDEpICE9PSBvcHRzLnNlcGFyYXRvciAmJiAtMSA9PT0gXCItLi9cIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGNocnMgPSBjaHJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTmFOKG1hc2tzZXQuYnVmZmVyW3BvcyArIDFdKSB8fCAocGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gMSA9PT0gcGNocnMubGVuZ3RoID8gb3B0cy5yZWdleC52YWwxcHJlLnRlc3QocGNocnMpIDogb3B0cy5yZWdleC52YWwxLnRlc3QocGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwxLnRlc3QoY2hycyArIFwiMFwiKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBjaHJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbKytwb3NdID0gXCIwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDEudGVzdChcIjBcIiArIGNocnMpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgICAgIH0gXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb250VmFsdWUgPSBvcHRzLmdldEZyb250VmFsdWUobWFza3NldC5tYXNrLCBtYXNrc2V0LmJ1ZmZlciwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IGZyb250VmFsdWUuaW5kZXhPZihvcHRzLnBsYWNlaG9sZGVyWzBdKSAmJiAoZnJvbnRWYWx1ZSA9IFwiMDFcIiArIG9wdHMuc2VwYXJhdG9yKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIiA9PSBjaHJzLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiWzMtOV1cIikudGVzdChjaHJzLmNoYXJBdCgxKSkpIHJldHVybiBjaHJzID0gXCIxMFwiLCBtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCBjaHJzLmNoYXJBdCgxKSAhPT0gb3B0cy5zZXBhcmF0b3IgJiYgLTEgPT09IFwiLS4vXCIuaW5kZXhPZihjaHJzLmNoYXJBdCgxKSkgfHwgIShpc1ZhbGlkID0gb3B0cy5yZWdleC52YWwyKG9wdHMuc2VwYXJhdG9yKS50ZXN0KGZyb250VmFsdWUgKyBcIjBcIiArIGNocnMuY2hhckF0KDApKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogY2hycy5jaGFyQXQoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMixcbiAgICAgICAgICAgICAgICAgICAgcHJldmFsaWRhdG9yOiBbIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc05hTihtYXNrc2V0LmJ1ZmZlcltwb3MgKyAxXSkgfHwgKGNocnMgKz0gbWFza3NldC5idWZmZXJbcG9zICsgMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmcm9udFZhbHVlID0gb3B0cy5nZXRGcm9udFZhbHVlKG1hc2tzZXQubWFzaywgbWFza3NldC5idWZmZXIsIG9wdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0xICE9PSBmcm9udFZhbHVlLmluZGV4T2Yob3B0cy5wbGFjZWhvbGRlclswXSkgJiYgKGZyb250VmFsdWUgPSBcIjAxXCIgKyBvcHRzLnNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSAxID09PSBjaHJzLmxlbmd0aCA/IG9wdHMucmVnZXgudmFsMnByZShvcHRzLnNlcGFyYXRvcikudGVzdChmcm9udFZhbHVlICsgY2hycykgOiBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4LnZhbDIob3B0cy5zZXBhcmF0b3IpLnRlc3QoZnJvbnRWYWx1ZSArIFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmlzSW5ZZWFyUmFuZ2UoY2hycywgb3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiA0LFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzICsgXCIwXCIpLnRvU3RyaW5nKCkuc2xpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKHllYXJQcmVmaXggKyBjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDApLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHllYXJQcmVmaXggPSBvcHRzLmRldGVybWluZWJhc2V5ZWFyKG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIsIGNocnMgKyBcIjBcIikudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSB5ZWFyUHJlZml4LmNoYXJBdCgxKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5pc0luWWVhclJhbmdlKGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyaWN0ICYmICFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFyUHJlZml4ID0gb3B0cy5kZXRlcm1pbmViYXNleWVhcihvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyLCBjaHJzKS50b1N0cmluZygpLnNsaWNlKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9IG9wdHMuaXNJblllYXJSYW5nZShjaHJzWzBdICsgeWVhclByZWZpeFsxXSArIGNocnNbMV0sIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zKytdID0geWVhclByZWZpeC5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeWVhclByZWZpeCA9IG9wdHMuZGV0ZXJtaW5lYmFzZXllYXIob3B0cy55ZWFycmFuZ2UubWlueWVhciwgb3B0cy55ZWFycmFuZ2UubWF4eWVhciwgY2hycykudG9TdHJpbmcoKS5zbGljZSgwLCAyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBvcHRzLmlzSW5ZZWFyUmFuZ2UoeWVhclByZWZpeCArIGNocnMsIG9wdHMueWVhcnJhbmdlLm1pbnllYXIsIG9wdHMueWVhcnJhbmdlLm1heHllYXIpKSByZXR1cm4gbWFza3NldC5idWZmZXJbcG9zIC0gMV0gPSB5ZWFyUHJlZml4LmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcysrXSA9IHllYXJQcmVmaXguY2hhckF0KDEpLCBtYXNrc2V0LmJ1ZmZlcltwb3MrK10gPSBjaHJzLmNoYXJBdCgwKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMlxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuaXNJblllYXJSYW5nZShjaHJzLCBvcHRzLnllYXJyYW5nZS5taW55ZWFyLCBvcHRzLnllYXJyYW5nZS5tYXh5ZWFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogM1xuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITEsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXlcIjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwibW0vZGQveXl5eVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICB2YWwycHJlOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0zXSl8KDAyXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCJbMC0yXSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwyOiBmdW5jdGlvbihzZXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVzY2FwZWRTZXBhcmF0b3IgPSBJbnB1dG1hc2suZXNjYXBlUmVnZXguY2FsbCh0aGlzLCBzZXBhcmF0b3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIigoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIigwWzEtOV18WzEyXVswLTldKSl8KCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMTM1NzhdfDFbMDJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzEpXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMXByZTogbmV3IFJlZ0V4cChcIlswMV1cIiksXG4gICAgICAgICAgICAgICAgdmFsMTogbmV3IFJlZ0V4cChcIjBbMS05XXwxWzAxMl1cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLzI5L1wiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwoKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwieXl5eS9tbS9kZFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcInkvMS8yXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ5eXl5L21tL2RkXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIi8wMi8yOVwiLFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT09IElucHV0bWFzay5rZXlDb2RlLlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwodG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICsgKHRvZGF5LmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpICsgdG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpLCBcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGQubW0ueXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEuMi55XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjI5LjAyLlwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi5cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcImRkLW1tLXl5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLTIteVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIyOS0wMi1cIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCItXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkZC9tbS95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtbS5kZC55eXl5XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS4yLnlcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tLmRkLnl5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIuMjkuXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLlwiLFxuICAgICAgICAgICAgYWxpYXM6IFwibW0vZGQveXl5eVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibW0tZGQteXl5eVwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEtMi15XCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS1kZC15eXl5XCIsXG4gICAgICAgICAgICBsZWFwZGF5OiBcIjAyLTI5LVwiLFxuICAgICAgICAgICAgc2VwYXJhdG9yOiBcIi1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcInl5eXkubW0uZGRcIjoge1xuICAgICAgICAgICAgbWFzazogXCJ5LjEuMlwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwieXl5eS5tbS5kZFwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIuMDIuMjlcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIuXCIsXG4gICAgICAgICAgICBhbGlhczogXCJ5eXl5L21tL2RkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTJcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiLTAyLTI5XCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwieXl5eS9tbS9kZFwiXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgICAgICBtYXNrOiBcIjEvMi95IGg6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGQvbW0veXl5eVwiLFxuICAgICAgICAgICAgcmVnZXg6IHtcbiAgICAgICAgICAgICAgICBocnNwcmU6IG5ldyBSZWdFeHAoXCJbMDEyXVwiKSxcbiAgICAgICAgICAgICAgICBocnMyNDogbmV3IFJlZ0V4cChcIjJbMC00XXwxWzMtOV1cIiksXG4gICAgICAgICAgICAgICAgaHJzOiBuZXcgUmVnRXhwKFwiWzAxXVswLTldfDJbMC00XVwiKSxcbiAgICAgICAgICAgICAgICBhbXBtOiBuZXcgUmVnRXhwKFwiXlthfHB8QXxQXVttfE1dXCIpLFxuICAgICAgICAgICAgICAgIG1zcHJlOiBuZXcgUmVnRXhwKFwiWzAtNV1cIiksXG4gICAgICAgICAgICAgICAgbXM6IG5ldyBSZWdFeHAoXCJbMC01XVswLTldXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltZXNlcGFyYXRvcjogXCI6XCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjI0XCIsXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgIGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiMjRcIiA9PT0gb3B0cy5ob3VyRm9ybWF0ICYmIDI0ID09PSBwYXJzZUludChjaHJzLCAxMCkpIHJldHVybiBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IG9wdHMucmVnZXguaHJzLnRlc3QoY2hycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhaXNWYWxpZCAmJiAoY2hycy5jaGFyQXQoMSkgPT09IG9wdHMudGltZXNlcGFyYXRvciB8fCAtMSAhPT0gXCItLjpcIi5pbmRleE9mKGNocnMuY2hhckF0KDEpKSkgJiYgKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycy5jaGFyQXQoMCkpKSkgcmV0dXJuIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFza3NldC5idWZmZXJbcG9zXSA9IGNocnMuY2hhckF0KDApLCBwb3MrKywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3MgLSAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogb3B0cy50aW1lc2VwYXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgXCIyNFwiICE9PSBvcHRzLmhvdXJGb3JtYXQgJiYgb3B0cy5yZWdleC5ocnMyNC50ZXN0KGNocnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHBhcnNlSW50KGNocnMsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjQgPT09IHRtcCA/IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwiYVwiLCBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSA6IChtYXNrc2V0LmJ1ZmZlcltwb3MgKyA1XSA9IFwicFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrc2V0LmJ1ZmZlcltwb3MgKyA2XSA9IFwibVwiKSwgdG1wIC09IDEyLCB0bXAgPCAxMCA/IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gdG1wLnRvU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gXCIwXCIpIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSB0bXAudG9TdHJpbmcoKS5jaGFyQXQoMSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID0gdG1wLnRvU3RyaW5nKCkuY2hhckF0KDApKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoRnJvbUJ1ZmZlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHBvcyAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHBvcyArIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzogbWFza3NldC5idWZmZXJbcG9zXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDIsXG4gICAgICAgICAgICAgICAgICAgIHByZXZhbGlkYXRvcjogWyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhyc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lmhycy50ZXN0KFwiMFwiICsgY2hycykpID8gaXNWYWxpZCA6IChtYXNrc2V0LmJ1ZmZlcltwb3NdID0gXCIwXCIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcysrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgfSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC01XVswLTldXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAyLFxuICAgICAgICAgICAgICAgICAgICBwcmV2YWxpZGF0b3I6IFsge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gb3B0cy5yZWdleC5tc3ByZS50ZXN0KGNocnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpY3QgfHwgaXNWYWxpZCB8fCAhKGlzVmFsaWQgPSBvcHRzLnJlZ2V4Lm1zLnRlc3QoXCIwXCIgKyBjaHJzKSkgPyBpc1ZhbGlkIDogKG1hc2tzZXQuYnVmZmVyW3Bvc10gPSBcIjBcIiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zKyssIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgICAgICB9IF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmVnZXguYW1wbS50ZXN0KGNocnMgKyBcIm1cIik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnNlcnRNb2RlOiAhMSxcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGV0aW1lMTI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiMS8yL3kgaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGQvbW0veXl5eSBoaDptbSB4bVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGhvdXJGb3JtYXQ6IFwiMTJcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL2RkL3l5eXkgaGg6bW0geG1cIjoge1xuICAgICAgICAgICAgbWFzazogXCIxLzIveSBoOnMgdFxcXFxtXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJtbS9kZC95eXl5IGhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZTEyXCIsXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEzLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTNdKXwoMDJcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIlswLTJdKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDI6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiKDBbMS05XXxbMTJdWzAtOV0pKXwoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiMzApfCgoMFsxMzU3OF18MVswMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMSlcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2YWwxcHJlOiBuZXcgUmVnRXhwKFwiWzAxXVwiKSxcbiAgICAgICAgICAgICAgICB2YWwxOiBuZXcgUmVnRXhwKFwiMFsxLTldfDFbMDEyXVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiMDIvMjkvXCIsXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PT0gSW5wdXRtYXNrLmtleUNvZGUuUklHSFQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgodG9kYXkuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkgKyB0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKSArIHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSksIFxuICAgICAgICAgICAgICAgICAgICAkaW5wdXQudHJpZ2dlcihcInNldHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaDptbSB0XCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzIHRcXFxcbVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW0geG1cIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBob3VyRm9ybWF0OiBcIjEyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJoOnMgdFwiOiB7XG4gICAgICAgICAgICBtYXNrOiBcImg6cyB0XFxcXG1cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImhoOm1tIHhtXCIsXG4gICAgICAgICAgICBhbGlhczogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgaG91ckZvcm1hdDogXCIxMlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGg6bW06c3NcIjoge1xuICAgICAgICAgICAgbWFzazogXCJoOnM6c1wiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMVxuICAgICAgICB9LFxuICAgICAgICBcImhoOm1tXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaDpzXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJoaDptbVwiLFxuICAgICAgICAgICAgYWxpYXM6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgIGF1dG9Vbm1hc2s6ICExXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcImRkL21tL3l5eXlcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1tL3l5eXlcIjoge1xuICAgICAgICAgICAgbWFzazogXCIxL3lcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIm1tL3l5eXlcIixcbiAgICAgICAgICAgIGxlYXBkYXk6IFwiZG9ub3R1c2VcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogXCIvXCIsXG4gICAgICAgICAgICBhbGlhczogXCJtbS9kZC95eXl5XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hhbXNpOiB7XG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIHZhbDJwcmU6IGZ1bmN0aW9uKHNlcGFyYXRvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZFNlcGFyYXRvciA9IElucHV0bWFzay5lc2NhcGVSZWdleC5jYWxsKHRoaXMsIHNlcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKCgwWzEtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxLTldfDFbMDEyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMwKXwoKDBbMS02XSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWVhcnJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWlueWVhcjogMTMwMCxcbiAgICAgICAgICAgICAgICBtYXh5ZWFyOiAxNDk5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFzazogXCJ5LzEvMlwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCIvMTIvMzBcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXkvbW0vZGRcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm1tL2RkL3l5eXlcIixcbiAgICAgICAgICAgIGNsZWFySW5jb21wbGV0ZTogITBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ5eXl5LW1tLWRkIGhoOm1tOnNzXCI6IHtcbiAgICAgICAgICAgIG1hc2s6IFwieS0xLTIgaDpzOnNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInl5eXktbW0tZGQgaGg6bW06c3NcIixcbiAgICAgICAgICAgIGFsaWFzOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICBzZXBhcmF0b3I6IFwiLVwiLFxuICAgICAgICAgICAgbGVhcGRheTogXCItMDItMjlcIixcbiAgICAgICAgICAgIHJlZ2V4OiB7XG4gICAgICAgICAgICAgICAgdmFsMnByZTogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMTMtOV18MVswMTJdKVwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtM10pfCgwMlwiICsgZXNjYXBlZFNlcGFyYXRvciArIFwiWzAtMl0pXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmFsMjogZnVuY3Rpb24oc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkU2VwYXJhdG9yID0gSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoKDBbMS05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIoMFsxLTldfFsxMl1bMC05XSkpfCgoMFsxMy05XXwxWzAxMl0pXCIgKyBlc2NhcGVkU2VwYXJhdG9yICsgXCIzMCl8KCgwWzEzNTc4XXwxWzAyXSlcIiArIGVzY2FwZWRTZXBhcmF0b3IgKyBcIjMxKVwiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbDFwcmU6IG5ldyBSZWdFeHAoXCJbMDFdXCIpLFxuICAgICAgICAgICAgICAgIHZhbDE6IG5ldyBSZWdFeHAoXCIwWzEtOV18MVswMTJdXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25LZXlEb3duOiBmdW5jdGlvbihlLCBidWZmZXIsIGNhcmV0UG9zLCBvcHRzKSB7fVxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2suZGF0ZS5leHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///6
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    return Inputmask.extendDefinitions({
        A: {
            validator: "[A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-z\\u0410-\\u044f\\u0401\\u0451\\xc0-\\xff\\xb5]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), Inputmask.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\\\http://)|(\\\\http\\\\s://)|(ftp://)|(ftp\\\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1,
            inputmode: "url"
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 
                        chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 
                        new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
                    },
                    cardinality: 1
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "numeric"
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function(pastedValue, opts) {
                return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_\`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue;
            },
            inputmode: "email"
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), Inputmask;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5leHRlbnNpb25zLmpzPzY5NWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLG9FQUFvRSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSztBQUMzRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHlEQUF5RCxFQUFFO0FBQzNEO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrKSB7XG4gICAgcmV0dXJuIElucHV0bWFzay5leHRlbmREZWZpbml0aW9ucyh7XG4gICAgICAgIEE6IHtcbiAgICAgICAgICAgIHZhbGlkYXRvcjogXCJbQS1aYS16XFx1MDQxMC1cXHUwNDRmXFx1MDQwMVxcdTA0NTFcXHhjMC1cXHhmZlxceGI1XVwiLFxuICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICB9LFxuICAgICAgICBcIiZcIjoge1xuICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXpcXHUwNDEwLVxcdTA0NGZcXHUwNDAxXFx1MDQ1MVxceGMwLVxceGZmXFx4YjVdXCIsXG4gICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgIGNhc2luZzogXCJ1cHBlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtRmEtZl1cIixcbiAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgY2FzaW5nOiBcInVwcGVyXCJcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogXCIuXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hc2s6IFwiKFxcXFxodHRwOi8vKXwoXFxcXGh0dHBcXFxcczovLyl8KGZ0cDovLyl8KGZ0cFxcXFxzOi8vKWl7K31cIixcbiAgICAgICAgICAgIGluc2VydE1vZGU6ICExLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITEsXG4gICAgICAgICAgICBpbnB1dG1vZGU6IFwidXJsXCJcbiAgICAgICAgfSxcbiAgICAgICAgaXA6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiaVtpW2ldXS5pW2lbaV1dLmlbaVtpXV0uaVtpW2ldXVwiLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oY2hycywgbWFza3NldCwgcG9zLCBzdHJpY3QsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3MgLSAxID4gLTEgJiYgXCIuXCIgIT09IG1hc2tzZXQuYnVmZmVyW3BvcyAtIDFdID8gKGNocnMgPSBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAxXSArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hycyA9IHBvcyAtIDIgPiAtMSAmJiBcIi5cIiAhPT0gbWFza3NldC5idWZmZXJbcG9zIC0gMl0gPyBtYXNrc2V0LmJ1ZmZlcltwb3MgLSAyXSArIGNocnMgOiBcIjBcIiArIGNocnMpIDogY2hycyA9IFwiMDBcIiArIGNocnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChcIjI1WzAtNV18MlswLTRdWzAtOV18WzAxXVswLTldWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCJcbiAgICAgICAgfSxcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIG1hc2s6IFwiKnsxLDY0fVsuKnsxLDY0fV1bLip7MSw2NH1dWy4qezEsNjN9XUAtezEsNjN9Li17MSw2M31bLi17MSw2M31dWy4tezEsNjN9XVwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uKHBhc3RlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlID0gcGFzdGVkVmFsdWUudG9Mb3dlckNhc2UoKSwgcGFzdGVkVmFsdWUucmVwbGFjZShcIm1haWx0bzpcIiwgXCJcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiWzAtOUEtWmEteiEjJCUmJyorLz0/Xl9ge3x9fi1dXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwibG93ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXotXVwiLFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Vbk1hc2s6IGZ1bmN0aW9uKG1hc2tlZFZhbHVlLCB1bm1hc2tlZFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hc2tlZFZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJlbWFpbFwiXG4gICAgICAgIH0sXG4gICAgICAgIG1hYzoge1xuICAgICAgICAgICAgbWFzazogXCIjIzojIzojIzojIzojIzojI1wiXG4gICAgICAgIH0sXG4gICAgICAgIHZpbjoge1xuICAgICAgICAgICAgbWFzazogXCJWezEzfTl7NH1cIixcbiAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgVjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFwiW0EtSEotTlBSLVphLWhqLW5wci16XFxcXGRdXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBjYXNpbmc6IFwidXBwZXJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckluY29tcGxldGU6ICEwLFxuICAgICAgICAgICAgYXV0b1VubWFzazogITBcbiAgICAgICAgfVxuICAgIH0pLCBJbnB1dG1hc2s7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnB1dG1hc2svZGlzdC9pbnB1dG1hc2svaW5wdXRtYXNrLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///7
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.numeric.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask, undefined) {
    function autoEscape(txt, opts) {
        for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);
        return escapedTxt;
    }
    return Inputmask.extendAliases({
        numeric: {
            mask: function(opts) {
                if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), 
                opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 
                " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, 
                opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), 
                isFinite(opts.integerDigits))) {
                    var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;
                    opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), 
                    opts.integerDigits < 1 && (opts.integerDigits = "*");
                }
                opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), 
                "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), 
                opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", 
                !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 
                opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
                var mask = "[+]";
                if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", 
                opts.digits !== undefined) {
                    opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;
                    var dq = opts.digits.toString().split(",");
                    isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");
                }
                return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            inputmode: "numeric",
            preValidation: function(buffer, pos, c, isSelection, opts) {
                if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, 
                "" === buffer.join("") || {
                    caret: pos,
                    dopost: !0
                });
                if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
                    var radixPos = $.inArray(opts.radixPoint, buffer);
                    if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {
                        caret: radixPos + 1
                    };
                }
                return !0;
            },
            postValidation: function(buffer, currentResult, opts) {
                var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");
                if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;
                var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();
                opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());
                var charAtPos = maskedValue[caretPos];
                if (charAtPos === opts.groupSeparator && (caretPos += 1, charAtPos = maskedValue[caretPos]), 
                caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;
                charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", 
                opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), 
                prefix = prefix.join(""), suffix = suffix.join("");
                var processValue = maskedValue.join("").replace(prefix, "");
                if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), 
                processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\\?/g, "")), 
                processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), 
                "" !== processValue) {
                    if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {
                        var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);
                        -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
                        for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);
                    }
                    if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {
                        var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;
                        processValue = Inputmask(function(buffer, opts) {
                            var postMask = "";
                            if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {
                                var radixSplit = buffer.join("").split(opts.radixPoint);
                                radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\\d*\\??\\d*/)[0].length + "}");
                            }
                            return postMask;
                        }(processValue, opts), {
                            numericInput: !0,
                            jitMasking: !0,
                            definitions: {
                                "*": {
                                    validator: "[0-9?]",
                                    cardinality: 1
                                }
                            }
                        }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), 
                        processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);
                    }
                }
                if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), 
                processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, 
                processValue += opts.negationSymbol.back), processValue = processValue.split(""), 
                charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) caretPos = $.inArray("?", processValue), 
                caretPos > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {
                    var newCaretPos = $.inArray(charAtPos, processValue);
                    -1 !== newCaretPos && (caretPos = newCaretPos);
                }
                opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());
                var rslt = {
                    caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,
                    buffer: processValue,
                    refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")
                };
                return rslt.refreshFromBuffer ? rslt : currentResult;
            },
            onBeforeWrite: function(e, buffer, caretPos, opts) {
                if (e) switch (e.type) {
                  case "keydown":
                    return opts.postValidation(buffer, {
                        caret: caretPos,
                        dopost: !0
                    }, opts);

                  case "blur":
                  case "checkval":
                    var unmasked;
                    if (function(opts) {
                        opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 
                        opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 
                        null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                        "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 
                        opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 
                        opts.parseMinMaxOptions = "done");
                    }(opts), null !== opts.min || null !== opts.max) {
                        if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {
                            unmaskAsNumber: !0
                        })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, 
                        opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {
                            caret: caretPos,
                            dopost: !0,
                            placeholder: "0"
                        }, opts);
                        if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, 
                        opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {
                            caret: caretPos,
                            dopost: !0,
                            placeholder: "0"
                        }, opts);
                    }
                    return opts.postValidation(buffer, {
                        caret: caretPos,
                        placeholder: "0",
                        event: "blur"
                    }, opts);

                  case "_checkval":
                    return {
                        caret: caretPos
                    };
                }
            },
            regex: {
                integerPart: function(opts, emptyCheck) {
                    return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\\\d+");
                },
                integerNPart: function(opts) {
                    return new RegExp("[\\\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
                }
            },
            definitions: {
                "~": {
                    validator: function(chrs, maskset, pos, strict, opts, isSelection) {
                        var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);
                        if (!0 === isValid) {
                            if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {
                                var processValue = maskset.buffer.join("");
                                processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 
                                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "");
                                var pvRadixSplit = processValue.split(opts.radixPoint);
                                pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), 
                                "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), 
                                processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";
                                var bufferTemplate = maskset._buffer.join("");
                                for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);
                                processValue = processValue.replace(bufferTemplate, ""), processValue = processValue.split(""), 
                                isValid = processValue[pos] === undefined ? {
                                    pos: pos,
                                    remove: pos
                                } : {
                                    pos: pos
                                };
                            }
                        } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", 
                        isValid = {
                            pos: pos + 1
                        });
                        return isValid;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        return opts.allowMinus && chrs === opts.negationSymbol.back;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(chrs, maskset, pos, strict, opts) {
                        var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);
                        return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                            caret: pos + 1
                        }), isValid;
                    },
                    cardinality: 1,
                    placeholder: function(opts) {
                        return opts.radixPoint;
                    }
                }
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 
                opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 
                processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 
                processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 
                Number(processValue)) : processValue;
            },
            isComplete: function(buffer, opts) {
                var maskedValue = buffer.join("");
                if (buffer.slice().join("") !== maskedValue) return !1;
                var processValue = maskedValue.replace(opts.prefix, "");
                return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 
                isFinite(processValue);
            },
            onBeforeMask: function(initialValue, opts) {
                if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), 
                "" !== opts.radixPoint && isFinite(initialValue)) {
                    var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;
                    2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));
                }
                var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\\./g);
                if (dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\\./g, ""), 
                initialValue = initialValue.replace(",", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, ""), 
                initialValue = initialValue.replace(".", opts.radixPoint)) : initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\\./g, "") : initialValue.replace(/,/g, "") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 
                0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), 
                "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {
                    var valueParts = initialValue.split(opts.radixPoint), decPart = valueParts[1].match(new RegExp("\\\\d*"))[0];
                    if (parseInt(opts.digits) < decPart.toString().length) {
                        var digitsFactor = Math.pow(10, parseInt(opts.digits));
                        initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), 
                        initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor, 
                        initialValue = initialValue.toString().replace(".", opts.radixPoint);
                    }
                }
                return initialValue;
            },
            canClearPosition: function(maskset, position, lvp, strict, opts) {
                var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;
                return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), 
                canClear;
            },
            onKeyDown: function(e, buffer, caretPos, opts) {
                var $input = $(this);
                if (e.ctrlKey) switch (e.keyCode) {
                  case Inputmask.keyCode.UP:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
                    break;

                  case Inputmask.keyCode.DOWN:
                    $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            digitsOptional: !0,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowMinus: !1
        }
    }), Inputmask;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanM/ZTAyOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQ0FBK0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDZCQUE2QixlQUFlLDJCQUEyQjtBQUMzSztBQUNBO0FBQ0E7QUFDQSwrR0FBK0csb0JBQW9CLG1JQUFtSSxzQkFBc0Isa0RBQWtELG9CQUFvQjtBQUNsVztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBLCtNQUErTTtBQUMvTTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsdUJBQXVCLEVBQUUsRUFBRTtBQUN0RztBQUNBLG1GQUFtRixvREFBb0Q7QUFDdkk7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw0RkFBNEY7QUFDNUY7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlHQUF5RywwRUFBMEU7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIGlucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbiogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9JbnB1dG1hc2tcbiogQ29weXJpZ2h0IChjKSAyMDEwIC0gMjAxNyBSb2JpbiBIZXJib3RzXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4qIFZlcnNpb246IDMuMy44XG4qL1xuXG4hZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcIi4vZGVwZW5kZW5jeUxpYnMvaW5wdXRtYXNrLmRlcGVuZGVuY3lMaWJcIiwgXCIuL2lucHV0bWFza1wiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiKSwgcmVxdWlyZShcIi4vaW5wdXRtYXNrXCIpKSA6IGZhY3Rvcnkod2luZG93LmRlcGVuZGVuY3lMaWIgfHwgalF1ZXJ5LCB3aW5kb3cuSW5wdXRtYXNrKTtcbn0oZnVuY3Rpb24oJCwgSW5wdXRtYXNrLCB1bmRlZmluZWQpIHtcbiAgICBmdW5jdGlvbiBhdXRvRXNjYXBlKHR4dCwgb3B0cykge1xuICAgICAgICBmb3IgKHZhciBlc2NhcGVkVHh0ID0gXCJcIiwgaSA9IDA7IGkgPCB0eHQubGVuZ3RoOyBpKyspIElucHV0bWFzay5wcm90b3R5cGUuZGVmaW5pdGlvbnNbdHh0LmNoYXJBdChpKV0gfHwgb3B0cy5kZWZpbml0aW9uc1t0eHQuY2hhckF0KGkpXSB8fCBvcHRzLm9wdGlvbmFsbWFya2VyLnN0YXJ0ID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMub3B0aW9uYWxtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMucXVhbnRpZmllcm1hcmtlci5zdGFydCA9PT0gdHh0LmNoYXJBdChpKSB8fCBvcHRzLnF1YW50aWZpZXJtYXJrZXIuZW5kID09PSB0eHQuY2hhckF0KGkpIHx8IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5ncm91cG1hcmtlci5lbmQgPT09IHR4dC5jaGFyQXQoaSkgfHwgb3B0cy5hbHRlcm5hdG9ybWFya2VyID09PSB0eHQuY2hhckF0KGkpID8gZXNjYXBlZFR4dCArPSBcIlxcXFxcIiArIHR4dC5jaGFyQXQoaSkgOiBlc2NhcGVkVHh0ICs9IHR4dC5jaGFyQXQoaSk7XG4gICAgICAgIHJldHVybiBlc2NhcGVkVHh0O1xuICAgIH1cbiAgICByZXR1cm4gSW5wdXRtYXNrLmV4dGVuZEFsaWFzZXMoe1xuICAgICAgICBudW1lcmljOiB7XG4gICAgICAgICAgICBtYXNrOiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgIT09IG9wdHMucmVwZWF0ICYmIGlzTmFOKG9wdHMuaW50ZWdlckRpZ2l0cykgJiYgKG9wdHMuaW50ZWdlckRpZ2l0cyA9IG9wdHMucmVwZWF0KSwgXG4gICAgICAgICAgICAgICAgb3B0cy5yZXBlYXQgPSAwLCBvcHRzLmdyb3VwU2VwYXJhdG9yID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKFwiLlwiID09PSBvcHRzLnJhZGl4UG9pbnQgPyBvcHRzLmdyb3VwU2VwYXJhdG9yID0gXCIsXCIgOiBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ID8gb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiLlwiIDogb3B0cy5ncm91cFNlcGFyYXRvciA9IFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIiBcIiA9PT0gb3B0cy5ncm91cFNlcGFyYXRvciAmJiAob3B0cy5za2lwT3B0aW9uYWxQYXJ0Q2hhcmFjdGVyID0gdW5kZWZpbmVkKSwgb3B0cy5hdXRvR3JvdXAgPSBvcHRzLmF1dG9Hcm91cCAmJiBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yLCBcbiAgICAgICAgICAgICAgICBvcHRzLmF1dG9Hcm91cCAmJiAoXCJzdHJpbmdcIiA9PSB0eXBlb2Ygb3B0cy5ncm91cFNpemUgJiYgaXNGaW5pdGUob3B0cy5ncm91cFNpemUpICYmIChvcHRzLmdyb3VwU2l6ZSA9IHBhcnNlSW50KG9wdHMuZ3JvdXBTaXplKSksIFxuICAgICAgICAgICAgICAgIGlzRmluaXRlKG9wdHMuaW50ZWdlckRpZ2l0cykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXBzID0gTWF0aC5mbG9vcihvcHRzLmludGVnZXJEaWdpdHMgLyBvcHRzLmdyb3VwU2l6ZSksIG1vZCA9IG9wdHMuaW50ZWdlckRpZ2l0cyAlIG9wdHMuZ3JvdXBTaXplO1xuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPSBwYXJzZUludChvcHRzLmludGVnZXJEaWdpdHMpICsgKDAgPT09IG1vZCA/IHNlcHMgLSAxIDogc2VwcyksIFxuICAgICAgICAgICAgICAgICAgICBvcHRzLmludGVnZXJEaWdpdHMgPCAxICYmIChvcHRzLmludGVnZXJEaWdpdHMgPSBcIipcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdHMucGxhY2Vob2xkZXIubGVuZ3RoID4gMSAmJiAob3B0cy5wbGFjZWhvbGRlciA9IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSwgXG4gICAgICAgICAgICAgICAgXCJyYWRpeEZvY3VzXCIgPT09IG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgJiYgXCJcIiA9PT0gb3B0cy5wbGFjZWhvbGRlciAmJiAhMSA9PT0gb3B0cy5pbnRlZ2VyT3B0aW9uYWwgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcImx2cFwiKSwgXG4gICAgICAgICAgICAgICAgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0gPSBvcHRzLmRlZmluaXRpb25zW1wiflwiXSwgb3B0cy5kZWZpbml0aW9uc1tcIjtcIl0uZGVmaW5pdGlvblN5bWJvbCA9IFwiflwiLCBcbiAgICAgICAgICAgICAgICAhMCA9PT0gb3B0cy5udW1lcmljSW5wdXQgJiYgKG9wdHMucG9zaXRpb25DYXJldE9uQ2xpY2sgPSBcInJhZGl4Rm9jdXNcIiA9PT0gb3B0cy5wb3NpdGlvbkNhcmV0T25DbGljayA/IFwibHZwXCIgOiBvcHRzLnBvc2l0aW9uQ2FyZXRPbkNsaWNrLCBcbiAgICAgICAgICAgICAgICBvcHRzLmRpZ2l0c09wdGlvbmFsID0gITEsIGlzTmFOKG9wdHMuZGlnaXRzKSAmJiAob3B0cy5kaWdpdHMgPSAyKSwgb3B0cy5kZWNpbWFsUHJvdGVjdCA9ICExKTtcbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9IFwiWytdXCI7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2sgKz0gYXV0b0VzY2FwZShvcHRzLnByZWZpeCwgb3B0cyksICEwID09PSBvcHRzLmludGVnZXJPcHRpb25hbCA/IG1hc2sgKz0gXCJ+ezEsXCIgKyBvcHRzLmludGVnZXJEaWdpdHMgKyBcIn1cIiA6IG1hc2sgKz0gXCJ+e1wiICsgb3B0cy5pbnRlZ2VyRGlnaXRzICsgXCJ9XCIsIFxuICAgICAgICAgICAgICAgIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCA9IG9wdHMuZGVjaW1hbFByb3RlY3QgPyBcIjpcIiA6IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRxID0gb3B0cy5kaWdpdHMudG9TdHJpbmcoKS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluaXRlKGRxWzBdICYmIGRxWzFdICYmIGlzRmluaXRlKGRxWzFdKSkgPyBtYXNrICs9IG9wdHMucmFkaXhQb2ludERlZmluaXRpb25TeW1ib2wgKyBcIjt7XCIgKyBvcHRzLmRpZ2l0cyArIFwifVwiIDogKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSAmJiAob3B0cy5kaWdpdHNPcHRpb25hbCA/IG1hc2sgKz0gXCJbXCIgKyBvcHRzLnJhZGl4UG9pbnREZWZpbml0aW9uU3ltYm9sICsgXCI7ezEsXCIgKyBvcHRzLmRpZ2l0cyArIFwifV1cIiA6IG1hc2sgKz0gb3B0cy5yYWRpeFBvaW50RGVmaW5pdGlvblN5bWJvbCArIFwiO3tcIiArIG9wdHMuZGlnaXRzICsgXCJ9XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFzayArPSBhdXRvRXNjYXBlKG9wdHMuc3VmZml4LCBvcHRzKSwgbWFzayArPSBcIlstXVwiLCBvcHRzLmdyZWVkeSA9ICExLCBtYXNrO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgZ3JlZWR5OiAhMSxcbiAgICAgICAgICAgIGRpZ2l0czogXCIqXCIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITAsXG4gICAgICAgICAgICBlbmZvcmNlRGlnaXRzT25CbHVyOiAhMSxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiLlwiLFxuICAgICAgICAgICAgcG9zaXRpb25DYXJldE9uQ2xpY2s6IFwicmFkaXhGb2N1c1wiLFxuICAgICAgICAgICAgZ3JvdXBTaXplOiAzLFxuICAgICAgICAgICAgZ3JvdXBTZXBhcmF0b3I6IFwiXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgYWxsb3dNaW51czogITAsXG4gICAgICAgICAgICBuZWdhdGlvblN5bWJvbDoge1xuICAgICAgICAgICAgICAgIGZyb250OiBcIi1cIixcbiAgICAgICAgICAgICAgICBiYWNrOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZWdlckRpZ2l0czogXCIrXCIsXG4gICAgICAgICAgICBpbnRlZ2VyT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgcmlnaHRBbGlnbjogITAsXG4gICAgICAgICAgICBkZWNpbWFsUHJvdGVjdDogITAsXG4gICAgICAgICAgICBtaW46IG51bGwsXG4gICAgICAgICAgICBtYXg6IG51bGwsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgICAgaW5zZXJ0TW9kZTogITAsXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiAhMSxcbiAgICAgICAgICAgIHVubWFza0FzTnVtYmVyOiAhMSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBwcmVWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIHBvcywgYywgaXNTZWxlY3Rpb24sIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCItXCIgPT09IGMgfHwgYyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCkgcmV0dXJuICEwID09PSBvcHRzLmFsbG93TWludXMgJiYgKG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMuaXNOZWdhdGl2ZSA9PT0gdW5kZWZpbmVkIHx8ICFvcHRzLmlzTmVnYXRpdmUsIFxuICAgICAgICAgICAgICAgIFwiXCIgPT09IGJ1ZmZlci5qb2luKFwiXCIpIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgZG9wb3N0OiAhMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghMSA9PT0gaXNTZWxlY3Rpb24gJiYgYyA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG9wdHMuZGlnaXRzICE9PSB1bmRlZmluZWQgJiYgKGlzTmFOKG9wdHMuZGlnaXRzKSB8fCBwYXJzZUludChvcHRzLmRpZ2l0cykgPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3MgPSAkLmluQXJyYXkob3B0cy5yYWRpeFBvaW50LCBidWZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoLTEgIT09IHJhZGl4UG9zKSByZXR1cm4gITAgPT09IG9wdHMubnVtZXJpY0lucHV0ID8gcG9zID09PSByYWRpeFBvcyA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiByYWRpeFBvcyArIDFcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc3RWYWxpZGF0aW9uOiBmdW5jdGlvbihidWZmZXIsIGN1cnJlbnRSZXN1bHQsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gb3B0cy5zdWZmaXguc3BsaXQoXCJcIiksIHByZWZpeCA9IG9wdHMucHJlZml4LnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzdWx0LnBvcyA9PT0gdW5kZWZpbmVkICYmIGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCAmJiAhMCAhPT0gY3VycmVudFJlc3VsdC5kb3Bvc3QpIHJldHVybiBjdXJyZW50UmVzdWx0O1xuICAgICAgICAgICAgICAgIHZhciBjYXJldFBvcyA9IGN1cnJlbnRSZXN1bHQuY2FyZXQgIT09IHVuZGVmaW5lZCA/IGN1cnJlbnRSZXN1bHQuY2FyZXQgOiBjdXJyZW50UmVzdWx0LnBvcywgbWFza2VkVmFsdWUgPSBidWZmZXIuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBjYXJldFBvcyAtIDEsIG1hc2tlZFZhbHVlID0gbWFza2VkVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhckF0UG9zID0gbWFza2VkVmFsdWVbY2FyZXRQb3NdO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyQXRQb3MgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgJiYgKGNhcmV0UG9zICs9IDEsIGNoYXJBdFBvcyA9IG1hc2tlZFZhbHVlW2NhcmV0UG9zXSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID09PSBtYXNrZWRWYWx1ZS5sZW5ndGggLSBvcHRzLnN1ZmZpeC5sZW5ndGggLSAxICYmIGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50KSByZXR1cm4gY3VycmVudFJlc3VsdDtcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCAmJiBjaGFyQXRQb3MgIT09IG9wdHMucmFkaXhQb2ludCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgJiYgY2hhckF0UG9zICE9PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2sgJiYgKG1hc2tlZFZhbHVlW2NhcmV0UG9zXSA9IFwiP1wiLCBcbiAgICAgICAgICAgICAgICBvcHRzLnByZWZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49ICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIGNhcmV0UG9zIDwgb3B0cy5wcmVmaXgubGVuZ3RoIC0gMSArICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApID8gcHJlZml4W2NhcmV0UG9zIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCldID0gXCI/XCIgOiBvcHRzLnN1ZmZpeC5sZW5ndGggPiAwICYmIGNhcmV0UG9zID49IG1hc2tlZFZhbHVlLmxlbmd0aCAtIG9wdHMuc3VmZml4Lmxlbmd0aCAtICghMSA9PT0gb3B0cy5pc05lZ2F0aXZlID8gMSA6IDApICYmIChzdWZmaXhbY2FyZXRQb3MgLSAobWFza2VkVmFsdWUubGVuZ3RoIC0gb3B0cy5zdWZmaXgubGVuZ3RoIC0gKCExID09PSBvcHRzLmlzTmVnYXRpdmUgPyAxIDogMCkpXSA9IFwiP1wiKSksIFxuICAgICAgICAgICAgICAgIHByZWZpeCA9IHByZWZpeC5qb2luKFwiXCIpLCBzdWZmaXggPSBzdWZmaXguam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUuam9pbihcIlwiKS5yZXBsYWNlKHByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKHN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2spICsgXCIkXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaXNOYU4ob3B0cy5wbGFjZWhvbGRlcikgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMucGxhY2Vob2xkZXIpLCBcImdcIiksIFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlLmxlbmd0aCA+IDEgJiYgMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAoXCIwXCIgPT09IGNoYXJBdFBvcyAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoL15cXD8vZywgXCJcIikpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZSgvXjAvZywgXCJcIikpLCBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50ICYmICEwICE9PSBvcHRzLm51bWVyaWNJbnB1dCAmJiAocHJvY2Vzc1ZhbHVlID0gXCIwXCIgKyBwcm9jZXNzVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBwcm9jZXNzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5zcGxpdChcIlwiKSwgKCFvcHRzLmRpZ2l0c09wdGlvbmFsIHx8IG9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCkgJiYgaXNGaW5pdGUob3B0cy5kaWdpdHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFkaXhQb3NpdGlvbiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIHByb2Nlc3NWYWx1ZSksIHJwYiA9ICQuaW5BcnJheShvcHRzLnJhZGl4UG9pbnQsIG1hc2tlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0xID09PSByYWRpeFBvc2l0aW9uICYmIChwcm9jZXNzVmFsdWUucHVzaChvcHRzLnJhZGl4UG9pbnQpLCByYWRpeFBvc2l0aW9uID0gcHJvY2Vzc1ZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gb3B0cy5kaWdpdHM7IGkrKykgb3B0cy5kaWdpdHNPcHRpb25hbCAmJiAoIW9wdHMuZW5mb3JjZURpZ2l0c09uQmx1ciB8fCBcImJsdXJcIiAhPT0gY3VycmVudFJlc3VsdC5ldmVudCkgfHwgcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSAhPT0gdW5kZWZpbmVkICYmIHByb2Nlc3NWYWx1ZVtyYWRpeFBvc2l0aW9uICsgaV0gIT09IG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApID8gLTEgIT09IHJwYiAmJiBtYXNrZWRWYWx1ZVtycGIgKyBpXSAhPT0gdW5kZWZpbmVkICYmIChwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gcHJvY2Vzc1ZhbHVlW3JhZGl4UG9zaXRpb24gKyBpXSB8fCBtYXNrZWRWYWx1ZVtycGIgKyBpXSkgOiBwcm9jZXNzVmFsdWVbcmFkaXhQb3NpdGlvbiArIGldID0gY3VycmVudFJlc3VsdC5wbGFjZWhvbGRlciB8fCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoITAgIT09IG9wdHMuYXV0b0dyb3VwIHx8IFwiXCIgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgY2hhckF0UG9zID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgY3VycmVudFJlc3VsdC5wb3MgPT09IHVuZGVmaW5lZCAmJiAhY3VycmVudFJlc3VsdC5kb3Bvc3QpIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5qb2luKFwiXCIpOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRSYWRpeCA9IHByb2Nlc3NWYWx1ZVtwcm9jZXNzVmFsdWUubGVuZ3RoIC0gMV0gPT09IG9wdHMucmFkaXhQb2ludCAmJiBjdXJyZW50UmVzdWx0LmMgPT09IG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IElucHV0bWFzayhmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9zdE1hc2sgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0TWFzayArPSBcIihcIiArIG9wdHMuZ3JvdXBTZXBhcmF0b3IgKyBcIip7XCIgKyBvcHRzLmdyb3VwU2l6ZSArIFwifSl7Kn1cIiwgXCJcIiAhPT0gb3B0cy5yYWRpeFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYWRpeFNwbGl0ID0gYnVmZmVyLmpvaW4oXCJcIikuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXhTcGxpdFsxXSAmJiAocG9zdE1hc2sgKz0gb3B0cy5yYWRpeFBvaW50ICsgXCIqe1wiICsgcmFkaXhTcGxpdFsxXS5tYXRjaCgvXlxcZCpcXD8/XFxkKi8pWzBdLmxlbmd0aCArIFwifVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNYXNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfShwcm9jZXNzVmFsdWUsIG9wdHMpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJpY0lucHV0OiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqaXRNYXNraW5nOiAhMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTk/XVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmZvcm1hdChwcm9jZXNzVmFsdWUuam9pbihcIlwiKSksIGFkZFJhZGl4ICYmIChwcm9jZXNzVmFsdWUgKz0gb3B0cy5yYWRpeFBvaW50KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUuY2hhckF0KDApID09PSBvcHRzLmdyb3VwU2VwYXJhdG9yICYmIHByb2Nlc3NWYWx1ZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSAmJiBcImJsdXJcIiA9PT0gY3VycmVudFJlc3VsdC5ldmVudCAmJiAob3B0cy5pc05lZ2F0aXZlID0gXCIwXCIgIT09IHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByZWZpeCArIHByb2Nlc3NWYWx1ZSwgcHJvY2Vzc1ZhbHVlICs9IHN1ZmZpeCwgb3B0cy5pc05lZ2F0aXZlICYmIChwcm9jZXNzVmFsdWUgPSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250ICsgcHJvY2Vzc1ZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgKz0gb3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjaGFyQXRQb3MgIT09IHVuZGVmaW5lZCkgaWYgKGNoYXJBdFBvcyAhPT0gb3B0cy5yYWRpeFBvaW50ICYmIGNoYXJBdFBvcyAhPT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCAmJiBjaGFyQXRQb3MgIT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykgY2FyZXRQb3MgPSAkLmluQXJyYXkoXCI/XCIsIHByb2Nlc3NWYWx1ZSksIFxuICAgICAgICAgICAgICAgIGNhcmV0UG9zID4gLTEgPyBwcm9jZXNzVmFsdWVbY2FyZXRQb3NdID0gY2hhckF0UG9zIDogY2FyZXRQb3MgPSBjdXJyZW50UmVzdWx0LmNhcmV0IHx8IDA7IGVsc2UgaWYgKGNoYXJBdFBvcyA9PT0gb3B0cy5yYWRpeFBvaW50IHx8IGNoYXJBdFBvcyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCB8fCBjaGFyQXRQb3MgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q2FyZXRQb3MgPSAkLmluQXJyYXkoY2hhckF0UG9zLCBwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAtMSAhPT0gbmV3Q2FyZXRQb3MgJiYgKGNhcmV0UG9zID0gbmV3Q2FyZXRQb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcHRzLm51bWVyaWNJbnB1dCAmJiAoY2FyZXRQb3MgPSBwcm9jZXNzVmFsdWUubGVuZ3RoIC0gY2FyZXRQb3MgLSAxLCBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgICAgICB2YXIgcnNsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZXQ6IGNoYXJBdFBvcyA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRSZXN1bHQucG9zICE9PSB1bmRlZmluZWQgPyBjYXJldFBvcyArIChvcHRzLm51bWVyaWNJbnB1dCA/IC0xIDogMSkgOiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyOiBwcm9jZXNzVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hGcm9tQnVmZmVyOiBjdXJyZW50UmVzdWx0LmRvcG9zdCB8fCBidWZmZXIuam9pbihcIlwiKSAhPT0gcHJvY2Vzc1ZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiByc2x0LnJlZnJlc2hGcm9tQnVmZmVyID8gcnNsdCA6IGN1cnJlbnRSZXN1bHQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25CZWZvcmVXcml0ZTogZnVuY3Rpb24oZSwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xuICAgICAgICAgICAgICAgIGlmIChlKSBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImtleWRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdHMpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYmx1clwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImNoZWNrdmFsXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciB1bm1hc2tlZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMucGFyc2VNaW5NYXhPcHRpb25zID09PSB1bmRlZmluZWQgJiYgKG51bGwgIT09IG9wdHMubWluICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLmdyb3VwU2VwYXJhdG9yKSwgXCJnXCIpLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcIixcIiA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChvcHRzLm1pbiA9IG9wdHMubWluLnJlcGxhY2Uob3B0cy5yYWRpeFBvaW50LCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMubWluID0gaXNGaW5pdGUob3B0cy5taW4pID8gcGFyc2VGbG9hdChvcHRzLm1pbikgOiBOYU4sIGlzTmFOKG9wdHMubWluKSAmJiAob3B0cy5taW4gPSBOdW1iZXIuTUlOX1ZBTFVFKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gb3B0cy5tYXggJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKG9wdHMubWF4ID0gb3B0cy5tYXgucmVwbGFjZShvcHRzLnJhZGl4UG9pbnQsIFwiLlwiKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXggPSBpc0Zpbml0ZShvcHRzLm1heCkgPyBwYXJzZUZsb2F0KG9wdHMubWF4KSA6IE5hTiwgaXNOYU4ob3B0cy5tYXgpICYmIChvcHRzLm1heCA9IE51bWJlci5NQVhfVkFMVUUpKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBhcnNlTWluTWF4T3B0aW9ucyA9IFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfShvcHRzKSwgbnVsbCAhPT0gb3B0cy5taW4gfHwgbnVsbCAhPT0gb3B0cy5tYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bm1hc2tlZCA9IG9wdHMub25Vbk1hc2soYnVmZmVyLmpvaW4oXCJcIiksIHVuZGVmaW5lZCwgJC5leHRlbmQoe30sIG9wdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hc2tBc051bWJlcjogITBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSwgbnVsbCAhPT0gb3B0cy5taW4gJiYgdW5tYXNrZWQgPCBvcHRzLm1pbikgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWluIDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWluLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCAhPT0gb3B0cy5tYXggJiYgdW5tYXNrZWQgPiBvcHRzLm1heCkgcmV0dXJuIG9wdHMuaXNOZWdhdGl2ZSA9IG9wdHMubWF4IDwgMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRzLnBvc3RWYWxpZGF0aW9uKG9wdHMubWF4LnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgb3B0cy5yYWRpeFBvaW50KS5zcGxpdChcIlwiKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3Bvc3Q6ICEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucG9zdFZhbGlkYXRpb24oYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogY2FyZXRQb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogXCJibHVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0cyk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJfY2hlY2t2YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0OiBjYXJldFBvc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdleDoge1xuICAgICAgICAgICAgICAgIGludGVnZXJQYXJ0OiBmdW5jdGlvbihvcHRzLCBlbXB0eUNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbXB0eUNoZWNrID8gbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XCIpIDogbmV3IFJlZ0V4cChcIltcIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiK10/XFxcXGQrXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZWdlck5QYXJ0OiBmdW5jdGlvbihvcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiW1xcXFxkXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvcikgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5wbGFjZWhvbGRlci5jaGFyQXQoMCkpICsgXCJdK1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBcIn5cIjoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKGNocnMsIG1hc2tzZXQsIHBvcywgc3RyaWN0LCBvcHRzLCBpc1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWQgPSBzdHJpY3QgPyBuZXcgUmVnRXhwKFwiWzAtOVwiICsgSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpICsgXCJdXCIpLnRlc3QoY2hycykgOiBuZXcgUmVnRXhwKFwiWzAtOV1cIikudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCA9PT0gaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghMCAhPT0gb3B0cy5udW1lcmljSW5wdXQgJiYgbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NdICE9PSB1bmRlZmluZWQgJiYgXCJ+XCIgPT09IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXS5tYXRjaC5kZWYgJiYgIWlzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZXNzVmFsdWUgPSBtYXNrc2V0LmJ1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKFwiWy1cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSArIFwiXVwiLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwdlJhZGl4U3BsaXQgPSBwcm9jZXNzVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHZSYWRpeFNwbGl0Lmxlbmd0aCA+IDEgJiYgKHB2UmFkaXhTcGxpdFsxXSA9IHB2UmFkaXhTcGxpdFsxXS5yZXBsYWNlKC8wL2csIG9wdHMucGxhY2Vob2xkZXIuY2hhckF0KDApKSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIiA9PT0gcHZSYWRpeFNwbGl0WzBdICYmIChwdlJhZGl4U3BsaXRbMF0gPSBwdlJhZGl4U3BsaXRbMF0ucmVwbGFjZSgvMC9nLCBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSkpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHZSYWRpeFNwbGl0WzBdICsgb3B0cy5yYWRpeFBvaW50ICsgcHZSYWRpeFNwbGl0WzFdIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWZmZXJUZW1wbGF0ZSA9IG1hc2tzZXQuX2J1ZmZlci5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb2Nlc3NWYWx1ZSA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIChwcm9jZXNzVmFsdWUgPSBidWZmZXJUZW1wbGF0ZSk7IG51bGwgPT09IHByb2Nlc3NWYWx1ZS5tYXRjaChJbnB1dG1hc2suZXNjYXBlUmVnZXgoYnVmZmVyVGVtcGxhdGUpICsgXCIkXCIpOyApIGJ1ZmZlclRlbXBsYXRlID0gYnVmZmVyVGVtcGxhdGUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKGJ1ZmZlclRlbXBsYXRlLCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnNwbGl0KFwiXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IHByb2Nlc3NWYWx1ZVtwb3NdID09PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3M6IHBvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBzdHJpY3QgfHwgY2hycyAhPT0gb3B0cy5yYWRpeFBvaW50IHx8IG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zIC0gMV0gIT09IHVuZGVmaW5lZCB8fCAobWFza3NldC5idWZmZXJbcG9zXSA9IFwiMFwiLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBwb3MgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjYXJkaW5hbGl0eTogMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIrXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiAoXCItXCIgPT09IGNocnMgfHwgY2hycyA9PT0gb3B0cy5uZWdhdGlvblN5bWJvbC5mcm9udCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCItXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMuYWxsb3dNaW51cyAmJiBjaHJzID09PSBvcHRzLm5lZ2F0aW9uU3ltYm9sLmJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI6XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbihjaHJzLCBtYXNrc2V0LCBwb3MsIHN0cmljdCwgb3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhZGl4ID0gXCJbXCIgKyBJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSArIFwiXVwiLCBpc1ZhbGlkID0gbmV3IFJlZ0V4cChyYWRpeCkudGVzdChjaHJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zXSAmJiBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc10ubWF0Y2gucGxhY2Vob2xkZXIgPT09IG9wdHMucmFkaXhQb2ludCAmJiAoaXNWYWxpZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldDogcG9zICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIGlzVmFsaWQ7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhcmRpbmFsaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdHMucmFkaXhQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJcIiA9PT0gdW5tYXNrZWRWYWx1ZSAmJiAhMCA9PT0gb3B0cy5udWxsYWJsZSkgcmV0dXJuIHVubWFza2VkVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NWYWx1ZSA9IG1hc2tlZFZhbHVlLnJlcGxhY2Uob3B0cy5wcmVmaXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzVmFsdWUgPSBwcm9jZXNzVmFsdWUucmVwbGFjZShvcHRzLnN1ZmZpeCwgXCJcIiksIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4KG9wdHMuZ3JvdXBTZXBhcmF0b3IpLCBcImdcIiksIFwiXCIpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChvcHRzLnBsYWNlaG9sZGVyLmNoYXJBdCgwKSwgXCJnXCIpLCBcIjBcIikpLCBcbiAgICAgICAgICAgICAgICBvcHRzLnVubWFza0FzTnVtYmVyID8gKFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiAtMSAhPT0gcHJvY2Vzc1ZhbHVlLmluZGV4T2Yob3B0cy5yYWRpeFBvaW50KSAmJiAocHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UoSW5wdXRtYXNrLmVzY2FwZVJlZ2V4LmNhbGwodGhpcywgb3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLm5lZ2F0aW9uU3ltYm9sLmZyb250KSksIFwiLVwiKSwgXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5uZWdhdGlvblN5bWJvbC5iYWNrKSArIFwiJFwiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIE51bWJlcihwcm9jZXNzVmFsdWUpKSA6IHByb2Nlc3NWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbihidWZmZXIsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFza2VkVmFsdWUgPSBidWZmZXIuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyLnNsaWNlKCkuam9pbihcIlwiKSAhPT0gbWFza2VkVmFsdWUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc1ZhbHVlID0gbWFza2VkVmFsdWUucmVwbGFjZShvcHRzLnByZWZpeCwgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKG9wdHMuc3VmZml4LCBcIlwiKSwgcHJvY2Vzc1ZhbHVlID0gcHJvY2Vzc1ZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIFwiLFwiID09PSBvcHRzLnJhZGl4UG9pbnQgJiYgKHByb2Nlc3NWYWx1ZSA9IHByb2Nlc3NWYWx1ZS5yZXBsYWNlKElucHV0bWFzay5lc2NhcGVSZWdleChvcHRzLnJhZGl4UG9pbnQpLCBcIi5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0Zpbml0ZShwcm9jZXNzVmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24oaW5pdGlhbFZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuaXNOZWdhdGl2ZSA9IHVuZGVmaW5lZCwgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuY2hhckF0KGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA9PT0gb3B0cy5yYWRpeFBvaW50ID8gaW5pdGlhbFZhbHVlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluaXRpYWxWYWx1ZS5sZW5ndGggLSAxKSA6IGluaXRpYWxWYWx1ZS50b1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICBcIlwiICE9PSBvcHRzLnJhZGl4UG9pbnQgJiYgaXNGaW5pdGUoaW5pdGlhbFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdnMgPSBpbml0aWFsVmFsdWUuc3BsaXQoXCIuXCIpLCBncm91cFNpemUgPSBcIlwiICE9PSBvcHRzLmdyb3VwU2VwYXJhdG9yID8gcGFyc2VJbnQob3B0cy5ncm91cFNpemUpIDogMDtcbiAgICAgICAgICAgICAgICAgICAgMiA9PT0gdnMubGVuZ3RoICYmICh2c1swXS5sZW5ndGggPiBncm91cFNpemUgfHwgdnNbMV0ubGVuZ3RoID4gZ3JvdXBTaXplIHx8IHZzWzBdLmxlbmd0aCA8PSBncm91cFNpemUgJiYgdnNbMV0ubGVuZ3RoIDwgZ3JvdXBTaXplKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIga29tbWFNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC8sL2cpLCBkb3RNYXRjaGVzID0gaW5pdGlhbFZhbHVlLm1hdGNoKC9cXC4vZyk7XG4gICAgICAgICAgICAgICAgaWYgKGRvdE1hdGNoZXMgJiYga29tbWFNYXRjaGVzID8gZG90TWF0Y2hlcy5sZW5ndGggPiBrb21tYU1hdGNoZXMubGVuZ3RoID8gKGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC9cXC4vZywgXCJcIiksIFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZS5yZXBsYWNlKFwiLFwiLCBvcHRzLnJhZGl4UG9pbnQpKSA6IGtvbW1hTWF0Y2hlcy5sZW5ndGggPiBkb3RNYXRjaGVzLmxlbmd0aCA/IChpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZSgvLC9nLCBcIlwiKSwgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UoXCIuXCIsIG9wdHMucmFkaXhQb2ludCkpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpIDwgaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIsXCIpID8gaW5pdGlhbFZhbHVlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSA6IGluaXRpYWxWYWx1ZS5yZXBsYWNlKC8sL2csIFwiXCIpIDogaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnJlcGxhY2UobmV3IFJlZ0V4cChJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5ncm91cFNlcGFyYXRvciksIFwiZ1wiKSwgXCJcIiksIFxuICAgICAgICAgICAgICAgIDAgPT09IG9wdHMuZGlnaXRzICYmICgtMSAhPT0gaW5pdGlhbFZhbHVlLmluZGV4T2YoXCIuXCIpID8gaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIi5cIikpIDogLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKFwiLFwiKSAmJiAoaW5pdGlhbFZhbHVlID0gaW5pdGlhbFZhbHVlLnN1YnN0cmluZygwLCBpbml0aWFsVmFsdWUuaW5kZXhPZihcIixcIikpKSksIFxuICAgICAgICAgICAgICAgIFwiXCIgIT09IG9wdHMucmFkaXhQb2ludCAmJiBpc0Zpbml0ZShvcHRzLmRpZ2l0cykgJiYgLTEgIT09IGluaXRpYWxWYWx1ZS5pbmRleE9mKG9wdHMucmFkaXhQb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUGFydHMgPSBpbml0aWFsVmFsdWUuc3BsaXQob3B0cy5yYWRpeFBvaW50KSwgZGVjUGFydCA9IHZhbHVlUGFydHNbMV0ubWF0Y2gobmV3IFJlZ0V4cChcIlxcXFxkKlwiKSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChvcHRzLmRpZ2l0cykgPCBkZWNQYXJ0LnRvU3RyaW5nKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlnaXRzRmFjdG9yID0gTWF0aC5wb3coMTAsIHBhcnNlSW50KG9wdHMuZGlnaXRzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUucmVwbGFjZShJbnB1dG1hc2suZXNjYXBlUmVnZXgob3B0cy5yYWRpeFBvaW50KSwgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChpbml0aWFsVmFsdWUpICogZGlnaXRzRmFjdG9yKSAvIGRpZ2l0c0ZhY3RvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgPSBpbml0aWFsVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKFwiLlwiLCBvcHRzLnJhZGl4UG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FuQ2xlYXJQb3NpdGlvbjogZnVuY3Rpb24obWFza3NldCwgcG9zaXRpb24sIGx2cCwgc3RyaWN0LCBvcHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZwID0gbWFza3NldC52YWxpZFBvc2l0aW9uc1twb3NpdGlvbl0sIGNhbkNsZWFyID0gdnAuaW5wdXQgIT09IG9wdHMucmFkaXhQb2ludCB8fCBudWxsICE9PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uXS5tYXRjaC5mbiAmJiAhMSA9PT0gb3B0cy5kZWNpbWFsUHJvdGVjdCB8fCB2cC5pbnB1dCA9PT0gb3B0cy5yYWRpeFBvaW50ICYmIG1hc2tzZXQudmFsaWRQb3NpdGlvbnNbcG9zaXRpb24gKyAxXSAmJiBudWxsID09PSBtYXNrc2V0LnZhbGlkUG9zaXRpb25zW3Bvc2l0aW9uICsgMV0ubWF0Y2guZm4gfHwgaXNGaW5pdGUodnAuaW5wdXQpIHx8IHBvc2l0aW9uID09PSBsdnAgfHwgdnAuaW5wdXQgPT09IG9wdHMuZ3JvdXBTZXBhcmF0b3IgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuZnJvbnQgfHwgdnAuaW5wdXQgPT09IG9wdHMubmVnYXRpb25TeW1ib2wuYmFjaztcbiAgICAgICAgICAgICAgICByZXR1cm4gIWNhbkNsZWFyIHx8IFwiK1wiICE9PSB2cC5tYXRjaC5uYXRpdmVEZWYgJiYgXCItXCIgIT09IHZwLm1hdGNoLm5hdGl2ZURlZiB8fCAob3B0cy5pc05lZ2F0aXZlID0gITEpLCBcbiAgICAgICAgICAgICAgICBjYW5DbGVhcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uKGUsIGJ1ZmZlciwgY2FyZXRQb3MsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGlucHV0ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBJbnB1dG1hc2sua2V5Q29kZS5VUDpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgKyBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgSW5wdXRtYXNrLmtleUNvZGUuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbChwYXJzZUZsb2F0KHRoaXMuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKSkgLSBwYXJzZUludChvcHRzLnN0ZXApKSwgJGlucHV0LnRyaWdnZXIoXCJzZXR2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBwcmVmaXg6IFwiJCBcIixcbiAgICAgICAgICAgIGdyb3VwU2VwYXJhdG9yOiBcIixcIixcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIjBcIixcbiAgICAgICAgICAgIGF1dG9Hcm91cDogITAsXG4gICAgICAgICAgICBkaWdpdHM6IDIsXG4gICAgICAgICAgICBkaWdpdHNPcHRpb25hbDogITEsXG4gICAgICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogITFcbiAgICAgICAgfSxcbiAgICAgICAgZGVjaW1hbDoge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiXG4gICAgICAgIH0sXG4gICAgICAgIGludGVnZXI6IHtcbiAgICAgICAgICAgIGFsaWFzOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGRpZ2l0czogMCxcbiAgICAgICAgICAgIHJhZGl4UG9pbnQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGVyY2VudGFnZToge1xuICAgICAgICAgICAgYWxpYXM6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgZGlnaXRzOiAyLFxuICAgICAgICAgICAgZGlnaXRzT3B0aW9uYWw6ICEwLFxuICAgICAgICAgICAgcmFkaXhQb2ludDogXCIuXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCIwXCIsXG4gICAgICAgICAgICBhdXRvR3JvdXA6ICExLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBzdWZmaXg6IFwiICVcIixcbiAgICAgICAgICAgIGFsbG93TWludXM6ICExXG4gICAgICAgIH1cbiAgICB9KSwgSW5wdXRtYXNrO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5udW1lcmljLmV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///8
`)},function(module,exports,__webpack_require__){eval(`var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* inputmask.phone.extensions.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.8
*/

!function(factory) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory(require("./dependencyLibs/inputmask.dependencyLib"), require("./inputmask")) : factory(window.dependencyLib || jQuery, window.Inputmask);
}(function($, Inputmask) {
    function maskSort(a, b) {
        var maska = (a.mask || a).replace(/#/g, "9").replace(/\\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];
        return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
    }
    var analyseMaskBase = Inputmask.prototype.analyseMask;
    return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {
        function reduceVariations(masks, previousVariation, previousmaskGroup) {
            previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 
            "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
            for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i], 
            variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [], 
            maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
            for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
        }
        function rebuild(maskGroup) {
            var mask = "", submasks = [];
            for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
            return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, 
            mask;
        }
        var maskGroups = {};
        return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (mask = mask.substr(1, mask.length - 2), 
        reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), 
        mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\\\9")), analyseMaskBase.call(this, mask, regexMask, opts);
    }, Inputmask.extendAliases({
        abstractphone: {
            groupmarker: {
                start: "<",
                end: ">"
            },
            countrycode: "",
            phoneCodes: [],
            mask: function(opts) {
                return opts.definitions = {
                    "#": Inputmask.prototype.definitions[9]
                }, opts.phoneCodes.sort(maskSort);
            },
            keepStatic: !0,
            onBeforeMask: function(value, opts) {
                var processedValue = value.replace(/^0{1,2}/, "").replace(/[\\s]/g, "");
                return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                processedValue;
            },
            onUnMask: function(maskedValue, unmaskedValue, opts) {
                return maskedValue.replace(/[()#-]/g, "");
            },
            inputmode: "tel"
        }
    }), Inputmask;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW5wdXRtYXNrL2Rpc3QvaW5wdXRtYXNrL2lucHV0bWFzay5waG9uZS5leHRlbnNpb25zLmpzP2ZhYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGLGlJQUFpSSxRQUFRO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVEQUF1RCxJQUFJO0FBQzNEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuKiBpbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuKiBodHRwczovL2dpdGh1Yi5jb20vUm9iaW5IZXJib3RzL0lucHV0bWFza1xuKiBDb3B5cmlnaHQgKGMpIDIwMTAgLSAyMDE3IFJvYmluIEhlcmJvdHNcbiogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIChodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocClcbiogVmVyc2lvbjogMy4zLjhcbiovXG5cbiFmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwiLi9kZXBlbmRlbmN5TGlicy9pbnB1dG1hc2suZGVwZW5kZW5jeUxpYlwiLCBcIi4vaW5wdXRtYXNrXCIgXSwgZmFjdG9yeSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2RlcGVuZGVuY3lMaWJzL2lucHV0bWFzay5kZXBlbmRlbmN5TGliXCIpLCByZXF1aXJlKFwiLi9pbnB1dG1hc2tcIikpIDogZmFjdG9yeSh3aW5kb3cuZGVwZW5kZW5jeUxpYiB8fCBqUXVlcnksIHdpbmRvdy5JbnB1dG1hc2spO1xufShmdW5jdGlvbigkLCBJbnB1dG1hc2spIHtcbiAgICBmdW5jdGlvbiBtYXNrU29ydChhLCBiKSB7XG4gICAgICAgIHZhciBtYXNrYSA9IChhLm1hc2sgfHwgYSkucmVwbGFjZSgvIy9nLCBcIjlcIikucmVwbGFjZSgvXFwpLywgXCI5XCIpLnJlcGxhY2UoL1srKCkjLV0vZywgXCJcIiksIG1hc2tiID0gKGIubWFzayB8fCBiKS5yZXBsYWNlKC8jL2csIFwiOVwiKS5yZXBsYWNlKC9cXCkvLCBcIjlcIikucmVwbGFjZSgvWysoKSMtXS9nLCBcIlwiKSwgbWFza2FzID0gKGEubWFzayB8fCBhKS5zcGxpdChcIiNcIilbMF0sIG1hc2ticyA9IChiLm1hc2sgfHwgYikuc3BsaXQoXCIjXCIpWzBdO1xuICAgICAgICByZXR1cm4gMCA9PT0gbWFza2JzLmluZGV4T2YobWFza2FzKSA/IC0xIDogMCA9PT0gbWFza2FzLmluZGV4T2YobWFza2JzKSA/IDEgOiBtYXNrYS5sb2NhbGVDb21wYXJlKG1hc2tiKTtcbiAgICB9XG4gICAgdmFyIGFuYWx5c2VNYXNrQmFzZSA9IElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2s7XG4gICAgcmV0dXJuIElucHV0bWFzay5wcm90b3R5cGUuYW5hbHlzZU1hc2sgPSBmdW5jdGlvbihtYXNrLCByZWdleE1hc2ssIG9wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVkdWNlVmFyaWF0aW9ucyhtYXNrcywgcHJldmlvdXNWYXJpYXRpb24sIHByZXZpb3VzbWFza0dyb3VwKSB7XG4gICAgICAgICAgICBwcmV2aW91c1ZhcmlhdGlvbiA9IHByZXZpb3VzVmFyaWF0aW9uIHx8IFwiXCIsIHByZXZpb3VzbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXAgfHwgbWFza0dyb3VwcywgXG4gICAgICAgICAgICBcIlwiICE9PSBwcmV2aW91c1ZhcmlhdGlvbiAmJiAocHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dID0ge30pO1xuICAgICAgICAgICAgZm9yICh2YXIgdmFyaWF0aW9uID0gXCJcIiwgbWFza0dyb3VwID0gcHJldmlvdXNtYXNrR3JvdXBbcHJldmlvdXNWYXJpYXRpb25dIHx8IHByZXZpb3VzbWFza0dyb3VwLCBpID0gbWFza3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIG1hc2sgPSBtYXNrc1tpXS5tYXNrIHx8IG1hc2tzW2ldLCBcbiAgICAgICAgICAgIHZhcmlhdGlvbiA9IG1hc2suc3Vic3RyKDAsIDEpLCBtYXNrR3JvdXBbdmFyaWF0aW9uXSA9IG1hc2tHcm91cFt2YXJpYXRpb25dIHx8IFtdLCBcbiAgICAgICAgICAgIG1hc2tHcm91cFt2YXJpYXRpb25dLnVuc2hpZnQobWFzay5zdWJzdHIoMSkpLCBtYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBuZHggaW4gbWFza0dyb3VwKSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPiA1MDAgJiYgcmVkdWNlVmFyaWF0aW9ucyhtYXNrR3JvdXBbbmR4XS5zbGljZSgpLCBuZHgsIG1hc2tHcm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVidWlsZChtYXNrR3JvdXApIHtcbiAgICAgICAgICAgIHZhciBtYXNrID0gXCJcIiwgc3VibWFza3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIG5keCBpbiBtYXNrR3JvdXApICQuaXNBcnJheShtYXNrR3JvdXBbbmR4XSkgPyAxID09PSBtYXNrR3JvdXBbbmR4XS5sZW5ndGggPyBzdWJtYXNrcy5wdXNoKG5keCArIG1hc2tHcm91cFtuZHhdKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCArIG1hc2tHcm91cFtuZHhdLmpvaW4ob3B0cy5ncm91cG1hcmtlci5lbmQgKyBvcHRzLmFsdGVybmF0b3JtYXJrZXIgKyBvcHRzLmdyb3VwbWFya2VyLnN0YXJ0KSArIG9wdHMuZ3JvdXBtYXJrZXIuZW5kKSA6IHN1Ym1hc2tzLnB1c2gobmR4ICsgcmVidWlsZChtYXNrR3JvdXBbbmR4XSkpO1xuICAgICAgICAgICAgcmV0dXJuIDEgPT09IHN1Ym1hc2tzLmxlbmd0aCA/IG1hc2sgKz0gc3VibWFza3NbMF0gOiBtYXNrICs9IG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQgKyBzdWJtYXNrcy5qb2luKG9wdHMuZ3JvdXBtYXJrZXIuZW5kICsgb3B0cy5hbHRlcm5hdG9ybWFya2VyICsgb3B0cy5ncm91cG1hcmtlci5zdGFydCkgKyBvcHRzLmdyb3VwbWFya2VyLmVuZCwgXG4gICAgICAgICAgICBtYXNrO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXNrR3JvdXBzID0ge307XG4gICAgICAgIHJldHVybiBvcHRzLnBob25lQ29kZXMgJiYgKG9wdHMucGhvbmVDb2RlcyAmJiBvcHRzLnBob25lQ29kZXMubGVuZ3RoID4gMWUzICYmIChtYXNrID0gbWFzay5zdWJzdHIoMSwgbWFzay5sZW5ndGggLSAyKSwgXG4gICAgICAgIHJlZHVjZVZhcmlhdGlvbnMobWFzay5zcGxpdChvcHRzLmdyb3VwbWFya2VyLmVuZCArIG9wdHMuYWx0ZXJuYXRvcm1hcmtlciArIG9wdHMuZ3JvdXBtYXJrZXIuc3RhcnQpKSwgXG4gICAgICAgIG1hc2sgPSByZWJ1aWxkKG1hc2tHcm91cHMpKSwgbWFzayA9IG1hc2sucmVwbGFjZSgvOS9nLCBcIlxcXFw5XCIpKSwgYW5hbHlzZU1hc2tCYXNlLmNhbGwodGhpcywgbWFzaywgcmVnZXhNYXNrLCBvcHRzKTtcbiAgICB9LCBJbnB1dG1hc2suZXh0ZW5kQWxpYXNlcyh7XG4gICAgICAgIGFic3RyYWN0cGhvbmU6IHtcbiAgICAgICAgICAgIGdyb3VwbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiPFwiLFxuICAgICAgICAgICAgICAgIGVuZDogXCI+XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb3VudHJ5Y29kZTogXCJcIixcbiAgICAgICAgICAgIHBob25lQ29kZXM6IFtdLFxuICAgICAgICAgICAgbWFzazogZnVuY3Rpb24ob3B0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRzLmRlZmluaXRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcIiNcIjogSW5wdXRtYXNrLnByb3RvdHlwZS5kZWZpbml0aW9uc1s5XVxuICAgICAgICAgICAgICAgIH0sIG9wdHMucGhvbmVDb2Rlcy5zb3J0KG1hc2tTb3J0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBrZWVwU3RhdGljOiAhMCxcbiAgICAgICAgICAgIG9uQmVmb3JlTWFzazogZnVuY3Rpb24odmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eMHsxLDJ9LywgXCJcIikucmVwbGFjZSgvW1xcc10vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcm9jZXNzZWRWYWx1ZS5pbmRleE9mKG9wdHMuY291bnRyeWNvZGUpID4gMSB8fCAtMSA9PT0gcHJvY2Vzc2VkVmFsdWUuaW5kZXhPZihvcHRzLmNvdW50cnljb2RlKSkgJiYgKHByb2Nlc3NlZFZhbHVlID0gXCIrXCIgKyBvcHRzLmNvdW50cnljb2RlICsgcHJvY2Vzc2VkVmFsdWUpLCBcbiAgICAgICAgICAgICAgICBwcm9jZXNzZWRWYWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblVuTWFzazogZnVuY3Rpb24obWFza2VkVmFsdWUsIHVubWFza2VkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza2VkVmFsdWUucmVwbGFjZSgvWygpIy1dL2csIFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlucHV0bW9kZTogXCJ0ZWxcIlxuICAgICAgICB9XG4gICAgfSksIElucHV0bWFzaztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2lucHV0bWFzay9kaXN0L2lucHV0bWFzay9pbnB1dG1hc2sucGhvbmUuZXh0ZW5zaW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///9
`)}]);