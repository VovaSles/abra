import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavoritesAction, changeCityAction } from '../redux/reducer'
import { fetchWeather } from '../redux/asyncActions'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const FavorList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const navigate = useNavigate();
    const celsius = useSelector(state => state.celsius)

    const removeCity = (city) => {
        dispatch(removeFromFavoritesAction(city.Key))
    }

    const cardClickHandler = (city) => {
        dispatch(fetchWeather(city.Key));
        dispatch(changeCityAction(city));
        navigate('/');
    }
    return (

        <Container>
            <Row xs={1} md={4} className="g-4 mt-5" >
                {favorites.map(city => (
                    <Col key={city.Key}>
                        <Card className="text-center" onClick={() => cardClickHandler(city)}>
                            <Card.Body>
                                <Card.Title>{city.LocalizedName}</Card.Title>
                                <h3>  {celsius ? city.Temperature.Metric.Value : city.Temperature.Imperial.Value}
                                    {celsius ? city.Temperature.Metric.Unit : city.Temperature.Imperial.Unit}</h3>
                                <h2> <Typewriter
                                    options={{
                                        strings: city.WeatherText,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h2>
                                <Button className='m-2' variant="warning" onClick={() => removeCity(city)}>Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default FavorList