<script lang="ts">
import { Shadowable } from '@vue-interface/shadowable';
import { isEmpty, isObject, kebabCase } from 'lodash-es';
import { defineComponent, DirectiveBinding } from 'vue';
import config from './config';
import FormControlErrors from './FormControlErrors.vue';
import FormControlFeedback from './FormControlFeedback.vue';

function prefix(key: string, value: any, delimeter = '-') {
    const string = String(value).replace(new RegExp(`^${key}${delimeter}?`), '');

    return [
        kebabCase(string), key
    ].filter(value => !!value).join(delimeter);
}

export default defineComponent({
    components: {
        FormControlErrors,
        FormControlFeedback
    },
    directives: {
        bindEvents: {
            created(el: HTMLElement, binding: DirectiveBinding) {
                // @ts-ignore
                binding.instance?.bindEvents?.(el);
            }
        }
    },
    mixins: [
        Shadowable
    ],
    inheritAttrs: false,
    props: {
        /**
         * Show type activity indicator.
         */
        activity: {
            type: Boolean,
            default: false
        },
        
        /**
         * Animate floating labels inside the input.
         */
        animated: {
            type: Boolean,
            default: () => config('animated', false)
        },


        /**
         * An inline field validation error.
         */
        error: {
            type: [String, Array, Boolean],
            default: undefined
        },

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         */
        errors: {
            type: [Array, Object, Boolean],
            default: undefined
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         */
        feedback: {
            type: [String, Array],
            default: undefined
        },

        /**
         * The primary class assigned to the form control.
         */
        formControlClass: {
            type: [Array, Object, String],
            default: () => config('controlClass', 'form-control')
        },
        
        /**
         * Add form-group wrapper to input.
         */
        group: {
            type: Boolean,
            default: () => config('group', true)
        },
        
        /**
         * Some instructions to appear under the field label.
         */
        helpText: {
            type: [Number, String],
            default: undefined
        },
        
        /**
         * The activity indicator type.
         */
        indicator: {
            type: [Object, String, Boolean],
            default: () => config('indicator', 'spinner')
        },

        /**
         * The activity indicator size.
         */
        indicatorSize: {
            type: String,
            default: undefined
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
            default: undefined
        },
        
        /**
         * The default label class assigned to the label element.
         */
        labelClass: {
            type: [Object, String],
            default: () => config('labelClass', 'form-label')
        },

        /**
         * The model default value.
         */
        modelValue: {
            type: [String, Number, Boolean, Array, Object],
            default: () => undefined
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
            default: undefined
        },

        /**
         * Force the input to be valid.
         */
        valid: Boolean
    },
    emits: [
        'focus',
        'blur',
        'change',
        'click',
        'keypress',
        'keyup',
        'keydown',
        'progress',
        'paste',
        'update:modelValue'
    ],
    data() {
        return {
            currentValue: null,
            hasChanged: false,
            hasFocus: false,
            isDirty: false,
        };
    },
    computed: {
        model: {
            get() {
                return this.modelValue;
            },
            set(value: any) {
                this.setModelValue(value);
            }
        },
        id(): string|undefined {
            return this.$attrs.id
                || Math.random().toString(36).slice(2);
        },
        isEmpty() {
            return isEmpty(this.model);
        },
        isInvalid() {
            return !!(this.invalid || this.error || this.errors && (
                Array.isArray(this.errors)
                    ? this.errors.length
                    : this.errors[this.$attrs.id || this.$attrs.name]
            ));
        },
        isValid() {
            return !!(this.valid || this.feedback);
        },
        componentName() {
            return this.$options.name;
        },
        controlClass() {
            return this.formControlClass;
        },
        controlAttributes() {
            return Object.assign({}, this.$attrs, {
                id: this.id,
                class: this.controlClasses
            });
        },
        controlClasses() {
            console.log(this.formControlClass, this.controlClass);
            return Object.assign({
                [this.controlClass]: !!this.controlClass,
                [this.controlSizeClass]: !!this.controlSizeClass,
                // [this.formControlClass]: !!this.formControlClass,
                [this.plaintextClass]: this.plaintext,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': this.isValid,
                'is-invalid': this.isInvalid,
            }, this.shadowableClass);
        },
        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },
        formGroupClasses() {
            return Object.assign({
                'animated': this.animated,
                'form-group': this.group,
                'has-activity': this.activity,
                'has-changed': this.hasChanged,
                'has-focus': this.hasFocus,
                'has-icon': !!this.$slots.icon,
                'is-dirty': this.isDirty,
                'is-empty': this.isEmpty,
                'is-invalid': this.isInvalid,
                'is-valid': this.isValid,
                [this.$attrs.class]: !!this.$attrs.class,
                [this.size && prefix(this.size, this.componentName)]: !!this.size,
            }, !!this.componentName && {
                [kebabCase(this.componentName)]: true
            });
        },
        plaintextClass() {
            return 'form-control-plaintext';
        }
    },
    methods: {
        bindEvents(el: HTMLElement) {
            for(const event of this.$options.emits) {
                el.addEventListener(event, (e: Event) => {
                    this.$emit(event, e);
                });
            }

            el.addEventListener('focus', () => {
                this.isDirty = true;
                this.hasFocus = true;
            });

            el.addEventListener('blur', () => {
                this.hasFocus = false;
            });
        },
        blur() {
            this.$refs.field?.blur();
        },
        focus() {
            this.$refs.field?.focus();
        },
        getFieldErrors() {
            let errors = this.error || this.errors;

            if(this.errors && !Array.isArray(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
        },
        getModelValue(): any {
            console.log(this.modelValue);

            if(this.modelValue === undefined) {
                return this.currentValue;
            }

            return this.modelValue;
        },
        setModelValue(value: any): void {
            this.hasChanged = true;
            this.currentValue = value;
            this.$emit('update:modelValue', value);
        }
    }
});
</script>