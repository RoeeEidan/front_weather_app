import React, { Component } from 'react';
import { getCurrentLocation, fetchTextFieldData, fetchWeather, saveWeather, deleteWeather } from '../../logic';
import { clearTextFieldData } from '../../actions';
import { connect } from 'react-redux';
import { Title, TextAutoComplete, Weather } from '../../components';


class Home extends Component {

    componentDidMount() {
        getCurrentLocation()
    }

    render() {
        const { isLoading, didLoad } = this.props;
        return (
            <div className="App">
                <Title text='Weather App' />
                <TextAutoComplete {...this.props} />
                {
                    (!didLoad && !isLoading) ? <div> Search a city or allow your location </div> : <Weather {...this.props} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.weather,
        ...state.weatherLoading,
        ...state.textField,
        ...state.didSave
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTextFieldData,
        fetchWeather,
        clearTextFieldData: () => dispatch(clearTextFieldData()),
        saveWeather,
        deleteWeather
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
