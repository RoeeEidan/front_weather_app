import { SAVE, RESET_SAVE, ERR_SAVE } from '../constants.js';

const initialState = {
    didSave: false,
    id: false,
    err: false
}

// This reducer is aware if the weather is saved in the data base or not.
export default function didSave(state = initialState, action) {
    switch (action.type) {
        case SAVE:
            return {
                didSave: true,
                id: action.payload,
                err: false
            }
        case ERR_SAVE:
            return { 
                ...state,
                err: true
             }
        case RESET_SAVE:
            return { ...initialState }
        default:
            return state
    }
}