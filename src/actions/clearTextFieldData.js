import { CLEAR_DATA_SOURCE } from '../constants.js';

// Emptys the sorce of data that is used for the auto complete text field.
const clearTextFieldData = () => ({
    type: CLEAR_DATA_SOURCE,
    payload: []
});

export default clearTextFieldData;