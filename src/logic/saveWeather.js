import axios from 'axios';
import store from '../store';
import { save, errSaving } from '../actions';
import { url } from '../constants.js';

// Saves the weather to the database.
export default function sendWeather(weather) {
    const { dispatch } = store;
    axios.post(`${url}/weather`, weather)
        .then(res => {
            const id = res.data;
            dispatch(save(id));
        })
        .catch(err => {
            console.error(err);
            dispatch(errSaving());
        })
}