import React from 'react'
import { Col, Container } from 'react-bootstrap'

const HeaderComponent = () => {
  return (
    <div >
        <Container fluid className='headerBox '>
            <Col>
            </Col>
            <Col style={{textAlign:'center'}}>
            <h2>Yash Ramklass</h2>
            <h3>Full-Stack Developer, BBusSc Computer Science (University of Cape Town)</h3> 
            </Col>

            <Col>
            </Col>
             
        </Container>
        
    </div>
  )
}

export default HeaderComponent