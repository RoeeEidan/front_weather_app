import { SET_LOADING } from '../constants.js';

const initialState = {
    isLoading: false,
    didLoad: false
}

export default function weatherLoading(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            const { isLoading } = action.payload
            return {
                didLoad: !isLoading,
                isLoading
            }
        default:
            return state
    }
}