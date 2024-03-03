const deepMerge = require('deepmerge');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const escapeSvg = require('./utils/escapeSvg.cjs');
const Color = require('color');

module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    function formSelect(value) {
        return deepMerge(theme('formSelect.css'), value);
    }

    matchComponents({
        'form-select': formSelect,        
        'select-field': value => {
            const css = formSelect(value);

            return {
                fontSize: css.fontSize,

                '.form-select': css,

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
                    position: 'relative'
                },
                
                '&:has(.form-group-inner-icon) .form-select': {
                    paddingLeft: '2em'
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
                    right: '.75rem',
                    top: '50%',
                    transform: 'translate(-1rem, -50%)',
                    transition: 'all .15s ease-in'
                }
            };
        }
    }, {
        values: theme('formSelect.sizes')
    });

    for(const [key, style] of Object.entries(theme('formSelect.styles'))) {
        matchComponents({
            [`form-select-${key}`]: value => deepMerge(style, value)
        }, {
            values: theme('formSelect.sizes')
        });
    }
}, {
    theme: {
        formSelect: theme => {
            function dark(type, color) {
                const value = theme(color);

                if(!value) {
                    return;
                }

                return `@apply dark:${type}-[${value.replace(/\s+/g, '')}]`;
            }

            return {
                css: {
                    display: theme('form.display', 'flex'),
                    width: theme('form.width', '100%'),
                    paddingRight: `calc(${theme('form.paddingRight', '.75rem')} * 2)`,
                    fontFamily: theme('form.fontFamily'),
                    fontWeight: theme('form.fontWeight', '400'),
                    lineHeight: theme('form.lineHeight', '1.5'),
                    color: colors.gray['800'],
                    verticalAlign: 'middle',
                    backgroundColor: theme('form.backgroundColor', colors.white),
                    backgroundImage: theme('form.select.backgroundImage'),
                    backgroundRepeat: theme('form.select.backgroundRepeat'),
                    backgroundPosition: theme('form.select.backgroundPosition'),
                    backgroundSize: theme('form.select.backgroundSize'),
                    borderWidth: !theme('form.border') && theme('form.borderWidth'),
                    borderStyle: !theme('form.border') && theme('form.borderStyle'),
                    borderColor: !theme('form.border') && theme('form.borderColor'),
                    border: theme('form.border'),
                    borderRadius: theme('form.borderRadius'),
                    boxShadow: theme('form.boxShadow'),
                    transition: theme('form.transition', 'border-color .15s ease-in-out, box-shadow .15s ease-in-out'),
                    appearance: theme('form.appearance', 'none'),
                    opacity: theme('form.opacity'),

                    [dark('text', 'form.dark.color')]: {},
                    [dark('bg', 'form.dark.backgroundColor')]: {},
                    [dark('border', 'form.dark.borderColor')]: {},
                    [dark('border-t', 'form.dark.borderTopColor')]: {},
                    [dark('border-b', 'form.dark.borderBottomColor')]: {},
                    [dark('border-l', 'form.dark.borderLeftColor')]: {},
                    [dark('border-r', 'form.dark.borderRightColor')]: {},
                    
                    [`@apply dark:bg-[${theme('form.select.dark.backgroundImage')}]`]: {},

                    '&:focus': {
                        color: theme('form.color', theme('colors.gray.700', colors.gray['700'])),
                        backgroundColor: theme('form.backgroundColor', colors.white),
                        borderColor: theme('form.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                        outline: '0',
                        boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('colors.blue.500', colors.blue['500'])).fade(.25)}`),

                        [dark('text', 'form.focus.dark.color')]: {},
                        [dark('bg', 'form.focus.dark.backgroundColor')]: {},
                        [dark('border', 'form.focus.dark.borderColor')]: {},
                        [dark('border-t', 'form.focus.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.focus.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.focus.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.focus.dark.borderRightColor')]: {},
                    },
            
                    '&::-ms-value': {
                        // For visual consistency with other platforms/browsers,
                        // suppress the default white text on blue background highlight given to
                        // the selected option text when the (still closed) <select> receives focus
                        // in Edge.
                        // See https://github.com/twbs/bootstrap/issues/19398.
                        color: theme('form.color', theme('colors.gray.700', colors.gray['700'])),
                        backgroundColor: colors.white,

                        [dark('text', 'form.dark.color')]: {},
                        [dark('bg', 'form.dark.backgroundColor')]: {},
                    },
                
                    '&[multiple], &[size]:not([size="1"])': {
                        height: 'auto',
                        paddingRight: theme('form.paddingRight', '.75rem'),
                        backgroundImage: 'none'
                    },
                
                    '&:disabled:not([readonly])': {
                        borderColor: theme('form.disabled.borderColor'),
                        color: theme('form.disabled.color'),

                        [dark('text', 'form.disabled.dark.color')]: {},
                        [dark('bg', 'form.disabled.dark.backgroundColor')]: {},
                        [dark('border', 'form.disabled.dark.borderColor')]: {},
                        [dark('border-t', 'form.disabled.dark.borderTopColor')]: {},
                        [dark('border-b', 'form.disabled.dark.borderBottomColor')]: {},
                        [dark('border-l', 'form.disabled.dark.borderLeftColor')]: {},
                        [dark('border-r', 'form.disabled.dark.borderRightColor')]: {},
                    },

                    '&[readonly]:disabled': {
                        // opacity: theme('form.opacity')
                    },
  
                    // Remove outline from select box in FF
                    '&:-moz-focusring': {
                        color: 'transparent',
                        textShadow: `0 0 0 ${colors.gray['800']}`
                    },

                    '&.is-invalid, &[invalid]': {
                        borderColor: theme('form.invalid.borderColor'),
                        backgroundColor: theme('form.invalid.backgroundColor'),
                        color: theme('form.invalid.color'),

                        'label:has(&), label:has(+ &), label:has(~ * > &), & + label': {
                            color: theme('form.invalid.color'),
                        },

                        '&:focus, &.focus': {
                            boxShadow: `0 0 0 .2rem ${Color(theme('form.invalid.borderColor')).fade(.5)}`
                        },
                        
                        backgroundImage: theme('form.invalid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingLeft')} * 2) / 4) center`,
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
                            boxShadow: `0 0 0 .2rem ${Color(theme('form.valid.borderColor')).fade(.5)}`
                        },

                        backgroundImage: theme('form.valid.backgroundImage'),
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingLeft')} * 2) / 4) center`,
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
                    DEFAULT: {
                        ...theme('form.sizes.DEFAULT'),
                        padding: '.375rem 1.75rem .375rem .75rem',
                        backgroundSize: '1rem'
                    },

                    'xs': {
                        ...theme('form.sizes.xs'),
                        padding: '.15rem 1.35rem .15rem .35rem',
                        backgroundSize: '.66rem'
                    },

                    'sm': {
                        ...theme('form.sizes.sm'),
                        padding: '.25rem 1.5rem .25rem .5rem',
                        backgroundSize: '.75rem'
                    },
    
                    'md': {
                        ...theme('form.sizes.md'),
                        padding: '.375rem 1.75rem .375rem .75rem',
                        backgroundSize: '1rem'
                    },

                    'lg': {
                        ...theme('form.sizes.lg'),
                        padding: '.5rem 2rem .5rem 1rem',
                        backgroundSize: '1.25rem'
                    },
    
                    'xl': {
                        ...theme('form.sizes.xl'),
                        padding: '.66rem 2.25rem .66rem 1.25rem',
                        backgroundSize: '1.5rem'
                    },
    
                    '2xl': {
                        ...theme('form.sizes.2xl'),
                        padding: '.75rem 2.5rem .75rem 1.5rem',
                        backgroundSize: '1.75rem'
                    },
    
                    '3xl': {
                        ...theme('form.sizes.3xl'),
                        padding: '.85rem 2.75rem .85rem 1.75rem',
                        backgroundSize: '2rem'
                    },
    
                    '4xl': {
                        ...theme('form.sizes.4xl'),
                        padding: '1rem 3rem 1rem 2rem',
                        backgroundSize: '2.25rem'
                    }
                },

                styles: {
                    plaintext: theme('form.plaintext')
                }
            };
        }
    }
});