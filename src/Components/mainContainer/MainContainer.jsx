import EmblaCarousel from "./Carousel/EmblaCarousel";
import MaterialDisplay from "./MaterialsDisplay/MaterialDisplay";
import style from "./mainContainer.module.css";
import { materialsData } from "../../data.js";
import SelectedMaterial from "./SelectedMaterial/SelectedMaterial.jsx";

function MainContainer({ search, searchValue }) {
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={`${style.mainContainer}`}>
      {search ? (
        <SelectedMaterial search={search} />
      ) : (
        <>
          <EmblaCarousel slides={slides} searchValue={searchValue} />
          <MaterialDisplay info={materialsData.HotDeal} name={"Hot Deal"} />
          <MaterialDisplay info={materialsData.Cement} name={"Cement"} />
          <MaterialDisplay info={materialsData.Paints} name={"Paints"} />
          <MaterialDisplay info={materialsData.Bricks} name={"Bricks"} />
        </>
      )}
    </div>
  );
}

export default MainContainer;
