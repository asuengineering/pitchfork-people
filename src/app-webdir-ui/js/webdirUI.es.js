var Wi = (e) => {
  throw TypeError(e);
};
var to = (e, t, r) => t.has(e) || Wi("Cannot " + r);
var ro = (e, t, r) => (to(e, t, "read from private field"), r ? r.call(e) : t.get(e)), no = (e, t, r) => t.has(e) ? Wi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ao = (e, t, r, n) => (to(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), oo = (e, t, r) => (to(e, t, "access private method"), r);
import ht, { useContext as fn, createElement as il, Component as $c, createContext as Xc, forwardRef as sl, useRef as Zr, useImperativeHandle as eu, useId as tu, useState as Ge, useEffect as mt, useCallback as ru } from "react";
import { useSearchParams as ll, BrowserRouter as cl, Routes as ul, Route as dl } from "react-router-dom";
import fl from "react-dom";
function pl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hl = { exports: {} }, kn = {}, Qi;
function nu() {
  if (Qi) return kn;
  Qi = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, h, p) {
    var y, S = {}, N = null, W = null;
    p !== void 0 && (N = "" + p), h.key !== void 0 && (N = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (y in h) n.call(h, y) && !i.hasOwnProperty(y) && (S[y] = h[y]);
    if (f && f.defaultProps) for (y in h = f.defaultProps, h) S[y] === void 0 && (S[y] = h[y]);
    return { $$typeof: t, type: f, key: N, ref: W, props: S, _owner: a.current };
  }
  return kn.Fragment = r, kn.jsx = l, kn.jsxs = l, kn;
}
hl.exports = nu();
var T = hl.exports, gl = { exports: {} }, io, Gi;
function au() {
  if (Gi) return io;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return io = e, io;
}
var so, qi;
function ou() {
  if (qi) return so;
  qi = 1;
  var e = au();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, so = function() {
    function n(l, f, h, p, y, S) {
      if (S !== e) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, so;
}
gl.exports = ou()();
var iu = gl.exports;
const I = /* @__PURE__ */ pl(iu);
var ml = { exports: {} }, Xe = {}, Vi;
function su() {
  if (Vi) return Xe;
  Vi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), W = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case e:
          switch (w = w.type, w) {
            case r:
            case a:
            case n:
            case h:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case f:
                case S:
                case y:
                  return w;
                case i:
                  return w;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  return Xe.ContextConsumer = i, Xe.ContextProvider = l, Xe.Element = e, Xe.ForwardRef = f, Xe.Fragment = r, Xe.Lazy = S, Xe.Memo = y, Xe.Portal = t, Xe.Profiler = a, Xe.StrictMode = n, Xe.Suspense = h, Xe.SuspenseList = p, Xe.isContextConsumer = function(w) {
    return C(w) === i;
  }, Xe.isContextProvider = function(w) {
    return C(w) === l;
  }, Xe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Xe.isForwardRef = function(w) {
    return C(w) === f;
  }, Xe.isFragment = function(w) {
    return C(w) === r;
  }, Xe.isLazy = function(w) {
    return C(w) === S;
  }, Xe.isMemo = function(w) {
    return C(w) === y;
  }, Xe.isPortal = function(w) {
    return C(w) === t;
  }, Xe.isProfiler = function(w) {
    return C(w) === a;
  }, Xe.isStrictMode = function(w) {
    return C(w) === n;
  }, Xe.isSuspense = function(w) {
    return C(w) === h;
  }, Xe.isSuspenseList = function(w) {
    return C(w) === p;
  }, Xe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === n || w === h || w === p || w === N || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === y || w.$$typeof === l || w.$$typeof === i || w.$$typeof === f || w.$$typeof === W || w.getModuleId !== void 0);
  }, Xe.typeOf = C, Xe;
}
ml.exports = su();
var yl = ml.exports;
function lu(e) {
  function t(G, L, Q, q, v) {
    for (var V = 0, _ = 0, ce = 0, re = 0, oe, Z, fe = 0, me = 0, ie, ye = ie = oe = 0, le = 0, Ae = 0, He = 0, we = 0, ot = Q.length, $e = ot - 1, ke, $ = "", be = "", it = "", rt = "", ze; le < ot; ) {
      if (Z = Q.charCodeAt(le), le === $e && _ + re + ce + V !== 0 && (_ !== 0 && (Z = _ === 47 ? 10 : 47), re = ce = V = 0, ot++, $e++), _ + re + ce + V === 0) {
        if (le === $e && (0 < Ae && ($ = $.replace(N, "")), 0 < $.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += Q.charAt(le);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for ($ = $.trim(), oe = $.charCodeAt(0), ie = 1, we = ++le; le < ot; ) {
              switch (Z = Q.charCodeAt(le)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (Z = Q.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ye = le + 1; ye < $e; ++ye)
                          switch (Q.charCodeAt(ye)) {
                            case 47:
                              if (Z === 42 && Q.charCodeAt(ye - 1) === 42 && le + 2 !== ye) {
                                le = ye + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                le = ye + 1;
                                break e;
                              }
                          }
                        le = ye;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; le++ < $e && Q.charCodeAt(le) !== Z; )
                    ;
              }
              if (ie === 0) break;
              le++;
            }
            switch (ie = Q.substring(we, le), oe === 0 && (oe = ($ = $.replace(S, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < Ae && ($ = $.replace(N, "")), Z = $.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ae = L;
                    break;
                  default:
                    Ae = Je;
                }
                if (ie = t(L, Ae, ie, Z, v + 1), we = ie.length, 0 < De && (Ae = r(Je, $, He), ze = f(3, ie, Ae, L, pe, he, we, Z, v, q), $ = Ae.join(""), ze !== void 0 && (we = (ie = ze.trim()).length) === 0 && (Z = 0, ie = "")), 0 < we) switch (Z) {
                  case 115:
                    $ = $.replace(ae, l);
                  case 100:
                  case 109:
                  case 45:
                    ie = $ + "{" + ie + "}";
                    break;
                  case 107:
                    $ = $.replace(j, "$1 $2"), ie = $ + "{" + ie + "}", ie = de === 1 || de === 2 && i("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = $ + ie, q === 112 && (ie = (be += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = t(L, r(L, $, He), ie, q, v + 1);
            }
            it += ie, ie = He = Ae = ye = oe = 0, $ = "", Z = Q.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if ($ = (0 < Ae ? $.replace(N, "") : $).trim(), 1 < (we = $.length)) switch (ye === 0 && (oe = $.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (we = ($ = $.replace(" ", ":")).length), 0 < De && (ze = f(1, $, L, G, pe, he, be.length, q, v, q)) !== void 0 && (we = ($ = ze.trim()).length) === 0 && ($ = "\0\0"), oe = $.charCodeAt(0), Z = $.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  rt += $ + Q.charAt(le);
                  break;
                }
              default:
                $.charCodeAt(we - 1) !== 58 && (be += a($, oe, Z, $.charCodeAt(2)));
            }
            He = Ae = ye = oe = 0, $ = "", Z = Q.charCodeAt(++le);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + oe === 0 && q !== 107 && 0 < $.length && (Ae = 1, $ += "\0"), 0 < De * Ke && f(0, $, L, G, pe, he, be.length, q, v, q), he = 1, pe++;
          break;
        case 59:
        case 125:
          if (_ + re + ce + V === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ke = Q.charAt(le), Z) {
            case 9:
            case 32:
              if (re + V + _ === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  Z !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              re + _ + V === 0 && (Ae = He = 1, ke = "\f" + ke);
              break;
            case 108:
              if (re + _ + V + Te === 0 && 0 < ye) switch (le - ye) {
                case 2:
                  fe === 112 && Q.charCodeAt(le - 3) === 58 && (Te = fe);
                case 8:
                  me === 111 && (Te = me);
              }
              break;
            case 58:
              re + _ + V === 0 && (ye = le);
              break;
            case 44:
              _ + ce + re + V === 0 && (Ae = 1, ke += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (re = re === Z ? 0 : re === 0 ? Z : re);
              break;
            case 91:
              re + _ + ce === 0 && V++;
              break;
            case 93:
              re + _ + ce === 0 && V--;
              break;
            case 41:
              re + _ + V === 0 && ce--;
              break;
            case 40:
              if (re + _ + V === 0) {
                if (oe === 0) switch (2 * fe + 3 * me) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                ce++;
              }
              break;
            case 64:
              _ + ce + re + V + ye + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + V + ce)) switch (_) {
                case 0:
                  switch (2 * Z + 3 * Q.charCodeAt(le + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      we = le, _ = 42;
                  }
                  break;
                case 42:
                  Z === 47 && fe === 42 && we + 2 !== le && (Q.charCodeAt(we + 2) === 33 && (be += Q.substring(we, le + 1)), ke = "", _ = 0);
              }
          }
          _ === 0 && ($ += ke);
      }
      me = fe, fe = Z, le++;
    }
    if (we = be.length, 0 < we) {
      if (Ae = L, 0 < De && (ze = f(2, be, Ae, G, pe, he, we, q, v, q), ze !== void 0 && (be = ze).length === 0)) return rt + be + it;
      if (be = Ae.join(",") + "{" + be + "}", de * Te !== 0) {
        switch (de !== 2 || i(be, 2) || (Te = 0), Te) {
          case 111:
            be = be.replace(M, ":-moz-$1") + be;
            break;
          case 112:
            be = be.replace(U, "::-webkit-input-$1") + be.replace(U, "::-moz-$1") + be.replace(U, ":-ms-input-$1") + be;
        }
        Te = 0;
      }
    }
    return rt + be + it;
  }
  function r(G, L, Q) {
    var q = L.trim().split(k);
    L = q;
    var v = q.length, V = G.length;
    switch (V) {
      case 0:
      case 1:
        var _ = 0;
        for (G = V === 0 ? "" : G[0] + " "; _ < v; ++_)
          L[_] = n(G, L[_], Q).trim();
        break;
      default:
        var ce = _ = 0;
        for (L = []; _ < v; ++_)
          for (var re = 0; re < V; ++re)
            L[ce++] = n(G[re] + " ", q[_], Q).trim();
    }
    return L;
  }
  function n(G, L, Q) {
    var q = L.charCodeAt(0);
    switch (33 > q && (q = (L = L.trim()).charCodeAt(0)), q) {
      case 38:
        return L.replace(z, "$1" + G.trim());
      case 58:
        return G.trim() + L.replace(z, "$1" + G.trim());
      default:
        if (0 < 1 * Q && 0 < L.indexOf("\f")) return L.replace(z, (G.charCodeAt(0) === 58 ? "" : "$1") + G.trim());
    }
    return G + L;
  }
  function a(G, L, Q, q) {
    var v = G + ";", V = 2 * L + 3 * Q + 4 * q;
    if (V === 944) {
      G = v.indexOf(":", 9) + 1;
      var _ = v.substring(G, v.length - 1).trim();
      return _ = v.substring(0, G).trim() + _ + ";", de === 1 || de === 2 && i(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (de === 0 || de === 2 && !i(v, 1)) return v;
    switch (V) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45) return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11)) return v.replace(Le, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45) switch (v.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
          case 115:
            return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
          case 98:
            return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
        }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99) break;
        return _ = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + v + "-ms-flex-pack" + _ + v;
      case 1005:
        return C.test(v) ? v.replace(W, ":-webkit-") + v.replace(W, ":-moz-") + v : v;
      case 1e3:
        switch (_ = v.substring(13).trim(), L = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(L)) {
          case 226:
            _ = v.replace(R, "tb");
            break;
          case 232:
            _ = v.replace(R, "tb-rl");
            break;
          case 220:
            _ = v.replace(R, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + _ + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (L = (v = G).length - 10, _ = (v.charCodeAt(L) === 33 ? v.substring(0, L) : v).substring(G.indexOf(":", 7) + 1).trim(), V = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            v = v.replace(_, "-webkit-" + _) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(_, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + v.replace(_, "-webkit-" + _) + ";" + v.replace(_, "-ms-" + _ + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return _ = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + _ + "-ms-flex-" + _ + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(ee, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(ee, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ve.test(G) === !0) return (_ = G.substring(G.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(G.replace("stretch", "fill-available"), L, Q, q).replace(":fill-available", ":stretch") : v.replace(_, "-webkit-" + _) + v.replace(_, "-moz-" + _.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, Q + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + v;
    }
    return v;
  }
  function i(G, L) {
    var Q = G.indexOf(L === 1 ? ":" : "{"), q = G.substring(0, L !== 3 ? Q : 10);
    return Q = G.substring(Q + 1, G.length - 1), qe(L !== 2 ? q : q.replace(se, "$1"), Q, L);
  }
  function l(G, L) {
    var Q = a(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return Q !== L + ";" ? Q.replace(ue, " or ($1)").substring(4) : "(" + L + ")";
  }
  function f(G, L, Q, q, v, V, _, ce, re, oe) {
    for (var Z = 0, fe = L, me; Z < De; ++Z)
      switch (me = Ue[Z].call(y, G, fe, Q, q, v, V, _, ce, re, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = me;
      }
    if (fe !== L) return fe;
  }
  function h(G) {
    switch (G) {
      case void 0:
      case null:
        De = Ue.length = 0;
        break;
      default:
        if (typeof G == "function") Ue[De++] = G;
        else if (typeof G == "object") for (var L = 0, Q = G.length; L < Q; ++L)
          h(G[L]);
        else Ke = !!G | 0;
    }
    return h;
  }
  function p(G) {
    return G = G.prefix, G !== void 0 && (qe = null, G ? typeof G != "function" ? de = 1 : (de = 2, qe = G) : de = 0), p;
  }
  function y(G, L) {
    var Q = G;
    if (33 > Q.charCodeAt(0) && (Q = Q.trim()), Ze = Q, Q = [Ze], 0 < De) {
      var q = f(-1, L, Q, Q, pe, he, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (L = q);
    }
    var v = t(Je, Q, L, 0, 0);
    return 0 < De && (q = f(-2, v, Q, Q, pe, he, v.length, 0, 0, 0), q !== void 0 && (v = q)), Ze = "", Te = 0, he = pe = 1, v;
  }
  var S = /^\0+/g, N = /[\0\r\f]/g, W = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, k = /,\r+?/g, z = /([\t\r\n ])*\f?&/g, j = /@(k\w+)\s*(\S*)\s*/, U = /::(place)/g, M = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ue = /([\s\S]*?);/g, ee = /-self|flex-/g, se = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ve = /stretch|:\s*\w+\-(?:conte|avail)/, Le = /([^-])(image-set\()/, he = 1, pe = 1, Te = 0, de = 1, Je = [], Ue = [], De = 0, qe = null, Ke = 0, Ze = "";
  return y.use = h, y.set = p, e !== void 0 && p(e), y;
}
var cu = {
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
function uu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var du = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Yi = /* @__PURE__ */ uu(
  function(e) {
    return du.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), bl = { exports: {} }, Ve = {}, Ji;
function fu() {
  if (Ji) return Ve;
  Ji = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, N = e ? Symbol.for("react.suspense_list") : 60120, W = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function U(R) {
    if (typeof R == "object" && R !== null) {
      var ae = R.$$typeof;
      switch (ae) {
        case t:
          switch (R = R.type, R) {
            case h:
            case p:
            case n:
            case i:
            case a:
            case S:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case f:
                case y:
                case C:
                case W:
                case l:
                  return R;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function M(R) {
    return U(R) === p;
  }
  return Ve.AsyncMode = h, Ve.ConcurrentMode = p, Ve.ContextConsumer = f, Ve.ContextProvider = l, Ve.Element = t, Ve.ForwardRef = y, Ve.Fragment = n, Ve.Lazy = C, Ve.Memo = W, Ve.Portal = r, Ve.Profiler = i, Ve.StrictMode = a, Ve.Suspense = S, Ve.isAsyncMode = function(R) {
    return M(R) || U(R) === h;
  }, Ve.isConcurrentMode = M, Ve.isContextConsumer = function(R) {
    return U(R) === f;
  }, Ve.isContextProvider = function(R) {
    return U(R) === l;
  }, Ve.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, Ve.isForwardRef = function(R) {
    return U(R) === y;
  }, Ve.isFragment = function(R) {
    return U(R) === n;
  }, Ve.isLazy = function(R) {
    return U(R) === C;
  }, Ve.isMemo = function(R) {
    return U(R) === W;
  }, Ve.isPortal = function(R) {
    return U(R) === r;
  }, Ve.isProfiler = function(R) {
    return U(R) === i;
  }, Ve.isStrictMode = function(R) {
    return U(R) === a;
  }, Ve.isSuspense = function(R) {
    return U(R) === S;
  }, Ve.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === p || R === i || R === a || R === S || R === N || typeof R == "object" && R !== null && (R.$$typeof === C || R.$$typeof === W || R.$$typeof === l || R.$$typeof === f || R.$$typeof === y || R.$$typeof === k || R.$$typeof === z || R.$$typeof === j || R.$$typeof === w);
  }, Ve.typeOf = U, Ve;
}
bl.exports = fu();
var pu = bl.exports, ni = pu, hu = {
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
}, gu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, mu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ai = {};
ai[ni.ForwardRef] = mu;
ai[ni.Memo] = vl;
function Ki(e) {
  return ni.isMemo(e) ? vl : ai[e.$$typeof] || hu;
}
var yu = Object.defineProperty, bu = Object.getOwnPropertyNames, Zi = Object.getOwnPropertySymbols, vu = Object.getOwnPropertyDescriptor, wu = Object.getPrototypeOf, $i = Object.prototype;
function wl(e, t, r) {
  if (typeof t != "string") {
    if ($i) {
      var n = wu(t);
      n && n !== $i && wl(e, n, r);
    }
    var a = bu(t);
    Zi && (a = a.concat(Zi(t)));
    for (var i = Ki(e), l = Ki(t), f = 0; f < a.length; ++f) {
      var h = a[f];
      if (!gu[h] && !(r && r[h]) && !(l && l[h]) && !(i && i[h])) {
        var p = vu(t, h);
        try {
          yu(e, h, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var xu = wl;
const Au = /* @__PURE__ */ pl(xu);
var St = { env: { NODE_ENV: "production" } };
function Tr() {
  return (Tr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Xi = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Po = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !yl.typeOf(e);
}, Ca = Object.freeze([]), jr = Object.freeze({});
function jn(e) {
  return typeof e == "function";
}
function es(e) {
  return e.displayName || e.name || "Component";
}
function oi(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_ATTR || St.env.SC_ATTR) || "data-styled", ii = typeof window < "u" && "HTMLElement" in window, Su = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && St.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? St.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && St.env.REACT_APP_SC_DISABLE_SPEEDY : St.env.SC_DISABLE_SPEEDY !== void 0 && St.env.SC_DISABLE_SPEEDY !== "" ? St.env.SC_DISABLE_SPEEDY !== "false" && St.env.SC_DISABLE_SPEEDY : St.env.NODE_ENV !== "production"));
function Mn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Eu = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, l = i; r >= l; ) (l <<= 1) < 0 && Mn(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var f = i; f < l; f++) this.groupSizes[f] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), p = 0, y = n.length; p < y; p++) this.tag.insertRule(h, n[p]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < i; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), l = i + a, f = i; f < l; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), ga = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map(), Nn = 1, aa = function(e) {
  if (ga.has(e)) return ga.get(e);
  for (; ka.has(Nn); ) Nn++;
  var t = Nn++;
  return ga.set(e, t), ka.set(t, e), t;
}, Cu = function(e) {
  return ka.get(e);
}, ku = function(e, t) {
  t >= Nn && (Nn = t + 1), ga.set(e, t), ka.set(t, e);
}, Tu = "style[" + an + '][data-styled-version="5.3.11"]', Ru = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Iu = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, l = a.length; i < l; i++) (n = a[i]) && e.registerName(t, n);
}, Ou = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var l = r[a].trim();
    if (l) {
      var f = l.match(Ru);
      if (f) {
        var h = 0 | parseInt(f[1], 10), p = f[2];
        h !== 0 && (ku(p, h), Iu(e, p, f[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, _u = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, xl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var h = f.childNodes, p = h.length; p >= 0; p--) {
      var y = h[p];
      if (y && y.nodeType === 1 && y.hasAttribute(an)) return y;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = _u();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, i), n;
}, Lu = function() {
  function e(r) {
    var n = this.element = xl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, l = 0, f = i.length; l < f; l++) {
        var h = i[l];
        if (h.ownerNode === a) return h;
      }
      Mn(17);
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
}(), Nu = function() {
  function e(r) {
    var n = this.element = xl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Pu = function() {
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
}(), ts = ii, Du = { isServer: !ii, useCSSOMInjection: !Su }, Al = function() {
  function e(r, n, a) {
    r === void 0 && (r = jr), n === void 0 && (n = {}), this.options = Tr({}, Du, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && ii && ts && (ts = !1, function(i) {
      for (var l = document.querySelectorAll(Tu), f = 0, h = l.length; f < h; f++) {
        var p = l[f];
        p && p.getAttribute(an) !== "active" && (Ou(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return aa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Tr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, l = n.target, r = a ? new Pu(l) : i ? new Lu(l) : new Nu(l), new Eu(r)));
    var r, n, a, i, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (aa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(aa(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(aa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", l = 0; l < a; l++) {
        var f = Cu(l);
        if (f !== void 0) {
          var h = r.names.get(f), p = n.getGroup(l);
          if (h && p && h.size) {
            var y = an + ".g" + l + '[id="' + f + '"]', S = "";
            h !== void 0 && h.forEach(function(N) {
              N.length > 0 && (S += N + ",");
            }), i += "" + p + y + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), ju = /(a)(d)/gi, rs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Do(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = rs(t % 52) + r;
  return (rs(t % 52) + r).replace(ju, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Sl = function(e) {
  return en(5381, e);
};
function Bu(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (jn(r) && !oi(r)) return !1;
  }
  return !0;
}
var Fu = Sl("5.3.11"), Mu = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Bu(t), this.componentId = r, this.baseHash = en(Fu, r), this.baseStyle = n, Al.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = on(this.rules, t, r, n).join(""), f = Do(en(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var h = n(l, "." + f, void 0, a);
        r.insertRules(a, f, h);
      }
      i.push(f), this.staticRulesId = f;
    }
    else {
      for (var p = this.rules.length, y = en(this.baseHash, n.hash), S = "", N = 0; N < p; N++) {
        var W = this.rules[N];
        if (typeof W == "string") S += W;
        else if (W) {
          var C = on(W, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          y = en(y, w + N), S += w;
        }
      }
      if (S) {
        var k = Do(y >>> 0);
        if (!r.hasNameForId(a, k)) {
          var z = n(S, "." + k, void 0, a);
          r.insertRules(a, k, z);
        }
        i.push(k);
      }
    }
    return i.join(" ");
  }, e;
}(), Uu = /^\s*\/\/.*$/gm, zu = [":", "[", ".", "#"];
function Hu(e) {
  var t, r, n, a, i = jr, l = i.options, f = l === void 0 ? jr : l, h = i.plugins, p = h === void 0 ? Ca : h, y = new lu(f), S = [], N = /* @__PURE__ */ function(w) {
    function k(z) {
      if (z) try {
        w(z + "}");
      } catch {
      }
    }
    return function(z, j, U, M, R, ae, ue, ee, se, ve) {
      switch (z) {
        case 1:
          if (se === 0 && j.charCodeAt(0) === 64) return w(j + ";"), "";
          break;
        case 2:
          if (ee === 0) return j + "/*|*/";
          break;
        case 3:
          switch (ee) {
            case 102:
            case 112:
              return w(U[0] + j), "";
            default:
              return j + (ve === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(k);
      }
    };
  }(function(w) {
    S.push(w);
  }), W = function(w, k, z) {
    return k === 0 && zu.indexOf(z[r.length]) !== -1 || z.match(a) ? w : "." + t;
  };
  function C(w, k, z, j) {
    j === void 0 && (j = "&");
    var U = w.replace(Uu, ""), M = k && z ? z + " " + k + " { " + U + " }" : U;
    return t = j, r = k, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), y(z || !k ? "" : k, M);
  }
  return y.use([].concat(p, [function(w, k, z) {
    w === 2 && z.length && z[0].lastIndexOf(r) > 0 && (z[0] = z[0].replace(n, W));
  }, N, function(w) {
    if (w === -2) {
      var k = S;
      return S = [], k;
    }
  }])), C.hash = p.length ? p.reduce(function(w, k) {
    return k.name || Mn(15), en(w, k.name);
  }, 5381).toString() : "", C;
}
var El = ht.createContext();
El.Consumer;
var Cl = ht.createContext(), Wu = (Cl.Consumer, new Al()), jo = Hu();
function Qu() {
  return fn(El) || Wu;
}
function Gu() {
  return fn(Cl) || jo;
}
var qu = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = jo);
      var l = n.name + i.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, i(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Mn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = jo), this.name + t.hash;
  }, e;
}(), Vu = /([A-Z])/, Yu = /([A-Z])/g, Ju = /^ms-/, Ku = function(e) {
  return "-" + e.toLowerCase();
};
function ns(e) {
  return Vu.test(e) ? e.replace(Yu, Ku).replace(Ju, "-ms-") : e;
}
var as = function(e) {
  return e == null || e === !1 || e === "";
};
function on(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], l = 0, f = e.length; l < f; l += 1) (a = on(e[l], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (as(e)) return "";
  if (oi(e)) return "." + e.styledComponentId;
  if (jn(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return on(h, t, r, n);
  }
  var p;
  return e instanceof qu ? r ? (e.inject(r, n), e.getName(n)) : e : Po(e) ? function y(S, N) {
    var W, C, w = [];
    for (var k in S) S.hasOwnProperty(k) && !as(S[k]) && (Array.isArray(S[k]) && S[k].isCss || jn(S[k]) ? w.push(ns(k) + ":", S[k], ";") : Po(S[k]) ? w.push.apply(w, y(S[k], k)) : w.push(ns(k) + ": " + (W = k, (C = S[k]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || W in cu || W.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return N ? [N + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var os = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Zu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return jn(e) || Po(e) ? os(on(Xi(Ca, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : os(on(Xi(e, r)));
}
var $u = function(e, t, r) {
  return r === void 0 && (r = jr), e.theme !== r.theme && e.theme || t || r.theme;
}, Xu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ed = /(^-|-$)/g;
function lo(e) {
  return e.replace(Xu, "-").replace(ed, "");
}
var td = function(e) {
  return Do(Sl(e) >>> 0);
};
function oa(e) {
  return typeof e == "string" && St.env.NODE_ENV === "production";
}
var Bo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, rd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function nd(e, t, r) {
  var n = e[r];
  Bo(t) && Bo(n) ? kl(n, t) : e[r] = t;
}
function kl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var l = i[a];
    if (Bo(l)) for (var f in l) rd(f) && nd(e, l[f], f);
  }
  return e;
}
var Tl = ht.createContext();
Tl.Consumer;
var co = {};
function Rl(e, t, r) {
  var n = oi(e), a = !oa(e), i = t.attrs, l = i === void 0 ? Ca : i, f = t.componentId, h = f === void 0 ? function(j, U) {
    var M = typeof j != "string" ? "sc" : lo(j);
    co[M] = (co[M] || 0) + 1;
    var R = M + "-" + td("5.3.11" + M + co[M]);
    return U ? U + "-" + R : R;
  }(t.displayName, t.parentComponentId) : f, p = t.displayName, y = p === void 0 ? function(j) {
    return oa(j) ? "styled." + j : "Styled(" + es(j) + ")";
  }(e) : p, S = t.displayName && t.componentId ? lo(t.displayName) + "-" + t.componentId : t.componentId || h, N = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, W = t.shouldForwardProp;
  n && e.shouldForwardProp && (W = t.shouldForwardProp ? function(j, U, M) {
    return e.shouldForwardProp(j, U, M) && t.shouldForwardProp(j, U, M);
  } : e.shouldForwardProp);
  var C, w = new Mu(r, S, n ? e.componentStyle : void 0), k = w.isStatic && l.length === 0, z = function(j, U) {
    return function(M, R, ae, ue) {
      var ee = M.attrs, se = M.componentStyle, ve = M.defaultProps, Le = M.foldedComponentIds, he = M.shouldForwardProp, pe = M.styledComponentId, Te = M.target, de = function(q, v, V) {
        q === void 0 && (q = jr);
        var _ = Tr({}, v, { theme: q }), ce = {};
        return V.forEach(function(re) {
          var oe, Z, fe, me = re;
          for (oe in jn(me) && (me = me(_)), me) _[oe] = ce[oe] = oe === "className" ? (Z = ce[oe], fe = me[oe], Z && fe ? Z + " " + fe : Z || fe) : me[oe];
        }), [_, ce];
      }($u(R, fn(Tl), ve) || jr, R, ee), Je = de[0], Ue = de[1], De = function(q, v, V, _) {
        var ce = Qu(), re = Gu(), oe = v ? q.generateAndInjectStyles(jr, ce, re) : q.generateAndInjectStyles(V, ce, re);
        return oe;
      }(se, ue, Je), qe = ae, Ke = Ue.$as || R.$as || Ue.as || R.as || Te, Ze = oa(Ke), G = Ue !== R ? Tr({}, R, {}, Ue) : R, L = {};
      for (var Q in G) Q[0] !== "$" && Q !== "as" && (Q === "forwardedAs" ? L.as = G[Q] : (he ? he(Q, Yi, Ke) : !Ze || Yi(Q)) && (L[Q] = G[Q]));
      return R.style && Ue.style !== R.style && (L.style = Tr({}, R.style, {}, Ue.style)), L.className = Array.prototype.concat(Le, pe, De !== pe ? De : null, R.className, Ue.className).filter(Boolean).join(" "), L.ref = qe, il(Ke, L);
    }(C, j, U, k);
  };
  return z.displayName = y, (C = ht.forwardRef(z)).attrs = N, C.componentStyle = w, C.displayName = y, C.shouldForwardProp = W, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ca, C.styledComponentId = S, C.target = n ? e.target : e, C.withComponent = function(j) {
    var U = t.componentId, M = function(ae, ue) {
      if (ae == null) return {};
      var ee, se, ve = {}, Le = Object.keys(ae);
      for (se = 0; se < Le.length; se++) ee = Le[se], ue.indexOf(ee) >= 0 || (ve[ee] = ae[ee]);
      return ve;
    }(t, ["componentId"]), R = U && U + "-" + (oa(j) ? j : lo(es(j)));
    return Rl(j, Tr({}, M, { attrs: N, componentId: R }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = n ? kl({}, e.defaultProps, j) : j;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && Au(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var yt = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = jr), !yl.isValidElementType(n)) return Mn(1, String(n));
    var i = function() {
      return r(n, a, Zu.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(r, n, Tr({}, a, {}, l));
    }, i.attrs = function(l) {
      return t(r, n, Tr({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, i;
  }(Rl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  yt[e] = yt(e);
});
const ad = yt.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
  span {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  a:not(:last-child) {
    margin-bottom: 16px;
  }
`, Il = () => /* @__PURE__ */ T.jsxs(ad, { children: [
  /* @__PURE__ */ T.jsx("span", { children: "Quick links" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://search.asu.edu/?search-tabs=web_dir_faculty_staff", children: "ASU directory" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://students.asu.edu/advising", children: "ASU advising directory by college" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://www.asu.edu/academics/colleges-schools", children: "ASU's colleges and schools" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://degrees.asu.edu/", children: "Search majors and degree programs" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://webapp4.asu.edu/catalog/classlist", children: "ASU class search" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://search.lib.asu.edu/discovery/search?vid=01ASU_INST:01ASU", children: "ASU Library One search" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://news.asu.edu/", children: "ASU news" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://asuevents.asu.edu/", children: "ASU events calendar" }),
  /* @__PURE__ */ T.jsx("a", { href: "https://cfo.asu.edu/applicant", children: "Search ASU job openings" })
] }), od = yt.div`
  padding: 4px;
  display: grid;
  grid-template-columns: 700px 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 126px;

  .message-content {
    max-width: 700px;
    h2 {
      margin-bottom: 32px;
    }
  }
  .assistance-area {
    margin-top: 16px;
    .intro-highlight {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 48px;
  }
`, Ln = ({
  titleText: e,
  descText: t,
  contactText: r,
  signInLink: n
}) => {
  const a = () => n ? /* @__PURE__ */ T.jsxs("p", { children: [
    t,
    /* @__PURE__ */ T.jsx("a", { href: n, children: "logging into the site" }),
    "."
  ] }) : /* @__PURE__ */ T.jsx("p", { children: t });
  return /* @__PURE__ */ T.jsxs(od, { children: [
    /* @__PURE__ */ T.jsxs("div", { className: "message-content", children: [
      /* @__PURE__ */ T.jsx("h2", { children: e }),
      /* @__PURE__ */ T.jsxs("div", { children: [
        a(),
        /* @__PURE__ */ T.jsxs("div", { className: "assistance-area", children: [
          /* @__PURE__ */ T.jsx("span", { className: "intro-highlight", children: "Need assistance?" }),
          " ",
          /* @__PURE__ */ T.jsx("br", {}),
          /* @__PURE__ */ T.jsx("a", { href: "https://www.asu.edu/about/contact", children: r })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsx(Il, {})
  ] });
};
Ln.propTypes = {
  titleText: I.string,
  descText: I.string,
  contactText: I.string,
  signInLink: I.string
};
const id = {
  web_dir_faculty_staff: /* @__PURE__ */ T.jsx(
    Ln,
    {
      titleText: "Welcome to the ASU Faculty and Staff Directory",
      descText: "Our directory is integrated into the ASU Search engine experience. Find current faculty and staff profiles by using the search field above.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  ),
  web_dir_students: /* @__PURE__ */ T.jsx(
    Ln,
    {
      titleText: "Welcome to the ASU Student Directory",
      descText: "Students must opt-in to make their profile publicly available. ASU affiliates with an ASURITE ID can view the remaining student profiles that do not have directory holds on them by ",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week.",
      signInLink: "https://search.asu.edu/caslogin?returnto=/"
    }
  ),
  all: /* @__PURE__ */ T.jsx(
    Ln,
    {
      titleText: "Welcome to ASU search",
      descText: "Find the information you're looking for from anywhere on asu.edu.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  ),
  "web-sites": /* @__PURE__ */ T.jsx(
    Ln,
    {
      titleText: "Welcome to ASU search",
      descText: "Find the information you're looking for from anywhere on asu.edu.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  )
};
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function Fo(e, t) {
  return Fo = Object.setPrototypeOf || function(n, a) {
    return n.__proto__ = a, n;
  }, Fo(e, t);
}
function sd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ma(e, t, r) {
  return sd() ? ma = Reflect.construct : ma = function(a, i, l) {
    var f = [null];
    f.push.apply(f, i);
    var h = Function.bind.apply(a, f), p = new h();
    return l && Fo(p, l.prototype), p;
  }, ma.apply(null, arguments);
}
function ur(e) {
  return ld(e) || cd(e) || ud(e) || dd();
}
function ld(e) {
  if (Array.isArray(e)) return Mo(e);
}
function cd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ud(e, t) {
  if (e) {
    if (typeof e == "string") return Mo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mo(e, t);
  }
}
function Mo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fd = Object.hasOwnProperty, is = Object.setPrototypeOf, pd = Object.isFrozen, hd = Object.getPrototypeOf, gd = Object.getOwnPropertyDescriptor, Rt = Object.freeze, Yt = Object.seal, md = Object.create, Ol = typeof Reflect < "u" && Reflect, Ta = Ol.apply, Uo = Ol.construct;
Ta || (Ta = function(t, r, n) {
  return t.apply(r, n);
});
Rt || (Rt = function(t) {
  return t;
});
Yt || (Yt = function(t) {
  return t;
});
Uo || (Uo = function(t, r) {
  return ma(t, ur(r));
});
var yd = Jt(Array.prototype.forEach), ss = Jt(Array.prototype.pop), Tn = Jt(Array.prototype.push), ya = Jt(String.prototype.toLowerCase), uo = Jt(String.prototype.toString), ls = Jt(String.prototype.match), lr = Jt(String.prototype.replace), bd = Jt(String.prototype.indexOf), vd = Jt(String.prototype.trim), xt = Jt(RegExp.prototype.test), fo = wd(TypeError);
function Jt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ta(e, t, n);
  };
}
function wd(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Uo(e, r);
  };
}
function je(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : ya, is && is(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var l = r(i);
      l !== i && (pd(t) || (t[a] = l), i = l);
    }
    e[i] = !0;
  }
  return e;
}
function Wr(e) {
  var t = md(null), r;
  for (r in e)
    Ta(fd, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function ia(e, t) {
  for (; e !== null; ) {
    var r = gd(e, t);
    if (r) {
      if (r.get)
        return Jt(r.get);
      if (typeof r.value == "function")
        return Jt(r.value);
    }
    e = hd(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var cs = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), po = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ho = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), xd = Rt(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), go = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), Ad = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), us = Rt(["#text"]), ds = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), mo = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fs = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), sa = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sd = Yt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ed = Yt(/<%[\w\W]*|[\w\W]*%>/gm), Cd = Yt(/\${[\w\W]*}/gm), kd = Yt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Td = Yt(/^aria-[\-\w]+$/), Rd = Yt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Id = Yt(/^(?:\w+script|data):/i), Od = Yt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _d = Yt(/^html$/i), Ld = Yt(/^[a-z][.\w]*(-[.\w]+)+$/i), Nd = function() {
  return typeof window > "u" ? null : window;
}, Pd = function(t, r) {
  if (Pr(t) !== "object" || typeof t.createPolicy != "function")
    return null;
  var n = null, a = "data-tt-policy-suffix";
  r.currentScript && r.currentScript.hasAttribute(a) && (n = r.currentScript.getAttribute(a));
  var i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML: function(f) {
        return f;
      },
      createScriptURL: function(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
};
function _l() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nd(), t = function(x) {
    return _l(x);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, l = e.Node, f = e.Element, h = e.NodeFilter, p = e.NamedNodeMap, y = p === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : p, S = e.HTMLFormElement, N = e.DOMParser, W = e.trustedTypes, C = f.prototype, w = ia(C, "cloneNode"), k = ia(C, "nextSibling"), z = ia(C, "childNodes"), j = ia(C, "parentNode");
  if (typeof i == "function") {
    var U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  var M = Pd(W, r), R = M ? M.createHTML("") : "", ae = n, ue = ae.implementation, ee = ae.createNodeIterator, se = ae.createDocumentFragment, ve = ae.getElementsByTagName, Le = r.importNode, he = {};
  try {
    he = Wr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var pe = {};
  t.isSupported = typeof j == "function" && ue && ue.createHTMLDocument !== void 0 && he !== 9;
  var Te = Sd, de = Ed, Je = Cd, Ue = kd, De = Td, qe = Id, Ke = Od, Ze = Ld, G = Rd, L = null, Q = je({}, [].concat(ur(cs), ur(po), ur(ho), ur(go), ur(us))), q = null, v = je({}, [].concat(ur(ds), ur(mo), ur(fs), ur(sa))), V = Object.seal(Object.create(null, {
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
  })), _ = null, ce = null, re = !0, oe = !0, Z = !1, fe = !0, me = !1, ie = !0, ye = !1, le = !1, Ae = !1, He = !1, we = !1, ot = !1, $e = !0, ke = !1, $ = "user-content-", be = !0, it = !1, rt = {}, ze = null, hr = je({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), gr = null, vr = je({}, ["audio", "video", "img", "source", "image", "track"]), Pt = null, Wt = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Dt = "http://www.w3.org/1998/Math/MathML", jt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml", bt = ut, $t = !1, gt = null, wr = je({}, [Dt, jt, ut], uo), ft, We = ["application/xhtml+xml", "text/html"], Xt = "text/html", Re, pt = null, Ot = n.createElement("form"), Qt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, vt = function(x) {
    pt && pt === x || ((!x || Pr(x) !== "object") && (x = {}), x = Wr(x), ft = // eslint-disable-next-line unicorn/prefer-includes
    We.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ft = Xt : ft = x.PARSER_MEDIA_TYPE, Re = ft === "application/xhtml+xml" ? uo : ya, L = "ALLOWED_TAGS" in x ? je({}, x.ALLOWED_TAGS, Re) : Q, q = "ALLOWED_ATTR" in x ? je({}, x.ALLOWED_ATTR, Re) : v, gt = "ALLOWED_NAMESPACES" in x ? je({}, x.ALLOWED_NAMESPACES, uo) : wr, Pt = "ADD_URI_SAFE_ATTR" in x ? je(
      Wr(Wt),
      // eslint-disable-line indent
      x.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : Wt, gr = "ADD_DATA_URI_TAGS" in x ? je(
      Wr(vr),
      // eslint-disable-line indent
      x.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : vr, ze = "FORBID_CONTENTS" in x ? je({}, x.FORBID_CONTENTS, Re) : hr, _ = "FORBID_TAGS" in x ? je({}, x.FORBID_TAGS, Re) : {}, ce = "FORBID_ATTR" in x ? je({}, x.FORBID_ATTR, Re) : {}, rt = "USE_PROFILES" in x ? x.USE_PROFILES : !1, re = x.ALLOW_ARIA_ATTR !== !1, oe = x.ALLOW_DATA_ATTR !== !1, Z = x.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = x.SAFE_FOR_TEMPLATES || !1, ie = x.SAFE_FOR_XML !== !1, ye = x.WHOLE_DOCUMENT || !1, He = x.RETURN_DOM || !1, we = x.RETURN_DOM_FRAGMENT || !1, ot = x.RETURN_TRUSTED_TYPE || !1, Ae = x.FORCE_BODY || !1, $e = x.SANITIZE_DOM !== !1, ke = x.SANITIZE_NAMED_PROPS || !1, be = x.KEEP_CONTENT !== !1, it = x.IN_PLACE || !1, G = x.ALLOWED_URI_REGEXP || G, bt = x.NAMESPACE || ut, V = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && Qt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && Qt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), me && (oe = !1), we && (He = !0), rt && (L = je({}, ur(us)), q = [], rt.html === !0 && (je(L, cs), je(q, ds)), rt.svg === !0 && (je(L, po), je(q, mo), je(q, sa)), rt.svgFilters === !0 && (je(L, ho), je(q, mo), je(q, sa)), rt.mathMl === !0 && (je(L, go), je(q, fs), je(q, sa))), x.ADD_TAGS && (L === Q && (L = Wr(L)), je(L, x.ADD_TAGS, Re)), x.ADD_ATTR && (q === v && (q = Wr(q)), je(q, x.ADD_ATTR, Re)), x.ADD_URI_SAFE_ATTR && je(Pt, x.ADD_URI_SAFE_ATTR, Re), x.FORBID_CONTENTS && (ze === hr && (ze = Wr(ze)), je(ze, x.FORBID_CONTENTS, Re)), be && (L["#text"] = !0), ye && je(L, ["html", "head", "body"]), L.table && (je(L, ["tbody"]), delete _.tbody), Rt && Rt(x), pt = x);
  }, mr = je({}, ["mi", "mo", "mn", "ms", "mtext"]), er = je({}, ["annotation-xml"]), xr = je({}, ["title", "style", "font", "a", "script"]), _t = je({}, po);
  je(_t, ho), je(_t, xd);
  var Gt = je({}, go);
  je(Gt, Ad);
  var _r = function(x) {
    var O = j(x);
    (!O || !O.tagName) && (O = {
      namespaceURI: bt,
      tagName: "template"
    });
    var K = ya(x.tagName), ge = ya(O.tagName);
    return gt[x.namespaceURI] ? x.namespaceURI === jt ? O.namespaceURI === ut ? K === "svg" : O.namespaceURI === Dt ? K === "svg" && (ge === "annotation-xml" || mr[ge]) : !!_t[K] : x.namespaceURI === Dt ? O.namespaceURI === ut ? K === "math" : O.namespaceURI === jt ? K === "math" && er[ge] : !!Gt[K] : x.namespaceURI === ut ? O.namespaceURI === jt && !er[ge] || O.namespaceURI === Dt && !mr[ge] ? !1 : !Gt[K] && (xr[K] || !_t[K]) : !!(ft === "application/xhtml+xml" && gt[x.namespaceURI]) : !1;
  }, st = function(x) {
    Tn(t.removed, {
      element: x
    });
    try {
      x.parentNode.removeChild(x);
    } catch {
      try {
        x.outerHTML = R;
      } catch {
        x.remove();
      }
    }
  }, Bt = function(x, O) {
    try {
      Tn(t.removed, {
        attribute: O.getAttributeNode(x),
        from: O
      });
    } catch {
      Tn(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(x), x === "is" && !q[x])
      if (He || we)
        try {
          st(O);
        } catch {
        }
      else
        try {
          O.setAttribute(x, "");
        } catch {
        }
  }, qt = function(x) {
    var O, K;
    if (Ae)
      x = "<remove></remove>" + x;
    else {
      var ge = ls(x, /^[\r\n\t ]+/);
      K = ge && ge[0];
    }
    ft === "application/xhtml+xml" && bt === ut && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    var Ie = M ? M.createHTML(x) : x;
    if (bt === ut)
      try {
        O = new N().parseFromString(Ie, ft);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = ue.createDocument(bt, "template", null);
      try {
        O.documentElement.innerHTML = $t ? R : Ie;
      } catch {
      }
    }
    var Ne = O.body || O.documentElement;
    return x && K && Ne.insertBefore(n.createTextNode(K), Ne.childNodes[0] || null), bt === ut ? ve.call(O, ye ? "html" : "body")[0] : ye ? O.documentElement : Ne;
  }, yr = function(x) {
    return ee.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Lt = function(x) {
    return x instanceof S && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof y) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, wt = function(x) {
    return Pr(l) === "object" ? x instanceof l : x && Pr(x) === "object" && typeof x.nodeType == "number" && typeof x.nodeName == "string";
  }, dt = function(x, O, K) {
    pe[x] && yd(pe[x], function(ge) {
      ge.call(t, O, K, pt);
    });
  }, Ft = function(x) {
    var O;
    if (dt("beforeSanitizeElements", x, null), Lt(x) || xt(/[\u0080-\uFFFF]/, x.nodeName))
      return st(x), !0;
    var K = Re(x.nodeName);
    if (dt("uponSanitizeElement", x, {
      tagName: K,
      allowedTags: L
    }), x.hasChildNodes() && !wt(x.firstElementChild) && (!wt(x.content) || !wt(x.content.firstElementChild)) && xt(/<[/\w]/g, x.innerHTML) && xt(/<[/\w]/g, x.textContent) || K === "select" && xt(/<template/i, x.innerHTML) || x.nodeType === 7 || ie && x.nodeType === 8 && xt(/<[/\w]/g, x.data))
      return st(x), !0;
    if (!L[K] || _[K]) {
      if (!_[K] && tr(K) && (V.tagNameCheck instanceof RegExp && xt(V.tagNameCheck, K) || V.tagNameCheck instanceof Function && V.tagNameCheck(K)))
        return !1;
      if (be && !ze[K]) {
        var ge = j(x) || x.parentNode, Ie = z(x) || x.childNodes;
        if (Ie && ge)
          for (var Ne = Ie.length, Qe = Ne - 1; Qe >= 0; --Qe) {
            var lt = w(Ie[Qe], !0);
            lt.__removalCount = (x.__removalCount || 0) + 1, ge.insertBefore(lt, k(x));
          }
      }
      return st(x), !0;
    }
    return x instanceof f && !_r(x) || (K === "noscript" || K === "noembed" || K === "noframes") && xt(/<\/no(script|embed|frames)/i, x.innerHTML) ? (st(x), !0) : (me && x.nodeType === 3 && (O = x.textContent, O = lr(O, Te, " "), O = lr(O, de, " "), O = lr(O, Je, " "), x.textContent !== O && (Tn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = O)), dt("afterSanitizeElements", x, null), !1);
  }, Ar = function(x, O, K) {
    if ($e && (O === "id" || O === "name") && (K in n || K in Ot))
      return !1;
    if (!(oe && !ce[O] && xt(Ue, O))) {
      if (!(re && xt(De, O))) {
        if (!q[O] || ce[O]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(tr(x) && (V.tagNameCheck instanceof RegExp && xt(V.tagNameCheck, x) || V.tagNameCheck instanceof Function && V.tagNameCheck(x)) && (V.attributeNameCheck instanceof RegExp && xt(V.attributeNameCheck, O) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(O)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            O === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && xt(V.tagNameCheck, K) || V.tagNameCheck instanceof Function && V.tagNameCheck(K)))
          ) return !1;
        } else if (!Pt[O]) {
          if (!xt(G, lr(K, Ke, ""))) {
            if (!((O === "src" || O === "xlink:href" || O === "href") && x !== "script" && bd(K, "data:") === 0 && gr[x])) {
              if (!(Z && !xt(qe, lr(K, Ke, "")))) {
                if (K)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, tr = function(x) {
    return x !== "annotation-xml" && ls(x, Ze);
  }, Vt = function(x) {
    var O, K, ge, Ie;
    dt("beforeSanitizeAttributes", x, null);
    var Ne = x.attributes;
    if (!(!Ne || Lt(x))) {
      var Qe = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: q
      };
      for (Ie = Ne.length; Ie--; ) {
        O = Ne[Ie];
        var lt = O, Fe = lt.name, Tt = lt.namespaceURI;
        if (K = Fe === "value" ? O.value : vd(O.value), ge = Re(Fe), Qe.attrName = ge, Qe.attrValue = K, Qe.keepAttr = !0, Qe.forceKeepAttr = void 0, dt("uponSanitizeAttribute", x, Qe), K = Qe.attrValue, !Qe.forceKeepAttr && (Bt(Fe, x), !!Qe.keepAttr)) {
          if (!fe && xt(/\/>/i, K)) {
            Bt(Fe, x);
            continue;
          }
          me && (K = lr(K, Te, " "), K = lr(K, de, " "), K = lr(K, Je, " "));
          var nr = Re(x.nodeName);
          if (Ar(nr, ge, K)) {
            if (ke && (ge === "id" || ge === "name") && (Bt(Fe, x), K = $ + K), ie && xt(/((--!?|])>)|<\/(style|title)/i, K)) {
              Bt(Fe, x);
              continue;
            }
            if (M && Pr(W) === "object" && typeof W.getAttributeType == "function" && !Tt)
              switch (W.getAttributeType(nr, ge)) {
                case "TrustedHTML": {
                  K = M.createHTML(K);
                  break;
                }
                case "TrustedScriptURL": {
                  K = M.createScriptURL(K);
                  break;
                }
              }
            try {
              Tt ? x.setAttributeNS(Tt, Fe, K) : x.setAttribute(Fe, K), Lt(x) ? st(x) : ss(t.removed);
            } catch {
            }
          }
        }
      }
      dt("afterSanitizeAttributes", x, null);
    }
  }, rr = function b(x) {
    var O, K = yr(x);
    for (dt("beforeSanitizeShadowDOM", x, null); O = K.nextNode(); )
      dt("uponSanitizeShadowNode", O, null), Ft(O), Vt(O), O.content instanceof a && b(O.content);
    dt("afterSanitizeShadowDOM", x, null);
  };
  return t.sanitize = function(b) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O, K, ge, Ie, Ne;
    if ($t = !b, $t && (b = "<!-->"), typeof b != "string" && !wt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw fo("dirty is not a string, aborting");
      } else
        throw fo("toString is not a function");
    if (!t.isSupported) {
      if (Pr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (wt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (le || vt(x), t.removed = [], typeof b == "string" && (it = !1), it) {
      if (b.nodeName) {
        var Qe = Re(b.nodeName);
        if (!L[Qe] || _[Qe])
          throw fo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof l)
      O = qt("<!---->"), K = O.ownerDocument.importNode(b, !0), K.nodeType === 1 && K.nodeName === "BODY" || K.nodeName === "HTML" ? O = K : O.appendChild(K);
    else {
      if (!He && !me && !ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return M && ot ? M.createHTML(b) : b;
      if (O = qt(b), !O)
        return He ? null : ot ? R : "";
    }
    O && Ae && st(O.firstChild);
    for (var lt = yr(it ? b : O); ge = lt.nextNode(); )
      ge.nodeType === 3 && ge === Ie || (Ft(ge), Vt(ge), ge.content instanceof a && rr(ge.content), Ie = ge);
    if (Ie = null, it)
      return b;
    if (He) {
      if (we)
        for (Ne = se.call(O.ownerDocument); O.firstChild; )
          Ne.appendChild(O.firstChild);
      else
        Ne = O;
      return (q.shadowroot || q.shadowrootmod) && (Ne = Le.call(r, Ne, !0)), Ne;
    }
    var Fe = ye ? O.outerHTML : O.innerHTML;
    return ye && L["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && xt(_d, O.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Fe), me && (Fe = lr(Fe, Te, " "), Fe = lr(Fe, de, " "), Fe = lr(Fe, Je, " ")), M && ot ? M.createHTML(Fe) : Fe;
  }, t.setConfig = function(b) {
    vt(b), le = !0;
  }, t.clearConfig = function() {
    pt = null, le = !1;
  }, t.isValidAttribute = function(b, x, O) {
    pt || vt({});
    var K = Re(b), ge = Re(x);
    return Ar(K, ge, O);
  }, t.addHook = function(b, x) {
    typeof x == "function" && (pe[b] = pe[b] || [], Tn(pe[b], x));
  }, t.removeHook = function(b) {
    if (pe[b])
      return ss(pe[b]);
  }, t.removeHooks = function(b) {
    pe[b] && (pe[b] = []);
  }, t.removeAllHooks = function() {
    pe = {};
  }, t;
}
_l();
I.shape({
  event: I.string,
  action: I.string,
  name: I.string,
  region: I.string,
  section: I.string,
  component: I.string,
  type: I.string,
  text: I.string
});
const sn = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: l = "",
  component: f = ""
}) => {
  const { dataLayer: h } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: f.toLowerCase()
  };
  h && h.push(p);
};
function Dd({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: n = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: n
  };
}
const jd = yt.div`
  padding: 4px;
  .person-name {
    display: block;
    font-weight: bold;
  }
  ul.person-contact-info [class*="fa-"] {
    display: none;
  }
  &.uds-grid-profile {
    ul.person-contact-info [class*="fa-"] {
      display: inline;
      color: #8c1d40;
      padding-right: 8px;
    }
  }
`, Bd = {
  id: I.string,
  imgURL: I.string,
  anonImgURL: I.string,
  name: I.string,
  titles: I.arrayOf(I.string),
  email: I.string,
  telephone: I.string,
  addressLine1: I.string,
  addressLine2: I.string,
  description: I.string,
  facebookLink: I.string,
  linkedinLink: I.string,
  twitterLink: I.string,
  website: I.string,
  size: I.string,
  fill: I.bool,
  anonymized: I.bool,
  GASource: I.string,
  profileURL: I.string
};
I.shape({
  acres: I.shape({
    raw: I.number
  }),
  date_established: I.shape({
    raw: I.string
  }),
  description: I.shape({
    raw: I.string
  }),
  id: I.shape({
    raw: I.string
  }),
  location: I.shape({
    raw: I.string
  }),
  nps_link: I.shape({
    raw: I.string
  }),
  square_km: I.shape({
    raw: I.number
  }),
  states: I.shape({
    raw: I.arrayOf(I.string)
  }),
  title: I.shape({
    raw: I.string
  }),
  visitors: I.shape({
    raw: I.number
  }),
  world_heritage_site: I.shape({
    raw: I.string
  }),
  _meta: I.shape({
    raw: I.string
  })
});
const si = ({ ...e }) => {
  var h;
  const t = e.facebookLink || e.linkedinLink || e.twitterLink || e.website, r = e.matchedAffiliationTitle ? `${e.matchedAffiliationTitle}` : "", n = e.matchedAffiliationDept && e.size !== "micro" ? e.matchedAffiliationDept : "", a = (p) => {
    p.target.style.display = "none";
  };
  let i = e.telephone;
  if (i) {
    const p = i.slice(0, 3), y = i.slice(3).replace("/", "");
    i = `${p}-${y}`;
  }
  const l = "ASU Knowledge Enterprise", f = () => {
    sn({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: e.name,
      text: l,
      component: e.GASource
    });
  };
  return /* @__PURE__ */ T.jsxs(
    jd,
    {
      className: `uds-person-profile ${e.size} ${e.grid ? "uds-grid-profile" : ""} ${e.fill ? "fill" : ""}`,
      children: [
        /* @__PURE__ */ T.jsx("a", { href: e.profileURL, className: "profile-img-container", children: /* @__PURE__ */ T.jsx("div", { className: "profile-img-placeholder", children: /* @__PURE__ */ T.jsx(
          "img",
          {
            className: "profile-img",
            src: e.imgURL,
            alt: e.name,
            onError: a
          }
        ) }) }),
        /* @__PURE__ */ T.jsxs("div", { className: "person", children: [
          e.profileURL && /* @__PURE__ */ T.jsx("a", { className: "person-name", href: e.profileURL, children: e.name }),
          !e.profileURL && /* @__PURE__ */ T.jsx("h3", { className: "person-name", children: e.name }),
          /* @__PURE__ */ T.jsxs("div", { className: "person-profession", children: [
            /* @__PURE__ */ T.jsx("h4", { children: r }),
            n && /* @__PURE__ */ T.jsx("span", { className: "dept", children: n })
          ] }),
          e.size !== "micro" && /* @__PURE__ */ T.jsxs("ul", { className: "person-contact-info", children: [
            e.email && /* @__PURE__ */ T.jsxs("li", { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fas fa-envelope" }),
              /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(e.email),
                  href: `mailto:${e.email.toLowerCase()}`,
                  "aria-label": `Mail to :${e.email}`,
                  children: e.email
                }
              )
            ] }),
            i && /* @__PURE__ */ T.jsxs("li", { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fas fa-phone" }),
              /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(),
                  href: `tel:${i}`,
                  "aria-label": `User phone number: ${i}`,
                  children: i
                }
              )
            ] }),
            (e.addressLine1 || e.addressLine2) && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx("div", { "aria-label": "See user address", children: /* @__PURE__ */ T.jsxs("address", { className: "person-address", children: [
              e.addressLine1 && /* @__PURE__ */ T.jsx("span", { className: "person-street", children: e.addressLine1 }),
              e.addressLine2 && /* @__PURE__ */ T.jsx("span", { className: "person-city", children: e.addressLine2 })
            ] }) }) })
          ] }),
          ["default", "large"].includes(e.size) && t && /* @__PURE__ */ T.jsxs("div", { className: "description-and-social", children: [
            /* @__PURE__ */ T.jsx("p", { className: "person-description", children: (h = e.shortBio) == null ? void 0 : h.slice(0, 250) }),
            /* @__PURE__ */ T.jsxs("ul", { className: "person-social-medias", children: [
              e.facebookLink && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(),
                  href: e.facebookLink,
                  "aria-label": "Go to user Facebook profile",
                  children: /* @__PURE__ */ T.jsx(
                    "span",
                    {
                      className: "fab fa-facebook-square",
                      title: "Facebook Link"
                    }
                  )
                }
              ) }),
              e.linkedinLink && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(),
                  href: e.linkedinLink,
                  "aria-label": "Go to user Linkedin profile",
                  children: /* @__PURE__ */ T.jsx("span", { className: "fab fa-linkedin", title: "LinkedIn Link" })
                }
              ) }),
              e.twitterLink && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(),
                  href: e.twitterLink,
                  "aria-label": "Go to user Twitter profile",
                  children: /* @__PURE__ */ T.jsx(
                    "span",
                    {
                      className: "fab fa-square-x-twitter",
                      title: "Twitter Link"
                    }
                  )
                }
              ) }),
              e.website && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => f(),
                  href: e.website,
                  "aria-label": "Go to user Website",
                  children: /* @__PURE__ */ T.jsx("span", { className: "fa fa-globe", title: "User Website Link" })
                }
              ) })
            ] })
          ] }),
          e.size === "small" && /* @__PURE__ */ T.jsx(
            "a",
            {
              className: "btn btn-maroon btn-md",
              href: e.profileURL,
              role: "button",
              children: "View Profile"
            }
          ),
          e.size === "micro" && e.matchedAffiliationDept && /* @__PURE__ */ T.jsx("div", { children: e.matchedAffiliationDept })
        ] })
      ]
    }
  );
};
si.propTypes = Bd;
const Fd = yt.div`
  padding: 4px;
  max-width: 700px;
  &.fill {
    background-color: #fafafa;
    border: 1px solid #d0d0d0;
    padding: 32px;
  }
  .cookie-trail {
    color: #747474;
  }
  a {
    margin: 8px 0 16px 0;
    font-size: 24px;
    color: #8c1d40 !important;
    text-decoration: underline !important;
  }
  a:hover {
    cursor: pointer;
  }
`, Md = {
  id: I.string,
  name: I.string,
  area: I.string,
  description: I.string,
  cookieTrail: I.arrayOf(I.string),
  link: I.string,
  fill: I.bool,
  GASource: I.string
}, Ll = ({ ...e }) => {
  const [t, ,] = ll();
  function r() {
    const i = t.get("q"), l = t.get("search-tabs");
    let f;
    e.fill ? f = ["promoted-result", "all-asu-search"] : l === "all" && !t.get("url_host") ? f = ["all-asu-search"] : l === "web_sites" ? f = ["local-search", t.get("url_host")] : l === "all" && t.get("url_host") && (f = ["all-asu-search", t.get("url_host")]), e.localSection === !0 ? f.push("local-results") : e.localSection === !1 && f.push("all-asu-results");
    try {
      e.logClick(i, e.id, e.requestId, f, e);
    } catch (h) {
      console.error(h);
    }
  }
  function n() {
    sn({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: e.GASource,
      text: `${e.name} | ${e.area}`
    });
  }
  const a = e.description.length > 150 ? `${e.description.slice(0, 150)}...` : e.description;
  return /* @__PURE__ */ T.jsx(
    Fd,
    {
      className: `uds-results-card ${e.fill ? "fill" : ""}`,
      children: /* @__PURE__ */ T.jsxs("div", { children: [
        /* @__PURE__ */ T.jsx(
          "a",
          {
            onClick: () => {
              r(), n();
            },
            href: e.link,
            children: `${e.name} | ${e.area}`
          }
        ),
        e.cookieTrail.filter((i) => i).length ? /* @__PURE__ */ T.jsx("div", { className: "cookie-trail", children: e.cookieTrail.join(" › ") }) : null,
        /* @__PURE__ */ T.jsx("div", { className: "description", children: a })
      ] })
    }
  );
};
Ll.propTypes = Md;
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nl = { exports: {} }, Rn = {}, ps;
function Ud() {
  if (ps) return Rn;
  ps = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, h, p) {
    var y, S = {}, N = null, W = null;
    p !== void 0 && (N = "" + p), h.key !== void 0 && (N = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (y in h) n.call(h, y) && !i.hasOwnProperty(y) && (S[y] = h[y]);
    if (f && f.defaultProps) for (y in h = f.defaultProps, h) S[y] === void 0 && (S[y] = h[y]);
    return { $$typeof: t, type: f, key: N, ref: W, props: S, _owner: a.current };
  }
  return Rn.Fragment = r, Rn.jsx = l, Rn.jsxs = l, Rn;
}
Nl.exports = Ud();
var X = Nl.exports, Pl = { exports: {} }, yo, hs;
function zd() {
  if (hs) return yo;
  hs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yo = e, yo;
}
var bo, gs;
function Hd() {
  if (gs) return bo;
  gs = 1;
  var e = zd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, bo = function() {
    function n(l, f, h, p, y, S) {
      if (S !== e) {
        var N = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw N.name = "Invariant Violation", N;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, bo;
}
Pl.exports = Hd()();
var Wd = Pl.exports;
const c = /* @__PURE__ */ li(Wd), Qd = c.shape({
  url: c.string,
  altText: c.string,
  cssClass: c.arrayOf(c.string),
  size: c.oneOf(["small", "medium", "large"])
}), vo = c.shape({
  text: c.string,
  maxWidth: c.string,
  cssClass: c.arrayOf(c.string),
  highlightColor: c.oneOf(["gold", "black"])
}), Dl = c.shape({
  color: c.oneOf(["gold", "maroon", "gray", "dark"]),
  content: c.shape({
    icon: c.string,
    header: c.string,
    body: c.string
  })
}), ci = c.shape({
  text: c.string,
  name: c.string,
  event: c.string,
  action: c.string,
  type: c.string,
  region: c.string,
  section: c.string,
  component: c.string
});
var jl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var f = arguments[l];
        f && (i = a(i, n(f)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var l = "";
      for (var f in i)
        t.call(i, f) && i[f] && (l = a(l, f));
      return l;
    }
    function a(i, l) {
      return l ? i ? i + " " + l : i + l : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(jl);
var Gd = jl.exports;
const Or = /* @__PURE__ */ li(Gd), ms = (e, t, r) => e ? t : r, qd = (e) => (e || []).join(" ");
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function zo(e, t) {
  return zo = Object.setPrototypeOf || function(r, n) {
    return r.__proto__ = n, r;
  }, zo(e, t);
}
function Vd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ba(e, t, r) {
  return Vd() ? ba = Reflect.construct : ba = function(n, a, i) {
    var l = [null];
    l.push.apply(l, a);
    var f = Function.bind.apply(n, l), h = new f();
    return i && zo(h, i.prototype), h;
  }, ba.apply(null, arguments);
}
function dr(e) {
  return Yd(e) || Jd(e) || Kd(e) || Zd();
}
function Yd(e) {
  if (Array.isArray(e)) return Ho(e);
}
function Jd(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Kd(e, t) {
  if (e) {
    if (typeof e == "string") return Ho(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ho(e, t);
  }
}
function Ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Zd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var $d = Object.hasOwnProperty, ys = Object.setPrototypeOf, Xd = Object.isFrozen, ef = Object.getPrototypeOf, tf = Object.getOwnPropertyDescriptor, It = Object.freeze, Kt = Object.seal, rf = Object.create, Bl = typeof Reflect < "u" && Reflect, Ra = Bl.apply, Wo = Bl.construct;
Ra || (Ra = function(e, t, r) {
  return e.apply(t, r);
});
It || (It = function(e) {
  return e;
});
Kt || (Kt = function(e) {
  return e;
});
Wo || (Wo = function(e, t) {
  return ba(e, dr(t));
});
var nf = Zt(Array.prototype.forEach), bs = Zt(Array.prototype.pop), In = Zt(Array.prototype.push), va = Zt(String.prototype.toLowerCase), wo = Zt(String.prototype.toString), vs = Zt(String.prototype.match), cr = Zt(String.prototype.replace), af = Zt(String.prototype.indexOf), of = Zt(String.prototype.trim), At = Zt(RegExp.prototype.test), xo = sf(TypeError);
function Zt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Ra(e, t, n);
  };
}
function sf(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Wo(e, r);
  };
}
function Be(e, t, r) {
  var n;
  r = (n = r) !== null && n !== void 0 ? n : va, ys && ys(e, null);
  for (var a = t.length; a--; ) {
    var i = t[a];
    if (typeof i == "string") {
      var l = r(i);
      l !== i && (Xd(t) || (t[a] = l), i = l);
    }
    e[i] = !0;
  }
  return e;
}
function Qr(e) {
  var t = rf(null), r;
  for (r in e)
    Ra($d, e, [r]) === !0 && (t[r] = e[r]);
  return t;
}
function la(e, t) {
  for (; e !== null; ) {
    var r = tf(e, t);
    if (r) {
      if (r.get)
        return Zt(r.get);
      if (typeof r.value == "function")
        return Zt(r.value);
    }
    e = ef(e);
  }
  function n(a) {
    return console.warn("fallback value for", a), null;
  }
  return n;
}
var ws = It(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ao = It(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), So = It(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lf = It(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Eo = It(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), cf = It(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), xs = It(["#text"]), As = It(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Co = It(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ss = It(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ca = It(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), uf = Kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), df = Kt(/<%[\w\W]*|[\w\W]*%>/gm), ff = Kt(/\${[\w\W]*}/gm), pf = Kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), hf = Kt(/^aria-[\-\w]+$/), gf = Kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mf = Kt(/^(?:\w+script|data):/i), yf = Kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bf = Kt(/^html$/i), vf = Kt(/^[a-z][.\w]*(-[.\w]+)+$/i), wf = function() {
  return typeof window > "u" ? null : window;
}, xf = function(e, t) {
  if (Dr(e) !== "object" || typeof e.createPolicy != "function")
    return null;
  var r = null, n = "data-tt-policy-suffix";
  t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
  var a = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(a, {
      createHTML: function(i) {
        return i;
      },
      createScriptURL: function(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
};
function Fl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : wf(), t = function(b) {
    return Fl(b);
  };
  if (t.version = "2.5.8", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  var r = e.document, n = e.document, a = e.DocumentFragment, i = e.HTMLTemplateElement, l = e.Node, f = e.Element, h = e.NodeFilter, p = e.NamedNodeMap, y = p === void 0 ? e.NamedNodeMap || e.MozNamedAttrMap : p, S = e.HTMLFormElement, N = e.DOMParser, W = e.trustedTypes, C = f.prototype, w = la(C, "cloneNode"), k = la(C, "nextSibling"), z = la(C, "childNodes"), j = la(C, "parentNode");
  if (typeof i == "function") {
    var U = n.createElement("template");
    U.content && U.content.ownerDocument && (n = U.content.ownerDocument);
  }
  var M = xf(W, r), R = M ? M.createHTML("") : "", ae = n, ue = ae.implementation, ee = ae.createNodeIterator, se = ae.createDocumentFragment, ve = ae.getElementsByTagName, Le = r.importNode, he = {};
  try {
    he = Qr(n).documentMode ? n.documentMode : {};
  } catch {
  }
  var pe = {};
  t.isSupported = typeof j == "function" && ue && ue.createHTMLDocument !== void 0 && he !== 9;
  var Te = uf, de = df, Je = ff, Ue = pf, De = hf, qe = mf, Ke = yf, Ze = vf, G = gf, L = null, Q = Be({}, [].concat(dr(ws), dr(Ao), dr(So), dr(Eo), dr(xs))), q = null, v = Be({}, [].concat(dr(As), dr(Co), dr(Ss), dr(ca))), V = Object.seal(Object.create(null, {
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
  })), _ = null, ce = null, re = !0, oe = !0, Z = !1, fe = !0, me = !1, ie = !0, ye = !1, le = !1, Ae = !1, He = !1, we = !1, ot = !1, $e = !0, ke = !1, $ = "user-content-", be = !0, it = !1, rt = {}, ze = null, hr = Be({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), gr = null, vr = Be({}, ["audio", "video", "img", "source", "image", "track"]), Pt = null, Wt = Be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Dt = "http://www.w3.org/1998/Math/MathML", jt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml", bt = ut, $t = !1, gt = null, wr = Be({}, [Dt, jt, ut], wo), ft, We = ["application/xhtml+xml", "text/html"], Xt = "text/html", Re, pt = null, Ot = n.createElement("form"), Qt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, vt = function(b) {
    pt && pt === b || ((!b || Dr(b) !== "object") && (b = {}), b = Qr(b), ft = // eslint-disable-next-line unicorn/prefer-includes
    We.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? ft = Xt : ft = b.PARSER_MEDIA_TYPE, Re = ft === "application/xhtml+xml" ? wo : va, L = "ALLOWED_TAGS" in b ? Be({}, b.ALLOWED_TAGS, Re) : Q, q = "ALLOWED_ATTR" in b ? Be({}, b.ALLOWED_ATTR, Re) : v, gt = "ALLOWED_NAMESPACES" in b ? Be({}, b.ALLOWED_NAMESPACES, wo) : wr, Pt = "ADD_URI_SAFE_ATTR" in b ? Be(
      Qr(Wt),
      // eslint-disable-line indent
      b.ADD_URI_SAFE_ATTR,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : Wt, gr = "ADD_DATA_URI_TAGS" in b ? Be(
      Qr(vr),
      // eslint-disable-line indent
      b.ADD_DATA_URI_TAGS,
      // eslint-disable-line indent
      Re
      // eslint-disable-line indent
    ) : vr, ze = "FORBID_CONTENTS" in b ? Be({}, b.FORBID_CONTENTS, Re) : hr, _ = "FORBID_TAGS" in b ? Be({}, b.FORBID_TAGS, Re) : {}, ce = "FORBID_ATTR" in b ? Be({}, b.FORBID_ATTR, Re) : {}, rt = "USE_PROFILES" in b ? b.USE_PROFILES : !1, re = b.ALLOW_ARIA_ATTR !== !1, oe = b.ALLOW_DATA_ATTR !== !1, Z = b.ALLOW_UNKNOWN_PROTOCOLS || !1, fe = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, me = b.SAFE_FOR_TEMPLATES || !1, ie = b.SAFE_FOR_XML !== !1, ye = b.WHOLE_DOCUMENT || !1, He = b.RETURN_DOM || !1, we = b.RETURN_DOM_FRAGMENT || !1, ot = b.RETURN_TRUSTED_TYPE || !1, Ae = b.FORCE_BODY || !1, $e = b.SANITIZE_DOM !== !1, ke = b.SANITIZE_NAMED_PROPS || !1, be = b.KEEP_CONTENT !== !1, it = b.IN_PLACE || !1, G = b.ALLOWED_URI_REGEXP || G, bt = b.NAMESPACE || ut, V = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && Qt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && Qt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), me && (oe = !1), we && (He = !0), rt && (L = Be({}, dr(xs)), q = [], rt.html === !0 && (Be(L, ws), Be(q, As)), rt.svg === !0 && (Be(L, Ao), Be(q, Co), Be(q, ca)), rt.svgFilters === !0 && (Be(L, So), Be(q, Co), Be(q, ca)), rt.mathMl === !0 && (Be(L, Eo), Be(q, Ss), Be(q, ca))), b.ADD_TAGS && (L === Q && (L = Qr(L)), Be(L, b.ADD_TAGS, Re)), b.ADD_ATTR && (q === v && (q = Qr(q)), Be(q, b.ADD_ATTR, Re)), b.ADD_URI_SAFE_ATTR && Be(Pt, b.ADD_URI_SAFE_ATTR, Re), b.FORBID_CONTENTS && (ze === hr && (ze = Qr(ze)), Be(ze, b.FORBID_CONTENTS, Re)), be && (L["#text"] = !0), ye && Be(L, ["html", "head", "body"]), L.table && (Be(L, ["tbody"]), delete _.tbody), It && It(b), pt = b);
  }, mr = Be({}, ["mi", "mo", "mn", "ms", "mtext"]), er = Be({}, ["annotation-xml"]), xr = Be({}, ["title", "style", "font", "a", "script"]), _t = Be({}, Ao);
  Be(_t, So), Be(_t, lf);
  var Gt = Be({}, Eo);
  Be(Gt, cf);
  var _r = function(b) {
    var x = j(b);
    (!x || !x.tagName) && (x = {
      namespaceURI: bt,
      tagName: "template"
    });
    var O = va(b.tagName), K = va(x.tagName);
    return gt[b.namespaceURI] ? b.namespaceURI === jt ? x.namespaceURI === ut ? O === "svg" : x.namespaceURI === Dt ? O === "svg" && (K === "annotation-xml" || mr[K]) : !!_t[O] : b.namespaceURI === Dt ? x.namespaceURI === ut ? O === "math" : x.namespaceURI === jt ? O === "math" && er[K] : !!Gt[O] : b.namespaceURI === ut ? x.namespaceURI === jt && !er[K] || x.namespaceURI === Dt && !mr[K] ? !1 : !Gt[O] && (xr[O] || !_t[O]) : !!(ft === "application/xhtml+xml" && gt[b.namespaceURI]) : !1;
  }, st = function(b) {
    In(t.removed, {
      element: b
    });
    try {
      b.parentNode.removeChild(b);
    } catch {
      try {
        b.outerHTML = R;
      } catch {
        b.remove();
      }
    }
  }, Bt = function(b, x) {
    try {
      In(t.removed, {
        attribute: x.getAttributeNode(b),
        from: x
      });
    } catch {
      In(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(b), b === "is" && !q[b])
      if (He || we)
        try {
          st(x);
        } catch {
        }
      else
        try {
          x.setAttribute(b, "");
        } catch {
        }
  }, qt = function(b) {
    var x, O;
    if (Ae)
      b = "<remove></remove>" + b;
    else {
      var K = vs(b, /^[\r\n\t ]+/);
      O = K && K[0];
    }
    ft === "application/xhtml+xml" && bt === ut && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    var ge = M ? M.createHTML(b) : b;
    if (bt === ut)
      try {
        x = new N().parseFromString(ge, ft);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = ue.createDocument(bt, "template", null);
      try {
        x.documentElement.innerHTML = $t ? R : ge;
      } catch {
      }
    }
    var Ie = x.body || x.documentElement;
    return b && O && Ie.insertBefore(n.createTextNode(O), Ie.childNodes[0] || null), bt === ut ? ve.call(x, ye ? "html" : "body")[0] : ye ? x.documentElement : Ie;
  }, yr = function(b) {
    return ee.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null,
      !1
    );
  }, Lt = function(b) {
    return b instanceof S && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof y) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, wt = function(b) {
    return Dr(l) === "object" ? b instanceof l : b && Dr(b) === "object" && typeof b.nodeType == "number" && typeof b.nodeName == "string";
  }, dt = function(b, x, O) {
    pe[b] && nf(pe[b], function(K) {
      K.call(t, x, O, pt);
    });
  }, Ft = function(b) {
    var x;
    if (dt("beforeSanitizeElements", b, null), Lt(b) || At(/[\u0080-\uFFFF]/, b.nodeName))
      return st(b), !0;
    var O = Re(b.nodeName);
    if (dt("uponSanitizeElement", b, {
      tagName: O,
      allowedTags: L
    }), b.hasChildNodes() && !wt(b.firstElementChild) && (!wt(b.content) || !wt(b.content.firstElementChild)) && At(/<[/\w]/g, b.innerHTML) && At(/<[/\w]/g, b.textContent) || O === "select" && At(/<template/i, b.innerHTML) || b.nodeType === 7 || ie && b.nodeType === 8 && At(/<[/\w]/g, b.data))
      return st(b), !0;
    if (!L[O] || _[O]) {
      if (!_[O] && tr(O) && (V.tagNameCheck instanceof RegExp && At(V.tagNameCheck, O) || V.tagNameCheck instanceof Function && V.tagNameCheck(O)))
        return !1;
      if (be && !ze[O]) {
        var K = j(b) || b.parentNode, ge = z(b) || b.childNodes;
        if (ge && K)
          for (var Ie = ge.length, Ne = Ie - 1; Ne >= 0; --Ne) {
            var Qe = w(ge[Ne], !0);
            Qe.__removalCount = (b.__removalCount || 0) + 1, K.insertBefore(Qe, k(b));
          }
      }
      return st(b), !0;
    }
    return b instanceof f && !_r(b) || (O === "noscript" || O === "noembed" || O === "noframes") && At(/<\/no(script|embed|frames)/i, b.innerHTML) ? (st(b), !0) : (me && b.nodeType === 3 && (x = b.textContent, x = cr(x, Te, " "), x = cr(x, de, " "), x = cr(x, Je, " "), b.textContent !== x && (In(t.removed, {
      element: b.cloneNode()
    }), b.textContent = x)), dt("afterSanitizeElements", b, null), !1);
  }, Ar = function(b, x, O) {
    if ($e && (x === "id" || x === "name") && (O in n || O in Ot))
      return !1;
    if (!(oe && !ce[x] && At(Ue, x)) && !(re && At(De, x))) {
      if (!q[x] || ce[x]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(tr(b) && (V.tagNameCheck instanceof RegExp && At(V.tagNameCheck, b) || V.tagNameCheck instanceof Function && V.tagNameCheck(b)) && (V.attributeNameCheck instanceof RegExp && At(V.attributeNameCheck, x) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && At(V.tagNameCheck, O) || V.tagNameCheck instanceof Function && V.tagNameCheck(O)))
        ) return !1;
      } else if (!Pt[x] && !At(G, cr(O, Ke, "")) && !((x === "src" || x === "xlink:href" || x === "href") && b !== "script" && af(O, "data:") === 0 && gr[b]) && !(Z && !At(qe, cr(O, Ke, ""))) && O)
        return !1;
    }
    return !0;
  }, tr = function(b) {
    return b !== "annotation-xml" && vs(b, Ze);
  }, Vt = function(b) {
    var x, O, K, ge;
    dt("beforeSanitizeAttributes", b, null);
    var Ie = b.attributes;
    if (!(!Ie || Lt(b))) {
      var Ne = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: q
      };
      for (ge = Ie.length; ge--; ) {
        x = Ie[ge];
        var Qe = x, lt = Qe.name, Fe = Qe.namespaceURI;
        if (O = lt === "value" ? x.value : of(x.value), K = Re(lt), Ne.attrName = K, Ne.attrValue = O, Ne.keepAttr = !0, Ne.forceKeepAttr = void 0, dt("uponSanitizeAttribute", b, Ne), O = Ne.attrValue, !Ne.forceKeepAttr && (Bt(lt, b), !!Ne.keepAttr)) {
          if (!fe && At(/\/>/i, O)) {
            Bt(lt, b);
            continue;
          }
          me && (O = cr(O, Te, " "), O = cr(O, de, " "), O = cr(O, Je, " "));
          var Tt = Re(b.nodeName);
          if (Ar(Tt, K, O)) {
            if (ke && (K === "id" || K === "name") && (Bt(lt, b), O = $ + O), ie && At(/((--!?|])>)|<\/(style|title)/i, O)) {
              Bt(lt, b);
              continue;
            }
            if (M && Dr(W) === "object" && typeof W.getAttributeType == "function" && !Fe)
              switch (W.getAttributeType(Tt, K)) {
                case "TrustedHTML": {
                  O = M.createHTML(O);
                  break;
                }
                case "TrustedScriptURL": {
                  O = M.createScriptURL(O);
                  break;
                }
              }
            try {
              Fe ? b.setAttributeNS(Fe, lt, O) : b.setAttribute(lt, O), Lt(b) ? st(b) : bs(t.removed);
            } catch {
            }
          }
        }
      }
      dt("afterSanitizeAttributes", b, null);
    }
  }, rr = function b(x) {
    var O, K = yr(x);
    for (dt("beforeSanitizeShadowDOM", x, null); O = K.nextNode(); )
      dt("uponSanitizeShadowNode", O, null), Ft(O), Vt(O), O.content instanceof a && b(O.content);
    dt("afterSanitizeShadowDOM", x, null);
  };
  return t.sanitize = function(b) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O, K, ge, Ie, Ne;
    if ($t = !b, $t && (b = "<!-->"), typeof b != "string" && !wt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw xo("dirty is not a string, aborting");
      } else
        throw xo("toString is not a function");
    if (!t.isSupported) {
      if (Dr(e.toStaticHTML) === "object" || typeof e.toStaticHTML == "function") {
        if (typeof b == "string")
          return e.toStaticHTML(b);
        if (wt(b))
          return e.toStaticHTML(b.outerHTML);
      }
      return b;
    }
    if (le || vt(x), t.removed = [], typeof b == "string" && (it = !1), it) {
      if (b.nodeName) {
        var Qe = Re(b.nodeName);
        if (!L[Qe] || _[Qe])
          throw xo("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof l)
      O = qt("<!---->"), K = O.ownerDocument.importNode(b, !0), K.nodeType === 1 && K.nodeName === "BODY" || K.nodeName === "HTML" ? O = K : O.appendChild(K);
    else {
      if (!He && !me && !ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return M && ot ? M.createHTML(b) : b;
      if (O = qt(b), !O)
        return He ? null : ot ? R : "";
    }
    O && Ae && st(O.firstChild);
    for (var lt = yr(it ? b : O); ge = lt.nextNode(); )
      ge.nodeType === 3 && ge === Ie || (Ft(ge), Vt(ge), ge.content instanceof a && rr(ge.content), Ie = ge);
    if (Ie = null, it)
      return b;
    if (He) {
      if (we)
        for (Ne = se.call(O.ownerDocument); O.firstChild; )
          Ne.appendChild(O.firstChild);
      else
        Ne = O;
      return (q.shadowroot || q.shadowrootmod) && (Ne = Le.call(r, Ne, !0)), Ne;
    }
    var Fe = ye ? O.outerHTML : O.innerHTML;
    return ye && L["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && At(bf, O.ownerDocument.doctype.name) && (Fe = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Fe), me && (Fe = cr(Fe, Te, " "), Fe = cr(Fe, de, " "), Fe = cr(Fe, Je, " ")), M && ot ? M.createHTML(Fe) : Fe;
  }, t.setConfig = function(b) {
    vt(b), le = !0;
  }, t.clearConfig = function() {
    pt = null, le = !1;
  }, t.isValidAttribute = function(b, x, O) {
    pt || vt({});
    var K = Re(b), ge = Re(x);
    return Ar(K, ge, O);
  }, t.addHook = function(b, x) {
    typeof x == "function" && (pe[b] = pe[b] || [], In(pe[b], x));
  }, t.removeHook = function(b) {
    if (pe[b])
      return bs(pe[b]);
  }, t.removeHooks = function(b) {
    pe[b] && (pe[b] = []);
  }, t.removeAllHooks = function() {
    pe = {};
  }, t;
}
var Af = Fl();
const tn = (e) => ({ __html: Af.sanitize(e) }), Es = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
c.shape({
  event: c.string,
  action: c.string,
  name: c.string,
  region: c.string,
  section: c.string,
  component: c.string,
  type: c.string,
  text: c.string
});
const Ml = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: i = "",
  region: l = "",
  component: f = ""
}) => {
  const { dataLayer: h } = window, p = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: a.toLowerCase(),
    text: i.toLowerCase(),
    component: f.toLowerCase()
  };
  h && h.push(p);
};
var Gr = {}, Cs;
function Sf() {
  if (Cs) return Gr;
  Cs = 1;
  var e = ht;
  function t(o) {
    for (var d = "https://reactjs.org/docs/error-decoder.html?invariant=" + o, m = 1; m < arguments.length; m++) d += "&args[]=" + encodeURIComponent(arguments[m]);
    return "Minified React error #" + o + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, i = {};
  function l(o) {
    return r.call(i, o) ? !0 : r.call(a, o) ? !1 : n.test(o) ? i[o] = !0 : (a[o] = !0, !1);
  }
  function f(o, d, m, E, F, P, Y) {
    this.acceptsBooleans = d === 2 || d === 3 || d === 4, this.attributeName = E, this.attributeNamespace = F, this.mustUseProperty = m, this.propertyName = o, this.type = d, this.sanitizeURL = P, this.removeEmptyString = Y;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o) {
    h[o] = new f(o, 0, !1, o, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(o) {
    var d = o[0];
    h[d] = new f(d, 1, !1, o[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(o) {
    h[o] = new f(o, 2, !1, o.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(o) {
    h[o] = new f(o, 2, !1, o, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o) {
    h[o] = new f(o, 3, !1, o.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(o) {
    h[o] = new f(o, 3, !0, o, null, !1, !1);
  }), ["capture", "download"].forEach(function(o) {
    h[o] = new f(o, 4, !1, o, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(o) {
    h[o] = new f(o, 6, !1, o, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(o) {
    h[o] = new f(o, 5, !1, o.toLowerCase(), null, !1, !1);
  });
  var p = /[\-:]([a-z])/g;
  function y(o) {
    return o[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o) {
    var d = o.replace(
      p,
      y
    );
    h[d] = new f(d, 1, !1, o, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o) {
    var d = o.replace(p, y);
    h[d] = new f(d, 1, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(o) {
    var d = o.replace(p, y);
    h[d] = new f(d, 1, !1, o, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(o) {
    h[o] = new f(o, 1, !1, o.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new f("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(o) {
    h[o] = new f(o, 1, !1, o.toLowerCase(), null, !0, !0);
  });
  var S = {
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
  }, N = ["Webkit", "ms", "Moz", "O"];
  Object.keys(S).forEach(function(o) {
    N.forEach(function(d) {
      d = d + o.charAt(0).toUpperCase() + o.substring(1), S[d] = S[o];
    });
  });
  var W = /["'&<>]/;
  function C(o) {
    if (typeof o == "boolean" || typeof o == "number") return "" + o;
    o = "" + o;
    var d = W.exec(o);
    if (d) {
      var m = "", E, F = 0;
      for (E = d.index; E < o.length; E++) {
        switch (o.charCodeAt(E)) {
          case 34:
            d = "&quot;";
            break;
          case 38:
            d = "&amp;";
            break;
          case 39:
            d = "&#x27;";
            break;
          case 60:
            d = "&lt;";
            break;
          case 62:
            d = "&gt;";
            break;
          default:
            continue;
        }
        F !== E && (m += o.substring(F, E)), F = E + 1, m += d;
      }
      o = F !== E ? m + o.substring(F, E) : m;
    }
    return o;
  }
  var w = /([A-Z])/g, k = /^ms-/, z = Array.isArray;
  function j(o, d) {
    return { insertionMode: o, selectedValue: d };
  }
  function U(o, d, m) {
    switch (d) {
      case "select":
        return j(1, m.value != null ? m.value : m.defaultValue);
      case "svg":
        return j(2, null);
      case "math":
        return j(3, null);
      case "foreignObject":
        return j(1, null);
      case "table":
        return j(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return j(5, null);
      case "colgroup":
        return j(7, null);
      case "tr":
        return j(6, null);
    }
    return 4 <= o.insertionMode || o.insertionMode === 0 ? j(1, null) : o;
  }
  var M = /* @__PURE__ */ new Map();
  function R(o, d, m) {
    if (typeof m != "object") throw Error(t(62));
    d = !0;
    for (var E in m) if (r.call(m, E)) {
      var F = m[E];
      if (F != null && typeof F != "boolean" && F !== "") {
        if (E.indexOf("--") === 0) {
          var P = C(E);
          F = C(("" + F).trim());
        } else {
          P = E;
          var Y = M.get(P);
          Y !== void 0 || (Y = C(P.replace(w, "-$1").toLowerCase().replace(k, "-ms-")), M.set(P, Y)), P = Y, F = typeof F == "number" ? F === 0 || r.call(S, E) ? "" + F : F + "px" : C(("" + F).trim());
        }
        d ? (d = !1, o.push(' style="', P, ":", F)) : o.push(";", P, ":", F);
      }
    }
    d || o.push('"');
  }
  function ae(o, d, m, E) {
    switch (m) {
      case "style":
        R(o, d, E);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < m.length) || m[0] !== "o" && m[0] !== "O" || m[1] !== "n" && m[1] !== "N") {
      if (d = h.hasOwnProperty(m) ? h[m] : null, d !== null) {
        switch (typeof E) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!d.acceptsBooleans) return;
        }
        switch (m = d.attributeName, d.type) {
          case 3:
            E && o.push(" ", m, '=""');
            break;
          case 4:
            E === !0 ? o.push(" ", m, '=""') : E !== !1 && o.push(" ", m, '="', C(E), '"');
            break;
          case 5:
            isNaN(E) || o.push(" ", m, '="', C(E), '"');
            break;
          case 6:
            !isNaN(E) && 1 <= E && o.push(" ", m, '="', C(E), '"');
            break;
          default:
            d.sanitizeURL && (E = "" + E), o.push(" ", m, '="', C(E), '"');
        }
      } else if (l(m)) {
        switch (typeof E) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (d = m.toLowerCase().slice(0, 5), d !== "data-" && d !== "aria-") return;
        }
        o.push(" ", m, '="', C(E), '"');
      }
    }
  }
  function ue(o, d, m) {
    if (d != null) {
      if (m != null) throw Error(t(60));
      if (typeof d != "object" || !("__html" in d)) throw Error(t(61));
      d = d.__html, d != null && o.push("" + d);
    }
  }
  function ee(o) {
    var d = "";
    return e.Children.forEach(o, function(m) {
      m != null && (d += m);
    }), d;
  }
  function se(o, d, m, E) {
    o.push(he(m));
    var F = m = null, P;
    for (P in d) if (r.call(d, P)) {
      var Y = d[P];
      if (Y != null) switch (P) {
        case "children":
          m = Y;
          break;
        case "dangerouslySetInnerHTML":
          F = Y;
          break;
        default:
          ae(o, E, P, Y);
      }
    }
    return o.push(">"), ue(o, F, m), typeof m == "string" ? (o.push(C(m)), null) : m;
  }
  var ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Le = /* @__PURE__ */ new Map();
  function he(o) {
    var d = Le.get(o);
    if (d === void 0) {
      if (!ve.test(o)) throw Error(t(65, o));
      d = "<" + o, Le.set(o, d);
    }
    return d;
  }
  function pe(o, d, m, E, F) {
    switch (d) {
      case "select":
        o.push(he("select"));
        var P = null, Y = null;
        for (Oe in m) if (r.call(m, Oe)) {
          var ne = m[Oe];
          if (ne != null) switch (Oe) {
            case "children":
              P = ne;
              break;
            case "dangerouslySetInnerHTML":
              Y = ne;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(o, E, Oe, ne);
          }
        }
        return o.push(">"), ue(o, Y, P), P;
      case "option":
        Y = F.selectedValue, o.push(he("option"));
        var Se = ne = null, Ce = null, Oe = null;
        for (P in m) if (r.call(m, P)) {
          var ct = m[P];
          if (ct != null) switch (P) {
            case "children":
              ne = ct;
              break;
            case "selected":
              Ce = ct;
              break;
            case "dangerouslySetInnerHTML":
              Oe = ct;
              break;
            case "value":
              Se = ct;
            default:
              ae(o, E, P, ct);
          }
        }
        if (Y != null) if (m = Se !== null ? "" + Se : ee(ne), z(Y)) {
          for (E = 0; E < Y.length; E++)
            if ("" + Y[E] === m) {
              o.push(' selected=""');
              break;
            }
        } else "" + Y === m && o.push(' selected=""');
        else Ce && o.push(' selected=""');
        return o.push(">"), ue(o, Oe, ne), ne;
      case "textarea":
        o.push(he("textarea")), Oe = Y = P = null;
        for (ne in m) if (r.call(m, ne) && (Se = m[ne], Se != null)) switch (ne) {
          case "children":
            Oe = Se;
            break;
          case "value":
            P = Se;
            break;
          case "defaultValue":
            Y = Se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              o,
              E,
              ne,
              Se
            );
        }
        if (P === null && Y !== null && (P = Y), o.push(">"), Oe != null) {
          if (P != null) throw Error(t(92));
          if (z(Oe) && 1 < Oe.length) throw Error(t(93));
          P = "" + Oe;
        }
        return typeof P == "string" && P[0] === `
` && o.push(`
`), P !== null && o.push(C("" + P)), null;
      case "input":
        o.push(he("input")), Se = Oe = ne = P = null;
        for (Y in m) if (r.call(m, Y) && (Ce = m[Y], Ce != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            Se = Ce;
            break;
          case "defaultValue":
            ne = Ce;
            break;
          case "checked":
            Oe = Ce;
            break;
          case "value":
            P = Ce;
            break;
          default:
            ae(o, E, Y, Ce);
        }
        return Oe !== null ? ae(o, E, "checked", Oe) : Se !== null && ae(o, E, "checked", Se), P !== null ? ae(o, E, "value", P) : ne !== null && ae(o, E, "value", ne), o.push("/>"), null;
      case "menuitem":
        o.push(he("menuitem"));
        for (var ar in m) if (r.call(m, ar) && (P = m[ar], P != null)) switch (ar) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(o, E, ar, P);
        }
        return o.push(">"), null;
      case "title":
        o.push(he("title")), P = null;
        for (ct in m) if (r.call(m, ct) && (Y = m[ct], Y != null)) switch (ct) {
          case "children":
            P = Y;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(o, E, ct, Y);
        }
        return o.push(">"), P;
      case "listing":
      case "pre":
        o.push(he(d)), Y = P = null;
        for (Se in m) if (r.call(m, Se) && (ne = m[Se], ne != null)) switch (Se) {
          case "children":
            P = ne;
            break;
          case "dangerouslySetInnerHTML":
            Y = ne;
            break;
          default:
            ae(o, E, Se, ne);
        }
        if (o.push(">"), Y != null) {
          if (P != null) throw Error(t(60));
          if (typeof Y != "object" || !("__html" in Y)) throw Error(t(61));
          m = Y.__html, m != null && (typeof m == "string" && 0 < m.length && m[0] === `
` ? o.push(`
`, m) : o.push("" + m));
        }
        return typeof P == "string" && P[0] === `
` && o.push(`
`), P;
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
        o.push(he(d));
        for (var or in m) if (r.call(m, or) && (P = m[or], P != null)) switch (or) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, d));
          default:
            ae(o, E, or, P);
        }
        return o.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return se(
          o,
          m,
          d,
          E
        );
      case "html":
        return F.insertionMode === 0 && o.push("<!DOCTYPE html>"), se(o, m, d, E);
      default:
        if (d.indexOf("-") === -1 && typeof m.is != "string") return se(o, m, d, E);
        o.push(he(d)), Y = P = null;
        for (Ce in m) if (r.call(m, Ce) && (ne = m[Ce], ne != null)) switch (Ce) {
          case "children":
            P = ne;
            break;
          case "dangerouslySetInnerHTML":
            Y = ne;
            break;
          case "style":
            R(o, E, ne);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            l(Ce) && typeof ne != "function" && typeof ne != "symbol" && o.push(" ", Ce, '="', C(ne), '"');
        }
        return o.push(">"), ue(o, Y, P), P;
    }
  }
  function Te(o, d, m) {
    if (o.push('<!--$?--><template id="'), m === null) throw Error(t(395));
    return o.push(m), o.push('"></template>');
  }
  function de(o, d, m, E) {
    switch (m.insertionMode) {
      case 0:
      case 1:
        return o.push('<div hidden id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 2:
        return o.push('<svg aria-hidden="true" style="display:none" id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 3:
        return o.push('<math aria-hidden="true" style="display:none" id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 4:
        return o.push('<table hidden id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 5:
        return o.push('<table hidden><tbody id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 6:
        return o.push('<table hidden><tr id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      case 7:
        return o.push('<table hidden><colgroup id="'), o.push(d.segmentPrefix), d = E.toString(16), o.push(d), o.push('">');
      default:
        throw Error(t(397));
    }
  }
  function Je(o, d) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return o.push("</div>");
      case 2:
        return o.push("</svg>");
      case 3:
        return o.push("</math>");
      case 4:
        return o.push("</table>");
      case 5:
        return o.push("</tbody></table>");
      case 6:
        return o.push("</tr></table>");
      case 7:
        return o.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var Ue = /[<\u2028\u2029]/g;
  function De(o) {
    return JSON.stringify(o).replace(Ue, function(d) {
      switch (d) {
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
  function qe(o, d) {
    return d = d === void 0 ? "" : d, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: d + "P:", segmentPrefix: d + "S:", boundaryPrefix: d + "B:", idPrefix: d, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: o };
  }
  function Ke(o, d, m, E) {
    return m.generateStaticMarkup ? (o.push(C(d)), !1) : (d === "" ? o = E : (E && o.push("<!-- -->"), o.push(C(d)), o = !0), o);
  }
  var Ze = Object.assign, G = Symbol.for("react.element"), L = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), _ = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), me = Symbol.for("react.scope"), ie = Symbol.for("react.debug_trace_mode"), ye = Symbol.for("react.legacy_hidden"), le = Symbol.for("react.default_value"), Ae = Symbol.iterator;
  function He(o) {
    if (o == null) return null;
    if (typeof o == "function") return o.displayName || o.name || null;
    if (typeof o == "string") return o;
    switch (o) {
      case Q:
        return "Fragment";
      case L:
        return "Portal";
      case v:
        return "Profiler";
      case q:
        return "StrictMode";
      case re:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof o == "object") switch (o.$$typeof) {
      case _:
        return (o.displayName || "Context") + ".Consumer";
      case V:
        return (o._context.displayName || "Context") + ".Provider";
      case ce:
        var d = o.render;
        return o = o.displayName, o || (o = d.displayName || d.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
      case Z:
        return d = o.displayName || null, d !== null ? d : He(o.type) || "Memo";
      case fe:
        d = o._payload, o = o._init;
        try {
          return He(o(d));
        } catch {
        }
    }
    return null;
  }
  var we = {};
  function ot(o, d) {
    if (o = o.contextTypes, !o) return we;
    var m = {}, E;
    for (E in o) m[E] = d[E];
    return m;
  }
  var $e = null;
  function ke(o, d) {
    if (o !== d) {
      o.context._currentValue2 = o.parentValue, o = o.parent;
      var m = d.parent;
      if (o === null) {
        if (m !== null) throw Error(t(401));
      } else {
        if (m === null) throw Error(t(401));
        ke(o, m);
      }
      d.context._currentValue2 = d.value;
    }
  }
  function $(o) {
    o.context._currentValue2 = o.parentValue, o = o.parent, o !== null && $(o);
  }
  function be(o) {
    var d = o.parent;
    d !== null && be(d), o.context._currentValue2 = o.value;
  }
  function it(o, d) {
    if (o.context._currentValue2 = o.parentValue, o = o.parent, o === null) throw Error(t(402));
    o.depth === d.depth ? ke(o, d) : it(o, d);
  }
  function rt(o, d) {
    var m = d.parent;
    if (m === null) throw Error(t(402));
    o.depth === m.depth ? ke(o, m) : rt(o, m), d.context._currentValue2 = d.value;
  }
  function ze(o) {
    var d = $e;
    d !== o && (d === null ? be(o) : o === null ? $(d) : d.depth === o.depth ? ke(d, o) : d.depth > o.depth ? it(d, o) : rt(d, o), $e = o);
  }
  var hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(o, d) {
    o = o._reactInternals, o.queue !== null && o.queue.push(d);
  }, enqueueReplaceState: function(o, d) {
    o = o._reactInternals, o.replace = !0, o.queue = [d];
  }, enqueueForceUpdate: function() {
  } };
  function gr(o, d, m, E) {
    var F = o.state !== void 0 ? o.state : null;
    o.updater = hr, o.props = m, o.state = F;
    var P = { queue: [], replace: !1 };
    o._reactInternals = P;
    var Y = d.contextType;
    if (o.context = typeof Y == "object" && Y !== null ? Y._currentValue2 : E, Y = d.getDerivedStateFromProps, typeof Y == "function" && (Y = Y(m, F), F = Y == null ? F : Ze({}, F, Y), o.state = F), typeof d.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function")) if (d = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), d !== o.state && hr.enqueueReplaceState(o, o.state, null), P.queue !== null && 0 < P.queue.length) if (d = P.queue, Y = P.replace, P.queue = null, P.replace = !1, Y && d.length === 1) o.state = d[0];
    else {
      for (P = Y ? d[0] : o.state, F = !0, Y = Y ? 1 : 0; Y < d.length; Y++) {
        var ne = d[Y];
        ne = typeof ne == "function" ? ne.call(o, P, m, E) : ne, ne != null && (F ? (F = !1, P = Ze({}, P, ne)) : Ze(P, ne));
      }
      o.state = P;
    }
    else P.queue = null;
  }
  var vr = { id: 1, overflow: "" };
  function Pt(o, d, m) {
    var E = o.id;
    o = o.overflow;
    var F = 32 - Wt(E) - 1;
    E &= ~(1 << F), m += 1;
    var P = 32 - Wt(d) + F;
    if (30 < P) {
      var Y = F - F % 5;
      return P = (E & (1 << Y) - 1).toString(32), E >>= Y, F -= Y, { id: 1 << 32 - Wt(d) + F | m << F | E, overflow: P + o };
    }
    return { id: 1 << P | m << F | E, overflow: o };
  }
  var Wt = Math.clz32 ? Math.clz32 : ut, Dt = Math.log, jt = Math.LN2;
  function ut(o) {
    return o >>>= 0, o === 0 ? 32 : 31 - (Dt(o) / jt | 0) | 0;
  }
  function bt(o, d) {
    return o === d && (o !== 0 || 1 / o === 1 / d) || o !== o && d !== d;
  }
  var $t = typeof Object.is == "function" ? Object.is : bt, gt = null, wr = null, ft = null, We = null, Xt = !1, Re = !1, pt = 0, Ot = null, Qt = 0;
  function vt() {
    if (gt === null) throw Error(t(321));
    return gt;
  }
  function mr() {
    if (0 < Qt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function er() {
    return We === null ? ft === null ? (Xt = !1, ft = We = mr()) : (Xt = !0, We = ft) : We.next === null ? (Xt = !1, We = We.next = mr()) : (Xt = !0, We = We.next), We;
  }
  function xr() {
    wr = gt = null, Re = !1, ft = null, Qt = 0, We = Ot = null;
  }
  function _t(o, d) {
    return typeof d == "function" ? d(o) : d;
  }
  function Gt(o, d, m) {
    if (gt = vt(), We = er(), Xt) {
      var E = We.queue;
      if (d = E.dispatch, Ot !== null && (m = Ot.get(E), m !== void 0)) {
        Ot.delete(E), E = We.memoizedState;
        do
          E = o(E, m.action), m = m.next;
        while (m !== null);
        return We.memoizedState = E, [E, d];
      }
      return [We.memoizedState, d];
    }
    return o = o === _t ? typeof d == "function" ? d() : d : m !== void 0 ? m(d) : d, We.memoizedState = o, o = We.queue = { last: null, dispatch: null }, o = o.dispatch = st.bind(null, gt, o), [We.memoizedState, o];
  }
  function _r(o, d) {
    if (gt = vt(), We = er(), d = d === void 0 ? null : d, We !== null) {
      var m = We.memoizedState;
      if (m !== null && d !== null) {
        var E = m[1];
        e: if (E === null) E = !1;
        else {
          for (var F = 0; F < E.length && F < d.length; F++) if (!$t(d[F], E[F])) {
            E = !1;
            break e;
          }
          E = !0;
        }
        if (E) return m[0];
      }
    }
    return o = o(), We.memoizedState = [o, d], o;
  }
  function st(o, d, m) {
    if (25 <= Qt) throw Error(t(301));
    if (o === gt) if (Re = !0, o = { action: m, next: null }, Ot === null && (Ot = /* @__PURE__ */ new Map()), m = Ot.get(d), m === void 0) Ot.set(d, o);
    else {
      for (d = m; d.next !== null; ) d = d.next;
      d.next = o;
    }
  }
  function Bt() {
    throw Error(t(394));
  }
  function qt() {
  }
  var yr = { readContext: function(o) {
    return o._currentValue2;
  }, useContext: function(o) {
    return vt(), o._currentValue2;
  }, useMemo: _r, useReducer: Gt, useRef: function(o) {
    gt = vt(), We = er();
    var d = We.memoizedState;
    return d === null ? (o = { current: o }, We.memoizedState = o) : d;
  }, useState: function(o) {
    return Gt(_t, o);
  }, useInsertionEffect: qt, useLayoutEffect: function() {
  }, useCallback: function(o, d) {
    return _r(function() {
      return o;
    }, d);
  }, useImperativeHandle: qt, useEffect: qt, useDebugValue: qt, useDeferredValue: function(o) {
    return vt(), o;
  }, useTransition: function() {
    return vt(), [
      !1,
      Bt
    ];
  }, useId: function() {
    var o = wr.treeContext, d = o.overflow;
    o = o.id, o = (o & ~(1 << 32 - Wt(o) - 1)).toString(32) + d;
    var m = Lt;
    if (m === null) throw Error(t(404));
    return d = pt++, o = ":" + m.idPrefix + "R" + o, 0 < d && (o += "H" + d.toString(32)), o + ":";
  }, useMutableSource: function(o, d) {
    return vt(), d(o._source);
  }, useSyncExternalStore: function(o, d, m) {
    if (m === void 0) throw Error(t(407));
    return m();
  } }, Lt = null, wt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function dt(o) {
    return console.error(o), null;
  }
  function Ft() {
  }
  function Ar(o, d, m, E, F, P, Y, ne, Se) {
    var Ce = [], Oe = /* @__PURE__ */ new Set();
    return d = { destination: null, responseState: d, progressiveChunkSize: E, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Oe, pingedTasks: Ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: F === void 0 ? dt : F, onAllReady: Ft, onShellReady: Y === void 0 ? Ft : Y, onShellError: Ft, onFatalError: Ft }, m = Vt(d, 0, null, m, !1, !1), m.parentFlushed = !0, o = tr(d, o, null, m, Oe, we, null, vr), Ce.push(o), d;
  }
  function tr(o, d, m, E, F, P, Y, ne) {
    o.allPendingTasks++, m === null ? o.pendingRootTasks++ : m.pendingTasks++;
    var Se = { node: d, ping: function() {
      var Ce = o.pingedTasks;
      Ce.push(Se), Ce.length === 1 && mn(o);
    }, blockedBoundary: m, blockedSegment: E, abortSet: F, legacyContext: P, context: Y, treeContext: ne };
    return F.add(Se), Se;
  }
  function Vt(o, d, m, E, F, P) {
    return { status: 0, id: -1, index: d, parentFlushed: !1, chunks: [], children: [], formatContext: E, boundary: m, lastPushedText: F, textEmbedded: P };
  }
  function rr(o, d) {
    if (o = o.onError(d), o != null && typeof o != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof o + '" instead');
    return o;
  }
  function b(o, d) {
    var m = o.onShellError;
    m(d), m = o.onFatalError, m(d), o.destination !== null ? (o.status = 2, o.destination.destroy(d)) : (o.status = 1, o.fatalError = d);
  }
  function x(o, d, m, E, F) {
    for (gt = {}, wr = d, pt = 0, o = m(E, F); Re; ) Re = !1, pt = 0, Qt += 1, We = null, o = m(E, F);
    return xr(), o;
  }
  function O(o, d, m, E) {
    var F = m.render(), P = E.childContextTypes;
    if (P != null) {
      var Y = d.legacyContext;
      if (typeof m.getChildContext != "function") E = Y;
      else {
        m = m.getChildContext();
        for (var ne in m) if (!(ne in P)) throw Error(t(108, He(E) || "Unknown", ne));
        E = Ze({}, Y, m);
      }
      d.legacyContext = E, Ie(o, d, F), d.legacyContext = Y;
    } else Ie(o, d, F);
  }
  function K(o, d) {
    if (o && o.defaultProps) {
      d = Ze({}, d), o = o.defaultProps;
      for (var m in o) d[m] === void 0 && (d[m] = o[m]);
      return d;
    }
    return d;
  }
  function ge(o, d, m, E, F) {
    if (typeof m == "function") if (m.prototype && m.prototype.isReactComponent) {
      F = ot(m, d.legacyContext);
      var P = m.contextType;
      P = new m(E, typeof P == "object" && P !== null ? P._currentValue2 : F), gr(P, m, E, F), O(o, d, P, m);
    } else {
      P = ot(m, d.legacyContext), F = x(o, d, m, E, P);
      var Y = pt !== 0;
      if (typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0) gr(F, m, E, P), O(o, d, F, m);
      else if (Y) {
        E = d.treeContext, d.treeContext = Pt(E, 1, 0);
        try {
          Ie(o, d, F);
        } finally {
          d.treeContext = E;
        }
      } else Ie(o, d, F);
    }
    else if (typeof m == "string") {
      switch (F = d.blockedSegment, P = pe(F.chunks, m, E, o.responseState, F.formatContext), F.lastPushedText = !1, Y = F.formatContext, F.formatContext = U(Y, m, E), Qe(o, d, P), F.formatContext = Y, m) {
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
          F.chunks.push("</", m, ">");
      }
      F.lastPushedText = !1;
    } else {
      switch (m) {
        case ye:
        case ie:
        case q:
        case v:
        case Q:
          Ie(o, d, E.children);
          return;
        case oe:
          Ie(o, d, E.children);
          return;
        case me:
          throw Error(t(343));
        case re:
          e: {
            m = d.blockedBoundary, F = d.blockedSegment, P = E.fallback, E = E.children, Y = /* @__PURE__ */ new Set();
            var ne = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Y, errorDigest: null }, Se = Vt(o, F.chunks.length, ne, F.formatContext, !1, !1);
            F.children.push(Se), F.lastPushedText = !1;
            var Ce = Vt(o, 0, null, F.formatContext, !1, !1);
            Ce.parentFlushed = !0, d.blockedBoundary = ne, d.blockedSegment = Ce;
            try {
              if (Qe(
                o,
                d,
                E
              ), o.responseState.generateStaticMarkup || Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push("<!-- -->"), Ce.status = 1, Tt(ne, Ce), ne.pendingTasks === 0) break e;
            } catch (Oe) {
              Ce.status = 4, ne.forceClientRender = !0, ne.errorDigest = rr(o, Oe);
            } finally {
              d.blockedBoundary = m, d.blockedSegment = F;
            }
            d = tr(o, P, m, Se, Y, d.legacyContext, d.context, d.treeContext), o.pingedTasks.push(d);
          }
          return;
      }
      if (typeof m == "object" && m !== null) switch (m.$$typeof) {
        case ce:
          if (E = x(o, d, m.render, E, F), pt !== 0) {
            m = d.treeContext, d.treeContext = Pt(m, 1, 0);
            try {
              Ie(o, d, E);
            } finally {
              d.treeContext = m;
            }
          } else Ie(o, d, E);
          return;
        case Z:
          m = m.type, E = K(m, E), ge(o, d, m, E, F);
          return;
        case V:
          if (F = E.children, m = m._context, E = E.value, P = m._currentValue2, m._currentValue2 = E, Y = $e, $e = E = { parent: Y, depth: Y === null ? 0 : Y.depth + 1, context: m, parentValue: P, value: E }, d.context = E, Ie(o, d, F), o = $e, o === null) throw Error(t(403));
          E = o.parentValue, o.context._currentValue2 = E === le ? o.context._defaultValue : E, o = $e = o.parent, d.context = o;
          return;
        case _:
          E = E.children, E = E(m._currentValue2), Ie(o, d, E);
          return;
        case fe:
          F = m._init, m = F(m._payload), E = K(m, E), ge(
            o,
            d,
            m,
            E,
            void 0
          );
          return;
      }
      throw Error(t(130, m == null ? m : typeof m, ""));
    }
  }
  function Ie(o, d, m) {
    if (d.node = m, typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case G:
          ge(o, d, m.type, m.props, m.ref);
          return;
        case L:
          throw Error(t(257));
        case fe:
          var E = m._init;
          m = E(m._payload), Ie(o, d, m);
          return;
      }
      if (z(m)) {
        Ne(o, d, m);
        return;
      }
      if (m === null || typeof m != "object" ? E = null : (E = Ae && m[Ae] || m["@@iterator"], E = typeof E == "function" ? E : null), E && (E = E.call(m))) {
        if (m = E.next(), !m.done) {
          var F = [];
          do
            F.push(m.value), m = E.next();
          while (!m.done);
          Ne(o, d, F);
        }
        return;
      }
      throw o = Object.prototype.toString.call(m), Error(t(31, o === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : o));
    }
    typeof m == "string" ? (E = d.blockedSegment, E.lastPushedText = Ke(d.blockedSegment.chunks, m, o.responseState, E.lastPushedText)) : typeof m == "number" && (E = d.blockedSegment, E.lastPushedText = Ke(d.blockedSegment.chunks, "" + m, o.responseState, E.lastPushedText));
  }
  function Ne(o, d, m) {
    for (var E = m.length, F = 0; F < E; F++) {
      var P = d.treeContext;
      d.treeContext = Pt(P, E, F);
      try {
        Qe(o, d, m[F]);
      } finally {
        d.treeContext = P;
      }
    }
  }
  function Qe(o, d, m) {
    var E = d.blockedSegment.formatContext, F = d.legacyContext, P = d.context;
    try {
      return Ie(o, d, m);
    } catch (Se) {
      if (xr(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
        m = Se;
        var Y = d.blockedSegment, ne = Vt(o, Y.chunks.length, null, Y.formatContext, Y.lastPushedText, !0);
        Y.children.push(ne), Y.lastPushedText = !1, o = tr(o, d.node, d.blockedBoundary, ne, d.abortSet, d.legacyContext, d.context, d.treeContext).ping, m.then(o, o), d.blockedSegment.formatContext = E, d.legacyContext = F, d.context = P, ze(P);
      } else throw d.blockedSegment.formatContext = E, d.legacyContext = F, d.context = P, ze(P), Se;
    }
  }
  function lt(o) {
    var d = o.blockedBoundary;
    o = o.blockedSegment, o.status = 3, nr(this, d, o);
  }
  function Fe(o, d, m) {
    var E = o.blockedBoundary;
    o.blockedSegment.status = 3, E === null ? (d.allPendingTasks--, d.status !== 2 && (d.status = 2, d.destination !== null && d.destination.push(null))) : (E.pendingTasks--, E.forceClientRender || (E.forceClientRender = !0, o = m === void 0 ? Error(t(432)) : m, E.errorDigest = d.onError(o), E.parentFlushed && d.clientRenderedBoundaries.push(E)), E.fallbackAbortableTasks.forEach(function(F) {
      return Fe(F, d, m);
    }), E.fallbackAbortableTasks.clear(), d.allPendingTasks--, d.allPendingTasks === 0 && (E = d.onAllReady, E()));
  }
  function Tt(o, d) {
    if (d.chunks.length === 0 && d.children.length === 1 && d.children[0].boundary === null) {
      var m = d.children[0];
      m.id = d.id, m.parentFlushed = !0, m.status === 1 && Tt(o, m);
    } else o.completedSegments.push(d);
  }
  function nr(o, d, m) {
    if (d === null) {
      if (m.parentFlushed) {
        if (o.completedRootSegment !== null) throw Error(t(389));
        o.completedRootSegment = m;
      }
      o.pendingRootTasks--, o.pendingRootTasks === 0 && (o.onShellError = Ft, d = o.onShellReady, d());
    } else d.pendingTasks--, d.forceClientRender || (d.pendingTasks === 0 ? (m.parentFlushed && m.status === 1 && Tt(d, m), d.parentFlushed && o.completedBoundaries.push(d), d.fallbackAbortableTasks.forEach(lt, o), d.fallbackAbortableTasks.clear()) : m.parentFlushed && m.status === 1 && (Tt(d, m), d.completedSegments.length === 1 && d.parentFlushed && o.partialBoundaries.push(d)));
    o.allPendingTasks--, o.allPendingTasks === 0 && (o = o.onAllReady, o());
  }
  function mn(o) {
    if (o.status !== 2) {
      var d = $e, m = wt.current;
      wt.current = yr;
      var E = Lt;
      Lt = o.responseState;
      try {
        var F = o.pingedTasks, P;
        for (P = 0; P < F.length; P++) {
          var Y = F[P], ne = o, Se = Y.blockedSegment;
          if (Se.status === 0) {
            ze(Y.context);
            try {
              Ie(ne, Y, Y.node), ne.responseState.generateStaticMarkup || Se.lastPushedText && Se.textEmbedded && Se.chunks.push("<!-- -->"), Y.abortSet.delete(Y), Se.status = 1, nr(ne, Y.blockedBoundary, Se);
            } catch (Mt) {
              if (xr(), typeof Mt == "object" && Mt !== null && typeof Mt.then == "function") {
                var Ce = Y.ping;
                Mt.then(Ce, Ce);
              } else {
                Y.abortSet.delete(Y), Se.status = 4;
                var Oe = Y.blockedBoundary, ct = Mt, ar = rr(ne, ct);
                if (Oe === null ? b(ne, ct) : (Oe.pendingTasks--, Oe.forceClientRender || (Oe.forceClientRender = !0, Oe.errorDigest = ar, Oe.parentFlushed && ne.clientRenderedBoundaries.push(Oe))), ne.allPendingTasks--, ne.allPendingTasks === 0) {
                  var or = ne.onAllReady;
                  or();
                }
              }
            } finally {
            }
          }
        }
        F.splice(0, P), o.destination !== null && Xr(o, o.destination);
      } catch (Mt) {
        rr(o, Mt), b(o, Mt);
      } finally {
        Lt = E, wt.current = m, m === yr && ze(d);
      }
    }
  }
  function Fr(o, d, m) {
    switch (m.parentFlushed = !0, m.status) {
      case 0:
        var E = m.id = o.nextSegmentId++;
        return m.lastPushedText = !1, m.textEmbedded = !1, o = o.responseState, d.push('<template id="'), d.push(o.placeholderPrefix), o = E.toString(16), d.push(o), d.push('"></template>');
      case 1:
        m.status = 2;
        var F = !0;
        E = m.chunks;
        var P = 0;
        m = m.children;
        for (var Y = 0; Y < m.length; Y++) {
          for (F = m[Y]; P < F.index; P++) d.push(E[P]);
          F = Mr(o, d, F);
        }
        for (; P < E.length - 1; P++) d.push(E[P]);
        return P < E.length && (F = d.push(E[P])), F;
      default:
        throw Error(t(390));
    }
  }
  function Mr(o, d, m) {
    var E = m.boundary;
    if (E === null) return Fr(o, d, m);
    if (E.parentFlushed = !0, E.forceClientRender) return o.responseState.generateStaticMarkup || (E = E.errorDigest, d.push("<!--$!-->"), d.push("<template"), E && (d.push(' data-dgst="'), E = C(E), d.push(E), d.push('"')), d.push("></template>")), Fr(o, d, m), o = o.responseState.generateStaticMarkup ? !0 : d.push("<!--/$-->"), o;
    if (0 < E.pendingTasks) {
      E.rootSegmentID = o.nextSegmentId++, 0 < E.completedSegments.length && o.partialBoundaries.push(E);
      var F = o.responseState, P = F.nextSuspenseID++;
      return F = F.boundaryPrefix + P.toString(16), E = E.id = F, Te(d, o.responseState, E), Fr(o, d, m), d.push("<!--/$-->");
    }
    if (E.byteSize > o.progressiveChunkSize) return E.rootSegmentID = o.nextSegmentId++, o.completedBoundaries.push(E), Te(d, o.responseState, E.id), Fr(o, d, m), d.push("<!--/$-->");
    if (o.responseState.generateStaticMarkup || d.push("<!--$-->"), m = E.completedSegments, m.length !== 1) throw Error(t(391));
    return Mr(o, d, m[0]), o = o.responseState.generateStaticMarkup ? !0 : d.push("<!--/$-->"), o;
  }
  function yn(o, d, m) {
    return de(d, o.responseState, m.formatContext, m.id), Mr(o, d, m), Je(d, m.formatContext);
  }
  function bn(o, d, m) {
    for (var E = m.completedSegments, F = 0; F < E.length; F++) vn(o, d, m, E[F]);
    if (E.length = 0, o = o.responseState, E = m.id, m = m.rootSegmentID, d.push(o.startInlineScript), o.sentCompleteBoundaryFunction ? d.push('$RC("') : (o.sentCompleteBoundaryFunction = !0, d.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), E === null) throw Error(t(395));
    return m = m.toString(16), d.push(E), d.push('","'), d.push(o.segmentPrefix), d.push(m), d.push('")<\/script>');
  }
  function vn(o, d, m, E) {
    if (E.status === 2) return !0;
    var F = E.id;
    if (F === -1) {
      if ((E.id = m.rootSegmentID) === -1) throw Error(t(392));
      return yn(o, d, E);
    }
    return yn(o, d, E), o = o.responseState, d.push(o.startInlineScript), o.sentCompleteSegmentFunction ? d.push('$RS("') : (o.sentCompleteSegmentFunction = !0, d.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), d.push(o.segmentPrefix), F = F.toString(16), d.push(F), d.push('","'), d.push(o.placeholderPrefix), d.push(F), d.push('")<\/script>');
  }
  function Xr(o, d) {
    try {
      var m = o.completedRootSegment;
      if (m !== null && o.pendingRootTasks === 0) {
        Mr(o, d, m), o.completedRootSegment = null;
        var E = o.responseState.bootstrapChunks;
        for (m = 0; m < E.length - 1; m++) d.push(E[m]);
        m < E.length && d.push(E[m]);
      }
      var F = o.clientRenderedBoundaries, P;
      for (P = 0; P < F.length; P++) {
        var Y = F[P];
        E = d;
        var ne = o.responseState, Se = Y.id, Ce = Y.errorDigest, Oe = Y.errorMessage, ct = Y.errorComponentStack;
        if (E.push(ne.startInlineScript), ne.sentClientRenderFunction ? E.push('$RX("') : (ne.sentClientRenderFunction = !0, E.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Se === null) throw Error(t(395));
        if (E.push(Se), E.push('"'), Ce || Oe || ct) {
          E.push(",");
          var ar = De(Ce || "");
          E.push(ar);
        }
        if (Oe || ct) {
          E.push(",");
          var or = De(Oe || "");
          E.push(or);
        }
        if (ct) {
          E.push(",");
          var Mt = De(ct);
          E.push(Mt);
        }
        if (!E.push(")<\/script>")) {
          o.destination = null, P++, F.splice(0, P);
          return;
        }
      }
      F.splice(0, P);
      var Ur = o.completedBoundaries;
      for (P = 0; P < Ur.length; P++) if (!bn(o, d, Ur[P])) {
        o.destination = null, P++, Ur.splice(0, P);
        return;
      }
      Ur.splice(0, P);
      var Sr = o.partialBoundaries;
      for (P = 0; P < Sr.length; P++) {
        var xn = Sr[P];
        e: {
          F = o, Y = d;
          var zr = xn.completedSegments;
          for (ne = 0; ne < zr.length; ne++) if (!vn(F, Y, xn, zr[ne])) {
            ne++, zr.splice(0, ne);
            var Gn = !1;
            break e;
          }
          zr.splice(0, ne), Gn = !0;
        }
        if (!Gn) {
          o.destination = null, P++, Sr.splice(0, P);
          return;
        }
      }
      Sr.splice(0, P);
      var Lr = o.completedBoundaries;
      for (P = 0; P < Lr.length; P++) if (!bn(o, d, Lr[P])) {
        o.destination = null, P++, Lr.splice(0, P);
        return;
      }
      Lr.splice(0, P);
    } finally {
      o.allPendingTasks === 0 && o.pingedTasks.length === 0 && o.clientRenderedBoundaries.length === 0 && o.completedBoundaries.length === 0 && d.push(null);
    }
  }
  function Wn(o, d) {
    try {
      var m = o.abortableTasks;
      m.forEach(function(E) {
        return Fe(E, o, d);
      }), m.clear(), o.destination !== null && Xr(o, o.destination);
    } catch (E) {
      rr(o, E), b(o, E);
    }
  }
  function Qn() {
  }
  function wn(o, d, m, E) {
    var F = !1, P = null, Y = "", ne = { push: function(Ce) {
      return Ce !== null && (Y += Ce), !0;
    }, destroy: function(Ce) {
      F = !0, P = Ce;
    } }, Se = !1;
    if (o = Ar(o, qe(m, d ? d.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Qn, void 0, function() {
      Se = !0;
    }), mn(o), Wn(o, E), o.status === 1) o.status = 2, ne.destroy(o.fatalError);
    else if (o.status !== 2 && o.destination === null) {
      o.destination = ne;
      try {
        Xr(o, ne);
      } catch (Ce) {
        rr(o, Ce), b(o, Ce);
      }
    }
    if (F) throw P;
    if (!Se) throw Error(t(426));
    return Y;
  }
  return Gr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Gr.renderToStaticMarkup = function(o, d) {
    return wn(o, d, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Gr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Gr.renderToString = function(o, d) {
    return wn(o, d, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Gr.version = "18.3.1", Gr;
}
var ua = {}, ks;
function Ef() {
  if (ks) return ua;
  ks = 1;
  var e = ht;
  function t(s) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, g = 1; g < arguments.length; g++) u += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + s + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(s, u) {
    if (u.length !== 0) if (512 < u.length) 0 < n && (s.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), s.enqueue(u);
    else {
      var g = r.length - n;
      g < u.length && (g === 0 ? s.enqueue(r) : (r.set(u.subarray(0, g), n), s.enqueue(r), u = u.subarray(g)), r = new Uint8Array(512), n = 0), r.set(u, n), n += u.length;
    }
  }
  function i(s, u) {
    return a(s, u), !0;
  }
  function l(s) {
    r && 0 < n && (s.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var f = new TextEncoder();
  function h(s) {
    return f.encode(s);
  }
  function p(s) {
    return f.encode(s);
  }
  function y(s, u) {
    typeof s.error == "function" ? s.error(u) : s.close();
  }
  var S = Object.prototype.hasOwnProperty, N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, C = {};
  function w(s) {
    return S.call(C, s) ? !0 : S.call(W, s) ? !1 : N.test(s) ? C[s] = !0 : (W[s] = !0, !1);
  }
  function k(s, u, g, A, B, D, J) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = A, this.attributeNamespace = B, this.mustUseProperty = g, this.propertyName = s, this.type = u, this.sanitizeURL = D, this.removeEmptyString = J;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    z[s] = new k(s, 0, !1, s, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var u = s[0];
    z[u] = new k(u, 1, !1, s[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    z[s] = new k(s, 2, !1, s.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    z[s] = new k(s, 2, !1, s, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    z[s] = new k(s, 3, !1, s.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    z[s] = new k(s, 3, !0, s, null, !1, !1);
  }), ["capture", "download"].forEach(function(s) {
    z[s] = new k(s, 4, !1, s, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    z[s] = new k(s, 6, !1, s, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(s) {
    z[s] = new k(s, 5, !1, s.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function U(s) {
    return s[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var u = s.replace(
      j,
      U
    );
    z[u] = new k(u, 1, !1, s, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var u = s.replace(j, U);
    z[u] = new k(u, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var u = s.replace(j, U);
    z[u] = new k(u, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    z[s] = new k(s, 1, !1, s.toLowerCase(), null, !1, !1);
  }), z.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    z[s] = new k(s, 1, !1, s.toLowerCase(), null, !0, !0);
  });
  var M = {
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
  Object.keys(M).forEach(function(s) {
    R.forEach(function(u) {
      u = u + s.charAt(0).toUpperCase() + s.substring(1), M[u] = M[s];
    });
  });
  var ae = /["'&<>]/;
  function ue(s) {
    if (typeof s == "boolean" || typeof s == "number") return "" + s;
    s = "" + s;
    var u = ae.exec(s);
    if (u) {
      var g = "", A, B = 0;
      for (A = u.index; A < s.length; A++) {
        switch (s.charCodeAt(A)) {
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
        B !== A && (g += s.substring(B, A)), B = A + 1, g += u;
      }
      s = B !== A ? g + s.substring(B, A) : g;
    }
    return s;
  }
  var ee = /([A-Z])/g, se = /^ms-/, ve = Array.isArray, Le = p("<script>"), he = p("<\/script>"), pe = p('<script src="'), Te = p('<script type="module" src="'), de = p('" async=""><\/script>'), Je = /(<\/|<)(s)(cript)/gi;
  function Ue(s, u, g, A) {
    return "" + u + (g === "s" ? "\\u0073" : "\\u0053") + A;
  }
  function De(s, u, g, A, B) {
    s = s === void 0 ? "" : s, u = u === void 0 ? Le : p('<script nonce="' + ue(u) + '">');
    var D = [];
    if (g !== void 0 && D.push(u, h(("" + g).replace(Je, Ue)), he), A !== void 0) for (g = 0; g < A.length; g++) D.push(pe, h(ue(A[g])), de);
    if (B !== void 0) for (A = 0; A < B.length; A++) D.push(Te, h(ue(B[A])), de);
    return { bootstrapChunks: D, startInlineScript: u, placeholderPrefix: p(s + "P:"), segmentPrefix: p(s + "S:"), boundaryPrefix: s + "B:", idPrefix: s, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function qe(s, u) {
    return { insertionMode: s, selectedValue: u };
  }
  function Ke(s) {
    return qe(s === "http://www.w3.org/2000/svg" ? 2 : s === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Ze(s, u, g) {
    switch (u) {
      case "select":
        return qe(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return qe(2, null);
      case "math":
        return qe(3, null);
      case "foreignObject":
        return qe(1, null);
      case "table":
        return qe(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return qe(5, null);
      case "colgroup":
        return qe(7, null);
      case "tr":
        return qe(6, null);
    }
    return 4 <= s.insertionMode || s.insertionMode === 0 ? qe(1, null) : s;
  }
  var G = p("<!-- -->");
  function L(s, u, g, A) {
    return u === "" ? A : (A && s.push(G), s.push(h(ue(u))), !0);
  }
  var Q = /* @__PURE__ */ new Map(), q = p(' style="'), v = p(":"), V = p(";");
  function _(s, u, g) {
    if (typeof g != "object") throw Error(t(62));
    u = !0;
    for (var A in g) if (S.call(g, A)) {
      var B = g[A];
      if (B != null && typeof B != "boolean" && B !== "") {
        if (A.indexOf("--") === 0) {
          var D = h(ue(A));
          B = h(ue(("" + B).trim()));
        } else {
          D = A;
          var J = Q.get(D);
          J !== void 0 || (J = p(ue(D.replace(ee, "-$1").toLowerCase().replace(se, "-ms-"))), Q.set(D, J)), D = J, B = typeof B == "number" ? B === 0 || S.call(M, A) ? h("" + B) : h(B + "px") : h(ue(("" + B).trim()));
        }
        u ? (u = !1, s.push(q, D, v, B)) : s.push(V, D, v, B);
      }
    }
    u || s.push(oe);
  }
  var ce = p(" "), re = p('="'), oe = p('"'), Z = p('=""');
  function fe(s, u, g, A) {
    switch (g) {
      case "style":
        _(s, u, A);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (u = z.hasOwnProperty(g) ? z[g] : null, u !== null) {
        switch (typeof A) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (g = h(u.attributeName), u.type) {
          case 3:
            A && s.push(ce, g, Z);
            break;
          case 4:
            A === !0 ? s.push(ce, g, Z) : A !== !1 && s.push(ce, g, re, h(ue(A)), oe);
            break;
          case 5:
            isNaN(A) || s.push(ce, g, re, h(ue(A)), oe);
            break;
          case 6:
            !isNaN(A) && 1 <= A && s.push(ce, g, re, h(ue(A)), oe);
            break;
          default:
            u.sanitizeURL && (A = "" + A), s.push(ce, g, re, h(ue(A)), oe);
        }
      } else if (w(g)) {
        switch (typeof A) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = g.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        s.push(ce, h(g), re, h(ue(A)), oe);
      }
    }
  }
  var me = p(">"), ie = p("/>");
  function ye(s, u, g) {
    if (u != null) {
      if (g != null) throw Error(t(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(t(61));
      u = u.__html, u != null && s.push(h("" + u));
    }
  }
  function le(s) {
    var u = "";
    return e.Children.forEach(s, function(g) {
      g != null && (u += g);
    }), u;
  }
  var Ae = p(' selected=""');
  function He(s, u, g, A) {
    s.push(ke(g));
    var B = g = null, D;
    for (D in u) if (S.call(u, D)) {
      var J = u[D];
      if (J != null) switch (D) {
        case "children":
          g = J;
          break;
        case "dangerouslySetInnerHTML":
          B = J;
          break;
        default:
          fe(s, A, D, J);
      }
    }
    return s.push(me), ye(s, B, g), typeof g == "string" ? (s.push(h(ue(g))), null) : g;
  }
  var we = p(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, $e = /* @__PURE__ */ new Map();
  function ke(s) {
    var u = $e.get(s);
    if (u === void 0) {
      if (!ot.test(s)) throw Error(t(65, s));
      u = p("<" + s), $e.set(s, u);
    }
    return u;
  }
  var $ = p("<!DOCTYPE html>");
  function be(s, u, g, A, B) {
    switch (u) {
      case "select":
        s.push(ke("select"));
        var D = null, J = null;
        for (Pe in g) if (S.call(g, Pe)) {
          var te = g[Pe];
          if (te != null) switch (Pe) {
            case "children":
              D = te;
              break;
            case "dangerouslySetInnerHTML":
              J = te;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(s, A, Pe, te);
          }
        }
        return s.push(me), ye(s, J, D), D;
      case "option":
        J = B.selectedValue, s.push(ke("option"));
        var Ee = te = null, Me = null, Pe = null;
        for (D in g) if (S.call(g, D)) {
          var at = g[D];
          if (at != null) switch (D) {
            case "children":
              te = at;
              break;
            case "selected":
              Me = at;
              break;
            case "dangerouslySetInnerHTML":
              Pe = at;
              break;
            case "value":
              Ee = at;
            default:
              fe(s, A, D, at);
          }
        }
        if (J != null) if (g = Ee !== null ? "" + Ee : le(te), ve(J)) {
          for (A = 0; A < J.length; A++)
            if ("" + J[A] === g) {
              s.push(Ae);
              break;
            }
        } else "" + J === g && s.push(Ae);
        else Me && s.push(Ae);
        return s.push(me), ye(s, Pe, te), te;
      case "textarea":
        s.push(ke("textarea")), Pe = J = D = null;
        for (te in g) if (S.call(g, te) && (Ee = g[te], Ee != null)) switch (te) {
          case "children":
            Pe = Ee;
            break;
          case "value":
            D = Ee;
            break;
          case "defaultValue":
            J = Ee;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            fe(s, A, te, Ee);
        }
        if (D === null && J !== null && (D = J), s.push(me), Pe != null) {
          if (D != null) throw Error(t(92));
          if (ve(Pe) && 1 < Pe.length) throw Error(t(93));
          D = "" + Pe;
        }
        return typeof D == "string" && D[0] === `
` && s.push(we), D !== null && s.push(h(ue("" + D))), null;
      case "input":
        s.push(ke("input")), Ee = Pe = te = D = null;
        for (J in g) if (S.call(g, J) && (Me = g[J], Me != null)) switch (J) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            Ee = Me;
            break;
          case "defaultValue":
            te = Me;
            break;
          case "checked":
            Pe = Me;
            break;
          case "value":
            D = Me;
            break;
          default:
            fe(s, A, J, Me);
        }
        return Pe !== null ? fe(
          s,
          A,
          "checked",
          Pe
        ) : Ee !== null && fe(s, A, "checked", Ee), D !== null ? fe(s, A, "value", D) : te !== null && fe(s, A, "value", te), s.push(ie), null;
      case "menuitem":
        s.push(ke("menuitem"));
        for (var zt in g) if (S.call(g, zt) && (D = g[zt], D != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            fe(s, A, zt, D);
        }
        return s.push(me), null;
      case "title":
        s.push(ke("title")), D = null;
        for (at in g) if (S.call(g, at) && (J = g[at], J != null)) switch (at) {
          case "children":
            D = J;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            fe(s, A, at, J);
        }
        return s.push(me), D;
      case "listing":
      case "pre":
        s.push(ke(u)), J = D = null;
        for (Ee in g) if (S.call(g, Ee) && (te = g[Ee], te != null)) switch (Ee) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            J = te;
            break;
          default:
            fe(s, A, Ee, te);
        }
        if (s.push(me), J != null) {
          if (D != null) throw Error(t(60));
          if (typeof J != "object" || !("__html" in J)) throw Error(t(61));
          g = J.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? s.push(we, h(g)) : s.push(h("" + g)));
        }
        return typeof D == "string" && D[0] === `
` && s.push(we), D;
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
        s.push(ke(u));
        for (var ir in g) if (S.call(g, ir) && (D = g[ir], D != null)) switch (ir) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, u));
          default:
            fe(s, A, ir, D);
        }
        return s.push(ie), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return He(s, g, u, A);
      case "html":
        return B.insertionMode === 0 && s.push($), He(s, g, u, A);
      default:
        if (u.indexOf("-") === -1 && typeof g.is != "string") return He(s, g, u, A);
        s.push(ke(u)), J = D = null;
        for (Me in g) if (S.call(g, Me) && (te = g[Me], te != null)) switch (Me) {
          case "children":
            D = te;
            break;
          case "dangerouslySetInnerHTML":
            J = te;
            break;
          case "style":
            _(s, A, te);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(Me) && typeof te != "function" && typeof te != "symbol" && s.push(ce, h(Me), re, h(ue(te)), oe);
        }
        return s.push(me), ye(s, J, D), D;
    }
  }
  var it = p("</"), rt = p(">"), ze = p('<template id="'), hr = p('"></template>'), gr = p("<!--$-->"), vr = p('<!--$?--><template id="'), Pt = p('"></template>'), Wt = p("<!--$!-->"), Dt = p("<!--/$-->"), jt = p("<template"), ut = p('"'), bt = p(' data-dgst="');
  p(' data-msg="'), p(' data-stck="');
  var $t = p("></template>");
  function gt(s, u, g) {
    if (a(s, vr), g === null) throw Error(t(395));
    return a(s, g), i(s, Pt);
  }
  var wr = p('<div hidden id="'), ft = p('">'), We = p("</div>"), Xt = p('<svg aria-hidden="true" style="display:none" id="'), Re = p('">'), pt = p("</svg>"), Ot = p('<math aria-hidden="true" style="display:none" id="'), Qt = p('">'), vt = p("</math>"), mr = p('<table hidden id="'), er = p('">'), xr = p("</table>"), _t = p('<table hidden><tbody id="'), Gt = p('">'), _r = p("</tbody></table>"), st = p('<table hidden><tr id="'), Bt = p('">'), qt = p("</tr></table>"), yr = p('<table hidden><colgroup id="'), Lt = p('">'), wt = p("</colgroup></table>");
  function dt(s, u, g, A) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a(s, wr), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, ft);
      case 2:
        return a(s, Xt), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, Re);
      case 3:
        return a(s, Ot), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, Qt);
      case 4:
        return a(s, mr), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, er);
      case 5:
        return a(s, _t), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, Gt);
      case 6:
        return a(s, st), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, Bt);
      case 7:
        return a(
          s,
          yr
        ), a(s, u.segmentPrefix), a(s, h(A.toString(16))), i(s, Lt);
      default:
        throw Error(t(397));
    }
  }
  function Ft(s, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return i(s, We);
      case 2:
        return i(s, pt);
      case 3:
        return i(s, vt);
      case 4:
        return i(s, xr);
      case 5:
        return i(s, _r);
      case 6:
        return i(s, qt);
      case 7:
        return i(s, wt);
      default:
        throw Error(t(397));
    }
  }
  var Ar = p('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), tr = p('$RS("'), Vt = p('","'), rr = p('")<\/script>'), b = p('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), x = p('$RC("'), O = p('","'), K = p('")<\/script>'), ge = p('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ie = p('$RX("'), Ne = p('"'), Qe = p(")<\/script>"), lt = p(","), Fe = /[<\u2028\u2029]/g;
  function Tt(s) {
    return JSON.stringify(s).replace(Fe, function(u) {
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
  var nr = Object.assign, mn = Symbol.for("react.element"), Fr = Symbol.for("react.portal"), Mr = Symbol.for("react.fragment"), yn = Symbol.for("react.strict_mode"), bn = Symbol.for("react.profiler"), vn = Symbol.for("react.provider"), Xr = Symbol.for("react.context"), Wn = Symbol.for("react.forward_ref"), Qn = Symbol.for("react.suspense"), wn = Symbol.for("react.suspense_list"), o = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), m = Symbol.for("react.scope"), E = Symbol.for("react.debug_trace_mode"), F = Symbol.for("react.legacy_hidden"), P = Symbol.for("react.default_value"), Y = Symbol.iterator;
  function ne(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case Mr:
        return "Fragment";
      case Fr:
        return "Portal";
      case bn:
        return "Profiler";
      case yn:
        return "StrictMode";
      case Qn:
        return "Suspense";
      case wn:
        return "SuspenseList";
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case Xr:
        return (s.displayName || "Context") + ".Consumer";
      case vn:
        return (s._context.displayName || "Context") + ".Provider";
      case Wn:
        var u = s.render;
        return s = s.displayName, s || (s = u.displayName || u.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case o:
        return u = s.displayName || null, u !== null ? u : ne(s.type) || "Memo";
      case d:
        u = s._payload, s = s._init;
        try {
          return ne(s(u));
        } catch {
        }
    }
    return null;
  }
  var Se = {};
  function Ce(s, u) {
    if (s = s.contextTypes, !s) return Se;
    var g = {}, A;
    for (A in s) g[A] = u[A];
    return g;
  }
  var Oe = null;
  function ct(s, u) {
    if (s !== u) {
      s.context._currentValue = s.parentValue, s = s.parent;
      var g = u.parent;
      if (s === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        ct(s, g);
      }
      u.context._currentValue = u.value;
    }
  }
  function ar(s) {
    s.context._currentValue = s.parentValue, s = s.parent, s !== null && ar(s);
  }
  function or(s) {
    var u = s.parent;
    u !== null && or(u), s.context._currentValue = s.value;
  }
  function Mt(s, u) {
    if (s.context._currentValue = s.parentValue, s = s.parent, s === null) throw Error(t(402));
    s.depth === u.depth ? ct(s, u) : Mt(s, u);
  }
  function Ur(s, u) {
    var g = u.parent;
    if (g === null) throw Error(t(402));
    s.depth === g.depth ? ct(s, g) : Ur(s, g), u.context._currentValue = u.value;
  }
  function Sr(s) {
    var u = Oe;
    u !== s && (u === null ? or(s) : s === null ? ar(u) : u.depth === s.depth ? ct(u, s) : u.depth > s.depth ? Mt(u, s) : Ur(u, s), Oe = s);
  }
  var xn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(s, u) {
    s = s._reactInternals, s.queue !== null && s.queue.push(u);
  }, enqueueReplaceState: function(s, u) {
    s = s._reactInternals, s.replace = !0, s.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function zr(s, u, g, A) {
    var B = s.state !== void 0 ? s.state : null;
    s.updater = xn, s.props = g, s.state = B;
    var D = { queue: [], replace: !1 };
    s._reactInternals = D;
    var J = u.contextType;
    if (s.context = typeof J == "object" && J !== null ? J._currentValue : A, J = u.getDerivedStateFromProps, typeof J == "function" && (J = J(g, B), B = J == null ? B : nr({}, B, J), s.state = B), typeof u.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function")) if (u = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), u !== s.state && xn.enqueueReplaceState(s, s.state, null), D.queue !== null && 0 < D.queue.length) if (u = D.queue, J = D.replace, D.queue = null, D.replace = !1, J && u.length === 1) s.state = u[0];
    else {
      for (D = J ? u[0] : s.state, B = !0, J = J ? 1 : 0; J < u.length; J++) {
        var te = u[J];
        te = typeof te == "function" ? te.call(s, D, g, A) : te, te != null && (B ? (B = !1, D = nr({}, D, te)) : nr(D, te));
      }
      s.state = D;
    }
    else D.queue = null;
  }
  var Gn = { id: 1, overflow: "" };
  function Lr(s, u, g) {
    var A = s.id;
    s = s.overflow;
    var B = 32 - qn(A) - 1;
    A &= ~(1 << B), g += 1;
    var D = 32 - qn(u) + B;
    if (30 < D) {
      var J = B - B % 5;
      return D = (A & (1 << J) - 1).toString(32), A >>= J, B -= J, { id: 1 << 32 - qn(u) + B | g << B | A, overflow: D + s };
    }
    return { id: 1 << D | g << B | A, overflow: s };
  }
  var qn = Math.clz32 ? Math.clz32 : Qc, Hc = Math.log, Wc = Math.LN2;
  function Qc(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (Hc(s) / Wc | 0) | 0;
  }
  function Gc(s, u) {
    return s === u && (s !== 0 || 1 / s === 1 / u) || s !== s && u !== u;
  }
  var qc = typeof Object.is == "function" ? Object.is : Gc, Er = null, qa = null, Vn = null, nt = null, An = !1, Yn = !1, Sn = 0, Nr = null, Jn = 0;
  function Hr() {
    if (Er === null) throw Error(t(321));
    return Er;
  }
  function ki() {
    if (0 < Jn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Va() {
    return nt === null ? Vn === null ? (An = !1, Vn = nt = ki()) : (An = !0, nt = Vn) : nt.next === null ? (An = !1, nt = nt.next = ki()) : (An = !0, nt = nt.next), nt;
  }
  function Ya() {
    qa = Er = null, Yn = !1, Vn = null, Jn = 0, nt = Nr = null;
  }
  function Ti(s, u) {
    return typeof u == "function" ? u(s) : u;
  }
  function Ri(s, u, g) {
    if (Er = Hr(), nt = Va(), An) {
      var A = nt.queue;
      if (u = A.dispatch, Nr !== null && (g = Nr.get(A), g !== void 0)) {
        Nr.delete(A), A = nt.memoizedState;
        do
          A = s(A, g.action), g = g.next;
        while (g !== null);
        return nt.memoizedState = A, [A, u];
      }
      return [nt.memoizedState, u];
    }
    return s = s === Ti ? typeof u == "function" ? u() : u : g !== void 0 ? g(u) : u, nt.memoizedState = s, s = nt.queue = { last: null, dispatch: null }, s = s.dispatch = Vc.bind(null, Er, s), [nt.memoizedState, s];
  }
  function Ii(s, u) {
    if (Er = Hr(), nt = Va(), u = u === void 0 ? null : u, nt !== null) {
      var g = nt.memoizedState;
      if (g !== null && u !== null) {
        var A = g[1];
        e: if (A === null) A = !1;
        else {
          for (var B = 0; B < A.length && B < u.length; B++) if (!qc(u[B], A[B])) {
            A = !1;
            break e;
          }
          A = !0;
        }
        if (A) return g[0];
      }
    }
    return s = s(), nt.memoizedState = [s, u], s;
  }
  function Vc(s, u, g) {
    if (25 <= Jn) throw Error(t(301));
    if (s === Er) if (Yn = !0, s = { action: g, next: null }, Nr === null && (Nr = /* @__PURE__ */ new Map()), g = Nr.get(u), g === void 0) Nr.set(u, s);
    else {
      for (u = g; u.next !== null; ) u = u.next;
      u.next = s;
    }
  }
  function Yc() {
    throw Error(t(394));
  }
  function Kn() {
  }
  var Oi = { readContext: function(s) {
    return s._currentValue;
  }, useContext: function(s) {
    return Hr(), s._currentValue;
  }, useMemo: Ii, useReducer: Ri, useRef: function(s) {
    Er = Hr(), nt = Va();
    var u = nt.memoizedState;
    return u === null ? (s = { current: s }, nt.memoizedState = s) : u;
  }, useState: function(s) {
    return Ri(Ti, s);
  }, useInsertionEffect: Kn, useLayoutEffect: function() {
  }, useCallback: function(s, u) {
    return Ii(function() {
      return s;
    }, u);
  }, useImperativeHandle: Kn, useEffect: Kn, useDebugValue: Kn, useDeferredValue: function(s) {
    return Hr(), s;
  }, useTransition: function() {
    return Hr(), [!1, Yc];
  }, useId: function() {
    var s = qa.treeContext, u = s.overflow;
    s = s.id, s = (s & ~(1 << 32 - qn(s) - 1)).toString(32) + u;
    var g = Zn;
    if (g === null) throw Error(t(404));
    return u = Sn++, s = ":" + g.idPrefix + "R" + s, 0 < u && (s += "H" + u.toString(32)), s + ":";
  }, useMutableSource: function(s, u) {
    return Hr(), u(s._source);
  }, useSyncExternalStore: function(s, u, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, Zn = null, Ja = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Jc(s) {
    return console.error(s), null;
  }
  function En() {
  }
  function Kc(s, u, g, A, B, D, J, te, Ee) {
    var Me = [], Pe = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: A === void 0 ? 12800 : A, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Pe, pingedTasks: Me, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: B === void 0 ? Jc : B, onAllReady: D === void 0 ? En : D, onShellReady: J === void 0 ? En : J, onShellError: te === void 0 ? En : te, onFatalError: Ee === void 0 ? En : Ee }, g = $n(u, 0, null, g, !1, !1), g.parentFlushed = !0, s = Ka(u, s, null, g, Pe, Se, null, Gn), Me.push(s), u;
  }
  function Ka(s, u, g, A, B, D, J, te) {
    s.allPendingTasks++, g === null ? s.pendingRootTasks++ : g.pendingTasks++;
    var Ee = { node: u, ping: function() {
      var Me = s.pingedTasks;
      Me.push(Ee), Me.length === 1 && Bi(s);
    }, blockedBoundary: g, blockedSegment: A, abortSet: B, legacyContext: D, context: J, treeContext: te };
    return B.add(Ee), Ee;
  }
  function $n(s, u, g, A, B, D) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: A, boundary: g, lastPushedText: B, textEmbedded: D };
  }
  function Cn(s, u) {
    if (s = s.onError(u), s != null && typeof s != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
    return s;
  }
  function Xn(s, u) {
    var g = s.onShellError;
    g(u), g = s.onFatalError, g(u), s.destination !== null ? (s.status = 2, y(s.destination, u)) : (s.status = 1, s.fatalError = u);
  }
  function _i(s, u, g, A, B) {
    for (Er = {}, qa = u, Sn = 0, s = g(A, B); Yn; ) Yn = !1, Sn = 0, Jn += 1, nt = null, s = g(A, B);
    return Ya(), s;
  }
  function Li(s, u, g, A) {
    var B = g.render(), D = A.childContextTypes;
    if (D != null) {
      var J = u.legacyContext;
      if (typeof g.getChildContext != "function") A = J;
      else {
        g = g.getChildContext();
        for (var te in g) if (!(te in D)) throw Error(t(108, ne(A) || "Unknown", te));
        A = nr({}, J, g);
      }
      u.legacyContext = A, Ut(s, u, B), u.legacyContext = J;
    } else Ut(s, u, B);
  }
  function Ni(s, u) {
    if (s && s.defaultProps) {
      u = nr({}, u), s = s.defaultProps;
      for (var g in s) u[g] === void 0 && (u[g] = s[g]);
      return u;
    }
    return u;
  }
  function Za(s, u, g, A, B) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      B = Ce(g, u.legacyContext);
      var D = g.contextType;
      D = new g(A, typeof D == "object" && D !== null ? D._currentValue : B), zr(D, g, A, B), Li(s, u, D, g);
    } else {
      D = Ce(g, u.legacyContext), B = _i(s, u, g, A, D);
      var J = Sn !== 0;
      if (typeof B == "object" && B !== null && typeof B.render == "function" && B.$$typeof === void 0) zr(B, g, A, D), Li(s, u, B, g);
      else if (J) {
        A = u.treeContext, u.treeContext = Lr(A, 1, 0);
        try {
          Ut(s, u, B);
        } finally {
          u.treeContext = A;
        }
      } else Ut(s, u, B);
    }
    else if (typeof g == "string") {
      switch (B = u.blockedSegment, D = be(B.chunks, g, A, s.responseState, B.formatContext), B.lastPushedText = !1, J = B.formatContext, B.formatContext = Ze(J, g, A), $a(s, u, D), B.formatContext = J, g) {
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
          B.chunks.push(it, h(g), rt);
      }
      B.lastPushedText = !1;
    } else {
      switch (g) {
        case F:
        case E:
        case yn:
        case bn:
        case Mr:
          Ut(s, u, A.children);
          return;
        case wn:
          Ut(s, u, A.children);
          return;
        case m:
          throw Error(t(343));
        case Qn:
          e: {
            g = u.blockedBoundary, B = u.blockedSegment, D = A.fallback, A = A.children, J = /* @__PURE__ */ new Set();
            var te = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: J, errorDigest: null }, Ee = $n(s, B.chunks.length, te, B.formatContext, !1, !1);
            B.children.push(Ee), B.lastPushedText = !1;
            var Me = $n(s, 0, null, B.formatContext, !1, !1);
            Me.parentFlushed = !0, u.blockedBoundary = te, u.blockedSegment = Me;
            try {
              if ($a(
                s,
                u,
                A
              ), Me.lastPushedText && Me.textEmbedded && Me.chunks.push(G), Me.status = 1, ea(te, Me), te.pendingTasks === 0) break e;
            } catch (Pe) {
              Me.status = 4, te.forceClientRender = !0, te.errorDigest = Cn(s, Pe);
            } finally {
              u.blockedBoundary = g, u.blockedSegment = B;
            }
            u = Ka(s, D, g, Ee, J, u.legacyContext, u.context, u.treeContext), s.pingedTasks.push(u);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case Wn:
          if (A = _i(s, u, g.render, A, B), Sn !== 0) {
            g = u.treeContext, u.treeContext = Lr(g, 1, 0);
            try {
              Ut(s, u, A);
            } finally {
              u.treeContext = g;
            }
          } else Ut(s, u, A);
          return;
        case o:
          g = g.type, A = Ni(g, A), Za(s, u, g, A, B);
          return;
        case vn:
          if (B = A.children, g = g._context, A = A.value, D = g._currentValue, g._currentValue = A, J = Oe, Oe = A = { parent: J, depth: J === null ? 0 : J.depth + 1, context: g, parentValue: D, value: A }, u.context = A, Ut(s, u, B), s = Oe, s === null) throw Error(t(403));
          A = s.parentValue, s.context._currentValue = A === P ? s.context._defaultValue : A, s = Oe = s.parent, u.context = s;
          return;
        case Xr:
          A = A.children, A = A(g._currentValue), Ut(s, u, A);
          return;
        case d:
          B = g._init, g = B(g._payload), A = Ni(g, A), Za(s, u, g, A, void 0);
          return;
      }
      throw Error(t(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function Ut(s, u, g) {
    if (u.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mn:
          Za(s, u, g.type, g.props, g.ref);
          return;
        case Fr:
          throw Error(t(257));
        case d:
          var A = g._init;
          g = A(g._payload), Ut(s, u, g);
          return;
      }
      if (ve(g)) {
        Pi(s, u, g);
        return;
      }
      if (g === null || typeof g != "object" ? A = null : (A = Y && g[Y] || g["@@iterator"], A = typeof A == "function" ? A : null), A && (A = A.call(g))) {
        if (g = A.next(), !g.done) {
          var B = [];
          do
            B.push(g.value), g = A.next();
          while (!g.done);
          Pi(s, u, B);
        }
        return;
      }
      throw s = Object.prototype.toString.call(g), Error(t(31, s === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : s));
    }
    typeof g == "string" ? (A = u.blockedSegment, A.lastPushedText = L(u.blockedSegment.chunks, g, s.responseState, A.lastPushedText)) : typeof g == "number" && (A = u.blockedSegment, A.lastPushedText = L(u.blockedSegment.chunks, "" + g, s.responseState, A.lastPushedText));
  }
  function Pi(s, u, g) {
    for (var A = g.length, B = 0; B < A; B++) {
      var D = u.treeContext;
      u.treeContext = Lr(D, A, B);
      try {
        $a(s, u, g[B]);
      } finally {
        u.treeContext = D;
      }
    }
  }
  function $a(s, u, g) {
    var A = u.blockedSegment.formatContext, B = u.legacyContext, D = u.context;
    try {
      return Ut(s, u, g);
    } catch (Ee) {
      if (Ya(), typeof Ee == "object" && Ee !== null && typeof Ee.then == "function") {
        g = Ee;
        var J = u.blockedSegment, te = $n(s, J.chunks.length, null, J.formatContext, J.lastPushedText, !0);
        J.children.push(te), J.lastPushedText = !1, s = Ka(s, u.node, u.blockedBoundary, te, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, g.then(s, s), u.blockedSegment.formatContext = A, u.legacyContext = B, u.context = D, Sr(D);
      } else throw u.blockedSegment.formatContext = A, u.legacyContext = B, u.context = D, Sr(D), Ee;
    }
  }
  function Zc(s) {
    var u = s.blockedBoundary;
    s = s.blockedSegment, s.status = 3, ji(this, u, s);
  }
  function Di(s, u, g) {
    var A = s.blockedBoundary;
    s.blockedSegment.status = 3, A === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (A.pendingTasks--, A.forceClientRender || (A.forceClientRender = !0, s = g === void 0 ? Error(t(432)) : g, A.errorDigest = u.onError(s), A.parentFlushed && u.clientRenderedBoundaries.push(A)), A.fallbackAbortableTasks.forEach(function(B) {
      return Di(B, u, g);
    }), A.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (A = u.onAllReady, A()));
  }
  function ea(s, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var g = u.children[0];
      g.id = u.id, g.parentFlushed = !0, g.status === 1 && ea(s, g);
    } else s.completedSegments.push(u);
  }
  function ji(s, u, g) {
    if (u === null) {
      if (g.parentFlushed) {
        if (s.completedRootSegment !== null) throw Error(t(389));
        s.completedRootSegment = g;
      }
      s.pendingRootTasks--, s.pendingRootTasks === 0 && (s.onShellError = En, u = s.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && ea(u, g), u.parentFlushed && s.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Zc, s), u.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (ea(u, g), u.completedSegments.length === 1 && u.parentFlushed && s.partialBoundaries.push(u)));
    s.allPendingTasks--, s.allPendingTasks === 0 && (s = s.onAllReady, s());
  }
  function Bi(s) {
    if (s.status !== 2) {
      var u = Oe, g = Ja.current;
      Ja.current = Oi;
      var A = Zn;
      Zn = s.responseState;
      try {
        var B = s.pingedTasks, D;
        for (D = 0; D < B.length; D++) {
          var J = B[D], te = s, Ee = J.blockedSegment;
          if (Ee.status === 0) {
            Sr(J.context);
            try {
              Ut(te, J, J.node), Ee.lastPushedText && Ee.textEmbedded && Ee.chunks.push(G), J.abortSet.delete(J), Ee.status = 1, ji(te, J.blockedBoundary, Ee);
            } catch (sr) {
              if (Ya(), typeof sr == "object" && sr !== null && typeof sr.then == "function") {
                var Me = J.ping;
                sr.then(Me, Me);
              } else {
                J.abortSet.delete(J), Ee.status = 4;
                var Pe = J.blockedBoundary, at = sr, zt = Cn(te, at);
                if (Pe === null ? Xn(te, at) : (Pe.pendingTasks--, Pe.forceClientRender || (Pe.forceClientRender = !0, Pe.errorDigest = zt, Pe.parentFlushed && te.clientRenderedBoundaries.push(Pe))), te.allPendingTasks--, te.allPendingTasks === 0) {
                  var ir = te.onAllReady;
                  ir();
                }
              }
            } finally {
            }
          }
        }
        B.splice(0, D), s.destination !== null && Xa(s, s.destination);
      } catch (sr) {
        Cn(s, sr), Xn(s, sr);
      } finally {
        Zn = A, Ja.current = g, g === Oi && Sr(u);
      }
    }
  }
  function ta(s, u, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var A = g.id = s.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, s = s.responseState, a(u, ze), a(u, s.placeholderPrefix), s = h(A.toString(16)), a(u, s), i(u, hr);
      case 1:
        g.status = 2;
        var B = !0;
        A = g.chunks;
        var D = 0;
        g = g.children;
        for (var J = 0; J < g.length; J++) {
          for (B = g[J]; D < B.index; D++) a(u, A[D]);
          B = ra(s, u, B);
        }
        for (; D < A.length - 1; D++) a(u, A[D]);
        return D < A.length && (B = i(u, A[D])), B;
      default:
        throw Error(t(390));
    }
  }
  function ra(s, u, g) {
    var A = g.boundary;
    if (A === null) return ta(s, u, g);
    if (A.parentFlushed = !0, A.forceClientRender) A = A.errorDigest, i(u, Wt), a(u, jt), A && (a(u, bt), a(u, h(ue(A))), a(u, ut)), i(u, $t), ta(s, u, g);
    else if (0 < A.pendingTasks) {
      A.rootSegmentID = s.nextSegmentId++, 0 < A.completedSegments.length && s.partialBoundaries.push(A);
      var B = s.responseState, D = B.nextSuspenseID++;
      B = p(B.boundaryPrefix + D.toString(16)), A = A.id = B, gt(u, s.responseState, A), ta(s, u, g);
    } else if (A.byteSize > s.progressiveChunkSize) A.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(A), gt(u, s.responseState, A.id), ta(s, u, g);
    else {
      if (i(u, gr), g = A.completedSegments, g.length !== 1) throw Error(t(391));
      ra(s, u, g[0]);
    }
    return i(u, Dt);
  }
  function Fi(s, u, g) {
    return dt(u, s.responseState, g.formatContext, g.id), ra(s, u, g), Ft(u, g.formatContext);
  }
  function Mi(s, u, g) {
    for (var A = g.completedSegments, B = 0; B < A.length; B++) Ui(s, u, g, A[B]);
    if (A.length = 0, s = s.responseState, A = g.id, g = g.rootSegmentID, a(u, s.startInlineScript), s.sentCompleteBoundaryFunction ? a(u, x) : (s.sentCompleteBoundaryFunction = !0, a(u, b)), A === null) throw Error(t(395));
    return g = h(g.toString(16)), a(u, A), a(u, O), a(u, s.segmentPrefix), a(u, g), i(u, K);
  }
  function Ui(s, u, g, A) {
    if (A.status === 2) return !0;
    var B = A.id;
    if (B === -1) {
      if ((A.id = g.rootSegmentID) === -1) throw Error(t(392));
      return Fi(s, u, A);
    }
    return Fi(s, u, A), s = s.responseState, a(u, s.startInlineScript), s.sentCompleteSegmentFunction ? a(u, tr) : (s.sentCompleteSegmentFunction = !0, a(u, Ar)), a(u, s.segmentPrefix), B = h(B.toString(16)), a(u, B), a(u, Vt), a(u, s.placeholderPrefix), a(u, B), i(u, rr);
  }
  function Xa(s, u) {
    r = new Uint8Array(512), n = 0;
    try {
      var g = s.completedRootSegment;
      if (g !== null && s.pendingRootTasks === 0) {
        ra(s, u, g), s.completedRootSegment = null;
        var A = s.responseState.bootstrapChunks;
        for (g = 0; g < A.length - 1; g++) a(u, A[g]);
        g < A.length && i(u, A[g]);
      }
      var B = s.clientRenderedBoundaries, D;
      for (D = 0; D < B.length; D++) {
        var J = B[D];
        A = u;
        var te = s.responseState, Ee = J.id, Me = J.errorDigest, Pe = J.errorMessage, at = J.errorComponentStack;
        if (a(A, te.startInlineScript), te.sentClientRenderFunction ? a(A, Ie) : (te.sentClientRenderFunction = !0, a(
          A,
          ge
        )), Ee === null) throw Error(t(395));
        a(A, Ee), a(A, Ne), (Me || Pe || at) && (a(A, lt), a(A, h(Tt(Me || "")))), (Pe || at) && (a(A, lt), a(A, h(Tt(Pe || "")))), at && (a(A, lt), a(A, h(Tt(at)))), i(A, Qe);
      }
      B.splice(0, D);
      var zt = s.completedBoundaries;
      for (D = 0; D < zt.length; D++) Mi(s, u, zt[D]);
      zt.splice(0, D), l(u), r = new Uint8Array(512), n = 0;
      var ir = s.partialBoundaries;
      for (D = 0; D < ir.length; D++) {
        var sr = ir[D];
        e: {
          B = s, J = u;
          var na = sr.completedSegments;
          for (te = 0; te < na.length; te++) if (!Ui(
            B,
            J,
            sr,
            na[te]
          )) {
            te++, na.splice(0, te);
            var Hi = !1;
            break e;
          }
          na.splice(0, te), Hi = !0;
        }
        if (!Hi) {
          s.destination = null, D++, ir.splice(0, D);
          return;
        }
      }
      ir.splice(0, D);
      var eo = s.completedBoundaries;
      for (D = 0; D < eo.length; D++) Mi(s, u, eo[D]);
      eo.splice(0, D);
    } finally {
      l(u), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && u.close();
    }
  }
  function zi(s, u) {
    try {
      var g = s.abortableTasks;
      g.forEach(function(A) {
        return Di(A, s, u);
      }), g.clear(), s.destination !== null && Xa(s, s.destination);
    } catch (A) {
      Cn(s, A), Xn(s, A);
    }
  }
  return ua.renderToReadableStream = function(s, u) {
    return new Promise(function(g, A) {
      var B, D, J = new Promise(function(Pe, at) {
        D = Pe, B = at;
      }), te = Kc(s, De(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), Ke(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, D, function() {
        var Pe = new ReadableStream({ type: "bytes", pull: function(at) {
          if (te.status === 1) te.status = 2, y(at, te.fatalError);
          else if (te.status !== 2 && te.destination === null) {
            te.destination = at;
            try {
              Xa(te, at);
            } catch (zt) {
              Cn(te, zt), Xn(te, zt);
            }
          }
        }, cancel: function() {
          zi(te);
        } }, { highWaterMark: 0 });
        Pe.allReady = J, g(Pe);
      }, function(Pe) {
        J.catch(function() {
        }), A(Pe);
      }, B);
      if (u && u.signal) {
        var Ee = u.signal, Me = function() {
          zi(te, Ee.reason), Ee.removeEventListener("abort", Me);
        };
        Ee.addEventListener("abort", Me);
      }
      Bi(te);
    });
  }, ua.version = "18.3.1", ua;
}
var pn, Ul;
pn = Sf(), Ul = Ef();
pn.version;
pn.renderToString;
pn.renderToStaticMarkup;
pn.renderToNodeStream;
pn.renderToStaticNodeStream;
Ul.renderToReadableStream;
const Cf = "staticMarkup";
function zl() {
  const e = tu().indexOf(Cf) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const ln = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = zl(), { onClick: a, ...i } = r.props;
  if (n)
    return ht.cloneElement(r, {
      ...i,
      onClick: (h) => (Ml(e), a ? a(h) : !0)
    });
  let l = "";
  ["input", "header", "header-input"].includes(t) && (l = `-${t}`);
  const f = {
    [`data-ga${l}`]: e.text,
    [`data-ga${l}-name`]: e.name,
    [`data-ga${l}-event`]: e.event,
    [`data-ga${l}-action`]: e.action,
    [`data-ga${l}-type`]: e.type,
    [`data-ga${l}-region`]: e.region,
    [`data-ga${l}-section`]: e.section,
    [`data-ga${l}-component`]: e.component
  };
  return ht.cloneElement(r, {
    ...i,
    onClick: a,
    ...f
  });
};
c.number, c.number, c.func, c.object;
c.arrayOf(Dl).isRequired, c.number;
const kf = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, kr = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: i,
  disabled: l,
  element: f,
  href: h,
  icon: p,
  innerRef: y,
  onClick: S,
  size: N,
  classes: W,
  target: C,
  ...w
}) => {
  const k = Or("btn", {
    [`btn-${i}`]: !0,
    "btn-md": N === "small",
    "btn-sm": N === "xsmall",
    "btn-block": a,
    disabled: l
  });
  let z = f;
  return h && f === "button" && (z = "a"), /* @__PURE__ */ X.jsx(
    ln,
    {
      gaData: {
        ...kf,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ X.jsxs(
        z,
        {
          type: z === "button" && S ? "button" : void 0,
          ...w,
          className: Or(W) || k,
          href: h,
          ref: y,
          onClick: S,
          "aria-label": n,
          target: z === "a" ? C : null,
          children: [
            p && /* @__PURE__ */ X.jsx("i", { className: `${p == null ? void 0 : p[0]} fa-${p == null ? void 0 : p[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
kr.propTypes = {
  /**
   * Button label
   */
  label: c.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: c.string,
  /**
   * Google Analytics event data
   */
  gaData: ci,
  /**
    ARIA label for accessibility
  */
  ariaLabel: c.string,
  /**
    Render button as a block-button?
  */
  block: c.bool,
  /**
    Button background color
  */
  color: c.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: c.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: c.oneOfType([
    c.func,
    c.string,
    c.shape({ $$typeof: c.symbol, render: c.func }),
    c.arrayOf(
      c.oneOfType([
        c.func,
        c.string,
        c.shape({ $$typeof: c.symbol, render: c.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: c.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: c.arrayOf(c.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: c.oneOfType([
    c.object,
    c.func,
    c.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: c.func,
  /**
    Button size
  */
  size: c.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: c.arrayOf(c.string),
  /**
   Link target type
   */
  target: c.oneOf(["_blank", "_self", "_top", "_parent"])
};
kr.defaultProps = {
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
var Hl = { exports: {} }, et = {}, Ts;
function Tf() {
  if (Ts) return et;
  Ts = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), W = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var k = w.$$typeof;
      switch (k) {
        case e:
          switch (w = w.type, w) {
            case r:
            case a:
            case n:
            case h:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case f:
                case S:
                case y:
                  return w;
                case i:
                  return w;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  return et.ContextConsumer = i, et.ContextProvider = l, et.Element = e, et.ForwardRef = f, et.Fragment = r, et.Lazy = S, et.Memo = y, et.Portal = t, et.Profiler = a, et.StrictMode = n, et.Suspense = h, et.SuspenseList = p, et.isContextConsumer = function(w) {
    return C(w) === i;
  }, et.isContextProvider = function(w) {
    return C(w) === l;
  }, et.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, et.isForwardRef = function(w) {
    return C(w) === f;
  }, et.isFragment = function(w) {
    return C(w) === r;
  }, et.isLazy = function(w) {
    return C(w) === S;
  }, et.isMemo = function(w) {
    return C(w) === y;
  }, et.isPortal = function(w) {
    return C(w) === t;
  }, et.isProfiler = function(w) {
    return C(w) === a;
  }, et.isStrictMode = function(w) {
    return C(w) === n;
  }, et.isSuspense = function(w) {
    return C(w) === h;
  }, et.isSuspenseList = function(w) {
    return C(w) === p;
  }, et.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === n || w === h || w === p || w === N || typeof w == "object" && w !== null && (w.$$typeof === S || w.$$typeof === y || w.$$typeof === l || w.$$typeof === i || w.$$typeof === f || w.$$typeof === W || w.getModuleId !== void 0);
  }, et.typeOf = C, et;
}
Hl.exports = Tf();
var Wl = Hl.exports;
function Rf(e) {
  function t(G, L, Q, q, v) {
    for (var V = 0, _ = 0, ce = 0, re = 0, oe, Z, fe = 0, me = 0, ie, ye = ie = oe = 0, le = 0, Ae = 0, He = 0, we = 0, ot = Q.length, $e = ot - 1, ke, $ = "", be = "", it = "", rt = "", ze; le < ot; ) {
      if (Z = Q.charCodeAt(le), le === $e && _ + re + ce + V !== 0 && (_ !== 0 && (Z = _ === 47 ? 10 : 47), re = ce = V = 0, ot++, $e++), _ + re + ce + V === 0) {
        if (le === $e && (0 < Ae && ($ = $.replace(N, "")), 0 < $.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += Q.charAt(le);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for ($ = $.trim(), oe = $.charCodeAt(0), ie = 1, we = ++le; le < ot; ) {
              switch (Z = Q.charCodeAt(le)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (Z = Q.charCodeAt(le + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ye = le + 1; ye < $e; ++ye)
                          switch (Q.charCodeAt(ye)) {
                            case 47:
                              if (Z === 42 && Q.charCodeAt(ye - 1) === 42 && le + 2 !== ye) {
                                le = ye + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                le = ye + 1;
                                break e;
                              }
                          }
                        le = ye;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; le++ < $e && Q.charCodeAt(le) !== Z; )
                    ;
              }
              if (ie === 0) break;
              le++;
            }
            switch (ie = Q.substring(we, le), oe === 0 && (oe = ($ = $.replace(S, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < Ae && ($ = $.replace(N, "")), Z = $.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Ae = L;
                    break;
                  default:
                    Ae = Je;
                }
                if (ie = t(L, Ae, ie, Z, v + 1), we = ie.length, 0 < De && (Ae = r(Je, $, He), ze = f(3, ie, Ae, L, pe, he, we, Z, v, q), $ = Ae.join(""), ze !== void 0 && (we = (ie = ze.trim()).length) === 0 && (Z = 0, ie = "")), 0 < we) switch (Z) {
                  case 115:
                    $ = $.replace(ae, l);
                  case 100:
                  case 109:
                  case 45:
                    ie = $ + "{" + ie + "}";
                    break;
                  case 107:
                    $ = $.replace(j, "$1 $2"), ie = $ + "{" + ie + "}", ie = de === 1 || de === 2 && i("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = $ + ie, q === 112 && (ie = (be += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = t(L, r(L, $, He), ie, q, v + 1);
            }
            it += ie, ie = He = Ae = ye = oe = 0, $ = "", Z = Q.charCodeAt(++le);
            break;
          case 125:
          case 59:
            if ($ = (0 < Ae ? $.replace(N, "") : $).trim(), 1 < (we = $.length)) switch (ye === 0 && (oe = $.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (we = ($ = $.replace(" ", ":")).length), 0 < De && (ze = f(1, $, L, G, pe, he, be.length, q, v, q)) !== void 0 && (we = ($ = ze.trim()).length) === 0 && ($ = "\0\0"), oe = $.charCodeAt(0), Z = $.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  rt += $ + Q.charAt(le);
                  break;
                }
              default:
                $.charCodeAt(we - 1) !== 58 && (be += a($, oe, Z, $.charCodeAt(2)));
            }
            He = Ae = ye = oe = 0, $ = "", Z = Q.charCodeAt(++le);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + oe === 0 && q !== 107 && 0 < $.length && (Ae = 1, $ += "\0"), 0 < De * Ke && f(0, $, L, G, pe, he, be.length, q, v, q), he = 1, pe++;
          break;
        case 59:
        case 125:
          if (_ + re + ce + V === 0) {
            he++;
            break;
          }
        default:
          switch (he++, ke = Q.charAt(le), Z) {
            case 9:
            case 32:
              if (re + V + _ === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  Z !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              re + _ + V === 0 && (Ae = He = 1, ke = "\f" + ke);
              break;
            case 108:
              if (re + _ + V + Te === 0 && 0 < ye) switch (le - ye) {
                case 2:
                  fe === 112 && Q.charCodeAt(le - 3) === 58 && (Te = fe);
                case 8:
                  me === 111 && (Te = me);
              }
              break;
            case 58:
              re + _ + V === 0 && (ye = le);
              break;
            case 44:
              _ + ce + re + V === 0 && (Ae = 1, ke += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (re = re === Z ? 0 : re === 0 ? Z : re);
              break;
            case 91:
              re + _ + ce === 0 && V++;
              break;
            case 93:
              re + _ + ce === 0 && V--;
              break;
            case 41:
              re + _ + V === 0 && ce--;
              break;
            case 40:
              if (re + _ + V === 0) {
                if (oe === 0) switch (2 * fe + 3 * me) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                ce++;
              }
              break;
            case 64:
              _ + ce + re + V + ye + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + V + ce)) switch (_) {
                case 0:
                  switch (2 * Z + 3 * Q.charCodeAt(le + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      we = le, _ = 42;
                  }
                  break;
                case 42:
                  Z === 47 && fe === 42 && we + 2 !== le && (Q.charCodeAt(we + 2) === 33 && (be += Q.substring(we, le + 1)), ke = "", _ = 0);
              }
          }
          _ === 0 && ($ += ke);
      }
      me = fe, fe = Z, le++;
    }
    if (we = be.length, 0 < we) {
      if (Ae = L, 0 < De && (ze = f(2, be, Ae, G, pe, he, we, q, v, q), ze !== void 0 && (be = ze).length === 0)) return rt + be + it;
      if (be = Ae.join(",") + "{" + be + "}", de * Te !== 0) {
        switch (de !== 2 || i(be, 2) || (Te = 0), Te) {
          case 111:
            be = be.replace(M, ":-moz-$1") + be;
            break;
          case 112:
            be = be.replace(U, "::-webkit-input-$1") + be.replace(U, "::-moz-$1") + be.replace(U, ":-ms-input-$1") + be;
        }
        Te = 0;
      }
    }
    return rt + be + it;
  }
  function r(G, L, Q) {
    var q = L.trim().split(k);
    L = q;
    var v = q.length, V = G.length;
    switch (V) {
      case 0:
      case 1:
        var _ = 0;
        for (G = V === 0 ? "" : G[0] + " "; _ < v; ++_)
          L[_] = n(G, L[_], Q).trim();
        break;
      default:
        var ce = _ = 0;
        for (L = []; _ < v; ++_)
          for (var re = 0; re < V; ++re)
            L[ce++] = n(G[re] + " ", q[_], Q).trim();
    }
    return L;
  }
  function n(G, L, Q) {
    var q = L.charCodeAt(0);
    switch (33 > q && (q = (L = L.trim()).charCodeAt(0)), q) {
      case 38:
        return L.replace(z, "$1" + G.trim());
      case 58:
        return G.trim() + L.replace(z, "$1" + G.trim());
      default:
        if (0 < 1 * Q && 0 < L.indexOf("\f")) return L.replace(z, (G.charCodeAt(0) === 58 ? "" : "$1") + G.trim());
    }
    return G + L;
  }
  function a(G, L, Q, q) {
    var v = G + ";", V = 2 * L + 3 * Q + 4 * q;
    if (V === 944) {
      G = v.indexOf(":", 9) + 1;
      var _ = v.substring(G, v.length - 1).trim();
      return _ = v.substring(0, G).trim() + _ + ";", de === 1 || de === 2 && i(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (de === 0 || de === 2 && !i(v, 1)) return v;
    switch (V) {
      case 1015:
        return v.charCodeAt(10) === 97 ? "-webkit-" + v + v : v;
      case 951:
        return v.charCodeAt(3) === 116 ? "-webkit-" + v + v : v;
      case 963:
        return v.charCodeAt(5) === 110 ? "-webkit-" + v + v : v;
      case 1009:
        if (v.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + v + v;
      case 978:
        return "-webkit-" + v + "-moz-" + v + v;
      case 1019:
      case 983:
        return "-webkit-" + v + "-moz-" + v + "-ms-" + v + v;
      case 883:
        if (v.charCodeAt(8) === 45) return "-webkit-" + v + v;
        if (0 < v.indexOf("image-set(", 11)) return v.replace(Le, "$1-webkit-$2") + v;
        break;
      case 932:
        if (v.charCodeAt(4) === 45) switch (v.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + v.replace("-grow", "") + "-webkit-" + v + "-ms-" + v.replace("grow", "positive") + v;
          case 115:
            return "-webkit-" + v + "-ms-" + v.replace("shrink", "negative") + v;
          case 98:
            return "-webkit-" + v + "-ms-" + v.replace("basis", "preferred-size") + v;
        }
        return "-webkit-" + v + "-ms-" + v + v;
      case 964:
        return "-webkit-" + v + "-ms-flex-" + v + v;
      case 1023:
        if (v.charCodeAt(8) !== 99) break;
        return _ = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + v + "-ms-flex-pack" + _ + v;
      case 1005:
        return C.test(v) ? v.replace(W, ":-webkit-") + v.replace(W, ":-moz-") + v : v;
      case 1e3:
        switch (_ = v.substring(13).trim(), L = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(L)) {
          case 226:
            _ = v.replace(R, "tb");
            break;
          case 232:
            _ = v.replace(R, "tb-rl");
            break;
          case 220:
            _ = v.replace(R, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + _ + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (L = (v = G).length - 10, _ = (v.charCodeAt(L) === 33 ? v.substring(0, L) : v).substring(G.indexOf(":", 7) + 1).trim(), V = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            v = v.replace(_, "-webkit-" + _) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(_, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + v.replace(_, "-webkit-" + _) + ";" + v.replace(_, "-ms-" + _ + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return _ = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + _ + "-ms-flex-" + _ + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(ee, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(ee, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (ve.test(G) === !0) return (_ = G.substring(G.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(G.replace("stretch", "fill-available"), L, Q, q).replace(":fill-available", ":stretch") : v.replace(_, "-webkit-" + _) + v.replace(_, "-moz-" + _.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, Q + q === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + v;
    }
    return v;
  }
  function i(G, L) {
    var Q = G.indexOf(L === 1 ? ":" : "{"), q = G.substring(0, L !== 3 ? Q : 10);
    return Q = G.substring(Q + 1, G.length - 1), qe(L !== 2 ? q : q.replace(se, "$1"), Q, L);
  }
  function l(G, L) {
    var Q = a(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return Q !== L + ";" ? Q.replace(ue, " or ($1)").substring(4) : "(" + L + ")";
  }
  function f(G, L, Q, q, v, V, _, ce, re, oe) {
    for (var Z = 0, fe = L, me; Z < De; ++Z)
      switch (me = Ue[Z].call(y, G, fe, Q, q, v, V, _, ce, re, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = me;
      }
    if (fe !== L) return fe;
  }
  function h(G) {
    switch (G) {
      case void 0:
      case null:
        De = Ue.length = 0;
        break;
      default:
        if (typeof G == "function") Ue[De++] = G;
        else if (typeof G == "object") for (var L = 0, Q = G.length; L < Q; ++L)
          h(G[L]);
        else Ke = !!G | 0;
    }
    return h;
  }
  function p(G) {
    return G = G.prefix, G !== void 0 && (qe = null, G ? typeof G != "function" ? de = 1 : (de = 2, qe = G) : de = 0), p;
  }
  function y(G, L) {
    var Q = G;
    if (33 > Q.charCodeAt(0) && (Q = Q.trim()), Ze = Q, Q = [Ze], 0 < De) {
      var q = f(-1, L, Q, Q, pe, he, 0, 0, 0, 0);
      q !== void 0 && typeof q == "string" && (L = q);
    }
    var v = t(Je, Q, L, 0, 0);
    return 0 < De && (q = f(-2, v, Q, Q, pe, he, v.length, 0, 0, 0), q !== void 0 && (v = q)), Ze = "", Te = 0, he = pe = 1, v;
  }
  var S = /^\0+/g, N = /[\0\r\f]/g, W = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, k = /,\r+?/g, z = /([\t\r\n ])*\f?&/g, j = /@(k\w+)\s*(\S*)\s*/, U = /::(place)/g, M = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ue = /([\s\S]*?);/g, ee = /-self|flex-/g, se = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ve = /stretch|:\s*\w+\-(?:conte|avail)/, Le = /([^-])(image-set\()/, he = 1, pe = 1, Te = 0, de = 1, Je = [], Ue = [], De = 0, qe = null, Ke = 0, Ze = "";
  return y.use = h, y.set = p, e !== void 0 && p(e), y;
}
var If = {
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
function Of(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var _f = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rs = /* @__PURE__ */ Of(
  function(e) {
    return _f.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ql = { exports: {} }, Ye = {}, Is;
function Lf() {
  if (Is) return Ye;
  Is = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, N = e ? Symbol.for("react.suspense_list") : 60120, W = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, z = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function U(R) {
    if (typeof R == "object" && R !== null) {
      var ae = R.$$typeof;
      switch (ae) {
        case t:
          switch (R = R.type, R) {
            case h:
            case p:
            case n:
            case i:
            case a:
            case S:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case f:
                case y:
                case C:
                case W:
                case l:
                  return R;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function M(R) {
    return U(R) === p;
  }
  return Ye.AsyncMode = h, Ye.ConcurrentMode = p, Ye.ContextConsumer = f, Ye.ContextProvider = l, Ye.Element = t, Ye.ForwardRef = y, Ye.Fragment = n, Ye.Lazy = C, Ye.Memo = W, Ye.Portal = r, Ye.Profiler = i, Ye.StrictMode = a, Ye.Suspense = S, Ye.isAsyncMode = function(R) {
    return M(R) || U(R) === h;
  }, Ye.isConcurrentMode = M, Ye.isContextConsumer = function(R) {
    return U(R) === f;
  }, Ye.isContextProvider = function(R) {
    return U(R) === l;
  }, Ye.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, Ye.isForwardRef = function(R) {
    return U(R) === y;
  }, Ye.isFragment = function(R) {
    return U(R) === n;
  }, Ye.isLazy = function(R) {
    return U(R) === C;
  }, Ye.isMemo = function(R) {
    return U(R) === W;
  }, Ye.isPortal = function(R) {
    return U(R) === r;
  }, Ye.isProfiler = function(R) {
    return U(R) === i;
  }, Ye.isStrictMode = function(R) {
    return U(R) === a;
  }, Ye.isSuspense = function(R) {
    return U(R) === S;
  }, Ye.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === p || R === i || R === a || R === S || R === N || typeof R == "object" && R !== null && (R.$$typeof === C || R.$$typeof === W || R.$$typeof === l || R.$$typeof === f || R.$$typeof === y || R.$$typeof === k || R.$$typeof === z || R.$$typeof === j || R.$$typeof === w);
  }, Ye.typeOf = U, Ye;
}
Ql.exports = Lf();
var Nf = Ql.exports, ui = Nf, Pf = {
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
}, Df = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, jf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Gl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, di = {};
di[ui.ForwardRef] = jf;
di[ui.Memo] = Gl;
function Os(e) {
  return ui.isMemo(e) ? Gl : di[e.$$typeof] || Pf;
}
var Bf = Object.defineProperty, Ff = Object.getOwnPropertyNames, _s = Object.getOwnPropertySymbols, Mf = Object.getOwnPropertyDescriptor, Uf = Object.getPrototypeOf, Ls = Object.prototype;
function ql(e, t, r) {
  if (typeof t != "string") {
    if (Ls) {
      var n = Uf(t);
      n && n !== Ls && ql(e, n, r);
    }
    var a = Ff(t);
    _s && (a = a.concat(_s(t)));
    for (var i = Os(e), l = Os(t), f = 0; f < a.length; ++f) {
      var h = a[f];
      if (!Df[h] && !(r && r[h]) && !(l && l[h]) && !(i && i[h])) {
        var p = Mf(t, h);
        try {
          Bf(e, h, p);
        } catch {
        }
      }
    }
  }
  return e;
}
var zf = ql;
const Hf = /* @__PURE__ */ li(zf);
var Et = { env: { NODE_ENV: "production" } };
function Rr() {
  return (Rr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var Ns = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Qo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Wl.typeOf(e);
}, Ia = Object.freeze([]), Br = Object.freeze({});
function Bn(e) {
  return typeof e == "function";
}
function Ps(e) {
  return e.displayName || e.name || "Component";
}
function fi(e) {
  return e && typeof e.styledComponentId == "string";
}
var cn = typeof Et < "u" && Et.env !== void 0 && (Et.env.REACT_APP_SC_ATTR || Et.env.SC_ATTR) || "data-styled", pi = typeof window < "u" && "HTMLElement" in window, Wf = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof Et < "u" && Et.env !== void 0 && (Et.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && Et.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Et.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Et.env.REACT_APP_SC_DISABLE_SPEEDY : Et.env.SC_DISABLE_SPEEDY !== void 0 && Et.env.SC_DISABLE_SPEEDY !== "" ? Et.env.SC_DISABLE_SPEEDY !== "false" && Et.env.SC_DISABLE_SPEEDY : Et.env.NODE_ENV !== "production"));
function Un(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Qf = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, l = i; r >= l; ) (l <<= 1) < 0 && Un(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var f = i; f < l; f++) this.groupSizes[f] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), p = 0, y = n.length; p < y; p++) this.tag.insertRule(h, n[p]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), i = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < i; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), l = i + a, f = i; f < l; f++) n += this.tag.getRule(f) + `/*!sc*/
`;
    return n;
  }, e;
}(), wa = /* @__PURE__ */ new Map(), Oa = /* @__PURE__ */ new Map(), Pn = 1, da = function(e) {
  if (wa.has(e)) return wa.get(e);
  for (; Oa.has(Pn); ) Pn++;
  var t = Pn++;
  return wa.set(e, t), Oa.set(t, e), t;
}, Gf = function(e) {
  return Oa.get(e);
}, qf = function(e, t) {
  t >= Pn && (Pn = t + 1), wa.set(e, t), Oa.set(t, e);
}, Vf = "style[" + cn + '][data-styled-version="5.3.11"]', Yf = new RegExp("^" + cn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Jf = function(e, t, r) {
  for (var n, a = r.split(","), i = 0, l = a.length; i < l; i++) (n = a[i]) && e.registerName(t, n);
}, Kf = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, i = r.length; a < i; a++) {
    var l = r[a].trim();
    if (l) {
      var f = l.match(Yf);
      if (f) {
        var h = 0 | parseInt(f[1], 10), p = f[2];
        h !== 0 && (qf(p, h), Jf(e, p, f[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, Zf = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Vl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(f) {
    for (var h = f.childNodes, p = h.length; p >= 0; p--) {
      var y = h[p];
      if (y && y.nodeType === 1 && y.hasAttribute(cn)) return y;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(cn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = Zf();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, i), n;
}, $f = function() {
  function e(r) {
    var n = this.element = Vl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var i = document.styleSheets, l = 0, f = i.length; l < f; l++) {
        var h = i[l];
        if (h.ownerNode === a) return h;
      }
      Un(17);
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
}(), Xf = function() {
  function e(r) {
    var n = this.element = Vl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), ep = function() {
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
}(), Ds = pi, tp = { isServer: !pi, useCSSOMInjection: !Wf }, Yl = function() {
  function e(r, n, a) {
    r === void 0 && (r = Br), n === void 0 && (n = {}), this.options = Rr({}, tp, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && pi && Ds && (Ds = !1, function(i) {
      for (var l = document.querySelectorAll(Vf), f = 0, h = l.length; f < h; f++) {
        var p = l[f];
        p && p.getAttribute(cn) !== "active" && (Kf(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this));
  }
  e.registerId = function(r) {
    return da(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Rr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, i = n.useCSSOMInjection, l = n.target, r = a ? new ep(l) : i ? new $f(l) : new Xf(l), new Qf(r)));
    var r, n, a, i, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (da(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(da(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(da(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, i = "", l = 0; l < a; l++) {
        var f = Gf(l);
        if (f !== void 0) {
          var h = r.names.get(f), p = n.getGroup(l);
          if (h && p && h.size) {
            var y = cn + ".g" + l + '[id="' + f + '"]', S = "";
            h !== void 0 && h.forEach(function(N) {
              N.length > 0 && (S += N + ",");
            }), i += "" + p + y + '{content:"' + S + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), rp = /(a)(d)/gi, js = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Go(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = js(t % 52) + r;
  return (js(t % 52) + r).replace(rp, "$1-$2");
}
var rn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Jl = function(e) {
  return rn(5381, e);
};
function np(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Bn(r) && !fi(r)) return !1;
  }
  return !0;
}
var ap = Jl("5.3.11"), op = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && np(t), this.componentId = r, this.baseHash = rn(ap, r), this.baseStyle = n, Yl.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) i.push(this.staticRulesId);
    else {
      var l = un(this.rules, t, r, n).join(""), f = Go(rn(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, f)) {
        var h = n(l, "." + f, void 0, a);
        r.insertRules(a, f, h);
      }
      i.push(f), this.staticRulesId = f;
    }
    else {
      for (var p = this.rules.length, y = rn(this.baseHash, n.hash), S = "", N = 0; N < p; N++) {
        var W = this.rules[N];
        if (typeof W == "string") S += W;
        else if (W) {
          var C = un(W, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          y = rn(y, w + N), S += w;
        }
      }
      if (S) {
        var k = Go(y >>> 0);
        if (!r.hasNameForId(a, k)) {
          var z = n(S, "." + k, void 0, a);
          r.insertRules(a, k, z);
        }
        i.push(k);
      }
    }
    return i.join(" ");
  }, e;
}(), ip = /^\s*\/\/.*$/gm, sp = [":", "[", ".", "#"];
function lp(e) {
  var t, r, n, a, i = Br, l = i.options, f = l === void 0 ? Br : l, h = i.plugins, p = h === void 0 ? Ia : h, y = new Rf(f), S = [], N = /* @__PURE__ */ function(w) {
    function k(z) {
      if (z) try {
        w(z + "}");
      } catch {
      }
    }
    return function(z, j, U, M, R, ae, ue, ee, se, ve) {
      switch (z) {
        case 1:
          if (se === 0 && j.charCodeAt(0) === 64) return w(j + ";"), "";
          break;
        case 2:
          if (ee === 0) return j + "/*|*/";
          break;
        case 3:
          switch (ee) {
            case 102:
            case 112:
              return w(U[0] + j), "";
            default:
              return j + (ve === 0 ? "/*|*/" : "");
          }
        case -2:
          j.split("/*|*/}").forEach(k);
      }
    };
  }(function(w) {
    S.push(w);
  }), W = function(w, k, z) {
    return k === 0 && sp.indexOf(z[r.length]) !== -1 || z.match(a) ? w : "." + t;
  };
  function C(w, k, z, j) {
    j === void 0 && (j = "&");
    var U = w.replace(ip, ""), M = k && z ? z + " " + k + " { " + U + " }" : U;
    return t = j, r = k, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), y(z || !k ? "" : k, M);
  }
  return y.use([].concat(p, [function(w, k, z) {
    w === 2 && z.length && z[0].lastIndexOf(r) > 0 && (z[0] = z[0].replace(n, W));
  }, N, function(w) {
    if (w === -2) {
      var k = S;
      return S = [], k;
    }
  }])), C.hash = p.length ? p.reduce(function(w, k) {
    return k.name || Un(15), rn(w, k.name);
  }, 5381).toString() : "", C;
}
var Kl = ht.createContext();
Kl.Consumer;
var Zl = ht.createContext(), cp = (Zl.Consumer, new Yl()), qo = lp();
function up() {
  return fn(Kl) || cp;
}
function dp() {
  return fn(Zl) || qo;
}
var fp = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, i) {
      i === void 0 && (i = qo);
      var l = n.name + i.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, i(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Un(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = qo), this.name + t.hash;
  }, e;
}(), pp = /([A-Z])/, hp = /([A-Z])/g, gp = /^ms-/, mp = function(e) {
  return "-" + e.toLowerCase();
};
function Bs(e) {
  return pp.test(e) ? e.replace(hp, mp).replace(gp, "-ms-") : e;
}
var Fs = function(e) {
  return e == null || e === !1 || e === "";
};
function un(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, i = [], l = 0, f = e.length; l < f; l += 1) (a = un(e[l], t, r, n)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (Fs(e)) return "";
  if (fi(e)) return "." + e.styledComponentId;
  if (Bn(e)) {
    if (typeof (p = e) != "function" || p.prototype && p.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return un(h, t, r, n);
  }
  var p;
  return e instanceof fp ? r ? (e.inject(r, n), e.getName(n)) : e : Qo(e) ? function y(S, N) {
    var W, C, w = [];
    for (var k in S) S.hasOwnProperty(k) && !Fs(S[k]) && (Array.isArray(S[k]) && S[k].isCss || Bn(S[k]) ? w.push(Bs(k) + ":", S[k], ";") : Qo(S[k]) ? w.push.apply(w, y(S[k], k)) : w.push(Bs(k) + ": " + (W = k, (C = S[k]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || W in If || W.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return N ? [N + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Ms = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function yp(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Bn(e) || Qo(e) ? Ms(un(Ns(Ia, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ms(un(Ns(e, r)));
}
var bp = function(e, t, r) {
  return r === void 0 && (r = Br), e.theme !== r.theme && e.theme || t || r.theme;
}, vp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wp = /(^-|-$)/g;
function ko(e) {
  return e.replace(vp, "-").replace(wp, "");
}
var xp = function(e) {
  return Go(Jl(e) >>> 0);
};
function fa(e) {
  return typeof e == "string" && Et.env.NODE_ENV === "production";
}
var Vo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ap = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Sp(e, t, r) {
  var n = e[r];
  Vo(t) && Vo(n) ? $l(n, t) : e[r] = t;
}
function $l(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, i = r; a < i.length; a++) {
    var l = i[a];
    if (Vo(l)) for (var f in l) Ap(f) && Sp(e, l[f], f);
  }
  return e;
}
var Xl = ht.createContext();
Xl.Consumer;
var To = {};
function ec(e, t, r) {
  var n = fi(e), a = !fa(e), i = t.attrs, l = i === void 0 ? Ia : i, f = t.componentId, h = f === void 0 ? function(j, U) {
    var M = typeof j != "string" ? "sc" : ko(j);
    To[M] = (To[M] || 0) + 1;
    var R = M + "-" + xp("5.3.11" + M + To[M]);
    return U ? U + "-" + R : R;
  }(t.displayName, t.parentComponentId) : f, p = t.displayName, y = p === void 0 ? function(j) {
    return fa(j) ? "styled." + j : "Styled(" + Ps(j) + ")";
  }(e) : p, S = t.displayName && t.componentId ? ko(t.displayName) + "-" + t.componentId : t.componentId || h, N = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, W = t.shouldForwardProp;
  n && e.shouldForwardProp && (W = t.shouldForwardProp ? function(j, U, M) {
    return e.shouldForwardProp(j, U, M) && t.shouldForwardProp(j, U, M);
  } : e.shouldForwardProp);
  var C, w = new op(r, S, n ? e.componentStyle : void 0), k = w.isStatic && l.length === 0, z = function(j, U) {
    return function(M, R, ae, ue) {
      var ee = M.attrs, se = M.componentStyle, ve = M.defaultProps, Le = M.foldedComponentIds, he = M.shouldForwardProp, pe = M.styledComponentId, Te = M.target, de = function(q, v, V) {
        q === void 0 && (q = Br);
        var _ = Rr({}, v, { theme: q }), ce = {};
        return V.forEach(function(re) {
          var oe, Z, fe, me = re;
          for (oe in Bn(me) && (me = me(_)), me) _[oe] = ce[oe] = oe === "className" ? (Z = ce[oe], fe = me[oe], Z && fe ? Z + " " + fe : Z || fe) : me[oe];
        }), [_, ce];
      }(bp(R, fn(Xl), ve) || Br, R, ee), Je = de[0], Ue = de[1], De = function(q, v, V, _) {
        var ce = up(), re = dp(), oe = v ? q.generateAndInjectStyles(Br, ce, re) : q.generateAndInjectStyles(V, ce, re);
        return oe;
      }(se, ue, Je), qe = ae, Ke = Ue.$as || R.$as || Ue.as || R.as || Te, Ze = fa(Ke), G = Ue !== R ? Rr({}, R, {}, Ue) : R, L = {};
      for (var Q in G) Q[0] !== "$" && Q !== "as" && (Q === "forwardedAs" ? L.as = G[Q] : (he ? he(Q, Rs, Ke) : !Ze || Rs(Q)) && (L[Q] = G[Q]));
      return R.style && Ue.style !== R.style && (L.style = Rr({}, R.style, {}, Ue.style)), L.className = Array.prototype.concat(Le, pe, De !== pe ? De : null, R.className, Ue.className).filter(Boolean).join(" "), L.ref = qe, il(Ke, L);
    }(C, j, U, k);
  };
  return z.displayName = y, (C = ht.forwardRef(z)).attrs = N, C.componentStyle = w, C.displayName = y, C.shouldForwardProp = W, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ia, C.styledComponentId = S, C.target = n ? e.target : e, C.withComponent = function(j) {
    var U = t.componentId, M = function(ae, ue) {
      if (ae == null) return {};
      var ee, se, ve = {}, Le = Object.keys(ae);
      for (se = 0; se < Le.length; se++) ee = Le[se], ue.indexOf(ee) >= 0 || (ve[ee] = ae[ee]);
      return ve;
    }(t, ["componentId"]), R = U && U + "-" + (fa(j) ? j : ko(Ps(j)));
    return ec(j, Rr({}, M, { attrs: N, componentId: R }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(j) {
    this._foldedDefaultProps = n ? $l({}, e.defaultProps, j) : j;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && Hf(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var fr = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Br), !Wl.isValidElementType(n)) return Un(1, String(n));
    var i = function() {
      return r(n, a, yp.apply(void 0, arguments));
    };
    return i.withConfig = function(l) {
      return t(r, n, Rr({}, a, {}, l));
    }, i.attrs = function(l) {
      return t(r, n, Rr({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, i;
  }(ec, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  fr[e] = fr(e);
});
fr.div`
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
`;
c.arrayOf(
  c.shape({
    text: c.string.isRequired,
    targetIdName: c.string.isRequired,
    icon: c.arrayOf(c.string)
  })
).isRequired, c.string.isRequired, c.bool;
function Fa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Ep = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
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
}(), Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, Cp = function(e, t, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(l) {
      l(i);
    });
  }
  return new (r || (r = Promise))(function(i, l) {
    function f(y) {
      try {
        p(n.next(y));
      } catch (S) {
        l(S);
      }
    }
    function h(y) {
      try {
        p(n.throw(y));
      } catch (S) {
        l(S);
      }
    }
    function p(y) {
      y.done ? i(y.value) : a(y.value).then(f, h);
    }
    p((n = n.apply(e, [])).next());
  });
}, kp = function(e, t) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, l;
  return l = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function f(p) {
    return function(y) {
      return h([p, y]);
    };
  }
  function h(p) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (i = p[0] & 2 ? a.return : p[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, p[1])).done) return i;
      switch (a = 0, i && (p = [p[0] & 2, i.value]), p[0]) {
        case 0:
        case 1:
          i = p;
          break;
        case 4:
          return r.label++, { value: p[1], done: !1 };
        case 5:
          r.label++, a = p[1], p = [0];
          continue;
        case 7:
          p = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (p[0] === 6 || p[0] === 2)) {
            r = 0;
            continue;
          }
          if (p[0] === 3 && (!i || p[1] > i[0] && p[1] < i[3])) {
            r.label = p[1];
            break;
          }
          if (p[0] === 6 && r.label < i[1]) {
            r.label = i[1], i = p;
            break;
          }
          if (i && r.label < i[2]) {
            r.label = i[2], r.ops.push(p);
            break;
          }
          i[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      p = t.call(e, r);
    } catch (y) {
      p = [6, y], a = 0;
    } finally {
      n = i = 0;
    }
    if (p[0] & 5) throw p[1];
    return { value: p[0] ? p[1] : void 0, done: !0 };
  }
}, tc = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Tp = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Rp = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Ip = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Op(e, t, r) {
  var n = t.height, a = t.width, i = tc(t, ["height", "width"]), l = Vr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, i), f = window.open(e, "", Object.keys(l).map(function(p) {
    return "".concat(p, "=").concat(l[p]);
  }).join(", "));
  if (r)
    var h = window.setInterval(function() {
      try {
        (f === null || f.closed) && (window.clearInterval(h), r(f));
      } catch (p) {
        console.error(p);
      }
    }, 1e3);
  return f;
}
var _p = (
  /** @class */
  function(e) {
    Ep(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, i = a.onShareWindowClose, l = a.windowHeight, f = l === void 0 ? 400 : l, h = a.windowPosition, p = h === void 0 ? "windowCenter" : h, y = a.windowWidth, S = y === void 0 ? 550 : y, N = Vr({ height: f, width: S }, p === "windowCenter" ? Rp(S, f) : Ip(S, f));
        Op(n, N, i);
      }, r.handleClick = function(n) {
        return Cp(r, void 0, void 0, function() {
          var a, i, l, f, h, p, y, S, N, W;
          return kp(this, function(C) {
            switch (C.label) {
              case 0:
                return a = this.props, i = a.beforeOnClick, l = a.disabled, f = a.networkLink, h = a.onClick, p = a.url, y = a.openShareDialogOnClick, S = a.opts, N = f(p, S), l ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), i ? (W = i(), Tp(W) ? [4, W] : [3, 2]) : [3, 2]);
              case 1:
                C.sent(), C.label = 2;
              case 2:
                return y && this.openShareDialog(N), h && h(n, N), [
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
      var n = r.children, a = r.className, i = r.disabled, l = r.disabledStyle, f = r.forwardedRef;
      r.networkLink;
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var p = r.resetButtonStyle, y = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var S = tc(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), N = Or("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!i,
        disabled: !!i
      }, a), W = Vr(Vr(p ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, y), i && l);
      return ht.createElement("button", Vr({}, S, { "aria-label": S["aria-label"] || h, className: N, onClick: this.handleClick, ref: f, style: W }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }($c)
), _a = function() {
  return _a = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, _a.apply(this, arguments);
};
function Ma(e, t, r, n) {
  function a(i, l) {
    var f = r(i), h = _a({}, i), p = Object.keys(f);
    return p.forEach(function(y) {
      delete h[y];
    }), ht.createElement(_p, _a({}, n, h, { forwardedRef: l, networkName: e, networkLink: t, opts: r(i) }));
  }
  return a.displayName = "ShareButton-".concat(e), sl(a);
}
function Lp(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Fa({ subject: r, body: n ? n + a + e : e });
}
Ma("email", Lp, function(e) {
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
});
var Np = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
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
}(), Pp = (
  /** @class */
  function(e) {
    Np(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Dn(e, t) {
  if (!e)
    throw new Pp(t);
}
function Dp(e, t) {
  var r = t.quote, n = t.hashtag;
  return Dn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Fa({
    u: e,
    quote: r,
    hashtag: n
  });
}
Ma("facebook", Dp, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function jp(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Dn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Fa({ url: e, mini: "true", title: r, summary: n, source: a });
}
Ma("linkedin", jp, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Bp(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, i = a === void 0 ? [] : a, l = t.related, f = l === void 0 ? [] : l;
  return Dn(e, "twitter.url"), Dn(Array.isArray(i), "twitter.hashtags is not an array"), Dn(Array.isArray(f), "twitter.related is not an array"), "https://twitter.com/share" + Fa({
    url: e,
    text: r,
    via: n,
    hashtags: i.length > 0 ? i.join(",") : void 0,
    related: f.length > 0 ? f.join(",") : void 0
  });
}
Ma("twitter", Bp, function(e) {
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
function Yo(e) {
  "@babel/helpers - typeof";
  return Yo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yo(e);
}
var Fp = (typeof window > "u" ? "undefined" : Yo(window)) === "object" && window.Element || function() {
};
function Mp(e, t, r) {
  if (!(e[t] instanceof Fp))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
c.oneOfType([c.string, c.func, Mp, c.shape({
  current: c.any
})]);
c.oneOfType([c.func, c.string, c.shape({
  $$typeof: c.symbol,
  render: c.func
}), c.arrayOf(c.oneOfType([c.func, c.string, c.shape({
  $$typeof: c.symbol,
  render: c.func
})]))]);
c.string, c.node, c.string, c.object, c.string;
c.bool, c.string, c.object;
fr.div`
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
`;
fr.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
c.oneOf(["event", "news"]), c.string.isRequired, c.string.isRequired, c.string.isRequired, c.string.isRequired, c.string, c.string.isRequired, c.string, c.string, c.arrayOf(
  c.shape({
    title: c.string,
    url: c.string,
    active: c.bool
  })
), c.string, c.string, c.string, c.string, c.string, c.string;
c.oneOf(["white", "gray", "black"]), c.arrayOf(c.string), c.oneOfType([
  c.object,
  c.func,
  c.string
]), c.func, c.string, c.oneOf(["large", "small"]), c.string;
const Up = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, hi = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: i,
  element: l = "button",
  innerRef: f,
  href: h,
  onClick: p,
  ...y
}) => {
  const S = Or("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: i
  });
  let N = l;
  return h && l === "button" && (N = "a"), /* @__PURE__ */ X.jsx(
    ln,
    {
      gaData: {
        ...Up,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ X.jsx(
        N,
        {
          type: N === "button" && p ? "button" : void 0,
          ...y,
          className: S,
          href: h,
          ref: f,
          onClick: p,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
hi.propTypes = {
  /**
    Button tag label
  */
  label: c.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: c.string,
  /**
   * Google Analytics event data
   */
  gaData: ci,
  /**
    ARIA label for accessibility
  */
  ariaLabel: c.string,
  /**
    Button background color
  */
  color: c.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: c.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: c.oneOfType([
    c.func,
    c.string,
    c.shape({ $$typeof: c.symbol, render: c.func }),
    c.arrayOf(
      c.oneOfType([
        c.func,
        c.string,
        c.shape({ $$typeof: c.symbol, render: c.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: c.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: c.oneOfType([
    c.object,
    c.func,
    c.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: c.func
};
hi.defaultProps = {
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
const rc = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: i,
  fetchPriority: l = "auto",
  width: f,
  height: h,
  cardLink: p,
  title: y,
  caption: S,
  captionTitle: N,
  border: W,
  dropShadow: C
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: l,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: qd(r) },
    ...i && { "data-testid": i },
    ...f && { width: f },
    ...h && { height: h }
  }, k = Or("uds-img", {
    borderless: !W,
    "uds-img-drop-shadow": C
  }), z = (U) => {
    const M = U ? `${w.className} ${U}` : w.className;
    return p ? /* @__PURE__ */ X.jsxs("a", { href: p, children: [
      /* @__PURE__ */ X.jsx("img", { ...w, className: M }),
      /* @__PURE__ */ X.jsx("span", { className: "visually-hidden", children: y })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ X.jsx("img", { ...w, className: M })
    );
  }, j = () => /* @__PURE__ */ X.jsx("div", { className: k, children: /* @__PURE__ */ X.jsxs("figure", { className: "figure uds-figure", children: [
    z(),
    S && /* @__PURE__ */ X.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      N && /* @__PURE__ */ X.jsx("h3", { children: N }),
      /* @__PURE__ */ X.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: tn(S)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ X.jsx(X.Fragment, { children: S ? j() : z(k) });
};
rc.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: c.string.isRequired,
  /**
   * Image alt text
   */
  alt: c.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: c.arrayOf(c.string),
  /**
   * Image loading mode
   */
  loading: c.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: c.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: c.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: c.string,
  /**
   * Height of the image
   */
  height: c.string,
  dataTestId: c.string,
  cardLink: c.string,
  title: c.string,
  caption: c.string,
  captionTitle: c.string,
  border: c.bool,
  dropShadow: c.bool
};
const zp = fr.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Hp = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Wp = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Hp(e) ? `mailto:${e}` : e, Qp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, qr = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: l,
  body: f,
  eventFormat: h,
  eventLocation: p,
  eventTime: y,
  buttons: S,
  linkLabel: N,
  linkUrl: W,
  tags: C,
  showBorders: w,
  cardLink: k
}) => /* @__PURE__ */ X.jsx(
  gi,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: i,
    icon: l,
    body: f,
    eventFormat: h,
    eventLocation: p,
    eventTime: y,
    buttons: S,
    linkLabel: N,
    linkUrl: W,
    tags: C,
    showBorders: w,
    cardLink: k
  }
);
qr.propTypes = {
  /**
   * Type of card
   */
  type: c.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: c.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: c.bool,
  /**
   * Card title
   */
  title: c.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: c.arrayOf(c.string),
  /**
   * Card body content
   */
  body: c.string,
  /**
   * Event info format
   */
  eventFormat: c.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: c.string,
  /**
   * Event start time
   */
  eventTime: c.string,
  /**
   * Card header image
   */
  image: c.string,
  /**
   * Card header image alt text
   */
  imageAltText: c.string,
  /**
   * Buttons
   */
  buttons: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: c.arrayOf(c.string),
      href: c.string,
      label: c.string,
      onClick: c.func,
      size: c.oneOf(["default", "small", "xsmall"]),
      target: c.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: c.string,
  linkUrl: c.string,
  /**
   * Tags
   */
  tags: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["white", "gray", "dark"]),
      href: c.string,
      label: c.string,
      onClick: c.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: c.bool,
  /**
   * Card link
   */
  cardLink: c.string
};
qr.defaultProps = {
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
const gi = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: i,
  icon: l,
  body: f,
  eventFormat: h,
  eventLocation: p,
  eventTime: y,
  buttons: S,
  linkLabel: N,
  linkUrl: W,
  tags: C,
  showBorders: w,
  cardLink: k
}) => {
  const z = Or("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ X.jsx(X.Fragment, { children: /* @__PURE__ */ X.jsxs(zp, { className: z, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ X.jsx(
      rc,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: k,
        title: i
      }
    ),
    !n && l && /* @__PURE__ */ X.jsx(
      "i",
      {
        className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ X.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ X.jsx(
      La,
      {
        type: e,
        body: f,
        eventFormat: h,
        eventLocation: p,
        eventTime: y,
        title: i,
        buttons: S,
        linkLabel: N,
        linkUrl: W,
        tags: C,
        cardLink: k
      }
    ) }) : /* @__PURE__ */ X.jsx(
      La,
      {
        type: e,
        body: f,
        eventFormat: h,
        eventLocation: p,
        eventTime: y,
        title: i,
        buttons: S,
        linkLabel: N,
        linkUrl: W,
        tags: C,
        cardLink: k
      }
    )
  ] }) });
};
gi.propTypes = {
  type: c.oneOf(["default", "degree", "event", "news", "story"]),
  width: c.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: c.bool,
  title: c.string.isRequired,
  icon: c.arrayOf(c.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: c.string,
  eventFormat: c.oneOf(["stack", "inline"]),
  eventLocation: c.string,
  eventTime: c.string,
  image: c.string,
  imageAltText: c.string,
  buttons: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: c.arrayOf(c.string),
      href: c.string,
      label: c.string,
      onClick: c.func,
      size: c.oneOf(["default", "small", "xsmall"]),
      target: c.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: c.string,
  linkUrl: c.string,
  tags: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["white", "gray", "dark"]),
      href: c.string,
      label: c.string,
      onClick: c.func
    })
  ),
  showBorders: c.bool,
  cardLink: c.string
};
gi.defaultProps = {
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
const La = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: i,
  buttons: l,
  linkLabel: f,
  linkUrl: h,
  tags: p,
  cardLink: y
}) => /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
  !!i && /* @__PURE__ */ X.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ X.jsx("h3", { className: "card-title", children: y ? /* @__PURE__ */ X.jsx("a", { href: y, children: i }) : i }) }),
  !!t && /* @__PURE__ */ X.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ X.jsx("div", { dangerouslySetInnerHTML: tn(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ X.jsx(
    mi,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  l && /* @__PURE__ */ X.jsx("div", { className: "card-buttons", children: l.map((S) => /* @__PURE__ */ X.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ X.jsx(
        kr,
        {
          ariaLabel: S.ariaLabel,
          color: S.color,
          icon: S.icon,
          href: S.href,
          label: S.label,
          onClick: S.onClick,
          size: S.size,
          target: S.target,
          cardTitle: i
        }
      )
    },
    `${S.label}-${S.href}`
  )) }),
  h && f && /* @__PURE__ */ X.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ X.jsx(
    ln,
    {
      gaData: {
        ...Qp,
        section: i,
        text: f
      },
      children: /* @__PURE__ */ X.jsx("a", { href: Wp(h), children: f })
    }
  ) }),
  p && /* @__PURE__ */ X.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: p.map((S) => (
    // @ts-ignore
    /* @__PURE__ */ X.jsx(
      hi,
      {
        ariaLabel: S.ariaLabel,
        color: S.color,
        href: S.href,
        label: S.label,
        onClick: S.onClick,
        cardTitle: i
      },
      `${S.label}-${S.href}`
    )
  )) })
] });
La.propTypes = {
  type: c.oneOf(["default", "degree", "event", "news", "story"]),
  body: c.string,
  eventFormat: c.oneOf(["stack", "inline"]),
  eventLocation: c.string,
  eventTime: c.string,
  title: c.string.isRequired,
  buttons: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: c.arrayOf(c.string),
      href: c.string,
      label: c.string,
      onClick: c.func,
      size: c.oneOf(["default", "small", "xsmall"]),
      target: c.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: c.string,
  linkUrl: c.string,
  tags: c.arrayOf(
    c.shape({
      ariaLabel: c.string,
      color: c.oneOf(["white", "gray", "dark"]),
      href: c.string,
      label: c.string,
      onClick: c.func
    })
  ),
  cardLink: c.string
};
La.defaultProps = {
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
const mi = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ X.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ X.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ X.jsx("div", { children: /* @__PURE__ */ X.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ X.jsx("div", { dangerouslySetInnerHTML: tn(t) })
  ] }),
  r && /* @__PURE__ */ X.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ X.jsx("div", { children: /* @__PURE__ */ X.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ X.jsx(
      "div",
      {
        dangerouslySetInnerHTML: tn(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
  t && /* @__PURE__ */ X.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ X.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ X.jsx("div", { children: /* @__PURE__ */ X.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ X.jsx("div", { dangerouslySetInnerHTML: tn(t) })
  ] }) }),
  r && /* @__PURE__ */ X.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ X.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ X.jsx("div", { children: /* @__PURE__ */ X.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ X.jsx("span", { children: /* @__PURE__ */ X.jsx(
      "div",
      {
        dangerouslySetInnerHTML: tn(r)
      }
    ) })
  ] }) })
] });
mi.propTypes = {
  eventFormat: c.oneOf(["stack", "inline"]),
  eventLocation: c.string,
  eventTime: c.string
};
mi.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
fr.div`
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
`;
fr.section``;
Xc(null);
c.element, c.element, c.number, c.func, c.func, c.string;
const Gp = c.shape({
  color: c.oneOf(["white", "dark"]),
  text: c.string
}), qp = c.shape({
  color: c.oneOf(["gold", "maroon", "gray", "dark"]),
  text: c.string
});
c.shape({
  color: c.oneOf(["gold", "maroon", "gray", "dark"]),
  text: c.string,
  size: c.string
});
const Vp = c.shape({
  url: c.string,
  filters: c.string
});
c.shape({
  header: Gp,
  ctaButton: qp,
  dataSource: Vp,
  maxItems: c.number
});
fr.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
c.element;
fr.img`
  width: 100%;
`;
c.oneOf(["heading-hero", "story-hero"]), c.arrayOf(vo), c.string;
const Cr = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: i,
  ellipses: l,
  ariaLabel: f,
  children: h,
  ariaDisabled: p
}) => /* @__PURE__ */ X.jsx(
  "li",
  {
    className: Or("page-item", {
      disabled: r,
      active: a,
      elipses: l
    }),
    children: t ? /* @__PURE__ */ X.jsxs(
      "button",
      {
        type: "button",
        "aria-label": f,
        className: Or("page-link", {
          "page-link-icon": n
        }),
        onClick: i,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": p,
        children: [
          h,
          a && /* @__PURE__ */ X.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ X.jsx("span", { className: "page-link", "data-testid": "page-link", children: h })
  }
);
Cr.propTypes = {
  isClickeable: c.bool,
  disabled: c.bool,
  pageLinkIcon: c.bool,
  selectedPage: c.bool,
  dataId: c.string,
  onClick: c.func,
  children: c.node,
  ellipses: c.bool,
  ariaLabel: c.string,
  ariaDisabled: c.bool
};
Cr.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const Yp = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, yi = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [i, l] = Ge(null);
  mt(() => {
    l(r);
  }, [r]);
  const f = (y) => {
    Ml({ ...Yp, text: `page ${y}` });
  }, h = (y, S) => {
    const N = {
      first: 1,
      prev: i === 1 ? 1 : i - 1,
      next: i === n ? n : i + 1,
      last: n
    }[S] ?? S;
    l(N), f(N), a == null || a(y, N);
  }, p = () => {
    const y = ms(
      i === n - 1,
      2,
      i === n ? 3 : 1
    ), S = ms(
      i === 1,
      3,
      i === 2 ? 2 : 1
    ), N = Es(
      i - y,
      i,
      n
    ), W = Es(
      i,
      i + 1 + S,
      n
    ), C = [...N, ...W];
    return /* @__PURE__ */ X.jsxs(X.Fragment, { children: [
      C[0] !== 1 && /* @__PURE__ */ X.jsx(
        Cr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: i === 1,
          onClick: (w) => h(w, "first"),
          children: "1"
        }
      ),
      C[0] > 2 && /* @__PURE__ */ X.jsx(Cr, { ellipses: !0, children: "..." }),
      C.map((w) => /* @__PURE__ */ X.jsx(
        Cr,
        {
          ariaLabel: `Page ${w} of ${n}`,
          isClickeable: !0,
          selectedPage: i === w,
          onClick: (k) => h(k, w),
          children: w
        },
        w
      )),
      C[C.length - 1] < n - 1 && /* @__PURE__ */ X.jsx(Cr, { ellipses: !0, children: "..." }),
      C[C.length - 1] !== n && /* @__PURE__ */ X.jsx(
        Cr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: i === n,
          onClick: (w) => h(w, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ X.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ X.jsxs(
    "ul",
    {
      className: Or(
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
        /* @__PURE__ */ X.jsx(
          Cr,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: i === 1,
            pageLinkIcon: !0,
            onClick: (y) => h(y, "prev"),
            ariaDisabled: i === 1,
            ariaLabel: "Previous Page"
          }
        ),
        p(),
        /* @__PURE__ */ X.jsx(
          Cr,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: i === n,
            disabled: i === n,
            pageLinkIcon: !0,
            onClick: (y) => h(y, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
yi.propTypes = {
  /**
   * Type of pagination
   */
  type: c.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: c.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: c.number,
  /**
   * Total number of pages
   */
  totalPages: c.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: c.func.isRequired
};
yi.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
c.oneOf(["small", "large"]), c.string.isRequired, c.string.isRequired, c.string;
c.oneOf(["small", "large"]).isRequired, c.string.isRequired, c.string.isRequired, c.string.isRequired, c.string.isRequired, c.string, c.string;
const Jp = fr.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, bi = ({ gaData: e, hidePrev: t, hideNext: r, slideNav: n }) => /* @__PURE__ */ X.jsxs(Jp, { children: [
  !t && /* @__PURE__ */ X.jsx(ln, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ X.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => n(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ X.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ X.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !r && /* @__PURE__ */ X.jsx(ln, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ X.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => n(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ X.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ X.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
bi.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: c.object,
  hidePrev: c.bool,
  hideNext: c.bool,
  slideNav: c.func.isRequired
};
const nc = sl(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: i,
    leftKeyPressed: l,
    rightKeyPressed: f,
    icon: h,
    gaData: p
  } = e, y = Zr(null);
  eu(
    t,
    () => ({
      focus() {
        y.current.focus();
      },
      scrollIntoView() {
        var N, W, C, w, k, z, j;
        const U = ((N = y.current) == null ? void 0 : N.offsetWidth) / 2 + y.current.offsetLeft, M = ((C = (W = y.current) == null ? void 0 : W.offsetParent) == null ? void 0 : C.scrollLeft) + ((k = (w = y.current) == null ? void 0 : w.offsetParent) == null ? void 0 : k.offsetWidth) / 2;
        (j = (z = y.current) == null ? void 0 : z.offsetParent) == null || j.scrollBy({
          left: U - M
        });
      }
    }),
    []
  );
  const S = (N) => {
    N.keyCode === 37 ? (N.preventDefault(), l()) : N.keyCode === 39 && (N.preventDefault(), f());
  };
  return /* @__PURE__ */ X.jsx(ln, { gaData: { ...p, text: a }, children: /* @__PURE__ */ X.jsxs(
    "a",
    {
      ref: y,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (N) => i(N, r, a),
      onKeyDown: S,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ X.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
nc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: c.object,
  id: c.string.isRequired,
  selected: c.bool.isRequired,
  title: c.string.isRequired,
  selectTab: c.func.isRequired,
  leftKeyPressed: c.func.isRequired,
  rightKeyPressed: c.func.isRequired,
  icon: c.arrayOf(c.string)
};
function Kp() {
  const e = Zr({}), t = ru(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const nn = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ X.jsx(
  "div",
  {
    className: `tab-pane fade show ${r ? "show active" : ""} ${t === "bg-dark" ? "text-white" : ""}`,
    id: `nav-${e}`,
    role: "tabpanel",
    "aria-labelledby": `nav-${e}-tab`,
    children: n
  }
);
nn.propTypes = {
  id: c.string.isRequired,
  bgColor: c.string,
  selected: c.bool,
  children: c.oneOfType([c.array, c.element])
};
const vi = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (a) => {
  }
}) => {
  const a = ht.Children.toArray(t), i = Zr(!1), [l, f] = Ge(
    e && e !== "null" ? e : a[0].props.id
  ), h = Zr(null), [p, y] = Kp(), { isReact: S } = zl(), N = (ee) => {
    var se;
    n(ee), (se = p.current[ee]) == null || se.focus(), f(ee);
  }, [W, C] = Ge(0), [w, k] = Ge();
  mt(() => {
    const ee = () => {
      C(h.current.scrollLeft);
    };
    return h.current.addEventListener("scroll", ee), ee(), () => {
      h.current && h.current.removeEventListener("scroll", ee);
    };
  }, [w]), mt(() => {
    const ee = () => {
      k(
        h.current.scrollWidth - h.current.offsetWidth
      );
    };
    return window.addEventListener("resize", ee), ee(), () => {
      h.current && window.removeEventListener("resize", ee);
    };
  }, []), mt(() => {
    var ee;
    (ee = p.current[l]) == null || ee.scrollIntoView();
  }, [l]), mt(() => {
    i.current && e && e !== "null" && l !== e && f(e);
  }, [e]), mt(() => {
    i.current = !0;
  }, []);
  const z = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, j = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, U = a.map((ee) => ht.cloneElement(ee, {
    bgColor: r,
    selected: l === ee.props.id
  })), M = (ee) => {
    const se = h.current, ve = se.scrollWidth - se.clientWidth;
    let Le = se.scrollLeft + 200 * ee;
    Le = Math.max(0, Math.min(ve, Le)), se.scrollTo({
      left: Le,
      behavior: "smooth"
    });
  }, R = (ee, se, ve) => {
    ee.preventDefault(), N(se);
  }, ae = (ee = !0) => {
    const se = a.length, ve = ee ? 1 : -1, Le = a.findIndex((pe) => pe.props.id === l), he = a[(se + Le + ve) % se].props.id;
    N(he);
  };
  let ue = "uds-tabbed-panels";
  return r === "bg-dark" && (ue += " uds-tabbed-panels-dark"), /* @__PURE__ */ X.jsxs("div", { className: r, children: [
    /* @__PURE__ */ X.jsxs("nav", { className: ue, children: [
      /* @__PURE__ */ X.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: h, children: a.map((ee, se) => /* @__PURE__ */ X.jsx(
        nc,
        {
          ref: y(ee.props.id),
          id: ee.props.id,
          title: ee.props.title,
          selected: l === ee.props.id,
          gaData: j,
          selectTab: S && R,
          leftKeyPressed: S && (() => ae(!1)),
          rightKeyPressed: S && (() => ae()),
          icon: ee.props.icon,
          index: se
        },
        ee.props.id
      )) }),
      /* @__PURE__ */ X.jsx(
        bi,
        {
          hidePrev: W <= 0,
          hideNext: W >= w,
          gaData: z,
          slideNav: S && M
        }
      )
    ] }),
    /* @__PURE__ */ X.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: U
      }
    )
  ] });
};
vi.propTypes = {
  initialTab: c.string,
  children: c.arrayOf(c.element).isRequired,
  bgColor: c.string,
  onTabChange: c.func
};
c.shape({
  title: c.string,
  content: c.string,
  cite: c.shape({
    name: c.string,
    description: c.string
  })
}).isRequired, c.string, c.string, c.shape({
  containerCssClass: c.arrayOf(c.string),
  titleCssClass: c.arrayOf(c.string),
  contentCssClass: c.arrayOf(c.string)
});
c.oneOf(["video", "youtube"]), c.string, c.string, c.string, c.string, c.string, c.bool;
c.oneOfType([
  c.element,
  c.arrayOf(c.element)
]).isRequired;
c.number.isRequired;
c.arrayOf(c.string).isRequired, c.func;
c.func;
c.func;
c.arrayOf(c.element);
c.element, c.func;
c.arrayOf(c.object);
var Zp = !1;
try {
  var Us = Object.defineProperty({}, "passive", {
    get: function() {
      Zp = !0;
    }
  });
  window.addEventListener("testPassive", null, Us), window.removeEventListener("testPassive", null, Us);
} catch {
}
c.number, c.string, c.string, c.arrayOf(c.object).isRequired, c.string, c.func, c.string, c.string, c.func, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool;
c.string.isRequired, c.arrayOf(
  c.shape({
    title: c.string.isRequired,
    content: c.string,
    eventLocation: c.string,
    eventTime: c.string,
    image: c.string,
    imageAltText: c.string,
    buttons: qr.propTypes.buttons,
    linkLabel: c.string,
    linkUrl: c.string,
    tags: qr.propTypes.tags
  })
).isRequired, qr.propTypes.type, qr.propTypes.eventFormat, qr.propTypes.horizontal, c.string, c.string, c.bool;
c.number.isRequired, c.arrayOf(c.object).isRequired, c.string, c.string, c.bool;
const Na = {
  imageItems: c.arrayOf(
    c.shape({
      id: c.number,
      imageSource: c.string,
      thumbnailSource: c.string,
      imageAltText: c.string,
      content: c.oneOfType([c.string, c.element])
    })
  ),
  hasContent: c.bool
};
c.string, Na.imageItems, Na.hasContent;
Na.imageItems.isRequired, Na.hasContent, c.string, c.string, c.bool;
c.arrayOf(
  c.shape({
    title: c.string,
    content: c.string,
    cite: c.shape({
      name: c.string,
      description: c.string
    })
  })
).isRequired, c.shape({
  containerCssClass: c.arrayOf(c.string),
  titleCssClass: c.arrayOf(c.string),
  contentCssClass: c.arrayOf(c.string)
}), c.string, c.string, c.bool, c.bool, c.bool;
var zs = fl;
zs.createRoot, zs.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .75rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function ac(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
var $p = {}, Hs = {};
const { toString: Xp } = Object.prototype, { getPrototypeOf: wi } = Object, Ua = /* @__PURE__ */ ((e) => (t) => {
  const r = Xp.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), pr = (e) => (e = e.toLowerCase(), (t) => Ua(t) === e), za = (e) => (t) => typeof t === e, { isArray: hn } = Array, Fn = za("undefined");
function eh(e) {
  return e !== null && !Fn(e) && e.constructor !== null && !Fn(e.constructor) && Ht(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const oc = pr("ArrayBuffer");
function th(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && oc(e.buffer), t;
}
const rh = za("string"), Ht = za("function"), ic = za("number"), Ha = (e) => e !== null && typeof e == "object", nh = (e) => e === !0 || e === !1, xa = (e) => {
  if (Ua(e) !== "object")
    return !1;
  const t = wi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ah = pr("Date"), oh = pr("File"), ih = pr("Blob"), sh = pr("FileList"), lh = (e) => Ha(e) && Ht(e.pipe), ch = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ht(e.append) && ((t = Ua(e)) === "formdata" || // detect form-data instance
  t === "object" && Ht(e.toString) && e.toString() === "[object FormData]"));
}, uh = pr("URLSearchParams"), [dh, fh, ph, hh] = ["ReadableStream", "Request", "Response", "Headers"].map(pr), gh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), hn(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = i.length;
    let f;
    for (n = 0; n < l; n++)
      f = i[n], t.call(null, e[f], f, e);
  }
}
function sc(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const Yr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : $p, lc = (e) => !Fn(e) && e !== Yr;
function Jo() {
  const { caseless: e } = lc(this) && this || {}, t = {}, r = (n, a) => {
    const i = e && sc(t, a) || a;
    xa(t[i]) && xa(n) ? t[i] = Jo(t[i], n) : xa(n) ? t[i] = Jo({}, n) : hn(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && zn(arguments[n], r);
  return t;
}
const mh = (e, t, r, { allOwnKeys: n } = {}) => (zn(t, (a, i) => {
  r && Ht(a) ? e[i] = ac(a, r) : e[i] = a;
}, { allOwnKeys: n }), e), yh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bh = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, vh = (e, t, r, n) => {
  let a, i, l;
  const f = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
      l = a[i], (!n || n(l, e, t)) && !f[l] && (t[l] = e[l], f[l] = !0);
    e = r !== !1 && wi(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, wh = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, xh = (e) => {
  if (!e) return null;
  if (hn(e)) return e;
  let t = e.length;
  if (!ic(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ah = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && wi(Uint8Array)), Sh = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const i = a.value;
    t.call(e, i[0], i[1]);
  }
}, Eh = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Ch = pr("HTMLFormElement"), kh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), Ws = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Th = pr("RegExp"), cc = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  zn(r, (a, i) => {
    let l;
    (l = t(a, i, e)) !== !1 && (n[i] = l || a);
  }), Object.defineProperties(e, n);
}, Rh = (e) => {
  cc(e, (t, r) => {
    if (Ht(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Ht(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Ih = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((i) => {
      r[i] = !0;
    });
  };
  return hn(e) ? n(e) : n(String(e).split(t)), r;
}, Oh = () => {
}, _h = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Ro = "abcdefghijklmnopqrstuvwxyz", Qs = "0123456789", uc = {
  DIGIT: Qs,
  ALPHA: Ro,
  ALPHA_DIGIT: Ro + Ro.toUpperCase() + Qs
}, Lh = (e = 16, t = uc.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Nh(e) {
  return !!(e && Ht(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ph = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (Ha(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const i = hn(n) ? [] : {};
        return zn(n, (l, f) => {
          const h = r(l, a + 1);
          !Fn(h) && (i[f] = h);
        }), t[a] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Dh = pr("AsyncFunction"), jh = (e) => e && (Ha(e) || Ht(e)) && Ht(e.then) && Ht(e.catch), dc = ((e, t) => e ? setImmediate : t ? ((r, n) => (Yr.addEventListener("message", ({ source: a, data: i }) => {
  a === Yr && i === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), Yr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Ht(Yr.postMessage)
), Bh = typeof queueMicrotask < "u" ? queueMicrotask.bind(Yr) : typeof Hs < "u" && Hs.nextTick || dc, H = {
  isArray: hn,
  isArrayBuffer: oc,
  isBuffer: eh,
  isFormData: ch,
  isArrayBufferView: th,
  isString: rh,
  isNumber: ic,
  isBoolean: nh,
  isObject: Ha,
  isPlainObject: xa,
  isReadableStream: dh,
  isRequest: fh,
  isResponse: ph,
  isHeaders: hh,
  isUndefined: Fn,
  isDate: ah,
  isFile: oh,
  isBlob: ih,
  isRegExp: Th,
  isFunction: Ht,
  isStream: lh,
  isURLSearchParams: uh,
  isTypedArray: Ah,
  isFileList: sh,
  forEach: zn,
  merge: Jo,
  extend: mh,
  trim: gh,
  stripBOM: yh,
  inherits: bh,
  toFlatObject: vh,
  kindOf: Ua,
  kindOfTest: pr,
  endsWith: wh,
  toArray: xh,
  forEachEntry: Sh,
  matchAll: Eh,
  isHTMLForm: Ch,
  hasOwnProperty: Ws,
  hasOwnProp: Ws,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: cc,
  freezeMethods: Rh,
  toObjectSet: Ih,
  toCamelCase: kh,
  noop: Oh,
  toFiniteNumber: _h,
  findKey: sc,
  global: Yr,
  isContextDefined: lc,
  ALPHABET: uc,
  generateString: Lh,
  isSpecCompliantForm: Nh,
  toJSONObject: Ph,
  isAsyncFn: Dh,
  isThenable: jh,
  setImmediate: dc,
  asap: Bh
};
function _e(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
H.inherits(_e, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: H.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const fc = _e.prototype, pc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  pc[e] = { value: e };
});
Object.defineProperties(_e, pc);
Object.defineProperty(fc, "isAxiosError", { value: !0 });
_e.from = (e, t, r, n, a, i) => {
  const l = Object.create(fc);
  return H.toFlatObject(e, l, function(h) {
    return h !== Error.prototype;
  }, (f) => f !== "isAxiosError"), _e.call(l, e.message, t, r, n, a), l.cause = e, l.name = e.name, i && Object.assign(l, i), l;
};
const Fh = null;
function Ko(e) {
  return H.isPlainObject(e) || H.isArray(e);
}
function hc(e) {
  return H.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gs(e, t, r) {
  return e ? e.concat(t).map(function(a, i) {
    return a = hc(a), !r && i ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Mh(e) {
  return H.isArray(e) && !e.some(Ko);
}
const Uh = H.toFlatObject(H, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Wa(e, t, r) {
  if (!H.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = H.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, k) {
    return !H.isUndefined(k[w]);
  });
  const n = r.metaTokens, a = r.visitor || y, i = r.dots, l = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(t);
  if (!H.isFunction(a))
    throw new TypeError("visitor must be a function");
  function p(C) {
    if (C === null) return "";
    if (H.isDate(C))
      return C.toISOString();
    if (!h && H.isBlob(C))
      throw new _e("Blob is not supported. Use a Buffer instead.");
    return H.isArrayBuffer(C) || H.isTypedArray(C) ? h && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function y(C, w, k) {
    let z = C;
    if (C && !k && typeof C == "object") {
      if (H.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), C = JSON.stringify(C);
      else if (H.isArray(C) && Mh(C) || (H.isFileList(C) || H.endsWith(w, "[]")) && (z = H.toArray(C)))
        return w = hc(w), z.forEach(function(U, M) {
          !(H.isUndefined(U) || U === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Gs([w], M, i) : l === null ? w : w + "[]",
            p(U)
          );
        }), !1;
    }
    return Ko(C) ? !0 : (t.append(Gs(k, w, i), p(C)), !1);
  }
  const S = [], N = Object.assign(Uh, {
    defaultVisitor: y,
    convertValue: p,
    isVisitable: Ko
  });
  function W(C, w) {
    if (!H.isUndefined(C)) {
      if (S.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      S.push(C), H.forEach(C, function(z, j) {
        (!(H.isUndefined(z) || z === null) && a.call(
          t,
          z,
          H.isString(j) ? j.trim() : j,
          w,
          N
        )) === !0 && W(z, w ? w.concat(j) : [j]);
      }), S.pop();
    }
  }
  if (!H.isObject(e))
    throw new TypeError("data must be an object");
  return W(e), t;
}
function qs(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function xi(e, t) {
  this._pairs = [], e && Wa(e, this, t);
}
const gc = xi.prototype;
gc.append = function(t, r) {
  this._pairs.push([t, r]);
};
gc.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, qs);
  } : qs;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function zh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function mc(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || zh;
  H.isFunction(r) && (r = {
    serialize: r
  });
  const a = r && r.serialize;
  let i;
  if (a ? i = a(t, r) : i = H.isURLSearchParams(t) ? t.toString() : new xi(t, r).toString(n), i) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    H.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const yc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hh = typeof URLSearchParams < "u" ? URLSearchParams : xi, Wh = typeof FormData < "u" ? FormData : null, Qh = typeof Blob < "u" ? Blob : null, Gh = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hh,
    FormData: Wh,
    Blob: Qh
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ai = typeof window < "u" && typeof document < "u", Zo = typeof navigator == "object" && navigator || void 0, qh = Ai && (!Zo || ["ReactNative", "NativeScript", "NS"].indexOf(Zo.product) < 0), Vh = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yh = Ai && window.location.href || "http://localhost", Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ai,
  hasStandardBrowserEnv: qh,
  hasStandardBrowserWebWorkerEnv: Vh,
  navigator: Zo,
  origin: Yh
}, Symbol.toStringTag, { value: "Module" })), Ct = {
  ...Jh,
  ...Gh
};
function Kh(e, t) {
  return Wa(e, new Ct.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, i) {
      return Ct.isNode && H.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zh(e) {
  return H.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $h(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let i;
  for (n = 0; n < a; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function bc(e) {
  function t(r, n, a, i) {
    let l = r[i++];
    if (l === "__proto__") return !0;
    const f = Number.isFinite(+l), h = i >= r.length;
    return l = !l && H.isArray(a) ? a.length : l, h ? (H.hasOwnProp(a, l) ? a[l] = [a[l], n] : a[l] = n, !f) : ((!a[l] || !H.isObject(a[l])) && (a[l] = []), t(r, n, a[l], i) && H.isArray(a[l]) && (a[l] = $h(a[l])), !f);
  }
  if (H.isFormData(e) && H.isFunction(e.entries)) {
    const r = {};
    return H.forEachEntry(e, (n, a) => {
      t(Zh(n), a, r, 0);
    }), r;
  }
  return null;
}
function Xh(e, t, r) {
  if (H.isString(e))
    try {
      return (t || JSON.parse)(e), H.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Hn = {
  transitional: yc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, i = H.isObject(t);
    if (i && H.isHTMLForm(t) && (t = new FormData(t)), H.isFormData(t))
      return a ? JSON.stringify(bc(t)) : t;
    if (H.isArrayBuffer(t) || H.isBuffer(t) || H.isStream(t) || H.isFile(t) || H.isBlob(t) || H.isReadableStream(t))
      return t;
    if (H.isArrayBufferView(t))
      return t.buffer;
    if (H.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Kh(t, this.formSerializer).toString();
      if ((f = H.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return Wa(
          f ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return i || a ? (r.setContentType("application/json", !1), Xh(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Hn.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (H.isResponse(t) || H.isReadableStream(t))
      return t;
    if (t && H.isString(t) && (n && !this.responseType || a)) {
      const l = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? _e.from(f, _e.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ct.classes.FormData,
    Blob: Ct.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hn.headers[e] = {};
});
const eg = H.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), tg = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), r = l.substring(0, a).trim().toLowerCase(), n = l.substring(a + 1).trim(), !(!r || t[r] && eg[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ys = Symbol("internals");
function On(e) {
  return e && String(e).trim().toLowerCase();
}
function Aa(e) {
  return e === !1 || e == null ? e : H.isArray(e) ? e.map(Aa) : String(e);
}
function rg(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const ng = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Io(e, t, r, n, a) {
  if (H.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!H.isString(t)) {
    if (H.isString(n))
      return t.indexOf(n) !== -1;
    if (H.isRegExp(n))
      return n.test(t);
  }
}
function ag(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function og(e, t) {
  const r = H.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, i, l) {
        return this[n].call(this, t, a, i, l);
      },
      configurable: !0
    });
  });
}
let Nt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function i(f, h, p) {
      const y = On(h);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const S = H.findKey(a, y);
      (!S || a[S] === void 0 || p === !0 || p === void 0 && a[S] !== !1) && (a[S || h] = Aa(f));
    }
    const l = (f, h) => H.forEach(f, (p, y) => i(p, y, h));
    if (H.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (H.isString(t) && (t = t.trim()) && !ng(t))
      l(tg(t), r);
    else if (H.isHeaders(t))
      for (const [f, h] of t.entries())
        i(h, f, n);
    else
      t != null && i(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = On(t), t) {
      const n = H.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return rg(a);
        if (H.isFunction(r))
          return r.call(this, a, n);
        if (H.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = On(t), t) {
      const n = H.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Io(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function i(l) {
      if (l = On(l), l) {
        const f = H.findKey(n, l);
        f && (!r || Io(n, n[f], f, r)) && (delete n[f], a = !0);
      }
    }
    return H.isArray(t) ? t.forEach(i) : i(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || Io(this, this[i], i, t, !0)) && (delete this[i], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return H.forEach(this, (a, i) => {
      const l = H.findKey(n, i);
      if (l) {
        r[l] = Aa(a), delete r[i];
        return;
      }
      const f = t ? ag(i) : String(i).trim();
      f !== i && delete r[i], r[f] = Aa(a), n[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return H.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && H.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[Ys] = this[Ys] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function i(l) {
      const f = On(l);
      n[f] || (og(a, l), n[f] = !0);
    }
    return H.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
H.reduceDescriptors(Nt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
H.freezeMethods(Nt);
function Oo(e, t) {
  const r = this || Hn, n = t || r, a = Nt.from(n.headers);
  let i = n.data;
  return H.forEach(e, function(f) {
    i = f.call(r, i, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), i;
}
function vc(e) {
  return !!(e && e.__CANCEL__);
}
function gn(e, t, r) {
  _e.call(this, e ?? "canceled", _e.ERR_CANCELED, t, r), this.name = "CanceledError";
}
H.inherits(gn, _e, {
  __CANCEL__: !0
});
function wc(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new _e(
    "Request failed with status code " + r.status,
    [_e.ERR_BAD_REQUEST, _e.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function ig(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function sg(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, i = 0, l;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), y = n[i];
    l || (l = p), r[a] = h, n[a] = p;
    let S = i, N = 0;
    for (; S !== a; )
      N += r[S++], S = S % e;
    if (a = (a + 1) % e, a === i && (i = (i + 1) % e), p - l < t)
      return;
    const W = y && p - y;
    return W ? Math.round(N * 1e3 / W) : void 0;
  };
}
function lg(e, t) {
  let r = 0, n = 1e3 / t, a, i;
  const l = (p, y = Date.now()) => {
    r = y, a = null, i && (clearTimeout(i), i = null), e.apply(null, p);
  };
  return [(...p) => {
    const y = Date.now(), S = y - r;
    S >= n ? l(p, y) : (a = p, i || (i = setTimeout(() => {
      i = null, l(a);
    }, n - S)));
  }, () => a && l(a)];
}
const Pa = (e, t, r = 3) => {
  let n = 0;
  const a = sg(50, 250);
  return lg((i) => {
    const l = i.loaded, f = i.lengthComputable ? i.total : void 0, h = l - n, p = a(h), y = l <= f;
    n = l;
    const S = {
      loaded: l,
      total: f,
      progress: f ? l / f : void 0,
      bytes: h,
      rate: p || void 0,
      estimated: p && f && y ? (f - l) / p : void 0,
      event: i,
      lengthComputable: f != null,
      [t ? "download" : "upload"]: !0
    };
    e(S);
  }, r);
}, Js = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Ks = (e) => (...t) => H.asap(() => e(...t)), cg = Ct.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Ct.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Ct.origin),
  Ct.navigator && /(msie|trident)/i.test(Ct.navigator.userAgent)
) : () => !0, ug = Ct.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, i) {
      const l = [e + "=" + encodeURIComponent(t)];
      H.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), H.isString(n) && l.push("path=" + n), H.isString(a) && l.push("domain=" + a), i === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function dg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function fg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function xc(e, t) {
  return e && !dg(t) ? fg(e, t) : t;
}
const Zs = (e) => e instanceof Nt ? { ...e } : e;
function $r(e, t) {
  t = t || {};
  const r = {};
  function n(p, y, S, N) {
    return H.isPlainObject(p) && H.isPlainObject(y) ? H.merge.call({ caseless: N }, p, y) : H.isPlainObject(y) ? H.merge({}, y) : H.isArray(y) ? y.slice() : y;
  }
  function a(p, y, S, N) {
    if (H.isUndefined(y)) {
      if (!H.isUndefined(p))
        return n(void 0, p, S, N);
    } else return n(p, y, S, N);
  }
  function i(p, y) {
    if (!H.isUndefined(y))
      return n(void 0, y);
  }
  function l(p, y) {
    if (H.isUndefined(y)) {
      if (!H.isUndefined(p))
        return n(void 0, p);
    } else return n(void 0, y);
  }
  function f(p, y, S) {
    if (S in t)
      return n(p, y);
    if (S in e)
      return n(void 0, p);
  }
  const h = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: f,
    headers: (p, y, S) => a(Zs(p), Zs(y), S, !0)
  };
  return H.forEach(Object.keys(Object.assign({}, e, t)), function(y) {
    const S = h[y] || a, N = S(e[y], t[y], y);
    H.isUndefined(N) && S !== f || (r[y] = N);
  }), r;
}
const Ac = (e) => {
  const t = $r({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: i, headers: l, auth: f } = t;
  t.headers = l = Nt.from(l), t.url = mc(xc(t.baseURL, t.url), e.params, e.paramsSerializer), f && l.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))
  );
  let h;
  if (H.isFormData(r)) {
    if (Ct.hasStandardBrowserEnv || Ct.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((h = l.getContentType()) !== !1) {
      const [p, ...y] = h ? h.split(";").map((S) => S.trim()).filter(Boolean) : [];
      l.setContentType([p || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Ct.hasStandardBrowserEnv && (n && H.isFunction(n) && (n = n(t)), n || n !== !1 && cg(t.url))) {
    const p = a && i && ug.read(i);
    p && l.set(a, p);
  }
  return t;
}, pg = typeof XMLHttpRequest < "u", hg = pg && function(e) {
  return new Promise(function(r, n) {
    const a = Ac(e);
    let i = a.data;
    const l = Nt.from(a.headers).normalize();
    let { responseType: f, onUploadProgress: h, onDownloadProgress: p } = a, y, S, N, W, C;
    function w() {
      W && W(), C && C(), a.cancelToken && a.cancelToken.unsubscribe(y), a.signal && a.signal.removeEventListener("abort", y);
    }
    let k = new XMLHttpRequest();
    k.open(a.method.toUpperCase(), a.url, !0), k.timeout = a.timeout;
    function z() {
      if (!k)
        return;
      const U = Nt.from(
        "getAllResponseHeaders" in k && k.getAllResponseHeaders()
      ), R = {
        data: !f || f === "text" || f === "json" ? k.responseText : k.response,
        status: k.status,
        statusText: k.statusText,
        headers: U,
        config: e,
        request: k
      };
      wc(function(ue) {
        r(ue), w();
      }, function(ue) {
        n(ue), w();
      }, R), k = null;
    }
    "onloadend" in k ? k.onloadend = z : k.onreadystatechange = function() {
      !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(z);
    }, k.onabort = function() {
      k && (n(new _e("Request aborted", _e.ECONNABORTED, e, k)), k = null);
    }, k.onerror = function() {
      n(new _e("Network Error", _e.ERR_NETWORK, e, k)), k = null;
    }, k.ontimeout = function() {
      let M = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const R = a.transitional || yc;
      a.timeoutErrorMessage && (M = a.timeoutErrorMessage), n(new _e(
        M,
        R.clarifyTimeoutError ? _e.ETIMEDOUT : _e.ECONNABORTED,
        e,
        k
      )), k = null;
    }, i === void 0 && l.setContentType(null), "setRequestHeader" in k && H.forEach(l.toJSON(), function(M, R) {
      k.setRequestHeader(R, M);
    }), H.isUndefined(a.withCredentials) || (k.withCredentials = !!a.withCredentials), f && f !== "json" && (k.responseType = a.responseType), p && ([N, C] = Pa(p, !0), k.addEventListener("progress", N)), h && k.upload && ([S, W] = Pa(h), k.upload.addEventListener("progress", S), k.upload.addEventListener("loadend", W)), (a.cancelToken || a.signal) && (y = (U) => {
      k && (n(!U || U.type ? new gn(null, e, k) : U), k.abort(), k = null);
    }, a.cancelToken && a.cancelToken.subscribe(y), a.signal && (a.signal.aborted ? y() : a.signal.addEventListener("abort", y)));
    const j = ig(a.url);
    if (j && Ct.protocols.indexOf(j) === -1) {
      n(new _e("Unsupported protocol " + j + ":", _e.ERR_BAD_REQUEST, e));
      return;
    }
    k.send(i || null);
  });
}, gg = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const i = function(p) {
      if (!a) {
        a = !0, f();
        const y = p instanceof Error ? p : this.reason;
        n.abort(y instanceof _e ? y : new gn(y instanceof Error ? y.message : y));
      }
    };
    let l = t && setTimeout(() => {
      l = null, i(new _e(`timeout ${t} of ms exceeded`, _e.ETIMEDOUT));
    }, t);
    const f = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((p) => {
        p.unsubscribe ? p.unsubscribe(i) : p.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((p) => p.addEventListener("abort", i));
    const { signal: h } = n;
    return h.unsubscribe = () => H.asap(f), h;
  }
}, mg = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, yg = async function* (e, t) {
  for await (const r of bg(e))
    yield* mg(r, t);
}, bg = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, $s = (e, t, r, n) => {
  const a = yg(e, t);
  let i = 0, l, f = (h) => {
    l || (l = !0, n && n(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: p, value: y } = await a.next();
        if (p) {
          f(), h.close();
          return;
        }
        let S = y.byteLength;
        if (r) {
          let N = i += S;
          r(N);
        }
        h.enqueue(new Uint8Array(y));
      } catch (p) {
        throw f(p), p;
      }
    },
    cancel(h) {
      return f(h), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, Qa = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Sc = Qa && typeof ReadableStream == "function", vg = Qa && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Ec = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, wg = Sc && Ec(() => {
  let e = !1;
  const t = new Request(Ct.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Xs = 64 * 1024, $o = Sc && Ec(() => H.isReadableStream(new Response("").body)), Da = {
  stream: $o && ((e) => e.body)
};
Qa && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Da[t] && (Da[t] = H.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new _e(`Response type '${t}' is not supported`, _e.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const xg = async (e) => {
  if (e == null)
    return 0;
  if (H.isBlob(e))
    return e.size;
  if (H.isSpecCompliantForm(e))
    return (await new Request(Ct.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (H.isArrayBufferView(e) || H.isArrayBuffer(e))
    return e.byteLength;
  if (H.isURLSearchParams(e) && (e = e + ""), H.isString(e))
    return (await vg(e)).byteLength;
}, Ag = async (e, t) => {
  const r = H.toFiniteNumber(e.getContentLength());
  return r ?? xg(t);
}, Sg = Qa && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: i,
    timeout: l,
    onDownloadProgress: f,
    onUploadProgress: h,
    responseType: p,
    headers: y,
    withCredentials: S = "same-origin",
    fetchOptions: N
  } = Ac(e);
  p = p ? (p + "").toLowerCase() : "text";
  let W = gg([a, i && i.toAbortSignal()], l), C;
  const w = W && W.unsubscribe && (() => {
    W.unsubscribe();
  });
  let k;
  try {
    if (h && wg && r !== "get" && r !== "head" && (k = await Ag(y, n)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), ae;
      if (H.isFormData(n) && (ae = R.headers.get("content-type")) && y.setContentType(ae), R.body) {
        const [ue, ee] = Js(
          k,
          Pa(Ks(h))
        );
        n = $s(R.body, Xs, ue, ee);
      }
    }
    H.isString(S) || (S = S ? "include" : "omit");
    const z = "credentials" in Request.prototype;
    C = new Request(t, {
      ...N,
      signal: W,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: z ? S : void 0
    });
    let j = await fetch(C);
    const U = $o && (p === "stream" || p === "response");
    if ($o && (f || U && w)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((se) => {
        R[se] = j[se];
      });
      const ae = H.toFiniteNumber(j.headers.get("content-length")), [ue, ee] = f && Js(
        ae,
        Pa(Ks(f), !0)
      ) || [];
      j = new Response(
        $s(j.body, Xs, ue, () => {
          ee && ee(), w && w();
        }),
        R
      );
    }
    p = p || "text";
    let M = await Da[H.findKey(Da, p) || "text"](j, e);
    return !U && w && w(), await new Promise((R, ae) => {
      wc(R, ae, {
        data: M,
        headers: Nt.from(j.headers),
        status: j.status,
        statusText: j.statusText,
        config: e,
        request: C
      });
    });
  } catch (z) {
    throw w && w(), z && z.name === "TypeError" && /fetch/i.test(z.message) ? Object.assign(
      new _e("Network Error", _e.ERR_NETWORK, e, C),
      {
        cause: z.cause || z
      }
    ) : _e.from(z, z && z.code, e, C);
  }
}), Xo = {
  http: Fh,
  xhr: hg,
  fetch: Sg
};
H.forEach(Xo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const el = (e) => `- ${e}`, Eg = (e) => H.isFunction(e) || e === null || e === !1, Cc = {
  getAdapter: (e) => {
    e = H.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let l;
      if (n = r, !Eg(r) && (n = Xo[(l = String(r)).toLowerCase()], n === void 0))
        throw new _e(`Unknown adapter '${l}'`);
      if (n)
        break;
      a[l || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(a).map(
        ([f, h]) => `adapter ${f} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? i.length > 1 ? `since :
` + i.map(el).join(`
`) : " " + el(i[0]) : "as no adapter specified";
      throw new _e(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Xo
};
function _o(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new gn(null, e);
}
function tl(e) {
  return _o(e), e.headers = Nt.from(e.headers), e.data = Oo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cc.getAdapter(e.adapter || Hn.adapter)(e).then(function(n) {
    return _o(e), n.data = Oo.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Nt.from(n.headers), n;
  }, function(n) {
    return vc(n) || (_o(e), n && n.response && (n.response.data = Oo.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Nt.from(n.response.headers))), Promise.reject(n);
  });
}
const kc = "1.7.9", Ga = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ga[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rl = {};
Ga.transitional = function(t, r, n) {
  function a(i, l) {
    return "[Axios v" + kc + "] Transitional option '" + i + "'" + l + (n ? ". " + n : "");
  }
  return (i, l, f) => {
    if (t === !1)
      throw new _e(
        a(l, " has been removed" + (r ? " in " + r : "")),
        _e.ERR_DEPRECATED
      );
    return r && !rl[l] && (rl[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, l, f) : !0;
  };
};
Ga.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Cg(e, t, r) {
  if (typeof e != "object")
    throw new _e("options must be an object", _e.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const i = n[a], l = t[i];
    if (l) {
      const f = e[i], h = f === void 0 || l(f, i, e);
      if (h !== !0)
        throw new _e("option " + i + " must be " + h, _e.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new _e("Unknown option " + i, _e.ERR_BAD_OPTION);
  }
}
const Sa = {
  assertOptions: Cg,
  validators: Ga
}, br = Sa.validators;
let Kr = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Vs(),
      response: new Vs()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const i = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = $r(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: i } = r;
    n !== void 0 && Sa.assertOptions(n, {
      silentJSONParsing: br.transitional(br.boolean),
      forcedJSONParsing: br.transitional(br.boolean),
      clarifyTimeoutError: br.transitional(br.boolean)
    }, !1), a != null && (H.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Sa.assertOptions(a, {
      encode: br.function,
      serialize: br.function
    }, !0)), Sa.assertOptions(r, {
      baseUrl: br.spelling("baseURL"),
      withXsrfToken: br.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = i && H.merge(
      i.common,
      i[r.method]
    );
    i && H.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete i[C];
      }
    ), r.headers = Nt.concat(l, i);
    const f = [];
    let h = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (h = h && w.synchronous, f.unshift(w.fulfilled, w.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(w) {
      p.push(w.fulfilled, w.rejected);
    });
    let y, S = 0, N;
    if (!h) {
      const C = [tl.bind(this), void 0];
      for (C.unshift.apply(C, f), C.push.apply(C, p), N = C.length, y = Promise.resolve(r); S < N; )
        y = y.then(C[S++], C[S++]);
      return y;
    }
    N = f.length;
    let W = r;
    for (S = 0; S < N; ) {
      const C = f[S++], w = f[S++];
      try {
        W = C(W);
      } catch (k) {
        w.call(this, k);
        break;
      }
    }
    try {
      y = tl.call(this, W);
    } catch (C) {
      return Promise.reject(C);
    }
    for (S = 0, N = p.length; S < N; )
      y = y.then(p[S++], p[S++]);
    return y;
  }
  getUri(t) {
    t = $r(this.defaults, t);
    const r = xc(t.baseURL, t.url);
    return mc(r, t.params, t.paramsSerializer);
  }
};
H.forEach(["delete", "get", "head", "options"], function(t) {
  Kr.prototype[t] = function(r, n) {
    return this.request($r(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
H.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, l, f) {
      return this.request($r(f || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: l
      }));
    };
  }
  Kr.prototype[t] = r(), Kr.prototype[t + "Form"] = r(!0);
});
let kg = class Tc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const l = new Promise((f) => {
        n.subscribe(f), i = f;
      }).then(a);
      return l.cancel = function() {
        n.unsubscribe(i);
      }, l;
    }, t(function(i, l, f) {
      n.reason || (n.reason = new gn(i, l, f), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Tc(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Tg(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Rg(e) {
  return H.isObject(e) && e.isAxiosError === !0;
}
const ei = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ei).forEach(([e, t]) => {
  ei[t] = e;
});
function Rc(e) {
  const t = new Kr(e), r = ac(Kr.prototype.request, t);
  return H.extend(r, Kr.prototype, t, { allOwnKeys: !0 }), H.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Rc($r(e, a));
  }, r;
}
const tt = Rc(Hn);
tt.Axios = Kr;
tt.CanceledError = gn;
tt.CancelToken = kg;
tt.isCancel = vc;
tt.VERSION = kc;
tt.toFormData = Wa;
tt.AxiosError = _e;
tt.Cancel = tt.CanceledError;
tt.all = function(t) {
  return Promise.all(t);
};
tt.spread = Tg;
tt.isAxiosError = Rg;
tt.mergeConfig = $r;
tt.AxiosHeaders = Nt;
tt.formToJSON = (e) => bc(H.isHTMLForm(e) ? new FormData(e) : e);
tt.getAdapter = Cc.getAdapter;
tt.HttpStatusCode = ei;
tt.default = tt;
const {
  Axios: nm,
  AxiosError: am,
  CanceledError: om,
  isCancel: im,
  CancelToken: sm,
  VERSION: lm,
  all: cm,
  Cancel: um,
  isAxiosError: dm,
  spread: fm,
  toFormData: pm,
  AxiosHeaders: hm,
  HttpStatusCode: gm,
  formToJSON: mm,
  getAdapter: ym,
  mergeConfig: bm
} = tt, Ig = "data:image/png;base64,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";
let ja = Ig;
const Si = (e) => {
  const t = e;
  return e.asurite_id === null && delete t.asurite_id, e.display_name === null && delete t.display_name, { ...{
    id: {
      raw: ""
    },
    campus_address: {
      raw: ""
    },
    city: {
      raw: ""
    },
    state: {
      raw: ""
    },
    asurite_id: {
      raw: ""
    },
    working_title: {
      raw: [""]
    },
    titles: {
      raw: null
    },
    eid: {
      raw: ""
    },
    photo_url: {
      raw: ""
    },
    display_name: {
      raw: ""
    },
    display_last_name: {
      raw: ""
    },
    email_address: {
      raw: ""
    },
    phone: {
      raw: ""
    },
    address_line1: {
      raw: ""
    },
    address_line2: {
      raw: ""
    },
    bio: {
      raw: ""
    },
    short_bio: {
      raw: ""
    },
    url_path_dir1: {
      raw: ""
    },
    url_path_dir2: {
      raw: ""
    },
    facebook: {
      raw: null
    },
    linkedin: {
      raw: null
    },
    twitter: {
      raw: null
    },
    url_host: {
      raw: ""
    },
    body_content: {
      raw: ""
    },
    url: {
      raw: ""
    },
    primary_search_department_affiliation: {
      raw: [""]
    },
    website: {
      raw: ""
    }
  }, ...t };
}, Og = (e) => Array.isArray(e.title) && e.title[0] && e.dept_name ? {
  matchedAffiliationTitle: e.title[0],
  matchedAffiliationDept: e.dept_name
} : {
  matchedAffiliationTitle: e.title,
  matchedAffiliationDept: e.dept_name
}, Ic = (e) => {
  if (!e) return "";
  const t = { SIZE: "size", BREAK: "break" }, r = { MEDIUM: "medium" }, n = () => {
    const i = Date.now(), l = Math.floor(i / 1e3);
    return (Math.floor(l / 100) * 100).toString();
  }, a = new URL(e);
  return a.searchParams.append(
    t.SIZE,
    r.MEDIUM
  ), a.searchParams.append(t.BREAK, n()), a.searchParams.append("blankImage2", "true"), a.toString();
}, pa = ({
  datum: e,
  options: t = {
    size: "small",
    profileURLBase: null,
    fill: !1,
    grid: !1
  },
  appPathFolder: r
}) => {
  var h, p, y;
  const n = Si(e), a = Og(n), i = t.profileURLBase ?? "", l = (h = n.eid) != null && h.raw && ((p = n.eid) == null ? void 0 : p.raw) !== "0" ? n.eid.raw.toString() : n.asurite_id.raw.toString();
  r && (ja = `${r}/img/anon.png`);
  const f = Ic(n.photo_url.raw);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: l ? /* @__PURE__ */ T.jsx(
    si,
    {
      isRequired: !1,
      id: l,
      profileURL: `${i}/profile/${l}`,
      imgURL: f,
      anonImgURL: ja,
      name: n.display_name.raw,
      matchedAffiliationTitle: a.matchedAffiliationTitle,
      matchedAffiliationDept: a.matchedAffiliationDept,
      email: n.email_address.raw,
      telephone: n.phone.raw,
      addressLine1: (y = n.campus_address) == null ? void 0 : y.raw,
      addressLine2: `${n.city.raw} ${n.state.raw}`,
      description: n.bio.raw,
      shortBio: n.short_bio.raw,
      facebookLink: n.facebook.raw,
      linkedinLink: n.linkedin.raw,
      twitterLink: n.twitter.raw,
      website: n.website.raw,
      size: t.size,
      fill: t.fill,
      grid: t.grid
    },
    l
  ) : null });
}, _g = ({
  datum: e,
  options: t = {
    size: "small",
    fill: !1
  },
  appPathFolder: r
}) => {
  const n = Si(e);
  r && (ja = `${r}/img/anon.png`);
  const a = n.eid.raw && n.eid.raw !== "0" ? n.eid.raw.toString() : n.asurite_id.raw.toString(), i = Ic(n.photo_url.raw);
  return /* @__PURE__ */ T.jsx(
    si,
    {
      isRequired: !1,
      id: a,
      profileURL: `/profile/${a}`,
      imgURL: i,
      anonImgURL: ja,
      name: n.display_name.raw,
      titles: n.titles.raw,
      email: n.email_address.raw,
      telephone: n.phone.raw,
      addressLine1: n.address_line1.raw,
      addressLine2: n.address_line2.raw,
      description: n.bio.raw,
      facebookLink: n.facebook.raw,
      linkedinLink: n.linkedin.raw,
      twitterLink: n.twitter.raw,
      size: t.size,
      fill: t.fill
    },
    a
  );
}, nl = ({
  datum: e,
  options: t = {
    size: "small",
    fill: !1
  },
  appPathFolder: r,
  logClick: n = () => {
  },
  requestId: a,
  localSection: i = null,
  props: l
}) => {
  const f = Si(e);
  let h = null;
  return f.meta_description ? h = f.meta_description.raw : h = f.body_content.raw.replace("Skip to main content ", "").replace("Skip to Main Page Content ", ""), /* @__PURE__ */ T.jsx(
    Ll,
    {
      id: f.id.raw,
      name: f.title.raw,
      area: f.url_host.raw,
      description: h,
      cookieTrail: [
        f.url_path_dir1.raw,
        f.url_path_dir2.raw
      ],
      link: f.url.raw,
      size: t.size,
      fill: t.fill,
      logClick: n,
      requestId: a,
      localSection: i,
      ...l
    },
    f.id.raw
  );
};
function Ea(e) {
  try {
    const t = new URL(e), r = t.pathname.replace(/\/+/g, "/");
    return new URL(
      `${t.protocol}//${t.host}${r}${t.search}`
    );
  } catch (t) {
    throw new Error("Invalid URL", t.message);
  }
}
const xe = {
  FACULTY: "web_dir_faculty_staff",
  STUDENTS: "web_dir_students",
  SITES: "web_sites",
  SITES_LOCAL: "web_sites_local",
  WEB_DIRECTORY_DEPARTMENTS: "people_in_dept",
  WEB_DIRECTORY_PEOPLE_AND_DEPS: "profiles_dept_and_people",
  WEB_DIRECTORY_FACULTY_RANK: "web_dir_faculty_rank"
};
function al(e, t, r, n, { ...a }) {
  async function i(l, f) {
    const h = {
      query: e,
      doc_id: t,
      req_id: r,
      tags: n
    };
    let p;
    if (a.loggedIn) {
      const S = {
        "X-CSRF-Token": (await tt.get(`${a.API_URL}/session/token`)).data
      };
      p = await tt.post(
        `${a.API_URL}${a.searchApiVersion}webdir-click`,
        h,
        { headers: S }
      ), l(p.data);
    } else
      p = await tt.post(
        `${a.API_URL}${a.searchApiVersion}webdir-click`,
        h
      ), l(p.data);
    f(p.data);
  }
  return new Promise(i);
}
const Lg = (e, t) => {
  const r = e.reduce((a, i) => a === null || a._meta.score < i._meta.score ? i : a, null), n = t === "web_dir_faculty_staff" ? 100 : 1;
  return r && r._meta.score >= n ? r : null;
}, ha = ({
  engineName: e,
  results: t,
  cardSize: r,
  appPathFolder: n,
  localSection: a,
  props: i
}) => {
  const l = Lg(t.results, e);
  return {
    tab: e,
    page: t.meta.page,
    results: t.results.map(
      (f) => kt[e].converter({
        datum: f,
        options: { size: r, fill: !1 },
        appPathFolder: n,
        logClick: al,
        requestId: t.meta.request_id,
        localSection: a,
        props: { ...i }
      })
    ),
    topResult: l === null ? null : kt[e].converter({
      datum: l,
      options: {
        size: "small",
        profileURLBase: kt[e].profileURLBase,
        fill: !0
      },
      appPathFolder: n,
      logClick: al,
      requestId: t.meta.request_id,
      props: { ...i }
    })
  };
}, Lo = ({
  engineName: e,
  results: t,
  cardSize: r,
  filters: n,
  appPathFolder: a,
  grid: i
}) => {
  var h;
  let l = null, f = 1;
  return kt[e].name === xe.WEB_DIRECTORY_PEOPLE_AND_DEPS ? l = t.map((p) => {
    const { full_record: y, ...S } = p;
    return { ...S, ...y };
  }) : (l = t.results, f = (h = t == null ? void 0 : t.meta) == null ? void 0 : h.page), n && n.peopleIds && (l = l.filter((p) => n.peopleIds.includes(p.asurite_id.raw))), {
    tab: kt[e].name,
    page: f,
    results: l.map((p) => {
      try {
        return kt[e].converter({
          datum: p,
          options: {
            size: "large",
            profileURLBase: "https://search.asu.edu",
            grid: i
          },
          appPathFolder: a
        });
      } catch (y) {
        return console.log(y, p), null;
      }
    })
  };
}, kt = {
  [xe.FACULTY]: {
    name: xe.FACULTY,
    url: "webdir-profiles/faculty-staff",
    needsAuth: !1,
    converter: pa,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r = null, appPathFolder: n }) => ha({
      engineName: xe.FACULTY,
      results: e,
      cardSize: t,
      appPathFolder: n
    }),
    needsTerm: !0,
    doTitleLogic: !0
  },
  [xe.STUDENTS]: {
    name: xe.STUDENTS,
    url: "webdir-profiles/students",
    needsAuth: !0,
    converter: _g,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r = null, appPathFolder: n }) => ha({
      engineName: xe.STUDENTS,
      results: e,
      cardSize: t,
      appPathFolder: n
    }),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [xe.SITES]: {
    name: xe.SITES,
    url: "webdir-search/web",
    needsAuth: !1,
    converter: nl,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (e, t, r = null, n, a = null, { ...i }) => ha(
      xe.SITES_LOCAL,
      e,
      t,
      n,
      a,
      { ...i }
    ),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [xe.SITES_LOCAL]: {
    name: xe.SITES_LOCAL,
    url: "webdir-search/web",
    needsAuth: !1,
    converter: nl,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: ({
      results: e,
      cardSize: t,
      filters: r = null,
      appPathFolder: n,
      localSection: a = null,
      props: { ...i }
    }) => ha({
      engineName: xe.SITES_LOCAL,
      results: e,
      cardSize: t,
      appPathFolder: n,
      localSection: a,
      props: { ...i }
    }),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [xe.WEB_DIRECTORY_DEPARTMENTS]: {
    name: xe.WEB_DIRECTORY_DEPARTMENTS,
    url: "webdir-profiles/faculty-staff/filtered",
    needsAuth: !1,
    converter: pa,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc", "last_name_asc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Lo({
      engineName: xe.WEB_DIRECTORY_DEPARTMENTS,
      results: e,
      cardSize: t,
      filters: r,
      grid: a,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  },
  [xe.WEB_DIRECTORY_FACULTY_RANK]: {
    name: xe.WEB_DIRECTORY_FACULTY_RANK,
    url: "webdir-profiles/faculty-staff/filtered",
    needsAuth: !1,
    converter: pa,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["faculty_rank"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Lo({
      engineName: xe.WEB_DIRECTORY_DEPARTMENTS,
      results: e,
      grid: a,
      cardSize: t,
      filters: r,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  },
  [xe.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    name: xe.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    url: "webdir-profiles/department",
    needsAuth: !1,
    converter: pa,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc", "last_name_asc"],
    method: "POST",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Lo({
      engineName: xe.WEB_DIRECTORY_PEOPLE_AND_DEPS,
      results: e,
      cardSize: t,
      grid: a,
      filters: r,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  }
}, Ng = function({
  engine: e,
  term: t,
  page: r,
  itemsPerPage: n,
  sort: a,
  filters: i,
  display: l,
  rankGroup: f,
  controller: h,
  size: p,
  restClientTag: y
}) {
  async function S(N, W) {
    const C = e.supportedSortTypes.includes(a) ? a : "";
    let k = `${e.API_URL ? `${e.API_URL}${e.searchApiVersion}` : "https://dev-asu-isearch.ws.asu.edu/api/v1/"}${e.url}`, z = null, j = null;
    if (e.method === "GET") {
      if (k = `${k}?sort-by=${C}`, t && (k = `${k}&query=${t}`), r && (k = `${k}&page=${r}`), e.site && (k = `${k}&url_host=${e.site}`), n && (k = `${k}&size=${n}`), i && i.deptIds) {
        const M = i.deptIds.map((R) => `${R}`).join(",");
        k = `${k}&dept_ids=${M}`;
      }
      if (l != null && l.doNotDisplayProfiles) {
        const M = `profiles_to_exclude=${l.doNotDisplayProfiles}`;
        k = `${k}&${M}`;
      }
      if (i && i.peopleIds) {
        const M = i.peopleIds.map((R) => `${R}`).join(",");
        k = `${k}&asurite_ids=${M}`;
      }
      if (i && i.title) {
        const M = `title=${i.title}`;
        k = `${k}&${M}`;
      }
      if (i && i.campuses) {
        const M = `campuses=${i.campuses}`;
        k = `${k}&${M}`;
      }
      if (i && i.expertise) {
        const M = `expertise_areas=${i.expertise}`;
        k = `${k}&${M}`;
      }
      if (i && i.employee) {
        const M = `employee_types=${i.employee}`;
        k = `${k}&${M}`;
      }
      if (i && i.lastInit) {
        const M = `last_init=${i.lastInit}`;
        k = `${k}&${M}`;
      }
      f && (k = `${k}&rank_group=${f}`), y && (k = `${k}&client=${y}`);
      const U = Ea(k);
      j = () => tt.get(U, { signal: h.signal });
    } else {
      if (!i)
        return;
      const U = Ea(
        `${e.API_URL}/session/token`
      );
      z = await tt.get(U);
      const M = {
        "X-CSRF-Token": z.data
      }, R = {
        size: p,
        page: r,
        "sort-by": C || "",
        full_records: !0,
        profiles: i.peopleInDepts,
        last_init: i.lastInit || null,
        profiles_to_exclude: l.doNotDisplayProfiles || null
      };
      y && (k = `${k}?&client=${y}`);
      const ae = Ea(k);
      j = () => tt.post(ae, R, { headers: M });
    }
    j().then((U) => {
      const { data: M } = U;
      N(M);
    }).catch((U) => {
      var M;
      ((M = U.response) == null ? void 0 : M.status) === 403 && W(403);
    });
  }
  return new Promise(S);
}, Oc = ({
  children: e,
  items: t = [],
  renderItem: r,
  columns: n = 3,
  gap: a = 3,
  className: i,
  rowClassName: l,
  colClassName: f
}) => {
  const h = () => typeof n == "number" ? `col-12 col-md-${Math.floor(12 / n)}` : typeof n == "object" ? Object.entries(n).map(([y, S]) => `${y === "xs" ? "col" : `col-${y}`}-${Math.floor(12 / S)}`).join(" ") : "col-12 col-md-4", p = () => (r ? t.map((S, N) => r(S, N)) : ht.Children.toArray(e)).map((S, N) => /* @__PURE__ */ T.jsx(
    "div",
    {
      className: `${h()} ${f || ""} mb-${a}`,
      children: S
    },
    S.id ? S.id : N
  ));
  return /* @__PURE__ */ T.jsx("div", { className: `uds-grid ${i || ""}`, children: /* @__PURE__ */ T.jsx("div", { className: `row ${l || ""}`, children: p() }) });
};
Oc.propTypes = {
  children: I.node,
  items: I.arrayOf(I.shape({})),
  renderItem: I.func,
  columns: I.oneOfType([
    I.number,
    I.shape({
      xs: I.number,
      sm: I.number,
      md: I.number,
      lg: I.number,
      xl: I.number
    })
  ]),
  gap: I.number,
  className: I.string,
  rowClassName: I.string,
  colClassName: I.string
};
const Pg = yt.div`
  .sort-form {
    margin: 0;
    max-width: 75%;
    min-width: 250px;

    label {
      margin-right: 16px;
      margin-bottom: 0;
      line-height: 36px;
      text-align: center;
      white-space: nowrap;
    }
  }
`, Dg = yt.div`
  .search-message-emphasis {
    font-weight: bold;
  }
`, _c = ({ term: e, number: t, loggedIn: r, engine: n, GASource: a }) => {
  const [i, l] = Ge("");
  function f() {
    let h = "";
    try {
      const p = new URLSearchParams(window.location.search), y = p.get("search-tabs"), S = p.get("q");
      return h = `search-tabs=${y}&q=${S}`, h;
    } catch (p) {
      return console.error(p), "";
    }
  }
  return mt(() => {
    const h = f();
    l(h);
  }, []), /* @__PURE__ */ T.jsxs(Dg, { children: [
    /* @__PURE__ */ T.jsx("span", { children: "Your search for " }),
    /* @__PURE__ */ T.jsxs("span", { className: "search-message-emphasis", children: [
      e,
      " "
    ] }),
    /* @__PURE__ */ T.jsx("span", { children: "returned " }),
    /* @__PURE__ */ T.jsxs("span", { className: "search-message-emphasis", children: [
      t,
      " "
    ] }),
    a === "all faculty and staff results" && /* @__PURE__ */ T.jsx("span", { children: "faculty and staff " }),
    /* @__PURE__ */ T.jsxs("span", { children: [
      " ",
      !r && n === "web_dir_students" && /* @__PURE__ */ T.jsx(T.Fragment, { children: "public" }),
      " results.",
      " "
    ] }),
    !r && n === "web_dir_students" && /* @__PURE__ */ T.jsxs("span", { children: [
      /* @__PURE__ */ T.jsx(
        "a",
        {
          href: `/caslogin?returnto=${encodeURIComponent(
            `/?${i}`
          )}`,
          children: "Sign in"
        }
      ),
      " ",
      "to view all student results."
    ] })
  ] });
};
_c.propTypes = {
  term: I.string,
  number: I.number,
  loggedIn: I.bool,
  engine: I.string,
  GASource: I.string
};
var Jr, dn, Lc, Nc;
const Ba = class Ba {
  constructor(t, r) {
    no(this, dn);
    no(this, Jr);
    this.engine = t, this.filters = r, ao(this, Jr, null);
  }
  static processURL(t) {
    return Ea(t);
  }
  /**
   * Fetches profiles from the API
   * @param {Array} profiles - Array of profiles to fetch
   * @param {Boolean} fullRecords - Whether to fetch full records or not
   * @returns {Promise} - The response from the API
   * @memberof ProfileService
   * */
  async fetchProfilesFromApi(t, r = !1) {
    await this.getSessionToken();
    const n = Ba.processURL(
      `${this.engine.API_URL}${this.engine.searchApiVersion}/webdir-profiles/department?client=webdir`
    );
    return (await tt.post(
      n,
      {
        full_records: r,
        profiles: t
      },
      {
        headers: {
          "X-CSRF-Token": this.sessionToken
        }
      }
    )).data;
  }
  async getSessionToken() {
    if (!ro(this, Jr)) {
      const t = Ba.processURL(
        `${this.engine.API_URL}/session/token`
      );
      ao(this, Jr, (async () => {
        const r = await tt.get(t);
        return this.sessionToken = r.data, this.sessionToken;
      })());
    }
    return ro(this, Jr);
  }
  /**
   * This method is directly called from the SearchResultsList component and adds a
   * "title" and "dept_name" field to the individual results used in dataConverter.js
   */
  async processProfiles(t, r) {
    return this.engine.method === "POST" || !this.engine.doTitleLogic || r.results.length < 1 ? r : (await this.getSessionToken(), t ? oo(this, dn, Lc).call(this, r) : this.engine.method === "GET" ? oo(this, dn, Nc).call(this, r) : r);
  }
};
Jr = new WeakMap(), dn = new WeakSet(), Lc = async function(t) {
  const r = t.results.map((a) => ({
    asurite_id: a.asurite_id.raw,
    dept_id: null
  })), n = await this.fetchProfilesFromApi(r);
  return {
    ...t,
    results: t.results.map((a, i) => ({
      ...a,
      title: n[i].title,
      dept_name: n[i].dept_name
    }))
  };
}, Nc = async function(t) {
  const r = t.results.map(({ asurite_id: a, deptids: i }) => ({
    asurite_id: a.raw,
    dept_id: this.filters.deptIds.find(
      (l) => i.raw.includes(l)
    )
  })), n = await this.fetchProfilesFromApi(r);
  return {
    ...t,
    results: t.results.map((a, i) => ({
      ...a,
      title: n[i].title,
      dept_name: n[i].dept_name
    }))
  };
};
let ti = Ba;
const jg = yt.div`
  max-width: 100%;

  .uds-results-card {
    margin-bottom: 48px;
  }
  .micro,
  .preview {
    .results-found {
      -webkit-mask-image: -webkit-gradient(
        linear,
        left 60%,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0.2))
      );
    }
  }
  .uds-person-profile:not(:first-child) {
    padding-top: 32px;
  }
  .large {
    .uds-person-profile,
    .uds-results-card {
      padding-top: 48px;
      border-top: 1px solid #d0d0d0;

      :first-child {
        border: none;
      }
    }
  }
  .micro {
    max-width: 500px;
  }
  .results-title {
    font-size: 40px;
    font-weight: bold;
    max-width: 100%;
  }
  .results-found {
    margin-bottom: 32px;
    span:not(.dept) {
      font-weight: bold;
    }
    // These styles are duplicated from the _person-profile.scss file in unity-bootstrap-theme
    ul.person-contact-info {
      flex-wrap: wrap;
      gap: 0.5rem 1rem;
      li {
        margin: 0;
      }
      li:nth-child(-n + 2) {
        white-space: nowrap;
      }
    }

    .uds-grid-profile {
      ul.person-contact-info {
        gap: 8px;
      }
    }
    .person-address span {
      font-weight: normal;
    }
  }
  .results-title-small {
    margin-bottom: 32px;
    font-size: 26px;
    font-weight: bold;
  }
  .summary {
    display: flex;
    justify-content: space-between;
  }
  .summary-button {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .micro-options {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;

    &.push-right {
      justify-content: flex-end;
    }
  }
`, Ir = ({
  term: e,
  sort: t,
  type: r,
  engine: n,
  titleText: a,
  showSearchMessage: i,
  seeAllResultsText: l,
  itemsPerPage: f,
  onExpandClick: h,
  GASource: p,
  setPromotedResult: y,
  hidePaginator: S,
  registerResults: N,
  filters: W,
  loggedIn: C,
  profilesToFilterOut: w,
  display: k,
  appPathFolder: z,
  localSection: j,
  rankGroup: U,
  icon: M,
  restClientTag: R,
  grid: ae
}) => {
  const [ue, ee] = Ge([]), [se, ve] = Ge(!0), [Le, he] = Ge(null), [pe, Te] = Ge(1), [de, Je] = Ge(null), [Ue, De] = Ge(null), qe = r === "micro" ? "micro" : "large", Ke = Zr(null), Ze = new AbortController(), G = (V, _) => {
    if (!V) return {};
    const ce = n.formatter({
      results: V,
      page: pe,
      itemsPerPage: f,
      cardSize: qe,
      grid: _,
      filters: W,
      appPathFolder: z || n.appPathFolder,
      localSection: j,
      props: {
        API_URL: n.API_URL,
        searchApiVersion: n.searchApiVersion,
        loggedIn: C
      }
    }), re = ce.results.map((oe, Z) => {
      var me, ie;
      const fe = {
        ...oe.props,
        key: Z,
        GASource: p
      };
      return {
        ...oe,
        props: fe,
        key: ((ie = (me = oe.props) == null ? void 0 : me.children) == null ? void 0 : ie.key) ?? Z
      };
    });
    return ee(re), ce;
  }, L = async (V = pe) => {
    var _;
    if (e && e.length > 0 || !n.needsTerm) {
      ve(!0);
      try {
        let re = await Ng({
          engine: n,
          term: e,
          page: V,
          itemsPerPage: f,
          sort: t,
          filters: W,
          display: k,
          rankGroup: U,
          controller: Ze,
          size: k == null ? void 0 : k.profilesPerPage,
          restClientTag: R
        });
        re = await new ti(n, W).processProfiles(
          e,
          re
        ), De(re);
        const Z = G(re, ae);
        N && N(Z.page.total_results), n.method === "GET" && Te(Z.page.current), n.method === "POST" ? Je((_ = re[0]) == null ? void 0 : _.total_results) : Je(Z.page.total_results), y && y(Z.topResult), i && he(
          /* @__PURE__ */ T.jsx(
            _c,
            {
              term: e,
              number: Z.page.total_results,
              loggedIn: C,
              engine: n.name,
              GASource: p
            }
          )
        ), ve(!1), sn({
          event: "search",
          action: "type",
          name: "onenter",
          type: "search asu.edu",
          section: "search",
          text: e
        });
      } catch (ce) {
        console.error(ce), ve(!1), ee([]);
      }
    }
  }, Q = (V) => {
    Te(V), L(V), ue.length > 0 && (Ke.current.scrollIntoView(!0), Ke.current.firstElementChild.focus());
  };
  mt(() => {
    Ue && G(Ue, ae);
  }, [ae]), mt(() => (L(1), () => Ze == null ? void 0 : Ze.abort()), [e, t, W, f, w]);
  function q(V) {
    sn({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: p,
      text: V
    }), h();
  }
  const v = /* @__PURE__ */ T.jsx(
    kr,
    {
      color: "maroon",
      label: l,
      size: "small",
      onClick: () => q("See all results from subdomain")
    }
  );
  return /* @__PURE__ */ T.jsxs(jg, { children: [
    !se && /* @__PURE__ */ T.jsxs("div", { className: r, children: [
      Le && r !== "micro" && /* @__PURE__ */ T.jsx("div", { className: "message", children: /* @__PURE__ */ T.jsx("div", { className: "results-search-message", children: Le }) }),
      a && /* @__PURE__ */ T.jsxs("div", { className: `results-title${r === "micro" ? "-small" : ""}`, children: [
        a,
        " ",
        M && /* @__PURE__ */ T.jsx("i", { className: `${M == null ? void 0 : M[0]} fa-${M == null ? void 0 : M[1]}` })
      ] }),
      ue.length > 0 && !se ? /* @__PURE__ */ T.jsx("div", { ref: Ke, className: "results-found", children: ae ? /* @__PURE__ */ T.jsx(Oc, { columns: { sm: 1, lg: 2, xl: 3 }, gap: 4, children: ue }) : ue }) : /* @__PURE__ */ T.jsx("div", { className: "results-found", children: "No results found" }),
      !S && de >= f && /* @__PURE__ */ T.jsx(
        yi,
        {
          type: "default",
          background: "white",
          currentPage: pe,
          totalPages: Math.ceil(de / f) > 100 ? 100 : Math.ceil(de / f),
          onChange: (V, _) => Q(_),
          showFirstButton: !0,
          showLastButton: !0
        }
      ),
      r === "preview" && /* @__PURE__ */ T.jsx("div", { className: "summary", children: v }),
      r === "micro" && /* @__PURE__ */ T.jsxs("div", { className: "summary", children: [
        Le,
        v
      ] })
    ] }),
    se && /* @__PURE__ */ T.jsx("div", { children: "Loading..." })
  ] });
};
Ir.propTypes = {
  term: I.string,
  type: I.string,
  // eslint-disable-next-line react/forbid-prop-types
  engine: I.object,
  seeAllResultsText: I.string,
  sort: I.string,
  titleText: I.string,
  showSearchMessage: I.bool,
  itemsPerPage: I.number,
  onExpandClick: I.func,
  GASource: I.string,
  setPromotedResult: I.func,
  hidePaginator: I.bool,
  registerResults: I.func,
  // eslint-disable-next-line react/forbid-prop-types
  filters: I.object,
  loggedIn: I.bool,
  profilesToFilterOut: I.string,
  display: I.shape({
    defaultSort: I.string,
    doNotDisplayProfiles: I.string,
    profilesPerPage: I.string,
    usePager: I.string
  }),
  appPathFolder: I.string,
  localSection: I.bool,
  rankGroup: I.string,
  icon: I.arrayOf(I.string),
  restClientTag: I.string,
  grid: I.bool
};
const Bg = yt.div`
  // Google Programmable Search styles
  .gsc-control-cse {
    font-size: 1rem;
    .gsc-table-result {
      font-size: 1rem;
    }
    .gs-spelling,
    .gs-result .gs-title,
    .gs-result .gs-title * {
      font-size: 1.5rem;
    }
    .gsc-webResult.gsc-result {
      padding: 0;
      margin-bottom: 3rem;
    }
    .gsc-thumbnail-inside {
      padding: 0;
    }
    &.gsc-control-cse-en {
      padding: 0;
    }
    .gsc-orderby-container {
      word-break: normal;
    }
    .gsc-result-info {
      font-size: 1rem;
      color: #000;
    }
    .gsc-above-wrapper-area {
      border: none;
    }
    .gs-promotion-table {
      padding: 2rem;
    }
    .gs-promotion-text-cell .gs-visibleUrl,
    .gs-promotion-text-cell .gs-snippet {
      font-size: 1rem;
    }
    // Pager
    .gsc-resultsbox-visible .gsc-results .gsc-cursor-box .gsc-cursor-page {
      font-weight: bold;
      color: #000;
      background-color: transparent;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      margin-right: 1rem;
    }
    .gsc-resultsbox-visible
      .gsc-results
      .gsc-cursor-box
      .gsc-cursor-page:hover {
      background-color: #e8e8e8;
      color: #000;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      border-radius: 400px;
      margin-right: 1rem;
      text-decoration: none;
    }
    .gsc-resultsbox-visible
      .gsc-results
      .gsc-cursor-box
      .gsc-cursor-page.gsc-cursor-current-page {
      background-color: #8c1d40;
      color: #fff;
      padding: 0.5rem 0.75rem;
      line-height: 1rem;
      border-radius: 400px;
      margin-right: 1rem;
    }
  }
  // End Google Programmable Search styles
  .results-title {
    font-size: 40px;
    font-weight: bold;
    max-width: 100%;
    @media (max-width: 576px) {
      // mobile breakpoint mapped to $uds-breakpoint-sm
      display: none;
    }
  }

  display: flex;
  flex-direction: column;
  .all-message {
    margin-bottom: 88px;

    @media (max-width: 768px) {
      margin-bottom: 12px;
    }
  }
  .all-content {
    display: grid;
    grid-template-columns: 700px 1fr;
    grid-column-gap: 126px;
    @media screen and (max-width: 1280px) {
      grid-template-columns: 500px 1fr;
    }
    @media screen and (max-width: 1012px) {
      grid-template-columns: 1fr;
    }

    .all-content-column {
      display: flex;
      flex-direction: column;

      .all-content-item {
        margin-bottom: 72px;
      }
      .top-results {
        .uds-results-card {
          margin-bottom: 32px;
        }
      }
    }
  }
  @media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, auto);
    grid-row-gap: 48px;
    grid-column-gap: 0px;
    grid-template-areas:
      "header"
      "top"
      "subdomain"
      "all"
      "faculty"
      "students"
      "links";
  }
`, Fg = yt.div`
  display: flex;
  flex-direction: column;
`, Mg = yt.div`
  display: grid;
  grid-template-columns: 792px auto;
  grid-template-areas: "results sort";
  .faculty-sort {
    grid-area: sort;
  }
  .faculty-results {
    grid-area: results;
  }
  @media (max-width: 1268px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(1, auto);
    grid-row-gap: 40px;
    grid-template-areas:
      "sort"
      "results";
  }
`, Ug = yt.div`
  display: flex;
  flex-direction: column;
`, Pc = ({
  term: e,
  engines: t,
  site: r,
  goToTab: n,
  setTotalResults: a,
  totalResults: i,
  loggedIn: l
}) => {
  const [f, h] = Ge(null), [p, y] = Ge(null), S = {
    sites: "web_sites",
    faculty: "web_dir_faculty_staff",
    students: "web_dir_students"
  }, N = (W) => {
    a((C) => C + W);
  };
  return mt(() => () => a(0), []), mt(() => {
    const W = "007921449323584335659:7htbgpmmreu", C = document.createElement("script");
    C.type = "text/javascript", C.async = !0, C.src = `https://cse.google.com/cse.js?cx=${W}`;
    const w = document.getElementsByTagName("script")[0];
    w.parentNode.insertBefore(C, w);
  }), /* @__PURE__ */ T.jsxs(Bg, { children: [
    /* @__PURE__ */ T.jsx("div", { className: "all-message" }),
    /* @__PURE__ */ T.jsxs("div", { className: "all-content", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "all-content-column", children: [
        (p || f) && /* @__PURE__ */ T.jsxs("div", { className: "top-results all-content-item", children: [
          /* @__PURE__ */ T.jsx("div", { children: p }),
          /* @__PURE__ */ T.jsx("div", { children: f })
        ] }),
        r && /* @__PURE__ */ T.jsx("div", { className: "subdomain-results all-content-item", children: /* @__PURE__ */ T.jsx(
          Ir,
          {
            engine: t[xe.SITES_LOCAL],
            term: e,
            type: "preview",
            itemsPerPage: 3,
            titleText: `All results from ${r}`,
            seeAllResultsText: `See all results from ${r}`,
            onExpandClick: () => n(S.sites),
            GASource: `all results from ${r}`,
            hidePaginator: !0,
            registerResults: N,
            localSection: !0,
            loggedIn: l,
            restClientTag: "asuis"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "all-results all-content-item", children: e && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("div", { className: "results-title", children: "All asu.edu results" }),
          /* @__PURE__ */ T.jsx("div", { className: "gcse-searchresults-only" })
        ] }) })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "all-content-column", children: [
        /* @__PURE__ */ T.jsx("div", { className: "faculty-and-staff all-content-item", children: /* @__PURE__ */ T.jsx(
          Ir,
          {
            engine: t[xe.FACULTY],
            term: e,
            itemsPerPage: 3,
            titleText: "Faculty and staff",
            type: "micro",
            seeAllResultsText: "See all results",
            onExpandClick: () => n(S.faculty),
            GASource: "faculty and staff",
            setPromotedResult: h,
            hidePaginator: !0,
            registerResults: N,
            restClientTag: "asuis"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "students all-content-item", children: /* @__PURE__ */ T.jsx(
          Ir,
          {
            engine: t[xe.STUDENTS],
            term: e,
            itemsPerPage: 3,
            titleText: "Students",
            type: "micro",
            seeAllResultsText: "See all results",
            onExpandClick: () => n(S.students),
            GASource: "students",
            hidePaginator: !0,
            registerResults: N,
            icon: ["fa", "lock"],
            restClientTag: "asuis"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "quick-links all-content-item", children: /* @__PURE__ */ T.jsx(Il, {}) })
      ] })
    ] })
  ] }, document.location.href);
};
Pc.propTypes = {
  term: I.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: I.object,
  site: I.string,
  goToTab: I.func,
  setTotalResults: I.func,
  totalResults: I.number,
  loggedIn: I.bool
};
const Ei = ({ sort: e, onChange: t, customSortOptions: r }) => {
  const [n, a] = Ge(e), i = r || [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" }
  ], l = (y) => {
    const S = i.filter(
      (N) => N.value === y && !N.disabled
    );
    S.length >= 1 ? a(S[0].value) : a("default");
  }, f = () => {
    var S;
    let y = (S = i.find((N) => N.value === e)) == null ? void 0 : S.label;
    return y === "Relevancy" && (y = "Sort by Relevancy"), y;
  }, h = () => {
    sn({
      event: "collapse",
      action: "open",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: f()
    });
  }, p = (y) => {
    t(y), sn({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: f()
    });
  };
  return mt(() => (l(e), () => a("default")), [e]), /* @__PURE__ */ T.jsx(Pg, { children: /* @__PURE__ */ T.jsx("form", { className: "uds-form sort-form faculty-sort", children: /* @__PURE__ */ T.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: "sortBySelect", children: "Sort by" }),
    /* @__PURE__ */ T.jsx(
      "select",
      {
        className: "form-select",
        id: "sortBySelect",
        onChange: (y) => {
          p(y.target.value), a(y.target.value);
        },
        onClick: h,
        value: n,
        children: i.map(
          (y) => Object.prototype.hasOwnProperty.call(y, "disabled") ? /* @__PURE__ */ T.jsx("option", { disabled: !0, value: "default", children: y.label }, y.label) : /* @__PURE__ */ T.jsx("option", { value: y.value, children: y.label === "Relevancy" ? "Sort by Relevancy" : y.label }, y.label)
        )
      }
    )
  ] }) }) });
};
Ei.propTypes = {
  sort: I.string,
  onChange: I.func,
  customSortOptions: I.arrayOf(
    I.shape({
      value: I.string,
      label: I.string
    })
  )
};
const Dc = ({ engines: e, term: t, sort: r, onSortChange: n }) => /* @__PURE__ */ T.jsxs(Mg, { children: [
  /* @__PURE__ */ T.jsx("div", { className: "faculty-sort", children: /* @__PURE__ */ T.jsx(Ei, { sort: r, onChange: (a) => n(a) }) }),
  /* @__PURE__ */ T.jsx("div", { className: "faculty-results", children: /* @__PURE__ */ T.jsx(
    Ir,
    {
      term: t,
      engine: e[xe.FACULTY],
      itemsPerPage: 6,
      type: "full",
      sort: r,
      GASource: "all faculty and staff results",
      titleText: "All faculty and staff results",
      showSearchMessage: !0,
      restClientTag: "asuis"
    }
  ) })
] });
Dc.propTypes = {
  term: I.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: I.object,
  sort: I.string,
  onSortChange: I.func
};
const jc = ({ engines: e, term: t, site: r, loggedIn: n }) => /* @__PURE__ */ T.jsx(Fg, { children: /* @__PURE__ */ T.jsx(
  Ir,
  {
    engine: e[xe.SITES_LOCAL],
    term: t,
    itemsPerPage: 6,
    type: "full",
    GASource: r,
    titleText: r,
    loggedIn: n
  }
) });
jc.propTypes = {
  term: I.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: I.object,
  site: I.string,
  loggedIn: I.bool
};
const Bc = ({ engines: e, term: t, loggedIn: r }) => /* @__PURE__ */ T.jsx(Ug, { children: /* @__PURE__ */ T.jsx(
  Ir,
  {
    term: t,
    engine: e[xe.STUDENTS],
    itemsPerPage: 6,
    type: "full",
    GASource: "all student results",
    titleText: "All Student results",
    loggedIn: r,
    showSearchMessage: !0,
    restClientTag: "asuis"
  }
) });
Bc.propTypes = {
  term: I.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: I.object,
  loggedIn: I.bool
};
const _n = {
  all: "all",
  sites: "web_sites",
  faculty: "web_dir_faculty_staff",
  students: "web_dir_students"
}, zg = yt.div`
  max-width: 1200px;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 72px;
  h1 {
    margin-left: 12px;
  }

  .options-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 70px;
    form {
      width: 50%;
      .form-group {
        display: flex;
        margin-bottom: 0;
        input {
          margin-right: 16px;
          margin-bottom: 0;
        }
        .desktop-button {
          display: inline;
        }
        .mobile-button {
          display: none;
        }
      }
    }
    .profile-options {
      display: flex;
      flex-direction: row;
      .desktop-button {
        display: inline;
        &:not(:nth-last-child(2)) {
          margin-right: 24px;
        }
      }
      .mobile-button {
        display: none;
        &:not(:last-child) {
          margin-bottom: 24px;
        }
      }
    }
  }

  .message {
    grid-area: message;
    margin-bottom: 56px;
  }

  @media (max-width: 1268px) {
    .options-area {
      flex-direction: column;
      form {
        width: 100%;
        margin-bottom: 24px;
        max-width: 100%;

        .form-group {
          flex-direction: column;

          input {
            margin-right: 0;
            margin-bottom: 24px;
          }
          .desktop-button {
            display: none;
          }
          .mobile-button {
            display: inline;
          }
        }
      }
      .profile-options {
        display: flex;
        flex-direction: column;
        a:not(:last-child) {
          margin-bottom: 16px;
        }
        .desktop-button {
          display: none;
        }
        .mobile-button {
          display: inline;
        }
      }
    }
  }
`;
function Fc({
  API_URL: e,
  searchApiVersion: t,
  loggedIn: r,
  deptAdmin: n,
  profileURLBase: a,
  appPathFolder: i
}) {
  const l = "search-tabs", f = "q", h = "url_host", [p, y] = Ge(""), [S, N] = Ge(""), [W, C] = Ge(0), [w, k] = Ge(""), [z, j] = ll({
    [l]: _n.all
  }), [U] = Ge({}), [M, R] = Ge(null), ae = Zr(null), ue = {
    filters: U,
    API_URL: e,
    searchApiVersion: t,
    profileURLBase: a || "https://search.asu.edu",
    appPathFolder: i
  }, ee = {
    [xe.FACULTY]: { ...kt[xe.FACULTY], ...ue },
    [xe.STUDENTS]: {
      ...kt[xe.STUDENTS],
      ...ue
    },
    [xe.SITES_LOCAL]: {
      ...kt[xe.SITES_LOCAL],
      ...ue,
      site: M
    },
    [xe.SITES]: { ...kt[xe.SITES], ...ue }
  }, se = (de, Je) => {
    const Ue = {};
    for (const De of z.entries())
      Ue[De[0]] = De[1];
    Ue[de] = Je, j(Ue);
  }, ve = () => {
    w.length > 0 && (C(0), se(f, w));
  }, Le = (de) => {
    N(de);
  };
  mt(() => {
    z.get(h) && R(z.get(h)), z.get(f) && (y(z.get(f)), k(z.get(f)));
  }, [z, S]), mt(() => {
    ae.current && ae.current.focus();
  }, []);
  const he = (de) => {
    se(l, de), C(0);
  }, pe = (de) => {
    de.keyCode === 13 && (de.preventDefault(), ve());
  }, Te = (de) => p ? de : id[z.get(l)];
  return /* @__PURE__ */ T.jsxs(zg, { children: [
    /* @__PURE__ */ T.jsx("h1", { children: /* @__PURE__ */ T.jsx("span", { className: "highlight-gold", children: "Search" }) }),
    /* @__PURE__ */ T.jsxs("div", { className: "options-area", children: [
      /* @__PURE__ */ T.jsx("form", { className: "uds-form", children: /* @__PURE__ */ T.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ T.jsx(
          "input",
          {
            type: "text",
            className: "form-control",
            id: "search-input",
            placeholder: "Search asu.edu",
            value: w,
            onChange: (de) => k(de.target.value),
            onKeyDown: pe,
            ref: ae
          }
        ),
        /* @__PURE__ */ T.jsx(
          kr,
          {
            color: "maroon",
            icon: ["fas", "search"],
            label: "Search",
            onClick: () => ve()
          }
        )
      ] }) }),
      /* @__PURE__ */ T.jsxs("div", { className: "profile-options", children: [
        /* @__PURE__ */ T.jsx("div", { className: "desktop-button", children: /* @__PURE__ */ T.jsx(
          kr,
          {
            color: "gray",
            icon: ["fas", "lock"],
            label: "Edit my profile",
            href: "/profile-edit"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "mobile-button", children: /* @__PURE__ */ T.jsx(
          kr,
          {
            color: "gray",
            icon: ["fas", "lock"],
            label: "Edit my profile",
            href: "/profile-edit",
            size: "small"
          }
        ) }),
        r && n && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("div", { className: "desktop-button", children: /* @__PURE__ */ T.jsx(
            kr,
            {
              color: "gray",
              icon: ["fas", "lock"],
              label: "Department admin",
              href: "/groups"
            }
          ) }),
          /* @__PURE__ */ T.jsx("div", { className: "mobile-button", children: /* @__PURE__ */ T.jsx(
            kr,
            {
              color: "gray",
              icon: ["fas", "lock"],
              label: "Department admin",
              href: "/groups",
              size: "small"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs(
      vi,
      {
        initialTab: z.get(l),
        onTabChange: (de) => he(de),
        children: [
          /* @__PURE__ */ T.jsx(nn, { id: _n.all, title: "All ASU Search", children: Te(
            /* @__PURE__ */ T.jsx(
              Pc,
              {
                totalResults: W,
                setTotalResults: C,
                engines: ee,
                site: M,
                goToTab: he,
                term: p,
                loggedIn: r
              }
            )
          ) }),
          M && /* @__PURE__ */ T.jsx(nn, { id: _n.sites, title: M, children: Te(
            /* @__PURE__ */ T.jsx(
              jc,
              {
                loggedIn: r,
                engines: ee,
                site: M,
                term: p
              }
            )
          ) }),
          /* @__PURE__ */ T.jsx(nn, { id: _n.faculty, title: "Faculty and Staff", children: Te(
            /* @__PURE__ */ T.jsx(
              Dc,
              {
                engines: ee,
                term: p,
                sort: S,
                onSortChange: (de) => Le(de)
              }
            )
          ) }),
          /* @__PURE__ */ T.jsx(nn, { id: _n.students, icon: ["fa", "lock"], title: "Students", children: Te(
            /* @__PURE__ */ T.jsx(
              Bc,
              {
                loggedIn: r,
                engines: ee,
                term: p
              }
            )
          ) })
        ]
      }
    )
  ] });
}
Fc.propTypes = {
  API_URL: I.string,
  searchApiVersion: I.string,
  loggedIn: I.bool,
  deptAdmin: I.bool,
  profileURLBase: I.string,
  appPathFolder: I.string
};
var Ci, ol = fl;
Ci = ol.createRoot, ol.hydrateRoot;
const Hg = (e) => /* @__PURE__ */ T.jsx(cl, { children: /* @__PURE__ */ T.jsx(ul, { children: /* @__PURE__ */ T.jsx(dl, { path: "*", element: /* @__PURE__ */ T.jsx(Fc, { ...e }) }) }) }), No = {
  1: "Faculty",
  2: "Academic Professionals",
  3: "Other Faculty and Academic Professionals"
}, Mc = ({
  filters: e,
  API_URL: t,
  searchApiVersion: r,
  appPathFolder: n,
  deptIds: a,
  display: i,
  profileURLBase: l,
  searchType: f,
  grid: h
}) => {
  const [p, y] = Ge({}), [S, N] = Ge(null), [W, C] = Ge(!0), [w, k] = Ge({}), z = 6, j = "faculty_rank", U = new URL(
    `${t}${r}${kt[xe.WEB_DIRECTORY_FACULTY_RANK].url}`
  );
  U.searchParams.append("sort_by", f), U.searchParams.append("dept_ids", a), U.searchParams.append("page", "1"), U.searchParams.append("size", "1");
  const M = async (ee) => {
    var he;
    const se = `${U}&rank_group=${ee}`, Le = await (await fetch(se)).json();
    return { rankGroup: ee, length: (he = Le.results) == null ? void 0 : he.length };
  };
  mt(() => {
    const ee = { ...e };
    ee.deptIds = a.split(","), y(ee);
    const se = Object.keys(No).map(M);
    Promise.all(se).then((ve) => {
      const Le = ve.reduce((he, { rankGroup: pe, length: Te }) => (Te > 0 && (he[pe] = No[pe]), he), {});
      k(Le), C(!1);
    });
  }, [a, S]);
  const R = {
    filters: e,
    API_URL: t,
    searchApiVersion: r,
    profileURLBase: l || "https://search.asu.edu",
    appPathFolder: n
  }, ae = {
    [xe.WEB_DIRECTORY_FACULTY_RANK]: {
      ...kt[xe.WEB_DIRECTORY_FACULTY_RANK],
      ...R
    }
  }, ue = {
    faculty_rank: xe.WEB_DIRECTORY_FACULTY_RANK
  };
  return W ? /* @__PURE__ */ T.jsx("div", { children: "Loading..." }) : Object.keys(w).length ? /* @__PURE__ */ T.jsx(vi, { onTabChange: N, children: Object.keys(w).map((ee) => /* @__PURE__ */ T.jsx(
    nn,
    {
      id: `faculty-${ee}`,
      title: No[ee],
      children: /* @__PURE__ */ T.jsx(
        Ir,
        {
          engine: ae[ue[f]],
          itemsPerPage: parseInt(i.profilesPerPage, 10) || z,
          size: "large",
          sort: j,
          hidePaginator: i.usePager !== "1",
          filters: p,
          profilesToFilterOut: i.doNotDisplayProfiles,
          display: i,
          rankGroup: ee.toString(),
          restClientTag: "asuis",
          grid: h
        }
      )
    },
    ee
  )) }) : /* @__PURE__ */ T.jsxs("div", { children: [
    "No faculty rank data found for department ",
    a
  ] });
};
Mc.propTypes = {
  deptIds: I.string,
  API_URL: I.string,
  searchApiVersion: I.string,
  searchType: I.string,
  profileURLBase: I.string,
  appPathFolder: I.string,
  display: I.shape({
    defaultSort: I.string,
    doNotDisplayProfiles: I.string,
    profilesPerPage: I.string,
    usePager: I.string
  }),
  filters: I.shape({
    employee: I.string,
    expertise: I.string,
    title: I.string,
    campuses: I.string
  }),
  grid: I.bool
};
const Wg = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
], Qg = yt.fieldset`
  width: 85%;
  margin: 0 0 2rem 0;

  .choices-wrapper {
    position: relative;
  }

  legend {
    font-size: 1rem;
    font-weight: bold;
  }
  .choices-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    &:focus {
      outline: none !important;
      box-shadow: 0px 0px 0px 2px #ffffff, 0px 0px 0px 4px #191919 !important;
    }

    &::-webkit-scrollbar {
      display: none;
    }
    .choice {
      &:hover {
        text-decoration: none;
      }
      font-weight: bold;
      text-decoration: underline;
      border: none;
      background-color: transparent;
      color: #8c1d40;
      &:is(:first-child) {
        padding-left: 0px;
      }
      white-space: nowrap;
      margin: 0 8px;
      padding: 6px 12px;
      &.selected {
        color: white;
        z-index: 3;
        background-color: #8c1d40;
        border-radius: 300px;
      }
    }
  }
`, Uc = ({
  filterLabel: e,
  choices: t = [],
  onChoose: r = () => {
  },
  resetFilters: n = () => {
  }
}) => {
  const [a, i] = Ge(null), [l, f] = Ge(-1), [h, p] = Ge(0), y = Zr(null), [S, N] = Ge(0), [W, C] = Ge(0);
  mt(() => {
    const j = () => {
      N(y.current.scrollLeft);
    };
    return y.current && (y.current.addEventListener("scroll", j), j()), () => {
      var U;
      return (U = y.current) == null ? void 0 : U.removeEventListener("scroll", j);
    };
  }, [W]), mt(() => {
    const j = () => {
      y.current && C(
        y.current.scrollWidth - y.current.offsetWidth
      );
    };
    return y.current && (y.current.addEventListener("resize", j), j()), () => {
      var U;
      return (U = y.current) == null ? void 0 : U.removeEventListener("resize", j);
    };
  }, []), mt(() => {
    if (y.current) {
      const j = y.current.children.length;
      p(j);
    }
  }, []);
  const w = (j) => {
    var U;
    if (y.current) {
      if (j.key === "ArrowRight" && l + 1 < h) {
        const M = (U = y.current) == null ? void 0 : U.children[l + 1];
        f(l + 1), M.focus();
      } else if (j.key === "ArrowLeft" && l - 1 >= 0) {
        const M = y.current.children[l - 1];
        f(l - 1), M.focus();
      }
    }
  }, k = (j) => {
    i(j), r(j);
  }, z = (j) => {
    const U = y.current, M = U.scrollWidth - U.clientWidth;
    let ae = U.scrollLeft + 200 * j;
    ae = Math.max(0, Math.min(M, ae)), U.scrollTo({
      left: ae,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ T.jsxs(Qg, { className: "filter-container", children: [
    /* @__PURE__ */ T.jsx("legend", { children: e }),
    /* @__PURE__ */ T.jsxs("div", { className: "choices-wrapper", children: [
      /* @__PURE__ */ T.jsx(
        bi,
        {
          hidePrev: S <= 0,
          hideNext: S >= W - 5,
          clickPrev: () => {
            z(-1);
          },
          clickNext: () => {
            z(1);
          }
        }
      ),
      /* @__PURE__ */ T.jsxs(
        "div",
        {
          role: "radiogroup",
          tabIndex: 0,
          onKeyDown: w,
          className: "choices-container",
          ref: y,
          "aria-label": `${e} filter options}`,
          children: [
            n && /* @__PURE__ */ T.jsx(
              "button",
              {
                role: "radio",
                type: "button",
                onClick: (j) => {
                  j.preventDefault(), k(null), n();
                },
                tabIndex: -1,
                "aria-label": `Reset ${e}`,
                "aria-checked": a === null,
                className: "choice",
                children: "All"
              }
            ),
            t.map((j) => /* @__PURE__ */ T.jsx(
              "button",
              {
                role: "radio",
                type: "button",
                onClick: (U) => {
                  U.preventDefault(), k(j);
                },
                "aria-checked": a === j,
                className: `${a === j ? "selected" : ""} choice`,
                "aria-label": `Filter by ${j}`,
                tabIndex: -1,
                children: j
              },
              j
            ))
          ]
        }
      )
    ] })
  ] });
};
Uc.propTypes = {
  filterLabel: I.string.isRequired,
  choices: I.arrayOf(I.string).isRequired,
  onChoose: I.func.isRequired,
  resetFilters: I.func
};
const Gg = yt.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  .view-label {
    font-size: 1rem;
    color: #333;
    padding-right: 0.5rem;
  }

  .view-buttons {
    display: flex;
  }

  .view-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    svg rect {
      fill: #bfbfbf;
    }
  }

  .view-button:hover {
    color: #333;
  }

  .view-button:focus-visible {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
  }

  .view-button.active {
    svg rect {
      fill: #191919;
    }
  }

  .view-button svg {
    width: 22px;
    height: 22px;
  }

  @media (forced-colors: active) {
    .view-button {
      border: 1px solid currentColor;
    }
    .view-button.active {
      color: HighlightText;
    }
  }
`, ri = ({ view: e, setView: t, label: r }) => /* @__PURE__ */ T.jsxs(
  Gg,
  {
    className: "view-toggle",
    role: "group",
    "aria-label": "View options",
    children: [
      /* @__PURE__ */ T.jsx("span", { className: "view-label", id: "view-label", children: r }),
      /* @__PURE__ */ T.jsxs("div", { className: "view-buttons", role: "toolbar", "aria-labelledby": "view-label", children: [
        /* @__PURE__ */ T.jsx(
          "button",
          {
            className: `view-button ${e ? "active" : ""}`,
            "aria-label": "Grid view",
            type: "button",
            onClick: () => t(!0),
            "aria-pressed": e,
            children: /* @__PURE__ */ T.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ T.jsx("rect", { x: "1", y: "1", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "9", y: "1", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "17", y: "1", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "1", y: "9", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "9", y: "9", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "17", y: "9", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "1", y: "17", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "9", y: "17", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "17", y: "17", width: "6", height: "6", rx: "2" })
            ] })
          }
        ),
        /* @__PURE__ */ T.jsx(
          "button",
          {
            className: `view-button ${e ? "" : "active"}`,
            "aria-label": "List view",
            type: "button",
            onClick: () => t(!1),
            "aria-pressed": !e,
            children: /* @__PURE__ */ T.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ T.jsx("rect", { x: "2", y: "1", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "11", y: "2", width: "14", height: "4.5", rx: "3" }),
              /* @__PURE__ */ T.jsx("rect", { x: "2", y: "9", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "11", y: "10", width: "14", height: "4.5", rx: "3" }),
              /* @__PURE__ */ T.jsx("rect", { x: "2", y: "17", width: "6", height: "6", rx: "2" }),
              /* @__PURE__ */ T.jsx("rect", { x: "11", y: "18", width: "14", height: "4.5", rx: "3" })
            ] })
          }
        )
      ] })
    ]
  }
);
ri.propTypes = {
  view: I.bool,
  setView: I.func,
  label: I.string
};
const qg = yt.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "view ."
    "sort ."
    "filter filter"
    "results results";
  grid-column-gap: 100px;

  .uds-grid > .row {
    gap: 1rem;
    & > div {
      flex: 0 0 282px;
    }
  }

  .sort {
    grid-area: sort;
  }
  .view-toggle {
    grid-area: view;
  }
  .filter-container {
    grid-area: filter;
  }
  .plain-button {
    background-color: #fff;
    border: none;
    outline: none;
    color: #822141;
  }
  .plain-button:hover {
    cursor: pointer;
  }
  .results {
    grid-area: results;
  }
`, Vg = yt.div`
  display: flex;
  flex-wrap: wrap;
  .uds-grid > .row {
    gap: 1rem;
    & > div {
      flex: 0 0 282px;
    }
  }
  .view-toggle {
    width: 100%;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  div:has(.uds-tabbed-panels) {
    width: 100%;
  }
`;
function zc({
  searchType: e,
  ids: t,
  deptIds: r,
  API_URL: n,
  searchApiVersion: a,
  profileURLBase: i,
  appPathFolder: l,
  display: f,
  filters: h,
  alphaFilter: p = "false"
}) {
  const [y, S] = Ge(j), [N, W] = Ge(z), [C, w] = Ge(
    f.grid === "true" || f.grid === !0
  ), k = 6;
  mt(() => {
    typeof window < "u" && Dd({
      packageName: "app-webdir-ui",
      component: "WebDirectory",
      type: e,
      configuration: {
        ...h,
        ...f
      }
    });
  }, []);
  function z() {
    const se = h ? { ...h } : {};
    return e === "departments" || e === "faculty_rank" ? (se.deptIds = r.split(","), se) : (se.peopleInDepts = t.split(",").filter((ve) => ve.includes(":")).map((ve) => ve.split(":")).map((ve) => ({ asurite_id: ve[0], dept_id: ve[1] })), se);
  }
  function j() {
    const se = {
      last_name: "last_name_asc",
      people_order: "people_order"
    };
    return Object.prototype.hasOwnProperty.call(
      se,
      f == null ? void 0 : f.defaultSort
    ) ? se[f == null ? void 0 : f.defaultSort] : "last_name_asc";
  }
  function U(se, ve) {
    var Le;
    return se === "departments" && ((Le = ve == null ? void 0 : ve.split(",")) == null ? void 0 : Le.length) < 2 ? [
      { value: "default", label: "Choose Sort", disabled: !0 },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" }
    ] : [
      { value: "default", label: "Choose Sort", disabled: !0 },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" }
    ];
  }
  const M = U(e, r), R = {
    filters: h,
    API_URL: n,
    searchApiVersion: a,
    profileURLBase: i || "https://search.asu.edu",
    appPathFolder: l
  }, ae = {
    [xe.WEB_DIRECTORY_DEPARTMENTS]: {
      ...kt[xe.WEB_DIRECTORY_DEPARTMENTS],
      ...R
    },
    [xe.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...kt[xe.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...R
    },
    [xe.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...kt[xe.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...R
    },
    [xe.WEB_DIRECTORY_FACULTY_RANK]: {
      ...kt[xe.WEB_DIRECTORY_FACULTY__RANK],
      ...R,
      deptIds: r,
      display: f,
      searchType: e
    }
  }, ue = (se) => {
    S(se);
  }, ee = {
    departments: xe.WEB_DIRECTORY_DEPARTMENTS,
    people: xe.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    people_departments: xe.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    faculty_rank: xe.WEB_DIRECTORY_FACULTY_RANK
  };
  return e !== "faculty_rank" ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(qg, { className: C ? "grid-view" : "", children: [
    p === "true" && /* @__PURE__ */ T.jsx(
      Uc,
      {
        filterLabel: "Filter By Last Initial",
        choices: Wg,
        onChoose: (se) => W({ ...N, lastInit: se }),
        resetFilters: () => W({ ...N, lastInit: "" })
      }
    ),
    /* @__PURE__ */ T.jsx(ri, { view: C, setView: w, label: "View" }),
    /* @__PURE__ */ T.jsx("div", { className: "sort", children: /* @__PURE__ */ T.jsx(
      Ei,
      {
        customSortOptions: M,
        sort: y,
        onChange: (se) => ue(se)
      }
    ) }),
    /* @__PURE__ */ T.jsx("div", { className: "results", children: /* @__PURE__ */ T.jsx(
      Ir,
      {
        engine: ae[ee[e]],
        itemsPerPage: parseInt(f == null ? void 0 : f.profilesPerPage, 10) || k,
        sort: y,
        hidePaginator: (f == null ? void 0 : f.usePager) !== "1",
        filters: N,
        profilesToFilterOut: f == null ? void 0 : f.doNotDisplayProfiles,
        display: f,
        appPathFolder: l,
        restClientTag: "webdir",
        grid: C
      }
    ) })
  ] }) }) : /* @__PURE__ */ T.jsxs(Vg, { className: C ? "grid-view" : "", children: [
    /* @__PURE__ */ T.jsx(ri, { view: C, setView: w, label: "View" }),
    /* @__PURE__ */ T.jsx(
      Mc,
      {
        ...ae[ee[e]],
        alphaFilter: p,
        filters: N,
        grid: C,
        setGridView: w,
        className: "tabbed-panels"
      }
    )
  ] });
}
zc.propTypes = {
  deptIds: I.string,
  API_URL: I.string,
  searchApiVersion: I.string,
  searchType: I.string,
  ids: I.string,
  profileURLBase: I.string,
  appPathFolder: I.string,
  display: I.shape({
    defaultSort: I.string,
    doNotDisplayProfiles: I.string,
    profilesPerPage: I.string,
    usePager: I.string,
    grid: I.string || I.bool
  }),
  filters: I.shape({
    employee: I.string,
    expertise: I.string,
    title: I.string,
    campuses: I.string
  }),
  alphaFilter: I.string
};
const Yg = (e) => /* @__PURE__ */ T.jsx(cl, { children: /* @__PURE__ */ T.jsx(ul, { children: /* @__PURE__ */ T.jsx(dl, { path: "*", element: /* @__PURE__ */ T.jsx(zc, { ...e }) }) }) }), Jg = (e, t, r) => {
  const n = document.querySelector(r);
  Ci(n).render(ht.createElement(e, t));
}, Kg = (e, t, r) => {
  const n = document.querySelector(r);
  Ci(n).render(ht.createElement(e, t));
}, vm = ({ targetSelector: e, props: t = {} }) => {
  Jg(Hg, t, e);
}, wm = ({ targetSelector: e, props: t = {} }) => {
  Kg(Yg, t, e);
};
export {
  Ir as ASUSearchResultsList,
  si as ProfileCard,
  Ll as ResultCard,
  Fc as SearchPage,
  Yg as WebDirectoryComponent,
  Hg as iSearchApp,
  vm as initSearchPage,
  wm as initWebDirectory,
  id as searchMessageComponentMap
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
/*! @license DOMPurify 2.5.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.8/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
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
/*!
 * Glide.js v3.6.2
 * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
