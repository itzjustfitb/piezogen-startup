import React from "react";
import ContactInfo from "./ContactInfo";
import ContactInputs from "./ContactInputs";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__container">
        <div className="contact__top" data-aos="fade-up">
          <h3>Əlaqə</h3>
          <h1>Sualiniz var? Bizimlə əlaqə saxlayın</h1>
        </div>
        <div className="contact__bottom">
          <ContactInfo />
          <ContactInputs />
        </div>
      </div>
    </section>
  );
}

export default Contact;
