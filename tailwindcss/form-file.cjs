const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = plugin(function({ matchComponents, theme }) {
    // addComponents(theme);


    // '.form-file-sm': {
    //     // --bs-form-fileHeight: #{$form-file-height-sm};
    //     fontSize: theme('formFile.sm.fontSize')
    // },
                  
    // '.form-file-sm .form-file-text, .form-file-sm .form-file-button': {
    //     padding: `${theme('formFile.sm.paddingY')} ${theme('formFile.sm.paddingY')}`
    // },
                  
    // '.form-file-lg': {
    //     // --bs-form-fileHeight: #{$form-file-height-lg};
    //     fontSize: theme('formFile.lg.fontSize'),
    // },
        
    // '.form-file-lg .form-file-text, .form-file-lg .form-file-button': {
    //     padding: `${theme('formFile.lg.paddingY')} ${theme('formFile.lg.paddingY')}`
    // }
                    
                
    matchComponents({
        'form-file': value => ({
            ...theme('formFile.css'),
            ...value,
        })
    }, {
        values: theme('formFile.styles')
    });
}, {
    theme: {
        formFile: theme => ({
            css: {
                position: 'relative',
                
                '.form-file-input': {
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: `calc(${theme('form.lineHeight', 1.5)} * 1em + ${theme('form.paddingY', '.375rem')} * 2 + ${theme('form.borderWidth', '1px')} * 2)`,
                    margin: 0,
                    opacity: 0,
                },
            
                '.form-file-input:focus-within ~ .form-file-label': {
                    borderColor: theme('form.focus.borderColor', colors.blue[400]),
                    boxShadow: theme('form.focus.boxShadow', `0 0 0 .2rem ${Color(colors.blue[500]).fade(.25)}`)
                },
                      
                '.form-file-input[disabled] ~ .form-file-label .form-file-text, & .form-file-input:disabled ~ .form-file-label .form-file-text': {
                    borderColor: theme('form.disabled.borderColor', 'inherit'),
                    backgroundColor: theme('form.disabled.backgroundColor', colors.gray[200])
                },
                
                '.form-file-label': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 1,
                    display: 'flex',
                    height: `calc(${theme('form.lineHeight', 1.5)} * 1em + ${theme('form.paddingY', '.375rem')} * 2 + ${theme('form.borderWidth', '1px')} * 2)`,
                    borderColor: theme('form.borderColor', colors.gray[600]),
                    borderRadius: theme('form.borderRadius', '.25rem'),
                    boxShadow: theme('form.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),
                },
                    
                '.form-file-text': {
                    display: 'block',
                    flexGrow: 1,
                    padding: `${theme('form.paddingY', '.375rem')} ${theme('form.paddingX', '.75rem')}`,
                    overflow: 'hidden',
                    fontFamily: theme('form.fontFamily', 'inherit'),
                    fontWeight: theme('form.fontWeight', 400),
                    lineHeight: theme('form.lineHeight', 1.5),
                    color: theme('form.color', colors.gray[400]),
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    backgroundColor: theme('form.backgroundColor', colors.white),
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderWidth: theme('form.borderWidth', '1px'),
                    borderTopLeftRadius: 'inherit',
                    borderBottomLeftRadius: 'inherit',
                },
                      
                '.form-file-button': {
                    display: 'block',
                    flexShrink: 0,
                    padding: `${theme('form.paddingY', '.375rem')} ${theme('form.paddingX', '.75rem')}`,
                    marginLeft: `-${theme('form.borderWidth', '1px')}`,
                    lineHeight: theme('form.lineHeight', 1.5),
                    color: theme('form.color', colors.gray[600]),
                    backgroundColor: theme('form.disabled.backgroundColor', colors.gray[200]),
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderWidth: theme('form.borderWidth', '1px'),
                    borderTopRightRadius: 'inherit',
                    borderBottomRightRadius: 'inherit',
                },    
            },

            styles: {
                DEFAULT: {},
                
                sm: {
                    padding: `${theme('form.sm.paddingY', '.25rem')} ${theme('form.sm.paddingX', '.5rem')}`,
                    fontSize: theme('form.sm.fontSize', '.875rem'),
                    height: `calc(${theme('form.lineHeight', 1.5)} * 1em + ${theme('form.sm.paddingY', '.25rem')} * 2 + ${theme('form.borderWidth', '1px')} * 2)`,
                },

                lg: {
                    padding: `${theme('form.sm.paddingY', '.5rem')} ${theme('form.sm.paddingX', '.1rem')}`,
                    fontSize: theme('form.lg.fontSize', '1.25rem'),
                    height: `calc(${theme('form.lineHeight', 1.5)} * 1em + ${theme('form.lg.paddingY', '.5rem')} * 2 + ${theme('form.borderWidth', '1px')} * 2)`,
                },
            },
        })
    }
});