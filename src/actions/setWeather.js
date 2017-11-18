import { SET_WEATHER } from '../constants.js';

// Sets the new weather.
const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather
});

export default setWeather