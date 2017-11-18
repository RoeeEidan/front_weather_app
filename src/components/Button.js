import React from 'react';
import { FlatButton } from 'material-ui';

const Button = (props) => {
    const { city, temp, wind, img, descrip, didSave, id, err, deleteWeather, saveWeather } = props;
    return (
        <div className='myButton'>
            <FlatButton
                label={didSave ? "Delete" : "Save"}
                onClick={() => {
                    if (didSave) {
                        deleteWeather({ id });
                        return
                    }
                    saveWeather({ city, temp, wind, img, descrip })
                }}
            />
            {err && <div>We are experiencing an error please try again</div>}
        </div>
    )
}

export default Button;
