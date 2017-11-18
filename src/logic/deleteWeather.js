import axios from 'axios';
import store from '../store';
import { resetSave, errSaving } from '../actions';
import { url } from '../constants.js';

// Delets a weather from the database by id.
export default function deleteWeather(weather) {
    const { dispatch } = store;
    axios.delete(`${url}/weather`, { data: weather })
        .then(res => dispatch(resetSave()))
        .catch(err => {
            console.error(err);
            dispatch(errSaving());
        })
}