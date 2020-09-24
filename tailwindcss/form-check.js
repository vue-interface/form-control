const Color = require('color');
const plugin = require('tailwindcss/plugin');
const { colors, translate } = require('tailwindcss/defaultTheme'); 
const { escapeSvg } = require('@vue-interface/tailwindcss/utils');
const { white } = colors;

function lighten(color, ...args) {
    return Color(color).lighten(...args);
}

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-check-float': theme('formCheck.float'),
            '--form-check-width': theme('formCheck.width'),
            '--form-check-height': theme('formCheck.height'),
            '--form-check-display': theme('formCheck.display'),

            '--form-check-font-size': theme('formCheck.fontSize'),
            '--form-check-font-family': theme('formCheck.fontFamily'),
            '--form-check-font-weight': theme('formCheck.fontWeight'),
            '--form-check-line-height': `${theme('formCheck.lineHeight')}`,
            '--form-check-min-height': theme('formCheck.minHeight'),
            '--form-check-margin-bottom': theme('formCheck.marginBottom'),
            '--form-check-padding-left': theme('formCheck.paddingLeft'),
            '--form-check-border-width': theme('formCheck.borderWidth'),
            '--form-check-border-style': theme('formCheck.borderStyle'),
            '--form-check-border-color': theme('formCheck.borderColor'),

            '--form-check-margin-left': theme('formCheck.marginLeft'),
            '--form-check-margin-top': theme('formCheck.marginTop'),
            '--form-check-vertical-align': theme('formCheck.verticalAlign'),
            '--form-check-background-color': theme('formCheck.backgroundColor'),
            '--form-check-background-repeat': theme('formCheck.backgroundRepeat'),
            '--form-check-background-position': theme('formCheck.backgroundPosition'),
            '--form-check-background-size': theme('formCheck.backgroundSize'),
            '--form-check-background-image': theme('formCheck.backgroundImage'),
            '--form-check-border': theme('formCheck.border'),
            '--form-check-appearance': theme('formCheck.appearance'),
            '--form-check-color-adjust': theme('formCheck.colorAdjust'),
            '--form-check-transition': theme('formCheck.transition'),

            '--form-check-checkbox-border-radius': theme('formCheck.checkbox.borderRadius'),

            '--form-check-radio-border-radius': theme('formCheck.radio.borderRadius'),

            '--form-check-active-filter': theme('formCheck.active.filter'),

            '--form-check-focus-border-color': theme('formCheck.focus.borderColor'),
            '--form-check-focus-outline': theme('formCheck.focus.outline'),
            '--form-check-focus-box-shadow': theme('formCheck.focus.boxShadow'),

            '--form-check-checked-background-color': theme('formCheck.checked.backgroundColor'),
            '--form-check-checked-border-color': theme('formCheck.checked.borderColor'),
            '--form-check-checked-checkbox-background-image': theme('formCheck.checked.checkbox.backgroundImage'),
            '--form-check-checked-radio-background-image': theme('formCheck.checked.radio.backgroundImage'),

            '--form-check-indeterminate-background-color': theme('formCheck.indeterminate.backgroundColor'),
            '--form-check-indeterminate-border-color': theme('formCheck.indeterminate.borderColor'),
            '--form-check-indeterminate-checkbox-background-image': theme('formCheck.indeterminate.checkbox.backgroundImage'),
            '--form-check-indeterminate-radio-background-image': theme('formCheck.indeterminate.radio.backgroundImage'),

            '--form-check-disabled-pointer-events': theme('formCheck.disabled.pointerEvents'),
            '--form-check-disabled-filter': theme('formCheck.disabled.filter'),
            '--form-check-disabled-opacity': `${theme('formCheck.disabled.opacity')}`,

            '--form-check-label-color': theme('formCheck.label.color'),
            '--form-check-label-cursor': theme('formCheck.label.cursor'),

            '--form-check-inline-display': theme('formCheck.inline.display'),
            '--form-check-inline-margin-right': theme('formCheck.inline.marginRight'),
        },

        '.form-check': {
            display: theme('formCheck.display'),
            fontSize: theme('formCheck.fontSize'),
            fontFamily: theme('formCheck.fontFamily'),
            fontWeight: theme('formCheck.fontWeight'),
            minHeight: theme('formCheck.minHeight'),
            paddingLeft: theme('formCheck.paddingLeft'),
            marginBottom: theme('formCheck.marginBottom'),
          
            '.form-check-input': {
                float: theme('formCheck.float'),
                marginLeft: theme('formCheck.marginLeft')
            }
        },

        '.form-check-input': {
            width: theme('formCheck.width'),
            height: theme('formCheck.height'),
            marginTop: theme('formCheck.marginTop'),
            verticalAlign: theme('formCheck.verticalAlign'),
            backgroundColor: theme('formCheck.backgroundColor'),
            backgroundRepeat: theme('formCheck.backgroundRepeat'),
            backgroundPosition: theme('formCheck.backgroundPosition'),
            backgroundSize: theme('formCheck.backgroundSize'),
            border: theme('formCheck.border'),
            colorAdjust: theme('formCheck.colorAdjust'), // Keep themed appearance for print
            transition: theme('formCheck.transition'),

            '-webkit-appearance': theme('formCheck.appearance'),
            appearance: theme('formCheck.appearance'),
          
            '&[type="checkbox"]': {
                borderRadius: theme('formCheck.checkbox.borderRadius')
            },
          
            '&[type="radio"]': {
                borderRadius: theme('formCheck.radio.borderRadius')
            },
          
            '&:active': {
                filter: theme('formCheck.active.filter')
            },
          
            '&:focus': {
                borderColor: theme('formCheck.focus.borderColor'),
                outline: theme('formCheck.focus.outline'),
                boxShadow:  theme('formCheck.focus.boxShadow')
            },
          
            '&:checked': {
                background: theme('formCheck.checked.backgroundColor'),
                borderColor: theme('formCheck.checked.borderColor'),
          
                '&[type="checkbox"]': {
                    backgroundImage: theme('formCheck.checked.checkbox.backgroundImage')
                },
          
                '&[type="radio"]': {
                    backgroundImage: theme('formCheck.checked.radio.backgroundImage')
                }
            },
          
            '&[type="checkbox"]:indeterminate': {
                backgroundColor: theme('formCheck.indeterminate.backgroundColor'),
                borderColor: theme('formCheck.indeterminate.borderColor'),
                
                '&[type="checkbox"]': {
                    backgroundImage: theme('formCheck.indeterminate.checkbox.backgroundImage')
                },
          
                '&[type="radio"]': {
                    backgroundImage: theme('formCheck.indeterminate.radio.backgroundImage')
                }
            },
        
            '&:disabled': {
                pointerEvents: theme('formCheck.disabled.pointerEvents'),
                filter: theme('formCheck.disabled.filter'),
                opacity: theme('formCheck.disabled.opacity'),
            },
        
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled], &:disabled': {
                '~ .form-check-label': {
                    opacity: theme('formCheck.disabled.opacity')
                }
            }
        },

        '.form-check-label': {
            color: theme('formCheck.label.color'),
            cursor: theme('formCheck.label.cursor'),
        },
        
        '.form-check-inline': {
            display: theme('formCheck.inline.display'),
            marginRight: theme('formCheck.inline.marginRight'),
        }
    };

    addComponents(component);
}, {
    theme: {
        formCheck: theme => ({
            float: 'left',
            display: 'block',
            width: '1.25em',
            height: '1.25em',
            fontSize: theme('formControl.fontSize', '1rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', null),
            fontWeight: theme('formControl.fontWeight', 400),
            minHeight: `calc(${theme('formControl.lineHeight', 1.5)} * ${theme('formControl.fontSize', '1rem')})`,
            paddingLeft: `calc(1.25em + .5em)`,
            marginBottom: '.125rem',
            marginLeft: `calc((1.25em + .5em) * -1)`,
            marginTop: `calc((${theme('formControl.lineHeight', 1.5)} * 1em - 1.25em) / 2)`, // line-height minus check height
            verticalAlign: 'top',
            backgroundColor: theme('colors.white', white),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: escapeSvg(`url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(0, 0, 0, .25)'/></svg>")`),
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderStyle: theme('formControl.borderStyle', 'solid'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400'])),
            border: `${theme('formControl.borderWidth', '1px')} ${theme('formControl.borderStyle', 'solid')} ${theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400']))}`,
            appearance: theme('formControl.appearance'),
            colorAdjust: 'exact', // Keep themed appearance for print,
            transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
            checkbox: {
                borderRadius: `calc(1.25em / 4)`
            },
            radio: {
                borderRadius: '50%'
            },
            active: {
                filter: 'brightness(90%)'
            },
            focus: {
                borderColor: `lighten(${theme('variations.primary')}, .25)`,
                outline: 0,
                boxShadow: theme('formControl.focus.boxShadow')
            },
            checked: {
                backgroundColor: theme('variations.primary'),
                borderColor: theme('variations.primary'),
                checkbox: {
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>")`)
                },
                radio: {
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='white'/></svg>")`)
                }
            },
            indeterminate: {
                backgroundColor: theme('variations.primary'),
                borderColor: theme('variations.primary'),
                checkbox: {
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>")`)
                },
                radio: {
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>")`)
                }
            },
            disabled: {
                pointerEvents: 'none',
                filter: 'none',
                opacity: .5,
            },
            label: {
                color: 'inherit',
                cursor: 'inherit'
            },
            inline: {
                display: 'inline-block',
                marginRight: '1rem'
            }
        })
    }
});