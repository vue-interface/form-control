const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const escapeSvg = require('./utils/escapeSvg.cjs');

function contrast(color, light, dark) {
    return Color(color).luminosity() > .5 ? (dark || 'black') : (light || 'white');
}

module.exports = plugin(function({ matchComponents, theme }) {
    matchComponents({
        'feedback': value => ({
            color: value,
            test: console.log(value)
        })
    }, {
        values: {
            invalid: theme('form.invalid.color'),
            valid: theme('form.valid.color'),
        }
    });
}, {
    theme: {
        validation: theme => ({
            enableIcons: true,
            valid: {
                color: theme('variations.success', colors.green[600]),
                icon: {
                    backgroundImage: null
                }
            },
            invalid: {
                color: theme('variations.danger', colors.red[600])
            },
        }),
        formFeedback: theme => ({
            display: 'none',
            width: '100%',
            marginTop: theme('formText.marginTop', '.25rem'),
            fontSize: theme('formText.fontSize', '.875rem'),
            fontStyle: theme('formText.fontStyle', 'normal'),
            fontWeight: theme('formText.fontWeight', 400),
            valid: {
                color: theme('variations.success', colors.green[600]),
                icon: {
                    backgroundImage: undefined
                }
            },
            invalid: {
                color: theme('variations.danger', colors.red[600]),
                icon: {
                    backgroundImage: undefined
                }
            }
        }),
        formTooltip: theme => ({
            position: 'absolute',
            top: '100%',
            zIndex: '5',
            display: 'none',
            maxWidth: '100%',
            marginTop: '.1rem',
            paddingY: theme('tooltip.paddingY', '.25rem'),
            paddingX: theme('tooltip.paddingX', '.5rem'),
            fontSize: theme('tooltip.fontSize', '.875rem'),
            lineHeight: theme('tooltip.lineHeight', 1.5),
            opacity: theme('tooltip.opacity', .5),
            borderRadius: theme('tooltip.borderRadius', '.25rem'),
        })
    }
});