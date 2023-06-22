import config from './src/config';
import FormControl from './src/FormControl.vue';
import FormControlErrors from './src/FormControlErrors.vue';
import FormControlLegacy from './src/FormControlLegacy';

export type FormControlProps = {
    name: string,
    test?: number
};

export {
config,
FormControl,
FormControlErrors,
FormControlLegacy
};
