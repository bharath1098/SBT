import { useState } from "react";
import FeedBackPage from "./FeedBack/FeedBackPage";
import NavBar from "./NavBar/NavBar";
import MainContainer from "./mainContainer/MainContainer";
import ContactUs from "./contactUs/ContactUs";

function SBTMainContainer() {
  const [focus, setFocus] = useState("main");
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavBar
        setfunction={(value) => {
          setFocus(value);
        }}
        searchValue={(value) => {
          setSearch(value);
        }}
      />
      {focus === "main" ? (
        <MainContainer search={search} />
      ) : focus === "feedback" ? (
        <FeedBackPage />
      ) : focus === "contactUs" ? (
        <ContactUs />
      ) : (
        ""
      )}
    </div>
  );
}

export default SBTMainContainer;
