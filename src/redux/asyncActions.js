import { setAutocompleteOptionsAction, setCityAction, setWeatherAction, setErrorAction, setLoadingAction } from '../redux/reducer'


//Autocomplete search
export function fetchOptions(q) {
    return async dispatch => {
        if (q) {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${q}`)
                .then(res => dispatch(setAutocompleteOptionsAction(res.data)))
                .catch(err => dispatch(setErrorAction(err)))
        }
    }
}

export function fetchWeather(id) {
    return dispatch => {
        try {
            dispatch(setLoadingAction(true))
            //Current Conditions
            fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
                .then(res => dispatch(setCityAction(res.data[0])))
                .catch(err => dispatch(setErrorAction(err)))


            // Days of Daily Forecasts
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
                .then(res => dispatch(setWeatherAction(res.data.DailyForecasts)))
                .catch(err => dispatch(setErrorAction(err)))
        }
        finally {
            dispatch(setLoadingAction(false))
        }
    }
}



