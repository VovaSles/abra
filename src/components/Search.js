import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormControl, ListGroup } from 'react-bootstrap'
import { clearOptionsAction, changeCityAction, setAlertAction } from '../redux/reducer'
import { fetchWeather, fetchOptions } from '../redux/asyncActions'


const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('')
  const options = useSelector(state => state.options)

  const cityClickHandler = (item) => {
    dispatch(fetchWeather(item.Key));
    dispatch(changeCityAction(item));
    console.log(item)
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
              if ( e.target.value.match(/[A-Za-z]/i)) {
                setInput(e.target.value)
                dispatch(fetchOptions(e.target.value))
              } else {
                setInput('');
                alertHandler({ variant: 'danger', text: 'Type in English only!' })
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