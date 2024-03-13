import PropTypes from "prop-types";
import styles from "./materialCard.module.css";

function MaterialCard({ data }) {
  return (
    <div
      className={`${styles.mainContainer} ${
        !data.inStock ? styles.notAvailable : ""
      } `}
    >
      <div className={`${styles.imageContainer}`}>
        <img src={data.image} alt="materialImage" />
        {!data.inStock ? (
          <img
            src="/images/outofstock1.jpg"
            alt="outofstock"
            className={`${styles.outOfStock}`}
          />
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.detailContainer}`}>
        <p className={`${styles.materialName}`}>{data.materialName}</p>
        <p
          style={data.isSalePrice ? { color: "gray" } : { color: "black" }}
          className={`${styles.mrp}`}
        >
          {" "}
          <span>M.R.P: Rs.{data.materialMrp}</span>{" "}
          <span>{data.materialCount}</span>
        </p>
        {data.isSalePrice ? (
          <p className={`${styles.salePrice}`}>Sale Price:</p>
        ) : (
          ""
        )}
        {data.isSalePrice ? (
          <p className={`${styles.saleValue}`}>
            <span>Rs.{data.materialSalePrice}</span>{" "}
            <span>{data.materialCount}</span>
          </p>
        ) : (
          ""
        )}
        {data.isSalePrice ? (
          <div className={`${styles.discount}`}>
            <p>
              UPTO{" "}
              {(
                100 -
                (data.materialSalePrice / data.materialMrp) * 100
              ).toFixed(2)}
              % OFF
            </p>
          </div>
        ) : (
          ""
        )}
        <p className={`${styles.materialManufacturedby}`}>
          {data.materialManufacturedby}
        </p>
      </div>
    </div>
  );
}

export default MaterialCard;

MaterialCard.propTypes = {
  data: PropTypes.object,
};
