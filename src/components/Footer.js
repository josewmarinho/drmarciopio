import React from 'react';

import './footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaInstagram } from 'react-icons/fa';
import LogoImg from '../images/logo-dr-marcio-pio.svg';



export default function Footer() {
   return (
      <>
         <main className="containerFooter">
            <section className="heroFooter">

               <a href="/" className="logoImg">
                  <img src={LogoImg} alt="" />
                  <p>CRM 2662 | RQE 1416</p>

               </a>


               <div >
                  <a target="_blank" rel="noopener noreferrer" href="tel:0558631946950" >
                     <BiPhone />
                     <h2>Telefone</h2>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/send?phone=558698512283" >
                     <SiWhatsapp />
                     <h2>WhatsApp</h2>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drmarciopio/" >
                     <FaFacebookF />
                     <h2>Facebook</h2>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/drmarciopio/" >
                     <FaInstagram />
                     <h2>Instagram</h2>
                  </a><a target="_blank" rel="noopener noreferrer" href="mailto:clinicamarciopio@hotmail.com" >
                     <FiMail />
                     <h2>Email</h2>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZZAzETd9HW9gMms9" >
                     <GoLocation />
                     <h2>Localização</h2>
                  </a>
               </div>

            </section>
         </main>
      </>
   );
}

