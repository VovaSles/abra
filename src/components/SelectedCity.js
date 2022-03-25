import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Badge, Container, Row, Col ,Form} from 'react-bootstrap'

const SelectedCity = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = useSelector(state => state.city);
    const weather = useSelector(state => state.cityWeather);
    const daysWeather = useSelector(state => state.daysWeather);

    // const options = useSelector(state => state.autocomplete);
    // const [inputValue, setInputValue] = useState("");




    const getWeekDat = (date) => {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const d = new Date(date)
        return weekday[d.getDay()]
    }
    return (
        <>




            <Container>
            
                <Form className=' m-auto mt-5' style={{ width: '80rem' }}>
                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control placeholder="SEARCH" />
                    </Form.Group>
                </Form>
                {/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} />  */}
                <SelectedCity />
                {/* <button onClick={() => dispatch(fetchAutocompleteOptions(inputValue))}>get options</button> */}
            




                <Card className='  mt-5' style={{ width: '80rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <Row className='mt-5'>
                            <Col  md={{ span: 4 }}>
                            <h2 className="text-center m-auto">
                                {city.LocalizedName} 
                                <Badge bg="secondary" className='m-3'>
                                 {weather.Temperature.Metric.Value}
                                 {weather.Temperature.Metric.Unit}
                            </Badge>
                            </h2>
                         
                            </Col>
                            <Col md={{ span: 2, offset: 6 }}> <Button
                                className=".justify-content-end"
                                variant="primary"
                                onClick={() => dispatch({ type: 'ADD_FAVORITE', payload: city })}>Add to Favorites</Button></Col>
                            </Row>
                        </Card.Title>

                        <h1 className="text-center m-auto" >{weather.WeatherText}</h1>


                        {console.log(daysWeather.DailyForecasts)}

                        <Row xs={1} md={5} className="g-5 m-3">
                            {daysWeather.DailyForecasts.map((d, idx) => (
                                <Col key={d.EpochDate}>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>{getWeekDat(d.Date)}</Card.Title>
                                            <h5> {d.Temperature.Maximum.Value}
                                                {d.Temperature.Maximum.Unit}
                                            </h5>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default SelectedCity