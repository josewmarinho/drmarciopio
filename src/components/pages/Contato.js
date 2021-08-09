import React from 'react';

import './contato.css';

import { FaFacebookF } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaInstagram } from 'react-icons/fa';
import ImgFachada from '../../images/clinica-dr-marcio-pio-fachada.jpg';



export default function Contato() {
  return (
    <>
      <main className="containerContato">

        <section className="heroContato">
        <h1>Contato</h1>

          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/drmarciopio/" className="linkk5">
            <FaInstagram />
            <h2>Instagram</h2>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drmarciopio/" className="linkk6">
            <FaFacebookF />
            <h2>Facebook</h2>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="tel:0558631946950" className="linkk">
            <BiPhone />
            <h2>(86) 3194 6950</h2>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/send?phone=558698512283" className="linkk2">
            <SiWhatsapp />
            <h2>(86) 99851 2283</h2>
          </a>


          <a target="_blank" rel="noopener noreferrer" href="mailto:clinicamarciopio@hotmail.com" className="linkk3">
            <FiMail />
            <h2>clinicamarciopio@hotmail.com</h2>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZZAzETd9HW9gMms9" className="linkk4">
            <GoLocation />
            <h2>Av. Jóquei Clube, 2956 - Teresina - PI, 64049-240</h2>
          </a>

        </section>
        <img src={ImgFachada} alt="Dr. Marcio Pio" />
      </main>
    </>
  );
}

