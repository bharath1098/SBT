import React from "react";
import styles from "./selectedMaterial.module.css";
export function BrandCard({ data }) {
  return (
    <div className={`${styles.brandCard}`}>
      <div className={`${styles.imageContainer}`}>
        <img src={data.imageUrl} alt="cement Logo" />
      </div>
      <p>{data.name}</p>
    </div>
  );
}
