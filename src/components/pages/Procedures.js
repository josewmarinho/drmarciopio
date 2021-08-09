import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';




import Nose1 from '../../images/nose-1.jpg';
import Nose2 from '../../images/nose-2.jpg';
import Nose3 from '../../images/nose-3.jpg';
import Nose4 from '../../images/nose-4.jpg';
import Nose5 from '../../images/nose-5.jpg';
import Ouvido6 from '../../images/ouvido.jpg';



export default function Procedures() {

  return (
    <Container>
      <ProceduresHeading>Cirurgias e Procedimentos</ProceduresHeading>
      <ProceduresWrapper>
        <ProductCard>
          <img src={Nose1} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Rinoplastia estética estruturada</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src={Nose2} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Rinoplastia aberta e fechada</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src={Nose3} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Septoplastia Extracorpórea</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src={Nose4} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Sinusectomias endonasais</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src={Nose5} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Septoplastia</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
        <ProductCard>
          <img src={Ouvido6} alt="" />
          <ProductInfo>
            <TextWrap>
              <ProductTitle>Otoplastia</ProductTitle>
            </TextWrap>
            <MoreInfo>
              <Link to="/">Saiba mais</Link>
              <AiOutlineDoubleRight />
            </MoreInfo>
          </ProductInfo>
        </ProductCard>
      </ProceduresWrapper> 
    </Container>
  );
};

const Container = styled.div`
   max-width: 1200px;
   display:flex;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding-bottom: 2rem;

`;

const ProceduresHeading = styled.div`
   font-size: clamp(2rem, 5vw, 3rem);
   padding-top: 3rem;
   text-align: center;
   margin-bottom: 3rem;
   font-weight: bold;
   color: #000;
`;

const ProceduresWrapper = styled.div`
   display: grid;
   gap: 0.5rem;
   grid-template-columns: repeat(3, 2fr);
   justify-content: center;

   @media screen and (max-width: 868px) {
      grid-template-columns: 1fr;
   }
   
`;

const ProductCard = styled.div`
   width: 100%;
   position: relative;
   border-radius: 10px;
   transition: 0.2s ease;
   margin: 10px;
   img {
      height: 100%;
      max-width: 100%;
      position: relative;
      border-radius: 10px;
      filter: brightness(70%);
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
         filter: brightness(100%);
      }
      
    }  

    @media screen and (max-width: 868px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
   }
`;

const ProductInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0 2rem;

   @media screen and (max-width: 280px) {
      padding: 0 1rem;
   }
`;

const TextWrap = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   top: 375px;
   color: #FFFF;
   font-size: 3rem;
`;

const ProductTitle = styled.div`
   font-weight: bold;
   font-size: 1.2rem;
   margin-left: 0.5rem;
`;

const MoreInfo = styled.div`
   position: absolute;
   top: 420px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #FFF;
   width: 150px;
   height: 38px;
   background-color: #0BF0FF;
   border-radius: 20px;
   cursor: pointer;
   transition: 0.2s;

   svg {
      font-size: 1rem;
   }
   a {
    margin-left: 5px;
    font-size: 1rem;
    text-decoration: none;
    color: #FFFF;
   }

   &:hover {
    background-color: #48C857;
   }
`;