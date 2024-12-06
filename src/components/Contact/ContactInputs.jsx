import React from "react";
import {
  DefaultBtn,
  DefaultInput,
  DefaultTextArea,
} from "../components.styles";

function ContactInputs() {
  return (
    <div className="contact__inputs" data-aos="fade-left">
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Ad" type="text" />
        <DefaultInput placeholder="E-mail" type="text" />
      </div>
      <div className="contact__inputs-row">
        <DefaultInput placeholder="Nömrə" type="number" />
        <DefaultInput placeholder="Mövzu" type="subject" />
      </div>
      <DefaultTextArea placeholder="Təsvir" />
      <DefaultBtn>Göndər</DefaultBtn>
    </div>
  );
}

export default ContactInputs;
