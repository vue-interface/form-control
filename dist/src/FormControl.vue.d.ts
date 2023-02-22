declare const _sfc_main: import("vue").DefineComponent<{
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
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: undefined;
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
     * The primary class assigned to the form control.
     */
    formControlClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: () => any;
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
     * The activity indicator type.
     */
    indicator: {
        type: (StringConstructor | ObjectConstructor | BooleanConstructor)[];
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
     * Force the input to be invalid.
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
     * The model default value.
     */
    modelValue: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
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
     * Force the input to be valid.
     */
    valid: BooleanConstructor;
}, unknown, {
    currentValue: null;
    hasChanged: boolean;
    hasFocus: boolean;
    isDirty: boolean;
}, {
    model: {
        get(): any;
        set(value: any): void;
    };
    id(): string | undefined;
    isEmpty(): boolean;
    isInvalid(): boolean;
    isValid(): boolean;
    componentName(): any;
    controlAttributes(): any;
    controlClasses(): any;
    controlSizeClass(): string;
    formGroupClasses(): {
        [x: number]: boolean;
        animated: any;
        'form-group': any;
        'has-activity': any;
        'has-changed': any;
        'has-focus': any;
        'has-icon': boolean;
        'is-dirty': any;
        'is-empty': any;
        'is-invalid': any;
        'is-valid': any;
    } & (false | {
        [x: string]: boolean;
    });
    plaintextClass(): "form-control-plaintext";
}, {
    bindEvents(el: HTMLElement): void;
    blur(): void;
    focus(): void;
    getFieldErrors(): any;
    getModelValue(): any;
    setModelValue(value: any): void;
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
    /**
     * Animate floating labels inside the input.
     */
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
    dropShadowableClassPrefix: string;
    shadowableClassPrefix: string;
}>, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "progress" | "paste" | "update:modelValue")[], "focus" | "blur" | "change" | "click" | "keypress" | "keyup" | "keydown" | "progress" | "paste" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
     * Additional classes assigned to the control element. These do not
     * override any of the classes assigned by the FormControl.
     */
    controlClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: undefined;
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
     * The primary class assigned to the form control.
     */
    formControlClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: () => any;
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
     * The activity indicator type.
     */
    indicator: {
        type: (StringConstructor | ObjectConstructor | BooleanConstructor)[];
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
     * Force the input to be invalid.
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
     * The model default value.
     */
    modelValue: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
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
     * Force the input to be valid.
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
    onProgress?: ((...args: any[]) => any) | undefined;
    onPaste?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    activity: boolean;
    animated: boolean;
    controlClass: string | unknown[] | Record<string, any>;
    formControlClass: string | unknown[] | Record<string, any>;
    group: boolean;
    helpText: string | number;
    indicator: string | boolean | Record<string, any>;
    indicatorSize: string;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: string | number | boolean | unknown[] | Record<string, any>;
    plaintext: boolean;
    size: string;
    valid: boolean;
}>;
export default _sfc_main;
