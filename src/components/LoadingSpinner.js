import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const LoadingSpinner = () => {
  return (
    <Container  className='mt-5'>
    <Row className='mt-5'>
        <Col md={{ span: 4, offset: 6 }} xs={{span: 5, offset: 5}}>
        <Spinner  className='mt-5' animation="border" variant="primary" />
        </Col>
    </Row>
</Container>
  )
}

export default LoadingSpinner