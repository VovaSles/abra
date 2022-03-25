import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavoritesAction } from '../redux/reducer';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const removeCity = (city) =>{
    dispatch(removeFromFavoritesAction(city.Key))
  }
  return (
    <>
   
      { favorites.map(city => (
      <div key={city.Key}>{city.LocalizedName}<button onClick={() => removeCity(city)}>Remove</button></div>
    ))}
    </>
   
  )
}

export default FavoritesPage