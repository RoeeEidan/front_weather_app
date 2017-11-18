import { SET_WEATHER } from '../constants.js';

export default function weather(state = {}, action) {
    switch (action.type) {
        case SET_WEATHER:
            return action.payload
        default:
            return state
    }
}