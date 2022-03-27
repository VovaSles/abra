import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Badge, Row, Col } from 'react-bootstrap'
import { addToFavoritesAction } from '../redux/reducer'
import { Heart } from "react-bootstrap-icons"
import Typewriter from 'typewriter-effect';
import { getWeekDat } from '../utils/utils'

const SelectedCity = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = useSelector(state => state.city);
    const weather = useSelector(state => state.cityWeather);
    const daysWeather = useSelector(state => state.daysWeather);

    return (
        <>
            <Card className='  mt-5' >
                <Card.Body>
                    <Card.Title>
                        <Row className='mt-5 justify-content-center'>
                            <Col xs={12} md={{ span: 4 }}>
                                <h2 className="text-center m-auto">
                                    {city.LocalizedName}
                                    <Badge bg="secondary" className='m-3'>
                                        {weather.Temperature.Metric.Value}
                                        {weather.Temperature.Metric.Unit}
                                    </Badge>
                                </h2>
                            </Col>
                            <Col xs={{ span: 6, offset: 4 }} md={{ span: 2, offset: 6 }}>
                                {console.log(favorites)}
                                {favorites.includes(city) ? <Heart color="red" size={40} />
                                    : <Button
                                        variant="primary"
                                        onClick={() => dispatch(addToFavoritesAction(city))}>Like</Button>
                                }
                            </Col>
                        </Row>
                    </Card.Title>
                    <h1 className="text-center m-auto" >
                        <Typewriter
                            options={{
                                strings: weather.WeatherText,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <Row xs={1} md={5} className="g-5 m-3">
                        {daysWeather.map((d, idx) => (
                            <Col key={d.EpochDate}>
                                <Card className="text-center" bg="warning">
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
        </>
    )
}

export default SelectedCity