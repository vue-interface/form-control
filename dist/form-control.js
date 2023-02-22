import { defineComponent as y, computed as Pt, openBlock as Y, createElementBlock as X, Fragment as Q, renderList as tt, unref as j, renderSlot as et, normalizeProps as rt, guardReactiveProps as ot } from "vue";
const h = {};
function a(...t) {
  if (!t.length)
    return h;
  const [e, r] = t;
  return typeof e == "string" ? typeof h[e] < "u" ? h[e] : r : Array.isArray(e) ? e.reduce((o, s) => Object.assign(o, {
    //@ts-ignore
    [s]: h[s]
  }), {}) : Object.assign(h, ...t);
}
const nt = y({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const t = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, e = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${t}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${e}`]: !!this.shadow
      };
    }
  }
});
var Mt = typeof global == "object" && global && global.Object === Object && global;
const st = Mt;
var It = typeof self == "object" && self && self.Object === Object && self, Bt = st || It || Function("return this")();
const i = Bt;
var Rt = i.Symbol;
const p = Rt;
var at = Object.prototype, zt = at.hasOwnProperty, Lt = at.toString, b = p ? p.toStringTag : void 0;
function Vt(t) {
  var e = zt.call(t, b), r = t[b];
  try {
    t[b] = void 0;
    var o = !0;
  } catch {
  }
  var s = Lt.call(t);
  return o && (e ? t[b] = r : delete t[b]), s;
}
var Nt = Object.prototype, Ut = Nt.toString;
function _t(t) {
  return Ut.call(t);
}
var Dt = "[object Null]", Wt = "[object Undefined]", F = p ? p.toStringTag : void 0;
function c(t) {
  return t == null ? t === void 0 ? Wt : Dt : F && F in Object(t) ? Vt(t) : _t(t);
}
function m(t) {
  return t != null && typeof t == "object";
}
var Gt = "[object Symbol]";
function Zt(t) {
  return typeof t == "symbol" || m(t) && c(t) == Gt;
}
function Ht(t, e) {
  for (var r = -1, o = t == null ? 0 : t.length, s = Array(o); ++r < o; )
    s[r] = e(t[r], r, t);
  return s;
}
var Jt = Array.isArray;
const it = Jt;
var qt = 1 / 0, P = p ? p.prototype : void 0, M = P ? P.toString : void 0;
function ut(t) {
  if (typeof t == "string")
    return t;
  if (it(t))
    return Ht(t, ut) + "";
  if (Zt(t))
    return M ? M.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -qt ? "-0" : e;
}
function k(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Kt = "[object AsyncFunction]", Yt = "[object Function]", Xt = "[object GeneratorFunction]", Qt = "[object Proxy]";
function ct(t) {
  if (!k(t))
    return !1;
  var e = c(t);
  return e == Yt || e == Xt || e == Kt || e == Qt;
}
var te = i["__core-js_shared__"];
const $ = te;
var I = function() {
  var t = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function ee(t) {
  return !!I && I in t;
}
var re = Function.prototype, oe = re.toString;
function l(t) {
  if (t != null) {
    try {
      return oe.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ne = /[\\^$.*+?()[\]{}|]/g, se = /^\[object .+?Constructor\]$/, ae = Function.prototype, ie = Object.prototype, ue = ae.toString, ce = ie.hasOwnProperty, le = RegExp(
  "^" + ue.call(ce).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function de(t) {
  if (!k(t) || ee(t))
    return !1;
  var e = ct(t) ? le : se;
  return e.test(l(t));
}
function fe(t, e) {
  return t == null ? void 0 : t[e];
}
function x(t, e) {
  var r = fe(t, e);
  return de(r) ? r : void 0;
}
var pe = x(i, "WeakMap");
const A = pe;
var he = 9007199254740991;
function lt(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= he;
}
function be(t) {
  return t != null && lt(t.length) && !ct(t);
}
var ge = Object.prototype;
function dt(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || ge;
  return t === r;
}
var ye = "[object Arguments]";
function B(t) {
  return m(t) && c(t) == ye;
}
var ft = Object.prototype, me = ft.hasOwnProperty, xe = ft.propertyIsEnumerable, ve = B(function() {
  return arguments;
}()) ? B : function(t) {
  return m(t) && me.call(t, "callee") && !xe.call(t, "callee");
};
const je = ve;
function $e() {
  return !1;
}
var pt = typeof exports == "object" && exports && !exports.nodeType && exports, R = pt && typeof module == "object" && module && !module.nodeType && module, Ce = R && R.exports === pt, z = Ce ? i.Buffer : void 0, Se = z ? z.isBuffer : void 0, Ae = Se || $e;
const Oe = Ae;
var Te = "[object Arguments]", we = "[object Array]", Ee = "[object Boolean]", ke = "[object Date]", Fe = "[object Error]", Pe = "[object Function]", Me = "[object Map]", Ie = "[object Number]", Be = "[object Object]", Re = "[object RegExp]", ze = "[object Set]", Le = "[object String]", Ve = "[object WeakMap]", Ne = "[object ArrayBuffer]", Ue = "[object DataView]", _e = "[object Float32Array]", De = "[object Float64Array]", We = "[object Int8Array]", Ge = "[object Int16Array]", Ze = "[object Int32Array]", He = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", qe = "[object Uint16Array]", Ke = "[object Uint32Array]", n = {};
n[_e] = n[De] = n[We] = n[Ge] = n[Ze] = n[He] = n[Je] = n[qe] = n[Ke] = !0;
n[Te] = n[we] = n[Ne] = n[Ee] = n[Ue] = n[ke] = n[Fe] = n[Pe] = n[Me] = n[Ie] = n[Be] = n[Re] = n[ze] = n[Le] = n[Ve] = !1;
function Ye(t) {
  return m(t) && lt(t.length) && !!n[c(t)];
}
function Xe(t) {
  return function(e) {
    return t(e);
  };
}
var ht = typeof exports == "object" && exports && !exports.nodeType && exports, g = ht && typeof module == "object" && module && !module.nodeType && module, Qe = g && g.exports === ht, C = Qe && st.process, tr = function() {
  try {
    var t = g && g.require && g.require("util").types;
    return t || C && C.binding && C.binding("util");
  } catch {
  }
}();
const L = tr;
var V = L && L.isTypedArray, er = V ? Xe(V) : Ye;
const rr = er;
function bt(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var or = bt(Object.keys, Object);
const nr = or;
var sr = Object.prototype, ar = sr.hasOwnProperty;
function ir(t) {
  if (!dt(t))
    return nr(t);
  var e = [];
  for (var r in Object(t))
    ar.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var ur = x(i, "Map");
const O = ur;
function gt(t) {
  return t == null ? "" : ut(t);
}
var cr = bt(Object.getPrototypeOf, Object);
const lr = cr;
var dr = "[object Object]", fr = Function.prototype, pr = Object.prototype, yt = fr.toString, hr = pr.hasOwnProperty, br = yt.call(Object);
function gr(t) {
  if (!m(t) || c(t) != dr)
    return !1;
  var e = lr(t);
  if (e === null)
    return !0;
  var r = hr.call(e, "constructor") && e.constructor;
  return typeof r == "function" && r instanceof r && yt.call(r) == br;
}
function yr(t, e, r, o) {
  var s = -1, d = t == null ? 0 : t.length;
  for (o && d && (r = t[++s]); ++s < d; )
    r = e(r, t[s], s, t);
  return r;
}
function mr(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var xr = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, vr = mr(xr);
const jr = vr;
var $r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cr = "\\u0300-\\u036f", Sr = "\\ufe20-\\ufe2f", Ar = "\\u20d0-\\u20ff", Or = Cr + Sr + Ar, Tr = "[" + Or + "]", wr = RegExp(Tr, "g");
function Er(t) {
  return t = gt(t), t && t.replace($r, jr).replace(wr, "");
}
var kr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Fr(t) {
  return t.match(kr) || [];
}
var Pr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Mr(t) {
  return Pr.test(t);
}
var mt = "\\ud800-\\udfff", Ir = "\\u0300-\\u036f", Br = "\\ufe20-\\ufe2f", Rr = "\\u20d0-\\u20ff", zr = Ir + Br + Rr, xt = "\\u2700-\\u27bf", vt = "a-z\\xdf-\\xf6\\xf8-\\xff", Lr = "\\xac\\xb1\\xd7\\xf7", Vr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nr = "\\u2000-\\u206f", Ur = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", jt = "A-Z\\xc0-\\xd6\\xd8-\\xde", _r = "\\ufe0e\\ufe0f", $t = Lr + Vr + Nr + Ur, Ct = "['’]", N = "[" + $t + "]", Dr = "[" + zr + "]", St = "\\d+", Wr = "[" + xt + "]", At = "[" + vt + "]", Ot = "[^" + mt + $t + St + xt + vt + jt + "]", Gr = "\\ud83c[\\udffb-\\udfff]", Zr = "(?:" + Dr + "|" + Gr + ")", Hr = "[^" + mt + "]", Tt = "(?:\\ud83c[\\udde6-\\uddff]){2}", wt = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "[" + jt + "]", Jr = "\\u200d", U = "(?:" + At + "|" + Ot + ")", qr = "(?:" + f + "|" + Ot + ")", _ = "(?:" + Ct + "(?:d|ll|m|re|s|t|ve))?", D = "(?:" + Ct + "(?:D|LL|M|RE|S|T|VE))?", Et = Zr + "?", kt = "[" + _r + "]?", Kr = "(?:" + Jr + "(?:" + [Hr, Tt, wt].join("|") + ")" + kt + Et + ")*", Yr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Xr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Qr = kt + Et + Kr, to = "(?:" + [Wr, Tt, wt].join("|") + ")" + Qr, eo = RegExp([
  f + "?" + At + "+" + _ + "(?=" + [N, f, "$"].join("|") + ")",
  qr + "+" + D + "(?=" + [N, f + U, "$"].join("|") + ")",
  f + "?" + U + "+" + _,
  f + "+" + D,
  Xr,
  Yr,
  St,
  to
].join("|"), "g");
function ro(t) {
  return t.match(eo) || [];
}
function oo(t, e, r) {
  return t = gt(t), e = r ? void 0 : e, e === void 0 ? Mr(t) ? ro(t) : Fr(t) : t.match(e) || [];
}
var no = "['’]", so = RegExp(no, "g");
function ao(t) {
  return function(e) {
    return yr(oo(Er(e).replace(so, "")), t, "");
  };
}
var io = x(i, "DataView");
const T = io;
var uo = x(i, "Promise");
const w = uo;
var co = x(i, "Set");
const E = co;
var W = "[object Map]", lo = "[object Object]", G = "[object Promise]", Z = "[object Set]", H = "[object WeakMap]", J = "[object DataView]", fo = l(T), po = l(O), ho = l(w), bo = l(E), go = l(A), u = c;
(T && u(new T(new ArrayBuffer(1))) != J || O && u(new O()) != W || w && u(w.resolve()) != G || E && u(new E()) != Z || A && u(new A()) != H) && (u = function(t) {
  var e = c(t), r = e == lo ? t.constructor : void 0, o = r ? l(r) : "";
  if (o)
    switch (o) {
      case fo:
        return J;
      case po:
        return W;
      case ho:
        return G;
      case bo:
        return Z;
      case go:
        return H;
    }
  return e;
});
const yo = u;
var mo = "[object Map]", xo = "[object Set]", vo = Object.prototype, jo = vo.hasOwnProperty;
function $o(t) {
  if (t == null)
    return !0;
  if (be(t) && (it(t) || typeof t == "string" || typeof t.splice == "function" || Oe(t) || rr(t) || je(t)))
    return !t.length;
  var e = yo(t);
  if (e == mo || e == xo)
    return !t.size;
  if (dt(t))
    return !ir(t).length;
  for (var r in t)
    if (jo.call(t, r))
      return !1;
  return !0;
}
var Co = ao(function(t, e, r) {
  return t + (r ? "-" : "") + e.toLowerCase();
});
const v = Co, So = /* @__PURE__ */ y({
  __name: "FormControlErrors",
  props: {
    error: null,
    errors: null,
    name: null,
    id: null
  },
  setup(t) {
    const e = t, r = String((e == null ? void 0 : e.id) || (e == null ? void 0 : e.name)), o = Pt(() => e.error ? /* @__PURE__ */ new Map(
      [[r, [e.error]]]
    ) : gr(e.errors) ? new Map(
      Object.entries(e.errors)
    ) : Array.isArray(e.errors) ? /* @__PURE__ */ new Map(
      [[r, e.errors]]
    ) : /* @__PURE__ */ new Map());
    return (s, d) => (Y(!0), X(Q, null, tt(j(o).get(j(r)), (Ft) => et(s.$slots, "default", rt(ot({ key: j(r), error: Ft })))), 256));
  }
}), Ao = /* @__PURE__ */ y({
  __name: "FormControlFeedback",
  props: {
    feedback: null
  },
  setup(t) {
    return (e, r) => (Y(!0), X(Q, null, tt([].concat(t.feedback), (o) => et(e.$slots, "default", rt(ot({ feedback: o })))), 256));
  }
});
function q(t, e, r = "-") {
  const o = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    v(o),
    t
  ].filter((s) => !!s).join(r);
}
const To = y({
  components: {
    FormControlErrors: So,
    FormControlFeedback: Ao
  },
  directives: {
    bindEvents: {
      created(t, e) {
        var r, o;
        (o = (r = e.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, t);
      }
    }
  },
  mixins: [
    nt
  ],
  inheritAttrs: !1,
  props: {
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
      type: [Array, Object, String],
      default: void 0
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
      type: [Array, Object, String],
      default: () => a("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [Object, String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be invalid.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Boolean, Number, String, Array, Object],
      default: void 0
    },
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Force the input to be valid.
     */
    valid: Boolean
  },
  emits: [
    "focus",
    "blur",
    "change",
    "click",
    "keypress",
    "keyup",
    "keydown",
    "progress",
    "paste",
    "update:modelValue"
  ],
  data() {
    return {
      currentValue: null,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1
    };
  },
  computed: {
    model: {
      get() {
        return this.getModelValue();
      },
      set(t) {
        this.setModelValue(t);
      }
    },
    id() {
      return this.$attrs.id || Math.random().toString(36).slice(2);
    },
    isEmpty() {
      return $o(this.model);
    },
    isInvalid() {
      return !!(this.invalid || this.error || (Array.isArray(this.errors) ? this.errors.length : this.errors[this.$attrs.id || this.$attrs.name]));
    },
    isValid() {
      return !!(this.valid || this.feedback);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses
        // value: this.model
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": this.isValid,
        "is-invalid": this.isInvalid
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return q(this.size, this.formControlClass);
    },
    formGroupClasses() {
      return Object.assign({
        animated: this.animated,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-dirty": this.isDirty,
        "is-empty": this.isEmpty,
        "is-invalid": this.isInvalid,
        "is-valid": this.isValid,
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && q(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [v(this.componentName)]: !0
      });
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  methods: {
    bindEvents(t) {
      for (const e of this.$options.emits)
        t.addEventListener(e, (r) => {
          this.$emit(e, r);
        });
      t.addEventListener("focus", () => {
        this.isDirty = !0, this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      });
    },
    blur() {
      var t;
      (t = this.$refs.field) == null || t.blur();
    },
    focus() {
      var t;
      (t = this.$refs.field) == null || t.focus();
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && !Array.isArray(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || k(t) ? t : [t];
    },
    getModelValue() {
      return this.modelValue !== void 0 ? this.modelValue : this.currentValue;
    },
    setModelValue(t) {
      this.hasChanged = !0, this.currentValue = t, this.$emit("update:modelValue", t);
    }
  }
});
function S(t, e, r = "-") {
  const o = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    v(o),
    t
  ].filter((s) => !!s).join(r);
}
function K(t) {
  return !Array.isArray(t) && typeof t == "object";
}
const wo = y({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var r, o;
        (o = (r = e.instance) == null ? void 0 : r.bindEvents) == null || o.call(r, t);
      }
    }
  },
  mixins: [
    nt
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    /**
     * Show type activity indicator.
     */
    activity: {
      type: Boolean,
      default: !1
    },
    /**
     * Animate floating labels inside the input.
     */
    animated: {
      type: Boolean,
      default: () => a("animated", !1)
    },
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
      type: String,
      default: () => a("defaultControlClass", "form-control")
    },
    /**
     * An inline field validation error.
     */
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
      type: [String, Array],
      default: void 0
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => a("group", !0)
    },
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
      type: [Number, String],
      default: void 0
    },
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: Boolean,
    /**
     * The activity indicator type.
     */
    indicator: {
      type: [String, Boolean],
      default: () => a("indicator", "spinner")
    },
    /**
     * The activity indicator size.
     */
    indicatorSize: {
      type: String,
      default: void 0
    },
    /**
     * Display the form field inline.
     */
    inline: Boolean,
    /**
     * The invalid property.
     */
    invalid: Boolean,
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
      type: [Number, String],
      default: void 0
    },
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
      type: [Object, String],
      default: () => a("labelClass", "form-label")
    },
    /**
     * Should the control look like a pill.
     */
    pill: Boolean,
    /**
     * Should the control look like plaintext.
     */
    plaintext: Boolean,
    /**
     * The size of the form control.
     */
    size: {
      type: String,
      default: void 0
    },
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
      type: String,
      default: void 0
    },
    /**
     * The valid property.
     */
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return S(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && S(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && S(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [v(this.componentName)]: !0
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const t = this.getFieldErrors();
      return Array.isArray(t) ? t.filter((e) => e && typeof e == "string").join("<br>") : t;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    hasFocus() {
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(t, e) {
      var o;
      e || (e = this.onInput);
      const r = t instanceof HTMLSelectElement ? (o = t.querySelectorAll("option")) == null ? void 0 : o[t.selectedIndex] : null;
      r && (t.value = r == null ? void 0 : r.value), t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((s) => {
        t.addEventListener(s, (d) => {
          this.$emit(s, d);
        });
      });
    },
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && K(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || K(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("update:modelValue", t);
    }
  }
});
export {
  To as FormControl,
  So as FormControlErrors,
  wo as FormControlLegacy,
  a as config
};
//# sourceMappingURL=form-control.js.map
