import Fe, { useState as Ge, useEffect as ot, useId as da, useContext as Di, createElement as bs, useRef as Er, Component as xs, forwardRef as fa, createContext as ws, useImperativeHandle as Ss, useCallback as ks } from "react";
import Ts from "react-dom";
function Fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pa = { exports: {} }, Gr = {};
var bo;
function _s() {
  if (bo) return Gr;
  bo = 1;
  var e = Fe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(g, p, h) {
    var x, w = {}, O = null, I = null;
    h !== void 0 && (O = "" + h), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (I = p.ref);
    for (x in p) n.call(p, x) && !s.hasOwnProperty(x) && (w[x] = p[x]);
    if (g && g.defaultProps) for (x in p = g.defaultProps, p) w[x] === void 0 && (w[x] = p[x]);
    return { $$typeof: t, type: g, key: O, ref: I, props: w, _owner: o.current };
  }
  return Gr.Fragment = r, Gr.jsx = d, Gr.jsxs = d, Gr;
}
pa.exports = _s();
var f = pa.exports, ha = { exports: {} }, oi, xo;
function Es() {
  if (xo) return oi;
  xo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return oi = e, oi;
}
var ai, wo;
function Cs() {
  if (wo) return ai;
  wo = 1;
  var e = Es();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ai = function() {
    function n(d, g, p, h, x, w) {
      if (w !== e) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var s = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, ai;
}
ha.exports = Cs()();
var Rs = ha.exports;
const l = /* @__PURE__ */ Fi(Rs), Os = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), si = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), ma = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.string,
    header: l.string,
    body: l.string
  })
}), $i = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var ga = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var s = "", d = 0; d < arguments.length; d++) {
        var g = arguments[d];
        g && (s = o(s, n(g)));
      }
      return s;
    }
    function n(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return r.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var d = "";
      for (var g in s)
        t.call(s, g) && s[g] && (d = o(d, g));
      return d;
    }
    function o(s, d) {
      return d ? s ? s + " " + d : s + d : s;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(ga);
var As = ga.exports;
const be = /* @__PURE__ */ Fi(As), js = () => {
  const [e, t] = Ge(), [r, n] = Ge(!1), [o, s] = Ge(!1), [d, g] = Ge("");
  return ot(() => {
    if (!d) return;
    (() => {
      s(null), n(!0);
      try {
        fetch(d).then((h) => h.json()).then((h) => {
          t(h), n(!1);
        }).catch((h) => {
          s(h), n(!1);
        });
      } catch (h) {
        s(h);
      }
    })();
  }, [d]), [{ data: e, loading: r, error: o }, g];
};
function Ns(e) {
  const [t, r] = Ge(!1);
  return ot(() => {
    const n = window.matchMedia(e);
    n.matches !== t && r(n.matches);
    const o = () => {
      r(n.matches);
    };
    return n.addEventListener("change", o), () => n.removeEventListener("change", o);
  }, [t, e]), t;
}
const So = (e, t, r) => e ? t : r, Tn = (e) => (e || []).join(" ");
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function vi(e, t) {
  return vi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, vi(e, t);
}
function Ps() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _n(e, t, r) {
  return Ps() ? _n = Reflect.construct : _n = function(o, s, d) {
    var g = [null];
    g.push.apply(g, s);
    var p = Function.bind.apply(o, g), h = new p();
    return d && vi(h, d.prototype), h;
  }, _n.apply(null, arguments);
}
function Nt(e) {
  return Is(e) || Ls(e) || Ms(e) || Ds();
}
function Is(e) {
  if (Array.isArray(e)) return yi(e);
}
function Ls(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ms(e, t) {
  if (e) {
    if (typeof e == "string") return yi(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yi(e, t);
  }
}
function yi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ds() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Fs = Object.hasOwnProperty, ko = Object.setPrototypeOf, $s = Object.isFrozen, Bs = Object.getPrototypeOf, zs = Object.getOwnPropertyDescriptor, at = Object.freeze, kt = Object.seal, Hs = Object.create, va = typeof Reflect < "u" && Reflect, Pn = va.apply, bi = va.construct;
Pn || (Pn = function(t, r, n) {
  return t.apply(r, n);
});
at || (at = function(t) {
  return t;
});
kt || (kt = function(t) {
  return t;
});
bi || (bi = function(t, r) {
  return _n(t, Nt(r));
});
var Ws = Tt(Array.prototype.forEach), To = Tt(Array.prototype.pop), Xr = Tt(Array.prototype.push), En = Tt(String.prototype.toLowerCase), li = Tt(String.prototype.toString), _o = Tt(String.prototype.match), jt = Tt(String.prototype.replace), Vs = Tt(String.prototype.indexOf), Us = Tt(String.prototype.trim), Ke = Tt(RegExp.prototype.test), ui = qs(TypeError);
function Tt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return Pn(e, t, n);
  };
}
function qs(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return bi(e, r);
  };
}
function ue(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : En, ko && ko(e, null);
  for (var o = t.length; o--; ) {
    var s = t[o];
    if (typeof s == "string") {
      var d = r(s);
      d !== s && ($s(t) || (t[o] = d), s = d);
    }
    e[s] = !0;
  }
  return e;
}
function kr(e) {
  var t = Hs(null), r;
  for (r in e)
    Pn(Fs, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function vn(e, t) {
  for (; e !== null; ) {
    var r = zs(e, t);
    if (r) {
      if (r.get)
        return Tt(r.get);
      if (typeof r.value == "function")
        return Tt(r.value);
    }
    e = Bs(e);
  }
  function n(o) {
    return console.warn("fallback value for", o), null;
  }
  return n;
}
var Eo = at(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ci = at(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), di = at(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ys = at(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), fi = at(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Gs = at(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Co = at(["#text"]), Ro = at(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), pi = at(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Oo = at(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), yn = at(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xs = kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ks = kt(/<%[\w\W]*|[\w\W]*%>/gm), Zs = kt(/\${[\w\W]*}/gm), Js = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qs = kt(/^aria-[\-\w]+$/), el = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), tl = kt(/^(?:\w+script|data):/i), rl = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), nl = kt(/^html$/i), il = kt(/^[a-z][.\w]*(-[.\w]+)+$/i), ol = function() {
  return typeof window > "u" ? null : window;
}, al = function(t, r) {
  if (sr(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, o = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(o) && (n = r.currentScript.getAttribute(o));
  var s = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(s, {
      createHTML: function(g) {
        return g;
      },
      createScriptURL: function(g) {
        return g;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
};
function ya() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ol(), t = function(k) {
    return ya(k);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, o = e.DocumentFragment, s = e.HTMLTemplateElement, d = e.Node, g = e.Element, p = e.NodeFilter, h = e.NamedNodeMap, x = h === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : h, w = e.HTMLFormElement, O = e.DOMParser, I = e.trustedTypes, R = g.prototype, S = vn(R, "cloneNode"), N = vn(R, "nextSibling"), M = vn(R, "childNodes"), z = vn(R, "parentNode");
  if (typeof s == "function") {
    var V = n.createElement("template");
    V.content && V.content.ownerDocument && (n = V.content.ownerDocument);
  }
  var U = al(I, r), L = U ? U.createHTML("") : "", Z = n, de = Z.implementation, J = Z.createNodeIterator, ve = Z.createDocumentFragment, Be = Z.getElementsByTagName, Qe = r.importNode, ge = {};
  try {
    ge = kr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var Ce = {};
  t.isSupported = typeof z == "function" && de && de.createHTMLDocument !== void 0 && ge !== 9;
  var Ue = Xs, Me = Ks, ft = Zs, Xe = Js, He = Qs, We = tl, st = rl, nt = il, Y = el, $ = null, q = ue({}, [].concat(Nt(Eo), Nt(ci), Nt(di), Nt(fi), Nt(Co))), G = null, A = ue({}, [].concat(Nt(Ro), Nt(pi), Nt(Oo), Nt(yn))), K = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), B = null, fe = null, oe = !0, ie = !0, ee = !1, pe = !0, ye = !1, se = !0, xe = !1, he = !1, Re = !1, Ve = !1, Ee = !1, lt = !1, qe = !0, we = !1, Q = "user-content-", Se = !0, ut = !1, it = {}, $e = null, dr = ue({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), fr = null, Cr = ue({}, ["audio", "video", "img", "source", "image", "track"]), Ft = null, $t = ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qt = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml", It = pt, pr = !1, et = null, hr = ue({}, [Qt, er, pt], li), ct, ke = ["application/xhtml+xml", "text/html"], Bt = "text/html", je, dt = null, xt = n.createElement("form"), zt = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, ht = function(k) {
    dt && dt === k || ((!k || sr(k) !== "object") && (k = {}), k = kr(k), ct = // eslint-disable-next-line unicorn/prefer-includes
    ke.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? ct = Bt : ct = k.PARSER_MEDIA_TYPE, je = ct === "application/xhtml+xml" ? li : En, $ = "ALLOWED_TAGS" in k ? ue({}, k.ALLOWED_TAGS, je) : q, G = "ALLOWED_ATTR" in k ? ue({}, k.ALLOWED_ATTR, je) : A, et = "ALLOWED_NAMESPACES" in k ? ue({}, k.ALLOWED_NAMESPACES, li) : hr, Ft = "ADD_URI_SAFE_ATTR" in k ? ue(
      kr($t),
      // eslint-disable-line indent
      k.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      je
      // eslint-disable-line indent
    ) : $t, fr = "ADD_DATA_URI_TAGS" in k ? ue(
      kr(Cr),
      // eslint-disable-line indent
      k.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      je
      // eslint-disable-line indent
    ) : Cr, $e = "FORBID_CONTENTS" in k ? ue({}, k.FORBID_CONTENTS, je) : dr, B = "FORBID_TAGS" in k ? ue({}, k.FORBID_TAGS, je) : {}, fe = "FORBID_ATTR" in k ? ue({}, k.FORBID_ATTR, je) : {}, it = "USE_PROFILES" in k ? k.USE_PROFILES : !1, oe = k.ALLOW_ARIA_ATTR !== !1, ie = k.ALLOW_DATA_ATTR !== !1, ee = k.ALLOW_UNKNOWN_PROTOCOLS || !1, pe = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ye = k.SAFE_FOR_TEMPLATES || !1, se = k.SAFE_FOR_XML !== !1, xe = k.WHOLE_DOCUMENT || !1, Ve = k.RETURN_DOM || !1, Ee = k.RETURN_DOM_FRAGMENT || !1, lt = k.RETURN_TRUSTED_TYPE || !1, Re = k.FORCE_BODY || !1, qe = k.SANITIZE_DOM !== !1, we = k.SANITIZE_NAMED_PROPS || !1, Se = k.KEEP_CONTENT !== !1, ut = k.IN_PLACE || !1, Y = k.ALLOWED_URI_REGEXP || Y, It = k.NAMESPACE || pt, K = k.CUSTOM_ELEMENT_HANDLING || {}, k.CUSTOM_ELEMENT_HANDLING && zt(k.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (K.tagNameCheck = k.CUSTOM_ELEMENT_HANDLING.tagNameCheck), k.CUSTOM_ELEMENT_HANDLING && zt(k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (K.attributeNameCheck = k.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), k.CUSTOM_ELEMENT_HANDLING && typeof k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = k.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ye && (ie = !1), Ee && (Ve = !0), it && ($ = ue({}, Nt(Co)), G = [], it.html === !0 && (ue($, Eo), ue(G, Ro)), it.svg === !0 && (ue($, ci), ue(G, pi), ue(G, yn)), it.svgFilters === !0 && (ue($, di), ue(G, pi), ue(G, yn)), it.mathMl === !0 && (ue($, fi), ue(G, Oo), ue(G, yn))), k.ADD_TAGS && ($ === q && ($ = kr($)), ue($, k.ADD_TAGS, je)), k.ADD_ATTR && (G === A && (G = kr(G)), ue(G, k.ADD_ATTR, je)), k.ADD_URI_SAFE_ATTR && ue(Ft, k.ADD_URI_SAFE_ATTR, je), k.FORBID_CONTENTS && ($e === dr && ($e = kr($e)), ue($e, k.FORBID_CONTENTS, je)), Se && ($["#text"] = !0), xe && ue($, ["html", "head", "body"]), $.table && (ue($, ["tbody"]), delete B.tbody), at && at(k), dt = k);
  }, mr = ue({}, ["mi", "mo", "mn", "ms", "mtext"]), tr = ue({}, ["annotation-xml"]), gr = ue({}, ["title", "style", "font", "a", "script"]), Ht = ue({}, ci);
  ue(Ht, di), ue(Ht, Ys);
  var rr = ue({}, fi);
  ue(rr, Gs);
  var Rr = function(k) {
    var D = z(k);
    (!D || !D.tagName) && (D = {
      namespaceURI: It,
      tagName: "template"
    });
    var W = En(k.tagName), me = En(D.tagName);
    return et[k.namespaceURI] ? k.namespaceURI === er ? D.namespaceURI === pt ? W === "svg" : D.namespaceURI === Qt ? W === "svg" && (me === "annotation-xml" || mr[me]) : !!Ht[W] : k.namespaceURI === Qt ? D.namespaceURI === pt ? W === "math" : D.namespaceURI === er ? W === "math" && tr[me] : !!rr[W] : k.namespaceURI === pt ? D.namespaceURI === er && !tr[me] || D.namespaceURI === Qt && !mr[me] ? !1 : !rr[W] && (gr[W] || !Ht[W]) : !!(ct === "application/xhtml+xml" && et[k.namespaceURI]) : !1;
  }, tt = function(k) {
    Xr(t.removed, {
      element: k
    });
    try {
      k.parentNode.removeChild(k);
    } catch {
      try {
        k.outerHTML = L;
      } catch {
        k.remove();
      }
    }
  }, nr = function(k, D) {
    try {
      Xr(t.removed, {
        attribute: D.getAttributeNode(k),
        from: D
      });
    } catch {
      Xr(t.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(k), k === "is" && !G[k])
      if (Ve || Ee)
        try {
          tt(D);
        } catch {
        }
      else
        try {
          D.setAttribute(k, "");
        } catch {
        }
  }, Wt = function(k) {
    var D, W;
    if (Re)
      k = "<remove></remove>" + k;
    else {
      var me = _o(k, /^[\r\n\t ]+/);
      W = me && me[0];
    }
    ct === "application/xhtml+xml" && It === pt && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    var Te = U ? U.createHTML(k) : k;
    if (It === pt)
      try {
        D = new O().parseFromString(Te, ct);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = de.createDocument(It, "template", null);
      try {
        D.documentElement.innerHTML = pr ? L : Te;
      } catch {
      }
    }
    var ze = D.body || D.documentElement;
    return k && W && ze.insertBefore(n.createTextNode(W), ze.childNodes[0] || null), It === pt ? Be.call(D, xe ? "html" : "body")[0] : xe ? D.documentElement : ze;
  }, vr = function(k) {
    return J.call(
      k.ownerDocument || k,
      k,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Lt = function(k) {
    return k instanceof w && (typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || !(k.attributes instanceof x) || typeof k.removeAttribute != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function");
  }, _t = function(k) {
    return sr(d) === "object" ? k instanceof d : k && sr(k) === "object" && typeof k.nodeType == "number" && typeof k.nodeName == "string";
  }, mt = function(k, D, W) {
    Ce[k] && Ws(Ce[k], function(me) {
      me.call(t, D, W, dt);
    });
  }, Mt = function(k) {
    var D;
    if (mt("beforeSanitizeElements", k, null), Lt(k) || Ke(/[\u0080-\uFFFF]/, k.nodeName))
      return tt(k), !0;
    var W = je(k.nodeName);
    if (mt("uponSanitizeElement", k, {
      tagName: W,
      allowedTags: $
    }), k.hasChildNodes() && !_t(k.firstElementChild) && (!_t(k.content) || !_t(k.content.firstElementChild)) && Ke(/<[/\w]/g, k.innerHTML) && Ke(/<[/\w]/g, k.textContent) || W === "select" && Ke(/<template/i, k.innerHTML) || k.nodeType === 7 || se && k.nodeType === 8 && Ke(/<[/\w]/g, k.data))
      return tt(k), !0;
    if (!$[W] || B[W]) {
      if (!B[W] && ir(W) && (K.tagNameCheck instanceof RegExp && Ke(K.tagNameCheck, W) || K.tagNameCheck instanceof Function && K.tagNameCheck(W)))
        return !1;
      if (Se && !$e[W]) {
        var me = z(k) || k.parentNode, Te = M(k) || k.childNodes;
        if (Te && me)
          for (var ze = Te.length, De = ze - 1; De >= 0; --De) {
            var gt = S(Te[De], !0);
            gt.__removalCount = (k.__removalCount || 0) + 1, me.insertBefore(gt, N(k));
          }
      }
      return tt(k), !0;
    }
    return k instanceof g && !Rr(k) || (W === "noscript" || W === "noembed" || W === "noframes") && Ke(/<\/no(script|embed|frames)/i, k.innerHTML) ? (tt(k), !0) : (ye && k.nodeType === 3 && (D = k.textContent, D = jt(D, Ue, " "), D = jt(D, Me, " "), D = jt(D, ft, " "), k.textContent !== D && (Xr(t.removed, {
      element: k.cloneNode()
    }), k.textContent = D)), mt("afterSanitizeElements", k, null), !1);
  }, Or = function(k, D, W) {
    if (qe && (D === "id" || D === "name") && (W in n || W in xt))
      return !1;
    if (!(ie && !fe[D] && Ke(Xe, D))) {
      if (!(oe && Ke(He, D))) {
        if (!G[D] || fe[D]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ir(k) && (K.tagNameCheck instanceof RegExp && Ke(K.tagNameCheck, k) || K.tagNameCheck instanceof Function && K.tagNameCheck(k)) && (K.attributeNameCheck instanceof RegExp && Ke(K.attributeNameCheck, D) || K.attributeNameCheck instanceof Function && K.attributeNameCheck(D)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            D === "is" && K.allowCustomizedBuiltInElements && (K.tagNameCheck instanceof RegExp && Ke(K.tagNameCheck, W) || K.tagNameCheck instanceof Function && K.tagNameCheck(W)))
          ) return !1;
        } else if (!Ft[D]) {
          if (!Ke(Y, jt(W, st, ""))) {
            if (!((D === "src" || D === "xlink:href" || D === "href") && k !== "script" && Vs(W, "data:") === 0 && fr[k])) {
              if (!(ee && !Ke(We, jt(W, st, "")))) {
                if (W)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ir = function(k) {
    return k !== "annotation-xml" && _o(k, nt);
  }, Vt = function(k) {
    var D, W, me, Te;
    mt("beforeSanitizeAttributes", k, null);
    var ze = k.attributes;
    if (!(!ze || Lt(k))) {
      var De = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: G
      };
      for (Te = ze.length; Te--; ) {
        D = ze[Te];
        var gt = D, Pe = gt.name, wt = gt.namespaceURI;
        if (W = Pe === "value" ? D.value : Us(D.value), me = je(Pe), De.attrName = me, De.attrValue = W, De.keepAttr = !0, De.forceKeepAttr = void 0, mt("uponSanitizeAttribute", k, De), W = De.attrValue, !De.forceKeepAttr && (nr(Pe, k), !!De.keepAttr)) {
          if (!pe && Ke(/\/>/i, W)) {
            nr(Pe, k);
            continue;
          }
          ye && (W = jt(W, Ue, " "), W = jt(W, Me, " "), W = jt(W, ft, " "));
          var Et = je(k.nodeName);
          if (Or(Et, me, W)) {
            if (we && (me === "id" || me === "name") && (nr(Pe, k), W = Q + W), se && Ke(/((--!?|])>)|<\/(style|title)/i, W)) {
              nr(Pe, k);
              continue;
            }
            if (U && sr(I) === "object" && typeof I.getAttributeType == "function" && !wt)
              switch (I.getAttributeType(Et, me)) {
                case "TrustedHTML": {
                  W = U.createHTML(W);
                  break;
                }
                case "TrustedScriptURL": {
                  W = U.createScriptURL(W);
                  break;
                }
              }
            try {
              wt ? k.setAttributeNS(wt, Pe, W) : k.setAttribute(Pe, W), Lt(k) ? tt(k) : To(t.removed);
            } catch {
            }
          }
        }
      }
      mt("afterSanitizeAttributes", k, null);
    }
  }, Ut = function X(k) {
    var D, W = vr(k);
    for (mt("beforeSanitizeShadowDOM", k, null); D = W.nextNode(); )
      mt("uponSanitizeShadowNode", D, null), Mt(D), Vt(D), D.content instanceof o && X(D.content);
    mt("afterSanitizeShadowDOM", k, null);
  };
  return t.sanitize = function(X) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D, W, me, Te, ze;
    if (pr = !X, pr && (X = "<!-->"), typeof X != "string" && !_t(X))
      if (typeof X.toString == "function") {
        if (X = X.toString(), typeof X != "string")
          throw ui("dirty is not a string, aborting");
      } else
        throw ui("toString is not a function");
    if (!t.isSupported) {
      if (sr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof X == "string")
          return e.toStaticHTML(X);
        if (_t(X))
          return e.toStaticHTML(X.outerHTML);
      }
      return X;
    }
    if (he || ht(k), t.removed = [], typeof X == "string" && (ut = !1), ut) {
      if (X.nodeName) {
        var De = je(X.nodeName);
        if (!$[De] || B[De])
          throw ui("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (X instanceof d)
      D = Wt("<!---->"), W = D.ownerDocument.importNode(X, !0), W.nodeType === 1 && W.nodeName === "BODY" || W.nodeName === "HTML" ? D = W : D.appendChild(W);
    else {
      if (!Ve && !ye && !xe && // eslint-disable-next-line unicorn/prefer-includes
      X.indexOf("<") === -1)
        return U && lt ? U.createHTML(X) : X;
      if (D = Wt(X), !D)
        return Ve ? null : lt ? L : "";
    }
    D && Re && tt(D.firstChild);
    for (var gt = vr(ut ? X : D); me = gt.nextNode(); )
      me.nodeType === 3 && me === Te || (Mt(me), Vt(me), me.content instanceof o && Ut(me.content), Te = me);
    if (Te = null, ut)
      return X;
    if (Ve) {
      if (Ee)
        for (ze = ve.call(D.ownerDocument); D.firstChild; )
          ze.appendChild(D.firstChild);
      else
        ze = D;
      return (G.shadowroot || G.shadowrootmod) && (ze = Qe.call(r, ze, !0)), ze;
    }
    var Pe = xe ? D.outerHTML : D.innerHTML;
    return xe && $["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && Ke(nl, D.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + Pe), ye && (Pe = jt(Pe, Ue, " "), Pe = jt(Pe, Me, " "), Pe = jt(Pe, ft, " ")), U && lt ? U.createHTML(Pe) : Pe;
  }, t.setConfig = function(X) {
    ht(X), he = !0;
  }, t.clearConfig = function() {
    dt = null, he = !1;
  }, t.isValidAttribute = function(X, k, D) {
    dt || ht({});
    var W = je(X), me = je(k);
    return Or(W, me, D);
  }, t.addHook = function(X, k) {
    typeof k == "function" && (Ce[X] = Ce[X] || [], Xr(Ce[X], k));
  }, t.removeHook = function(X) {
    if (Ce[X])
      return To(Ce[X]);
  }, t.removeHooks = function(X) {
    Ce[X] && (Ce[X] = []);
  }, t.removeAllHooks = function() {
    Ce = {};
  }, t;
}
var sl = ya();
function ll(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const St = (e) => ({ __html: sl.sanitize(e) }), Ao = (e, t, r) => {
  let n = e;
  const o = [];
  for (; n < t; )
    n > 0 && n <= r && o.push(n), n += 1;
  return o;
};
let hi = !1;
const ul = (e, t) => {
  hi || (hi = !0, setTimeout(() => {
    e(), hi = !1;
  }, t));
};
let jo;
const cl = (e, t) => {
  window.clearTimeout(jo), jo = window.setTimeout(e, t);
};
l.shape({
  event: l.string,
  action: l.string,
  name: l.string,
  region: l.string,
  section: l.string,
  component: l.string,
  type: l.string,
  text: l.string
});
const ba = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: o = "",
  text: s = "",
  region: d = "",
  component: g = ""
}) => {
  const { dataLayer: p } = window, h = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: d.toLowerCase(),
    section: o.toLowerCase(),
    text: s.toLowerCase(),
    component: g.toLowerCase()
  };
  p && p.push(h);
};
var Tr = {};
var No;
function dl() {
  if (No) return Tr;
  No = 1;
  var e = Fe;
  function t(i) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, v = 1; v < arguments.length; v++) c += "&args[]=" + encodeURIComponent(arguments[v]);
    return "Minified React error #" + i + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, s = {};
  function d(i) {
    return r.call(s, i) ? !0 : r.call(o, i) ? !1 : n.test(i) ? s[i] = !0 : (o[i] = !0, !1);
  }
  function g(i, c, v, b, C, T, j) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = b, this.attributeNamespace = C, this.mustUseProperty = v, this.propertyName = i, this.type = c, this.sanitizeURL = T, this.removeEmptyString = j;
  }
  var p = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    p[i] = new g(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var c = i[0];
    p[c] = new g(c, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    p[i] = new g(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    p[i] = new g(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    p[i] = new g(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    p[i] = new g(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    p[i] = new g(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    p[i] = new g(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    p[i] = new g(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var h = /[\-:]([a-z])/g;
  function x(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var c = i.replace(
      h,
      x
    );
    p[c] = new g(c, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var c = i.replace(h, x);
    p[c] = new g(c, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var c = i.replace(h, x);
    p[c] = new g(c, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    p[i] = new g(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), p.xlinkHref = new g("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    p[i] = new g(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var w = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, O = ["Webkit", "ms", "Moz", "O"];
  Object.keys(w).forEach(function(i) {
    O.forEach(function(c) {
      c = c + i.charAt(0).toUpperCase() + i.substring(1), w[c] = w[i];
    });
  });
  var I = /["'&<>]/;
  function R(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var c = I.exec(i);
    if (c) {
      var v = "", b, C = 0;
      for (b = c.index; b < i.length; b++) {
        switch (i.charCodeAt(b)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        C !== b && (v += i.substring(C, b)), C = b + 1, v += c;
      }
      i = C !== b ? v + i.substring(C, b) : v;
    }
    return i;
  }
  var S = /([A-Z])/g, N = /^ms-/, M = Array.isArray;
  function z(i, c) {
    return { insertionMode: i, selectedValue: c };
  }
  function V(i, c, v) {
    switch (c) {
      case "select":
        return z(1, v.value != null ? v.value : v.defaultValue);
      case "svg":
        return z(2, null);
      case "math":
        return z(3, null);
      case "foreignObject":
        return z(1, null);
      case "table":
        return z(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return z(5, null);
      case "colgroup":
        return z(7, null);
      case "tr":
        return z(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? z(1, null) : i;
  }
  var U = /* @__PURE__ */ new Map();
  function L(i, c, v) {
    if (typeof v != "object") throw Error(t(62));
    c = !0;
    for (var b in v) if (r.call(v, b)) {
      var C = v[b];
      if (C != null && typeof C != "boolean" && C !== "") {
        if (b.indexOf("--") === 0) {
          var T = R(b);
          C = R(("" + C).trim());
        } else {
          T = b;
          var j = U.get(T);
          j !== void 0 || (j = R(T.replace(S, "-$1").toLowerCase().replace(N, "-ms-")), U.set(T, j)), T = j, C = typeof C == "number" ? C === 0 || r.call(w, b) ? "" + C : C + "px" : R(("" + C).trim());
        }
        c ? (c = !1, i.push(' style="', T, ":", C)) : i.push(";", T, ":", C);
      }
    }
    c || i.push('"');
  }
  function Z(i, c, v, b) {
    switch (v) {
      case "style":
        L(i, c, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
      if (c = p.hasOwnProperty(v) ? p[v] : null, c !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (v = c.attributeName, c.type) {
          case 3:
            b && i.push(" ", v, '=""');
            break;
          case 4:
            b === !0 ? i.push(" ", v, '=""') : b !== !1 && i.push(" ", v, '="', R(b), '"');
            break;
          case 5:
            isNaN(b) || i.push(" ", v, '="', R(b), '"');
            break;
          case 6:
            !isNaN(b) && 1 <= b && i.push(" ", v, '="', R(b), '"');
            break;
          default:
            c.sanitizeURL && (b = "" + b), i.push(" ", v, '="', R(b), '"');
        }
      } else if (d(v)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = v.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        i.push(" ", v, '="', R(b), '"');
      }
    }
  }
  function de(i, c, v) {
    if (c != null) {
      if (v != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && i.push("" + c);
    }
  }
  function J(i) {
    var c = "";
    return e.Children.forEach(i, function(v) {
      v != null && (c += v);
    }), c;
  }
  function ve(i, c, v, b) {
    i.push(ge(v));
    var C = v = null, T;
    for (T in c) if (r.call(c, T)) {
      var j = c[T];
      if (j != null) switch (T) {
        case "children":
          v = j;
          break;
        case "dangerouslySetInnerHTML":
          C = j;
          break;
        default:
          Z(i, b, T, j);
      }
    }
    return i.push(">"), de(i, C, v), typeof v == "string" ? (i.push(R(v)), null) : v;
  }
  var Be = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Qe = /* @__PURE__ */ new Map();
  function ge(i) {
    var c = Qe.get(i);
    if (c === void 0) {
      if (!Be.test(i)) throw Error(t(65, i));
      c = "<" + i, Qe.set(i, c);
    }
    return c;
  }
  function Ce(i, c, v, b, C) {
    switch (c) {
      case "select":
        i.push(ge("select"));
        var T = null, j = null;
        for (ae in v) if (r.call(v, ae)) {
          var H = v[ae];
          if (H != null) switch (ae) {
            case "children":
              T = H;
              break;
            case "dangerouslySetInnerHTML":
              j = H;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Z(i, b, ae, H);
          }
        }
        return i.push(">"), de(i, j, T), T;
      case "option":
        j = C.selectedValue, i.push(ge("option"));
        var te = H = null, ne = null, ae = null;
        for (T in v) if (r.call(v, T)) {
          var Ie = v[T];
          if (Ie != null) switch (T) {
            case "children":
              H = Ie;
              break;
            case "selected":
              ne = Ie;
              break;
            case "dangerouslySetInnerHTML":
              ae = Ie;
              break;
            case "value":
              te = Ie;
            default:
              Z(i, b, T, Ie);
          }
        }
        if (j != null) if (v = te !== null ? "" + te : J(H), M(j)) {
          for (b = 0; b < j.length; b++)
            if ("" + j[b] === v) {
              i.push(' selected=""');
              break;
            }
        } else "" + j === v && i.push(' selected=""');
        else ne && i.push(' selected=""');
        return i.push(">"), de(i, ae, H), H;
      case "textarea":
        i.push(ge("textarea")), ae = j = T = null;
        for (H in v) if (r.call(v, H) && (te = v[H], te != null)) switch (H) {
          case "children":
            ae = te;
            break;
          case "value":
            T = te;
            break;
          case "defaultValue":
            j = te;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            Z(
              i,
              b,
              H,
              te
            );
        }
        if (T === null && j !== null && (T = j), i.push(">"), ae != null) {
          if (T != null) throw Error(t(92));
          if (M(ae) && 1 < ae.length) throw Error(t(93));
          T = "" + ae;
        }
        return typeof T == "string" && T[0] === `
` && i.push(`
`), T !== null && i.push(R("" + T)), null;
      case "input":
        i.push(ge("input")), te = ae = H = T = null;
        for (j in v) if (r.call(v, j) && (ne = v[j], ne != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            te = ne;
            break;
          case "defaultValue":
            H = ne;
            break;
          case "checked":
            ae = ne;
            break;
          case "value":
            T = ne;
            break;
          default:
            Z(i, b, j, ne);
        }
        return ae !== null ? Z(i, b, "checked", ae) : te !== null && Z(i, b, "checked", te), T !== null ? Z(i, b, "value", T) : H !== null && Z(i, b, "value", H), i.push("/>"), null;
      case "menuitem":
        i.push(ge("menuitem"));
        for (var Ct in v) if (r.call(v, Ct) && (T = v[Ct], T != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            Z(i, b, Ct, T);
        }
        return i.push(">"), null;
      case "title":
        i.push(ge("title")), T = null;
        for (Ie in v) if (r.call(v, Ie) && (j = v[Ie], j != null)) switch (Ie) {
          case "children":
            T = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            Z(i, b, Ie, j);
        }
        return i.push(">"), T;
      case "listing":
      case "pre":
        i.push(ge(c)), j = T = null;
        for (te in v) if (r.call(v, te) && (H = v[te], H != null)) switch (te) {
          case "children":
            T = H;
            break;
          case "dangerouslySetInnerHTML":
            j = H;
            break;
          default:
            Z(i, b, te, H);
        }
        if (i.push(">"), j != null) {
          if (T != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          v = j.__html, v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? i.push(`
`, v) : i.push("" + v));
        }
        return typeof T == "string" && T[0] === `
` && i.push(`
`), T;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(ge(c));
        for (var Rt in v) if (r.call(v, Rt) && (T = v[Rt], T != null)) switch (Rt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            Z(i, b, Rt, T);
        }
        return i.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ve(
          i,
          v,
          c,
          b
        );
      case "html":
        return C.insertionMode === 0 && i.push("<!DOCTYPE html>"), ve(i, v, c, b);
      default:
        if (c.indexOf("-") === -1 && typeof v.is != "string") return ve(i, v, c, b);
        i.push(ge(c)), j = T = null;
        for (ne in v) if (r.call(v, ne) && (H = v[ne], H != null)) switch (ne) {
          case "children":
            T = H;
            break;
          case "dangerouslySetInnerHTML":
            j = H;
            break;
          case "style":
            L(i, b, H);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(ne) && typeof H != "function" && typeof H != "symbol" && i.push(" ", ne, '="', R(H), '"');
        }
        return i.push(">"), de(i, j, T), T;
    }
  }
  function Ue(i, c, v) {
    if (i.push('<!--$?--><template id="'), v === null) throw Error(t(395));
    return i.push(v), i.push('"></template>');
  }
  function Me(i, c, v, b) {
    switch (v.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(c.segmentPrefix), c = b.toString(16), i.push(c), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ft(i, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return i.push("</div>");
      case 2:
        return i.push("</svg>");
      case 3:
        return i.push("</math>");
      case 4:
        return i.push("</table>");
      case 5:
        return i.push("</tbody></table>");
      case 6:
        return i.push("</tr></table>");
      case 7:
        return i.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Xe = /[<\u2028\u2029]/g;
  function He(i) {
    return JSON.stringify(i).replace(Xe, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function We(i, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function st(i, c, v, b) {
    return v.generateStaticMarkup ? (i.push(R(c)), !1) : (c === "" ? i = b : (b && i.push("<!-- -->"), i.push(R(c)), i = !0), i);
  }
  var nt = Object.assign, Y = Symbol.for("react.element"), $ = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), B = Symbol.for("react.context"), fe = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ye = Symbol.for("react.scope"), se = Symbol.for("react.debug_trace_mode"), xe = Symbol.for("react.legacy_hidden"), he = Symbol.for("react.default_value"), Re = Symbol.iterator;
  function Ve(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case q:
        return "Fragment";
      case $:
        return "Portal";
      case A:
        return "Profiler";
      case G:
        return "StrictMode";
      case oe:
        return "Suspense";
      case ie:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case B:
        return (i.displayName || "Context") + ".Consumer";
      case K:
        return (i._context.displayName || "Context") + ".Provider";
      case fe:
        var c = i.render;
        return i = i.displayName, i || (i = c.displayName || c.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case ee:
        return c = i.displayName || null, c !== null ? c : Ve(i.type) || "Memo";
      case pe:
        c = i._payload, i = i._init;
        try {
          return Ve(i(c));
        } catch {
        }
    }
    return null;
  }
  var Ee = {};
  function lt(i, c) {
    if (i = i.contextTypes, !i) return Ee;
    var v = {}, b;
    for (b in i) v[b] = c[b];
    return v;
  }
  var qe = null;
  function we(i, c) {
    if (i !== c) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var v = c.parent;
      if (i === null) {
        if (v !== null) throw Error(t(401));
      } else {
        if (v === null) throw Error(t(401));
        we(i, v);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function Q(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Q(i);
  }
  function Se(i) {
    var c = i.parent;
    c !== null && Se(c), i.context._currentValue2 = i.value;
  }
  function ut(i, c) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === c.depth ? we(i, c) : ut(i, c);
  }
  function it(i, c) {
    var v = c.parent;
    if (v === null) throw Error(t(402));
    i.depth === v.depth ? we(i, v) : it(i, v), c.context._currentValue2 = c.value;
  }
  function $e(i) {
    var c = qe;
    c !== i && (c === null ? Se(i) : i === null ? Q(c) : c.depth === i.depth ? we(c, i) : c.depth > i.depth ? ut(c, i) : it(c, i), qe = i);
  }
  var dr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, c) {
    i = i._reactInternals, i.queue !== null && i.queue.push(c);
  }, enqueueReplaceState: function(i, c) {
    i = i._reactInternals, i.replace = !0, i.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function fr(i, c, v, b) {
    var C = i.state !== void 0 ? i.state : null;
    i.updater = dr, i.props = v, i.state = C;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var j = c.contextType;
    if (i.context = typeof j == "object" && j !== null ? j._currentValue2 : b, j = c.getDerivedStateFromProps, typeof j == "function" && (j = j(v, C), C = j == null ? C : nt({}, C, j), i.state = C), typeof c.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && dr.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (c = T.queue, j = T.replace, T.queue = null, T.replace = !1, j && c.length === 1) i.state = c[0];
    else {
      for (T = j ? c[0] : i.state, C = !0, j = j ? 1 : 0; j < c.length; j++) {
        var H = c[j];
        H = typeof H == "function" ? H.call(i, T, v, b) : H, H != null && (C ? (C = !1, T = nt({}, T, H)) : nt(T, H));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var Cr = { id: 1, overflow: "" };
  function Ft(i, c, v) {
    var b = i.id;
    i = i.overflow;
    var C = 32 - $t(b) - 1;
    b &= ~(1 << C), v += 1;
    var T = 32 - $t(c) + C;
    if (30 < T) {
      var j = C - C % 5;
      return T = (b & (1 << j) - 1).toString(32), b >>= j, C -= j, { id: 1 << 32 - $t(c) + C | v << C | b, overflow: T + i };
    }
    return { id: 1 << T | v << C | b, overflow: i };
  }
  var $t = Math.clz32 ? Math.clz32 : pt, Qt = Math.log, er = Math.LN2;
  function pt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Qt(i) / er | 0) | 0;
  }
  function It(i, c) {
    return i === c && (i !== 0 || 1 / i === 1 / c) || i !== i && c !== c;
  }
  var pr = typeof Object.is == "function" ? Object.is : It, et = null, hr = null, ct = null, ke = null, Bt = !1, je = !1, dt = 0, xt = null, zt = 0;
  function ht() {
    if (et === null) throw Error(t(321));
    return et;
  }
  function mr() {
    if (0 < zt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function tr() {
    return ke === null ? ct === null ? (Bt = !1, ct = ke = mr()) : (Bt = !0, ke = ct) : ke.next === null ? (Bt = !1, ke = ke.next = mr()) : (Bt = !0, ke = ke.next), ke;
  }
  function gr() {
    hr = et = null, je = !1, ct = null, zt = 0, ke = xt = null;
  }
  function Ht(i, c) {
    return typeof c == "function" ? c(i) : c;
  }
  function rr(i, c, v) {
    if (et = ht(), ke = tr(), Bt) {
      var b = ke.queue;
      if (c = b.dispatch, xt !== null && (v = xt.get(b), v !== void 0)) {
        xt.delete(b), b = ke.memoizedState;
        do
          b = i(b, v.action), v = v.next;
        while (v !== null);
        return ke.memoizedState = b, [b, c];
      }
      return [ke.memoizedState, c];
    }
    return i = i === Ht ? typeof c == "function" ? c() : c : v !== void 0 ? v(c) : c, ke.memoizedState = i, i = ke.queue = { last: null, dispatch: null }, i = i.dispatch = tt.bind(null, et, i), [ke.memoizedState, i];
  }
  function Rr(i, c) {
    if (et = ht(), ke = tr(), c = c === void 0 ? null : c, ke !== null) {
      var v = ke.memoizedState;
      if (v !== null && c !== null) {
        var b = v[1];
        e: if (b === null) b = !1;
        else {
          for (var C = 0; C < b.length && C < c.length; C++) if (!pr(c[C], b[C])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return v[0];
      }
    }
    return i = i(), ke.memoizedState = [i, c], i;
  }
  function tt(i, c, v) {
    if (25 <= zt) throw Error(t(301));
    if (i === et) if (je = !0, i = { action: v, next: null }, xt === null && (xt = /* @__PURE__ */ new Map()), v = xt.get(c), v === void 0) xt.set(c, i);
    else {
      for (c = v; c.next !== null; ) c = c.next;
      c.next = i;
    }
  }
  function nr() {
    throw Error(t(394));
  }
  function Wt() {
  }
  var vr = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return ht(), i._currentValue2;
  }, useMemo: Rr, useReducer: rr, useRef: function(i) {
    et = ht(), ke = tr();
    var c = ke.memoizedState;
    return c === null ? (i = { current: i }, ke.memoizedState = i) : c;
  }, useState: function(i) {
    return rr(Ht, i);
  }, useInsertionEffect: Wt, useLayoutEffect: function() {
  }, useCallback: function(i, c) {
    return Rr(function() {
      return i;
    }, c);
  }, useImperativeHandle: Wt, useEffect: Wt, useDebugValue: Wt, useDeferredValue: function(i) {
    return ht(), i;
  }, useTransition: function() {
    return ht(), [
      !1,
      nr
    ];
  }, useId: function() {
    var i = hr.treeContext, c = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - $t(i) - 1)).toString(32) + c;
    var v = Lt;
    if (v === null) throw Error(t(404));
    return c = dt++, i = ":" + v.idPrefix + "R" + i, 0 < c && (i += "H" + c.toString(32)), i + ":";
  }, useMutableSource: function(i, c) {
    return ht(), c(i._source);
  }, useSyncExternalStore: function(i, c, v) {
    if (v === void 0) throw Error(t(407));
    return v();
  } }, Lt = null, _t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function mt(i) {
    return console.error(i), null;
  }
  function Mt() {
  }
  function Or(i, c, v, b, C, T, j, H, te) {
    var ne = [], ae = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ae, pingedTasks: ne, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: C === void 0 ? mt : C, onAllReady: Mt, onShellReady: j === void 0 ? Mt : j, onShellError: Mt, onFatalError: Mt }, v = Vt(c, 0, null, v, !1, !1), v.parentFlushed = !0, i = ir(c, i, null, v, ae, Ee, null, Cr), ne.push(i), c;
  }
  function ir(i, c, v, b, C, T, j, H) {
    i.allPendingTasks++, v === null ? i.pendingRootTasks++ : v.pendingTasks++;
    var te = { node: c, ping: function() {
      var ne = i.pingedTasks;
      ne.push(te), ne.length === 1 && Fr(i);
    }, blockedBoundary: v, blockedSegment: b, abortSet: C, legacyContext: T, context: j, treeContext: H };
    return C.add(te), te;
  }
  function Vt(i, c, v, b, C, T) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: v, lastPushedText: C, textEmbedded: T };
  }
  function Ut(i, c) {
    if (i = i.onError(c), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function X(i, c) {
    var v = i.onShellError;
    v(c), v = i.onFatalError, v(c), i.destination !== null ? (i.status = 2, i.destination.destroy(c)) : (i.status = 1, i.fatalError = c);
  }
  function k(i, c, v, b, C) {
    for (et = {}, hr = c, dt = 0, i = v(b, C); je; ) je = !1, dt = 0, zt += 1, ke = null, i = v(b, C);
    return gr(), i;
  }
  function D(i, c, v, b) {
    var C = v.render(), T = b.childContextTypes;
    if (T != null) {
      var j = c.legacyContext;
      if (typeof v.getChildContext != "function") b = j;
      else {
        v = v.getChildContext();
        for (var H in v) if (!(H in T)) throw Error(t(108, Ve(b) || "Unknown", H));
        b = nt({}, j, v);
      }
      c.legacyContext = b, Te(i, c, C), c.legacyContext = j;
    } else Te(i, c, C);
  }
  function W(i, c) {
    if (i && i.defaultProps) {
      c = nt({}, c), i = i.defaultProps;
      for (var v in i) c[v] === void 0 && (c[v] = i[v]);
      return c;
    }
    return c;
  }
  function me(i, c, v, b, C) {
    if (typeof v == "function") if (v.prototype && v.prototype.isReactComponent) {
      C = lt(v, c.legacyContext);
      var T = v.contextType;
      T = new v(b, typeof T == "object" && T !== null ? T._currentValue2 : C), fr(T, v, b, C), D(i, c, T, v);
    } else {
      T = lt(v, c.legacyContext), C = k(i, c, v, b, T);
      var j = dt !== 0;
      if (typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) fr(C, v, b, T), D(i, c, C, v);
      else if (j) {
        b = c.treeContext, c.treeContext = Ft(b, 1, 0);
        try {
          Te(i, c, C);
        } finally {
          c.treeContext = b;
        }
      } else Te(i, c, C);
    }
    else if (typeof v == "string") {
      switch (C = c.blockedSegment, T = Ce(C.chunks, v, b, i.responseState, C.formatContext), C.lastPushedText = !1, j = C.formatContext, C.formatContext = V(j, v, b), De(i, c, T), C.formatContext = j, v) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          C.chunks.push("</", v, ">");
      }
      C.lastPushedText = !1;
    } else {
      switch (v) {
        case xe:
        case se:
        case G:
        case A:
        case q:
          Te(i, c, b.children);
          return;
        case ie:
          Te(i, c, b.children);
          return;
        case ye:
          throw Error(t(343));
        case oe:
          e: {
            v = c.blockedBoundary, C = c.blockedSegment, T = b.fallback, b = b.children, j = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, te = Vt(i, C.chunks.length, H, C.formatContext, !1, !1);
            C.children.push(te), C.lastPushedText = !1;
            var ne = Vt(i, 0, null, C.formatContext, !1, !1);
            ne.parentFlushed = !0, c.blockedBoundary = H, c.blockedSegment = ne;
            try {
              if (De(
                i,
                c,
                b
              ), i.responseState.generateStaticMarkup || ne.lastPushedText && ne.textEmbedded && ne.chunks.push("<!-- -->"), ne.status = 1, wt(H, ne), H.pendingTasks === 0) break e;
            } catch (ae) {
              ne.status = 4, H.forceClientRender = !0, H.errorDigest = Ut(i, ae);
            } finally {
              c.blockedBoundary = v, c.blockedSegment = C;
            }
            c = ir(i, T, v, te, j, c.legacyContext, c.context, c.treeContext), i.pingedTasks.push(c);
          }
          return;
      }
      if (typeof v == "object" && v !== null) switch (v.$$typeof) {
        case fe:
          if (b = k(i, c, v.render, b, C), dt !== 0) {
            v = c.treeContext, c.treeContext = Ft(v, 1, 0);
            try {
              Te(i, c, b);
            } finally {
              c.treeContext = v;
            }
          } else Te(i, c, b);
          return;
        case ee:
          v = v.type, b = W(v, b), me(i, c, v, b, C);
          return;
        case K:
          if (C = b.children, v = v._context, b = b.value, T = v._currentValue2, v._currentValue2 = b, j = qe, qe = b = { parent: j, depth: j === null ? 0 : j.depth + 1, context: v, parentValue: T, value: b }, c.context = b, Te(i, c, C), i = qe, i === null) throw Error(t(403));
          b = i.parentValue, i.context._currentValue2 = b === he ? i.context._defaultValue : b, i = qe = i.parent, c.context = i;
          return;
        case B:
          b = b.children, b = b(v._currentValue2), Te(i, c, b);
          return;
        case pe:
          C = v._init, v = C(v._payload), b = W(v, b), me(
            i,
            c,
            v,
            b,
            void 0
          );
          return;
      }
      throw Error(t(130, v == null ? v : typeof v, ""));
    }
  }
  function Te(i, c, v) {
    if (c.node = v, typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Y:
          me(i, c, v.type, v.props, v.ref);
          return;
        case $:
          throw Error(t(257));
        case pe:
          var b = v._init;
          v = b(v._payload), Te(i, c, v);
          return;
      }
      if (M(v)) {
        ze(i, c, v);
        return;
      }
      if (v === null || typeof v != "object" ? b = null : (b = Re && v[Re] || v["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(v))) {
        if (v = b.next(), !v.done) {
          var C = [];
          do
            C.push(v.value), v = b.next();
          while (!v.done);
          ze(i, c, C);
        }
        return;
      }
      throw i = Object.prototype.toString.call(v), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : i));
    }
    typeof v == "string" ? (b = c.blockedSegment, b.lastPushedText = st(c.blockedSegment.chunks, v, i.responseState, b.lastPushedText)) : typeof v == "number" && (b = c.blockedSegment, b.lastPushedText = st(c.blockedSegment.chunks, "" + v, i.responseState, b.lastPushedText));
  }
  function ze(i, c, v) {
    for (var b = v.length, C = 0; C < b; C++) {
      var T = c.treeContext;
      c.treeContext = Ft(T, b, C);
      try {
        De(i, c, v[C]);
      } finally {
        c.treeContext = T;
      }
    }
  }
  function De(i, c, v) {
    var b = c.blockedSegment.formatContext, C = c.legacyContext, T = c.context;
    try {
      return Te(i, c, v);
    } catch (te) {
      if (gr(), typeof te == "object" && te !== null && typeof te.then == "function") {
        v = te;
        var j = c.blockedSegment, H = Vt(i, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(H), j.lastPushedText = !1, i = ir(i, c.node, c.blockedBoundary, H, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, v.then(i, i), c.blockedSegment.formatContext = b, c.legacyContext = C, c.context = T, $e(T);
      } else throw c.blockedSegment.formatContext = b, c.legacyContext = C, c.context = T, $e(T), te;
    }
  }
  function gt(i) {
    var c = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Et(this, c, i);
  }
  function Pe(i, c, v) {
    var b = i.blockedBoundary;
    i.blockedSegment.status = 3, b === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, i = v === void 0 ? Error(t(432)) : v, b.errorDigest = c.onError(i), b.parentFlushed && c.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(C) {
      return Pe(C, c, v);
    }), b.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (b = c.onAllReady, b()));
  }
  function wt(i, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var v = c.children[0];
      v.id = c.id, v.parentFlushed = !0, v.status === 1 && wt(i, v);
    } else i.completedSegments.push(c);
  }
  function Et(i, c, v) {
    if (c === null) {
      if (v.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = v;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Mt, c = i.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (v.parentFlushed && v.status === 1 && wt(c, v), c.parentFlushed && i.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(gt, i), c.fallbackAbortableTasks.clear()) : v.parentFlushed && v.status === 1 && (wt(c, v), c.completedSegments.length === 1 && c.parentFlushed && i.partialBoundaries.push(c)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Fr(i) {
    if (i.status !== 2) {
      var c = qe, v = _t.current;
      _t.current = vr;
      var b = Lt;
      Lt = i.responseState;
      try {
        var C = i.pingedTasks, T;
        for (T = 0; T < C.length; T++) {
          var j = C[T], H = i, te = j.blockedSegment;
          if (te.status === 0) {
            $e(j.context);
            try {
              Te(H, j, j.node), H.responseState.generateStaticMarkup || te.lastPushedText && te.textEmbedded && te.chunks.push("<!-- -->"), j.abortSet.delete(j), te.status = 1, Et(H, j.blockedBoundary, te);
            } catch (vt) {
              if (gr(), typeof vt == "object" && vt !== null && typeof vt.then == "function") {
                var ne = j.ping;
                vt.then(ne, ne);
              } else {
                j.abortSet.delete(j), te.status = 4;
                var ae = j.blockedBoundary, Ie = vt, Ct = Ut(H, Ie);
                if (ae === null ? X(H, Ie) : (ae.pendingTasks--, ae.forceClientRender || (ae.forceClientRender = !0, ae.errorDigest = Ct, ae.parentFlushed && H.clientRenderedBoundaries.push(ae))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var Rt = H.onAllReady;
                  Rt();
                }
              }
            } finally {
            }
          }
        }
        C.splice(0, T), i.destination !== null && Ar(i, i.destination);
      } catch (vt) {
        Ut(i, vt), X(i, vt);
      } finally {
        Lt = b, _t.current = v, v === vr && $e(c);
      }
    }
  }
  function yr(i, c, v) {
    switch (v.parentFlushed = !0, v.status) {
      case 0:
        var b = v.id = i.nextSegmentId++;
        return v.lastPushedText = !1, v.textEmbedded = !1, i = i.responseState, c.push('<template id="'), c.push(i.placeholderPrefix), i = b.toString(16), c.push(i), c.push('"></template>');
      case 1:
        v.status = 2;
        var C = !0;
        b = v.chunks;
        var T = 0;
        v = v.children;
        for (var j = 0; j < v.length; j++) {
          for (C = v[j]; T < C.index; T++) c.push(b[T]);
          C = br(i, c, C);
        }
        for (; T < b.length - 1; T++) c.push(b[T]);
        return T < b.length && (C = c.push(b[T])), C;
      default:
        throw Error(t(390));
    }
  }
  function br(i, c, v) {
    var b = v.boundary;
    if (b === null) return yr(i, c, v);
    if (b.parentFlushed = !0, b.forceClientRender) return i.responseState.generateStaticMarkup || (b = b.errorDigest, c.push("<!--$!-->"), c.push("<template"), b && (c.push(' data-dgst="'), b = R(b), c.push(b), c.push('"')), c.push("></template>")), yr(i, c, v), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
    if (0 < b.pendingTasks) {
      b.rootSegmentID = i.nextSegmentId++, 0 < b.completedSegments.length && i.partialBoundaries.push(b);
      var C = i.responseState, T = C.nextSuspenseID++;
      return C = C.boundaryPrefix + T.toString(16), b = b.id = C, Ue(c, i.responseState, b), yr(i, c, v), c.push("<!--/$-->");
    }
    if (b.byteSize > i.progressiveChunkSize) return b.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(b), Ue(c, i.responseState, b.id), yr(i, c, v), c.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || c.push("<!--$-->"), v = b.completedSegments, v.length !== 1) throw Error(t(391));
    return br(i, c, v[0]), i = i.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), i;
  }
  function $r(i, c, v) {
    return Me(c, i.responseState, v.formatContext, v.id), br(i, c, v), ft(c, v.formatContext);
  }
  function Br(i, c, v) {
    for (var b = v.completedSegments, C = 0; C < b.length; C++) zr(i, c, v, b[C]);
    if (b.length = 0, i = i.responseState, b = v.id, v = v.rootSegmentID, c.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? c.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), b === null) throw Error(t(395));
    return v = v.toString(16), c.push(b), c.push('","'), c.push(i.segmentPrefix), c.push(v), c.push('")<\/script>');
  }
  function zr(i, c, v, b) {
    if (b.status === 2) return !0;
    var C = b.id;
    if (C === -1) {
      if ((b.id = v.rootSegmentID) === -1) throw Error(t(392));
      return $r(i, c, b);
    }
    return $r(i, c, b), i = i.responseState, c.push(i.startInlineScript), i.sentCompleteSegmentFunction ? c.push('$RS("') : (i.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(i.segmentPrefix), C = C.toString(16), c.push(C), c.push('","'), c.push(i.placeholderPrefix), c.push(C), c.push('")<\/script>');
  }
  function Ar(i, c) {
    try {
      var v = i.completedRootSegment;
      if (v !== null && i.pendingRootTasks === 0) {
        br(i, c, v), i.completedRootSegment = null;
        var b = i.responseState.bootstrapChunks;
        for (v = 0; v < b.length - 1; v++) c.push(b[v]);
        v < b.length && c.push(b[v]);
      }
      var C = i.clientRenderedBoundaries, T;
      for (T = 0; T < C.length; T++) {
        var j = C[T];
        b = c;
        var H = i.responseState, te = j.id, ne = j.errorDigest, ae = j.errorMessage, Ie = j.errorComponentStack;
        if (b.push(H.startInlineScript), H.sentClientRenderFunction ? b.push('$RX("') : (H.sentClientRenderFunction = !0, b.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), te === null) throw Error(t(395));
        if (b.push(te), b.push('"'), ne || ae || Ie) {
          b.push(",");
          var Ct = He(ne || "");
          b.push(Ct);
        }
        if (ae || Ie) {
          b.push(",");
          var Rt = He(ae || "");
          b.push(Rt);
        }
        if (Ie) {
          b.push(",");
          var vt = He(Ie);
          b.push(vt);
        }
        if (!b.push(")<\/script>")) {
          i.destination = null, T++, C.splice(0, T);
          return;
        }
      }
      C.splice(0, T);
      var xr = i.completedBoundaries;
      for (T = 0; T < xr.length; T++) if (!Br(i, c, xr[T])) {
        i.destination = null, T++, xr.splice(0, T);
        return;
      }
      xr.splice(0, T);
      var qt = i.partialBoundaries;
      for (T = 0; T < qt.length; T++) {
        var Wr = qt[T];
        e: {
          C = i, j = c;
          var wr = Wr.completedSegments;
          for (H = 0; H < wr.length; H++) if (!zr(C, j, Wr, wr[H])) {
            H++, wr.splice(0, H);
            var nn = !1;
            break e;
          }
          wr.splice(0, H), nn = !0;
        }
        if (!nn) {
          i.destination = null, T++, qt.splice(0, T);
          return;
        }
      }
      qt.splice(0, T);
      var or = i.completedBoundaries;
      for (T = 0; T < or.length; T++) if (!Br(i, c, or[T])) {
        i.destination = null, T++, or.splice(0, T);
        return;
      }
      or.splice(0, T);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function tn(i, c) {
    try {
      var v = i.abortableTasks;
      v.forEach(function(b) {
        return Pe(b, i, c);
      }), v.clear(), i.destination !== null && Ar(i, i.destination);
    } catch (b) {
      Ut(i, b), X(i, b);
    }
  }
  function rn() {
  }
  function Hr(i, c, v, b) {
    var C = !1, T = null, j = "", H = { push: function(ne) {
      return ne !== null && (j += ne), !0;
    }, destroy: function(ne) {
      C = !0, T = ne;
    } }, te = !1;
    if (i = Or(i, We(v, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, rn, void 0, function() {
      te = !0;
    }), Fr(i), tn(i, b), i.status === 1) i.status = 2, H.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = H;
      try {
        Ar(i, H);
      } catch (ne) {
        Ut(i, ne), X(i, ne);
      }
    }
    if (C) throw T;
    if (!te) throw Error(t(426));
    return j;
  }
  return Tr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Tr.renderToStaticMarkup = function(i, c) {
    return Hr(i, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Tr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Tr.renderToString = function(i, c) {
    return Hr(i, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Tr.version = "18.3.1", Tr;
}
var bn = {};
var Po;
function fl() {
  if (Po) return bn;
  Po = 1;
  var e = Fe;
  function t(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, m = 1; m < arguments.length; m++) u += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function o(a, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), a.enqueue(u);
    else {
      var m = r.length - n;
      m < u.length && (m === 0 ? a.enqueue(r) : (r.set(u.subarray(0, m), n), a.enqueue(r), u = u.subarray(m)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function s(a, u) {
    return o(a, u), !0;
  }
  function d(a) {
    r && 0 < n && (a.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var g = new TextEncoder();
  function p(a) {
    return g.encode(a);
  }
  function h(a) {
    return g.encode(a);
  }
  function x(a, u) {
    typeof a.error == "function" ? a.error(u) : a.close();
  }
  var w = Object.prototype.hasOwnProperty, O = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, I = {}, R = {};
  function S(a) {
    return w.call(R, a) ? !0 : w.call(I, a) ? !1 : O.test(a) ? R[a] = !0 : (I[a] = !0, !1);
  }
  function N(a, u, m, y, E, _, P) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = y, this.attributeNamespace = E, this.mustUseProperty = m, this.propertyName = a, this.type = u, this.sanitizeURL = _, this.removeEmptyString = P;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    M[a] = new N(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    M[u] = new N(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    M[a] = new N(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    M[a] = new N(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    M[a] = new N(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    M[a] = new N(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    M[a] = new N(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    M[a] = new N(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    M[a] = new N(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var z = /[\-:]([a-z])/g;
  function V(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      z,
      V
    );
    M[u] = new N(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(z, V);
    M[u] = new N(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(z, V);
    M[u] = new N(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    M[a] = new N(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    M[a] = new N(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var U = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, L = ["Webkit", "ms", "Moz", "O"];
  Object.keys(U).forEach(function(a) {
    L.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), U[u] = U[a];
    });
  });
  var Z = /["'&<>]/;
  function de(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = Z.exec(a);
    if (u) {
      var m = "", y, E = 0;
      for (y = u.index; y < a.length; y++) {
        switch (a.charCodeAt(y)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        E !== y && (m += a.substring(E, y)), E = y + 1, m += u;
      }
      a = E !== y ? m + a.substring(E, y) : m;
    }
    return a;
  }
  var J = /([A-Z])/g, ve = /^ms-/, Be = Array.isArray, Qe = h("<script>"), ge = h("<\/script>"), Ce = h('<script src="'), Ue = h('<script type="module" src="'), Me = h('" async=""><\/script>'), ft = /(<\/|<)(s)(cript)/gi;
  function Xe(a, u, m, y) {
    return "" + u + (m === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function He(a, u, m, y, E) {
    a = a === void 0 ? "" : a, u = u === void 0 ? Qe : h('<script nonce="' + de(u) + '">');
    var _ = [];
    if (m !== void 0 && _.push(u, p(("" + m).replace(ft, Xe)), ge), y !== void 0) for (m = 0; m < y.length; m++) _.push(Ce, p(de(y[m])), Me);
    if (E !== void 0) for (y = 0; y < E.length; y++) _.push(Ue, p(de(E[y])), Me);
    return { bootstrapChunks: _, startInlineScript: u, placeholderPrefix: h(a + "P:"), segmentPrefix: h(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function We(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function st(a) {
    return We(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function nt(a, u, m) {
    switch (u) {
      case "select":
        return We(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return We(2, null);
      case "math":
        return We(3, null);
      case "foreignObject":
        return We(1, null);
      case "table":
        return We(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return We(5, null);
      case "colgroup":
        return We(7, null);
      case "tr":
        return We(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? We(1, null) : a;
  }
  var Y = h("<!-- -->");
  function $(a, u, m, y) {
    return u === "" ? y : (y && a.push(Y), a.push(p(de(u))), !0);
  }
  var q = /* @__PURE__ */ new Map(), G = h(' style="'), A = h(":"), K = h(";");
  function B(a, u, m) {
    if (typeof m != "object") throw Error(t(62));
    u = !0;
    for (var y in m) if (w.call(m, y)) {
      var E = m[y];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (y.indexOf("--") === 0) {
          var _ = p(de(y));
          E = p(de(("" + E).trim()));
        } else {
          _ = y;
          var P = q.get(_);
          P !== void 0 || (P = h(de(_.replace(J, "-$1").toLowerCase().replace(ve, "-ms-"))), q.set(_, P)), _ = P, E = typeof E == "number" ? E === 0 || w.call(U, y) ? p("" + E) : p(E + "px") : p(de(("" + E).trim()));
        }
        u ? (u = !1, a.push(G, _, A, E)) : a.push(K, _, A, E);
      }
    }
    u || a.push(ie);
  }
  var fe = h(" "), oe = h('="'), ie = h('"'), ee = h('=""');
  function pe(a, u, m, y) {
    switch (m) {
      case "style":
        B(a, u, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (u = M.hasOwnProperty(m) ? M[m] : null, u !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (m = p(u.attributeName), u.type) {
          case 3:
            y && a.push(fe, m, ee);
            break;
          case 4:
            y === !0 ? a.push(fe, m, ee) : y !== !1 && a.push(fe, m, oe, p(de(y)), ie);
            break;
          case 5:
            isNaN(y) || a.push(fe, m, oe, p(de(y)), ie);
            break;
          case 6:
            !isNaN(y) && 1 <= y && a.push(fe, m, oe, p(de(y)), ie);
            break;
          default:
            u.sanitizeURL && (y = "" + y), a.push(fe, m, oe, p(de(y)), ie);
        }
      } else if (S(m)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = m.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(fe, p(m), oe, p(de(y)), ie);
      }
    }
  }
  var ye = h(">"), se = h("/>");
  function xe(a, u, m) {
    if (u != null) {
      if (m != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && a.push(p("" + u));
    }
  }
  function he(a) {
    var u = "";
    return e.Children.forEach(a, function(m) {
      m != null && (u += m);
    }), u;
  }
  var Re = h(' selected=""');
  function Ve(a, u, m, y) {
    a.push(we(m));
    var E = m = null, _;
    for (_ in u) if (w.call(u, _)) {
      var P = u[_];
      if (P != null) switch (_) {
        case "children":
          m = P;
          break;
        case "dangerouslySetInnerHTML":
          E = P;
          break;
        default:
          pe(a, y, _, P);
      }
    }
    return a.push(ye), xe(a, E, m), typeof m == "string" ? (a.push(p(de(m))), null) : m;
  }
  var Ee = h(`
`), lt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function we(a) {
    var u = qe.get(a);
    if (u === void 0) {
      if (!lt.test(a)) throw Error(t(65, a));
      u = h("<" + a), qe.set(a, u);
    }
    return u;
  }
  var Q = h("<!DOCTYPE html>");
  function Se(a, u, m, y, E) {
    switch (u) {
      case "select":
        a.push(we("select"));
        var _ = null, P = null;
        for (le in m) if (w.call(m, le)) {
          var F = m[le];
          if (F != null) switch (le) {
            case "children":
              _ = F;
              break;
            case "dangerouslySetInnerHTML":
              P = F;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              pe(a, y, le, F);
          }
        }
        return a.push(ye), xe(a, P, _), _;
      case "option":
        P = E.selectedValue, a.push(we("option"));
        var re = F = null, ce = null, le = null;
        for (_ in m) if (w.call(m, _)) {
          var Ne = m[_];
          if (Ne != null) switch (_) {
            case "children":
              F = Ne;
              break;
            case "selected":
              ce = Ne;
              break;
            case "dangerouslySetInnerHTML":
              le = Ne;
              break;
            case "value":
              re = Ne;
            default:
              pe(a, y, _, Ne);
          }
        }
        if (P != null) if (m = re !== null ? "" + re : he(F), Be(P)) {
          for (y = 0; y < P.length; y++)
            if ("" + P[y] === m) {
              a.push(Re);
              break;
            }
        } else "" + P === m && a.push(Re);
        else ce && a.push(Re);
        return a.push(ye), xe(a, le, F), F;
      case "textarea":
        a.push(we("textarea")), le = P = _ = null;
        for (F in m) if (w.call(m, F) && (re = m[F], re != null)) switch (F) {
          case "children":
            le = re;
            break;
          case "value":
            _ = re;
            break;
          case "defaultValue":
            P = re;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            pe(a, y, F, re);
        }
        if (_ === null && P !== null && (_ = P), a.push(ye), le != null) {
          if (_ != null) throw Error(t(92));
          if (Be(le) && 1 < le.length) throw Error(t(93));
          _ = "" + le;
        }
        return typeof _ == "string" && _[0] === `
` && a.push(Ee), _ !== null && a.push(p(de("" + _))), null;
      case "input":
        a.push(we("input")), re = le = F = _ = null;
        for (P in m) if (w.call(m, P) && (ce = m[P], ce != null)) switch (P) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            re = ce;
            break;
          case "defaultValue":
            F = ce;
            break;
          case "checked":
            le = ce;
            break;
          case "value":
            _ = ce;
            break;
          default:
            pe(a, y, P, ce);
        }
        return le !== null ? pe(
          a,
          y,
          "checked",
          le
        ) : re !== null && pe(a, y, "checked", re), _ !== null ? pe(a, y, "value", _) : F !== null && pe(a, y, "value", F), a.push(se), null;
      case "menuitem":
        a.push(we("menuitem"));
        for (var bt in m) if (w.call(m, bt) && (_ = m[bt], _ != null)) switch (bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            pe(a, y, bt, _);
        }
        return a.push(ye), null;
      case "title":
        a.push(we("title")), _ = null;
        for (Ne in m) if (w.call(m, Ne) && (P = m[Ne], P != null)) switch (Ne) {
          case "children":
            _ = P;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            pe(a, y, Ne, P);
        }
        return a.push(ye), _;
      case "listing":
      case "pre":
        a.push(we(u)), P = _ = null;
        for (re in m) if (w.call(m, re) && (F = m[re], F != null)) switch (re) {
          case "children":
            _ = F;
            break;
          case "dangerouslySetInnerHTML":
            P = F;
            break;
          default:
            pe(a, y, re, F);
        }
        if (a.push(ye), P != null) {
          if (_ != null) throw Error(t(60));
          if (typeof P != "object" || !("__html" in P)) throw Error(t(61));
          m = P.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? a.push(Ee, p(m)) : a.push(p("" + m)));
        }
        return typeof _ == "string" && _[0] === `
` && a.push(Ee), _;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(we(u));
        for (var Ot in m) if (w.call(m, Ot) && (_ = m[Ot], _ != null)) switch (Ot) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            pe(a, y, Ot, _);
        }
        return a.push(se), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ve(a, m, u, y);
      case "html":
        return E.insertionMode === 0 && a.push(Q), Ve(a, m, u, y);
      default:
        if (u.indexOf("-") === -1 && typeof m.is != "string") return Ve(a, m, u, y);
        a.push(we(u)), P = _ = null;
        for (ce in m) if (w.call(m, ce) && (F = m[ce], F != null)) switch (ce) {
          case "children":
            _ = F;
            break;
          case "dangerouslySetInnerHTML":
            P = F;
            break;
          case "style":
            B(a, y, F);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(ce) && typeof F != "function" && typeof F != "symbol" && a.push(fe, p(ce), oe, p(de(F)), ie);
        }
        return a.push(ye), xe(a, P, _), _;
    }
  }
  var ut = h("</"), it = h(">"), $e = h('<template id="'), dr = h('"></template>'), fr = h("<!--$-->"), Cr = h('<!--$?--><template id="'), Ft = h('"></template>'), $t = h("<!--$!-->"), Qt = h("<!--/$-->"), er = h("<template"), pt = h('"'), It = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var pr = h("></template>");
  function et(a, u, m) {
    if (o(a, Cr), m === null) throw Error(t(395));
    return o(a, m), s(a, Ft);
  }
  var hr = h('<div hidden id="'), ct = h('">'), ke = h("</div>"), Bt = h('<svg aria-hidden="true" style="display:none" id="'), je = h('">'), dt = h("</svg>"), xt = h('<math aria-hidden="true" style="display:none" id="'), zt = h('">'), ht = h("</math>"), mr = h('<table hidden id="'), tr = h('">'), gr = h("</table>"), Ht = h('<table hidden><tbody id="'), rr = h('">'), Rr = h("</tbody></table>"), tt = h('<table hidden><tr id="'), nr = h('">'), Wt = h("</tr></table>"), vr = h('<table hidden><colgroup id="'), Lt = h('">'), _t = h("</colgroup></table>");
  function mt(a, u, m, y) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return o(a, hr), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, ct);
      case 2:
        return o(a, Bt), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, je);
      case 3:
        return o(a, xt), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, zt);
      case 4:
        return o(a, mr), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, tr);
      case 5:
        return o(a, Ht), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, rr);
      case 6:
        return o(a, tt), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, nr);
      case 7:
        return o(
          a,
          vr
        ), o(a, u.segmentPrefix), o(a, p(y.toString(16))), s(a, Lt);
      default:
        throw Error(t(397));
    }
  }
  function Mt(a, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return s(a, ke);
      case 2:
        return s(a, dt);
      case 3:
        return s(a, ht);
      case 4:
        return s(a, gr);
      case 5:
        return s(a, Rr);
      case 6:
        return s(a, Wt);
      case 7:
        return s(a, _t);
      default:
        throw Error(t(397));
    }
  }
  var Or = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ir = h('$RS("'), Vt = h('","'), Ut = h('")<\/script>'), X = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), k = h('$RC("'), D = h('","'), W = h('")<\/script>'), me = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Te = h('$RX("'), ze = h('"'), De = h(")<\/script>"), gt = h(","), Pe = /[<\u2028\u2029]/g;
  function wt(a) {
    return JSON.stringify(a).replace(Pe, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Et = Object.assign, Fr = Symbol.for("react.element"), yr = Symbol.for("react.portal"), br = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Br = Symbol.for("react.profiler"), zr = Symbol.for("react.provider"), Ar = Symbol.for("react.context"), tn = Symbol.for("react.forward_ref"), rn = Symbol.for("react.suspense"), Hr = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), v = Symbol.for("react.scope"), b = Symbol.for("react.debug_trace_mode"), C = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), j = Symbol.iterator;
  function H(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case br:
        return "Fragment";
      case yr:
        return "Portal";
      case Br:
        return "Profiler";
      case $r:
        return "StrictMode";
      case rn:
        return "Suspense";
      case Hr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Ar:
        return (a.displayName || "Context") + ".Consumer";
      case zr:
        return (a._context.displayName || "Context") + ".Provider";
      case tn:
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case i:
        return u = a.displayName || null, u !== null ? u : H(a.type) || "Memo";
      case c:
        u = a._payload, a = a._init;
        try {
          return H(a(u));
        } catch {
        }
    }
    return null;
  }
  var te = {};
  function ne(a, u) {
    if (a = a.contextTypes, !a) return te;
    var m = {}, y;
    for (y in a) m[y] = u[y];
    return m;
  }
  var ae = null;
  function Ie(a, u) {
    if (a !== u) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var m = u.parent;
      if (a === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        Ie(a, m);
      }
      u.context._currentValue = u.value;
    }
  }
  function Ct(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Ct(a);
  }
  function Rt(a) {
    var u = a.parent;
    u !== null && Rt(u), a.context._currentValue = a.value;
  }
  function vt(a, u) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === u.depth ? Ie(a, u) : vt(a, u);
  }
  function xr(a, u) {
    var m = u.parent;
    if (m === null) throw Error(t(402));
    a.depth === m.depth ? Ie(a, m) : xr(a, m), u.context._currentValue = u.value;
  }
  function qt(a) {
    var u = ae;
    u !== a && (u === null ? Rt(a) : a === null ? Ct(u) : u.depth === a.depth ? Ie(u, a) : u.depth > a.depth ? vt(u, a) : xr(u, a), ae = a);
  }
  var Wr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function wr(a, u, m, y) {
    var E = a.state !== void 0 ? a.state : null;
    a.updater = Wr, a.props = m, a.state = E;
    var _ = { queue: [], replace: !1 };
    a._reactInternals = _;
    var P = u.contextType;
    if (a.context = typeof P == "object" && P !== null ? P._currentValue : y, P = u.getDerivedStateFromProps, typeof P == "function" && (P = P(m, E), E = P == null ? E : Et({}, E, P), a.state = E), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Wr.enqueueReplaceState(a, a.state, null), _.queue !== null && 0 < _.queue.length) if (u = _.queue, P = _.replace, _.queue = null, _.replace = !1, P && u.length === 1) a.state = u[0];
    else {
      for (_ = P ? u[0] : a.state, E = !0, P = P ? 1 : 0; P < u.length; P++) {
        var F = u[P];
        F = typeof F == "function" ? F.call(a, _, m, y) : F, F != null && (E ? (E = !1, _ = Et({}, _, F)) : Et(_, F));
      }
      a.state = _;
    }
    else _.queue = null;
  }
  var nn = { id: 1, overflow: "" };
  function or(a, u, m) {
    var y = a.id;
    a = a.overflow;
    var E = 32 - on(y) - 1;
    y &= ~(1 << E), m += 1;
    var _ = 32 - on(u) + E;
    if (30 < _) {
      var P = E - E % 5;
      return _ = (y & (1 << P) - 1).toString(32), y >>= P, E -= P, { id: 1 << 32 - on(u) + E | m << E | y, overflow: _ + a };
    }
    return { id: 1 << _ | m << E | y, overflow: a };
  }
  var on = Math.clz32 ? Math.clz32 : ds, us = Math.log, cs = Math.LN2;
  function ds(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (us(a) / cs | 0) | 0;
  }
  function fs(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var ps = typeof Object.is == "function" ? Object.is : fs, Yt = null, Kn = null, an = null, Ae = null, Vr = !1, sn = !1, Ur = 0, ar = null, ln = 0;
  function Sr() {
    if (Yt === null) throw Error(t(321));
    return Yt;
  }
  function to() {
    if (0 < ln) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Zn() {
    return Ae === null ? an === null ? (Vr = !1, an = Ae = to()) : (Vr = !0, Ae = an) : Ae.next === null ? (Vr = !1, Ae = Ae.next = to()) : (Vr = !0, Ae = Ae.next), Ae;
  }
  function Jn() {
    Kn = Yt = null, sn = !1, an = null, ln = 0, Ae = ar = null;
  }
  function ro(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function no(a, u, m) {
    if (Yt = Sr(), Ae = Zn(), Vr) {
      var y = Ae.queue;
      if (u = y.dispatch, ar !== null && (m = ar.get(y), m !== void 0)) {
        ar.delete(y), y = Ae.memoizedState;
        do
          y = a(y, m.action), m = m.next;
        while (m !== null);
        return Ae.memoizedState = y, [y, u];
      }
      return [Ae.memoizedState, u];
    }
    return a = a === ro ? typeof u == "function" ? u() : u : m !== void 0 ? m(u) : u, Ae.memoizedState = a, a = Ae.queue = { last: null, dispatch: null }, a = a.dispatch = hs.bind(null, Yt, a), [Ae.memoizedState, a];
  }
  function io(a, u) {
    if (Yt = Sr(), Ae = Zn(), u = u === void 0 ? null : u, Ae !== null) {
      var m = Ae.memoizedState;
      if (m !== null && u !== null) {
        var y = m[1];
        e: if (y === null) y = !1;
        else {
          for (var E = 0; E < y.length && E < u.length; E++) if (!ps(u[E], y[E])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return m[0];
      }
    }
    return a = a(), Ae.memoizedState = [a, u], a;
  }
  function hs(a, u, m) {
    if (25 <= ln) throw Error(t(301));
    if (a === Yt) if (sn = !0, a = { action: m, next: null }, ar === null && (ar = /* @__PURE__ */ new Map()), m = ar.get(u), m === void 0) ar.set(u, a);
    else {
      for (u = m; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function ms() {
    throw Error(t(394));
  }
  function un() {
  }
  var oo = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Sr(), a._currentValue;
  }, useMemo: io, useReducer: no, useRef: function(a) {
    Yt = Sr(), Ae = Zn();
    var u = Ae.memoizedState;
    return u === null ? (a = { current: a }, Ae.memoizedState = a) : u;
  }, useState: function(a) {
    return no(ro, a);
  }, useInsertionEffect: un, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return io(function() {
      return a;
    }, u);
  }, useImperativeHandle: un, useEffect: un, useDebugValue: un, useDeferredValue: function(a) {
    return Sr(), a;
  }, useTransition: function() {
    return Sr(), [!1, ms];
  }, useId: function() {
    var a = Kn.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - on(a) - 1)).toString(32) + u;
    var m = cn;
    if (m === null) throw Error(t(404));
    return u = Ur++, a = ":" + m.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return Sr(), u(a._source);
  }, useSyncExternalStore: function(a, u, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, cn = null, Qn = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function gs(a) {
    return console.error(a), null;
  }
  function qr() {
  }
  function vs(a, u, m, y, E, _, P, F, re) {
    var ce = [], le = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: le, pingedTasks: ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? gs : E, onAllReady: _ === void 0 ? qr : _, onShellReady: P === void 0 ? qr : P, onShellError: F === void 0 ? qr : F, onFatalError: re === void 0 ? qr : re }, m = dn(u, 0, null, m, !1, !1), m.parentFlushed = !0, a = ei(u, a, null, m, le, te, null, nn), ce.push(a), u;
  }
  function ei(a, u, m, y, E, _, P, F) {
    a.allPendingTasks++, m === null ? a.pendingRootTasks++ : m.pendingTasks++;
    var re = { node: u, ping: function() {
      var ce = a.pingedTasks;
      ce.push(re), ce.length === 1 && po(a);
    }, blockedBoundary: m, blockedSegment: y, abortSet: E, legacyContext: _, context: P, treeContext: F };
    return E.add(re), re;
  }
  function dn(a, u, m, y, E, _) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: m, lastPushedText: E, textEmbedded: _ };
  }
  function Yr(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function fn(a, u) {
    var m = a.onShellError;
    m(u), m = a.onFatalError, m(u), a.destination !== null ? (a.status = 2, x(a.destination, u)) : (a.status = 1, a.fatalError = u);
  }
  function ao(a, u, m, y, E) {
    for (Yt = {}, Kn = u, Ur = 0, a = m(y, E); sn; ) sn = !1, Ur = 0, ln += 1, Ae = null, a = m(y, E);
    return Jn(), a;
  }
  function so(a, u, m, y) {
    var E = m.render(), _ = y.childContextTypes;
    if (_ != null) {
      var P = u.legacyContext;
      if (typeof m.getChildContext != "function") y = P;
      else {
        m = m.getChildContext();
        for (var F in m) if (!(F in _)) throw Error(t(108, H(y) || "Unknown", F));
        y = Et({}, P, m);
      }
      u.legacyContext = y, yt(a, u, E), u.legacyContext = P;
    } else yt(a, u, E);
  }
  function lo(a, u) {
    if (a && a.defaultProps) {
      u = Et({}, u), a = a.defaultProps;
      for (var m in a) u[m] === void 0 && (u[m] = a[m]);
      return u;
    }
    return u;
  }
  function ti(a, u, m, y, E) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      E = ne(m, u.legacyContext);
      var _ = m.contextType;
      _ = new m(y, typeof _ == "object" && _ !== null ? _._currentValue : E), wr(_, m, y, E), so(a, u, _, m);
    } else {
      _ = ne(m, u.legacyContext), E = ao(a, u, m, y, _);
      var P = Ur !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) wr(E, m, y, _), so(a, u, E, m);
      else if (P) {
        y = u.treeContext, u.treeContext = or(y, 1, 0);
        try {
          yt(a, u, E);
        } finally {
          u.treeContext = y;
        }
      } else yt(a, u, E);
    }
    else if (typeof m == "string") {
      switch (E = u.blockedSegment, _ = Se(E.chunks, m, y, a.responseState, E.formatContext), E.lastPushedText = !1, P = E.formatContext, E.formatContext = nt(P, m, y), ri(a, u, _), E.formatContext = P, m) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          E.chunks.push(ut, p(m), it);
      }
      E.lastPushedText = !1;
    } else {
      switch (m) {
        case C:
        case b:
        case $r:
        case Br:
        case br:
          yt(a, u, y.children);
          return;
        case Hr:
          yt(a, u, y.children);
          return;
        case v:
          throw Error(t(343));
        case rn:
          e: {
            m = u.blockedBoundary, E = u.blockedSegment, _ = y.fallback, y = y.children, P = /* @__PURE__ */ new Set();
            var F = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: P, errorDigest: null }, re = dn(a, E.chunks.length, F, E.formatContext, !1, !1);
            E.children.push(re), E.lastPushedText = !1;
            var ce = dn(a, 0, null, E.formatContext, !1, !1);
            ce.parentFlushed = !0, u.blockedBoundary = F, u.blockedSegment = ce;
            try {
              if (ri(
                a,
                u,
                y
              ), ce.lastPushedText && ce.textEmbedded && ce.chunks.push(Y), ce.status = 1, pn(F, ce), F.pendingTasks === 0) break e;
            } catch (le) {
              ce.status = 4, F.forceClientRender = !0, F.errorDigest = Yr(a, le);
            } finally {
              u.blockedBoundary = m, u.blockedSegment = E;
            }
            u = ei(a, _, m, re, P, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case tn:
          if (y = ao(a, u, m.render, y, E), Ur !== 0) {
            m = u.treeContext, u.treeContext = or(m, 1, 0);
            try {
              yt(a, u, y);
            } finally {
              u.treeContext = m;
            }
          } else yt(a, u, y);
          return;
        case i:
          m = m.type, y = lo(m, y), ti(a, u, m, y, E);
          return;
        case zr:
          if (E = y.children, m = m._context, y = y.value, _ = m._currentValue, m._currentValue = y, P = ae, ae = y = { parent: P, depth: P === null ? 0 : P.depth + 1, context: m, parentValue: _, value: y }, u.context = y, yt(a, u, E), a = ae, a === null) throw Error(t(403));
          y = a.parentValue, a.context._currentValue = y === T ? a.context._defaultValue : y, a = ae = a.parent, u.context = a;
          return;
        case Ar:
          y = y.children, y = y(m._currentValue), yt(a, u, y);
          return;
        case c:
          E = m._init, m = E(m._payload), y = lo(m, y), ti(a, u, m, y, void 0);
          return;
      }
      throw Error(t(
        130,
        m == null ? m : typeof m,
        ""
      ));
    }
  }
  function yt(a, u, m) {
    if (u.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fr:
          ti(a, u, m.type, m.props, m.ref);
          return;
        case yr:
          throw Error(t(257));
        case c:
          var y = m._init;
          m = y(m._payload), yt(a, u, m);
          return;
      }
      if (Be(m)) {
        uo(a, u, m);
        return;
      }
      if (m === null || typeof m != "object" ? y = null : (y = j && m[j] || m["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(m))) {
        if (m = y.next(), !m.done) {
          var E = [];
          do
            E.push(m.value), m = y.next();
          while (!m.done);
          uo(a, u, E);
        }
        return;
      }
      throw a = Object.prototype.toString.call(m), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : a));
    }
    typeof m == "string" ? (y = u.blockedSegment, y.lastPushedText = $(u.blockedSegment.chunks, m, a.responseState, y.lastPushedText)) : typeof m == "number" && (y = u.blockedSegment, y.lastPushedText = $(u.blockedSegment.chunks, "" + m, a.responseState, y.lastPushedText));
  }
  function uo(a, u, m) {
    for (var y = m.length, E = 0; E < y; E++) {
      var _ = u.treeContext;
      u.treeContext = or(_, y, E);
      try {
        ri(a, u, m[E]);
      } finally {
        u.treeContext = _;
      }
    }
  }
  function ri(a, u, m) {
    var y = u.blockedSegment.formatContext, E = u.legacyContext, _ = u.context;
    try {
      return yt(a, u, m);
    } catch (re) {
      if (Jn(), typeof re == "object" && re !== null && typeof re.then == "function") {
        m = re;
        var P = u.blockedSegment, F = dn(a, P.chunks.length, null, P.formatContext, P.lastPushedText, !0);
        P.children.push(F), P.lastPushedText = !1, a = ei(a, u.node, u.blockedBoundary, F, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, m.then(a, a), u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = _, qt(_);
      } else throw u.blockedSegment.formatContext = y, u.legacyContext = E, u.context = _, qt(_), re;
    }
  }
  function ys(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, fo(this, u, a);
  }
  function co(a, u, m) {
    var y = a.blockedBoundary;
    a.blockedSegment.status = 3, y === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, a = m === void 0 ? Error(t(432)) : m, y.errorDigest = u.onError(a), y.parentFlushed && u.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(E) {
      return co(E, u, m);
    }), y.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (y = u.onAllReady, y()));
  }
  function pn(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var m = u.children[0];
      m.id = u.id, m.parentFlushed = !0, m.status === 1 && pn(a, m);
    } else a.completedSegments.push(u);
  }
  function fo(a, u, m) {
    if (u === null) {
      if (m.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = m;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = qr, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && pn(u, m), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(ys, a), u.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (pn(u, m), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function po(a) {
    if (a.status !== 2) {
      var u = ae, m = Qn.current;
      Qn.current = oo;
      var y = cn;
      cn = a.responseState;
      try {
        var E = a.pingedTasks, _;
        for (_ = 0; _ < E.length; _++) {
          var P = E[_], F = a, re = P.blockedSegment;
          if (re.status === 0) {
            qt(P.context);
            try {
              yt(F, P, P.node), re.lastPushedText && re.textEmbedded && re.chunks.push(Y), P.abortSet.delete(P), re.status = 1, fo(F, P.blockedBoundary, re);
            } catch (At) {
              if (Jn(), typeof At == "object" && At !== null && typeof At.then == "function") {
                var ce = P.ping;
                At.then(ce, ce);
              } else {
                P.abortSet.delete(P), re.status = 4;
                var le = P.blockedBoundary, Ne = At, bt = Yr(F, Ne);
                if (le === null ? fn(F, Ne) : (le.pendingTasks--, le.forceClientRender || (le.forceClientRender = !0, le.errorDigest = bt, le.parentFlushed && F.clientRenderedBoundaries.push(le))), F.allPendingTasks--, F.allPendingTasks === 0) {
                  var Ot = F.onAllReady;
                  Ot();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, _), a.destination !== null && ni(a, a.destination);
      } catch (At) {
        Yr(a, At), fn(a, At);
      } finally {
        cn = y, Qn.current = m, m === oo && qt(u);
      }
    }
  }
  function hn(a, u, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var y = m.id = a.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, a = a.responseState, o(u, $e), o(u, a.placeholderPrefix), a = p(y.toString(16)), o(u, a), s(u, dr);
      case 1:
        m.status = 2;
        var E = !0;
        y = m.chunks;
        var _ = 0;
        m = m.children;
        for (var P = 0; P < m.length; P++) {
          for (E = m[P]; _ < E.index; _++) o(u, y[_]);
          E = mn(a, u, E);
        }
        for (; _ < y.length - 1; _++) o(u, y[_]);
        return _ < y.length && (E = s(u, y[_])), E;
      default:
        throw Error(t(390));
    }
  }
  function mn(a, u, m) {
    var y = m.boundary;
    if (y === null) return hn(a, u, m);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, s(u, $t), o(u, er), y && (o(u, It), o(u, p(de(y))), o(u, pt)), s(u, pr), hn(a, u, m);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = a.nextSegmentId++, 0 < y.completedSegments.length && a.partialBoundaries.push(y);
      var E = a.responseState, _ = E.nextSuspenseID++;
      E = h(E.boundaryPrefix + _.toString(16)), y = y.id = E, et(u, a.responseState, y), hn(a, u, m);
    } else if (y.byteSize > a.progressiveChunkSize) y.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(y), et(u, a.responseState, y.id), hn(a, u, m);
    else {
      if (s(u, fr), m = y.completedSegments, m.length !== 1) throw Error(t(391));
      mn(a, u, m[0]);
    }
    return s(u, Qt);
  }
  function ho(a, u, m) {
    return mt(u, a.responseState, m.formatContext, m.id), mn(a, u, m), Mt(u, m.formatContext);
  }
  function mo(a, u, m) {
    for (var y = m.completedSegments, E = 0; E < y.length; E++) go(a, u, m, y[E]);
    if (y.length = 0, a = a.responseState, y = m.id, m = m.rootSegmentID, o(u, a.startInlineScript), a.sentCompleteBoundaryFunction ? o(u, k) : (a.sentCompleteBoundaryFunction = !0, o(u, X)), y === null) throw Error(t(395));
    return m = p(m.toString(16)), o(u, y), o(u, D), o(u, a.segmentPrefix), o(u, m), s(u, W);
  }
  function go(a, u, m, y) {
    if (y.status === 2) return !0;
    var E = y.id;
    if (E === -1) {
      if ((y.id = m.rootSegmentID) === -1) throw Error(t(392));
      return ho(a, u, y);
    }
    return ho(a, u, y), a = a.responseState, o(u, a.startInlineScript), a.sentCompleteSegmentFunction ? o(u, ir) : (a.sentCompleteSegmentFunction = !0, o(u, Or)), o(u, a.segmentPrefix), E = p(E.toString(16)), o(u, E), o(u, Vt), o(u, a.placeholderPrefix), o(u, E), s(u, Ut);
  }
  function ni(a, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var m = a.completedRootSegment;
      if (m !== null && a.pendingRootTasks === 0) {
        mn(a, u, m), a.completedRootSegment = null;
        var y = a.responseState.bootstrapChunks;
        for (m = 0; m < y.length - 1; m++) o(u, y[m]);
        m < y.length && s(u, y[m]);
      }
      var E = a.clientRenderedBoundaries, _;
      for (_ = 0; _ < E.length; _++) {
        var P = E[_];
        y = u;
        var F = a.responseState, re = P.id, ce = P.errorDigest, le = P.errorMessage, Ne = P.errorComponentStack;
        if (o(y, F.startInlineScript), F.sentClientRenderFunction ? o(y, Te) : (F.sentClientRenderFunction = !0, o(
          y,
          me
        )), re === null) throw Error(t(395));
        o(y, re), o(y, ze), (ce || le || Ne) && (o(y, gt), o(y, p(wt(ce || "")))), (le || Ne) && (o(y, gt), o(y, p(wt(le || "")))), Ne && (o(y, gt), o(y, p(wt(Ne)))), s(y, De);
      }
      E.splice(0, _);
      var bt = a.completedBoundaries;
      for (_ = 0; _ < bt.length; _++) mo(a, u, bt[_]);
      bt.splice(0, _), d(u), r = new Uint8Array(512), n = 0;
      var Ot = a.partialBoundaries;
      for (_ = 0; _ < Ot.length; _++) {
        var At = Ot[_];
        e: {
          E = a, P = u;
          var gn = At.completedSegments;
          for (F = 0; F < gn.length; F++) if (!go(
            E,
            P,
            At,
            gn[F]
          )) {
            F++, gn.splice(0, F);
            var yo = !1;
            break e;
          }
          gn.splice(0, F), yo = !0;
        }
        if (!yo) {
          a.destination = null, _++, Ot.splice(0, _);
          return;
        }
      }
      Ot.splice(0, _);
      var ii = a.completedBoundaries;
      for (_ = 0; _ < ii.length; _++) mo(a, u, ii[_]);
      ii.splice(0, _);
    } finally {
      d(u), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.close();
    }
  }
  function vo(a, u) {
    try {
      var m = a.abortableTasks;
      m.forEach(function(y) {
        return co(y, a, u);
      }), m.clear(), a.destination !== null && ni(a, a.destination);
    } catch (y) {
      Yr(a, y), fn(a, y);
    }
  }
  return bn.renderToReadableStream = function(a, u) {
    return new Promise(function(m, y) {
      var E, _, P = new Promise(function(le, Ne) {
        _ = le, E = Ne;
      }), F = vs(a, He(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), st(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, _, function() {
        var le = new ReadableStream({ type: "bytes", pull: function(Ne) {
          if (F.status === 1) F.status = 2, x(Ne, F.fatalError);
          else if (F.status !== 2 && F.destination === null) {
            F.destination = Ne;
            try {
              ni(F, Ne);
            } catch (bt) {
              Yr(F, bt), fn(F, bt);
            }
          }
        }, cancel: function() {
          vo(F);
        } }, { highWaterMark: 0 });
        le.allReady = P, m(le);
      }, function(le) {
        P.catch(function() {
        }), y(le);
      }, E);
      if (u && u.signal) {
        var re = u.signal, ce = function() {
          vo(F, re.reason), re.removeEventListener("abort", ce);
        };
        re.addEventListener("abort", ce);
      }
      po(F);
    });
  }, bn.version = "18.3.1", bn;
}
var Dr, xa;
Dr = dl(), xa = fl();
Dr.version;
Dr.renderToString;
Dr.renderToStaticMarkup;
Dr.renderToNodeStream;
Dr.renderToStaticNodeStream;
xa.renderToReadableStream;
const pl = "staticMarkup";
function Bn() {
  const t = da().indexOf(pl) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const Je = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Bn(), { onClick: o, ...s } = r.props;
  if (n)
    return Fe.cloneElement(r, {
      ...s,
      onClick: (p) => (ba(e), o ? o(p) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const g = {
    [`data-ga${d}`]: e.text,
    [`data-ga${d}-name`]: e.name,
    [`data-ga${d}-event`]: e.event,
    [`data-ga${d}-action`]: e.action,
    [`data-ga${d}-type`]: e.type,
    [`data-ga${d}-region`]: e.region,
    [`data-ga${d}-section`]: e.section,
    [`data-ga${d}-component`]: e.component
  };
  return Fe.cloneElement(r, {
    ...s,
    onClick: o,
    ...g
  });
}, wa = ({ id: e, item: t, openCard: r, onClick: n, gaData: o }) => {
  var g, p, h, x, w, O;
  const s = e === r, d = s ? "open" : "close";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (g = t.content) == null ? void 0 : g.icon
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ f.jsx("h4", { children: /* @__PURE__ */ f.jsx(
          Je,
          {
            gaData: { ...o, action: d, text: t.content.header },
            children: /* @__PURE__ */ f.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: be({ collapsed: !s }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": s,
                "aria-controls": `card-body-${e}`,
                onClick: (I) => n(I, e),
                children: [
                  (p = t.content) != null && p.icon ? /* @__PURE__ */ f.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ f.jsx(
                      "i",
                      {
                        className: `${(h = t.content.icon) == null ? void 0 : h[0]} fa-${(x = t.content.icon) == null ? void 0 : x[1]} me-2`
                      }
                    ),
                    t.content.header
                  ] }) : (w = t.content) == null ? void 0 : w.header,
                  /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-up" })
                ]
              }
            )
          }
        ) }) }),
        ((O = t.content) == null ? void 0 : O.body) && /* @__PURE__ */ f.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: be("collapse", { show: s }),
            children: /* @__PURE__ */ f.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: St(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
wa.propTypes = {
  id: l.number,
  item: ma,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const hl = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, Sa = ({ cards: e, openedCard: t }) => {
  const [r, n] = Ge(t), o = (s, d) => {
    s.preventDefault(), n(r !== d ? d : null);
  };
  return /* @__PURE__ */ f.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (s, d) => s.content.body && s.content.header && /* @__PURE__ */ f.jsx(
      wa,
      {
        id: d + 1,
        item: s,
        openCard: r,
        onClick: o,
        gaData: hl
      },
      d + 1
    )
  ) });
};
Sa.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(ma).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const ml = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, lr = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: o,
  color: s,
  disabled: d,
  element: g,
  href: p,
  icon: h,
  innerRef: x,
  onClick: w,
  size: O,
  classes: I,
  target: R,
  ...S
}) => {
  const N = be("btn", {
    [`btn-${s}`]: !0,
    "btn-md": O === "small",
    "btn-sm": O === "xsmall",
    "btn-block": o,
    disabled: d
  });
  let M = g;
  return p && g === "button" && (M = "a"), /* @__PURE__ */ f.jsx(
    Je,
    {
      gaData: {
        ...ml,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ f.jsxs(
        M,
        {
          type: M === "button" && w ? "button" : void 0,
          ...S,
          className: be(I) || N,
          href: p,
          ref: x,
          onClick: w,
          "aria-label": n,
          target: M === "a" ? R : null,
          children: [
            h && /* @__PURE__ */ f.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
lr.propTypes = {
  /**
   * Button label
   */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: $i,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Render button as a block-button?
  */
  block: l.bool,
  /**
    Button background color
  */
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
    Button size
  */
  size: l.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: l.arrayOf(l.string),
  /**
   Link target type
   */
  target: l.oneOf(["_blank", "_self", "_top", "_parent"])
};
lr.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  block: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "default",
  classes: void 0,
  target: "_self"
};
var ka = { exports: {} }, Oe = {};
var Io;
function gl() {
  if (Io) return Oe;
  Io = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), d = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), I = Symbol.for("react.client.reference");
  function R(S) {
    if (typeof S == "object" && S !== null) {
      var N = S.$$typeof;
      switch (N) {
        case e:
          switch (S = S.type, S) {
            case r:
            case o:
            case n:
            case p:
            case h:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case d:
                case g:
                case w:
                case x:
                  return S;
                case s:
                  return S;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Oe.ContextConsumer = s, Oe.ContextProvider = d, Oe.Element = e, Oe.ForwardRef = g, Oe.Fragment = r, Oe.Lazy = w, Oe.Memo = x, Oe.Portal = t, Oe.Profiler = o, Oe.StrictMode = n, Oe.Suspense = p, Oe.SuspenseList = h, Oe.isContextConsumer = function(S) {
    return R(S) === s;
  }, Oe.isContextProvider = function(S) {
    return R(S) === d;
  }, Oe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Oe.isForwardRef = function(S) {
    return R(S) === g;
  }, Oe.isFragment = function(S) {
    return R(S) === r;
  }, Oe.isLazy = function(S) {
    return R(S) === w;
  }, Oe.isMemo = function(S) {
    return R(S) === x;
  }, Oe.isPortal = function(S) {
    return R(S) === t;
  }, Oe.isProfiler = function(S) {
    return R(S) === o;
  }, Oe.isStrictMode = function(S) {
    return R(S) === n;
  }, Oe.isSuspense = function(S) {
    return R(S) === p;
  }, Oe.isSuspenseList = function(S) {
    return R(S) === h;
  }, Oe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === o || S === n || S === p || S === h || S === O || typeof S == "object" && S !== null && (S.$$typeof === w || S.$$typeof === x || S.$$typeof === d || S.$$typeof === s || S.$$typeof === g || S.$$typeof === I || S.getModuleId !== void 0);
  }, Oe.typeOf = R, Oe;
}
ka.exports = gl();
var Ta = ka.exports;
function vl(e) {
  function t(Y, $, q, G, A) {
    for (var K = 0, B = 0, fe = 0, oe = 0, ie, ee, pe = 0, ye = 0, se, xe = se = ie = 0, he = 0, Re = 0, Ve = 0, Ee = 0, lt = q.length, qe = lt - 1, we, Q = "", Se = "", ut = "", it = "", $e; he < lt; ) {
      if (ee = q.charCodeAt(he), he === qe && B + oe + fe + K !== 0 && (B !== 0 && (ee = B === 47 ? 10 : 47), oe = fe = K = 0, lt++, qe++), B + oe + fe + K === 0) {
        if (he === qe && (0 < Re && (Q = Q.replace(O, "")), 0 < Q.trim().length)) {
          switch (ee) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Q += q.charAt(he);
          }
          ee = 59;
        }
        switch (ee) {
          case 123:
            for (Q = Q.trim(), ie = Q.charCodeAt(0), se = 1, Ee = ++he; he < lt; ) {
              switch (ee = q.charCodeAt(he)) {
                case 123:
                  se++;
                  break;
                case 125:
                  se--;
                  break;
                case 47:
                  switch (ee = q.charCodeAt(he + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (xe = he + 1; xe < qe; ++xe)
                          switch (q.charCodeAt(xe)) {
                            case 47:
                              if (ee === 42 && q.charCodeAt(xe - 1) === 42 && he + 2 !== xe) {
                                he = xe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (ee === 47) {
                                he = xe + 1;
                                break e;
                              }
                          }
                        he = xe;
                      }
                  }
                  break;
                case 91:
                  ee++;
                case 40:
                  ee++;
                case 34:
                case 39:
                  for (; he++ < qe && q.charCodeAt(he) !== ee; )
                    ;
              }
              if (se === 0) break;
              he++;
            }
            switch (se = q.substring(Ee, he), ie === 0 && (ie = (Q = Q.replace(w, "").trim()).charCodeAt(0)), ie) {
              case 64:
                switch (0 < Re && (Q = Q.replace(O, "")), ee = Q.charCodeAt(1), ee) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Re = $;
                    break;
                  default:
                    Re = ft;
                }
                if (se = t($, Re, se, ee, A + 1), Ee = se.length, 0 < He && (Re = r(ft, Q, Ve), $e = g(3, se, Re, $, Ce, ge, Ee, ee, A, G), Q = Re.join(""), $e !== void 0 && (Ee = (se = $e.trim()).length) === 0 && (ee = 0, se = "")), 0 < Ee) switch (ee) {
                  case 115:
                    Q = Q.replace(Z, d);
                  case 100:
                  case 109:
                  case 45:
                    se = Q + "{" + se + "}";
                    break;
                  case 107:
                    Q = Q.replace(z, "$1 $2"), se = Q + "{" + se + "}", se = Me === 1 || Me === 2 && s("@" + se, 3) ? "@-webkit-" + se + "@" + se : "@" + se;
                    break;
                  default:
                    se = Q + se, G === 112 && (se = (Se += se, ""));
                }
                else se = "";
                break;
              default:
                se = t($, r($, Q, Ve), se, G, A + 1);
            }
            ut += se, se = Ve = Re = xe = ie = 0, Q = "", ee = q.charCodeAt(++he);
            break;
          case 125:
          case 59:
            if (Q = (0 < Re ? Q.replace(O, "") : Q).trim(), 1 < (Ee = Q.length)) switch (xe === 0 && (ie = Q.charCodeAt(0), ie === 45 || 96 < ie && 123 > ie) && (Ee = (Q = Q.replace(" ", ":")).length), 0 < He && ($e = g(1, Q, $, Y, Ce, ge, Se.length, G, A, G)) !== void 0 && (Ee = (Q = $e.trim()).length) === 0 && (Q = "\0\0"), ie = Q.charCodeAt(0), ee = Q.charCodeAt(1), ie) {
              case 0:
                break;
              case 64:
                if (ee === 105 || ee === 99) {
                  it += Q + q.charAt(he);
                  break;
                }
              default:
                Q.charCodeAt(Ee - 1) !== 58 && (Se += o(Q, ie, ee, Q.charCodeAt(2)));
            }
            Ve = Re = xe = ie = 0, Q = "", ee = q.charCodeAt(++he);
        }
      }
      switch (ee) {
        case 13:
        case 10:
          B === 47 ? B = 0 : 1 + ie === 0 && G !== 107 && 0 < Q.length && (Re = 1, Q += "\0"), 0 < He * st && g(0, Q, $, Y, Ce, ge, Se.length, G, A, G), ge = 1, Ce++;
          break;
        case 59:
        case 125:
          if (B + oe + fe + K === 0) {
            ge++;
            break;
          }
        default:
          switch (ge++, we = q.charAt(he), ee) {
            case 9:
            case 32:
              if (oe + K + B === 0) switch (pe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  ee !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              oe + B + K === 0 && (Re = Ve = 1, we = "\f" + we);
              break;
            case 108:
              if (oe + B + K + Ue === 0 && 0 < xe) switch (he - xe) {
                case 2:
                  pe === 112 && q.charCodeAt(he - 3) === 58 && (Ue = pe);
                case 8:
                  ye === 111 && (Ue = ye);
              }
              break;
            case 58:
              oe + B + K === 0 && (xe = he);
              break;
            case 44:
              B + fe + oe + K === 0 && (Re = 1, we += "\r");
              break;
            case 34:
            case 39:
              B === 0 && (oe = oe === ee ? 0 : oe === 0 ? ee : oe);
              break;
            case 91:
              oe + B + fe === 0 && K++;
              break;
            case 93:
              oe + B + fe === 0 && K--;
              break;
            case 41:
              oe + B + K === 0 && fe--;
              break;
            case 40:
              if (oe + B + K === 0) {
                if (ie === 0) switch (2 * pe + 3 * ye) {
                  case 533:
                    break;
                  default:
                    ie = 1;
                }
                fe++;
              }
              break;
            case 64:
              B + fe + oe + K + xe + se === 0 && (se = 1);
              break;
            case 42:
            case 47:
              if (!(0 < oe + K + fe)) switch (B) {
                case 0:
                  switch (2 * ee + 3 * q.charCodeAt(he + 1)) {
                    case 235:
                      B = 47;
                      break;
                    case 220:
                      Ee = he, B = 42;
                  }
                  break;
                case 42:
                  ee === 47 && pe === 42 && Ee + 2 !== he && (q.charCodeAt(Ee + 2) === 33 && (Se += q.substring(Ee, he + 1)), we = "", B = 0);
              }
          }
          B === 0 && (Q += we);
      }
      ye = pe, pe = ee, he++;
    }
    if (Ee = Se.length, 0 < Ee) {
      if (Re = $, 0 < He && ($e = g(2, Se, Re, Y, Ce, ge, Ee, G, A, G), $e !== void 0 && (Se = $e).length === 0)) return it + Se + ut;
      if (Se = Re.join(",") + "{" + Se + "}", Me * Ue !== 0) {
        switch (Me !== 2 || s(Se, 2) || (Ue = 0), Ue) {
          case 111:
            Se = Se.replace(U, ":-moz-$1") + Se;
            break;
          case 112:
            Se = Se.replace(V, "::-webkit-input-$1") + Se.replace(V, "::-moz-$1") + Se.replace(V, ":-ms-input-$1") + Se;
        }
        Ue = 0;
      }
    }
    return it + Se + ut;
  }
  function r(Y, $, q) {
    var G = $.trim().split(N);
    $ = G;
    var A = G.length, K = Y.length;
    switch (K) {
      case 0:
      case 1:
        var B = 0;
        for (Y = K === 0 ? "" : Y[0] + " "; B < A; ++B)
          $[B] = n(Y, $[B], q).trim();
        break;
      default:
        var fe = B = 0;
        for ($ = []; B < A; ++B)
          for (var oe = 0; oe < K; ++oe)
            $[fe++] = n(Y[oe] + " ", G[B], q).trim();
    }
    return $;
  }
  function n(Y, $, q) {
    var G = $.charCodeAt(0);
    switch (33 > G && (G = ($ = $.trim()).charCodeAt(0)), G) {
      case 38:
        return $.replace(M, "$1" + Y.trim());
      case 58:
        return Y.trim() + $.replace(M, "$1" + Y.trim());
      default:
        if (0 < 1 * q && 0 < $.indexOf("\f")) return $.replace(M, (Y.charCodeAt(0) === 58 ? "" : "$1") + Y.trim());
    }
    return Y + $;
  }
  function o(Y, $, q, G) {
    var A = Y + ";", K = 2 * $ + 3 * q + 4 * G;
    if (K === 944) {
      Y = A.indexOf(":", 9) + 1;
      var B = A.substring(Y, A.length - 1).trim();
      return B = A.substring(0, Y).trim() + B + ";", Me === 1 || Me === 2 && s(B, 1) ? "-webkit-" + B + B : B;
    }
    if (Me === 0 || Me === 2 && !s(A, 1)) return A;
    switch (K) {
      case 1015:
        return A.charCodeAt(10) === 97 ? "-webkit-" + A + A : A;
      case 951:
        return A.charCodeAt(3) === 116 ? "-webkit-" + A + A : A;
      case 963:
        return A.charCodeAt(5) === 110 ? "-webkit-" + A + A : A;
      case 1009:
        if (A.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + A + A;
      case 978:
        return "-webkit-" + A + "-moz-" + A + A;
      case 1019:
      case 983:
        return "-webkit-" + A + "-moz-" + A + "-ms-" + A + A;
      case 883:
        if (A.charCodeAt(8) === 45) return "-webkit-" + A + A;
        if (0 < A.indexOf("image-set(", 11)) return A.replace(Qe, "$1-webkit-$2") + A;
        break;
      case 932:
        if (A.charCodeAt(4) === 45) switch (A.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + A.replace("-grow", "") + "-webkit-" + A + "-ms-" + A.replace("grow", "positive") + A;
          case 115:
            return "-webkit-" + A + "-ms-" + A.replace("shrink", "negative") + A;
          case 98:
            return "-webkit-" + A + "-ms-" + A.replace("basis", "preferred-size") + A;
        }
        return "-webkit-" + A + "-ms-" + A + A;
      case 964:
        return "-webkit-" + A + "-ms-flex-" + A + A;
      case 1023:
        if (A.charCodeAt(8) !== 99) break;
        return B = A.substring(A.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + B + "-webkit-" + A + "-ms-flex-pack" + B + A;
      case 1005:
        return R.test(A) ? A.replace(I, ":-webkit-") + A.replace(I, ":-moz-") + A : A;
      case 1e3:
        switch (B = A.substring(13).trim(), $ = B.indexOf("-") + 1, B.charCodeAt(0) + B.charCodeAt($)) {
          case 226:
            B = A.replace(L, "tb");
            break;
          case 232:
            B = A.replace(L, "tb-rl");
            break;
          case 220:
            B = A.replace(L, "lr");
            break;
          default:
            return A;
        }
        return "-webkit-" + A + "-ms-" + B + A;
      case 1017:
        if (A.indexOf("sticky", 9) === -1) break;
      case 975:
        switch ($ = (A = Y).length - 10, B = (A.charCodeAt($) === 33 ? A.substring(0, $) : A).substring(Y.indexOf(":", 7) + 1).trim(), K = B.charCodeAt(0) + (B.charCodeAt(7) | 0)) {
          case 203:
            if (111 > B.charCodeAt(8)) break;
          case 115:
            A = A.replace(B, "-webkit-" + B) + ";" + A;
            break;
          case 207:
          case 102:
            A = A.replace(B, "-webkit-" + (102 < K ? "inline-" : "") + "box") + ";" + A.replace(B, "-webkit-" + B) + ";" + A.replace(B, "-ms-" + B + "box") + ";" + A;
        }
        return A + ";";
      case 938:
        if (A.charCodeAt(5) === 45) switch (A.charCodeAt(6)) {
          case 105:
            return B = A.replace("-items", ""), "-webkit-" + A + "-webkit-box-" + B + "-ms-flex-" + B + A;
          case 115:
            return "-webkit-" + A + "-ms-flex-item-" + A.replace(J, "") + A;
          default:
            return "-webkit-" + A + "-ms-flex-line-pack" + A.replace("align-content", "").replace(J, "") + A;
        }
        break;
      case 973:
      case 989:
        if (A.charCodeAt(3) !== 45 || A.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Be.test(Y) === !0) return (B = Y.substring(Y.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(Y.replace("stretch", "fill-available"), $, q, G).replace(":fill-available", ":stretch") : A.replace(B, "-webkit-" + B) + A.replace(B, "-moz-" + B.replace("fill-", "")) + A;
        break;
      case 962:
        if (A = "-webkit-" + A + (A.charCodeAt(5) === 102 ? "-ms-" + A : "") + A, q + G === 211 && A.charCodeAt(13) === 105 && 0 < A.indexOf("transform", 10)) return A.substring(0, A.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + A;
    }
    return A;
  }
  function s(Y, $) {
    var q = Y.indexOf($ === 1 ? ":" : "{"), G = Y.substring(0, $ !== 3 ? q : 10);
    return q = Y.substring(q + 1, Y.length - 1), We($ !== 2 ? G : G.replace(ve, "$1"), q, $);
  }
  function d(Y, $) {
    var q = o($, $.charCodeAt(0), $.charCodeAt(1), $.charCodeAt(2));
    return q !== $ + ";" ? q.replace(de, " or ($1)").substring(4) : "(" + $ + ")";
  }
  function g(Y, $, q, G, A, K, B, fe, oe, ie) {
    for (var ee = 0, pe = $, ye; ee < He; ++ee)
      switch (ye = Xe[ee].call(x, Y, pe, q, G, A, K, B, fe, oe, ie)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          pe = ye;
      }
    if (pe !== $) return pe;
  }
  function p(Y) {
    switch (Y) {
      case void 0:
      case null:
        He = Xe.length = 0;
        break;
      default:
        if (typeof Y == "function") Xe[He++] = Y;
        else if (typeof Y == "object") for (var $ = 0, q = Y.length; $ < q; ++$)
          p(Y[$]);
        else st = !!Y | 0;
    }
    return p;
  }
  function h(Y) {
    return Y = Y.prefix, Y !== void 0 && (We = null, Y ? typeof Y != "function" ? Me = 1 : (Me = 2, We = Y) : Me = 0), h;
  }
  function x(Y, $) {
    var q = Y;
    if (33 > q.charCodeAt(0) && (q = q.trim()), nt = q, q = [nt], 0 < He) {
      var G = g(-1, $, q, q, Ce, ge, 0, 0, 0, 0);
      G !== void 0 && typeof G == "string" && ($ = G);
    }
    var A = t(ft, q, $, 0, 0);
    return 0 < He && (G = g(-2, A, q, q, Ce, ge, A.length, 0, 0, 0), G !== void 0 && (A = G)), nt = "", Ue = 0, ge = Ce = 1, A;
  }
  var w = /^\0+/g, O = /[\0\r\f]/g, I = /: */g, R = /zoo|gra/, S = /([,: ])(transform)/g, N = /,\r+?/g, M = /([\t\r\n ])*\f?&/g, z = /@(k\w+)\s*(\S*)\s*/, V = /::(place)/g, U = /:(read-only)/g, L = /[svh]\w+-[tblr]{2}/, Z = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, J = /-self|flex-/g, ve = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Be = /stretch|:\s*\w+\-(?:conte|avail)/, Qe = /([^-])(image-set\()/, ge = 1, Ce = 1, Ue = 0, Me = 1, ft = [], Xe = [], He = 0, We = null, st = 0, nt = "";
  return x.use = p, x.set = h, e !== void 0 && h(e), x;
}
var yl = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function bl(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var xl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lo = /* @__PURE__ */ bl(
  function(e) {
    return xl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _a = { exports: {} }, _e = {};
var Mo;
function wl() {
  if (Mo) return _e;
  Mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, g = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, x = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, I = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, z = e ? Symbol.for("react.scope") : 60119;
  function V(L) {
    if (typeof L == "object" && L !== null) {
      var Z = L.$$typeof;
      switch (Z) {
        case t:
          switch (L = L.type, L) {
            case p:
            case h:
            case n:
            case s:
            case o:
            case w:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case g:
                case x:
                case R:
                case I:
                case d:
                  return L;
                default:
                  return Z;
              }
          }
        case r:
          return Z;
      }
    }
  }
  function U(L) {
    return V(L) === h;
  }
  return _e.AsyncMode = p, _e.ConcurrentMode = h, _e.ContextConsumer = g, _e.ContextProvider = d, _e.Element = t, _e.ForwardRef = x, _e.Fragment = n, _e.Lazy = R, _e.Memo = I, _e.Portal = r, _e.Profiler = s, _e.StrictMode = o, _e.Suspense = w, _e.isAsyncMode = function(L) {
    return U(L) || V(L) === p;
  }, _e.isConcurrentMode = U, _e.isContextConsumer = function(L) {
    return V(L) === g;
  }, _e.isContextProvider = function(L) {
    return V(L) === d;
  }, _e.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === t;
  }, _e.isForwardRef = function(L) {
    return V(L) === x;
  }, _e.isFragment = function(L) {
    return V(L) === n;
  }, _e.isLazy = function(L) {
    return V(L) === R;
  }, _e.isMemo = function(L) {
    return V(L) === I;
  }, _e.isPortal = function(L) {
    return V(L) === r;
  }, _e.isProfiler = function(L) {
    return V(L) === s;
  }, _e.isStrictMode = function(L) {
    return V(L) === o;
  }, _e.isSuspense = function(L) {
    return V(L) === w;
  }, _e.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === n || L === h || L === s || L === o || L === w || L === O || typeof L == "object" && L !== null && (L.$$typeof === R || L.$$typeof === I || L.$$typeof === d || L.$$typeof === g || L.$$typeof === x || L.$$typeof === N || L.$$typeof === M || L.$$typeof === z || L.$$typeof === S);
  }, _e.typeOf = V, _e;
}
_a.exports = wl();
var Sl = _a.exports, Bi = Sl, kl = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Tl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, _l = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ea = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, zi = {};
zi[Bi.ForwardRef] = _l;
zi[Bi.Memo] = Ea;
function Do(e) {
  return Bi.isMemo(e) ? Ea : zi[e.$$typeof] || kl;
}
var El = Object.defineProperty, Cl = Object.getOwnPropertyNames, Fo = Object.getOwnPropertySymbols, Rl = Object.getOwnPropertyDescriptor, Ol = Object.getPrototypeOf, $o = Object.prototype;
function Ca(e, t, r) {
  if (typeof t != "string") {
    if ($o) {
      var n = Ol(t);
      n && n !== $o && Ca(e, n, r);
    }
    var o = Cl(t);
    Fo && (o = o.concat(Fo(t)));
    for (var s = Do(e), d = Do(t), g = 0; g < o.length; ++g) {
      var p = o[g];
      if (!Tl[p] && !(r && r[p]) && !(d && d[p]) && !(s && s[p])) {
        var h = Rl(t, p);
        try {
          El(e, p, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var Al = Ca;
const jl = /* @__PURE__ */ Fi(Al);
var rt = { env: { NODE_ENV: "production" } };
function Zt() {
  return (Zt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Bo = function(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, xi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ta.typeOf(e);
}, In = Object.freeze([]), ur = Object.freeze({});
function Jr(e) {
  return typeof e == "function";
}
function zo(e) {
  return e.displayName || e.name || "Component";
}
function Hi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Nr = typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_ATTR || rt.env.SC_ATTR) || "data-styled", Wi = typeof window < "u" && "HTMLElement" in window, Nl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && rt.env.REACT_APP_SC_DISABLE_SPEEDY : rt.env.SC_DISABLE_SPEEDY !== void 0 && rt.env.SC_DISABLE_SPEEDY !== "" ? rt.env.SC_DISABLE_SPEEDY !== "false" && rt.env.SC_DISABLE_SPEEDY : rt.env.NODE_ENV !== "production"));
function Qr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Pl = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, o = 0; o < r; o++) n += this.groupSizes[o];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; r >= d; ) (d <<= 1) < 0 && Qr(16, "" + r);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var g = s; g < d; g++) this.groupSizes[g] = 0;
    }
    for (var p = this.indexOfGroup(r + 1), h = 0, x = n.length; h < x; h++) this.tag.insertRule(p, n[h]) && (this.groupSizes[r]++, p++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], o = this.indexOfGroup(r), s = o + n;
      this.groupSizes[r] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var o = this.groupSizes[r], s = this.indexOfGroup(r), d = s + o, g = s; g < d; g++) n += this.tag.getRule(g) + `/*!sc*/
`;
    return n;
  }, e;
}(), Cn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Kr = 1, xn = function(e) {
  if (Cn.has(e)) return Cn.get(e);
  for (; Ln.has(Kr); ) Kr++;
  var t = Kr++;
  return Cn.set(e, t), Ln.set(t, e), t;
}, Il = function(e) {
  return Ln.get(e);
}, Ll = function(e, t) {
  t >= Kr && (Kr = t + 1), Cn.set(e, t), Ln.set(t, e);
}, Ml = "style[" + Nr + '][data-styled-version="5.3.11"]', Dl = new RegExp("^" + Nr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Fl = function(e, t, r) {
  for (var n, o = r.split(","), s = 0, d = o.length; s < d; s++) (n = o[s]) && e.registerName(t, n);
}, $l = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], o = 0, s = r.length; o < s; o++) {
    var d = r[o].trim();
    if (d) {
      var g = d.match(Dl);
      if (g) {
        var p = 0 | parseInt(g[1], 10), h = g[2];
        p !== 0 && (Ll(h, p), Fl(e, h, g[3]), e.getTag().insertRules(p, n)), n.length = 0;
      } else n.push(d);
    }
  }
}, Bl = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ra = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(g) {
    for (var p = g.childNodes, h = p.length; h >= 0; h--) {
      var x = p[h];
      if (x && x.nodeType === 1 && x.hasAttribute(Nr)) return x;
    }
  }(r), s = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Nr, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var d = Bl();
  return d && n.setAttribute("nonce", d), r.insertBefore(n, s), n;
}, zl = function() {
  function e(r) {
    var n = this.element = Ra(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var s = document.styleSheets, d = 0, g = s.length; d < g; d++) {
        var p = s[d];
        if (p.ownerNode === o) return p;
      }
      Qr(17);
    }(n), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    try {
      return this.sheet.insertRule(n, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var n = this.sheet.cssRules[r];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), Hl = function() {
  function e(r) {
    var n = this.element = Ra(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(n), s = this.nodes[r];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Wl = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    return r <= this.length && (this.rules.splice(r, 0, n), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ho = Wi, Vl = { isServer: !Wi, useCSSOMInjection: !Nl }, Oa = function() {
  function e(r, n, o) {
    r === void 0 && (r = ur), n === void 0 && (n = {}), this.options = Zt({}, Vl, {}, r), this.gs = n, this.names = new Map(o), this.server = !!r.isServer, !this.server && Wi && Ho && (Ho = !1, function(s) {
      for (var d = document.querySelectorAll(Ml), g = 0, p = d.length; g < p; g++) {
        var h = d[g];
        h && h.getAttribute(Nr) !== "active" && ($l(s, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return xn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Zt({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, s = n.useCSSOMInjection, d = n.target, r = o ? new Wl(d) : s ? new zl(d) : new Hl(d), new Pl(r)));
    var r, n, o, s, d;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (xn(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(r, o);
    }
  }, t.insertRules = function(r, n, o) {
    this.registerName(r, n), this.getTag().insertRules(xn(r), o);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(xn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), o = n.length, s = "", d = 0; d < o; d++) {
        var g = Il(d);
        if (g !== void 0) {
          var p = r.names.get(g), h = n.getGroup(d);
          if (p && h && p.size) {
            var x = Nr + ".g" + d + '[id="' + g + '"]', w = "";
            p !== void 0 && p.forEach(function(O) {
              O.length > 0 && (w += O + ",");
            }), s += "" + h + x + '{content:"' + w + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), Ul = /(a)(d)/gi, Wo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function wi(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Wo(t % 52) + r;
  return (Wo(t % 52) + r).replace(Ul, "$1-$2");
}
var jr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Aa = function(e) {
  return jr(5381, e);
};
function ql(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Jr(r) && !Hi(r)) return !1;
  }
  return !0;
}
var Yl = Aa("5.3.11"), Gl = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && ql(t), this.componentId = r, this.baseHash = jr(Yl, r), this.baseStyle = n, Oa.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(o, this.staticRulesId)) s.push(this.staticRulesId);
    else {
      var d = Pr(this.rules, t, r, n).join(""), g = wi(jr(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(o, g)) {
        var p = n(d, "." + g, void 0, o);
        r.insertRules(o, g, p);
      }
      s.push(g), this.staticRulesId = g;
    }
    else {
      for (var h = this.rules.length, x = jr(this.baseHash, n.hash), w = "", O = 0; O < h; O++) {
        var I = this.rules[O];
        if (typeof I == "string") w += I;
        else if (I) {
          var R = Pr(I, t, r, n), S = Array.isArray(R) ? R.join("") : R;
          x = jr(x, S + O), w += S;
        }
      }
      if (w) {
        var N = wi(x >>> 0);
        if (!r.hasNameForId(o, N)) {
          var M = n(w, "." + N, void 0, o);
          r.insertRules(o, N, M);
        }
        s.push(N);
      }
    }
    return s.join(" ");
  }, e;
}(), Xl = /^\s*\/\/.*$/gm, Kl = [":", "[", ".", "#"];
function Zl(e) {
  var t, r, n, o, s = ur, d = s.options, g = d === void 0 ? ur : d, p = s.plugins, h = p === void 0 ? In : p, x = new vl(g), w = [], O = /* @__PURE__ */ function(S) {
    function N(M) {
      if (M) try {
        S(M + "}");
      } catch {
      }
    }
    return function(M, z, V, U, L, Z, de, J, ve, Be) {
      switch (M) {
        case 1:
          if (ve === 0 && z.charCodeAt(0) === 64) return S(z + ";"), "";
          break;
        case 2:
          if (J === 0) return z + "/*|*/";
          break;
        case 3:
          switch (J) {
            case 102:
            case 112:
              return S(V[0] + z), "";
            default:
              return z + (Be === 0 ? "/*|*/" : "");
          }
        case -2:
          z.split("/*|*/}").forEach(N);
      }
    };
  }(function(S) {
    w.push(S);
  }), I = function(S, N, M) {
    return N === 0 && Kl.indexOf(M[r.length]) !== -1 || M.match(o) ? S : "." + t;
  };
  function R(S, N, M, z) {
    z === void 0 && (z = "&");
    var V = S.replace(Xl, ""), U = N && M ? M + " " + N + " { " + V + " }" : V;
    return t = z, r = N, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), x(M || !N ? "" : N, U);
  }
  return x.use([].concat(h, [function(S, N, M) {
    S === 2 && M.length && M[0].lastIndexOf(r) > 0 && (M[0] = M[0].replace(n, I));
  }, O, function(S) {
    if (S === -2) {
      var N = w;
      return w = [], N;
    }
  }])), R.hash = h.length ? h.reduce(function(S, N) {
    return N.name || Qr(15), jr(S, N.name);
  }, 5381).toString() : "", R;
}
var ja = Fe.createContext();
ja.Consumer;
var Na = Fe.createContext(), Jl = (Na.Consumer, new Oa()), Si = Zl();
function Ql() {
  return Di(ja) || Jl;
}
function eu() {
  return Di(Na) || Si;
}
var tu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Si);
      var d = n.name + s.hash;
      o.hasNameForId(n.id, d) || o.insertRules(n.id, d, s(n.rules, d, "@keyframes"));
    }, this.toString = function() {
      return Qr(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Si), this.name + t.hash;
  }, e;
}(), ru = /([A-Z])/, nu = /([A-Z])/g, iu = /^ms-/, ou = function(e) {
  return "-" + e.toLowerCase();
};
function Vo(e) {
  return ru.test(e) ? e.replace(nu, ou).replace(iu, "-ms-") : e;
}
var Uo = function(e) {
  return e == null || e === !1 || e === "";
};
function Pr(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var o, s = [], d = 0, g = e.length; d < g; d += 1) (o = Pr(e[d], t, r, n)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (Uo(e)) return "";
  if (Hi(e)) return "." + e.styledComponentId;
  if (Jr(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var p = e(t);
    return Pr(p, t, r, n);
  }
  var h;
  return e instanceof tu ? r ? (e.inject(r, n), e.getName(n)) : e : xi(e) ? function x(w, O) {
    var I, R, S = [];
    for (var N in w) w.hasOwnProperty(N) && !Uo(w[N]) && (Array.isArray(w[N]) && w[N].isCss || Jr(w[N]) ? S.push(Vo(N) + ":", w[N], ";") : xi(w[N]) ? S.push.apply(S, x(w[N], N)) : S.push(Vo(N) + ": " + (I = N, (R = w[N]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || I in yl || I.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return O ? [O + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var qo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function au(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Jr(e) || xi(e) ? qo(Pr(Bo(In, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : qo(Pr(Bo(e, r)));
}
var su = function(e, t, r) {
  return r === void 0 && (r = ur), e.theme !== r.theme && e.theme || t || r.theme;
}, lu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uu = /(^-|-$)/g;
function mi(e) {
  return e.replace(lu, "-").replace(uu, "");
}
var cu = function(e) {
  return wi(Aa(e) >>> 0);
};
function wn(e) {
  return typeof e == "string" && rt.env.NODE_ENV === "production";
}
var ki = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, du = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function fu(e, t, r) {
  var n = e[r];
  ki(t) && ki(n) ? Pa(n, t) : e[r] = t;
}
function Pa(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var o = 0, s = r; o < s.length; o++) {
    var d = s[o];
    if (ki(d)) for (var g in d) du(g) && fu(e, d[g], g);
  }
  return e;
}
var Ia = Fe.createContext();
Ia.Consumer;
var gi = {};
function La(e, t, r) {
  var n = Hi(e), o = !wn(e), s = t.attrs, d = s === void 0 ? In : s, g = t.componentId, p = g === void 0 ? function(z, V) {
    var U = typeof z != "string" ? "sc" : mi(z);
    gi[U] = (gi[U] || 0) + 1;
    var L = U + "-" + cu("5.3.11" + U + gi[U]);
    return V ? V + "-" + L : L;
  }(t.displayName, t.parentComponentId) : g, h = t.displayName, x = h === void 0 ? function(z) {
    return wn(z) ? "styled." + z : "Styled(" + zo(z) + ")";
  }(e) : h, w = t.displayName && t.componentId ? mi(t.displayName) + "-" + t.componentId : t.componentId || p, O = n && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, I = t.shouldForwardProp;
  n && e.shouldForwardProp && (I = t.shouldForwardProp ? function(z, V, U) {
    return e.shouldForwardProp(z, V, U) && t.shouldForwardProp(z, V, U);
  } : e.shouldForwardProp);
  var R, S = new Gl(r, w, n ? e.componentStyle : void 0), N = S.isStatic && d.length === 0, M = function(z, V) {
    return function(U, L, Z, de) {
      var J = U.attrs, ve = U.componentStyle, Be = U.defaultProps, Qe = U.foldedComponentIds, ge = U.shouldForwardProp, Ce = U.styledComponentId, Ue = U.target, Me = function(G, A, K) {
        G === void 0 && (G = ur);
        var B = Zt({}, A, { theme: G }), fe = {};
        return K.forEach(function(oe) {
          var ie, ee, pe, ye = oe;
          for (ie in Jr(ye) && (ye = ye(B)), ye) B[ie] = fe[ie] = ie === "className" ? (ee = fe[ie], pe = ye[ie], ee && pe ? ee + " " + pe : ee || pe) : ye[ie];
        }), [B, fe];
      }(su(L, Di(Ia), Be) || ur, L, J), ft = Me[0], Xe = Me[1], He = function(G, A, K, B) {
        var fe = Ql(), oe = eu(), ie = A ? G.generateAndInjectStyles(ur, fe, oe) : G.generateAndInjectStyles(K, fe, oe);
        return ie;
      }(ve, de, ft), We = Z, st = Xe.$as || L.$as || Xe.as || L.as || Ue, nt = wn(st), Y = Xe !== L ? Zt({}, L, {}, Xe) : L, $ = {};
      for (var q in Y) q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? $.as = Y[q] : (ge ? ge(q, Lo, st) : !nt || Lo(q)) && ($[q] = Y[q]));
      return L.style && Xe.style !== L.style && ($.style = Zt({}, L.style, {}, Xe.style)), $.className = Array.prototype.concat(Qe, Ce, He !== Ce ? He : null, L.className, Xe.className).filter(Boolean).join(" "), $.ref = We, bs(st, $);
    }(R, z, V, N);
  };
  return M.displayName = x, (R = Fe.forwardRef(M)).attrs = O, R.componentStyle = S, R.displayName = x, R.shouldForwardProp = I, R.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : In, R.styledComponentId = w, R.target = n ? e.target : e, R.withComponent = function(z) {
    var V = t.componentId, U = function(Z, de) {
      if (Z == null) return {};
      var J, ve, Be = {}, Qe = Object.keys(Z);
      for (ve = 0; ve < Qe.length; ve++) J = Qe[ve], de.indexOf(J) >= 0 || (Be[J] = Z[J]);
      return Be;
    }(t, ["componentId"]), L = V && V + "-" + (wn(z) ? z : mi(zo(z)));
    return La(z, Zt({}, U, { attrs: O, componentId: L }), r);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(z) {
    this._foldedDefaultProps = n ? Pa({}, e.defaultProps, z) : z;
  } }), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), o && jl(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var Pt = function(e) {
  return function t(r, n, o) {
    if (o === void 0 && (o = ur), !Ta.isValidElementType(n)) return Qr(1, String(n));
    var s = function() {
      return r(n, o, au.apply(void 0, arguments));
    };
    return s.withConfig = function(d) {
      return t(r, n, Zt({}, o, {}, d));
    }, s.attrs = function(d) {
      return t(r, n, Zt({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, s;
  }(La, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Pt[e] = Pt(e);
});
const pu = Pt.div`
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.with-header {
      top: ${({ requiresAltMenuSpacing: e }) => e ? "112px" : "142px"};
      @media (max-width: 992px) {
        top: 110px;
      }
    }
  }
  .mobile-menu-toggler {
    background-color: transparent;
    border: none;
    cursor: default;
    h4 {
      align-items: center;
    }
    i {
      transition: all 0.3s;
    }
  }
  .show-menu i {
    transform: rotate(-180deg);
  }
  .nav-link {
    border: none;
    background-color: #ffffff;
    i {
      width: 2rem !important;
      text-align: center !important;
    }
  }
`, Rn = "On This Page", hu = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Rn
}, Ma = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: r = !1
}) => {
  const n = Er(null), o = Ns("(max-width: 991px)"), [s, d] = Ge({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), g = o ? 110 : 142, p = () => {
    var U;
    const S = {}, N = window.scrollY, M = (U = document.getElementById(t)) == null ? void 0 : U.getBoundingClientRect().top, z = 103;
    M >= 0 && (S.sticky = !1, S.activeContainer = ""), N > n.current.getBoundingClientRect().top && (S.sticky = !0);
    const V = s.hasHeader ? g + z : z;
    e == null || e.forEach(({ targetIdName: L }) => {
      const Z = document.getElementById(L), de = (Z == null ? void 0 : Z.getBoundingClientRect().top) - V, J = (Z == null ? void 0 : Z.getBoundingClientRect().bottom) - V;
      de < 0 && J > 0 && (S.activeContainer = L);
    }), d((L) => ({
      ...L,
      ...S
    }));
  }, h = () => {
    ul(p, 150), cl(p, 150);
  }, x = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), w = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function O(S = null) {
    if (S === null) return s.containerClass;
    const N = Object.values(S.classList).filter(
      (M) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(M)
    );
    return N.length > 0 ? N.join(" ") : O(S.parentElement);
  }
  ot(() => {
    const S = document.getElementById(t) || null, N = {
      hasHeader: x(),
      hasAltMenuSpacing: w(),
      containerClass: O(S)
    };
    d((M) => ({
      ...M,
      ...N
    }));
  }, []), ot(() => (window == null || window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h)), [s.hasHeader]);
  const I = (S) => {
    var V, U;
    const N = window.scrollY - (s.hasHeader ? g + 100 : 100), M = o ? 410 : 90;
    let z = ((V = document.getElementById(S)) == null ? void 0 : V.getBoundingClientRect().top) + N;
    n.current.classList.contains("sticky") || (z -= M), r && ((U = ll(`#${S}`)) == null || U.focus()), window.scrollTo({ top: z, behavior: "smooth" });
  }, R = () => {
    d((S) => ({
      ...S,
      showMenu: !S.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ f.jsx(
    pu,
    {
      requiresAltMenuSpacing: s.hasAltMenuSpacing,
      ref: n,
      className: be(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: s.sticky,
          "with-header": s.hasHeader
        }
      ),
      style: s.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ f.jsxs("div", { className: `${s.containerClass} uds-anchor-menu-wrapper`, children: [
        o ? /* @__PURE__ */ f.jsx(
          Je,
          {
            gaData: {
              ...hu,
              action: s.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ f.jsx(
              "button",
              {
                className: be("mobile-menu-toggler", {
                  "show-menu": s.showMenu
                }),
                type: "button",
                onClick: R,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ f.jsxs("h4", { children: [
                  Rn,
                  ":",
                  /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ f.jsxs("h4", { children: [
          Rn,
          ":"
        ] }),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: be("card", "card-body", "collapse", {
              show: s.showMenu
            }),
            children: /* @__PURE__ */ f.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Rn,
                children: e == null ? void 0 : e.map((S) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ f.jsx(
                    lr,
                    {
                      "data-testid": `anchor-item-${S.targetIdName}`,
                      classes: be("nav-link", {
                        active: s.activeContainer === S.targetIdName
                      }).split(" "),
                      ariaLabel: S.text,
                      label: S.text,
                      icon: S.icon,
                      onClick: () => I(S.targetIdName)
                    },
                    S.targetIdName
                  )
                ))
              }
            )
          }
        )
      ] })
    }
  );
};
Ma.propTypes = {
  /**
   * Anchor menu items
   */
  items: l.arrayOf(
    l.shape({
      text: l.string.isRequired,
      targetIdName: l.string.isRequired,
      icon: l.arrayOf(l.string)
    })
  ).isRequired,
  /**
   * First next sibling element of the anchor menu
   */
  firstElementId: l.string.isRequired,
  /**
   * If true it focus the first focusable element into the section
   * If false it focus the next menu item into the nav bar
   */
  focusFirstFocusableElement: l.bool
};
var Ti = function() {
  return Ti = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ti.apply(this, arguments);
}, mu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function zn(e) {
  var t = function(r) {
    var n = r.bgStyle, o = r.borderRadius, s = r.iconFillColor, d = r.round, g = r.size, p = mu(r, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return Fe.createElement(
      "svg",
      Ti({ viewBox: "0 0 64 64", width: g, height: g }, p),
      d ? Fe.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: n }) : Fe.createElement("rect", { width: "64", height: "64", rx: o, ry: o, fill: e.color, style: n }),
      Fe.createElement("path", { d: e.path, fill: s })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var gu = zn({
  color: "#7f7f7f",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function Hn(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], o = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var vu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Xt = function() {
  return Xt = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Xt.apply(this, arguments);
}, yu = function(e, t, r, n) {
  function o(s) {
    return s instanceof r ? s : new r(function(d) {
      d(s);
    });
  }
  return new (r || (r = Promise))(function(s, d) {
    function g(x) {
      try {
        h(n.next(x));
      } catch (w) {
        d(w);
      }
    }
    function p(x) {
      try {
        h(n.throw(x));
      } catch (w) {
        d(w);
      }
    }
    function h(x) {
      x.done ? s(x.value) : o(x.value).then(g, p);
    }
    h((n = n.apply(e, t || [])).next());
  });
}, bu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, d;
  return d = { next: g(0), throw: g(1), return: g(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function g(h) {
    return function(x) {
      return p([h, x]);
    };
  }
  function p(h) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, o && (s = h[0] & 2 ? o.return : h[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, h[1])).done) return s;
      switch (o = 0, s && (h = [h[0] & 2, s.value]), h[0]) {
        case 0:
        case 1:
          s = h;
          break;
        case 4:
          return r.label++, { value: h[1], done: !1 };
        case 5:
          r.label++, o = h[1], h = [0];
          continue;
        case 7:
          h = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            r = 0;
            continue;
          }
          if (h[0] === 3 && (!s || h[1] > s[0] && h[1] < s[3])) {
            r.label = h[1];
            break;
          }
          if (h[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = h;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(h);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      h = t.call(e, r);
    } catch (x) {
      h = [6, x], o = 0;
    } finally {
      n = s = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}, Da = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}, xu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, wu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Su = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function ku(e, t, r) {
  var n = t.height, o = t.width, s = Da(t, ["height", "width"]), d = Xt({ height: n, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, s), g = window.open(e, "", Object.keys(d).map(function(h) {
    return "".concat(h, "=").concat(d[h]);
  }).join(", "));
  if (r)
    var p = window.setInterval(function() {
      try {
        (g === null || g.closed) && (window.clearInterval(p), r(g));
      } catch (h) {
        console.error(h);
      }
    }, 1e3);
  return g;
}
var Tu = (
  /** @class */
  function(e) {
    vu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var o = r.props, s = o.onShareWindowClose, d = o.windowHeight, g = d === void 0 ? 400 : d, p = o.windowPosition, h = p === void 0 ? "windowCenter" : p, x = o.windowWidth, w = x === void 0 ? 550 : x, O = Xt({ height: g, width: w }, h === "windowCenter" ? wu(w, g) : Su(w, g));
        ku(n, O, s);
      }, r.handleClick = function(n) {
        return yu(r, void 0, void 0, function() {
          var o, s, d, g, p, h, x, w, O, I;
          return bu(this, function(R) {
            switch (R.label) {
              case 0:
                return o = this.props, s = o.beforeOnClick, d = o.disabled, g = o.networkLink, p = o.onClick, h = o.url, x = o.openShareDialogOnClick, w = o.opts, O = g(h, w), d ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), s ? (I = s(), xu(I) ? [4, I] : [3, 2]) : [3, 2]);
              case 1:
                R.sent(), R.label = 2;
              case 2:
                return x && this.openShareDialog(O), p && p(n, O), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, r;
    }
    return t.prototype.render = function() {
      var r = this.props;
      r.beforeOnClick;
      var n = r.children, o = r.className, s = r.disabled, d = r.disabledStyle, g = r.forwardedRef;
      r.networkLink;
      var p = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var h = r.resetButtonStyle, x = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var w = Da(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), O = be("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!s,
        disabled: !!s
      }, o), I = Xt(Xt(h ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, x), s && d);
      return Fe.createElement("button", Xt({}, w, { "aria-label": w["aria-label"] || p, className: O, onClick: this.handleClick, ref: g, style: I }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(xs)
), Mn = function() {
  return Mn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Mn.apply(this, arguments);
};
function Wn(e, t, r, n) {
  function o(s, d) {
    var g = r(s), p = Mn({}, s), h = Object.keys(g);
    return h.forEach(function(x) {
      delete p[x];
    }), Fe.createElement(Tu, Mn({}, n, p, { forwardedRef: d, networkName: e, networkLink: t, opts: r(s) }));
  }
  return o.displayName = "ShareButton-".concat(e), fa(o);
}
function _u(e, t) {
  var r = t.subject, n = t.body, o = t.separator;
  return "mailto:" + Hn({ subject: r, body: n ? n + o + e : e });
}
var Eu = Wn("email", _u, function(e) {
  return {
    subject: e.subject,
    body: e.body,
    separator: e.separator || " "
  };
}, {
  openShareDialogOnClick: !1,
  onClick: function(e, t) {
    window.location.href = t;
  }
}), Yo = zn({
  color: "#3b5998",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), Cu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Ru = (
  /** @class */
  function(e) {
    Cu(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Zr(e, t) {
  if (!e)
    throw new Ru(t);
}
function Ou(e, t) {
  var r = t.quote, n = t.hashtag;
  return Zr(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Hn({
    u: e,
    quote: r,
    hashtag: n
  });
}
var Go = Wn("facebook", Ou, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Xo = zn({
  color: "#007fb1",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function Au(e, t) {
  var r = t.title, n = t.summary, o = t.source;
  return Zr(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Hn({ url: e, mini: "true", title: r, summary: n, source: o });
}
var Ko = Wn("linkedin", Au, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Zo = zn({
  color: "#00aced",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function ju(e, t) {
  var r = t.title, n = t.via, o = t.hashtags, s = o === void 0 ? [] : o, d = t.related, g = d === void 0 ? [] : d;
  return Zr(e, "twitter.url"), Zr(Array.isArray(s), "twitter.hashtags is not an array"), Zr(Array.isArray(g), "twitter.related is not an array"), "https://twitter.com/share" + Hn({
    url: e,
    text: r,
    via: n,
    hashtags: s.length > 0 ? s.join(",") : void 0,
    related: g.length > 0 ? g.join(",") : void 0
  });
}
var Jo = Wn("twitter", ju, function(e) {
  return {
    hashtags: e.hashtags,
    title: e.title,
    via: e.via,
    related: e.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
var Nu;
function Ei() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Nu;
  return t ? e.split(" ").map(function(r) {
    return t[r] || r;
  }).join(" ") : e;
}
var Pu = (typeof window > "u" ? "undefined" : _i(window)) === "object" && window.Element || function() {
};
function Iu(e, t, r) {
  if (!(e[t] instanceof Pu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Iu, l.shape({
  current: l.any
})]);
var Ci = l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]), Lu = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function Ri() {
  return Ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ri.apply(this, arguments);
}
function Mu(e, t) {
  if (e == null) return {};
  var r = Du(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      n = s[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Du(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Fu = {
  /** Aria label */
  "aria-label": l.string,
  /** Pass children so this component can wrap them */
  children: l.node,
  /** Add custom class */
  className: l.string,
  /** Change existing className with a new className */
  cssModule: l.object,
  /** Add custom class to list tag */
  listClassName: l.string,
  /** Set a custom element for list tag */
  listTag: Ci,
  /** Set a custom element for this component */
  tag: Ci
};
function Fa(e) {
  var t = e.className, r = e.listClassName, n = e.cssModule, o = e.children, s = e.tag, d = s === void 0 ? "nav" : s, g = e.listTag, p = g === void 0 ? "ol" : g, h = e["aria-label"], x = h === void 0 ? "breadcrumb" : h, w = Mu(e, Lu), O = Ei(be(t), n), I = Ei(be("breadcrumb", r), n);
  return /* @__PURE__ */ Fe.createElement(d, Ri({}, w, {
    className: O,
    "aria-label": x
  }), /* @__PURE__ */ Fe.createElement(p, {
    className: I
  }, o));
}
Fa.propTypes = Fu;
var $u = ["className", "cssModule", "active", "tag"];
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
function Bu(e, t) {
  if (e == null) return {};
  var r = zu(e, t), n, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      n = s[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zu(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var Hu = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: l.bool,
  /** Add custom class to the element */
  className: l.string,
  /** Change existing className with a new className */
  cssModule: l.object,
  /** Set a custom element for this component */
  tag: Ci
};
function Ai(e) {
  var t = e.className, r = e.cssModule, n = e.active, o = e.tag, s = o === void 0 ? "li" : o, d = Bu(e, $u), g = Ei(be(t, n ? "active" : !1, "breadcrumb-item"), r);
  return /* @__PURE__ */ Fe.createElement(s, Oi({}, d, {
    className: g,
    "aria-current": n ? "page" : void 0
  }));
}
Ai.propTypes = Hu;
const Wu = Pt.div`
  &.news-container h2 {
    font-size: 48px;
  }

  &.event-container h2 {
    font-size: 40px;
  }

  &.news-container img,
  &.event-container img {
    width: 100%;
    max-width: fit-content;
  }

  &.wrapper-container h4 {
    margin-top: 0;
  }

  &.wrapper-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 10%;
  }

  &.event-container.wrapper-container {
    max-width: 1500px;
  }

  &.news-container {
    background: #fff;
  }

  ol.breadcrumb {
    padding: 0;
    margin: 0;
  }

  ol.breadcrumb > li {
    margin-bottom: 0;
  }

  .article-social-media {
    margin-bottom: 24px;
  }

  .react-share__ShareButton {
    margin-right: 12px;
  }

  i.news-date {
    display: inline-block;
    margin-bottom: 24px;
  }

  .highlight-gold {
    box-shadow: -0.15em 0 0 #ffc627, 0.15em 0 0 #ffc627;
    background: #ffc627;
  }

  .author {
    display: inline-block;
    margin-top: 30px;
    margin-left: -7px;
    padding: 0 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .icon-bg {
    display: inline-block;
    position: relative;
    padding: 1px 3.5px;
    background-color: maroon;
    margin-right: 4px;
    border-radius: 4px;
    color: white;
    font-size: 0.65rem;
  }

  .uds-button {
    margin-top: 17px;
    padding: 0;
  }

  .author-title {
    max-width: 250px;
    margin-top: 10px;
    margin-bottom: 11px;
    font-size: 16px;
  }

  .author-contact {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  ol.breadcrumb a {
    text-decoration: none;
  }

  i.fa-calendar,
  i.fa-map-marker-alt {
    font-size: 1.17rem;
    margin-right: 8px;
  }

  .event-author {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
  }

  .event-author-title {
    margin-top: 4px;
  }

  .event-author-info {
    margin-top: 24px;
  }
`, Vu = Pt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Vi = ({
  type: e,
  articleUrl: t,
  publicationDate: r,
  title: n,
  body: o,
  authorEmail: s,
  authorName: d,
  authorPhone: g,
  authorTitle: p,
  breadcrumbs: h,
  calendarUrl: x,
  eventLocation: w,
  eventTime: O,
  headerImageUrl: I,
  registrationUrl: R,
  zoomUrl: S
}) => {
  const N = be("col", "col-12", {
    "col-lg-8": e === "event" && (R || S || x)
  }), M = () => R ? /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(lr, { color: "maroon", href: R, label: "Register" }) }) : /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(lr, { color: "maroon", href: S, label: "Attend on Zoom" }) }), z = () => /* @__PURE__ */ f.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ f.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ f.jsx("div", { className: "author highlight-gold", children: d }),
    p && /* @__PURE__ */ f.jsx("div", { className: "author-title", children: p }),
    s && /* @__PURE__ */ f.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ f.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ f.jsx("a", { href: `mailto: ${s}`, children: s })
    ] }),
    g && /* @__PURE__ */ f.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ f.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ f.jsx("a", { href: `tel: ${g}`, children: g })
    ] })
  ] }) }), V = () => /* @__PURE__ */ f.jsxs(
    Vu,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ f.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ f.jsx("div", { className: "event-author", children: d }),
          /* @__PURE__ */ f.jsx("div", { className: "event-author-title", children: p }),
          (s || g) && /* @__PURE__ */ f.jsxs("div", { className: "event-author-info", children: [
            s && /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("a", { href: `mailto: ${s}`, children: s }) }),
            g && /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("a", { href: `tel: ${g}`, children: g }) })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ f.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ f.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ f.jsx(Go, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
              Yo,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Jo, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
              Zo,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Eu, { url: s, quote: n, children: /* @__PURE__ */ f.jsx(
              gu,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Ko, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
              Xo,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) })
          ] })
        ] })
      ]
    }
  ), U = () => /* @__PURE__ */ f.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ f.jsxs("h4", { children: [
      /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: St(w) }),
    R && S && /* @__PURE__ */ f.jsx("a", { href: S, children: "Attend on Zoom" })
  ] }), L = (Z) => /* @__PURE__ */ f.jsx(
    Ai,
    {
      active: Z.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ f.jsx(Ai, { tag: "a", href: Z.url, children: Z.title })
    },
    Z.title
  );
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    I && e !== "event" && /* @__PURE__ */ f.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          backgroundImage: `linear-gradient(180deg, #19191900 0%, #191919c9 100%), url(${I})`
        }
      }
    ),
    /* @__PURE__ */ f.jsxs(Wu, { className: `container ${e}-container wrapper-container`, children: [
      h && /* @__PURE__ */ f.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ f.jsx("div", { className: "col col-12", children: /* @__PURE__ */ f.jsx(Fa, { listClassName: "breadcrumb", children: h.map((Z) => L(Z)) }) }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ f.jsx("div", { className: N, children: /* @__PURE__ */ f.jsx("h2", { "data-testid": "title", children: n }) }),
        e === "event" && /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (R || S) && M(),
          x && /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(
            lr,
            {
              color: "gray",
              size: "small",
              href: x,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ f.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        O && /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ f.jsxs("h4", { children: [
            /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              dangerouslySetInnerHTML: St(O)
            }
          )
        ] }),
        (R && S || w) && U()
      ] }) : /* @__PURE__ */ f.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ f.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ f.jsx(Go, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
            Yo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ f.jsx(Jo, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
            Zo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ f.jsx(Ko, { url: t, quote: n, children: /* @__PURE__ */ f.jsx(
            Xo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        r && /* @__PURE__ */ f.jsx("i", { className: "news-date", children: r })
      ] }) }),
      /* @__PURE__ */ f.jsx("div", { className: "row", children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: St(o),
          "data-testid": "body"
        }
      ) }),
      e === "news" && z(),
      e === "event" && V()
    ] })
  ] });
};
Vi.propTypes = {
  /**
   * Type of article
   */
  type: l.oneOf(["event", "news"]),
  /**
   * This is the relative or absolute url to the full-page article
   */
  articleUrl: l.string.isRequired,
  /**
   * Date for the article
   */
  publicationDate: l.string.isRequired,
  /**
   * Title
   */
  title: l.string.isRequired,
  /**
   * Body content for the article
   */
  body: l.string.isRequired,
  /**
   * Article author email
   */
  authorEmail: l.string,
  /**
   * Article author full name
   */
  authorName: l.string.isRequired,
  /**
   * Article author phone number
   */
  authorPhone: l.string,
  /**
   * Article author title
   */
  authorTitle: l.string,
  /**
   * Breadcrumbs array
   */
  breadcrumbs: l.arrayOf(
    l.shape({
      title: l.string,
      url: l.string,
      active: l.bool
    })
  ),
  /**
   * URL for an "add to calendar" button
   */
  calendarUrl: l.string,
  /**
   * Article image
   */
  headerImageUrl: l.string,
  /**
   * Event location
   */
  eventLocation: l.string,
  /**
   * Event time
   */
  eventTime: l.string,
  /**
   * URL for a registation button
   */
  registrationUrl: l.string,
  /**
   * URL for a Zoom button
   */
  zoomUrl: l.string
};
Vi.defaultProps = {
  type: "news",
  authorEmail: void 0,
  authorPhone: void 0,
  authorTitle: void 0,
  breadcrumbs: void 0,
  calendarUrl: void 0,
  headerImageUrl: void 0,
  eventLocation: void 0,
  eventTime: void 0,
  registrationUrl: void 0,
  zoomUrl: void 0
};
const Uu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Vn = ({
  color: e,
  icon: t,
  innerRef: r,
  onClick: n,
  size: o,
  cardTitle: s,
  className: d,
  gaData: g,
  ...p
}) => {
  const h = () => {
    n == null || n();
  };
  return /* @__PURE__ */ f.jsx(
    Je,
    {
      gaData: {
        ...Uu,
        section: s,
        // @deprecated - remove at some point
        ...g,
        text: `${t == null ? void 0 : t[1]} icon`
      },
      children: /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${e} ${o === "large" && "btn-circle-large"} ${d}`,
          ref: r,
          "aria-label": "Close",
          onClick: h,
          ...p,
          children: /* @__PURE__ */ f.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
        }
      )
    }
  );
};
Vn.propTypes = {
  /**
    Color the button based on the background color
  */
  color: l.oneOf(["white", "gray", "black"]),
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: $i,
  /**
    Button size
  */
  size: l.oneOf(["large", "small"]),
  className: l.string
};
Vn.defaultProps = {
  color: "gray",
  icon: void 0,
  innerRef: void 0,
  onClick: void 0,
  size: "small",
  cardTitle: ""
};
const qu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Un = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: o,
  disabled: s,
  element: d = "button",
  innerRef: g,
  href: p,
  onClick: h,
  ...x
}) => {
  const w = be("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: s
  });
  let O = d;
  return p && d === "button" && (O = "a"), /* @__PURE__ */ f.jsx(
    Je,
    {
      gaData: {
        ...qu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ f.jsx(
        O,
        {
          type: O === "button" && h ? "button" : void 0,
          ...x,
          className: w,
          href: p,
          ref: g,
          onClick: h,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Un.propTypes = {
  /**
    Button tag label
  */
  label: l.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: l.string,
  /**
   * Google Analytics event data
   */
  gaData: $i,
  /**
    ARIA label for accessibility
  */
  ariaLabel: l.string,
  /**
    Button background color
  */
  color: l.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: l.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: l.oneOfType([
    l.func,
    l.string,
    l.shape({ $$typeof: l.symbol, render: l.func }),
    l.arrayOf(
      l.oneOfType([
        l.func,
        l.string,
        l.shape({ $$typeof: l.symbol, render: l.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: l.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: l.oneOfType([
    l.object,
    l.func,
    l.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: l.func
};
Un.defaultProps = {
  label: "",
  cardTitle: "",
  ariaLabel: void 0,
  color: "gray",
  disabled: void 0,
  element: "button",
  href: void 0,
  innerRef: void 0,
  onClick: void 0
};
const Ir = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: o = "async",
  dataTestId: s,
  fetchPriority: d = "auto",
  width: g,
  height: p,
  cardLink: h,
  title: x,
  caption: w,
  captionTitle: O,
  border: I,
  dropShadow: R
}) => {
  const S = {
    src: e,
    alt: t,
    loading: n,
    decoding: o,
    fetchpriority: d,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Tn(r) },
    ...s && { "data-testid": s },
    ...g && { width: g },
    ...p && { height: p }
  }, N = be("uds-img", {
    borderless: !I,
    "uds-img-drop-shadow": R
  }), M = (V) => {
    const U = V ? `${S.className} ${V}` : S.className;
    return h ? /* @__PURE__ */ f.jsxs("a", { href: h, children: [
      /* @__PURE__ */ f.jsx("img", { ...S, className: U }),
      /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: x })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ f.jsx("img", { ...S, className: U })
    );
  }, z = () => /* @__PURE__ */ f.jsx("div", { className: N, children: /* @__PURE__ */ f.jsxs("figure", { className: "figure uds-figure", children: [
    M(),
    w && /* @__PURE__ */ f.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      O && /* @__PURE__ */ f.jsx("h3", { children: O }),
      /* @__PURE__ */ f.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: St(w)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: w ? z() : M(N) });
};
Ir.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: l.string.isRequired,
  /**
   * Image alt text
   */
  alt: l.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: l.arrayOf(l.string),
  /**
   * Image loading mode
   */
  loading: l.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: l.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: l.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: l.string,
  /**
   * Height of the image
   */
  height: l.string,
  dataTestId: l.string,
  cardLink: l.string,
  title: l.string,
  caption: l.string,
  captionTitle: l.string,
  border: l.bool,
  dropShadow: l.bool
};
const Yu = Pt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Gu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Xu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Gu(e) ? `mailto:${e}` : e, Ku = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Kt = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: g,
  eventFormat: p,
  eventLocation: h,
  eventTime: x,
  buttons: w,
  linkLabel: O,
  linkUrl: I,
  tags: R,
  showBorders: S,
  cardLink: N
}) => /* @__PURE__ */ f.jsx(
  Ui,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: o,
    title: s,
    icon: d,
    body: g,
    eventFormat: p,
    eventLocation: h,
    eventTime: x,
    buttons: w,
    linkLabel: O,
    linkUrl: I,
    tags: R,
    showBorders: S,
    cardLink: N
  }
);
Kt.propTypes = {
  /**
   * Type of card
   */
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: l.bool,
  /**
   * Card title
   */
  title: l.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: l.arrayOf(l.string),
  /**
   * Card body content
   */
  body: l.string,
  /**
   * Event info format
   */
  eventFormat: l.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: l.string,
  /**
   * Event start time
   */
  eventTime: l.string,
  /**
   * Card header image
   */
  image: l.string,
  /**
   * Card header image alt text
   */
  imageAltText: l.string,
  /**
   * Buttons
   */
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  /**
   * Tags
   */
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: l.bool,
  /**
   * Card link
   */
  cardLink: l.string
};
Kt.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: void 0,
  eventFormat: "stack",
  eventTime: void 0,
  eventLocation: void 0,
  icon: void 0,
  image: void 0,
  imageAltText: void 0,
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Ui = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: o,
  title: s,
  icon: d,
  body: g,
  eventFormat: p,
  eventLocation: h,
  eventTime: x,
  buttons: w,
  linkLabel: O,
  linkUrl: I,
  tags: R,
  showBorders: S,
  cardLink: N
}) => {
  const M = be("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(Yu, { className: M, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ f.jsx(
      Ir,
      {
        src: n,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: s
      }
    ),
    !n && d && /* @__PURE__ */ f.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ f.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ f.jsx(
      Dn,
      {
        type: e,
        body: g,
        eventFormat: p,
        eventLocation: h,
        eventTime: x,
        title: s,
        buttons: w,
        linkLabel: O,
        linkUrl: I,
        tags: R,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ f.jsx(
      Dn,
      {
        type: e,
        body: g,
        eventFormat: p,
        eventLocation: h,
        eventTime: x,
        title: s,
        buttons: w,
        linkLabel: O,
        linkUrl: I,
        tags: R,
        cardLink: N
      }
    )
  ] }) });
};
Ui.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  width: l.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: l.bool,
  title: l.string.isRequired,
  icon: l.arrayOf(l.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  image: l.string,
  imageAltText: l.string,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  showBorders: l.bool,
  cardLink: l.string
};
Ui.defaultProps = {
  type: "default",
  width: "100%",
  horizontal: !1,
  body: "",
  eventFormat: "stack",
  eventTime: "",
  eventLocation: "",
  icon: void 0,
  image: "",
  imageAltText: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0,
  showBorders: !0
};
const Dn = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: o,
  title: s,
  buttons: d,
  linkLabel: g,
  linkUrl: p,
  tags: h,
  cardLink: x
}) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  !!s && /* @__PURE__ */ f.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ f.jsx("h3", { className: "card-title", children: x ? /* @__PURE__ */ f.jsx("a", { href: x, children: s }) : s }) }),
  !!t && /* @__PURE__ */ f.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: St(t) }) }),
  e === "event" && (o || n) && /* @__PURE__ */ f.jsx(
    qi,
    {
      eventFormat: r,
      eventTime: o,
      eventLocation: n
    }
  ),
  d && /* @__PURE__ */ f.jsx("div", { className: "card-buttons", children: d.map((w) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ f.jsx(
        lr,
        {
          ariaLabel: w.ariaLabel,
          color: w.color,
          icon: w.icon,
          href: w.href,
          label: w.label,
          onClick: w.onClick,
          size: w.size,
          target: w.target,
          cardTitle: s
        }
      )
    },
    `${w.label}-${w.href}`
  )) }),
  p && g && /* @__PURE__ */ f.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ f.jsx(
    Je,
    {
      gaData: {
        ...Ku,
        section: s,
        text: g
      },
      children: /* @__PURE__ */ f.jsx("a", { href: Xu(p), children: g })
    }
  ) }),
  h && /* @__PURE__ */ f.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: h.map((w) => (
    // @ts-ignore
    /* @__PURE__ */ f.jsx(
      Un,
      {
        ariaLabel: w.ariaLabel,
        color: w.color,
        href: w.href,
        label: w.label,
        onClick: w.onClick,
        cardTitle: s
      },
      `${w.label}-${w.href}`
    )
  )) })
] });
Dn.propTypes = {
  type: l.oneOf(["default", "degree", "event", "news", "story"]),
  body: l.string,
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string,
  title: l.string.isRequired,
  buttons: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: l.arrayOf(l.string),
      href: l.string,
      label: l.string,
      onClick: l.func,
      size: l.oneOf(["default", "small", "xsmall"]),
      target: l.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: l.string,
  linkUrl: l.string,
  tags: l.arrayOf(
    l.shape({
      ariaLabel: l.string,
      color: l.oneOf(["white", "gray", "dark"]),
      href: l.string,
      label: l.string,
      onClick: l.func
    })
  ),
  cardLink: l.string
};
Dn.defaultProps = {
  type: "default",
  body: "",
  eventFormat: "stack",
  eventLocation: "",
  eventTime: "",
  buttons: void 0,
  linkLabel: void 0,
  linkUrl: void 0,
  tags: void 0
};
const qi = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ f.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: St(t) })
  ] }),
  r && /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        dangerouslySetInnerHTML: St(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  t && /* @__PURE__ */ f.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: St(t) })
  ] }) }),
  r && /* @__PURE__ */ f.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
      "div",
      {
        dangerouslySetInnerHTML: St(r)
      }
    ) })
  ] }) })
] });
qi.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
qi.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
var Zu = /* @__PURE__ */ ((e) => (e.COPY = "copy", e))(Zu || {});
const Ju = ({ type: e }) => e == "copy" ? /* @__PURE__ */ f.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ f.jsx("hr", {}), Qu = Pt.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 3px;
    border: 3px solid #1b1b1b;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1b1b1b transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`, ec = () => /* @__PURE__ */ f.jsxs(Qu, { children: [
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {})
] }), tc = Pt.section``, rc = ws(null), nc = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: n,
  renderBody: o,
  dataTransformer: s,
  dataFilter: d,
  maxItems: g
}) => {
  const [{ data: p, loading: h, error: x }, w] = js(), [O, I] = Ge([]), R = { ...e.dataSource, ...t };
  return ot(() => {
    w(R == null ? void 0 : R.url);
  }, [R == null ? void 0 : R.url]), ot(() => {
    const S = p == null ? void 0 : p.nodes.map(s), N = S == null ? void 0 : S.filter(
      (M) => d(M, t == null ? void 0 : t.filters)
    );
    I(g ? N == null ? void 0 : N.slice(0, g) : N);
  }, [p]), // Init the context to be used on its childrens
  /* @__PURE__ */ f.jsx(rc.Provider, { value: { feeds: O }, children: /* @__PURE__ */ f.jsxs(tc, { children: [
    n,
    x ? /* @__PURE__ */ f.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      h && !(O != null && O.length) && /* @__PURE__ */ f.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ f.jsx(ec, {}) }),
      O != null && O.length ? o : !h && /* @__PURE__ */ f.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
nc.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const $a = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Ba = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Md = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), ic = l.shape({
  url: l.string,
  filters: l.string
}), oc = l.shape({
  header: $a,
  ctaButton: Ba,
  dataSource: ic,
  maxItems: l.number
}), ac = Pt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, sc = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const n = { ...e.header, ...t }, o = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ f.jsx("h2", { className: `text-${n.color}`, children: n.text }) }),
        /* @__PURE__ */ f.jsx(ac, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ f.jsx(
          Je,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: n.text,
              text: o.text
            },
            children: /* @__PURE__ */ f.jsx("a", { className: `btn btn-${o.color}`, href: o.url, children: o.text })
          }
        ) })
      ]
    }
  );
};
sc.propTypes = {
  defaultProps: oc,
  header: $a,
  ctaButton: Ba
};
const lc = ({ children: e }) => /* @__PURE__ */ f.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ f.jsx("div", { className: "col", children: e }) });
lc.propTypes = {
  children: l.element
};
const uc = Pt.img`
  width: 100%;
`;
function cc({ image: e, title: t, contents: r }) {
  return console.log({ image: e, title: t, contents: r }), /* @__PURE__ */ f.jsx("div", { children: "TODO: to be implemented" });
}
function dc({
  image: e,
  subTitle: t,
  title: r,
  contents: n,
  contentsColor: o
}) {
  const s = {
    small: "uds-hero-sm",
    medium: "uds-hero-md",
    large: "uds-hero-lg",
    undefined: ""
  }, d = {
    gold: "highlight-gold",
    black: "highlight-black",
    white: "highlight-white",
    none: "text-white",
    undefined: ""
  }, g = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("uds-hero", {
        [s[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ f.jsx(
          uc,
          {
            className: "hero",
            src: e == null ? void 0 : e.url,
            alt: e == null ? void 0 : e.altText,
            "data-testid": "hero-image"
          }
        ),
        t && /* @__PURE__ */ f.jsx("div", { role: "doc-subtitle", "data-testid": "hero-subtitle", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: be({
              [g[t.color]]: t.color,
              [d[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        r && /* @__PURE__ */ f.jsx("h1", { style: { maxWidth: r.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: be({
              [g[r.color]]: r.color,
              [d[r.highlightColor]]: r.highlightColor
            }),
            children: r.text
          }
        ) }),
        n && /* @__PURE__ */ f.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: be("content", {
              [g[o]]: o
            }),
            children: n.map((p, h) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ f.jsx("p", { children: p.text }, `content-${h}`)
            ))
          }
        )
      ]
    }
  );
}
const za = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => dc(e),
    "story-hero": () => cc(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
za.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: Os,
  title: si,
  subTitle: si,
  contents: l.arrayOf(si),
  contentsColor: l.string
};
const Gt = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: o,
  onClick: s,
  ellipses: d,
  ariaLabel: g,
  children: p,
  ariaDisabled: h
}) => /* @__PURE__ */ f.jsx(
  "li",
  {
    className: be("page-item", {
      disabled: r,
      active: o,
      elipses: d
    }),
    children: t ? /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        "aria-label": g,
        className: be("page-link", {
          "page-link-icon": n
        }),
        onClick: s,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": o ? "page" : null,
        "aria-disabled": h,
        children: [
          p,
          o && /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ f.jsx("span", { className: "page-link", "data-testid": "page-link", children: p })
  }
);
Gt.propTypes = {
  isClickeable: l.bool,
  disabled: l.bool,
  pageLinkIcon: l.bool,
  selectedPage: l.bool,
  dataId: l.string,
  onClick: l.func,
  children: l.node,
  ellipses: l.bool,
  ariaLabel: l.string,
  ariaDisabled: l.bool
};
Gt.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const fc = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Yi = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: o
}) => {
  const [s, d] = Ge(null);
  ot(() => {
    d(r);
  }, [r]);
  const g = (x) => {
    ba({ ...fc, text: `page ${x}` });
  }, p = (x, w) => {
    const I = {
      first: 1,
      prev: s === 1 ? 1 : s - 1,
      next: s === n ? n : s + 1,
      last: n
    }[w] ?? w;
    d(I), g(I), o == null || o(x, I);
  }, h = () => {
    const x = So(
      s === n - 1,
      2,
      s === n ? 3 : 1
    ), w = So(
      s === 1,
      3,
      s === 2 ? 2 : 1
    ), O = Ao(
      s - x,
      s,
      n
    ), I = Ao(
      s,
      s + 1 + w,
      n
    ), R = [...O, ...I];
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      R[0] !== 1 && /* @__PURE__ */ f.jsx(
        Gt,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: s === 1,
          onClick: (S) => p(S, "first"),
          children: "1"
        }
      ),
      R[0] > 2 && /* @__PURE__ */ f.jsx(Gt, { ellipses: !0, children: "..." }),
      R.map((S) => /* @__PURE__ */ f.jsx(
        Gt,
        {
          ariaLabel: `Page ${S} of ${n}`,
          isClickeable: !0,
          selectedPage: s === S,
          onClick: (N) => p(N, S),
          children: S
        },
        S
      )),
      R[R.length - 1] < n - 1 && /* @__PURE__ */ f.jsx(Gt, { ellipses: !0, children: "..." }),
      R[R.length - 1] !== n && /* @__PURE__ */ f.jsx(
        Gt,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: s === n,
          onClick: (S) => p(S, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ f.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ f.jsxs(
    "ul",
    {
      className: be(
        "pagination",
        "justify-content-center",
        "pt-2",
        "pb-2",
        {
          border: e === "bordered",
          "uds-bg-gray1": t === "gray1",
          "uds-bg-gray": t === "gray2",
          "uds-bg-dark": t === "gray7"
        }
      ),
      children: [
        /* @__PURE__ */ f.jsx(
          Gt,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: s === 1,
            pageLinkIcon: !0,
            onClick: (x) => p(x, "prev"),
            ariaDisabled: s === 1,
            ariaLabel: "Previous Page"
          }
        ),
        h(),
        /* @__PURE__ */ f.jsx(
          Gt,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: s === n,
            disabled: s === n,
            pageLinkIcon: !0,
            onClick: (x) => p(x, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Yi.propTypes = {
  /**
   * Type of pagination
   */
  type: l.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: l.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: l.number,
  /**
   * Total number of pages
   */
  totalPages: l.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: l.func.isRequired
};
Yi.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
const Qo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ea = {
  OPEN: "open",
  CLOSE: "close"
}, pc = {
  SMALL: "small"
}, Ha = (e) => e === pc.SMALL, Wa = ({ imageSize: e, body: t, heading: r, readMoreLink: n }) => {
  const [o, s] = Ge(!1), d = da(), { isReact: g, isBootstrap: p } = Bn(), h = `info-layer-${d}`, x = Ha(e), w = (O) => {
    (O.type === "click" || O.key === "Enter" || O.key === " ") && s(!o);
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: be("info-layer", { show: o }),
      "data-testid": "info-layer",
      id: h,
      children: /* @__PURE__ */ f.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: be("header", {
              closed: x && !o
            }),
            children: [
              x && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ f.jsx("p", { dangerouslySetInnerHTML: St(t) }),
              /* @__PURE__ */ f.jsx(
                Je,
                {
                  gaData: {
                    ...Qo,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: o ? ea.OPEN : ea.CLOSE,
                    section: r
                  },
                  children: /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      "data-bs-toggle": p && "collapse",
                      "data-bs-target": p && `#${h}`,
                      onClick: g && w,
                      className: be("btn-expand", {
                        btn: x
                      }),
                      type: "button",
                      "aria-expanded": o,
                      "aria-controls": h,
                      children: [
                        x ? /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: r }) : /* @__PURE__ */ f.jsx("h4", { children: r }),
                        /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !x && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ f.jsx("p", { dangerouslySetInnerHTML: St(t) }),
        n && /* @__PURE__ */ f.jsx(
          Je,
          {
            gaData: {
              ...Qo,
              section: r,
              text: "read more"
            },
            children: /* @__PURE__ */ f.jsxs("a", { href: n, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: r }),
              /* @__PURE__ */ f.jsx(
                "span",
                {
                  className: "fas icon-small fa-arrow-right",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        )
      ] })
    }
  );
};
Wa.propTypes = {
  imageSize: l.oneOf(["small", "large"]),
  body: l.string.isRequired,
  heading: l.string.isRequired,
  readMoreLink: l.string
};
const Va = ({
  imageSize: e = "large",
  image: t,
  imageAlt: r,
  heading: n,
  body: o,
  readMoreLink: s = "",
  citation: d
}) => {
  const g = Ha(e);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("card-ranking", {
        "large-image": !g,
        "small-image": g
      }),
      children: [
        g ? /* @__PURE__ */ f.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ f.jsx(Ir, { src: t, alt: r, fetchPriority: "high" }) }) : /* @__PURE__ */ f.jsx(Ir, { src: t, alt: r, fetchPriority: "high" }),
        g && /* @__PURE__ */ f.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ f.jsx("h4", { children: n }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            "— ",
            d
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(
          Wa,
          {
            imageSize: e,
            body: o,
            heading: n,
            readMoreLink: s
          }
        )
      ]
    }
  );
};
Va.propTypes = {
  /**
   * Size of ranking card
   */
  imageSize: l.oneOf(["small", "large"]).isRequired,
  /**
   * Ranking card image
   */
  image: l.string.isRequired,
  /**
   * Card header image alt text
   */
  imageAlt: l.string.isRequired,
  /**
   * Ranking card heading
   */
  heading: l.string.isRequired,
  /**
   * Ranking card body content
   */
  body: l.string.isRequired,
  /**
   * Link for read more
   */
  readMoreLink: l.string,
  /**
   * Ranking card citation content (Required for small size only)
   */
  citation: l.string
};
var hc = /* @__PURE__ */ ((e) => (e.WARNING = "warning", e.INFO = "info", e.SUCCESS = "success", e.ERROR = "error", e))(hc || {});
const mc = ({
  type: e,
  dismissable: t,
  children: r
}) => {
  var h, x, w;
  const { isBootstrap: n, isReact: o } = Bn(), [s, d] = Ge(!0), g = () => d(!1), p = {
    warning: {
      iconTitle: "Warning",
      iconName: "bell",
      alertClass: "warning"
    },
    info: {
      iconTitle: "Information",
      iconName: "info-circle",
      alertClass: "info"
    },
    success: {
      iconTitle: "Success",
      iconName: "check-circle",
      alertClass: "success"
    },
    error: {
      iconTitle: "Error",
      iconName: "exclamation-triangle",
      alertClass: "danger"
    }
  };
  return s && /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("alert", {
        "alert-dismissable": t,
        [`alert-${(h = p[e]) == null ? void 0 : h.alertClass}`]: e
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            title: (x = p[e]) == null ? void 0 : x.iconTitle,
            className: `fa fa-icon fa-${(w = p[e]) == null ? void 0 : w.iconName}`
          }
        ) }),
        /* @__PURE__ */ f.jsx("div", { className: "alert-content", children: r }),
        t && /* @__PURE__ */ f.jsx("div", { className: "alert-close", children: /* @__PURE__ */ f.jsx(
          Vn,
          {
            icon: ["fas", "times"],
            onClick: o && g,
            "data-bs-dismiss": n && "alert"
          }
        ) })
      ]
    }
  );
}, gc = Pt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Ua = ({ gaData: e, hidePrev: t, hideNext: r, slideNav: n }) => /* @__PURE__ */ f.jsxs(gc, { children: [
  !t && /* @__PURE__ */ f.jsx(Je, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ f.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => n(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !r && /* @__PURE__ */ f.jsx(Je, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ f.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => n(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ f.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Ua.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object,
  hidePrev: l.bool,
  hideNext: l.bool,
  slideNav: l.func.isRequired
};
const qa = fa(function(t, r) {
  const {
    id: n,
    selected: o,
    title: s,
    selectTab: d,
    leftKeyPressed: g,
    rightKeyPressed: p,
    icon: h,
    gaData: x
  } = t, w = Er(null);
  Ss(
    r,
    () => ({
      focus() {
        w.current.focus();
      },
      scrollIntoView() {
        var S, N, M, z, V, U, L;
        const I = ((S = w.current) == null ? void 0 : S.offsetWidth) / 2 + w.current.offsetLeft, R = ((M = (N = w.current) == null ? void 0 : N.offsetParent) == null ? void 0 : M.scrollLeft) + ((V = (z = w.current) == null ? void 0 : z.offsetParent) == null ? void 0 : V.offsetWidth) / 2;
        (L = (U = w.current) == null ? void 0 : U.offsetParent) == null || L.scrollBy({
          left: I - R
        });
      }
    }),
    []
  );
  const O = (I) => {
    I.keyCode === 37 ? (I.preventDefault(), g()) : I.keyCode === 39 && (I.preventDefault(), p());
  };
  return /* @__PURE__ */ f.jsx(Je, { gaData: { ...x, text: s }, children: /* @__PURE__ */ f.jsxs(
    "a",
    {
      ref: w,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: n,
      href: `#nav-${n}`,
      role: "tab",
      "aria-controls": `nav-${n}`,
      "aria-selected": o,
      onClick: (I) => d(I, n, s),
      onKeyDown: O,
      tabIndex: o ? "" : "-1",
      children: [
        s,
        " ",
        h && /* @__PURE__ */ f.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
qa.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object,
  id: l.string.isRequired,
  selected: l.bool.isRequired,
  title: l.string.isRequired,
  selectTab: l.func.isRequired,
  leftKeyPressed: l.func.isRequired,
  rightKeyPressed: l.func.isRequired,
  icon: l.arrayOf(l.string)
};
function vc() {
  const e = Er({}), t = ks(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const yc = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ f.jsx(
  "div",
  {
    className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
yc.propTypes = {
  id: l.string.isRequired,
  bgColor: l.string,
  selected: l.bool,
  children: l.oneOfType([l.array, l.element])
};
const Ya = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (o) => {
  }
}) => {
  const o = Fe.Children.toArray(t), s = Er(!1), [d, g] = Ge(
    e && e !== "null" ? e : o[0].props.id
  ), p = Er(null), [h, x] = vc(), { isReact: w } = Bn(), O = (J) => {
    var ve;
    n(J), (ve = h.current[J]) == null || ve.focus(), g(J);
  }, [I, R] = Ge(0), [S, N] = Ge();
  ot(() => {
    const J = () => {
      R(p.current.scrollLeft);
    };
    return p.current.addEventListener("scroll", J), J(), () => {
      p.current && p.current.removeEventListener("scroll", J);
    };
  }, [S]), ot(() => {
    const J = () => {
      N(
        p.current.scrollWidth - p.current.offsetWidth
      );
    };
    return window.addEventListener("resize", J), J(), () => {
      p.current && window.removeEventListener("resize", J);
    };
  }, []), ot(() => {
    var J;
    (J = h.current[d]) == null || J.scrollIntoView();
  }, [d]), ot(() => {
    s.current && e && e !== "null" && d !== e && g(e);
  }, [e]), ot(() => {
    s.current = !0;
  }, []);
  const M = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, z = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, V = o.map((J) => Fe.cloneElement(J, {
    bgColor: r,
    selected: d === J.props.id
  })), U = (J) => {
    const ve = p.current, Be = ve.scrollWidth - ve.clientWidth;
    let ge = ve.scrollLeft + 200 * J;
    ge = Math.max(0, Math.min(Be, ge)), ve.scrollTo({
      left: ge,
      behavior: "smooth"
    });
  }, L = (J, ve, Be) => {
    J.preventDefault(), O(ve);
  }, Z = (J = !0) => {
    const ve = o.length, Be = J ? 1 : -1, Qe = o.findIndex((Ce) => Ce.props.id === d), ge = o[(ve + Qe + Be) % ve].props.id;
    O(ge);
  };
  let de = "uds-tabbed-panels";
  return r === "bg-dark" && (de += " uds-tabbed-panels-dark"), /* @__PURE__ */ f.jsxs("div", { className: r, children: [
    /* @__PURE__ */ f.jsxs("nav", { className: de, children: [
      /* @__PURE__ */ f.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: p, children: o.map((J, ve) => /* @__PURE__ */ f.jsx(
        qa,
        {
          ref: x(J.props.id),
          id: J.props.id,
          title: J.props.title,
          selected: d === J.props.id,
          gaData: z,
          selectTab: w && L,
          leftKeyPressed: w && (() => Z(!1)),
          rightKeyPressed: w && (() => Z()),
          icon: J.props.icon,
          index: ve
        },
        J.props.id
      )) }),
      /* @__PURE__ */ f.jsx(
        Ua,
        {
          hidePrev: I <= 0,
          hideNext: I >= S,
          gaData: M,
          slideNav: w && U
        }
      )
    ] }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: V
      }
    )
  ] });
};
Ya.propTypes = {
  initialTab: l.string,
  children: l.arrayOf(l.element).isRequired,
  bgColor: l.string,
  onTabChange: l.func
};
const Gi = ({ imageSource: e, imageAltText: t, quote: r, itemStyle: n = {} }) => {
  var o, s;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Tn(n.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ f.jsx(
          Ir,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ f.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ f.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ f.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          r.title && /* @__PURE__ */ f.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ f.jsx("span", { className: Tn(n.titleCssClass), children: r.title }) }),
          r.content && /* @__PURE__ */ f.jsx(
            "p",
            {
              className: Tn(n.contentCssClass),
              "data-testid": "testimonial-content",
              children: r.content
            }
          ),
          (!!((o = r.cite) != null && o.name) || !!((s = r.cite) != null && s.description)) && /* @__PURE__ */ f.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ f.jsx("cite", { className: "name", children: r.cite.name }),
            r.cite && /* @__PURE__ */ f.jsx("cite", { className: "description", children: r.cite.description })
          ] })
        ] })
      ]
    }
  );
};
Gi.propTypes = {
  quote: l.shape({
    title: l.string,
    content: l.string,
    cite: l.shape({
      name: l.string,
      description: l.string
    })
  }).isRequired,
  imageSource: l.string,
  imageAltText: l.string,
  itemStyle: l.shape({
    containerCssClass: l.arrayOf(l.string),
    titleCssClass: l.arrayOf(l.string),
    contentCssClass: l.arrayOf(l.string)
  })
};
let bc = 0;
const xc = ({
  title: e,
  content: t,
  triggerElement: r
}) => {
  const [n] = Ge(`tooltip-${bc++}`), o = Er(null);
  return /* @__PURE__ */ f.jsxs("span", { className: "uds-tooltip-container", children: [
    Fe.cloneElement(r, {
      ref: o,
      "aria-describedby": n,
      tabindex: 0
    }),
    /* @__PURE__ */ f.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: n, children: [
      e && /* @__PURE__ */ f.jsx("span", { className: "uds-tooltip-heading", children: e }),
      t
    ] })
  ] });
}, wc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, Sc = ({
  url: e = "",
  vttUrl: t,
  caption: r,
  title: n = "",
  className: o,
  controls: s = !0
}) => {
  const d = Er(null);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be(`uds-video-container ${o}`, {
        "uds-video-with-caption": r
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ f.jsx(Je, { gaData: { ...wc, section: n }, children: /* @__PURE__ */ f.jsxs(
          "video",
          {
            ref: d,
            title: n,
            playsInline: !0,
            controls: s || !0,
            children: [
              /* @__PURE__ */ f.jsx("source", { src: e }),
              /* @__PURE__ */ f.jsx(
                "track",
                {
                  src: t,
                  kind: "captions",
                  srcLang: "en",
                  label: "english_captions"
                }
              )
            ]
          }
        ) }) }),
        r && /* @__PURE__ */ f.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ f.jsx("figcaption", { children: r }) })
      ]
    }
  );
}, kc = ({ title: e = "", caption: t, url: r = "", className: n }) => /* @__PURE__ */ f.jsxs(
  "div",
  {
    className: be(`uds-video-container ${n}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ f.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ f.jsx("iframe", { title: e, src: r }) }),
      t && /* @__PURE__ */ f.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ f.jsx("figcaption", { children: t }) })
    ]
  }
), Ga = (e) => {
  const {
    type: t = "video",
    url: r = "",
    vttUrl: n,
    title: o = "",
    caption: s,
    className: d,
    controls: g = !0
  } = e;
  return t === "youtube" ? kc({ url: r, title: o, caption: s, className: d }) : Sc({
    url: r,
    vttUrl: n,
    title: o,
    caption: s,
    className: d,
    controls: g
  });
};
Ga.propTypes = {
  type: l.oneOf(["video", "youtube"]),
  url: l.string,
  vttUrl: l.string,
  title: l.string,
  className: l.string,
  caption: l.string,
  controls: l.bool
};
const Tc = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Xi = ({ children: e }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ f.jsx(
    "div",
    {
      role: "group",
      className: "glide__bullets",
      "data-glide-el": "controls[nav]",
      "data-testid": "bullets-container",
      onClick: (t) => t.stopPropagation(),
      onKeyDown: (t) => t.stopPropagation(),
      children: e
    }
  )
);
Xi.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const Xa = ({ buttonCount: e }) => {
  const t = [];
  for (let r = 0; r < e; r += 1)
    t.push(
      /* @__PURE__ */ f.jsx(Je, { gaData: Tc, children: /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${r}`,
          "aria-label": `Slide view ${r + 1}`
        }
      ) }, `bullet-${r}`)
    );
  return /* @__PURE__ */ f.jsx(Xi, { children: t });
};
Xa.propTypes = {
  buttonCount: l.number.isRequired
};
const Ka = ({ imageItems: e, onItemClick: t = () => null }) => {
  const r = (o, s) => {
    const { ariaSelected: d } = o.currentTarget.dataset;
    o.currentTarget.dataset.ariaSelected = String(!d), o.stopPropagation(), t(s);
  }, n = e.map((o, s) => /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${s}`,
      "aria-label": `Slide view ${s + 1}`,
      "aria-selected": "false",
      onClick: (d) => r(d, s),
      onKeyDown: (d) => r(d, s),
      children: /* @__PURE__ */ f.jsx(
        "img",
        {
          src: o,
          alt: `Slide ${s + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${s}`
  ));
  return /* @__PURE__ */ f.jsx(Xi, { children: n });
};
Ka.propTypes = {
  imageItems: l.arrayOf(l.string).isRequired,
  onItemClick: l.func
};
const Ki = ({ onClick: e = () => null }) => /* @__PURE__ */ f.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: e,
    children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
Ki.propTypes = {
  onClick: l.func
};
const Zi = ({ onClick: e = () => null }) => /* @__PURE__ */ f.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: e,
    children: /* @__PURE__ */ f.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
Zi.propTypes = {
  onClick: l.func
};
const ta = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Ji = ({ children: e = null }) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Ji.propTypes = {
  children: l.arrayOf(l.element)
};
const Za = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ f.jsxs(Ji, { children: [
  /* @__PURE__ */ f.jsx(Je, { gaData: { ...ta, text: "left chevron" }, children: /* @__PURE__ */ f.jsx(Zi, { onClick: e }) }),
  t,
  /* @__PURE__ */ f.jsx(Je, { gaData: { ...ta, text: "right chevron" }, children: /* @__PURE__ */ f.jsx(Ki, { onClick: e }) })
] });
Za.propTypes = {
  children: l.element,
  onClick: l.func
};
const Ja = ({ carouselItems: e }) => {
  const t = e.map((r) => /* @__PURE__ */ f.jsx("li", { className: "glide__slide slider", children: r.item }, r.id.toString()));
  return /* @__PURE__ */ f.jsx("ul", { className: "glide__slides", children: t });
};
Ja.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function ra(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ra(Object(r), !0).forEach(function(n) {
      Ec(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ra(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function On(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(t) {
    return typeof t;
  } : On = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function qn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _c(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Yn(e, t, r) {
  return t && _c(e.prototype, t), e;
}
function Ec(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Cc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && ji(e, t);
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lr(e);
}
function ji(e, t) {
  return ji = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ji(e, t);
}
function Rc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Oc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ac(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Oc(e);
}
function jc(e) {
  var t = Rc();
  return function() {
    var n = Lr(e), o;
    if (t) {
      var s = Lr(this).constructor;
      o = Reflect.construct(n, arguments, s);
    } else
      o = n.apply(this, arguments);
    return Ac(this, o);
  };
}
function Nc(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Lr(e), e !== null); )
    ;
  return e;
}
function An() {
  return typeof Reflect < "u" && Reflect.get ? An = Reflect.get : An = function(t, r, n) {
    var o = Nc(t, r);
    if (o) {
      var s = Object.getOwnPropertyDescriptor(o, r);
      return s.get ? s.get.call(arguments.length < 3 ? t : n) : s.value;
    }
  }, An.apply(this, arguments);
}
var Pc = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: "slider",
  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,
  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,
  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,
  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,
  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: !1,
  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: !0,
  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: !0,
  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: !1,
  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,
  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,
  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: "",
  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,
  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,
  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,
  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: !0,
  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,
  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: !0,
  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,
  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: "ltr",
  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,
  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,
  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},
  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: "glide--swipeable",
    dragging: "glide--dragging",
    direction: {
      ltr: "glide--ltr",
      rtl: "glide--rtl"
    },
    type: {
      slider: "glide--slider",
      carousel: "glide--carousel"
    },
    slide: {
      clone: "glide__slide--clone",
      active: "glide__slide--active"
    },
    arrow: {
      disabled: "glide__arrow--disabled"
    },
    nav: {
      active: "glide__bullet--active"
    }
  }
};
function Jt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function Ze(e) {
  return parseInt(e);
}
function Ic(e) {
  return parseFloat(e);
}
function Ni(e) {
  return typeof e == "string";
}
function Mr(e) {
  var t = On(e);
  return t === "function" || t === "object" && !!e;
}
function Fn(e) {
  return typeof e == "function";
}
function Qa(e) {
  return typeof e > "u";
}
function Pi(e) {
  return e.constructor === Array;
}
function Lc(e, t, r) {
  var n = {};
  for (var o in t)
    Fn(t[o]) ? n[o] = t[o](e, n, r) : Jt("Extension must be a function");
  for (var s in n)
    Fn(n[s].mount) && n[s].mount();
  return n;
}
function Le(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Mc(e) {
  return Object.keys(e).sort().reduce(function(t, r) {
    return t[r] = e[r], t[r], t;
  }, {});
}
function Ii(e, t) {
  var r = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    r.classes = Object.assign({}, e.classes, t.classes);
    var n = ["direction", "type", "slide", "arrow", "nav"];
    n.forEach(function(o) {
      t.classes.hasOwnProperty(o) && (r.classes[o] = na(na({}, e.classes[o]), t.classes[o]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), r;
}
var Dc = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qn(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Yn(e, [{
    key: "on",
    value: function(r, n) {
      if (Pi(r)) {
        for (var o = 0; o < r.length; o++)
          this.on(r[o], n);
        return;
      }
      this.hop.call(this.events, r) || (this.events[r] = []);
      var s = this.events[r].push(n) - 1;
      return {
        remove: function() {
          delete this.events[r][s];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */
  }, {
    key: "emit",
    value: function(r, n) {
      if (Pi(r)) {
        for (var o = 0; o < r.length; o++)
          this.emit(r[o], n);
        return;
      }
      this.hop.call(this.events, r) && this.events[r].forEach(function(s) {
        s(n || {});
      });
    }
  }]), e;
}(), Fc = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    qn(this, e), this._c = {}, this._t = [], this._e = new Dc(), this.disabled = !1, this.selector = t, this.settings = Ii(Pc, r), this.index = this.settings.startAt;
  }
  return Yn(e, [{
    key: "mount",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Mr(r) ? this._c = Lc(this, r, this._e) : Jt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */
  }, {
    key: "mutate",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return Pi(r) ? this._t = r : Jt("You need to provide a array on `mutate()`"), this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */
  }, {
    key: "update",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Ii(this.settings, r), r.hasOwnProperty("startAt") && (this.index = r.startAt), this._e.emit("update"), this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */
  }, {
    key: "go",
    value: function(r) {
      return this._c.Run.make(r), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(r) {
      return this._c.Transition.disable(), this._c.Move.make(r), this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */
  }, {
    key: "destroy",
    value: function() {
      return this._e.emit("destroy"), this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */
  }, {
    key: "play",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return r && (this.settings.autoplay = r), this._e.emit("play"), this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */
  }, {
    key: "pause",
    value: function() {
      return this._e.emit("pause"), this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */
  }, {
    key: "disable",
    value: function() {
      return this.disabled = !0, this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */
  }, {
    key: "enable",
    value: function() {
      return this.disabled = !1, this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */
  }, {
    key: "on",
    value: function(r, n) {
      return this._e.on(r, n), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(r) {
      return this.settings.type === r;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */
  }, {
    key: "settings",
    get: function() {
      return this._o;
    },
    set: function(r) {
      Mr(r) ? this._o = r : Jt("Options must be an `object` instance.");
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */
  }, {
    key: "index",
    get: function() {
      return this._i;
    },
    set: function(r) {
      this._i = Ze(r);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */
  }, {
    key: "type",
    get: function() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */
  }, {
    key: "disabled",
    get: function() {
      return this._d;
    },
    set: function(r) {
      this._d = !!r;
    }
  }]), e;
}();
function $c(e, t, r) {
  var n = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function() {
      this._o = !1;
    },
    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function(h) {
      var x = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = h, r.emit("run.before", this.move), this.calculate(), r.emit("run", this.move), t.Transition.after(function() {
        x.isStart() && r.emit("run.start", x.move), x.isEnd() && r.emit("run.end", x.move), x.isOffset() && (x._o = !1, r.emit("run.offset", x.move)), r.emit("run.after", x.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var h = this.move, x = this.length, w = h.steps, O = h.direction, I = 1;
      if (O === "=") {
        if (e.settings.bound && Ze(w) > x) {
          e.index = x;
          return;
        }
        e.index = w;
        return;
      }
      if (O === ">" && w === ">") {
        e.index = x;
        return;
      }
      if (O === "<" && w === "<") {
        e.index = 0;
        return;
      }
      if (O === "|" && (I = e.settings.perView || 1), O === ">" || O === "|" && w === ">") {
        var R = o(I);
        R > x && (this._o = !0), e.index = s(R, I);
        return;
      }
      if (O === "<" || O === "|" && w === "<") {
        var S = d(I);
        S < 0 && (this._o = !0), e.index = g(S, I);
        return;
      }
      Jt("Invalid direction pattern [".concat(O).concat(w, "] has been used"));
    },
    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function() {
      return e.index <= 0;
    },
    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function() {
      return e.index >= this.length;
    },
    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return h ? this._o ? h === "|>" ? this.move.direction === "|" && this.move.steps === ">" : h === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === h : !1 : this._o;
    },
    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function() {
      return e.isType("slider") && e.settings.focusAt !== "center" && e.settings.bound;
    }
  };
  function o(p) {
    var h = e.index;
    return e.isType("carousel") ? h + p : h + (p - h % p);
  }
  function s(p, h) {
    var x = n.length;
    return p <= x ? p : e.isType("carousel") ? p - (x + 1) : e.settings.rewind ? n.isBound() && !n.isEnd() ? x : 0 : n.isBound() ? x : Math.floor(x / h) * h;
  }
  function d(p) {
    var h = e.index;
    if (e.isType("carousel"))
      return h - p;
    var x = Math.ceil(h / p);
    return (x - 1) * p;
  }
  function g(p, h) {
    var x = n.length;
    return p >= 0 ? p : e.isType("carousel") ? p + (x + 1) : e.settings.rewind ? n.isBound() && n.isStart() ? x : Math.floor(x / h) * h : 0;
  }
  return Le(n, "move", {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function() {
      return this._m;
    },
    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function(h) {
      var x = h.substr(1);
      this._m = {
        direction: h.substr(0, 1),
        steps: x ? Ze(x) ? Ze(x) : x : 0
      };
    }
  }), Le(n, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var h = e.settings, x = t.Html.slides.length;
      return this.isBound() ? x - 1 - (Ze(h.perView) - 1) + Ze(h.focusAt) : x - 1;
    }
  }), Le(n, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), n;
}
function ia() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Gn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, o, s, d, g = 0, p = function() {
    g = r.leading === !1 ? 0 : ia(), n = null, d = e.apply(o, s), n || (o = s = null);
  }, h = function() {
    var w = ia();
    !g && r.leading === !1 && (g = w);
    var O = t - (w - g);
    return o = this, s = arguments, O <= 0 || O > t ? (n && (clearTimeout(n), n = null), g = w, d = e.apply(o, s), n || (o = s = null)) : !n && r.trailing !== !1 && (n = setTimeout(p, O)), d;
  };
  return h.cancel = function() {
    clearTimeout(n), g = 0, n = o = s = null;
  }, h;
}
var Sn = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Bc(e, t, r) {
  var n = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(s) {
      for (var d = 0, g = s.length; d < g; d++) {
        var p = s[d].style, h = t.Direction.value;
        d !== 0 ? p[Sn[h][0]] = "".concat(this.value / 2, "px") : p[Sn[h][0]] = "", d !== s.length - 1 ? p[Sn[h][1]] = "".concat(this.value / 2, "px") : p[Sn[h][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(s) {
      for (var d = 0, g = s.length; d < g; d++) {
        var p = s[d].style;
        p.marginLeft = "", p.marginRight = "";
      }
    }
  };
  return Le(n, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return Ze(e.settings.gap);
    }
  }), Le(n, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return n.value * t.Sizes.length;
    }
  }), Le(n, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var s = e.settings.perView;
      return n.value * (s - 1) / s;
    }
  }), r.on(["build.after", "update"], Gn(function() {
    n.apply(t.Html.wrapper.children);
  }, 30)), r.on("destroy", function() {
    n.remove(t.Html.wrapper.children);
  }), n;
}
function es(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, r = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && r.push(t);
    return r;
  }
  return [];
}
function Li(e) {
  return Array.prototype.slice.call(e);
}
var zc = '[data-glide-el="track"]';
function Hc(e, t, r) {
  var n = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(zc), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Li(this.wrapper.children).filter(function(s) {
        return !s.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Le(n, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return n._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(s) {
      Ni(s) && (s = document.querySelector(s)), s !== null ? n._r = s : Jt("Root element must be a existing Html node");
    }
  }), Le(n, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return n._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(s) {
      n._t = s;
    }
  }), Le(n, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return n.track.children[0];
    }
  }), r.on("update", function() {
    n.collectSlides();
  }), n;
}
function Wc(e, t, r) {
  var n = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return Le(n, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(s) {
      Mr(s) ? (s.before = Ze(s.before), s.after = Ze(s.after)) : s = Ze(s), n._v = s;
    }
  }), Le(n, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var s = n.value, d = e.settings.perView;
      return Mr(s) ? s.before / d + s.after / d : s * 2 / d;
    }
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), n;
}
function Vc(e, t, r) {
  var n = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._o = 0;
    },
    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function() {
      var s = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = d, r.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        r.emit("move.after", {
          movement: s.value
        });
      });
    }
  };
  return Le(n, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return n._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(s) {
      n._o = Qa(s) ? 0 : Ze(s);
    }
  }), Le(n, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Le(n, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var s = this.offset, d = this.translate;
      return t.Direction.is("rtl") ? d + s : d - s;
    }
  }), r.on(["build.before", "run"], function() {
    n.make();
  }), n;
}
function Uc(e, t, r) {
  var n = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var s = "".concat(this.slideWidth, "px"), d = t.Html.slides, g = 0; g < d.length; g++)
        d[g].style.width = s;
    },
    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function() {
      t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },
    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function() {
      for (var s = t.Html.slides, d = 0; d < s.length; d++)
        s[d].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Le(n, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Le(n, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Le(n, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Le(n, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), r.on(["build.before", "resize", "update"], function() {
    n.setupSlides(), n.setupWrapper();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function qc(e, t, r) {
  var n = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      r.emit("build.before"), this.typeClass(), this.activeClass(), r.emit("build.after");
    },
    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function() {
      t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function() {
      var s = e.settings.classes, d = t.Html.slides[e.index];
      d && (d.classList.add(s.slide.active), es(d).forEach(function(g) {
        g.classList.remove(s.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var s = e.settings.classes, d = s.type, g = s.slide;
      t.Html.root.classList.remove(d[e.settings.type]), t.Html.slides.forEach(function(p) {
        p.classList.remove(g.active);
      });
    }
  };
  return r.on(["destroy", "update"], function() {
    n.removeClasses();
  }), r.on(["resize", "update"], function() {
    n.mount();
  }), r.on("move.after", function() {
    n.activeClass();
  }), n;
}
function Yc(e, t, r) {
  var n = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function() {
      this.items = [], e.isType("carousel") && (this.items = this.collect());
    },
    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = t.Html.slides, g = e.settings, p = g.perView, h = g.classes, x = g.cloningRatio;
      if (d.length > 0)
        for (var w = +!!e.settings.peek, O = p + w + Math.round(p / 2), I = d.slice(0, O).reverse(), R = d.slice(O * -1), S = 0; S < Math.max(x, Math.floor(p / d.length)); S++) {
          for (var N = 0; N < I.length; N++) {
            var M = I[N].cloneNode(!0);
            M.classList.add(h.slide.clone), s.push(M);
          }
          for (var z = 0; z < R.length; z++) {
            var V = R[z].cloneNode(!0);
            V.classList.add(h.slide.clone), s.unshift(V);
          }
        }
      return s;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var s = this.items, d = t.Html, g = d.wrapper, p = d.slides, h = Math.floor(s.length / 2), x = s.slice(0, h).reverse(), w = s.slice(h * -1).reverse(), O = "".concat(t.Sizes.slideWidth, "px"), I = 0; I < w.length; I++)
        g.appendChild(w[I]);
      for (var R = 0; R < x.length; R++)
        g.insertBefore(x[R], p[0]);
      for (var S = 0; S < s.length; S++)
        s[S].style.width = O;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var s = this.items, d = 0; d < s.length; d++)
        t.Html.wrapper.removeChild(s[d]);
    }
  };
  return Le(n, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length;
    }
  }), r.on("update", function() {
    n.remove(), n.mount(), n.append();
  }), r.on("build.before", function() {
    e.isType("carousel") && n.append();
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
var cr = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qn(this, e), this.listeners = t;
  }
  return Yn(e, [{
    key: "on",
    value: function(r, n, o) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Ni(r) && (r = [r]);
      for (var d = 0; d < r.length; d++)
        this.listeners[r[d]] = o, n.addEventListener(r[d], this.listeners[r[d]], s);
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
  }, {
    key: "off",
    value: function(r, n) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Ni(r) && (r = [r]);
      for (var s = 0; s < r.length; s++)
        n.removeEventListener(r[s], this.listeners[r[s]], o);
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
  }, {
    key: "destroy",
    value: function() {
      delete this.listeners;
    }
  }]), e;
}();
function Gc(e, t, r) {
  var n = new cr(), o = {
    /**
     * Initializes window bindings.
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("resize", window, Gn(function() {
        r.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("resize", window);
    }
  };
  return r.on("destroy", function() {
    o.unbind(), n.destroy();
  }), o;
}
var Xc = ["ltr", "rtl"], Kc = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Zc(e, t, r) {
  var n = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.direction;
    },
    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function(s) {
      var d = s.slice(0, 1);
      return this.is("rtl") ? s.split(d).join(Kc[d]) : s;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(s) {
      return this.value === s;
    },
    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function() {
      t.Html.root.classList.add(e.settings.classes.direction[this.value]);
    },
    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function() {
      t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
    }
  };
  return Le(n, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return n._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(s) {
      Xc.indexOf(s) > -1 ? n._v = s : Jt("Direction value must be `ltr` or `rtl`");
    }
  }), r.on(["destroy", "update"], function() {
    n.removeClass();
  }), r.on("update", function() {
    n.mount();
  }), r.on(["build.before", "update"], function() {
    n.addClass();
  }), n;
}
function Jc(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return t.Direction.is("rtl") ? -n : n;
    }
  };
}
function Qc(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var o = Math.floor(n / t.Sizes.slideWidth);
      return n + t.Gaps.value * o;
    }
  };
}
function ed(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      return n + t.Clones.grow / 2;
    }
  };
}
function td(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      if (e.settings.focusAt >= 0) {
        var o = t.Peek.value;
        return Mr(o) ? n - o.before : n - o;
      }
      return n;
    }
  };
}
function rd(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(n) {
      var o = t.Gaps.value, s = t.Sizes.width, d = e.settings.focusAt, g = t.Sizes.slideWidth;
      return d === "center" ? n - (s / 2 - g / 2) : n - g * d - o * d;
    }
  };
}
function nd(e, t, r) {
  var n = [Qc, ed, td, rd].concat(e._t, [Jc]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(s) {
      for (var d = 0; d < n.length; d++) {
        var g = n[d];
        Fn(g) && Fn(g().modify) ? s = g(e, t, r).modify(s) : Jt("Transformer should be a function that returns an object with `modify()` method");
      }
      return s;
    }
  };
}
function id(e, t, r) {
  var n = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(s) {
      var d = nd(e, t).mutate(s), g = "translate3d(".concat(-1 * d, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = g, t.Html.wrapper.style.webkitTransform = g, t.Html.wrapper.style.transform = g;
    },
    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transform = "";
    },
    /**
     * @return {number}
     */
    getStartIndex: function() {
      var s = t.Sizes.length, d = e.index, g = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s + (d - g) : (d + g) % s;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var s = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? s * -1 : s;
    }
  };
  return r.on("move", function(o) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return n.set(o.movement);
    t.Transition.after(function() {
      r.emit("translate.jump"), n.set(t.Sizes.slideWidth * e.index);
    });
    var s = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return n.set(s - t.Translate.getTravelDistance());
  }), r.on("destroy", function() {
    n.remove();
  }), n;
}
function od(e, t, r) {
  var n = !1, o = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(d) {
      var g = e.settings;
      return n ? "".concat(d, " 0ms ").concat(g.animationTimingFunc) : "".concat(d, " ").concat(this.duration, "ms ").concat(g.animationTimingFunc);
    },
    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      t.Html.wrapper.style.transition = this.compose(d);
    },
    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function() {
      t.Html.wrapper.style.transition = "";
    },
    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function(d) {
      setTimeout(function() {
        d();
      }, this.duration);
    },
    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function() {
      n = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      n = !0, this.set();
    }
  };
  return Le(o, "duration", {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function() {
      var d = e.settings;
      return e.isType("slider") && t.Run.offset ? d.rewindDuration : d.animationDuration;
    }
  }), r.on("move", function() {
    o.set();
  }), r.on(["build.before", "resize", "translate.jump"], function() {
    o.disable();
  }), r.on("run", function() {
    o.enable();
  }), r.on("destroy", function() {
    o.remove();
  }), o;
}
var ts = !1;
try {
  var oa = Object.defineProperty({}, "passive", {
    get: function() {
      ts = !0;
    }
  });
  window.addEventListener("testPassive", null, oa), window.removeEventListener("testPassive", null, oa);
} catch {
}
var Mi = ts, kn = ["touchstart", "mousedown"], aa = ["touchmove", "mousemove"], sa = ["touchend", "touchcancel", "mouseup", "mouseleave"], la = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function ad(e, t, r) {
  var n = new cr(), o = 0, s = 0, d = 0, g = !1, p = Mi ? {
    passive: !0
  } : !1, h = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function() {
      this.bindSwipeStart();
    },
    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function(w) {
      if (!g && !e.disabled) {
        this.disable();
        var O = this.touches(w);
        o = null, s = Ze(O.pageX), d = Ze(O.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), r.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(w) {
      if (!e.disabled) {
        var O = e.settings, I = O.touchAngle, R = O.touchRatio, S = O.classes, N = this.touches(w), M = Ze(N.pageX) - s, z = Ze(N.pageY) - d, V = Math.abs(M << 2), U = Math.abs(z << 2), L = Math.sqrt(V + U), Z = Math.sqrt(U);
        if (o = Math.asin(Z / L), o * 180 / Math.PI < I)
          w.stopPropagation(), t.Move.make(M * Ic(R)), t.Html.root.classList.add(S.dragging), r.emit("swipe.move");
        else
          return !1;
      }
    },
    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function(w) {
      if (!e.disabled) {
        var O = e.settings, I = O.perSwipe, R = O.touchAngle, S = O.classes, N = this.touches(w), M = this.threshold(w), z = N.pageX - s, V = o * 180 / Math.PI;
        this.enable(), z > M && V < R ? t.Run.make(t.Direction.resolve("".concat(I, "<"))) : z < -M && V < R ? t.Run.make(t.Direction.resolve("".concat(I, ">"))) : t.Move.make(), t.Html.root.classList.remove(S.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), r.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var w = this, O = e.settings, I = O.swipeThreshold, R = O.dragThreshold;
      I && n.on(kn[0], t.Html.wrapper, function(S) {
        w.start(S);
      }, p), R && n.on(kn[1], t.Html.wrapper, function(S) {
        w.start(S);
      }, p);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      n.off(kn[0], t.Html.wrapper, p), n.off(kn[1], t.Html.wrapper, p);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var w = this;
      n.on(aa, t.Html.wrapper, Gn(function(O) {
        w.move(O);
      }, e.settings.throttle), p);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      n.off(aa, t.Html.wrapper, p);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var w = this;
      n.on(sa, t.Html.wrapper, function(O) {
        w.end(O);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      n.off(sa, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(w) {
      return la.indexOf(w.type) > -1 ? w : w.touches[0] || w.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(w) {
      var O = e.settings;
      return la.indexOf(w.type) > -1 ? O.dragThreshold : O.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return g = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return g = !0, t.Transition.disable(), this;
    }
  };
  return r.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), r.on("destroy", function() {
    h.unbindSwipeStart(), h.unbindSwipeMove(), h.unbindSwipeEnd(), n.destroy();
  }), h;
}
function sd(e, t, r) {
  var n = new cr(), o = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function() {
      this.bind();
    },
    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("dragstart", t.Html.wrapper);
    },
    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function(d) {
      d.preventDefault();
    }
  };
  return r.on("destroy", function() {
    o.unbind(), n.destroy();
  }), o;
}
function ld(e, t, r) {
  var n = new cr(), o = !1, s = !1, d = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function() {
      this._a = t.Html.wrapper.querySelectorAll("a"), this.bind();
    },
    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(p) {
      s && (p.stopPropagation(), p.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (s = !0, !o) {
        for (var p = 0; p < this.items.length; p++)
          this.items[p].draggable = !1;
        o = !0;
      }
      return this;
    },
    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function() {
      if (s = !1, o) {
        for (var p = 0; p < this.items.length; p++)
          this.items[p].draggable = !0;
        o = !1;
      }
      return this;
    }
  };
  return Le(d, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return d._a;
    }
  }), r.on("swipe.move", function() {
    d.detach();
  }), r.on("swipe.end", function() {
    t.Transition.after(function() {
      d.attach();
    });
  }), r.on("destroy", function() {
    d.attach(), d.unbind(), n.destroy();
  }), d;
}
var ud = '[data-glide-el="controls[nav]"]', Qi = '[data-glide-el^="controls"]', cd = "".concat(Qi, ' [data-glide-dir*="<"]'), dd = "".concat(Qi, ' [data-glide-dir*=">"]');
function fd(e, t, r) {
  var n = new cr(), o = Mi ? {
    passive: !0
  } : !1, s = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(ud), this._c = t.Html.root.querySelectorAll(Qi), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(cd),
        next: t.Html.root.querySelectorAll(dd)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.addClass(this._n[g].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var g = 0; g < this._n.length; g++)
        this.removeClass(this._n[g].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(g) {
      var p = e.settings, h = g[e.index];
      h && (h.classList.add(p.classes.nav.active), es(h).forEach(function(x) {
        x.classList.remove(p.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(g) {
      var p = g[e.index];
      p == null || p.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var g = s._arrowControls.next, p = s._arrowControls.previous;
        this.resetArrowState(g, p), e.index === 0 && this.disableArrow(p), e.index === t.Run.length && this.disableArrow(g);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var g = e.settings, p = arguments.length, h = new Array(p), x = 0; x < p; x++)
        h[x] = arguments[x];
      h.forEach(function(w) {
        Li(w).forEach(function(O) {
          O.classList.remove(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var g = e.settings, p = arguments.length, h = new Array(p), x = 0; x < p; x++)
        h[x] = arguments[x];
      h.forEach(function(w) {
        Li(w).forEach(function(O) {
          O.classList.add(g.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.bind(this._c[g].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var g = 0; g < this._c.length; g++)
        this.unbind(this._c[g].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(g) {
      for (var p = 0; p < g.length; p++)
        n.on("click", g[p], this.click), n.on("touchstart", g[p], this.click, o);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(g) {
      for (var p = 0; p < g.length; p++)
        n.off(["click", "touchstart"], g[p]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(g) {
      !Mi && g.type === "touchstart" && g.preventDefault();
      var p = g.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(p));
    }
  };
  return Le(s, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return s._c;
    }
  }), r.on(["mount.after", "move.after"], function() {
    s.setActive();
  }), r.on(["mount.after", "run"], function() {
    s.setArrowState();
  }), r.on("destroy", function() {
    s.removeBindings(), s.removeActive(), n.destroy();
  }), s;
}
function pd(e, t, r) {
  var n = new cr(), o = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function() {
      e.settings.keyboard && this.bind();
    },
    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function() {
      n.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      n.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(d) {
      var g = e.settings.perSwipe, p = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(d.code) && t.Run.make(t.Direction.resolve("".concat(g).concat(p[d.code])));
    }
  };
  return r.on(["destroy", "update"], function() {
    o.unbind();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function hd(e, t, r) {
  var n = new cr(), o = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function() {
      this.enable(), this.start(), e.settings.hoverpause && this.bind();
    },
    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function() {
      this._e = !0;
    },
    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function() {
      this._e = !1;
    },
    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function() {
      var d = this;
      this._e && (this.enable(), e.settings.autoplay && Qa(this._i) && (this._i = setInterval(function() {
        d.stop(), t.Run.make(">"), d.start(), r.emit("autoplay");
      }, this.time)));
    },
    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function() {
      this._i = clearInterval(this._i);
    },
    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function() {
      var d = this;
      n.on("mouseover", t.Html.root, function() {
        d._e && d.stop();
      }), n.on("mouseout", t.Html.root, function() {
        d._e && d.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      n.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return Le(o, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var d = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return Ze(d || e.settings.autoplay);
    }
  }), r.on(["destroy", "update"], function() {
    o.unbind();
  }), r.on(["run.before", "swipe.start", "update"], function() {
    o.stop();
  }), r.on(["pause", "destroy"], function() {
    o.disable(), o.stop();
  }), r.on(["run.after", "swipe.end"], function() {
    o.start();
  }), r.on(["play"], function() {
    o.enable(), o.start();
  }), r.on("update", function() {
    o.mount();
  }), r.on("destroy", function() {
    n.destroy();
  }), o;
}
function ua(e) {
  return Mr(e) ? Mc(e) : (Jt("Breakpoints option must be an object"), {});
}
function md(e, t, r) {
  var n = new cr(), o = e.settings, s = ua(o.breakpoints), d = Object.assign({}, o), g = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(h) {
      if (typeof window.matchMedia < "u") {
        for (var x in h)
          if (h.hasOwnProperty(x) && window.matchMedia("(max-width: ".concat(x, "px)")).matches)
            return h[x];
      }
      return d;
    }
  };
  return Object.assign(o, g.match(s)), n.on("resize", window, Gn(function() {
    e.settings = Ii(o, g.match(s));
  }, e.settings.throttle)), r.on("update", function() {
    s = ua(s), d = Object.assign({}, o);
  }), r.on("destroy", function() {
    n.off("resize", window);
  }), g;
}
var gd = {
  // Required
  Html: Hc,
  Translate: id,
  Transition: od,
  Direction: Zc,
  Peek: Wc,
  Sizes: Uc,
  Gaps: Bc,
  Move: Vc,
  Clones: Yc,
  Resize: Gc,
  Build: qc,
  Run: $c,
  // Optional
  Swipe: ad,
  Images: sd,
  Anchors: ld,
  Controls: fd,
  Keyboard: pd,
  Autoplay: hd,
  Breakpoints: md
}, vd = /* @__PURE__ */ function(e) {
  Cc(r, e);
  var t = jc(r);
  function r() {
    return qn(this, r), t.apply(this, arguments);
  }
  return Yn(r, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return An(Lr(r.prototype), "mount", this).call(this, Object.assign({}, gd, o));
    }
  }]), r;
}(Fc);
function yd(e) {
  let t, r, n;
  switch (e) {
    case 3:
      t = 1, r = 2, n = 3;
      break;
    case 2:
      t = 1, r = 2, n = 2;
      break;
    case 1:
    default:
      t = 1, r = 1, n = 1;
  }
  return {
    perViewSm: t,
    perViewMd: r,
    perViewLg: n
  };
}
function bd(e = 1, t, r = !0, n) {
  const { perViewSm: o, perViewMd: s, perViewLg: d } = yd(e), g = r ? 24 : 0, p = r ? { before: 48, after: 48 } : 0, h = r ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: g,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: n ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: d,
    // Can be overwritten at breakpoints
    peek: h,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: o,
        peek: p
      },
      768: {
        // BS4 md
        perView: s,
        peek: p
      },
      992: {
        // BS4 lg
        perView: d,
        peek: p
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: p
      },
      1400: {
        perView: d,
        peek: h
      },
      1920: {
        perView: d,
        peek: h
      }
    }
  };
}
function xd(e, t, r) {
  const n = e.querySelector(".glide__arrow--prev"), o = e.querySelector(".glide__arrow--next"), s = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(n || o)) return;
  const g = ["slider-start", "slider-mid", "slider-end"], p = "glide__arrow--disabled";
  s == null || s.classList.remove(...g), d == null || d.classList.remove(...g), t === 0 ? (s == null || s.classList.add("slider-start"), d == null || d.classList.add("slider-start"), n == null || n.classList.add(p), n == null || n.setAttribute("aria-disabled", "true"), o == null || o.classList.remove(p), o == null || o.setAttribute("aria-disabled", "false")) : t >= r - 1 ? (s == null || s.classList.add("slider-end"), d == null || d.classList.add("slider-end"), n == null || n.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.classList.add(p), o == null || o.setAttribute("aria-disabled", "true")) : (s == null || s.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), n == null || n.classList.remove(p), o == null || o.classList.remove(p), n == null || n.setAttribute("aria-disabled", "false"), o == null || o.setAttribute("aria-disabled", "false"));
}
function wd(e, t, r) {
  const n = e.querySelectorAll(".glide__slide"), o = t, s = Math.min(
    n.length - 1,
    t + r - 1
  );
  n.forEach((d, g) => {
    g < o || g > s ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function Sd({
  instanceName: e,
  perView: t,
  buttonCount: r,
  isFullWidth: n = !1,
  onItemClick: o,
  hasPeek: s = !0,
  isDraggable: d
}) {
  const g = bd(t, n, s, d), p = new vd(`#${e}`, g);
  let h = document.querySelector(`#${e}`);
  return h.addEventListener("keyup", (x) => {
    const w = x;
    w.keyCode === 39 ? p.go(">") : w.keyCode === 37 ? p.go("<") : w.keyCode === 13 && p.go(document.activeElement.dataset.glideDir);
  }), p.on("build.before", () => {
    h = document.querySelector(`#${e}`), h && h.classList.add("slider-start");
  }), p.on("move", () => {
    if (h = document.querySelector(`#${e}`), !h) return;
    const x = p.index;
    wd(h, x, t);
    const w = h.querySelector(".navigation-slider"), O = h.querySelector(".image-navigator-images");
    if (w && O) {
      const I = w.querySelectorAll(
        ".bullet-image-container"
      ), R = w.clientWidth, S = 82, N = I[x], M = O.getBoundingClientRect().x, z = w.getBoundingClientRect().x - M, V = N.getBoundingClientRect().x - M, U = N.getBoundingClientRect().x + N.getBoundingClientRect().width - M;
      if (x === 0 || V <= 0 + S)
        w.style.left = `${z - V + S}px`;
      else if (U >= R - S) {
        const L = U - R;
        w.style.left = `${z - L - S}px`;
      }
    }
    xd(h, x, r), h.setAttribute("data-current-index", x), o && o(x);
  }), p.mount(), p;
}
function kd(e, t) {
  let r;
  const n = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return r = e, n >= 992 && (t >= 2 && (r = e - 1), t >= 3 && (r = e - 2)), r;
}
const en = ({
  perView: e = 1,
  width: t,
  maxWidth: r,
  carouselItems: n,
  cssClass: o = "",
  CustomNavComponent: s,
  role: d,
  ariaLabelledBy: g,
  isFullWidth: p,
  removeSideBackground: h = !1,
  hasNavButtons: x = !0,
  hasPositionIndicators: w = !0,
  imageAutoSize: O = !0,
  onItemClick: I = () => null,
  hasPeek: R = !0,
  isDraggable: S = !0,
  hasShadow: N = !0
}) => {
  const M = `glide-${Math.ceil(Math.random() * 1e4)}`, z = kd(n.length, e);
  return ot(() => {
    Sd({
      instanceName: M,
      perView: e,
      buttonCount: z,
      isFullWidth: p,
      onItemClick: I,
      hasPeek: R,
      isDraggable: S
    });
  }, [
    M,
    e,
    z,
    p,
    I,
    R,
    S
  ]), /* @__PURE__ */ f.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": g,
      className: `glide ${o}`,
      id: M,
      style: { width: t, maxWidth: r },
      "data-remove-side-background": h,
      "data-image-auto-size": O,
      "data-has-shadow": N,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ f.jsx(Ja, { carouselItems: n }) }),
        s ? (
          // @ts-ignore
          /* @__PURE__ */ f.jsx(s, { instanceName: M })
        ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          w && /* @__PURE__ */ f.jsx(Xa, { buttonCount: z }),
          x && /* @__PURE__ */ f.jsx(Za, {})
        ] })
      ]
    }
  );
};
en.propTypes = {
  perView: l.number,
  width: l.string,
  maxWidth: l.string,
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object).isRequired,
  cssClass: l.string,
  CustomNavComponent: l.func,
  role: l.string,
  ariaLabelledBy: l.string,
  onItemClick: l.func,
  isFullWidth: l.bool,
  removeSideBackground: l.bool,
  hasNavButtons: l.bool,
  hasPositionIndicators: l.bool,
  imageAutoSize: l.bool,
  hasPeek: l.bool,
  isDraggable: l.bool,
  hasShadow: l.bool
};
const Td = ({
  id: e,
  imageSource: t,
  imageAltText: r,
  title: n,
  content: o,
  eventLocation: s,
  eventTime: d,
  buttons: g,
  linkLabel: p,
  linkUrl: h,
  tags: x
}, w, O, I) => {
  var R;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ f.jsx(
      Kt,
      {
        type: w,
        horizontal: O,
        image: t,
        imageAltText: r,
        title: n,
        body: o,
        eventFormat: I,
        eventLocation: s,
        eventTime: d,
        buttons: g,
        linkLabel: p,
        linkUrl: h || ((R = g == null ? void 0 : g[0]) == null ? void 0 : R.href),
        tags: x
      }
    )
  };
}, rs = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: r = "default",
  cardEventFormat: n = "stack",
  cardHorizontal: o = !1,
  width: s = void 0,
  maxWidth: d = void 0,
  imageAutoSize: g = !0
}) => {
  const p = parseInt(`${e}`, 10), [h, x] = Ge(p), w = 1024, O = 768;
  ot(() => {
    const S = () => {
      const N = window.innerWidth;
      let M;
      switch (p) {
        case 3:
          N > w ? M = 3 : N > O ? M = 2 : M = 1;
          break;
        case 2:
          M = N < O ? 1 : 2;
          break;
        default:
          M = 1;
          break;
      }
      x(M);
    };
    return S(), window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [p]);
  const I = t.map(
    (S) => Td(S, r, o, n)
  ), R = t.length > h;
  return /* @__PURE__ */ f.jsx(
    en,
    {
      perView: +h,
      maxWidth: d,
      width: s,
      carouselItems: I,
      cssClass: "aligned-carousel",
      imageAutoSize: g,
      removeSideBackground: t.length <= h,
      hasPositionIndicators: R,
      hasNavButtons: R,
      isDraggable: R,
      hasShadow: !0
    }
  );
};
rs.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: Kt.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: Kt.propTypes.tags
    })
  ).isRequired,
  cardType: Kt.propTypes.type,
  cardEventFormat: Kt.propTypes.eventFormat,
  cardHorizontal: Kt.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const _d = ({ id: e, imageSource: t, imageAltText: r, title: n, content: o }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx("div", { className: "uds-img", children: /* @__PURE__ */ f.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ f.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: r,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (n || o) && /* @__PURE__ */ f.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ f.jsx("div", { className: "uds-caption-text", children: n ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx("h3", { children: n }),
          /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: { __html: o } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: { __html: o } })
        ) })
      }
    )
  ] }) })
}), ns = ({
  perView: e = 0,
  imageItems: t = [],
  width: r = void 0,
  maxWidth: n = void 0,
  imageAutoSize: o = !0
}) => {
  if (!t || t.length === 0)
    return null;
  const s = parseInt(`${e}`, 10), d = t.map(_d) || [], g = t.length > s;
  return /* @__PURE__ */ f.jsx(
    en,
    {
      perView: +s,
      maxWidth: n,
      width: r,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: d,
      imageAutoSize: o,
      removeSideBackground: t.length <= s,
      hasPositionIndicators: g,
      hasNavButtons: g,
      isDraggable: g,
      hasShadow: !0
    }
  );
};
ns.propTypes = {
  perView: l.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: l.arrayOf(l.object).isRequired,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Ed = (e, t) => {
  if (!e)
    return 0;
  const r = (e.match(/<br/g) || []).length, n = t / 6;
  return (parseInt(`${e.length / n}`, 10) + r) * 20;
}, $n = {
  imageItems: l.arrayOf(
    l.shape({
      id: l.number,
      imageSource: l.string,
      thumbnailSource: l.string,
      imageAltText: l.string,
      content: l.oneOfType([l.string, l.element])
    })
  ),
  hasContent: l.bool
}, Cd = ({ id: e, imageSource: t, imageAltText: r }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx("div", { className: "uds-img", children: /* @__PURE__ */ f.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: r,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), is = ({ instanceName: e, imageItems: t, hasContent: r }) => {
  if (!t || t.length === 0)
    return null;
  const n = "data-current-index", [o, s] = Ge(t[0].title), [d, g] = Ge(t[0].content), p = (x) => {
    const w = t[x];
    s(w.title), g(w.content);
  };
  ot(() => {
    const x = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (x) {
      const R = parseInt(
        window.getComputedStyle(x, null).getPropertyValue("width").split("px")[0],
        10
      ), S = t.reduce((N, M) => {
        const z = Ed(M.content, R);
        return z > N ? z : N;
      }, 0);
      x.style.height = `${S}px`;
    }
    const w = document.querySelector(`#${e}`);
    function O(R) {
      for (const S of R)
        if (S && S.attributeName === n)
          return p(+w.getAttribute(n));
      return null;
    }
    new MutationObserver(O).observe(w, {
      attributes: !0
    });
  }, [e]);
  const h = t.map((x) => x.imageSource);
  return /* @__PURE__ */ f.jsxs("div", { className: "image-gallery-action-area", "data-has-content": r, children: [
    /* @__PURE__ */ f.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ f.jsxs(Ji, { children: [
      /* @__PURE__ */ f.jsx(Zi, {}),
      /* @__PURE__ */ f.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ f.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ f.jsx(
        Ka,
        {
          imageItems: h,
          onItemClick: (x) => p(x)
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(Ki, {})
    ] }) }),
    r && (o || d) ? /* @__PURE__ */ f.jsx(
      "figcaption",
      {
        id: "caption",
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-gallery-content-container",
        children: /* @__PURE__ */ f.jsxs("div", { className: "uds-caption-text", children: [
          o ? /* @__PURE__ */ f.jsx("h3", { children: o }) : null,
          /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: { __html: d } })
        ] })
      }
    ) : null
  ] });
};
is.propTypes = {
  instanceName: l.string,
  imageItems: $n.imageItems,
  hasContent: $n.hasContent
};
const os = ({
  width: e,
  maxWidth: t,
  imageItems: r = [],
  hasContent: n = !1,
  imageAutoSize: o = !0
}) => {
  const s = r.map(Cd), d = r.length > 1;
  return /* @__PURE__ */ f.jsx(
    en,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: s,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: n ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: o,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: g }) => /* @__PURE__ */ f.jsx(
        is,
        {
          instanceName: g,
          hasContent: n,
          imageItems: r
        }
      ),
      removeSideBackground: r.length <= 1,
      hasPositionIndicators: d,
      hasNavButtons: d,
      isDraggable: d,
      hasShadow: !0
    }
  );
};
os.propTypes = {
  imageItems: $n.imageItems.isRequired,
  hasContent: $n.hasContent,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Rd = ({ id: e, imageSource: t, imageAltText: r, quote: n }, o = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx(
    Gi,
    {
      imageSource: t,
      imageAltText: r,
      quote: n,
      itemStyle: o
    }
  )
}), as = ({
  width: e,
  maxWidth: t,
  testimonialItems: r = [],
  itemStyle: n = {},
  hasNavButtons: o = !1,
  hasPositionIndicators: s = !1,
  imageAutoSize: d = !0
}) => {
  const g = r.map(
    (p) => Rd(p, n)
  );
  return /* @__PURE__ */ f.jsx(
    en,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: g,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: o,
      hasPositionIndicators: s,
      imageAutoSize: d,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
as.propTypes = {
  testimonialItems: l.arrayOf(
    l.shape({
      title: l.string,
      content: l.string,
      cite: l.shape({
        name: l.string,
        description: l.string
      })
    })
  ).isRequired,
  itemStyle: l.shape({
    containerCssClass: l.arrayOf(l.string),
    titleCssClass: l.arrayOf(l.string),
    contentCssClass: l.arrayOf(l.string)
  }),
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool,
  hasNavButtons: l.bool,
  hasPositionIndicators: l.bool
};
var Dt = /* @__PURE__ */ ((e) => (e.UNORDERED = "unordered", e.ORDERED = "ordered", e.ICON = "icon", e.STEP = "step", e.DISPLAY = "display", e))(Dt || {}), jn = /* @__PURE__ */ ((e) => (e.UL = "ul", e.OL = "ol", e))(jn || {}), _r = /* @__PURE__ */ ((e) => (e.NONE = "none", e.LIGHT = "light", e.MEDIUM = "medium", e.DARK = "dark", e))(_r || {}), Nn = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.PRIMARY = "primary", e.SECONDARY = "secondary", e))(Nn || {});
const ss = (e) => {
  switch (e) {
    case jn.OL:
    case Dt.ORDERED:
    case Dt.STEP:
      return jn.OL;
    default:
      return jn.UL;
  }
}, ls = ({
  listType: e,
  content: t,
  icon: r,
  nestedType: n,
  nestedItems: o
}) => {
  const [s, ...d] = Array.isArray(t) ? t : [t];
  let g = null;
  if (o != null && o.length) {
    const p = n || e, h = ss(p);
    g = /* @__PURE__ */ f.jsx(h, { children: o.map((x, w) => /* @__PURE__ */ f.jsx(ls, { listType: p, ...x }, w)) });
  }
  return /* @__PURE__ */ f.jsxs("li", { children: [
    r && /* @__PURE__ */ f.jsx("span", { className: `fa-li ${r == null ? void 0 : r[0]} fa-${r == null ? void 0 : r[1]}` }),
    s,
    " ",
    d.map((p, h) => [/* @__PURE__ */ f.jsx("br", {}, `br-${h}`), /* @__PURE__ */ f.jsx("span", { children: p }, h)]),
    g
  ] });
}, Od = ({
  listType: e = Dt.UNORDERED,
  backgroundColor: t = _r.NONE,
  listItemStyleColor: r = Nn.DEFAULT,
  items: n
}) => {
  const o = ss(e);
  let s = "maroon", d = "maroon";
  t === _r.DARK && (s = "gold", d = "gold"), e === Dt.STEP && (s = "uds-steplist-maroon", d = "uds-steplist-gold", t === _r.DARK && (s = "uds-steplist-gold"));
  const g = be({
    "uds-list": e === Dt.UNORDERED || e === Dt.ORDERED,
    "uds-list fa-ul": e === Dt.ICON,
    "uds-list uds-steplist": e === Dt.STEP,
    "uds-list uds-display-list": e === Dt.DISPLAY,
    "light-smokemode": t === _r.LIGHT,
    smokemode: t === _r.MEDIUM,
    darkmode: t === _r.DARK,
    [`${s}`]: r === Nn.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${d}`]: r === Nn.SECONDARY
  });
  return /* @__PURE__ */ f.jsx(o, { className: g || null, children: n.map((p, h) => /* @__PURE__ */ f.jsx(ls, { listType: e, ...p }, h)) });
}, Ad = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, jd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Nd = ({
  gridLinkItems: e,
  numColumns: t,
  textColor: r,
  children: n
}) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        t,
        Ad[r]
      ].join(" "),
      children: e && e.map((o) => /* @__PURE__ */ f.jsx(
        Je,
        {
          gaData: {
            ...jd,
            text: o.label,
            section: `grid links ${o.label}`
          },
          children: /* @__PURE__ */ f.jsxs("a", { href: o.href, children: [
            /* @__PURE__ */ f.jsx("span", { className: `fa fa-fw ${o.icon}` }),
            o.label
          ] })
        },
        o.label + o.href
      ))
    }
  ),
  /* @__PURE__ */ f.jsx("div", { children: n })
] });
var eo, ca = Ts;
eo = ca.createRoot, ca.hydrateRoot;
const Pd = (e, t, r) => {
  eo(r).render(Fe.createElement(e, t));
}, Xn = ({ typeCarousel: e, targetSelector: t, props: r }) => {
  const o = {
    card: rs,
    testimonial: as,
    image: ns,
    "image-gallery": os
  }[e];
  o && Pd(o, r, document.querySelector(t));
}, Dd = ({ targetSelector: e, props: t }) => Xn({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), Fd = ({ targetSelector: e, props: t }) => {
  Xn({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, $d = ({ targetSelector: e, props: t }) => {
  Xn({ typeCarousel: "image", targetSelector: e, props: t });
}, Bd = ({ targetSelector: e, props: t }) => {
  Xn({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, Ye = (e, t, r) => {
  eo(r).render(Fe.createElement(e, t));
}, zd = ({ targetSelector: e, props: t }) => Ye(Sa, t, document.querySelector(e)), Hd = ({ targetSelector: e, props: t }) => Ye(Ma, t, document.querySelector(e)), Wd = ({ targetSelector: e, props: t }) => Ye(Vi, t, document.querySelector(e)), Vd = ({ targetSelector: e, props: t }) => Ye(lr, t, document.querySelector(e)), Ud = ({ targetSelector: e, props: t }) => Ye(Vn, t, document.querySelector(e)), qd = ({ targetSelector: e, props: t }) => Ye(Un, t, document.querySelector(e)), Yd = ({ targetSelector: e, props: t }) => Ye(Kt, t, document.querySelector(e)), Gd = ({ targetSelector: e, props: t }) => Ye(Nd, t, document.querySelector(e)), Xd = ({ targetSelector: e, props: t }) => Ye(za, t, document.querySelector(e)), Kd = ({ targetSelector: e, props: t }) => Ye(Ir, t, document.querySelector(e)), Zd = ({ targetSelector: e, props: t }) => Ye(Yi, t, document.querySelector(e)), Jd = ({ targetSelector: e, props: t }) => Ye(Va, t, document.querySelector(e)), Qd = ({ targetSelector: e, props: t }) => Ye(Ya, t, document.querySelector(e)), ef = ({ targetSelector: e, props: t }) => Ye(Gi, t, document.querySelector(e)), tf = ({ targetSelector: e, props: t }) => Ye(Ga, t, document.querySelector(e)), rf = ({ targetSelector: e, props: t }) => Ye(mc, t, document.querySelector(e)), nf = ({ targetSelector: e, props: t }) => Ye(Ju, t, document.querySelector(e)), of = ({ targetSelector: e, props: t }) => Ye(xc, t, document.querySelector(e)), af = ({ targetSelector: e, props: t }) => Ye(Od, t, document.querySelector(e));
export {
  Sa as Accordion,
  Ma as AnchorMenu,
  Vi as Article,
  lr as Button,
  Vn as ButtonIconOnly,
  Un as ButtonTag,
  Kt as Card,
  rs as CardCarousel,
  Ju as Divider,
  Zu as DividerType,
  lc as FeedBody,
  nc as FeedContainerProvider,
  rc as FeedContext,
  sc as FeedHeader,
  Nd as GridLinks,
  za as Hero,
  Ir as Image,
  ns as ImageCarousel,
  os as ImageGalleryCarousel,
  Od as List,
  Ua as NavControls,
  Yi as Pagination,
  Va as RankingCard,
  mc as SystemAlert,
  hc as SystemAlertType,
  yc as Tab,
  qa as TabHeader,
  Ya as TabbedPanels,
  Gi as Testimonial,
  as as TestimonialCarousel,
  xc as Tooltip,
  Ga as Video,
  Md as feedCardButtonShape,
  oc as feedComponentShape,
  Ba as feedCtaButtonShape,
  ic as feedDataSourceShape,
  $a as feedHeaderShape,
  zd as initAccordion,
  Hd as initAnchorMenu,
  Wd as initArticle,
  Vd as initButton,
  Ud as initButtonIconOnly,
  qd as initButtonTag,
  Yd as initCard,
  Dd as initCardCarousel,
  nf as initDivider,
  Gd as initGridLinks,
  Xd as initHero,
  Kd as initImage,
  $d as initImageCarousel,
  Bd as initImageGalleryCarousel,
  af as initList,
  Zd as initPagination,
  Jd as initRankingCard,
  rf as initSystemAlert,
  Qd as initTabbedPanels,
  ef as initTestimonial,
  Fd as initTestimonialCarousel,
  of as initTooltip,
  tf as initVideo
};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

(function() {
                var css = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`;
                var style = document.createElement('style');
                style.type = 'text/css';
                if (style.styleSheet) {
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                document.head.appendChild(style);
              })();