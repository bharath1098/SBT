import PropTypes from "prop-types";
import MaterialCard from "./MaterialCard";
import styles from "./materialDisplay.module.css";

function MaterialDisplay({ info, name }) {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.name}`}>{name}</div>
      <div className={`${styles.items}`}>
        {" "}
        {info.map((item, index) => (
          <MaterialCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default MaterialDisplay;

MaterialDisplay.propTypes = {
  info: PropTypes.array,
  name: PropTypes.string,
};
