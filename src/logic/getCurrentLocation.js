import { fetchWeather } from './index';
import store from '../store';

// Gets the users location.
export default function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
}

// Runs when location was recived
function success(position) {
    // If by now the user already searched for a city stop here.
    const { isLoading, didLoad } = store.getState().weatherLoading;
    if (isLoading || didLoad) {
        return
    }

    // Otherwise get the information about current possition.
    const { latitude, longitude } = position.coords;
    fetchWeather({
        lat: latitude,
        lon: longitude
    });
}

// Runs if thers an error reciving the users location.
function error(err) {
    throw err
}
