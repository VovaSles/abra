import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromFavoritesAction } from '../redux/reducer';
import { Card, Button, Row, Col } from 'react-bootstrap'
import { Container } from '@mui/material';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const weather = useSelector(state => state.cityWeather);

  const removeCity = (city) => {
    dispatch(removeFromFavoritesAction(city.Key))
  }



  return (
    <>
      <Container>
        <Row xs={1} md={4} className="g-4 mt-5">
          {favorites.map(city => (
            <Col key={city.Key}>
              <Card className="text-center">
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