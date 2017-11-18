import { combineReducers } from 'redux';
import weather from './weather';
import weatherLoading from './weatherLoading';
import textField from './textField';
import didSave from './didSave';

const rootReducer = combineReducers({
    weather,
    weatherLoading,
    textField,
    didSave
    
})

export default rootReducer