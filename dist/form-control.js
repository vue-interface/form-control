import { defineComponent as E } from "vue";
const h = {};
function n(...t) {
  if (!t.length)
    return h;
  const [e, r] = t;
  return typeof e == "string" ? typeof h[e] < "u" ? h[e] : r : Array.isArray(e) ? e.reduce((a, o) => Object.assign(a, {
    //@ts-ignore
    [o]: h[o]
  }), {}) : Object.assign(h, ...t);
}
const Y = E({
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
var $t = typeof global == "object" && global && global.Object === Object && global;
const X = $t;
var Ct = typeof self == "object" && self && self.Object === Object && self, St = X || Ct || Function("return this")();
const i = St;
var At = i.Symbol;
const d = At;
var Q = Object.prototype, Tt = Q.hasOwnProperty, Ot = Q.toString, b = d ? d.toStringTag : void 0;
function Et(t) {
  var e = Tt.call(t, b), r = t[b];
  try {
    t[b] = void 0;
    var a = !0;
  } catch {
  }
  var o = Ot.call(t);
  return a && (e ? t[b] = r : delete t[b]), o;
}
var wt = Object.prototype, kt = wt.toString;
function Ft(t) {
  return kt.call(t);
}
var It = "[object Null]", Pt = "[object Undefined]", k = d ? d.toStringTag : void 0;
function f(t) {
  return t == null ? t === void 0 ? Pt : It : k && k in Object(t) ? Et(t) : Ft(t);
}
function m(t) {
  return t != null && typeof t == "object";
}
var Rt = "[object Symbol]";
function Bt(t) {
  return typeof t == "symbol" || m(t) && f(t) == Rt;
}
function Mt(t, e) {
  for (var r = -1, a = t == null ? 0 : t.length, o = Array(a); ++r < a; )
    o[r] = e(t[r], r, t);
  return o;
}
var zt = Array.isArray;
const tt = zt;
var Lt = 1 / 0, F = d ? d.prototype : void 0, I = F ? F.toString : void 0;
function et(t) {
  if (typeof t == "string")
    return t;
  if (tt(t))
    return Mt(t, et) + "";
  if (Bt(t))
    return I ? I.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Lt ? "-0" : e;
}
function w(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Nt = "[object AsyncFunction]", Ut = "[object Function]", Vt = "[object GeneratorFunction]", Dt = "[object Proxy]";
function rt(t) {
  if (!w(t))
    return !1;
  var e = f(t);
  return e == Ut || e == Vt || e == Nt || e == Dt;
}
var Wt = i["__core-js_shared__"];
const v = Wt;
var P = function() {
  var t = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function _t(t) {
  return !!P && P in t;
}
var Gt = Function.prototype, Zt = Gt.toString;
function c(t) {
  if (t != null) {
    try {
      return Zt.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Ht = /[\\^$.*+?()[\]{}|]/g, Jt = /^\[object .+?Constructor\]$/, qt = Function.prototype, Kt = Object.prototype, Yt = qt.toString, Xt = Kt.hasOwnProperty, Qt = RegExp(
  "^" + Yt.call(Xt).replace(Ht, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function te(t) {
  if (!w(t) || _t(t))
    return !1;
  var e = rt(t) ? Qt : Jt;
  return e.test(c(t));
}
function ee(t, e) {
  return t == null ? void 0 : t[e];
}
function y(t, e) {
  var r = ee(t, e);
  return te(r) ? r : void 0;
}
var re = y(i, "WeakMap");
const C = re;
var se = 9007199254740991;
function st(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= se;
}
function ae(t) {
  return t != null && st(t.length) && !rt(t);
}
var oe = Object.prototype;
function at(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || oe;
  return t === r;
}
var ne = "[object Arguments]";
function R(t) {
  return m(t) && f(t) == ne;
}
var ot = Object.prototype, ie = ot.hasOwnProperty, ue = ot.propertyIsEnumerable, ce = R(function() {
  return arguments;
}()) ? R : function(t) {
  return m(t) && ie.call(t, "callee") && !ue.call(t, "callee");
};
const le = ce;
function de() {
  return !1;
}
var nt = typeof exports == "object" && exports && !exports.nodeType && exports, B = nt && typeof module == "object" && module && !module.nodeType && module, fe = B && B.exports === nt, M = fe ? i.Buffer : void 0, pe = M ? M.isBuffer : void 0, he = pe || de;
const be = he;
var ge = "[object Arguments]", ye = "[object Array]", me = "[object Boolean]", xe = "[object Date]", ve = "[object Error]", je = "[object Function]", $e = "[object Map]", Ce = "[object Number]", Se = "[object Object]", Ae = "[object RegExp]", Te = "[object Set]", Oe = "[object String]", Ee = "[object WeakMap]", we = "[object ArrayBuffer]", ke = "[object DataView]", Fe = "[object Float32Array]", Ie = "[object Float64Array]", Pe = "[object Int8Array]", Re = "[object Int16Array]", Be = "[object Int32Array]", Me = "[object Uint8Array]", ze = "[object Uint8ClampedArray]", Le = "[object Uint16Array]", Ne = "[object Uint32Array]", s = {};
s[Fe] = s[Ie] = s[Pe] = s[Re] = s[Be] = s[Me] = s[ze] = s[Le] = s[Ne] = !0;
s[ge] = s[ye] = s[we] = s[me] = s[ke] = s[xe] = s[ve] = s[je] = s[$e] = s[Ce] = s[Se] = s[Ae] = s[Te] = s[Oe] = s[Ee] = !1;
function Ue(t) {
  return m(t) && st(t.length) && !!s[f(t)];
}
function Ve(t) {
  return function(e) {
    return t(e);
  };
}
var it = typeof exports == "object" && exports && !exports.nodeType && exports, g = it && typeof module == "object" && module && !module.nodeType && module, De = g && g.exports === it, j = De && X.process, We = function() {
  try {
    var t = g && g.require && g.require("util").types;
    return t || j && j.binding && j.binding("util");
  } catch {
  }
}();
const z = We;
var L = z && z.isTypedArray, _e = L ? Ve(L) : Ue;
const Ge = _e;
function Ze(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var He = Ze(Object.keys, Object);
const Je = He;
var qe = Object.prototype, Ke = qe.hasOwnProperty;
function Ye(t) {
  if (!at(t))
    return Je(t);
  var e = [];
  for (var r in Object(t))
    Ke.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
var Xe = y(i, "Map");
const S = Xe;
function ut(t) {
  return t == null ? "" : et(t);
}
function Qe(t, e, r, a) {
  var o = -1, p = t == null ? 0 : t.length;
  for (a && p && (r = t[++o]); ++o < p; )
    r = e(r, t[o], o, t);
  return r;
}
function tr(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var er = {
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
}, rr = tr(er);
const sr = rr;
var ar = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, or = "\\u0300-\\u036f", nr = "\\ufe20-\\ufe2f", ir = "\\u20d0-\\u20ff", ur = or + nr + ir, cr = "[" + ur + "]", lr = RegExp(cr, "g");
function dr(t) {
  return t = ut(t), t && t.replace(ar, sr).replace(lr, "");
}
var fr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function pr(t) {
  return t.match(fr) || [];
}
var hr = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function br(t) {
  return hr.test(t);
}
var ct = "\\ud800-\\udfff", gr = "\\u0300-\\u036f", yr = "\\ufe20-\\ufe2f", mr = "\\u20d0-\\u20ff", xr = gr + yr + mr, lt = "\\u2700-\\u27bf", dt = "a-z\\xdf-\\xf6\\xf8-\\xff", vr = "\\xac\\xb1\\xd7\\xf7", jr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $r = "\\u2000-\\u206f", Cr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ft = "A-Z\\xc0-\\xd6\\xd8-\\xde", Sr = "\\ufe0e\\ufe0f", pt = vr + jr + $r + Cr, ht = "['’]", N = "[" + pt + "]", Ar = "[" + xr + "]", bt = "\\d+", Tr = "[" + lt + "]", gt = "[" + dt + "]", yt = "[^" + ct + pt + bt + lt + dt + ft + "]", Or = "\\ud83c[\\udffb-\\udfff]", Er = "(?:" + Ar + "|" + Or + ")", wr = "[^" + ct + "]", mt = "(?:\\ud83c[\\udde6-\\uddff]){2}", xt = "[\\ud800-\\udbff][\\udc00-\\udfff]", l = "[" + ft + "]", kr = "\\u200d", U = "(?:" + gt + "|" + yt + ")", Fr = "(?:" + l + "|" + yt + ")", V = "(?:" + ht + "(?:d|ll|m|re|s|t|ve))?", D = "(?:" + ht + "(?:D|LL|M|RE|S|T|VE))?", vt = Er + "?", jt = "[" + Sr + "]?", Ir = "(?:" + kr + "(?:" + [wr, mt, xt].join("|") + ")" + jt + vt + ")*", Pr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Rr = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Br = jt + vt + Ir, Mr = "(?:" + [Tr, mt, xt].join("|") + ")" + Br, zr = RegExp([
  l + "?" + gt + "+" + V + "(?=" + [N, l, "$"].join("|") + ")",
  Fr + "+" + D + "(?=" + [N, l + U, "$"].join("|") + ")",
  l + "?" + U + "+" + V,
  l + "+" + D,
  Rr,
  Pr,
  bt,
  Mr
].join("|"), "g");
function Lr(t) {
  return t.match(zr) || [];
}
function Nr(t, e, r) {
  return t = ut(t), e = r ? void 0 : e, e === void 0 ? br(t) ? Lr(t) : pr(t) : t.match(e) || [];
}
var Ur = "['’]", Vr = RegExp(Ur, "g");
function Dr(t) {
  return function(e) {
    return Qe(Nr(dr(e).replace(Vr, "")), t, "");
  };
}
var Wr = y(i, "DataView");
const A = Wr;
var _r = y(i, "Promise");
const T = _r;
var Gr = y(i, "Set");
const O = Gr;
var W = "[object Map]", Zr = "[object Object]", _ = "[object Promise]", G = "[object Set]", Z = "[object WeakMap]", H = "[object DataView]", Hr = c(A), Jr = c(S), qr = c(T), Kr = c(O), Yr = c(C), u = f;
(A && u(new A(new ArrayBuffer(1))) != H || S && u(new S()) != W || T && u(T.resolve()) != _ || O && u(new O()) != G || C && u(new C()) != Z) && (u = function(t) {
  var e = f(t), r = e == Zr ? t.constructor : void 0, a = r ? c(r) : "";
  if (a)
    switch (a) {
      case Hr:
        return H;
      case Jr:
        return W;
      case qr:
        return _;
      case Kr:
        return G;
      case Yr:
        return Z;
    }
  return e;
});
const Xr = u;
var Qr = "[object Map]", ts = "[object Set]", es = Object.prototype, rs = es.hasOwnProperty;
function J(t) {
  if (t == null)
    return !0;
  if (ae(t) && (tt(t) || typeof t == "string" || typeof t.splice == "function" || be(t) || Ge(t) || le(t)))
    return !t.length;
  var e = Xr(t);
  if (e == Qr || e == ts)
    return !t.size;
  if (at(t))
    return !Ye(t).length;
  for (var r in t)
    if (rs.call(t, r))
      return !1;
  return !0;
}
var ss = Dr(function(t, e, r) {
  return t + (r ? "-" : "") + e.toLowerCase();
});
const x = ss;
function q(t, e, r = "-") {
  const a = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    x(a),
    t
  ].filter((o) => !!o).join(r);
}
const os = E({
  directives: {
    bindEvents(t, e) {
      var r, a;
      (a = (r = e.instance) == null ? void 0 : r.bindEvents) == null || a.call(r, t);
    }
  },
  mixins: [
    Y
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
      default: () => n("animated", !1)
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
      default: () => n("controlClass", "form-control")
    },
    /**
     * Add form-group wrapper to input.
     */
    group: {
      type: Boolean,
      default: () => n("group", !0)
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
      default: () => n("indicator", "spinner")
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
      default: () => n("labelClass", "form-label")
    },
    /**
     * The model default value.
     */
    modelValue: {
      type: [Number, String, Array, Object],
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
      currentValue: this.modelValue,
      hasChanged: !1,
      hasFocus: !1,
      isDirty: !1,
      isEmpty: J(this.modelValue)
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name || Math.random().toString(36).slice(2);
    },
    componentName() {
      return this.$options.name;
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
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.size && q(this.size, this.componentName)]: !!this.size
      }, !!this.componentName && {
        [x(this.componentName)]: !0
      });
    },
    controlAttributes() {
      return Object.assign({}, this.$attrs, {
        id: this.id,
        class: this.controlClasses,
        value: this.modelValue
      });
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        [this.formControlClass]: !!this.formControlClass,
        [this.plaintextClass]: this.plaintext,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback)
      }, this.shadowableClass);
    },
    controlSizeClass() {
      return q(this.size, this.formControlClass);
    },
    invalidFeedback() {
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const t = this.getFieldErrors();
      return Array.isArray(t) ? t.filter((e) => e && typeof e == "string").join("<br>") : t;
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    },
    plaintextClass() {
      return "form-control-plaintext";
    }
  },
  watch: {
    currentValue(t) {
      this.hasChanged = !0, this.isEmpty = J(t), this.$emit("update:modelValue", t);
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
      return this.errors && !Array.isArray(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || w(t) ? t : [t];
    }
  }
});
function $(t, e, r = "-") {
  const a = String(e).replace(new RegExp(`^${t}${r}?`), "");
  return [
    x(a),
    t
  ].filter((o) => !!o).join(r);
}
function K(t) {
  return !Array.isArray(t) && typeof t == "object";
}
const ns = E({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var r, a;
        (a = (r = e.instance) == null ? void 0 : r.bindEvents) == null || a.call(r, t);
      }
    }
  },
  mixins: [
    Y
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
      default: () => n("animated", !1)
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
      default: () => n("defaultControlClass", "form-control")
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
      default: () => n("group", !0)
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
      default: () => n("indicator", "spinner")
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
      default: () => n("labelClass", "form-label")
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
      return $(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && $(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && $(this.size, "form-group")]: !!this.size,
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
        [x(this.componentName)]: !0
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
      var a;
      e || (e = this.onInput);
      const r = t instanceof HTMLSelectElement ? (a = t.querySelectorAll("option")) == null ? void 0 : a[t.selectedIndex] : null;
      r && (t.value = r == null ? void 0 : r.value), t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((o) => {
        t.addEventListener(o, (p) => {
          this.$emit(o, p);
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
  os as FormControl,
  ns as FormControlLegacy,
  n as config
};
//# sourceMappingURL=form-control.js.map
