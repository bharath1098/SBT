import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./navBar.module.css";
import { contectInfo } from "../../data";
import omImage from "../../../public/images/om.jpg";
import ShopLogo from "../../../public/images/ShopLogo.png";
import { debounce, throttle } from "lodash";

function NavBar({ setfunction, searchValue }) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  const throttledSearch = debounce((event) => {
    const value = event.target.value;
    searchValue(value.toLowerCase());
  }, 300); // Throttle with a delay of 300 milliseconds

  const mobile = "tel:" + contectInfo.mobile;

  return (
    <div className={`${styles.mainContainer}`}>
      {/* Top Navigation */}
      <div className={`${styles.topNav}`}>
        {/* Left Top Navigation */}
        <div className={`${styles.leftTopnav}`}>
          <div className={`${styles.phoneInfo}`}>
            <div>
              <img src="/svgs/phone.svg" alt="phone" />
            </div>
            <a href={mobile}>{contectInfo.mobile}</a>
          </div>
          <div className={`${styles.phoneInfo}`}>
            <div>
              <img src="/svgs/whatsapp.svg" alt="whatsapp" />
            </div>
            <p>{contectInfo.whatsappNumber}</p>
          </div>
        </div>

        {/* Middle Top Navigation */}
        <div className={`${styles.middleTopNav}`}>
          <div>
            <img src={omImage} alt="" />
          </div>
          <p>{t("godName")}</p>
        </div>

        {/* Right Top Navigation */}
        <div className={`${styles.rightTopnav}`}>
          <div className={`${styles.locationInfo}`}>
            <p>{t("shop_location")}</p>
            <div className={`${styles.locationPopup}`}>
              <p>{t("shopAddress")}</p>
            </div>
          </div>
          <div className={`${styles.locationLink}`}>
            <a href={contectInfo.shop_location_link} target="blank">
              {t("location_link")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={`${styles.bottomNav}`}>
        {/* Left Bottom Navigation */}
        <div className={styles.bottomNavLeftContainerMain}>
          <div
            className={`${styles.leftBottomNav}`}
            onClick={() => {
              setfunction("main");
            }}
          >
            <div>
              <img src={ShopLogo} alt="Logo" />
            </div>
            <p>{t("shopName")}</p>
          </div>
          {/* Middle Bottom Navigation */}
          <div className={`${styles.middleBottomNav}`}>
            <input
              type="text"
              name=""
              id=""
              onChange={throttledSearch}
              // value={searchQuery}
            />
            <div className={`${styles.search}`} onClick={throttledSearch}>
              <img src="/svgs/search.svg" alt="search" />
            </div>
          </div>
        </div>

        {/* Right Bottom Navigation */}
        <div className={`${styles.rightBottomNav}`}>
          <div className={`${styles.bestSeller}`}>
            <p>{t("best_seller")}</p>
          </div>
          <div
            onClick={() => {
              setfunction("contactUs");
            }}
          >
            <p>{t("contact_us")}</p>
          </div>
          <div
            onClick={() => {
              setfunction("feedback");
            }}
          >
            <p>{t("feedbacks")}</p>
          </div>
          <div>
            {" "}
            <button
              onClick={() => changeLanguage(language === "en" ? "hi" : "en")}
              className={`${styles.languageButton}`}
            >
              {language === "en" ? "Hindi" : "English"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
