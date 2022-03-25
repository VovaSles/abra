import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectedCity from '../components/SelectedCity'
import { fetchAutocompleteOptions } from '../redux/asyncActions'



const SearchPage = () => {
    const city = useSelector(state => state.city);
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    // const options = useSelector(state => state.autocomplete);
    // const [inputValue, setInputValue] = useState("");

    return (
        <>
            {console.log(favorites)}
            {/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} />  */}
            <SelectedCity />   
            {/* <button onClick={() => dispatch(fetchAutocompleteOptions(inputValue))}>get options</button> */}
        </>
    )
}

export default SearchPage