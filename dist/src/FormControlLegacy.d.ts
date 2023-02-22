declare const _default: import("vue").DefineComponent<{
    modelValue: {
        default: undefined;
    };
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
        type: (StringConstructor | ArrayConstructor | BooleanConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
        type: (ArrayConstructor | ObjectConstructor | BooleanConstructor)[];
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
        type: (StringConstructor | BooleanConstructor)[];
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
    } & (false | {
        [x: string]: boolean;
    });
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
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (StringConstructor | BooleanConstructor)[];
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
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    dropShadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
    shadow: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    shadowableClassPrefix: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    shadow: string | boolean;
    dropShadow: string | boolean;
    dropShadowableClassPrefix: string; /**
     * The default class name assigned to the control element.
     */
    shadowableClassPrefix: string;
}>, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "update:modelValue")[], "focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: undefined;
    };
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
        type: (StringConstructor | ArrayConstructor | BooleanConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     */
    errors: {
        type: (ArrayConstructor | ObjectConstructor | BooleanConstructor)[];
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
        type: (StringConstructor | BooleanConstructor)[];
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    onKeyup?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    activity: boolean;
    animated: boolean;
    group: boolean;
    helpText: string | number;
    indicator: string | boolean;
    indicatorSize: string;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: undefined;
    plaintext: boolean;
    size: string;
    valid: boolean;
    nativeEvents: unknown[];
    defaultControlClass: string;
    hideLabel: boolean;
    inline: boolean;
    pill: boolean;
    spacing: string;
}>;
export default _default;
