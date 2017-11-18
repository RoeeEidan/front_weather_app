import { setWeather, setWeatherLoading, resetSave } from '../actions';
import store from '../store';

// Fetchs a weather by location
export default function fetchWeather({ lat, lon }) {
    const { dispatch } = store;
    dispatch(setWeatherLoading(true));
    return fetch(`http://api.wunderground.com/api/ed11fd3946cadb29/conditions/q/${lat},${lon}.json`)
        .then(d => d.json())
        .then(d => {
            const { current_observation } = d;
            if (!current_observation) { return }
            const { city, state } = current_observation.display_location;
            const { temp_c, wind_string, icon_url, icon } = current_observation;

            const nextWeather = {
                city: `${city}, ${state}`,
                wind: wind_string,
                img: icon_url,
                descrip: icon,
                temp: temp_c
            }
            dispatch(resetSave());
            dispatch(setWeather(nextWeather));
            dispatch(setWeatherLoading(false));
        })
        .catch(err => dispatch(setWeatherLoading(false)))
}