import React from 'react';
import { CircularProgress } from 'material-ui';
import { Button } from './index';

const Weather = (props) => {
    const {
        isLoading,
        city,
        temp,
        img,
        descrip,
        wind } = props;

    if (isLoading) {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>
            <h3>{city}</h3>
            <h4>{`${temp} C`}</h4>
            <h4>{`Wind: ${wind}`}</h4>
            <img src={img} alt='' />
            <div>
                <strong>{`Description: ${descrip}`}</strong>
            </div>
            <Button {...props} />
        </div>
    )
};


export default Weather;