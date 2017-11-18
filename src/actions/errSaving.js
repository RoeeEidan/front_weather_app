import { ERR_SAVE } from '../constants.js';

// Resets the saving mode.
const errSaving = () => ({
    type: ERR_SAVE,
});

export default errSaving