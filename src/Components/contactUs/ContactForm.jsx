import { useTranslation } from "react-i18next";
function ContactForm() {
  const { t } = useTranslation();

  return (
    <div className="contact-form">
      <form>
        <h3 className="title">{t("contactUs")}</h3>
        <div className="input-container">
          <i className="fa-solid fa-user"></i>

          <input
            type="text"
            name="name"
            className="input"
            placeholder={t("fullName")}
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            className="input"
            placeholder={t("email")}
          />
        </div>
        <div className="input-container">
          <i className="fa-solid fa-message"></i>
          <input
            type="tel"
            name="phone"
            className="input"
            placeholder={t("subject")}
          />
        </div>
        <div className="input-container textarea">
          <i className="fa-solid fa-pen"></i>

          <textarea
            name="message"
            className="input"
            placeholder={t("message")}
          ></textarea>
        </div>
        <input type="submit" value={t("submit")} className="btn" />
      </form>
    </div>
  );
}

export default ContactForm;
