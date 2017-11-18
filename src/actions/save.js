import { SAVE } from '../constants.js';

// Saves the id of the weather after saving in the data base.
const save = (id) => ({
    type: SAVE,
    payload: id
});

export default save