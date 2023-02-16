import { defineComponent as v } from "vue";
const o = {};
function d(...e) {
  if (!e.length)
    return o;
  const [t, r] = e;
  return typeof t == "string" ? typeof o[t] < "u" ? o[t] : r : Array.isArray(t) ? t.reduce((i, s) => Object.assign(i, {
    //@ts-ignore
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
var O = "\\ud800-\\udfff", Oe = "\\u0300-\\u036f", $e = "\\ufe20-\\ufe2f", Ee = "\\u20d0-\\u20ff", je = Oe + $e + Ee, $ = "\\u2700-\\u27bf", E = "a-z\\xdf-\\xf6\\xf8-\\xff", we = "\\xac\\xb1\\xd7\\xf7", Re = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ke = "\\u2000-\\u206f", Te = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", j = "A-Z\\xc0-\\xd6\\xd8-\\xde", Le = "\\ufe0e\\ufe0f", w = we + Re + ke + Te, R = "['’]", b = "[" + w + "]", Fe = "[" + je + "]", k = "\\d+", ze = "[" + $ + "]", T = "[" + E + "]", L = "[^" + O + w + k + $ + E + j + "]", Ie = "\\ud83c[\\udffb-\\udfff]", Ue = "(?:" + Fe + "|" + Ie + ")", Ne = "[^" + O + "]", F = "(?:\\ud83c[\\udde6-\\uddff]){2}", z = "[\\ud800-\\udbff][\\udc00-\\udfff]", n = "[" + j + "]", Be = "\\u200d", x = "(?:" + T + "|" + L + ")", Me = "(?:" + n + "|" + L + ")", g = "(?:" + R + "(?:d|ll|m|re|s|t|ve))?", y = "(?:" + R + "(?:D|LL|M|RE|S|T|VE))?", I = Ue + "?", U = "[" + Le + "]?", Pe = "(?:" + Be + "(?:" + [Ne, F, z].join("|") + ")" + U + I + ")*", Ze = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", De = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ge = U + I + Pe, We = "(?:" + [ze, F, z].join("|") + ")" + Ge, He = RegExp([
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
var Ye = "['’]", qe = RegExp(Ye, "g");
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
      default: () => d("animated", !1)
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
      default: () => d("defaultControlClass", "form-control")
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
      default: () => d("group", !0)
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
      default: () => d("indicator", "spinner")
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
      default: () => d("labelClass", "form-label")
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
