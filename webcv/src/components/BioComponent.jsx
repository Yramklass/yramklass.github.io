    import React from 'react'
    import { Col, Container, Row } from 'react-bootstrap'
    import { ImageComponent } from './ImageComponent'
    import AboutComponent from './AboutComponent'

    import ContactComponent from './ContactComponent'

    const BioComponent = () => {
    return (
        <div><Container fluid className='bioBox'>
    <Row>
        <Col md={7}>
        <ImageComponent/>
        </Col>
        <Col md={5} style={{alignContent:'center', }}>
        <Row >    <AboutComponent/></Row>
       
       
        </Col>
    </Row>
    </Container></div>
    )
    }

    export default BioComponent