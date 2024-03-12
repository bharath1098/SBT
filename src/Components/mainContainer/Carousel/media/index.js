import media1 from "./ultratech_cement..jpg";
import media2 from "./cementPriceDrop.jpg";
import media3 from "./tataSteel.png";
import media4 from "./Bricks.jpg"
import media5 from "./Rawmaterial.jpg"
import media6 from "./CementAllBrand.jpg"

export const media = [media1, media2, media3,media4, media5, media6];
export const mediaByIndex = index => media[index % media.length];