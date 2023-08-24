const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); 
const escapeSvg = require('./utils/escapeSvg.cjs');
const Color = require('color');

module.exports = plugin(function({ matchComponents, theme }) {
    matchComponents({
        'form-check': value => ({
            ...theme('formCheck.css'),
            
            '&': value
        })
    }, {
        values: theme('formCheck.styles')
    });
}, {
    theme: {
        formCheck: theme => ({
            css: {
                width: '1.25em',
                height: '1.25em',
                marginTop: `calc((${theme('formControl.lineHeight', 1.5)} * 1em - 1.25em) / 2)`,
                verticalAlign: 'top',
                backgroundColor: theme('colors.white', colors.white),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                border: `${theme('formControl.borderWidth', '1px')} ${theme('formControl.borderStyle', 'solid')} ${theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400']))}`,
                colorAdjust: 'exact', // Keep themed appearance for print
                transition: `background-color .15s ease-in-out, background-position .15s ease-in-out, ${theme('form.transition', 'border-color .15s ease-in-out, box-shadow .15s ease-in-out')}`,
                appearance: 'none',
              
                '&[type="checkbox"]': {
                    borderRadius: 'calc(1.25em / 4)'
                },
              
                '&[type="radio"]': {
                    borderRadius: '50%'
                },
              
                '&:active': {
                    filter: 'brightness(90%)'
                },
              
                '&:focus': {
                    borderColor: theme('form.focus.borderColor'),
                    boxShadow: theme('form.focus.boxShadow'),
                    outline: 0,
                },
              
                '&:checked': {
                    backgroundColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                    borderColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
              
                    '&[type="checkbox"]': {
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'><path fill=\'none\' stroke=\'white\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10l3 3l6-6\'/></svg>")')
                    },
              
                    '&[type="radio"]': {
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'2\' fill=\'#fff\'/></svg>")')
                    }
                },
              
                '&[type="checkbox"]:indeterminate': {
                    backgroundColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                    borderColor: theme('variations.primary', theme('colors.blue.500', colors.blue[500])),
                   
                    '&[type="checkbox"]': {
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'><path fill=\'none\' stroke=\'white\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/></svg>")')
                    },
              
                    '&[type="radio"]': {
                        backgroundImage: escapeSvg('url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'><path fill=\'none\' stroke=\'white\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/></svg>")')
                    }
                },
            
                '&:disabled': {
                    pointerEvents: 'none',
                    filter: 'none',
                    opacity: '.5',
                },
            
                // Use disabled attribute in addition of :disabled pseudo-class
                // See: https://github.com/twbs/bootstrap/issues/28247
                '&[disabled], &:disabled': {
                    '~ .form-check-label': {
                        opacity: '.5',
                    }
                },

                '&.is-invalid, &[invalid]': {
                    borderColor: theme('form.invalid.borderColor'),
                    backgroundColor: theme('form.invalid.backgroundColor'),
                    color: theme('form.invalid.color'),

                    '&:checked': {
                        backgroundColor: theme('form.invalid.borderColor')
                    },

                    'label:has(&), label:has(+ &), label:has(~ * > &), & + label': {
                        color: theme('form.invalid.color'),
                    },

                    '&:focus, &.focus': {
                        boxShadow: `0 0 0 .2rem ${Color(theme('form.invalid.borderColor')).fade(.5)}`
                    }                    
                },

                '&.is-valid, &[valid]': {
                    borderColor: theme('form.valid.borderColor'),
                    backgroundColor: theme('form.valid.backgroundColor'),
                    color: theme('form.valid.color'),

                    '&:checked': {
                        backgroundColor: theme('form.valid.borderColor')
                    },

                    'label:has(&), label:has(+ &), label:has(~ * > &), & + label': {
                        color: theme('form.valid.color'),
                    },

                    '&:focus, &.focus': {
                        boxShadow: `0 0 0 .2rem ${Color(theme('form.valid.borderColor')).fade(.5)}`
                    }                    
                },
            },
            styles: {
                DEFAULT: {

                }
            }
        })
    }
});