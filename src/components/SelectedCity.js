import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavoritesAction } from '../redux/reducer';

const SelectedCity = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = useSelector(state => state.city)
    
    
    return (
        <>  
            <div>{city.LocalizedName}</div>
            <button onClick={() =>  dispatch(addToFavoritesAction(city))}>Add to Favorites</button>
            
        </>
    )
}

export default SelectedCity