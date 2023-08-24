const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const escapeSvg = require('./utils/escapeSvg.cjs');
const Color = require('color');

module.exports = plugin(function({ addComponents, matchComponents, theme }) {
    matchComponents({
        'form-select': value => ({
            ...theme('formSelect.css'),
            ...value
        })
    }, {
        values: theme('formSelect.styles')
    });
}, {
    theme: {
        formSelect: theme => ({
            css: {
                display: theme('form.display', 'flex'),
                width: theme('form.width', '100%'),
                paddingRight: `calc(${theme('form.paddingX', '.75rem')} * 2)`,
                fontFamily: theme('form.fontFamily'),
                fontWeight: theme('form.fontWeight', '400'),
                lineHeight: theme('form.lineHeight', '1.5'),
                color: colors.gray['800'],
                verticalAlign: 'middle',
                backgroundColor: theme('form.backgroundColor', colors.white),
                backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='${theme('form.color', theme('colors.gray.700', colors.gray['700']))}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>")`),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `right ${theme('form.paddingY', '.375rem')} center`,
                backgroundSize: '16px 12px',
                border: `${theme('form.borderWidth')} ${theme('form.borderStyle')} ${theme('form.borderColor')}`,
                transition: theme('form.transition', 'border-color .15s ease-in-out, box-shadow .15s ease-in-out'),
                appearance: theme('form.appearance', 'none'),
                        
                '&:focus': {
                    color: theme('form.color', theme('colors.gray.700', colors.gray['700'])),
                    backgroundColor: theme('form.backgroundColor', colors.white),
                    borderColor: theme('form.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                    outline: '0',
                    boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('colors.blue.500', colors.blue['500'])).fade(.25)}`),
                },
        
                '&::-ms-value': {
                    // For visual consistency with other platforms/browsers,
                    // suppress the default white text on blue background highlight given to
                    // the selected option text when the (still closed) <select> receives focus
                    // in Edge.
                    // See https://github.com/twbs/bootstrap/issues/19398.
                    color: theme('form.color', theme('colors.gray.700', colors.gray['700'])),
                    backgroundColor: colors.white,
                },
            
                '&[multiple], &[size]:not([size="1"])': {
                    height: 'auto',
                    paddingRight: theme('form.paddingX', '.75rem'),
                    backgroundImage: 'none'
                },
            
                '&:not(.form-select-plaintext):disabled:not([readonly])': {
                    backgroundColor: colors.gray['200'],
                },

                '&:disabled:not([readonly])': {
                    color: colors.gray['500']
                },

                '&:not(:disabled)[readonly]': {
                    opacity: '1'
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
                    backgroundPosition: `right calc((${theme('form.lineHeight')} * 1em + ${theme('form.paddingY')} * 2) / 4) center`,
                    backgroundSize: '1.25em'
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
                    backgroundSize: '1.25em'
                },
            },

            styles: {
                DEFAULT: {
                    // height: `calc(1.5 * 1em + ${theme('form.paddingY', '.375rem')} * 2 + 1px * 2)`,
                    padding: `${theme('form.paddingY', '.375rem')} ${theme('form.paddingX', '.75rem')}`,
                    fontSize: theme('form.fontSize', '1rem'),
                    borderRadius: theme('form.borderRadius', '.25rem'),
                },
                sm: {
                    // height: `calc(1.5 * 1em + ${theme('form.sm.paddingY', '.25rem')} * 2 + 1px * 2)`,
                    padding: `${theme('form.sm.paddingY', '.25rem')} ${theme('form.sm.paddingX', '.5rem')}`,
                    fontSize: theme('form.sm.fontSize', '.875rem'),
                    borderRadius: theme('form.sm.borderRadius', '.2rem')
                },
                lg: {
                    // height: `calc(1.5 * 1em + ${theme('form.lg.paddingY', '.25rem')} * 2 + 1px * 2)`,
                    padding: `${theme('form.lg.paddingY', '.25rem')} ${theme('form.lg.paddingX', '.5rem')}`,
                    fontSize: theme('form.lg.fontSize', '1.25rem'),
                    borderRadius: theme('form.lg.borderRadius', '.3rem')
                },
                plaintext: {
                    display: theme('form.plaintext.display'),
                    width: theme('form.plaintext.width'),
                    padding: `${theme('form.plaintext.paddingY')} ${theme('form.plaintext.paddingX')}`,
                    marginBottom: theme('form.plaintext.marginBottom'), // match inputs if this class comes on inputs with default margins
                    lineHeight: theme('form.plaintext.lineHeight'),
                    color: theme('form.plaintext.color'),
                    backgroundColor: theme('form.plaintext.backgroundColor'),
                    backgroundImage: 'none',
                    borderStyle: theme('form.plaintext.borderStyle'),
                    borderColor: theme('form.plaintext.borderColor'),
                    borderWidth: theme('form.plaintext.borderWidth'),
                    boxShadow: 'none',
                    outline: 'none',

                    '&:not([disabled])': {
                        opacity: '1',
                    },
    
                    // Customize the `:focus` state to imitate native WebKit styles.
                    '&:focus': {
                        color: theme('form.plaintext.color'),
                        backgroundColor: theme('form.plaintext.backgroundColor'),
                        borderColor: theme('form.plaintext.borderColor'),
                        boxShadow: 'none',
                    },
                }
            }
        })
    }
});