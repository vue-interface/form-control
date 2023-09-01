import { isNil } from 'lodash-es';
import { Component, WritableComputedRef, computed, onBeforeMount, ref, useAttrs, useSlots, watch } from 'vue';

export type FormControlEvents<T> = {
    (e: 'update:modelValue', value: T): void
};

export type FormControlSlot<T> = (
    props: {
        controlAttributes: FormControlAttributes<T>,
        onClick: (e: Event) => void,
        onBlur: (e: Event) => void,
        onFocus: (e: Event) => void
    }
) => any;

export type FormControlFeedbackSlot = (
    props: {
        feedback: FormControlFeedback
    }
) => any;

export type FormControlActivitySlot = () => any;
export type FormControlHelpSlot = (helpText?: string) => any;
export type FormControlIconSlot = () => any;
export type FormControlLabelSlot = () => any;

export type FormControlSlots<T> = {
    control?: FormControlSlot<T>
    activity?: FormControlActivitySlot
    errors?: FormControlErrorSlot,
    feedback?: FormControlFeedbackSlot,
    icon?: FormControlIconSlot,
    label?: FormControlLabelSlot,
    help?: FormControlHelpSlot
};

export type FormControlErrorSlot = (props: {
    name?: unknown,
    id?: unknown,
    error?: FormControlError,
    errors?: FormControlErrorArray | FormControlErrorRecord
}) => any;

export type FormControlError = string | Error;
export type FormControlErrorArray = FormControlError[];
export type FormControlErrorRecord = Record<string,FormControlError[]>
export type FormControlFeedback = string | string[];

export type FormControlProps<T, V> = {
    activity?: boolean,
    disabled?: boolean,
    error?: FormControlError,
    errors?: FormControlErrorArray | FormControlErrorRecord,
    feedback?: FormControlFeedback,
    formControlClass?: string,
    helpText?: string,
    id?: string,
    indicator?: Component,
    indicatorSize?: string,
    invalid?: boolean,
    label?: string,
    labelClass?: string,
    modelValue?: T,
    name?: string,
    plaintext?: boolean,
    readonly?: boolean,
    valid?: boolean,
    value?: V
}

type FormGroupClasses = {
    'has-activity': boolean,
    'has-changed': boolean,
    'has-focus': boolean,
    'has-icon': boolean,
    'is-dirty': boolean,
    'is-empty': boolean,
    'is-invalid': boolean,
    'is-valid': boolean
} & Record<string,boolean>

type FormControlAttributes<V> = {
    id: string,
    class: FormControlClasses,
    disabled?: boolean,
    readonly?: boolean,
    value?: V,
} & Record<string, unknown>;

type FormControlClasses = {
    'form-control-plaintext': boolean,
    'form-control-icon': boolean,
    'is-valid': boolean,
    'is-invalid': boolean,    
} & Record<string,boolean>

export type CheckedFormControlProps<T, V> = FormControlProps<T, V> & {
    checked?: boolean,
}

export function useFormControl<T,V>(props: FormControlProps<T,V> | CheckedFormControlProps<T,V>, emit: FormControlEvents<T>, model?: WritableComputedRef<T>) {
    if(!model) {
        const currentValue = ref<T>();
        
        model = computed(props.modelValue ? {
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        } : {
            get: () => currentValue.value,
            set: value => currentValue.value = value
        });
    }
    
    const attrs = useAttrs();
    
    const hasChanged = ref(false);
    const hasFocus = ref(false);
    const hasIcon = computed(() => {
        return !!useSlots().icon;
    });

    const isDirty = ref(false);
    const isEmpty = ref(false);

    const unwatch = watch(model, () => {
        hasChanged.value = true;
        unwatch();
    });

    const id = computed<string>(() => {
        return props.id ?? Math.random().toString(36).slice(2);
    });

    const isInvalid = computed(() => {
        return !!(props.invalid || props.error || props.errors && (
            Array.isArray(props.errors)
                ? props.errors.length
                : props.errors[(attrs.name || id.value) as string]
        ));
    });

    const isValid = computed(() => {
        return !isInvalid.value && !!(props.valid || props.feedback);
    });

    const formGroupClasses = computed<FormGroupClasses>(() => ({
        [String(attrs.class)]: !!attrs.class,
        'has-activity': props.activity,
        'has-changed': hasChanged.value,
        'has-focus': hasFocus.value,
        'has-icon': hasIcon.value,
        'is-dirty': isDirty.value,
        'is-empty': isEmpty.value,
        'is-invalid': isInvalid.value,
        'is-valid': isValid.value
    }));

    const controlClasses = computed<FormControlClasses>(() => ({        
        [props.formControlClass]: !!props.formControlClass,
        'form-control-plaintext': props.plaintext,
        'form-control-icon': hasIcon.value,
        'is-valid': isValid.value,
        'is-invalid': isInvalid.value,
    }));

    const controlAttributes = computed<FormControlAttributes<any>>(() => ({
        ...attrs,
        id: id.value,
        name: props.name,
        class: controlClasses.value,
        disabled: props.disabled,
        readonly: props.readonly
    }));

    function onClick(e: Event) {
        if(props.readonly) {
            e.preventDefault();
        }
    }

    function onBlur() {
        hasFocus.value = false;
    }

    function onFocus() {
        isDirty.value = true;
        hasFocus.value = true;
    }

    onBeforeMount(() => {
        isDirty.value = !isNil(model.value);
    });

    return {
        controlAttributes,
        controlClasses,
        formGroupClasses,
        hasFocus,
        model,
        id,
        onClick,
        onBlur,
        onFocus
    };
}