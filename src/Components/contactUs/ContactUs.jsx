import "./Contact.css";
import ContactForm from "./ContactForm";

import ContactInfo from "./ContactInfo";

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
export default ContactUs;
