const Color = require('color');
const deepMerge = require('deepmerge');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); 
const escapeSvg = require('./utils/escapeSvg.cjs');

/** @type {import('tailwindcss/plugin')} */
module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    function formSwitch(value) {
        const css = deepMerge(theme('formSwitch.css'), value);
        
        return {
            ...css,

            borderRadius: `calc(1em * ${theme('form.lineHeight', '1.5')})`,
            width: value.width ?? 'calc(1.5 * 2.666em)',
            height: `calc(1em * ${theme('form.lineHeight', '1.5')} + ${value.paddingTop ?? 0} + ${value.paddingBottom ?? 0} + ${theme('form.borderWidth', '1px')} * 2)`,
        };
    }


    matchComponents({
        'form-switch': formSwitch,
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
                    left: '0',
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    borderRadius: '100%',
                    backgroundPosition: 'left center',
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

                    'label:has(> &)': {
                        opacity: '.5',
                    },
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

                    'label:has(> &)': {
                        color: theme('form.invalid.color'),
                    }
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

                    'label:has(> &)': {
                        color: theme('form.valid.color'),
                    }
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
                ...Object.assign({}, require('./sizes.cjs'), {
                    DEFAULT: {
                        paddingTop: '.15rem',
                        paddingBottom: '.15rem',
                        paddingLeft: '.35rem',
                        paddingRight: '.35rem',
                        fontSize: '.5rem',
                        width: '4.25em'
                    }
                })
            }
        })
    }
});