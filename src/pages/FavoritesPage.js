import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavoritesAction, changeCityAction } from '../redux/reducer'
import { fetchWeather } from '../redux/asyncActions'
import { Card, Button, Row, Col ,Container} from 'react-bootstrap'


const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const weather = useSelector(state => state.cityWeather);
  const navigate = useNavigate();

  const removeCity = (city) => {
    dispatch(removeFromFavoritesAction(city.Key))
  }
  
  const cardClickHandler = (city) => {
    dispatch(fetchWeather(city.Key));
    dispatch(changeCityAction(city));
    navigate('/');
}


  return (
    <>
      <Container>
        <Row xs={1} md={4} className="g-4 mt-5">
          {favorites.map(city => (
            <Col key={city.Key}>
              <Card className="text-center" onClick={()=> cardClickHandler(city)}>
                <Card.Body>
                  <Card.Title>{city.LocalizedName}</Card.Title>
                  <h3>{weather.Temperature.Metric.Value} {weather.Temperature.Metric.Unit}</h3>
                  <h2>{weather.WeatherText}</h2>
                  <Button className='m-2' variant="warning" onClick={() => removeCity(city)}>Remove</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </>

  )
}

export default FavoritesPage