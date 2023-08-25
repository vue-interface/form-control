import config from './src/config.js';
import FormControl from './src/FormControl.vue';
import FormControlErrors from './src/FormControlErrors.vue';

export type FormControlProps = {
    name: string,
    test?: number
};

export {
config,
FormControl,
FormControlErrors
};
