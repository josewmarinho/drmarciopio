import React from 'react';
import './inicio.css';
import { GoLocation } from 'react-icons/go'

import Procedures from './Procedures'
import Adds from './Adds'


import Video from '../../images/movie-1.mp4';


export default function Inicio() {
  return (
    <>
      <main className="inicio-container">
        <section className="herobg">
          <div className="videobg">
            <video src={Video} autoPlay loop muted playsInline />
          </div> 
        </section>
        <aside className="herocontent">
          <article className="heroitens">
            <h1>Transformando sonhos</h1>
            <p>Em realidade</p>
            <div className="buttonlocation">
              <GoLocation />
              <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/fZZAzETd9HW9gMms9">Localização</a>
            </div>
          </article>
        </aside>
      </main>
      <Adds />
      <Procedures />
    </>
  );
}
