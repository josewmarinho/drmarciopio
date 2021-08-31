import React from 'react';

import './footer.css';

import { GoLocation } from 'react-icons/go';
import { BiPhone } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import LogoImg from '../images/logo-dr-marcio-pio.svg';



export default function Footer() {
   return (
      <>
         <main className="containerFooter">
            <section className="heroFooter">
               <a href="/" className="logoImg">
                  <img src={LogoImg} alt="" />
               </a>

               <div className="tudo">
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

                  <div className="content03">
                     <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/drmarciopio/" >
                        <FaFacebookF /> Facebook
                     </a>
                     <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/drmarciopio/" >
                        <FaInstagram /> Instagram
                     </a>
                  </div>

               </div>

            </section>
         </main>
      </>
   );
}