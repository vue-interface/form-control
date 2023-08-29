const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); 
const escapeSvg = require('./utils/escapeSvg.cjs');

/** @type {import('tailwindcss/plugin')} */
module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    console.log(theme('formSwitch.styles'));
    matchComponents({
        'form-switch': value => ({
            ...theme('formSwitch.css'),
            ...value
        }),
        'light-switch-field': value => ({
            '.form-switch': {
                ...theme('formSwitch.css'),
                ...value
            },
            
            '.form-switch-label': {
                display: 'flex',
                alignItems: 'center',
                gap: '.5em',
                
                '&:has(:disabled:not([readonly]))': {
                    opacity: '.5'
                }
            },

            '&.is-invalid, &[invalid]': {
                'label, .invalid-feedback': {
                    color: theme('form.invalid.color'),
                }
            },

            '&.is-valid, &[valid]': {
                'label, .valid-feedback': {
                    color: theme('form.valid.color'),
                }
            }
        }),
    }, {
        values: theme('formSwitch.styles')
    });
}, {
    theme: {
        formSwitch: theme => ({
            css: {
                display: 'inline-flex',
                position: 'relative',
                outline: 'none',
                appearance: 'none',
                border: `${theme('formControl.borderWidth', '1px')} ${theme('formControl.borderStyle', 'solid')} ${theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400']))}`,
            
                '&:before': {
                    'content': '""',
                    position: 'absolute',
                    top: '50%',
                    backgroundColor: 'red',
                    display: 'block',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.secondary', theme('colors.gray.500', colors.gray[500]))}'/></svg>")`),
                    transform: 'translateY(-50%)',
                    transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out',
                },

                transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
        
                '&:disabled:not([readonly])': {
                    pointerEvents: 'none',
                    filter: 'none',
                    opacity: '.5',

                    // '*:has(> &)': {
                    //     opacity: '.5',
                    // },
                },

                '&:focus': {
                    borderColor: `${Color(theme('variations.primary', theme('colors.blue.500', colors.blue[500]))).lighten(.25)}`,
                    outline: theme('form.focus.outline', '0'),
                    boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).fade(.5)}`),
                    
                    '&:before': {
                        backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary', theme('colors.blue.500', colors.blue[500]))}'/></svg>")`)
                    }
                },
        
                '&:checked': {
                    backgroundColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                    borderColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                    
                    '&:before': {
                        backgroundPosition: 'right center',
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'white\'/></svg>")')
                    }
                },

                '&.is-invalid, &[invalid]': {
                    borderColor: theme('form.invalid.borderColor'),
                    backgroundColor: theme('form.invalid.backgroundColor'),
                    color: theme('form.invalid.color'),

                    '&:before': {
                        backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'${theme('form.invalid.color')}\'/></svg>")`)
                    },

                    '&:focus': {
                        boxShadow: theme('form.invalid.focus.boxShadow'),
                    },

                    // '*:has(> &)': {
                    //     color: theme('form.invalid.color'),
                    // }
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

                    '&:before': {
                        backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'${theme('form.valid.color')}\'/></svg>")`)
                    },

                    '&:focus': {
                        boxShadow: theme('form.valid.focus.boxShadow'),
                    },

                    // '*:has(> &)': {
                    //     color: theme('form.valid.color'),
                    // }
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
                ...Object.fromEntries(
                    Object.entries(Object.assign({}, require('./sizes.cjs'), {
                        DEFAULT: {
                            paddingTop: '.15rem',
                            paddingBottom: '.15rem',
                            paddingLeft: '.35rem',
                            paddingRight: '.35rem',
                            fontSize: '.5rem',
                            width: '4.25em'
                        }
                    })).map(([key, value]) => {
                        return [key, {
                            ...value,

                            borderRadius: `calc(1em * ${theme('form.lineHeight', '1.5')})`,
                            width: value.width ?? 'calc(1.5 * 2.666em)',
                            height: `calc(1em * ${theme('form.lineHeight', '1.5')} + ${value.paddingTop} + ${value.paddingBottom} + ${theme('form.borderWidth', '1px')} * 2)`,
                            
                            '&:before': {
                                'content': '""',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                display: 'block',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.secondary', theme('colors.gray.500', colors.gray[500]))}'/></svg>")`),
                                transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out',
                            },

                            // '&:checked:before': {
                            //     right: '0'
                            // }
                        }];
                    })
                )
                
                // DEFAULT: {
                //     paddingTop: '.375rem',
                //     paddingBottom: '.375rem',
                //     paddingLeft: '.75rem',
                //     paddingRight: '.75rem',
                //     width: 'calc(1.5rem * 2.5)',
                //     height: 'calc(1.5rem + .375rem * 2 + 2px)',
                //     borderRadius: '1.5rem',
                // },

                // @todo - implement this
                // ...require('./sizes.cjs'),

                // DEFAULT: {
                //     height: '2.375rem',
                //     width: `${2.375 * 1.666}rem`,
                //     borderRadius: '2.375rem',
                // },

                // sm: {
                //     height: '2.1875rem',
                //     width: `${2.1875 * 1.5}rem`,
                //     borderRadius: '2.1875rem'
                // },
        
                // lg: {
                //     height: '2.5rem',
                //     width: `${2.5 * 1.75}rem`,
                //     borderRadius: '2.5rem'
                // }
            }
        })
    }
});