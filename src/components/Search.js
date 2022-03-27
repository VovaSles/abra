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
    if (q.replace(/[^A-Za-z]/ig, '') !== q) {
      alertHandler({ variant: 'danger', text: 'Type in English only!' })
    } else {
      dispatch(fetchOptions(q))
      if (options.length == 0 && q) {
        alertHandler({ variant: 'info', text: 'No matches!' })
      }
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
              if (e.target.value) {
                setInput(e.target.value);
                searchHandler(e.target.value);
              } else {
                console.log('if')
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