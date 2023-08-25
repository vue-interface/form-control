const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    matchComponents({
        'form-control': value => ({
            ...theme('formControl.css'),
            ...value
        }),
        'input-field': value => {
            const css = {
                ...theme('formControl.css'),
                ...value
            };

            return {
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
        }
    }, {
        values: theme('formControl.styles')
    });
}, {
    theme: {
        formControl: theme => {
            function dark(type, color) {
                const value = theme(color);

                if(!value) {
                    return '';
                }

                return `@apply dark:${type}-[${value.replace(/\s+/g, '')}]`;
            }

            return {
                css: {
                    display: 'flex',
                    width: '100%',
                    // minHeight: `calc(1.5 * 1em + ${theme('form.paddingY', '.375rem')} * 2 + 1px * 2)`,
                    fontFamily: theme('form.fontFamily'),
                    fontWeight: theme('form.fontWeight', '400'),
                    lineHeight: theme('form.lineHeight', '1.5'),
                    backgroundColor: theme('form.backgroundColor', colors.white),
                    borderWidth: theme('form.borderWidth', '1px'),
                    borderStyle: theme('form.borderStyle', 'solid'),
                    border: `${theme('form.borderWidth')} ${theme('form.borderStyle')} ${theme('form.borderColor')}`,
                    boxShadow: theme('form.enableShadows') && theme('form.boxShadow'),
                    transition: theme('form.transition'),
                    appearance: theme('form.appearance', 'none'),
        
                    [dark('text', 'form.dark.color')]: {},
                    [dark('bg', 'form.dark.backgroundColor')]: {},
                    [dark('border', 'form.dark.borderColor')]: {},
                    
                    // Customize the `:focus` state to imitate native WebKit styles.
                    '&:focus': {
                        color: theme('form.focus.color'),
                        backgroundColor: theme('form.focus.backgroundColor'),
                        borderColor: theme('form.focus.borderColor'),
                        outline: theme('form.focus.outline'),
                        boxShadow: `${theme('form.focus.boxShadow')}${theme('form.enableShadows') ? `, ${theme('form.boxShadow')}` : ''}`,
                        
                        [dark('text', 'form.focus.dark.color')]: {},
                        [dark('bg', 'form.focus.dark.backgroundColor')]: {},
                        [dark('border', 'form.focus.dark.borderColor')]: {},
                    },
                
                    // Placeholder
                    '&::placeholder': {
                        color: theme('form.placeholder.color'),
                        // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
                        opacity: theme('form.placeholder.opacity'),
                                        
                        [dark('text', 'form.placeholder.dark.color')]: {},
                        [dark('bg', 'form.placeholder.dark.backgroundColor')]: {},
                        [dark('border', 'form.placeholder.dark.borderColor')]: {},
                    },
                
                    // Disabled and read-only inputs
                    '&:disabled, &:disabled[readonly]': {
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
                        [dark('border', 'form.disabled.dark.borderColor')]: {}
                    },

                    '&.is-invalid, &[invalid]': {
                        borderColor: theme('form.invalid.borderColor'),
                        backgroundColor: theme('form.invalid.backgroundColor'),
                        color: theme('form.invalid.color'),

                        'label:has(&), label:has(+ &), label:has(~ * &), & + label': {
                            color: theme('form.invalid.color'),
                        },

                        '&:focus, &.focus': {
                            boxShadow: `0 0 0 .2rem ${Color(theme('form.invalid.borderColor')).fade(.5)}`
                        },
                        
                        backgroundImage: theme('form.invalid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingY')} * 2) / 4) center`,
                        backgroundSize: '1.25em',

                        [dark('text', 'form.invalid.dark.color')]: {},
                        [dark('bg', 'form.invalid.dark.backgroundColor')]: {},
                        [dark('border', 'form.invalid.dark.borderColor')]: {}
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
                            boxShadow: `0 0 0 .2rem ${Color(theme('form.valid.borderColor')).fade(.5)}`
                        },

                        backgroundImage: theme('form.valid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingY')} * 2) / 4) center`,
                        backgroundSize: '1.25em',

                        [dark('text', 'form.valid.dark.color')]: {},
                        [dark('bg', 'form.valid.dark.backgroundColor')]: {},
                        [dark('border', 'form.valid.dark.borderColor')]: {}
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
                styles: {
                    ...require('./sizes.cjs'),
                    
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
                    },
                    plaintext: {
                        display: theme('form.plaintext.display'),
                        width: theme('form.plaintext.width'),
                        padding: `${theme('form.plaintext.paddingY')} ${theme('form.plaintext.paddingX')}`,
                        marginBottom: theme('form.plaintext.marginBottom'), // match inputs if this class comes on inputs with default margins
                        lineHeight: theme('form.plaintext.lineHeight'),
                        color: theme('form.plaintext.color'),
                        backgroundColor: theme('form.plaintext.backgroundColor'),
                        borderStyle: theme('form.plaintext.borderStyle'),
                        borderColor: theme('form.plaintext.borderColor'),
                        borderWidth: theme('form.plaintext.borderWidth'),
                        boxShadow: 'none',
                        outline: 'none',
                        cursor: 'default',
        
                        // Customize the `:focus` state to imitate native WebKit styles.
                        '&:focus': {
                            color: theme('form.plaintext.color'),
                            backgroundColor: theme('form.plaintext.backgroundColor'),
                            borderColor: theme('form.plaintext.borderColor'),
                            boxShadow: 'none',
                        },

                        // Disabled and read-only inputs
                        '&:disabled, &:disabled[readonly]': {
                            color: theme('form.disabled.borderColor'),
                            opacity: '1'
                        },

                        [dark('text', 'form.plaintext.dark.color')]: {},
                        [dark('bg', 'form.plaintext.dark.backgroundColor')]: {},
                        [dark('border', 'form.plaintext.dark.borderColor')]: {}
                    }
                }
            };
        }
    }
});