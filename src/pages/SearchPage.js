import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SelectedCity from '../components/SelectedCity'
import { fetchAutocompleteOptions } from '../redux/asyncActions'


const SearchPage = () => {
   const city =  useSelector(state => state.city);
   const options =  useSelector(state => state.autocomplete);
   const dispatch = useDispatch();
   const [inputValue, setInputValue] = useState("");
   
    return (
        <>




        
        <br/>
        <br/>
        <br/>
        <br/>
             {console.log(options)}
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
           {/* {city? <SelectedCity /> : <h3>Select the City...</h3>}  */}
           {/* <button onClick={()=> dispatch(fetchAutocompleteOptions(inputValue))}>get options</button> */}
        </>
    )
}

export default SearchPage