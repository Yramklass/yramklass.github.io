import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";


const ContactComponent = () => {
  return (
    <div className='contactBox'><h3 style={{textDecoration:'underline'}}>Get in Contact</h3>
        <p><IoMailSharp/> Email: yramklass@gmail.com </p>
       <p><FaPhone/> Cellphone: (+27) 823691475</p>
        <p><FaGithub/> Github: @yramklass
        </p></div>
  )
}

export default ContactComponent