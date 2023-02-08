import { defineComponent as v } from "vue";
const o = {};
function d(...e) {
  if (!e.length)
    return o;
  const [t, r] = e;
  return typeof t == "string" ? typeof o[t] < "u" ? o[t] : r : Array.isArray(t) ? t.reduce((i, s) => Object.assign(i, {
    [s]: o[s]
  }), {}) : Object.assign(o, ...e);
}
const B = v({
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
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
});
var M = typeof global == "object" && global && global.Object === Object && global;
const P = M;
var Z = typeof self == "object" && self && self.Object === Object && self, D = P || Z || Function("return this")();
const G = D;
var W = G.Symbol;
const u = W;
var C = Object.prototype, H = C.hasOwnProperty, V = C.toString, l = u ? u.toStringTag : void 0;
function J(e) {
  var t = H.call(e, l), r = e[l];
  try {
    e[l] = void 0;
    var i = !0;
  } catch {
  }
  var s = V.call(e);
  return i && (t ? e[l] = r : delete e[l]), s;
}
var Y = Object.prototype, q = Y.toString;
function _(e) {
  return q.call(e);
}
var K = "[object Null]", Q = "[object Undefined]", c = u ? u.toStringTag : void 0;
function X(e) {
  return e == null ? e === void 0 ? Q : K : c && c in Object(e) ? J(e) : _(e);
}
function ee(e) {
  return e != null && typeof e == "object";
}
var te = "[object Symbol]";
function re(e) {
  return typeof e == "symbol" || ee(e) && X(e) == te;
}
function se(e, t) {
  for (var r = -1, i = e == null ? 0 : e.length, s = Array(i); ++r < i; )
    s[r] = t(e[r], r, e);
  return s;
}
var ie = Array.isArray;
const ne = ie;
var ue = 1 / 0, h = u ? u.prototype : void 0, p = h ? h.toString : void 0;
function S(e) {
  if (typeof e == "string")
    return e;
  if (ne(e))
    return se(e, S) + "";
  if (re(e))
    return p ? p.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ue ? "-0" : t;
}
function A(e) {
  return e == null ? "" : S(e);
}
function ae(e, t, r, i) {
  var s = -1, a = e == null ? 0 : e.length;
  for (i && a && (r = e[++s]); ++s < a; )
    r = t(r, e[s], s, e);
  return r;
}
function oe(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
var de = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "s"
}, le = oe(de);
const fe = le;
var ce = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, he = "\\u0300-\\u036f", pe = "\\ufe20-\\ufe2f", be = "\\u20d0-\\u20ff", xe = he + pe + be, ge = "[" + xe + "]", ye = RegExp(ge, "g");
function me(e) {
  return e = A(e), e && e.replace(ce, fe).replace(ye, "");
}
var ve = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Ce(e) {
  return e.match(ve) || [];
}
var Se = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Ae(e) {
  return Se.test(e);
}
var O = "\\ud800-\\udfff", Oe = "\\u0300-\\u036f", $e = "\\ufe20-\\ufe2f", Ee = "\\u20d0-\\u20ff", je = Oe + $e + Ee, $ = "\\u2700-\\u27bf", E = "a-z\\xdf-\\xf6\\xf8-\\xff", we = "\\xac\\xb1\\xd7\\xf7", Re = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ke = "\\u2000-\\u206f", Te = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", j = "A-Z\\xc0-\\xd6\\xd8-\\xde", Le = "\\ufe0e\\ufe0f", w = we + Re + ke + Te, R = "['\u2019]", b = "[" + w + "]", Fe = "[" + je + "]", k = "\\d+", ze = "[" + $ + "]", T = "[" + E + "]", L = "[^" + O + w + k + $ + E + j + "]", Ie = "\\ud83c[\\udffb-\\udfff]", Ue = "(?:" + Fe + "|" + Ie + ")", Ne = "[^" + O + "]", F = "(?:\\ud83c[\\udde6-\\uddff]){2}", z = "[\\ud800-\\udbff][\\udc00-\\udfff]", n = "[" + j + "]", Be = "\\u200d", x = "(?:" + T + "|" + L + ")", Me = "(?:" + n + "|" + L + ")", g = "(?:" + R + "(?:d|ll|m|re|s|t|ve))?", y = "(?:" + R + "(?:D|LL|M|RE|S|T|VE))?", I = Ue + "?", U = "[" + Le + "]?", Pe = "(?:" + Be + "(?:" + [Ne, F, z].join("|") + ")" + U + I + ")*", Ze = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", De = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ge = U + I + Pe, We = "(?:" + [ze, F, z].join("|") + ")" + Ge, He = RegExp([
  n + "?" + T + "+" + g + "(?=" + [b, n, "$"].join("|") + ")",
  Me + "+" + y + "(?=" + [b, n + x, "$"].join("|") + ")",
  n + "?" + x + "+" + g,
  n + "+" + y,
  De,
  Ze,
  k,
  We
].join("|"), "g");
function Ve(e) {
  return e.match(He) || [];
}
function Je(e, t, r) {
  return e = A(e), t = r ? void 0 : t, t === void 0 ? Ae(e) ? Ve(e) : Ce(e) : e.match(t) || [];
}
var Ye = "['\u2019]", qe = RegExp(Ye, "g");
function _e(e) {
  return function(t) {
    return ae(Je(me(t).replace(qe, "")), e, "");
  };
}
var Ke = _e(function(e, t, r) {
  return e + (r ? "-" : "") + t.toLowerCase();
});
const N = Ke;
function f(e, t, r = "-") {
  const i = String(t).replace(new RegExp(`^${e}${r}?`), "");
  return [
    N(i),
    e
  ].filter((s) => !!s).join(r);
}
function m(e) {
  return !Array.isArray(e) && typeof e == "object";
}
const Xe = v({
  directives: {
    bindEvents: {
      beforeMount(e, t) {
        var r, i;
        (i = (r = t.instance) == null ? void 0 : r.bindEvents) == null || i.call(r, e);
      }
    }
  },
  mixins: [
    B
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => d("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => d("defaultControlClass", "form-control")
    },
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: {
      type: [String, Array],
      default: void 0
    },
    group: {
      type: Boolean,
      default: () => d("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: [String, Boolean],
      default: () => d("indicator", "spinner")
    },
    indicatorSize: {
      type: String,
      default: void 0
    },
    inline: Boolean,
    invalid: Boolean,
    label: {
      type: [Number, String],
      default: void 0
    },
    labelClass: {
      type: [Object, String],
      default: () => d("labelClass", "form-label")
    },
    pill: Boolean,
    plaintext: Boolean,
    size: {
      type: String,
      default: void 0
    },
    spacing: {
      type: String,
      default: void 0
    },
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
      return f(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && f(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && f(this.size, "form-group")]: !!this.size,
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
        [N(this.componentName)]: !0
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
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
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
    bindEvents(e, t) {
      var i;
      t || (t = this.onInput);
      const r = e instanceof HTMLSelectElement ? (i = e.querySelectorAll("option")) == null ? void 0 : i[e.selectedIndex] : null;
      r && (e.value = r == null ? void 0 : r.value), e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(
        e.tagName === "SELECT" ? "change" : "input",
        () => t(e.value)
      ), this.nativeEvents.forEach((s) => {
        e.addEventListener(s, (a) => {
          this.$emit(s, a);
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
      let e = this.error || this.errors;
      return this.errors && m(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || m(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
    }
  }
});
export {
  Xe as FormControl,
  d as config
};
//# sourceMappingURL=form-control.js.map
