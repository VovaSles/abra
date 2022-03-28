import {telaviv, telavivWeather } from './models';



const defaultState = {
    celsius: true,
    alert: null,
    error: null,
    loading: false,
    options: [],
    city: telaviv,
    favorites: [],
    cityWeather: telavivWeather,
    daysWeather:[]
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_AUTOCOMPLETE_OPTIONS':
            return { ...state, options: [...action.payload] }
        case 'CLEAR_OPTIONS':
            return { ...state, options: [] }
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(city => city.Key !== action.payload) }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        case 'SET_LOADING':
            return { ...state, loading: action.payload }
        case 'CHANGE_CITY':
            return { ...state, city: action.payload }
        case 'SET_CITY':
              console.log(action.payload)
            return { ...state, cityWeather: {...action.payload}}
        case 'SET_WEATHER':
            return { ...state, daysWeather: [...action.payload] }
        case 'SET_ALERT':
            return { ...state, alert: action.payload }
        case 'SET_CELSIUS':
            return { ...state, celsius: action.payload }
        default:
            return state
    }
}


export const setAutocompleteOptionsAction = (payload) => ({ type: 'GET_AUTOCOMPLETE_OPTIONS', payload });
export const clearOptionsAction = (payload) => ({ type: 'CLEAR_OPTIONS' });
export const addToFavoritesAction = (payload) => ({ type: 'ADD_FAVORITE', payload });
export const removeFromFavoritesAction = (payload) => ({ type: 'REMOVE_FAVORITE', payload })
export const setErrorAction = (payload) => ({ type: 'SET_ERROR', payload });
export const setLoadingAction = (payload) => ({ type: 'SET_LOADING', payload });
export const setCityAction = (payload) => ({ type: 'SET_CITY', payload });
export const setWeatherAction = (payload) => ({ type: 'SET_WEATHER', payload });
export const changeCityAction = (payload) => ({ type: 'CHANGE_CITY', payload });
export const setAlertAction = (payload) => ({ type: 'SET_ALERT', payload });
export const setCelsiusAction = (payload) => ({ type: 'SET_CELSIUS', payload });

