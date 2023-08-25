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
        formSelect: theme => {
            function dark(type, color) {
                const value = theme(color);

                if(!value) {
                    return '';
                }

                return `@apply dark:${type}-[${value.replace(/\s+/g, '')}]`;
            }

            return {
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
                    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIj4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xOS41IDguMjVsLTcuNSA3LjUtNy41LTcuNSIgLz4KPC9zdmc+")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `right ${theme('form.paddingY', '.375rem')} center`,
                    backgroundSize: '16px 16px',
                    border: `${theme('form.borderWidth')} ${theme('form.borderStyle')} ${theme('form.borderColor')}`,
                    transition: theme('form.transition', 'border-color .15s ease-in-out, box-shadow .15s ease-in-out'),
                    appearance: theme('form.appearance', 'none'),

                    [dark('text', 'form.dark.color')]: {},
                    [dark('bg', 'form.dark.backgroundColor')]: {},
                    [dark('border', 'form.dark.borderColor')]: {},
                    
                    ['@apply dark:bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0id2hpdGUiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjUgOC4yNWwtNy41IDcuNS03LjUtNy41IiAvPgo8L3N2Zz4=")]']: {},

                    '&:focus': {
                        color: theme('form.color', theme('colors.gray.700', colors.gray['700'])),
                        backgroundColor: theme('form.backgroundColor', colors.white),
                        borderColor: theme('form.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                        outline: '0',
                        boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(theme('colors.blue.500', colors.blue['500'])).fade(.25)}`),

                        [dark('text', 'form.focus.dark.color')]: {},
                        [dark('bg', 'form.focus.dark.backgroundColor')]: {},
                        [dark('border', 'form.focus.dark.borderColor')]: {},
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
                        paddingRight: theme('form.paddingX', '.75rem'),
                        backgroundImage: 'none'
                    },
                
                    '&:disabled, &:disabled[readonly]': {
                        color: theme('form.disabled.color'),

                        [dark('text', 'form.disabled.dark.color')]: {},
                        [dark('bg', 'form.disabled.dark.backgroundColor')]: {},
                        [dark('border', 'form.disabled.dark.borderColor')]: {}
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
                        [dark('border', 'form.plaintext.dark.borderColor')]: {},

                        '@apply dark:bg-none': {}
                    }
                }
            };
        }
    }
});