import { setAutocompleteOptionsAction } from '../redux/reducer'


export const fetchAutocompleteOptions = (q) =>{
    return function (dispatch) {
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${q}`)
  .then(response => response.json())
  .then(json => dispatch(setAutocompleteOptionsAction(json)))

    }
}


// const getData = async () => {
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts?_limit=10`
//       );
//       setData(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };