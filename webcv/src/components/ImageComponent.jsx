import React from 'react'
import { Container } from 'react-bootstrap'

export const ImageComponent = () => {
  return (
    <div>
        <Container fluid className='imageBox'>
            <img src='lmao.jpg' style={{width:'100%', height:'100%'}}>
            </img>
        </Container>
    </div>
  )
}
