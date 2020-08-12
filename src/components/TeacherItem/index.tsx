import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars3.githubusercontent.com/u/15950775?s=400&u=565cd71ffc65afc8e83fb190214159756c7d8561&v=4"
        alt="Rafael"
      />
      <div>
        <strong>Rafael Azevedo</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das
      pessoas através de experiências. Mais de 200.000 pessoas já passaram por
      uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora <strong>R$ 100,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
