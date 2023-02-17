<script lang="ts">
import { Shadowable } from '@vue-interface/shadowable';
import { isEmpty, isObject, kebabCase } from 'lodash-es';
import { defineComponent, DirectiveBinding } from 'vue';
import config from './config';

function prefix(key: string, value: any, delimeter = '-') {
    const string = String(value).replace(new RegExp(`^${key}${delimeter}?`), '');

    return [
        kebabCase(string), key
    ].filter(value => !!value).join(delimeter);
}

export default defineComponent({
    directives: {
        bindEvents(el: HTMLElement, binding: DirectiveBinding) {
            // @ts-ignore
            binding.instance?.bindEvents?.(el);
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
         * Additional classes assigned to the control element. These do not
         * override any of the classes assigned by the FormControl.
         */
        controlClass: {
            type: [Array, Object, String],
            default: undefined
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
            type: [Number, String, Array, Object],
            default: undefined
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
            currentValue: this.modelValue,
            hasChanged: false,
            hasFocus: false,
            isDirty: false,
            isEmpty: isEmpty(this.modelValue),
        };
    },
    computed: {
        id(): string|undefined {
            return this.$attrs.id
                || this.$attrs.name
                || Math.random().toString(36).slice(2);
        },
        componentName() {
            return this.$options.name;
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
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                'is-valid': !!(this.valid || this.validFeedback),
                [this.$attrs.class]: !!this.$attrs.class,
                [this.size && prefix(this.size, this.componentName)]: !!this.size,
            }, !!this.componentName && {
                [kebabCase(this.componentName)]: true
            });
        },
        controlAttributes() {
            const attrs = Object.assign({}, this.$attrs, {
                id: this.id,
                class: this.controlClasses,
                value: this.modelValue
            });
            
            return attrs;
        },
        controlClasses() {
            console.log(this.plaintext);
            
            return Object.assign({
                [this.controlClass]: !!this.controlClass,
                [this.controlSizeClass]: !!this.controlSizeClass,
                [this.formControlClass]: !!this.formControlClass,
                [this.plaintextClass]: this.plaintext,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback),
            }, this.shadowableClass);
        },
        controlSizeClass() {
            return prefix(this.size, this.formControlClass);
        },
        invalidFeedback() {
            if(this.error === '') {
                return null;
            }

            if(this.error) {
                return this.error;
            }

            const errors = this.getFieldErrors();

            return Array.isArray(errors) ? errors.filter(error => {
                return error && typeof error === 'string';
            }).join('<br>') : errors;
        },
        validFeedback() {
            return Array.isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        },
        plaintextClass() {
            return 'form-control-plaintext';
        },
    },
    watch: {
        currentValue(value) {
            this.hasChanged = true;
            this.isEmpty = isEmpty(value);
            this.$emit('update:modelValue', value);
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
        }
    }
});
</script>