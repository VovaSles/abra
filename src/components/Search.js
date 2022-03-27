import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormControl, ListGroup } from 'react-bootstrap'
import { clearOptionsAction, changeCityAction, setAlertAction } from '../redux/reducer'
import { fetchWeather, fetchOptions } from '../redux/asyncActions'


const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
  const options = useSelector(state => state.options)

  const searchHandler = (q) => {
    if (q.replace(/[^A-Za-z]/ig, '') === q) {
      dispatch(fetchOptions(q))
    } else {
      alertHandler({ variant: 'danger', text: 'Type in English only!' })
      dispatch(fetchOptions(q))
    }
  }
  const cityClickHandler = (city) => {
    dispatch(fetchWeather(city.Key));
    dispatch(changeCityAction(city));
    dispatch(clearOptionsAction())
  }
  const alertHandler = (alert) => {
    dispatch(setAlertAction(alert))
    setTimeout(() => { dispatch(setAlertAction(null)) }, 3000)
  }
  return (
    <>
      <Form className=' m-auto mt-5'>
        <Form.Group className="mb-3 mt-3">
          <FormControl
            id="search"
            placeholder="Search ..."
            value={input}
            autoComplete="of"
            onChange={e => {
              if (e.target.value.replace(/[^A-Za-z]/ig, '') === e.target.value) {
                setInput(e.target.value);
                searchHandler(e.target.value);
              } else {
                setInput('');
              }
            }}
          />
        </Form.Group>
      </Form>
      <ListGroup>
        {options.map(city => <ListGroup.Item variant="secondary" key={city.Key} onClick={() => cityClickHandler(city)}>{city.LocalizedName}</ListGroup.Item>)}
      </ListGroup>
    </>
  )
}

export default Search