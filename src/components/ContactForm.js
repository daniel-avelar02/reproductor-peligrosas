import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ name, email, message });
    // Limpia el formulario después de enviar
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
