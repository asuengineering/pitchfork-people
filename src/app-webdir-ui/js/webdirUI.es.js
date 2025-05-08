var ns = (e) => {
  throw TypeError(e);
};
var ho = (e, t, r) => t.has(e) || ns("Cannot " + r);
var go = (e, t, r) => (ho(e, t, "read from private field"), r ? r.call(e) : t.get(e)), mo = (e, t, r) => t.has(e) ? ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), bo = (e, t, r, n) => (ho(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), yo = (e, t, r) => (ho(e, t, "access private method"), r);
import * as ye from "react";
import ht, { useContext as fn, createElement as Ol, Component as Mu, createContext as Fu, forwardRef as Ll, useRef as Kr, useImperativeHandle as Uu, useId as Pl, useState as Qe, useEffect as mt, useCallback as zu } from "react";
import Nl from "react-dom";
function Dl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bl = { exports: {} }, Tn = {}, as;
function Wu() {
  if (as) return Tn;
  as = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, h, d) {
    var y, m = {}, I = null, U = null;
    d !== void 0 && (I = "" + d), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (y in h) n.call(h, y) && !o.hasOwnProperty(y) && (m[y] = h[y]);
    if (c && c.defaultProps) for (y in h = c.defaultProps, h) m[y] === void 0 && (m[y] = h[y]);
    return { $$typeof: t, type: c, key: I, ref: U, props: m, _owner: a.current };
  }
  return Tn.Fragment = r, Tn.jsx = l, Tn.jsxs = l, Tn;
}
Bl.exports = Wu();
var T = Bl.exports, jl = { exports: {} }, wo, os;
function Hu() {
  if (os) return wo;
  os = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wo = e, wo;
}
var vo, is;
function Qu() {
  if (is) return vo;
  is = 1;
  var e = Hu();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, vo = function() {
    function n(l, c, h, d, y, m) {
      if (m !== e) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, vo;
}
jl.exports = Qu()();
var Gu = jl.exports;
const _ = /* @__PURE__ */ Dl(Gu);
var Ml = { exports: {} }, Ke = {}, ss;
function qu() {
  if (ss) return Ke;
  ss = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var E = w.$$typeof;
      switch (E) {
        case e:
          switch (w = w.type, w) {
            case r:
            case a:
            case n:
            case h:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case c:
                case m:
                case y:
                  return w;
                case o:
                  return w;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return Ke.ContextConsumer = o, Ke.ContextProvider = l, Ke.Element = e, Ke.ForwardRef = c, Ke.Fragment = r, Ke.Lazy = m, Ke.Memo = y, Ke.Portal = t, Ke.Profiler = a, Ke.StrictMode = n, Ke.Suspense = h, Ke.SuspenseList = d, Ke.isContextConsumer = function(w) {
    return C(w) === o;
  }, Ke.isContextProvider = function(w) {
    return C(w) === l;
  }, Ke.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ke.isForwardRef = function(w) {
    return C(w) === c;
  }, Ke.isFragment = function(w) {
    return C(w) === r;
  }, Ke.isLazy = function(w) {
    return C(w) === m;
  }, Ke.isMemo = function(w) {
    return C(w) === y;
  }, Ke.isPortal = function(w) {
    return C(w) === t;
  }, Ke.isProfiler = function(w) {
    return C(w) === a;
  }, Ke.isStrictMode = function(w) {
    return C(w) === n;
  }, Ke.isSuspense = function(w) {
    return C(w) === h;
  }, Ke.isSuspenseList = function(w) {
    return C(w) === d;
  }, Ke.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === n || w === h || w === d || w === I || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === y || w.$$typeof === l || w.$$typeof === o || w.$$typeof === c || w.$$typeof === U || w.getModuleId !== void 0);
  }, Ke.typeOf = C, Ke;
}
Ml.exports = qu();
var Fl = Ml.exports;
function Vu(e) {
  function t(q, L, G, H, v) {
    for (var te = 0, P = 0, ce = 0, re = 0, oe, J, fe = 0, be = 0, ie, Ee = ie = oe = 0, se = 0, ve = 0, Je = 0, ke = 0, gt = G.length, tt = gt - 1, Ce, X = "", he = "", rt = "", yt = "", qe; se < gt; ) {
      if (J = G.charCodeAt(se), se === tt && P + re + ce + te !== 0 && (P !== 0 && (J = P === 47 ? 10 : 47), re = ce = te = 0, gt++, tt++), P + re + ce + te === 0) {
        if (se === tt && (0 < ve && (X = X.replace(I, "")), 0 < X.trim().length)) {
          switch (J) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += G.charAt(se);
          }
          J = 59;
        }
        switch (J) {
          case 123:
            for (X = X.trim(), oe = X.charCodeAt(0), ie = 1, ke = ++se; se < gt; ) {
              switch (J = G.charCodeAt(se)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (J = G.charCodeAt(se + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ee = se + 1; Ee < tt; ++Ee)
                          switch (G.charCodeAt(Ee)) {
                            case 47:
                              if (J === 42 && G.charCodeAt(Ee - 1) === 42 && se + 2 !== Ee) {
                                se = Ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (J === 47) {
                                se = Ee + 1;
                                break e;
                              }
                          }
                        se = Ee;
                      }
                  }
                  break;
                case 91:
                  J++;
                case 40:
                  J++;
                case 34:
                case 39:
                  for (; se++ < tt && G.charCodeAt(se) !== J; )
                    ;
              }
              if (ie === 0) break;
              se++;
            }
            switch (ie = G.substring(ke, se), oe === 0 && (oe = (X = X.replace(m, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < ve && (X = X.replace(I, "")), J = X.charCodeAt(1), J) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ve = L;
                    break;
                  default:
                    ve = st;
                }
                if (ie = t(L, ve, ie, J, v + 1), ke = ie.length, 0 < Pe && (ve = r(st, X, Je), qe = c(3, ie, ve, L, Ie, ge, ke, J, v, H), X = ve.join(""), qe !== void 0 && (ke = (ie = qe.trim()).length) === 0 && (J = 0, ie = "")), 0 < ke) switch (J) {
                  case 115:
                    X = X.replace(ae, l);
                  case 100:
                  case 109:
                  case 45:
                    ie = X + "{" + ie + "}";
                    break;
                  case 107:
                    X = X.replace(D, "$1 $2"), ie = X + "{" + ie + "}", ie = me === 1 || me === 2 && o("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = X + ie, H === 112 && (ie = (he += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = t(L, r(L, X, Je), ie, H, v + 1);
            }
            rt += ie, ie = Je = ve = Ee = oe = 0, X = "", J = G.charCodeAt(++se);
            break;
          case 125:
          case 59:
            if (X = (0 < ve ? X.replace(I, "") : X).trim(), 1 < (ke = X.length)) switch (Ee === 0 && (oe = X.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (ke = (X = X.replace(" ", ":")).length), 0 < Pe && (qe = c(1, X, L, q, Ie, ge, he.length, H, v, H)) !== void 0 && (ke = (X = qe.trim()).length) === 0 && (X = "\0\0"), oe = X.charCodeAt(0), J = X.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (J === 105 || J === 99) {
                  yt += X + G.charAt(se);
                  break;
                }
              default:
                X.charCodeAt(ke - 1) !== 58 && (he += a(X, oe, J, X.charCodeAt(2)));
            }
            Je = ve = Ee = oe = 0, X = "", J = G.charCodeAt(++se);
        }
      }
      switch (J) {
        case 13:
        case 10:
          P === 47 ? P = 0 : 1 + oe === 0 && H !== 107 && 0 < X.length && (ve = 1, X += "\0"), 0 < Pe * Xe && c(0, X, L, q, Ie, ge, he.length, H, v, H), ge = 1, Ie++;
          break;
        case 59:
        case 125:
          if (P + re + ce + te === 0) {
            ge++;
            break;
          }
        default:
          switch (ge++, Ce = G.charAt(se), J) {
            case 9:
            case 32:
              if (re + te + P === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Ce = "";
                  break;
                default:
                  J !== 32 && (Ce = " ");
              }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              re + P + te === 0 && (ve = Je = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (re + P + te + Oe === 0 && 0 < Ee) switch (se - Ee) {
                case 2:
                  fe === 112 && G.charCodeAt(se - 3) === 58 && (Oe = fe);
                case 8:
                  be === 111 && (Oe = be);
              }
              break;
            case 58:
              re + P + te === 0 && (Ee = se);
              break;
            case 44:
              P + ce + re + te === 0 && (ve = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              P === 0 && (re = re === J ? 0 : re === 0 ? J : re);
              break;
            case 91:
              re + P + ce === 0 && te++;
              break;
            case 93:
              re + P + ce === 0 && te--;
              break;
            case 41:
              re + P + te === 0 && ce--;
              break;
            case 40:
              if (re + P + te === 0) {
                if (oe === 0) switch (2 * fe + 3 * be) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                ce++;
              }
              break;
            case 64:
              P + ce + re + te + Ee + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + te + ce)) switch (P) {
                case 0:
                  switch (2 * J + 3 * G.charCodeAt(se + 1)) {
                    case 235:
                      P = 47;
                      break;
                    case 220:
                      ke = se, P = 42;
                  }
                  break;
                case 42:
                  J === 47 && fe === 42 && ke + 2 !== se && (G.charCodeAt(ke + 2) === 33 && (he += G.substring(ke, se + 1)), Ce = "", P = 0);
              }
          }
          P === 0 && (X += Ce);
      }
      be = fe, fe = J, se++;
    }
    if (ke = he.length, 0 < ke) {
      if (ve = L, 0 < Pe && (qe = c(2, he, ve, q, Ie, ge, ke, H, v, H), qe !== void 0 && (he = qe).length === 0)) return yt + he + rt;
      if (he = ve.join(",") + "{" + he + "}", me * Oe !== 0) {
        switch (me !== 2 || o(he, 2) || (Oe = 0), Oe) {
          case 111:
            he = he.replace(B, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(F, "::-webkit-input-$1") + he.replace(F, "::-moz-$1") + he.replace(F, ":-ms-input-$1") + he;
        }
        Oe = 0;
      }
    }
    return yt + he + rt;
  }
  function r(q, L, G) {
    var H = L.trim().split(E);
    L = H;
    var v = H.length, te = q.length;
    switch (te) {
      case 0:
      case 1:
        var P = 0;
        for (q = te === 0 ? "" : q[0] + " "; P < v; ++P)
          L[P] = n(q, L[P], G).trim();
        break;
      default:
        var ce = P = 0;
        for (L = []; P < v; ++P)
          for (var re = 0; re < te; ++re)
            L[ce++] = n(q[re] + " ", H[P], G).trim();
    }
    return L;
  }
  function n(q, L, G) {
    var H = L.charCodeAt(0);
    switch (33 > H && (H = (L = L.trim()).charCodeAt(0)), H) {
      case 38:
        return L.replace(N, "$1" + q.trim());
      case 58:
        return q.trim() + L.replace(N, "$1" + q.trim());
      default:
        if (0 < 1 * G && 0 < L.indexOf("\f")) return L.replace(N, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + L;
  }
  function a(q, L, G, H) {
    var v = q + ";", te = 2 * L + 3 * G + 4 * H;
    if (te === 944) {
      q = v.indexOf(":", 9) + 1;
      var P = v.substring(q, v.length - 1).trim();
      return P = v.substring(0, q).trim() + P + ";", me === 1 || me === 2 && o(P, 1) ? "-webkit-" + P + P : P;
    }
    if (me === 0 || me === 2 && !o(v, 1)) return v;
    switch (te) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(ue, "$1-webkit-$2") + v;
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
        return P = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + P + "-webkit-" + v + "-ms-flex-pack" + P + v;
      case 1005:
        return C.test(v) ? v.replace(U, ":-webkit-") + v.replace(U, ":-moz-") + v : v;
      case 1e3:
        switch (P = v.substring(13).trim(), L = P.indexOf("-") + 1, P.charCodeAt(0) + P.charCodeAt(L)) {
          case 226:
            P = v.replace(R, "tb");
            break;
          case 232:
            P = v.replace(R, "tb-rl");
            break;
          case 220:
            P = v.replace(R, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + P + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (L = (v = q).length - 10, P = (v.charCodeAt(L) === 33 ? v.substring(0, L) : v).substring(q.indexOf(":", 7) + 1).trim(), te = P.charCodeAt(0) + (P.charCodeAt(7) | 0)) {
          case 203:
            if (111 > P.charCodeAt(8)) break;
          case 115:
            v = v.replace(P, "-webkit-" + P) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(P, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + v.replace(P, "-webkit-" + P) + ";" + v.replace(P, "-ms-" + P + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return P = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + P + "-ms-flex-" + P + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Z, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Z, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(q) === !0) return (P = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(q.replace("stretch", "fill-available"), L, G, H).replace(":fill-available", ":stretch") : v.replace(P, "-webkit-" + P) + v.replace(P, "-moz-" + P.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, G + H === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + v;
    }
    return v;
  }
  function o(q, L) {
    var G = q.indexOf(L === 1 ? ":" : "{"), H = q.substring(0, L !== 3 ? G : 10);
    return G = q.substring(G + 1, q.length - 1), Ge(L !== 2 ? H : H.replace(le, "$1"), G, L);
  }
  function l(q, L) {
    var G = a(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return G !== L + ";" ? G.replace(de, " or ($1)").substring(4) : "(" + L + ")";
  }
  function c(q, L, G, H, v, te, P, ce, re, oe) {
    for (var J = 0, fe = L, be; J < Pe; ++J)
      switch (be = Ue[J].call(y, q, fe, G, H, v, te, P, ce, re, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = be;
      }
    if (fe !== L) return fe;
  }
  function h(q) {
    switch (q) {
      case void 0:
      case null:
        Pe = Ue.length = 0;
        break;
      default:
        if (typeof q == "function") Ue[Pe++] = q;
        else if (typeof q == "object") for (var L = 0, G = q.length; L < G; ++L)
          h(q[L]);
        else Xe = !!q | 0;
    }
    return h;
  }
  function d(q) {
    return q = q.prefix, q !== void 0 && (Ge = null, q ? typeof q != "function" ? me = 1 : (me = 2, Ge = q) : me = 0), d;
  }
  function y(q, L) {
    var G = q;
    if (33 > G.charCodeAt(0) && (G = G.trim()), pe = G, G = [pe], 0 < Pe) {
      var H = c(-1, L, G, G, Ie, ge, 0, 0, 0, 0);
      H !== void 0 && typeof H == "string" && (L = H);
    }
    var v = t(st, G, L, 0, 0);
    return 0 < Pe && (H = c(-2, v, G, G, Ie, ge, v.length, 0, 0, 0), H !== void 0 && (v = H)), pe = "", Oe = 0, ge = Ie = 1, v;
  }
  var m = /^\0+/g, I = /[\0\r\f]/g, U = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, E = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, D = /@(k\w+)\s*(\S*)\s*/, F = /::(place)/g, B = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, Z = /-self|flex-/g, le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, ge = 1, Ie = 1, Oe = 0, me = 1, st = [], Ue = [], Pe = 0, Ge = null, Xe = 0, pe = "";
  return y.use = h, y.set = d, e !== void 0 && d(e), y;
}
var Yu = {
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
function Ju(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ls = /* @__PURE__ */ Ju(
  function(e) {
    return Xu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ul = { exports: {} }, Ve = {}, cs;
function Ku() {
  if (cs) return Ve;
  cs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, I = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function F(R) {
    if (typeof R == "object" && R !== null) {
      var ae = R.$$typeof;
      switch (ae) {
        case t:
          switch (R = R.type, R) {
            case h:
            case d:
            case n:
            case o:
            case a:
            case m:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case c:
                case y:
                case C:
                case U:
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
  function B(R) {
    return F(R) === d;
  }
  return Ve.AsyncMode = h, Ve.ConcurrentMode = d, Ve.ContextConsumer = c, Ve.ContextProvider = l, Ve.Element = t, Ve.ForwardRef = y, Ve.Fragment = n, Ve.Lazy = C, Ve.Memo = U, Ve.Portal = r, Ve.Profiler = o, Ve.StrictMode = a, Ve.Suspense = m, Ve.isAsyncMode = function(R) {
    return B(R) || F(R) === h;
  }, Ve.isConcurrentMode = B, Ve.isContextConsumer = function(R) {
    return F(R) === c;
  }, Ve.isContextProvider = function(R) {
    return F(R) === l;
  }, Ve.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, Ve.isForwardRef = function(R) {
    return F(R) === y;
  }, Ve.isFragment = function(R) {
    return F(R) === n;
  }, Ve.isLazy = function(R) {
    return F(R) === C;
  }, Ve.isMemo = function(R) {
    return F(R) === U;
  }, Ve.isPortal = function(R) {
    return F(R) === r;
  }, Ve.isProfiler = function(R) {
    return F(R) === o;
  }, Ve.isStrictMode = function(R) {
    return F(R) === a;
  }, Ve.isSuspense = function(R) {
    return F(R) === m;
  }, Ve.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === d || R === o || R === a || R === m || R === I || typeof R == "object" && R !== null && (R.$$typeof === C || R.$$typeof === U || R.$$typeof === l || R.$$typeof === c || R.$$typeof === y || R.$$typeof === E || R.$$typeof === N || R.$$typeof === D || R.$$typeof === w);
  }, Ve.typeOf = F, Ve;
}
Ul.exports = Ku();
var $u = Ul.exports, hi = $u, Zu = {
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
}, ed = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, td = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, zl = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, gi = {};
gi[hi.ForwardRef] = td;
gi[hi.Memo] = zl;
function us(e) {
  return hi.isMemo(e) ? zl : gi[e.$$typeof] || Zu;
}
var rd = Object.defineProperty, nd = Object.getOwnPropertyNames, ds = Object.getOwnPropertySymbols, ad = Object.getOwnPropertyDescriptor, od = Object.getPrototypeOf, fs = Object.prototype;
function Wl(e, t, r) {
  if (typeof t != "string") {
    if (fs) {
      var n = od(t);
      n && n !== fs && Wl(e, n, r);
    }
    var a = nd(t);
    ds && (a = a.concat(ds(t)));
    for (var o = us(e), l = us(t), c = 0; c < a.length; ++c) {
      var h = a[c];
      if (!ed[h] && !(r && r[h]) && !(l && l[h]) && !(o && o[h])) {
        var d = ad(t, h);
        try {
          rd(e, h, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var id = Wl;
const sd = /* @__PURE__ */ Dl(id);
var St = { env: { NODE_ENV: "production" } };
function kr() {
  return (kr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ps = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, Qo = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Fl.typeOf(e);
}, Da = Object.freeze([]), Nr = Object.freeze({});
function Gn(e) {
  return typeof e == "function";
}
function hs(e) {
  return e.displayName || e.name || "Component";
}
function mi(e) {
  return e && typeof e.styledComponentId == "string";
}
var an = typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_ATTR || St.env.SC_ATTR) || "data-styled", bi = typeof window < "u" && "HTMLElement" in window, ld = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof St < "u" && St.env !== void 0 && (St.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && St.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? St.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && St.env.REACT_APP_SC_DISABLE_SPEEDY : St.env.SC_DISABLE_SPEEDY !== void 0 && St.env.SC_DISABLE_SPEEDY !== "" ? St.env.SC_DISABLE_SPEEDY !== "false" && St.env.SC_DISABLE_SPEEDY : St.env.NODE_ENV !== "production"));
function Xn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var cd = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, l = o; r >= l; ) (l <<= 1) < 0 && Xn(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var c = o; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), d = 0, y = n.length; d < y; d++) this.tag.insertRule(h, n[d]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), o = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < o; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], o = this.indexOfGroup(r), l = o + a, c = o; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), Ta = /* @__PURE__ */ new Map(), Ba = /* @__PURE__ */ new Map(), Wn = 1, ma = function(e) {
  if (Ta.has(e)) return Ta.get(e);
  for (; Ba.has(Wn); ) Wn++;
  var t = Wn++;
  return Ta.set(e, t), Ba.set(t, e), t;
}, ud = function(e) {
  return Ba.get(e);
}, dd = function(e, t) {
  t >= Wn && (Wn = t + 1), Ta.set(e, t), Ba.set(t, e);
}, fd = "style[" + an + '][data-styled-version="5.3.11"]', pd = new RegExp("^" + an + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), hd = function(e, t, r) {
  for (var n, a = r.split(","), o = 0, l = a.length; o < l; o++) (n = a[o]) && e.registerName(t, n);
}, gd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, o = r.length; a < o; a++) {
    var l = r[a].trim();
    if (l) {
      var c = l.match(pd);
      if (c) {
        var h = 0 | parseInt(c[1], 10), d = c[2];
        h !== 0 && (dd(d, h), hd(e, d, c[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Hl = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var h = c.childNodes, d = h.length; d >= 0; d--) {
      var y = h[d];
      if (y && y.nodeType === 1 && y.hasAttribute(an)) return y;
    }
  }(r), o = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(an, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = md();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, o), n;
}, bd = function() {
  function e(r) {
    var n = this.element = Hl(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var o = document.styleSheets, l = 0, c = o.length; l < c; l++) {
        var h = o[l];
        if (h.ownerNode === a) return h;
      }
      Xn(17);
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
}(), yd = function() {
  function e(r) {
    var n = this.element = Hl(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), wd = function() {
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
}(), gs = bi, vd = { isServer: !bi, useCSSOMInjection: !ld }, Ql = function() {
  function e(r, n, a) {
    r === void 0 && (r = Nr), n === void 0 && (n = {}), this.options = kr({}, vd, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && bi && gs && (gs = !1, function(o) {
      for (var l = document.querySelectorAll(fd), c = 0, h = l.length; c < h; c++) {
        var d = l[c];
        d && d.getAttribute(an) !== "active" && (gd(o, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return ma(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(kr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, o = n.useCSSOMInjection, l = n.target, r = a ? new wd(l) : o ? new bd(l) : new yd(l), new cd(r)));
    var r, n, a, o, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (ma(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(ma(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(ma(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, o = "", l = 0; l < a; l++) {
        var c = ud(l);
        if (c !== void 0) {
          var h = r.names.get(c), d = n.getGroup(l);
          if (h && d && h.size) {
            var y = an + ".g" + l + '[id="' + c + '"]', m = "";
            h !== void 0 && h.forEach(function(I) {
              I.length > 0 && (m += I + ",");
            }), o += "" + d + y + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Ad = /(a)(d)/gi, ms = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Go(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ms(t % 52) + r;
  return (ms(t % 52) + r).replace(Ad, "$1-$2");
}
var en = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Gl = function(e) {
  return en(5381, e);
};
function Sd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Gn(r) && !mi(r)) return !1;
  }
  return !0;
}
var xd = Gl("5.3.11"), Ed = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Sd(t), this.componentId = r, this.baseHash = en(xd, r), this.baseStyle = n, Ql.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) o.push(this.staticRulesId);
    else {
      var l = on(this.rules, t, r, n).join(""), c = Go(en(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var h = n(l, "." + c, void 0, a);
        r.insertRules(a, c, h);
      }
      o.push(c), this.staticRulesId = c;
    }
    else {
      for (var d = this.rules.length, y = en(this.baseHash, n.hash), m = "", I = 0; I < d; I++) {
        var U = this.rules[I];
        if (typeof U == "string") m += U;
        else if (U) {
          var C = on(U, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          y = en(y, w + I), m += w;
        }
      }
      if (m) {
        var E = Go(y >>> 0);
        if (!r.hasNameForId(a, E)) {
          var N = n(m, "." + E, void 0, a);
          r.insertRules(a, E, N);
        }
        o.push(E);
      }
    }
    return o.join(" ");
  }, e;
}(), kd = /^\s*\/\/.*$/gm, Cd = [":", "[", ".", "#"];
function Td(e) {
  var t, r, n, a, o = Nr, l = o.options, c = l === void 0 ? Nr : l, h = o.plugins, d = h === void 0 ? Da : h, y = new Vu(c), m = [], I = /* @__PURE__ */ function(w) {
    function E(N) {
      if (N) try {
        w(N + "}");
      } catch {
      }
    }
    return function(N, D, F, B, R, ae, de, Z, le, we) {
      switch (N) {
        case 1:
          if (le === 0 && D.charCodeAt(0) === 64) return w(D + ";"), "";
          break;
        case 2:
          if (Z === 0) return D + "/*|*/";
          break;
        case 3:
          switch (Z) {
            case 102:
            case 112:
              return w(F[0] + D), "";
            default:
              return D + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          D.split("/*|*/}").forEach(E);
      }
    };
  }(function(w) {
    m.push(w);
  }), U = function(w, E, N) {
    return E === 0 && Cd.indexOf(N[r.length]) !== -1 || N.match(a) ? w : "." + t;
  };
  function C(w, E, N, D) {
    D === void 0 && (D = "&");
    var F = w.replace(kd, ""), B = E && N ? N + " " + E + " { " + F + " }" : F;
    return t = D, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), y(N || !E ? "" : E, B);
  }
  return y.use([].concat(d, [function(w, E, N) {
    w === 2 && N.length && N[0].lastIndexOf(r) > 0 && (N[0] = N[0].replace(n, U));
  }, I, function(w) {
    if (w === -2) {
      var E = m;
      return m = [], E;
    }
  }])), C.hash = d.length ? d.reduce(function(w, E) {
    return E.name || Xn(15), en(w, E.name);
  }, 5381).toString() : "", C;
}
var ql = ht.createContext();
ql.Consumer;
var Vl = ht.createContext(), Rd = (Vl.Consumer, new Ql()), qo = Td();
function Id() {
  return fn(ql) || Rd;
}
function _d() {
  return fn(Vl) || qo;
}
var Od = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, o) {
      o === void 0 && (o = qo);
      var l = n.name + o.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, o(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Xn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = qo), this.name + t.hash;
  }, e;
}(), Ld = /([A-Z])/, Pd = /([A-Z])/g, Nd = /^ms-/, Dd = function(e) {
  return "-" + e.toLowerCase();
};
function bs(e) {
  return Ld.test(e) ? e.replace(Pd, Dd).replace(Nd, "-ms-") : e;
}
var ys = function(e) {
  return e == null || e === !1 || e === "";
};
function on(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, o = [], l = 0, c = e.length; l < c; l += 1) (a = on(e[l], t, r, n)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  if (ys(e)) return "";
  if (mi(e)) return "." + e.styledComponentId;
  if (Gn(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return on(h, t, r, n);
  }
  var d;
  return e instanceof Od ? r ? (e.inject(r, n), e.getName(n)) : e : Qo(e) ? function y(m, I) {
    var U, C, w = [];
    for (var E in m) m.hasOwnProperty(E) && !ys(m[E]) && (Array.isArray(m[E]) && m[E].isCss || Gn(m[E]) ? w.push(bs(E) + ":", m[E], ";") : Qo(m[E]) ? w.push.apply(w, y(m[E], E)) : w.push(bs(E) + ": " + (U = E, (C = m[E]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || U in Yu || U.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return I ? [I + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var ws = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Bd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Gn(e) || Qo(e) ? ws(on(ps(Da, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ws(on(ps(e, r)));
}
var jd = function(e, t, r) {
  return r === void 0 && (r = Nr), e.theme !== r.theme && e.theme || t || r.theme;
}, Md = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Fd = /(^-|-$)/g;
function Ao(e) {
  return e.replace(Md, "-").replace(Fd, "");
}
var Ud = function(e) {
  return Go(Gl(e) >>> 0);
};
function ba(e) {
  return typeof e == "string" && St.env.NODE_ENV === "production";
}
var Vo = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, zd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Wd(e, t, r) {
  var n = e[r];
  Vo(t) && Vo(n) ? Yl(n, t) : e[r] = t;
}
function Yl(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, o = r; a < o.length; a++) {
    var l = o[a];
    if (Vo(l)) for (var c in l) zd(c) && Wd(e, l[c], c);
  }
  return e;
}
var Jl = ht.createContext();
Jl.Consumer;
var So = {};
function Xl(e, t, r) {
  var n = mi(e), a = !ba(e), o = t.attrs, l = o === void 0 ? Da : o, c = t.componentId, h = c === void 0 ? function(D, F) {
    var B = typeof D != "string" ? "sc" : Ao(D);
    So[B] = (So[B] || 0) + 1;
    var R = B + "-" + Ud("5.3.11" + B + So[B]);
    return F ? F + "-" + R : R;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, y = d === void 0 ? function(D) {
    return ba(D) ? "styled." + D : "Styled(" + hs(D) + ")";
  }(e) : d, m = t.displayName && t.componentId ? Ao(t.displayName) + "-" + t.componentId : t.componentId || h, I = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(D, F, B) {
    return e.shouldForwardProp(D, F, B) && t.shouldForwardProp(D, F, B);
  } : e.shouldForwardProp);
  var C, w = new Ed(r, m, n ? e.componentStyle : void 0), E = w.isStatic && l.length === 0, N = function(D, F) {
    return function(B, R, ae, de) {
      var Z = B.attrs, le = B.componentStyle, we = B.defaultProps, ue = B.foldedComponentIds, ge = B.shouldForwardProp, Ie = B.styledComponentId, Oe = B.target, me = function(H, v, te) {
        H === void 0 && (H = Nr);
        var P = kr({}, v, { theme: H }), ce = {};
        return te.forEach(function(re) {
          var oe, J, fe, be = re;
          for (oe in Gn(be) && (be = be(P)), be) P[oe] = ce[oe] = oe === "className" ? (J = ce[oe], fe = be[oe], J && fe ? J + " " + fe : J || fe) : be[oe];
        }), [P, ce];
      }(jd(R, fn(Jl), we) || Nr, R, Z), st = me[0], Ue = me[1], Pe = function(H, v, te, P) {
        var ce = Id(), re = _d(), oe = v ? H.generateAndInjectStyles(Nr, ce, re) : H.generateAndInjectStyles(te, ce, re);
        return oe;
      }(le, de, st), Ge = ae, Xe = Ue.$as || R.$as || Ue.as || R.as || Oe, pe = ba(Xe), q = Ue !== R ? kr({}, R, {}, Ue) : R, L = {};
      for (var G in q) G[0] !== "$" && G !== "as" && (G === "forwardedAs" ? L.as = q[G] : (ge ? ge(G, ls, Xe) : !pe || ls(G)) && (L[G] = q[G]));
      return R.style && Ue.style !== R.style && (L.style = kr({}, R.style, {}, Ue.style)), L.className = Array.prototype.concat(ue, Ie, Pe !== Ie ? Pe : null, R.className, Ue.className).filter(Boolean).join(" "), L.ref = Ge, Ol(Xe, L);
    }(C, D, F, E);
  };
  return N.displayName = y, (C = ht.forwardRef(N)).attrs = I, C.componentStyle = w, C.displayName = y, C.shouldForwardProp = U, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Da, C.styledComponentId = m, C.target = n ? e.target : e, C.withComponent = function(D) {
    var F = t.componentId, B = function(ae, de) {
      if (ae == null) return {};
      var Z, le, we = {}, ue = Object.keys(ae);
      for (le = 0; le < ue.length; le++) Z = ue[le], de.indexOf(Z) >= 0 || (we[Z] = ae[Z]);
      return we;
    }(t, ["componentId"]), R = F && F + "-" + (ba(D) ? D : Ao(hs(D)));
    return Xl(D, kr({}, B, { attrs: I, componentId: R }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = n ? Yl({}, e.defaultProps, D) : D;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && sd(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var wt = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Nr), !Fl.isValidElementType(n)) return Xn(1, String(n));
    var o = function() {
      return r(n, a, Bd.apply(void 0, arguments));
    };
    return o.withConfig = function(l) {
      return t(r, n, kr({}, a, {}, l));
    }, o.attrs = function(l) {
      return t(r, n, kr({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, o;
  }(Xl, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  wt[e] = wt(e);
});
const Hd = wt.div`
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
`, Kl = () => /* @__PURE__ */ T.jsxs(Hd, { children: [
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
] }), Qd = wt.div`
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
`, zn = ({
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
  return /* @__PURE__ */ T.jsxs(Qd, { children: [
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
    /* @__PURE__ */ T.jsx(Kl, {})
  ] });
};
zn.propTypes = {
  titleText: _.string,
  descText: _.string,
  contactText: _.string,
  signInLink: _.string
};
const Gd = {
  web_dir_faculty_staff: /* @__PURE__ */ T.jsx(
    zn,
    {
      titleText: "Welcome to the ASU Faculty and Staff Directory",
      descText: "Our directory is integrated into the ASU Search engine experience. Find current faculty and staff profiles by using the search field above.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  ),
  web_dir_students: /* @__PURE__ */ T.jsx(
    zn,
    {
      titleText: "Welcome to the ASU Student Directory",
      descText: "Students must opt-in to make their profile publicly available. ASU affiliates with an ASURITE ID can view the remaining student profiles that do not have directory holds on them by ",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week.",
      signInLink: "https://search.asu.edu/caslogin?returnto=/"
    }
  ),
  all: /* @__PURE__ */ T.jsx(
    zn,
    {
      titleText: "Welcome to ASU search",
      descText: "Find the information you're looking for from anywhere on asu.edu.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  ),
  "web-sites": /* @__PURE__ */ T.jsx(
    zn,
    {
      titleText: "Welcome to ASU search",
      descText: "Find the information you're looking for from anywhere on asu.edu.",
      contactText: "Contact us via live chat, phone or email 24 hours a day, seven days a week."
    }
  )
};
const {
  entries: $l,
  setPrototypeOf: vs,
  isFrozen: qd,
  getPrototypeOf: Vd,
  getOwnPropertyDescriptor: Yd
} = Object;
let {
  freeze: Ot,
  seal: Gt,
  create: Zl
} = Object, {
  apply: Yo,
  construct: Jo
} = typeof Reflect < "u" && Reflect;
Ot || (Ot = function(t) {
  return t;
});
Gt || (Gt = function(t) {
  return t;
});
Yo || (Yo = function(t, r, n) {
  return t.apply(r, n);
});
Jo || (Jo = function(t, r) {
  return new t(...r);
});
const ya = Lt(Array.prototype.forEach), Jd = Lt(Array.prototype.lastIndexOf), As = Lt(Array.prototype.pop), Rn = Lt(Array.prototype.push), Xd = Lt(Array.prototype.splice), Ra = Lt(String.prototype.toLowerCase), xo = Lt(String.prototype.toString), Ss = Lt(String.prototype.match), In = Lt(String.prototype.replace), Kd = Lt(String.prototype.indexOf), $d = Lt(String.prototype.trim), ar = Lt(Object.prototype.hasOwnProperty), It = Lt(RegExp.prototype.test), _n = Zd(TypeError);
function Lt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Yo(e, t, n);
  };
}
function Zd(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Jo(e, r);
  };
}
function ze(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ra;
  vs && vs(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const o = r(a);
      o !== a && (qd(t) || (t[n] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function ef(e) {
  for (let t = 0; t < e.length; t++)
    ar(e, t) || (e[t] = null);
  return e;
}
function Hr(e) {
  const t = Zl(null);
  for (const [r, n] of $l(e))
    ar(e, r) && (Array.isArray(n) ? t[r] = ef(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Hr(n) : t[r] = n);
  return t;
}
function On(e, t) {
  for (; e !== null; ) {
    const n = Yd(e, t);
    if (n) {
      if (n.get)
        return Lt(n.get);
      if (typeof n.value == "function")
        return Lt(n.value);
    }
    e = Vd(e);
  }
  function r() {
    return null;
  }
  return r;
}
const xs = Ot(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Eo = Ot(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ko = Ot(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), tf = Ot(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Co = Ot(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), rf = Ot(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Es = Ot(["#text"]), ks = Ot(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), To = Ot(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Cs = Ot(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), wa = Ot(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), nf = Gt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), af = Gt(/<%[\w\W]*|[\w\W]*%>/gm), of = Gt(/\$\{[\w\W]*/gm), sf = Gt(/^data-[\-\w.\u00B7-\uFFFF]+$/), lf = Gt(/^aria-[\-\w]+$/), ec = Gt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cf = Gt(/^(?:\w+script|data):/i), uf = Gt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tc = Gt(/^html$/i), df = Gt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ts = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: lf,
  ATTR_WHITESPACE: uf,
  CUSTOM_ELEMENT: df,
  DATA_ATTR: sf,
  DOCTYPE_NAME: tc,
  ERB_EXPR: af,
  IS_ALLOWED_URI: ec,
  IS_SCRIPT_OR_DATA: cf,
  MUSTACHE_EXPR: nf,
  TMPLIT_EXPR: of
});
const Ln = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ff = function() {
  return typeof window > "u" ? null : window;
}, pf = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const o = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(o, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Rs = function() {
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
function rc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ff();
  const t = (A) => rc(A);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Ln.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: l,
    Node: c,
    Element: h,
    NodeFilter: d,
    NamedNodeMap: y = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: I,
    trustedTypes: U
  } = e, C = h.prototype, w = On(C, "cloneNode"), E = On(C, "remove"), N = On(C, "nextSibling"), D = On(C, "childNodes"), F = On(C, "parentNode");
  if (typeof l == "function") {
    const A = r.createElement("template");
    A.content && A.content.ownerDocument && (r = A.content.ownerDocument);
  }
  let B, R = "";
  const {
    implementation: ae,
    createNodeIterator: de,
    createDocumentFragment: Z,
    getElementsByTagName: le
  } = r, {
    importNode: we
  } = n;
  let ue = Rs();
  t.isSupported = typeof $l == "function" && typeof F == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ge,
    ERB_EXPR: Ie,
    TMPLIT_EXPR: Oe,
    DATA_ATTR: me,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Ue,
    ATTR_WHITESPACE: Pe,
    CUSTOM_ELEMENT: Ge
  } = Ts;
  let {
    IS_ALLOWED_URI: Xe
  } = Ts, pe = null;
  const q = ze({}, [...xs, ...Eo, ...ko, ...Co, ...Es]);
  let L = null;
  const G = ze({}, [...ks, ...To, ...Cs, ...wa]);
  let H = Object.seal(Zl(null, {
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
  })), v = null, te = null, P = !0, ce = !0, re = !1, oe = !0, J = !1, fe = !0, be = !1, ie = !1, Ee = !1, se = !1, ve = !1, Je = !1, ke = !0, gt = !1;
  const tt = "user-content-";
  let Ce = !0, X = !1, he = {}, rt = null;
  const yt = ze({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const lr = ze({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const hr = ze({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ct = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let vt = dt, Vt = !1, Yt = null;
  const Br = ze({}, [Ct, At, dt], xo);
  let pt = ze({}, ["mi", "mo", "mn", "ms", "mtext"]), Tt = ze({}, ["annotation-xml"]);
  const cr = ze({}, ["title", "style", "font", "a", "script"]);
  let Me = null;
  const Jt = ["application/xhtml+xml", "text/html"], ur = "text/html";
  let _e = null, lt = null;
  const dr = r.createElement("form"), Rt = function(x) {
    return x instanceof RegExp || x instanceof Function;
  }, Qt = function() {
    let x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(lt && lt === x)) {
      if ((!x || typeof x != "object") && (x = {}), x = Hr(x), Me = // eslint-disable-next-line unicorn/prefer-includes
      Jt.indexOf(x.PARSER_MEDIA_TYPE) === -1 ? ur : x.PARSER_MEDIA_TYPE, _e = Me === "application/xhtml+xml" ? xo : Ra, pe = ar(x, "ALLOWED_TAGS") ? ze({}, x.ALLOWED_TAGS, _e) : q, L = ar(x, "ALLOWED_ATTR") ? ze({}, x.ALLOWED_ATTR, _e) : G, Yt = ar(x, "ALLOWED_NAMESPACES") ? ze({}, x.ALLOWED_NAMESPACES, xo) : Br, Ht = ar(x, "ADD_URI_SAFE_ATTR") ? ze(Hr(hr), x.ADD_URI_SAFE_ATTR, _e) : hr, qe = ar(x, "ADD_DATA_URI_TAGS") ? ze(Hr(lr), x.ADD_DATA_URI_TAGS, _e) : lr, rt = ar(x, "FORBID_CONTENTS") ? ze({}, x.FORBID_CONTENTS, _e) : yt, v = ar(x, "FORBID_TAGS") ? ze({}, x.FORBID_TAGS, _e) : {}, te = ar(x, "FORBID_ATTR") ? ze({}, x.FORBID_ATTR, _e) : {}, he = ar(x, "USE_PROFILES") ? x.USE_PROFILES : !1, P = x.ALLOW_ARIA_ATTR !== !1, ce = x.ALLOW_DATA_ATTR !== !1, re = x.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = x.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = x.SAFE_FOR_TEMPLATES || !1, fe = x.SAFE_FOR_XML !== !1, be = x.WHOLE_DOCUMENT || !1, se = x.RETURN_DOM || !1, ve = x.RETURN_DOM_FRAGMENT || !1, Je = x.RETURN_TRUSTED_TYPE || !1, Ee = x.FORCE_BODY || !1, ke = x.SANITIZE_DOM !== !1, gt = x.SANITIZE_NAMED_PROPS || !1, Ce = x.KEEP_CONTENT !== !1, X = x.IN_PLACE || !1, Xe = x.ALLOWED_URI_REGEXP || ec, vt = x.NAMESPACE || dt, pt = x.MATHML_TEXT_INTEGRATION_POINTS || pt, Tt = x.HTML_INTEGRATION_POINTS || Tt, H = x.CUSTOM_ELEMENT_HANDLING || {}, x.CUSTOM_ELEMENT_HANDLING && Rt(x.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = x.CUSTOM_ELEMENT_HANDLING.tagNameCheck), x.CUSTOM_ELEMENT_HANDLING && Rt(x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = x.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), x.CUSTOM_ELEMENT_HANDLING && typeof x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = x.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), J && (ce = !1), ve && (se = !0), he && (pe = ze({}, Es), L = [], he.html === !0 && (ze(pe, xs), ze(L, ks)), he.svg === !0 && (ze(pe, Eo), ze(L, To), ze(L, wa)), he.svgFilters === !0 && (ze(pe, ko), ze(L, To), ze(L, wa)), he.mathMl === !0 && (ze(pe, Co), ze(L, Cs), ze(L, wa))), x.ADD_TAGS && (pe === q && (pe = Hr(pe)), ze(pe, x.ADD_TAGS, _e)), x.ADD_ATTR && (L === G && (L = Hr(L)), ze(L, x.ADD_ATTR, _e)), x.ADD_URI_SAFE_ATTR && ze(Ht, x.ADD_URI_SAFE_ATTR, _e), x.FORBID_CONTENTS && (rt === yt && (rt = Hr(rt)), ze(rt, x.FORBID_CONTENTS, _e)), Ce && (pe["#text"] = !0), be && ze(pe, ["html", "head", "body"]), pe.table && (ze(pe, ["tbody"]), delete v.tbody), x.TRUSTED_TYPES_POLICY) {
        if (typeof x.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof x.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw _n('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B = x.TRUSTED_TYPES_POLICY, R = B.createHTML("");
      } else
        B === void 0 && (B = pf(U, a)), B !== null && typeof R == "string" && (R = B.createHTML(""));
      Ot && Ot(x), lt = x;
    }
  }, Xt = ze({}, [...Eo, ...ko, ...tf]), Kt = ze({}, [...Co, ...rf]), Ir = function(x) {
    let O = F(x);
    (!O || !O.tagName) && (O = {
      namespaceURI: vt,
      tagName: "template"
    });
    const $ = Ra(x.tagName), Te = Ra(O.tagName);
    return Yt[x.namespaceURI] ? x.namespaceURI === At ? O.namespaceURI === dt ? $ === "svg" : O.namespaceURI === Ct ? $ === "svg" && (Te === "annotation-xml" || pt[Te]) : !!Xt[$] : x.namespaceURI === Ct ? O.namespaceURI === dt ? $ === "math" : O.namespaceURI === At ? $ === "math" && Tt[Te] : !!Kt[$] : x.namespaceURI === dt ? O.namespaceURI === At && !Tt[Te] || O.namespaceURI === Ct && !pt[Te] ? !1 : !Kt[$] && (cr[$] || !Xt[$]) : !!(Me === "application/xhtml+xml" && Yt[x.namespaceURI]) : !1;
  }, ft = function(x) {
    Rn(t.removed, {
      element: x
    });
    try {
      F(x).removeChild(x);
    } catch {
      E(x);
    }
  }, Dt = function(x, O) {
    try {
      Rn(t.removed, {
        attribute: O.getAttributeNode(x),
        from: O
      });
    } catch {
      Rn(t.removed, {
        attribute: null,
        from: O
      });
    }
    if (O.removeAttribute(x), x === "is")
      if (se || ve)
        try {
          ft(O);
        } catch {
        }
      else
        try {
          O.setAttribute(x, "");
        } catch {
        }
  }, gr = function(x) {
    let O = null, $ = null;
    if (Ee)
      x = "<remove></remove>" + x;
    else {
      const He = Ss(x, /^[\r\n\t ]+/);
      $ = He && He[0];
    }
    Me === "application/xhtml+xml" && vt === dt && (x = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + x + "</body></html>");
    const Te = B ? B.createHTML(x) : x;
    if (vt === dt)
      try {
        O = new I().parseFromString(Te, Me);
      } catch {
      }
    if (!O || !O.documentElement) {
      O = ae.createDocument(vt, "template", null);
      try {
        O.documentElement.innerHTML = Vt ? R : Te;
      } catch {
      }
    }
    const Ne = O.body || O.documentElement;
    return x && $ && Ne.insertBefore(r.createTextNode($), Ne.childNodes[0] || null), vt === dt ? le.call(O, be ? "html" : "body")[0] : be ? O.documentElement : Ne;
  }, mr = function(x) {
    return de.call(
      x.ownerDocument || x,
      x,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Bt = function(x) {
    return x instanceof m && (typeof x.nodeName != "string" || typeof x.textContent != "string" || typeof x.removeChild != "function" || !(x.attributes instanceof y) || typeof x.removeAttribute != "function" || typeof x.setAttribute != "function" || typeof x.namespaceURI != "string" || typeof x.insertBefore != "function" || typeof x.hasChildNodes != "function");
  }, fr = function(x) {
    return typeof c == "function" && x instanceof c;
  };
  function nt(A, x, O) {
    ya(A, ($) => {
      $.call(t, x, O, lt);
    });
  }
  const $t = function(x) {
    let O = null;
    if (nt(ue.beforeSanitizeElements, x, null), Bt(x))
      return ft(x), !0;
    const $ = _e(x.nodeName);
    if (nt(ue.uponSanitizeElement, x, {
      tagName: $,
      allowedTags: pe
    }), x.hasChildNodes() && !fr(x.firstElementChild) && It(/<[/\w]/g, x.innerHTML) && It(/<[/\w]/g, x.textContent) || x.nodeType === Ln.progressingInstruction || fe && x.nodeType === Ln.comment && It(/<[/\w]/g, x.data))
      return ft(x), !0;
    if (!pe[$] || v[$]) {
      if (!v[$] && Mt($) && (H.tagNameCheck instanceof RegExp && It(H.tagNameCheck, $) || H.tagNameCheck instanceof Function && H.tagNameCheck($)))
        return !1;
      if (Ce && !rt[$]) {
        const Te = F(x) || x.parentNode, Ne = D(x) || x.childNodes;
        if (Ne && Te) {
          const He = Ne.length;
          for (let Le = He - 1; Le >= 0; --Le) {
            const at = w(Ne[Le], !0);
            at.__removalCount = (x.__removalCount || 0) + 1, Te.insertBefore(at, N(x));
          }
        }
      }
      return ft(x), !0;
    }
    return x instanceof h && !Ir(x) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && It(/<\/no(script|embed|frames)/i, x.innerHTML) ? (ft(x), !0) : (J && x.nodeType === Ln.text && (O = x.textContent, ya([ge, Ie, Oe], (Te) => {
      O = In(O, Te, " ");
    }), x.textContent !== O && (Rn(t.removed, {
      element: x.cloneNode()
    }), x.textContent = O)), nt(ue.afterSanitizeElements, x, null), !1);
  }, br = function(x, O, $) {
    if (ke && (O === "id" || O === "name") && ($ in r || $ in dr))
      return !1;
    if (!(ce && !te[O] && It(me, O))) {
      if (!(P && It(st, O))) {
        if (!L[O] || te[O]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Mt(x) && (H.tagNameCheck instanceof RegExp && It(H.tagNameCheck, x) || H.tagNameCheck instanceof Function && H.tagNameCheck(x)) && (H.attributeNameCheck instanceof RegExp && It(H.attributeNameCheck, O) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(O)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            O === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && It(H.tagNameCheck, $) || H.tagNameCheck instanceof Function && H.tagNameCheck($)))
          ) return !1;
        } else if (!Ht[O]) {
          if (!It(Xe, In($, Pe, ""))) {
            if (!((O === "src" || O === "xlink:href" || O === "href") && x !== "script" && Kd($, "data:") === 0 && qe[x])) {
              if (!(re && !It(Ue, In($, Pe, "")))) {
                if ($)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Mt = function(x) {
    return x !== "annotation-xml" && Ss(x, Ge);
  }, yr = function(x) {
    nt(ue.beforeSanitizeAttributes, x, null);
    const {
      attributes: O
    } = x;
    if (!O || Bt(x))
      return;
    const $ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let Te = O.length;
    for (; Te--; ) {
      const Ne = O[Te], {
        name: He,
        namespaceURI: Le,
        value: at
      } = Ne, et = _e(He);
      let ct = He === "value" ? at : $d(at);
      if ($.attrName = et, $.attrValue = ct, $.keepAttr = !0, $.forceKeepAttr = void 0, nt(ue.uponSanitizeAttribute, x, $), ct = $.attrValue, gt && (et === "id" || et === "name") && (Dt(He, x), ct = tt + ct), fe && It(/((--!?|])>)|<\/(style|title)/i, ct)) {
        Dt(He, x);
        continue;
      }
      if ($.forceKeepAttr || (Dt(He, x), !$.keepAttr))
        continue;
      if (!oe && It(/\/>/i, ct)) {
        Dt(He, x);
        continue;
      }
      J && ya([ge, Ie, Oe], (Zt) => {
        ct = In(ct, Zt, " ");
      });
      const vr = _e(x.nodeName);
      if (br(vr, et, ct)) {
        if (B && typeof U == "object" && typeof U.getAttributeType == "function" && !Le)
          switch (U.getAttributeType(vr, et)) {
            case "TrustedHTML": {
              ct = B.createHTML(ct);
              break;
            }
            case "TrustedScriptURL": {
              ct = B.createScriptURL(ct);
              break;
            }
          }
        try {
          Le ? x.setAttributeNS(Le, He, ct) : x.setAttribute(He, ct), Bt(x) ? ft(x) : As(t.removed);
        } catch {
        }
      }
    }
    nt(ue.afterSanitizeAttributes, x, null);
  }, wr = function A(x) {
    let O = null;
    const $ = mr(x);
    for (nt(ue.beforeSanitizeShadowDOM, x, null); O = $.nextNode(); )
      nt(ue.uponSanitizeShadowNode, O, null), $t(O), yr(O), O.content instanceof o && A(O.content);
    nt(ue.afterSanitizeShadowDOM, x, null);
  };
  return t.sanitize = function(A) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, $ = null, Te = null, Ne = null;
    if (Vt = !A, Vt && (A = "<!-->"), typeof A != "string" && !fr(A))
      if (typeof A.toString == "function") {
        if (A = A.toString(), typeof A != "string")
          throw _n("dirty is not a string, aborting");
      } else
        throw _n("toString is not a function");
    if (!t.isSupported)
      return A;
    if (ie || Qt(x), t.removed = [], typeof A == "string" && (X = !1), X) {
      if (A.nodeName) {
        const at = _e(A.nodeName);
        if (!pe[at] || v[at])
          throw _n("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (A instanceof c)
      O = gr("<!---->"), $ = O.ownerDocument.importNode(A, !0), $.nodeType === Ln.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? O = $ : O.appendChild($);
    else {
      if (!se && !J && !be && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return B && Je ? B.createHTML(A) : A;
      if (O = gr(A), !O)
        return se ? null : Je ? R : "";
    }
    O && Ee && ft(O.firstChild);
    const He = mr(X ? A : O);
    for (; Te = He.nextNode(); )
      $t(Te), yr(Te), Te.content instanceof o && wr(Te.content);
    if (X)
      return A;
    if (se) {
      if (ve)
        for (Ne = Z.call(O.ownerDocument); O.firstChild; )
          Ne.appendChild(O.firstChild);
      else
        Ne = O;
      return (L.shadowroot || L.shadowrootmode) && (Ne = we.call(n, Ne, !0)), Ne;
    }
    let Le = be ? O.outerHTML : O.innerHTML;
    return be && pe["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && It(tc, O.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Le), J && ya([ge, Ie, Oe], (at) => {
      Le = In(Le, at, " ");
    }), B && Je ? B.createHTML(Le) : Le;
  }, t.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qt(A), ie = !0;
  }, t.clearConfig = function() {
    lt = null, ie = !1;
  }, t.isValidAttribute = function(A, x, O) {
    lt || Qt({});
    const $ = _e(A), Te = _e(x);
    return br($, Te, O);
  }, t.addHook = function(A, x) {
    typeof x == "function" && Rn(ue[A], x);
  }, t.removeHook = function(A, x) {
    if (x !== void 0) {
      const O = Jd(ue[A], x);
      return O === -1 ? void 0 : Xd(ue[A], O, 1)[0];
    }
    return As(ue[A]);
  }, t.removeHooks = function(A) {
    ue[A] = [];
  }, t.removeAllHooks = function() {
    ue = Rs();
  }, t;
}
rc();
_.shape({
  event: _.string,
  action: _.string,
  name: _.string,
  region: _.string,
  section: _.string,
  component: _.string,
  type: _.string,
  text: _.string
});
const sn = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: o = "",
  region: l = "",
  component: c = ""
}) => {
  const { dataLayer: h } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: a.toLowerCase(),
    text: o.toLowerCase(),
    component: c.toLowerCase()
  };
  h && h.push(d);
};
function hf({
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
const gf = wt.div`
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
`, mf = {
  id: _.string,
  imgURL: _.string,
  anonImgURL: _.string,
  name: _.string,
  titles: _.arrayOf(_.string),
  email: _.string,
  telephone: _.string,
  addressLine1: _.string,
  addressLine2: _.string,
  description: _.string,
  facebookLink: _.string,
  linkedinLink: _.string,
  twitterLink: _.string,
  website: _.string,
  size: _.string,
  fill: _.bool,
  anonymized: _.bool,
  GASource: _.string,
  profileURL: _.string
};
_.shape({
  acres: _.shape({
    raw: _.number
  }),
  date_established: _.shape({
    raw: _.string
  }),
  description: _.shape({
    raw: _.string
  }),
  id: _.shape({
    raw: _.string
  }),
  location: _.shape({
    raw: _.string
  }),
  nps_link: _.shape({
    raw: _.string
  }),
  square_km: _.shape({
    raw: _.number
  }),
  states: _.shape({
    raw: _.arrayOf(_.string)
  }),
  title: _.shape({
    raw: _.string
  }),
  visitors: _.shape({
    raw: _.number
  }),
  world_heritage_site: _.shape({
    raw: _.string
  }),
  _meta: _.shape({
    raw: _.string
  })
});
const yi = ({ ...e }) => {
  var h;
  const t = e.facebookLink || e.linkedinLink || e.twitterLink || e.website, r = e.matchedAffiliationTitle ? `${e.matchedAffiliationTitle}` : "", n = e.matchedAffiliationDept && e.size !== "micro" ? e.matchedAffiliationDept : "", a = (d) => {
    d.target.style.display = "none";
  };
  let o = e.telephone;
  if (o) {
    const d = o.slice(0, 3), y = o.slice(3).replace("/", "");
    o = `${d}-${y}`;
  }
  const l = "ASU Knowledge Enterprise", c = () => {
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
    gf,
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
                  onClick: () => c(e.email),
                  href: `mailto:${e.email.toLowerCase()}`,
                  "aria-label": `Mail to :${e.email}`,
                  children: e.email
                }
              )
            ] }),
            o && /* @__PURE__ */ T.jsxs("li", { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fas fa-phone" }),
              /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => c(),
                  href: `tel:${o}`,
                  "aria-label": `User phone number: ${o}`,
                  children: o
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
                  onClick: () => c(),
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
                  onClick: () => c(),
                  href: e.linkedinLink,
                  "aria-label": "Go to user Linkedin profile",
                  children: /* @__PURE__ */ T.jsx("span", { className: "fab fa-linkedin", title: "LinkedIn Link" })
                }
              ) }),
              e.twitterLink && /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx(
                "a",
                {
                  onClick: () => c(),
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
                  onClick: () => c(),
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
yi.propTypes = mf;
function qn() {
  return qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qn.apply(this, arguments);
}
var Pr;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Pr || (Pr = {}));
const Is = "popstate";
function bf(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let {
      pathname: o,
      search: l,
      hash: c
    } = n.location;
    return Xo(
      "",
      {
        pathname: o,
        search: l,
        hash: c
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : ac(a);
  }
  return wf(t, r, null, e);
}
function bt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function nc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function yf() {
  return Math.random().toString(36).substr(2, 8);
}
function _s(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Xo(e, t, r, n) {
  return r === void 0 && (r = null), qn({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? pn(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || yf()
  });
}
function ac(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function pn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
function wf(e, t, r, n) {
  n === void 0 && (n = {});
  let {
    window: a = document.defaultView,
    v5Compat: o = !1
  } = n, l = a.history, c = Pr.Pop, h = null, d = y();
  d == null && (d = 0, l.replaceState(qn({}, l.state, {
    idx: d
  }), ""));
  function y() {
    return (l.state || {
      idx: null
    }).idx;
  }
  function m() {
    c = Pr.Pop;
    let E = y(), N = E == null ? null : E - d;
    d = E, h && h({
      action: c,
      location: w.location,
      delta: N
    });
  }
  function I(E, N) {
    c = Pr.Push;
    let D = Xo(w.location, E, N);
    d = y() + 1;
    let F = _s(D, d), B = w.createHref(D);
    try {
      l.pushState(F, "", B);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError")
        throw R;
      a.location.assign(B);
    }
    o && h && h({
      action: c,
      location: w.location,
      delta: 1
    });
  }
  function U(E, N) {
    c = Pr.Replace;
    let D = Xo(w.location, E, N);
    d = y();
    let F = _s(D, d), B = w.createHref(D);
    l.replaceState(F, "", B), o && h && h({
      action: c,
      location: w.location,
      delta: 0
    });
  }
  function C(E) {
    let N = a.location.origin !== "null" ? a.location.origin : a.location.href, D = typeof E == "string" ? E : ac(E);
    return D = D.replace(/ $/, "%20"), bt(N, "No window.location.(origin|href) available to create URL for href: " + D), new URL(D, N);
  }
  let w = {
    get action() {
      return c;
    },
    get location() {
      return e(a, l);
    },
    listen(E) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(Is, m), h = E, () => {
        a.removeEventListener(Is, m), h = null;
      };
    },
    createHref(E) {
      return t(a, E);
    },
    createURL: C,
    encodeLocation(E) {
      let N = C(E);
      return {
        pathname: N.pathname,
        search: N.search,
        hash: N.hash
      };
    },
    push: I,
    replace: U,
    go(E) {
      return l.go(E);
    }
  };
  return w;
}
var Os;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Os || (Os = {}));
function vf(e, t, r) {
  return r === void 0 && (r = "/"), Af(e, t, r);
}
function Af(e, t, r, n) {
  let a = typeof t == "string" ? pn(t) : t, o = sc(a.pathname || "/", r);
  if (o == null)
    return null;
  let l = oc(e);
  Sf(l);
  let c = null;
  for (let h = 0; c == null && h < l.length; ++h) {
    let d = Nf(o);
    c = Of(l[h], d);
  }
  return c;
}
function oc(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (o, l, c) => {
    let h = {
      relativePath: c === void 0 ? o.path || "" : c,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o
    };
    h.relativePath.startsWith("/") && (bt(h.relativePath.startsWith(n), 'Absolute route path "' + h.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), h.relativePath = h.relativePath.slice(n.length));
    let d = Jr([n, h.relativePath]), y = r.concat(h);
    o.children && o.children.length > 0 && (bt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + d + '".')
    ), oc(o.children, t, y, d)), !(o.path == null && !o.index) && t.push({
      path: d,
      score: If(d, o.index),
      routesMeta: y
    });
  };
  return e.forEach((o, l) => {
    var c;
    if (o.path === "" || !((c = o.path) != null && c.includes("?")))
      a(o, l);
    else
      for (let h of ic(o.path))
        a(o, l, h);
  }), t;
}
function ic(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [o, ""] : [o];
  let l = ic(n.join("/")), c = [];
  return c.push(...l.map((h) => h === "" ? o : [o, h].join("/"))), a && c.push(...l), c.map((h) => e.startsWith("/") && h === "" ? "/" : h);
}
function Sf(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : _f(t.routesMeta.map((n) => n.childrenIndex), r.routesMeta.map((n) => n.childrenIndex)));
}
const xf = /^:[\w-]+$/, Ef = 3, kf = 2, Cf = 1, Tf = 10, Rf = -2, Ls = (e) => e === "*";
function If(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Ls) && (n += Rf), t && (n += kf), r.filter((a) => !Ls(a)).reduce((a, o) => a + (xf.test(o) ? Ef : o === "" ? Cf : Tf), n);
}
function _f(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Of(e, t, r) {
  let {
    routesMeta: n
  } = e, a = {}, o = "/", l = [];
  for (let c = 0; c < n.length; ++c) {
    let h = n[c], d = c === n.length - 1, y = o === "/" ? t : t.slice(o.length) || "/", m = Lf({
      path: h.relativePath,
      caseSensitive: h.caseSensitive,
      end: d
    }, y), I = h.route;
    if (!m)
      return null;
    Object.assign(a, m.params), l.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: Jr([o, m.pathname]),
      pathnameBase: Uf(Jr([o, m.pathnameBase])),
      route: I
    }), m.pathnameBase !== "/" && (o = Jr([o, m.pathnameBase]));
  }
  return l;
}
function Lf(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = Pf(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a) return null;
  let o = a[0], l = o.replace(/(.)\/+$/, "$1"), c = a.slice(1);
  return {
    params: n.reduce((d, y, m) => {
      let {
        paramName: I,
        isOptional: U
      } = y;
      if (I === "*") {
        let w = c[m] || "";
        l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const C = c[m];
      return U && !C ? d[I] = void 0 : d[I] = (C || "").replace(/%2F/g, "/"), d;
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e
  };
}
function Pf(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), nc(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, c, h) => (n.push({
    paramName: c,
    isOptional: h != null
  }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function Nf(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return nc(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function sc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function Df(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? pn(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Bf(r, t) : t,
    search: zf(n),
    hash: Wf(a)
  };
}
function Bf(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function Ro(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function jf(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Mf(e, t) {
  let r = jf(e);
  return t ? r.map((n, a) => a === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function Ff(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string" ? a = pn(e) : (a = qn({}, e), bt(!a.pathname || !a.pathname.includes("?"), Ro("?", "pathname", "search", a)), bt(!a.pathname || !a.pathname.includes("#"), Ro("#", "pathname", "hash", a)), bt(!a.search || !a.search.includes("#"), Ro("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "", l = o ? "/" : a.pathname, c;
  if (l == null)
    c = r;
  else {
    let m = t.length - 1;
    if (!n && l.startsWith("..")) {
      let I = l.split("/");
      for (; I[0] === ".."; )
        I.shift(), m -= 1;
      a.pathname = I.join("/");
    }
    c = m >= 0 ? t[m] : "/";
  }
  let h = Df(a, c), d = l && l !== "/" && l.endsWith("/"), y = (o || l === ".") && r.endsWith("/");
  return !h.pathname.endsWith("/") && (d || y) && (h.pathname += "/"), h;
}
const Jr = (e) => e.join("/").replace(/\/\/+/g, "/"), Uf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), zf = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Wf = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Hf(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const lc = ["post", "put", "patch", "delete"];
new Set(lc);
const Qf = ["get", ...lc];
new Set(Qf);
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vn.apply(this, arguments);
}
const wi = /* @__PURE__ */ ye.createContext(null), Gf = /* @__PURE__ */ ye.createContext(null), Va = /* @__PURE__ */ ye.createContext(null), Ya = /* @__PURE__ */ ye.createContext(null), hn = /* @__PURE__ */ ye.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
}), cc = /* @__PURE__ */ ye.createContext(null);
function Ja() {
  return ye.useContext(Ya) != null;
}
function vi() {
  return Ja() || bt(!1), ye.useContext(Ya).location;
}
function uc(e) {
  ye.useContext(Va).static || ye.useLayoutEffect(e);
}
function qf() {
  let {
    isDataRoute: e
  } = ye.useContext(hn);
  return e ? op() : Vf();
}
function Vf() {
  Ja() || bt(!1);
  let e = ye.useContext(wi), {
    basename: t,
    future: r,
    navigator: n
  } = ye.useContext(Va), {
    matches: a
  } = ye.useContext(hn), {
    pathname: o
  } = vi(), l = JSON.stringify(Mf(a, r.v7_relativeSplatPath)), c = ye.useRef(!1);
  return uc(() => {
    c.current = !0;
  }), ye.useCallback(function(d, y) {
    if (y === void 0 && (y = {}), !c.current) return;
    if (typeof d == "number") {
      n.go(d);
      return;
    }
    let m = Ff(d, JSON.parse(l), o, y.relative === "path");
    e == null && t !== "/" && (m.pathname = m.pathname === "/" ? t : Jr([t, m.pathname])), (y.replace ? n.replace : n.push)(m, y.state, y);
  }, [t, n, l, o, e]);
}
function Yf(e, t) {
  return Jf(e, t);
}
function Jf(e, t, r, n) {
  Ja() || bt(!1);
  let {
    navigator: a,
    static: o
  } = ye.useContext(Va), {
    matches: l
  } = ye.useContext(hn), c = l[l.length - 1], h = c ? c.params : {};
  c && c.pathname;
  let d = c ? c.pathnameBase : "/";
  c && c.route;
  let y = vi(), m;
  if (t) {
    var I;
    let N = typeof t == "string" ? pn(t) : t;
    d === "/" || (I = N.pathname) != null && I.startsWith(d) || bt(!1), m = N;
  } else
    m = y;
  let U = m.pathname || "/", C = U;
  if (d !== "/") {
    let N = d.replace(/^\//, "").split("/");
    C = "/" + U.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let w = vf(e, {
    pathname: C
  }), E = ep(w && w.map((N) => Object.assign({}, N, {
    params: Object.assign({}, h, N.params),
    pathname: Jr([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(N.pathname).pathname : N.pathname
    ]),
    pathnameBase: N.pathnameBase === "/" ? d : Jr([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      a.encodeLocation ? a.encodeLocation(N.pathnameBase).pathname : N.pathnameBase
    ])
  })), l, r, n);
  return t && E ? /* @__PURE__ */ ye.createElement(Ya.Provider, {
    value: {
      location: Vn({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, m),
      navigationType: Pr.Pop
    }
  }, E) : E;
}
function Xf() {
  let e = ap(), t = Hf(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, a = {
    padding: "0.5rem",
    backgroundColor: "rgba(200,200,200, 0.5)"
  };
  return /* @__PURE__ */ ye.createElement(ye.Fragment, null, /* @__PURE__ */ ye.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ ye.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ ye.createElement("pre", {
    style: a
  }, r) : null, null);
}
const Kf = /* @__PURE__ */ ye.createElement(Xf, null);
class $f extends ye.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : r.error,
      location: r.location,
      revalidation: t.revalidation || r.revalidation
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ ye.createElement(hn.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ ye.createElement(cc.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Zf(e) {
  let {
    routeContext: t,
    match: r,
    children: n
  } = e, a = ye.useContext(wi);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ ye.createElement(hn.Provider, {
    value: t
  }, n);
}
function ep(e, t, r, n) {
  var a;
  if (t === void 0 && (t = []), r === void 0 && (r = null), n === void 0 && (n = null), e == null) {
    var o;
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if ((o = n) != null && o.v7_partialHydration && t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let l = e, c = (a = r) == null ? void 0 : a.errors;
  if (c != null) {
    let y = l.findIndex((m) => m.route.id && (c == null ? void 0 : c[m.route.id]) !== void 0);
    y >= 0 || bt(!1), l = l.slice(0, Math.min(l.length, y + 1));
  }
  let h = !1, d = -1;
  if (r && n && n.v7_partialHydration)
    for (let y = 0; y < l.length; y++) {
      let m = l[y];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (d = y), m.route.id) {
        let {
          loaderData: I,
          errors: U
        } = r, C = m.route.loader && I[m.route.id] === void 0 && (!U || U[m.route.id] === void 0);
        if (m.route.lazy || C) {
          h = !0, d >= 0 ? l = l.slice(0, d + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((y, m, I) => {
    let U, C = !1, w = null, E = null;
    r && (U = c && m.route.id ? c[m.route.id] : void 0, w = m.route.errorElement || Kf, h && (d < 0 && I === 0 ? (ip("route-fallback"), C = !0, E = null) : d === I && (C = !0, E = m.route.hydrateFallbackElement || null)));
    let N = t.concat(l.slice(0, I + 1)), D = () => {
      let F;
      return U ? F = w : C ? F = E : m.route.Component ? F = /* @__PURE__ */ ye.createElement(m.route.Component, null) : m.route.element ? F = m.route.element : F = y, /* @__PURE__ */ ye.createElement(Zf, {
        match: m,
        routeContext: {
          outlet: y,
          matches: N,
          isDataRoute: r != null
        },
        children: F
      });
    };
    return r && (m.route.ErrorBoundary || m.route.errorElement || I === 0) ? /* @__PURE__ */ ye.createElement($f, {
      location: r.location,
      revalidation: r.revalidation,
      component: w,
      error: U,
      children: D(),
      routeContext: {
        outlet: null,
        matches: N,
        isDataRoute: !0
      }
    }) : D();
  }, null);
}
var dc = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(dc || {}), ja = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(ja || {});
function tp(e) {
  let t = ye.useContext(wi);
  return t || bt(!1), t;
}
function rp(e) {
  let t = ye.useContext(Gf);
  return t || bt(!1), t;
}
function np(e) {
  let t = ye.useContext(hn);
  return t || bt(!1), t;
}
function fc(e) {
  let t = np(), r = t.matches[t.matches.length - 1];
  return r.route.id || bt(!1), r.route.id;
}
function ap() {
  var e;
  let t = ye.useContext(cc), r = rp(ja.UseRouteError), n = fc(ja.UseRouteError);
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function op() {
  let {
    router: e
  } = tp(dc.UseNavigateStable), t = fc(ja.UseNavigateStable), r = ye.useRef(!1);
  return uc(() => {
    r.current = !0;
  }), ye.useCallback(function(a, o) {
    o === void 0 && (o = {}), r.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, Vn({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
const Ps = {};
function ip(e, t, r) {
  Ps[e] || (Ps[e] = !0);
}
function sp(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Ai(e) {
  bt(!1);
}
function lp(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = Pr.Pop,
    navigator: o,
    static: l = !1,
    future: c
  } = e;
  Ja() && bt(!1);
  let h = t.replace(/^\/*/, "/"), d = ye.useMemo(() => ({
    basename: h,
    navigator: o,
    static: l,
    future: Vn({
      v7_relativeSplatPath: !1
    }, c)
  }), [h, c, o, l]);
  typeof n == "string" && (n = pn(n));
  let {
    pathname: y = "/",
    search: m = "",
    hash: I = "",
    state: U = null,
    key: C = "default"
  } = n, w = ye.useMemo(() => {
    let E = sc(y, h);
    return E == null ? null : {
      location: {
        pathname: E,
        search: m,
        hash: I,
        state: U,
        key: C
      },
      navigationType: a
    };
  }, [h, y, m, I, U, C, a]);
  return w == null ? null : /* @__PURE__ */ ye.createElement(Va.Provider, {
    value: d
  }, /* @__PURE__ */ ye.createElement(Ya.Provider, {
    children: r,
    value: w
  }));
}
function pc(e) {
  let {
    children: t,
    location: r
  } = e;
  return Yf(Ko(t), r);
}
new Promise(() => {
});
function Ko(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return ye.Children.forEach(e, (n, a) => {
    if (!/* @__PURE__ */ ye.isValidElement(n))
      return;
    let o = [...t, a];
    if (n.type === ye.Fragment) {
      r.push.apply(r, Ko(n.props.children, o));
      return;
    }
    n.type !== Ai && bt(!1), !n.props.index || !n.props.children || bt(!1);
    let l = {
      id: n.props.id || o.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (l.children = Ko(n.props.children, o)), r.push(l);
  }), r;
}
function $o(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, r) => {
    let n = e[r];
    return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
  }, []));
}
function cp(e, t) {
  let r = $o(e);
  return t && t.forEach((n, a) => {
    r.has(a) || t.getAll(a).forEach((o) => {
      r.append(a, o);
    });
  }), r;
}
const up = "6";
try {
  window.__reactRouterVersion = up;
} catch {
}
const dp = "startTransition", Ns = ye[dp];
function hc(e) {
  let {
    basename: t,
    children: r,
    future: n,
    window: a
  } = e, o = ye.useRef();
  o.current == null && (o.current = bf({
    window: a,
    v5Compat: !0
  }));
  let l = o.current, [c, h] = ye.useState({
    action: l.action,
    location: l.location
  }), {
    v7_startTransition: d
  } = n || {}, y = ye.useCallback((m) => {
    d && Ns ? Ns(() => h(m)) : h(m);
  }, [h, d]);
  return ye.useLayoutEffect(() => l.listen(y), [l, y]), ye.useEffect(() => sp(n), [n]), /* @__PURE__ */ ye.createElement(lp, {
    basename: t,
    children: r,
    location: c.location,
    navigationType: c.action,
    navigator: l,
    future: n
  });
}
var Ds;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Ds || (Ds = {}));
var Bs;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Bs || (Bs = {}));
function gc(e) {
  let t = ye.useRef($o(e)), r = ye.useRef(!1), n = vi(), a = ye.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    cp(n.search, r.current ? null : t.current)
  ), [n.search]), o = qf(), l = ye.useCallback((c, h) => {
    const d = $o(typeof c == "function" ? c(a) : c);
    r.current = !0, o("?" + d, h);
  }, [o, a]);
  return [a, l];
}
const fp = wt.div`
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
`, pp = {
  id: _.string,
  name: _.string,
  area: _.string,
  description: _.string,
  cookieTrail: _.arrayOf(_.string),
  link: _.string,
  fill: _.bool,
  GASource: _.string
}, mc = ({ ...e }) => {
  const [t, ,] = gc();
  function r() {
    const o = t.get("q"), l = t.get("search-tabs");
    let c;
    e.fill ? c = ["promoted-result", "all-asu-search"] : l === "all" && !t.get("url_host") ? c = ["all-asu-search"] : l === "web_sites" ? c = ["local-search", t.get("url_host")] : l === "all" && t.get("url_host") && (c = ["all-asu-search", t.get("url_host")]), e.localSection === !0 ? c.push("local-results") : e.localSection === !1 && c.push("all-asu-results");
    try {
      e.logClick(o, e.id, e.requestId, c, e);
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
    fp,
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
        e.cookieTrail.filter((o) => o).length ? /* @__PURE__ */ T.jsx("div", { className: "cookie-trail", children: e.cookieTrail.join(" › ") }) : null,
        /* @__PURE__ */ T.jsx("div", { className: "description", children: a })
      ] })
    }
  );
};
mc.propTypes = pp;
function Si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bc = { exports: {} }, Pn = {}, js;
function hp() {
  if (js) return Pn;
  js = 1;
  var e = ht, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, h, d) {
    var y, m = {}, I = null, U = null;
    d !== void 0 && (I = "" + d), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (y in h) n.call(h, y) && !o.hasOwnProperty(y) && (m[y] = h[y]);
    if (c && c.defaultProps) for (y in h = c.defaultProps, h) m[y] === void 0 && (m[y] = h[y]);
    return { $$typeof: t, type: c, key: I, ref: U, props: m, _owner: a.current };
  }
  return Pn.Fragment = r, Pn.jsx = l, Pn.jsxs = l, Pn;
}
bc.exports = hp();
var K = bc.exports, yc = { exports: {} }, Io, Ms;
function gp() {
  if (Ms) return Io;
  Ms = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Io = e, Io;
}
var _o, Fs;
function mp() {
  if (Fs) return _o;
  Fs = 1;
  var e = gp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, _o = function() {
    function n(l, c, h, d, y, m) {
      if (m !== e) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var o = {
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
    return o.PropTypes = o, o;
  }, _o;
}
yc.exports = mp()();
var bp = yc.exports;
const u = /* @__PURE__ */ Si(bp), yp = u.shape({
  url: u.string,
  altText: u.string,
  cssClass: u.arrayOf(u.string),
  size: u.oneOf(["small", "medium", "large"])
}), Oo = u.shape({
  text: u.string,
  maxWidth: u.string,
  cssClass: u.arrayOf(u.string),
  highlightColor: u.oneOf(["gold", "black"])
}), wc = u.shape({
  color: u.oneOf(["gold", "maroon", "gray", "dark"]),
  content: u.shape({
    icon: u.string,
    header: u.string,
    body: u.string
  })
}), xi = u.shape({
  text: u.string,
  name: u.string,
  event: u.string,
  action: u.string,
  type: u.string,
  region: u.string,
  section: u.string,
  component: u.string
});
var vc = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var o = "", l = 0; l < arguments.length; l++) {
        var c = arguments[l];
        c && (o = a(o, n(c)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return r.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var l = "";
      for (var c in o)
        t.call(o, c) && o[c] && (l = a(l, c));
      return l;
    }
    function a(o, l) {
      return l ? o ? o + " " + l : o + l : o;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(vc);
var wp = vc.exports;
const Rr = /* @__PURE__ */ Si(wp), Us = (e, t, r) => e ? t : r, vp = (e) => (e || []).join(" "), {
  entries: Ac,
  setPrototypeOf: zs,
  isFrozen: Ap,
  getPrototypeOf: Sp,
  getOwnPropertyDescriptor: xp
} = Object;
let {
  freeze: Pt,
  seal: qt,
  create: Sc
} = Object, {
  apply: Zo,
  construct: ei
} = typeof Reflect < "u" && Reflect;
Pt || (Pt = function(e) {
  return e;
});
qt || (qt = function(e) {
  return e;
});
Zo || (Zo = function(e, t, r) {
  return e.apply(t, r);
});
ei || (ei = function(e, t) {
  return new e(...t);
});
const va = Nt(Array.prototype.forEach), Ep = Nt(Array.prototype.lastIndexOf), Ws = Nt(Array.prototype.pop), Nn = Nt(Array.prototype.push), kp = Nt(Array.prototype.splice), Ia = Nt(String.prototype.toLowerCase), Lo = Nt(String.prototype.toString), Hs = Nt(String.prototype.match), Dn = Nt(String.prototype.replace), Cp = Nt(String.prototype.indexOf), Tp = Nt(String.prototype.trim), or = Nt(Object.prototype.hasOwnProperty), _t = Nt(RegExp.prototype.test), Bn = Rp(TypeError);
function Nt(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return Zo(e, t, n);
  };
}
function Rp(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ei(e, r);
  };
}
function We(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ia;
  zs && zs(e, null);
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const o = r(a);
      o !== a && (Ap(t) || (t[n] = o), a = o);
    }
    e[a] = !0;
  }
  return e;
}
function Ip(e) {
  for (let t = 0; t < e.length; t++)
    or(e, t) || (e[t] = null);
  return e;
}
function Qr(e) {
  const t = Sc(null);
  for (const [r, n] of Ac(e))
    or(e, r) && (Array.isArray(n) ? t[r] = Ip(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Qr(n) : t[r] = n);
  return t;
}
function jn(e, t) {
  for (; e !== null; ) {
    const n = xp(e, t);
    if (n) {
      if (n.get)
        return Nt(n.get);
      if (typeof n.value == "function")
        return Nt(n.value);
    }
    e = Sp(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Qs = Pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Po = Pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), No = Pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _p = Pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Do = Pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Op = Pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gs = Pt(["#text"]), qs = Pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Bo = Pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vs = Pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Aa = Pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Lp = qt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Pp = qt(/<%[\w\W]*|[\w\W]*%>/gm), Np = qt(/\$\{[\w\W]*/gm), Dp = qt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Bp = qt(/^aria-[\-\w]+$/), xc = qt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), jp = qt(/^(?:\w+script|data):/i), Mp = qt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ec = qt(/^html$/i), Fp = qt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ys = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Bp,
  ATTR_WHITESPACE: Mp,
  CUSTOM_ELEMENT: Fp,
  DATA_ATTR: Dp,
  DOCTYPE_NAME: Ec,
  ERB_EXPR: Pp,
  IS_ALLOWED_URI: xc,
  IS_SCRIPT_OR_DATA: jp,
  MUSTACHE_EXPR: Lp,
  TMPLIT_EXPR: Np
});
const Mn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Up = function() {
  return typeof window > "u" ? null : window;
}, zp = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (r = t.getAttribute(n));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(a, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Js = function() {
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
function kc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Up();
  const t = (A) => kc(A);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Mn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const n = r, a = n.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: l,
    Node: c,
    Element: h,
    NodeFilter: d,
    NamedNodeMap: y = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: m,
    DOMParser: I,
    trustedTypes: U
  } = e, C = h.prototype, w = jn(C, "cloneNode"), E = jn(C, "remove"), N = jn(C, "nextSibling"), D = jn(C, "childNodes"), F = jn(C, "parentNode");
  if (typeof l == "function") {
    const A = r.createElement("template");
    A.content && A.content.ownerDocument && (r = A.content.ownerDocument);
  }
  let B, R = "";
  const {
    implementation: ae,
    createNodeIterator: de,
    createDocumentFragment: Z,
    getElementsByTagName: le
  } = r, {
    importNode: we
  } = n;
  let ue = Js();
  t.isSupported = typeof Ac == "function" && typeof F == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ge,
    ERB_EXPR: Ie,
    TMPLIT_EXPR: Oe,
    DATA_ATTR: me,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Ue,
    ATTR_WHITESPACE: Pe,
    CUSTOM_ELEMENT: Ge
  } = Ys;
  let {
    IS_ALLOWED_URI: Xe
  } = Ys, pe = null;
  const q = We({}, [...Qs, ...Po, ...No, ...Do, ...Gs]);
  let L = null;
  const G = We({}, [...qs, ...Bo, ...Vs, ...Aa]);
  let H = Object.seal(Sc(null, {
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
  })), v = null, te = null, P = !0, ce = !0, re = !1, oe = !0, J = !1, fe = !0, be = !1, ie = !1, Ee = !1, se = !1, ve = !1, Je = !1, ke = !0, gt = !1;
  const tt = "user-content-";
  let Ce = !0, X = !1, he = {}, rt = null;
  const yt = We({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const lr = We({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ht = null;
  const hr = We({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ct = "http://www.w3.org/1998/Math/MathML", At = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let vt = dt, Vt = !1, Yt = null;
  const Br = We({}, [Ct, At, dt], Lo);
  let pt = We({}, ["mi", "mo", "mn", "ms", "mtext"]), Tt = We({}, ["annotation-xml"]);
  const cr = We({}, ["title", "style", "font", "a", "script"]);
  let Me = null;
  const Jt = ["application/xhtml+xml", "text/html"], ur = "text/html";
  let _e = null, lt = null;
  const dr = r.createElement("form"), Rt = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Qt = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(lt && lt === A)) {
      if ((!A || typeof A != "object") && (A = {}), A = Qr(A), Me = // eslint-disable-next-line unicorn/prefer-includes
      Jt.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? ur : A.PARSER_MEDIA_TYPE, _e = Me === "application/xhtml+xml" ? Lo : Ia, pe = or(A, "ALLOWED_TAGS") ? We({}, A.ALLOWED_TAGS, _e) : q, L = or(A, "ALLOWED_ATTR") ? We({}, A.ALLOWED_ATTR, _e) : G, Yt = or(A, "ALLOWED_NAMESPACES") ? We({}, A.ALLOWED_NAMESPACES, Lo) : Br, Ht = or(A, "ADD_URI_SAFE_ATTR") ? We(Qr(hr), A.ADD_URI_SAFE_ATTR, _e) : hr, qe = or(A, "ADD_DATA_URI_TAGS") ? We(Qr(lr), A.ADD_DATA_URI_TAGS, _e) : lr, rt = or(A, "FORBID_CONTENTS") ? We({}, A.FORBID_CONTENTS, _e) : yt, v = or(A, "FORBID_TAGS") ? We({}, A.FORBID_TAGS, _e) : {}, te = or(A, "FORBID_ATTR") ? We({}, A.FORBID_ATTR, _e) : {}, he = or(A, "USE_PROFILES") ? A.USE_PROFILES : !1, P = A.ALLOW_ARIA_ATTR !== !1, ce = A.ALLOW_DATA_ATTR !== !1, re = A.ALLOW_UNKNOWN_PROTOCOLS || !1, oe = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = A.SAFE_FOR_TEMPLATES || !1, fe = A.SAFE_FOR_XML !== !1, be = A.WHOLE_DOCUMENT || !1, se = A.RETURN_DOM || !1, ve = A.RETURN_DOM_FRAGMENT || !1, Je = A.RETURN_TRUSTED_TYPE || !1, Ee = A.FORCE_BODY || !1, ke = A.SANITIZE_DOM !== !1, gt = A.SANITIZE_NAMED_PROPS || !1, Ce = A.KEEP_CONTENT !== !1, X = A.IN_PLACE || !1, Xe = A.ALLOWED_URI_REGEXP || xc, vt = A.NAMESPACE || dt, pt = A.MATHML_TEXT_INTEGRATION_POINTS || pt, Tt = A.HTML_INTEGRATION_POINTS || Tt, H = A.CUSTOM_ELEMENT_HANDLING || {}, A.CUSTOM_ELEMENT_HANDLING && Rt(A.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (H.tagNameCheck = A.CUSTOM_ELEMENT_HANDLING.tagNameCheck), A.CUSTOM_ELEMENT_HANDLING && Rt(A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (H.attributeNameCheck = A.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), A.CUSTOM_ELEMENT_HANDLING && typeof A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (H.allowCustomizedBuiltInElements = A.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), J && (ce = !1), ve && (se = !0), he && (pe = We({}, Gs), L = [], he.html === !0 && (We(pe, Qs), We(L, qs)), he.svg === !0 && (We(pe, Po), We(L, Bo), We(L, Aa)), he.svgFilters === !0 && (We(pe, No), We(L, Bo), We(L, Aa)), he.mathMl === !0 && (We(pe, Do), We(L, Vs), We(L, Aa))), A.ADD_TAGS && (pe === q && (pe = Qr(pe)), We(pe, A.ADD_TAGS, _e)), A.ADD_ATTR && (L === G && (L = Qr(L)), We(L, A.ADD_ATTR, _e)), A.ADD_URI_SAFE_ATTR && We(Ht, A.ADD_URI_SAFE_ATTR, _e), A.FORBID_CONTENTS && (rt === yt && (rt = Qr(rt)), We(rt, A.FORBID_CONTENTS, _e)), Ce && (pe["#text"] = !0), be && We(pe, ["html", "head", "body"]), pe.table && (We(pe, ["tbody"]), delete v.tbody), A.TRUSTED_TYPES_POLICY) {
        if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Bn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B = A.TRUSTED_TYPES_POLICY, R = B.createHTML("");
      } else
        B === void 0 && (B = zp(U, a)), B !== null && typeof R == "string" && (R = B.createHTML(""));
      Pt && Pt(A), lt = A;
    }
  }, Xt = We({}, [...Po, ...No, ..._p]), Kt = We({}, [...Do, ...Op]), Ir = function(A) {
    let x = F(A);
    (!x || !x.tagName) && (x = {
      namespaceURI: vt,
      tagName: "template"
    });
    const O = Ia(A.tagName), $ = Ia(x.tagName);
    return Yt[A.namespaceURI] ? A.namespaceURI === At ? x.namespaceURI === dt ? O === "svg" : x.namespaceURI === Ct ? O === "svg" && ($ === "annotation-xml" || pt[$]) : !!Xt[O] : A.namespaceURI === Ct ? x.namespaceURI === dt ? O === "math" : x.namespaceURI === At ? O === "math" && Tt[$] : !!Kt[O] : A.namespaceURI === dt ? x.namespaceURI === At && !Tt[$] || x.namespaceURI === Ct && !pt[$] ? !1 : !Kt[O] && (cr[O] || !Xt[O]) : !!(Me === "application/xhtml+xml" && Yt[A.namespaceURI]) : !1;
  }, ft = function(A) {
    Nn(t.removed, {
      element: A
    });
    try {
      F(A).removeChild(A);
    } catch {
      E(A);
    }
  }, Dt = function(A, x) {
    try {
      Nn(t.removed, {
        attribute: x.getAttributeNode(A),
        from: x
      });
    } catch {
      Nn(t.removed, {
        attribute: null,
        from: x
      });
    }
    if (x.removeAttribute(A), A === "is")
      if (se || ve)
        try {
          ft(x);
        } catch {
        }
      else
        try {
          x.setAttribute(A, "");
        } catch {
        }
  }, gr = function(A) {
    let x = null, O = null;
    if (Ee)
      A = "<remove></remove>" + A;
    else {
      const Ne = Hs(A, /^[\r\n\t ]+/);
      O = Ne && Ne[0];
    }
    Me === "application/xhtml+xml" && vt === dt && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const $ = B ? B.createHTML(A) : A;
    if (vt === dt)
      try {
        x = new I().parseFromString($, Me);
      } catch {
      }
    if (!x || !x.documentElement) {
      x = ae.createDocument(vt, "template", null);
      try {
        x.documentElement.innerHTML = Vt ? R : $;
      } catch {
      }
    }
    const Te = x.body || x.documentElement;
    return A && O && Te.insertBefore(r.createTextNode(O), Te.childNodes[0] || null), vt === dt ? le.call(x, be ? "html" : "body")[0] : be ? x.documentElement : Te;
  }, mr = function(A) {
    return de.call(
      A.ownerDocument || A,
      A,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Bt = function(A) {
    return A instanceof m && (typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || !(A.attributes instanceof y) || typeof A.removeAttribute != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function");
  }, fr = function(A) {
    return typeof c == "function" && A instanceof c;
  };
  function nt(A, x, O) {
    va(A, ($) => {
      $.call(t, x, O, lt);
    });
  }
  const $t = function(A) {
    let x = null;
    if (nt(ue.beforeSanitizeElements, A, null), Bt(A))
      return ft(A), !0;
    const O = _e(A.nodeName);
    if (nt(ue.uponSanitizeElement, A, {
      tagName: O,
      allowedTags: pe
    }), A.hasChildNodes() && !fr(A.firstElementChild) && _t(/<[/\w]/g, A.innerHTML) && _t(/<[/\w]/g, A.textContent) || A.nodeType === Mn.progressingInstruction || fe && A.nodeType === Mn.comment && _t(/<[/\w]/g, A.data))
      return ft(A), !0;
    if (!pe[O] || v[O]) {
      if (!v[O] && Mt(O) && (H.tagNameCheck instanceof RegExp && _t(H.tagNameCheck, O) || H.tagNameCheck instanceof Function && H.tagNameCheck(O)))
        return !1;
      if (Ce && !rt[O]) {
        const $ = F(A) || A.parentNode, Te = D(A) || A.childNodes;
        if (Te && $) {
          const Ne = Te.length;
          for (let He = Ne - 1; He >= 0; --He) {
            const Le = w(Te[He], !0);
            Le.__removalCount = (A.__removalCount || 0) + 1, $.insertBefore(Le, N(A));
          }
        }
      }
      return ft(A), !0;
    }
    return A instanceof h && !Ir(A) || (O === "noscript" || O === "noembed" || O === "noframes") && _t(/<\/no(script|embed|frames)/i, A.innerHTML) ? (ft(A), !0) : (J && A.nodeType === Mn.text && (x = A.textContent, va([ge, Ie, Oe], ($) => {
      x = Dn(x, $, " ");
    }), A.textContent !== x && (Nn(t.removed, {
      element: A.cloneNode()
    }), A.textContent = x)), nt(ue.afterSanitizeElements, A, null), !1);
  }, br = function(A, x, O) {
    if (ke && (x === "id" || x === "name") && (O in r || O in dr))
      return !1;
    if (!(ce && !te[x] && _t(me, x)) && !(P && _t(st, x))) {
      if (!L[x] || te[x]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Mt(A) && (H.tagNameCheck instanceof RegExp && _t(H.tagNameCheck, A) || H.tagNameCheck instanceof Function && H.tagNameCheck(A)) && (H.attributeNameCheck instanceof RegExp && _t(H.attributeNameCheck, x) || H.attributeNameCheck instanceof Function && H.attributeNameCheck(x)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          x === "is" && H.allowCustomizedBuiltInElements && (H.tagNameCheck instanceof RegExp && _t(H.tagNameCheck, O) || H.tagNameCheck instanceof Function && H.tagNameCheck(O)))
        ) return !1;
      } else if (!Ht[x] && !_t(Xe, Dn(O, Pe, "")) && !((x === "src" || x === "xlink:href" || x === "href") && A !== "script" && Cp(O, "data:") === 0 && qe[A]) && !(re && !_t(Ue, Dn(O, Pe, ""))) && O)
        return !1;
    }
    return !0;
  }, Mt = function(A) {
    return A !== "annotation-xml" && Hs(A, Ge);
  }, yr = function(A) {
    nt(ue.beforeSanitizeAttributes, A, null);
    const {
      attributes: x
    } = A;
    if (!x || Bt(A))
      return;
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let $ = x.length;
    for (; $--; ) {
      const Te = x[$], {
        name: Ne,
        namespaceURI: He,
        value: Le
      } = Te, at = _e(Ne);
      let et = Ne === "value" ? Le : Tp(Le);
      if (O.attrName = at, O.attrValue = et, O.keepAttr = !0, O.forceKeepAttr = void 0, nt(ue.uponSanitizeAttribute, A, O), et = O.attrValue, gt && (at === "id" || at === "name") && (Dt(Ne, A), et = tt + et), fe && _t(/((--!?|])>)|<\/(style|title)/i, et)) {
        Dt(Ne, A);
        continue;
      }
      if (O.forceKeepAttr || (Dt(Ne, A), !O.keepAttr))
        continue;
      if (!oe && _t(/\/>/i, et)) {
        Dt(Ne, A);
        continue;
      }
      J && va([ge, Ie, Oe], (vr) => {
        et = Dn(et, vr, " ");
      });
      const ct = _e(A.nodeName);
      if (br(ct, at, et)) {
        if (B && typeof U == "object" && typeof U.getAttributeType == "function" && !He)
          switch (U.getAttributeType(ct, at)) {
            case "TrustedHTML": {
              et = B.createHTML(et);
              break;
            }
            case "TrustedScriptURL": {
              et = B.createScriptURL(et);
              break;
            }
          }
        try {
          He ? A.setAttributeNS(He, Ne, et) : A.setAttribute(Ne, et), Bt(A) ? ft(A) : Ws(t.removed);
        } catch {
        }
      }
    }
    nt(ue.afterSanitizeAttributes, A, null);
  }, wr = function A(x) {
    let O = null;
    const $ = mr(x);
    for (nt(ue.beforeSanitizeShadowDOM, x, null); O = $.nextNode(); )
      nt(ue.uponSanitizeShadowNode, O, null), $t(O), yr(O), O.content instanceof o && A(O.content);
    nt(ue.afterSanitizeShadowDOM, x, null);
  };
  return t.sanitize = function(A) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, O = null, $ = null, Te = null, Ne = null;
    if (Vt = !A, Vt && (A = "<!-->"), typeof A != "string" && !fr(A))
      if (typeof A.toString == "function") {
        if (A = A.toString(), typeof A != "string")
          throw Bn("dirty is not a string, aborting");
      } else
        throw Bn("toString is not a function");
    if (!t.isSupported)
      return A;
    if (ie || Qt(x), t.removed = [], typeof A == "string" && (X = !1), X) {
      if (A.nodeName) {
        const at = _e(A.nodeName);
        if (!pe[at] || v[at])
          throw Bn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (A instanceof c)
      O = gr("<!---->"), $ = O.ownerDocument.importNode(A, !0), $.nodeType === Mn.element && $.nodeName === "BODY" || $.nodeName === "HTML" ? O = $ : O.appendChild($);
    else {
      if (!se && !J && !be && // eslint-disable-next-line unicorn/prefer-includes
      A.indexOf("<") === -1)
        return B && Je ? B.createHTML(A) : A;
      if (O = gr(A), !O)
        return se ? null : Je ? R : "";
    }
    O && Ee && ft(O.firstChild);
    const He = mr(X ? A : O);
    for (; Te = He.nextNode(); )
      $t(Te), yr(Te), Te.content instanceof o && wr(Te.content);
    if (X)
      return A;
    if (se) {
      if (ve)
        for (Ne = Z.call(O.ownerDocument); O.firstChild; )
          Ne.appendChild(O.firstChild);
      else
        Ne = O;
      return (L.shadowroot || L.shadowrootmode) && (Ne = we.call(n, Ne, !0)), Ne;
    }
    let Le = be ? O.outerHTML : O.innerHTML;
    return be && pe["!doctype"] && O.ownerDocument && O.ownerDocument.doctype && O.ownerDocument.doctype.name && _t(Ec, O.ownerDocument.doctype.name) && (Le = "<!DOCTYPE " + O.ownerDocument.doctype.name + `>
` + Le), J && va([ge, Ie, Oe], (at) => {
      Le = Dn(Le, at, " ");
    }), B && Je ? B.createHTML(Le) : Le;
  }, t.setConfig = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Qt(A), ie = !0;
  }, t.clearConfig = function() {
    lt = null, ie = !1;
  }, t.isValidAttribute = function(A, x, O) {
    lt || Qt({});
    const $ = _e(A), Te = _e(x);
    return br($, Te, O);
  }, t.addHook = function(A, x) {
    typeof x == "function" && Nn(ue[A], x);
  }, t.removeHook = function(A, x) {
    if (x !== void 0) {
      const O = Ep(ue[A], x);
      return O === -1 ? void 0 : kp(ue[A], O, 1)[0];
    }
    return Ws(ue[A]);
  }, t.removeHooks = function(A) {
    ue[A] = [];
  }, t.removeAllHooks = function() {
    ue = Js();
  }, t;
}
var Wp = kc();
const tn = (e) => ({ __html: Wp.sanitize(e) }), Xs = (e, t, r) => {
  let n = e;
  const a = [];
  for (; n < t; )
    n > 0 && n <= r && a.push(n), n += 1;
  return a;
};
u.shape({
  event: u.string,
  action: u.string,
  name: u.string,
  region: u.string,
  section: u.string,
  component: u.string,
  type: u.string,
  text: u.string
});
const Cc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: n = "",
  section: a = "",
  text: o = "",
  region: l = "",
  component: c = ""
}) => {
  const { dataLayer: h } = window, d = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: n.toLowerCase(),
    region: l.toLowerCase(),
    section: a.toLowerCase(),
    text: o.toLowerCase(),
    component: c.toLowerCase()
  };
  h && h.push(d);
};
var Wr = {}, Ks;
function Hp() {
  if (Ks) return Wr;
  Ks = 1;
  var e = ht;
  function t(i) {
    for (var p = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, b = 1; b < arguments.length; b++) p += "&args[]=" + encodeURIComponent(arguments[b]);
    return "Minified React error #" + i + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, o = {};
  function l(i) {
    return r.call(o, i) ? !0 : r.call(a, i) ? !1 : n.test(i) ? o[i] = !0 : (a[i] = !0, !1);
  }
  function c(i, p, b, k, W, j, V) {
    this.acceptsBooleans = p === 2 || p === 3 || p === 4, this.attributeName = k, this.attributeNamespace = W, this.mustUseProperty = b, this.propertyName = i, this.type = p, this.sanitizeURL = j, this.removeEmptyString = V;
  }
  var h = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    h[i] = new c(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var p = i[0];
    h[p] = new c(p, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    h[i] = new c(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    h[i] = new c(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    h[i] = new c(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    h[i] = new c(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    h[i] = new c(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    h[i] = new c(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    h[i] = new c(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var d = /[\-:]([a-z])/g;
  function y(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var p = i.replace(
      d,
      y
    );
    h[p] = new c(p, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var p = i.replace(d, y);
    h[p] = new c(p, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var p = i.replace(d, y);
    h[p] = new c(p, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    h[i] = new c(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), h.xlinkHref = new c("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    h[i] = new c(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var m = {
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
  }, I = ["Webkit", "ms", "Moz", "O"];
  Object.keys(m).forEach(function(i) {
    I.forEach(function(p) {
      p = p + i.charAt(0).toUpperCase() + i.substring(1), m[p] = m[i];
    });
  });
  var U = /["'&<>]/;
  function C(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var p = U.exec(i);
    if (p) {
      var b = "", k, W = 0;
      for (k = p.index; k < i.length; k++) {
        switch (i.charCodeAt(k)) {
          case 34:
            p = "&quot;";
            break;
          case 38:
            p = "&amp;";
            break;
          case 39:
            p = "&#x27;";
            break;
          case 60:
            p = "&lt;";
            break;
          case 62:
            p = "&gt;";
            break;
          default:
            continue;
        }
        W !== k && (b += i.substring(W, k)), W = k + 1, b += p;
      }
      i = W !== k ? b + i.substring(W, k) : b;
    }
    return i;
  }
  var w = /([A-Z])/g, E = /^ms-/, N = Array.isArray;
  function D(i, p) {
    return { insertionMode: i, selectedValue: p };
  }
  function F(i, p, b) {
    switch (p) {
      case "select":
        return D(1, b.value != null ? b.value : b.defaultValue);
      case "svg":
        return D(2, null);
      case "math":
        return D(3, null);
      case "foreignObject":
        return D(1, null);
      case "table":
        return D(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return D(5, null);
      case "colgroup":
        return D(7, null);
      case "tr":
        return D(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? D(1, null) : i;
  }
  var B = /* @__PURE__ */ new Map();
  function R(i, p, b) {
    if (typeof b != "object") throw Error(t(62));
    p = !0;
    for (var k in b) if (r.call(b, k)) {
      var W = b[k];
      if (W != null && typeof W != "boolean" && W !== "") {
        if (k.indexOf("--") === 0) {
          var j = C(k);
          W = C(("" + W).trim());
        } else {
          j = k;
          var V = B.get(j);
          V !== void 0 || (V = C(j.replace(w, "-$1").toLowerCase().replace(E, "-ms-")), B.set(j, V)), j = V, W = typeof W == "number" ? W === 0 || r.call(m, k) ? "" + W : W + "px" : C(("" + W).trim());
        }
        p ? (p = !1, i.push(' style="', j, ":", W)) : i.push(";", j, ":", W);
      }
    }
    p || i.push('"');
  }
  function ae(i, p, b, k) {
    switch (b) {
      case "style":
        R(i, p, k);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
      if (p = h.hasOwnProperty(b) ? h[b] : null, p !== null) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!p.acceptsBooleans) return;
        }
        switch (b = p.attributeName, p.type) {
          case 3:
            k && i.push(" ", b, '=""');
            break;
          case 4:
            k === !0 ? i.push(" ", b, '=""') : k !== !1 && i.push(" ", b, '="', C(k), '"');
            break;
          case 5:
            isNaN(k) || i.push(" ", b, '="', C(k), '"');
            break;
          case 6:
            !isNaN(k) && 1 <= k && i.push(" ", b, '="', C(k), '"');
            break;
          default:
            p.sanitizeURL && (k = "" + k), i.push(" ", b, '="', C(k), '"');
        }
      } else if (l(b)) {
        switch (typeof k) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (p = b.toLowerCase().slice(0, 5), p !== "data-" && p !== "aria-") return;
        }
        i.push(" ", b, '="', C(k), '"');
      }
    }
  }
  function de(i, p, b) {
    if (p != null) {
      if (b != null) throw Error(t(60));
      if (typeof p != "object" || !("__html" in p)) throw Error(t(61));
      p = p.__html, p != null && i.push("" + p);
    }
  }
  function Z(i) {
    var p = "";
    return e.Children.forEach(i, function(b) {
      b != null && (p += b);
    }), p;
  }
  function le(i, p, b, k) {
    i.push(ge(b));
    var W = b = null, j;
    for (j in p) if (r.call(p, j)) {
      var V = p[j];
      if (V != null) switch (j) {
        case "children":
          b = V;
          break;
        case "dangerouslySetInnerHTML":
          W = V;
          break;
        default:
          ae(i, k, j, V);
      }
    }
    return i.push(">"), de(i, W, b), typeof b == "string" ? (i.push(C(b)), null) : b;
  }
  var we = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function ge(i) {
    var p = ue.get(i);
    if (p === void 0) {
      if (!we.test(i)) throw Error(t(65, i));
      p = "<" + i, ue.set(i, p);
    }
    return p;
  }
  function Ie(i, p, b, k, W) {
    switch (p) {
      case "select":
        i.push(ge("select"));
        var j = null, V = null;
        for (De in b) if (r.call(b, De)) {
          var ne = b[De];
          if (ne != null) switch (De) {
            case "children":
              j = ne;
              break;
            case "dangerouslySetInnerHTML":
              V = ne;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(i, k, De, ne);
          }
        }
        return i.push(">"), de(i, V, j), j;
      case "option":
        V = W.selectedValue, i.push(ge("option"));
        var Se = ne = null, Re = null, De = null;
        for (j in b) if (r.call(b, j)) {
          var ut = b[j];
          if (ut != null) switch (j) {
            case "children":
              ne = ut;
              break;
            case "selected":
              Re = ut;
              break;
            case "dangerouslySetInnerHTML":
              De = ut;
              break;
            case "value":
              Se = ut;
            default:
              ae(i, k, j, ut);
          }
        }
        if (V != null) if (b = Se !== null ? "" + Se : Z(ne), N(V)) {
          for (k = 0; k < V.length; k++)
            if ("" + V[k] === b) {
              i.push(' selected=""');
              break;
            }
        } else "" + V === b && i.push(' selected=""');
        else Re && i.push(' selected=""');
        return i.push(">"), de(i, De, ne), ne;
      case "textarea":
        i.push(ge("textarea")), De = V = j = null;
        for (ne in b) if (r.call(b, ne) && (Se = b[ne], Se != null)) switch (ne) {
          case "children":
            De = Se;
            break;
          case "value":
            j = Se;
            break;
          case "defaultValue":
            V = Se;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              i,
              k,
              ne,
              Se
            );
        }
        if (j === null && V !== null && (j = V), i.push(">"), De != null) {
          if (j != null) throw Error(t(92));
          if (N(De) && 1 < De.length) throw Error(t(93));
          j = "" + De;
        }
        return typeof j == "string" && j[0] === `
` && i.push(`
`), j !== null && i.push(C("" + j)), null;
      case "input":
        i.push(ge("input")), Se = De = ne = j = null;
        for (V in b) if (r.call(b, V) && (Re = b[V], Re != null)) switch (V) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            Se = Re;
            break;
          case "defaultValue":
            ne = Re;
            break;
          case "checked":
            De = Re;
            break;
          case "value":
            j = Re;
            break;
          default:
            ae(i, k, V, Re);
        }
        return De !== null ? ae(i, k, "checked", De) : Se !== null && ae(i, k, "checked", Se), j !== null ? ae(i, k, "value", j) : ne !== null && ae(i, k, "value", ne), i.push("/>"), null;
      case "menuitem":
        i.push(ge("menuitem"));
        for (var er in b) if (r.call(b, er) && (j = b[er], j != null)) switch (er) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(i, k, er, j);
        }
        return i.push(">"), null;
      case "title":
        i.push(ge("title")), j = null;
        for (ut in b) if (r.call(b, ut) && (V = b[ut], V != null)) switch (ut) {
          case "children":
            j = V;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(i, k, ut, V);
        }
        return i.push(">"), j;
      case "listing":
      case "pre":
        i.push(ge(p)), V = j = null;
        for (Se in b) if (r.call(b, Se) && (ne = b[Se], ne != null)) switch (Se) {
          case "children":
            j = ne;
            break;
          case "dangerouslySetInnerHTML":
            V = ne;
            break;
          default:
            ae(i, k, Se, ne);
        }
        if (i.push(">"), V != null) {
          if (j != null) throw Error(t(60));
          if (typeof V != "object" || !("__html" in V)) throw Error(t(61));
          b = V.__html, b != null && (typeof b == "string" && 0 < b.length && b[0] === `
` ? i.push(`
`, b) : i.push("" + b));
        }
        return typeof j == "string" && j[0] === `
` && i.push(`
`), j;
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
        i.push(ge(p));
        for (var tr in b) if (r.call(b, tr) && (j = b[tr], j != null)) switch (tr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, p));
          default:
            ae(i, k, tr, j);
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
        return le(
          i,
          b,
          p,
          k
        );
      case "html":
        return W.insertionMode === 0 && i.push("<!DOCTYPE html>"), le(i, b, p, k);
      default:
        if (p.indexOf("-") === -1 && typeof b.is != "string") return le(i, b, p, k);
        i.push(ge(p)), V = j = null;
        for (Re in b) if (r.call(b, Re) && (ne = b[Re], ne != null)) switch (Re) {
          case "children":
            j = ne;
            break;
          case "dangerouslySetInnerHTML":
            V = ne;
            break;
          case "style":
            R(i, k, ne);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            l(Re) && typeof ne != "function" && typeof ne != "symbol" && i.push(" ", Re, '="', C(ne), '"');
        }
        return i.push(">"), de(i, V, j), j;
    }
  }
  function Oe(i, p, b) {
    if (i.push('<!--$?--><template id="'), b === null) throw Error(t(395));
    return i.push(b), i.push('"></template>');
  }
  function me(i, p, b, k) {
    switch (b.insertionMode) {
      case 0:
      case 1:
        return i.push('<div hidden id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 2:
        return i.push('<svg aria-hidden="true" style="display:none" id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 3:
        return i.push('<math aria-hidden="true" style="display:none" id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 4:
        return i.push('<table hidden id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 5:
        return i.push('<table hidden><tbody id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 6:
        return i.push('<table hidden><tr id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      case 7:
        return i.push('<table hidden><colgroup id="'), i.push(p.segmentPrefix), p = k.toString(16), i.push(p), i.push('">');
      default:
        throw Error(t(397));
    }
  }
  function st(i, p) {
    switch (p.insertionMode) {
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
  var Ue = /[<\u2028\u2029]/g;
  function Pe(i) {
    return JSON.stringify(i).replace(Ue, function(p) {
      switch (p) {
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
  function Ge(i, p) {
    return p = p === void 0 ? "" : p, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: p + "P:", segmentPrefix: p + "S:", boundaryPrefix: p + "B:", idPrefix: p, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: i };
  }
  function Xe(i, p, b, k) {
    return b.generateStaticMarkup ? (i.push(C(p)), !1) : (p === "" ? i = k : (k && i.push("<!-- -->"), i.push(C(p)), i = !0), i);
  }
  var pe = Object.assign, q = Symbol.for("react.element"), L = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), P = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), be = Symbol.for("react.scope"), ie = Symbol.for("react.debug_trace_mode"), Ee = Symbol.for("react.legacy_hidden"), se = Symbol.for("react.default_value"), ve = Symbol.iterator;
  function Je(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case G:
        return "Fragment";
      case L:
        return "Portal";
      case v:
        return "Profiler";
      case H:
        return "StrictMode";
      case re:
        return "Suspense";
      case oe:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case P:
        return (i.displayName || "Context") + ".Consumer";
      case te:
        return (i._context.displayName || "Context") + ".Provider";
      case ce:
        var p = i.render;
        return i = i.displayName, i || (i = p.displayName || p.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case J:
        return p = i.displayName || null, p !== null ? p : Je(i.type) || "Memo";
      case fe:
        p = i._payload, i = i._init;
        try {
          return Je(i(p));
        } catch {
        }
    }
    return null;
  }
  var ke = {};
  function gt(i, p) {
    if (i = i.contextTypes, !i) return ke;
    var b = {}, k;
    for (k in i) b[k] = p[k];
    return b;
  }
  var tt = null;
  function Ce(i, p) {
    if (i !== p) {
      i.context._currentValue2 = i.parentValue, i = i.parent;
      var b = p.parent;
      if (i === null) {
        if (b !== null) throw Error(t(401));
      } else {
        if (b === null) throw Error(t(401));
        Ce(i, b);
      }
      p.context._currentValue2 = p.value;
    }
  }
  function X(i) {
    i.context._currentValue2 = i.parentValue, i = i.parent, i !== null && X(i);
  }
  function he(i) {
    var p = i.parent;
    p !== null && he(p), i.context._currentValue2 = i.value;
  }
  function rt(i, p) {
    if (i.context._currentValue2 = i.parentValue, i = i.parent, i === null) throw Error(t(402));
    i.depth === p.depth ? Ce(i, p) : rt(i, p);
  }
  function yt(i, p) {
    var b = p.parent;
    if (b === null) throw Error(t(402));
    i.depth === b.depth ? Ce(i, b) : yt(i, b), p.context._currentValue2 = p.value;
  }
  function qe(i) {
    var p = tt;
    p !== i && (p === null ? he(i) : i === null ? X(p) : p.depth === i.depth ? Ce(p, i) : p.depth > i.depth ? rt(p, i) : yt(p, i), tt = i);
  }
  var lr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, p) {
    i = i._reactInternals, i.queue !== null && i.queue.push(p);
  }, enqueueReplaceState: function(i, p) {
    i = i._reactInternals, i.replace = !0, i.queue = [p];
  }, enqueueForceUpdate: function() {
  } };
  function Ht(i, p, b, k) {
    var W = i.state !== void 0 ? i.state : null;
    i.updater = lr, i.props = b, i.state = W;
    var j = { queue: [], replace: !1 };
    i._reactInternals = j;
    var V = p.contextType;
    if (i.context = typeof V == "object" && V !== null ? V._currentValue2 : k, V = p.getDerivedStateFromProps, typeof V == "function" && (V = V(b, W), W = V == null ? W : pe({}, W, V), i.state = W), typeof p.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (p = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), p !== i.state && lr.enqueueReplaceState(i, i.state, null), j.queue !== null && 0 < j.queue.length) if (p = j.queue, V = j.replace, j.queue = null, j.replace = !1, V && p.length === 1) i.state = p[0];
    else {
      for (j = V ? p[0] : i.state, W = !0, V = V ? 1 : 0; V < p.length; V++) {
        var ne = p[V];
        ne = typeof ne == "function" ? ne.call(i, j, b, k) : ne, ne != null && (W ? (W = !1, j = pe({}, j, ne)) : pe(j, ne));
      }
      i.state = j;
    }
    else j.queue = null;
  }
  var hr = { id: 1, overflow: "" };
  function Ct(i, p, b) {
    var k = i.id;
    i = i.overflow;
    var W = 32 - At(k) - 1;
    k &= ~(1 << W), b += 1;
    var j = 32 - At(p) + W;
    if (30 < j) {
      var V = W - W % 5;
      return j = (k & (1 << V) - 1).toString(32), k >>= V, W -= V, { id: 1 << 32 - At(p) + W | b << W | k, overflow: j + i };
    }
    return { id: 1 << j | b << W | k, overflow: i };
  }
  var At = Math.clz32 ? Math.clz32 : Vt, dt = Math.log, vt = Math.LN2;
  function Vt(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (dt(i) / vt | 0) | 0;
  }
  function Yt(i, p) {
    return i === p && (i !== 0 || 1 / i === 1 / p) || i !== i && p !== p;
  }
  var Br = typeof Object.is == "function" ? Object.is : Yt, pt = null, Tt = null, cr = null, Me = null, Jt = !1, ur = !1, _e = 0, lt = null, dr = 0;
  function Rt() {
    if (pt === null) throw Error(t(321));
    return pt;
  }
  function Qt() {
    if (0 < dr) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Xt() {
    return Me === null ? cr === null ? (Jt = !1, cr = Me = Qt()) : (Jt = !0, Me = cr) : Me.next === null ? (Jt = !1, Me = Me.next = Qt()) : (Jt = !0, Me = Me.next), Me;
  }
  function Kt() {
    Tt = pt = null, ur = !1, cr = null, dr = 0, Me = lt = null;
  }
  function Ir(i, p) {
    return typeof p == "function" ? p(i) : p;
  }
  function ft(i, p, b) {
    if (pt = Rt(), Me = Xt(), Jt) {
      var k = Me.queue;
      if (p = k.dispatch, lt !== null && (b = lt.get(k), b !== void 0)) {
        lt.delete(k), k = Me.memoizedState;
        do
          k = i(k, b.action), b = b.next;
        while (b !== null);
        return Me.memoizedState = k, [k, p];
      }
      return [Me.memoizedState, p];
    }
    return i = i === Ir ? typeof p == "function" ? p() : p : b !== void 0 ? b(p) : p, Me.memoizedState = i, i = Me.queue = { last: null, dispatch: null }, i = i.dispatch = gr.bind(null, pt, i), [Me.memoizedState, i];
  }
  function Dt(i, p) {
    if (pt = Rt(), Me = Xt(), p = p === void 0 ? null : p, Me !== null) {
      var b = Me.memoizedState;
      if (b !== null && p !== null) {
        var k = b[1];
        e: if (k === null) k = !1;
        else {
          for (var W = 0; W < k.length && W < p.length; W++) if (!Br(p[W], k[W])) {
            k = !1;
            break e;
          }
          k = !0;
        }
        if (k) return b[0];
      }
    }
    return i = i(), Me.memoizedState = [i, p], i;
  }
  function gr(i, p, b) {
    if (25 <= dr) throw Error(t(301));
    if (i === pt) if (ur = !0, i = { action: b, next: null }, lt === null && (lt = /* @__PURE__ */ new Map()), b = lt.get(p), b === void 0) lt.set(p, i);
    else {
      for (p = b; p.next !== null; ) p = p.next;
      p.next = i;
    }
  }
  function mr() {
    throw Error(t(394));
  }
  function Bt() {
  }
  var fr = { readContext: function(i) {
    return i._currentValue2;
  }, useContext: function(i) {
    return Rt(), i._currentValue2;
  }, useMemo: Dt, useReducer: ft, useRef: function(i) {
    pt = Rt(), Me = Xt();
    var p = Me.memoizedState;
    return p === null ? (i = { current: i }, Me.memoizedState = i) : p;
  }, useState: function(i) {
    return ft(Ir, i);
  }, useInsertionEffect: Bt, useLayoutEffect: function() {
  }, useCallback: function(i, p) {
    return Dt(function() {
      return i;
    }, p);
  }, useImperativeHandle: Bt, useEffect: Bt, useDebugValue: Bt, useDeferredValue: function(i) {
    return Rt(), i;
  }, useTransition: function() {
    return Rt(), [
      !1,
      mr
    ];
  }, useId: function() {
    var i = Tt.treeContext, p = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - At(i) - 1)).toString(32) + p;
    var b = nt;
    if (b === null) throw Error(t(404));
    return p = _e++, i = ":" + b.idPrefix + "R" + i, 0 < p && (i += "H" + p.toString(32)), i + ":";
  }, useMutableSource: function(i, p) {
    return Rt(), p(i._source);
  }, useSyncExternalStore: function(i, p, b) {
    if (b === void 0) throw Error(t(407));
    return b();
  } }, nt = null, $t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function br(i) {
    return console.error(i), null;
  }
  function Mt() {
  }
  function yr(i, p, b, k, W, j, V, ne, Se) {
    var Re = [], De = /* @__PURE__ */ new Set();
    return p = { destination: null, responseState: p, progressiveChunkSize: k, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: De, pingedTasks: Re, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: W === void 0 ? br : W, onAllReady: Mt, onShellReady: V === void 0 ? Mt : V, onShellError: Mt, onFatalError: Mt }, b = A(p, 0, null, b, !1, !1), b.parentFlushed = !0, i = wr(p, i, null, b, De, ke, null, hr), Re.push(i), p;
  }
  function wr(i, p, b, k, W, j, V, ne) {
    i.allPendingTasks++, b === null ? i.pendingRootTasks++ : b.pendingTasks++;
    var Se = { node: p, ping: function() {
      var Re = i.pingedTasks;
      Re.push(Se), Re.length === 1 && ea(i);
    }, blockedBoundary: b, blockedSegment: k, abortSet: W, legacyContext: j, context: V, treeContext: ne };
    return W.add(Se), Se;
  }
  function A(i, p, b, k, W, j) {
    return { status: 0, id: -1, index: p, parentFlushed: !1, chunks: [], children: [], formatContext: k, boundary: b, lastPushedText: W, textEmbedded: j };
  }
  function x(i, p) {
    if (i = i.onError(p), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function O(i, p) {
    var b = i.onShellError;
    b(p), b = i.onFatalError, b(p), i.destination !== null ? (i.status = 2, i.destination.destroy(p)) : (i.status = 1, i.fatalError = p);
  }
  function $(i, p, b, k, W) {
    for (pt = {}, Tt = p, _e = 0, i = b(k, W); ur; ) ur = !1, _e = 0, dr += 1, Me = null, i = b(k, W);
    return Kt(), i;
  }
  function Te(i, p, b, k) {
    var W = b.render(), j = k.childContextTypes;
    if (j != null) {
      var V = p.legacyContext;
      if (typeof b.getChildContext != "function") k = V;
      else {
        b = b.getChildContext();
        for (var ne in b) if (!(ne in j)) throw Error(t(108, Je(k) || "Unknown", ne));
        k = pe({}, V, b);
      }
      p.legacyContext = k, Le(i, p, W), p.legacyContext = V;
    } else Le(i, p, W);
  }
  function Ne(i, p) {
    if (i && i.defaultProps) {
      p = pe({}, p), i = i.defaultProps;
      for (var b in i) p[b] === void 0 && (p[b] = i[b]);
      return p;
    }
    return p;
  }
  function He(i, p, b, k, W) {
    if (typeof b == "function") if (b.prototype && b.prototype.isReactComponent) {
      W = gt(b, p.legacyContext);
      var j = b.contextType;
      j = new b(k, typeof j == "object" && j !== null ? j._currentValue2 : W), Ht(j, b, k, W), Te(i, p, j, b);
    } else {
      j = gt(b, p.legacyContext), W = $(i, p, b, k, j);
      var V = _e !== 0;
      if (typeof W == "object" && W !== null && typeof W.render == "function" && W.$$typeof === void 0) Ht(W, b, k, j), Te(i, p, W, b);
      else if (V) {
        k = p.treeContext, p.treeContext = Ct(k, 1, 0);
        try {
          Le(i, p, W);
        } finally {
          p.treeContext = k;
        }
      } else Le(i, p, W);
    }
    else if (typeof b == "string") {
      switch (W = p.blockedSegment, j = Ie(W.chunks, b, k, i.responseState, W.formatContext), W.lastPushedText = !1, V = W.formatContext, W.formatContext = F(V, b, k), et(i, p, j), W.formatContext = V, b) {
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
          W.chunks.push("</", b, ">");
      }
      W.lastPushedText = !1;
    } else {
      switch (b) {
        case Ee:
        case ie:
        case H:
        case v:
        case G:
          Le(i, p, k.children);
          return;
        case oe:
          Le(i, p, k.children);
          return;
        case be:
          throw Error(t(343));
        case re:
          e: {
            b = p.blockedBoundary, W = p.blockedSegment, j = k.fallback, k = k.children, V = /* @__PURE__ */ new Set();
            var ne = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: V, errorDigest: null }, Se = A(i, W.chunks.length, ne, W.formatContext, !1, !1);
            W.children.push(Se), W.lastPushedText = !1;
            var Re = A(i, 0, null, W.formatContext, !1, !1);
            Re.parentFlushed = !0, p.blockedBoundary = ne, p.blockedSegment = Re;
            try {
              if (et(
                i,
                p,
                k
              ), i.responseState.generateStaticMarkup || Re.lastPushedText && Re.textEmbedded && Re.chunks.push("<!-- -->"), Re.status = 1, Zt(ne, Re), ne.pendingTasks === 0) break e;
            } catch (De) {
              Re.status = 4, ne.forceClientRender = !0, ne.errorDigest = x(i, De);
            } finally {
              p.blockedBoundary = b, p.blockedSegment = W;
            }
            p = wr(i, j, b, Se, V, p.legacyContext, p.context, p.treeContext), i.pingedTasks.push(p);
          }
          return;
      }
      if (typeof b == "object" && b !== null) switch (b.$$typeof) {
        case ce:
          if (k = $(i, p, b.render, k, W), _e !== 0) {
            b = p.treeContext, p.treeContext = Ct(b, 1, 0);
            try {
              Le(i, p, k);
            } finally {
              p.treeContext = b;
            }
          } else Le(i, p, k);
          return;
        case J:
          b = b.type, k = Ne(b, k), He(i, p, b, k, W);
          return;
        case te:
          if (W = k.children, b = b._context, k = k.value, j = b._currentValue2, b._currentValue2 = k, V = tt, tt = k = { parent: V, depth: V === null ? 0 : V.depth + 1, context: b, parentValue: j, value: k }, p.context = k, Le(i, p, W), i = tt, i === null) throw Error(t(403));
          k = i.parentValue, i.context._currentValue2 = k === se ? i.context._defaultValue : k, i = tt = i.parent, p.context = i;
          return;
        case P:
          k = k.children, k = k(b._currentValue2), Le(i, p, k);
          return;
        case fe:
          W = b._init, b = W(b._payload), k = Ne(b, k), He(
            i,
            p,
            b,
            k,
            void 0
          );
          return;
      }
      throw Error(t(130, b == null ? b : typeof b, ""));
    }
  }
  function Le(i, p, b) {
    if (p.node = b, typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case q:
          He(i, p, b.type, b.props, b.ref);
          return;
        case L:
          throw Error(t(257));
        case fe:
          var k = b._init;
          b = k(b._payload), Le(i, p, b);
          return;
      }
      if (N(b)) {
        at(i, p, b);
        return;
      }
      if (b === null || typeof b != "object" ? k = null : (k = ve && b[ve] || b["@@iterator"], k = typeof k == "function" ? k : null), k && (k = k.call(b))) {
        if (b = k.next(), !b.done) {
          var W = [];
          do
            W.push(b.value), b = k.next();
          while (!b.done);
          at(i, p, W);
        }
        return;
      }
      throw i = Object.prototype.toString.call(b), Error(t(31, i === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : i));
    }
    typeof b == "string" ? (k = p.blockedSegment, k.lastPushedText = Xe(p.blockedSegment.chunks, b, i.responseState, k.lastPushedText)) : typeof b == "number" && (k = p.blockedSegment, k.lastPushedText = Xe(p.blockedSegment.chunks, "" + b, i.responseState, k.lastPushedText));
  }
  function at(i, p, b) {
    for (var k = b.length, W = 0; W < k; W++) {
      var j = p.treeContext;
      p.treeContext = Ct(j, k, W);
      try {
        et(i, p, b[W]);
      } finally {
        p.treeContext = j;
      }
    }
  }
  function et(i, p, b) {
    var k = p.blockedSegment.formatContext, W = p.legacyContext, j = p.context;
    try {
      return Le(i, p, b);
    } catch (Se) {
      if (Kt(), typeof Se == "object" && Se !== null && typeof Se.then == "function") {
        b = Se;
        var V = p.blockedSegment, ne = A(i, V.chunks.length, null, V.formatContext, V.lastPushedText, !0);
        V.children.push(ne), V.lastPushedText = !1, i = wr(i, p.node, p.blockedBoundary, ne, p.abortSet, p.legacyContext, p.context, p.treeContext).ping, b.then(i, i), p.blockedSegment.formatContext = k, p.legacyContext = W, p.context = j, qe(j);
      } else throw p.blockedSegment.formatContext = k, p.legacyContext = W, p.context = j, qe(j), Se;
    }
  }
  function ct(i) {
    var p = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, _r(this, p, i);
  }
  function vr(i, p, b) {
    var k = i.blockedBoundary;
    i.blockedSegment.status = 3, k === null ? (p.allPendingTasks--, p.status !== 2 && (p.status = 2, p.destination !== null && p.destination.push(null))) : (k.pendingTasks--, k.forceClientRender || (k.forceClientRender = !0, i = b === void 0 ? Error(t(432)) : b, k.errorDigest = p.onError(i), k.parentFlushed && p.clientRenderedBoundaries.push(k)), k.fallbackAbortableTasks.forEach(function(W) {
      return vr(W, p, b);
    }), k.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0 && (k = p.onAllReady, k()));
  }
  function Zt(i, p) {
    if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
      var b = p.children[0];
      b.id = p.id, b.parentFlushed = !0, b.status === 1 && Zt(i, b);
    } else i.completedSegments.push(p);
  }
  function _r(i, p, b) {
    if (p === null) {
      if (b.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(t(389));
        i.completedRootSegment = b;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Mt, p = i.onShellReady, p());
    } else p.pendingTasks--, p.forceClientRender || (p.pendingTasks === 0 ? (b.parentFlushed && b.status === 1 && Zt(p, b), p.parentFlushed && i.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(ct, i), p.fallbackAbortableTasks.clear()) : b.parentFlushed && b.status === 1 && (Zt(p, b), p.completedSegments.length === 1 && p.parentFlushed && i.partialBoundaries.push(p)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function ea(i) {
    if (i.status !== 2) {
      var p = tt, b = $t.current;
      $t.current = fr;
      var k = nt;
      nt = i.responseState;
      try {
        var W = i.pingedTasks, j;
        for (j = 0; j < W.length; j++) {
          var V = W[j], ne = i, Se = V.blockedSegment;
          if (Se.status === 0) {
            qe(V.context);
            try {
              Le(ne, V, V.node), ne.responseState.generateStaticMarkup || Se.lastPushedText && Se.textEmbedded && Se.chunks.push("<!-- -->"), V.abortSet.delete(V), Se.status = 1, _r(ne, V.blockedBoundary, Se);
            } catch (Ft) {
              if (Kt(), typeof Ft == "object" && Ft !== null && typeof Ft.then == "function") {
                var Re = V.ping;
                Ft.then(Re, Re);
              } else {
                V.abortSet.delete(V), Se.status = 4;
                var De = V.blockedBoundary, ut = Ft, er = x(ne, ut);
                if (De === null ? O(ne, ut) : (De.pendingTasks--, De.forceClientRender || (De.forceClientRender = !0, De.errorDigest = er, De.parentFlushed && ne.clientRenderedBoundaries.push(De))), ne.allPendingTasks--, ne.allPendingTasks === 0) {
                  var tr = ne.onAllReady;
                  tr();
                }
              }
            } finally {
            }
          }
        }
        W.splice(0, j), i.destination !== null && Zr(i, i.destination);
      } catch (Ft) {
        x(i, Ft), O(i, Ft);
      } finally {
        nt = k, $t.current = b, b === fr && qe(p);
      }
    }
  }
  function jr(i, p, b) {
    switch (b.parentFlushed = !0, b.status) {
      case 0:
        var k = b.id = i.nextSegmentId++;
        return b.lastPushedText = !1, b.textEmbedded = !1, i = i.responseState, p.push('<template id="'), p.push(i.placeholderPrefix), i = k.toString(16), p.push(i), p.push('"></template>');
      case 1:
        b.status = 2;
        var W = !0;
        k = b.chunks;
        var j = 0;
        b = b.children;
        for (var V = 0; V < b.length; V++) {
          for (W = b[V]; j < W.index; j++) p.push(k[j]);
          W = Mr(i, p, W);
        }
        for (; j < k.length - 1; j++) p.push(k[j]);
        return j < k.length && (W = p.push(k[j])), W;
      default:
        throw Error(t(390));
    }
  }
  function Mr(i, p, b) {
    var k = b.boundary;
    if (k === null) return jr(i, p, b);
    if (k.parentFlushed = !0, k.forceClientRender) return i.responseState.generateStaticMarkup || (k = k.errorDigest, p.push("<!--$!-->"), p.push("<template"), k && (p.push(' data-dgst="'), k = C(k), p.push(k), p.push('"')), p.push("></template>")), jr(i, p, b), i = i.responseState.generateStaticMarkup ? !0 : p.push("<!--/$-->"), i;
    if (0 < k.pendingTasks) {
      k.rootSegmentID = i.nextSegmentId++, 0 < k.completedSegments.length && i.partialBoundaries.push(k);
      var W = i.responseState, j = W.nextSuspenseID++;
      return W = W.boundaryPrefix + j.toString(16), k = k.id = W, Oe(p, i.responseState, k), jr(i, p, b), p.push("<!--/$-->");
    }
    if (k.byteSize > i.progressiveChunkSize) return k.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(k), Oe(p, i.responseState, k.id), jr(i, p, b), p.push("<!--/$-->");
    if (i.responseState.generateStaticMarkup || p.push("<!--$-->"), b = k.completedSegments, b.length !== 1) throw Error(t(391));
    return Mr(i, p, b[0]), i = i.responseState.generateStaticMarkup ? !0 : p.push("<!--/$-->"), i;
  }
  function yn(i, p, b) {
    return me(p, i.responseState, b.formatContext, b.id), Mr(i, p, b), st(p, b.formatContext);
  }
  function wn(i, p, b) {
    for (var k = b.completedSegments, W = 0; W < k.length; W++) vn(i, p, b, k[W]);
    if (k.length = 0, i = i.responseState, k = b.id, b = b.rootSegmentID, p.push(i.startInlineScript), i.sentCompleteBoundaryFunction ? p.push('$RC("') : (i.sentCompleteBoundaryFunction = !0, p.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), k === null) throw Error(t(395));
    return b = b.toString(16), p.push(k), p.push('","'), p.push(i.segmentPrefix), p.push(b), p.push('")<\/script>');
  }
  function vn(i, p, b, k) {
    if (k.status === 2) return !0;
    var W = k.id;
    if (W === -1) {
      if ((k.id = b.rootSegmentID) === -1) throw Error(t(392));
      return yn(i, p, k);
    }
    return yn(i, p, k), i = i.responseState, p.push(i.startInlineScript), i.sentCompleteSegmentFunction ? p.push('$RS("') : (i.sentCompleteSegmentFunction = !0, p.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), p.push(i.segmentPrefix), W = W.toString(16), p.push(W), p.push('","'), p.push(i.placeholderPrefix), p.push(W), p.push('")<\/script>');
  }
  function Zr(i, p) {
    try {
      var b = i.completedRootSegment;
      if (b !== null && i.pendingRootTasks === 0) {
        Mr(i, p, b), i.completedRootSegment = null;
        var k = i.responseState.bootstrapChunks;
        for (b = 0; b < k.length - 1; b++) p.push(k[b]);
        b < k.length && p.push(k[b]);
      }
      var W = i.clientRenderedBoundaries, j;
      for (j = 0; j < W.length; j++) {
        var V = W[j];
        k = p;
        var ne = i.responseState, Se = V.id, Re = V.errorDigest, De = V.errorMessage, ut = V.errorComponentStack;
        if (k.push(ne.startInlineScript), ne.sentClientRenderFunction ? k.push('$RX("') : (ne.sentClientRenderFunction = !0, k.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), Se === null) throw Error(t(395));
        if (k.push(Se), k.push('"'), Re || De || ut) {
          k.push(",");
          var er = Pe(Re || "");
          k.push(er);
        }
        if (De || ut) {
          k.push(",");
          var tr = Pe(De || "");
          k.push(tr);
        }
        if (ut) {
          k.push(",");
          var Ft = Pe(ut);
          k.push(Ft);
        }
        if (!k.push(")<\/script>")) {
          i.destination = null, j++, W.splice(0, j);
          return;
        }
      }
      W.splice(0, j);
      var Fr = i.completedBoundaries;
      for (j = 0; j < Fr.length; j++) if (!wn(i, p, Fr[j])) {
        i.destination = null, j++, Fr.splice(0, j);
        return;
      }
      Fr.splice(0, j);
      var Ar = i.partialBoundaries;
      for (j = 0; j < Ar.length; j++) {
        var Sn = Ar[j];
        e: {
          W = i, V = p;
          var Ur = Sn.completedSegments;
          for (ne = 0; ne < Ur.length; ne++) if (!vn(W, V, Sn, Ur[ne])) {
            ne++, Ur.splice(0, ne);
            var na = !1;
            break e;
          }
          Ur.splice(0, ne), na = !0;
        }
        if (!na) {
          i.destination = null, j++, Ar.splice(0, j);
          return;
        }
      }
      Ar.splice(0, j);
      var Or = i.completedBoundaries;
      for (j = 0; j < Or.length; j++) if (!wn(i, p, Or[j])) {
        i.destination = null, j++, Or.splice(0, j);
        return;
      }
      Or.splice(0, j);
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && p.push(null);
    }
  }
  function ta(i, p) {
    try {
      var b = i.abortableTasks;
      b.forEach(function(k) {
        return vr(k, i, p);
      }), b.clear(), i.destination !== null && Zr(i, i.destination);
    } catch (k) {
      x(i, k), O(i, k);
    }
  }
  function ra() {
  }
  function An(i, p, b, k) {
    var W = !1, j = null, V = "", ne = { push: function(Re) {
      return Re !== null && (V += Re), !0;
    }, destroy: function(Re) {
      W = !0, j = Re;
    } }, Se = !1;
    if (i = yr(i, Ge(b, p ? p.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ra, void 0, function() {
      Se = !0;
    }), ea(i), ta(i, k), i.status === 1) i.status = 2, ne.destroy(i.fatalError);
    else if (i.status !== 2 && i.destination === null) {
      i.destination = ne;
      try {
        Zr(i, ne);
      } catch (Re) {
        x(i, Re), O(i, Re);
      }
    }
    if (W) throw j;
    if (!Se) throw Error(t(426));
    return V;
  }
  return Wr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Wr.renderToStaticMarkup = function(i, p) {
    return An(i, p, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Wr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Wr.renderToString = function(i, p) {
    return An(i, p, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Wr.version = "18.3.1", Wr;
}
var Sa = {}, $s;
function Qp() {
  if ($s) return Sa;
  $s = 1;
  var e = ht;
  function t(s) {
    for (var f = "https://reactjs.org/docs/error-decoder.html?invariant=" + s, g = 1; g < arguments.length; g++) f += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + s + "; visit " + f + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(s, f) {
    if (f.length !== 0) if (512 < f.length) 0 < n && (s.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), s.enqueue(f);
    else {
      var g = r.length - n;
      g < f.length && (g === 0 ? s.enqueue(r) : (r.set(f.subarray(0, g), n), s.enqueue(r), f = f.subarray(g)), r = new Uint8Array(512), n = 0), r.set(f, n), n += f.length;
    }
  }
  function o(s, f) {
    return a(s, f), !0;
  }
  function l(s) {
    r && 0 < n && (s.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var c = new TextEncoder();
  function h(s) {
    return c.encode(s);
  }
  function d(s) {
    return c.encode(s);
  }
  function y(s, f) {
    typeof s.error == "function" ? s.error(f) : s.close();
  }
  var m = Object.prototype.hasOwnProperty, I = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, C = {};
  function w(s) {
    return m.call(C, s) ? !0 : m.call(U, s) ? !1 : I.test(s) ? C[s] = !0 : (U[s] = !0, !1);
  }
  function E(s, f, g, S, z, M, Y) {
    this.acceptsBooleans = f === 2 || f === 3 || f === 4, this.attributeName = S, this.attributeNamespace = z, this.mustUseProperty = g, this.propertyName = s, this.type = f, this.sanitizeURL = M, this.removeEmptyString = Y;
  }
  var N = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s) {
    N[s] = new E(s, 0, !1, s, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(s) {
    var f = s[0];
    N[f] = new E(f, 1, !1, s[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(s) {
    N[s] = new E(s, 2, !1, s.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(s) {
    N[s] = new E(s, 2, !1, s, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s) {
    N[s] = new E(s, 3, !1, s.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(s) {
    N[s] = new E(s, 3, !0, s, null, !1, !1);
  }), ["capture", "download"].forEach(function(s) {
    N[s] = new E(s, 4, !1, s, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(s) {
    N[s] = new E(s, 6, !1, s, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(s) {
    N[s] = new E(s, 5, !1, s.toLowerCase(), null, !1, !1);
  });
  var D = /[\-:]([a-z])/g;
  function F(s) {
    return s[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s) {
    var f = s.replace(
      D,
      F
    );
    N[f] = new E(f, 1, !1, s, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s) {
    var f = s.replace(D, F);
    N[f] = new E(f, 1, !1, s, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(s) {
    var f = s.replace(D, F);
    N[f] = new E(f, 1, !1, s, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(s) {
    N[s] = new E(s, 1, !1, s.toLowerCase(), null, !1, !1);
  }), N.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(s) {
    N[s] = new E(s, 1, !1, s.toLowerCase(), null, !0, !0);
  });
  var B = {
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
  Object.keys(B).forEach(function(s) {
    R.forEach(function(f) {
      f = f + s.charAt(0).toUpperCase() + s.substring(1), B[f] = B[s];
    });
  });
  var ae = /["'&<>]/;
  function de(s) {
    if (typeof s == "boolean" || typeof s == "number") return "" + s;
    s = "" + s;
    var f = ae.exec(s);
    if (f) {
      var g = "", S, z = 0;
      for (S = f.index; S < s.length; S++) {
        switch (s.charCodeAt(S)) {
          case 34:
            f = "&quot;";
            break;
          case 38:
            f = "&amp;";
            break;
          case 39:
            f = "&#x27;";
            break;
          case 60:
            f = "&lt;";
            break;
          case 62:
            f = "&gt;";
            break;
          default:
            continue;
        }
        z !== S && (g += s.substring(z, S)), z = S + 1, g += f;
      }
      s = z !== S ? g + s.substring(z, S) : g;
    }
    return s;
  }
  var Z = /([A-Z])/g, le = /^ms-/, we = Array.isArray, ue = d("<script>"), ge = d("<\/script>"), Ie = d('<script src="'), Oe = d('<script type="module" src="'), me = d('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Ue(s, f, g, S) {
    return "" + f + (g === "s" ? "\\u0073" : "\\u0053") + S;
  }
  function Pe(s, f, g, S, z) {
    s = s === void 0 ? "" : s, f = f === void 0 ? ue : d('<script nonce="' + de(f) + '">');
    var M = [];
    if (g !== void 0 && M.push(f, h(("" + g).replace(st, Ue)), ge), S !== void 0) for (g = 0; g < S.length; g++) M.push(Ie, h(de(S[g])), me);
    if (z !== void 0) for (S = 0; S < z.length; S++) M.push(Oe, h(de(z[S])), me);
    return { bootstrapChunks: M, startInlineScript: f, placeholderPrefix: d(s + "P:"), segmentPrefix: d(s + "S:"), boundaryPrefix: s + "B:", idPrefix: s, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ge(s, f) {
    return { insertionMode: s, selectedValue: f };
  }
  function Xe(s) {
    return Ge(s === "http://www.w3.org/2000/svg" ? 2 : s === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function pe(s, f, g) {
    switch (f) {
      case "select":
        return Ge(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return Ge(2, null);
      case "math":
        return Ge(3, null);
      case "foreignObject":
        return Ge(1, null);
      case "table":
        return Ge(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ge(5, null);
      case "colgroup":
        return Ge(7, null);
      case "tr":
        return Ge(6, null);
    }
    return 4 <= s.insertionMode || s.insertionMode === 0 ? Ge(1, null) : s;
  }
  var q = d("<!-- -->");
  function L(s, f, g, S) {
    return f === "" ? S : (S && s.push(q), s.push(h(de(f))), !0);
  }
  var G = /* @__PURE__ */ new Map(), H = d(' style="'), v = d(":"), te = d(";");
  function P(s, f, g) {
    if (typeof g != "object") throw Error(t(62));
    f = !0;
    for (var S in g) if (m.call(g, S)) {
      var z = g[S];
      if (z != null && typeof z != "boolean" && z !== "") {
        if (S.indexOf("--") === 0) {
          var M = h(de(S));
          z = h(de(("" + z).trim()));
        } else {
          M = S;
          var Y = G.get(M);
          Y !== void 0 || (Y = d(de(M.replace(Z, "-$1").toLowerCase().replace(le, "-ms-"))), G.set(M, Y)), M = Y, z = typeof z == "number" ? z === 0 || m.call(B, S) ? h("" + z) : h(z + "px") : h(de(("" + z).trim()));
        }
        f ? (f = !1, s.push(H, M, v, z)) : s.push(te, M, v, z);
      }
    }
    f || s.push(oe);
  }
  var ce = d(" "), re = d('="'), oe = d('"'), J = d('=""');
  function fe(s, f, g, S) {
    switch (g) {
      case "style":
        P(s, f, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (f = N.hasOwnProperty(g) ? N[g] : null, f !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!f.acceptsBooleans) return;
        }
        switch (g = h(f.attributeName), f.type) {
          case 3:
            S && s.push(ce, g, J);
            break;
          case 4:
            S === !0 ? s.push(ce, g, J) : S !== !1 && s.push(ce, g, re, h(de(S)), oe);
            break;
          case 5:
            isNaN(S) || s.push(ce, g, re, h(de(S)), oe);
            break;
          case 6:
            !isNaN(S) && 1 <= S && s.push(ce, g, re, h(de(S)), oe);
            break;
          default:
            f.sanitizeURL && (S = "" + S), s.push(ce, g, re, h(de(S)), oe);
        }
      } else if (w(g)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (f = g.toLowerCase().slice(0, 5), f !== "data-" && f !== "aria-") return;
        }
        s.push(ce, h(g), re, h(de(S)), oe);
      }
    }
  }
  var be = d(">"), ie = d("/>");
  function Ee(s, f, g) {
    if (f != null) {
      if (g != null) throw Error(t(60));
      if (typeof f != "object" || !("__html" in f)) throw Error(t(61));
      f = f.__html, f != null && s.push(h("" + f));
    }
  }
  function se(s) {
    var f = "";
    return e.Children.forEach(s, function(g) {
      g != null && (f += g);
    }), f;
  }
  var ve = d(' selected=""');
  function Je(s, f, g, S) {
    s.push(Ce(g));
    var z = g = null, M;
    for (M in f) if (m.call(f, M)) {
      var Y = f[M];
      if (Y != null) switch (M) {
        case "children":
          g = Y;
          break;
        case "dangerouslySetInnerHTML":
          z = Y;
          break;
        default:
          fe(s, S, M, Y);
      }
    }
    return s.push(be), Ee(s, z, g), typeof g == "string" ? (s.push(h(de(g))), null) : g;
  }
  var ke = d(`
`), gt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, tt = /* @__PURE__ */ new Map();
  function Ce(s) {
    var f = tt.get(s);
    if (f === void 0) {
      if (!gt.test(s)) throw Error(t(65, s));
      f = d("<" + s), tt.set(s, f);
    }
    return f;
  }
  var X = d("<!DOCTYPE html>");
  function he(s, f, g, S, z) {
    switch (f) {
      case "select":
        s.push(Ce("select"));
        var M = null, Y = null;
        for (je in g) if (m.call(g, je)) {
          var ee = g[je];
          if (ee != null) switch (je) {
            case "children":
              M = ee;
              break;
            case "dangerouslySetInnerHTML":
              Y = ee;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(s, S, je, ee);
          }
        }
        return s.push(be), Ee(s, Y, M), M;
      case "option":
        Y = z.selectedValue, s.push(Ce("option"));
        var xe = ee = null, Fe = null, je = null;
        for (M in g) if (m.call(g, M)) {
          var it = g[M];
          if (it != null) switch (M) {
            case "children":
              ee = it;
              break;
            case "selected":
              Fe = it;
              break;
            case "dangerouslySetInnerHTML":
              je = it;
              break;
            case "value":
              xe = it;
            default:
              fe(s, S, M, it);
          }
        }
        if (Y != null) if (g = xe !== null ? "" + xe : se(ee), we(Y)) {
          for (S = 0; S < Y.length; S++)
            if ("" + Y[S] === g) {
              s.push(ve);
              break;
            }
        } else "" + Y === g && s.push(ve);
        else Fe && s.push(ve);
        return s.push(be), Ee(s, je, ee), ee;
      case "textarea":
        s.push(Ce("textarea")), je = Y = M = null;
        for (ee in g) if (m.call(g, ee) && (xe = g[ee], xe != null)) switch (ee) {
          case "children":
            je = xe;
            break;
          case "value":
            M = xe;
            break;
          case "defaultValue":
            Y = xe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            fe(s, S, ee, xe);
        }
        if (M === null && Y !== null && (M = Y), s.push(be), je != null) {
          if (M != null) throw Error(t(92));
          if (we(je) && 1 < je.length) throw Error(t(93));
          M = "" + je;
        }
        return typeof M == "string" && M[0] === `
` && s.push(ke), M !== null && s.push(h(de("" + M))), null;
      case "input":
        s.push(Ce("input")), xe = je = ee = M = null;
        for (Y in g) if (m.call(g, Y) && (Fe = g[Y], Fe != null)) switch (Y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            xe = Fe;
            break;
          case "defaultValue":
            ee = Fe;
            break;
          case "checked":
            je = Fe;
            break;
          case "value":
            M = Fe;
            break;
          default:
            fe(s, S, Y, Fe);
        }
        return je !== null ? fe(
          s,
          S,
          "checked",
          je
        ) : xe !== null && fe(s, S, "checked", xe), M !== null ? fe(s, S, "value", M) : ee !== null && fe(s, S, "value", ee), s.push(ie), null;
      case "menuitem":
        s.push(Ce("menuitem"));
        for (var zt in g) if (m.call(g, zt) && (M = g[zt], M != null)) switch (zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            fe(s, S, zt, M);
        }
        return s.push(be), null;
      case "title":
        s.push(Ce("title")), M = null;
        for (it in g) if (m.call(g, it) && (Y = g[it], Y != null)) switch (it) {
          case "children":
            M = Y;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            fe(s, S, it, Y);
        }
        return s.push(be), M;
      case "listing":
      case "pre":
        s.push(Ce(f)), Y = M = null;
        for (xe in g) if (m.call(g, xe) && (ee = g[xe], ee != null)) switch (xe) {
          case "children":
            M = ee;
            break;
          case "dangerouslySetInnerHTML":
            Y = ee;
            break;
          default:
            fe(s, S, xe, ee);
        }
        if (s.push(be), Y != null) {
          if (M != null) throw Error(t(60));
          if (typeof Y != "object" || !("__html" in Y)) throw Error(t(61));
          g = Y.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? s.push(ke, h(g)) : s.push(h("" + g)));
        }
        return typeof M == "string" && M[0] === `
` && s.push(ke), M;
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
        s.push(Ce(f));
        for (var rr in g) if (m.call(g, rr) && (M = g[rr], M != null)) switch (rr) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, f));
          default:
            fe(s, S, rr, M);
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
        return Je(s, g, f, S);
      case "html":
        return z.insertionMode === 0 && s.push(X), Je(s, g, f, S);
      default:
        if (f.indexOf("-") === -1 && typeof g.is != "string") return Je(s, g, f, S);
        s.push(Ce(f)), Y = M = null;
        for (Fe in g) if (m.call(g, Fe) && (ee = g[Fe], ee != null)) switch (Fe) {
          case "children":
            M = ee;
            break;
          case "dangerouslySetInnerHTML":
            Y = ee;
            break;
          case "style":
            P(s, S, ee);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(Fe) && typeof ee != "function" && typeof ee != "symbol" && s.push(ce, h(Fe), re, h(de(ee)), oe);
        }
        return s.push(be), Ee(s, Y, M), M;
    }
  }
  var rt = d("</"), yt = d(">"), qe = d('<template id="'), lr = d('"></template>'), Ht = d("<!--$-->"), hr = d('<!--$?--><template id="'), Ct = d('"></template>'), At = d("<!--$!-->"), dt = d("<!--/$-->"), vt = d("<template"), Vt = d('"'), Yt = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var Br = d("></template>");
  function pt(s, f, g) {
    if (a(s, hr), g === null) throw Error(t(395));
    return a(s, g), o(s, Ct);
  }
  var Tt = d('<div hidden id="'), cr = d('">'), Me = d("</div>"), Jt = d('<svg aria-hidden="true" style="display:none" id="'), ur = d('">'), _e = d("</svg>"), lt = d('<math aria-hidden="true" style="display:none" id="'), dr = d('">'), Rt = d("</math>"), Qt = d('<table hidden id="'), Xt = d('">'), Kt = d("</table>"), Ir = d('<table hidden><tbody id="'), ft = d('">'), Dt = d("</tbody></table>"), gr = d('<table hidden><tr id="'), mr = d('">'), Bt = d("</tr></table>"), fr = d('<table hidden><colgroup id="'), nt = d('">'), $t = d("</colgroup></table>");
  function br(s, f, g, S) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a(s, Tt), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, cr);
      case 2:
        return a(s, Jt), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, ur);
      case 3:
        return a(s, lt), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, dr);
      case 4:
        return a(s, Qt), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, Xt);
      case 5:
        return a(s, Ir), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, ft);
      case 6:
        return a(s, gr), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, mr);
      case 7:
        return a(
          s,
          fr
        ), a(s, f.segmentPrefix), a(s, h(S.toString(16))), o(s, nt);
      default:
        throw Error(t(397));
    }
  }
  function Mt(s, f) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return o(s, Me);
      case 2:
        return o(s, _e);
      case 3:
        return o(s, Rt);
      case 4:
        return o(s, Kt);
      case 5:
        return o(s, Dt);
      case 6:
        return o(s, Bt);
      case 7:
        return o(s, $t);
      default:
        throw Error(t(397));
    }
  }
  var yr = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), wr = d('$RS("'), A = d('","'), x = d('")<\/script>'), O = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), $ = d('$RC("'), Te = d('","'), Ne = d('")<\/script>'), He = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Le = d('$RX("'), at = d('"'), et = d(")<\/script>"), ct = d(","), vr = /[<\u2028\u2029]/g;
  function Zt(s) {
    return JSON.stringify(s).replace(vr, function(f) {
      switch (f) {
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
  var _r = Object.assign, ea = Symbol.for("react.element"), jr = Symbol.for("react.portal"), Mr = Symbol.for("react.fragment"), yn = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), vn = Symbol.for("react.provider"), Zr = Symbol.for("react.context"), ta = Symbol.for("react.forward_ref"), ra = Symbol.for("react.suspense"), An = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.scope"), k = Symbol.for("react.debug_trace_mode"), W = Symbol.for("react.legacy_hidden"), j = Symbol.for("react.default_value"), V = Symbol.iterator;
  function ne(s) {
    if (s == null) return null;
    if (typeof s == "function") return s.displayName || s.name || null;
    if (typeof s == "string") return s;
    switch (s) {
      case Mr:
        return "Fragment";
      case jr:
        return "Portal";
      case wn:
        return "Profiler";
      case yn:
        return "StrictMode";
      case ra:
        return "Suspense";
      case An:
        return "SuspenseList";
    }
    if (typeof s == "object") switch (s.$$typeof) {
      case Zr:
        return (s.displayName || "Context") + ".Consumer";
      case vn:
        return (s._context.displayName || "Context") + ".Provider";
      case ta:
        var f = s.render;
        return s = s.displayName, s || (s = f.displayName || f.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
      case i:
        return f = s.displayName || null, f !== null ? f : ne(s.type) || "Memo";
      case p:
        f = s._payload, s = s._init;
        try {
          return ne(s(f));
        } catch {
        }
    }
    return null;
  }
  var Se = {};
  function Re(s, f) {
    if (s = s.contextTypes, !s) return Se;
    var g = {}, S;
    for (S in s) g[S] = f[S];
    return g;
  }
  var De = null;
  function ut(s, f) {
    if (s !== f) {
      s.context._currentValue = s.parentValue, s = s.parent;
      var g = f.parent;
      if (s === null) {
        if (g !== null) throw Error(t(401));
      } else {
        if (g === null) throw Error(t(401));
        ut(s, g);
      }
      f.context._currentValue = f.value;
    }
  }
  function er(s) {
    s.context._currentValue = s.parentValue, s = s.parent, s !== null && er(s);
  }
  function tr(s) {
    var f = s.parent;
    f !== null && tr(f), s.context._currentValue = s.value;
  }
  function Ft(s, f) {
    if (s.context._currentValue = s.parentValue, s = s.parent, s === null) throw Error(t(402));
    s.depth === f.depth ? ut(s, f) : Ft(s, f);
  }
  function Fr(s, f) {
    var g = f.parent;
    if (g === null) throw Error(t(402));
    s.depth === g.depth ? ut(s, g) : Fr(s, g), f.context._currentValue = f.value;
  }
  function Ar(s) {
    var f = De;
    f !== s && (f === null ? tr(s) : s === null ? er(f) : f.depth === s.depth ? ut(f, s) : f.depth > s.depth ? Ft(f, s) : Fr(f, s), De = s);
  }
  var Sn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(s, f) {
    s = s._reactInternals, s.queue !== null && s.queue.push(f);
  }, enqueueReplaceState: function(s, f) {
    s = s._reactInternals, s.replace = !0, s.queue = [f];
  }, enqueueForceUpdate: function() {
  } };
  function Ur(s, f, g, S) {
    var z = s.state !== void 0 ? s.state : null;
    s.updater = Sn, s.props = g, s.state = z;
    var M = { queue: [], replace: !1 };
    s._reactInternals = M;
    var Y = f.contextType;
    if (s.context = typeof Y == "object" && Y !== null ? Y._currentValue : S, Y = f.getDerivedStateFromProps, typeof Y == "function" && (Y = Y(g, z), z = Y == null ? z : _r({}, z, Y), s.state = z), typeof f.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function")) if (f = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), f !== s.state && Sn.enqueueReplaceState(s, s.state, null), M.queue !== null && 0 < M.queue.length) if (f = M.queue, Y = M.replace, M.queue = null, M.replace = !1, Y && f.length === 1) s.state = f[0];
    else {
      for (M = Y ? f[0] : s.state, z = !0, Y = Y ? 1 : 0; Y < f.length; Y++) {
        var ee = f[Y];
        ee = typeof ee == "function" ? ee.call(s, M, g, S) : ee, ee != null && (z ? (z = !1, M = _r({}, M, ee)) : _r(M, ee));
      }
      s.state = M;
    }
    else M.queue = null;
  }
  var na = { id: 1, overflow: "" };
  function Or(s, f, g) {
    var S = s.id;
    s = s.overflow;
    var z = 32 - aa(S) - 1;
    S &= ~(1 << z), g += 1;
    var M = 32 - aa(f) + z;
    if (30 < M) {
      var Y = z - z % 5;
      return M = (S & (1 << Y) - 1).toString(32), S >>= Y, z -= Y, { id: 1 << 32 - aa(f) + z | g << z | S, overflow: M + s };
    }
    return { id: 1 << M | g << z | S, overflow: s };
  }
  var aa = Math.clz32 ? Math.clz32 : _u, Ru = Math.log, Iu = Math.LN2;
  function _u(s) {
    return s >>>= 0, s === 0 ? 32 : 31 - (Ru(s) / Iu | 0) | 0;
  }
  function Ou(s, f) {
    return s === f && (s !== 0 || 1 / s === 1 / f) || s !== s && f !== f;
  }
  var Lu = typeof Object.is == "function" ? Object.is : Ou, Sr = null, ao = null, oa = null, ot = null, xn = !1, ia = !1, En = 0, Lr = null, sa = 0;
  function zr() {
    if (Sr === null) throw Error(t(321));
    return Sr;
  }
  function Ui() {
    if (0 < sa) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function oo() {
    return ot === null ? oa === null ? (xn = !1, oa = ot = Ui()) : (xn = !0, ot = oa) : ot.next === null ? (xn = !1, ot = ot.next = Ui()) : (xn = !0, ot = ot.next), ot;
  }
  function io() {
    ao = Sr = null, ia = !1, oa = null, sa = 0, ot = Lr = null;
  }
  function zi(s, f) {
    return typeof f == "function" ? f(s) : f;
  }
  function Wi(s, f, g) {
    if (Sr = zr(), ot = oo(), xn) {
      var S = ot.queue;
      if (f = S.dispatch, Lr !== null && (g = Lr.get(S), g !== void 0)) {
        Lr.delete(S), S = ot.memoizedState;
        do
          S = s(S, g.action), g = g.next;
        while (g !== null);
        return ot.memoizedState = S, [S, f];
      }
      return [ot.memoizedState, f];
    }
    return s = s === zi ? typeof f == "function" ? f() : f : g !== void 0 ? g(f) : f, ot.memoizedState = s, s = ot.queue = { last: null, dispatch: null }, s = s.dispatch = Pu.bind(null, Sr, s), [ot.memoizedState, s];
  }
  function Hi(s, f) {
    if (Sr = zr(), ot = oo(), f = f === void 0 ? null : f, ot !== null) {
      var g = ot.memoizedState;
      if (g !== null && f !== null) {
        var S = g[1];
        e: if (S === null) S = !1;
        else {
          for (var z = 0; z < S.length && z < f.length; z++) if (!Lu(f[z], S[z])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return g[0];
      }
    }
    return s = s(), ot.memoizedState = [s, f], s;
  }
  function Pu(s, f, g) {
    if (25 <= sa) throw Error(t(301));
    if (s === Sr) if (ia = !0, s = { action: g, next: null }, Lr === null && (Lr = /* @__PURE__ */ new Map()), g = Lr.get(f), g === void 0) Lr.set(f, s);
    else {
      for (f = g; f.next !== null; ) f = f.next;
      f.next = s;
    }
  }
  function Nu() {
    throw Error(t(394));
  }
  function la() {
  }
  var Qi = { readContext: function(s) {
    return s._currentValue;
  }, useContext: function(s) {
    return zr(), s._currentValue;
  }, useMemo: Hi, useReducer: Wi, useRef: function(s) {
    Sr = zr(), ot = oo();
    var f = ot.memoizedState;
    return f === null ? (s = { current: s }, ot.memoizedState = s) : f;
  }, useState: function(s) {
    return Wi(zi, s);
  }, useInsertionEffect: la, useLayoutEffect: function() {
  }, useCallback: function(s, f) {
    return Hi(function() {
      return s;
    }, f);
  }, useImperativeHandle: la, useEffect: la, useDebugValue: la, useDeferredValue: function(s) {
    return zr(), s;
  }, useTransition: function() {
    return zr(), [!1, Nu];
  }, useId: function() {
    var s = ao.treeContext, f = s.overflow;
    s = s.id, s = (s & ~(1 << 32 - aa(s) - 1)).toString(32) + f;
    var g = ca;
    if (g === null) throw Error(t(404));
    return f = En++, s = ":" + g.idPrefix + "R" + s, 0 < f && (s += "H" + f.toString(32)), s + ":";
  }, useMutableSource: function(s, f) {
    return zr(), f(s._source);
  }, useSyncExternalStore: function(s, f, g) {
    if (g === void 0) throw Error(t(407));
    return g();
  } }, ca = null, so = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Du(s) {
    return console.error(s), null;
  }
  function kn() {
  }
  function Bu(s, f, g, S, z, M, Y, ee, xe) {
    var Fe = [], je = /* @__PURE__ */ new Set();
    return f = { destination: null, responseState: f, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: je, pingedTasks: Fe, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: z === void 0 ? Du : z, onAllReady: M === void 0 ? kn : M, onShellReady: Y === void 0 ? kn : Y, onShellError: ee === void 0 ? kn : ee, onFatalError: xe === void 0 ? kn : xe }, g = ua(f, 0, null, g, !1, !1), g.parentFlushed = !0, s = lo(f, s, null, g, je, Se, null, na), Fe.push(s), f;
  }
  function lo(s, f, g, S, z, M, Y, ee) {
    s.allPendingTasks++, g === null ? s.pendingRootTasks++ : g.pendingTasks++;
    var xe = { node: f, ping: function() {
      var Fe = s.pingedTasks;
      Fe.push(xe), Fe.length === 1 && Ki(s);
    }, blockedBoundary: g, blockedSegment: S, abortSet: z, legacyContext: M, context: Y, treeContext: ee };
    return z.add(xe), xe;
  }
  function ua(s, f, g, S, z, M) {
    return { status: 0, id: -1, index: f, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: g, lastPushedText: z, textEmbedded: M };
  }
  function Cn(s, f) {
    if (s = s.onError(f), s != null && typeof s != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof s + '" instead');
    return s;
  }
  function da(s, f) {
    var g = s.onShellError;
    g(f), g = s.onFatalError, g(f), s.destination !== null ? (s.status = 2, y(s.destination, f)) : (s.status = 1, s.fatalError = f);
  }
  function Gi(s, f, g, S, z) {
    for (Sr = {}, ao = f, En = 0, s = g(S, z); ia; ) ia = !1, En = 0, sa += 1, ot = null, s = g(S, z);
    return io(), s;
  }
  function qi(s, f, g, S) {
    var z = g.render(), M = S.childContextTypes;
    if (M != null) {
      var Y = f.legacyContext;
      if (typeof g.getChildContext != "function") S = Y;
      else {
        g = g.getChildContext();
        for (var ee in g) if (!(ee in M)) throw Error(t(108, ne(S) || "Unknown", ee));
        S = _r({}, Y, g);
      }
      f.legacyContext = S, Ut(s, f, z), f.legacyContext = Y;
    } else Ut(s, f, z);
  }
  function Vi(s, f) {
    if (s && s.defaultProps) {
      f = _r({}, f), s = s.defaultProps;
      for (var g in s) f[g] === void 0 && (f[g] = s[g]);
      return f;
    }
    return f;
  }
  function co(s, f, g, S, z) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      z = Re(g, f.legacyContext);
      var M = g.contextType;
      M = new g(S, typeof M == "object" && M !== null ? M._currentValue : z), Ur(M, g, S, z), qi(s, f, M, g);
    } else {
      M = Re(g, f.legacyContext), z = Gi(s, f, g, S, M);
      var Y = En !== 0;
      if (typeof z == "object" && z !== null && typeof z.render == "function" && z.$$typeof === void 0) Ur(z, g, S, M), qi(s, f, z, g);
      else if (Y) {
        S = f.treeContext, f.treeContext = Or(S, 1, 0);
        try {
          Ut(s, f, z);
        } finally {
          f.treeContext = S;
        }
      } else Ut(s, f, z);
    }
    else if (typeof g == "string") {
      switch (z = f.blockedSegment, M = he(z.chunks, g, S, s.responseState, z.formatContext), z.lastPushedText = !1, Y = z.formatContext, z.formatContext = pe(Y, g, S), uo(s, f, M), z.formatContext = Y, g) {
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
          z.chunks.push(rt, h(g), yt);
      }
      z.lastPushedText = !1;
    } else {
      switch (g) {
        case W:
        case k:
        case yn:
        case wn:
        case Mr:
          Ut(s, f, S.children);
          return;
        case An:
          Ut(s, f, S.children);
          return;
        case b:
          throw Error(t(343));
        case ra:
          e: {
            g = f.blockedBoundary, z = f.blockedSegment, M = S.fallback, S = S.children, Y = /* @__PURE__ */ new Set();
            var ee = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Y, errorDigest: null }, xe = ua(s, z.chunks.length, ee, z.formatContext, !1, !1);
            z.children.push(xe), z.lastPushedText = !1;
            var Fe = ua(s, 0, null, z.formatContext, !1, !1);
            Fe.parentFlushed = !0, f.blockedBoundary = ee, f.blockedSegment = Fe;
            try {
              if (uo(
                s,
                f,
                S
              ), Fe.lastPushedText && Fe.textEmbedded && Fe.chunks.push(q), Fe.status = 1, fa(ee, Fe), ee.pendingTasks === 0) break e;
            } catch (je) {
              Fe.status = 4, ee.forceClientRender = !0, ee.errorDigest = Cn(s, je);
            } finally {
              f.blockedBoundary = g, f.blockedSegment = z;
            }
            f = lo(s, M, g, xe, Y, f.legacyContext, f.context, f.treeContext), s.pingedTasks.push(f);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case ta:
          if (S = Gi(s, f, g.render, S, z), En !== 0) {
            g = f.treeContext, f.treeContext = Or(g, 1, 0);
            try {
              Ut(s, f, S);
            } finally {
              f.treeContext = g;
            }
          } else Ut(s, f, S);
          return;
        case i:
          g = g.type, S = Vi(g, S), co(s, f, g, S, z);
          return;
        case vn:
          if (z = S.children, g = g._context, S = S.value, M = g._currentValue, g._currentValue = S, Y = De, De = S = { parent: Y, depth: Y === null ? 0 : Y.depth + 1, context: g, parentValue: M, value: S }, f.context = S, Ut(s, f, z), s = De, s === null) throw Error(t(403));
          S = s.parentValue, s.context._currentValue = S === j ? s.context._defaultValue : S, s = De = s.parent, f.context = s;
          return;
        case Zr:
          S = S.children, S = S(g._currentValue), Ut(s, f, S);
          return;
        case p:
          z = g._init, g = z(g._payload), S = Vi(g, S), co(s, f, g, S, void 0);
          return;
      }
      throw Error(t(
        130,
        g == null ? g : typeof g,
        ""
      ));
    }
  }
  function Ut(s, f, g) {
    if (f.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ea:
          co(s, f, g.type, g.props, g.ref);
          return;
        case jr:
          throw Error(t(257));
        case p:
          var S = g._init;
          g = S(g._payload), Ut(s, f, g);
          return;
      }
      if (we(g)) {
        Yi(s, f, g);
        return;
      }
      if (g === null || typeof g != "object" ? S = null : (S = V && g[V] || g["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(g))) {
        if (g = S.next(), !g.done) {
          var z = [];
          do
            z.push(g.value), g = S.next();
          while (!g.done);
          Yi(s, f, z);
        }
        return;
      }
      throw s = Object.prototype.toString.call(g), Error(t(31, s === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : s));
    }
    typeof g == "string" ? (S = f.blockedSegment, S.lastPushedText = L(f.blockedSegment.chunks, g, s.responseState, S.lastPushedText)) : typeof g == "number" && (S = f.blockedSegment, S.lastPushedText = L(f.blockedSegment.chunks, "" + g, s.responseState, S.lastPushedText));
  }
  function Yi(s, f, g) {
    for (var S = g.length, z = 0; z < S; z++) {
      var M = f.treeContext;
      f.treeContext = Or(M, S, z);
      try {
        uo(s, f, g[z]);
      } finally {
        f.treeContext = M;
      }
    }
  }
  function uo(s, f, g) {
    var S = f.blockedSegment.formatContext, z = f.legacyContext, M = f.context;
    try {
      return Ut(s, f, g);
    } catch (xe) {
      if (io(), typeof xe == "object" && xe !== null && typeof xe.then == "function") {
        g = xe;
        var Y = f.blockedSegment, ee = ua(s, Y.chunks.length, null, Y.formatContext, Y.lastPushedText, !0);
        Y.children.push(ee), Y.lastPushedText = !1, s = lo(s, f.node, f.blockedBoundary, ee, f.abortSet, f.legacyContext, f.context, f.treeContext).ping, g.then(s, s), f.blockedSegment.formatContext = S, f.legacyContext = z, f.context = M, Ar(M);
      } else throw f.blockedSegment.formatContext = S, f.legacyContext = z, f.context = M, Ar(M), xe;
    }
  }
  function ju(s) {
    var f = s.blockedBoundary;
    s = s.blockedSegment, s.status = 3, Xi(this, f, s);
  }
  function Ji(s, f, g) {
    var S = s.blockedBoundary;
    s.blockedSegment.status = 3, S === null ? (f.allPendingTasks--, f.status !== 2 && (f.status = 2, f.destination !== null && f.destination.close())) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, s = g === void 0 ? Error(t(432)) : g, S.errorDigest = f.onError(s), S.parentFlushed && f.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(z) {
      return Ji(z, f, g);
    }), S.fallbackAbortableTasks.clear(), f.allPendingTasks--, f.allPendingTasks === 0 && (S = f.onAllReady, S()));
  }
  function fa(s, f) {
    if (f.chunks.length === 0 && f.children.length === 1 && f.children[0].boundary === null) {
      var g = f.children[0];
      g.id = f.id, g.parentFlushed = !0, g.status === 1 && fa(s, g);
    } else s.completedSegments.push(f);
  }
  function Xi(s, f, g) {
    if (f === null) {
      if (g.parentFlushed) {
        if (s.completedRootSegment !== null) throw Error(t(389));
        s.completedRootSegment = g;
      }
      s.pendingRootTasks--, s.pendingRootTasks === 0 && (s.onShellError = kn, f = s.onShellReady, f());
    } else f.pendingTasks--, f.forceClientRender || (f.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && fa(f, g), f.parentFlushed && s.completedBoundaries.push(f), f.fallbackAbortableTasks.forEach(ju, s), f.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (fa(f, g), f.completedSegments.length === 1 && f.parentFlushed && s.partialBoundaries.push(f)));
    s.allPendingTasks--, s.allPendingTasks === 0 && (s = s.onAllReady, s());
  }
  function Ki(s) {
    if (s.status !== 2) {
      var f = De, g = so.current;
      so.current = Qi;
      var S = ca;
      ca = s.responseState;
      try {
        var z = s.pingedTasks, M;
        for (M = 0; M < z.length; M++) {
          var Y = z[M], ee = s, xe = Y.blockedSegment;
          if (xe.status === 0) {
            Ar(Y.context);
            try {
              Ut(ee, Y, Y.node), xe.lastPushedText && xe.textEmbedded && xe.chunks.push(q), Y.abortSet.delete(Y), xe.status = 1, Xi(ee, Y.blockedBoundary, xe);
            } catch (nr) {
              if (io(), typeof nr == "object" && nr !== null && typeof nr.then == "function") {
                var Fe = Y.ping;
                nr.then(Fe, Fe);
              } else {
                Y.abortSet.delete(Y), xe.status = 4;
                var je = Y.blockedBoundary, it = nr, zt = Cn(ee, it);
                if (je === null ? da(ee, it) : (je.pendingTasks--, je.forceClientRender || (je.forceClientRender = !0, je.errorDigest = zt, je.parentFlushed && ee.clientRenderedBoundaries.push(je))), ee.allPendingTasks--, ee.allPendingTasks === 0) {
                  var rr = ee.onAllReady;
                  rr();
                }
              }
            } finally {
            }
          }
        }
        z.splice(0, M), s.destination !== null && fo(s, s.destination);
      } catch (nr) {
        Cn(s, nr), da(s, nr);
      } finally {
        ca = S, so.current = g, g === Qi && Ar(f);
      }
    }
  }
  function pa(s, f, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var S = g.id = s.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, s = s.responseState, a(f, qe), a(f, s.placeholderPrefix), s = h(S.toString(16)), a(f, s), o(f, lr);
      case 1:
        g.status = 2;
        var z = !0;
        S = g.chunks;
        var M = 0;
        g = g.children;
        for (var Y = 0; Y < g.length; Y++) {
          for (z = g[Y]; M < z.index; M++) a(f, S[M]);
          z = ha(s, f, z);
        }
        for (; M < S.length - 1; M++) a(f, S[M]);
        return M < S.length && (z = o(f, S[M])), z;
      default:
        throw Error(t(390));
    }
  }
  function ha(s, f, g) {
    var S = g.boundary;
    if (S === null) return pa(s, f, g);
    if (S.parentFlushed = !0, S.forceClientRender) S = S.errorDigest, o(f, At), a(f, vt), S && (a(f, Yt), a(f, h(de(S))), a(f, Vt)), o(f, Br), pa(s, f, g);
    else if (0 < S.pendingTasks) {
      S.rootSegmentID = s.nextSegmentId++, 0 < S.completedSegments.length && s.partialBoundaries.push(S);
      var z = s.responseState, M = z.nextSuspenseID++;
      z = d(z.boundaryPrefix + M.toString(16)), S = S.id = z, pt(f, s.responseState, S), pa(s, f, g);
    } else if (S.byteSize > s.progressiveChunkSize) S.rootSegmentID = s.nextSegmentId++, s.completedBoundaries.push(S), pt(f, s.responseState, S.id), pa(s, f, g);
    else {
      if (o(f, Ht), g = S.completedSegments, g.length !== 1) throw Error(t(391));
      ha(s, f, g[0]);
    }
    return o(f, dt);
  }
  function $i(s, f, g) {
    return br(f, s.responseState, g.formatContext, g.id), ha(s, f, g), Mt(f, g.formatContext);
  }
  function Zi(s, f, g) {
    for (var S = g.completedSegments, z = 0; z < S.length; z++) es(s, f, g, S[z]);
    if (S.length = 0, s = s.responseState, S = g.id, g = g.rootSegmentID, a(f, s.startInlineScript), s.sentCompleteBoundaryFunction ? a(f, $) : (s.sentCompleteBoundaryFunction = !0, a(f, O)), S === null) throw Error(t(395));
    return g = h(g.toString(16)), a(f, S), a(f, Te), a(f, s.segmentPrefix), a(f, g), o(f, Ne);
  }
  function es(s, f, g, S) {
    if (S.status === 2) return !0;
    var z = S.id;
    if (z === -1) {
      if ((S.id = g.rootSegmentID) === -1) throw Error(t(392));
      return $i(s, f, S);
    }
    return $i(s, f, S), s = s.responseState, a(f, s.startInlineScript), s.sentCompleteSegmentFunction ? a(f, wr) : (s.sentCompleteSegmentFunction = !0, a(f, yr)), a(f, s.segmentPrefix), z = h(z.toString(16)), a(f, z), a(f, A), a(f, s.placeholderPrefix), a(f, z), o(f, x);
  }
  function fo(s, f) {
    r = new Uint8Array(512), n = 0;
    try {
      var g = s.completedRootSegment;
      if (g !== null && s.pendingRootTasks === 0) {
        ha(s, f, g), s.completedRootSegment = null;
        var S = s.responseState.bootstrapChunks;
        for (g = 0; g < S.length - 1; g++) a(f, S[g]);
        g < S.length && o(f, S[g]);
      }
      var z = s.clientRenderedBoundaries, M;
      for (M = 0; M < z.length; M++) {
        var Y = z[M];
        S = f;
        var ee = s.responseState, xe = Y.id, Fe = Y.errorDigest, je = Y.errorMessage, it = Y.errorComponentStack;
        if (a(S, ee.startInlineScript), ee.sentClientRenderFunction ? a(S, Le) : (ee.sentClientRenderFunction = !0, a(
          S,
          He
        )), xe === null) throw Error(t(395));
        a(S, xe), a(S, at), (Fe || je || it) && (a(S, ct), a(S, h(Zt(Fe || "")))), (je || it) && (a(S, ct), a(S, h(Zt(je || "")))), it && (a(S, ct), a(S, h(Zt(it)))), o(S, et);
      }
      z.splice(0, M);
      var zt = s.completedBoundaries;
      for (M = 0; M < zt.length; M++) Zi(s, f, zt[M]);
      zt.splice(0, M), l(f), r = new Uint8Array(512), n = 0;
      var rr = s.partialBoundaries;
      for (M = 0; M < rr.length; M++) {
        var nr = rr[M];
        e: {
          z = s, Y = f;
          var ga = nr.completedSegments;
          for (ee = 0; ee < ga.length; ee++) if (!es(
            z,
            Y,
            nr,
            ga[ee]
          )) {
            ee++, ga.splice(0, ee);
            var rs = !1;
            break e;
          }
          ga.splice(0, ee), rs = !0;
        }
        if (!rs) {
          s.destination = null, M++, rr.splice(0, M);
          return;
        }
      }
      rr.splice(0, M);
      var po = s.completedBoundaries;
      for (M = 0; M < po.length; M++) Zi(s, f, po[M]);
      po.splice(0, M);
    } finally {
      l(f), s.allPendingTasks === 0 && s.pingedTasks.length === 0 && s.clientRenderedBoundaries.length === 0 && s.completedBoundaries.length === 0 && f.close();
    }
  }
  function ts(s, f) {
    try {
      var g = s.abortableTasks;
      g.forEach(function(S) {
        return Ji(S, s, f);
      }), g.clear(), s.destination !== null && fo(s, s.destination);
    } catch (S) {
      Cn(s, S), da(s, S);
    }
  }
  return Sa.renderToReadableStream = function(s, f) {
    return new Promise(function(g, S) {
      var z, M, Y = new Promise(function(je, it) {
        M = je, z = it;
      }), ee = Bu(s, Pe(f ? f.identifierPrefix : void 0, f ? f.nonce : void 0, f ? f.bootstrapScriptContent : void 0, f ? f.bootstrapScripts : void 0, f ? f.bootstrapModules : void 0), Xe(f ? f.namespaceURI : void 0), f ? f.progressiveChunkSize : void 0, f ? f.onError : void 0, M, function() {
        var je = new ReadableStream({ type: "bytes", pull: function(it) {
          if (ee.status === 1) ee.status = 2, y(it, ee.fatalError);
          else if (ee.status !== 2 && ee.destination === null) {
            ee.destination = it;
            try {
              fo(ee, it);
            } catch (zt) {
              Cn(ee, zt), da(ee, zt);
            }
          }
        }, cancel: function() {
          ts(ee);
        } }, { highWaterMark: 0 });
        je.allReady = Y, g(je);
      }, function(je) {
        Y.catch(function() {
        }), S(je);
      }, z);
      if (f && f.signal) {
        var xe = f.signal, Fe = function() {
          ts(ee, xe.reason), xe.removeEventListener("abort", Fe);
        };
        xe.addEventListener("abort", Fe);
      }
      Ki(ee);
    });
  }, Sa.version = "18.3.1", Sa;
}
var gn, Tc;
gn = Hp(), Tc = Qp();
gn.version;
gn.renderToString;
gn.renderToStaticMarkup;
gn.renderToNodeStream;
gn.renderToStaticNodeStream;
Tc.renderToReadableStream;
const Gp = "staticMarkup";
function Rc() {
  const e = Pl().indexOf(Gp) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const ln = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: n } = Rc(), { onClick: a, ...o } = r.props;
  if (n)
    return ht.cloneElement(r, {
      ...o,
      onClick: (h) => (Cc(e), a ? a(h) : !0)
    });
  let l = "";
  ["input", "header", "header-input"].includes(t) && (l = `-${t}`);
  const c = {
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
    ...o,
    onClick: a,
    ...c
  });
};
u.number, u.number, u.func, u.object;
u.arrayOf(wc).isRequired, u.number;
const qp = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Er = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  block: a,
  color: o,
  disabled: l,
  element: c,
  href: h,
  icon: d,
  innerRef: y,
  onClick: m,
  size: I,
  classes: U,
  target: C,
  ...w
}) => {
  const E = Rr("btn", {
    [`btn-${o}`]: !0,
    "btn-md": I === "small",
    "btn-sm": I === "xsmall",
    "btn-block": a,
    disabled: l
  });
  let N = c;
  return h && c === "button" && (N = "a"), /* @__PURE__ */ K.jsx(
    ln,
    {
      gaData: {
        ...qp,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ K.jsxs(
        N,
        {
          type: N === "button" && m ? "button" : void 0,
          ...w,
          className: Rr(U) || E,
          href: h,
          ref: y,
          onClick: m,
          "aria-label": n,
          target: N === "a" ? C : null,
          children: [
            d && /* @__PURE__ */ K.jsx("i", { className: `${d == null ? void 0 : d[0]} fa-${d == null ? void 0 : d[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
Er.propTypes = {
  /**
   * Button label
   */
  label: u.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: u.string,
  /**
   * Google Analytics event data
   */
  gaData: xi,
  /**
    ARIA label for accessibility
  */
  ariaLabel: u.string,
  /**
    Render button as a block-button?
  */
  block: u.bool,
  /**
    Button background color
  */
  color: u.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: u.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: u.oneOfType([
    u.func,
    u.string,
    u.shape({ $$typeof: u.symbol, render: u.func }),
    u.arrayOf(
      u.oneOfType([
        u.func,
        u.string,
        u.shape({ $$typeof: u.symbol, render: u.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: u.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: u.arrayOf(u.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: u.oneOfType([
    u.object,
    u.func,
    u.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: u.func,
  /**
    Button size
  */
  size: u.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: u.arrayOf(u.string),
  /**
   Link target type
   */
  target: u.oneOf(["_blank", "_self", "_top", "_parent"])
};
Er.defaultProps = {
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
var Ic = { exports: {} }, $e = {}, Zs;
function Vp() {
  if (Zs) return $e;
  Zs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), U = Symbol.for("react.client.reference");
  function C(w) {
    if (typeof w == "object" && w !== null) {
      var E = w.$$typeof;
      switch (E) {
        case e:
          switch (w = w.type, w) {
            case r:
            case a:
            case n:
            case h:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case l:
                case c:
                case m:
                case y:
                  return w;
                case o:
                  return w;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return $e.ContextConsumer = o, $e.ContextProvider = l, $e.Element = e, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = m, $e.Memo = y, $e.Portal = t, $e.Profiler = a, $e.StrictMode = n, $e.Suspense = h, $e.SuspenseList = d, $e.isContextConsumer = function(w) {
    return C(w) === o;
  }, $e.isContextProvider = function(w) {
    return C(w) === l;
  }, $e.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, $e.isForwardRef = function(w) {
    return C(w) === c;
  }, $e.isFragment = function(w) {
    return C(w) === r;
  }, $e.isLazy = function(w) {
    return C(w) === m;
  }, $e.isMemo = function(w) {
    return C(w) === y;
  }, $e.isPortal = function(w) {
    return C(w) === t;
  }, $e.isProfiler = function(w) {
    return C(w) === a;
  }, $e.isStrictMode = function(w) {
    return C(w) === n;
  }, $e.isSuspense = function(w) {
    return C(w) === h;
  }, $e.isSuspenseList = function(w) {
    return C(w) === d;
  }, $e.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === a || w === n || w === h || w === d || w === I || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === y || w.$$typeof === l || w.$$typeof === o || w.$$typeof === c || w.$$typeof === U || w.getModuleId !== void 0);
  }, $e.typeOf = C, $e;
}
Ic.exports = Vp();
var _c = Ic.exports;
function Yp(e) {
  function t(q, L, G, H, v) {
    for (var te = 0, P = 0, ce = 0, re = 0, oe, J, fe = 0, be = 0, ie, Ee = ie = oe = 0, se = 0, ve = 0, Je = 0, ke = 0, gt = G.length, tt = gt - 1, Ce, X = "", he = "", rt = "", yt = "", qe; se < gt; ) {
      if (J = G.charCodeAt(se), se === tt && P + re + ce + te !== 0 && (P !== 0 && (J = P === 47 ? 10 : 47), re = ce = te = 0, gt++, tt++), P + re + ce + te === 0) {
        if (se === tt && (0 < ve && (X = X.replace(I, "")), 0 < X.trim().length)) {
          switch (J) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              X += G.charAt(se);
          }
          J = 59;
        }
        switch (J) {
          case 123:
            for (X = X.trim(), oe = X.charCodeAt(0), ie = 1, ke = ++se; se < gt; ) {
              switch (J = G.charCodeAt(se)) {
                case 123:
                  ie++;
                  break;
                case 125:
                  ie--;
                  break;
                case 47:
                  switch (J = G.charCodeAt(se + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (Ee = se + 1; Ee < tt; ++Ee)
                          switch (G.charCodeAt(Ee)) {
                            case 47:
                              if (J === 42 && G.charCodeAt(Ee - 1) === 42 && se + 2 !== Ee) {
                                se = Ee + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (J === 47) {
                                se = Ee + 1;
                                break e;
                              }
                          }
                        se = Ee;
                      }
                  }
                  break;
                case 91:
                  J++;
                case 40:
                  J++;
                case 34:
                case 39:
                  for (; se++ < tt && G.charCodeAt(se) !== J; )
                    ;
              }
              if (ie === 0) break;
              se++;
            }
            switch (ie = G.substring(ke, se), oe === 0 && (oe = (X = X.replace(m, "").trim()).charCodeAt(0)), oe) {
              case 64:
                switch (0 < ve && (X = X.replace(I, "")), J = X.charCodeAt(1), J) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    ve = L;
                    break;
                  default:
                    ve = st;
                }
                if (ie = t(L, ve, ie, J, v + 1), ke = ie.length, 0 < Pe && (ve = r(st, X, Je), qe = c(3, ie, ve, L, Ie, ge, ke, J, v, H), X = ve.join(""), qe !== void 0 && (ke = (ie = qe.trim()).length) === 0 && (J = 0, ie = "")), 0 < ke) switch (J) {
                  case 115:
                    X = X.replace(ae, l);
                  case 100:
                  case 109:
                  case 45:
                    ie = X + "{" + ie + "}";
                    break;
                  case 107:
                    X = X.replace(D, "$1 $2"), ie = X + "{" + ie + "}", ie = me === 1 || me === 2 && o("@" + ie, 3) ? "@-webkit-" + ie + "@" + ie : "@" + ie;
                    break;
                  default:
                    ie = X + ie, H === 112 && (ie = (he += ie, ""));
                }
                else ie = "";
                break;
              default:
                ie = t(L, r(L, X, Je), ie, H, v + 1);
            }
            rt += ie, ie = Je = ve = Ee = oe = 0, X = "", J = G.charCodeAt(++se);
            break;
          case 125:
          case 59:
            if (X = (0 < ve ? X.replace(I, "") : X).trim(), 1 < (ke = X.length)) switch (Ee === 0 && (oe = X.charCodeAt(0), oe === 45 || 96 < oe && 123 > oe) && (ke = (X = X.replace(" ", ":")).length), 0 < Pe && (qe = c(1, X, L, q, Ie, ge, he.length, H, v, H)) !== void 0 && (ke = (X = qe.trim()).length) === 0 && (X = "\0\0"), oe = X.charCodeAt(0), J = X.charCodeAt(1), oe) {
              case 0:
                break;
              case 64:
                if (J === 105 || J === 99) {
                  yt += X + G.charAt(se);
                  break;
                }
              default:
                X.charCodeAt(ke - 1) !== 58 && (he += a(X, oe, J, X.charCodeAt(2)));
            }
            Je = ve = Ee = oe = 0, X = "", J = G.charCodeAt(++se);
        }
      }
      switch (J) {
        case 13:
        case 10:
          P === 47 ? P = 0 : 1 + oe === 0 && H !== 107 && 0 < X.length && (ve = 1, X += "\0"), 0 < Pe * Xe && c(0, X, L, q, Ie, ge, he.length, H, v, H), ge = 1, Ie++;
          break;
        case 59:
        case 125:
          if (P + re + ce + te === 0) {
            ge++;
            break;
          }
        default:
          switch (ge++, Ce = G.charAt(se), J) {
            case 9:
            case 32:
              if (re + te + P === 0) switch (fe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Ce = "";
                  break;
                default:
                  J !== 32 && (Ce = " ");
              }
              break;
            case 0:
              Ce = "\\0";
              break;
            case 12:
              Ce = "\\f";
              break;
            case 11:
              Ce = "\\v";
              break;
            case 38:
              re + P + te === 0 && (ve = Je = 1, Ce = "\f" + Ce);
              break;
            case 108:
              if (re + P + te + Oe === 0 && 0 < Ee) switch (se - Ee) {
                case 2:
                  fe === 112 && G.charCodeAt(se - 3) === 58 && (Oe = fe);
                case 8:
                  be === 111 && (Oe = be);
              }
              break;
            case 58:
              re + P + te === 0 && (Ee = se);
              break;
            case 44:
              P + ce + re + te === 0 && (ve = 1, Ce += "\r");
              break;
            case 34:
            case 39:
              P === 0 && (re = re === J ? 0 : re === 0 ? J : re);
              break;
            case 91:
              re + P + ce === 0 && te++;
              break;
            case 93:
              re + P + ce === 0 && te--;
              break;
            case 41:
              re + P + te === 0 && ce--;
              break;
            case 40:
              if (re + P + te === 0) {
                if (oe === 0) switch (2 * fe + 3 * be) {
                  case 533:
                    break;
                  default:
                    oe = 1;
                }
                ce++;
              }
              break;
            case 64:
              P + ce + re + te + Ee + ie === 0 && (ie = 1);
              break;
            case 42:
            case 47:
              if (!(0 < re + te + ce)) switch (P) {
                case 0:
                  switch (2 * J + 3 * G.charCodeAt(se + 1)) {
                    case 235:
                      P = 47;
                      break;
                    case 220:
                      ke = se, P = 42;
                  }
                  break;
                case 42:
                  J === 47 && fe === 42 && ke + 2 !== se && (G.charCodeAt(ke + 2) === 33 && (he += G.substring(ke, se + 1)), Ce = "", P = 0);
              }
          }
          P === 0 && (X += Ce);
      }
      be = fe, fe = J, se++;
    }
    if (ke = he.length, 0 < ke) {
      if (ve = L, 0 < Pe && (qe = c(2, he, ve, q, Ie, ge, ke, H, v, H), qe !== void 0 && (he = qe).length === 0)) return yt + he + rt;
      if (he = ve.join(",") + "{" + he + "}", me * Oe !== 0) {
        switch (me !== 2 || o(he, 2) || (Oe = 0), Oe) {
          case 111:
            he = he.replace(B, ":-moz-$1") + he;
            break;
          case 112:
            he = he.replace(F, "::-webkit-input-$1") + he.replace(F, "::-moz-$1") + he.replace(F, ":-ms-input-$1") + he;
        }
        Oe = 0;
      }
    }
    return yt + he + rt;
  }
  function r(q, L, G) {
    var H = L.trim().split(E);
    L = H;
    var v = H.length, te = q.length;
    switch (te) {
      case 0:
      case 1:
        var P = 0;
        for (q = te === 0 ? "" : q[0] + " "; P < v; ++P)
          L[P] = n(q, L[P], G).trim();
        break;
      default:
        var ce = P = 0;
        for (L = []; P < v; ++P)
          for (var re = 0; re < te; ++re)
            L[ce++] = n(q[re] + " ", H[P], G).trim();
    }
    return L;
  }
  function n(q, L, G) {
    var H = L.charCodeAt(0);
    switch (33 > H && (H = (L = L.trim()).charCodeAt(0)), H) {
      case 38:
        return L.replace(N, "$1" + q.trim());
      case 58:
        return q.trim() + L.replace(N, "$1" + q.trim());
      default:
        if (0 < 1 * G && 0 < L.indexOf("\f")) return L.replace(N, (q.charCodeAt(0) === 58 ? "" : "$1") + q.trim());
    }
    return q + L;
  }
  function a(q, L, G, H) {
    var v = q + ";", te = 2 * L + 3 * G + 4 * H;
    if (te === 944) {
      q = v.indexOf(":", 9) + 1;
      var P = v.substring(q, v.length - 1).trim();
      return P = v.substring(0, q).trim() + P + ";", me === 1 || me === 2 && o(P, 1) ? "-webkit-" + P + P : P;
    }
    if (me === 0 || me === 2 && !o(v, 1)) return v;
    switch (te) {
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
        if (0 < v.indexOf("image-set(", 11)) return v.replace(ue, "$1-webkit-$2") + v;
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
        return P = v.substring(v.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + P + "-webkit-" + v + "-ms-flex-pack" + P + v;
      case 1005:
        return C.test(v) ? v.replace(U, ":-webkit-") + v.replace(U, ":-moz-") + v : v;
      case 1e3:
        switch (P = v.substring(13).trim(), L = P.indexOf("-") + 1, P.charCodeAt(0) + P.charCodeAt(L)) {
          case 226:
            P = v.replace(R, "tb");
            break;
          case 232:
            P = v.replace(R, "tb-rl");
            break;
          case 220:
            P = v.replace(R, "lr");
            break;
          default:
            return v;
        }
        return "-webkit-" + v + "-ms-" + P + v;
      case 1017:
        if (v.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (L = (v = q).length - 10, P = (v.charCodeAt(L) === 33 ? v.substring(0, L) : v).substring(q.indexOf(":", 7) + 1).trim(), te = P.charCodeAt(0) + (P.charCodeAt(7) | 0)) {
          case 203:
            if (111 > P.charCodeAt(8)) break;
          case 115:
            v = v.replace(P, "-webkit-" + P) + ";" + v;
            break;
          case 207:
          case 102:
            v = v.replace(P, "-webkit-" + (102 < te ? "inline-" : "") + "box") + ";" + v.replace(P, "-webkit-" + P) + ";" + v.replace(P, "-ms-" + P + "box") + ";" + v;
        }
        return v + ";";
      case 938:
        if (v.charCodeAt(5) === 45) switch (v.charCodeAt(6)) {
          case 105:
            return P = v.replace("-items", ""), "-webkit-" + v + "-webkit-box-" + P + "-ms-flex-" + P + v;
          case 115:
            return "-webkit-" + v + "-ms-flex-item-" + v.replace(Z, "") + v;
          default:
            return "-webkit-" + v + "-ms-flex-line-pack" + v.replace("align-content", "").replace(Z, "") + v;
        }
        break;
      case 973:
      case 989:
        if (v.charCodeAt(3) !== 45 || v.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (we.test(q) === !0) return (P = q.substring(q.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(q.replace("stretch", "fill-available"), L, G, H).replace(":fill-available", ":stretch") : v.replace(P, "-webkit-" + P) + v.replace(P, "-moz-" + P.replace("fill-", "")) + v;
        break;
      case 962:
        if (v = "-webkit-" + v + (v.charCodeAt(5) === 102 ? "-ms-" + v : "") + v, G + H === 211 && v.charCodeAt(13) === 105 && 0 < v.indexOf("transform", 10)) return v.substring(0, v.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + v;
    }
    return v;
  }
  function o(q, L) {
    var G = q.indexOf(L === 1 ? ":" : "{"), H = q.substring(0, L !== 3 ? G : 10);
    return G = q.substring(G + 1, q.length - 1), Ge(L !== 2 ? H : H.replace(le, "$1"), G, L);
  }
  function l(q, L) {
    var G = a(L, L.charCodeAt(0), L.charCodeAt(1), L.charCodeAt(2));
    return G !== L + ";" ? G.replace(de, " or ($1)").substring(4) : "(" + L + ")";
  }
  function c(q, L, G, H, v, te, P, ce, re, oe) {
    for (var J = 0, fe = L, be; J < Pe; ++J)
      switch (be = Ue[J].call(y, q, fe, G, H, v, te, P, ce, re, oe)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          fe = be;
      }
    if (fe !== L) return fe;
  }
  function h(q) {
    switch (q) {
      case void 0:
      case null:
        Pe = Ue.length = 0;
        break;
      default:
        if (typeof q == "function") Ue[Pe++] = q;
        else if (typeof q == "object") for (var L = 0, G = q.length; L < G; ++L)
          h(q[L]);
        else Xe = !!q | 0;
    }
    return h;
  }
  function d(q) {
    return q = q.prefix, q !== void 0 && (Ge = null, q ? typeof q != "function" ? me = 1 : (me = 2, Ge = q) : me = 0), d;
  }
  function y(q, L) {
    var G = q;
    if (33 > G.charCodeAt(0) && (G = G.trim()), pe = G, G = [pe], 0 < Pe) {
      var H = c(-1, L, G, G, Ie, ge, 0, 0, 0, 0);
      H !== void 0 && typeof H == "string" && (L = H);
    }
    var v = t(st, G, L, 0, 0);
    return 0 < Pe && (H = c(-2, v, G, G, Ie, ge, v.length, 0, 0, 0), H !== void 0 && (v = H)), pe = "", Oe = 0, ge = Ie = 1, v;
  }
  var m = /^\0+/g, I = /[\0\r\f]/g, U = /: */g, C = /zoo|gra/, w = /([,: ])(transform)/g, E = /,\r+?/g, N = /([\t\r\n ])*\f?&/g, D = /@(k\w+)\s*(\S*)\s*/, F = /::(place)/g, B = /:(read-only)/g, R = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, Z = /-self|flex-/g, le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, we = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, ge = 1, Ie = 1, Oe = 0, me = 1, st = [], Ue = [], Pe = 0, Ge = null, Xe = 0, pe = "";
  return y.use = h, y.set = d, e !== void 0 && d(e), y;
}
var Jp = {
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
function Xp(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Kp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, el = /* @__PURE__ */ Xp(
  function(e) {
    return Kp.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oc = { exports: {} }, Ye = {}, tl;
function $p() {
  if (tl) return Ye;
  tl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, I = e ? Symbol.for("react.suspense_list") : 60120, U = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, N = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function F(R) {
    if (typeof R == "object" && R !== null) {
      var ae = R.$$typeof;
      switch (ae) {
        case t:
          switch (R = R.type, R) {
            case h:
            case d:
            case n:
            case o:
            case a:
            case m:
              return R;
            default:
              switch (R = R && R.$$typeof, R) {
                case c:
                case y:
                case C:
                case U:
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
  function B(R) {
    return F(R) === d;
  }
  return Ye.AsyncMode = h, Ye.ConcurrentMode = d, Ye.ContextConsumer = c, Ye.ContextProvider = l, Ye.Element = t, Ye.ForwardRef = y, Ye.Fragment = n, Ye.Lazy = C, Ye.Memo = U, Ye.Portal = r, Ye.Profiler = o, Ye.StrictMode = a, Ye.Suspense = m, Ye.isAsyncMode = function(R) {
    return B(R) || F(R) === h;
  }, Ye.isConcurrentMode = B, Ye.isContextConsumer = function(R) {
    return F(R) === c;
  }, Ye.isContextProvider = function(R) {
    return F(R) === l;
  }, Ye.isElement = function(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }, Ye.isForwardRef = function(R) {
    return F(R) === y;
  }, Ye.isFragment = function(R) {
    return F(R) === n;
  }, Ye.isLazy = function(R) {
    return F(R) === C;
  }, Ye.isMemo = function(R) {
    return F(R) === U;
  }, Ye.isPortal = function(R) {
    return F(R) === r;
  }, Ye.isProfiler = function(R) {
    return F(R) === o;
  }, Ye.isStrictMode = function(R) {
    return F(R) === a;
  }, Ye.isSuspense = function(R) {
    return F(R) === m;
  }, Ye.isValidElementType = function(R) {
    return typeof R == "string" || typeof R == "function" || R === n || R === d || R === o || R === a || R === m || R === I || typeof R == "object" && R !== null && (R.$$typeof === C || R.$$typeof === U || R.$$typeof === l || R.$$typeof === c || R.$$typeof === y || R.$$typeof === E || R.$$typeof === N || R.$$typeof === D || R.$$typeof === w);
  }, Ye.typeOf = F, Ye;
}
Oc.exports = $p();
var Zp = Oc.exports, Ei = Zp, eh = {
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
}, th = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, rh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Lc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ki = {};
ki[Ei.ForwardRef] = rh;
ki[Ei.Memo] = Lc;
function rl(e) {
  return Ei.isMemo(e) ? Lc : ki[e.$$typeof] || eh;
}
var nh = Object.defineProperty, ah = Object.getOwnPropertyNames, nl = Object.getOwnPropertySymbols, oh = Object.getOwnPropertyDescriptor, ih = Object.getPrototypeOf, al = Object.prototype;
function Pc(e, t, r) {
  if (typeof t != "string") {
    if (al) {
      var n = ih(t);
      n && n !== al && Pc(e, n, r);
    }
    var a = ah(t);
    nl && (a = a.concat(nl(t)));
    for (var o = rl(e), l = rl(t), c = 0; c < a.length; ++c) {
      var h = a[c];
      if (!th[h] && !(r && r[h]) && !(l && l[h]) && !(o && o[h])) {
        var d = oh(t, h);
        try {
          nh(e, h, d);
        } catch {
        }
      }
    }
  }
  return e;
}
var sh = Pc;
const lh = /* @__PURE__ */ Si(sh);
var xt = { env: { NODE_ENV: "production" } };
function Cr() {
  return (Cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }).apply(this, arguments);
}
var ol = function(e, t) {
  for (var r = [e[0]], n = 0, a = t.length; n < a; n += 1) r.push(t[n], e[n + 1]);
  return r;
}, ti = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !_c.typeOf(e);
}, Ma = Object.freeze([]), Dr = Object.freeze({});
function Yn(e) {
  return typeof e == "function";
}
function il(e) {
  return e.displayName || e.name || "Component";
}
function Ci(e) {
  return e && typeof e.styledComponentId == "string";
}
var cn = typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_ATTR || xt.env.SC_ATTR) || "data-styled", Ti = typeof window < "u" && "HTMLElement" in window, ch = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof xt < "u" && xt.env !== void 0 && (xt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? xt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && xt.env.REACT_APP_SC_DISABLE_SPEEDY : xt.env.SC_DISABLE_SPEEDY !== void 0 && xt.env.SC_DISABLE_SPEEDY !== "" ? xt.env.SC_DISABLE_SPEEDY !== "false" && xt.env.SC_DISABLE_SPEEDY : xt.env.NODE_ENV !== "production"));
function Kn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var uh = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var n = 0, a = 0; a < r; a++) n += this.groupSizes[a];
    return n;
  }, t.insertRules = function(r, n) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, o = a.length, l = o; r >= l; ) (l <<= 1) < 0 && Kn(16, "" + r);
      this.groupSizes = new Uint32Array(l), this.groupSizes.set(a), this.length = l;
      for (var c = o; c < l; c++) this.groupSizes[c] = 0;
    }
    for (var h = this.indexOfGroup(r + 1), d = 0, y = n.length; d < y; d++) this.tag.insertRule(h, n[d]) && (this.groupSizes[r]++, h++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var n = this.groupSizes[r], a = this.indexOfGroup(r), o = a + n;
      this.groupSizes[r] = 0;
      for (var l = a; l < o; l++) this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var n = "";
    if (r >= this.length || this.groupSizes[r] === 0) return n;
    for (var a = this.groupSizes[r], o = this.indexOfGroup(r), l = o + a, c = o; c < l; c++) n += this.tag.getRule(c) + `/*!sc*/
`;
    return n;
  }, e;
}(), _a = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Hn = 1, xa = function(e) {
  if (_a.has(e)) return _a.get(e);
  for (; Fa.has(Hn); ) Hn++;
  var t = Hn++;
  return _a.set(e, t), Fa.set(t, e), t;
}, dh = function(e) {
  return Fa.get(e);
}, fh = function(e, t) {
  t >= Hn && (Hn = t + 1), _a.set(e, t), Fa.set(t, e);
}, ph = "style[" + cn + '][data-styled-version="5.3.11"]', hh = new RegExp("^" + cn + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), gh = function(e, t, r) {
  for (var n, a = r.split(","), o = 0, l = a.length; o < l; o++) (n = a[o]) && e.registerName(t, n);
}, mh = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), n = [], a = 0, o = r.length; a < o; a++) {
    var l = r[a].trim();
    if (l) {
      var c = l.match(hh);
      if (c) {
        var h = 0 | parseInt(c[1], 10), d = c[2];
        h !== 0 && (fh(d, h), gh(e, d, c[3]), e.getTag().insertRules(h, n)), n.length = 0;
      } else n.push(l);
    }
  }
}, bh = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Nc = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), a = function(c) {
    for (var h = c.childNodes, d = h.length; d >= 0; d--) {
      var y = h[d];
      if (y && y.nodeType === 1 && y.hasAttribute(cn)) return y;
    }
  }(r), o = a !== void 0 ? a.nextSibling : null;
  n.setAttribute(cn, "active"), n.setAttribute("data-styled-version", "5.3.11");
  var l = bh();
  return l && n.setAttribute("nonce", l), r.insertBefore(n, o), n;
}, yh = function() {
  function e(r) {
    var n = this.element = Nc(r);
    n.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet) return a.sheet;
      for (var o = document.styleSheets, l = 0, c = o.length; l < c; l++) {
        var h = o[l];
        if (h.ownerNode === a) return h;
      }
      Kn(17);
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
}(), wh = function() {
  function e(r) {
    var n = this.element = Nc(r);
    this.nodes = n.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, n) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(n), o = this.nodes[r];
      return this.element.insertBefore(a, o || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), vh = function() {
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
}(), sl = Ti, Ah = { isServer: !Ti, useCSSOMInjection: !ch }, Dc = function() {
  function e(r, n, a) {
    r === void 0 && (r = Dr), n === void 0 && (n = {}), this.options = Cr({}, Ah, {}, r), this.gs = n, this.names = new Map(a), this.server = !!r.isServer, !this.server && Ti && sl && (sl = !1, function(o) {
      for (var l = document.querySelectorAll(ph), c = 0, h = l.length; c < h; c++) {
        var d = l[c];
        d && d.getAttribute(cn) !== "active" && (mh(o, d), d.parentNode && d.parentNode.removeChild(d));
      }
    }(this));
  }
  e.registerId = function(r) {
    return xa(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, n) {
    return n === void 0 && (n = !0), new e(Cr({}, this.options, {}, r), this.gs, n && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (n = this.options).isServer, o = n.useCSSOMInjection, l = n.target, r = a ? new vh(l) : o ? new yh(l) : new wh(l), new uh(r)));
    var r, n, a, o, l;
  }, t.hasNameForId = function(r, n) {
    return this.names.has(r) && this.names.get(r).has(n);
  }, t.registerName = function(r, n) {
    if (xa(r), this.names.has(r)) this.names.get(r).add(n);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(n), this.names.set(r, a);
    }
  }, t.insertRules = function(r, n, a) {
    this.registerName(r, n), this.getTag().insertRules(xa(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(xa(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var n = r.getTag(), a = n.length, o = "", l = 0; l < a; l++) {
        var c = dh(l);
        if (c !== void 0) {
          var h = r.names.get(c), d = n.getGroup(l);
          if (h && d && h.size) {
            var y = cn + ".g" + l + '[id="' + c + '"]', m = "";
            h !== void 0 && h.forEach(function(I) {
              I.length > 0 && (m += I + ",");
            }), o += "" + d + y + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return o;
    }(this);
  }, e;
}(), Sh = /(a)(d)/gi, ll = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ri(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = ll(t % 52) + r;
  return (ll(t % 52) + r).replace(Sh, "$1-$2");
}
var rn = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Bc = function(e) {
  return rn(5381, e);
};
function xh(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Yn(r) && !Ci(r)) return !1;
  }
  return !0;
}
var Eh = Bc("5.3.11"), kh = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && xh(t), this.componentId = r, this.baseHash = rn(Eh, r), this.baseStyle = n, Dc.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var a = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, r, n)), this.isStatic && !n.hash) if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId)) o.push(this.staticRulesId);
    else {
      var l = un(this.rules, t, r, n).join(""), c = ri(rn(this.baseHash, l) >>> 0);
      if (!r.hasNameForId(a, c)) {
        var h = n(l, "." + c, void 0, a);
        r.insertRules(a, c, h);
      }
      o.push(c), this.staticRulesId = c;
    }
    else {
      for (var d = this.rules.length, y = rn(this.baseHash, n.hash), m = "", I = 0; I < d; I++) {
        var U = this.rules[I];
        if (typeof U == "string") m += U;
        else if (U) {
          var C = un(U, t, r, n), w = Array.isArray(C) ? C.join("") : C;
          y = rn(y, w + I), m += w;
        }
      }
      if (m) {
        var E = ri(y >>> 0);
        if (!r.hasNameForId(a, E)) {
          var N = n(m, "." + E, void 0, a);
          r.insertRules(a, E, N);
        }
        o.push(E);
      }
    }
    return o.join(" ");
  }, e;
}(), Ch = /^\s*\/\/.*$/gm, Th = [":", "[", ".", "#"];
function Rh(e) {
  var t, r, n, a, o = Dr, l = o.options, c = l === void 0 ? Dr : l, h = o.plugins, d = h === void 0 ? Ma : h, y = new Yp(c), m = [], I = /* @__PURE__ */ function(w) {
    function E(N) {
      if (N) try {
        w(N + "}");
      } catch {
      }
    }
    return function(N, D, F, B, R, ae, de, Z, le, we) {
      switch (N) {
        case 1:
          if (le === 0 && D.charCodeAt(0) === 64) return w(D + ";"), "";
          break;
        case 2:
          if (Z === 0) return D + "/*|*/";
          break;
        case 3:
          switch (Z) {
            case 102:
            case 112:
              return w(F[0] + D), "";
            default:
              return D + (we === 0 ? "/*|*/" : "");
          }
        case -2:
          D.split("/*|*/}").forEach(E);
      }
    };
  }(function(w) {
    m.push(w);
  }), U = function(w, E, N) {
    return E === 0 && Th.indexOf(N[r.length]) !== -1 || N.match(a) ? w : "." + t;
  };
  function C(w, E, N, D) {
    D === void 0 && (D = "&");
    var F = w.replace(Ch, ""), B = E && N ? N + " " + E + " { " + F + " }" : F;
    return t = D, r = E, n = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), y(N || !E ? "" : E, B);
  }
  return y.use([].concat(d, [function(w, E, N) {
    w === 2 && N.length && N[0].lastIndexOf(r) > 0 && (N[0] = N[0].replace(n, U));
  }, I, function(w) {
    if (w === -2) {
      var E = m;
      return m = [], E;
    }
  }])), C.hash = d.length ? d.reduce(function(w, E) {
    return E.name || Kn(15), rn(w, E.name);
  }, 5381).toString() : "", C;
}
var jc = ht.createContext();
jc.Consumer;
var Mc = ht.createContext(), Ih = (Mc.Consumer, new Dc()), ni = Rh();
function _h() {
  return fn(jc) || Ih;
}
function Oh() {
  return fn(Mc) || ni;
}
var Lh = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(a, o) {
      o === void 0 && (o = ni);
      var l = n.name + o.hash;
      a.hasNameForId(n.id, l) || a.insertRules(n.id, l, o(n.rules, l, "@keyframes"));
    }, this.toString = function() {
      return Kn(12, String(n.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ni), this.name + t.hash;
  }, e;
}(), Ph = /([A-Z])/, Nh = /([A-Z])/g, Dh = /^ms-/, Bh = function(e) {
  return "-" + e.toLowerCase();
};
function cl(e) {
  return Ph.test(e) ? e.replace(Nh, Bh).replace(Dh, "-ms-") : e;
}
var ul = function(e) {
  return e == null || e === !1 || e === "";
};
function un(e, t, r, n) {
  if (Array.isArray(e)) {
    for (var a, o = [], l = 0, c = e.length; l < c; l += 1) (a = un(e[l], t, r, n)) !== "" && (Array.isArray(a) ? o.push.apply(o, a) : o.push(a));
    return o;
  }
  if (ul(e)) return "";
  if (Ci(e)) return "." + e.styledComponentId;
  if (Yn(e)) {
    if (typeof (d = e) != "function" || d.prototype && d.prototype.isReactComponent || !t) return e;
    var h = e(t);
    return un(h, t, r, n);
  }
  var d;
  return e instanceof Lh ? r ? (e.inject(r, n), e.getName(n)) : e : ti(e) ? function y(m, I) {
    var U, C, w = [];
    for (var E in m) m.hasOwnProperty(E) && !ul(m[E]) && (Array.isArray(m[E]) && m[E].isCss || Yn(m[E]) ? w.push(cl(E) + ":", m[E], ";") : ti(m[E]) ? w.push.apply(w, y(m[E], E)) : w.push(cl(E) + ": " + (U = E, (C = m[E]) == null || typeof C == "boolean" || C === "" ? "" : typeof C != "number" || C === 0 || U in Jp || U.startsWith("--") ? String(C).trim() : C + "px") + ";"));
    return I ? [I + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var dl = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function jh(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return Yn(e) || ti(e) ? dl(un(ol(Ma, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : dl(un(ol(e, r)));
}
var Mh = function(e, t, r) {
  return r === void 0 && (r = Dr), e.theme !== r.theme && e.theme || t || r.theme;
}, Fh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Uh = /(^-|-$)/g;
function jo(e) {
  return e.replace(Fh, "-").replace(Uh, "");
}
var zh = function(e) {
  return ri(Bc(e) >>> 0);
};
function Ea(e) {
  return typeof e == "string" && xt.env.NODE_ENV === "production";
}
var ai = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Wh = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Hh(e, t, r) {
  var n = e[r];
  ai(t) && ai(n) ? Fc(n, t) : e[r] = t;
}
function Fc(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  for (var a = 0, o = r; a < o.length; a++) {
    var l = o[a];
    if (ai(l)) for (var c in l) Wh(c) && Hh(e, l[c], c);
  }
  return e;
}
var Uc = ht.createContext();
Uc.Consumer;
var Mo = {};
function zc(e, t, r) {
  var n = Ci(e), a = !Ea(e), o = t.attrs, l = o === void 0 ? Ma : o, c = t.componentId, h = c === void 0 ? function(D, F) {
    var B = typeof D != "string" ? "sc" : jo(D);
    Mo[B] = (Mo[B] || 0) + 1;
    var R = B + "-" + zh("5.3.11" + B + Mo[B]);
    return F ? F + "-" + R : R;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, y = d === void 0 ? function(D) {
    return Ea(D) ? "styled." + D : "Styled(" + il(D) + ")";
  }(e) : d, m = t.displayName && t.componentId ? jo(t.displayName) + "-" + t.componentId : t.componentId || h, I = n && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l, U = t.shouldForwardProp;
  n && e.shouldForwardProp && (U = t.shouldForwardProp ? function(D, F, B) {
    return e.shouldForwardProp(D, F, B) && t.shouldForwardProp(D, F, B);
  } : e.shouldForwardProp);
  var C, w = new kh(r, m, n ? e.componentStyle : void 0), E = w.isStatic && l.length === 0, N = function(D, F) {
    return function(B, R, ae, de) {
      var Z = B.attrs, le = B.componentStyle, we = B.defaultProps, ue = B.foldedComponentIds, ge = B.shouldForwardProp, Ie = B.styledComponentId, Oe = B.target, me = function(H, v, te) {
        H === void 0 && (H = Dr);
        var P = Cr({}, v, { theme: H }), ce = {};
        return te.forEach(function(re) {
          var oe, J, fe, be = re;
          for (oe in Yn(be) && (be = be(P)), be) P[oe] = ce[oe] = oe === "className" ? (J = ce[oe], fe = be[oe], J && fe ? J + " " + fe : J || fe) : be[oe];
        }), [P, ce];
      }(Mh(R, fn(Uc), we) || Dr, R, Z), st = me[0], Ue = me[1], Pe = function(H, v, te, P) {
        var ce = _h(), re = Oh(), oe = v ? H.generateAndInjectStyles(Dr, ce, re) : H.generateAndInjectStyles(te, ce, re);
        return oe;
      }(le, de, st), Ge = ae, Xe = Ue.$as || R.$as || Ue.as || R.as || Oe, pe = Ea(Xe), q = Ue !== R ? Cr({}, R, {}, Ue) : R, L = {};
      for (var G in q) G[0] !== "$" && G !== "as" && (G === "forwardedAs" ? L.as = q[G] : (ge ? ge(G, el, Xe) : !pe || el(G)) && (L[G] = q[G]));
      return R.style && Ue.style !== R.style && (L.style = Cr({}, R.style, {}, Ue.style)), L.className = Array.prototype.concat(ue, Ie, Pe !== Ie ? Pe : null, R.className, Ue.className).filter(Boolean).join(" "), L.ref = Ge, Ol(Xe, L);
    }(C, D, F, E);
  };
  return N.displayName = y, (C = ht.forwardRef(N)).attrs = I, C.componentStyle = w, C.displayName = y, C.shouldForwardProp = U, C.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Ma, C.styledComponentId = m, C.target = n ? e.target : e, C.withComponent = function(D) {
    var F = t.componentId, B = function(ae, de) {
      if (ae == null) return {};
      var Z, le, we = {}, ue = Object.keys(ae);
      for (le = 0; le < ue.length; le++) Z = ue[le], de.indexOf(Z) >= 0 || (we[Z] = ae[Z]);
      return we;
    }(t, ["componentId"]), R = F && F + "-" + (Ea(D) ? D : jo(il(D)));
    return zc(D, Cr({}, B, { attrs: I, componentId: R }), r);
  }, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(D) {
    this._foldedDefaultProps = n ? Fc({}, e.defaultProps, D) : D;
  } }), Object.defineProperty(C, "toString", { value: function() {
    return "." + C.styledComponentId;
  } }), a && lh(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), C;
}
var ir = function(e) {
  return function t(r, n, a) {
    if (a === void 0 && (a = Dr), !_c.isValidElementType(n)) return Kn(1, String(n));
    var o = function() {
      return r(n, a, jh.apply(void 0, arguments));
    };
    return o.withConfig = function(l) {
      return t(r, n, Cr({}, a, {}, l));
    }, o.attrs = function(l) {
      return t(r, n, Cr({}, a, { attrs: Array.prototype.concat(a.attrs, l).filter(Boolean) }));
    }, o;
  }(zc, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ir[e] = ir(e);
});
ir.div`
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
u.arrayOf(
  u.shape({
    text: u.string.isRequired,
    targetIdName: u.string.isRequired,
    icon: u.arrayOf(u.string)
  })
).isRequired, u.string.isRequired, u.bool;
function Xa(e) {
  var t = Object.entries(e).filter(function(r) {
    var n = r[1];
    return n != null;
  }).map(function(r) {
    var n = r[0], a = r[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(a)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var Qh = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
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
}(), qr = function() {
  return qr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, qr.apply(this, arguments);
}, Gh = function(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(l) {
      l(o);
    });
  }
  return new (r || (r = Promise))(function(o, l) {
    function c(y) {
      try {
        d(n.next(y));
      } catch (m) {
        l(m);
      }
    }
    function h(y) {
      try {
        d(n.throw(y));
      } catch (m) {
        l(m);
      }
    }
    function d(y) {
      y.done ? o(y.value) : a(y.value).then(c, h);
    }
    d((n = n.apply(e, [])).next());
  });
}, qh = function(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, l;
  return l = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function c(d) {
    return function(y) {
      return h([d, y]);
    };
  }
  function h(d) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, a && (o = d[0] & 2 ? a.return : d[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, d[1])).done) return o;
      switch (a = 0, o && (d = [d[0] & 2, o.value]), d[0]) {
        case 0:
        case 1:
          o = d;
          break;
        case 4:
          return r.label++, { value: d[1], done: !1 };
        case 5:
          r.label++, a = d[1], d = [0];
          continue;
        case 7:
          d = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            r = 0;
            continue;
          }
          if (d[0] === 3 && (!o || d[1] > o[0] && d[1] < o[3])) {
            r.label = d[1];
            break;
          }
          if (d[0] === 6 && r.label < o[1]) {
            r.label = o[1], o = d;
            break;
          }
          if (o && r.label < o[2]) {
            r.label = o[2], r.ops.push(d);
            break;
          }
          o[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      d = t.call(e, r);
    } catch (y) {
      d = [6, y], a = 0;
    } finally {
      n = o = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}, Wc = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}, Vh = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Yh = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, Jh = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Xh(e, t, r) {
  var n = t.height, a = t.width, o = Wc(t, ["height", "width"]), l = qr({ height: n, width: a, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, o), c = window.open(e, "", Object.keys(l).map(function(d) {
    return "".concat(d, "=").concat(l[d]);
  }).join(", "));
  if (r)
    var h = window.setInterval(function() {
      try {
        (c === null || c.closed) && (window.clearInterval(h), r(c));
      } catch (d) {
        console.error(d);
      }
    }, 1e3);
  return c;
}
var Kh = (
  /** @class */
  function(e) {
    Qh(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(n) {
        var a = r.props, o = a.onShareWindowClose, l = a.windowHeight, c = l === void 0 ? 400 : l, h = a.windowPosition, d = h === void 0 ? "windowCenter" : h, y = a.windowWidth, m = y === void 0 ? 550 : y, I = qr({ height: c, width: m }, d === "windowCenter" ? Yh(m, c) : Jh(m, c));
        Xh(n, I, o);
      }, r.handleClick = function(n) {
        return Gh(r, void 0, void 0, function() {
          var a, o, l, c, h, d, y, m, I, U;
          return qh(this, function(C) {
            switch (C.label) {
              case 0:
                return a = this.props, o = a.beforeOnClick, l = a.disabled, c = a.networkLink, h = a.onClick, d = a.url, y = a.openShareDialogOnClick, m = a.opts, I = c(d, m), l ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), o ? (U = o(), Vh(U) ? [4, U] : [3, 2]) : [3, 2]);
              case 1:
                C.sent(), C.label = 2;
              case 2:
                return y && this.openShareDialog(I), h && h(n, I), [
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
      var n = r.children, a = r.className, o = r.disabled, l = r.disabledStyle, c = r.forwardedRef;
      r.networkLink;
      var h = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var d = r.resetButtonStyle, y = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var m = Wc(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), I = Rr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!o,
        disabled: !!o
      }, a), U = qr(qr(d ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, y), o && l);
      return ht.createElement("button", qr({}, m, { "aria-label": m["aria-label"] || h, className: I, onClick: this.handleClick, ref: c, style: U }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Mu)
), Ua = function() {
  return Ua = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ua.apply(this, arguments);
};
function Ka(e, t, r, n) {
  function a(o, l) {
    var c = r(o), h = Ua({}, o), d = Object.keys(c);
    return d.forEach(function(y) {
      delete h[y];
    }), ht.createElement(Kh, Ua({}, n, h, { forwardedRef: l, networkName: e, networkLink: t, opts: r(o) }));
  }
  return a.displayName = "ShareButton-".concat(e), Ll(a);
}
function $h(e, t) {
  var r = t.subject, n = t.body, a = t.separator;
  return "mailto:" + Xa({ subject: r, body: n ? n + a + e : e });
}
Ka("email", $h, function(e) {
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
var Zh = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o]);
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
}(), eg = (
  /** @class */
  function(e) {
    Zh(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function Qn(e, t) {
  if (!e)
    throw new eg(t);
}
function tg(e, t) {
  var r = t.quote, n = t.hashtag;
  return Qn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Xa({
    u: e,
    quote: r,
    hashtag: n
  });
}
Ka("facebook", tg, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function rg(e, t) {
  var r = t.title, n = t.summary, a = t.source;
  return Qn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + Xa({ url: e, mini: "true", title: r, summary: n, source: a });
}
Ka("linkedin", rg, function(e) {
  var t = e.title, r = e.summary, n = e.source;
  return { title: t, summary: r, source: n };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function ng(e, t) {
  var r = t.title, n = t.via, a = t.hashtags, o = a === void 0 ? [] : a, l = t.related, c = l === void 0 ? [] : l;
  return Qn(e, "twitter.url"), Qn(Array.isArray(o), "twitter.hashtags is not an array"), Qn(Array.isArray(c), "twitter.related is not an array"), "https://twitter.com/share" + Xa({
    url: e,
    text: r,
    via: n,
    hashtags: o.length > 0 ? o.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
Ka("twitter", ng, function(e) {
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
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
var ag = (typeof window > "u" ? "undefined" : oi(window)) === "object" && window.Element || function() {
};
function og(e, t, r) {
  if (!(e[t] instanceof ag))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
u.oneOfType([u.string, u.func, og, u.shape({
  current: u.any
})]);
u.oneOfType([u.func, u.string, u.shape({
  $$typeof: u.symbol,
  render: u.func
}), u.arrayOf(u.oneOfType([u.func, u.string, u.shape({
  $$typeof: u.symbol,
  render: u.func
})]))]);
u.string, u.node, u.string, u.object, u.string;
u.bool, u.string, u.object;
ir.div`
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
ir.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
u.oneOf(["event", "news"]), u.string.isRequired, u.string.isRequired, u.string.isRequired, u.string.isRequired, u.string, u.string.isRequired, u.string, u.string, u.arrayOf(
  u.shape({
    title: u.string,
    url: u.string,
    active: u.bool
  })
), u.string, u.string, u.string, u.string, u.string, u.string;
u.oneOf(["white", "gray", "black"]), u.arrayOf(u.string), u.oneOfType([
  u.object,
  u.func,
  u.string
]), u.func, u.string, u.oneOf(["large", "small"]), u.string;
const ig = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ri = ({
  label: e,
  cardTitle: t,
  gaData: r,
  ariaLabel: n,
  color: a,
  disabled: o,
  element: l = "button",
  innerRef: c,
  href: h,
  onClick: d,
  ...y
}) => {
  const m = Rr("btn", "btn-tag", {
    "btn-tag-alt-white": a === "white",
    "btn-tag-alt-gray": a === "gray",
    "btn-tag-alt-dark": a === "dark",
    disabled: o
  });
  let I = l;
  return h && l === "button" && (I = "a"), /* @__PURE__ */ K.jsx(
    ln,
    {
      gaData: {
        ...ig,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ K.jsx(
        I,
        {
          type: I === "button" && d ? "button" : void 0,
          ...y,
          className: m,
          href: h,
          ref: c,
          onClick: d,
          "aria-label": n,
          children: e
        }
      )
    }
  );
};
Ri.propTypes = {
  /**
    Button tag label
  */
  label: u.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: u.string,
  /**
   * Google Analytics event data
   */
  gaData: xi,
  /**
    ARIA label for accessibility
  */
  ariaLabel: u.string,
  /**
    Button background color
  */
  color: u.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: u.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: u.oneOfType([
    u.func,
    u.string,
    u.shape({ $$typeof: u.symbol, render: u.func }),
    u.arrayOf(
      u.oneOfType([
        u.func,
        u.string,
        u.shape({ $$typeof: u.symbol, render: u.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: u.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: u.oneOfType([
    u.object,
    u.func,
    u.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: u.func
};
Ri.defaultProps = {
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
const Hc = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: n = "lazy",
  decoding: a = "async",
  dataTestId: o,
  fetchPriority: l = "auto",
  width: c,
  height: h,
  cardLink: d,
  title: y,
  caption: m,
  captionTitle: I,
  border: U,
  dropShadow: C
}) => {
  const w = {
    src: e,
    alt: t,
    loading: n,
    decoding: a,
    fetchpriority: l,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: vp(r) },
    ...o && { "data-testid": o },
    ...c && { width: c },
    ...h && { height: h }
  }, E = Rr("uds-img", {
    borderless: !U,
    "uds-img-drop-shadow": C
  }), N = (F) => {
    const B = F ? `${w.className} ${F}` : w.className;
    return d ? /* @__PURE__ */ K.jsxs("a", { href: d, children: [
      /* @__PURE__ */ K.jsx("img", { ...w, className: B }),
      /* @__PURE__ */ K.jsx("span", { className: "visually-hidden", children: y })
    ] }) : (
      // eslint-disable-next-line jsx-a11y/alt-text, react/jsx-props-no-spreading
      /* @__PURE__ */ K.jsx("img", { ...w, className: B })
    );
  }, D = () => /* @__PURE__ */ K.jsx("div", { className: E, children: /* @__PURE__ */ K.jsxs("figure", { className: "figure uds-figure", children: [
    N(),
    m && /* @__PURE__ */ K.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      I && /* @__PURE__ */ K.jsx("h3", { children: I }),
      /* @__PURE__ */ K.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: tn(m)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ K.jsx(K.Fragment, { children: m ? D() : N(E) });
};
Hc.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: u.string.isRequired,
  /**
   * Image alt text
   */
  alt: u.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: u.arrayOf(u.string),
  /**
   * Image loading mode
   */
  loading: u.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: u.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: u.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: u.string,
  /**
   * Height of the image
   */
  height: u.string,
  dataTestId: u.string,
  cardLink: u.string,
  title: u.string,
  caption: u.string,
  captionTitle: u.string,
  border: u.bool,
  dropShadow: u.bool
};
const sg = ir.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, lg = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), cg = (e) => !e.startsWith("https://") && !e.startsWith("http://") && lg(e) ? `mailto:${e}` : e, ug = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Gr = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: o,
  icon: l,
  body: c,
  eventFormat: h,
  eventLocation: d,
  eventTime: y,
  buttons: m,
  linkLabel: I,
  linkUrl: U,
  tags: C,
  showBorders: w,
  cardLink: E
}) => /* @__PURE__ */ K.jsx(
  Ii,
  {
    type: e,
    width: t,
    horizontal: r,
    image: n,
    imageAltText: a,
    title: o,
    icon: l,
    body: c,
    eventFormat: h,
    eventLocation: d,
    eventTime: y,
    buttons: m,
    linkLabel: I,
    linkUrl: U,
    tags: C,
    showBorders: w,
    cardLink: E
  }
);
Gr.propTypes = {
  /**
   * Type of card
   */
  type: u.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: u.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: u.bool,
  /**
   * Card title
   */
  title: u.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: u.arrayOf(u.string),
  /**
   * Card body content
   */
  body: u.string,
  /**
   * Event info format
   */
  eventFormat: u.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: u.string,
  /**
   * Event start time
   */
  eventTime: u.string,
  /**
   * Card header image
   */
  image: u.string,
  /**
   * Card header image alt text
   */
  imageAltText: u.string,
  /**
   * Buttons
   */
  buttons: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: u.arrayOf(u.string),
      href: u.string,
      label: u.string,
      onClick: u.func,
      size: u.oneOf(["default", "small", "xsmall"]),
      target: u.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: u.string,
  linkUrl: u.string,
  /**
   * Tags
   */
  tags: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["white", "gray", "dark"]),
      href: u.string,
      label: u.string,
      onClick: u.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: u.bool,
  /**
   * Card link
   */
  cardLink: u.string
};
Gr.defaultProps = {
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
const Ii = ({
  type: e,
  width: t,
  horizontal: r,
  image: n,
  imageAltText: a,
  title: o,
  icon: l,
  body: c,
  eventFormat: h,
  eventLocation: d,
  eventTime: y,
  buttons: m,
  linkLabel: I,
  linkUrl: U,
  tags: C,
  showBorders: w,
  cardLink: E
}) => {
  const N = Rr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  });
  return /* @__PURE__ */ K.jsx(K.Fragment, { children: /* @__PURE__ */ K.jsxs(sg, { className: N, "data-testid": "card-container", children: [
    !!n && /* @__PURE__ */ K.jsx(
      Hc,
      {
        src: n,
        alt: a,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: E,
        title: o
      }
    ),
    !n && l && /* @__PURE__ */ K.jsx(
      "i",
      {
        className: `${l == null ? void 0 : l[0]} fa-${l == null ? void 0 : l[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ K.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ K.jsx(
      za,
      {
        type: e,
        body: c,
        eventFormat: h,
        eventLocation: d,
        eventTime: y,
        title: o,
        buttons: m,
        linkLabel: I,
        linkUrl: U,
        tags: C,
        cardLink: E
      }
    ) }) : /* @__PURE__ */ K.jsx(
      za,
      {
        type: e,
        body: c,
        eventFormat: h,
        eventLocation: d,
        eventTime: y,
        title: o,
        buttons: m,
        linkLabel: I,
        linkUrl: U,
        tags: C,
        cardLink: E
      }
    )
  ] }) });
};
Ii.propTypes = {
  type: u.oneOf(["default", "degree", "event", "news", "story"]),
  width: u.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: u.bool,
  title: u.string.isRequired,
  icon: u.arrayOf(u.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: u.string,
  eventFormat: u.oneOf(["stack", "inline"]),
  eventLocation: u.string,
  eventTime: u.string,
  image: u.string,
  imageAltText: u.string,
  buttons: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: u.arrayOf(u.string),
      href: u.string,
      label: u.string,
      onClick: u.func,
      size: u.oneOf(["default", "small", "xsmall"]),
      target: u.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: u.string,
  linkUrl: u.string,
  tags: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["white", "gray", "dark"]),
      href: u.string,
      label: u.string,
      onClick: u.func
    })
  ),
  showBorders: u.bool,
  cardLink: u.string
};
Ii.defaultProps = {
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
const za = ({
  type: e,
  body: t,
  eventFormat: r,
  eventLocation: n,
  eventTime: a,
  title: o,
  buttons: l,
  linkLabel: c,
  linkUrl: h,
  tags: d,
  cardLink: y
}) => /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
  !!o && /* @__PURE__ */ K.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ K.jsx("h3", { className: "card-title", children: y ? /* @__PURE__ */ K.jsx("a", { href: y, children: o }) : o }) }),
  !!t && /* @__PURE__ */ K.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ K.jsx("div", { dangerouslySetInnerHTML: tn(t) }) }),
  e === "event" && (a || n) && /* @__PURE__ */ K.jsx(
    _i,
    {
      eventFormat: r,
      eventTime: a,
      eventLocation: n
    }
  ),
  l && /* @__PURE__ */ K.jsx("div", { className: "card-buttons", children: l.map((m) => /* @__PURE__ */ K.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ K.jsx(
        Er,
        {
          ariaLabel: m.ariaLabel,
          color: m.color,
          icon: m.icon,
          href: m.href,
          label: m.label,
          onClick: m.onClick,
          size: m.size,
          target: m.target,
          cardTitle: o
        }
      )
    },
    `${m.label}-${m.href}`
  )) }),
  h && c && /* @__PURE__ */ K.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ K.jsx(
    ln,
    {
      gaData: {
        ...ug,
        section: o,
        text: c
      },
      children: /* @__PURE__ */ K.jsx("a", { href: cg(h), children: c })
    }
  ) }),
  d && /* @__PURE__ */ K.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: d.map((m) => (
    // @ts-ignore
    /* @__PURE__ */ K.jsx(
      Ri,
      {
        ariaLabel: m.ariaLabel,
        color: m.color,
        href: m.href,
        label: m.label,
        onClick: m.onClick,
        cardTitle: o
      },
      `${m.label}-${m.href}`
    )
  )) })
] });
za.propTypes = {
  type: u.oneOf(["default", "degree", "event", "news", "story"]),
  body: u.string,
  eventFormat: u.oneOf(["stack", "inline"]),
  eventLocation: u.string,
  eventTime: u.string,
  title: u.string.isRequired,
  buttons: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: u.arrayOf(u.string),
      href: u.string,
      label: u.string,
      onClick: u.func,
      size: u.oneOf(["default", "small", "xsmall"]),
      target: u.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: u.string,
  linkUrl: u.string,
  tags: u.arrayOf(
    u.shape({
      ariaLabel: u.string,
      color: u.oneOf(["white", "gray", "dark"]),
      href: u.string,
      label: u.string,
      onClick: u.func
    })
  ),
  cardLink: u.string
};
za.defaultProps = {
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
const _i = ({ eventFormat: e, eventTime: t, eventLocation: r }) => e === "inline" ? /* @__PURE__ */ K.jsxs("div", { className: "card-event-details", children: [
  t && /* @__PURE__ */ K.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ K.jsx("div", { children: /* @__PURE__ */ K.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ K.jsx("div", { dangerouslySetInnerHTML: tn(t) })
  ] }),
  r && /* @__PURE__ */ K.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ K.jsx("div", { children: /* @__PURE__ */ K.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ K.jsx(
      "div",
      {
        dangerouslySetInnerHTML: tn(r)
      }
    )
  ] })
] }) : /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
  t && /* @__PURE__ */ K.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ K.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ K.jsx("div", { children: /* @__PURE__ */ K.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ K.jsx("div", { dangerouslySetInnerHTML: tn(t) })
  ] }) }),
  r && /* @__PURE__ */ K.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ K.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ K.jsx("div", { children: /* @__PURE__ */ K.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ K.jsx("span", { children: /* @__PURE__ */ K.jsx(
      "div",
      {
        dangerouslySetInnerHTML: tn(r)
      }
    ) })
  ] }) })
] });
_i.propTypes = {
  eventFormat: u.oneOf(["stack", "inline"]),
  eventLocation: u.string,
  eventTime: u.string
};
_i.defaultProps = {
  eventFormat: "stack",
  eventLocation: "",
  eventTime: ""
};
ir.div`
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
ir.section``;
Fu(null);
u.element, u.element, u.number, u.func, u.func, u.string;
const dg = u.shape({
  color: u.oneOf(["white", "dark"]),
  text: u.string
}), fg = u.shape({
  color: u.oneOf(["gold", "maroon", "gray", "dark"]),
  text: u.string
});
u.shape({
  color: u.oneOf(["gold", "maroon", "gray", "dark"]),
  text: u.string,
  size: u.string
});
const pg = u.shape({
  url: u.string,
  filters: u.string
});
u.shape({
  header: dg,
  ctaButton: fg,
  dataSource: pg,
  maxItems: u.number
});
ir.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;
u.element;
ir.img`
  width: 100%;
`;
u.oneOf(["heading-hero", "story-hero"]), u.arrayOf(Oo), u.string;
const xr = ({
  dataId: e,
  isClickeable: t,
  disabled: r,
  pageLinkIcon: n,
  selectedPage: a,
  onClick: o,
  ellipses: l,
  ariaLabel: c,
  children: h,
  ariaDisabled: d
}) => /* @__PURE__ */ K.jsx(
  "li",
  {
    className: Rr("page-item", {
      disabled: r,
      active: a,
      elipses: l
    }),
    children: t ? /* @__PURE__ */ K.jsxs(
      "button",
      {
        type: "button",
        "aria-label": c,
        className: Rr("page-link", {
          "page-link-icon": n
        }),
        onClick: o,
        "data-testid": e ? `pagination-${e}` : "page-link",
        "data-id": e,
        "aria-current": a ? "page" : null,
        "aria-disabled": d,
        children: [
          h,
          a && /* @__PURE__ */ K.jsx("span", { className: "visually-hidden", children: "(current)" })
        ]
      }
    ) : /* @__PURE__ */ K.jsx("span", { className: "page-link", "data-testid": "page-link", children: h })
  }
);
xr.propTypes = {
  isClickeable: u.bool,
  disabled: u.bool,
  pageLinkIcon: u.bool,
  selectedPage: u.bool,
  dataId: u.string,
  onClick: u.func,
  children: u.node,
  ellipses: u.bool,
  ariaLabel: u.string,
  ariaDisabled: u.bool
};
xr.defaultProps = {
  isClickeable: !1,
  disabled: !1,
  pageLinkIcon: !1,
  selectedPage: !1,
  onClick: () => {
  }
};
const hg = {
  event: "select",
  action: "click",
  name: "onclick",
  type: "pagination",
  region: "main content"
}, Oi = ({
  type: e,
  background: t,
  currentPage: r,
  totalPages: n,
  onChange: a
}) => {
  const [o, l] = Qe(null);
  mt(() => {
    l(r);
  }, [r]);
  const c = (y) => {
    Cc({ ...hg, text: `page ${y}` });
  }, h = (y, m) => {
    const I = {
      first: 1,
      prev: o === 1 ? 1 : o - 1,
      next: o === n ? n : o + 1,
      last: n
    }[m] ?? m;
    l(I), c(I), a == null || a(y, I);
  }, d = () => {
    const y = Us(
      o === n - 1,
      2,
      o === n ? 3 : 1
    ), m = Us(
      o === 1,
      3,
      o === 2 ? 2 : 1
    ), I = Xs(
      o - y,
      o,
      n
    ), U = Xs(
      o,
      o + 1 + m,
      n
    ), C = [...I, ...U];
    return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
      C[0] !== 1 && /* @__PURE__ */ K.jsx(
        xr,
        {
          ariaLabel: `Page 1 of ${n}`,
          isClickeable: !0,
          selectedPage: o === 1,
          onClick: (w) => h(w, "first"),
          children: "1"
        }
      ),
      C[0] > 2 && /* @__PURE__ */ K.jsx(xr, { ellipses: !0, children: "..." }),
      C.map((w) => /* @__PURE__ */ K.jsx(
        xr,
        {
          ariaLabel: `Page ${w} of ${n}`,
          isClickeable: !0,
          selectedPage: o === w,
          onClick: (E) => h(E, w),
          children: w
        },
        w
      )),
      C[C.length - 1] < n - 1 && /* @__PURE__ */ K.jsx(xr, { ellipses: !0, children: "..." }),
      C[C.length - 1] !== n && /* @__PURE__ */ K.jsx(
        xr,
        {
          isClickeable: !0,
          ariaLabel: `Page ${n} of ${n}`,
          selectedPage: o === n,
          onClick: (w) => h(w, "last"),
          children: n
        }
      )
    ] });
  };
  return /* @__PURE__ */ K.jsx("nav", { "aria-label": "Pagination", "data-testid": "pagination", children: /* @__PURE__ */ K.jsxs(
    "ul",
    {
      className: Rr(
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
        /* @__PURE__ */ K.jsx(
          xr,
          {
            dataId: "prev",
            isClickeable: !0,
            disabled: o === 1,
            pageLinkIcon: !0,
            onClick: (y) => h(y, "prev"),
            ariaDisabled: o === 1,
            ariaLabel: "Previous Page"
          }
        ),
        d(),
        /* @__PURE__ */ K.jsx(
          xr,
          {
            dataId: "next",
            isClickeable: !0,
            ariaDisabled: o === n,
            disabled: o === n,
            pageLinkIcon: !0,
            onClick: (y) => h(y, "next"),
            ariaLabel: "Next Page"
          }
        )
      ]
    }
  ) });
};
Oi.propTypes = {
  /**
   * Type of pagination
   */
  type: u.oneOf(["default", "bordered"]).isRequired,
  /**
   * Background of pagination
   */
  background: u.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired,
  /**
   * Current page
   */
  currentPage: u.number,
  /**
   * Total number of pages
   */
  totalPages: u.number,
  /**
   * Callback fired when the page is changed.
   */
  onChange: u.func.isRequired
};
Oi.defaultProps = {
  currentPage: 1,
  totalPages: 10
};
u.oneOf(["small", "large"]), u.string.isRequired, u.string.isRequired, u.string;
u.oneOf(["small", "large"]).isRequired, u.string.isRequired, u.string.isRequired, u.string.isRequired, u.string.isRequired, u.string, u.string;
const gg = ir.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`, Li = ({ gaData: e, hidePrev: t, hideNext: r, slideNav: n }) => /* @__PURE__ */ K.jsxs(gg, { children: [
  !t && /* @__PURE__ */ K.jsx(ln, { gaData: { ...e, text: "left chevron" }, children: /* @__PURE__ */ K.jsxs(
    "button",
    {
      className: "scroll-control-prev",
      type: "button",
      onClick: () => n(-1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ K.jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ K.jsx("span", { className: "visually-hidden", children: "Previous" })
      ]
    }
  ) }),
  !r && /* @__PURE__ */ K.jsx(ln, { gaData: { ...e, text: "right chevron" }, children: /* @__PURE__ */ K.jsxs(
    "button",
    {
      className: "scroll-control-next",
      type: "button",
      onClick: () => n(1),
      tabIndex: -1,
      children: [
        /* @__PURE__ */ K.jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
        /* @__PURE__ */ K.jsx("span", { className: "visually-hidden", children: "Next" })
      ]
    }
  ) })
] });
Li.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: u.object,
  hidePrev: u.bool,
  hideNext: u.bool,
  slideNav: u.func.isRequired
};
const Qc = Ll(function(e, t) {
  const {
    id: r,
    selected: n,
    title: a,
    selectTab: o,
    leftKeyPressed: l,
    rightKeyPressed: c,
    icon: h,
    gaData: d
  } = e, y = Kr(null);
  Uu(
    t,
    () => ({
      focus() {
        y.current.focus();
      },
      scrollIntoView() {
        var I, U, C, w, E, N, D;
        const F = ((I = y.current) == null ? void 0 : I.offsetWidth) / 2 + y.current.offsetLeft, B = ((C = (U = y.current) == null ? void 0 : U.offsetParent) == null ? void 0 : C.scrollLeft) + ((E = (w = y.current) == null ? void 0 : w.offsetParent) == null ? void 0 : E.offsetWidth) / 2;
        (D = (N = y.current) == null ? void 0 : N.offsetParent) == null || D.scrollBy({
          left: F - B
        });
      }
    }),
    []
  );
  const m = (I) => {
    I.keyCode === 37 ? (I.preventDefault(), l()) : I.keyCode === 39 && (I.preventDefault(), c());
  };
  return /* @__PURE__ */ K.jsx(ln, { gaData: { ...d, text: a }, children: /* @__PURE__ */ K.jsxs(
    "a",
    {
      ref: y,
      className: `nav-item nav-link ${n ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": n,
      onClick: (I) => o(I, r, a),
      onKeyDown: m,
      tabIndex: n ? "" : "-1",
      children: [
        a,
        " ",
        h && /* @__PURE__ */ K.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` })
      ]
    }
  ) });
});
Qc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  gaData: u.object,
  id: u.string.isRequired,
  selected: u.bool.isRequired,
  title: u.string.isRequired,
  selectTab: u.func.isRequired,
  leftKeyPressed: u.func.isRequired,
  rightKeyPressed: u.func.isRequired,
  icon: u.arrayOf(u.string)
};
function mg() {
  const e = Kr({}), t = zu(
    (r) => (n) => {
      e.current[r] = n;
    },
    []
  );
  return [e, t];
}
const nn = ({ id: e, bgColor: t, selected: r, children: n }) => r && /* @__PURE__ */ K.jsx(
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
  id: u.string.isRequired,
  bgColor: u.string,
  selected: u.bool,
  children: u.oneOfType([u.array, u.element])
};
const Pi = ({
  initialTab: e = "",
  children: t,
  bgColor: r = "",
  onTabChange: n = (a) => {
  }
}) => {
  const a = ht.Children.toArray(t), o = Kr(!1), [l, c] = Qe(
    e && e !== "null" ? e : a[0].props.id
  ), h = Kr(null), [d, y] = mg(), { isReact: m } = Rc(), I = (Z) => {
    var le;
    n(Z), (le = d.current[Z]) == null || le.focus(), c(Z);
  }, [U, C] = Qe(0), [w, E] = Qe();
  mt(() => {
    const Z = () => {
      C(h.current.scrollLeft);
    };
    return h.current.addEventListener("scroll", Z), Z(), () => {
      h.current && h.current.removeEventListener("scroll", Z);
    };
  }, [w]), mt(() => {
    const Z = () => {
      E(
        h.current.scrollWidth - h.current.offsetWidth
      );
    };
    return window.addEventListener("resize", Z), Z(), () => {
      h.current && window.removeEventListener("resize", Z);
    };
  }, []), mt(() => {
    var Z;
    (Z = d.current[l]) == null || Z.scrollIntoView();
  }, [l]), mt(() => {
    o.current && e && e !== "null" && l !== e && c(e);
  }, [e]), mt(() => {
    o.current = !0;
  }, []);
  const N = {
    event: "select",
    action: "click",
    name: "onclick",
    type: "carousel",
    region: "main content",
    text: ""
  }, D = {
    event: "link",
    action: "click",
    name: "onclick",
    type: "internal link",
    text: ""
  }, F = a.map((Z) => ht.cloneElement(Z, {
    bgColor: r,
    selected: l === Z.props.id
  })), B = (Z) => {
    const le = h.current, we = le.scrollWidth - le.clientWidth;
    let ue = le.scrollLeft + 200 * Z;
    ue = Math.max(0, Math.min(we, ue)), le.scrollTo({
      left: ue,
      behavior: "smooth"
    });
  }, R = (Z, le, we) => {
    Z.preventDefault(), I(le);
  }, ae = (Z = !0) => {
    const le = a.length, we = Z ? 1 : -1, ue = a.findIndex((Ie) => Ie.props.id === l), ge = a[(le + ue + we) % le].props.id;
    I(ge);
  };
  let de = "uds-tabbed-panels";
  return r === "bg-dark" && (de += " uds-tabbed-panels-dark"), /* @__PURE__ */ K.jsxs("div", { className: r, children: [
    /* @__PURE__ */ K.jsxs("nav", { className: de, children: [
      /* @__PURE__ */ K.jsx("div", { className: "nav nav-tabs", role: "tablist", ref: h, children: a.map((Z, le) => /* @__PURE__ */ K.jsx(
        Qc,
        {
          ref: y(Z.props.id),
          id: Z.props.id,
          title: Z.props.title,
          selected: l === Z.props.id,
          gaData: D,
          selectTab: m && R,
          leftKeyPressed: m && (() => ae(!1)),
          rightKeyPressed: m && (() => ae()),
          icon: Z.props.icon,
          index: le
        },
        Z.props.id
      )) }),
      /* @__PURE__ */ K.jsx(
        Li,
        {
          hidePrev: U <= 0,
          hideNext: U >= w,
          gaData: N,
          slideNav: m && B
        }
      )
    ] }),
    /* @__PURE__ */ K.jsx(
      "div",
      {
        className: "tab-content",
        tabIndex: 0,
        role: "tabpanel",
        id: "nav-tabContent",
        children: F
      }
    )
  ] });
};
Pi.propTypes = {
  initialTab: u.string,
  children: u.arrayOf(u.element).isRequired,
  bgColor: u.string,
  onTabChange: u.func
};
u.shape({
  title: u.string,
  content: u.string,
  cite: u.shape({
    name: u.string,
    description: u.string
  })
}).isRequired, u.string, u.string, u.shape({
  containerCssClass: u.arrayOf(u.string),
  titleCssClass: u.arrayOf(u.string),
  contentCssClass: u.arrayOf(u.string)
});
u.oneOf(["video", "youtube"]), u.string, u.string, u.string, u.string, u.string, u.bool;
u.oneOfType([
  u.element,
  u.arrayOf(u.element)
]).isRequired;
u.number.isRequired;
u.arrayOf(u.string).isRequired, u.func;
u.func;
u.func;
u.arrayOf(u.element);
u.element, u.func;
u.arrayOf(u.object);
var bg = !1;
try {
  var fl = Object.defineProperty({}, "passive", {
    get: function() {
      bg = !0;
    }
  });
  window.addEventListener("testPassive", null, fl), window.removeEventListener("testPassive", null, fl);
} catch {
}
u.number, u.string, u.string, u.arrayOf(u.object).isRequired, u.string, u.func, u.string, u.string, u.func, u.bool, u.bool, u.bool, u.bool, u.bool, u.bool, u.bool, u.bool;
u.string.isRequired, u.arrayOf(
  u.shape({
    title: u.string.isRequired,
    content: u.string,
    eventLocation: u.string,
    eventTime: u.string,
    image: u.string,
    imageAltText: u.string,
    buttons: Gr.propTypes.buttons,
    linkLabel: u.string,
    linkUrl: u.string,
    tags: Gr.propTypes.tags
  })
).isRequired, Gr.propTypes.type, Gr.propTypes.eventFormat, Gr.propTypes.horizontal, u.string, u.string, u.bool;
u.number.isRequired, u.arrayOf(u.object).isRequired, u.string, u.string, u.bool;
const Wa = {
  imageItems: u.arrayOf(
    u.shape({
      id: u.number,
      imageSource: u.string,
      thumbnailSource: u.string,
      imageAltText: u.string,
      content: u.oneOfType([u.string, u.element])
    })
  ),
  hasContent: u.bool
};
u.string, Wa.imageItems, Wa.hasContent;
Wa.imageItems.isRequired, Wa.hasContent, u.string, u.string, u.bool;
u.arrayOf(
  u.shape({
    title: u.string,
    content: u.string,
    cite: u.shape({
      name: u.string,
      description: u.string
    })
  })
).isRequired, u.shape({
  containerCssClass: u.arrayOf(u.string),
  titleCssClass: u.arrayOf(u.string),
  contentCssClass: u.arrayOf(u.string)
}), u.string, u.string, u.bool, u.bool, u.bool;
var pl = Nl;
pl.createRoot, pl.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
function Gc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
var yg = {}, hl = {};
const { toString: wg } = Object.prototype, { getPrototypeOf: Ni } = Object, $a = /* @__PURE__ */ ((e) => (t) => {
  const r = wg.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sr = (e) => (e = e.toLowerCase(), (t) => $a(t) === e), Za = (e) => (t) => typeof t === e, { isArray: mn } = Array, Jn = Za("undefined");
function vg(e) {
  return e !== null && !Jn(e) && e.constructor !== null && !Jn(e.constructor) && Wt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qc = sr("ArrayBuffer");
function Ag(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qc(e.buffer), t;
}
const Sg = Za("string"), Wt = Za("function"), Vc = Za("number"), eo = (e) => e !== null && typeof e == "object", xg = (e) => e === !0 || e === !1, Oa = (e) => {
  if ($a(e) !== "object")
    return !1;
  const t = Ni(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Eg = sr("Date"), kg = sr("File"), Cg = sr("Blob"), Tg = sr("FileList"), Rg = (e) => eo(e) && Wt(e.pipe), Ig = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Wt(e.append) && ((t = $a(e)) === "formdata" || // detect form-data instance
  t === "object" && Wt(e.toString) && e.toString() === "[object FormData]"));
}, _g = sr("URLSearchParams"), [Og, Lg, Pg, Ng] = ["ReadableStream", "Request", "Response", "Headers"].map(sr), Dg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $n(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), mn(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let c;
    for (n = 0; n < l; n++)
      c = o[n], t.call(null, e[c], c, e);
  }
}
function Yc(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const Vr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : yg, Jc = (e) => !Jn(e) && e !== Vr;
function ii() {
  const { caseless: e } = Jc(this) && this || {}, t = {}, r = (n, a) => {
    const o = e && Yc(t, a) || a;
    Oa(t[o]) && Oa(n) ? t[o] = ii(t[o], n) : Oa(n) ? t[o] = ii({}, n) : mn(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && $n(arguments[n], r);
  return t;
}
const Bg = (e, t, r, { allOwnKeys: n } = {}) => ($n(t, (a, o) => {
  r && Wt(a) ? e[o] = Gc(a, r) : e[o] = a;
}, { allOwnKeys: n }), e), jg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Mg = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Fg = (e, t, r, n) => {
  let a, o, l;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      l = a[o], (!n || n(l, e, t)) && !c[l] && (t[l] = e[l], c[l] = !0);
    e = r !== !1 && Ni(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Ug = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, zg = (e) => {
  if (!e) return null;
  if (mn(e)) return e;
  let t = e.length;
  if (!Vc(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Wg = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ni(Uint8Array)), Hg = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, Qg = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Gg = sr("HTMLFormElement"), qg = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), gl = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Vg = sr("RegExp"), Xc = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  $n(r, (a, o) => {
    let l;
    (l = t(a, o, e)) !== !1 && (n[o] = l || a);
  }), Object.defineProperties(e, n);
}, Yg = (e) => {
  Xc(e, (t, r) => {
    if (Wt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (Wt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Jg = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((o) => {
      r[o] = !0;
    });
  };
  return mn(e) ? n(e) : n(String(e).split(t)), r;
}, Xg = () => {
}, Kg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function $g(e) {
  return !!(e && Wt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Zg = (e) => {
  const t = new Array(10), r = (n, a) => {
    if (eo(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[a] = n;
        const o = mn(n) ? [] : {};
        return $n(n, (l, c) => {
          const h = r(l, a + 1);
          !Jn(h) && (o[c] = h);
        }), t[a] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, em = sr("AsyncFunction"), tm = (e) => e && (eo(e) || Wt(e)) && Wt(e.then) && Wt(e.catch), Kc = ((e, t) => e ? setImmediate : t ? ((r, n) => (Vr.addEventListener("message", ({ source: a, data: o }) => {
  a === Vr && o === r && n.length && n.shift()();
}, !1), (a) => {
  n.push(a), Vr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  Wt(Vr.postMessage)
), rm = typeof queueMicrotask < "u" ? queueMicrotask.bind(Vr) : typeof hl < "u" && hl.nextTick || Kc, Q = {
  isArray: mn,
  isArrayBuffer: qc,
  isBuffer: vg,
  isFormData: Ig,
  isArrayBufferView: Ag,
  isString: Sg,
  isNumber: Vc,
  isBoolean: xg,
  isObject: eo,
  isPlainObject: Oa,
  isReadableStream: Og,
  isRequest: Lg,
  isResponse: Pg,
  isHeaders: Ng,
  isUndefined: Jn,
  isDate: Eg,
  isFile: kg,
  isBlob: Cg,
  isRegExp: Vg,
  isFunction: Wt,
  isStream: Rg,
  isURLSearchParams: _g,
  isTypedArray: Wg,
  isFileList: Tg,
  forEach: $n,
  merge: ii,
  extend: Bg,
  trim: Dg,
  stripBOM: jg,
  inherits: Mg,
  toFlatObject: Fg,
  kindOf: $a,
  kindOfTest: sr,
  endsWith: Ug,
  toArray: zg,
  forEachEntry: Hg,
  matchAll: Qg,
  isHTMLForm: Gg,
  hasOwnProperty: gl,
  hasOwnProp: gl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xc,
  freezeMethods: Yg,
  toObjectSet: Jg,
  toCamelCase: qg,
  noop: Xg,
  toFiniteNumber: Kg,
  findKey: Yc,
  global: Vr,
  isContextDefined: Jc,
  isSpecCompliantForm: $g,
  toJSONObject: Zg,
  isAsyncFn: em,
  isThenable: tm,
  setImmediate: Kc,
  asap: rm
};
function Be(e, t, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), a && (this.response = a, this.status = a.status ? a.status : null);
}
Q.inherits(Be, Error, {
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
      config: Q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const $c = Be.prototype, Zc = {};
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
  Zc[e] = { value: e };
});
Object.defineProperties(Be, Zc);
Object.defineProperty($c, "isAxiosError", { value: !0 });
Be.from = (e, t, r, n, a, o) => {
  const l = Object.create($c);
  return Q.toFlatObject(e, l, function(h) {
    return h !== Error.prototype;
  }, (c) => c !== "isAxiosError"), Be.call(l, e.message, t, r, n, a), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const nm = null;
function si(e) {
  return Q.isPlainObject(e) || Q.isArray(e);
}
function eu(e) {
  return Q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ml(e, t, r) {
  return e ? e.concat(t).map(function(a, o) {
    return a = eu(a), !r && o ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function am(e) {
  return Q.isArray(e) && !e.some(si);
}
const om = Q.toFlatObject(Q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function to(e, t, r) {
  if (!Q.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = Q.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, E) {
    return !Q.isUndefined(E[w]);
  });
  const n = r.metaTokens, a = r.visitor || y, o = r.dots, l = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && Q.isSpecCompliantForm(t);
  if (!Q.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(C) {
    if (C === null) return "";
    if (Q.isDate(C))
      return C.toISOString();
    if (!h && Q.isBlob(C))
      throw new Be("Blob is not supported. Use a Buffer instead.");
    return Q.isArrayBuffer(C) || Q.isTypedArray(C) ? h && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function y(C, w, E) {
    let N = C;
    if (C && !E && typeof C == "object") {
      if (Q.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), C = JSON.stringify(C);
      else if (Q.isArray(C) && am(C) || (Q.isFileList(C) || Q.endsWith(w, "[]")) && (N = Q.toArray(C)))
        return w = eu(w), N.forEach(function(F, B) {
          !(Q.isUndefined(F) || F === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? ml([w], B, o) : l === null ? w : w + "[]",
            d(F)
          );
        }), !1;
    }
    return si(C) ? !0 : (t.append(ml(E, w, o), d(C)), !1);
  }
  const m = [], I = Object.assign(om, {
    defaultVisitor: y,
    convertValue: d,
    isVisitable: si
  });
  function U(C, w) {
    if (!Q.isUndefined(C)) {
      if (m.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      m.push(C), Q.forEach(C, function(N, D) {
        (!(Q.isUndefined(N) || N === null) && a.call(
          t,
          N,
          Q.isString(D) ? D.trim() : D,
          w,
          I
        )) === !0 && U(N, w ? w.concat(D) : [D]);
      }), m.pop();
    }
  }
  if (!Q.isObject(e))
    throw new TypeError("data must be an object");
  return U(e), t;
}
function bl(e) {
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
function Di(e, t) {
  this._pairs = [], e && to(e, this, t);
}
const tu = Di.prototype;
tu.append = function(t, r) {
  this._pairs.push([t, r]);
};
tu.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, bl);
  } : bl;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function im(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ru(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || im;
  Q.isFunction(r) && (r = {
    serialize: r
  });
  const a = r && r.serialize;
  let o;
  if (a ? o = a(t, r) : o = Q.isURLSearchParams(t) ? t.toString() : new Di(t, r).toString(n), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class yl {
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
    Q.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const nu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sm = typeof URLSearchParams < "u" ? URLSearchParams : Di, lm = typeof FormData < "u" ? FormData : null, cm = typeof Blob < "u" ? Blob : null, um = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sm,
    FormData: lm,
    Blob: cm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Bi = typeof window < "u" && typeof document < "u", li = typeof navigator == "object" && navigator || void 0, dm = Bi && (!li || ["ReactNative", "NativeScript", "NS"].indexOf(li.product) < 0), fm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pm = Bi && window.location.href || "http://localhost", hm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Bi,
  hasStandardBrowserEnv: dm,
  hasStandardBrowserWebWorkerEnv: fm,
  navigator: li,
  origin: pm
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...hm,
  ...um
};
function gm(e, t) {
  return to(e, new Et.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, o) {
      return Et.isNode && Q.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function mm(e) {
  return Q.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function bm(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let o;
  for (n = 0; n < a; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function au(e) {
  function t(r, n, a, o) {
    let l = r[o++];
    if (l === "__proto__") return !0;
    const c = Number.isFinite(+l), h = o >= r.length;
    return l = !l && Q.isArray(a) ? a.length : l, h ? (Q.hasOwnProp(a, l) ? a[l] = [a[l], n] : a[l] = n, !c) : ((!a[l] || !Q.isObject(a[l])) && (a[l] = []), t(r, n, a[l], o) && Q.isArray(a[l]) && (a[l] = bm(a[l])), !c);
  }
  if (Q.isFormData(e) && Q.isFunction(e.entries)) {
    const r = {};
    return Q.forEachEntry(e, (n, a) => {
      t(mm(n), a, r, 0);
    }), r;
  }
  return null;
}
function ym(e, t, r) {
  if (Q.isString(e))
    try {
      return (t || JSON.parse)(e), Q.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Zn = {
  transitional: nu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, o = Q.isObject(t);
    if (o && Q.isHTMLForm(t) && (t = new FormData(t)), Q.isFormData(t))
      return a ? JSON.stringify(au(t)) : t;
    if (Q.isArrayBuffer(t) || Q.isBuffer(t) || Q.isStream(t) || Q.isFile(t) || Q.isBlob(t) || Q.isReadableStream(t))
      return t;
    if (Q.isArrayBufferView(t))
      return t.buffer;
    if (Q.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return gm(t, this.formSerializer).toString();
      if ((c = Q.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return to(
          c ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || a ? (r.setContentType("application/json", !1), ym(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Zn.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (Q.isResponse(t) || Q.isReadableStream(t))
      return t;
    if (t && Q.isString(t) && (n && !this.responseType || a)) {
      const l = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (l)
          throw c.name === "SyntaxError" ? Be.from(c, Be.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: Et.classes.FormData,
    Blob: Et.classes.Blob
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
Q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zn.headers[e] = {};
});
const wm = Q.toObjectSet([
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
]), vm = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(l) {
    a = l.indexOf(":"), r = l.substring(0, a).trim().toLowerCase(), n = l.substring(a + 1).trim(), !(!r || t[r] && wm[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, wl = Symbol("internals");
function Fn(e) {
  return e && String(e).trim().toLowerCase();
}
function La(e) {
  return e === !1 || e == null ? e : Q.isArray(e) ? e.map(La) : String(e);
}
function Am(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Sm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fo(e, t, r, n, a) {
  if (Q.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!Q.isString(t)) {
    if (Q.isString(n))
      return t.indexOf(n) !== -1;
    if (Q.isRegExp(n))
      return n.test(t);
  }
}
function xm(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Em(e, t) {
  const r = Q.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(a, o, l) {
        return this[n].call(this, t, a, o, l);
      },
      configurable: !0
    });
  });
}
let jt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function o(c, h, d) {
      const y = Fn(h);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const m = Q.findKey(a, y);
      (!m || a[m] === void 0 || d === !0 || d === void 0 && a[m] !== !1) && (a[m || h] = La(c));
    }
    const l = (c, h) => Q.forEach(c, (d, y) => o(d, y, h));
    if (Q.isPlainObject(t) || t instanceof this.constructor)
      l(t, r);
    else if (Q.isString(t) && (t = t.trim()) && !Sm(t))
      l(vm(t), r);
    else if (Q.isHeaders(t))
      for (const [c, h] of t.entries())
        o(h, c, n);
    else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Fn(t), t) {
      const n = Q.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return Am(a);
        if (Q.isFunction(r))
          return r.call(this, a, n);
        if (Q.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Fn(t), t) {
      const n = Q.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Fo(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function o(l) {
      if (l = Fn(l), l) {
        const c = Q.findKey(n, l);
        c && (!r || Fo(n, n[c], c, r)) && (delete n[c], a = !0);
      }
    }
    return Q.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Fo(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return Q.forEach(this, (a, o) => {
      const l = Q.findKey(n, o);
      if (l) {
        r[l] = La(a), delete r[o];
        return;
      }
      const c = t ? xm(o) : String(o).trim();
      c !== o && delete r[o], r[c] = La(a), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return Q.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && Q.isArray(n) ? n.join(", ") : n);
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
    const n = (this[wl] = this[wl] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(l) {
      const c = Fn(l);
      n[c] || (Em(a, l), n[c] = !0);
    }
    return Q.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
jt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Q.reduceDescriptors(jt.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
Q.freezeMethods(jt);
function Uo(e, t) {
  const r = this || Zn, n = t || r, a = jt.from(n.headers);
  let o = n.data;
  return Q.forEach(e, function(c) {
    o = c.call(r, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function ou(e) {
  return !!(e && e.__CANCEL__);
}
function bn(e, t, r) {
  Be.call(this, e ?? "canceled", Be.ERR_CANCELED, t, r), this.name = "CanceledError";
}
Q.inherits(bn, Be, {
  __CANCEL__: !0
});
function iu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Be(
    "Request failed with status code " + r.status,
    [Be.ERR_BAD_REQUEST, Be.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function km(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cm(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, o = 0, l;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const d = Date.now(), y = n[o];
    l || (l = d), r[a] = h, n[a] = d;
    let m = o, I = 0;
    for (; m !== a; )
      I += r[m++], m = m % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), d - l < t)
      return;
    const U = y && d - y;
    return U ? Math.round(I * 1e3 / U) : void 0;
  };
}
function Tm(e, t) {
  let r = 0, n = 1e3 / t, a, o;
  const l = (d, y = Date.now()) => {
    r = y, a = null, o && (clearTimeout(o), o = null), e.apply(null, d);
  };
  return [(...d) => {
    const y = Date.now(), m = y - r;
    m >= n ? l(d, y) : (a = d, o || (o = setTimeout(() => {
      o = null, l(a);
    }, n - m)));
  }, () => a && l(a)];
}
const Ha = (e, t, r = 3) => {
  let n = 0;
  const a = Cm(50, 250);
  return Tm((o) => {
    const l = o.loaded, c = o.lengthComputable ? o.total : void 0, h = l - n, d = a(h), y = l <= c;
    n = l;
    const m = {
      loaded: l,
      total: c,
      progress: c ? l / c : void 0,
      bytes: h,
      rate: d || void 0,
      estimated: d && c && y ? (c - l) / d : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, r);
}, vl = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Al = (e) => (...t) => Q.asap(() => e(...t)), Rm = Et.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, Et.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(Et.origin),
  Et.navigator && /(msie|trident)/i.test(Et.navigator.userAgent)
) : () => !0, Im = Et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, o) {
      const l = [e + "=" + encodeURIComponent(t)];
      Q.isNumber(r) && l.push("expires=" + new Date(r).toGMTString()), Q.isString(n) && l.push("path=" + n), Q.isString(a) && l.push("domain=" + a), o === !0 && l.push("secure"), document.cookie = l.join("; ");
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
function _m(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Om(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function su(e, t, r) {
  let n = !_m(t);
  return e && n || r == !1 ? Om(e, t) : t;
}
const Sl = (e) => e instanceof jt ? { ...e } : e;
function $r(e, t) {
  t = t || {};
  const r = {};
  function n(d, y, m, I) {
    return Q.isPlainObject(d) && Q.isPlainObject(y) ? Q.merge.call({ caseless: I }, d, y) : Q.isPlainObject(y) ? Q.merge({}, y) : Q.isArray(y) ? y.slice() : y;
  }
  function a(d, y, m, I) {
    if (Q.isUndefined(y)) {
      if (!Q.isUndefined(d))
        return n(void 0, d, m, I);
    } else return n(d, y, m, I);
  }
  function o(d, y) {
    if (!Q.isUndefined(y))
      return n(void 0, y);
  }
  function l(d, y) {
    if (Q.isUndefined(y)) {
      if (!Q.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, y);
  }
  function c(d, y, m) {
    if (m in t)
      return n(d, y);
    if (m in e)
      return n(void 0, d);
  }
  const h = {
    url: o,
    method: o,
    data: o,
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
    validateStatus: c,
    headers: (d, y, m) => a(Sl(d), Sl(y), m, !0)
  };
  return Q.forEach(Object.keys(Object.assign({}, e, t)), function(y) {
    const m = h[y] || a, I = m(e[y], t[y], y);
    Q.isUndefined(I) && m !== c || (r[y] = I);
  }), r;
}
const lu = (e) => {
  const t = $r({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: a, xsrfCookieName: o, headers: l, auth: c } = t;
  t.headers = l = jt.from(l), t.url = ru(su(t.baseURL, t.url), e.params, e.paramsSerializer), c && l.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let h;
  if (Q.isFormData(r)) {
    if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((h = l.getContentType()) !== !1) {
      const [d, ...y] = h ? h.split(";").map((m) => m.trim()).filter(Boolean) : [];
      l.setContentType([d || "multipart/form-data", ...y].join("; "));
    }
  }
  if (Et.hasStandardBrowserEnv && (n && Q.isFunction(n) && (n = n(t)), n || n !== !1 && Rm(t.url))) {
    const d = a && o && Im.read(o);
    d && l.set(a, d);
  }
  return t;
}, Lm = typeof XMLHttpRequest < "u", Pm = Lm && function(e) {
  return new Promise(function(r, n) {
    const a = lu(e);
    let o = a.data;
    const l = jt.from(a.headers).normalize();
    let { responseType: c, onUploadProgress: h, onDownloadProgress: d } = a, y, m, I, U, C;
    function w() {
      U && U(), C && C(), a.cancelToken && a.cancelToken.unsubscribe(y), a.signal && a.signal.removeEventListener("abort", y);
    }
    let E = new XMLHttpRequest();
    E.open(a.method.toUpperCase(), a.url, !0), E.timeout = a.timeout;
    function N() {
      if (!E)
        return;
      const F = jt.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), R = {
        data: !c || c === "text" || c === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: F,
        config: e,
        request: E
      };
      iu(function(de) {
        r(de), w();
      }, function(de) {
        n(de), w();
      }, R), E = null;
    }
    "onloadend" in E ? E.onloadend = N : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, E.onabort = function() {
      E && (n(new Be("Request aborted", Be.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      n(new Be("Network Error", Be.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let B = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const R = a.transitional || nu;
      a.timeoutErrorMessage && (B = a.timeoutErrorMessage), n(new Be(
        B,
        R.clarifyTimeoutError ? Be.ETIMEDOUT : Be.ECONNABORTED,
        e,
        E
      )), E = null;
    }, o === void 0 && l.setContentType(null), "setRequestHeader" in E && Q.forEach(l.toJSON(), function(B, R) {
      E.setRequestHeader(R, B);
    }), Q.isUndefined(a.withCredentials) || (E.withCredentials = !!a.withCredentials), c && c !== "json" && (E.responseType = a.responseType), d && ([I, C] = Ha(d, !0), E.addEventListener("progress", I)), h && E.upload && ([m, U] = Ha(h), E.upload.addEventListener("progress", m), E.upload.addEventListener("loadend", U)), (a.cancelToken || a.signal) && (y = (F) => {
      E && (n(!F || F.type ? new bn(null, e, E) : F), E.abort(), E = null);
    }, a.cancelToken && a.cancelToken.subscribe(y), a.signal && (a.signal.aborted ? y() : a.signal.addEventListener("abort", y)));
    const D = km(a.url);
    if (D && Et.protocols.indexOf(D) === -1) {
      n(new Be("Unsupported protocol " + D + ":", Be.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(o || null);
  });
}, Nm = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), a;
    const o = function(d) {
      if (!a) {
        a = !0, c();
        const y = d instanceof Error ? d : this.reason;
        n.abort(y instanceof Be ? y : new bn(y instanceof Error ? y.message : y));
      }
    };
    let l = t && setTimeout(() => {
      l = null, o(new Be(`timeout ${t} of ms exceeded`, Be.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
    const { signal: h } = n;
    return h.unsubscribe = () => Q.asap(c), h;
  }
}, Dm = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, Bm = async function* (e, t) {
  for await (const r of jm(e))
    yield* Dm(r, t);
}, jm = async function* (e) {
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
}, xl = (e, t, r, n) => {
  const a = Bm(e, t);
  let o = 0, l, c = (h) => {
    l || (l = !0, n && n(h));
  };
  return new ReadableStream({
    async pull(h) {
      try {
        const { done: d, value: y } = await a.next();
        if (d) {
          c(), h.close();
          return;
        }
        let m = y.byteLength;
        if (r) {
          let I = o += m;
          r(I);
        }
        h.enqueue(new Uint8Array(y));
      } catch (d) {
        throw c(d), d;
      }
    },
    cancel(h) {
      return c(h), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, ro = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", cu = ro && typeof ReadableStream == "function", Mm = ro && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), uu = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Fm = cu && uu(() => {
  let e = !1;
  const t = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), El = 64 * 1024, ci = cu && uu(() => Q.isReadableStream(new Response("").body)), Qa = {
  stream: ci && ((e) => e.body)
};
ro && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qa[t] && (Qa[t] = Q.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new Be(`Response type '${t}' is not supported`, Be.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Um = async (e) => {
  if (e == null)
    return 0;
  if (Q.isBlob(e))
    return e.size;
  if (Q.isSpecCompliantForm(e))
    return (await new Request(Et.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (Q.isArrayBufferView(e) || Q.isArrayBuffer(e))
    return e.byteLength;
  if (Q.isURLSearchParams(e) && (e = e + ""), Q.isString(e))
    return (await Mm(e)).byteLength;
}, zm = async (e, t) => {
  const r = Q.toFiniteNumber(e.getContentLength());
  return r ?? Um(t);
}, Wm = ro && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: a,
    cancelToken: o,
    timeout: l,
    onDownloadProgress: c,
    onUploadProgress: h,
    responseType: d,
    headers: y,
    withCredentials: m = "same-origin",
    fetchOptions: I
  } = lu(e);
  d = d ? (d + "").toLowerCase() : "text";
  let U = Nm([a, o && o.toAbortSignal()], l), C;
  const w = U && U.unsubscribe && (() => {
    U.unsubscribe();
  });
  let E;
  try {
    if (h && Fm && r !== "get" && r !== "head" && (E = await zm(y, n)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), ae;
      if (Q.isFormData(n) && (ae = R.headers.get("content-type")) && y.setContentType(ae), R.body) {
        const [de, Z] = vl(
          E,
          Ha(Al(h))
        );
        n = xl(R.body, El, de, Z);
      }
    }
    Q.isString(m) || (m = m ? "include" : "omit");
    const N = "credentials" in Request.prototype;
    C = new Request(t, {
      ...I,
      signal: U,
      method: r.toUpperCase(),
      headers: y.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: N ? m : void 0
    });
    let D = await fetch(C);
    const F = ci && (d === "stream" || d === "response");
    if (ci && (c || F && w)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((le) => {
        R[le] = D[le];
      });
      const ae = Q.toFiniteNumber(D.headers.get("content-length")), [de, Z] = c && vl(
        ae,
        Ha(Al(c), !0)
      ) || [];
      D = new Response(
        xl(D.body, El, de, () => {
          Z && Z(), w && w();
        }),
        R
      );
    }
    d = d || "text";
    let B = await Qa[Q.findKey(Qa, d) || "text"](D, e);
    return !F && w && w(), await new Promise((R, ae) => {
      iu(R, ae, {
        data: B,
        headers: jt.from(D.headers),
        status: D.status,
        statusText: D.statusText,
        config: e,
        request: C
      });
    });
  } catch (N) {
    throw w && w(), N && N.name === "TypeError" && /fetch/i.test(N.message) ? Object.assign(
      new Be("Network Error", Be.ERR_NETWORK, e, C),
      {
        cause: N.cause || N
      }
    ) : Be.from(N, N && N.code, e, C);
  }
}), ui = {
  http: nm,
  xhr: Pm,
  fetch: Wm
};
Q.forEach(ui, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const kl = (e) => `- ${e}`, Hm = (e) => Q.isFunction(e) || e === null || e === !1, du = {
  getAdapter: (e) => {
    e = Q.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const a = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let l;
      if (n = r, !Hm(r) && (n = ui[(l = String(r)).toLowerCase()], n === void 0))
        throw new Be(`Unknown adapter '${l}'`);
      if (n)
        break;
      a[l || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(a).map(
        ([c, h]) => `adapter ${c} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? o.length > 1 ? `since :
` + o.map(kl).join(`
`) : " " + kl(o[0]) : "as no adapter specified";
      throw new Be(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ui
};
function zo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new bn(null, e);
}
function Cl(e) {
  return zo(e), e.headers = jt.from(e.headers), e.data = Uo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), du.getAdapter(e.adapter || Zn.adapter)(e).then(function(n) {
    return zo(e), n.data = Uo.call(
      e,
      e.transformResponse,
      n
    ), n.headers = jt.from(n.headers), n;
  }, function(n) {
    return ou(n) || (zo(e), n && n.response && (n.response.data = Uo.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = jt.from(n.response.headers))), Promise.reject(n);
  });
}
const fu = "1.8.2", no = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  no[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Tl = {};
no.transitional = function(t, r, n) {
  function a(o, l) {
    return "[Axios v" + fu + "] Transitional option '" + o + "'" + l + (n ? ". " + n : "");
  }
  return (o, l, c) => {
    if (t === !1)
      throw new Be(
        a(l, " has been removed" + (r ? " in " + r : "")),
        Be.ERR_DEPRECATED
      );
    return r && !Tl[l] && (Tl[l] = !0, console.warn(
      a(
        l,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, l, c) : !0;
  };
};
no.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Qm(e, t, r) {
  if (typeof e != "object")
    throw new Be("options must be an object", Be.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const o = n[a], l = t[o];
    if (l) {
      const c = e[o], h = c === void 0 || l(c, o, e);
      if (h !== !0)
        throw new Be("option " + o + " must be " + h, Be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Be("Unknown option " + o, Be.ERR_BAD_OPTION);
  }
}
const Pa = {
  assertOptions: Qm,
  validators: no
}, pr = Pa.validators;
let Xr = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new yl(),
      response: new yl()
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
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? o && !String(n.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + o) : n.stack = o;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = $r(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: o } = r;
    n !== void 0 && Pa.assertOptions(n, {
      silentJSONParsing: pr.transitional(pr.boolean),
      forcedJSONParsing: pr.transitional(pr.boolean),
      clarifyTimeoutError: pr.transitional(pr.boolean)
    }, !1), a != null && (Q.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Pa.assertOptions(a, {
      encode: pr.function,
      serialize: pr.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Pa.assertOptions(r, {
      baseUrl: pr.spelling("baseURL"),
      withXsrfToken: pr.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let l = o && Q.merge(
      o.common,
      o[r.method]
    );
    o && Q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete o[C];
      }
    ), r.headers = jt.concat(l, o);
    const c = [];
    let h = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (h = h && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(w) {
      d.push(w.fulfilled, w.rejected);
    });
    let y, m = 0, I;
    if (!h) {
      const C = [Cl.bind(this), void 0];
      for (C.unshift.apply(C, c), C.push.apply(C, d), I = C.length, y = Promise.resolve(r); m < I; )
        y = y.then(C[m++], C[m++]);
      return y;
    }
    I = c.length;
    let U = r;
    for (m = 0; m < I; ) {
      const C = c[m++], w = c[m++];
      try {
        U = C(U);
      } catch (E) {
        w.call(this, E);
        break;
      }
    }
    try {
      y = Cl.call(this, U);
    } catch (C) {
      return Promise.reject(C);
    }
    for (m = 0, I = d.length; m < I; )
      y = y.then(d[m++], d[m++]);
    return y;
  }
  getUri(t) {
    t = $r(this.defaults, t);
    const r = su(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ru(r, t.params, t.paramsSerializer);
  }
};
Q.forEach(["delete", "get", "head", "options"], function(t) {
  Xr.prototype[t] = function(r, n) {
    return this.request($r(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
Q.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, l, c) {
      return this.request($r(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  Xr.prototype[t] = r(), Xr.prototype[t + "Form"] = r(!0);
});
let Gm = class pu {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const l = new Promise((c) => {
        n.subscribe(c), o = c;
      }).then(a);
      return l.cancel = function() {
        n.unsubscribe(o);
      }, l;
    }, t(function(o, l, c) {
      n.reason || (n.reason = new bn(o, l, c), r(n.reason));
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
      token: new pu(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function qm(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Vm(e) {
  return Q.isObject(e) && e.isAxiosError === !0;
}
const di = {
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
Object.entries(di).forEach(([e, t]) => {
  di[t] = e;
});
function hu(e) {
  const t = new Xr(e), r = Gc(Xr.prototype.request, t);
  return Q.extend(r, Xr.prototype, t, { allOwnKeys: !0 }), Q.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return hu($r(e, a));
  }, r;
}
const Ze = hu(Zn);
Ze.Axios = Xr;
Ze.CanceledError = bn;
Ze.CancelToken = Gm;
Ze.isCancel = ou;
Ze.VERSION = fu;
Ze.toFormData = to;
Ze.AxiosError = Be;
Ze.Cancel = Ze.CanceledError;
Ze.all = function(t) {
  return Promise.all(t);
};
Ze.spread = qm;
Ze.isAxiosError = Vm;
Ze.mergeConfig = $r;
Ze.AxiosHeaders = jt;
Ze.formToJSON = (e) => au(Q.isHTMLForm(e) ? new FormData(e) : e);
Ze.getAdapter = du.getAdapter;
Ze.HttpStatusCode = di;
Ze.default = Ze;
const {
  Axios: Ab,
  AxiosError: Sb,
  CanceledError: xb,
  isCancel: Eb,
  CancelToken: kb,
  VERSION: Cb,
  all: Tb,
  Cancel: Rb,
  isAxiosError: Ib,
  spread: _b,
  toFormData: Ob,
  AxiosHeaders: Lb,
  HttpStatusCode: Pb,
  formToJSON: Nb,
  getAdapter: Db,
  mergeConfig: Bb
} = Ze, Ym = "data:image/png;base64,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";
let Ga = Ym;
const ji = (e) => {
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
}, Jm = (e) => Array.isArray(e.title) && e.title[0] && e.dept_name ? {
  matchedAffiliationTitle: e.title[0],
  matchedAffiliationDept: e.dept_name
} : {
  matchedAffiliationTitle: e.title,
  matchedAffiliationDept: e.dept_name
}, gu = (e) => {
  if (!e) return "";
  const t = { SIZE: "size", BREAK: "break" }, r = { MEDIUM: "medium" }, n = () => {
    const o = Date.now(), l = Math.floor(o / 1e3);
    return (Math.floor(l / 100) * 100).toString();
  }, a = new URL(e);
  return a.searchParams.append(
    t.SIZE,
    r.MEDIUM
  ), a.searchParams.append(t.BREAK, n()), a.searchParams.append("blankImage2", "true"), a.toString();
}, ka = ({
  datum: e,
  options: t = {
    size: "small",
    profileURLBase: null,
    fill: !1,
    grid: !1
  },
  appPathFolder: r
}) => {
  var h, d, y;
  const n = ji(e), a = Jm(n), o = t.profileURLBase ?? "", l = (h = n.eid) != null && h.raw && ((d = n.eid) == null ? void 0 : d.raw) !== "0" ? n.eid.raw.toString() : n.asurite_id.raw.toString();
  r && (Ga = `${r}/img/anon.png`);
  const c = gu(n.photo_url.raw);
  return /* @__PURE__ */ T.jsx(T.Fragment, { children: l ? /* @__PURE__ */ T.jsx(
    yi,
    {
      isRequired: !1,
      id: l,
      profileURL: `${o}/profile/${l}`,
      imgURL: c,
      anonImgURL: Ga,
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
}, Xm = ({
  datum: e,
  options: t = {
    size: "small",
    fill: !1
  },
  appPathFolder: r
}) => {
  const n = ji(e);
  r && (Ga = `${r}/img/anon.png`);
  const a = n.eid.raw && n.eid.raw !== "0" ? n.eid.raw.toString() : n.asurite_id.raw.toString(), o = gu(n.photo_url.raw);
  return /* @__PURE__ */ T.jsx(
    yi,
    {
      isRequired: !1,
      id: a,
      profileURL: `/profile/${a}`,
      imgURL: o,
      anonImgURL: Ga,
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
}, Rl = ({
  datum: e,
  options: t = {
    size: "small",
    fill: !1
  },
  appPathFolder: r,
  logClick: n = () => {
  },
  requestId: a,
  localSection: o = null,
  props: l
}) => {
  const c = ji(e);
  let h = null;
  return c.meta_description ? h = c.meta_description.raw : h = c.body_content.raw.replace("Skip to main content ", "").replace("Skip to Main Page Content ", ""), /* @__PURE__ */ T.jsx(
    mc,
    {
      id: c.id.raw,
      name: c.title.raw,
      area: c.url_host.raw,
      description: h,
      cookieTrail: [
        c.url_path_dir1.raw,
        c.url_path_dir2.raw
      ],
      link: c.url.raw,
      size: t.size,
      fill: t.fill,
      logClick: n,
      requestId: a,
      localSection: o,
      ...l
    },
    c.id.raw
  );
};
function Na(e) {
  try {
    const t = new URL(e), r = t.pathname.replace(/\/+/g, "/");
    return new URL(
      `${t.protocol}//${t.host}${r}${t.search}`
    );
  } catch (t) {
    throw new Error("Invalid URL", t.message);
  }
}
const Ae = {
  FACULTY: "web_dir_faculty_staff",
  STUDENTS: "web_dir_students",
  SITES: "web_sites",
  SITES_LOCAL: "web_sites_local",
  WEB_DIRECTORY_DEPARTMENTS: "people_in_dept",
  WEB_DIRECTORY_PEOPLE_AND_DEPS: "profiles_dept_and_people",
  WEB_DIRECTORY_FACULTY_RANK: "web_dir_faculty_rank"
};
function Il(e, t, r, n, { ...a }) {
  async function o(l, c) {
    const h = {
      query: e,
      doc_id: t,
      req_id: r,
      tags: n
    };
    let d;
    if (a.loggedIn) {
      const m = {
        "X-CSRF-Token": (await Ze.get(`${a.API_URL}/session/token`)).data
      };
      d = await Ze.post(
        `${a.API_URL}${a.searchApiVersion}webdir-click`,
        h,
        { headers: m }
      ), l(d.data);
    } else
      d = await Ze.post(
        `${a.API_URL}${a.searchApiVersion}webdir-click`,
        h
      ), l(d.data);
    c(d.data);
  }
  return new Promise(o);
}
const Km = (e, t) => {
  const r = e.reduce((a, o) => a === null || a._meta.score < o._meta.score ? o : a, null), n = t === "web_dir_faculty_staff" ? 100 : 1;
  return r && r._meta.score >= n ? r : null;
}, Ca = ({
  engineName: e,
  results: t,
  cardSize: r,
  appPathFolder: n,
  localSection: a,
  props: o
}) => {
  const l = Km(t.results, e);
  return {
    tab: e,
    page: t.meta.page,
    results: t.results.map(
      (c) => kt[e].converter({
        datum: c,
        options: { size: r, fill: !1 },
        appPathFolder: n,
        logClick: Il,
        requestId: t.meta.request_id,
        localSection: a,
        props: { ...o }
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
      logClick: Il,
      requestId: t.meta.request_id,
      props: { ...o }
    })
  };
}, Wo = ({
  engineName: e,
  results: t,
  cardSize: r,
  filters: n,
  appPathFolder: a,
  grid: o
}) => {
  var h;
  let l = null, c = 1;
  return kt[e].name === Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS ? l = t.map((d) => {
    const { full_record: y, ...m } = d;
    return { ...m, ...y };
  }) : (l = t.results, c = (h = t == null ? void 0 : t.meta) == null ? void 0 : h.page), n && n.peopleIds && (l = l.filter((d) => n.peopleIds.includes(d.asurite_id.raw))), {
    tab: kt[e].name,
    page: c,
    results: l.map((d) => {
      try {
        return kt[e].converter({
          datum: d,
          options: {
            size: "large",
            profileURLBase: "https://search.asu.edu",
            grid: o
          },
          appPathFolder: a
        });
      } catch (y) {
        return console.log(y, d), null;
      }
    })
  };
}, kt = {
  [Ae.FACULTY]: {
    name: Ae.FACULTY,
    url: "webdir-profiles/faculty-staff",
    needsAuth: !1,
    converter: ka,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r = null, appPathFolder: n }) => Ca({
      engineName: Ae.FACULTY,
      results: e,
      cardSize: t,
      appPathFolder: n
    }),
    needsTerm: !0,
    doTitleLogic: !0
  },
  [Ae.STUDENTS]: {
    name: Ae.STUDENTS,
    url: "webdir-profiles/students",
    needsAuth: !0,
    converter: Xm,
    resultsPerSummaryPage: 3,
    supportedSortTypes: ["_score_desc", "last_name_asc", "last_name_desc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r = null, appPathFolder: n }) => Ca({
      engineName: Ae.STUDENTS,
      results: e,
      cardSize: t,
      appPathFolder: n
    }),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [Ae.SITES]: {
    name: Ae.SITES,
    url: "webdir-search/web",
    needsAuth: !1,
    converter: Rl,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: (e, t, r = null, n, a = null, { ...o }) => Ca(
      Ae.SITES_LOCAL,
      e,
      t,
      n,
      a,
      { ...o }
    ),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [Ae.SITES_LOCAL]: {
    name: Ae.SITES_LOCAL,
    url: "webdir-search/web",
    needsAuth: !1,
    converter: Rl,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "date_desc"],
    method: "GET",
    formatter: ({
      results: e,
      cardSize: t,
      filters: r = null,
      appPathFolder: n,
      localSection: a = null,
      props: { ...o }
    }) => Ca({
      engineName: Ae.SITES_LOCAL,
      results: e,
      cardSize: t,
      appPathFolder: n,
      localSection: a,
      props: { ...o }
    }),
    needsTerm: !0,
    doTitleLogic: !1
  },
  [Ae.WEB_DIRECTORY_DEPARTMENTS]: {
    name: Ae.WEB_DIRECTORY_DEPARTMENTS,
    url: "webdir-profiles/faculty-staff/filtered",
    needsAuth: !1,
    converter: ka,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc", "last_name_asc"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Wo({
      engineName: Ae.WEB_DIRECTORY_DEPARTMENTS,
      results: e,
      cardSize: t,
      filters: r,
      grid: a,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  },
  [Ae.WEB_DIRECTORY_FACULTY_RANK]: {
    name: Ae.WEB_DIRECTORY_FACULTY_RANK,
    url: "webdir-profiles/faculty-staff/filtered",
    needsAuth: !1,
    converter: ka,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["faculty_rank"],
    method: "GET",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Wo({
      engineName: Ae.WEB_DIRECTORY_DEPARTMENTS,
      results: e,
      grid: a,
      cardSize: t,
      filters: r,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  },
  [Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
    name: Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    url: "webdir-profiles/department",
    needsAuth: !1,
    converter: ka,
    resultsPerSummaryPage: 6,
    supportedSortTypes: ["_score_desc", "last_name_desc", "last_name_asc"],
    method: "POST",
    formatter: ({ results: e, cardSize: t, filters: r, appPathFolder: n, grid: a }) => Wo({
      engineName: Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS,
      results: e,
      cardSize: t,
      grid: a,
      filters: r,
      appPathFolder: n
    }),
    needsTerm: !1,
    doTitleLogic: !0
  }
}, $m = function({
  engine: e,
  term: t,
  page: r,
  itemsPerPage: n,
  sort: a,
  filters: o,
  display: l,
  rankGroup: c,
  controller: h,
  size: d,
  restClientTag: y
}) {
  async function m(I, U) {
    const C = e.supportedSortTypes.includes(a) ? a : "";
    let E = `${e.API_URL ? `${e.API_URL}${e.searchApiVersion}` : "https://dev-asu-isearch.ws.asu.edu/api/v1/"}${e.url}`, N = null, D = null;
    if (e.method === "GET") {
      if (E = `${E}?sort-by=${C}`, t && (E = `${E}&query=${t}`), r && (E = `${E}&page=${r}`), e.site && (E = `${E}&url_host=${e.site}`), n && (E = `${E}&size=${n}`), o && o.deptIds) {
        const B = o.deptIds.map((R) => `${R}`).join(",");
        E = `${E}&dept_ids=${B}`;
      }
      if (l != null && l.doNotDisplayProfiles) {
        const B = `profiles_to_exclude=${l.doNotDisplayProfiles}`;
        E = `${E}&${B}`;
      }
      if (o && o.peopleIds) {
        const B = o.peopleIds.map((R) => `${R}`).join(",");
        E = `${E}&asurite_ids=${B}`;
      }
      if (o && o.title) {
        const B = `title=${o.title}`;
        E = `${E}&${B}`;
      }
      if (o && o.campuses) {
        const B = `campuses=${o.campuses}`;
        E = `${E}&${B}`;
      }
      if (o && o.expertise) {
        const B = `expertise_areas=${o.expertise}`;
        E = `${E}&${B}`;
      }
      if (o && o.employee) {
        const B = `employee_types=${o.employee}`;
        E = `${E}&${B}`;
      }
      if (o && o.lastInit) {
        const B = `last_init=${o.lastInit}`;
        E = `${E}&${B}`;
      }
      c && (E = `${E}&rank_group=${c}`), y && (E = `${E}&client=${y}`);
      const F = Na(E);
      D = () => Ze.get(F, { signal: h.signal });
    } else {
      if (!o)
        return;
      const F = Na(
        `${e.API_URL}/session/token`
      );
      N = await Ze.get(F);
      const B = {
        "X-CSRF-Token": N.data
      }, R = {
        size: d,
        page: r,
        "sort-by": C || "",
        full_records: !0,
        profiles: o.peopleInDepts,
        last_init: o.lastInit || null,
        profiles_to_exclude: l.doNotDisplayProfiles || null
      };
      y && (E = `${E}?&client=${y}`);
      const ae = Na(E);
      D = () => Ze.post(ae, R, { headers: B });
    }
    D().then((F) => {
      const { data: B } = F;
      I(B);
    }).catch((F) => {
      var B;
      ((B = F.response) == null ? void 0 : B.status) === 403 && U(403);
    });
  }
  return new Promise(m);
}, mu = ({
  children: e,
  items: t = [],
  renderItem: r,
  columns: n = 3,
  gap: a = 3,
  className: o,
  rowClassName: l,
  colClassName: c
}) => {
  const h = () => typeof n == "number" ? `col-12 col-md-${Math.floor(12 / n)}` : typeof n == "object" ? Object.entries(n).map(([y, m]) => `${y === "xs" ? "col" : `col-${y}`}-${Math.floor(12 / m)}`).join(" ") : "col-12 col-md-4", d = () => (r ? t.map((m, I) => r(m, I)) : ht.Children.toArray(e)).map((m, I) => /* @__PURE__ */ T.jsx(
    "div",
    {
      className: `${h()} ${c || ""} mb-${a}`,
      children: m
    },
    m.id ? m.id : I
  ));
  return /* @__PURE__ */ T.jsx("div", { className: `uds-grid ${o || ""}`, children: /* @__PURE__ */ T.jsx("div", { className: `row ${l || ""}`, children: d() }) });
};
mu.propTypes = {
  children: _.node,
  items: _.arrayOf(_.shape({})),
  renderItem: _.func,
  columns: _.oneOfType([
    _.number,
    _.shape({
      xs: _.number,
      sm: _.number,
      md: _.number,
      lg: _.number,
      xl: _.number
    })
  ]),
  gap: _.number,
  className: _.string,
  rowClassName: _.string,
  colClassName: _.string
};
const Zm = wt.div`
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
`, eb = wt.div`
  .search-message-emphasis {
    font-weight: bold;
  }
`, bu = ({ term: e, number: t, loggedIn: r, engine: n, GASource: a }) => {
  const [o, l] = Qe("");
  function c() {
    let h = "";
    try {
      const d = new URLSearchParams(window.location.search), y = d.get("search-tabs"), m = d.get("q");
      return h = `search-tabs=${y}&q=${m}`, h;
    } catch (d) {
      return console.error(d), "";
    }
  }
  return mt(() => {
    const h = c();
    l(h);
  }, []), /* @__PURE__ */ T.jsxs(eb, { children: [
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
            `/?${o}`
          )}`,
          children: "Sign in"
        }
      ),
      " ",
      "to view all student results."
    ] })
  ] });
};
bu.propTypes = {
  term: _.string,
  number: _.number,
  loggedIn: _.bool,
  engine: _.string,
  GASource: _.string
};
var Yr, dn, yu, wu;
const qa = class qa {
  constructor(t, r) {
    mo(this, dn);
    mo(this, Yr);
    this.engine = t, this.filters = r, bo(this, Yr, null);
  }
  static processURL(t) {
    return Na(t);
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
    const n = qa.processURL(
      `${this.engine.API_URL}${this.engine.searchApiVersion}/webdir-profiles/department?client=webdir`
    );
    return (await Ze.post(
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
    if (!go(this, Yr)) {
      const t = qa.processURL(
        `${this.engine.API_URL}/session/token`
      );
      bo(this, Yr, (async () => {
        const r = await Ze.get(t);
        return this.sessionToken = r.data, this.sessionToken;
      })());
    }
    return go(this, Yr);
  }
  /**
   * This method is directly called from the SearchResultsList component and adds a
   * "title" and "dept_name" field to the individual results used in dataConverter.js
   */
  async processProfiles(t, r) {
    return this.engine.method === "POST" || !this.engine.doTitleLogic || r.results.length < 1 ? r : (await this.getSessionToken(), t ? yo(this, dn, yu).call(this, r) : this.engine.method === "GET" ? yo(this, dn, wu).call(this, r) : r);
  }
};
Yr = new WeakMap(), dn = new WeakSet(), yu = async function(t) {
  const r = t.results.map((a) => ({
    asurite_id: a.asurite_id.raw,
    dept_id: null
  })), n = await this.fetchProfilesFromApi(r);
  return {
    ...t,
    results: t.results.map((a, o) => ({
      ...a,
      title: n[o].title,
      dept_name: n[o].dept_name
    }))
  };
}, wu = async function(t) {
  const r = t.results.map(({ asurite_id: a, deptids: o }) => ({
    asurite_id: a.raw,
    dept_id: this.filters.deptIds.find(
      (l) => o.raw.includes(l)
    )
  })), n = await this.fetchProfilesFromApi(r);
  return {
    ...t,
    results: t.results.map((a, o) => ({
      ...a,
      title: n[o].title,
      dept_name: n[o].dept_name
    }))
  };
};
let fi = qa;
const tb = wt.div`
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
`, Tr = ({
  term: e,
  sort: t,
  type: r,
  engine: n,
  titleText: a,
  showSearchMessage: o,
  seeAllResultsText: l,
  itemsPerPage: c,
  onExpandClick: h,
  GASource: d,
  setPromotedResult: y,
  hidePaginator: m,
  registerResults: I,
  filters: U,
  loggedIn: C,
  profilesToFilterOut: w,
  display: E,
  appPathFolder: N,
  localSection: D,
  rankGroup: F,
  icon: B,
  restClientTag: R,
  grid: ae
}) => {
  const [de, Z] = Qe([]), [le, we] = Qe(!0), [ue, ge] = Qe(null), [Ie, Oe] = Qe(1), [me, st] = Qe(null), [Ue, Pe] = Qe(null), Ge = r === "micro" ? "micro" : "large", Xe = Kr(null), pe = new AbortController(), q = (te, P) => {
    if (!te) return {};
    const ce = n.formatter({
      results: te,
      page: Ie,
      itemsPerPage: c,
      cardSize: Ge,
      grid: P,
      filters: U,
      appPathFolder: N || n.appPathFolder,
      localSection: D,
      props: {
        API_URL: n.API_URL,
        searchApiVersion: n.searchApiVersion,
        loggedIn: C
      }
    }), re = ce.results.map((oe, J) => {
      var be, ie;
      const fe = {
        ...oe.props,
        key: J,
        GASource: d
      };
      return {
        ...oe,
        props: fe,
        key: ((ie = (be = oe.props) == null ? void 0 : be.children) == null ? void 0 : ie.key) ?? J
      };
    });
    return Z(re), ce;
  }, L = async (te = Ie) => {
    var P;
    if (e && e.length > 0 || !n.needsTerm) {
      we(!0);
      try {
        let re = await $m({
          engine: n,
          term: e,
          page: te,
          itemsPerPage: c,
          sort: t,
          filters: U,
          display: E,
          rankGroup: F,
          controller: pe,
          size: E == null ? void 0 : E.profilesPerPage,
          restClientTag: R
        });
        re = await new fi(n, U).processProfiles(
          e,
          re
        ), Pe(re);
        const J = q(re, ae);
        I && I(J.page.total_results), n.method === "GET" && Oe(J.page.current), n.method === "POST" ? st((P = re[0]) == null ? void 0 : P.total_results) : st(J.page.total_results), y && y(J.topResult), o && ge(
          /* @__PURE__ */ T.jsx(
            bu,
            {
              term: e,
              number: J.page.total_results,
              loggedIn: C,
              engine: n.name,
              GASource: d
            }
          )
        ), we(!1), sn({
          event: "search",
          action: "type",
          name: "onenter",
          type: "search asu.edu",
          section: "search",
          text: e
        });
      } catch (ce) {
        console.error(ce), we(!1), Z([]);
      }
    }
  }, G = (te) => {
    Oe(te), L(te), de.length > 0 && (Xe.current.scrollIntoView(!0), Xe.current.firstElementChild.focus());
  };
  mt(() => {
    Ue && q(Ue, ae);
  }, [ae]), mt(() => (L(1), () => pe == null ? void 0 : pe.abort()), [e, t, U, c, w]);
  function H(te) {
    sn({
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      section: d,
      text: te
    }), h();
  }
  const v = /* @__PURE__ */ T.jsx(
    Er,
    {
      color: "maroon",
      label: l,
      size: "small",
      onClick: () => H("See all results from subdomain")
    }
  );
  return /* @__PURE__ */ T.jsxs(tb, { children: [
    !le && /* @__PURE__ */ T.jsxs("div", { className: r, children: [
      ue && r !== "micro" && /* @__PURE__ */ T.jsx("div", { className: "message", children: /* @__PURE__ */ T.jsx("div", { className: "results-search-message", children: ue }) }),
      a && /* @__PURE__ */ T.jsxs("div", { className: `results-title${r === "micro" ? "-small" : ""}`, children: [
        a,
        " ",
        B && /* @__PURE__ */ T.jsx("i", { className: `${B == null ? void 0 : B[0]} fa-${B == null ? void 0 : B[1]}` })
      ] }),
      de.length > 0 && !le ? /* @__PURE__ */ T.jsx("div", { ref: Xe, className: "results-found", children: ae ? /* @__PURE__ */ T.jsx(mu, { columns: { sm: 1, lg: 2, xl: 3 }, gap: 4, children: de }) : de }) : /* @__PURE__ */ T.jsx("div", { className: "results-found", children: "No results found" }),
      !m && me >= c && /* @__PURE__ */ T.jsx(
        Oi,
        {
          type: "default",
          background: "white",
          currentPage: Ie,
          totalPages: Math.ceil(me / c) > 100 ? 100 : Math.ceil(me / c),
          onChange: (te, P) => G(P),
          showFirstButton: !0,
          showLastButton: !0
        }
      ),
      r === "preview" && /* @__PURE__ */ T.jsx("div", { className: "summary", children: v }),
      r === "micro" && /* @__PURE__ */ T.jsxs("div", { className: "summary", children: [
        ue,
        v
      ] })
    ] }),
    le && /* @__PURE__ */ T.jsx("div", { children: "Loading..." })
  ] });
};
Tr.propTypes = {
  term: _.string,
  type: _.string,
  // eslint-disable-next-line react/forbid-prop-types
  engine: _.object,
  seeAllResultsText: _.string,
  sort: _.string,
  titleText: _.string,
  showSearchMessage: _.bool,
  itemsPerPage: _.number,
  onExpandClick: _.func,
  GASource: _.string,
  setPromotedResult: _.func,
  hidePaginator: _.bool,
  registerResults: _.func,
  // eslint-disable-next-line react/forbid-prop-types
  filters: _.object,
  loggedIn: _.bool,
  profilesToFilterOut: _.string,
  display: _.shape({
    defaultSort: _.string,
    doNotDisplayProfiles: _.string,
    profilesPerPage: _.string,
    usePager: _.string
  }),
  appPathFolder: _.string,
  localSection: _.bool,
  rankGroup: _.string,
  icon: _.arrayOf(_.string),
  restClientTag: _.string,
  grid: _.bool
};
const rb = wt.div`
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
`, nb = wt.div`
  display: flex;
  flex-direction: column;
`, ab = wt.div`
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
`, ob = wt.div`
  display: flex;
  flex-direction: column;
`, vu = ({
  term: e,
  engines: t,
  site: r,
  goToTab: n,
  setTotalResults: a,
  totalResults: o,
  loggedIn: l
}) => {
  const [c, h] = Qe(null), [d, y] = Qe(null), m = {
    sites: "web_sites",
    faculty: "web_dir_faculty_staff",
    students: "web_dir_students"
  }, I = (U) => {
    a((C) => C + U);
  };
  return mt(() => () => a(0), []), mt(() => {
    const U = "007921449323584335659:7htbgpmmreu", C = document.createElement("script");
    C.type = "text/javascript", C.async = !0, C.src = `https://cse.google.com/cse.js?cx=${U}`;
    const w = document.getElementsByTagName("script")[0];
    w.parentNode.insertBefore(C, w);
  }), /* @__PURE__ */ T.jsxs(rb, { children: [
    /* @__PURE__ */ T.jsx("div", { className: "all-message" }),
    /* @__PURE__ */ T.jsxs("div", { className: "all-content", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "all-content-column", children: [
        (d || c) && /* @__PURE__ */ T.jsxs("div", { className: "top-results all-content-item", children: [
          /* @__PURE__ */ T.jsx("div", { children: d }),
          /* @__PURE__ */ T.jsx("div", { children: c })
        ] }),
        r && /* @__PURE__ */ T.jsx("div", { className: "subdomain-results all-content-item", children: /* @__PURE__ */ T.jsx(
          Tr,
          {
            engine: t[Ae.SITES_LOCAL],
            term: e,
            type: "preview",
            itemsPerPage: 3,
            titleText: `All results from ${r}`,
            seeAllResultsText: `See all results from ${r}`,
            onExpandClick: () => n(m.sites),
            GASource: `all results from ${r}`,
            hidePaginator: !0,
            registerResults: I,
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
          Tr,
          {
            engine: t[Ae.FACULTY],
            term: e,
            itemsPerPage: 3,
            titleText: "Faculty and staff",
            type: "micro",
            seeAllResultsText: "See all results",
            onExpandClick: () => n(m.faculty),
            GASource: "faculty and staff",
            setPromotedResult: h,
            hidePaginator: !0,
            registerResults: I,
            restClientTag: "asuis"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "students all-content-item", children: /* @__PURE__ */ T.jsx(
          Tr,
          {
            engine: t[Ae.STUDENTS],
            term: e,
            itemsPerPage: 3,
            titleText: "Students",
            type: "micro",
            seeAllResultsText: "See all results",
            onExpandClick: () => n(m.students),
            GASource: "students",
            hidePaginator: !0,
            registerResults: I,
            icon: ["fa", "lock"],
            restClientTag: "asuis"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "quick-links all-content-item", children: /* @__PURE__ */ T.jsx(Kl, {}) })
      ] })
    ] })
  ] }, document.location.href);
};
vu.propTypes = {
  term: _.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: _.object,
  site: _.string,
  goToTab: _.func,
  setTotalResults: _.func,
  totalResults: _.number,
  loggedIn: _.bool
};
const Mi = ({ sort: e, onChange: t, customSortOptions: r }) => {
  const [n, a] = Qe(e), o = Pl(), l = r || [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" }
  ], c = (m) => {
    const I = l.filter(
      (U) => U.value === m && !U.disabled
    );
    I.length >= 1 ? a(I[0].value) : a("default");
  }, h = () => {
    var I;
    let m = (I = l.find((U) => U.value === e)) == null ? void 0 : I.label;
    return m === "Relevancy" && (m = "Sort by Relevancy"), m;
  }, d = () => {
    sn({
      event: "collapse",
      action: "open",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: h()
    });
  }, y = (m) => {
    t(m), sn({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: h()
    });
  };
  return mt(() => (c(e), () => a("default")), [e]), /* @__PURE__ */ T.jsx(Zm, { children: /* @__PURE__ */ T.jsx("form", { className: "uds-form sort-form faculty-sort", children: /* @__PURE__ */ T.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ T.jsx("label", { htmlFor: o, children: "Sort by" }),
    /* @__PURE__ */ T.jsx(
      "select",
      {
        className: "form-select",
        id: o,
        onChange: (m) => {
          y(m.target.value), a(m.target.value);
        },
        onClick: d,
        value: n,
        children: l.map(
          (m) => Object.prototype.hasOwnProperty.call(m, "disabled") ? /* @__PURE__ */ T.jsx("option", { disabled: !0, value: "default", children: m.label }, m.label) : /* @__PURE__ */ T.jsx("option", { value: m.value, children: m.label === "Relevancy" ? "Sort by Relevancy" : m.label }, m.label)
        )
      }
    )
  ] }) }) });
};
Mi.propTypes = {
  sort: _.string,
  onChange: _.func,
  customSortOptions: _.arrayOf(
    _.shape({
      value: _.string,
      label: _.string
    })
  )
};
const Au = ({ engines: e, term: t, sort: r, onSortChange: n }) => /* @__PURE__ */ T.jsxs(ab, { children: [
  /* @__PURE__ */ T.jsx("div", { className: "faculty-sort", children: /* @__PURE__ */ T.jsx(Mi, { sort: r, onChange: (a) => n(a) }) }),
  /* @__PURE__ */ T.jsx("div", { className: "faculty-results", children: /* @__PURE__ */ T.jsx(
    Tr,
    {
      term: t,
      engine: e[Ae.FACULTY],
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
Au.propTypes = {
  term: _.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: _.object,
  sort: _.string,
  onSortChange: _.func
};
const Su = ({ engines: e, term: t, site: r, loggedIn: n }) => /* @__PURE__ */ T.jsx(nb, { children: /* @__PURE__ */ T.jsx(
  Tr,
  {
    engine: e[Ae.SITES_LOCAL],
    term: t,
    itemsPerPage: 6,
    type: "full",
    GASource: r,
    titleText: r,
    loggedIn: n
  }
) });
Su.propTypes = {
  term: _.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: _.object,
  site: _.string,
  loggedIn: _.bool
};
const xu = ({ engines: e, term: t, loggedIn: r }) => /* @__PURE__ */ T.jsx(ob, { children: /* @__PURE__ */ T.jsx(
  Tr,
  {
    term: t,
    engine: e[Ae.STUDENTS],
    itemsPerPage: 6,
    type: "full",
    GASource: "all student results",
    titleText: "All Student results",
    loggedIn: r,
    showSearchMessage: !0,
    restClientTag: "asuis"
  }
) });
xu.propTypes = {
  term: _.string,
  // eslint-disable-next-line react/forbid-prop-types
  engines: _.object,
  loggedIn: _.bool
};
const Un = {
  all: "all",
  sites: "web_sites",
  faculty: "web_dir_faculty_staff",
  students: "web_dir_students"
}, ib = wt.div`
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
function Eu({
  API_URL: e,
  searchApiVersion: t,
  loggedIn: r,
  deptAdmin: n,
  profileURLBase: a,
  appPathFolder: o
}) {
  const l = "search-tabs", c = "q", h = "url_host", [d, y] = Qe(""), [m, I] = Qe(""), [U, C] = Qe(0), [w, E] = Qe(""), [N, D] = gc({
    [l]: Un.all
  }), [F] = Qe({}), [B, R] = Qe(null), ae = Kr(null), de = {
    filters: F,
    API_URL: e,
    searchApiVersion: t,
    profileURLBase: a || "https://search.asu.edu",
    appPathFolder: o
  }, Z = {
    [Ae.FACULTY]: { ...kt[Ae.FACULTY], ...de },
    [Ae.STUDENTS]: {
      ...kt[Ae.STUDENTS],
      ...de
    },
    [Ae.SITES_LOCAL]: {
      ...kt[Ae.SITES_LOCAL],
      ...de,
      site: B
    },
    [Ae.SITES]: { ...kt[Ae.SITES], ...de }
  }, le = (me, st) => {
    const Ue = {};
    for (const Pe of N.entries())
      Ue[Pe[0]] = Pe[1];
    Ue[me] = st, D(Ue);
  }, we = () => {
    w.length > 0 && (C(0), le(c, w));
  }, ue = (me) => {
    I(me);
  };
  mt(() => {
    N.get(h) && R(N.get(h)), N.get(c) && (y(N.get(c)), E(N.get(c)));
  }, [N, m]), mt(() => {
    ae.current && ae.current.focus();
  }, []);
  const ge = (me) => {
    le(l, me), C(0);
  }, Ie = (me) => {
    me.keyCode === 13 && (me.preventDefault(), we());
  }, Oe = (me) => d ? me : Gd[N.get(l)];
  return /* @__PURE__ */ T.jsxs(ib, { children: [
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
            onChange: (me) => E(me.target.value),
            onKeyDown: Ie,
            ref: ae
          }
        ),
        /* @__PURE__ */ T.jsx(
          Er,
          {
            color: "maroon",
            icon: ["fas", "search"],
            label: "Search",
            onClick: () => we()
          }
        )
      ] }) }),
      /* @__PURE__ */ T.jsxs("div", { className: "profile-options", children: [
        /* @__PURE__ */ T.jsx("div", { className: "desktop-button", children: /* @__PURE__ */ T.jsx(
          Er,
          {
            color: "gray",
            icon: ["fas", "lock"],
            label: "Edit my profile",
            href: "/profile-edit"
          }
        ) }),
        /* @__PURE__ */ T.jsx("div", { className: "mobile-button", children: /* @__PURE__ */ T.jsx(
          Er,
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
            Er,
            {
              color: "gray",
              icon: ["fas", "lock"],
              label: "Department admin",
              href: "/groups"
            }
          ) }),
          /* @__PURE__ */ T.jsx("div", { className: "mobile-button", children: /* @__PURE__ */ T.jsx(
            Er,
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
      Pi,
      {
        initialTab: N.get(l),
        onTabChange: (me) => ge(me),
        children: [
          /* @__PURE__ */ T.jsx(nn, { id: Un.all, title: "All ASU Search", children: Oe(
            /* @__PURE__ */ T.jsx(
              vu,
              {
                totalResults: U,
                setTotalResults: C,
                engines: Z,
                site: B,
                goToTab: ge,
                term: d,
                loggedIn: r
              }
            )
          ) }),
          B && /* @__PURE__ */ T.jsx(nn, { id: Un.sites, title: B, children: Oe(
            /* @__PURE__ */ T.jsx(
              Su,
              {
                loggedIn: r,
                engines: Z,
                site: B,
                term: d
              }
            )
          ) }),
          /* @__PURE__ */ T.jsx(nn, { id: Un.faculty, title: "Faculty and Staff", children: Oe(
            /* @__PURE__ */ T.jsx(
              Au,
              {
                engines: Z,
                term: d,
                sort: m,
                onSortChange: (me) => ue(me)
              }
            )
          ) }),
          /* @__PURE__ */ T.jsx(nn, { id: Un.students, icon: ["fa", "lock"], title: "Students", children: Oe(
            /* @__PURE__ */ T.jsx(
              xu,
              {
                loggedIn: r,
                engines: Z,
                term: d
              }
            )
          ) })
        ]
      }
    )
  ] });
}
Eu.propTypes = {
  API_URL: _.string,
  searchApiVersion: _.string,
  loggedIn: _.bool,
  deptAdmin: _.bool,
  profileURLBase: _.string,
  appPathFolder: _.string
};
var Fi, _l = Nl;
Fi = _l.createRoot, _l.hydrateRoot;
const sb = (e) => /* @__PURE__ */ T.jsx(hc, { children: /* @__PURE__ */ T.jsx(pc, { children: /* @__PURE__ */ T.jsx(Ai, { path: "*", element: /* @__PURE__ */ T.jsx(Eu, { ...e }) }) }) }), Ho = {
  1: "Faculty",
  2: "Academic Professionals",
  3: "Other Faculty and Academic Professionals"
}, ku = ({
  filters: e,
  API_URL: t,
  searchApiVersion: r,
  appPathFolder: n,
  deptIds: a,
  display: o,
  profileURLBase: l,
  searchType: c,
  grid: h
}) => {
  const [d, y] = Qe({}), [m, I] = Qe(null), [U, C] = Qe(!0), [w, E] = Qe({}), N = 6, D = "faculty_rank", F = new URL(
    `${t}${r}${kt[Ae.WEB_DIRECTORY_FACULTY_RANK].url}`
  );
  F.searchParams.append("sort_by", c), F.searchParams.append("dept_ids", a), F.searchParams.append("page", "1"), F.searchParams.append("size", "1");
  const B = async (Z) => {
    var ge;
    const le = `${F}&rank_group=${Z}`, ue = await (await fetch(le)).json();
    return { rankGroup: Z, length: (ge = ue.results) == null ? void 0 : ge.length };
  };
  mt(() => {
    const Z = { ...e };
    Z.deptIds = a.split(","), y(Z);
    const le = Object.keys(Ho).map(B);
    Promise.all(le).then((we) => {
      const ue = we.reduce((ge, { rankGroup: Ie, length: Oe }) => (Oe > 0 && (ge[Ie] = Ho[Ie]), ge), {});
      E(ue), C(!1);
    });
  }, [a, m]);
  const R = {
    filters: e,
    API_URL: t,
    searchApiVersion: r,
    profileURLBase: l || "https://search.asu.edu",
    appPathFolder: n
  }, ae = {
    [Ae.WEB_DIRECTORY_FACULTY_RANK]: {
      ...kt[Ae.WEB_DIRECTORY_FACULTY_RANK],
      ...R
    }
  }, de = {
    faculty_rank: Ae.WEB_DIRECTORY_FACULTY_RANK
  };
  return U ? /* @__PURE__ */ T.jsx("div", { children: "Loading..." }) : Object.keys(w).length ? /* @__PURE__ */ T.jsx(Pi, { onTabChange: I, children: Object.keys(w).map((Z) => /* @__PURE__ */ T.jsx(
    nn,
    {
      id: `faculty-${Z}`,
      title: Ho[Z],
      children: /* @__PURE__ */ T.jsx(
        Tr,
        {
          engine: ae[de[c]],
          itemsPerPage: parseInt(o.profilesPerPage, 10) || N,
          size: "large",
          sort: D,
          hidePaginator: o.usePager !== "1",
          filters: d,
          profilesToFilterOut: o.doNotDisplayProfiles,
          display: o,
          rankGroup: Z.toString(),
          restClientTag: "asuis",
          grid: h
        }
      )
    },
    Z
  )) }) : /* @__PURE__ */ T.jsxs("div", { children: [
    "No faculty rank data found for department ",
    a
  ] });
};
ku.propTypes = {
  deptIds: _.string,
  API_URL: _.string,
  searchApiVersion: _.string,
  searchType: _.string,
  profileURLBase: _.string,
  appPathFolder: _.string,
  display: _.shape({
    defaultSort: _.string,
    doNotDisplayProfiles: _.string,
    profilesPerPage: _.string,
    usePager: _.string
  }),
  filters: _.shape({
    employee: _.string,
    expertise: _.string,
    title: _.string,
    campuses: _.string
  }),
  grid: _.bool
};
const lb = [
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
], cb = wt.fieldset`
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
`, Cu = ({
  filterLabel: e,
  choices: t = [],
  onChoose: r = () => {
  },
  resetFilters: n = () => {
  }
}) => {
  const [a, o] = Qe(null), [l, c] = Qe(-1), [h, d] = Qe(0), y = Kr(null), [m, I] = Qe(0), [U, C] = Qe(0);
  mt(() => {
    const D = () => {
      I(y.current.scrollLeft);
    };
    return y.current && (y.current.addEventListener("scroll", D), D()), () => {
      var F;
      return (F = y.current) == null ? void 0 : F.removeEventListener("scroll", D);
    };
  }, [U]), mt(() => {
    const D = () => {
      y.current && C(
        y.current.scrollWidth - y.current.offsetWidth
      );
    };
    return y.current && (y.current.addEventListener("resize", D), D()), () => {
      var F;
      return (F = y.current) == null ? void 0 : F.removeEventListener("resize", D);
    };
  }, []), mt(() => {
    if (y.current) {
      const D = y.current.children.length;
      d(D);
    }
  }, []);
  const w = (D) => {
    var F;
    if (y.current) {
      if (D.key === "ArrowRight" && l + 1 < h) {
        const B = (F = y.current) == null ? void 0 : F.children[l + 1];
        c(l + 1), B.focus();
      } else if (D.key === "ArrowLeft" && l - 1 >= 0) {
        const B = y.current.children[l - 1];
        c(l - 1), B.focus();
      }
    }
  }, E = (D) => {
    o(D), r(D);
  }, N = (D) => {
    const F = y.current, B = F.scrollWidth - F.clientWidth;
    let ae = F.scrollLeft + 200 * D;
    ae = Math.max(0, Math.min(B, ae)), F.scrollTo({
      left: ae,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ T.jsxs(cb, { className: "filter-container", children: [
    /* @__PURE__ */ T.jsx("legend", { children: e }),
    /* @__PURE__ */ T.jsxs("div", { className: "choices-wrapper", children: [
      /* @__PURE__ */ T.jsx(
        Li,
        {
          hidePrev: m <= 0,
          hideNext: m >= U - 5,
          clickPrev: () => {
            N(-1);
          },
          clickNext: () => {
            N(1);
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
                onClick: (D) => {
                  D.preventDefault(), E(null), n();
                },
                tabIndex: -1,
                "aria-label": "All",
                "aria-checked": a === null,
                className: "choice",
                children: "All"
              }
            ),
            t.map((D) => /* @__PURE__ */ T.jsx(
              "button",
              {
                role: "radio",
                type: "button",
                onClick: (F) => {
                  F.preventDefault(), E(D);
                },
                "aria-checked": a === D,
                className: `${a === D ? "selected" : ""} choice`,
                "aria-label": `Filter by ${D}`,
                tabIndex: -1,
                children: D
              },
              D
            ))
          ]
        }
      )
    ] })
  ] });
};
Cu.propTypes = {
  filterLabel: _.string.isRequired,
  choices: _.arrayOf(_.string).isRequired,
  onChoose: _.func.isRequired,
  resetFilters: _.func
};
const ub = wt.div`
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
`, pi = ({ view: e, setView: t, label: r }) => /* @__PURE__ */ T.jsxs(
  ub,
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
pi.propTypes = {
  view: _.bool,
  setView: _.func,
  label: _.string
};
const db = wt.div`
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
`, fb = wt.div`
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
function Tu({
  searchType: e,
  ids: t,
  deptIds: r,
  API_URL: n,
  searchApiVersion: a,
  profileURLBase: o,
  appPathFolder: l,
  display: c,
  filters: h,
  alphaFilter: d = "false"
}) {
  const [y, m] = Qe(D), [I, U] = Qe(N), [C, w] = Qe(
    c.grid === "true" || c.grid === !0
  ), E = 6;
  mt(() => {
    typeof window < "u" && hf({
      packageName: "app-webdir-ui",
      component: "WebDirectory",
      type: e,
      configuration: {
        ...h,
        ...c
      }
    });
  }, []);
  function N() {
    const le = h ? { ...h } : {};
    return e === "departments" || e === "faculty_rank" ? (le.deptIds = r.split(","), le) : (le.peopleInDepts = t.split(",").filter((we) => we.includes(":")).map((we) => we.split(":")).map((we) => ({ asurite_id: we[0], dept_id: we[1] })), le);
  }
  function D() {
    const le = {
      last_name: "last_name_asc",
      people_order: "people_order"
    };
    return Object.prototype.hasOwnProperty.call(
      le,
      c == null ? void 0 : c.defaultSort
    ) ? le[c == null ? void 0 : c.defaultSort] : "last_name_asc";
  }
  function F(le, we) {
    var ue;
    return le === "departments" && ((ue = we == null ? void 0 : we.split(",")) == null ? void 0 : ue.length) < 2 ? [
      { value: "default", label: "Choose Sort", disabled: !0 },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" }
    ] : [
      { value: "default", label: "Choose Sort", disabled: !0 },
      { value: "last_name_asc", label: "Last Name (ascending)" },
      { value: "last_name_desc", label: "Last Name (descending)" }
    ];
  }
  const B = F(e, r), R = {
    filters: h,
    API_URL: n,
    searchApiVersion: a,
    profileURLBase: o || "https://search.asu.edu",
    appPathFolder: l
  }, ae = {
    [Ae.WEB_DIRECTORY_DEPARTMENTS]: {
      ...kt[Ae.WEB_DIRECTORY_DEPARTMENTS],
      ...R
    },
    [Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...kt[Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...R
    },
    [Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS]: {
      ...kt[Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS],
      ...R
    },
    [Ae.WEB_DIRECTORY_FACULTY_RANK]: {
      ...kt[Ae.WEB_DIRECTORY_FACULTY__RANK],
      ...R,
      deptIds: r,
      display: c,
      searchType: e
    }
  }, de = (le) => {
    m(le);
  }, Z = {
    departments: Ae.WEB_DIRECTORY_DEPARTMENTS,
    people: Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    people_departments: Ae.WEB_DIRECTORY_PEOPLE_AND_DEPS,
    faculty_rank: Ae.WEB_DIRECTORY_FACULTY_RANK
  };
  return e !== "faculty_rank" ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(db, { className: C ? "grid-view" : "", children: [
    d === "true" && /* @__PURE__ */ T.jsx(
      Cu,
      {
        filterLabel: "Filter By Last Initial",
        choices: lb,
        onChoose: (le) => U({ ...I, lastInit: le }),
        resetFilters: () => U({ ...I, lastInit: "" })
      }
    ),
    /* @__PURE__ */ T.jsx(pi, { view: C, setView: w, label: "View" }),
    /* @__PURE__ */ T.jsx("div", { className: "sort", children: /* @__PURE__ */ T.jsx(
      Mi,
      {
        customSortOptions: B,
        sort: y,
        onChange: (le) => de(le)
      }
    ) }),
    /* @__PURE__ */ T.jsx("div", { className: "results", children: /* @__PURE__ */ T.jsx(
      Tr,
      {
        engine: ae[Z[e]],
        itemsPerPage: parseInt(c == null ? void 0 : c.profilesPerPage, 10) || E,
        sort: y,
        hidePaginator: (c == null ? void 0 : c.usePager) !== "1",
        filters: I,
        profilesToFilterOut: c == null ? void 0 : c.doNotDisplayProfiles,
        display: c,
        appPathFolder: l,
        restClientTag: "webdir",
        grid: C
      }
    ) })
  ] }) }) : /* @__PURE__ */ T.jsxs(fb, { className: C ? "grid-view" : "", children: [
    /* @__PURE__ */ T.jsx(pi, { view: C, setView: w, label: "View" }),
    /* @__PURE__ */ T.jsx(
      ku,
      {
        ...ae[Z[e]],
        alphaFilter: d,
        filters: I,
        grid: C,
        setGridView: w,
        className: "tabbed-panels"
      }
    )
  ] });
}
Tu.propTypes = {
  deptIds: _.string,
  API_URL: _.string,
  searchApiVersion: _.string,
  searchType: _.string,
  ids: _.string,
  profileURLBase: _.string,
  appPathFolder: _.string,
  display: _.shape({
    defaultSort: _.string,
    doNotDisplayProfiles: _.string,
    profilesPerPage: _.string,
    usePager: _.string,
    grid: _.string || _.bool
  }),
  filters: _.shape({
    employee: _.string,
    expertise: _.string,
    title: _.string,
    campuses: _.string
  }),
  alphaFilter: _.string
};
const pb = (e) => /* @__PURE__ */ T.jsx(hc, { children: /* @__PURE__ */ T.jsx(pc, { children: /* @__PURE__ */ T.jsx(Ai, { path: "*", element: /* @__PURE__ */ T.jsx(Tu, { ...e }) }) }) }), hb = (e, t, r) => {
  const n = document.querySelector(r);
  Fi(n).render(ht.createElement(e, t));
}, gb = (e, t, r) => {
  const n = document.querySelector(r);
  Fi(n).render(ht.createElement(e, t));
}, jb = ({ targetSelector: e, props: t = {} }) => {
  hb(sb, t, e);
}, Mb = ({ targetSelector: e, props: t = {} }) => {
  gb(pb, t, e);
};
export {
  Tr as ASUSearchResultsList,
  yi as ProfileCard,
  mc as ResultCard,
  Eu as SearchPage,
  pb as WebDirectoryComponent,
  sb as iSearchApp,
  jb as initSearchPage,
  Mb as initWebDirectory,
  Gd as searchMessageComponentMap
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
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
