import $e, { useState as Ke, useEffect as lt, useId as cs, useContext as Li, createElement as Ta, useRef as wn, Component as _a, forwardRef as us, createContext as Ea, useImperativeHandle as Ca, useCallback as Ra } from "react";
import Oa from "react-dom";
function Mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ds = { exports: {} }, Yn = {};
var mo;
function Aa() {
  if (mo) return Yn;
  mo = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, p) {
    var b, w = {}, R = null, M = null;
    p !== void 0 && (R = "" + p), h.key !== void 0 && (R = "" + h.key), h.ref !== void 0 && (M = h.ref);
    for (b in h) r.call(h, b) && !a.hasOwnProperty(b) && (w[b] = h[b]);
    if (m && m.defaultProps) for (b in h = m.defaultProps, h) w[b] === void 0 && (w[b] = h[b]);
    return { $$typeof: t, type: m, key: R, ref: M, props: w, _owner: o.current };
  }
  return Yn.Fragment = n, Yn.jsx = d, Yn.jsxs = d, Yn;
}
ds.exports = Aa();
var f = ds.exports, fs = { exports: {} }, ni, go;
function ja() {
  if (go) return ni;
  go = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ni = e, ni;
}
var ri, vo;
function Na() {
  if (vo) return ri;
  vo = 1;
  var e = ja();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, ri = function() {
    function r(d, m, h, p, b, w) {
      if (w !== e) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ri;
}
fs.exports = Na()();
var Ia = fs.exports;
const l = /* @__PURE__ */ Mi(Ia), Pa = l.shape({
  url: l.string,
  altText: l.string,
  cssClass: l.arrayOf(l.string),
  size: l.oneOf(["small", "medium", "large"])
}), ii = l.shape({
  text: l.string,
  maxWidth: l.string,
  cssClass: l.arrayOf(l.string),
  highlightColor: l.oneOf(["gold", "black"])
}), ps = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  content: l.shape({
    icon: l.arrayOf(l.string),
    header: l.string,
    body: l.string
  })
}), Di = l.shape({
  text: l.string,
  name: l.string,
  event: l.string,
  action: l.string,
  type: l.string,
  region: l.string,
  section: l.string,
  component: l.string
});
var hs = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = "", d = 0; d < arguments.length; d++) {
        var m = arguments[d];
        m && (a = o(a, r(m)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var d = "";
      for (var m in a)
        t.call(a, m) && a[m] && (d = o(d, m));
      return d;
    }
    function o(a, d) {
      return d ? a ? a + " " + d : a + d : a;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(hs);
var La = hs.exports;
const be = /* @__PURE__ */ Mi(La), Ma = () => {
  const [e, t] = Ke(), [n, r] = Ke(!1), [o, a] = Ke(!1), [d, m] = Ke("");
  return lt(() => {
    if (!d) return;
    (() => {
      a(null), r(!0);
      try {
        fetch(d).then((p) => p.json()).then((p) => {
          t(p), r(!1);
        }).catch((p) => {
          a(p), r(!1);
        });
      } catch (p) {
        a(p);
      }
    })();
  }, [d]), [{ data: e, loading: n, error: o }, m];
};
function Da(e) {
  const [t, n] = Ke(!1);
  return lt(() => {
    const r = window.matchMedia(e);
    r.matches !== t && n(r.matches);
    const o = () => {
      n(r.matches);
    };
    return r.addEventListener("change", o), () => r.removeEventListener("change", o);
  }, [t, e]), t;
}
const yo = (e, t, n) => e ? t : n, Cr = (e) => (e || []).join(" ");
const {
  entries: ms,
  setPrototypeOf: xo,
  isFrozen: Fa,
  getPrototypeOf: $a,
  getOwnPropertyDescriptor: Ba
} = Object;
let {
  freeze: ct,
  seal: bt,
  create: gs
} = Object, {
  apply: pi,
  construct: hi
} = typeof Reflect < "u" && Reflect;
ct || (ct = function(t) {
  return t;
});
bt || (bt = function(t) {
  return t;
});
pi || (pi = function(t, n, r) {
  return t.apply(n, r);
});
hi || (hi = function(t, n) {
  return new t(...n);
});
const br = ut(Array.prototype.forEach), za = ut(Array.prototype.lastIndexOf), bo = ut(Array.prototype.pop), Xn = ut(Array.prototype.push), Ha = ut(Array.prototype.splice), Rr = ut(String.prototype.toLowerCase), oi = ut(String.prototype.toString), wo = ut(String.prototype.match), Gn = ut(String.prototype.replace), Wa = ut(String.prototype.indexOf), Va = ut(String.prototype.trim), At = ut(Object.prototype.hasOwnProperty), at = ut(RegExp.prototype.test), Kn = Ua(TypeError);
function ut(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return pi(e, t, r);
  };
}
function Ua(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return hi(e, n);
  };
}
function me(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rr;
  xo && xo(e, null);
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Fa(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function qa(e) {
  for (let t = 0; t < e.length; t++)
    At(e, t) || (e[t] = null);
  return e;
}
function yn(e) {
  const t = gs(null);
  for (const [n, r] of ms(e))
    At(e, n) && (Array.isArray(r) ? t[n] = qa(r) : r && typeof r == "object" && r.constructor === Object ? t[n] = yn(r) : t[n] = r);
  return t;
}
function Zn(e, t) {
  for (; e !== null; ) {
    const r = Ba(e, t);
    if (r) {
      if (r.get)
        return ut(r.get);
      if (typeof r.value == "function")
        return ut(r.value);
    }
    e = $a(e);
  }
  function n() {
    return null;
  }
  return n;
}
const So = ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), si = ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ai = ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ya = ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), li = ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Xa = ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ko = ct(["#text"]), To = ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ci = ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), _o = ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), wr = ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ga = bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ka = bt(/<%[\w\W]*|[\w\W]*%>/gm), Za = bt(/\$\{[\w\W]*/gm), Ja = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Qa = bt(/^aria-[\-\w]+$/), vs = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), el = bt(/^(?:\w+script|data):/i), tl = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ys = bt(/^html$/i), nl = bt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Eo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Qa,
  ATTR_WHITESPACE: tl,
  CUSTOM_ELEMENT: nl,
  DATA_ATTR: Ja,
  DOCTYPE_NAME: ys,
  ERB_EXPR: Ka,
  IS_ALLOWED_URI: vs,
  IS_SCRIPT_OR_DATA: el,
  MUSTACHE_EXPR: Ga,
  TMPLIT_EXPR: Za
});
const Jn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, rl = function() {
  return typeof window > "u" ? null : window;
}, il = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (r = n.getAttribute(o));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(a, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Co = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function xs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rl();
  const t = (G) => xs(G);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Jn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const r = n, o = r.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: d,
    Node: m,
    Element: h,
    NodeFilter: p,
    NamedNodeMap: b = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: w,
    DOMParser: R,
    trustedTypes: M
  } = e, O = h.prototype, k = Zn(O, "cloneNode"), N = Zn(O, "remove"), j = Zn(O, "nextSibling"), F = Zn(O, "childNodes"), W = Zn(O, "parentNode");
  if (typeof d == "function") {
    const G = n.createElement("template");
    G.content && G.content.ownerDocument && (n = G.content.ownerDocument);
  }
  let V, L = "";
  const {
    implementation: Q,
    createNodeIterator: ae,
    createDocumentFragment: Ce,
    getElementsByTagName: De
  } = n, {
    importNode: ze
  } = r;
  let K = Co();
  t.isSupported = typeof ms == "function" && typeof W == "function" && Q && Q.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ne,
    ERB_EXPR: Pe,
    TMPLIT_EXPR: Be,
    DATA_ATTR: Re,
    ARIA_ATTR: ft,
    IS_SCRIPT_OR_DATA: Ze,
    ATTR_WHITESPACE: He,
    CUSTOM_ELEMENT: Ue
  } = Eo;
  let {
    IS_ALLOWED_URI: dt
  } = Eo, xe = null;
  const Y = me({}, [...So, ...si, ...ai, ...li, ...ko]);
  let B = null;
  const q = me({}, [...To, ...ci, ..._o, ...wr]);
  let U = Object.seal(gs(null, {
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
  })), A = null, de = null, z = !0, he = !0, ie = !1, oe = !0, J = !1, fe = !0, ve = !1, le = !1, Oe = !1, ce = !1, Te = !1, Ye = !1, Ae = !0, vt = !1;
  const Xe = "user-content-";
  let we = !0, Z = !1, ye = {}, it = null;
  const wt = me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ge = null;
  const sn = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const kn = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Nt = "http://www.w3.org/1998/Math/MathML", St = "http://www.w3.org/2000/svg", pt = "http://www.w3.org/1999/xhtml";
  let It = pt, an = !1, ln = null;
  const Dn = me({}, [Nt, St, pt], oi);
  let Je = me({}, ["mi", "mo", "mn", "ms", "mtext"]), Pt = me({}, ["annotation-xml"]);
  const qt = me({}, ["title", "style", "font", "a", "script"]);
  let ge = null;
  const Ft = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let je = null, Qe = null;
  const Xt = n.createElement("form"), yt = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Gt = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Qe && Qe === S)) {
      if ((!S || typeof S != "object") && (S = {}), S = yn(S), ge = // eslint-disable-next-line unicorn/prefer-includes
      Ft.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Yt : S.PARSER_MEDIA_TYPE, je = ge === "application/xhtml+xml" ? oi : Rr, xe = At(S, "ALLOWED_TAGS") ? me({}, S.ALLOWED_TAGS, je) : Y, B = At(S, "ALLOWED_ATTR") ? me({}, S.ALLOWED_ATTR, je) : q, ln = At(S, "ALLOWED_NAMESPACES") ? me({}, S.ALLOWED_NAMESPACES, oi) : Dn, Ut = At(S, "ADD_URI_SAFE_ATTR") ? me(yn(kn), S.ADD_URI_SAFE_ATTR, je) : kn, Ge = At(S, "ADD_DATA_URI_TAGS") ? me(yn(sn), S.ADD_DATA_URI_TAGS, je) : sn, it = At(S, "FORBID_CONTENTS") ? me({}, S.FORBID_CONTENTS, je) : wt, A = At(S, "FORBID_TAGS") ? me({}, S.FORBID_TAGS, je) : {}, de = At(S, "FORBID_ATTR") ? me({}, S.FORBID_ATTR, je) : {}, ye = At(S, "USE_PROFILES") ? S.USE_PROFILES : !1, z = S.ALLOW_ARIA_ATTR !== !1, he = S.ALLOW_DATA_ATTR !== !1, ie = S.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = S.SAFE_FOR_TEMPLATES || !1, fe = S.SAFE_FOR_XML !== !1, ve = S.WHOLE_DOCUMENT || !1, ce = S.RETURN_DOM || !1, Te = S.RETURN_DOM_FRAGMENT || !1, Ye = S.RETURN_TRUSTED_TYPE || !1, Oe = S.FORCE_BODY || !1, Ae = S.SANITIZE_DOM !== !1, vt = S.SANITIZE_NAMED_PROPS || !1, we = S.KEEP_CONTENT !== !1, Z = S.IN_PLACE || !1, dt = S.ALLOWED_URI_REGEXP || vs, It = S.NAMESPACE || pt, Je = S.MATHML_TEXT_INTEGRATION_POINTS || Je, Pt = S.HTML_INTEGRATION_POINTS || Pt, U = S.CUSTOM_ELEMENT_HANDLING || {}, S.CUSTOM_ELEMENT_HANDLING && yt(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = S.CUSTOM_ELEMENT_HANDLING.tagNameCheck), S.CUSTOM_ELEMENT_HANDLING && yt(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), J && (he = !1), Te && (ce = !0), ye && (xe = me({}, ko), B = [], ye.html === !0 && (me(xe, So), me(B, To)), ye.svg === !0 && (me(xe, si), me(B, ci), me(B, wr)), ye.svgFilters === !0 && (me(xe, ai), me(B, ci), me(B, wr)), ye.mathMl === !0 && (me(xe, li), me(B, _o), me(B, wr))), S.ADD_TAGS && (xe === Y && (xe = yn(xe)), me(xe, S.ADD_TAGS, je)), S.ADD_ATTR && (B === q && (B = yn(B)), me(B, S.ADD_ATTR, je)), S.ADD_URI_SAFE_ATTR && me(Ut, S.ADD_URI_SAFE_ATTR, je), S.FORBID_CONTENTS && (it === wt && (it = yn(it)), me(it, S.FORBID_CONTENTS, je)), we && (xe["#text"] = !0), ve && me(xe, ["html", "head", "body"]), xe.table && (me(xe, ["tbody"]), delete A.tbody), S.TRUSTED_TYPES_POLICY) {
        if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Kn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = S.TRUSTED_TYPES_POLICY, L = V.createHTML("");
      } else
        V === void 0 && (V = il(M, o)), V !== null && typeof L == "string" && (L = V.createHTML(""));
      ct && ct(S), Qe = S;
    }
  }, Kt = me({}, [...si, ...ai, ...Ya]), Zt = me({}, [...li, ...Xa]), Tn = function(S) {
    let D = W(S);
    (!D || !D.tagName) && (D = {
      namespaceURI: It,
      tagName: "template"
    });
    const X = Rr(S.tagName), _e = Rr(D.tagName);
    return ln[S.namespaceURI] ? S.namespaceURI === St ? D.namespaceURI === pt ? X === "svg" : D.namespaceURI === Nt ? X === "svg" && (_e === "annotation-xml" || Je[_e]) : !!Kt[X] : S.namespaceURI === Nt ? D.namespaceURI === pt ? X === "math" : D.namespaceURI === St ? X === "math" && Pt[_e] : !!Zt[X] : S.namespaceURI === pt ? D.namespaceURI === St && !Pt[_e] || D.namespaceURI === Nt && !Je[_e] ? !1 : !Zt[X] && (qt[X] || !Kt[X]) : !!(ge === "application/xhtml+xml" && ln[S.namespaceURI]) : !1;
  }, ot = function(S) {
    Xn(t.removed, {
      element: S
    });
    try {
      W(S).removeChild(S);
    } catch {
      N(S);
    }
  }, $t = function(S, D) {
    try {
      Xn(t.removed, {
        attribute: D.getAttributeNode(S),
        from: D
      });
    } catch {
      Xn(t.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(S), S === "is")
      if (ce || Te)
        try {
          ot(D);
        } catch {
        }
      else
        try {
          D.setAttribute(S, "");
        } catch {
        }
  }, _n = function(S) {
    let D = null, X = null;
    if (Oe)
      S = "<remove></remove>" + S;
    else {
      const Fe = wo(S, /^[\r\n\t ]+/);
      X = Fe && Fe[0];
    }
    ge === "application/xhtml+xml" && It === pt && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const _e = V ? V.createHTML(S) : S;
    if (It === pt)
      try {
        D = new R().parseFromString(_e, ge);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = Q.createDocument(It, "template", null);
      try {
        D.documentElement.innerHTML = an ? L : _e;
      } catch {
      }
    }
    const We = D.body || D.documentElement;
    return S && X && We.insertBefore(n.createTextNode(X), We.childNodes[0] || null), It === pt ? De.call(D, ve ? "html" : "body")[0] : ve ? D.documentElement : We;
  }, En = function(S) {
    return ae.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Lt = function(S) {
    return S instanceof w && (typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || !(S.attributes instanceof b) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function");
  }, cn = function(S) {
    return typeof m == "function" && S instanceof m;
  };
  function nt(G, S, D) {
    br(G, (X) => {
      X.call(t, S, D, Qe);
    });
  }
  const Jt = function(S) {
    let D = null;
    if (nt(K.beforeSanitizeElements, S, null), Lt(S))
      return ot(S), !0;
    const X = je(S.nodeName);
    if (nt(K.uponSanitizeElement, S, {
      tagName: X,
      allowedTags: xe
    }), S.hasChildNodes() && !cn(S.firstElementChild) && at(/<[/\w]/g, S.innerHTML) && at(/<[/\w]/g, S.textContent) || S.nodeType === Jn.progressingInstruction || fe && S.nodeType === Jn.comment && at(/<[/\w]/g, S.data))
      return ot(S), !0;
    if (!xe[X] || A[X]) {
      if (!A[X] && Mt(X) && (U.tagNameCheck instanceof RegExp && at(U.tagNameCheck, X) || U.tagNameCheck instanceof Function && U.tagNameCheck(X)))
        return !1;
      if (we && !it[X]) {
        const _e = W(S) || S.parentNode, We = F(S) || S.childNodes;
        if (We && _e) {
          const Fe = We.length;
          for (let Se = Fe - 1; Se >= 0; --Se) {
            const st = k(We[Se], !0);
            st.__removalCount = (S.__removalCount || 0) + 1, _e.insertBefore(st, j(S));
          }
        }
      }
      return ot(S), !0;
    }
    return S instanceof h && !Tn(S) || (X === "noscript" || X === "noembed" || X === "noframes") && at(/<\/no(script|embed|frames)/i, S.innerHTML) ? (ot(S), !0) : (J && S.nodeType === Jn.text && (D = S.textContent, br([ne, Pe, Be], (_e) => {
      D = Gn(D, _e, " ");
    }), S.textContent !== D && (Xn(t.removed, {
      element: S.cloneNode()
    }), S.textContent = D)), nt(K.afterSanitizeElements, S, null), !1);
  }, Cn = function(S, D, X) {
    if (Ae && (D === "id" || D === "name") && (X in n || X in Xt))
      return !1;
    if (!(he && !de[D] && at(Re, D))) {
      if (!(z && at(ft, D))) {
        if (!B[D] || de[D]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Mt(S) && (U.tagNameCheck instanceof RegExp && at(U.tagNameCheck, S) || U.tagNameCheck instanceof Function && U.tagNameCheck(S)) && (U.attributeNameCheck instanceof RegExp && at(U.attributeNameCheck, D) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(D)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            D === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && at(U.tagNameCheck, X) || U.tagNameCheck instanceof Function && U.tagNameCheck(X)))
          ) return !1;
        } else if (!Ut[D]) {
          if (!at(dt, Gn(X, He, ""))) {
            if (!((D === "src" || D === "xlink:href" || D === "href") && S !== "script" && Wa(X, "data:") === 0 && Ge[S])) {
              if (!(ie && !at(Ze, Gn(X, He, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Mt = function(S) {
    return S !== "annotation-xml" && wo(S, Ue);
  }, Rn = function(S) {
    nt(K.beforeSanitizeAttributes, S, null);
    const {
      attributes: D
    } = S;
    if (!D || Lt(S))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: B,
      forceKeepAttr: void 0
    };
    let _e = D.length;
    for (; _e--; ) {
      const We = D[_e], {
        name: Fe,
        namespaceURI: Se,
        value: st
      } = We, kt = je(Fe);
      let Ve = Fe === "value" ? st : Va(st);
      if (X.attrName = kt, X.attrValue = Ve, X.keepAttr = !0, X.forceKeepAttr = void 0, nt(K.uponSanitizeAttribute, S, X), Ve = X.attrValue, vt && (kt === "id" || kt === "name") && ($t(Fe, S), Ve = Xe + Ve), fe && at(/((--!?|])>)|<\/(style|title)/i, Ve)) {
        $t(Fe, S);
        continue;
      }
      if (X.forceKeepAttr || ($t(Fe, S), !X.keepAttr))
        continue;
      if (!oe && at(/\/>/i, Ve)) {
        $t(Fe, S);
        continue;
      }
      J && br([ne, Pe, Be], (Tt) => {
        Ve = Gn(Ve, Tt, " ");
      });
      const dn = je(S.nodeName);
      if (Cn(dn, kt, Ve)) {
        if (V && typeof M == "object" && typeof M.getAttributeType == "function" && !Se)
          switch (M.getAttributeType(dn, kt)) {
            case "TrustedHTML": {
              Ve = V.createHTML(Ve);
              break;
            }
            case "TrustedScriptURL": {
              Ve = V.createScriptURL(Ve);
              break;
            }
          }
        try {
          Se ? S.setAttributeNS(Se, Fe, Ve) : S.setAttribute(Fe, Ve), Lt(S) ? ot(S) : bo(t.removed);
        } catch {
        }
      }
    }
    nt(K.afterSanitizeAttributes, S, null);
  }, un = function G(S) {
    let D = null;
    const X = En(S);
    for (nt(K.beforeSanitizeShadowDOM, S, null); D = X.nextNode(); )
      nt(K.uponSanitizeShadowNode, D, null), Jt(D), Rn(D), D.content instanceof a && G(D.content);
    nt(K.afterSanitizeShadowDOM, S, null);
  };
  return t.sanitize = function(G) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, X = null, _e = null, We = null;
    if (an = !G, an && (G = "<!-->"), typeof G != "string" && !cn(G))
      if (typeof G.toString == "function") {
        if (G = G.toString(), typeof G != "string")
          throw Kn("dirty is not a string, aborting");
      } else
        throw Kn("toString is not a function");
    if (!t.isSupported)
      return G;
    if (le || Gt(S), t.removed = [], typeof G == "string" && (Z = !1), Z) {
      if (G.nodeName) {
        const st = je(G.nodeName);
        if (!xe[st] || A[st])
          throw Kn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (G instanceof m)
      D = _n("<!---->"), X = D.ownerDocument.importNode(G, !0), X.nodeType === Jn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? D = X : D.appendChild(X);
    else {
      if (!ce && !J && !ve && // eslint-disable-next-line unicorn/prefer-includes
      G.indexOf("<") === -1)
        return V && Ye ? V.createHTML(G) : G;
      if (D = _n(G), !D)
        return ce ? null : Ye ? L : "";
    }
    D && Oe && ot(D.firstChild);
    const Fe = En(Z ? G : D);
    for (; _e = Fe.nextNode(); )
      Jt(_e), Rn(_e), _e.content instanceof a && un(_e.content);
    if (Z)
      return G;
    if (ce) {
      if (Te)
        for (We = Ce.call(D.ownerDocument); D.firstChild; )
          We.appendChild(D.firstChild);
      else
        We = D;
      return (B.shadowroot || B.shadowrootmode) && (We = ze.call(r, We, !0)), We;
    }
    let Se = ve ? D.outerHTML : D.innerHTML;
    return ve && xe["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && at(ys, D.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + Se), J && br([ne, Pe, Be], (st) => {
      Se = Gn(Se, st, " ");
    }), V && Ye ? V.createHTML(Se) : Se;
  }, t.setConfig = function() {
    let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Gt(G), le = !0;
  }, t.clearConfig = function() {
    Qe = null, le = !1;
  }, t.isValidAttribute = function(G, S, D) {
    Qe || Gt({});
    const X = je(G), _e = je(S);
    return Cn(X, _e, D);
  }, t.addHook = function(G, S) {
    typeof S == "function" && Xn(K[G], S);
  }, t.removeHook = function(G, S) {
    if (S !== void 0) {
      const D = za(K[G], S);
      return D === -1 ? void 0 : Ha(K[G], D, 1)[0];
    }
    return bo(K[G]);
  }, t.removeHooks = function(G) {
    K[G] = [];
  }, t.removeAllHooks = function() {
    K = Co();
  }, t;
}
var ol = xs();
function sl(e) {
  return (e ? document.querySelector(e) : document).querySelector(
    'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])'
  );
}
const xt = (e) => ({ __html: ol.sanitize(e) }), Ro = (e, t, n) => {
  let r = e;
  const o = [];
  for (; r < t; )
    r > 0 && r <= n && o.push(r), r += 1;
  return o;
};
let ui = !1;
const mi = (e, t) => {
  ui || (ui = !0, setTimeout(() => {
    e(), ui = !1;
  }, t));
};
let Oo;
const gi = (e, t) => {
  window.clearTimeout(Oo), Oo = window.setTimeout(e, t);
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
const bs = ({
  event: e = "",
  action: t = "",
  name: n = "",
  type: r = "",
  section: o = "",
  text: a = "",
  region: d = "",
  component: m = ""
}) => {
  const { dataLayer: h } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: n.toLowerCase(),
    type: r.toLowerCase(),
    region: d.toLowerCase(),
    section: o.toLowerCase(),
    text: a.toLowerCase(),
    component: m.toLowerCase()
  };
  h && h.push(p);
};
var vn = {};
var Ao;
function al() {
  if (Ao) return vn;
  Ao = 1;
  var e = $e;
  function t(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, v = 1; v < arguments.length; v++) u += "&args[]=" + encodeURIComponent(arguments[v]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = Object.prototype.hasOwnProperty, r = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, o = {}, a = {};
  function d(i) {
    return n.call(a, i) ? !0 : n.call(o, i) ? !1 : r.test(i) ? a[i] = !0 : (o[i] = !0, !1);
  }
  function m(i, u, v, x, C, T, I) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = x, this.attributeNamespace = C, this.mustUseProperty = v, this.propertyName = i, this.type = u, this.sanitizeURL = T, this.removeEmptyString = I;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    h[i] = new m(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    h[u] = new m(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    h[i] = new m(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    h[i] = new m(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    h[i] = new m(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    h[i] = new m(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    h[i] = new m(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    h[i] = new m(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    h[i] = new m(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var p = /[\-:]([a-z])/g;
  function b(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      p,
      b
    );
    h[u] = new m(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(p, b);
    h[u] = new m(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(p, b);
    h[u] = new m(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    h[i] = new m(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    h[i] = new m(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
  }, R = ["Webkit", "ms", "Moz", "O"];
  Object.keys(w).forEach(function(i) {
    R.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), w[u] = w[i];
    });
  });
  var M = /["'&<>]/;
  function O(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = M.exec(i);
    if (u) {
      var v = "", x, C = 0;
      for (x = u.index; x < i.length; x++) {
        switch (i.charCodeAt(x)) {
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
        C !== x && (v += i.substring(C, x)), C = x + 1, v += u;
      }
      i = C !== x ? v + i.substring(C, x) : v;
    }
    return i;
  }
  var k = /([A-Z])/g, N = /^ms-/, j = Array.isArray;
  function F(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function W(i, u, v) {
    switch (u) {
      case "select":
        return F(1, v.value != null ? v.value : v.defaultValue);
      case "svg":
        return F(2, null);
      case "math":
        return F(3, null);
      case "foreignObject":
        return F(1, null);
      case "table":
        return F(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return F(5, null);
      case "colgroup":
        return F(7, null);
      case "tr":
        return F(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? F(1, null) : i;
  }
  var V = /* @__PURE__ */ new Map();
  function L(i, u, v) {
    if (typeof v != "object") throw Error(t(62));
    u = !0;
    for (var x in v) if (n.call(v, x)) {
      var C = v[x];
      if (C != null && typeof C != "boolean" && C !== "") {
        if (x.indexOf("--") === 0) {
          var T = O(x);
          C = O(("" + C).trim());
        } else {
          T = x;
          var I = V.get(T);
          I !== void 0 || (I = O(T.replace(k, "-$1").toLowerCase().replace(N, "-ms-")), V.set(T, I)), T = I, C = typeof C == "number" ? C === 0 || n.call(w, x) ? "" + C : C + "px" : O(("" + C).trim());
        }
        u ? (u = !1, i.push(' style="', T, ":", C)) : i.push(";", T, ":", C);
      }
    }
    u || i.push('"');
  }
  function Q(i, u, v, x) {
    switch (v) {
      case "style":
        L(i, u, x);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
      if (u = h.hasOwnProperty(v) ? h[v] : null, u !== null) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (v = u.attributeName, u.type) {
          case 3:
            x && i.push(" ", v, '=""');
            break;
          case 4:
            x === !0 ? i.push(" ", v, '=""') : x !== !1 && i.push(" ", v, '="', O(x), '"');
            break;
          case 5:
            isNaN(x) || i.push(" ", v, '="', O(x), '"');
            break;
          case 6:
            !isNaN(x) && 1 <= x && i.push(" ", v, '="', O(x), '"');
            break;
          default:
            u.sanitizeURL && (x = "" + x), i.push(" ", v, '="', O(x), '"');
        }
      } else if (d(v)) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = v.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(" ", v, '="', O(x), '"');
      }
    }
  }
  function ae(i, u, v) {
    if (u != null) {
      if (v != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && i.push("" + u);
    }
  }
  function Ce(i) {
    var u = "";
    return e.Children.forEach(i, function(v) {
      v != null && (u += v);
    }), u;
  }
  function De(i, u, v, x) {
    i.push(ne(v));
    var C = v = null, T;
    for (T in u) if (n.call(u, T)) {
      var I = u[T];
      if (I != null) switch (T) {
        case "children":
          v = I;
          break;
        case "dangerouslySetInnerHTML":
          C = I;
          break;
        default:
          Q(i, x, T, I);
      }
    }
    return i.push(">"), ae(i, C, v), typeof v == "string" ? (i.push(O(v)), null) : v;
  }
  var ze = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, K = /* @__PURE__ */ new Map();
  function ne(i) {
    var u = K.get(i);
    if (u === void 0) {
      if (!ze.test(i)) throw Error(t(65, i));
      u = "<" + i, K.set(i, u);
    }
    return u;
  }
  function Pe(i, u, v, x, C) {
    switch (u) {
      case "select":
        i.push(ne("select"));
        var T = null, I = null;
        for (se in v) if (n.call(v, se)) {
          var H = v[se];
          if (H != null) switch (se) {
            case "children":
              T = H;
              break;
            case "dangerouslySetInnerHTML":
              I = H;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Q(i, x, se, H);
          }
        }
        return i.push(">"), ae(i, I, T), T;
      case "option":
        I = C.selectedValue, i.push(ne("option"));
        var ee = H = null, re = null, se = null;
        for (T in v) if (n.call(v, T)) {
          var Le = v[T];
          if (Le != null) switch (T) {
            case "children":
              H = Le;
              break;
            case "selected":
              re = Le;
              break;
            case "dangerouslySetInnerHTML":
              se = Le;
              break;
            case "value":
              ee = Le;
            default:
              Q(i, x, T, Le);
          }
        }
        if (I != null) if (v = ee !== null ? "" + ee : Ce(H), j(I)) {
          for (x = 0; x < I.length; x++)
            if ("" + I[x] === v) {
              i.push(' selected=""');
              break;
            }
        } else "" + I === v && i.push(' selected=""');
        else re && i.push(' selected=""');
        return i.push(">"), ae(i, se, H), H;
      case "textarea":
        i.push(ne("textarea")), se = I = T = null;
        for (H in v) if (n.call(v, H) && (ee = v[H], ee != null)) switch (H) {
          case "children":
            se = ee;
            break;
          case "value":
            T = ee;
            break;
          case "defaultValue":
            I = ee;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            Q(
              i,
              x,
              H,
              ee
            );
        }
        if (T === null && I !== null && (T = I), i.push(">"), se != null) {
          if (T != null) throw Error(t(92));
          if (j(se) && 1 < se.length) throw Error(t(93));
          T = "" + se;
        }
        return typeof T == "string" && T[0] === `
` && i.push(`
`), T !== null && i.push(O("" + T)), null;
      case "input":
        i.push(ne("input")), ee = se = H = T = null;
        for (I in v) if (n.call(v, I) && (re = v[I], re != null)) switch (I) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            ee = re;
            break;
          case "defaultValue":
            H = re;
            break;
          case "checked":
            se = re;
            break;
          case "value":
            T = re;
            break;
          default:
            Q(i, x, I, re);
        }
        return se !== null ? Q(i, x, "checked", se) : ee !== null && Q(i, x, "checked", ee), T !== null ? Q(i, x, "value", T) : H !== null && Q(i, x, "value", H), i.push("/>"), null;
      case "menuitem":
        i.push(ne("menuitem"));
        for (var _t in v) if (n.call(v, _t) && (T = v[_t], T != null)) switch (_t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            Q(i, x, _t, T);
        }
        return i.push(">"), null;
      case "title":
        i.push(ne("title")), T = null;
        for (Le in v) if (n.call(v, Le) && (I = v[Le], I != null)) switch (Le) {
          case "children":
            T = I;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            Q(i, x, Le, I);
        }
        return i.push(">"), T;
      case "listing":
      case "pre":
        i.push(ne(u)), I = T = null;
        for (ee in v) if (n.call(v, ee) && (H = v[ee], H != null)) switch (ee) {
          case "children":
            T = H;
            break;
          case "dangerouslySetInnerHTML":
            I = H;
            break;
          default:
            Q(i, x, ee, H);
        }
        if (i.push(">"), I != null) {
          if (T != null) throw Error(t(60));
          if (typeof I != "object" || !("__html" in I)) throw Error(t(61));
          v = I.__html, v != null && (typeof v == "string" && 0 < v.length && v[0] === `
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
        i.push(ne(u));
        for (var Et in v) if (n.call(v, Et) && (T = v[Et], T != null)) switch (Et) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            Q(i, x, Et, T);
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
        return De(
          i,
          v,
          u,
          x
        );
      case "html":
        return C.insertionMode === 0 && i.push("<!DOCTYPE html>"), De(i, v, u, x);
      default:
        if (u.indexOf("-") === -1 && typeof v.is != "string") return De(i, v, u, x);
        i.push(ne(u)), I = T = null;
        for (re in v) if (n.call(v, re) && (H = v[re], H != null)) switch (re) {
          case "children":
            T = H;
            break;
          case "dangerouslySetInnerHTML":
            I = H;
            break;
          case "style":
            L(i, x, H);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            d(re) && typeof H != "function" && typeof H != "symbol" && i.push(" ", re, '="', O(H), '"');
        }
        return i.push(">"), ae(i, I, T), T;
    }
  }
  function Be(i, u, v) {
    if (i.push('<!--$?--><template id="'), v === null) throw Error(t(395));
    return i.push(v), i.push('"></template>');
  }
  function Re(i, u, v, x) {
    switch (v.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(u.segmentPrefix), u = x.toString(16), i.push(u), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function ft(i, u) {
    switch (u.insertionMode) {
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
  var Ze = /[<\u2028\u2029]/g;
  function He(i) {
    return JSON.stringify(i).replace(Ze, function(u) {
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
  function Ue(i, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function dt(i, u, v, x) {
    return v.generateStaticMarkup ? (i.push(O(u)), !1) : (u === "" ? i = x : (x && i.push("<!-- -->"), i.push(O(u)), i = !0), i);
  }
  var xe = Object.assign, Y = Symbol.for("react.element"), B = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), z = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), ve = Symbol.for("react.scope"), le = Symbol.for("react.debug_trace_mode"), Oe = Symbol.for("react.legacy_hidden"), ce = Symbol.for("react.default_value"), Te = Symbol.iterator;
  function Ye(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case q:
        return "Fragment";
      case B:
        return "Portal";
      case A:
        return "Profiler";
      case U:
        return "StrictMode";
      case ie:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case z:
        return (i.displayName || "Context") + ".Consumer";
      case de:
        return (i._context.displayName || "Context") + ".Provider";
      case he:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case J:
        return u = i.displayName || null, u !== null ? u : Ye(i.type) || "Memo";
      case fe:
        u = i._payload, i = i._init;
        try {
          return Ye(i(u));
        } catch {
        }
    }
    return null;
  }
  var Ae = {};
  function vt(i, u) {
    if (i = i.contextTypes, !i) return Ae;
    var v = {}, x;
    for (x in i) v[x] = u[x];
    return v;
  }
  var Xe = null;
  function we(i, u) {
    if (i !== u) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var v = u.parent;
      if (i === null) {
        if (v !== null) throw Error(t(401));
      } else {
        if (v === null) throw Error(t(401));
        we(i, v);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function Z(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && Z(i);
  }
  function ye(i) {
    var u = i.parent;
    u !== null && ye(u), i.context._currentValue2 = i.value;
  }
  function it(i, u) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === u.depth ? we(i, u) : it(i, u);
  }
  function wt(i, u) {
    var v = u.parent;
    if (v === null) throw Error(t(402));
    i.depth === v.depth ? we(i, v) : wt(i, v), u.context._currentValue2 = u.value;
  }
  function Ge(i) {
    var u = Xe;
    u !== i && (u === null ? ye(i) : i === null ? Z(u) : u.depth === i.depth ? we(u, i) : u.depth > i.depth ? it(u, i) : wt(u, i), Xe = i);
  }
  var sn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function Ut(i, u, v, x) {
    var C = i.state !== void 0 ? i.state : null;
    i.updater = sn, i.props = v, i.state = C;
    var T = { queue: [], replace: !1 };
    i._reactInternals = T;
    var I = u.contextType;
    if (i.context = typeof I == "object" && I !== null ? I._currentValue2 : x, I = u.getDerivedStateFromProps, typeof I == "function" && (I = I(v, C), C = I == null ? C : xe({}, C, I), i.state = C), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && sn.enqueueReplaceState(i, i.state, null), T.queue !== null && 0 < T.queue.length) if (u = T.queue, I = T.replace, T.queue = null, T.replace = !1, I && u.length === 1) i.state = u[0];
    else {
      for (T = I ? u[0] : i.state, C = !0, I = I ? 1 : 0; I < u.length; I++) {
        var H = u[I];
        H = typeof H == "function" ? H.call(i, T, v, x) : H, H != null && (C ? (C = !1, T = xe({}, T, H)) : xe(T, H));
      }
      i.state = T;
    }
    else T.queue = null;
  }
  var kn = { id: 1, overflow: "" };
  function Nt(i, u, v) {
    var x = i.id;
    i = i.overflow;
    var C = 32 - St(x) - 1;
    x &= ~(1 << C), v += 1;
    var T = 32 - St(u) + C;
    if (30 < T) {
      var I = C - C % 5;
      return T = (x & (1 << I) - 1).toString(32), x >>= I, C -= I, { id: 1 << 32 - St(u) + C | v << C | x, overflow: T + i };
    }
    return { id: 1 << T | v << C | x, overflow: i };
  }
  var St = Math.clz32 ? Math.clz32 : an, pt = Math.log, It = Math.LN2;
  function an(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (pt(i) / It | 0) | 0;
  }
  function ln(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Dn = typeof Object.is == "function" ? Object.is : ln, Je = null, Pt = null, qt = null, ge = null, Ft = !1, Yt = !1, je = 0, Qe = null, Xt = 0;
  function yt() {
    if (Je === null) throw Error(t(321));
    return Je;
  }
  function Gt() {
    if (0 < Xt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Kt() {
    return ge === null ? qt === null ? (Ft = !1, qt = ge = Gt()) : (Ft = !0, ge = qt) : ge.next === null ? (Ft = !1, ge = ge.next = Gt()) : (Ft = !0, ge = ge.next), ge;
  }
  function Zt() {
    Pt = Je = null, Yt = !1, qt = null, Xt = 0, ge = Qe = null;
  }
  function Tn(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function ot(i, u, v) {
    if (Je = yt(), ge = Kt(), Ft) {
      var x = ge.queue;
      if (u = x.dispatch, Qe !== null && (v = Qe.get(x), v !== void 0)) {
        Qe.delete(x), x = ge.memoizedState;
        do
          x = i(x, v.action), v = v.next;
        while (v !== null);
        return ge.memoizedState = x, [x, u];
      }
      return [ge.memoizedState, u];
    }
    return i = i === Tn ? typeof u == "function" ? u() : u : v !== void 0 ? v(u) : u, ge.memoizedState = i, i = ge.queue = { last: null, dispatch: null }, i = i.dispatch = _n.bind(null, Je, i), [ge.memoizedState, i];
  }
  function $t(i, u) {
    if (Je = yt(), ge = Kt(), u = u === void 0 ? null : u, ge !== null) {
      var v = ge.memoizedState;
      if (v !== null && u !== null) {
        var x = v[1];
        e: if (x === null) x = !1;
        else {
          for (var C = 0; C < x.length && C < u.length; C++) if (!Dn(u[C], x[C])) {
            x = !1;
            break e;
          }
          x = !0;
        }
        if (x) return v[0];
      }
    }
    return i = i(), ge.memoizedState = [i, u], i;
  }
  function _n(i, u, v) {
    if (25 <= Xt) throw Error(t(301));
    if (i === Je) if (Yt = !0, i = { action: v, next: null }, Qe === null && (Qe = /* @__PURE__ */ new Map()), v = Qe.get(u), v === void 0) Qe.set(u, i);
    else {
      for (u = v; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function En() {
    throw Error(t(394));
  }
  function Lt() {
  }
  var cn = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return yt(), i._currentValue2;
  }, useMemo: $t, useReducer: ot, useRef: function(i) {
    Je = yt(), ge = Kt();
    var u = ge.memoizedState;
    return u === null ? (i = { current: i }, ge.memoizedState = i) : u;
  }, useState: function(i) {
    return ot(Tn, i);
  }, useInsertionEffect: Lt, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return $t(function() {
      return i;
    }, u);
  }, useImperativeHandle: Lt, useEffect: Lt, useDebugValue: Lt, useDeferredValue: function(i) {
    return yt(), i;
  }, useTransition: function() {
    return yt(), [
      !1,
      En
    ];
  }, useId: function() {
    var i = Pt.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - St(i) - 1)).toString(32) + u;
    var v = nt;
    if (v === null) throw Error(t(404));
    return u = je++, i = ":" + v.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return yt(), u(i._source);
  }, useSyncExternalStore: function(i, u, v) {
    if (v === void 0) throw Error(t(407));
    return v();
  } }, nt = null, Jt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Cn(i) {
    return console.error(i), null;
  }
  function Mt() {
  }
  function Rn(i, u, v, x, C, T, I, H, ee) {
    var re = [], se = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: x === void 0 ? 12800 : x, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: se, pingedTasks: re, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: C === void 0 ? Cn : C, onAllReady: Mt, onShellReady: I === void 0 ? Mt : I, onShellError: Mt, onFatalError: Mt }, v = G(u, 0, null, v, !1, !1), v.parentFlushed = !0, i = un(u, i, null, v, se, Ae, null, kn), re.push(i), u;
  }
  function un(i, u, v, x, C, T, I, H) {
    i.allPendingTasks++, v === null ? i.pendingRootTasks++ : v.pendingTasks++;
    var ee = { node: u, ping: function() {
      var re = i.pingedTasks;
      re.push(ee), re.length === 1 && ir(i);
    }, blockedBoundary: v, blockedSegment: x, abortSet: C, legacyContext: T, context: I, treeContext: H };
    return C.add(ee), ee;
  }
  function G(i, u, v, x, C, T) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: x, boundary: v, lastPushedText: C, textEmbedded: T };
  }
  function S(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function D(i, u) {
    var v = i.onShellError;
    v(u), v = i.onFatalError, v(u), i.destination !== null ? (i.status = 2, i.destination.destroy(u)) : (i.status = 1, i.fatalError = u);
  }
  function X(i, u, v, x, C) {
    for (Je = {}, Pt = u, je = 0, i = v(x, C); Yt; ) Yt = !1, je = 0, Xt += 1, ge = null, i = v(x, C);
    return Zt(), i;
  }
  function _e(i, u, v, x) {
    var C = v.render(), T = x.childContextTypes;
    if (T != null) {
      var I = u.legacyContext;
      if (typeof v.getChildContext != "function") x = I;
      else {
        v = v.getChildContext();
        for (var H in v) if (!(H in T)) throw Error(t(108, Ye(x) || "Unknown", H));
        x = xe({}, I, v);
      }
      u.legacyContext = x, Se(i, u, C), u.legacyContext = I;
    } else Se(i, u, C);
  }
  function We(i, u) {
    if (i && i.defaultProps) {
      u = xe({}, u), i = i.defaultProps;
      for (var v in i) u[v] === void 0 && (u[v] = i[v]);
      return u;
    }
    return u;
  }
  function Fe(i, u, v, x, C) {
    if (typeof v == "function") if (v.prototype && v.prototype.isReactComponent) {
      C = vt(v, u.legacyContext);
      var T = v.contextType;
      T = new v(x, typeof T == "object" && T !== null ? T._currentValue2 : C), Ut(T, v, x, C), _e(i, u, T, v);
    } else {
      T = vt(v, u.legacyContext), C = X(i, u, v, x, T);
      var I = je !== 0;
      if (typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) Ut(C, v, x, T), _e(i, u, C, v);
      else if (I) {
        x = u.treeContext, u.treeContext = Nt(x, 1, 0);
        try {
          Se(i, u, C);
        } finally {
          u.treeContext = x;
        }
      } else Se(i, u, C);
    }
    else if (typeof v == "string") {
      switch (C = u.blockedSegment, T = Pe(C.chunks, v, x, i.responseState, C.formatContext), C.lastPushedText = !1, I = C.formatContext, C.formatContext = W(I, v, x), kt(i, u, T), C.formatContext = I, v) {
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
        case Oe:
        case le:
        case U:
        case A:
        case q:
          Se(i, u, x.children);
          return;
        case oe:
          Se(i, u, x.children);
          return;
        case ve:
          throw Error(t(343));
        case ie:
          e: {
            v = u.blockedBoundary, C = u.blockedSegment, T = x.fallback, x = x.children, I = /* @__PURE__ */ new Set();
            var H = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: I, errorDigest: null }, ee = G(i, C.chunks.length, H, C.formatContext, !1, !1);
            C.children.push(ee), C.lastPushedText = !1;
            var re = G(i, 0, null, C.formatContext, !1, !1);
            re.parentFlushed = !0, u.blockedBoundary = H, u.blockedSegment = re;
            try {
              if (kt(
                i,
                u,
                x
              ), i.responseState.generateStaticMarkup || re.lastPushedText && re.textEmbedded && re.chunks.push("<!-- -->"), re.status = 1, Tt(H, re), H.pendingTasks === 0) break e;
            } catch (se) {
              re.status = 4, H.forceClientRender = !0, H.errorDigest = S(i, se);
            } finally {
              u.blockedBoundary = v, u.blockedSegment = C;
            }
            u = un(i, T, v, ee, I, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof v == "object" && v !== null) switch (v.$$typeof) {
        case he:
          if (x = X(i, u, v.render, x, C), je !== 0) {
            v = u.treeContext, u.treeContext = Nt(v, 1, 0);
            try {
              Se(i, u, x);
            } finally {
              u.treeContext = v;
            }
          } else Se(i, u, x);
          return;
        case J:
          v = v.type, x = We(v, x), Fe(i, u, v, x, C);
          return;
        case de:
          if (C = x.children, v = v._context, x = x.value, T = v._currentValue2, v._currentValue2 = x, I = Xe, Xe = x = { parent: I, depth: I === null ? 0 : I.depth + 1, context: v, parentValue: T, value: x }, u.context = x, Se(i, u, C), i = Xe, i === null) throw Error(t(403));
          x = i.parentValue, i.context._currentValue2 = x === ce ? i.context._defaultValue : x, i = Xe = i.parent, u.context = i;
          return;
        case z:
          x = x.children, x = x(v._currentValue2), Se(i, u, x);
          return;
        case fe:
          C = v._init, v = C(v._payload), x = We(v, x), Fe(
            i,
            u,
            v,
            x,
            void 0
          );
          return;
      }
      throw Error(t(130, v == null ? v : typeof v, ""));
    }
  }
  function Se(i, u, v) {
    if (u.node = v, typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Y:
          Fe(i, u, v.type, v.props, v.ref);
          return;
        case B:
          throw Error(t(257));
        case fe:
          var x = v._init;
          v = x(v._payload), Se(i, u, v);
          return;
      }
      if (j(v)) {
        st(i, u, v);
        return;
      }
      if (v === null || typeof v != "object" ? x = null : (x = Te && v[Te] || v["@@iterator"], x = typeof x == "function" ? x : null), x && (x = x.call(v))) {
        if (v = x.next(), !v.done) {
          var C = [];
          do
            C.push(v.value), v = x.next();
          while (!v.done);
          st(i, u, C);
        }
        return;
      }
      throw i = Object.prototype.toString.call(v), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : i));
    }
    typeof v == "string" ? (x = u.blockedSegment, x.lastPushedText = dt(u.blockedSegment.chunks, v, i.responseState, x.lastPushedText)) : typeof v == "number" && (x = u.blockedSegment, x.lastPushedText = dt(u.blockedSegment.chunks, "" + v, i.responseState, x.lastPushedText));
  }
  function st(i, u, v) {
    for (var x = v.length, C = 0; C < x; C++) {
      var T = u.treeContext;
      u.treeContext = Nt(T, x, C);
      try {
        kt(i, u, v[C]);
      } finally {
        u.treeContext = T;
      }
    }
  }
  function kt(i, u, v) {
    var x = u.blockedSegment.formatContext, C = u.legacyContext, T = u.context;
    try {
      return Se(i, u, v);
    } catch (ee) {
      if (Zt(), typeof ee == "object" && ee !== null && typeof ee.then == "function") {
        v = ee;
        var I = u.blockedSegment, H = G(i, I.chunks.length, null, I.formatContext, I.lastPushedText, !0);
        I.children.push(H), I.lastPushedText = !1, i = un(i, u.node, u.blockedBoundary, H, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, v.then(i, i), u.blockedSegment.formatContext = x, u.legacyContext = C, u.context = T, Ge(T);
      } else throw u.blockedSegment.formatContext = x, u.legacyContext = C, u.context = T, Ge(T), ee;
    }
  }
  function Ve(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Qt(this, u, i);
  }
  function dn(i, u, v) {
    var x = i.blockedBoundary;
    i.blockedSegment.status = 3, x === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (x.pendingTasks--, x.forceClientRender || (x.forceClientRender = !0, i = v === void 0 ? Error(t(432)) : v, x.errorDigest = u.onError(i), x.parentFlushed && u.clientRenderedBoundaries.push(x)), x.fallbackAbortableTasks.forEach(function(C) {
      return dn(C, u, v);
    }), x.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (x = u.onAllReady, x()));
  }
  function Tt(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var v = u.children[0];
      v.id = u.id, v.parentFlushed = !0, v.status === 1 && Tt(i, v);
    } else i.completedSegments.push(u);
  }
  function Qt(i, u, v) {
    if (u === null) {
      if (v.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = v;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Mt, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (v.parentFlushed && v.status === 1 && Tt(u, v), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Ve, i), u.fallbackAbortableTasks.clear()) : v.parentFlushed && v.status === 1 && (Tt(u, v), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function ir(i) {
    if (i.status !== 2) {
      var u = Xe, v = Jt.current;
      Jt.current = cn;
      var x = nt;
      nt = i.responseState;
      try {
        var C = i.pingedTasks, T;
        for (T = 0; T < C.length; T++) {
          var I = C[T], H = i, ee = I.blockedSegment;
          if (ee.status === 0) {
            Ge(I.context);
            try {
              Se(H, I, I.node), H.responseState.generateStaticMarkup || ee.lastPushedText && ee.textEmbedded && ee.chunks.push("<!-- -->"), I.abortSet.delete(I), ee.status = 1, Qt(H, I.blockedBoundary, ee);
            } catch (ht) {
              if (Zt(), typeof ht == "object" && ht !== null && typeof ht.then == "function") {
                var re = I.ping;
                ht.then(re, re);
              } else {
                I.abortSet.delete(I), ee.status = 4;
                var se = I.blockedBoundary, Le = ht, _t = S(H, Le);
                if (se === null ? D(H, Le) : (se.pendingTasks--, se.forceClientRender || (se.forceClientRender = !0, se.errorDigest = _t, se.parentFlushed && H.clientRenderedBoundaries.push(se))), H.allPendingTasks--, H.allPendingTasks === 0) {
                  var Et = H.onAllReady;
                  Et();
                }
              }
            } finally {
            }
          }
        }
        C.splice(0, T), i.destination !== null && On(i, i.destination);
      } catch (ht) {
        S(i, ht), D(i, ht);
      } finally {
        nt = x, Jt.current = v, v === cn && Ge(u);
      }
    }
  }
  function fn(i, u, v) {
    switch (v.parentFlushed = !0, v.status) {
      case 0:
        var x = v.id = i.nextSegmentId++;
        return v.lastPushedText = !1, v.textEmbedded = !1, i = i.responseState, u.push('<template id="'), u.push(i.placeholderPrefix), i = x.toString(16), u.push(i), u.push('"></template>');
      case 1:
        v.status = 2;
        var C = !0;
        x = v.chunks;
        var T = 0;
        v = v.children;
        for (var I = 0; I < v.length; I++) {
          for (C = v[I]; T < C.index; T++) u.push(x[T]);
          C = pn(i, u, C);
        }
        for (; T < x.length - 1; T++) u.push(x[T]);
        return T < x.length && (C = u.push(x[T])), C;
      default:
        throw Error(t(390));
    }
  }
  function pn(i, u, v) {
    var x = v.boundary;
    if (x === null) return fn(i, u, v);
    if (x.parentFlushed = !0, x.forceClientRender) return i.responseState.generateStaticMarkup || (x = x.errorDigest, u.push("<!--$!-->"), u.push("<template"), x && (u.push(' data-dgst="'), x = O(x), u.push(x), u.push('"')), u.push("></template>")), fn(i, u, v), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
    if (0 < x.pendingTasks) {
      x.rootSegmentID = i.nextSegmentId++, 0 < x.completedSegments.length && i.partialBoundaries.push(x);
      var C = i.responseState, T = C.nextSuspenseID++;
      return C = C.boundaryPrefix + T.toString(16), x = x.id = C, Be(u, i.responseState, x), fn(i, u, v), u.push("<!--/$-->");
    }
    if (x.byteSize > i.progressiveChunkSize) return x.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(x), Be(u, i.responseState, x.id), fn(i, u, v), u.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || u.push("<!--$-->"), v = x.completedSegments, v.length !== 1) throw Error(t(391));
    return pn(i, u, v[0]), i = i.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), i;
  }
  function Fn(i, u, v) {
    return Re(u, i.responseState, v.formatContext, v.id), pn(i, u, v), ft(u, v.formatContext);
  }
  function $n(i, u, v) {
    for (var x = v.completedSegments, C = 0; C < x.length; C++) Bn(i, u, v, x[C]);
    if (x.length = 0, i = i.responseState, x = v.id, v = v.rootSegmentID, u.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? u.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), x === null) throw Error(t(395));
    return v = v.toString(16), u.push(x), u.push('","'), u.push(i.segmentPrefix), u.push(v), u.push('")<\/script>');
  }
  function Bn(i, u, v, x) {
    if (x.status === 2) return !0;
    var C = x.id;
    if (C === -1) {
      if ((x.id = v.rootSegmentID) === -1) throw Error(t(392));
      return Fn(i, u, x);
    }
    return Fn(i, u, x), i = i.responseState, u.push(i.startInlineScript), i.sentCompleteSegmentFunction ? u.push('$RS("') : (i.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(i.segmentPrefix), C = C.toString(16), u.push(C), u.push('","'), u.push(i.placeholderPrefix), u.push(C), u.push('")<\/script>');
  }
  function On(i, u) {
    try {
      var v = i.completedRootSegment;
      if (v !== null && i.pendingRootTasks === 0) {
        pn(i, u, v), i.completedRootSegment = null;
        var x = i.responseState.bootstrapChunks;
        for (v = 0; v < x.length - 1; v++) u.push(x[v]);
        v < x.length && u.push(x[v]);
      }
      var C = i.clientRenderedBoundaries, T;
      for (T = 0; T < C.length; T++) {
        var I = C[T];
        x = u;
        var H = i.responseState, ee = I.id, re = I.errorDigest, se = I.errorMessage, Le = I.errorComponentStack;
        if (x.push(H.startInlineScript), H.sentClientRenderFunction ? x.push('$RX("') : (H.sentClientRenderFunction = !0, x.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ee === null) throw Error(t(395));
        if (x.push(ee), x.push('"'), re || se || Le) {
          x.push(",");
          var _t = He(re || "");
          x.push(_t);
        }
        if (se || Le) {
          x.push(",");
          var Et = He(se || "");
          x.push(Et);
        }
        if (Le) {
          x.push(",");
          var ht = He(Le);
          x.push(ht);
        }
        if (!x.push(")<\/script>")) {
          i.destination = null, T++, C.splice(0, T);
          return;
        }
      }
      C.splice(0, T);
      var hn = i.completedBoundaries;
      for (T = 0; T < hn.length; T++) if (!$n(i, u, hn[T])) {
        i.destination = null, T++, hn.splice(0, T);
        return;
      }
      hn.splice(0, T);
      var Bt = i.partialBoundaries;
      for (T = 0; T < Bt.length; T++) {
        var Hn = Bt[T];
        e: {
          C = i, I = u;
          var mn = Hn.completedSegments;
          for (H = 0; H < mn.length; H++) if (!Bn(C, I, Hn, mn[H])) {
            H++, mn.splice(0, H);
            var ar = !1;
            break e;
          }
          mn.splice(0, H), ar = !0;
        }
        if (!ar) {
          i.destination = null, T++, Bt.splice(0, T);
          return;
        }
      }
      Bt.splice(0, T);
      var en = i.completedBoundaries;
      for (T = 0; T < en.length; T++) if (!$n(i, u, en[T])) {
        i.destination = null, T++, en.splice(0, T);
        return;
      }
      en.splice(0, T);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function or(i, u) {
    try {
      var v = i.abortableTasks;
      v.forEach(function(x) {
        return dn(x, i, u);
      }), v.clear(), i.destination !== null && On(i, i.destination);
    } catch (x) {
      S(i, x), D(i, x);
    }
  }
  function sr() {
  }
  function zn(i, u, v, x) {
    var C = !1, T = null, I = "", H = { push: function(re) {
      return re !== null && (I += re), !0;
    }, destroy: function(re) {
      C = !0, T = re;
    } }, ee = !1;
    if (i = Rn(i, Ue(v, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, sr, void 0, function() {
      ee = !0;
    }), ir(i), or(i, x), i.status === 1) i.status = 2, H.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = H;
      try {
        On(i, H);
      } catch (re) {
        S(i, re), D(i, re);
      }
    }
    if (C) throw T;
    if (!ee) throw Error(t(426));
    return I;
  }
  return vn.renderToNodeStream = function() {
    throw Error(t(207));
  }, vn.renderToStaticMarkup = function(i, u) {
    return zn(i, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, vn.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, vn.renderToString = function(i, u) {
    return zn(i, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, vn.version = "18.3.1", vn;
}
var Sr = {};
var jo;
function ll() {
  if (jo) return Sr;
  jo = 1;
  var e = $e;
  function t(s) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + s + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var n = null, r = 0;
  function o(s, c) {
    if (c.length !== 0) if (512 < c.length) 0 < r && (s.enqueue(new Uint8Array(n.buffer, 0, r)), n = new Uint8Array(512), r = 0), s.enqueue(c);
    else {
      var g = n.length - r;
      g < c.length && (g === 0 ? s.enqueue(n) : (n.set(c.subarray(0, g), r), s.enqueue(n), c = c.subarray(g)), n = new Uint8Array(512), r = 0), n.set(c, r), r += c.length;
    }
  }
  function a(s, c) {
    return o(s, c), !0;
  }
  function d(s) {
    n && 0 < r && (s.enqueue(new Uint8Array(n.buffer, 0, r)), n = null, r = 0);
  }
  var m = new TextEncoder();
  function h(s) {
    return m.encode(s);
  }
  function p(s) {
    return m.encode(s);
  }
  function b(s, c) {
    typeof s.error == "function" ? s.error(c) : s.close();
  }
  var w = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, O = {};
  function k(s) {
    return w.call(O, s) ? !0 : w.call(M, s) ? !1 : R.test(s) ? O[s] = !0 : (M[s] = !0, !1);
  }
  function N(s, c, g, y, E, _, P) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = y, this.attributeNamespace = E, this.mustUseProperty = g, this.propertyName = s, this.type = c, this.sanitizeURL = _, this.removeEmptyString = P;
  }
  var j = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    j[s] = new N(s, 0, !1, s, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var c = s[0];
    j[c] = new N(c, 1, !1, s[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    j[s] = new N(s, 2, !1, s.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    j[s] = new N(s, 2, !1, s, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    j[s] = new N(s, 3, !1, s.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    j[s] = new N(s, 3, !0, s, null, !1, !1);
  }), ["capture", "download"].forEach(function(s) {
    j[s] = new N(s, 4, !1, s, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    j[s] = new N(s, 6, !1, s, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(s) {
    j[s] = new N(s, 5, !1, s.toLowerCase(), null, !1, !1);
  });
  var F = /[\-:]([a-z])/g;
  function W(s) {
    return s[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var c = s.replace(
      F,
      W
    );
    j[c] = new N(c, 1, !1, s, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var c = s.replace(F, W);
    j[c] = new N(c, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var c = s.replace(F, W);
    j[c] = new N(c, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    j[s] = new N(s, 1, !1, s.toLowerCase(), null, !1, !1);
  }), j.xlinkHref = new N("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    j[s] = new N(s, 1, !1, s.toLowerCase(), null, !0, !0);
  });
  var V = {
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
  Object.keys(V).forEach(function(s) {
    L.forEach(function(c) {
      c = c + s.charAt(0).toUpperCase() + s.substring(1), V[c] = V[s];
    });
  });
  var Q = /["'&<>]/;
  function ae(s) {
    if (typeof s == "boolean" || typeof s == "number") return "" + s;
    s = "" + s;
    var c = Q.exec(s);
    if (c) {
      var g = "", y, E = 0;
      for (y = c.index; y < s.length; y++) {
        switch (s.charCodeAt(y)) {
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
        E !== y && (g += s.substring(E, y)), E = y + 1, g += c;
      }
      s = E !== y ? g + s.substring(E, y) : g;
    }
    return s;
  }
  var Ce = /([A-Z])/g, De = /^ms-/, ze = Array.isArray, K = p("<script>"), ne = p("<\/script>"), Pe = p('<script src="'), Be = p('<script type="module" src="'), Re = p('" async=""><\/script>'), ft = /(<\/|<)(s)(cript)/gi;
  function Ze(s, c, g, y) {
    return "" + c + (g === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function He(s, c, g, y, E) {
    s = s === void 0 ? "" : s, c = c === void 0 ? K : p('<script nonce="' + ae(c) + '">');
    var _ = [];
    if (g !== void 0 && _.push(c, h(("" + g).replace(ft, Ze)), ne), y !== void 0) for (g = 0; g < y.length; g++) _.push(Pe, h(ae(y[g])), Re);
    if (E !== void 0) for (y = 0; y < E.length; y++) _.push(Be, h(ae(E[y])), Re);
    return { bootstrapChunks: _, startInlineScript: c, placeholderPrefix: p(s + "P:"), segmentPrefix: p(s + "S:"), boundaryPrefix: s + "B:", idPrefix: s, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ue(s, c) {
    return { insertionMode: s, selectedValue: c };
  }
  function dt(s) {
    return Ue(s === "http://www.w3.org/2000/svg" ? 2 : s === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function xe(s, c, g) {
    switch (c) {
      case "select":
        return Ue(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return Ue(2, null);
      case "math":
        return Ue(3, null);
      case "foreignObject":
        return Ue(1, null);
      case "table":
        return Ue(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ue(5, null);
      case "colgroup":
        return Ue(7, null);
      case "tr":
        return Ue(6, null);
    }
    return 4 <= s.insertionMode || s.insertionMode === 0 ? Ue(1, null) : s;
  }
  var Y = p("<!-- -->");
  function B(s, c, g, y) {
    return c === "" ? y : (y && s.push(Y), s.push(h(ae(c))), !0);
  }
  var q = /* @__PURE__ */ new Map(), U = p(' style="'), A = p(":"), de = p(";");
  function z(s, c, g) {
    if (typeof g != "object") throw Error(t(62));
    c = !0;
    for (var y in g) if (w.call(g, y)) {
      var E = g[y];
      if (E != null && typeof E != "boolean" && E !== "") {
        if (y.indexOf("--") === 0) {
          var _ = h(ae(y));
          E = h(ae(("" + E).trim()));
        } else {
          _ = y;
          var P = q.get(_);
          P !== void 0 || (P = p(ae(_.replace(Ce, "-$1").toLowerCase().replace(De, "-ms-"))), q.set(_, P)), _ = P, E = typeof E == "number" ? E === 0 || w.call(V, y) ? h("" + E) : h(E + "px") : h(ae(("" + E).trim()));
        }
        c ? (c = !1, s.push(U, _, A, E)) : s.push(de, _, A, E);
      }
    }
    c || s.push(oe);
  }
  var he = p(" "), ie = p('="'), oe = p('"'), J = p('=""');
  function fe(s, c, g, y) {
    switch (g) {
      case "style":
        z(s, c, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = j.hasOwnProperty(g) ? j[g] : null, c !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = h(c.attributeName), c.type) {
          case 3:
            y && s.push(he, g, J);
            break;
          case 4:
            y === !0 ? s.push(he, g, J) : y !== !1 && s.push(he, g, ie, h(ae(y)), oe);
            break;
          case 5:
            isNaN(y) || s.push(he, g, ie, h(ae(y)), oe);
            break;
          case 6:
            !isNaN(y) && 1 <= y && s.push(he, g, ie, h(ae(y)), oe);
            break;
          default:
            c.sanitizeURL && (y = "" + y), s.push(he, g, ie, h(ae(y)), oe);
        }
      } else if (k(g)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        s.push(he, h(g), ie, h(ae(y)), oe);
      }
    }
  }
  var ve = p(">"), le = p("/>");
  function Oe(s, c, g) {
    if (c != null) {
      if (g != null) throw Error(t(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(t(61));
      c = c.__html, c != null && s.push(h("" + c));
    }
  }
  function ce(s) {
    var c = "";
    return e.Children.forEach(s, function(g) {
      g != null && (c += g);
    }), c;
  }
  var Te = p(' selected=""');
  function Ye(s, c, g, y) {
    s.push(we(g));
    var E = g = null, _;
    for (_ in c) if (w.call(c, _)) {
      var P = c[_];
      if (P != null) switch (_) {
        case "children":
          g = P;
          break;
        case "dangerouslySetInnerHTML":
          E = P;
          break;
        default:
          fe(s, y, _, P);
      }
    }
    return s.push(ve), Oe(s, E, g), typeof g == "string" ? (s.push(h(ae(g))), null) : g;
  }
  var Ae = p(`
`), vt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Xe = /* @__PURE__ */ new Map();
  function we(s) {
    var c = Xe.get(s);
    if (c === void 0) {
      if (!vt.test(s)) throw Error(t(65, s));
      c = p("<" + s), Xe.set(s, c);
    }
    return c;
  }
  var Z = p("<!DOCTYPE html>");
  function ye(s, c, g, y, E) {
    switch (c) {
      case "select":
        s.push(we("select"));
        var _ = null, P = null;
        for (ue in g) if (w.call(g, ue)) {
          var $ = g[ue];
          if ($ != null) switch (ue) {
            case "children":
              _ = $;
              break;
            case "dangerouslySetInnerHTML":
              P = $;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(s, y, ue, $);
          }
        }
        return s.push(ve), Oe(s, P, _), _;
      case "option":
        P = E.selectedValue, s.push(we("option"));
        var te = $ = null, pe = null, ue = null;
        for (_ in g) if (w.call(g, _)) {
          var Ie = g[_];
          if (Ie != null) switch (_) {
            case "children":
              $ = Ie;
              break;
            case "selected":
              pe = Ie;
              break;
            case "dangerouslySetInnerHTML":
              ue = Ie;
              break;
            case "value":
              te = Ie;
            default:
              fe(s, y, _, Ie);
          }
        }
        if (P != null) if (g = te !== null ? "" + te : ce($), ze(P)) {
          for (y = 0; y < P.length; y++)
            if ("" + P[y] === g) {
              s.push(Te);
              break;
            }
        } else "" + P === g && s.push(Te);
        else pe && s.push(Te);
        return s.push(ve), Oe(s, ue, $), $;
      case "textarea":
        s.push(we("textarea")), ue = P = _ = null;
        for ($ in g) if (w.call(g, $) && (te = g[$], te != null)) switch ($) {
          case "children":
            ue = te;
            break;
          case "value":
            _ = te;
            break;
          case "defaultValue":
            P = te;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            fe(s, y, $, te);
        }
        if (_ === null && P !== null && (_ = P), s.push(ve), ue != null) {
          if (_ != null) throw Error(t(92));
          if (ze(ue) && 1 < ue.length) throw Error(t(93));
          _ = "" + ue;
        }
        return typeof _ == "string" && _[0] === `
` && s.push(Ae), _ !== null && s.push(h(ae("" + _))), null;
      case "input":
        s.push(we("input")), te = ue = $ = _ = null;
        for (P in g) if (w.call(g, P) && (pe = g[P], pe != null)) switch (P) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            te = pe;
            break;
          case "defaultValue":
            $ = pe;
            break;
          case "checked":
            ue = pe;
            break;
          case "value":
            _ = pe;
            break;
          default:
            fe(s, y, P, pe);
        }
        return ue !== null ? fe(
          s,
          y,
          "checked",
          ue
        ) : te !== null && fe(s, y, "checked", te), _ !== null ? fe(s, y, "value", _) : $ !== null && fe(s, y, "value", $), s.push(le), null;
      case "menuitem":
        s.push(we("menuitem"));
        for (var gt in g) if (w.call(g, gt) && (_ = g[gt], _ != null)) switch (gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            fe(s, y, gt, _);
        }
        return s.push(ve), null;
      case "title":
        s.push(we("title")), _ = null;
        for (Ie in g) if (w.call(g, Ie) && (P = g[Ie], P != null)) switch (Ie) {
          case "children":
            _ = P;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            fe(s, y, Ie, P);
        }
        return s.push(ve), _;
      case "listing":
      case "pre":
        s.push(we(c)), P = _ = null;
        for (te in g) if (w.call(g, te) && ($ = g[te], $ != null)) switch (te) {
          case "children":
            _ = $;
            break;
          case "dangerouslySetInnerHTML":
            P = $;
            break;
          default:
            fe(s, y, te, $);
        }
        if (s.push(ve), P != null) {
          if (_ != null) throw Error(t(60));
          if (typeof P != "object" || !("__html" in P)) throw Error(t(61));
          g = P.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? s.push(Ae, h(g)) : s.push(h("" + g)));
        }
        return typeof _ == "string" && _[0] === `
` && s.push(Ae), _;
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
        s.push(we(c));
        for (var Ct in g) if (w.call(g, Ct) && (_ = g[Ct], _ != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, c));
          default:
            fe(s, y, Ct, _);
        }
        return s.push(le), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ye(s, g, c, y);
      case "html":
        return E.insertionMode === 0 && s.push(Z), Ye(s, g, c, y);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return Ye(s, g, c, y);
        s.push(we(c)), P = _ = null;
        for (pe in g) if (w.call(g, pe) && ($ = g[pe], $ != null)) switch (pe) {
          case "children":
            _ = $;
            break;
          case "dangerouslySetInnerHTML":
            P = $;
            break;
          case "style":
            z(s, y, $);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(pe) && typeof $ != "function" && typeof $ != "symbol" && s.push(he, h(pe), ie, h(ae($)), oe);
        }
        return s.push(ve), Oe(s, P, _), _;
    }
  }
  var it = p("</"), wt = p(">"), Ge = p('<template id="'), sn = p('"></template>'), Ut = p("<!--$-->"), kn = p('<!--$?--><template id="'), Nt = p('"></template>'), St = p("<!--$!-->"), pt = p("<!--/$-->"), It = p("<template"), an = p('"'), ln = p(' data-dgst="');
  p(' data-msg="'), p(' data-stck="');
  var Dn = p("></template>");
  function Je(s, c, g) {
    if (o(s, kn), g === null) throw Error(t(395));
    return o(s, g), a(s, Nt);
  }
  var Pt = p('<div hidden id="'), qt = p('">'), ge = p("</div>"), Ft = p('<svg aria-hidden="true" style="display:none" id="'), Yt = p('">'), je = p("</svg>"), Qe = p('<math aria-hidden="true" style="display:none" id="'), Xt = p('">'), yt = p("</math>"), Gt = p('<table hidden id="'), Kt = p('">'), Zt = p("</table>"), Tn = p('<table hidden><tbody id="'), ot = p('">'), $t = p("</tbody></table>"), _n = p('<table hidden><tr id="'), En = p('">'), Lt = p("</tr></table>"), cn = p('<table hidden><colgroup id="'), nt = p('">'), Jt = p("</colgroup></table>");
  function Cn(s, c, g, y) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return o(s, Pt), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, qt);
      case 2:
        return o(s, Ft), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, Yt);
      case 3:
        return o(s, Qe), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, Xt);
      case 4:
        return o(s, Gt), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, Kt);
      case 5:
        return o(s, Tn), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, ot);
      case 6:
        return o(s, _n), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, En);
      case 7:
        return o(
          s,
          cn
        ), o(s, c.segmentPrefix), o(s, h(y.toString(16))), a(s, nt);
      default:
        throw Error(t(397));
    }
  }
  function Mt(s, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return a(s, ge);
      case 2:
        return a(s, je);
      case 3:
        return a(s, yt);
      case 4:
        return a(s, Zt);
      case 5:
        return a(s, $t);
      case 6:
        return a(s, Lt);
      case 7:
        return a(s, Jt);
      default:
        throw Error(t(397));
    }
  }
  var Rn = p('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), un = p('$RS("'), G = p('","'), S = p('")<\/script>'), D = p('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), X = p('$RC("'), _e = p('","'), We = p('")<\/script>'), Fe = p('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = p('$RX("'), st = p('"'), kt = p(")<\/script>"), Ve = p(","), dn = /[<\u2028\u2029]/g;
  function Tt(s) {
    return JSON.stringify(s).replace(dn, function(c) {
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
  var Qt = Object.assign, ir = Symbol.for("react.element"), fn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Fn = Symbol.for("react.strict_mode"), $n = Symbol.for("react.profiler"), Bn = Symbol.for("react.provider"), On = Symbol.for("react.context"), or = Symbol.for("react.forward_ref"), sr = Symbol.for("react.suspense"), zn = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.scope"), x = Symbol.for("react.debug_trace_mode"), C = Symbol.for("react.legacy_hidden"), T = Symbol.for("react.default_value"), I = Symbol.iterator;
  function H(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case pn:
        return "Fragment";
      case fn:
        return "Portal";
      case $n:
        return "Profiler";
      case Fn:
        return "StrictMode";
      case sr:
        return "Suspense";
      case zn:
        return "SuspenseList";
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case On:
        return (s.displayName || "Context") + ".Consumer";
      case Bn:
        return (s._context.displayName || "Context") + ".Provider";
      case or:
        var c = s.render;
        return s = s.displayName, s || (s = c.displayName || c.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case i:
        return c = s.displayName || null, c !== null ? c : H(s.type) || "Memo";
      case u:
        c = s._payload, s = s._init;
        try {
          return H(s(c));
        } catch {
        }
    }
    return null;
  }
  var ee = {};
  function re(s, c) {
    if (s = s.contextTypes, !s) return ee;
    var g = {}, y;
    for (y in s) g[y] = c[y];
    return g;
  }
  var se = null;
  function Le(s, c) {
    if (s !== c) {
      s.context._currentValue = s.parentValue, s = s.parent;
      var g = c.parent;
      if (s === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        Le(s, g);
      }
      c.context._currentValue = c.value;
    }
  }
  function _t(s) {
    s.context._currentValue = s.parentValue, s = s.parent, s !== null && _t(s);
  }
  function Et(s) {
    var c = s.parent;
    c !== null && Et(c), s.context._currentValue = s.value;
  }
  function ht(s, c) {
    if (s.context._currentValue = s.parentValue, s = s.parent, s === null) throw Error(t(402));
    s.depth === c.depth ? Le(s, c) : ht(s, c);
  }
  function hn(s, c) {
    var g = c.parent;
    if (g === null) throw Error(t(402));
    s.depth === g.depth ? Le(s, g) : hn(s, g), c.context._currentValue = c.value;
  }
  function Bt(s) {
    var c = se;
    c !== s && (c === null ? Et(s) : s === null ? _t(c) : c.depth === s.depth ? Le(c, s) : c.depth > s.depth ? ht(c, s) : hn(c, s), se = s);
  }
  var Hn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(s, c) {
    s = s._reactInternals, s.queue !== null && s.queue.push(c);
  }, enqueueReplaceState: function(s, c) {
    s = s._reactInternals, s.replace = !0, s.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function mn(s, c, g, y) {
    var E = s.state !== void 0 ? s.state : null;
    s.updater = Hn, s.props = g, s.state = E;
    var _ = { queue: [], replace: !1 };
    s._reactInternals = _;
    var P = c.contextType;
    if (s.context = typeof P == "object" && P !== null ? P._currentValue : y, P = c.getDerivedStateFromProps, typeof P == "function" && (P = P(g, E), E = P == null ? E : Qt({}, E, P), s.state = E), typeof c.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function")) if (c = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), c !== s.state && Hn.enqueueReplaceState(s, s.state, null), _.queue !== null && 0 < _.queue.length) if (c = _.queue, P = _.replace, _.queue = null, _.replace = !1, P && c.length === 1) s.state = c[0];
    else {
      for (_ = P ? c[0] : s.state, E = !0, P = P ? 1 : 0; P < c.length; P++) {
        var $ = c[P];
        $ = typeof $ == "function" ? $.call(s, _, g, y) : $, $ != null && (E ? (E = !1, _ = Qt({}, _, $)) : Qt(_, $));
      }
      s.state = _;
    }
    else _.queue = null;
  }
  var ar = { id: 1, overflow: "" };
  function en(s, c, g) {
    var y = s.id;
    s = s.overflow;
    var E = 32 - lr(y) - 1;
    y &= ~(1 << E), g += 1;
    var _ = 32 - lr(c) + E;
    if (30 < _) {
      var P = E - E % 5;
      return _ = (y & (1 << P) - 1).toString(32), y >>= P, E -= P, { id: 1 << 32 - lr(c) + E | g << E | y, overflow: _ + s };
    }
    return { id: 1 << _ | g << E | y, overflow: s };
  }
  var lr = Math.clz32 ? Math.clz32 : ga, ha = Math.log, ma = Math.LN2;
  function ga(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (ha(s) / ma | 0) | 0;
  }
  function va(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var ya = typeof Object.is == "function" ? Object.is : va, zt = null, Yr = null, cr = null, Ne = null, Wn = !1, ur = !1, Vn = 0, tn = null, dr = 0;
  function gn() {
    if (zt === null) throw Error(t(321));
    return zt;
  }
  function Zi() {
    if (0 < dr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Xr() {
    return Ne === null ? cr === null ? (Wn = !1, cr = Ne = Zi()) : (Wn = !0, Ne = cr) : Ne.next === null ? (Wn = !1, Ne = Ne.next = Zi()) : (Wn = !0, Ne = Ne.next), Ne;
  }
  function Gr() {
    Yr = zt = null, ur = !1, cr = null, dr = 0, Ne = tn = null;
  }
  function Ji(s, c) {
    return typeof c == "function" ? c(s) : c;
  }
  function Qi(s, c, g) {
    if (zt = gn(), Ne = Xr(), Wn) {
      var y = Ne.queue;
      if (c = y.dispatch, tn !== null && (g = tn.get(y), g !== void 0)) {
        tn.delete(y), y = Ne.memoizedState;
        do
          y = s(y, g.action), g = g.next;
        while (g !== null);
        return Ne.memoizedState = y, [y, c];
      }
      return [Ne.memoizedState, c];
    }
    return s = s === Ji ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Ne.memoizedState = s, s = Ne.queue = { last: null, dispatch: null }, s = s.dispatch = xa.bind(null, zt, s), [Ne.memoizedState, s];
  }
  function eo(s, c) {
    if (zt = gn(), Ne = Xr(), c = c === void 0 ? null : c, Ne !== null) {
      var g = Ne.memoizedState;
      if (g !== null && c !== null) {
        var y = g[1];
        e: if (y === null) y = !1;
        else {
          for (var E = 0; E < y.length && E < c.length; E++) if (!ya(c[E], y[E])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return g[0];
      }
    }
    return s = s(), Ne.memoizedState = [s, c], s;
  }
  function xa(s, c, g) {
    if (25 <= dr) throw Error(t(301));
    if (s === zt) if (ur = !0, s = { action: g, next: null }, tn === null && (tn = /* @__PURE__ */ new Map()), g = tn.get(c), g === void 0) tn.set(c, s);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = s;
    }
  }
  function ba() {
    throw Error(t(394));
  }
  function fr() {
  }
  var to = { readContext: function(s) {
    return s._currentValue;
  }, useContext: function(s) {
    return gn(), s._currentValue;
  }, useMemo: eo, useReducer: Qi, useRef: function(s) {
    zt = gn(), Ne = Xr();
    var c = Ne.memoizedState;
    return c === null ? (s = { current: s }, Ne.memoizedState = s) : c;
  }, useState: function(s) {
    return Qi(Ji, s);
  }, useInsertionEffect: fr, useLayoutEffect: function() {
  }, useCallback: function(s, c) {
    return eo(function() {
      return s;
    }, c);
  }, useImperativeHandle: fr, useEffect: fr, useDebugValue: fr, useDeferredValue: function(s) {
    return gn(), s;
  }, useTransition: function() {
    return gn(), [!1, ba];
  }, useId: function() {
    var s = Yr.treeContext, c = s.overflow;
    s = s.id, s = (s & ~(1 << 32 - lr(s) - 1)).toString(32) + c;
    var g = pr;
    if (g === null) throw Error(t(404));
    return c = Vn++, s = ":" + g.idPrefix + "R" + s, 0 < c && (s += "H" + c.toString(32)), s + ":";
  }, useMutableSource: function(s, c) {
    return gn(), c(s._source);
  }, useSyncExternalStore: function(s, c, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, pr = null, Kr = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function wa(s) {
    return console.error(s), null;
  }
  function Un() {
  }
  function Sa(s, c, g, y, E, _, P, $, te) {
    var pe = [], ue = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ue, pingedTasks: pe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: E === void 0 ? wa : E, onAllReady: _ === void 0 ? Un : _, onShellReady: P === void 0 ? Un : P, onShellError: $ === void 0 ? Un : $, onFatalError: te === void 0 ? Un : te }, g = hr(c, 0, null, g, !1, !1), g.parentFlushed = !0, s = Zr(c, s, null, g, ue, ee, null, ar), pe.push(s), c;
  }
  function Zr(s, c, g, y, E, _, P, $) {
    s.allPendingTasks++, g === null ? s.pendingRootTasks++ : g.pendingTasks++;
    var te = { node: c, ping: function() {
      var pe = s.pingedTasks;
      pe.push(te), pe.length === 1 && lo(s);
    }, blockedBoundary: g, blockedSegment: y, abortSet: E, legacyContext: _, context: P, treeContext: $ };
    return E.add(te), te;
  }
  function hr(s, c, g, y, E, _) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: g, lastPushedText: E, textEmbedded: _ };
  }
  function qn(s, c) {
    if (s = s.onError(c), s != null && typeof s != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
    return s;
  }
  function mr(s, c) {
    var g = s.onShellError;
    g(c), g = s.onFatalError, g(c), s.destination !== null ? (s.status = 2, b(s.destination, c)) : (s.status = 1, s.fatalError = c);
  }
  function no(s, c, g, y, E) {
    for (zt = {}, Yr = c, Vn = 0, s = g(y, E); ur; ) ur = !1, Vn = 0, dr += 1, Ne = null, s = g(y, E);
    return Gr(), s;
  }
  function ro(s, c, g, y) {
    var E = g.render(), _ = y.childContextTypes;
    if (_ != null) {
      var P = c.legacyContext;
      if (typeof g.getChildContext != "function") y = P;
      else {
        g = g.getChildContext();
        for (var $ in g) if (!($ in _)) throw Error(t(108, H(y) || "Unknown", $));
        y = Qt({}, P, g);
      }
      c.legacyContext = y, mt(s, c, E), c.legacyContext = P;
    } else mt(s, c, E);
  }
  function io(s, c) {
    if (s && s.defaultProps) {
      c = Qt({}, c), s = s.defaultProps;
      for (var g in s) c[g] === void 0 && (c[g] = s[g]);
      return c;
    }
    return c;
  }
  function Jr(s, c, g, y, E) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      E = re(g, c.legacyContext);
      var _ = g.contextType;
      _ = new g(y, typeof _ == "object" && _ !== null ? _._currentValue : E), mn(_, g, y, E), ro(s, c, _, g);
    } else {
      _ = re(g, c.legacyContext), E = no(s, c, g, y, _);
      var P = Vn !== 0;
      if (typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) mn(E, g, y, _), ro(s, c, E, g);
      else if (P) {
        y = c.treeContext, c.treeContext = en(y, 1, 0);
        try {
          mt(s, c, E);
        } finally {
          c.treeContext = y;
        }
      } else mt(s, c, E);
    }
    else if (typeof g == "string") {
      switch (E = c.blockedSegment, _ = ye(E.chunks, g, y, s.responseState, E.formatContext), E.lastPushedText = !1, P = E.formatContext, E.formatContext = xe(P, g, y), Qr(s, c, _), E.formatContext = P, g) {
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
          E.chunks.push(it, h(g), wt);
      }
      E.lastPushedText = !1;
    } else {
      switch (g) {
        case C:
        case x:
        case Fn:
        case $n:
        case pn:
          mt(s, c, y.children);
          return;
        case zn:
          mt(s, c, y.children);
          return;
        case v:
          throw Error(t(343));
        case sr:
          e: {
            g = c.blockedBoundary, E = c.blockedSegment, _ = y.fallback, y = y.children, P = /* @__PURE__ */ new Set();
            var $ = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: P, errorDigest: null }, te = hr(s, E.chunks.length, $, E.formatContext, !1, !1);
            E.children.push(te), E.lastPushedText = !1;
            var pe = hr(s, 0, null, E.formatContext, !1, !1);
            pe.parentFlushed = !0, c.blockedBoundary = $, c.blockedSegment = pe;
            try {
              if (Qr(
                s,
                c,
                y
              ), pe.lastPushedText && pe.textEmbedded && pe.chunks.push(Y), pe.status = 1, gr($, pe), $.pendingTasks === 0) break e;
            } catch (ue) {
              pe.status = 4, $.forceClientRender = !0, $.errorDigest = qn(s, ue);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = E;
            }
            c = Zr(s, _, g, te, P, c.legacyContext, c.context, c.treeContext), s.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case or:
          if (y = no(s, c, g.render, y, E), Vn !== 0) {
            g = c.treeContext, c.treeContext = en(g, 1, 0);
            try {
              mt(s, c, y);
            } finally {
              c.treeContext = g;
            }
          } else mt(s, c, y);
          return;
        case i:
          g = g.type, y = io(g, y), Jr(s, c, g, y, E);
          return;
        case Bn:
          if (E = y.children, g = g._context, y = y.value, _ = g._currentValue, g._currentValue = y, P = se, se = y = { parent: P, depth: P === null ? 0 : P.depth + 1, context: g, parentValue: _, value: y }, c.context = y, mt(s, c, E), s = se, s === null) throw Error(t(403));
          y = s.parentValue, s.context._currentValue = y === T ? s.context._defaultValue : y, s = se = s.parent, c.context = s;
          return;
        case On:
          y = y.children, y = y(g._currentValue), mt(s, c, y);
          return;
        case u:
          E = g._init, g = E(g._payload), y = io(g, y), Jr(s, c, g, y, void 0);
          return;
      }
      throw Error(t(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function mt(s, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ir:
          Jr(s, c, g.type, g.props, g.ref);
          return;
        case fn:
          throw Error(t(257));
        case u:
          var y = g._init;
          g = y(g._payload), mt(s, c, g);
          return;
      }
      if (ze(g)) {
        oo(s, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? y = null : (y = I && g[I] || g["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(g))) {
        if (g = y.next(), !g.done) {
          var E = [];
          do
            E.push(g.value), g = y.next();
          while (!g.done);
          oo(s, c, E);
        }
        return;
      }
      throw s = Object.prototype.toString.call(g), Error(t(31, s === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : s));
    }
    typeof g == "string" ? (y = c.blockedSegment, y.lastPushedText = B(c.blockedSegment.chunks, g, s.responseState, y.lastPushedText)) : typeof g == "number" && (y = c.blockedSegment, y.lastPushedText = B(c.blockedSegment.chunks, "" + g, s.responseState, y.lastPushedText));
  }
  function oo(s, c, g) {
    for (var y = g.length, E = 0; E < y; E++) {
      var _ = c.treeContext;
      c.treeContext = en(_, y, E);
      try {
        Qr(s, c, g[E]);
      } finally {
        c.treeContext = _;
      }
    }
  }
  function Qr(s, c, g) {
    var y = c.blockedSegment.formatContext, E = c.legacyContext, _ = c.context;
    try {
      return mt(s, c, g);
    } catch (te) {
      if (Gr(), typeof te == "object" && te !== null && typeof te.then == "function") {
        g = te;
        var P = c.blockedSegment, $ = hr(s, P.chunks.length, null, P.formatContext, P.lastPushedText, !0);
        P.children.push($), P.lastPushedText = !1, s = Zr(s, c.node, c.blockedBoundary, $, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(s, s), c.blockedSegment.formatContext = y, c.legacyContext = E, c.context = _, Bt(_);
      } else throw c.blockedSegment.formatContext = y, c.legacyContext = E, c.context = _, Bt(_), te;
    }
  }
  function ka(s) {
    var c = s.blockedBoundary;
    s = s.blockedSegment, s.status = 3, ao(this, c, s);
  }
  function so(s, c, g) {
    var y = s.blockedBoundary;
    s.blockedSegment.status = 3, y === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, s = g === void 0 ? Error(t(432)) : g, y.errorDigest = c.onError(s), y.parentFlushed && c.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(E) {
      return so(E, c, g);
    }), y.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (y = c.onAllReady, y()));
  }
  function gr(s, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && gr(s, g);
    } else s.completedSegments.push(c);
  }
  function ao(s, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (s.completedRootSegment !== null) throw Error(t(389));
        s.completedRootSegment = g;
      }
      s.pendingRootTasks--, s.pendingRootTasks === 0 && (s.onShellError = Un, c = s.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && gr(c, g), c.parentFlushed && s.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(ka, s), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (gr(c, g), c.completedSegments.length === 1 && c.parentFlushed && s.partialBoundaries.push(c)));
    s.allPendingTasks--, s.allPendingTasks === 0 && (s = s.onAllReady, s());
  }
  function lo(s) {
    if (s.status !== 2) {
      var c = se, g = Kr.current;
      Kr.current = to;
      var y = pr;
      pr = s.responseState;
      try {
        var E = s.pingedTasks, _;
        for (_ = 0; _ < E.length; _++) {
          var P = E[_], $ = s, te = P.blockedSegment;
          if (te.status === 0) {
            Bt(P.context);
            try {
              mt($, P, P.node), te.lastPushedText && te.textEmbedded && te.chunks.push(Y), P.abortSet.delete(P), te.status = 1, ao($, P.blockedBoundary, te);
            } catch (Rt) {
              if (Gr(), typeof Rt == "object" && Rt !== null && typeof Rt.then == "function") {
                var pe = P.ping;
                Rt.then(pe, pe);
              } else {
                P.abortSet.delete(P), te.status = 4;
                var ue = P.blockedBoundary, Ie = Rt, gt = qn($, Ie);
                if (ue === null ? mr($, Ie) : (ue.pendingTasks--, ue.forceClientRender || (ue.forceClientRender = !0, ue.errorDigest = gt, ue.parentFlushed && $.clientRenderedBoundaries.push(ue))), $.allPendingTasks--, $.allPendingTasks === 0) {
                  var Ct = $.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        E.splice(0, _), s.destination !== null && ei(s, s.destination);
      } catch (Rt) {
        qn(s, Rt), mr(s, Rt);
      } finally {
        pr = y, Kr.current = g, g === to && Bt(c);
      }
    }
  }
  function vr(s, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var y = g.id = s.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, s = s.responseState, o(c, Ge), o(c, s.placeholderPrefix), s = h(y.toString(16)), o(c, s), a(c, sn);
      case 1:
        g.status = 2;
        var E = !0;
        y = g.chunks;
        var _ = 0;
        g = g.children;
        for (var P = 0; P < g.length; P++) {
          for (E = g[P]; _ < E.index; _++) o(c, y[_]);
          E = yr(s, c, E);
        }
        for (; _ < y.length - 1; _++) o(c, y[_]);
        return _ < y.length && (E = a(c, y[_])), E;
      default:
        throw Error(t(390));
    }
  }
  function yr(s, c, g) {
    var y = g.boundary;
    if (y === null) return vr(s, c, g);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, a(c, St), o(c, It), y && (o(c, ln), o(c, h(ae(y))), o(c, an)), a(c, Dn), vr(s, c, g);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = s.nextSegmentId++, 0 < y.completedSegments.length && s.partialBoundaries.push(y);
      var E = s.responseState, _ = E.nextSuspenseID++;
      E = p(E.boundaryPrefix + _.toString(16)), y = y.id = E, Je(c, s.responseState, y), vr(s, c, g);
    } else if (y.byteSize > s.progressiveChunkSize) y.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(y), Je(c, s.responseState, y.id), vr(s, c, g);
    else {
      if (a(c, Ut), g = y.completedSegments, g.length !== 1) throw Error(t(391));
      yr(s, c, g[0]);
    }
    return a(c, pt);
  }
  function co(s, c, g) {
    return Cn(c, s.responseState, g.formatContext, g.id), yr(s, c, g), Mt(c, g.formatContext);
  }
  function uo(s, c, g) {
    for (var y = g.completedSegments, E = 0; E < y.length; E++) fo(s, c, g, y[E]);
    if (y.length = 0, s = s.responseState, y = g.id, g = g.rootSegmentID, o(c, s.startInlineScript), s.sentCompleteBoundaryFunction ? o(c, X) : (s.sentCompleteBoundaryFunction = !0, o(c, D)), y === null) throw Error(t(395));
    return g = h(g.toString(16)), o(c, y), o(c, _e), o(c, s.segmentPrefix), o(c, g), a(c, We);
  }
  function fo(s, c, g, y) {
    if (y.status === 2) return !0;
    var E = y.id;
    if (E === -1) {
      if ((y.id = g.rootSegmentID) === -1) throw Error(t(392));
      return co(s, c, y);
    }
    return co(s, c, y), s = s.responseState, o(c, s.startInlineScript), s.sentCompleteSegmentFunction ? o(c, un) : (s.sentCompleteSegmentFunction = !0, o(c, Rn)), o(c, s.segmentPrefix), E = h(E.toString(16)), o(c, E), o(c, G), o(c, s.placeholderPrefix), o(c, E), a(c, S);
  }
  function ei(s, c) {
    n = new Uint8Array(512), r = 0;
    try {
      var g = s.completedRootSegment;
      if (g !== null && s.pendingRootTasks === 0) {
        yr(s, c, g), s.completedRootSegment = null;
        var y = s.responseState.bootstrapChunks;
        for (g = 0; g < y.length - 1; g++) o(c, y[g]);
        g < y.length && a(c, y[g]);
      }
      var E = s.clientRenderedBoundaries, _;
      for (_ = 0; _ < E.length; _++) {
        var P = E[_];
        y = c;
        var $ = s.responseState, te = P.id, pe = P.errorDigest, ue = P.errorMessage, Ie = P.errorComponentStack;
        if (o(y, $.startInlineScript), $.sentClientRenderFunction ? o(y, Se) : ($.sentClientRenderFunction = !0, o(
          y,
          Fe
        )), te === null) throw Error(t(395));
        o(y, te), o(y, st), (pe || ue || Ie) && (o(y, Ve), o(y, h(Tt(pe || "")))), (ue || Ie) && (o(y, Ve), o(y, h(Tt(ue || "")))), Ie && (o(y, Ve), o(y, h(Tt(Ie)))), a(y, kt);
      }
      E.splice(0, _);
      var gt = s.completedBoundaries;
      for (_ = 0; _ < gt.length; _++) uo(s, c, gt[_]);
      gt.splice(0, _), d(c), n = new Uint8Array(512), r = 0;
      var Ct = s.partialBoundaries;
      for (_ = 0; _ < Ct.length; _++) {
        var Rt = Ct[_];
        e: {
          E = s, P = c;
          var xr = Rt.completedSegments;
          for ($ = 0; $ < xr.length; $++) if (!fo(
            E,
            P,
            Rt,
            xr[$]
          )) {
            $++, xr.splice(0, $);
            var ho = !1;
            break e;
          }
          xr.splice(0, $), ho = !0;
        }
        if (!ho) {
          s.destination = null, _++, Ct.splice(0, _);
          return;
        }
      }
      Ct.splice(0, _);
      var ti = s.completedBoundaries;
      for (_ = 0; _ < ti.length; _++) uo(s, c, ti[_]);
      ti.splice(0, _);
    } finally {
      d(c), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && c.close();
    }
  }
  function po(s, c) {
    try {
      var g = s.abortableTasks;
      g.forEach(function(y) {
        return so(y, s, c);
      }), g.clear(), s.destination !== null && ei(s, s.destination);
    } catch (y) {
      qn(s, y), mr(s, y);
    }
  }
  return Sr.renderToReadableStream = function(s, c) {
    return new Promise(function(g, y) {
      var E, _, P = new Promise(function(ue, Ie) {
        _ = ue, E = Ie;
      }), $ = Sa(s, He(c ? c.identifierPrefix : void 0, c ? c.nonce : void 0, c ? c.bootstrapScriptContent : void 0, c ? c.bootstrapScripts : void 0, c ? c.bootstrapModules : void 0), dt(c ? c.namespaceURI : void 0), c ? c.progressiveChunkSize : void 0, c ? c.onError : void 0, _, function() {
        var ue = new ReadableStream({ type: "bytes", pull: function(Ie) {
          if ($.status === 1) $.status = 2, b(Ie, $.fatalError);
          else if ($.status !== 2 && $.destination === null) {
            $.destination = Ie;
            try {
              ei($, Ie);
            } catch (gt) {
              qn($, gt), mr($, gt);
            }
          }
        }, cancel: function() {
          po($);
        } }, { highWaterMark: 0 });
        ue.allReady = P, g(ue);
      }, function(ue) {
        P.catch(function() {
        }), y(ue);
      }, E);
      if (c && c.signal) {
        var te = c.signal, pe = function() {
          po($, te.reason), te.removeEventListener("abort", pe);
        };
        te.addEventListener("abort", pe);
      }
      lo($);
    });
  }, Sr.version = "18.3.1", Sr;
}
var Mn, ws;
Mn = al(), ws = ll();
Mn.version;
Mn.renderToString;
Mn.renderToStaticMarkup;
Mn.renderToNodeStream;
Mn.renderToStaticNodeStream;
ws.renderToReadableStream;
const cl = "staticMarkup";
function Sn() {
  const t = cs().indexOf(cl) > -1 ? !0 : void 0;
  return {
    isBootstrap: t,
    isReact: t ? void 0 : !0
  };
}
const tt = ({ gaData: e, prefix: t = "", children: n }) => {
  const { isReact: r } = Sn(), { onClick: o, ...a } = n.props;
  if (r)
    return $e.cloneElement(n, {
      ...a,
      onClick: (h) => (bs(e), o ? o(h) : !0)
    });
  let d = "";
  ["input", "header", "header-input"].includes(t) && (d = `-${t}`);
  const m = {
    [`data-ga${d}`]: e.text,
    [`data-ga${d}-name`]: e.name,
    [`data-ga${d}-event`]: e.event,
    [`data-ga${d}-action`]: e.action,
    [`data-ga${d}-type`]: e.type,
    [`data-ga${d}-region`]: e.region,
    [`data-ga${d}-section`]: e.section,
    [`data-ga${d}-component`]: e.component
  };
  return $e.cloneElement(n, {
    ...a,
    onClick: o,
    ...m
  });
}, Ss = ({ id: e, item: t, openCard: n, onClick: r, gaData: o }) => {
  var m, h, p, b, w, R;
  const a = e === n, d = a ? "open" : "close";
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("accordion-item", "mt-3", {
        [`accordion-item-${t.color}`]: t.color,
        "accordion-header-icon": (m = t.content) == null ? void 0 : m.icon
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ f.jsx("h4", { children: /* @__PURE__ */ f.jsx(
          tt,
          {
            gaData: { ...o, action: d, text: t.content.header },
            children: /* @__PURE__ */ f.jsxs(
              "a",
              {
                "data-testid": "accordion-opener",
                className: be({ collapsed: !a }),
                "data-bs-toggle": "collapse",
                href: `#card-body-${e}`,
                role: "button",
                "aria-expanded": a,
                "aria-controls": `card-body-${e}`,
                onClick: (M) => r(M, e),
                children: [
                  (h = t.content) != null && h.icon ? /* @__PURE__ */ f.jsxs("span", { className: "accordion-icon", children: [
                    /* @__PURE__ */ f.jsx(
                      "i",
                      {
                        className: `${(p = t.content.icon) == null ? void 0 : p[0]} fa-${(b = t.content.icon) == null ? void 0 : b[1]} me-2`
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
        ((R = t.content) == null ? void 0 : R.body) && /* @__PURE__ */ f.jsx(
          "div",
          {
            id: `card-body-${e}`,
            className: be("collapse", { show: a }),
            children: /* @__PURE__ */ f.jsx(
              "div",
              {
                className: "accordion-body",
                dangerouslySetInnerHTML: xt(t.content.body)
              }
            )
          }
        )
      ]
    }
  );
};
Ss.propTypes = {
  id: l.number,
  item: ps,
  openCard: l.number,
  onClick: l.func,
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object
};
const ul = {
  event: "collapse",
  name: "onclick",
  type: "click",
  region: "main content"
}, ks = ({ cards: e, openedCard: t }) => {
  const [n, r] = Ke(t), o = (a, d) => {
    a.preventDefault(), r(n !== d ? d : null);
  };
  return /* @__PURE__ */ f.jsx("div", { className: "accordion", children: e == null ? void 0 : e.map(
    (a, d) => a.content.body && a.content.header && /* @__PURE__ */ f.jsx(
      Ss,
      {
        id: d + 1,
        item: a,
        openCard: n,
        onClick: o,
        gaData: ul
      },
      d + 1
    )
  ) });
};
ks.propTypes = {
  /**
   * Cards to show in the accordion component
   */
  cards: l.arrayOf(ps).isRequired,
  /**
   * Opened card based on rendered card position
   */
  openedCard: l.number
};
const dl = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, bn = ({
  label: e = "",
  cardTitle: t = "",
  gaData: n,
  ariaLabel: r,
  block: o,
  color: a = "gray",
  disabled: d,
  element: m = "button",
  href: h,
  icon: p,
  innerRef: b,
  onClick: w,
  size: R = "default",
  classes: M,
  target: O = "_self",
  ...k
}) => {
  const N = be("btn", {
    [`btn-${a}`]: !0,
    "btn-md": R === "small",
    "btn-sm": R === "xsmall",
    "btn-block": o,
    disabled: d
  });
  let j = m;
  return h && m === "button" && (j = "a"), /* @__PURE__ */ f.jsx(
    tt,
    {
      gaData: {
        ...dl,
        section: t,
        // @deprecated - remove at some point
        ...n,
        text: e
      },
      children: /* @__PURE__ */ f.jsxs(
        j,
        {
          type: j === "button" && w ? "button" : void 0,
          ...k,
          className: be(M) || N,
          href: h,
          ref: b,
          onClick: w,
          "aria-label": r,
          target: j === "a" ? O : null,
          children: [
            p && /* @__PURE__ */ f.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
bn.propTypes = {
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
  gaData: Di,
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
var Ts = { exports: {} }, Ee = {};
var No;
function fl() {
  if (No) return Ee;
  No = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), M = Symbol.for("react.client.reference");
  function O(k) {
    if (typeof k == "object" && k !== null) {
      var N = k.$$typeof;
      switch (N) {
        case e:
          switch (k = k.type, k) {
            case n:
            case o:
            case r:
            case h:
            case p:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case m:
                case w:
                case b:
                  return k;
                case a:
                  return k;
                default:
                  return N;
              }
          }
        case t:
          return N;
      }
    }
  }
  return Ee.ContextConsumer = a, Ee.ContextProvider = d, Ee.Element = e, Ee.ForwardRef = m, Ee.Fragment = n, Ee.Lazy = w, Ee.Memo = b, Ee.Portal = t, Ee.Profiler = o, Ee.StrictMode = r, Ee.Suspense = h, Ee.SuspenseList = p, Ee.isContextConsumer = function(k) {
    return O(k) === a;
  }, Ee.isContextProvider = function(k) {
    return O(k) === d;
  }, Ee.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ee.isForwardRef = function(k) {
    return O(k) === m;
  }, Ee.isFragment = function(k) {
    return O(k) === n;
  }, Ee.isLazy = function(k) {
    return O(k) === w;
  }, Ee.isMemo = function(k) {
    return O(k) === b;
  }, Ee.isPortal = function(k) {
    return O(k) === t;
  }, Ee.isProfiler = function(k) {
    return O(k) === o;
  }, Ee.isStrictMode = function(k) {
    return O(k) === r;
  }, Ee.isSuspense = function(k) {
    return O(k) === h;
  }, Ee.isSuspenseList = function(k) {
    return O(k) === p;
  }, Ee.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === o || k === r || k === h || k === p || k === R || typeof k == "object" && k !== null && (k.$$typeof === w || k.$$typeof === b || k.$$typeof === d || k.$$typeof === a || k.$$typeof === m || k.$$typeof === M || k.getModuleId !== void 0);
  }, Ee.typeOf = O, Ee;
}
Ts.exports = fl();
var _s = Ts.exports;
function pl(e) {
  function t(Y, B, q, U, A) {
    for (var de = 0, z = 0, he = 0, ie = 0, oe, J, fe = 0, ve = 0, le, Oe = le = oe = 0, ce = 0, Te = 0, Ye = 0, Ae = 0, vt = q.length, Xe = vt - 1, we, Z = "", ye = "", it = "", wt = "", Ge; ce < vt; ) {
      if (J = q.charCodeAt(ce), ce === Xe && z + ie + he + de !== 0 && (z !== 0 && (J = z === 47 ? 10 : 47), ie = he = de = 0, vt++, Xe++), z + ie + he + de === 0) {
        if (ce === Xe && (0 < Te && (Z = Z.replace(R, "")), 0 < Z.trim().length)) {
          switch (J) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              Z += q.charAt(ce);
          }
          J = 59;
        }
        switch (J) {
          case 123:
            for (Z = Z.trim(), oe = Z.charCodeAt(0), le = 1, Ae = ++ce; ce < vt; ) {
              switch (J = q.charCodeAt(ce)) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch (J = q.charCodeAt(ce + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Oe = ce + 1; Oe < Xe; ++Oe)
                          switch (q.charCodeAt(Oe)) {
                            case 47:
                              if (J === 42 && q.charCodeAt(Oe - 1) === 42 && ce + 2 !== Oe) {
                                ce = Oe + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (J === 47) {
                                ce = Oe + 1;
                                break e;
                              }
                          }
                        ce = Oe;
                      }
                  }
                  break;
                case 91:
                  J++;
                case 40:
                  J++;
                case 34:
                case 39:
                  for (; ce++ < Xe && q.charCodeAt(ce) !== J; )
                    ;
              }
              if (le === 0) break;
              ce++;
            }
            switch (le = q.substring(Ae, ce), oe === 0 && (oe = (Z = Z.replace(w, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < Te && (Z = Z.replace(R, "")), J = Z.charCodeAt(1), J) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Te = B;
                    break;
                  default:
                    Te = ft;
                }
                if (le = t(B, Te, le, J, A + 1), Ae = le.length, 0 < He && (Te = n(ft, Z, Ye), Ge = m(3, le, Te, B, Pe, ne, Ae, J, A, U), Z = Te.join(""), Ge !== void 0 && (Ae = (le = Ge.trim()).length) === 0 && (J = 0, le = "")), 0 < Ae) switch (J) {
                  case 115:
                    Z = Z.replace(Q, d);
                  case 100:
                  case 109:
                  case 45:
                    le = Z + "{" + le + "}";
                    break;
                  case 107:
                    Z = Z.replace(F, "$1 $2"), le = Z + "{" + le + "}", le = Re === 1 || Re === 2 && a("@" + le, 3) ? "@-webkit-" + le + "@" + le : "@" + le;
                    break;
                  default:
                    le = Z + le, U === 112 && (le = (ye += le, ""));
                }
                else le = "";
                break;
              default:
                le = t(B, n(B, Z, Ye), le, U, A + 1);
            }
            it += le, le = Ye = Te = Oe = oe = 0, Z = "", J = q.charCodeAt(++ce);
            break;
          case 125:
          case 59:
            if (Z = (0 < Te ? Z.replace(R, "") : Z).trim(), 1 < (Ae = Z.length)) switch (Oe === 0 && (oe = Z.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (Ae = (Z = Z.replace(" ", ":")).length), 0 < He && (Ge = m(1, Z, B, Y, Pe, ne, ye.length, U, A, U)) !== void 0 && (Ae = (Z = Ge.trim()).length) === 0 && (Z = "\0\0"), oe = Z.charCodeAt(0), J = Z.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (J === 105 || J === 99) {
                  wt += Z + q.charAt(ce);
                  break;
                }
              default:
                Z.charCodeAt(Ae - 1) !== 58 && (ye += o(Z, oe, J, Z.charCodeAt(2)));
            }
            Ye = Te = Oe = oe = 0, Z = "", J = q.charCodeAt(++ce);
        }
      }
      switch (J) {
        case 13:
        case 10:
          z === 47 ? z = 0 : 1 + oe === 0 && U !== 107 && 0 < Z.length && (Te = 1, Z += "\0"), 0 < He * dt && m(0, Z, B, Y, Pe, ne, ye.length, U, A, U), ne = 1, Pe++;
          break;
        case 59:
        case 125:
          if (z + ie + he + de === 0) {
            ne++;
            break;
          }
        default:
          switch (ne++, we = q.charAt(ce), J) {
            case 9:
            case 32:
              if (ie + de + z === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  J !== 32 && (we = " ");
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
              ie + z + de === 0 && (Te = Ye = 1, we = "\f" + we);
              break;
            case 108:
              if (ie + z + de + Be === 0 && 0 < Oe) switch (ce - Oe) {
                case 2:
                  fe === 112 && q.charCodeAt(ce - 3) === 58 && (Be = fe);
                case 8:
                  ve === 111 && (Be = ve);
              }
              break;
            case 58:
              ie + z + de === 0 && (Oe = ce);
              break;
            case 44:
              z + he + ie + de === 0 && (Te = 1, we += "\r");
              break;
            case 34:
            case 39:
              z === 0 && (ie = ie === J ? 0 : ie === 0 ? J : ie);
              break;
            case 91:
              ie + z + he === 0 && de++;
              break;
            case 93:
              ie + z + he === 0 && de--;
              break;
            case 41:
              ie + z + de === 0 && he--;
              break;
            case 40:
              if (ie + z + de === 0) {
                if (oe === 0) switch (2 * fe + 3 * ve) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                he++;
              }
              break;
            case 64:
              z + he + ie + de + Oe + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ie + de + he)) switch (z) {
                case 0:
                  switch (2 * J + 3 * q.charCodeAt(ce + 1)) {
                    case 235:
                      z = 47;
                      break;
                    case 220:
                      Ae = ce, z = 42;
                  }
                  break;
                case 42:
                  J === 47 && fe === 42 && Ae + 2 !== ce && (q.charCodeAt(Ae + 2) === 33 && (ye += q.substring(Ae, ce + 1)), we = "", z = 0);
              }
          }
          z === 0 && (Z += we);
      }
      ve = fe, fe = J, ce++;
    }
    if (Ae = ye.length, 0 < Ae) {
      if (Te = B, 0 < He && (Ge = m(2, ye, Te, Y, Pe, ne, Ae, U, A, U), Ge !== void 0 && (ye = Ge).length === 0)) return wt + ye + it;
      if (ye = Te.join(",") + "{" + ye + "}", Re * Be !== 0) {
        switch (Re !== 2 || a(ye, 2) || (Be = 0), Be) {
          case 111:
            ye = ye.replace(V, ":-moz-$1") + ye;
            break;
          case 112:
            ye = ye.replace(W, "::-webkit-input-$1") + ye.replace(W, "::-moz-$1") + ye.replace(W, ":-ms-input-$1") + ye;
        }
        Be = 0;
      }
    }
    return wt + ye + it;
  }
  function n(Y, B, q) {
    var U = B.trim().split(N);
    B = U;
    var A = U.length, de = Y.length;
    switch (de) {
      case 0:
      case 1:
        var z = 0;
        for (Y = de === 0 ? "" : Y[0] + " "; z < A; ++z)
          B[z] = r(Y, B[z], q).trim();
        break;
      default:
        var he = z = 0;
        for (B = []; z < A; ++z)
          for (var ie = 0; ie < de; ++ie)
            B[he++] = r(Y[ie] + " ", U[z], q).trim();
    }
    return B;
  }
  function r(Y, B, q) {
    var U = B.charCodeAt(0);
    switch (33 > U && (U = (B = B.trim()).charCodeAt(0)), U) {
      case 38:
        return B.replace(j, "$1" + Y.trim());
      case 58:
        return Y.trim() + B.replace(j, "$1" + Y.trim());
      default:
        if (0 < 1 * q && 0 < B.indexOf("\f")) return B.replace(j, (Y.charCodeAt(0) === 58 ? "" : "$1") + Y.trim());
    }
    return Y + B;
  }
  function o(Y, B, q, U) {
    var A = Y + ";", de = 2 * B + 3 * q + 4 * U;
    if (de === 944) {
      Y = A.indexOf(":", 9) + 1;
      var z = A.substring(Y, A.length - 1).trim();
      return z = A.substring(0, Y).trim() + z + ";", Re === 1 || Re === 2 && a(z, 1) ? "-webkit-" + z + z : z;
    }
    if (Re === 0 || Re === 2 && !a(A, 1)) return A;
    switch (de) {
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
        if (0 < A.indexOf("image-set(", 11)) return A.replace(K, "$1-webkit-$2") + A;
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
        return z = A.substring(A.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + z + "-webkit-" + A + "-ms-flex-pack" + z + A;
      case 1005:
        return O.test(A) ? A.replace(M, ":-webkit-") + A.replace(M, ":-moz-") + A : A;
      case 1e3:
        switch (z = A.substring(13).trim(), B = z.indexOf("-") + 1, z.charCodeAt(0) + z.charCodeAt(B)) {
          case 226:
            z = A.replace(L, "tb");
            break;
          case 232:
            z = A.replace(L, "tb-rl");
            break;
          case 220:
            z = A.replace(L, "lr");
            break;
          default:
            return A;
        }
        return "-webkit-" + A + "-ms-" + z + A;
      case 1017:
        if (A.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (B = (A = Y).length - 10, z = (A.charCodeAt(B) === 33 ? A.substring(0, B) : A).substring(Y.indexOf(":", 7) + 1).trim(), de = z.charCodeAt(0) + (z.charCodeAt(7) | 0)) {
          case 203:
            if (111 > z.charCodeAt(8)) break;
          case 115:
            A = A.replace(z, "-webkit-" + z) + ";" + A;
            break;
          case 207:
          case 102:
            A = A.replace(z, "-webkit-" + (102 < de ? "inline-" : "") + "box") + ";" + A.replace(z, "-webkit-" + z) + ";" + A.replace(z, "-ms-" + z + "box") + ";" + A;
        }
        return A + ";";
      case 938:
        if (A.charCodeAt(5) === 45) switch (A.charCodeAt(6)) {
          case 105:
            return z = A.replace("-items", ""), "-webkit-" + A + "-webkit-box-" + z + "-ms-flex-" + z + A;
          case 115:
            return "-webkit-" + A + "-ms-flex-item-" + A.replace(Ce, "") + A;
          default:
            return "-webkit-" + A + "-ms-flex-line-pack" + A.replace("align-content", "").replace(Ce, "") + A;
        }
        break;
      case 973:
      case 989:
        if (A.charCodeAt(3) !== 45 || A.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ze.test(Y) === !0) return (z = Y.substring(Y.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(Y.replace("stretch", "fill-available"), B, q, U).replace(":fill-available", ":stretch") : A.replace(z, "-webkit-" + z) + A.replace(z, "-moz-" + z.replace("fill-", "")) + A;
        break;
      case 962:
        if (A = "-webkit-" + A + (A.charCodeAt(5) === 102 ? "-ms-" + A : "") + A, q + U === 211 && A.charCodeAt(13) === 105 && 0 < A.indexOf("transform", 10)) return A.substring(0, A.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + A;
    }
    return A;
  }
  function a(Y, B) {
    var q = Y.indexOf(B === 1 ? ":" : "{"), U = Y.substring(0, B !== 3 ? q : 10);
    return q = Y.substring(q + 1, Y.length - 1), Ue(B !== 2 ? U : U.replace(De, "$1"), q, B);
  }
  function d(Y, B) {
    var q = o(B, B.charCodeAt(0), B.charCodeAt(1), B.charCodeAt(2));
    return q !== B + ";" ? q.replace(ae, " or ($1)").substring(4) : "(" + B + ")";
  }
  function m(Y, B, q, U, A, de, z, he, ie, oe) {
    for (var J = 0, fe = B, ve; J < He; ++J)
      switch (ve = Ze[J].call(b, Y, fe, q, U, A, de, z, he, ie, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = ve;
      }
    if (fe !== B) return fe;
  }
  function h(Y) {
    switch (Y) {
      case void 0:
      case null:
        He = Ze.length = 0;
        break;
      default:
        if (typeof Y == "function") Ze[He++] = Y;
        else if (typeof Y == "object") for (var B = 0, q = Y.length; B < q; ++B)
          h(Y[B]);
        else dt = !!Y | 0;
    }
    return h;
  }
  function p(Y) {
    return Y = Y.prefix, Y !== void 0 && (Ue = null, Y ? typeof Y != "function" ? Re = 1 : (Re = 2, Ue = Y) : Re = 0), p;
  }
  function b(Y, B) {
    var q = Y;
    if (33 > q.charCodeAt(0) && (q = q.trim()), xe = q, q = [xe], 0 < He) {
      var U = m(-1, B, q, q, Pe, ne, 0, 0, 0, 0);
      U !== void 0 && typeof U == "string" && (B = U);
    }
    var A = t(ft, q, B, 0, 0);
    return 0 < He && (U = m(-2, A, q, q, Pe, ne, A.length, 0, 0, 0), U !== void 0 && (A = U)), xe = "", Be = 0, ne = Pe = 1, A;
  }
  var w = /^\0+/g, R = /[\0\r\f]/g, M = /: */g, O = /zoo|gra/, k = /([,: ])(transform)/g, N = /,\r+?/g, j = /([\t\r\n ])*\f?&/g, F = /@(k\w+)\s*(\S*)\s*/, W = /::(place)/g, V = /:(read-only)/g, L = /[svh]\w+-[tblr]{2}/, Q = /\(\s*(.*)\s*\)/g, ae = /([\s\S]*?);/g, Ce = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ze = /stretch|:\s*\w+\-(?:conte|avail)/, K = /([^-])(image-set\()/, ne = 1, Pe = 1, Be = 0, Re = 1, ft = [], Ze = [], He = 0, Ue = null, dt = 0, xe = "";
  return b.use = h, b.set = p, e !== void 0 && p(e), b;
}
var hl = {
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
function ml(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var gl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Io = /* @__PURE__ */ ml(
  function(e) {
    return gl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Es = { exports: {} }, ke = {};
var Po;
function vl() {
  if (Po) return ke;
  Po = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, m = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, R = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, N = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function W(L) {
    if (typeof L == "object" && L !== null) {
      var Q = L.$$typeof;
      switch (Q) {
        case t:
          switch (L = L.type, L) {
            case h:
            case p:
            case r:
            case a:
            case o:
            case w:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case m:
                case b:
                case O:
                case M:
                case d:
                  return L;
                default:
                  return Q;
              }
          }
        case n:
          return Q;
      }
    }
  }
  function V(L) {
    return W(L) === p;
  }
  return ke.AsyncMode = h, ke.ConcurrentMode = p, ke.ContextConsumer = m, ke.ContextProvider = d, ke.Element = t, ke.ForwardRef = b, ke.Fragment = r, ke.Lazy = O, ke.Memo = M, ke.Portal = n, ke.Profiler = a, ke.StrictMode = o, ke.Suspense = w, ke.isAsyncMode = function(L) {
    return V(L) || W(L) === h;
  }, ke.isConcurrentMode = V, ke.isContextConsumer = function(L) {
    return W(L) === m;
  }, ke.isContextProvider = function(L) {
    return W(L) === d;
  }, ke.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === t;
  }, ke.isForwardRef = function(L) {
    return W(L) === b;
  }, ke.isFragment = function(L) {
    return W(L) === r;
  }, ke.isLazy = function(L) {
    return W(L) === O;
  }, ke.isMemo = function(L) {
    return W(L) === M;
  }, ke.isPortal = function(L) {
    return W(L) === n;
  }, ke.isProfiler = function(L) {
    return W(L) === a;
  }, ke.isStrictMode = function(L) {
    return W(L) === o;
  }, ke.isSuspense = function(L) {
    return W(L) === w;
  }, ke.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === r || L === p || L === a || L === o || L === w || L === R || typeof L == "object" && L !== null && (L.$$typeof === O || L.$$typeof === M || L.$$typeof === d || L.$$typeof === m || L.$$typeof === b || L.$$typeof === N || L.$$typeof === j || L.$$typeof === F || L.$$typeof === k);
  }, ke.typeOf = W, ke;
}
Es.exports = vl();
var yl = Es.exports, Fi = yl, xl = {
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
}, bl = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wl = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Cs = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, $i = {};
$i[Fi.ForwardRef] = wl;
$i[Fi.Memo] = Cs;
function Lo(e) {
  return Fi.isMemo(e) ? Cs : $i[e.$$typeof] || xl;
}
var Sl = Object.defineProperty, kl = Object.getOwnPropertyNames, Mo = Object.getOwnPropertySymbols, Tl = Object.getOwnPropertyDescriptor, _l = Object.getPrototypeOf, Do = Object.prototype;
function Rs(e, t, n) {
  if (typeof t != "string") {
    if (Do) {
      var r = _l(t);
      r && r !== Do && Rs(e, r, n);
    }
    var o = kl(t);
    Mo && (o = o.concat(Mo(t)));
    for (var a = Lo(e), d = Lo(t), m = 0; m < o.length; ++m) {
      var h = o[m];
      if (!bl[h] && !(n && n[h]) && !(d && d[h]) && !(a && a[h])) {
        var p = Tl(t, h);
        try {
          Sl(e, h, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var El = Rs;
const Cl = /* @__PURE__ */ Mi(El);
var rt = { env: { NODE_ENV: "production" } };
function Wt() {
  return (Wt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Fo = function(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}, vi = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !_s.typeOf(e);
}, Lr = Object.freeze([]), rn = Object.freeze({});
function tr(e) {
  return typeof e == "function";
}
function $o(e) {
  return e.displayName || e.name || "Component";
}
function Bi(e) {
  return e && typeof e.styledComponentId == "string";
}
var jn = typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_ATTR || rt.env.SC_ATTR) || "data-styled", zi = typeof window < "u" && "HTMLElement" in window, Rl = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof rt < "u" && rt.env !== void 0 && (rt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? rt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && rt.env.REACT_APP_SC_DISABLE_SPEEDY : rt.env.SC_DISABLE_SPEEDY !== void 0 && rt.env.SC_DISABLE_SPEEDY !== "" ? rt.env.SC_DISABLE_SPEEDY !== "false" && rt.env.SC_DISABLE_SPEEDY : rt.env.NODE_ENV !== "production"));
function nr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var Ol = function() {
  function e(n) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = n;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(n) {
    for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
    return r;
  }, t.insertRules = function(n, r) {
    if (n >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, d = a; n >= d; ) (d <<= 1) < 0 && nr(16, "" + n);
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var m = a; m < d; m++) this.groupSizes[m] = 0;
    }
    for (var h = this.indexOfGroup(n + 1), p = 0, b = r.length; p < b; p++) this.tag.insertRule(h, r[p]) && (this.groupSizes[n]++, h++);
  }, t.clearGroup = function(n) {
    if (n < this.length) {
      var r = this.groupSizes[n], o = this.indexOfGroup(n), a = o + r;
      this.groupSizes[n] = 0;
      for (var d = o; d < a; d++) this.tag.deleteRule(o);
    }
  }, t.getGroup = function(n) {
    var r = "";
    if (n >= this.length || this.groupSizes[n] === 0) return r;
    for (var o = this.groupSizes[n], a = this.indexOfGroup(n), d = a + o, m = a; m < d; m++) r += this.tag.getRule(m) + `/*!sc*/
`;
    return r;
  }, e;
}(), Or = /* @__PURE__ */ new Map(), Mr = /* @__PURE__ */ new Map(), Qn = 1, kr = function(e) {
  if (Or.has(e)) return Or.get(e);
  for (; Mr.has(Qn); ) Qn++;
  var t = Qn++;
  return Or.set(e, t), Mr.set(t, e), t;
}, Al = function(e) {
  return Mr.get(e);
}, jl = function(e, t) {
  t >= Qn && (Qn = t + 1), Or.set(e, t), Mr.set(t, e);
}, Nl = "style[" + jn + '][data-styled-version="5.3.11"]', Il = new RegExp("^" + jn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Pl = function(e, t, n) {
  for (var r, o = n.split(","), a = 0, d = o.length; a < d; a++) (r = o[a]) && e.registerName(t, r);
}, Ll = function(e, t) {
  for (var n = (t.textContent || "").split(`/*!sc*/
`), r = [], o = 0, a = n.length; o < a; o++) {
    var d = n[o].trim();
    if (d) {
      var m = d.match(Il);
      if (m) {
        var h = 0 | parseInt(m[1], 10), p = m[2];
        h !== 0 && (jl(p, h), Pl(e, p, m[3]), e.getTag().insertRules(h, r)), r.length = 0;
      } else r.push(d);
    }
  }
}, Ml = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Os = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), o = function(m) {
    for (var h = m.childNodes, p = h.length; p >= 0; p--) {
      var b = h[p];
      if (b && b.nodeType === 1 && b.hasAttribute(jn)) return b;
    }
  }(n), a = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(jn, "active"), r.setAttribute("data-styled-version", "5.3.11");
  var d = Ml();
  return d && r.setAttribute("nonce", d), n.insertBefore(r, a), r;
}, Dl = function() {
  function e(n) {
    var r = this.element = Os(n);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet) return o.sheet;
      for (var a = document.styleSheets, d = 0, m = a.length; d < m; d++) {
        var h = a[d];
        if (h.ownerNode === o) return h;
      }
      nr(17);
    }(r), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    try {
      return this.sheet.insertRule(r, n), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(n) {
    this.sheet.deleteRule(n), this.length--;
  }, t.getRule = function(n) {
    var r = this.sheet.cssRules[n];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), Fl = function() {
  function e(n) {
    var r = this.element = Os(n);
    this.nodes = r.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    if (n <= this.length && n >= 0) {
      var o = document.createTextNode(r), a = this.nodes[n];
      return this.element.insertBefore(o, a || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(n) {
    this.element.removeChild(this.nodes[n]), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.nodes[n].textContent : "";
  }, e;
}(), $l = function() {
  function e(n) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(n, r) {
    return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
  }, t.deleteRule = function(n) {
    this.rules.splice(n, 1), this.length--;
  }, t.getRule = function(n) {
    return n < this.length ? this.rules[n] : "";
  }, e;
}(), Bo = zi, Bl = { isServer: !zi, useCSSOMInjection: !Rl }, As = function() {
  function e(n, r, o) {
    n === void 0 && (n = rn), r === void 0 && (r = {}), this.options = Wt({}, Bl, {}, n), this.gs = r, this.names = new Map(o), this.server = !!n.isServer, !this.server && zi && Bo && (Bo = !1, function(a) {
      for (var d = document.querySelectorAll(Nl), m = 0, h = d.length; m < h; m++) {
        var p = d[m];
        p && p.getAttribute(jn) !== "active" && (Ll(a, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(n) {
    return kr(n);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(n, r) {
    return r === void 0 && (r = !0), new e(Wt({}, this.options, {}, n), this.gs, r && this.names || void 0);
  }, t.allocateGSInstance = function(n) {
    return this.gs[n] = (this.gs[n] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, a = r.useCSSOMInjection, d = r.target, n = o ? new $l(d) : a ? new Dl(d) : new Fl(d), new Ol(n)));
    var n, r, o, a, d;
  }, t.hasNameForId = function(n, r) {
    return this.names.has(n) && this.names.get(n).has(r);
  }, t.registerName = function(n, r) {
    if (kr(n), this.names.has(n)) this.names.get(n).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(n, o);
    }
  }, t.insertRules = function(n, r, o) {
    this.registerName(n, r), this.getTag().insertRules(kr(n), o);
  }, t.clearNames = function(n) {
    this.names.has(n) && this.names.get(n).clear();
  }, t.clearRules = function(n) {
    this.getTag().clearGroup(kr(n)), this.clearNames(n);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(n) {
      for (var r = n.getTag(), o = r.length, a = "", d = 0; d < o; d++) {
        var m = Al(d);
        if (m !== void 0) {
          var h = n.names.get(m), p = r.getGroup(d);
          if (h && p && h.size) {
            var b = jn + ".g" + d + '[id="' + m + '"]', w = "";
            h !== void 0 && h.forEach(function(R) {
              R.length > 0 && (w += R + ",");
            }), a += "" + p + b + '{content:"' + w + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), zl = /(a)(d)/gi, zo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function yi(e) {
  var t, n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = zo(t % 52) + n;
  return (zo(t % 52) + n).replace(zl, "$1-$2");
}
var An = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, js = function(e) {
  return An(5381, e);
};
function Hl(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (tr(n) && !Bi(n)) return !1;
  }
  return !0;
}
var Wl = js("5.3.11"), Vl = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (r === void 0 || r.isStatic) && Hl(t), this.componentId = n, this.baseHash = An(Wl, n), this.baseStyle = r, As.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var o = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId)) a.push(this.staticRulesId);
    else {
      var d = Nn(this.rules, t, n, r).join(""), m = yi(An(this.baseHash, d) >>> 0);
      if (!n.hasNameForId(o, m)) {
        var h = r(d, "." + m, void 0, o);
        n.insertRules(o, m, h);
      }
      a.push(m), this.staticRulesId = m;
    }
    else {
      for (var p = this.rules.length, b = An(this.baseHash, r.hash), w = "", R = 0; R < p; R++) {
        var M = this.rules[R];
        if (typeof M == "string") w += M;
        else if (M) {
          var O = Nn(M, t, n, r), k = Array.isArray(O) ? O.join("") : O;
          b = An(b, k + R), w += k;
        }
      }
      if (w) {
        var N = yi(b >>> 0);
        if (!n.hasNameForId(o, N)) {
          var j = r(w, "." + N, void 0, o);
          n.insertRules(o, N, j);
        }
        a.push(N);
      }
    }
    return a.join(" ");
  }, e;
}(), Ul = /^\s*\/\/.*$/gm, ql = [":", "[", ".", "#"];
function Yl(e) {
  var t, n, r, o, a = rn, d = a.options, m = d === void 0 ? rn : d, h = a.plugins, p = h === void 0 ? Lr : h, b = new pl(m), w = [], R = /* @__PURE__ */ function(k) {
    function N(j) {
      if (j) try {
        k(j + "}");
      } catch {
      }
    }
    return function(j, F, W, V, L, Q, ae, Ce, De, ze) {
      switch (j) {
        case 1:
          if (De === 0 && F.charCodeAt(0) === 64) return k(F + ";"), "";
          break;
        case 2:
          if (Ce === 0) return F + "/*|*/";
          break;
        case 3:
          switch (Ce) {
            case 102:
            case 112:
              return k(W[0] + F), "";
            default:
              return F + (ze === 0 ? "/*|*/" : "");
          }
        case -2:
          F.split("/*|*/}").forEach(N);
      }
    };
  }(function(k) {
    w.push(k);
  }), M = function(k, N, j) {
    return N === 0 && ql.indexOf(j[n.length]) !== -1 || j.match(o) ? k : "." + t;
  };
  function O(k, N, j, F) {
    F === void 0 && (F = "&");
    var W = k.replace(Ul, ""), V = N && j ? j + " " + N + " { " + W + " }" : W;
    return t = F, n = N, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), b(j || !N ? "" : N, V);
  }
  return b.use([].concat(p, [function(k, N, j) {
    k === 2 && j.length && j[0].lastIndexOf(n) > 0 && (j[0] = j[0].replace(r, M));
  }, R, function(k) {
    if (k === -2) {
      var N = w;
      return w = [], N;
    }
  }])), O.hash = p.length ? p.reduce(function(k, N) {
    return N.name || nr(15), An(k, N.name);
  }, 5381).toString() : "", O;
}
var Ns = $e.createContext();
Ns.Consumer;
var Is = $e.createContext(), Xl = (Is.Consumer, new As()), xi = Yl();
function Gl() {
  return Li(Ns) || Xl;
}
function Kl() {
  return Li(Is) || xi;
}
var Zl = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(o, a) {
      a === void 0 && (a = xi);
      var d = r.name + a.hash;
      o.hasNameForId(r.id, d) || o.insertRules(r.id, d, a(r.rules, d, "@keyframes"));
    }, this.toString = function() {
      return nr(12, String(r.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = n;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xi), this.name + t.hash;
  }, e;
}(), Jl = /([A-Z])/, Ql = /([A-Z])/g, ec = /^ms-/, tc = function(e) {
  return "-" + e.toLowerCase();
};
function Ho(e) {
  return Jl.test(e) ? e.replace(Ql, tc).replace(ec, "-ms-") : e;
}
var Wo = function(e) {
  return e == null || e === !1 || e === "";
};
function Nn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, a = [], d = 0, m = e.length; d < m; d += 1) (o = Nn(e[d], t, n, r)) !== "" && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (Wo(e)) return "";
  if (Bi(e)) return "." + e.styledComponentId;
  if (tr(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return Nn(h, t, n, r);
  }
  var p;
  return e instanceof Zl ? n ? (e.inject(n, r), e.getName(r)) : e : vi(e) ? function b(w, R) {
    var M, O, k = [];
    for (var N in w) w.hasOwnProperty(N) && !Wo(w[N]) && (Array.isArray(w[N]) && w[N].isCss || tr(w[N]) ? k.push(Ho(N) + ":", w[N], ";") : vi(w[N]) ? k.push.apply(k, b(w[N], N)) : k.push(Ho(N) + ": " + (M = N, (O = w[N]) == null || typeof O == "boolean" || O === "" ? "" : typeof O != "number" || O === 0 || M in hl || M.startsWith("--") ? String(O).trim() : O + "px") + ";"));
    return R ? [R + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Vo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function nc(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return tr(e) || vi(e) ? Vo(Nn(Fo(Lr, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Vo(Nn(Fo(e, n)));
}
var rc = function(e, t, n) {
  return n === void 0 && (n = rn), e.theme !== n.theme && e.theme || t || n.theme;
}, ic = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, oc = /(^-|-$)/g;
function di(e) {
  return e.replace(ic, "-").replace(oc, "");
}
var sc = function(e) {
  return yi(js(e) >>> 0);
};
function Tr(e) {
  return typeof e == "string" && rt.env.NODE_ENV === "production";
}
var bi = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, ac = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function lc(e, t, n) {
  var r = e[n];
  bi(t) && bi(r) ? Ps(r, t) : e[n] = t;
}
function Ps(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, a = n; o < a.length; o++) {
    var d = a[o];
    if (bi(d)) for (var m in d) ac(m) && lc(e, d[m], m);
  }
  return e;
}
var Ls = $e.createContext();
Ls.Consumer;
var fi = {};
function Ms(e, t, n) {
  var r = Bi(e), o = !Tr(e), a = t.attrs, d = a === void 0 ? Lr : a, m = t.componentId, h = m === void 0 ? function(F, W) {
    var V = typeof F != "string" ? "sc" : di(F);
    fi[V] = (fi[V] || 0) + 1;
    var L = V + "-" + sc("5.3.11" + V + fi[V]);
    return W ? W + "-" + L : L;
  }(t.displayName, t.parentComponentId) : m, p = t.displayName, b = p === void 0 ? function(F) {
    return Tr(F) ? "styled." + F : "Styled(" + $o(F) + ")";
  }(e) : p, w = t.displayName && t.componentId ? di(t.displayName) + "-" + t.componentId : t.componentId || h, R = r && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d, M = t.shouldForwardProp;
  r && e.shouldForwardProp && (M = t.shouldForwardProp ? function(F, W, V) {
    return e.shouldForwardProp(F, W, V) && t.shouldForwardProp(F, W, V);
  } : e.shouldForwardProp);
  var O, k = new Vl(n, w, r ? e.componentStyle : void 0), N = k.isStatic && d.length === 0, j = function(F, W) {
    return function(V, L, Q, ae) {
      var Ce = V.attrs, De = V.componentStyle, ze = V.defaultProps, K = V.foldedComponentIds, ne = V.shouldForwardProp, Pe = V.styledComponentId, Be = V.target, Re = function(U, A, de) {
        U === void 0 && (U = rn);
        var z = Wt({}, A, { theme: U }), he = {};
        return de.forEach(function(ie) {
          var oe, J, fe, ve = ie;
          for (oe in tr(ve) && (ve = ve(z)), ve) z[oe] = he[oe] = oe === "className" ? (J = he[oe], fe = ve[oe], J && fe ? J + " " + fe : J || fe) : ve[oe];
        }), [z, he];
      }(rc(L, Li(Ls), ze) || rn, L, Ce), ft = Re[0], Ze = Re[1], He = function(U, A, de, z) {
        var he = Gl(), ie = Kl(), oe = A ? U.generateAndInjectStyles(rn, he, ie) : U.generateAndInjectStyles(de, he, ie);
        return oe;
      }(De, ae, ft), Ue = Q, dt = Ze.$as || L.$as || Ze.as || L.as || Be, xe = Tr(dt), Y = Ze !== L ? Wt({}, L, {}, Ze) : L, B = {};
      for (var q in Y) q[0] !== "$" && q !== "as" && (q === "forwardedAs" ? B.as = Y[q] : (ne ? ne(q, Io, dt) : !xe || Io(q)) && (B[q] = Y[q]));
      return L.style && Ze.style !== L.style && (B.style = Wt({}, L.style, {}, Ze.style)), B.className = Array.prototype.concat(K, Pe, He !== Pe ? He : null, L.className, Ze.className).filter(Boolean).join(" "), B.ref = Ue, Ta(dt, B);
    }(O, F, W, N);
  };
  return j.displayName = b, (O = $e.forwardRef(j)).attrs = R, O.componentStyle = k, O.displayName = b, O.shouldForwardProp = M, O.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Lr, O.styledComponentId = w, O.target = r ? e.target : e, O.withComponent = function(F) {
    var W = t.componentId, V = function(Q, ae) {
      if (Q == null) return {};
      var Ce, De, ze = {}, K = Object.keys(Q);
      for (De = 0; De < K.length; De++) Ce = K[De], ae.indexOf(Ce) >= 0 || (ze[Ce] = Q[Ce]);
      return ze;
    }(t, ["componentId"]), L = W && W + "-" + (Tr(F) ? F : di($o(F)));
    return Ms(F, Wt({}, V, { attrs: R, componentId: L }), n);
  }, Object.defineProperty(O, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(F) {
    this._foldedDefaultProps = r ? Ps({}, e.defaultProps, F) : F;
  } }), Object.defineProperty(O, "toString", { value: function() {
    return "." + O.styledComponentId;
  } }), o && Cl(O, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), O;
}
var jt = function(e) {
  return function t(n, r, o) {
    if (o === void 0 && (o = rn), !_s.isValidElementType(r)) return nr(1, String(r));
    var a = function() {
      return n(r, o, nc.apply(void 0, arguments));
    };
    return a.withConfig = function(d) {
      return t(n, r, Wt({}, o, {}, d));
    }, a.attrs = function(d) {
      return t(n, r, Wt({}, o, { attrs: Array.prototype.concat(o.attrs, d).filter(Boolean) }));
    }, a;
  }(Ms, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  jt[e] = jt(e);
});
const cc = jt.div`
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
`, Ar = "On This Page", uc = {
  event: "collapse",
  name: "onclick",
  type: "click",
  text: Ar
}, Ds = ({
  items: e,
  firstElementId: t,
  focusFirstFocusableElement: n = !1
}) => {
  const { isReact: r, isBootstrap: o } = Sn(), a = wn(null), d = Da("(max-width: 991px)"), [m, h] = Ke({
    hasHeader: !1,
    hasAltMenuSpacing: !1,
    containerClass: "container-xl",
    activeContainer: "",
    showMenu: !1,
    sticky: !1
  }), p = d ? 110 : 142, b = () => {
    var Q;
    const j = {}, F = window.scrollY, W = (Q = document.getElementById(t)) == null ? void 0 : Q.getBoundingClientRect().top, V = 103;
    W >= 0 && (j.sticky = !1, j.activeContainer = ""), F > a.current.getBoundingClientRect().top && (j.sticky = !0);
    const L = m.hasHeader ? p + V : V;
    e == null || e.forEach(({ targetIdName: ae }) => {
      const Ce = document.getElementById(ae), De = (Ce == null ? void 0 : Ce.getBoundingClientRect().top) - L, ze = (Ce == null ? void 0 : Ce.getBoundingClientRect().bottom) - L;
      De < 0 && ze > 0 && (j.activeContainer = ae);
    }), h((ae) => ({
      ...ae,
      ...j
    }));
  }, w = () => {
    mi(b, 150), gi(b, 150);
  }, R = () => !!(document.getElementById("asu-header") || document.getElementById("headerContainer") || document.getElementById("asuHeader")), M = () => !!document.getElementById(
    "degreeDetailPageContainer"
  );
  function O(j = null) {
    if (j === null) return m.containerClass;
    const F = Object.values(j.classList).filter(
      (W) => [
        "container-sm",
        "container-md",
        "container",
        "container-lg",
        "container-xl",
        "container-fluid"
      ].includes(W)
    );
    return F.length > 0 ? F.join(" ") : O(j.parentElement);
  }
  lt(() => {
    const j = document.getElementById(t) || null, F = {
      hasHeader: R(),
      hasAltMenuSpacing: M(),
      containerClass: O(j)
    };
    h((W) => ({
      ...W,
      ...F
    }));
  }, []), lt(() => (window == null || window.addEventListener("scroll", w), () => window.removeEventListener("scroll", w)), [m.hasHeader]);
  const k = (j) => {
    var L, Q;
    const F = window.scrollY - (m.hasHeader ? p + 100 : 100), W = d ? 410 : 90;
    let V = ((L = document.getElementById(j)) == null ? void 0 : L.getBoundingClientRect().top) + F;
    a.current.classList.contains("sticky") || (V -= W), n && ((Q = sl(`#${j}`)) == null || Q.focus()), window.scrollTo({ top: V, behavior: "smooth" });
  }, N = () => {
    h((j) => ({
      ...j,
      showMenu: !j.showMenu
    }));
  };
  return (e == null ? void 0 : e.length) > 0 && /* @__PURE__ */ f.jsx(
    cc,
    {
      requiresAltMenuSpacing: m.hasAltMenuSpacing,
      ref: a,
      id: "uds-anchor-menu",
      className: be(
        "uds-anchor-menu",
        "uds-anchor-menu-expanded-lg",
        "mb-4",
        {
          sticky: m.sticky,
          "with-header": m.hasHeader
        }
      ),
      style: m.showMenu ? { borderBottom: 0 } : {},
      children: /* @__PURE__ */ f.jsxs("div", { className: `${m.containerClass} uds-anchor-menu-wrapper`, children: [
        d ? /* @__PURE__ */ f.jsx(
          tt,
          {
            gaData: {
              ...uc,
              action: m.showMenu ? "close" : "open"
            },
            children: /* @__PURE__ */ f.jsx(
              "button",
              {
                className: be("mobile-menu-toggler", {
                  "show-menu": m.showMenu
                }),
                type: "button",
                onClick: N,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#collapseAnchorMenu",
                "aria-controls": "collapseAnchorMenu",
                children: /* @__PURE__ */ f.jsxs("h4", { children: [
                  Ar,
                  ":",
                  /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-down" })
                ] })
              }
            )
          }
        ) : /* @__PURE__ */ f.jsxs("h4", { children: [
          Ar,
          ":"
        ] }),
        /* @__PURE__ */ f.jsx(
          "div",
          {
            "data-testid": "anchor-menu-container",
            id: "collapseAnchorMenu",
            className: be("card", "card-body", "collapse", {
              show: m.showMenu
            }),
            children: /* @__PURE__ */ f.jsx(
              "nav",
              {
                "data-testid": "anchor-menu",
                className: "nav",
                "aria-label": Ar,
                children: e == null ? void 0 : e.map((j) => (
                  // Use this package button
                  // @ts-ignore
                  /* @__PURE__ */ f.jsx(
                    bn,
                    {
                      "data-testid": `anchor-item-${j.targetIdName}`,
                      classes: be("nav-link", {
                        active: m.activeContainer === j.targetIdName
                      }).split(" "),
                      ariaLabel: j.text,
                      label: j.text,
                      icon: j.icon,
                      onClick: r && (() => k(j.targetIdName)),
                      href: o && `#${j.targetIdName}`
                    },
                    j.targetIdName
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
Ds.propTypes = {
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
var wi = function() {
  return wi = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, wi.apply(this, arguments);
}, dc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Br(e) {
  var t = function(n) {
    var r = n.bgStyle, o = n.borderRadius, a = n.iconFillColor, d = n.round, m = n.size, h = dc(n, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return $e.createElement(
      "svg",
      wi({ viewBox: "0 0 64 64", width: m, height: m }, h),
      d ? $e.createElement("circle", { cx: "32", cy: "32", r: "31", fill: e.color, style: r }) : $e.createElement("rect", { width: "64", height: "64", rx: o, ry: o, fill: e.color, style: r }),
      $e.createElement("path", { d: e.path, fill: a })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
var fc = Br({
  color: "#7f7f7f",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
function zr(e) {
  var t = Object.entries(e).filter(function(n) {
    var r = n[1];
    return r != null;
  }).map(function(n) {
    var r = n[0], o = n[1];
    return "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(String(o)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var pc = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Ht = function() {
  return Ht = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Ht.apply(this, arguments);
}, hc = function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(d) {
      d(a);
    });
  }
  return new (n || (n = Promise))(function(a, d) {
    function m(b) {
      try {
        p(r.next(b));
      } catch (w) {
        d(w);
      }
    }
    function h(b) {
      try {
        p(r.throw(b));
      } catch (w) {
        d(w);
      }
    }
    function p(b) {
      b.done ? a(b.value) : o(b.value).then(m, h);
    }
    p((r = r.apply(e, t || [])).next());
  });
}, mc = function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, d;
  return d = { next: m(0), throw: m(1), return: m(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function m(p) {
    return function(b) {
      return h([p, b]);
    };
  }
  function h(p) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, o && (a = p[0] & 2 ? o.return : p[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, p[1])).done) return a;
      switch (o = 0, a && (p = [p[0] & 2, a.value]), p[0]) {
        case 0:
        case 1:
          a = p;
          break;
        case 4:
          return n.label++, { value: p[1], done: !1 };
        case 5:
          n.label++, o = p[1], p = [0];
          continue;
        case 7:
          p = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            n = 0;
            continue;
          }
          if (p[0] === 3 && (!a || p[1] > a[0] && p[1] < a[3])) {
            n.label = p[1];
            break;
          }
          if (p[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = p;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(p);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      p = t.call(e, n);
    } catch (b) {
      p = [6, b], o = 0;
    } finally {
      r = a = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, Fs = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}, gc = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, vc = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, yc = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function xc(e, t, n) {
  var r = t.height, o = t.width, a = Fs(t, ["height", "width"]), d = Ht({ height: r, width: o, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, a), m = window.open(e, "", Object.keys(d).map(function(p) {
    return "".concat(p, "=").concat(d[p]);
  }).join(", "));
  if (n)
    var h = window.setInterval(function() {
      try {
        (m === null || m.closed) && (window.clearInterval(h), n(m));
      } catch (p) {
        console.error(p);
      }
    }, 1e3);
  return m;
}
var bc = (
  /** @class */
  function(e) {
    pc(t, e);
    function t() {
      var n = e !== null && e.apply(this, arguments) || this;
      return n.openShareDialog = function(r) {
        var o = n.props, a = o.onShareWindowClose, d = o.windowHeight, m = d === void 0 ? 400 : d, h = o.windowPosition, p = h === void 0 ? "windowCenter" : h, b = o.windowWidth, w = b === void 0 ? 550 : b, R = Ht({ height: m, width: w }, p === "windowCenter" ? vc(w, m) : yc(w, m));
        xc(r, R, a);
      }, n.handleClick = function(r) {
        return hc(n, void 0, void 0, function() {
          var o, a, d, m, h, p, b, w, R, M;
          return mc(this, function(O) {
            switch (O.label) {
              case 0:
                return o = this.props, a = o.beforeOnClick, d = o.disabled, m = o.networkLink, h = o.onClick, p = o.url, b = o.openShareDialogOnClick, w = o.opts, R = m(p, w), d ? [
                  2
                  /*return*/
                ] : (r.preventDefault(), a ? (M = a(), gc(M) ? [4, M] : [3, 2]) : [3, 2]);
              case 1:
                O.sent(), O.label = 2;
              case 2:
                return b && this.openShareDialog(R), h && h(r, R), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, n;
    }
    return t.prototype.render = function() {
      var n = this.props;
      n.beforeOnClick;
      var r = n.children, o = n.className, a = n.disabled, d = n.disabledStyle, m = n.forwardedRef;
      n.networkLink;
      var h = n.networkName;
      n.onShareWindowClose, n.openShareDialogOnClick, n.opts;
      var p = n.resetButtonStyle, b = n.style;
      n.url, n.windowHeight, n.windowPosition, n.windowWidth;
      var w = Fs(n, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), R = be("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!a,
        disabled: !!a
      }, o), M = Ht(Ht(p ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, b), a && d);
      return $e.createElement("button", Ht({}, w, { "aria-label": w["aria-label"] || h, className: R, onClick: this.handleClick, ref: m, style: M }), r);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(_a)
), Dr = function() {
  return Dr = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Dr.apply(this, arguments);
};
function Hr(e, t, n, r) {
  function o(a, d) {
    var m = n(a), h = Dr({}, a), p = Object.keys(m);
    return p.forEach(function(b) {
      delete h[b];
    }), $e.createElement(bc, Dr({}, r, h, { forwardedRef: d, networkName: e, networkLink: t, opts: n(a) }));
  }
  return o.displayName = "ShareButton-".concat(e), us(o);
}
function wc(e, t) {
  var n = t.subject, r = t.body, o = t.separator;
  return "mailto:" + zr({ subject: n, body: r ? r + o + e : e });
}
var Sc = Hr("email", wc, function(e) {
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
}), Uo = Br({
  color: "#3b5998",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
}), kc = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
      r.__proto__ = o;
    } || function(r, o) {
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Tc = (
  /** @class */
  function(e) {
    kc(t, e);
    function t(n) {
      var r = e.call(this, n) || this;
      return r.name = "AssertionError", r;
    }
    return t;
  }(Error)
);
function er(e, t) {
  if (!e)
    throw new Tc(t);
}
function _c(e, t) {
  var n = t.quote, r = t.hashtag;
  return er(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + zr({
    u: e,
    quote: n,
    hashtag: r
  });
}
var qo = Hr("facebook", _c, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
}), Yo = Br({
  color: "#007fb1",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
function Ec(e, t) {
  var n = t.title, r = t.summary, o = t.source;
  return er(e, "linkedin.url"), "https://linkedin.com/shareArticle" + zr({ url: e, mini: "true", title: n, summary: r, source: o });
}
var Xo = Hr("linkedin", Ec, function(e) {
  var t = e.title, n = e.summary, r = e.source;
  return { title: t, summary: n, source: r };
}, {
  windowWidth: 750,
  windowHeight: 600
}), Go = Br({
  color: "#00aced",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
function Cc(e, t) {
  var n = t.title, r = t.via, o = t.hashtags, a = o === void 0 ? [] : o, d = t.related, m = d === void 0 ? [] : d;
  return er(e, "twitter.url"), er(Array.isArray(a), "twitter.hashtags is not an array"), er(Array.isArray(m), "twitter.related is not an array"), "https://twitter.com/share" + zr({
    url: e,
    text: n,
    via: r,
    hashtags: a.length > 0 ? a.join(",") : void 0,
    related: m.length > 0 ? m.join(",") : void 0
  });
}
var Ko = Hr("twitter", Cc, function(e) {
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
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
var Rc;
function ki() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rc;
  return t ? e.split(" ").map(function(n) {
    return t[n] || n;
  }).join(" ") : e;
}
var Oc = (typeof window > "u" ? "undefined" : Si(window)) === "object" && window.Element || function() {
};
function Ac(e, t, n) {
  if (!(e[t] instanceof Oc))
    return new Error("Invalid prop `" + t + "` supplied to `" + n + "`. Expected prop to be an instance of Element. Validation failed.");
}
l.oneOfType([l.string, l.func, Ac, l.shape({
  current: l.any
})]);
var Ti = l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
}), l.arrayOf(l.oneOfType([l.func, l.string, l.shape({
  $$typeof: l.symbol,
  render: l.func
})]))]), jc = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function _i() {
  return _i = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _i.apply(this, arguments);
}
function Nc(e, t) {
  if (e == null) return {};
  var n = Ic(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ic(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Pc = {
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
  listTag: Ti,
  /** Set a custom element for this component */
  tag: Ti
};
function $s(e) {
  var t = e.className, n = e.listClassName, r = e.cssModule, o = e.children, a = e.tag, d = a === void 0 ? "nav" : a, m = e.listTag, h = m === void 0 ? "ol" : m, p = e["aria-label"], b = p === void 0 ? "breadcrumb" : p, w = Nc(e, jc), R = ki(be(t), r), M = ki(be("breadcrumb", n), r);
  return /* @__PURE__ */ $e.createElement(d, _i({}, w, {
    className: R,
    "aria-label": b
  }), /* @__PURE__ */ $e.createElement(h, {
    className: M
  }, o));
}
$s.propTypes = Pc;
var Lc = ["className", "cssModule", "active", "tag"];
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
function Mc(e, t) {
  if (e == null) return {};
  var n = Dc(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Dc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Fc = {
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: l.bool,
  /** Add custom class to the element */
  className: l.string,
  /** Change existing className with a new className */
  cssModule: l.object,
  /** Set a custom element for this component */
  tag: Ti
};
function Ci(e) {
  var t = e.className, n = e.cssModule, r = e.active, o = e.tag, a = o === void 0 ? "li" : o, d = Mc(e, Lc), m = ki(be(t, r ? "active" : !1, "breadcrumb-item"), n);
  return /* @__PURE__ */ $e.createElement(a, Ei({}, d, {
    className: m,
    "aria-current": r ? "page" : void 0
  }));
}
Ci.propTypes = Fc;
const $c = jt.div`
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
`, Bc = jt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`, Bs = ({
  type: e = "news",
  articleUrl: t,
  publicationDate: n,
  title: r,
  body: o,
  authorEmail: a,
  authorName: d,
  authorPhone: m,
  authorTitle: h,
  breadcrumbs: p,
  calendarUrl: b,
  eventLocation: w,
  eventTime: R,
  headerImageUrl: M,
  registrationUrl: O,
  zoomUrl: k
}) => {
  const N = be("col", "col-12", {
    "col-lg-8": e === "event" && (O || k || b)
  }), j = () => O ? /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(bn, { color: "maroon", href: O, label: "Register" }) }) : /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(bn, { color: "maroon", href: k, label: "Attend on Zoom" }) }), F = () => /* @__PURE__ */ f.jsx("div", { className: "row pb-2", "data-testid": "author-info", children: /* @__PURE__ */ f.jsxs("div", { className: "col col-12", children: [
    /* @__PURE__ */ f.jsx("div", { className: "author highlight-gold", children: d }),
    h && /* @__PURE__ */ f.jsx("div", { className: "author-title", children: h }),
    a && /* @__PURE__ */ f.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ f.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-envelope" }) }),
      /* @__PURE__ */ f.jsx("a", { href: `mailto: ${a}`, children: a })
    ] }),
    m && /* @__PURE__ */ f.jsxs("div", { className: "author-contact", children: [
      /* @__PURE__ */ f.jsx("span", { className: "icon-bg", children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-phone" }) }),
      /* @__PURE__ */ f.jsx("a", { href: `tel: ${m}`, children: m })
    ] })
  ] }) }), W = () => /* @__PURE__ */ f.jsxs(
    Bc,
    {
      className: "row row-spaced mt-3 pt-6 pb-2 event-info",
      "data-testid": "event-info",
      children: [
        /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ f.jsx("h4", { children: "For more information contact:" }),
          /* @__PURE__ */ f.jsx("div", { className: "event-author", children: d }),
          /* @__PURE__ */ f.jsx("div", { className: "event-author-title", children: h }),
          (a || m) && /* @__PURE__ */ f.jsxs("div", { className: "event-author-info", children: [
            a && /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("a", { href: `mailto: ${a}`, children: a }) }),
            m && /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("a", { href: `tel: ${m}`, children: m }) })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-12", children: [
          /* @__PURE__ */ f.jsx("h4", { children: "Share this event:" }),
          /* @__PURE__ */ f.jsxs("div", { className: "article-social-media", children: [
            /* @__PURE__ */ f.jsx(qo, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
              Uo,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Ko, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
              Go,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Sc, { url: a, quote: r, children: /* @__PURE__ */ f.jsx(
              fc,
              {
                size: 28,
                borderRadius: 4,
                bgStyle: { fill: "maroon" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Xo, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
              Yo,
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
  ), V = () => /* @__PURE__ */ f.jsxs("div", { className: "col col-12 col-lg-4 col-md-6", children: [
    /* @__PURE__ */ f.jsxs("h4", { children: [
      /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }),
      "Location:"
    ] }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: xt(w) }),
    O && k && /* @__PURE__ */ f.jsx("a", { href: k, children: "Attend on Zoom" })
  ] }), L = (Q) => /* @__PURE__ */ f.jsx(
    Ci,
    {
      active: Q.active,
      tag: "li",
      className: "breadcrumb-item",
      children: /* @__PURE__ */ f.jsx(Ci, { tag: "a", href: Q.url, children: Q.title })
    },
    Q.title
  );
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    M && e !== "event" && /* @__PURE__ */ f.jsx(
      "div",
      {
        "data-testid": "uds-hero",
        className: "uds-hero uds-hero-md",
        style: {
          // @ts-ignore
          "--color1": "#19191900",
          "--color2": "#191919c9",
          // moved colors to variable because hex color in linear-gradient breaks react
          backgroundImage: `linear-gradient(180deg, var(--color1) 0%, var(--color2) 100%), url(${M})`
        }
      }
    ),
    /* @__PURE__ */ f.jsxs($c, { className: `container ${e}-container wrapper-container`, children: [
      p && /* @__PURE__ */ f.jsx("div", { className: "row pt-4", "data-testid": "breadcrumbs", children: /* @__PURE__ */ f.jsx("div", { className: "col col-12", children: /* @__PURE__ */ f.jsx($s, { listClassName: "breadcrumb", children: p.map((Q) => L(Q)) }) }) }),
      /* @__PURE__ */ f.jsxs("div", { className: "row pb-2 pt-3", children: [
        /* @__PURE__ */ f.jsx("div", { className: N, children: /* @__PURE__ */ f.jsx("h2", { "data-testid": "title", children: r }) }),
        e === "event" && /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-xs-12", children: [
          (O || k) && j(),
          b && /* @__PURE__ */ f.jsx("div", { className: "card-button uds-button", children: /* @__PURE__ */ f.jsx(
            bn,
            {
              color: "gray",
              size: "small",
              href: b,
              label: "Add to calendar"
            }
          ) })
        ] })
      ] }),
      e === "event" ? /* @__PURE__ */ f.jsxs("div", { className: "row row-spaced pt-3 mb-2", children: [
        R && /* @__PURE__ */ f.jsxs("div", { className: "col col-lg-4 col-md-6 col-sm-12", children: [
          /* @__PURE__ */ f.jsxs("h4", { children: [
            /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }),
            "Date and time:"
          ] }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              dangerouslySetInnerHTML: xt(R)
            }
          )
        ] }),
        (O && k || w) && V()
      ] }) : /* @__PURE__ */ f.jsx("div", { className: "row row-spaced pt-2", children: /* @__PURE__ */ f.jsxs("div", { className: "col col-12", children: [
        /* @__PURE__ */ f.jsxs("div", { className: "article-social-media", children: [
          /* @__PURE__ */ f.jsx(qo, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
            Uo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ f.jsx(Ko, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
            Go,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) }),
          /* @__PURE__ */ f.jsx(Xo, { url: t, quote: r, children: /* @__PURE__ */ f.jsx(
            Yo,
            {
              size: 28,
              borderRadius: 4,
              bgStyle: { fill: "maroon" }
            }
          ) })
        ] }),
        n && /* @__PURE__ */ f.jsx("i", { className: "news-date", children: n })
      ] }) }),
      /* @__PURE__ */ f.jsx("div", { className: "row", children: /* @__PURE__ */ f.jsx(
        "div",
        {
          className: "col col-12",
          dangerouslySetInnerHTML: xt(o),
          "data-testid": "body"
        }
      ) }),
      e === "news" && F(),
      e === "event" && W()
    ] })
  ] });
};
Bs.propTypes = {
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
const zc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Hi = ({
  color: e = "gray",
  icon: t = void 0,
  innerRef: n = void 0,
  onClick: r = void 0,
  size: o = "small",
  cardTitle: a = "",
  className: d,
  gaData: m,
  ...h
}) => {
  const p = () => {
    r == null || r();
  };
  return /* @__PURE__ */ f.jsx(
    tt,
    {
      gaData: {
        ...zc,
        section: a,
        // @deprecated - remove at some point
        ...m,
        text: `${t == null ? void 0 : t[1]} icon`
      },
      children: /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          className: `btn btn-circle btn-circle-alt-${e} ${o === "large" && "btn-circle-large"} ${d}`,
          ref: n,
          "aria-label": "Close",
          onClick: p,
          ...h,
          children: /* @__PURE__ */ f.jsx("i", { className: `${t == null ? void 0 : t[0]} fa-${t == null ? void 0 : t[1]}` })
        }
      )
    }
  );
};
Hi.propTypes = {
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
  gaData: Di,
  /**
    Button size
  */
  size: l.oneOf(["large", "small"]),
  className: l.string
};
const Hc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Wi = ({
  label: e = "",
  cardTitle: t = "",
  gaData: n,
  ariaLabel: r,
  color: o = "gray",
  disabled: a,
  element: d = "button",
  innerRef: m,
  href: h,
  onClick: p,
  ...b
}) => {
  const w = be("btn", "btn-tag", {
    "btn-tag-alt-white": o === "white",
    "btn-tag-alt-gray": o === "gray",
    "btn-tag-alt-dark": o === "dark",
    disabled: a
  });
  let R = d;
  return h && d === "button" && (R = "a"), /* @__PURE__ */ f.jsx(
    tt,
    {
      gaData: {
        ...Hc,
        section: t,
        // @deprecated - remove at some point
        ...n,
        text: e
      },
      children: /* @__PURE__ */ f.jsx(
        R,
        {
          type: R === "button" && p ? "button" : void 0,
          ...b,
          className: w,
          href: h,
          ref: m,
          onClick: p,
          "aria-label": r,
          children: e
        }
      )
    }
  );
};
Wi.propTypes = {
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
  gaData: Di,
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
const In = ({
  src: e,
  alt: t,
  cssClasses: n,
  loading: r = "lazy",
  decoding: o = "async",
  dataTestId: a,
  fetchPriority: d = "auto",
  width: m,
  height: h,
  cardLink: p,
  title: b,
  caption: w,
  captionTitle: R,
  border: M,
  dropShadow: O
}) => {
  const k = {
    src: e,
    alt: t,
    loading: r,
    decoding: o,
    fetchpriority: d,
    // React attribute bug workaround
    ...(n == null ? void 0 : n.length) > 0 && { className: Cr(n) },
    ...a && { "data-testid": a },
    ...m && { width: m },
    ...h && { height: h }
  }, N = be("uds-img", {
    borderless: !M,
    "uds-img-drop-shadow": O
  }), j = (W) => {
    const V = W ? `${k.className} ${W}` : k.className;
    return p ? /* @__PURE__ */ f.jsxs("a", { href: p, children: [
      /* @__PURE__ */ f.jsx("img", { ...k, className: V }),
      /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: b })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ f.jsx("img", { ...k, className: V })
    );
  }, F = () => /* @__PURE__ */ f.jsx("div", { className: N, children: /* @__PURE__ */ f.jsxs("figure", { className: "figure uds-figure", children: [
    j(),
    w && /* @__PURE__ */ f.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      R && /* @__PURE__ */ f.jsx("h3", { children: R }),
      /* @__PURE__ */ f.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: xt(w)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: w ? F() : j(N) });
};
In.propTypes = {
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
const Wc = jt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Vc = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Uc = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Vc(e) ? `mailto:${e}` : e, qc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, nn = ({
  type: e = "default",
  width: t = "100%",
  horizontal: n = !1,
  image: r,
  imageAltText: o,
  title: a,
  icon: d,
  body: m,
  eventFormat: h = "stack",
  eventLocation: p,
  eventTime: b,
  buttons: w,
  linkLabel: R,
  linkUrl: M,
  tags: O,
  showBorders: k = !0,
  cardLink: N
}) => /* @__PURE__ */ f.jsx(
  zs,
  {
    type: e,
    width: t,
    horizontal: n,
    image: r,
    imageAltText: o,
    title: a,
    icon: d,
    body: m,
    eventFormat: h,
    eventLocation: p,
    eventTime: b,
    buttons: w,
    linkLabel: R,
    linkUrl: M,
    tags: O,
    showBorders: k,
    cardLink: N
  }
);
nn.propTypes = {
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
const zs = ({
  type: e = "default",
  width: t = "100%",
  horizontal: n = !1,
  image: r = "",
  imageAltText: o = "",
  title: a,
  icon: d = void 0,
  body: m = "",
  eventFormat: h = "stack",
  eventLocation: p = "",
  eventTime: b = "",
  buttons: w = void 0,
  linkLabel: R = void 0,
  linkUrl: M = void 0,
  tags: O = void 0,
  showBorders: k = !0,
  cardLink: N
}) => {
  const j = be("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": n,
    borderless: !k
  });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(Wc, { className: j, "data-testid": "card-container", children: [
    !!r && /* @__PURE__ */ f.jsx(
      In,
      {
        src: r,
        alt: o,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: N,
        title: a
      }
    ),
    !r && d && /* @__PURE__ */ f.jsx(
      "i",
      {
        className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    n ? /* @__PURE__ */ f.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ f.jsx(
      Ri,
      {
        type: e,
        body: m,
        eventFormat: h,
        eventLocation: p,
        eventTime: b,
        title: a,
        buttons: w,
        linkLabel: R,
        linkUrl: M,
        tags: O,
        cardLink: N
      }
    ) }) : /* @__PURE__ */ f.jsx(
      Ri,
      {
        type: e,
        body: m,
        eventFormat: h,
        eventLocation: p,
        eventTime: b,
        title: a,
        buttons: w,
        linkLabel: R,
        linkUrl: M,
        tags: O,
        cardLink: N
      }
    )
  ] }) });
};
zs.propTypes = {
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
const Ri = ({
  type: e = "default",
  body: t = "",
  eventFormat: n = "stack",
  eventLocation: r = "",
  eventTime: o = "",
  title: a,
  buttons: d = void 0,
  linkLabel: m = void 0,
  linkUrl: h = void 0,
  tags: p = void 0,
  cardLink: b
}) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  !!a && /* @__PURE__ */ f.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ f.jsx("h3", { className: "card-title", children: b ? /* @__PURE__ */ f.jsx("a", { href: b, children: a }) : a }) }),
  !!t && /* @__PURE__ */ f.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: xt(t) }) }),
  e === "event" && (o || r) && /* @__PURE__ */ f.jsx(
    Hs,
    {
      eventFormat: n,
      eventTime: o,
      eventLocation: r
    }
  ),
  d && /* @__PURE__ */ f.jsx("div", { className: "card-buttons", children: d.map((w) => /* @__PURE__ */ f.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ f.jsx(
        bn,
        {
          ariaLabel: w.ariaLabel,
          color: w.color,
          icon: w.icon,
          href: w.href,
          label: w.label,
          onClick: w.onClick,
          size: w.size,
          target: w.target,
          cardTitle: a
        }
      )
    },
    `${w.label}-${w.href}`
  )) }),
  h && m && /* @__PURE__ */ f.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ f.jsx(
    tt,
    {
      gaData: {
        ...qc,
        section: a,
        text: m
      },
      children: /* @__PURE__ */ f.jsx("a", { href: Uc(h), children: m })
    }
  ) }),
  p && /* @__PURE__ */ f.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: p.map((w) => (
    // @ts-ignore
    /* @__PURE__ */ f.jsx(
      Wi,
      {
        ariaLabel: w.ariaLabel,
        color: w.color,
        href: w.href,
        label: w.label,
        onClick: w.onClick,
        cardTitle: a
      },
      `${w.label}-${w.href}`
    )
  )) })
] });
Ri.propTypes = {
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
const Hs = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: n = ""
}) => e === "inline" ? /* @__PURE__ */ f.jsxs("div", { className: "card-event-details", children: [
  n && /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: xt(n) })
  ] }),
  t && /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        dangerouslySetInnerHTML: xt(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  n && /* @__PURE__ */ f.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: xt(n) })
  ] }) }),
  t && /* @__PURE__ */ f.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ f.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
      "div",
      {
        dangerouslySetInnerHTML: xt(t)
      }
    ) })
  ] }) })
] });
Hs.propTypes = {
  eventFormat: l.oneOf(["stack", "inline"]),
  eventLocation: l.string,
  eventTime: l.string
};
var Yc = /* @__PURE__ */ ((e) => (e.COPY = "copy", e))(Yc || {});
const Xc = ({ type: e }) => e == "copy" ? /* @__PURE__ */ f.jsx("hr", { className: "copy-divider" }) : /* @__PURE__ */ f.jsx("hr", {}), Gc = jt.div`
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
`, Kc = () => /* @__PURE__ */ f.jsxs(Gc, { children: [
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {}),
  /* @__PURE__ */ f.jsx("div", {})
] }), Zc = jt.section``, Jc = Ea(null), Qc = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: n,
  renderHeader: r,
  renderBody: o,
  dataTransformer: a,
  dataFilter: d,
  maxItems: m
}) => {
  const [{ data: h, loading: p, error: b }, w] = Ma(), [R, M] = Ke([]), O = { ...e.dataSource, ...t };
  return lt(() => {
    w(O == null ? void 0 : O.url);
  }, [O == null ? void 0 : O.url]), lt(() => {
    const k = h == null ? void 0 : h.nodes.map(a), N = k == null ? void 0 : k.filter(
      (j) => d(j, t == null ? void 0 : t.filters)
    );
    M(m ? N == null ? void 0 : N.slice(0, m) : N);
  }, [h]), // Init the context to be used on its childrens
  /* @__PURE__ */ f.jsx(Jc.Provider, { value: { feeds: R }, children: /* @__PURE__ */ f.jsxs(Zc, { children: [
    r,
    b ? /* @__PURE__ */ f.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      p && !(R != null && R.length) && /* @__PURE__ */ f.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ f.jsx(Kc, {}) }),
      R != null && R.length ? o : !p && /* @__PURE__ */ f.jsx("p", { className: "text-center", children: n })
    ] })
  ] }) });
};
Qc.propTypes = {
  renderHeader: l.element,
  renderBody: l.element,
  maxItems: l.number,
  dataTransformer: l.func,
  dataFilter: l.func,
  noFeedText: l.string
};
const Ws = l.shape({
  color: l.oneOf(["white", "dark"]),
  text: l.string
}), Vs = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string
}), Nd = l.shape({
  color: l.oneOf(["gold", "maroon", "gray", "dark"]),
  text: l.string,
  size: l.string
}), eu = l.shape({
  url: l.string,
  filters: l.string
}), tu = l.shape({
  header: Ws,
  ctaButton: Vs,
  dataSource: eu,
  maxItems: l.number
}), nu = jt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ru = ({
  defaultProps: e,
  header: t,
  ctaButton: n
}) => {
  const r = { ...e.header, ...t }, o = { ...e.ctaButton, ...n };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ f.jsx("h2", { className: `text-${r.color}`, children: r.text }) }),
        /* @__PURE__ */ f.jsx(nu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ f.jsx(
          tt,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: r.text,
              text: o.text
            },
            children: /* @__PURE__ */ f.jsx("a", { className: `btn btn-${o.color}`, href: o.url, children: o.text })
          }
        ) })
      ]
    }
  );
};
ru.propTypes = {
  defaultProps: tu,
  header: Ws,
  ctaButton: Vs
};
const iu = ({ children: e }) => /* @__PURE__ */ f.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ f.jsx("div", { className: "col", children: e }) });
iu.propTypes = {
  children: l.element
};
const ou = jt.img`
  width: 100%;
`;
function su({ image: e, title: t, contents: n }) {
  return console.log({ image: e, title: t, contents: n }), /* @__PURE__ */ f.jsx("div", { children: "TODO: to be implemented" });
}
function au({
  image: e,
  subTitle: t,
  title: n,
  contents: r,
  contentsColor: o
}) {
  const a = {
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
  }, m = {
    black: "text-dark",
    white: "text-white",
    undefined: ""
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("uds-hero", {
        [a[e == null ? void 0 : e.size]]: e == null ? void 0 : e.size
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "hero-overlay" }),
        /* @__PURE__ */ f.jsx(
          ou,
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
              [m[t.color]]: t.color,
              [d[t.highlightColor]]: t.highlightColor
            }),
            children: t.text
          }
        ) }),
        n && /* @__PURE__ */ f.jsx("h1", { style: { maxWidth: n.maxWidth || "" }, "data-testid": "hero-title", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            className: be({
              [m[n.color]]: n.color,
              [d[n.highlightColor]]: n.highlightColor
            }),
            children: n.text
          }
        ) }),
        r && /* @__PURE__ */ f.jsx(
          "div",
          {
            "data-testid": "hero-content",
            className: be("content", {
              [m[o]]: o
            }),
            children: r.map((h, p) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ f.jsx("p", { children: h.text }, `content-${p}`)
            ))
          }
        )
      ]
    }
  );
}
const Us = (e) => {
  const t = e.type || "heading-hero";
  return {
    "heading-hero": () => au(e),
    "story-hero": () => su(e),
    undefined: () => (console.error(
      `the type '${t}' is not supported by the 'Hero' component.`
    ), null)
  }[t]();
};
Us.propTypes = {
  type: l.oneOf(["heading-hero", "story-hero"]),
  image: Pa,
  title: ii,
  subTitle: ii,
  contents: l.arrayOf(ii),
  contentsColor: l.string
};
const Ot = ({
  dataId: e,
  isClickeable: t = !1,
  disabled: n = !1,
  pageLinkIcon: r = !1,
  selectedPage: o = !1,
  onClick: a = () => {
  },
  ellipses: d,
  ariaLabel: m,
  children: h,
  ariaDisabled: p
}) => /* @__PURE__ */ f.jsx(
  "li",
  {
    className: be("page-item", {
      disabled: n,
      active: o,
      elipses: d
    }),
    children: t ? /* @__PURE__ */ f.jsxs(
      "button",
      {
        type: "button",
        "aria-label": m,
        className: be("page-link", {
          "page-link-icon": r
        }),
        onClick: a,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": o ? "page" : null,
        "aria-disabled": p,
        children: [
          h,
          o && /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ f.jsx("span", { className: "page-link", "data-testid": "page-link", children: h })
  }
);
Ot.propTypes = {
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
const lu = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, qs = ({
  type: e,
  background: t,
  currentPage: n = 1,
  totalPages: r = 10,
  onChange: o
}) => {
  const [a, d] = Ke(null);
  lt(() => {
    d(n);
  }, [n]);
  const m = (b) => {
    bs({ ...lu, text: `page ${b}` });
  }, h = (b, w) => {
    const M = {
      first: 1,
      prev: a === 1 ? 1 : a - 1,
      next: a === r ? r : a + 1,
      last: r
    }[w] ?? w;
    d(M), m(M), o == null || o(b, M);
  }, p = () => {
    if (r < 5)
      return /* @__PURE__ */ f.jsx(f.Fragment, { children: Array.from({ length: r }, (N, j) => {
        const F = j + 1;
        return /* @__PURE__ */ f.jsx(
          Ot,
          {
            ariaLabel: `Page ${F} of ${r}`,
            isClickeable: !0,
            selectedPage: a === F,
            onClick: (W) => h(W, F),
            children: F
          },
          F
        );
      }) });
    const b = 2, w = yo(
      a === r - 1,
      1,
      a === r ? 2 : 1
    ), R = yo(
      a === 1,
      2,
      1
    ), M = Ro(
      a - w,
      a,
      r
    ), O = Ro(
      a,
      a + 1 + R,
      r
    ), k = [...M, ...O];
    return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      k[0] !== 1 && /* @__PURE__ */ f.jsx(
        Ot,
        {
          ariaLabel: `Page 1 of ${r}`,
          isClickeable: !0,
          selectedPage: a === 1,
          onClick: (N) => h(N, "first"),
          children: "1"
        }
      ),
      a > r - b && /* @__PURE__ */ f.jsx(
        Ot,
        {
          isClickeable: !0,
          ariaLabel: `Page 2 of ${r}`,
          selectedPage: a === 2,
          onClick: (N) => h(N, 2),
          children: "2"
        }
      ),
      k[0] > 2 && /* @__PURE__ */ f.jsx(Ot, { ellipses: !0, children: "..." }),
      k.map((N) => /* @__PURE__ */ f.jsx(
        Ot,
        {
          ariaLabel: `Page ${N} of ${r}`,
          isClickeable: !0,
          selectedPage: a === N,
          onClick: (j) => h(j, N),
          children: N
        },
        N
      )),
      k[k.length - 1] < r - 1 && /* @__PURE__ */ f.jsx(Ot, { ellipses: !0, children: "..." }),
      a < b + 1 && /* @__PURE__ */ f.jsx(
        Ot,
        {
          isClickeable: !0,
          ariaLabel: `Page ${r - 1} of ${r}`,
          selectedPage: a === r - 1,
          onClick: (N) => h(N, r - 1),
          children: r - 1
        }
      ),
      k[k.length - 1] !== r && /* @__PURE__ */ f.jsx(
        Ot,
        {
          isClickeable: !0,
          ariaLabel: `Page ${r} of ${r}`,
          selectedPage: a === r,
          onClick: (N) => h(N, "last"),
          children: r
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
          Ot,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: a === 1,
            pageLinkIcon: !0,
            onClick: (b) => h(b, "prev"),
            ariaDisabled: a === 1,
            ariaLabel: "Previous Page"
          }
        ),
        p(),
        /* @__PURE__ */ f.jsx(
          Ot,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: a === r,
            disabled: a === r,
            pageLinkIcon: !0,
            onClick: (b) => h(b, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
qs.propTypes = {
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
   * Callback fired when the page is changed
   */
  onChange: l.func.isRequired
};
const Zo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Jo = {
  OPEN: "open",
  CLOSE: "close"
}, cu = {
  SMALL: "small"
}, Ys = (e) => e === cu.SMALL, Xs = ({ imageSize: e, body: t, heading: n, readMoreLink: r }) => {
  const [o, a] = Ke(!1), d = cs(), { isReact: m, isBootstrap: h } = Sn(), p = `info-layer-${d}`, b = Ys(e), w = (R) => {
    (R.type === "click" || R.key === "Enter" || R.key === " ") && a(!o);
  };
  return /* @__PURE__ */ f.jsx(
    "div",
    {
      className: be("info-layer", { show: o }),
      "data-testid": "info-layer",
      id: p,
      children: /* @__PURE__ */ f.jsxs("div", { className: "content", children: [
        /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: be("header", {
              closed: b && !o
            }),
            children: [
              b && // eslint-disable-next-line react/no-danger
              /* @__PURE__ */ f.jsx("p", { dangerouslySetInnerHTML: xt(t) }),
              /* @__PURE__ */ f.jsx(
                tt,
                {
                  gaData: {
                    ...Zo,
                    text: "Expand ranking",
                    // TODO: for bootstrap can we use aria-expanded value of the button to populate the "action" field
                    action: o ? Jo.OPEN : Jo.CLOSE,
                    section: n
                  },
                  children: /* @__PURE__ */ f.jsxs(
                    "button",
                    {
                      "data-bs-toggle": h && "collapse",
                      "data-bs-target": h && `#${p}`,
                      onClick: m && w,
                      className: be("btn-expand", {
                        btn: b
                      }),
                      type: "button",
                      "aria-expanded": o,
                      "aria-controls": p,
                      children: [
                        b ? /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: n }) : /* @__PURE__ */ f.jsx("h4", { children: n }),
                        /* @__PURE__ */ f.jsx("i", { className: "fas fa-chevron-up" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        !b && // eslint-disable-next-line react/no-danger
        /* @__PURE__ */ f.jsx("p", { dangerouslySetInnerHTML: xt(t) }),
        r && /* @__PURE__ */ f.jsx(
          tt,
          {
            gaData: {
              ...Zo,
              section: n,
              text: "read more"
            },
            children: /* @__PURE__ */ f.jsxs("a", { href: r, className: "read-more", children: [
              "Read more ",
              /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: n }),
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
Xs.propTypes = {
  imageSize: l.oneOf(["small", "large"]),
  body: l.string.isRequired,
  heading: l.string.isRequired,
  readMoreLink: l.string
};
const Gs = ({
  imageSize: e = "large",
  image: t,
  imageAlt: n,
  heading: r,
  body: o,
  readMoreLink: a = "",
  citation: d
}) => {
  const m = Ys(e);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("card-ranking", {
        "large-image": !m,
        "small-image": m
      }),
      children: [
        m ? /* @__PURE__ */ f.jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ f.jsx(In, { src: t, alt: n, fetchPriority: "high" }) }) : /* @__PURE__ */ f.jsx(In, { src: t, alt: n, fetchPriority: "high" }),
        m && /* @__PURE__ */ f.jsxs("div", { className: "citation", children: [
          /* @__PURE__ */ f.jsx("h4", { children: r }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            "— ",
            d
          ] })
        ] }),
        /* @__PURE__ */ f.jsx(
          Xs,
          {
            imageSize: e,
            body: o,
            heading: r,
            readMoreLink: a
          }
        )
      ]
    }
  );
};
Gs.propTypes = {
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
var uu = /* @__PURE__ */ ((e) => (e.WARNING = "warning", e.INFO = "info", e.SUCCESS = "success", e.ERROR = "error", e))(uu || {});
const du = ({
  type: e,
  dismissable: t,
  children: n
}) => {
  var p, b, w;
  const { isBootstrap: r, isReact: o } = Sn(), [a, d] = Ke(!0), m = () => d(!1), h = {
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
  return a && /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be("alert", {
        "alert-dismissable": t,
        [`alert-${(p = h[e]) == null ? void 0 : p.alertClass}`]: e
      }),
      role: "alert",
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "alert-icon", children: /* @__PURE__ */ f.jsx(
          "span",
          {
            title: (b = h[e]) == null ? void 0 : b.iconTitle,
            className: `fa fa-icon fa-${(w = h[e]) == null ? void 0 : w.iconName}`
          }
        ) }),
        /* @__PURE__ */ f.jsx("div", { className: "alert-content", children: n }),
        t && /* @__PURE__ */ f.jsx("div", { className: "alert-close", children: /* @__PURE__ */ f.jsx(
          Hi,
          {
            icon: ["fas", "times"],
            onClick: o && m,
            "data-bs-dismiss": r && "alert"
          }
        ) })
      ]
    }
  );
}, fu = jt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Ks = ({ gaData: e, hidePrev: t, hideNext: n, slideNav: r }) => {
  const { isReact: o, isBootstrap: a } = Sn();
  return /* @__PURE__ */ f.jsxs(fu, { children: [
    (!t || a) && /* @__PURE__ */ f.jsx(tt, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ f.jsxs(
      "button",
      {
        className: "scroll-control-prev",
        type: "button",
        onClick: o && (() => r(-1)),
        tabIndex: -1,
        children: [
          /* @__PURE__ */ f.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "Previous" })
        ]
      }
    ) }),
    (!n || a) && /* @__PURE__ */ f.jsx(tt, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ f.jsxs(
      "button",
      {
        className: "scroll-control-next",
        type: "button",
        onClick: o && (() => r(1)),
        tabIndex: -1,
        children: [
          /* @__PURE__ */ f.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
          /* @__PURE__ */ f.jsx("span", { className: "visually-hidden", children: "Next" })
        ]
      }
    ) })
  ] });
};
Ks.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: l.object,
  hidePrev: l.bool,
  hideNext: l.bool,
  slideNav: l.func.isRequired
};
const Zs = us(function(t, n) {
  const {
    id: r,
    selected: o,
    title: a,
    selectTab: d,
    leftKeyPressed: m,
    rightKeyPressed: h,
    icon: p,
    gaData: b
  } = t, { isReact: w, isBootstrap: R } = Sn(), M = wn(null);
  Ca(
    n,
    () => ({
      focus() {
        M.current.focus();
      },
      scrollIntoView() {
        var j, F, W, V, L, Q, ae;
        const k = ((j = M.current) == null ? void 0 : j.offsetWidth) / 2 + M.current.offsetLeft, N = ((W = (F = M.current) == null ? void 0 : F.offsetParent) == null ? void 0 : W.scrollLeft) + ((L = (V = M.current) == null ? void 0 : V.offsetParent) == null ? void 0 : L.offsetWidth) / 2;
        (ae = (Q = M.current) == null ? void 0 : Q.offsetParent) == null || ae.scrollBy({
          left: k - N
        });
      }
    }),
    []
  );
  const O = (k) => {
    k.keyCode === 37 ? (k.preventDefault(), m()) : k.keyCode === 39 && (k.preventDefault(), h());
  };
  return /* @__PURE__ */ f.jsx(tt, { gaData: { ...b, text: a }, children: /* @__PURE__ */ f.jsxs(
    "a",
    {
      ref: M,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": o,
      "data-bs-toggle": R && "tab",
      onClick: w && ((k) => d(k, r, a)),
      onKeyDown: w && O,
      tabIndex: o ? "" : "-1",
      children: [
        a,
        " ",
        p && /* @__PURE__ */ f.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` })
      ]
    }
  ) });
});
Zs.propTypes = {
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
function pu() {
  const e = wn({}), t = Ra(
    (n) => (r) => {
      e.current[n] = r;
    },
    []
  );
  return [e, t];
}
const hu = ({ id: e, bgColor: t, selected: n, children: r }) => {
  const { isBootstrap: o } = Sn();
  return (n || o) && /* @__PURE__ */ f.jsx(
    "div",
    {
      className: `tab-pane fade show ${n ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
      id: `nav-${e}`,
      role: "tabpanel",
      "aria-labelledby": `nav-${e}-tab`,
      children: r
    }
  );
};
hu.propTypes = {
  id: l.string.isRequired,
  bgColor: l.string,
  selected: l.bool,
  children: l.oneOfType([l.array, l.element])
};
const Js = ({
  initialTab: e = "",
  children: t,
  bgColor: n = "",
  onTabChange: r = (o) => {
  }
}) => {
  const o = $e.Children.toArray(t);
  if (o.length === 0)
    return null;
  const a = wn(!1), [d, m] = Ke(
    e && e !== "null" ? e : o[0].props.id
  ), h = wn(null), [p, b] = pu(), w = (K) => {
    var ne;
    r(K), (ne = p.current[K]) == null || ne.focus(), m(K);
  }, [R, M] = Ke(0), [O, k] = Ke(), N = () => {
    var K, ne;
    k(
      ((K = h.current) == null ? void 0 : K.scrollWidth) - ((ne = h.current) == null ? void 0 : ne.offsetWidth)
    );
  }, j = () => {
    var K;
    M((K = h.current) == null ? void 0 : K.scrollLeft);
  }, F = () => {
    mi(j, 150), gi(j, 150);
  }, W = () => {
    mi(N, 150), gi(N, 150);
  };
  lt(() => (h.current.addEventListener("scroll", F), j(), () => {
    h.current && h.current.removeEventListener("scroll", F);
  }), [O]), lt(() => (window.addEventListener("resize", W), N(), () => {
    window.removeEventListener("resize", W);
  }), []), lt(() => {
    var K;
    (K = p.current[d]) == null || K.scrollIntoView();
  }, [d]), lt(() => {
    a.current && e && e !== "null" && d !== e && m(e);
  }, [e]), lt(() => {
    a.current = !0;
  }, []);
  const V = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, L = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, Q = o.map((K) => $e.cloneElement(K, {
    bgColor: n,
    selected: d === K.props.id
  })), ae = (K) => {
    const ne = h.current, Pe = ne.scrollWidth - ne.clientWidth;
    let Re = ne.scrollLeft + 200 * K;
    Re = Math.max(0, Math.min(Pe, Re)), ne.scrollTo({
      left: Re,
      behavior: "smooth"
    });
  }, Ce = (K, ne, Pe) => {
    K.preventDefault(), w(ne);
  }, De = (K = !0) => {
    const ne = o.length, Pe = K ? 1 : -1, Be = o.findIndex((ft) => ft.props.id === d), Re = o[(ne + Be + Pe) % ne].props.id;
    w(Re);
  };
  let ze = "uds-tabbed-panels";
  return n === "bg-dark" && (ze += " uds-tabbed-panels-dark"), /* @__PURE__ */ f.jsxs("div", { className: n, children: [
    /* @__PURE__ */ f.jsxs("nav", { className: ze, children: [
      /* @__PURE__ */ f.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: h, children: o.map((K, ne) => /* @__PURE__ */ f.jsx(
        Zs,
        {
          ref: b(K.props.id),
          id: K.props.id,
          title: K.props.title,
          selected: d === K.props.id,
          gaData: L,
          selectTab: Ce,
          leftKeyPressed: () => De(!1),
          rightKeyPressed: () => De(),
          icon: K.props.icon,
          index: ne
        },
        K.props.id
      )) }),
      /* @__PURE__ */ f.jsx(
        Ks,
        {
          hidePrev: R <= 0,
          hideNext: R >= O,
          gaData: V,
          slideNav: ae
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
        children: Q
      }
    )
  ] });
};
Js.propTypes = {
  initialTab: l.string,
  children: l.arrayOf(l.element).isRequired,
  bgColor: l.string,
  onTabChange: l.func
};
const Vi = ({ imageSource: e, imageAltText: t, quote: n, itemStyle: r = {} }) => {
  var o, a;
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: `uds-blockquote uds-testimonial ${e ? "with-image" : ""} ${Cr(r.containerCssClass)}`,
      children: [
        e && /* @__PURE__ */ f.jsx(
          In,
          {
            src: e,
            alt: t,
            dataTestId: "testimonial-image",
            fetchPriority: "high"
          }
        ),
        /* @__PURE__ */ f.jsx("svg", { role: "presentation", viewBox: "0 0 302.87 245.82", children: /* @__PURE__ */ f.jsx("path", { d: "M113.61,245.82H0V164.56q0-49.34,8.69-77.83T40.84,35.58Q64.29,12.95,100.67,0l22.24,46.9q-34,11.33-48.72,31.54T58.63,132.21h55Zm180,0H180V164.56q0-49.74,8.7-78T221,35.58Q244.65,12.95,280.63,0l22.24,46.9q-34,11.33-48.72,31.54t-15.57,53.77h55Z" }) }),
        /* @__PURE__ */ f.jsxs("blockquote", { style: { paddingLeft: 0 }, children: [
          n.title && /* @__PURE__ */ f.jsx("h3", { className: "text-center", "data-testid": "testimonial-title", children: /* @__PURE__ */ f.jsx("span", { className: Cr(r.titleCssClass), children: n.title }) }),
          n.content && /* @__PURE__ */ f.jsx(
            "p",
            {
              className: Cr(r.contentCssClass),
              "data-testid": "testimonial-content",
              children: n.content
            }
          ),
          (!!((o = n.cite) != null && o.name) || !!((a = n.cite) != null && a.description)) && /* @__PURE__ */ f.jsxs("div", { className: "citation", "data-testid": "testimonial-citation", children: [
            /* @__PURE__ */ f.jsx("cite", { className: "name", children: n.cite.name }),
            n.cite && /* @__PURE__ */ f.jsx("cite", { className: "description", children: n.cite.description })
          ] })
        ] })
      ]
    }
  );
};
Vi.propTypes = {
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
let mu = 0;
const gu = ({
  title: e,
  content: t,
  triggerElement: n
}) => {
  const [r] = Ke(`tooltip-${mu++}`), o = wn(null);
  return /* @__PURE__ */ f.jsxs("span", { className: "uds-tooltip-container", children: [
    $e.cloneElement(n, {
      ref: o,
      "aria-describedby": r,
      tabindex: 0
    }),
    /* @__PURE__ */ f.jsxs("div", { role: "tooltip", className: "uds-tooltip-description", id: r, children: [
      e && /* @__PURE__ */ f.jsx("span", { className: "uds-tooltip-heading", children: e }),
      t
    ] })
  ] });
}, vu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content",
  text: "play button"
}, yu = ({
  url: e = "",
  vttUrl: t,
  caption: n,
  title: r = "",
  className: o,
  controls: a = !0
}) => {
  const d = wn(null);
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: be(`uds-video-container ${o}`, {
        "uds-video-with-caption": n
      }),
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "uds-video-player", children: /* @__PURE__ */ f.jsx(tt, { gaData: { ...vu, section: r }, children: /* @__PURE__ */ f.jsxs(
          "video",
          {
            ref: d,
            title: r,
            playsInline: !0,
            controls: a || !0,
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
        n && /* @__PURE__ */ f.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ f.jsx("figcaption", { children: n }) })
      ]
    }
  );
}, xu = ({ title: e = "", caption: t, url: n = "", className: r }) => /* @__PURE__ */ f.jsxs(
  "div",
  {
    className: be(`uds-video-container ${r}`, {
      "uds-video-with-caption": t
    }),
    children: [
      /* @__PURE__ */ f.jsx("div", { className: "uds-video-player youtube-video", children: /* @__PURE__ */ f.jsx("iframe", { title: e, src: n }) }),
      t && /* @__PURE__ */ f.jsx("figure", { "data-testid": "video-caption", children: /* @__PURE__ */ f.jsx("figcaption", { children: t }) })
    ]
  }
), Qs = (e) => {
  const {
    type: t = "video",
    url: n = "",
    vttUrl: r,
    title: o = "",
    caption: a,
    className: d,
    controls: m = !0
  } = e;
  return t === "youtube" ? xu({ url: n, title: o, caption: a, className: d }) : yu({
    url: n,
    vttUrl: r,
    title: o,
    caption: a,
    className: d,
    controls: m
  });
};
Qs.propTypes = {
  type: l.oneOf(["video", "youtube"]),
  url: l.string,
  vttUrl: l.string,
  title: l.string,
  className: l.string,
  caption: l.string,
  controls: l.bool
};
const bu = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, Ui = ({ children: e }) => (
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
Ui.propTypes = {
  children: l.oneOfType([
    l.element,
    l.arrayOf(l.element)
  ]).isRequired
};
const ea = ({ buttonCount: e }) => {
  const t = [];
  for (let n = 0; n < e; n += 1)
    t.push(
      /* @__PURE__ */ f.jsx(tt, { gaData: bu, children: /* @__PURE__ */ f.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${n}`,
          "aria-label": `Slide view ${n + 1}`
        }
      ) }, `bullet-${n}`)
    );
  return /* @__PURE__ */ f.jsx(Ui, { children: t });
};
ea.propTypes = {
  buttonCount: l.number.isRequired
};
const ta = ({ imageItems: e, onItemClick: t = () => null }) => {
  const n = (o, a) => {
    const { ariaSelected: d } = o.currentTarget.dataset;
    o.currentTarget.dataset.ariaSelected = String(!d), o.stopPropagation(), t(a);
  }, r = e.map((o, a) => /* @__PURE__ */ f.jsx(
    "button",
    {
      type: "button",
      role: "option",
      className: "bullet-image-container",
      "data-glide-dir": `=${a}`,
      "aria-label": `Slide view ${a + 1}`,
      "aria-selected": "false",
      onClick: (d) => n(d, a),
      onKeyDown: (d) => n(d, a),
      children: /* @__PURE__ */ f.jsx(
        "img",
        {
          src: o,
          alt: `Slide ${a + 1}`,
          className: "glide__bullet bullet-image",
          loading: "lazy",
          decoding: "async",
          fetchpriority: "low"
        }
      )
    },
    `bullet-${a}`
  ));
  return /* @__PURE__ */ f.jsx(Ui, { children: r });
};
ta.propTypes = {
  imageItems: l.arrayOf(l.string).isRequired,
  onItemClick: l.func
};
const qi = ({ onClick: e = () => null }) => /* @__PURE__ */ f.jsx(
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
qi.propTypes = {
  onClick: l.func
};
const Yi = ({ onClick: e = () => null }) => /* @__PURE__ */ f.jsx(
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
Yi.propTypes = {
  onClick: l.func
};
const Qo = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, Xi = ({ children: e = null }) => /* @__PURE__ */ f.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: e
  }
);
Xi.propTypes = {
  children: l.arrayOf(l.element)
};
const na = ({ onClick: e = () => null, children: t = null }) => /* @__PURE__ */ f.jsxs(Xi, { children: [
  /* @__PURE__ */ f.jsx(tt, { gaData: { ...Qo, text: "left chevron" }, children: /* @__PURE__ */ f.jsx(Yi, { onClick: e }) }),
  t,
  /* @__PURE__ */ f.jsx(tt, { gaData: { ...Qo, text: "right chevron" }, children: /* @__PURE__ */ f.jsx(qi, { onClick: e }) })
] });
na.propTypes = {
  children: l.element,
  onClick: l.func
};
const ra = ({ carouselItems: e }) => {
  const t = e.map((n) => /* @__PURE__ */ f.jsx("li", { className: "glide__slide slider", children: n.item }, n.id.toString()));
  return /* @__PURE__ */ f.jsx("ul", { className: "glide__slides", children: t });
};
ra.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  carouselItems: l.arrayOf(l.object)
};
function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? es(Object(n), !0).forEach(function(r) {
      Su(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : es(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jr(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jr = function(t) {
    return typeof t;
  } : jr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jr(e);
}
function Wr(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wu(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vr(e, t, n) {
  return t && wu(e.prototype, t), e;
}
function Su(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ku(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), t && Oi(e, t);
}
function Pn(e) {
  return Pn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Pn(e);
}
function Oi(e, t) {
  return Oi = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Oi(e, t);
}
function Tu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _u(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Eu(e, t) {
  if (t && (typeof t == "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _u(e);
}
function Cu(e) {
  var t = Tu();
  return function() {
    var r = Pn(e), o;
    if (t) {
      var a = Pn(this).constructor;
      o = Reflect.construct(r, arguments, a);
    } else
      o = r.apply(this, arguments);
    return Eu(this, o);
  };
}
function Ru(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = Pn(e), e !== null); )
    ;
  return e;
}
function Nr() {
  return typeof Reflect < "u" && Reflect.get ? Nr = Reflect.get : Nr = function(t, n, r) {
    var o = Ru(t, n);
    if (o) {
      var a = Object.getOwnPropertyDescriptor(o, n);
      return a.get ? a.get.call(arguments.length < 3 ? t : r) : a.value;
    }
  }, Nr.apply(this, arguments);
}
var Ou = {
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
function Vt(e) {
  console.error("[Glide warn]: ".concat(e));
}
function et(e) {
  return parseInt(e);
}
function Au(e) {
  return parseFloat(e);
}
function Ai(e) {
  return typeof e == "string";
}
function Ln(e) {
  var t = jr(e);
  return t === "function" || t === "object" && !!e;
}
function Fr(e) {
  return typeof e == "function";
}
function ia(e) {
  return typeof e > "u";
}
function ji(e) {
  return e.constructor === Array;
}
function ju(e, t, n) {
  var r = {};
  for (var o in t)
    Fr(t[o]) ? r[o] = t[o](e, r, n) : Vt("Extension must be a function");
  for (var a in r)
    Fr(r[a].mount) && r[a].mount();
  return r;
}
function Me(e, t, n) {
  Object.defineProperty(e, t, n);
}
function Nu(e) {
  return Object.keys(e).sort().reduce(function(t, n) {
    return t[n] = e[n], t[n], t;
  }, {});
}
function Ni(e, t) {
  var n = Object.assign({}, e, t);
  if (t.hasOwnProperty("classes")) {
    n.classes = Object.assign({}, e.classes, t.classes);
    var r = ["direction", "type", "slide", "arrow", "nav"];
    r.forEach(function(o) {
      t.classes.hasOwnProperty(o) && (n.classes[o] = ts(ts({}, e.classes[o]), t.classes[o]));
    });
  }
  return t.hasOwnProperty("breakpoints") && (n.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)), n;
}
var Iu = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wr(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }
  return Vr(e, [{
    key: "on",
    value: function(n, r) {
      if (ji(n)) {
        for (var o = 0; o < n.length; o++)
          this.on(n[o], r);
        return;
      }
      this.hop.call(this.events, n) || (this.events[n] = []);
      var a = this.events[n].push(r) - 1;
      return {
        remove: function() {
          delete this.events[n][a];
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
    value: function(n, r) {
      if (ji(n)) {
        for (var o = 0; o < n.length; o++)
          this.emit(n[o], r);
        return;
      }
      this.hop.call(this.events, n) && this.events[n].forEach(function(a) {
        a(r || {});
      });
    }
  }]), e;
}(), Pu = /* @__PURE__ */ function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Wr(this, e), this._c = {}, this._t = [], this._e = new Iu(), this.disabled = !1, this.selector = t, this.settings = Ni(Ou, n), this.index = this.settings.startAt;
  }
  return Vr(e, [{
    key: "mount",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Ln(n) ? this._c = ju(this, n, this._e) : Vt("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return ji(n) ? this._t = n : Vt("You need to provide a array on `mutate()`"), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.settings = Ni(this.settings, n), n.hasOwnProperty("startAt") && (this.index = n.startAt), this._e.emit("update"), this;
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
    value: function(n) {
      return this._c.Run.make(n), this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */
  }, {
    key: "move",
    value: function(n) {
      return this._c.Transition.disable(), this._c.Move.make(n), this;
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return n && (this.settings.autoplay = n), this._e.emit("play"), this;
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
    value: function(n, r) {
      return this._e.on(n, r), this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */
  }, {
    key: "isType",
    value: function(n) {
      return this.settings.type === n;
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
    set: function(n) {
      Ln(n) ? this._o = n : Vt("Options must be an `object` instance.");
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
    set: function(n) {
      this._i = et(n);
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
    set: function(n) {
      this._d = !!n;
    }
  }]), e;
}();
function Lu(e, t, n) {
  var r = {
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
    make: function(p) {
      var b = this;
      e.disabled || (!e.settings.waitForTransition || e.disable(), this.move = p, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), t.Transition.after(function() {
        b.isStart() && n.emit("run.start", b.move), b.isEnd() && n.emit("run.end", b.move), b.isOffset() && (b._o = !1, n.emit("run.offset", b.move)), n.emit("run.after", b.move), e.enable();
      }));
    },
    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function() {
      var p = this.move, b = this.length, w = p.steps, R = p.direction, M = 1;
      if (R === "=") {
        if (e.settings.bound && et(w) > b) {
          e.index = b;
          return;
        }
        e.index = w;
        return;
      }
      if (R === ">" && w === ">") {
        e.index = b;
        return;
      }
      if (R === "<" && w === "<") {
        e.index = 0;
        return;
      }
      if (R === "|" && (M = e.settings.perView || 1), R === ">" || R === "|" && w === ">") {
        var O = o(M);
        O > b && (this._o = !0), e.index = a(O, M);
        return;
      }
      if (R === "<" || R === "|" && w === "<") {
        var k = d(M);
        k < 0 && (this._o = !0), e.index = m(k, M);
        return;
      }
      Vt("Invalid direction pattern [".concat(R).concat(w, "] has been used"));
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
      var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
      return p ? this._o ? p === "|>" ? this.move.direction === "|" && this.move.steps === ">" : p === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === p : !1 : this._o;
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
  function o(h) {
    var p = e.index;
    return e.isType("carousel") ? p + h : p + (h - p % h);
  }
  function a(h, p) {
    var b = r.length;
    return h <= b ? h : e.isType("carousel") ? h - (b + 1) : e.settings.rewind ? r.isBound() && !r.isEnd() ? b : 0 : r.isBound() ? b : Math.floor(b / p) * p;
  }
  function d(h) {
    var p = e.index;
    if (e.isType("carousel"))
      return p - h;
    var b = Math.ceil(p / h);
    return (b - 1) * h;
  }
  function m(h, p) {
    var b = r.length;
    return h >= 0 ? h : e.isType("carousel") ? h + (b + 1) : e.settings.rewind ? r.isBound() && r.isStart() ? b : Math.floor(b / p) * p : 0;
  }
  return Me(r, "move", {
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
    set: function(p) {
      var b = p.substr(1);
      this._m = {
        direction: p.substr(0, 1),
        steps: b ? et(b) ? et(b) : b : 0
      };
    }
  }), Me(r, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var p = e.settings, b = t.Html.slides.length;
      return this.isBound() ? b - 1 - (et(p.perView) - 1) + et(p.focusAt) : b - 1;
    }
  }), Me(r, "offset", {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function() {
      return this._o;
    }
  }), r;
}
function ns() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Ur(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r, o, a, d, m = 0, h = function() {
    m = n.leading === !1 ? 0 : ns(), r = null, d = e.apply(o, a), r || (o = a = null);
  }, p = function() {
    var w = ns();
    !m && n.leading === !1 && (m = w);
    var R = t - (w - m);
    return o = this, a = arguments, R <= 0 || R > t ? (r && (clearTimeout(r), r = null), m = w, d = e.apply(o, a), r || (o = a = null)) : !r && n.trailing !== !1 && (r = setTimeout(h, R)), d;
  };
  return p.cancel = function() {
    clearTimeout(r), m = 0, r = o = a = null;
  }, p;
}
var _r = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function Mu(e, t, n) {
  var r = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(a) {
      for (var d = 0, m = a.length; d < m; d++) {
        var h = a[d].style, p = t.Direction.value;
        d !== 0 ? h[_r[p][0]] = "".concat(this.value / 2, "px") : h[_r[p][0]] = "", d !== a.length - 1 ? h[_r[p][1]] = "".concat(this.value / 2, "px") : h[_r[p][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(a) {
      for (var d = 0, m = a.length; d < m; d++) {
        var h = a[d].style;
        h.marginLeft = "", h.marginRight = "";
      }
    }
  };
  return Me(r, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return et(e.settings.gap);
    }
  }), Me(r, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return r.value * t.Sizes.length;
    }
  }), Me(r, "reductor", {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function() {
      var a = e.settings.perView;
      return r.value * (a - 1) / a;
    }
  }), n.on(["build.after", "update"], Ur(function() {
    r.apply(t.Html.wrapper.children);
  }, 30)), n.on("destroy", function() {
    r.remove(t.Html.wrapper.children);
  }), r;
}
function oa(e) {
  if (e && e.parentNode) {
    for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== e && n.push(t);
    return n;
  }
  return [];
}
function Ii(e) {
  return Array.prototype.slice.call(e);
}
var Du = '[data-glide-el="track"]';
function Fu(e, t, n) {
  var r = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = e.selector, this.track = this.root.querySelector(Du), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = Ii(this.wrapper.children).filter(function(a) {
        return !a.classList.contains(e.settings.classes.slide.clone);
      });
    }
  };
  return Me(r, "root", {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function() {
      return r._r;
    },
    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function(a) {
      Ai(a) && (a = document.querySelector(a)), a !== null ? r._r = a : Vt("Root element must be a existing Html node");
    }
  }), Me(r, "track", {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function() {
      return r._t;
    },
    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function(a) {
      r._t = a;
    }
  }), Me(r, "wrapper", {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function() {
      return r.track.children[0];
    }
  }), n.on("update", function() {
    r.collectSlides();
  }), r;
}
function $u(e, t, n) {
  var r = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function() {
      this.value = e.settings.peek;
    }
  };
  return Me(r, "value", {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function() {
      return r._v;
    },
    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function(a) {
      Ln(a) ? (a.before = et(a.before), a.after = et(a.after)) : a = et(a), r._v = a;
    }
  }), Me(r, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var a = r.value, d = e.settings.perView;
      return Ln(a) ? a.before / d + a.after / d : a * 2 / d;
    }
  }), n.on(["resize", "update"], function() {
    r.mount();
  }), r;
}
function Bu(e, t, n) {
  var r = {
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
      var a = this, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this.offset = d, n.emit("move", {
        movement: this.value
      }), t.Transition.after(function() {
        n.emit("move.after", {
          movement: a.value
        });
      });
    }
  };
  return Me(r, "offset", {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function() {
      return r._o;
    },
    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function(a) {
      r._o = ia(a) ? 0 : et(a);
    }
  }), Me(r, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return t.Sizes.slideWidth * e.index;
    }
  }), Me(r, "value", {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function() {
      var a = this.offset, d = this.translate;
      return t.Direction.is("rtl") ? d + a : d - a;
    }
  }), n.on(["build.before", "run"], function() {
    r.make();
  }), r;
}
function zu(e, t, n) {
  var r = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var a = "".concat(this.slideWidth, "px"), d = t.Html.slides, m = 0; m < d.length; m++)
        d[m].style.width = a;
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
      for (var a = t.Html.slides, d = 0; d < a.length; d++)
        a[d].style.width = "";
      t.Html.wrapper.style.width = "";
    }
  };
  return Me(r, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.slides.length;
    }
  }), Me(r, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return t.Html.track.offsetWidth;
    }
  }), Me(r, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return r.slideWidth * r.length + t.Gaps.grow + t.Clones.grow;
    }
  }), Me(r, "slideWidth", {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function() {
      return r.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
    }
  }), n.on(["build.before", "resize", "update"], function() {
    r.setupSlides(), r.setupWrapper();
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
function Hu(e, t, n) {
  var r = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function() {
      n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after");
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
      var a = e.settings.classes, d = t.Html.slides[e.index];
      d && (d.classList.add(a.slide.active), oa(d).forEach(function(m) {
        m.classList.remove(a.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var a = e.settings.classes, d = a.type, m = a.slide;
      t.Html.root.classList.remove(d[e.settings.type]), t.Html.slides.forEach(function(h) {
        h.classList.remove(m.active);
      });
    }
  };
  return n.on(["destroy", "update"], function() {
    r.removeClasses();
  }), n.on(["resize", "update"], function() {
    r.mount();
  }), n.on("move.after", function() {
    r.activeClass();
  }), r;
}
function Wu(e, t, n) {
  var r = {
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
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], d = t.Html.slides, m = e.settings, h = m.perView, p = m.classes, b = m.cloningRatio;
      if (d.length > 0)
        for (var w = +!!e.settings.peek, R = h + w + Math.round(h / 2), M = d.slice(0, R).reverse(), O = d.slice(R * -1), k = 0; k < Math.max(b, Math.floor(h / d.length)); k++) {
          for (var N = 0; N < M.length; N++) {
            var j = M[N].cloneNode(!0);
            j.classList.add(p.slide.clone), a.push(j);
          }
          for (var F = 0; F < O.length; F++) {
            var W = O[F].cloneNode(!0);
            W.classList.add(p.slide.clone), a.unshift(W);
          }
        }
      return a;
    },
    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function() {
      for (var a = this.items, d = t.Html, m = d.wrapper, h = d.slides, p = Math.floor(a.length / 2), b = a.slice(0, p).reverse(), w = a.slice(p * -1).reverse(), R = "".concat(t.Sizes.slideWidth, "px"), M = 0; M < w.length; M++)
        m.appendChild(w[M]);
      for (var O = 0; O < b.length; O++)
        m.insertBefore(b[O], h[0]);
      for (var k = 0; k < a.length; k++)
        a[k].style.width = R;
    },
    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function() {
      for (var a = this.items, d = 0; d < a.length; d++)
        t.Html.wrapper.removeChild(a[d]);
    }
  };
  return Me(r, "grow", {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function() {
      return (t.Sizes.slideWidth + t.Gaps.value) * r.items.length;
    }
  }), n.on("update", function() {
    r.remove(), r.mount(), r.append();
  }), n.on("build.before", function() {
    e.isType("carousel") && r.append();
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
var on = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wr(this, e), this.listeners = t;
  }
  return Vr(e, [{
    key: "on",
    value: function(n, r, o) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Ai(n) && (n = [n]);
      for (var d = 0; d < n.length; d++)
        this.listeners[n[d]] = o, r.addEventListener(n[d], this.listeners[n[d]], a);
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
    value: function(n, r) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      Ai(n) && (n = [n]);
      for (var a = 0; a < n.length; a++)
        r.removeEventListener(n[a], this.listeners[n[a]], o);
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
function Vu(e, t, n) {
  var r = new on(), o = {
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
      r.on("resize", window, Ur(function() {
        n.emit("resize");
      }, e.settings.throttle));
    },
    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("resize", window);
    }
  };
  return n.on("destroy", function() {
    o.unbind(), r.destroy();
  }), o;
}
var Uu = ["ltr", "rtl"], qu = {
  ">": "<",
  "<": ">",
  "=": "="
};
function Yu(e, t, n) {
  var r = {
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
    resolve: function(a) {
      var d = a.slice(0, 1);
      return this.is("rtl") ? a.split(d).join(qu[d]) : a;
    },
    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function(a) {
      return this.value === a;
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
  return Me(r, "value", {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function() {
      return r._v;
    },
    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function(a) {
      Uu.indexOf(a) > -1 ? r._v = a : Vt("Direction value must be `ltr` or `rtl`");
    }
  }), n.on(["destroy", "update"], function() {
    r.removeClass();
  }), n.on("update", function() {
    r.mount();
  }), n.on(["build.before", "update"], function() {
    r.addClass();
  }), r;
}
function Xu(e, t) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return t.Direction.is("rtl") ? -r : r;
    }
  };
}
function Gu(e, t) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var o = Math.floor(r / t.Sizes.slideWidth);
      return r + t.Gaps.value * o;
    }
  };
}
function Ku(e, t) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      return r + t.Clones.grow / 2;
    }
  };
}
function Zu(e, t) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      if (e.settings.focusAt >= 0) {
        var o = t.Peek.value;
        return Ln(o) ? r - o.before : r - o;
      }
      return r;
    }
  };
}
function Ju(e, t) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(r) {
      var o = t.Gaps.value, a = t.Sizes.width, d = e.settings.focusAt, m = t.Sizes.slideWidth;
      return d === "center" ? r - (a / 2 - m / 2) : r - m * d - o * d;
    }
  };
}
function Qu(e, t, n) {
  var r = [Gu, Ku, Zu, Ju].concat(e._t, [Xu]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(a) {
      for (var d = 0; d < r.length; d++) {
        var m = r[d];
        Fr(m) && Fr(m().modify) ? a = m(e, t, n).modify(a) : Vt("Transformer should be a function that returns an object with `modify()` method");
      }
      return a;
    }
  };
}
function ed(e, t, n) {
  var r = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(a) {
      var d = Qu(e, t).mutate(a), m = "translate3d(".concat(-1 * d, "px, 0px, 0px)");
      t.Html.wrapper.style.mozTransform = m, t.Html.wrapper.style.webkitTransform = m, t.Html.wrapper.style.transform = m;
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
      var a = t.Sizes.length, d = e.index, m = e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a + (d - m) : (d + m) % a;
    },
    /**
     * @return {number}
     */
    getTravelDistance: function() {
      var a = t.Sizes.slideWidth * e.settings.perView;
      return t.Run.isOffset(">") || t.Run.isOffset("|>") ? a * -1 : a;
    }
  };
  return n.on("move", function(o) {
    if (!e.isType("carousel") || !t.Run.isOffset())
      return r.set(o.movement);
    t.Transition.after(function() {
      n.emit("translate.jump"), r.set(t.Sizes.slideWidth * e.index);
    });
    var a = t.Sizes.slideWidth * t.Translate.getStartIndex();
    return r.set(a - t.Translate.getTravelDistance());
  }), n.on("destroy", function() {
    r.remove();
  }), r;
}
function td(e, t, n) {
  var r = !1, o = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(d) {
      var m = e.settings;
      return r ? "".concat(d, " 0ms ").concat(m.animationTimingFunc) : "".concat(d, " ").concat(this.duration, "ms ").concat(m.animationTimingFunc);
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
      r = !1, this.set();
    },
    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function() {
      r = !0, this.set();
    }
  };
  return Me(o, "duration", {
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
  }), n.on("move", function() {
    o.set();
  }), n.on(["build.before", "resize", "translate.jump"], function() {
    o.disable();
  }), n.on("run", function() {
    o.enable();
  }), n.on("destroy", function() {
    o.remove();
  }), o;
}
var sa = !1;
try {
  var rs = Object.defineProperty({}, "passive", {
    get: function() {
      sa = !0;
    }
  });
  window.addEventListener("testPassive", null, rs), window.removeEventListener("testPassive", null, rs);
} catch {
}
var Pi = sa, Er = ["touchstart", "mousedown"], is = ["touchmove", "mousemove"], os = ["touchend", "touchcancel", "mouseup", "mouseleave"], ss = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function nd(e, t, n) {
  var r = new on(), o = 0, a = 0, d = 0, m = !1, h = Pi ? {
    passive: !0
  } : !1, p = {
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
      if (!m && !e.disabled) {
        this.disable();
        var R = this.touches(w);
        o = null, a = et(R.pageX), d = et(R.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(w) {
      if (!e.disabled) {
        var R = e.settings, M = R.touchAngle, O = R.touchRatio, k = R.classes, N = this.touches(w), j = et(N.pageX) - a, F = et(N.pageY) - d, W = Math.abs(j << 2), V = Math.abs(F << 2), L = Math.sqrt(W + V), Q = Math.sqrt(V);
        if (o = Math.asin(Q / L), o * 180 / Math.PI < M)
          w.stopPropagation(), t.Move.make(j * Au(O)), t.Html.root.classList.add(k.dragging), n.emit("swipe.move");
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
        var R = e.settings, M = R.perSwipe, O = R.touchAngle, k = R.classes, N = this.touches(w), j = this.threshold(w), F = N.pageX - a, W = o * 180 / Math.PI;
        this.enable(), F > j && W < O ? t.Run.make(t.Direction.resolve("".concat(M, "<"))) : F < -j && W < O ? t.Run.make(t.Direction.resolve("".concat(M, ">"))) : t.Move.make(), t.Html.root.classList.remove(k.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var w = this, R = e.settings, M = R.swipeThreshold, O = R.dragThreshold;
      M && r.on(Er[0], t.Html.wrapper, function(k) {
        w.start(k);
      }, h), O && r.on(Er[1], t.Html.wrapper, function(k) {
        w.start(k);
      }, h);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      r.off(Er[0], t.Html.wrapper, h), r.off(Er[1], t.Html.wrapper, h);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var w = this;
      r.on(is, t.Html.wrapper, Ur(function(R) {
        w.move(R);
      }, e.settings.throttle), h);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      r.off(is, t.Html.wrapper, h);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var w = this;
      r.on(os, t.Html.wrapper, function(R) {
        w.end(R);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      r.off(os, t.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(w) {
      return ss.indexOf(w.type) > -1 ? w : w.touches[0] || w.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(w) {
      var R = e.settings;
      return ss.indexOf(w.type) > -1 ? R.dragThreshold : R.swipeThreshold;
    },
    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function() {
      return m = !1, t.Transition.enable(), this;
    },
    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function() {
      return m = !0, t.Transition.disable(), this;
    }
  };
  return n.on("build.after", function() {
    t.Html.root.classList.add(e.settings.classes.swipeable);
  }), n.on("destroy", function() {
    p.unbindSwipeStart(), p.unbindSwipeMove(), p.unbindSwipeEnd(), r.destroy();
  }), p;
}
function rd(e, t, n) {
  var r = new on(), o = {
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
      r.on("dragstart", t.Html.wrapper, this.dragstart);
    },
    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("dragstart", t.Html.wrapper);
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
  return n.on("destroy", function() {
    o.unbind(), r.destroy();
  }), o;
}
function id(e, t, n) {
  var r = new on(), o = !1, a = !1, d = {
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
      r.on("click", t.Html.wrapper, this.click);
    },
    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("click", t.Html.wrapper);
    },
    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function(h) {
      a && (h.stopPropagation(), h.preventDefault());
    },
    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function() {
      if (a = !0, !o) {
        for (var h = 0; h < this.items.length; h++)
          this.items[h].draggable = !1;
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
      if (a = !1, o) {
        for (var h = 0; h < this.items.length; h++)
          this.items[h].draggable = !0;
        o = !1;
      }
      return this;
    }
  };
  return Me(d, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return d._a;
    }
  }), n.on("swipe.move", function() {
    d.detach();
  }), n.on("swipe.end", function() {
    t.Transition.after(function() {
      d.attach();
    });
  }), n.on("destroy", function() {
    d.attach(), d.unbind(), r.destroy();
  }), d;
}
var od = '[data-glide-el="controls[nav]"]', Gi = '[data-glide-el^="controls"]', sd = "".concat(Gi, ' [data-glide-dir*="<"]'), ad = "".concat(Gi, ' [data-glide-dir*=">"]');
function ld(e, t, n) {
  var r = new on(), o = Pi ? {
    passive: !0
  } : !1, a = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = t.Html.root.querySelectorAll(od), this._c = t.Html.root.querySelectorAll(Gi), this._arrowControls = {
        previous: t.Html.root.querySelectorAll(sd),
        next: t.Html.root.querySelectorAll(ad)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var m = 0; m < this._n.length; m++)
        this.addClass(this._n[m].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var m = 0; m < this._n.length; m++)
        this.removeClass(this._n[m].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(m) {
      var h = e.settings, p = m[e.index];
      p && (p.classList.add(h.classes.nav.active), oa(p).forEach(function(b) {
        b.classList.remove(h.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(m) {
      var h = m[e.index];
      h == null || h.classList.remove(e.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!e.settings.rewind) {
        var m = a._arrowControls.next, h = a._arrowControls.previous;
        this.resetArrowState(m, h), e.index === 0 && this.disableArrow(h), e.index === t.Run.length && this.disableArrow(m);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var m = e.settings, h = arguments.length, p = new Array(h), b = 0; b < h; b++)
        p[b] = arguments[b];
      p.forEach(function(w) {
        Ii(w).forEach(function(R) {
          R.classList.remove(m.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var m = e.settings, h = arguments.length, p = new Array(h), b = 0; b < h; b++)
        p[b] = arguments[b];
      p.forEach(function(w) {
        Ii(w).forEach(function(R) {
          R.classList.add(m.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var m = 0; m < this._c.length; m++)
        this.bind(this._c[m].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var m = 0; m < this._c.length; m++)
        this.unbind(this._c[m].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(m) {
      for (var h = 0; h < m.length; h++)
        r.on("click", m[h], this.click), r.on("touchstart", m[h], this.click, o);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(m) {
      for (var h = 0; h < m.length; h++)
        r.off(["click", "touchstart"], m[h]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(m) {
      !Pi && m.type === "touchstart" && m.preventDefault();
      var h = m.currentTarget.getAttribute("data-glide-dir");
      t.Run.make(t.Direction.resolve(h));
    }
  };
  return Me(a, "items", {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return a._c;
    }
  }), n.on(["mount.after", "move.after"], function() {
    a.setActive();
  }), n.on(["mount.after", "run"], function() {
    a.setArrowState();
  }), n.on("destroy", function() {
    a.removeBindings(), a.removeActive(), r.destroy();
  }), a;
}
function cd(e, t, n) {
  var r = new on(), o = {
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
      r.on("keyup", document, this.press);
    },
    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function() {
      r.off("keyup", document);
    },
    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function(d) {
      var m = e.settings.perSwipe, h = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(d.code) && t.Run.make(t.Direction.resolve("".concat(m).concat(h[d.code])));
    }
  };
  return n.on(["destroy", "update"], function() {
    o.unbind();
  }), n.on("update", function() {
    o.mount();
  }), n.on("destroy", function() {
    r.destroy();
  }), o;
}
function ud(e, t, n) {
  var r = new on(), o = {
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
      this._e && (this.enable(), e.settings.autoplay && ia(this._i) && (this._i = setInterval(function() {
        d.stop(), t.Run.make(">"), d.start(), n.emit("autoplay");
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
      r.on("mouseover", t.Html.root, function() {
        d._e && d.stop();
      }), r.on("mouseout", t.Html.root, function() {
        d._e && d.start();
      });
    },
    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function() {
      r.off(["mouseover", "mouseout"], t.Html.root);
    }
  };
  return Me(o, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var d = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
      return et(d || e.settings.autoplay);
    }
  }), n.on(["destroy", "update"], function() {
    o.unbind();
  }), n.on(["run.before", "swipe.start", "update"], function() {
    o.stop();
  }), n.on(["pause", "destroy"], function() {
    o.disable(), o.stop();
  }), n.on(["run.after", "swipe.end"], function() {
    o.start();
  }), n.on(["play"], function() {
    o.enable(), o.start();
  }), n.on("update", function() {
    o.mount();
  }), n.on("destroy", function() {
    r.destroy();
  }), o;
}
function as(e) {
  return Ln(e) ? Nu(e) : (Vt("Breakpoints option must be an object"), {});
}
function dd(e, t, n) {
  var r = new on(), o = e.settings, a = as(o.breakpoints), d = Object.assign({}, o), m = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function(p) {
      if (typeof window.matchMedia < "u") {
        for (var b in p)
          if (p.hasOwnProperty(b) && window.matchMedia("(max-width: ".concat(b, "px)")).matches)
            return p[b];
      }
      return d;
    }
  };
  return Object.assign(o, m.match(a)), r.on("resize", window, Ur(function() {
    e.settings = Ni(o, m.match(a));
  }, e.settings.throttle)), n.on("update", function() {
    a = as(a), d = Object.assign({}, o);
  }), n.on("destroy", function() {
    r.off("resize", window);
  }), m;
}
var fd = {
  // Required
  Html: Fu,
  Translate: ed,
  Transition: td,
  Direction: Yu,
  Peek: $u,
  Sizes: zu,
  Gaps: Mu,
  Move: Bu,
  Clones: Wu,
  Resize: Vu,
  Build: Hu,
  Run: Lu,
  // Optional
  Swipe: nd,
  Images: rd,
  Anchors: id,
  Controls: ld,
  Keyboard: cd,
  Autoplay: ud,
  Breakpoints: dd
}, pd = /* @__PURE__ */ function(e) {
  ku(n, e);
  var t = Cu(n);
  function n() {
    return Wr(this, n), t.apply(this, arguments);
  }
  return Vr(n, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Nr(Pn(n.prototype), "mount", this).call(this, Object.assign({}, fd, o));
    }
  }]), n;
}(Pu);
function hd(e) {
  let t, n, r;
  switch (e) {
    case 3:
      t = 1, n = 2, r = 3;
      break;
    case 2:
      t = 1, n = 2, r = 2;
      break;
    case 1:
    default:
      t = 1, n = 1, r = 1;
  }
  return {
    perViewSm: t,
    perViewMd: n,
    perViewLg: r
  };
}
function md(e = 1, t, n = !0, r) {
  const { perViewSm: o, perViewMd: a, perViewLg: d } = hd(e), m = n ? 24 : 0, h = n ? { before: 48, after: 48 } : 0, p = n ? { before: 124, after: 124 } : 0;
  return {
    type: "slider",
    // No wrap-around.
    focusAt: 0,
    bound: !0,
    // Only if type slider with focusAt 0
    rewind: !1,
    // Only if type slider
    gap: m,
    // Space between slides... may be impacted by viewport size.
    // `keyboard` Left/Right arrow key support for slides - true is default.
    // Is not fully Accessible, on keydown allcarousels move simultaneously
    // A custome keyboard handler is implemented
    keyboard: !1,
    startAt: 0,
    swipeThreshold: 80,
    // Distance required for swipe to change slide.
    dragThreshold: r ? 120 : !1,
    // Distance for mouse drag to change slide.
    perTouch: 1,
    // Number of slides that can be moved per each swipe/drag.
    perView: d,
    // Can be overwritten at breakpoints
    peek: p,
    // Can be overwritten at breakpoints
    // if isFullWidth = true, then we have only 1 image per view which takes the full width.
    // no need for breakpoints
    breakpoints: t ? null : {
      576: {
        // BS4 sm
        perView: o,
        peek: h
      },
      768: {
        // BS4 md
        perView: a,
        peek: h
      },
      992: {
        // BS4 lg
        perView: d,
        peek: h
      },
      1260: {
        // BS4 xl
        perView: d,
        peek: h
      },
      1400: {
        perView: d,
        peek: p
      },
      1920: {
        perView: d,
        peek: p
      }
    }
  };
}
function gd(e, t, n) {
  const r = e.querySelector(".glide__arrow--prev"), o = e.querySelector(".glide__arrow--next"), a = e.querySelector(".glide__track"), d = e.querySelector(
    ".image-navigator-images"
  );
  if (!(r || o)) return;
  const m = ["slider-start", "slider-mid", "slider-end"], h = "glide__arrow--disabled";
  a == null || a.classList.remove(...m), d == null || d.classList.remove(...m), t === 0 ? (a == null || a.classList.add("slider-start"), d == null || d.classList.add("slider-start"), r == null || r.classList.add(h), r == null || r.setAttribute("aria-disabled", "true"), o == null || o.classList.remove(h), o == null || o.setAttribute("aria-disabled", "false")) : t >= n - 1 ? (a == null || a.classList.add("slider-end"), d == null || d.classList.add("slider-end"), r == null || r.classList.remove(h), r == null || r.setAttribute("aria-disabled", "false"), o == null || o.classList.add(h), o == null || o.setAttribute("aria-disabled", "true")) : (a == null || a.classList.add("slider-mid"), d == null || d.classList.add("slider-mid"), r == null || r.classList.remove(h), o == null || o.classList.remove(h), r == null || r.setAttribute("aria-disabled", "false"), o == null || o.setAttribute("aria-disabled", "false"));
}
function vd(e, t, n) {
  const r = e.querySelectorAll(".glide__slide"), o = t, a = Math.min(
    r.length - 1,
    t + n - 1
  );
  r.forEach((d, m) => {
    m < o || m > a ? (d.setAttribute("aria-hidden", "true"), d.setAttribute("tabindex", "-1"), d.setAttribute("inert", "")) : (d.setAttribute("aria-hidden", "false"), d.removeAttribute("tabindex"), d.removeAttribute("inert"));
  });
}
function yd({
  instanceName: e,
  perView: t,
  buttonCount: n,
  isFullWidth: r = !1,
  onItemClick: o,
  hasPeek: a = !0,
  isDraggable: d
}) {
  const m = md(t, r, a, d), h = new pd(`#${e}`, m);
  let p = document.querySelector(`#${e}`);
  return p.addEventListener("keyup", (b) => {
    const w = b;
    w.keyCode === 39 ? h.go(">") : w.keyCode === 37 ? h.go("<") : w.keyCode === 13 && h.go(document.activeElement.dataset.glideDir);
  }), h.on("build.before", () => {
    p = document.querySelector(`#${e}`), p && p.classList.add("slider-start");
  }), h.on("move", () => {
    if (p = document.querySelector(`#${e}`), !p) return;
    const b = h.index;
    vd(p, b, t);
    const w = p.querySelector(".navigation-slider"), R = p.querySelector(".image-navigator-images");
    if (w && R) {
      const M = w.querySelectorAll(
        ".bullet-image-container"
      ), O = w.clientWidth, k = 82, N = M[b], j = R.getBoundingClientRect().x, F = w.getBoundingClientRect().x - j, W = N.getBoundingClientRect().x - j, V = N.getBoundingClientRect().x + N.getBoundingClientRect().width - j;
      if (b === 0 || W <= 0 + k)
        w.style.left = `${F - W + k}px`;
      else if (V >= O - k) {
        const L = V - O;
        w.style.left = `${F - L - k}px`;
      }
    }
    gd(p, b, n), p.setAttribute("data-current-index", b), o && o(b);
  }), h.mount(), h;
}
function xd(e, t) {
  let n;
  const r = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return n = e, r >= 992 && (t >= 2 && (n = e - 1), t >= 3 && (n = e - 2)), n;
}
const rr = ({
  perView: e = 1,
  width: t,
  maxWidth: n,
  carouselItems: r,
  cssClass: o = "",
  CustomNavComponent: a,
  role: d,
  ariaLabelledBy: m,
  isFullWidth: h,
  removeSideBackground: p = !1,
  hasNavButtons: b = !0,
  hasPositionIndicators: w = !0,
  imageAutoSize: R = !0,
  onItemClick: M = () => null,
  hasPeek: O = !0,
  isDraggable: k = !0,
  hasShadow: N = !0
}) => {
  const j = `glide-${Math.ceil(Math.random() * 1e4)}`, F = xd(r.length, e);
  return lt(() => {
    yd({
      instanceName: j,
      perView: e,
      buttonCount: F,
      isFullWidth: h,
      onItemClick: M,
      hasPeek: O,
      isDraggable: k
    });
  }, [
    j,
    e,
    F,
    h,
    M,
    O,
    k
  ]), /* @__PURE__ */ f.jsxs(
    "div",
    {
      role: d,
      "aria-labelledby": m,
      className: `glide ${o}`,
      id: j,
      style: { width: t, maxWidth: n },
      "data-remove-side-background": p,
      "data-image-auto-size": R,
      "data-has-shadow": N,
      children: [
        /* @__PURE__ */ f.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ f.jsx(ra, { carouselItems: r }) }),
        a ? (
          // @ts-ignore
          /* @__PURE__ */ f.jsx(a, { instanceName: j })
        ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          w && /* @__PURE__ */ f.jsx(ea, { buttonCount: F }),
          b && /* @__PURE__ */ f.jsx(na, {})
        ] })
      ]
    }
  );
};
rr.propTypes = {
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
const bd = ({
  id: e,
  imageSource: t,
  imageAltText: n,
  title: r,
  content: o,
  eventLocation: a,
  eventTime: d,
  buttons: m,
  linkLabel: h,
  linkUrl: p,
  tags: b
}, w, R, M) => {
  var O;
  return {
    // @ts-ignore
    id: e,
    item: /* @__PURE__ */ f.jsx(
      nn,
      {
        type: w,
        horizontal: R,
        image: t,
        imageAltText: n,
        title: r,
        body: o,
        eventFormat: M,
        eventLocation: a,
        eventTime: d,
        buttons: m,
        linkLabel: h,
        linkUrl: p || ((O = m == null ? void 0 : m[0]) == null ? void 0 : O.href),
        tags: b
      }
    )
  };
}, aa = ({
  perView: e = 0,
  cardItems: t = [],
  cardType: n = "default",
  cardEventFormat: r = "stack",
  cardHorizontal: o = !1,
  width: a = void 0,
  maxWidth: d = void 0,
  imageAutoSize: m = !0
}) => {
  const h = parseInt(`${e}`, 10), [p, b] = Ke(h), w = 1024, R = 768;
  lt(() => {
    const k = () => {
      const N = window.innerWidth;
      let j;
      switch (h) {
        case 3:
          N > w ? j = 3 : N > R ? j = 2 : j = 1;
          break;
        case 2:
          j = N < R ? 1 : 2;
          break;
        default:
          j = 1;
          break;
      }
      b(j);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [h]);
  const M = t.map(
    (k) => bd(k, n, o, r)
  ), O = t.length > p;
  return /* @__PURE__ */ f.jsx(
    rr,
    {
      perView: +p,
      maxWidth: d,
      width: a,
      carouselItems: M,
      cssClass: "aligned-carousel",
      imageAutoSize: m,
      removeSideBackground: t.length <= p,
      hasPositionIndicators: O,
      hasNavButtons: O,
      isDraggable: O,
      hasShadow: !0
    }
  );
};
aa.propTypes = {
  perView: l.string.isRequired,
  cardItems: l.arrayOf(
    l.shape({
      title: l.string.isRequired,
      content: l.string,
      eventLocation: l.string,
      eventTime: l.string,
      image: l.string,
      imageAltText: l.string,
      buttons: nn.propTypes.buttons,
      linkLabel: l.string,
      linkUrl: l.string,
      tags: nn.propTypes.tags
    })
  ).isRequired,
  cardType: nn.propTypes.type,
  cardEventFormat: nn.propTypes.eventFormat,
  cardHorizontal: nn.propTypes.horizontal,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const wd = ({ id: e, imageSource: t, imageAltText: n, title: r, content: o }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx("div", { className: "uds-img", children: /* @__PURE__ */ f.jsxs("figure", { className: "figure uds-figure", children: [
    /* @__PURE__ */ f.jsx(
      "img",
      {
        src: t,
        className: "uds-img figure-img img-fluid",
        alt: n,
        loading: "lazy",
        decoding: "async"
      }
    ),
    (r || o) && /* @__PURE__ */ f.jsx(
      "figcaption",
      {
        className: "figure-caption uds-figure-caption",
        "data-testid": "image-content-container",
        children: /* @__PURE__ */ f.jsx("div", { className: "uds-caption-text", children: r ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx("h3", { children: r }),
          /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: { __html: o } })
        ] }) : (
          // eslint-disable-next-line react/no-danger
          /* @__PURE__ */ f.jsx("div", { dangerouslySetInnerHTML: { __html: o } })
        ) })
      }
    )
  ] }) })
}), la = ({
  perView: e = 0,
  imageItems: t = [],
  width: n = void 0,
  maxWidth: r = void 0,
  imageAutoSize: o = !0
}) => {
  if (!t || t.length === 0)
    return null;
  const a = parseInt(`${e}`, 10), d = t.map(wd) || [], m = t.length > a;
  return /* @__PURE__ */ f.jsx(
    rr,
    {
      perView: +a,
      maxWidth: r,
      width: n,
      cssClass: "image-carousel aligned-carousel",
      carouselItems: d,
      imageAutoSize: o,
      removeSideBackground: t.length <= a,
      hasPositionIndicators: m,
      hasNavButtons: m,
      isDraggable: m,
      hasShadow: !0
    }
  );
};
la.propTypes = {
  perView: l.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  imageItems: l.arrayOf(l.object).isRequired,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Sd = (e, t) => {
  if (!e)
    return 0;
  const n = (e.match(/<br/g) || []).length, r = t / 6;
  return (parseInt(`${e.length / r}`, 10) + n) * 20;
}, $r = {
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
}, kd = ({ id: e, imageSource: t, imageAltText: n }) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx("div", { className: "uds-img", children: /* @__PURE__ */ f.jsx(
    "img",
    {
      src: t,
      className: "uds-img figure-img img-fluid",
      alt: n,
      loading: "lazy",
      decoding: "async"
    }
  ) })
}), ca = ({ instanceName: e, imageItems: t, hasContent: n }) => {
  if (!t || t.length === 0)
    return null;
  const r = "data-current-index", [o, a] = Ke(t[0].title), [d, m] = Ke(t[0].content), h = (b) => {
    const w = t[b];
    a(w.title), m(w.content);
  };
  lt(() => {
    const b = document.querySelector(
      ".image-gallery figcaption .uds-caption-text div"
    );
    if (b) {
      const O = parseInt(
        window.getComputedStyle(b, null).getPropertyValue("width").split("px")[0],
        10
      ), k = t.reduce((N, j) => {
        const F = Sd(j.content, O);
        return F > N ? F : N;
      }, 0);
      b.style.height = `${k}px`;
    }
    const w = document.querySelector(`#${e}`);
    function R(O) {
      for (const k of O)
        if (k && k.attributeName === r)
          return h(+w.getAttribute(r));
      return null;
    }
    new MutationObserver(R).observe(w, {
      attributes: !0
    });
  }, [e]);
  const p = t.map((b) => b.imageSource);
  return /* @__PURE__ */ f.jsxs("div", { className: "image-gallery-action-area", "data-has-content": n, children: [
    /* @__PURE__ */ f.jsx("div", { className: "image-navigator", children: /* @__PURE__ */ f.jsxs(Xi, { children: [
      /* @__PURE__ */ f.jsx(Yi, {}),
      /* @__PURE__ */ f.jsx("div", { className: "image-navigator-images", children: /* @__PURE__ */ f.jsx("div", { className: "navigation-slider", children: /* @__PURE__ */ f.jsx(
        ta,
        {
          imageItems: p,
          onItemClick: (b) => h(b)
        }
      ) }) }),
      /* @__PURE__ */ f.jsx(qi, {})
    ] }) }),
    n && (o || d) ? /* @__PURE__ */ f.jsx(
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
ca.propTypes = {
  instanceName: l.string,
  imageItems: $r.imageItems,
  hasContent: $r.hasContent
};
const ua = ({
  width: e,
  maxWidth: t,
  imageItems: n = [],
  hasContent: r = !1,
  imageAutoSize: o = !0
}) => {
  const a = n.map(kd), d = n.length > 1;
  return /* @__PURE__ */ f.jsx(
    rr,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: a,
      cssClass: "image-gallery",
      role: "figure",
      ariaLabelledBy: r ? "caption" : null,
      isFullWidth: !0,
      imageAutoSize: o,
      hasPeek: !1,
      CustomNavComponent: ({ instanceName: m }) => /* @__PURE__ */ f.jsx(
        ca,
        {
          instanceName: m,
          hasContent: r,
          imageItems: n
        }
      ),
      removeSideBackground: n.length <= 1,
      hasPositionIndicators: d,
      hasNavButtons: d,
      isDraggable: d,
      hasShadow: !0
    }
  );
};
ua.propTypes = {
  imageItems: $r.imageItems.isRequired,
  hasContent: $r.hasContent,
  width: l.string,
  maxWidth: l.string,
  imageAutoSize: l.bool
};
const Td = ({ id: e, imageSource: t, imageAltText: n, quote: r }, o = {}) => ({
  // @ts-ignore
  id: e,
  item: /* @__PURE__ */ f.jsx(
    Vi,
    {
      imageSource: t,
      imageAltText: n,
      quote: r,
      itemStyle: o
    }
  )
}), da = ({
  width: e,
  maxWidth: t,
  testimonialItems: n = [],
  itemStyle: r = {},
  hasNavButtons: o = !1,
  hasPositionIndicators: a = !1,
  imageAutoSize: d = !0
}) => {
  const m = n.map(
    (h) => Td(h, r)
  );
  return /* @__PURE__ */ f.jsx(
    rr,
    {
      perView: 1,
      maxWidth: t,
      width: e,
      carouselItems: m,
      isFullWidth: !0,
      removeSideBackground: !0,
      hasNavButtons: o,
      hasPositionIndicators: a,
      imageAutoSize: d,
      hasPeek: !1,
      hasShadow: !1
    }
  );
};
da.propTypes = {
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
var Dt = /* @__PURE__ */ ((e) => (e.UNORDERED = "unordered", e.ORDERED = "ordered", e.ICON = "icon", e.STEP = "step", e.DISPLAY = "display", e))(Dt || {}), Ir = /* @__PURE__ */ ((e) => (e.UL = "ul", e.OL = "ol", e))(Ir || {}), xn = /* @__PURE__ */ ((e) => (e.NONE = "none", e.LIGHT = "light", e.MEDIUM = "medium", e.DARK = "dark", e))(xn || {}), Pr = /* @__PURE__ */ ((e) => (e.DEFAULT = "default", e.PRIMARY = "primary", e.SECONDARY = "secondary", e))(Pr || {});
const fa = (e) => {
  switch (e) {
    case Ir.OL:
    case Dt.ORDERED:
    case Dt.STEP:
      return Ir.OL;
    default:
      return Ir.UL;
  }
}, pa = ({
  listType: e,
  content: t,
  icon: n,
  nestedType: r,
  nestedItems: o
}) => {
  const [a, ...d] = Array.isArray(t) ? t : [t];
  let m = null;
  if (o != null && o.length) {
    const h = r || e, p = fa(h);
    m = /* @__PURE__ */ f.jsx(p, { children: o.map((b, w) => /* @__PURE__ */ f.jsx(pa, { listType: h, ...b }, w)) });
  }
  return /* @__PURE__ */ f.jsxs("li", { children: [
    n && /* @__PURE__ */ f.jsx("span", { className: `fa-li ${n == null ? void 0 : n[0]} fa-${n == null ? void 0 : n[1]}` }),
    a,
    " ",
    d.map((h, p) => [/* @__PURE__ */ f.jsx("br", {}, `br-${p}`), /* @__PURE__ */ f.jsx("span", { children: h }, p)]),
    m
  ] });
}, _d = ({
  listType: e = Dt.UNORDERED,
  backgroundColor: t = xn.NONE,
  listItemStyleColor: n = Pr.DEFAULT,
  items: r
}) => {
  const o = fa(e);
  let a = "maroon", d = "maroon";
  t === xn.DARK && (a = "gold", d = "gold"), e === Dt.STEP && (a = "uds-steplist-maroon", d = "uds-steplist-gold", t === xn.DARK && (a = "uds-steplist-gold"));
  const m = be({
    "uds-list": e === Dt.UNORDERED || e === Dt.ORDERED,
    "uds-list fa-ul": e === Dt.ICON,
    "uds-list uds-steplist": e === Dt.STEP,
    "uds-list uds-display-list": e === Dt.DISPLAY,
    "light-smokemode": t === xn.LIGHT,
    smokemode: t === xn.MEDIUM,
    darkmode: t === xn.DARK,
    [`${a}`]: n === Pr.PRIMARY,
    // Intentional space ` ${secondaryColor}` for when primary and secondary colors are the same
    [` ${d}`]: n === Pr.SECONDARY
  });
  return /* @__PURE__ */ f.jsx(o, { className: m || null, children: r.map((h, p) => /* @__PURE__ */ f.jsx(pa, { listType: e, ...h }, p)) });
}, Ed = {
  none: "",
  gold: "text-gold",
  white: "text-white"
}, Cd = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Rd = ({
  gridLinkItems: e,
  numColumns: t,
  textColor: n,
  children: r
}) => /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx(
    "div",
    {
      className: [
        "uds-grid-links",
        t,
        Ed[n]
      ].join(" "),
      children: e && e.map((o) => /* @__PURE__ */ f.jsx(
        tt,
        {
          gaData: {
            ...Cd,
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
  /* @__PURE__ */ f.jsx("div", { children: r })
] });
var Ki, ls = Oa;
Ki = ls.createRoot, ls.hydrateRoot;
const Od = (e, t, n) => {
  Ki(n).render($e.createElement(e, t));
}, qr = ({ typeCarousel: e, targetSelector: t, props: n }) => {
  const o = {
    card: aa,
    testimonial: da,
    image: la,
    "image-gallery": ua
  }[e];
  o && Od(o, n, document.querySelector(t));
}, Id = ({ targetSelector: e, props: t }) => qr({
  typeCarousel: "card",
  targetSelector: e,
  props: t
}), Pd = ({ targetSelector: e, props: t }) => {
  qr({
    typeCarousel: "testimonial",
    targetSelector: e,
    props: t
  });
}, Ld = ({ targetSelector: e, props: t }) => {
  qr({ typeCarousel: "image", targetSelector: e, props: t });
}, Md = ({ targetSelector: e, props: t }) => {
  qr({
    typeCarousel: "image-gallery",
    targetSelector: e,
    props: t
  });
}, qe = (e, t, n) => {
  Ki(n).render($e.createElement(e, t));
}, Dd = ({ targetSelector: e, props: t }) => qe(ks, t, document.querySelector(e)), Fd = ({ targetSelector: e, props: t }) => qe(Ds, t, document.querySelector(e)), $d = ({ targetSelector: e, props: t }) => qe(Bs, t, document.querySelector(e)), Bd = ({ targetSelector: e, props: t }) => qe(bn, t, document.querySelector(e)), zd = ({ targetSelector: e, props: t }) => qe(Hi, t, document.querySelector(e)), Hd = ({ targetSelector: e, props: t }) => qe(Wi, t, document.querySelector(e)), Wd = ({ targetSelector: e, props: t }) => qe(nn, t, document.querySelector(e)), Vd = ({ targetSelector: e, props: t }) => qe(Rd, t, document.querySelector(e)), Ud = ({ targetSelector: e, props: t }) => qe(Us, t, document.querySelector(e)), qd = ({ targetSelector: e, props: t }) => qe(In, t, document.querySelector(e)), Yd = ({ targetSelector: e, props: t }) => qe(qs, t, document.querySelector(e)), Xd = ({ targetSelector: e, props: t }) => qe(Gs, t, document.querySelector(e)), Gd = ({ targetSelector: e, props: t }) => qe(Js, t, document.querySelector(e)), Kd = ({ targetSelector: e, props: t }) => qe(Vi, t, document.querySelector(e)), Zd = ({ targetSelector: e, props: t }) => qe(Qs, t, document.querySelector(e)), Jd = ({ targetSelector: e, props: t }) => qe(du, t, document.querySelector(e)), Qd = ({ targetSelector: e, props: t }) => qe(Xc, t, document.querySelector(e)), ef = ({ targetSelector: e, props: t }) => qe(gu, t, document.querySelector(e)), tf = ({ targetSelector: e, props: t }) => qe(_d, t, document.querySelector(e));
export {
  ks as Accordion,
  Ds as AnchorMenu,
  Bs as Article,
  bn as Button,
  Hi as ButtonIconOnly,
  Wi as ButtonTag,
  nn as Card,
  aa as CardCarousel,
  Xc as Divider,
  Yc as DividerType,
  iu as FeedBody,
  Qc as FeedContainerProvider,
  Jc as FeedContext,
  ru as FeedHeader,
  Rd as GridLinks,
  Us as Hero,
  In as Image,
  la as ImageCarousel,
  ua as ImageGalleryCarousel,
  _d as List,
  Ks as NavControls,
  qs as Pagination,
  Gs as RankingCard,
  du as SystemAlert,
  uu as SystemAlertType,
  hu as Tab,
  Zs as TabHeader,
  Js as TabbedPanels,
  Vi as Testimonial,
  da as TestimonialCarousel,
  gu as Tooltip,
  Qs as Video,
  Nd as feedCardButtonShape,
  tu as feedComponentShape,
  Vs as feedCtaButtonShape,
  eu as feedDataSourceShape,
  Ws as feedHeaderShape,
  Dd as initAccordion,
  Fd as initAnchorMenu,
  $d as initArticle,
  Bd as initButton,
  zd as initButtonIconOnly,
  Hd as initButtonTag,
  Wd as initCard,
  Id as initCardCarousel,
  Qd as initDivider,
  Vd as initGridLinks,
  Ud as initHero,
  qd as initImage,
  Ld as initImageCarousel,
  Md as initImageGalleryCarousel,
  tf as initList,
  Yd as initPagination,
  Xd as initRankingCard,
  Jd as initSystemAlert,
  Gd as initTabbedPanels,
  Kd as initTestimonial,
  Pd as initTestimonialCarousel,
  ef as initTooltip,
  Zd as initVideo
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
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
                var css = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
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