import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button, Badge, Row, Col } from 'react-bootstrap'
import { addToFavoritesAction, setCityAction, setWeatherAction, setErrorAction, setLoadingAction } from '../redux/reducer'

import { Heart } from "react-bootstrap-icons"
import Typewriter from 'typewriter-effect'
import { getWeekDat } from '../utils/utils'
import { metric } from '../utils/utils'
import axios from 'axios'


const SelectedCity = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = useSelector(state => state.city);
    const weather = useSelector(state => state.cityWeather);
    const daysWeather = useSelector(state => state.daysWeather);
    const celsius = useSelector(state => state.celsius)
    let loaded = false


    function fetchTelaviv() {


        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                console.log(res.data)
                dispatch(setCityAction(res.data[0]))
            })
            .catch(err => {
                dispatch(setErrorAction(err))
            })
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                dispatch(setWeatherAction(res.data.DailyForecasts))
                console.log(res.data.DailyForecasts)
            })
            .catch(err => {
                dispatch(setErrorAction(err))
            })
    }

    useEffect(() => {
        fetchTelaviv()
    }, []);

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
                                        {celsius ? weather.Temperature.Metric.Value : weather.Temperature.Imperial.Value}
                                        {celsius ? weather.Temperature.Metric.Unit : weather.Temperature.Imperial.Unit}
                                    </Badge>
                                </h2>
                            </Col>
                            {console.log(favorites.filter(e => e.Key === city.Key).length)}
                            <Col xs={{ span: 5, offset: 2 }} md={{ span: 2, offset: 6 }}>
                                {favorites.filter(e => e.Key === city.Key).length > 0 ? <Heart color="red" size={40} floodColor="red" />
                                    : <Button
                                        variant="primary"
                                        onClick={() => dispatch(addToFavoritesAction({ ...city, ...weather }))}>Like it</Button>
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
                                        <h5>
                                            {celsius ? parseInt(metric(d.Temperature.Maximum.Value)) : d.Temperature.Maximum.Value}
                                            {celsius ? "C" : d.Temperature.Maximum.Unit}
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