import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const TextAutoComplete = (props) => {
    const { textFieldData, clearTextFieldData, fetchTextFieldData, fetchWeather } = props;
    return (
        <AutoComplete
            hintText="Type a city"
            dataSource={textFieldData ? textFieldData.map(item => item.name) : []}
            onUpdateInput={fetchTextFieldData}
            maxSearchResults={5}
            onNewRequest={(string, index) => {
                // if the item isnt there dont do anything.
                if (index === -1) { return };
                
                const item = textFieldData[index];
                const { lon, lat } = item;

                clearTextFieldData();
                fetchWeather({ lon, lat });

            }}
        />
    )
};


export default TextAutoComplete;