import { UPDATE_INPUT } from '../constants.js';

// Updates the textfield auto complete data.
const updateTextFieldData = (data) => ({
    type: UPDATE_INPUT,
    payload: data
});

export default updateTextFieldData