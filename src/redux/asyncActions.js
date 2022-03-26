import { setAutocompleteOptionsAction, setCityAction, setWeatherAction, setErrorAction, setLoadingAction } from '../redux/reducer'
import axios from 'axios'

//Autocomplete search
export function fetchOptions(q) {
    
    return async dispatch => {
        if(q){
            try {
               // dispatch(setLoadingAction(true))
                const options = await axios
                    .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${q}`)
                    .then(res => res.data)
                dispatch(setAutocompleteOptionsAction(options))
            } catch (err) {
                dispatch(setErrorAction(err))
            } finally {
                dispatch(setLoadingAction(false))
            }
        }
       
    }
}

export function fetchWeather(id) {
    return async dispatch => {
        try {
            dispatch(setLoadingAction(true))
            //Current Conditions
            const city = await axios
                .get(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.data)
            dispatch(setCityAction(city[0]))
            console.log(city)
            // Days of Daily Forecasts
            const weather = await axios
                .get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${process.env.REACT_APP_API_KEY}`)
                .then(res => res.data)
            dispatch(setWeatherAction(weather.DailyForecasts))
        } catch (err) {
            dispatch(setErrorAction(err))
        } finally {
            dispatch(setLoadingAction(false))
        }
    }
}




