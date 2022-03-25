import { telaviv, telavivWeather ,telaviv5DaysWeather} from './mock';

const defaultState = {
    autocomplete: [],
    city: telaviv,
    favorites: [],
    cityWeather: telavivWeather,
    daysWeather: telaviv5DaysWeather
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_AUTOCOMPLETE_OPTIONS':
            return { ...state, autocomplete: [...state.autocomplete, action.payload] }
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] }
        case 'REMOVE_FAVORITE':
            return { ...state, favorites: state.favorites.filter(city => city.Key !== action.payload) }
        default:
            return state
    }
}


export const setAutocompleteOptionsAction = (payload) => ({ type: 'GET_AUTOCOMPLETE_OPTIONS', payload });
export const addToFavoritesAction = (payload) => ({ type: 'ADD_FAVORITE', payload });
export const removeFromFavoritesAction = (payload) => ({ type: 'REMOVE_FAVORITE', payload })