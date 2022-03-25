import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SelectedCity = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = useSelector(state => state.city)
    
    
    return (
        <>  
            <div>{city.LocalizedName}</div>
            <button onClick={() =>  dispatch({type: 'ADD_FAVORITE',payload: city})}>Add to Favorites</button>
            
        </>
    )
}

export default SelectedCity