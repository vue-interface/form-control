declare const _default: import("vue").DefineComponent<{
    /**
     * Show type activity indicator.
     */
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Animate floating labels inside the input.
     */
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
        type: ArrayConstructor;
        default(): string[];
    };
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
        type: StringConstructor;
        default: () => any;
    };
    /**
     * An inline field validation error.
     */
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
        type: (BooleanConstructor | ArrayConstructor | ObjectConstructor)[];
        default(): {};
    };
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    /**
     * Add form-group wrapper to input.
     */
    group: {
        type: BooleanConstructor;
        default: () => any;
    };
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: BooleanConstructor;
    /**
     * The activity indicator type.
     */
    indicator: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => any;
    };
    /**
     * The activity indicator size.
     */
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Display the form field inline.
     */
    inline: BooleanConstructor;
    /**
     * The invalid property.
     */
    invalid: BooleanConstructor;
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    /**
     * The field's default value.
     */
    modelValue: {
        default: undefined;
    };
    /**
     * Should the control look like a pill.
     */
    pill: BooleanConstructor;
    /**
     * Should the control look like plaintext.
     */
    plaintext: BooleanConstructor;
    /**
     * The size of the form control.
     */
    size: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The valid property.
     */
    valid: BooleanConstructor;
}, unknown, {
    defaultEmpty: boolean;
    hasChanged: boolean;
    hasFocus: boolean;
    isEmpty: boolean;
}, {
    id(): any;
    componentName(): any;
    controlAttributes(): {
        [k: string]: unknown;
    };
    controlClass(): any;
    controlSizeClass(): string;
    formGroupClasses(): {
        [x: string]: any;
        [x: number]: boolean;
        animated: any;
        'default-empty': any;
        'form-group': any;
        'has-activity': any;
        'has-changed': any;
        'has-focus': any;
        'has-icon': boolean;
        'is-empty': any;
        'is-invalid': boolean;
        'is-valid': boolean;
    };
    controlClasses(): any;
    hasDefaultSlot(): boolean;
    invalidFeedback(): any;
    pillClasses(): "rounded rounded-pill";
    plaintextClass(): "form-control-plaintext";
    validFeedback(): any;
}, {
    bindEvents(el: HTMLOptionElement | HTMLSelectElement, fn: Function): void;
    blur(): void;
    focus(): void;
    getInputField(): any;
    getFieldErrors(): any;
    shouldChangeOnFocus(): boolean;
    onInput(value: any): void;
}, import("vue").DefineComponent<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    shadowableClass(): {
        [x: string]: boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dropShadow: {
        type: (BooleanConstructor | StringConstructor)[]; /**
         * Animate floating labels inside the input.
         */
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    shadow: string | boolean; /**
     * The default class name assigned to the control element.
     */
    dropShadow: string | boolean;
    dropShadowableClassPrefix: string;
    shadowableClassPrefix: string;
}>, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Show type activity indicator.
     */
    activity: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Animate floating labels inside the input.
     */
    animated: {
        type: BooleanConstructor;
        default: () => any;
    };
    /**
     * An array of event names that correlate with callback functions.
     */
    nativeEvents: {
        type: ArrayConstructor;
        default(): string[];
    };
    /**
     * The default class name assigned to the control element.
     */
    defaultControlClass: {
        type: StringConstructor;
        default: () => any;
    };
    /**
     * An inline field validation error.
     */
    error: {
        type: (BooleanConstructor | StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
        type: (BooleanConstructor | ArrayConstructor | ObjectConstructor)[];
        default(): {};
    };
    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     */
    feedback: {
        type: (StringConstructor | ArrayConstructor)[];
        default: undefined;
    };
    /**
     * Add form-group wrapper to input.
     */
    group: {
        type: BooleanConstructor;
        default: () => any;
    };
    /**
     * Some instructions to appear under the field label.
     */
    helpText: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * Hide the label for browsers, but leave it for screen readers.
     */
    hideLabel: BooleanConstructor;
    /**
     * The activity indicator type.
     */
    indicator: {
        type: (BooleanConstructor | StringConstructor)[];
        default: () => any;
    };
    /**
     * The activity indicator size.
     */
    indicatorSize: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Display the form field inline.
     */
    inline: BooleanConstructor;
    /**
     * The invalid property.
     */
    invalid: BooleanConstructor;
    /**
     * The value of label element. If no value, no label will appear.
     */
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * The default label class assigned to the label element.
     */
    labelClass: {
        type: (StringConstructor | ObjectConstructor)[];
        default: () => any;
    };
    /**
     * The field's default value.
     */
    modelValue: {
        default: undefined;
    };
    /**
     * Should the control look like a pill.
     */
    pill: BooleanConstructor;
    /**
     * Should the control look like plaintext.
     */
    plaintext: BooleanConstructor;
    /**
     * The size of the form control.
     */
    size: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * Additional margin/padding classes for fine control of spacing.
     */
    spacing: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The valid property.
     */
    valid: BooleanConstructor;
}>>, {
    activity: boolean;
    animated: boolean;
    nativeEvents: unknown[];
    defaultControlClass: string;
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    group: boolean;
    helpText: string | number;
    hideLabel: boolean;
    indicator: string | boolean;
    indicatorSize: string;
    inline: boolean;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: undefined;
    pill: boolean;
    plaintext: boolean;
    size: string;
    spacing: string;
    valid: boolean;
}>;
export default _default;
