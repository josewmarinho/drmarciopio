import React from 'react';
import styled from 'styled-components';

import TempoImg from '../../images/Tempo.svg';
import PacientesImg from '../../images/Pacientes.svg';
import CirurgiasImg from '../../images/Cirurgias.svg';

export default function Adds() {

  return (
    <Container>
      <Wrapper>
        <img src={CirurgiasImg} alt="" />
        <h1>+1.000 procedimentos realizadas</h1>
      </Wrapper>
      <Wrapper>
        <img src={TempoImg} alt="" />
        <h1>+10.000 horas de cirurgias</h1>
      </Wrapper>
      <Wrapper>
        <img src={PacientesImg} alt="" />
        <h1>+1.000  sonhos concretizados</h1>
      </Wrapper>


    </Container>
  );
};

const Container = styled.div`
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   

   @media screen and (min-width: 868px) {
    max-width: 800px;
    margin: 2rem auto;
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
   }

`;

const Wrapper = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 350px;
   margin: 14px;

   img {
      width: 200px;
      height: 150px;
      margin-top: 15px;
   }

   h1 {
      font-size: 2rem;
      margin-top: 15px;
      color: #747474;
      padding: 1rem;
      margin-left: 1.5rem;

   }
`;

