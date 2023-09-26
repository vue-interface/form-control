const deepMerge = require('deepmerge');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    function fieldComponent(value, shallowMerge) {
        const css = {
            ...theme('formControl.css'),
            ...value
        };

        const component = {
            fontSize: css.fontSize,

            '.form-control': css,

            '&.is-invalid, &[invalid]': {
                'label, .invalid-feedback': {
                    color: theme('form.invalid.color'),
                }
            },

            '&.is-valid, &[valid]': {
                'label, .valid-feedback': {
                    color: theme('form.valid.color'),
                }
            },

            '.form-group-inner': {
                position: 'relative',

                '&:has(> .form-group-inner-icon) .form-control': {
                    paddingLeft: '2em'
                }
            },
            
            '.form-group-inner-icon': {
                position: 'absolute',
                top: '50%',
                left: '.5em',
                width: '1.25em',
                fontSize: 'inherit',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },

            '.activity-indicator': {
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translate(-1rem, -50%)',
                transition: 'all .15s ease-in'
            }
        };

        if(shallowMerge) {
            for(const key of Object.keys(shallowMerge)) {
                component[key] = Object.assign({}, component[key], shallowMerge[key]);
                
            }
        }

        return component;
    };

    matchComponents({
        'form-control': value => ({
            ...theme('formControl.css'),
            ...value
        }),
        'input-field': value => fieldComponent(value),
        'textarea-field': value => fieldComponent(value, {
            ['.form-group-inner-icon']: {
                'top': '.5em',
                'transform': null
            }
        })
    }, {
        values: theme('formControl.sizes')
    });

    for(const [key, style] of Object.entries(theme('formControl.styles'))) {
        matchComponents({
            [`form-control-${key}`]: value => deepMerge(style, value)
        }, {
            values: theme('formControl.sizes')
        });
    }
}, {
    theme: {
        formControl: theme => {
            function dark(type, color) {
                const value = theme(color);

                if(!value) {
                    return;
                }

                return `@apply dark:${type}-[${value.replace(/\s+/g, '')}]`;
            }

            return {
                css: {
                    display: 'flex',
                    width: '100%',
                    fontFamily: theme('form.fontFamily'),
                    fontWeight: theme('form.fontWeight', '400'),
                    lineHeight: theme('form.lineHeight', '1.5'),
                    backgroundColor: theme('form.backgroundColor', colors.white),
                    borderWidth: !theme('form.border') && theme('form.borderWidth'),
                    borderStyle: !theme('form.border') && theme('form.borderStyle'),
                    borderColor: !theme('form.border') && theme('form.borderColor'),
                    border: theme('form.border'),
                    borderRadius: theme('form.borderRadius'),
                    boxShadow: theme('form.boxShadow'),
                    transition: theme('form.transition'),
                    appearance: theme('form.appearance', 'none'),
        
                    [dark('text', 'form.dark.color')]: {},
                    [dark('bg', 'form.dark.backgroundColor')]: {},
                    [dark('border', 'form.dark.borderColor')]: {},
                    [dark('border-t', 'form.dark.borderTopColor')]: {},
                    [dark('border-b', 'form.dark.borderBottomColor')]: {},
                    [dark('border-l', 'form.dark.borderLeftColor')]: {},
                    [dark('border-r', 'form.dark.borderRightColor')]: {},
                    
                    // Customize the `:focus` state to imitate native WebKit styles.
                    '&:focus': {
                        color: theme('form.focus.color'),
                        backgroundColor: theme('form.focus.backgroundColor'),
                        borderColor: theme('form.focus.borderColor'),
                        outline: theme('form.focus.outline'),
                        boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('colors.blue.500', colors.blue['500'])).fade(.25)}`),
                        
                        [dark('text', 'form.focus.dark.color')]: {},
                        [dark('bg', 'form.focus.dark.backgroundColor')]: {},
                        [dark('border', 'form.focus.dark.borderColor')]: {},
                        [dark('border-t', 'form.focus.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.focus.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.focus.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.focus.dark.borderRightColor')]: {},
                    },
                
                    // Placeholder
                    '&::placeholder': {
                        color: theme('form.placeholder.color'),
                        // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
                        opacity: theme('form.placeholder.opacity'),
                                        
                        [dark('text', 'form.placeholder.dark.color')]: {},
                        [dark('bg', 'form.placeholder.dark.backgroundColor')]: {},
                        [dark('border', 'form.placeholder.dark.borderColor')]: {},
                        [dark('border-t', 'form.placeholder.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.placeholder.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.placeholder.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.placeholder.dark.borderRightColor')]: {},
                    },
                
                    // Disabled and read-only inputs
                    '&:disabled:not([readonly])': {
                        color: theme('form.disabled.color'),
                        backgroundColor: theme('form.disabled.backgroundColor'),
                        borderColor: theme('form.disabled.borderColor'),
                        // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
                        opacity: theme('form.disabled.opacity'),

                        '&::placeholder': {
                            [dark('text', 'form.disabled.dark.color')]: {},
                        },

                        [dark('text', 'form.disabled.dark.color')]: {},
                        [dark('bg', 'form.disabled.dark.backgroundColor')]: {},
                        [dark('border', 'form.disabled.dark.borderColor')]: {},
                        [dark('border-t', 'form.disabled.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.disabled.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.disabled.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.disabled.dark.borderRightColor')]: {},
                    },

                    '&.is-invalid, &[invalid]': {
                        borderColor: theme('form.invalid.borderColor'),
                        backgroundColor: theme('form.invalid.backgroundColor'),
                        color: theme('form.invalid.color'),

                        'label:has(&), label:has(+ &), label:has(~ * &), & + label': {
                            color: theme('form.invalid.color'),
                        },

                        '&:focus, &.focus': {
                            boxShadow: theme('form.invalid.focus.boxShadow')
                        },
                        
                        backgroundImage: theme('form.invalid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingTop')} + ${theme('form.paddingBottom')}) / 4) center`,
                        backgroundSize: '1.25em',

                        [dark('text', 'form.invalid.dark.color')]: {},
                        [dark('bg', 'form.invalid.dark.backgroundColor')]: {},
                        [dark('border', 'form.invalid.dark.borderColor')]: {},
                        [dark('border-t', 'form.invalid.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.invalid.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.invalid.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.invalid.dark.borderRightColor')]: {},
                    },

                    [`
                        &.is-invalid .invalid-feedback,
                        &[invalid] .invalid-feedback,
                        &.is-invalid ~ .invalid-feedback,
                        &[invalid] ~ .invalid-feedback,
                        *:has(&.is-invalid) .invalid-feedback,
                        *:has(&[invalid]) .invalid-feedback,
                    `]: {
                        color: theme('form.invalid.color'),
                    },

                    '&.is-valid, &[valid]': {
                        borderColor: theme('form.valid.borderColor'),
                        backgroundColor: theme('form.valid.backgroundColor'),
                        color: theme('form.valid.color'),

                        'label:has(&), label:has(+ &), label:has(~ * > &), & + label': {
                            color: theme('form.valid.color'),
                        },

                        '&:focus, &.focus': {
                            boxShadow: theme('form.valid.focus.boxShadow')
                        },

                        backgroundImage: theme('form.valid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingTop')} + ${theme('form.paddingBottom')}) / 4) center`,
                        backgroundSize: '1.25em',

                        [dark('text', 'form.valid.dark.color')]: {},
                        [dark('bg', 'form.valid.dark.backgroundColor')]: {},
                        [dark('border', 'form.valid.dark.borderColor')]: {},
                        [dark('border-t', 'form.valid.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.valid.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.valid.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.valid.dark.borderRightColor')]: {},
                    },

                    [`
                        &.is-valid .valid-feedback,
                        &[valid] .valid-feedback,
                        &.is-valid ~ .valid-feedback,
                        &[valid] ~ .valid-feedback,
                        *:has(&.is-valid) .valid-feedback,
                        *:has(&[valid]) .valid-feedback,
                    `]: {
                        color: theme('form.valid.color'),
                    },
                },
                sizes: {
                    ...theme('form.sizes'),

                    color: {
                        width: '2.75rem',
                        height: '2.375rem',
                        padding: '.375rem',
                        borderRadius: theme('form.borderRadius', '.275rem'),

                        '&::-moz-color-swatch': {
                            borderRadius: theme('form.borderRadius', '.25rem'),
                        },
                    
                        '&::-webkit-color-swatch': {
                            borderRadius: theme('form.borderRadius', '.25rem')
                        }
                    }
                },
                styles: {
                    plaintext: theme('form.plaintext')
                }
            };
        }
    }
});