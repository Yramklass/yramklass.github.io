import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';

const ContactComponent = () => {
  return (
    <Container>
      <Row className="position-relative">
        {/* The large message icon as background */}
        <Col className="d-flex justify-content-center">
          <FaRegMessage size={350} style={{ color: '#e9ecef' }} />
        </Col>
        
        {/* Contact information container positioned over the icon */}
        <div 
          className="contactBox position-absolute" 
          style={{ 
            top: '45%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '75%', 
            textAlign: 'center' 
          }}
        >
          <h3 style={{paddingBottom:'2cqh'}}>Get in Touch!</h3>
          <p className="d-flex align-items-center justify-content-center">
            <IoMailSharp className="me-2" />  yramklass@gmail.com
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <FaPhone className="me-2" /> (+27) 823691475
          </p>
          <p className="d-flex align-items-center justify-content-center">
            <FaGithub className="me-2" /> @yramklass
          </p>
        </div>
      </Row>
    </Container>
  )
}

export default ContactComponent