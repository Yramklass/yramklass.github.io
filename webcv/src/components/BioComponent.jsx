    import React from 'react'
    import { Col, Container, Row } from 'react-bootstrap'
    import { ImageComponent } from './ImageComponent'

    import ContactComponent from './ContactComponent'

    const BioComponent = () => {
    return (
        <div><Container fluid className='bioBox'>
    <Row>
        <Col md={8}>
        <ImageComponent/>
        </Col>
        <Col md={4}>
        <ContactComponent/>
        </Col>
    </Row>
    </Container></div>
    )
    }

    export default BioComponent