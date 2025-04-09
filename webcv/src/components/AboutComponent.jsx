import React from 'react'
import { Container } from 'react-bootstrap'
import NoticeBoard from './NoticeBoard'
import DigitalNoticeBoard from './DigitalNoticeBoard'

const AboutComponent = () => {
  return (
    <div>
        <Container fluid>
            <DigitalNoticeBoard/>
        </Container>
    </div>
  )
}

export default AboutComponent