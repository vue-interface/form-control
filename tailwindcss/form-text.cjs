const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        // '*, ::before, ::after': {
        //     '--form-text-margin-top': theme('formText.marginTop'),
        //     '--form-text-font-size': theme('formText.fontSize'),
        //     '--form-text-font-style': theme('formText.fontStyle'),
        //     '--form-text-font-weight': theme('formText.fontWeight'),
        //     '--form-text-color': theme('formText.color'),
        // },

        '.form-text': {
            marginTop: theme('formText.marginTop'),
            fontSize: theme('formText.fontSize'),
            fontStyle: theme('formText.fontStyle'),
            fontWeight: theme('formText.fontWeight'),
            color: theme('formText.color')
        }
    };

    addComponents(component);
}, {
    theme: {
        formText: theme => ({
            marginTop: '.25rem',
            fontSize: '.875em',
            fontStyle: 'normal',
            fontWeight: 400,
            color: theme('colors.gray.600', colors.gray[600]),
        })
    }
});
  