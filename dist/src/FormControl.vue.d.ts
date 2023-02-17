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
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation error.
     */
    error: {
        type: (BooleanConstructor | ArrayConstructor | StringConstructor)[];
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
        type: (ArrayConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
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
        type: (BooleanConstructor | ObjectConstructor | StringConstructor)[];
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
        type: (ObjectConstructor | StringConstructor)[];
        default: () => any;
    };
    /**
     * The model default value.
     */
    modelValue: {
        type: (ArrayConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
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
    currentValue: string | number | unknown[] | Record<string, any> | undefined;
    hasChanged: boolean;
    hasFocus: boolean;
    isDirty: boolean;
    isEmpty: boolean;
}, {
    id(): string | undefined;
    componentName(): any;
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
        'is-invalid': boolean;
        'is-valid': boolean;
    } & (false | {
        [x: string]: boolean;
    });
    controlAttributes(): any;
    controlClasses(): any;
    controlSizeClass(): string;
    invalidFeedback(): any;
    validFeedback(): any;
    plaintextClass(): "form-control-plaintext";
}, {
    bindEvents(el: HTMLElement): void;
    blur(): void;
    focus(): void;
    getFieldErrors(): any;
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
    }; /**
     * Show type activity indicator.
     */
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * An inline field validation error.
     */
    error: {
        type: (BooleanConstructor | ArrayConstructor | StringConstructor)[];
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
        type: (ArrayConstructor | StringConstructor)[];
        default: undefined;
    };
    /**
     * The primary class assigned to the form control.
     */
    formControlClass: {
        type: (ArrayConstructor | ObjectConstructor | StringConstructor)[];
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
        type: (BooleanConstructor | ObjectConstructor | StringConstructor)[];
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
        type: (ObjectConstructor | StringConstructor)[];
        default: () => any;
    };
    /**
     * The model default value.
     */
    modelValue: {
        type: (ArrayConstructor | ObjectConstructor | StringConstructor | NumberConstructor)[];
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
    activity: boolean;
    animated: boolean;
    controlClass: string | unknown[] | Record<string, any>;
    error: string | boolean | unknown[];
    errors: boolean | unknown[] | Record<string, any>;
    feedback: string | unknown[];
    formControlClass: string | unknown[] | Record<string, any>;
    group: boolean;
    helpText: string | number;
    indicator: string | boolean | Record<string, any>;
    indicatorSize: string;
    invalid: boolean;
    label: string | number;
    labelClass: string | Record<string, any>;
    modelValue: string | number | unknown[] | Record<string, any>;
    plaintext: boolean;
    size: string;
    valid: boolean;
}>;
export default _sfc_main;
