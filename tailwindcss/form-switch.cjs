const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); 
const escapeSvg = require('./utils/escapeSvg.cjs');

/** @type {import('tailwindcss/plugin')} */
module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    // addComponents(theme('formSwitch.css'));

    matchComponents({
        'form-switch': value => ({
            ...theme('formSwitch.css'),

            '& .form-check-input': value
        })
    }, {
        values: theme('formSwitch.styles')
    });
}, {
    theme: {
        formSwitch: theme => ({
            css: {
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 'calc(2rem + .5em)',

                // @todo - remove the label and extra markup like we talked
                '.form-check-label': {
                    paddingLeft: 'calc((2rem + .5em) / 6)',
                    marginBottom: '0'
                },

                '.form-check-input': {
                    appearance: 'none',
                    marginTop: '0',
                    marginLeft: 'calc((2rem + .5em) * -1)',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.secondary', theme('colors.gray.500', colors.gray[500]))}'/></svg>")`),
                    backgroundPosition: 'left center',
                    border: `${theme('formControl.borderWidth', '1px')} ${theme('formControl.borderStyle', 'solid')} ${theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400']))}`,
            
                    transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
        
                    '&:disabled:not([readonly])': {
                        pointerEvents: 'none',
                        filter: 'none',
                        opacity: '.5'
                    },

                    '&:focus': {
                        borderColor: `${Color(theme('variations.primary', theme('colors.blue.500', colors.blue[500]))).lighten(.25)}`,
                        outline: theme('form.focus.outline', '0'),
                        boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).fade(.5)}`),
                        backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary', theme('colors.blue.500', colors.blue[500]))}'/></svg>")`)
                    },
        
                    '&:checked': {
                        backgroundColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                        borderColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                        backgroundPosition: 'right center',
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'white\'/></svg>")')
                    }
                },

                '&.form-control': {
                    border: 0,
                    boxShadow: 'none'
                }
            },
            styles: {
                // @todo - implement this
                // ...require('./sizes.cjs'),

                DEFAULT: {
                    height: '2.375rem',
                    width: `${2.375 * 1.666}rem`,
                    borderRadius: '2.375rem',
                },

                sm: {
                    height: '2.1875rem',
                    width: `${2.1875 * 1.5}rem`,
                    borderRadius: '2.1875rem'
                },
        
                lg: {
                    height: '2.5rem',
                    width: `${2.5 * 1.75}rem`,
                    borderRadius: '2.5rem'
                }
            }
        })
    }
});