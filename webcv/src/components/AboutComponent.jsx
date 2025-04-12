import React from 'react'
import { Container } from 'react-bootstrap'

import DigitalNoticeBoard from './DigitalNoticeBoard'

const AboutComponent = () => {
  return (
    <div>
        <Container fluid className='aboutBox'>
          
            <DigitalNoticeBoard/>
        </Container>
    </div>
  )
}

export default AboutComponent