import React from 'react'
import DHBanner from "../images/DH.png"
import facebook from "../images/ico-facebook.png"
import instagram from "../images/ico-instagram.png"
import whatsapp from "../images/ico-whatsapp.png"
import tiktok from "../images/ico-tiktok.png"
import { useDentistStates } from './Context/Context'

const Footer = () => {
  
  const {state} = useDentistStates()

  return (
    <footer className={state.theme ? 'dark' : ''}>
      <p>Powered by</p>
      <img src={DHBanner} alt='DH-logo' />
      <section className='icon-container'>
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={whatsapp} alt="whatsapp logo" />
        <img src={tiktok} alt="tiktok logo" />
      </section>
    </footer>
  )
}

export default Footer
