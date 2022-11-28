import { defineComponent as m } from "vue";
const n = {};
function o(...t) {
  if (!t.length)
    return n;
  const [e, i] = t;
  return typeof e == "string" ? typeof n[e] < "u" ? n[e] : i : Array.isArray(e) ? e.reduce((s, r) => Object.assign(s, {
    [r]: n[r]
  }), {}) : Object.assign(n, ...t);
}
const S = m({
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
var d = function() {
  return d = Object.assign || function(e) {
    for (var i, s = 1, r = arguments.length; s < r; s++) {
      i = arguments[s];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, d.apply(this, arguments);
};
function E(t) {
  return t.toLowerCase();
}
var w = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], $ = /[^A-Z0-9]+/gi;
function A(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, s = i === void 0 ? w : i, r = e.stripRegexp, a = r === void 0 ? $ : r, f = e.transform, b = f === void 0 ? E : f, p = e.delimiter, C = p === void 0 ? " " : p, l = g(g(t, s, "$1\0$2"), a, "\0"), h = 0, u = l.length; l.charAt(h) === "\0"; )
    h++;
  for (; l.charAt(u - 1) === "\0"; )
    u--;
  return l.slice(h, u).split("\0").map(b).join(C);
}
function g(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(s, r) {
    return s.replace(r, i);
  }, t);
}
function F(t, e) {
  return e === void 0 && (e = {}), A(t, d({ delimiter: "." }, e));
}
function y(t, e) {
  return e === void 0 && (e = {}), F(t, d({ delimiter: "-" }, e));
}
function c(t, e, i = "-") {
  const s = e.toString().replace(new RegExp(`^${t}${i}?`), "");
  return [
    y(s),
    t
  ].filter((r) => !!r).join(i);
}
function v(t) {
  return !Array.isArray(t) && typeof t == "object";
}
function x(t) {
  return t === void 0;
}
const z = m({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var i, s;
        (s = (i = e.instance) == null ? void 0 : i.bindEvents) == null || s.call(i, t);
      }
    }
  },
  mixins: [
    S
  ],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => o("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => o("defaultControlClass", "form-control")
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
      default: () => o("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: () => o("indicator", "spinner")
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
      default: () => o("labelClass", "form-label")
    },
    modelValue: {
      default: void 0
    },
    pill: Boolean,
    plaintext: Boolean,
    size: String,
    spacing: String,
    valid: Boolean
  },
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
          ["class", this.controlClasses]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return c(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [y(this.componentName)]: !!this.componentName,
        [this.size && c(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && c(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      };
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
      var s;
      e || (e = this.onInput);
      const i = t instanceof HTMLSelectElement ? (s = t.querySelectorAll("option")) == null ? void 0 : s[t.selectedIndex] : null;
      x(this.modelValue) ? i && (t.value = i == null ? void 0 : i.value) : t.value = this.modelValue, t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", (r) => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((r) => {
        t.addEventListener(r, (a) => {
          this.$emit(r, a);
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
      return this.errors && v(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || v(t) ? t : [t];
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
  z as FormControl,
  o as config
};
