import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Badge, Container, Row, Col, Form } from 'react-bootstrap'

const SearchPage = () => {
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
                <Row>
                    <Col xs={12} md={12}>
                        <Form className=' m-auto mt-5'>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder="SEARCH" />
                            </Form.Group>
                        </Form>
                        {/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} />  */}
                        {/* <button onClick={() => dispatch(fetchAutocompleteOptions(inputValue))}>get options</button> */}





                        <Card className='  mt-5' >
                            <Card.Body>
                                <Card.Title>
                                    <Row className='mt-5 justify-content-center'>
                                        <Col  xs={12} md={{ span: 4 }}>
                                            <h2 className="text-center m-auto">
                                                {city.LocalizedName}
                                                <Badge bg="secondary" className='m-3'>
                                                    {weather.Temperature.Metric.Value}
                                                    {weather.Temperature.Metric.Unit}
                                                </Badge>
                                            </h2>

                                        </Col>
                                        <Col  xs={{ span: 6, offset: 4 }} md={{ span: 2, offset: 6 }}>
                                            <Button
                                            variant="primary"
                                            onClick={() => dispatch({ type: 'ADD_FAVORITE', payload: city })}>Like it</Button></Col>
                                    </Row>
                                </Card.Title>

                                <h1 className="text-center m-auto" >{weather.WeatherText}</h1>


                                {console.log(daysWeather.DailyForecasts)}

                                <Row xs={1} md={5} className="g-5 m-3">
                                    {daysWeather.DailyForecasts.map((d, idx) => (
                                        <Col key={d.EpochDate}>
                                            <Card className="text-center"  bg="warning">
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
                    </Col>

                </Row>


            </Container>
        </>
    )
}

export default SearchPage