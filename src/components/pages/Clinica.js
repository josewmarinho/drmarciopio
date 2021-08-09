import React from 'react';

import './clinica.css';

import ImgClinica from '../../images/clinica-dr-marcio-pio-recepcao.jpg';

export default function Clinica() {
  return (
    <>
      <main className="containerClinica">
        <section className="heroClinica">
          <h1>A CLÍNICA</h1>
          <p>Com a liberdade de ser e os constantes avanços da ciência, as pessoas têm investido mais no seu bem- estar. A <strong>tecnologia</strong>, as <strong>pesquisas</strong> e estudos trazem <strong>novas técnicas</strong> para a medicina, colocando a saúde a favor da qualidade de vida e também da autoestima. </p>
          <p>A <strong>Clínica Marcio Pio</strong> traz a excelência das técnicas mais avançadas e a experiência do Dr. Marcio Pio e equipe para realizar procedimentos de <strong>Rinoplastia e Otorrinolaringologia.</strong></p>
        </section>
        <img src={ImgClinica} alt="Dr. Marcio Pio" />
      </main>

    </>
  );
}
