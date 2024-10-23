import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Sobre Reproductor de Peligrosas</h2>
        <p>
          ¡Te presento el "Reproductor de Peligrosas", el reproductor de música
          más dramático del universo! Este pequeño sitio parece haber salido
          directamente de una telenovela, y su única misión es romperte el
          corazón a golpe de baladas tristes y canciones de despecho. Con su
          diseño elegante en azul, siempre parece estar de luto por ese amor que
          nunca fue. Desde la primera nota, te transporta a esos momentos en los
          que mirabas por la ventana bajo la lluvia, preguntándote por qué te
          dejaron en visto. ¿Olvidaste reírte hoy? ¡No te preocupes! El
          "Reproductor de Peligrosas" está aquí para recordarte que el amor
          duele... y mucho.
        </p>
        <ContactForm />{" "}
      </div>

      <Footer />
    </div>
  );
};

export default About;
