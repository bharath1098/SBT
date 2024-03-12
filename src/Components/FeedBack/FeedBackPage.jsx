import { useState } from "react";
import "./ratingComponent.css"; // Import CSS file for styling
import RatingContainer from "./RatingContainer";
import FeedBackCard from "./FeedBackCard";
import Styles from "./feedBackpage.module.css";
import { Feedback } from "../../data";

function FeedBackPage() {
  const [value, setValue] = useState(Feedback);

  console.log(value);

  return (
    <div className={Styles.mainContainer}>
      <RatingContainer
        value={value}
        setfunction={(array) => {
          return setValue(array);
        }}
      />

      <CardContainer value={value} />
    </div>
  );
}

export default FeedBackPage;

const CardContainer = ({ value }) => {
  return (
    <div className={Styles.feedBackContainer}>
      {value.map((data, index) => (
        <FeedBackCard data={data} key={index} />
      ))}
    </div>
  );
};
