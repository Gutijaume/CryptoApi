import React from "react";
import '../About-elements/styles.css'
import Rrss from "./Rrss";

const profile =
  "https://media-exp1.licdn.com/dms/image/C5603AQEut9HB8zNQQg/profile-displayphoto-shrink_800_800/0/1644437595034?e=1652313600&v=beta&t=Sj5mxTLhhpJkj4uVvRVb94R4wKEg_wdU3L9fD1ixUx4";

export default function AboutElements() {
  return (
    <section className="about-app">
      <div className="about-content">
        <img src={profile} alt="profile" />
        <Rrss />
      </div>
      <div className="about-text">
        <h1>Jaume Solé Purcalla</h1>
        <h2>FRONT END DEVELOPER</h2>
        <ul>
          <li>
            <h3>Empleo</h3>
            <p>
              En los últimos años he trabajado en el mundo de los seguros y las
              finanzas para grandes empresas del sector como AXA, Banco
              Santander y RACC. Mi puesto siempre ha estado relacionado con el
              mundo comercial pero muy ligado a las nuevas tecnologías y a los
              cambios y avances que se producían en el sector.
            </p>
          </li>
          <li>
            <h3>Estudios</h3>
            <p>
              A pesar de licenciarme en Ciencias Políticas y de la
              Administración por la Universidad de Barcelona mis inquietudes
              actuales me han llevado a realizar un Bootcamp de front-end
              developer en Upgrade-Hub. Mis conocimientos en sociología, derecho
              o estadísitca junto con los aprendidos en el Bootcamp (html, css,
              JS, Angular, React...) son una combinación vibrante
            </p>
          </li>
          <li>
            <h3>Descripción</h3>
            <p>
              Me considero una persona curiosa, que siempre se marca nuevos
              retos, una persona que sabe trabajar en equipo y orientada a la
              consecución de objetivos y resultados. Comprometido con el mundo,
              con el entorno y con la comunidad.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}