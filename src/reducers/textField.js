import { UPDATE_INPUT, CLEAR_DATA_SOURCE } from '../constants.js';

const initialState = {
    textFieldData: []
};

export default function textField(state = initialState, action) {
    switch (action.type) {
        case UPDATE_INPUT:
            return { textFieldData: action.payload }
        case CLEAR_DATA_SOURCE:
            return { textFieldData: action.payload }
        default:
            return state
    }
}