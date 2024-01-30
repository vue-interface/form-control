const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const Color = require('color');
const escapeSvg = require('./utils/escapeSvg.cjs');

module.exports = {
    theme: {
        extend: {
            form: theme => ({
                display: 'block',
                width: '100%',
                lineHeight: '1.5',
                color: theme('colors.neutral.700', colors.neutral['700']),
                paddingTop: '.375rem',
                paddingBottom: '.375rem',
                paddingLeft: '.75rem',
                paddingRight: '.75rem',
                // @deprecated
                paddingY: '.375rem',
                // @deprecated
                paddingX: '.75rem',
                borderWidth: '1px',
                borderColor: theme('colors.neutral.300', colors.neutral['300']),
                borderStyle: 'solid',
                fontSize: '1rem',
                fontFamily: 'inherit',
                fontWeight: 400,
                opacity: '1',
                backgroundColor: theme('colors.white', colors.white),
                backgroundClip: 'padding-box',
                appearance: 'none',
                borderRadius: '.25rem',
                transition: 'background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                enableShadows: true,
                dark: {
                    backgroundColor: theme('colors.neutral.700', colors.neutral[700]),
                    borderColor: theme('colors.neutral.500', colors.neutral['500']),
                    color: theme('colors.white', colors.white),
                },
                select: {
                    backgroundSize: '16px 16px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right .375rem center',
                    backgroundImage: escapeSvg(`url("data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='${colors.neutral['700']}'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /></svg>`)}")`),
                    dark: {
                        backgroundImage: escapeSvg(`url("data:image/svg+xml;base64,${btoa(`<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='${colors.neutral['300']}'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /></svg>`)}")`),
                    }
                },
                colorControl: {
                    maxWidth: '3rem',
                    padding: '.375rem'
                },
                focus: {
                    color: theme('colors.neutral.700', colors.neutral['700']),
                    backgroundColor: theme('colors.white', colors.white),
                    borderColor: Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).string(),
                    outline: 0,
                    width: '.2rem',
                    opacity: .5,
                    boxShadow: `0 0 0 .2rem ${Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).fade(.5)}`,
                    dark: {
                        backgroundColor: theme('colors.stone.700', colors.stone[700]),
                        borderColor: Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).hex(),
                        color: theme('colors.white', colors.white),
                    },
                },
                placeholder: {
                    opacity: 1,
                    color: theme('colors.neutral.400', colors.neutral[400]),
                    dark: {
                        color: theme('colors.neutral.400', colors.neutral['400']),
                    },
                },
                disabled: {
                    opacity: 1,
                    color: theme('colors.neutral.400', colors.neutral[400]),
                    borderColor: theme('colors.neutral.400', colors.neutral[400]),
                    backgroundColor: theme('colors.neutral.200', colors.neutral[200]),
                    focus: {
                        color: theme('variations.success', colors.red[600]),
                        borderColor: theme('variations.success', colors.red[600]),
                        boxShadow: `0 0 0 .2rem ${Color(theme('variations.success', colors.red[600])).fade(.5)}`,
                    },
                    dark: {
                        backgroundColor: theme('colors.neutral.900', colors.neutral[900]),
                        borderColor: theme('colors.neutral.700', colors.neutral['700']),
                        color: theme('colors.neutral.600', colors.neutral['600']),
                    }
                },
                invalid: {
                    color: theme('variations.danger', colors.red[600]),
                    borderColor: theme('variations.danger', colors.red[600]),
                    backgroundColor: Color(theme('variations.danger', colors.red[600])).fade(.9).string(),
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='${theme('variations.danger', colors.red[600])}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='${theme('variations.danger', colors.red[600])}' stroke='none'/></svg>")`),
                    focus: {
                        color: theme('variations.danger', colors.red[600]),
                        borderColor: theme('variations.danger', colors.red[600]),
                        boxShadow: `0 0 0 .2rem ${Color(theme('variations.danger', colors.red[600])).fade(.5)}`,
                    },
                    dark: {
                        color: theme('variations.danger', colors.red[600]),
                        borderColor: theme('variations.danger', colors.red[600]),
                        backgroundColor: Color(theme('variations.danger', colors.red[600])).fade(.9).string(),
                    },
                },
                valid: {
                    color: theme('variations.success', colors.green[600]),
                    borderColor: theme('variations.success', colors.green[600]),
                    backgroundColor: Color(theme('variations.success', colors.green[600])).fade(.9).string(),
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='${theme('variations.success', colors.green[600])}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>")`),
                    focus: {
                        color: theme('variations.success', colors.green[600]),
                        borderColor: theme('variations.success', colors.green[600]),
                        boxShadow: `0 0 0 .2rem ${Color(theme('variations.success', colors.green[600])).fade(.5)}`,
                    },
                    dark: {
                        color: theme('variations.success', colors.green[600]),
                        borderColor: theme('variations.success', colors.green[600]),
                        backgroundColor: Color(theme('variations.success', colors.green[600])).fade(.9).string(),
                    },
                },
                plaintext: {
                    display: 'block',
                    width: '100%',
                    margin: '0',
                    paddingLeft: '0 !important',
                    paddingRight: '0 !important',
                    color: 'inherit',
                    border: 'none',
                    lineHeight: '1.5',
                    background: 'transparent',
                    backgroundImage: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    outline: 'none',
                    cursor: 'default',
                    appearance: 'none',
                },
                sizes: require('./sizes.cjs')
            })
        }
    },
    plugins: [
        require('./form-control.cjs'),
        require('./form-check.cjs'),
        require('./form-switch.cjs'),
        require('./form-select.cjs'),
        require('./form-file.cjs'),
        require('./animated-fields.cjs'),
    ]
};