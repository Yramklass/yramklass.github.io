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
        <Col md={5} style={{alignContent:'center', justifyContent:'center', textAlign:'center'}}>
        <Row style={{marginTop:'5cqh'}}>    <AboutComponent/></Row>
        <Row style={{margin:'5cqh'}}><ContactComponent/></Row>
       
        </Col>
    </Row>
    </Container></div>
    )
    }

    export default BioComponent