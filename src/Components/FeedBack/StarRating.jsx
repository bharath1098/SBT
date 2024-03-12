import styles from "./feedBackpage.module.css";

const StarRating = ({ value }) => {
  // Define styles for filled and empty stars
  const filledStarStyle = {
    color: "gold", // Change this color as desired for filled stars
  };

  const emptyStarStyle = {
    color: "lightgrey", // Change this color as desired for empty stars
  };

  // Function to render a single star
  const renderStar = (index) => {
    if (index <= value) {
      return (
        <span key={index} className={`${styles.star}`} style={filledStarStyle}>
          ★
        </span>
      );
    } else {
      return (
        <span key={index} className={`${styles.star}`} style={emptyStarStyle}>
          ★
        </span>
      );
    }
  };

  // Render the component
  return (
    <div className={`${styles.star_rating}`}>
      {[...Array(5).keys()].map((index) => renderStar(index + 1))}
    </div>
  );
};

export default StarRating;
