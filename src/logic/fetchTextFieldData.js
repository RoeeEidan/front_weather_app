import { updateTextFieldData, clearTextFieldData } from '../actions';
import store from '../store';
import jsonp from 'jsonp';

// Fetchs data used for the textfield auto complete
export default function fetchTextFieldData(value, dataSource, params) {
    // If this got fired because of a click on an item dont do anything.
    if (params.source === 'click') {
        return
    // else if theres no value clear the data source.
    } else if (value === '') {
        return store.dispatch(clearTextFieldData());
    }

    // Otherwise get the resaults and update the store.
    jsonp(`http://autocomplete.wunderground.com/aq?query=${value}`, { param: 'cb', timeout: 10000 }, function (err, data) {
        const dataSource = data.RESULTS.filter(item => item.type === 'city');
        store.dispatch(updateTextFieldData(dataSource));
    })
}



