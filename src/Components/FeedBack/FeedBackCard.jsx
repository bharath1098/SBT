import PropTypes from "prop-types";
import StarRating from "./StarRating";
import styles from "./feedBackpage.module.css";

function FeedBackCard({ data }) {
  return (
    <div className={`${styles.feedbackCard}`}>
      {/* <div className={`${styles.imageContainer}`}>
        <img src={data.imageUrl} alt="Image" />
      </div> */}
      <div className={`${styles.contentContainer}`}>
        <div className={`${styles.topContent}`}>
          <p>{data.name}</p>{" "}
          <div className={`${styles.starContainer}`}>
            <p>{data.Rating}</p> <StarRating value={data.Rating} />{" "}
          </div>
        </div>

        <div className={`${styles.middleContent}`}>
          <p>{data.review}</p>
        </div>

        <div className={`${styles.bottomContent}`}>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedBackCard;

FeedBackCard.propTypes = {
  data: PropTypes.object,
};
