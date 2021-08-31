import React from 'react';

import './contato.css';

import { BiPhone } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import ImgFachada from '../../images/clinica-dr-marcio-pio-fachada.jpg';



export default function Contato() {
  return (
    <>
      <main className="containerContato">
        <section className="heroContato">
          <h1>Contato</h1>

            <div className="content02">
              <a target="_blank" rel="noopener noreferrer" href="tel:0558631946950" >
                <BiPhone /> (86) 3194 6950
              </a>

              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/558698512283">
                <SiWhatsapp /> (86) 999851 2283
              </a>

              <a target="_blank" rel="noopener noreferrer" href="mailto:clinicamarciopio@hotmail.com" >
                <FiMail /> clinicamarciopio@hotmail.com
              </a>
            </div>

            <div className="content01">
              <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZZAzETd9HW9gMms9" >
                <GoLocation />Av.Jóquei Clube, 2956 - Jockey, Teresina PI, 64049-240
              </a>
            </div>
        </section>
        <img src={ImgFachada} alt="Dr. Marcio Pio" />
      </main>
    </>
  );
}

