import { BrandCard } from "./BrandCard";
import React, { useEffect, useState } from "react";
import styles from "./selectedMaterial.module.css";
import { materialsData, materialBrands } from "../../../data.js";
import SearchCard from "./SearchCard.jsx";

function SelectedMaterial({ search }) {
  // console.log(search);
  const [data, setData] = useState(materialsData.Cement);
  const [brandData, setBrandData] = useState(materialBrands.Cement);

  useEffect(() => {
    // Function to handle setting data based on search
    const setDataBasedOnSearch = () => {
      switch (search) {
        case "cement":
          setData(materialsData.Cement);
          setBrandData(materialBrands.Cement);
          break;
        case "paint":
          setData(materialsData.Paints);
          setBrandData(materialBrands.Paints);
          break;
        case "brick":
          setData(materialsData.Bricks);
          setBrandData(materialBrands.Bricks);
          break;
        case "rod":
          setData(materialsData.Rods);
          setBrandData(materialBrands.Rods);
          break;
        default:
          setData([]);
          break;
      }
    };

    setDataBasedOnSearch();
  }, [search, data, brandData]); // Only re-run the effect if search changes

  // console.log(data);

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.sortContainer}`}>
        {brandData.map((item, index) => {
          return <BrandCard key={index} data={item} />;
        })}
      </div>
      <div className={`${styles.searchresultContainer}`}>
        {data.map((item, index) => {
          return <SearchCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default SelectedMaterial;
