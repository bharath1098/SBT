import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BiMap } from "react-icons/bi";
import { contectInfo } from "../../data";

function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="contact-info">
      <p className="title-info">
        {t("findUs")}
        <a
          href={contectInfo.shop_location_link}
          target="_blank"
          rel="noreferrer"
        >
          <BiMap className="map" />
        </a>
      </p>

      <div className="info">
        <div className="information">
          <p>{t("shopAddress")}</p>
        </div>
        <p className="title-info">{t("emailUs")}</p>
        <div className="information">
          <p>Email :acd@gmail.com</p>
        </div>
        <p className="title-info">{t("callUs")}</p>
        <p className="text">Bharath</p>
        <div className="information">
          <p>
            +91-0000000000
            <br />
            abc@gmail.com
          </p>
        </div>
        <p className="text">kumar</p>
        <div className="information">
          <p>
            +91-0000000000
            <br />
            lmn@gmail.com
          </p>
        </div>
      </div>

      <div className="social-media">
        <p>{t("connectWithus")} :</p>
        <div className="social-icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/barc.iitkgp/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-instagram"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/barciitkgp"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-facebook-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/brandingandrelationscell/"
          >
            <motion.i
              whileHover={{ scale: 1.3 }}
              className="fa fa-linkedin-square"
              style={{ fontSize: "20px", color: "white" }}
            ></motion.i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
