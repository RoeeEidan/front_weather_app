import { SET_LOADING } from '../constants.js';

// Sets the weather loading mode.
const setWeatherLoading = (bool) => ({
    type: SET_LOADING,
    payload: { isLoading: bool }
});

export default setWeatherLoading