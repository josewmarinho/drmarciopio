import React from 'react';

import './sobre.css';
import ImgMarcioSobre from '../../images/foto-sobre.jpg';

export default function Sobre() {
  return (
    <>
      <main className="containerSobre">
        <section className="heroSobre">

          <div className="text">
            <p>Dr. Marcio Pio é paulista, nascido na cidade de São Paulo, ainda na infância retornou com sua família ao Piauí. Sua dedicação aos estudos e habilidades com trabalhos manuais sempre chamaram a atenção de seus pais e familiares.</p>
            <p>Graduado em Medicina pela Universidade Federal do Piauí – UFPI, teve a vida acadêmica dedicada à cirurgia, em detalhes e formas. A anatomia da face, em especial do nariz, lhe despertava grande interesse. Concentrou, então, seus estudos e especializações nesse segmento, culminando no fato de poder proporcionar saúde e bem-estar às pessoas.</p>
            <p>Posteriormente, concluiu sua Residência Médica em Otorrinolaringologia e Cirurgia Cérvico Facial no Hospital Servidor Público de São Paulo – HSPM, tornando o seu interesse e amor pela Rinoplastia ainda mais evidente. </p>
            <p>O Dr. Marcio Pio foi preceptor na Pontifícia Universidade Católica de São Paulo – PUC- SP,  onde teve a oportunidade de ensinar, orientar e também aprender ainda mais sobre a Otorrinolaringologia.</p>
            <p>Para estar sempre contribuindo para o aprimoramento de técnicas e para a evolução da sua especialidade, Dr Marcio Pio é Membro Titular da Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico Facial – ABORL-CCF e Membro Titular da Academia Brasileira de Cirurgia Plástica da Face – ABCPF.  Na Associação e na Academia, comprova, participa e desenvolve um trabalho voltado a ética e ao respeito a sua profissão.</p>
            <p>Dessa forma, o Dr. Marcio Pio se orgulha em desenvolver um trabalho sério, dedicado à qualidade de vida de muitos pacientes ao longo de quase 20 anos de trabalho, onde a arte em Rinoplastia na Cirurgia Estética e Funcional do Nariz e orelha tem sido sua missão.</p>
          </div>
          <img src={ImgMarcioSobre} alt="Dr. Marcio Pio" />

        </section>
      </main>

    </>
  );
}
