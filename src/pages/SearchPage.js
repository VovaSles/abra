import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import Search from '../components/Search'
import SelectedCity from '../components/SelectedCity'
import ErrorModal from '../components/ErrorModal'
import LoadingSpinner from '../components/LoadingSpinner'

const SearchPage = () => {
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading)

    if (error) {
        return <ErrorModal />
    } else if (loading) {
        return <LoadingSpinner/>
       
    } else {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <Search />
                            <SelectedCity />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default SearchPage