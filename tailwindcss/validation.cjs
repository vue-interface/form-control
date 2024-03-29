const Color = require('color');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const escapeSvg = require('./utils/escapeSvg.cjs');

function contrast(color, light, dark) {
    return Color(color).luminosity() > .5 ? (dark || 'black') : (light || 'white');
}

module.exports = plugin(function({ addComponents, theme }) {
    const selectIconPaddingRight = `calc(1em * .75 + (2 * ${theme('formSelect.paddingY')} * .75) + ${theme('formSelect.paddingX')} + ${theme('formSelect.indicator.paddingX')})`;
    const selectFeedbackIconPosition =`center right calc(${theme('formSelect.paddingX')} + ${theme('formSelect.indicator.paddingX')})`;
    const selectFeedbackIconSize = `calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2) calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2)`;

    const component = {
        // '*, ::before, ::after': {
        //     '--form-feedback-display': theme('formFeedback.display'),
        //     '--form-feedback-width': theme('formFeedback.width'),
        //     '--form-feedback-margin-top': theme('formFeedback.marginTop'),
        //     '--form-feedback-font-size': theme('formFeedback.fontSize'),
        //     '--form-feedback-font-style': `${theme('formFeedback.fontStyle')}`,

        //     '--form-select-feedback-icon-padding-right': `calc(1em * .75 + (2 * ${theme('formSelect.paddingY')} * .75) + ${theme('formSelect.paddingX')} + ${theme('formSelect.indicator.paddingX')})`,
        //     '--form-select-feedback-icon-position': `center right calc(${theme('formSelect.paddingX')} + ${theme('formSelect.indicator.paddingX')})`,
        //     '--form-select-feedback-icon-size': `calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2) calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2)`,
            
        //     '--form-tooltip-position': theme('formTooltip.position'),
        //     '--form-tooltip-top': theme('formTooltip.top'),
        //     '--form-tooltip-z-index': theme('formTooltip.zIndex'),
        //     '--form-tooltip-display': theme('formTooltip.display'),
        //     '--form-tooltip-max-width': theme('formTooltip.maxWidth'),
        //     '--form-tooltip-margin-top': theme('formTooltip.marginTop'),
        //     '--form-tooltip-padding-y': theme('formTooltip.paddingY'),
        //     '--form-tooltip-padding-x': theme('formTooltip.paddingX'),
        //     '--form-tooltip-font-size': theme('formTooltip.fontSize'),
        //     '--form-tooltip-line-height': `${theme('formTooltip.lineHeight')}`,
        //     '--form-tooltip-opacity': `${theme('formTooltip.opacity')}`,
        //     '--form-tooltip-border-radius': theme('formTooltip.borderRadius'),
        // }
    };

    function validationStateSelector(state, color, icon) {
        // Object.assign(component[':root'], {
        //     [`--form-feedback-${state}-icon`]: icon
        // });

        Object.assign(component, {
            [`.${state}-feedback`]: {
                color,
                display: theme('formFeedback.display'),
                width: theme('formFeedback.width'),
                marginTop: theme('formFeedback.marginTop'),
                fontSize: theme('formFeedback.fontSize'),
                fontStyle: theme('formFeedback.fontStyle'),
            },

            [`.${state}-tooltip`]: {
                position: theme('formTooltip.position'),
                top: theme('formTooltip.top'),
                zIndex: theme('formTooltip.zIndex'),
                display: theme('formTooltip.display'),
                maxWidth: theme('formTooltip.maxWidth'), // Contain to parent when possible
                padding: `${theme('formTooltip.paddingY')} ${theme('formTooltip.paddingX')}`,
                marginTop: theme('formTooltip.marginTop'),
                fontSize: theme('formTooltip.fontSize'),
                lineHeight: theme('formTooltip.lineHeight'),
                color: contrast(color, colors.white, colors.black),
                backgroundColor: Color(color).fade(theme('formTooltip.opacity')),
                borderRadius: theme('formTooltip.borderRadius'),
            },

            [`.is-${state}~.${state}-feedback, .is-${state}~.${state}-tooltip, .was-validated :${state}~.${state}-feedback, .was-validated :${state}~.${state}-tooltip`]: {
                display: 'block'
            },

            [`.was-validated .form-control:${state}, .form-control.is-${state}`]: {
                borderColor: color,
                paddingRight: theme('validation.enableIcons') ? `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2)` : null,
                backgroundImage: theme('validation.enableIcons') ? icon : null,
                backgroundRepeat: theme('validation.enableIcons') ? 'no-repeat' : null,
                backgroundPosition: theme('validation.enableIcons') ? `right calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 4) center` : null,
                backgroundSize: theme('validation.enableIcons') ? selectFeedbackIconSize : null,
            },
                
            [`.form-group.is-${state} > .form-label`]: {
                color
            },

            [`.was-validated .form-control:${state}, .form-control.is-${state}:focus`]: {
                borderColor: color,
                boxShadow: `0 0 0 ${theme('formControl.focus.width')} ${Color(color).fade(theme('formControl.focus.opacity'))}`
            },
                
            [`.was-validated textarea.form-control:${state}, textarea.form-control.is-${state}`]: {
                paddingRight: theme('validation.enableIcons') ? `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2)` : null,
                backgroundPosition: theme('validation.enableIcons') ? `top calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 4) right calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 4)` : null
            },
                
            [`.was-validated .form-select:${state}, .form-select.is-${state}`]: {
                borderColor: color,
                paddingRight: theme('validation.enableIcons') ? selectIconPaddingRight : null,
                backgroundImage: theme('validation.enableIcons') ? `${icon}, ${theme('formSelect.backgroundImage')}` : null,
                backgroundPosition: theme('validation.enableIcons') ? `${selectFeedbackIconPosition}, ${theme('formSelect.backgroundPosition')}` : null,
                backgroundSize: theme('validation.enableIcons') ? `${selectFeedbackIconSize}, ${theme('formSelect.backgroundSize')}, ${theme('formSelect.backgroundSize')}` : null,
            },

            [`.was-validated .form-select:${state}, .form-select.is-${state}:focus`]: {
                borderColor: color,
                boxShadow: `0 0 0 ${theme('formControl.focus.width')} ${Color(color).fade(.5)}`
            },
    
            [`.was-validated .form-check-input:${state}, .form-check-input.is-${state}`]: {
                borderColor: color,
            },
                
            [`.was-validated .form-check-input:${state}, .form-check-input.is-${state}:checked`]: {
                backgroundColor: color
            },
                
            [`.was-validated .form-check-input:${state}, .form-check-input.is-${state}:focus`]: {
                boxShadow: `0 0 0 ${theme('formControl.focus.width')} ${Color(color).fade(.5)}`
            },
                
            [`.was-validated .form-check-input:${state}, .form-check-input.is-${state} ~ .form-check-label`]: {
                color
            },
    
            [`.was-validated .form-check-inline .form-check-input:${state} ~ .${state}-feedback, .form-check-inline .form-check-input.is-${state} ~ .${state}-feedback`]: {
                marginLeft: '.5em'
            },
                
            // custom file
            [`.was-validated .form-file-input:${state} ~ .form-file-label, .form-file-input.is-${state} ~ .form-file-label`]: {
                borderColor: color
            },

            [`.was-validated .form-file-input:${state}:focus ~ .form-file-label, .form-file-input.is-${state}:focus ~ .form-file-label`]: {
                borderColor: color,
                boxShadow: `0 0 0 ${theme('formControl.focus.width')} ${Color(color).fade(.5)}`
            },     
        });
    }

    const defaultValidIcon = escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='${theme('formFeedback.valid.color')}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>")`);
    
    validationStateSelector(
        'valid',
        theme('validation.valid.color'),
        theme('formFeedback.valid.icon.backgroundImage', defaultValidIcon)
    );
    
    const defaultInvalidIcon = escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='${theme('formFeedback.invalid.color')}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='${theme('formFeedback.invalid.color')}' stroke='none'/></svg>")`);

    validationStateSelector(
        'invalid',
        theme('validation.invalid.color'),
        theme('formFeedback.invalid.icon.backgroundImage', defaultInvalidIcon)
    );
    
    addComponents(component);
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